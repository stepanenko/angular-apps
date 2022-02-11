import { NgModule } from '@angular/core';
import { NotificationsModule } from './notifications/notifications.module';
import { TabnavModule } from './tabnav/tabnav.module';
import { UnderConstructionModule } from './under-construction/under-construction.module';
import { TableModule } from './table/table.module';

@NgModule({
  imports: [
    NotificationsModule,
    TabnavModule,
    UnderConstructionModule,
    TableModule
  ],
  exports: [
    TabnavModule,
    UnderConstructionModule,
    TableModule
  ]
})

export class CommonComponentsModule { }
