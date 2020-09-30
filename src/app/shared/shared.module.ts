import { ContactMethodComponent } from './components/profile-form/contact-method/contact-method.component';
import { DndDirective } from './directives/dnd.directive';
import { ProfileFormComponent } from './components/profile-form/profile-form.component';
import { AvatarComponent } from './components/avatar/avatar.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TranslateModule } from '@ngx-translate/core';
import { RadioComponent } from './components/radio/radio.component';
import { SwitchButtonComponent } from './components/switch-button/switch-button.component';

@NgModule({
  imports: [CommonModule, FormsModule, TranslateModule, FontAwesomeModule],
  declarations: [
    SwitchButtonComponent,
    RadioComponent,
    AvatarComponent,
    ProfileFormComponent,
    DndDirective,
    ContactMethodComponent,
  ],
  exports: [
    TranslateModule,
    FontAwesomeModule,
    SwitchButtonComponent,
    RadioComponent,
    AvatarComponent,
    ProfileFormComponent,
    DndDirective,
    ContactMethodComponent,
  ],
})
export class SharedModule {}
