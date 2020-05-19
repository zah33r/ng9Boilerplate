import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocalDateFormatterPipe } from './pipes/local-date-formatter/local-date-formatter.pipe';
import { LoadingModule } from './components/loading/loading.module';
import { HighlightTextDirective } from './directives/highlight-text/highlight-text.directive';

@NgModule({
    declarations: [LocalDateFormatterPipe, HighlightTextDirective],
    imports: [CommonModule, LoadingModule],
    exports: [LocalDateFormatterPipe, HighlightTextDirective],
})
export class BaseModule {}
