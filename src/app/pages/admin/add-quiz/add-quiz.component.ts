import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoryService } from 'src/app/services/category.service';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-quiz',
  templateUrl: './add-quiz.component.html',
  styleUrls: ['./add-quiz.component.css']
})
export class AddQuizComponent implements OnInit {

  quiz = {
      id:'',
    code:'',
    title:'',
   description:' ',
    maxMarks:'',
    numberOfQuestions:'',
   active: false,
   category:{
     id:'',
     title:''
   }
    }

    categories=[{
      id:'',
      title:''
    }

    ]
    color: ThemePalette = 'primary';
  checked = false;
  disabled = false;

  constructor(private snack:MatSnackBar, private categoryServise:CategoryService, private quizService:QuizService) { }

  ngOnInit(): void {
    this.categoryServise.categories().subscribe(
      (data:any) => {
        this.categories = data;
      },
      (error) => {
        Swal.fire('Error', 'Categories not loaded', 'error');
      }
    );
  }

  public formSubmit(){
    if(this.quiz.title.trim() == '' && this.quiz.title == null){
      this.snack.open('Title is required', '',{
        duration:3000,
        verticalPosition: 'top',
        horizontalPosition: 'right'
      });
      return;
    }

      this.quizService.addQuiz(this.quiz).subscribe(
      (data:any) => {
        this.quiz = {
          id:'',
          code:'',
          title:'',
          description:' ',
          maxMarks:'',
          numberOfQuestions:'',
          active: false,
          category: {
              id:'',
              title:'',
          }
        }
        Swal.fire('Success','Quiz added successfully', 'success')
      },
      (error:any) => {
        Swal.fire('Oh snap!','Something went wrong', 'error')
      }
    );



  }

}
