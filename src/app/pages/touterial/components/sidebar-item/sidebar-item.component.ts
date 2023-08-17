import { Component, Input, OnChanges } from '@angular/core';
import { NavigationNode } from '../../models/menu-item.model';

@Component({
  selector: 'app-sidebar-item',
  templateUrl: './sidebar-item.component.html',
  styleUrls: ['./sidebar-item.component.scss']
})
export class SidebarItemComponent {
  @Input() node!: NavigationNode;
}
