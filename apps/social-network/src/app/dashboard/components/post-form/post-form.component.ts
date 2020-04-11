import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PublicEnum } from 'apps/social-network/src/app/core/enums/public.enum';
import { PostModel } from 'apps/social-network/src/app/core/models/post.model';

@Component({
  selector: 'social-network-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit, OnChanges {
  @Input() post: PostModel = {};

  @Output() createPost = new EventEmitter<PostModel>();
  @Output() editPost = new EventEmitter<PostModel>();

  postForm: FormGroup;
  isEditForm = false;

  publicOptions = [
    {
      value: PublicEnum.All,
      name: 'Todos',
    },
    {
      value: PublicEnum.Friends,
      name: 'Mis amigos'
    }
  ];

  constructor(private fb: FormBuilder) { }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes &&changes.post && changes.post.currentValue) {
      this.buildForm();
    }
  }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    this.isEditForm = this.post && Object.keys(this.post).length > 0;

    this.postForm = this.fb.group({
      comment: [ this.isEditForm ? this.post.comment : '', Validators.required],
      public: [ this.isEditForm ? this.post.public : 'all', Validators.required],
    })
  }

  sendPost() {
    const post = this.postForm.value;
    console.log(post);
    this.isEditForm ? this.editPost.emit(post) : this.createPost.emit(post);
    this.postForm.reset();
  }




}
