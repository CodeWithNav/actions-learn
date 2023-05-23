import {Component, OnInit} from '@angular/core';
import {ImagesService} from "./images.service";
import {query} from "@angular/animations";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  imagesUrl:string[] = [];
  query = "nature";
  constructor(private imageService :ImagesService) {

  }


  ngOnInit(): void {
  this.searchImage();
  }

  searchImage(){
    if(this.query.length == 0) this.query = "nature";
    this.imageService.getImages(this.query).subscribe(
      e=>{
        let list = e["photos"] as [];
        this.imagesUrl = list.map(p=> p["src"]["tiny"]);
      }
    );
  }
}
