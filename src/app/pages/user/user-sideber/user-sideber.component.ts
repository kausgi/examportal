import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-user-sideber',
  templateUrl: './user-sideber.component.html',
  styleUrls: ['./user-sideber.component.css']
})
export class UserSideberComponent implements OnInit {
  categories:any;
  constructor(private _category:CategoryService, private _snack:MatSnackBar) { }

  ngOnInit(): void {
    this._category.categories().subscribe(
      (data) => {
        this.categories = data
      },
      (error) => {
        this._snack.open('Something went wrong', '', {
          duration: 3000
        })
      }
    )
  }

}
