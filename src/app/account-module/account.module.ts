import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountComponent } from './account.component';
import { SharedModule } from '../shared/shared.module';
import { ProfileInfoComponent } from './components/profile-info/profile-info.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AccountComponent, ProfileInfoComponent],
  exports: [AccountComponent],
  imports: [CommonModule, SharedModule, FormsModule],
})
export class AccountModule {}
