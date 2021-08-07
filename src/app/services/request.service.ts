import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  // 'http://www.edwinharmata.pl/api/?rest_route='
  url = 'http://www.edwinharmata.pl/api/?rest_route=';

  constructor(private http: HttpClient) {
  }
  
  public getPosts() {
    return this.http.get(`${this.url}/wp/v2/posts`);
  }

  public getPost(postId:number) {
    return this.http.get(`${this.url}/wp/v2/posts/${postId}`);    
  }

  public getSkills() {
    return this.http.get(`${this.url}/wp/v2/skill`);
  }

  public getProjects() {
    return this.http.get(`${this.url}/wp/v2/project`);
  }

  public getFeaturedImageNumber(featuredMediaId: number) {
    return this.http.get(`${this.url}/wp/v2/media/${featuredMediaId}`)    
  }

  public getFeaturedImage(url: string) {
    return this.http.get(url)
  }
}
