import { Component, ViewChild, Output, EventEmitter, OnInit, Input } from '@angular/core';
import { FileUploader, FileUploaderOptions } from 'ng2-file-upload';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { FileUploadFormModel } from './file-upload-form.model';

@Component({
    selector: 'app-file-upload',
    templateUrl: './file-upload.component.html',
    styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {
    @Output() fileUploadComplete = new EventEmitter<string>();
    @Output() optionSelected = new EventEmitter<void>();
    @Input() showProgress: boolean = false;
    @Input() URL: string;
    @Input() formData: FileUploadFormModel[];
    uploadStatus: string = '';
    uploader: FileUploader;
    hasBaseDropZoneOver: boolean;
    hasAnotherDropZoneOver: boolean;
    response: string;
    options: FileUploaderOptions = { url: this.URL };
    public selectedFileName: string;
    validateDataMsg: string = 'Uploading File. Please wait...';

    constructor(private httpService: HttpClient) {
        this.uploader = new FileUploader(this.options);
        this.hasBaseDropZoneOver = false;
        this.hasAnotherDropZoneOver = false;
        this.response = '';
        this.uploader.response.subscribe(res => (this.response = res));
        this.uploader.onBuildItemForm = (fileItem, form) => {};
    }

    ngOnInit(): void {}

    public fileOverBase(e: any): void {
        this.hasBaseDropZoneOver = e;
    }

    public fileOverAnother(e: any): void {
        this.hasAnotherDropZoneOver = e;
    }

    processFiles(): Observable<any> {
        this.uploadStatus = '';
        if (this.uploader.queue && this.uploader.queue.length) {
            return this.uploadFiles();
        }
    }

    removeFile() {
        this.uploader.clearQueue();
    }

    public uploadFiles(): Observable<any> {
        if (this.uploader.queue.length > 0) {
            const input = new FormData();

            this.uploader.queue.forEach(item => {
                input.append('file', item.file.rawFile);
            });
            this.formData.forEach(item => {
                input.append(item.key, item.value);
            });

            const headers = new HttpHeaders({
                'Content-Type': 'application/json; charset=utf-8'
            });
            const options = { headers: headers };

            return this.httpService.post(this.URL, input);
        }
    }
}
