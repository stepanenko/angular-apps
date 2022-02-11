import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TabnavComponent } from './tabnav.component';
import {MatTabsModule} from '@angular/material/tabs';

@NgModule({
  imports: [
    CommonModule,
    MatTabsModule
  ],
  declarations: [ TabnavComponent ],
  exports: [ TabnavComponent ]
})
export class TabnavModule { }
