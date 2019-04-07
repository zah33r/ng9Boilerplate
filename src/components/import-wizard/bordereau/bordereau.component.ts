import { Component, OnInit, ViewChild, TemplateRef, ViewContainerRef, OnDestroy, AfterViewInit } from '@angular/core';
import { BordereauService } from './bordereau.service';
import { Bordereau } from './bordereau.model';
import { Observable } from 'rxjs';
import { FileInfoModel } from '../upload/fileInfo.model';
import { BordereauFrequency } from './enums/bordereau-frequency.enum';
import { BordereauType } from './enums/bordereau-type.enum';
import { MatChipInputEvent } from '@angular/material/chips';
import { FormGroup, FormControl, Validators, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { BordereauFileStatus } from './enums/bordereau-file-status.enum';
import { OverlayRef, Overlay } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';

@Component({
    selector: 'app-bordereau',
    templateUrl: './bordereau.component.html',
    styleUrls: ['./bordereau.component.css']
})
export class BordereauComponent implements OnInit, AfterViewInit, OnDestroy {
    @ViewChild(TemplateRef) _dialogTemplate: TemplateRef<any>;
    private _overlayRef: OverlayRef;
    private _portal: TemplatePortal;

    selectedFrequent: string;
    selectedBordereauType: string;
    selectedLOB = '';
    selectedCedingCompany: '';
    tirsList: any[] = [];
    tirsNo = '';

    bordereauType = [{ viewValue: 'Policy', value: BordereauType.Policy }, { viewValue: 'Exposure', value: BordereauType.Exposure }];
    frequency = [
        { viewValue: 'Annual', value: BordereauFrequency.Annual },
        { viewValue: 'Quarterly', value: BordereauFrequency.Quarterly },
        { viewValue: 'Semi-Annual', value: BordereauFrequency.SemiAnnual }
    ];
    lobs = [{ value: undefined, viewValue: 'None' }, { value: 'Test 1', viewValue: 'Test 1' }, { value: 'Test 2', viewValue: 'Test 2' }];
    cedingCompanies = [{ viewValue: 'None' }, { value: 'Test 1', viewValue: 'Test 1' }, { value: 'Test 2', viewValue: 'Test 2' }, { value: 'Test 3', viewValue: 'Test 3' }];

    bordereauModel = new Bordereau();
    fileInfo = new FileInfoModel();

    visible: boolean = true;
    selectable: boolean = true;
    removable: boolean = true;
    addOnBlur: boolean = true;

    ENTER: number = 13;
    COMMA: number = 44;
    separatorKeysCodes = [];

    matcher = new CustomErrorStateMatcher();
    fcName: FormControl;
    fcUnderwriter: FormControl;
    fcLob: FormControl;
    fcCedingCompany: FormControl;
    fcComments: FormControl;

    constructor(private bordereauService: BordereauService, private _overlay: Overlay, private _viewContainerRef: ViewContainerRef) {}

    ngOnInit() {
        this.separatorKeysCodes = [this.ENTER, this.COMMA];
        this.bordereauModel.Frequency = BordereauFrequency.Annual;
        this.bordereauModel.Type = BordereauType.Policy;
        this.bordereauModel.FileStatus = BordereauFileStatus.FullyReceived;

        this.initFormValidators();
    }

    isValid(): boolean {
        this.fcName.markAsDirty();
        this.fcUnderwriter.markAsDirty();
        this.fcLob.markAsDirty();
        this.fcCedingCompany.markAsDirty();
        this.fcComments.markAsDirty();
        return (
            !this.fcName.hasError('required') &&
            !this.fcUnderwriter.hasError('required') &&
            !this.fcLob.hasError('required') &&
            !this.fcCedingCompany.hasError('required') &&
            !this.fcComments.hasError('required')
        );
    }

    initFormValidators() {
        this.fcName = new FormControl(this.bordereauModel.Name, [Validators.required]);
        this.fcUnderwriter = new FormControl(this.bordereauModel.Underwriter, [Validators.required]);
        this.fcLob = new FormControl(this.bordereauModel.LOB, [Validators.required]);
        this.fcCedingCompany = new FormControl(this.bordereauModel.CedingCompany, [Validators.required]);
        this.fcComments = new FormControl(this.bordereauModel.Comments, [Validators.required]);
    }

    getErrorMessage(control: FormControl) {
        return control.hasError('required') ? 'You must provide a value' : '';
    }

    createBordereau(): Observable<Bordereau> {
        return this.bordereauService.create(this.bordereauModel);
    }

    getFields(): Observable<Bordereau> {
        return this.bordereauService.getFields(this.bordereauModel.Id, this.fileInfo, this.bordereauModel.Stage);
    }

    addToTirsList() {
        if (this.tirsNo.trim() !== '') {
            this.tirsList.push(this.tirsNo);
            this.bordereauModel.TreatyNo = this.tirsList.join(',');
            this.tirsNo = '';
        }
    }

    add(event: MatChipInputEvent): void {
        const input = event.input;
        const value = event.value;

        if ((value || '').trim()) {
            this.tirsList.push(value.trim());
        }

        if (input) {
            input.value = '';
        }

        this.bordereauModel.TreatyNo = this.tirsList.join(',');
    }

    remove(treatyNumber: any): void {
        const index = this.tirsList.indexOf(treatyNumber);

        if (index >= 0) {
            this.tirsList.splice(index, 1);
        }
    }

    ngAfterViewInit() {
        this._portal = new TemplatePortal(this._dialogTemplate, this._viewContainerRef);
        this._overlayRef = this._overlay.create({
            positionStrategy: this._overlay
                .position()
                .global()
                .centerHorizontally()
                .centerVertically(),
            hasBackdrop: true
        });
        this._overlayRef.backdropClick().subscribe(() => this._overlayRef.detach());
    }

    ngOnDestroy() {
        this._overlayRef.dispose();
    }

    openDialog() {
        this._overlayRef.attach(this._portal);
    }
}

export class CustomErrorStateMatcher implements ErrorStateMatcher {
    isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
        return !!(control && control.invalid && (control.dirty || control.touched));
    }
}
