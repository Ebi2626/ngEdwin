import { Component, OnInit } from '@angular/core';
import { RequestService } from '../../services/request.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  skills: any;
  skillDownloading = false;

  constructor(private service: RequestService) { }
  
  ngOnInit(): void {
    this.skillDownloading = true;
    this.service.getSkills().subscribe(
      (data) => {
        this.skills = data;
        this.skillDownloading = false;
      },
      (err) => {
        console.log(err);
        this.skillDownloading = false;
      },
      () => {
        this.skillDownloading = false;
      }
    )
  }

}
