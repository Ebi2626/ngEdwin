import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-post-excerpt',
  templateUrl: './post-excerpt.component.html',
  styleUrls: ['./post-excerpt.component.scss']
})
export class PostExcerptComponent implements OnInit, OnChanges {

  @Input()
  post = {
    id: 0,
    title: '',
      excerpt: '',
      link: '',
      featured_media: 0
    }
  
  dataDownloaded: boolean = false;


  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    this.post.id !== 0 && (this.dataDownloaded = true);
    console.log(this.post)
  }

  ngOnInit(): void {
  }

}
