import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'social-network-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {

  postForm: FormGroup;

  publicOptions = [
    {
      value: 'all',
      name: 'Todos',
    },
    {
      value: 'friends',
      name: 'Solo mis amigos'
    }
  ];

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.postForm = this.fb.group({
      comment: ['', Validators.required],
      public: ['all', Validators.required],
    })
  }

  sendPost() {
    const post = this.postForm.value;
    console.log(post);
    // TODO: integrate service
  }


}
