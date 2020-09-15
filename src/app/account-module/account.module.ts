import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountComponent } from './account.component';
import { AvatarComponent } from './components/avatar/avatar.component';
import { SharedModule } from '../core/modules/shared.module';
import { DndDirective } from './directives/dnd.directive';

@NgModule({
  declarations: [AccountComponent, AvatarComponent, DndDirective],
  exports: [AccountComponent],
  imports: [CommonModule, SharedModule],
})
export class AccountModule {}
