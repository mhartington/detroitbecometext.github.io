import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared/shared.module';
import { TranslocoRootModule } from '@app/transloco/transloco-root.module';
import { BaseLayoutComponent } from './base-layout/base-layout.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { InfoDialogComponent } from './info-dialog/info-dialog.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { LangPickerComponent } from './lang-picker/lang-picker.component';
import { LangPickerToggleComponent } from './lang-picker-toggle/lang-picker-toggle.component';

@NgModule({
    declarations: [
        BaseLayoutComponent,
        FooterComponent,
        HeaderComponent,
        InfoDialogComponent,
        SidenavComponent,
        LangPickerComponent,
        LangPickerToggleComponent,
    ],
    imports: [SharedModule, TranslocoRootModule],
    exports: [FooterComponent, BaseLayoutComponent, LangPickerComponent, LangPickerToggleComponent],
})
export class LayoutModule {}
