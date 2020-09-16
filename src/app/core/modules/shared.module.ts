import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TranslateModule } from '@ngx-translate/core';
import { SwitchButtonComponent } from '../components/switch-button/switch-button.component';

@NgModule({
  declarations: [SwitchButtonComponent],
  exports: [TranslateModule, FontAwesomeModule, SwitchButtonComponent],
})
export class SharedModule {}
