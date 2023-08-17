import { Component } from '@angular/core';
import { NavigationNode } from '../../models/menu-item.model';
import { MENU } from '../../models/menue';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  menu: NavigationNode[] = MENU;
}
