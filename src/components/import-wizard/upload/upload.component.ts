import { Component, OnInit, ViewChild, EventEmitter, Output, Input } from '@angular/core';
import { FileUploadComponent } from '../../base/file-upload/file-upload.component';
import { FileUploadFormModel } from '../../base/file-upload/file-upload-form.model';
import { FileInfoModel } from './fileInfo.model';
import { Observable } from 'rxjs';
import { Bordereau } from '../bordereau/bordereau.model';
import { BordereauFileStatus } from '../bordereau/enums/bordereau-file-status.enum';
import { MatChipInputEvent } from '@angular/material/chips';
import { FormControl, Validators } from '@angular/forms';
import { CustomErrorStateMatcher } from '../bordereau/bordereau.component';

@Component({
    selector: 'app-upload',
    templateUrl: './upload.component.html',
    styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
    selectedBordereauType: string;
    bordereauType = [
        {
            viewValue: 'Fully Received',
            value: BordereauFileStatus.FullyReceived
        },
        {
            viewValue: 'Partially Received',
            value: BordereauFileStatus.PartiallyReceived
        }
    ];
    bordereauModel = new Bordereau();
    data: any;
    formData: FileUploadFormModel[];
    @Output() fileUploadComplete = new EventEmitter<FileInfoModel>();
    @ViewChild(FileUploadComponent) FileUploadComponent: FileUploadComponent;
    @Input() uri: string;
    fileInfo: FileInfoModel;
    tirsList: any[] = [];

    visible: boolean = true;
    selectable: boolean = true;
    removable: boolean = true;
    addOnBlur: boolean = true;
    ENTER: number = 13;
    COMMA: number = 44;
    separatorKeysCodes = [];

    fcComments: FormControl;
    matcher = new CustomErrorStateMatcher();

    constructor() {}
    ngOnInit() {
        this.separatorKeysCodes = [this.ENTER, this.COMMA];
        console.log(this.bordereauModel);
        this.bordereauModel.FileStatus = BordereauFileStatus.FullyReceived;
        this.initFormValidators();
    }

    initFormValidators() {
        this.fcComments = new FormControl(this.bordereauModel.Comments, [Validators.required]);
    }

    getErrorMessage(control: FormControl) {
        return control.hasError('required') ? 'You must provide a value' : '';
    }

    isValid(): boolean {
        this.fcComments.markAsDirty();
        const tirsRequired: boolean = this.tirsList.length === 0;
        return !this.fcComments.hasError('required') && !tirsRequired;
    }

    uploadFile() {
        this.FileUploadComponent.processFiles()
            .catch((error: Response | any) => {
                console.error(error.message || error);
                return Observable.throw(error.message || error);
            })
            .subscribe((res: FileInfoModel) => {
                this.FileUploadComponent.uploadStatus = 'File uploaded successfully.';
                this.FileUploadComponent.uploader.clearQueue();
                this.fileInfo = res;
                this.fileUploadComplete.emit(this.fileInfo);
            });
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
}
