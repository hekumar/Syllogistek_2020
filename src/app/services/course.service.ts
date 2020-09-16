import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private http: HttpClient) { }

  getDocument(doc) {

const param = new HttpParams().set('document', doc );


   return this.http.get('api/courses/assets', {params : param ,responseType :  'blob' as 'json'} );
  }
}
