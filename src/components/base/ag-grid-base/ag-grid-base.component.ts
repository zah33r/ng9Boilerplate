import { Component, OnInit, Input, EventEmitter, Output, OnChanges } from '@angular/core';
import { GridOptions, GridApi, IGetRowsParams, ExcelExportParams } from 'ag-grid-community';
import { FormControl } from '../../../../node_modules/@angular/forms';
import { GridOverlayComponent } from './ag-grid-components/grid-overlay/grid-overlay.component';
import { FilterModel, SortModel } from './ag-grid.models';

@Component({
    selector: 'app-ag-grid-base',
    templateUrl: './ag-grid-base.component.html',
    styleUrls: ['./ag-grid-base.component.css']
})
export class AgGridBaseComponent implements OnInit, OnChanges {
    frameworkComponents: {};
    @Input()
    rowData: any;
    @Input()
    columnDefs: any;
    @Input()
    gridOptions: GridOptions;
    @Input()
    secondaryGridOptionsParam: any;
    @Input()
    gridParamters: any;
    @Input()
    headerHeight: any;
    @Input()
    agGridRowHeight: number = 37;
    @Input()
    pagination: boolean = false;
    @Input()
    paginationAutoPageSize: boolean = false;
    @Output()
    agGridRowSelected: any = new EventEmitter<any>();
    @Output()
    rowEditComplete: any = new EventEmitter<any>();
    @Output()
    gridReadyComplete: any = new EventEmitter<any>();
    @Output()
    rowDataChanged: any = new EventEmitter<any>();
    @Input()
    rowDeselection: boolean = false;
    @Input()
    enableSorting: boolean = true;
    @Input()
    suppressRowClickSelection: boolean = false;
    @Input()
    enableServerSideFilter: boolean = false;
    @Input()
    enableServerSideSorting: boolean = false;
    @Input()
    pinnedBottomRowData: any;

    gridColumnApi: any;
    gridApi: GridApi;

    components: {};
    @Input()
    rowSelection = 'single'; // single|multiple

    rowBuffer: number;
    @Input()
    rowModelType: string = ''; // normal|infinite
    paginationPageSize: number;
    cacheOverflowSize: number;
    maxConcurrentDatasourceRequests: number;
    infiniteInitialRowCount: number;
    maxBlocksInCache: number;

    @Input()
    editType: string = '';
    @Input()
    updateDashboard: boolean = undefined;

    @Input()
    globalFilter: string = '';
    globalSearchControl = new FormControl();
    @Input()
    showGlobalSearch: boolean = false;
    @Input()
    showExportButton: boolean = false;

    overlayLoadingTemplate: any;
    gridOverlayComponentParams: { loadingMessage: string };

    @Input()
    getContextMenuItems: any = undefined;
    @Input()
    gridParent: any;

    @Output()
    newColumnsLoaded: any = new EventEmitter<any>();
    getRowStyle: any;

    constructor() {
        this.overlayLoadingTemplate = '<span class="ag-overlay-loading-center">Please wait while your data is loading...</span>';
    }

    private initInfiniteScroll() {
        if (this.rowModelType === 'infinite') {
            this.rowBuffer = 0;
            this.paginationPageSize = 100;
            this.cacheOverflowSize = 2;
            this.maxConcurrentDatasourceRequests = 1;
            this.infiniteInitialRowCount = 1;
            this.rowData = undefined;
        }
    }

    ngOnInit() {
        this.frameworkComponents = {
            GridOverlayComponent: GridOverlayComponent
        };
        this.gridOverlayComponentParams = { loadingMessage: 'One moment please...' };
        this.gridOptions = <GridOptions>{
            context: {
                agGridBaseClass: this,
                gridParent: this.gridParent
            },
            // enableFilter: true,
            defaultColDef: {
                // editable: true
                // stopEditingWhenGridLosesFocus=true,
            },
            onRowEditingStopped: this.onRowUpdateComplete,
            onCellMouseOver: this.onCellMouseOver
        };
        this.gridOptions.defaultColDef.sortable = true;
        this.gridOptions.defaultColDef.filter = true;
        this.gridOptions.defaultColDef.resizable = true;
        if (this.secondaryGridOptionsParam) {
            // assign gridOptions to sycn column definitions with another grid
            this.gridOptions = Object.assign(this.secondaryGridOptionsParam, this.gridOptions);
        }
        this.initInfiniteScroll();
        this.getRowStyle = function(params) {
            if (params.node.rowPinned) {
                return { 'font-weight': 'bold' };
            }
        };
    }

