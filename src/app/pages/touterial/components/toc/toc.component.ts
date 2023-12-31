import { DOCUMENT } from '@angular/common';
import { Component, Inject, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-toc',
  templateUrl: './toc.component.html',
  styleUrls: ['./toc.component.scss']
})
export class TocComponent implements OnInit,OnChanges {
  @Input() reload = '';
  tocList: {
    content: SafeHtml;
    href: string;
    level: string;
    title: string;
  }[] = []

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private domSanitizer: DomSanitizer,
  ) { }
  ngOnChanges(changes: SimpleChanges): void {
    const content = this.document.body.querySelector('markdown');
    this.genToc(content);
  }
  ngOnInit(): void {
    // const content = this.document.body.querySelector('markdown');
    // this.genToc(content);
  }

  genToc(docElement: Element | null, docId = '') {
    // this.resetScrollSpyInfo();

    if (!docElement) {
      this.tocList = [];
      return;
    }
    const headings = this.findTocHeadings(docElement);
    const idMap = new Map<string, number>();
    const tocList = headings.map(heading => ({
      content: this.extractHeadingSafeHtml(heading),
      href: `#${this.getId(heading, idMap)}`,
      level: heading.tagName.toLowerCase(),
      title: (heading.textContent || '').trim(),
    }));
    this.tocList = tocList;

    // this.scrollSpyInfo = this.scrollSpyService.spyOn(headings);
    // this.scrollSpyInfo.active.subscribe(item =>
    //   this.activeItemIndex.next(item && item.index)
    // );
  }

  private findTocHeadings(docElement: Element): HTMLHeadingElement[] {
    const headings = docElement.querySelectorAll('h1,h2,h3');
    const skipNoTocHeadings = (heading: HTMLHeadingElement) =>
      !/(?:no-toc|notoc)/i.test(heading.className);

    return Array.prototype.filter.call(headings, skipNoTocHeadings);
  }

  // This bad boy exists only to strip off the anchor link attached to a heading
  private extractHeadingSafeHtml(heading: HTMLHeadingElement) {
    const div: HTMLDivElement = this.document.createElement('div');
    div.innerHTML = heading.innerHTML;
    const anchorLinks: NodeListOf<HTMLAnchorElement> = div.querySelectorAll(
      'a'
    );
    for (let i = 0; i < anchorLinks.length; i++) {
      const anchorLink = anchorLinks[i];
      if (!anchorLink.classList.contains('header-link')) {
        // this is an anchor that contains actual content that we want to keep
        // move the contents of the anchor into its parent
        const parent = anchorLink.parentNode!;
        while (anchorLink.childNodes.length) {
          parent.insertBefore(anchorLink.childNodes[0], anchorLink);
        }
      }
      // now remove the anchor
      anchorLink.remove();
    }
    // security: the document element which provides this heading content
    // is always authored by the documentation team and is considered to be safe
    return this.domSanitizer.bypassSecurityTrustHtml(div.innerHTML.trim());
  }

  // Extract the id from the heading; create one if necessary
  // Is it possible for a heading to lack an id?
  private getId(h: HTMLHeadingElement, idMap: Map<string, number>) {
    let id = h.id;
    if (id) {
      addToMap(id);
    } else {
      id = (h.textContent || '')
        .trim()
        .toLowerCase()
        .replace(/\W+/g, '-');
      id = addToMap(id);
      h.id = id;
    }
    return id;

    // Map guards against duplicate id creation.
    function addToMap(key: string) {
      const oldCount = idMap.get(key) || 0;
      const count = oldCount + 1;
      idMap.set(key, count);
      return count === 1 ? key : `${key}-${count}`;
    }
  }
}
