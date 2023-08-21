import { AfterViewInit, Component, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticlesService } from './services/articles.service';
import { MarkdownService } from 'ngx-markdown';
import { concatMap, mergeMap, tap } from 'rxjs/operators';
@Component({
  selector: 'app-touterial',
  templateUrl: './touterial.component.html',
  styleUrls: ['./touterial.component.scss']
})
export class TouterialComponent {
  reloadToc = '';
  articleSrc?= '/assets/docs/contributing.md'
  markdown: string ='';
  constructor(
    private articlesService: ArticlesService,
    private markdownService: MarkdownService
  ) {

    this.getArticleName()
  }

  getArticleName() {
    // console.log('in function');

    // this.articlesService.articleName$.pipe(
    //   mergeMap(value => this.markdownService.getSource(`/assets/docs/${value.replaceAll('/', '-')}.md`))
    // ).subscribe(res=>{
    //   console.log(res);

    // })
    this.articlesService.articleName$
      .subscribe(
        articleName => {
          // this.articleSrc = `/assets/docs/${articleName.replaceAll('/', '-')}.md`;
          this.markdownService.getSource(`/assets/docs/${articleName.replaceAll('/', '-')}.md`).subscribe(
            {

              next: (v) => { this.markdown = v; console.log(v) },
              error: (e) => console.error(e),
              complete: () => console.info('complete')

            }

          )
        }
      );

  }

  onLoad(event: any) {
    this.reloadToc = this.articleSrc + '';
    console.log('Event: ', event);

  }
  onError(event: any) {
    console.log('نام فایل : ', (event.url as string).split('/').pop());
    this.articleSrc = '/assets/docs/not-found.md'
  }

}
