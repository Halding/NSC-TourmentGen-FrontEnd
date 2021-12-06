import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TournamentsRoutingModule } from './tournaments-routing.module';
import { ListComponent } from './list/list.component';
import {DetailsComponent} from "./details/details.component";
import {ReactiveFormsModule} from "@angular/forms";
import { DeleteComponent } from './delete/delete.component';
import { UpdateComponent } from './update/update.component';


@NgModule({
  declarations: [
    ListComponent,
    DetailsComponent,
    DeleteComponent,
    UpdateComponent
  ],
  imports: [
    CommonModule,
    TournamentsRoutingModule,
    ReactiveFormsModule,
  ]
})
export class TournamentsModule { }
