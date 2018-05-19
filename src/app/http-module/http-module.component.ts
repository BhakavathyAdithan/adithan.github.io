import { BadInput } from './../common/bad-input';
import { AppError } from './../common/app-error';
import { PostService } from './../services/post.service';
import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { NotFoundError } from '../common/not-found-error';

@Component({
  selector: 'http-module',
  templateUrl: './http-module.component.html',
  styleUrls: ['./http-module.component.css']
})
export class HttpModuleComponent implements OnInit {

  posts: any[];

  constructor(private service: PostService) {}

   ngOnInit() {
    this.service.getAll().subscribe(posts => this.posts = posts);
  }

   createPost(input: HTMLInputElement) {
     const post = {title: input.value};
     this.posts.splice(0, 0, post);

     input.value = '';
     this.service.create(post).subscribe(
       newPost => {
        post['id'] = newPost.id;
     }, (error: AppError) => {

        this.posts.splice(0, 1);

      if (error instanceof BadInput) {
        //this.form.setErrors(error.originalError);
      } else { throw error; }
 });
   }

   updatePost(post) {
     this.service.update(post).subscribe(
       updatedPost => {
        console.log(updatedPost);
     });
   }

   deletePost(post) {
    const index = this.posts.indexOf(post);
    this.posts.splice(index, 1);

     this.service.delete(post.id).subscribe(
      null , (error: AppError) => {
          this.posts.splice(index, 0, post);

          if (error instanceof NotFoundError) {
            alert('The post was deleted already and doesnot exist');
          } else { throw error; }

     });
   }


}
