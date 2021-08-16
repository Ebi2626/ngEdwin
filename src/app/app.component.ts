import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  staticRedirections = [
    "about",
    "projects",
    "contact"
  ]

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  
  ngOnInit(): void {
    
    setTimeout(() => {
      this.route.queryParams.subscribe(params => {
        
        // Redirection to static pages
        const redirection = params.redirectUrl;
        if (redirection && this.staticRedirections.find(el => el == redirection)) {
          this.router.navigate([redirection], { relativeTo: this.route });
        }

        // Redirection to posts
        const redirectionToPost = params.redirectToPost;
        const postId = params.postId;
        if (redirectionToPost && postId) {
          this.router.navigate(['posts', postId], { relativeTo: this.route });
        }
      });
    }, 0)
  }
}
