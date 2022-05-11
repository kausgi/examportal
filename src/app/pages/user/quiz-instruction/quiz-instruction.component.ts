import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-quiz-instruction',
  templateUrl: './quiz-instruction.component.html',
  styleUrls: ['./quiz-instruction.component.css']
})
export class QuizInstructionComponent implements OnInit {
  id:any
  quiz:any
  constructor(private _rout:ActivatedRoute, private _quiz:QuizService, private _router:Router) { }

  ngOnInit(): void {
    this.id = this._rout.snapshot.params['id']
    this._quiz.getQuiz(this.id).subscribe(
      (data) => {
        //console.log(data)
        this.quiz = data
      },
      (error) => {

      }
    )
  }

  public startQuiz(){
    Swal.fire({
      icon:'info',
  title: 'Are you sure?',
  showDenyButton: true,
  showCancelButton: true,
  confirmButtonText: 'Yes',
  denyButtonText: `No`,
}).then((result) => {
  /* Read more about isConfirmed, isDenied below */
  if (result.isConfirmed) {
    this._router.navigate(['/quiz-start/'+this.quiz.id])
  } else if (result.isDenied) {
    Swal.fire('Changes are not saved', '', 'info')
  }
})
  }

}
