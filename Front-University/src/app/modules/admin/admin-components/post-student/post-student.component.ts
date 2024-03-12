import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminService } from '../../admin-service/admin.service';

@Component({
  selector: 'app-post-student',
  templateUrl: './post-student.component.html',
  styleUrl: './post-student.component.scss'
})
export class PostStudentComponent {

  CLASS: string[] = [
"Play","1st","2nd","3rd","4th","5th","6th","7th","8th","9th","10th",
  ];

  GENDER: string[]=[
    "Hombre", "Mujer"
  ];

  isSpinning: boolean;
  validateForm: FormGroup;

  constructor(
    private service: AdminService,
    private fb: FormBuilder
  ){}

  ngOnInit(): void{
    this.validateForm = this.fb.group({
      email: ['',Validators.required],
      name: ['',Validators.required],
      password: ['',Validators.required],
      checkPassword: ['',Validators.required],
      fatherName: ['',Validators.required],
      motherName: ['',Validators.required],
      studentClass: ['',Validators.required],
      dob: ['',Validators.required],
      address: ['',Validators.required],
      gender: ['',Validators.required]
    })
  }

  postStudent(){
    console.log(this.validateForm.value);
  }

}
