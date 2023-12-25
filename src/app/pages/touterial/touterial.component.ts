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
    private activateRoute:ActivatedRoute

  ) {
    this.getArticleBasedOnRoute();
  }

  getArticleBasedOnRoute(){
    this.activateRoute.params.subscribe(param=>{
      this.getArticle(param['slug'])

    })
  }

  getArticle(articleName:string){
    this.articleSrc = `/assets/docs/${articleName}.md`;
  }

  onLoad(event: any) {
    this.reloadToc = this.articleSrc + '';
  }
  onError(event: any) {
    console.log('نام فایل : ',(event.url as string).split('/').pop());
    this.articleSrc = '/assets/docs/not-found.md'
  }

}
