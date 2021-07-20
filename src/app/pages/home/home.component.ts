import { Component, OnInit, Injectable } from '@angular/core';
import {RequestService} from '../../services/request.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  isEmpty = true;

  posts = [
    {
      id: 0,
      title: '',
      excerpt: '',
      link: '',
      featured_media: 0
    }
  ];

  constructor(private request: RequestService) { }

  passDataIntoPost = (data: any) => {
    this.posts = data.map((el: { title: { rendered: any; }, id: number, excerpt: { rendered: any; }, link: string, featured_media: number }) => {
      const linkPosition = el.excerpt.rendered.indexOf('<a class="more-link"')
      let fixedExcerpt; // Excerpt without link show-more
      if (linkPosition !== -1) {
        fixedExcerpt = el.excerpt.rendered.toString().substring(0, linkPosition)
      } else {
        fixedExcerpt = el.excerpt.rendered;
      }
      return {
        id: el.id,
        title: el.title.rendered,
        excerpt: fixedExcerpt,
        link: el.link,
        featured_media: el.featured_media
      }
    }
    );
    this.isEmpty = false;
  }

  ngOnInit(): void {
    this.request.getPosts().subscribe(
      (data) => this.passDataIntoPost(data),
      (error) => console.log(error) 
    )
  }

}