    ngOnChanges(changes: any) {
        const agGridRowHeight = changes['agGridRowHeight'];
        const updateDashboard = changes['updateDashboard'];

        if (agGridRowHeight === undefined) {
            this.agGridRowHeight = 37;
        } else {
            if (this.gridOptions) {
                this.gridOptions.rowHeight = agGridRowHeight;
            }
        }

        if (updateDashboard === undefined) {
        } else {
            if (this.gridApi) {
                if (!this.pagination) {
                    this.gridApi.setRowData(this.rowData);
                    this.gridApi.redrawRows();
                }
            }
        }
    }

    onGridReady(params: any) {
        this.gridApi = params.api;
        this.gridColumnApi = params.columnApi;

        if (this.rowModelType === 'normal') {
            if (this.agGridRowHeight === undefined) {
                this.agGridRowHeight = 37;
            } else {
                this.gridOptions.rowHeight = this.agGridRowHeight;
            }
        }

        this.gridReadyComplete.emit({ baseGrid: this, params: params });
    }

    onRowDataChanged(params: any) {
        this.rowDataChanged.emit({ baseGrid: this, params: params });
    }

    onSelectionChanged($event: any) {
        if (this.gridApi.getSelectedRows().length === 0) {
            this.agGridRowSelected.emit('unselected');
            return;
        }
        this.agGridRowSelected.emit(this.gridApi.getSelectedRows());
    }

    selectEditorValueChange($event) {
        console.log('value rec: ' + $event);
    }

    onRowUpdateComplete(event) {
        console.log(event.data);
        event.context.validateSheetContext.rowEditComplete.emit(event.data);
    }

    onCellMouseOver() {}

    onFilterTextBoxChanged($event: any) {
        console.log($event);
        this.gridOptions.api.setQuickFilter(this.globalFilter);
    }

    onGridModelUpdated($event: any) {}

    showOverlay() {
        if (this.gridApi) {
            this.gridApi.showLoadingOverlay();
        }
    }

    hideOverlay() {
        if (this.gridApi) {
            this.gridApi.hideOverlay();
        }
    }

    setFilterSortModel(params_: IGetRowsParams, isArray: boolean = false): any {
        const filterSortModel: { listOfFilters: FilterModel[]; listOfSort: SortModel[] } = { listOfFilters: [], listOfSort: [] };
        const listOfFilters: FilterModel[] = [];
        const listOfSort: SortModel[] = [];
        for (const key in params_.filterModel) {
            if (params_.filterModel) {
                if (params_.filterModel[key].dateFrom) {
                    const _FilterModel: FilterModel = new FilterModel(key, params_.filterModel[key].dateFrom, params_.filterModel[key].type);
                    listOfFilters.push(_FilterModel);
                } else {
                    let filterValue = '';
                    if (params_.filterModel[key].filterTo) {
                        filterValue = params_.filterModel[key].filter + ',' + params_.filterModel[key].filterTo;
                    }

                    if (filterValue === '') {
                        if (isArray) {
                            const _FilterModel: FilterModel = new FilterModel(key, params_.filterModel[key].filter, params_.filterModel[key].type[0]);
                            listOfFilters.push(_FilterModel);
                        } else {
                            const _FilterModel: FilterModel = new FilterModel(key, params_.filterModel[key].filter, params_.filterModel[key].type);
                            listOfFilters.push(_FilterModel);
                        }
                    } else {
                        if (isArray) {
                            const _FilterModel: FilterModel = new FilterModel(key, filterValue, params_.filterModel[key].type[0]);
                            listOfFilters.push(_FilterModel);
                        } else {
                            const _FilterModel: FilterModel = new FilterModel(key, filterValue, params_.filterModel[key].type);
                            listOfFilters.push(_FilterModel);
                        }
                    }
                }
            }
        }
        for (const key in params_.sortModel) {
            if (params_.sortModel) {
                const _SortModel: SortModel = new SortModel(params_.sortModel[key].colId, params_.sortModel[key].sort);
                listOfSort.push(_SortModel);
            }
        }
        try {
            filterSortModel.listOfFilters = listOfFilters;
            filterSortModel.listOfSort = listOfSort;
        } catch (error) {
            console.log(error);
        }
        return filterSortModel;
    }

    onNewColumnsLoaded($event) {
        this.newColumnsLoaded.emit($event);
    }

    onExportClick(includeColumns?: string[], fileName: string = 'Export', sheetName: string = 'Sheet1') {
        const params: ExcelExportParams = {
            skipHeader: false,
            columnGroups: false,
            skipFooters: false,
            skipGroups: false,
            skipPinnedTop: false,
            skipPinnedBottom: false,
            allColumns: false,
            onlySelected: false,
            fileName: fileName + '-' + new Date().toLocaleDateString(),
            sheetName: sheetName,
            exportMode: 'xlsx',
            columnKeys: includeColumns
        };

        this.gridApi.exportDataAsExcel(params);
    }
}
