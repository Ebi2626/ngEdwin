import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { RequestService } from '../../services/request.service';

@Component({
  selector: 'app-featured-image',
  templateUrl: './featured-image.component.html',
  styleUrls: ['./featured-image.component.scss']
})
export class FeaturedImageComponent implements OnInit, OnChanges {

  @Input()
  id: number = 0;

  @Input()
  startDownloading = false;

  dataDownloaded = false;

  src: string = '';
  description: string = '';

  constructor(private service: RequestService) {
   }
  ngOnChanges(changes: SimpleChanges): void {
    this.startDownloading && !this.dataDownloaded && this.getImage()
  }

  getImage = () => {
    this.service.getFeaturedImageNumber(this.id).subscribe(
      (el: any) => {
        this.src = el.guid.rendered;
        this.description = el.alt_text;
        this.dataDownloaded = true;
      },
      (err) => {
        console.log(err)
        this.dataDownloaded = true;
      }
    )
  }

  ngOnInit(): void {
  }

}
