import { Component, Input, Output, EventEmitter } from '@angular/core';

export interface HasLabel {
  label: string;
}

@Component({
  selector: 'app-tabnav',
  templateUrl: './tabnav.component.html',
  styleUrls: ['./tabnav.component.scss']
})
export class TabnavComponent {

  @Input() labels: HasLabel [];

  @Input() selected: string | null = null;

  @Output() tabnavClick: EventEmitter<string> = new EventEmitter<string>();

  handleTabNavClick (tabnavLabel: string) {
    this.tabnavClick.emit(tabnavLabel);
  }

}
