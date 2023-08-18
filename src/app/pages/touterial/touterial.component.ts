import { AfterViewInit, Component, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticlesService } from './services/articles.service';
@Component({
  selector: 'app-touterial',
  templateUrl: './touterial.component.html',
  styleUrls: ['./touterial.component.scss']
})
export class TouterialComponent {
  ali = false;
  reloadToc='';
  articleSrc?= '/assets/docs/not-found.md'
  constructor(
    private articlesService: ArticlesService,

  ) {

    this.getArticleName()
  }

  getArticleName() {
    this.articlesService.articleName$
      .subscribe(articleName => {
        this.articleSrc = `/assets/docs/${articleName.replaceAll('/', '-')}.md`;

      });

  }
  aliClick() {
    this.ali = true
  }
  onLoad(event: any) {
    this.ali = true;
    this.reloadToc=this.articleSrc+'';

  }

}
