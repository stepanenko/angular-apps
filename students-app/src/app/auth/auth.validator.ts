import { AbstractControl } from '@angular/forms';

export const passValidator = (control: AbstractControl) => {
  const configPasswordValue = control.value;
  const passControl = control.root.get('password');
  const validate = (passwordValue) => passwordValue === configPasswordValue ? null : { matchPassword: true };

  return passControl ? validate(passControl.value) : null;
}
