import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {__values} from "tslib";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  static  key = "563492ad6f91700001000001629ad7dfcb0040ceab094eb0fbe23be1";
  static  baseUrl = "https://api.pexels.com/v1/";
  constructor(private http:HttpClient) { }

  getImages(query:string):Observable<any>{
    let headers = new HttpHeaders().set("Authorization",ImagesService.key);
    return this.http.get(
          `${ImagesService.baseUrl}search?query=${query}&per_page=35`,
      {
        headers
      }
    )
  }

}


