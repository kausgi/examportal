import { LocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-quiz-start',
  templateUrl: './quiz-start.component.html',
  styleUrls: ['./quiz-start.component.css']
})
export class QuizStartComponent implements OnInit {
  id:any
  questions:any
  marksGot:any = 0
  attempted:any = 0
  correctAnswers:any = 0
  submitted:any = false
  timer:any
  constructor(private locst: LocationStrategy, private _rout:ActivatedRoute, private _question:QuestionService) { }

  ngOnInit(): void {

    this.preventBackButton()
    this.id = this._rout.snapshot.params['id']
    this._question.getQuestionsOfQuiz(this.id).subscribe(
      (data) => {
        this.questions = data
        this.timer = this.questions.length*1*60
        this.questions.forEach((q:any) => {
          q['givenAnswer'] = ''
        },
        this.startTimer()

        );
      },
      (error) => {
        console.log(error)
      }
    )
  }



  preventBackButton(){
    history.pushState(null, '', location.href);
    this.locst.onPopState(
      () => {
        history.pushState(null, '', location.href);
      }
    )
  }

  startTimer(){
  let t = window.setInterval(
    () => {
      if(this.timer == 0){
        this.evalQuiz();
        clearInterval(t)
      }else{
        this.timer--
      }
    },1000
  )
}

getFormattedTime(){
  let mm = Math.floor(this.timer / 60)
  let ss = this.timer - mm *  60
  return `${mm} min : ${ss} sec(s)`
}

evalQuiz(){
  this.submitted = true
      this.questions.forEach(
        (e:any) => {
          if(e.givenAnswer == e.answer){
            this.correctAnswers++
             let singleQMarks = (this.questions[0].quiz.maxMarks/this.questions.length | 0)
            this.marksGot += singleQMarks

          }
          if(e.givenAnswer.trim() != ''){
            this.attempted++
          }
        }
      )
}



  submitQuiz(){
     Swal.fire({
      icon:'info',
  title: 'Are you sure?',
  showCancelButton: true,
  confirmButtonText: 'Yes',
}).then(
  (result:any) => {
    if(result.isConfirmed){
      this.evalQuiz()

    }
  }
)



  }

}
