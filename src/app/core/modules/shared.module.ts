import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TranslateModule } from '@ngx-translate/core';
import { RadioComponent } from '../components/radio/radio.component';
import { SwitchButtonComponent } from '../components/switch-button/switch-button.component';

@NgModule({
  imports: [CommonModule, TranslateModule],
  declarations: [SwitchButtonComponent, RadioComponent],
  exports: [
    TranslateModule,
    FontAwesomeModule,
    SwitchButtonComponent,
    RadioComponent,
  ],
})
export class SharedModule {}
