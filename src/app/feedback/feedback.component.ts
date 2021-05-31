import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {

  feedbackForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private _snackBar: MatSnackBar) { }

  ngOnInit() {
    this.feedbackForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      mobile: ['', Validators.required],
      feedback: ['', Validators.required]
    });
  }

  get data() { return this.feedbackForm.controls; }

  onSubmit() {
    if (this.feedbackForm.invalid) {
      return;
    } else {
      localStorage.setItem("name", this.data.name.value);
      localStorage.setItem("email", this.data.email.value);
      localStorage.setItem("mobile", this.data.mobile.value);
      localStorage.setItem("feedback", this.data.feedback.value);
      this._snackBar.open('Feedback Successfully', 'Success', {
        duration: 2000,
      });
      this.router.navigate(['/home']);
    }
  }
}

