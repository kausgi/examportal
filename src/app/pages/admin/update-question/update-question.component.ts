import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-question',
  templateUrl: './update-question.component.html',
  styleUrls: ['./update-question.component.css']
})
export class UpdateQuestionComponent implements OnInit {




  constructor(private _rout:ActivatedRoute, private _question:QuestionService, private _quiz:QuizService) { }
  id:any
  question:any


  ngOnInit(): void {
    this.id = this._rout.snapshot.params['id']
    this._question.getQuestion(this.id).subscribe(
      (data) => {
        this.question = data
      },
      (error) => {
        console.log(error)
      }
    )
  }

  public formSubmit(){
    this._question.updateQuestion(this.question).subscribe(
      (data) => {
        Swal.fire('Sucess', 'Updated successfully', 'success')
      },
      (error) => {
        Swal.fire('Error', 'Error updating data', 'error')
      }
    )
  }

}
