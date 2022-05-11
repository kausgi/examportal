import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {

  id:any
  title:any
  question = {
    content:'',
    option1:'',
    option2:'',
   option3:'',
    option4:'',
    answer:'',
    quiz:{
        id:''
    }
}

  constructor(private _rout:ActivatedRoute, private _question:QuestionService) { }

  ngOnInit(): void {
    this.id = this._rout.snapshot.params['id']
    this.title = this._rout.snapshot.params['title']
    this.question.quiz.id = this.id
  }

  public formSubmit(){
    this._question.addQuestion(this.question).subscribe(
      (data:any) => {
        this.question = data
        Swal.fire('Success','Question Added Successfully','success')
      },
      (error) => {
        Swal.fire('Error', 'Failed', 'error')
      }
    )
  }

}
