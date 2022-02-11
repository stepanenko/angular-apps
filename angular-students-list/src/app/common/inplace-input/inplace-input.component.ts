import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-inplace-input',
  templateUrl: './inplace-input.component.html',
  styleUrls: ['./inplace-input.component.scss']
})
export class InplaceInputComponent implements OnInit {
  @Input() initialValue = '';
  @Output() inputChange: EventEmitter<string> = new EventEmitter<string>();
  @Input() styles: any = {};

  value: string;
  inputActive = false;
  @Input() validator = inp => true;


  ngOnInit() {
    this.value = this.validator(this.initialValue)
      ? this.initialValue
      : '';
  }

  activateInput() {
    this.inputActive = true;
  }

  submit(text) {
    this.inputActive = false;
    this.setValue(text);
    this.validator(text) && this.inputChange.emit(text);
  }

  inputChangedValue(event) {
    this.validate(event.target);
  }

  setValue(value) {
    this.value = value;
  }

  resetInput(input) {
    input.value = this.value;
  }

  validate(input) {
    this.validator(input.value) ? this.setValue(input.value) : this.resetInput(input);
  }

}
