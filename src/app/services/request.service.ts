import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Message } from 'src/app/shared/interfaces';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  
  url = environment.API_URL;

  constructor(private http: HttpClient) {
  }

  public sendMessage(message: Message) {
    let formData = new FormData;
    for (const key in message) {
      if (message.hasOwnProperty(key)) {
        formData.append(key, message[key as keyof Message]);
      }
    }
    const result = this.http.post(`${this.url}/contact-form-7/v1/contact-forms/6/feedback`, formData);
    return result;
  }
  
  public getPosts() {
    return this.http.get(`${this.url}/wp/v2/posts`);
  }

  public getPost(postId:number) {
    return this.http.get(`${this.url}/wp/v2/posts/${postId}`);    
  }

  public getSkills() {
    return this.http.get(`${this.url}/wp/v2/skill&per_page=20`);
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
