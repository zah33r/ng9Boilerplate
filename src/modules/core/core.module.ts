import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
    declarations: [],
    imports: [BrowserModule, HttpClientModule, BrowserAnimationsModule],
    exports: [BrowserModule, HttpClientModule, BrowserAnimationsModule],
})
export class CoreModule {}
