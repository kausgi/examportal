import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-quiz',
  templateUrl: './update-quiz.component.html',
  styleUrls: ['./update-quiz.component.css']
})
export class UpdateQuizComponent implements OnInit {



    color: ThemePalette = 'primary';
  checked = false;
  disabled = false;
  constructor(private _rout:ActivatedRoute, private _quiz:QuizService, private _category:CategoryService) { }
  id = 0
  quiz:any
  categories:any = []
  ngOnInit(): void {
    this.id = this._rout.snapshot.params['id'];
    //alert(this.id)
    this._quiz.getQuiz(this.id).subscribe(
      (data) => {
        this.quiz = data;
        console.log(data)
      },
      (error) => {
        console.log(this.quiz);
      }
    )

    this._category.categories().subscribe(
      (data) => {
        this.categories = data;
      },
      (error) => {
        console.log(error)
      }
    )
  }

  public formSubmit(){
    this._quiz.updateQuiz(this.quiz).subscribe(
      (data) => {
        this.quiz = data
        Swal.fire('Success', 'Quiz updated successfully', 'success');
      },
      (error) => {
        Swal.fire('Error', 'Coudn\'t update category', 'error');
      }
    )
  }

}
