import { NgModule, SecurityContext } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TouterialRoutingModule } from './touterial-routing.module';
import { MarkdownModule } from 'ngx-markdown';
import { TouterialComponent } from './touterial.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    TouterialComponent
  ],
  imports: [
    CommonModule,
    TouterialRoutingModule,

    HttpClientModule,
    MarkdownModule.forChild(),
    MarkdownModule.forRoot({
      loader: HttpClient,
      sanitize: SecurityContext.NONE
    }),

  ]
})
export class TouterialModule { }
