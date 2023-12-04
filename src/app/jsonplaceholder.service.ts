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
  putData(id: number, data: any): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/${id}`, data);
  }

  patchData(id: number, data: any): Observable<any> {
    return this.http.patch<any>(`${this.baseUrl}/${id}`, data);
  }

  deleteData(id: number): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/${id}`);
  }
}
