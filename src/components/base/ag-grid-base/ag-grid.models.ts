export class FilterModel {
    key: string;
    value: string;
    type: string;

    constructor(key: string, value: string, type: string) {
        this.key = key;
        this.value = value;
        this.type = type;
    }
}

export class SortModel {
    key: string;
    sort: string;
    constructor(key: string, value: string) {
        this.key = key;
        this.sort = value;
    }
}

export class FilterSort {
    listOfFilters: FilterModel[] = [];
    listOfSort: SortModel[] = [];
}

export class FilterModelOptions {
    static agNumberFilterOptions: string[] = ['equals', 'notEqual', 'lessThan', 'lessThanOrEqual', 'greaterThan', 'greaterThanOrEqual'];
}
