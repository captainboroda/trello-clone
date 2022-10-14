import { FormControl } from "@angular/forms";

export interface LoginFormI {
  username: FormControl<string>;
  password: FormControl<string>;
}
