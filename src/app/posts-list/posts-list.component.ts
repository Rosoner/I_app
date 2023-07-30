import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Post } from '../types/post';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {
  postsList: Post[] = [];
  isLoading: boolean = true;

  constructor (private apiService: ApiService) {}

  ngOnInit(): void {
    
    this.apiService.getPosts(5).subscribe({
      next: (themes) => {
      // console.log(themes[0]);
      this.postsList = themes;
      this.isLoading = false;
    },
      error: (err) => {
        this.isLoading = false;
        console.log(`Error: ${err}`);
      },
    });
  }
}
