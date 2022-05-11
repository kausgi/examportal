import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoryService } from 'src/app/services/category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {

  category = {
    id:'',
    code:'',
    title:'',
    description:''
  }

  constructor(private _category:CategoryService, private snack:MatSnackBar) { }

  ngOnInit(): void {
  }


  formSubmit(){
    if(this.category.title.trim() == '' || this.category.title == null){
      this.snack.open("Title required", '', {
        duration:3000,
         verticalPosition: 'top',
          horizontalPosition: 'right'
      });
      return;
    }else{
      this._category.addCategory(this.category).subscribe(
      (data:any) => {
        Swal.fire('Success','Category added successfully', 'success')
      },
      (error:any) => {
        Swal.fire('Oh snap!','Something went wrong', 'error')
      }
    );
    }
  }
}
