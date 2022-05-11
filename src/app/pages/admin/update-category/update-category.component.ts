import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-category',
  templateUrl: './update-category.component.html',
  styleUrls: ['./update-category.component.css']
})
export class UpdateCategoryComponent implements OnInit {

  constructor(private _rout:ActivatedRoute, private _category:CategoryService) { }
  id = 0
  category:any

  ngOnInit(): void {
    this.id = this._rout.snapshot.params['id']
    this.category = this._category.getCategory(this.id).subscribe(
      (data) => {
        this.category = data
      },
      (error) => {
        console.log(error)
      }
    )
  }

  public formSubmit(){
    this._category.updateCategory(this.category).subscribe(
      (data) => {
        Swal.fire('Success','Updated Successfully', 'success')
      },
      (error) => {
        Swal.fire('Error','Error updating data', 'error')
      }
    )
  }

}
