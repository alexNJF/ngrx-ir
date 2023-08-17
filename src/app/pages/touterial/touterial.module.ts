import { NgModule, SecurityContext } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TouterialRoutingModule } from './touterial-routing.module';
import { MarkdownModule } from 'ngx-markdown';
import { TouterialComponent } from './touterial.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TocComponent } from './components/toc/toc.component';
import { FormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

import { MatExpansionModule } from '@angular/material/expansion';
import { MatTooltipModule } from '@angular/material/tooltip';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TopNavigationComponent } from './components/top-navigation/top-navigation.component';
import { SidebarItemComponent } from './components/sidebar-item/sidebar-item.component';

@NgModule({
  declarations: [
    TouterialComponent,
    TocComponent,
    SidebarComponent,
    TopNavigationComponent,
    SidebarItemComponent
  ],
  imports: [
    CommonModule,
    TouterialRoutingModule,

    FormsModule,
    MatButtonModule,
    MatSidenavModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatExpansionModule,
    MatTooltipModule,

    HttpClientModule,
    MarkdownModule.forChild(),
    MarkdownModule.forRoot({
      loader: HttpClient,
      sanitize: SecurityContext.NONE
    }),

  ]
})
export class TouterialModule { }
