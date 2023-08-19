import { AfterViewInit, Component, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticlesService } from './services/articles.service';
@Component({
  selector: 'app-touterial',
  templateUrl: './touterial.component.html',
  styleUrls: ['./touterial.component.scss']
})
export class TouterialComponent {
  reloadToc = '';
  articleSrc?= '/assets/docs/contributing.md'
  constructor(
    private articlesService: ArticlesService,

  ) {

    this.getArticleName()
  }

  getArticleName() {
    this.articlesService.articleName$
      .subscribe(
        articleName => {
          this.articleSrc = `/assets/docs/${articleName.replaceAll('/', '-')}.md`;
        }
      );

  }

  onLoad(event: any) {
    this.reloadToc = this.articleSrc + '';

  }
  onError(event: any) {
    this.articleSrc = '/assets/docs/not-found.md'
  }

}
