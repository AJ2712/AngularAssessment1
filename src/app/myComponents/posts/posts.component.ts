import { Component, Input } from '@angular/core';
import { post } from '../../post';
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent {
  @Input() post : post;
  constructor(){
    
  }
}
