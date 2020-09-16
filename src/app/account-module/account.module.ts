import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountComponent } from './account.component';
import { SharedModule } from '../core/modules/shared.module';
import { DndDirective } from './directives/dnd.directive';
import { ProfileInfoComponent } from './components/profile-info/profile-info.component';
import { FormsModule } from '@angular/forms';
import { ProfileFormComponent } from './components/profile-info/profile-form/profile-form.component';
import { AvatarComponent } from './components/profile-info/avatar/avatar.component';

@NgModule({
  declarations: [
    AccountComponent,
    AvatarComponent,
    DndDirective,
    ProfileInfoComponent,
    ProfileFormComponent,
  ],
  exports: [AccountComponent],
  imports: [CommonModule, SharedModule, FormsModule],
})
export class AccountModule {}
