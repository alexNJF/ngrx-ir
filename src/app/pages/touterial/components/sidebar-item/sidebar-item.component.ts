import { Component, Input, OnChanges } from '@angular/core';
import { NavigationNode } from '../../models/menu-item.model';
import { ArticlesService } from '../../services/articles.service';

@Component({
  selector: 'app-sidebar-item',
  templateUrl: './sidebar-item.component.html',
  styleUrls: ['./sidebar-item.component.scss']
})
export class SidebarItemComponent {
  isActive = false;
  @Input() node!: NavigationNode;
  constructor(private articlesService: ArticlesService) {

  }
  loadArticle(path?: string) {
    console.log(path);
    this.articlesService.setArticle(path || '')
    this.isActive = true;
  }
}
