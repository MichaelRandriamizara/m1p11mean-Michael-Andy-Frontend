import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TypeDepensePaymentRoutingModule } from './type-depense-payment-routing.module';
import {TypeDepensePaymentComponent} from "./type-depense-payment.component";
import {
  ButtonDirective,
  CardBodyComponent,
  CardComponent,
  CardHeaderComponent,
  FormControlDirective, FormDirective,
  RowComponent, TableDirective
} from "@coreui/angular";
import {FormsModule} from "@angular/forms";
import {MyButtonComponent} from "../my-button/my-button.component";
import {NgxPaginationModule} from "ngx-pagination";
import {AddTypeDepensePaymentComponent} from "./add-type-depense-payment/add-type-depense-payment.component";
import {EditTypeDepensePaymentComponent} from "./edit-type-depense-payment/edit-type-depense-payment.component";
import {DepensePaymentComponent} from "../depense-payment/depense-payment.component";
import {EditDepensePaymentComponent} from "../depense-payment/edit-depense-payment/edit-depense-payment.component";
import {AddDepensePaymentComponent} from "../depense-payment/add-depense-payment/add-depense-payment.component";


@NgModule({
  declarations: [TypeDepensePaymentComponent,AddTypeDepensePaymentComponent,EditTypeDepensePaymentComponent,DepensePaymentComponent,EditDepensePaymentComponent,AddDepensePaymentComponent],
  imports: [
    CommonModule,
    TypeDepensePaymentRoutingModule,
    CardBodyComponent,
    CardComponent,
    CardHeaderComponent,
    FormControlDirective,
    FormsModule,
    MyButtonComponent,
    NgxPaginationModule,
    RowComponent,
    TableDirective,
    ButtonDirective,
    FormDirective
  ]
})
export class TypeDepensePaymentModule { }
