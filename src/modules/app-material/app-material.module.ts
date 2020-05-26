import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatStepperModule } from '@angular/material/stepper';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { MatNativeDateModule } from '@angular/material/core';
import { MatExpansionModule } from '@angular/material/expansion';
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
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

const ENTER: number = 13;
const COMMA: number = 44;

@NgModule({
    imports: [
        CommonModule,
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
        MatChipsModule,
        MatProgressSpinnerModule,
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
        MatChipsModule,
        MatProgressSpinnerModule,
    ],
    providers: [
        MatNativeDateModule,
        {
            provide: MAT_CHIPS_DEFAULT_OPTIONS,
            useValue: {
                separatorKeyCodes: [ENTER, COMMA],
            },
        },
    ],
    declarations: [],
})
export class AppMaterialModule {}
