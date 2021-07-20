import { Component, OnInit } from '@angular/core';
import { RequestService } from '../../services/request.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projects: any = [];
  
  isDownloading: boolean = false;

  constructor( private service:RequestService) { }

  ngOnInit(): void {

    this.isDownloading = true;


    this.service.getProjects().subscribe(
      (data:any) => {
        this.isDownloading = false;
        this.projects = data.map((project: { project_name: any; project_description: any; project_link_text: any; project_link_url: any; technologies: string; }) => {
          return {
            name: project.project_name,
            description: project.project_description,
            link_text: project.project_link_text,
            link_url: project. project_link_url,
            technologies: project.technologies.split(',')
          }          
        });
      },
      (error) => console.log(error)
    )

  }

}
