import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { RequestService } from 'src/app/services/request.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  post$: any;
  dataDownloaded = false;
  
  post = {
    title: '',
    content: '',
    date: '',
    categories: [],
    featured_media: 0
  }

  constructor(
    private route: ActivatedRoute,
    private service: RequestService
  ) {
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')!;

    this.post$ = this.service.getPost(parseInt(id));

    this.post$.subscribe(
      (el: any) => {
        this.post = {
          title: el.title.rendered,
          content: el.content.rendered,
          date: el.date,
          categories: el.categories,
          featured_media: el.featured_media	
        }
        this.dataDownloaded = true;
      },
      (error:any) => console.log(error)
    )
  }
}
