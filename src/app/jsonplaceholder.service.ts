import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpClientModule } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class JSONPlaceholderService {
  private baseUrl = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private http: HttpClient) {}
  getData(): Observable<any> {
    return this.http.get<any>(this.baseUrl);
  }
  getPostById(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}?id=${id}`);
  }
  postData(data: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}`, data);
  }
}
