import { Injectable } from '@angular/core';
import { Post } from 'apps/social-network/src/app/core/models/post.model';
import { ApiService } from 'apps/social-network/src/app/core/services/api/api.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private readonly endpoint = '/posts';

  constructor(private http: ApiService) { }

  create(post: Post): Observable<Post> {
    return this.http.post(`${this.endpoint}`, post);
  }

  update(id: string, post: Post): Observable<Post> {
    return this.http.patch(`${this.endpoint}/${id}`, post);
  }

  getAll(): Observable<Post[]> {
    return this.http.get(`${this.endpoint}`);
  }

  getById(id: string): Observable<Post> {
    return this.http.get(`${this.endpoint}/${id}`);
  }

  remove(id: string): Observable<string> {
    return this.http.delete(`${this.endpoint}/${id}`);
  }
}
