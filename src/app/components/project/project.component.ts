import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent {

  @Input()
  project = {
      name: '',
      description: '',
      link_text: '',
      link_url: '',
      technologies: <any>[],
      featured_media: 0
  }

  constructor() { }
}


