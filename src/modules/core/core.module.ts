import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [],
    imports: [CommonModule, BrowserModule, HttpClientModule],
    exports: [BrowserModule, HttpClientModule],
})
export class CoreModule {}
