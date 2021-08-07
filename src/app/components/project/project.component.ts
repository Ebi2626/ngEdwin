import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  @Input()
  project = {
      name: '',
      description: '',
      link_text: '',
      link_url: '',
      technologies: <any>[]
  }

  constructor() { }

  ngOnInit(): void {
  }

}
