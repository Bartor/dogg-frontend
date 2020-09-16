import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountComponent } from './account.component';
import { AvatarComponent } from './components/avatar/avatar.component';
import { SharedModule } from '../core/modules/shared.module';
import { DndDirective } from './directives/dnd.directive';
import { ProfileInfoComponent } from './components/profile-info/profile-info.component';
import { EditableFieldComponent } from './components/profile-info/editable-field/editable-field.component';

@NgModule({
  declarations: [AccountComponent, AvatarComponent, DndDirective, ProfileInfoComponent, EditableFieldComponent],
  exports: [AccountComponent],
  imports: [CommonModule, SharedModule],
})
export class AccountModule {}
