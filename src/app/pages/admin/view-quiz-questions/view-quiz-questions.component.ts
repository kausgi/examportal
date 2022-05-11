import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-quiz-questions',
  templateUrl: './view-quiz-questions.component.html',
  styleUrls: ['./view-quiz-questions.component.css']
})
export class ViewQuizQuestionsComponent implements OnInit {

  id:any
  title:any
  questions:any = []

  constructor(private _rout:ActivatedRoute, private _question:QuestionService) { }

  ngOnInit(): void {
    this.id = this._rout.snapshot.params['id']
    this.title = this._rout.snapshot.params['title']
    this._question.getQuestionsOfQuiz(this.id).subscribe(
      (data) => {
        this.questions = data
      },
      (error) => {
        Swal.fire('No Questions ')
      }
    )
  }

  public deleteQuestion(id:any){

        Swal.fire({
          showCancelButton:true,
          confirmButtonText:'Delete',
          title:'Are you sure?'
        }).then(
          (result) => {
            if(result.isConfirmed){
              this._question.deleteQuestion(id).subscribe(
                (data) => {
                  Swal.fire('Success', 'Question deleted','success')
                }
              )
              this.questions = this.questions.filter((q:any) => q.id != id)

            }
          }

        )

  }

}
