import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
    MatButtonModule,
    MatCheckboxModule,
    MatStepperModule,
    MatProgressBarModule,
    MatRadioModule,
    MatDatepickerModule,
    MatSelectModule,
    MatNativeDateModule,
    MatExpansionModule
} from '@angular/material';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTabsModule } from '@angular/material/tabs';
import { MatChipsModule, MAT_CHIPS_DEFAULT_OPTIONS } from '@angular/material/chips';

const ENTER: number = 13;
const COMMA: number = 44;

@NgModule({
    imports: [
        CommonModule,
        BrowserAnimationsModule,
        MatButtonModule,
        MatCheckboxModule,
        MatToolbarModule,
        MatSidenavModule,
        MatIconModule,
        MatDialogModule,
        MatFormFieldModule,
        MatInputModule,
        MatTooltipModule,
        MatAutocompleteModule,
        MatStepperModule,
        ReactiveFormsModule,
        MatProgressBarModule,
        FormsModule,
        MatRadioModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatSelectModule,
        MatGridListModule,
        MatExpansionModule,
        MatTabsModule,
        MatChipsModule
    ],
    exports: [
        MatButtonModule,
        MatCheckboxModule,
        MatToolbarModule,
        MatSidenavModule,
        MatIconModule,
        MatDialogModule,
        MatFormFieldModule,
        MatInputModule,
        MatTooltipModule,
        MatAutocompleteModule,
        MatStepperModule,
        ReactiveFormsModule,
        MatProgressBarModule,
        FormsModule,
        MatRadioModule,
        MatDatepickerModule,
        MatSelectModule,
        MatGridListModule,
        MatExpansionModule,
        MatTabsModule,
        MatChipsModule
    ],
    providers: [
        MatNativeDateModule,
        {
            provide: MAT_CHIPS_DEFAULT_OPTIONS,
            useValue: {
                separatorKeyCodes: [ENTER, COMMA]
            }
        }
    ],
    declarations: []
})
export class AppMaterialModule {}
