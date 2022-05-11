import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import base_url from './helper';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http:HttpClient) { }

  public categories(){
    return this.http.get(`${base_url}/category/`)
  }

  public addCategory(category:any){
    return this.http.post(`${base_url}/category/`, category)
  }

  public deleteCategory(id:any){
    return this.http.delete(`${base_url}/category/${id}`)
  }

  public getCategory(id:any){
    return this.http.get(`${base_url}/category/${id}`)
  }

  public updateCategory(category:any){
    return this.http.put(`${base_url}/category/${category.id}`, category)
  }
}
