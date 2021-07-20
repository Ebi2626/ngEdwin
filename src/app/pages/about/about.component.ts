import { Component, OnChanges, OnInit } from '@angular/core';
import { RequestService } from '../../services/request.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit, OnChanges {

  skills: any;

  skillDownloading: boolean = false;

  constructor(private service: RequestService) { }
  
  ngOnChanges(): void {
    console.log('Changed')
    console.log(this.skills);
  }
  ngOnInit(): void {
    this.skillDownloading = true;
    this.service.getSkills().subscribe(
      (data) => {
        this.skills = data;
        this.skillDownloading = false;
      },
      (err) => console.log(err)
    )
  }

}
