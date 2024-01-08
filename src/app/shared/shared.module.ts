import {NgModule} from "@angular/core";
import {AlertComponent} from "./alert/alert.component";
import {NzAlertModule} from "ng-zorro-antd/alert";
import {NgIf} from "@angular/common";

@NgModule({
  declarations: [AlertComponent],
  imports: [
    NzAlertModule,
    NgIf
  ],
  exports: [AlertComponent]
})

export class SharedModule {}
