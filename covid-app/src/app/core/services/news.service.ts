import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { News } from '../models/news';


@Injectable({
    providedIn: 'root'
})
export class NewsService {

    apiurl = 'api/news';
    headers = new HttpHeaders().set('Content-Type', 'application/json').set('Accept', 'application/json');
    httpOptions = {
        headers: this.headers
    };

    constructor(private http: HttpClient) { }

    private handleError(error: any) {
        console.error(error);
        return throwError(error);
    }

    fetchNews(): Observable<News[]> {
        return this.http.get<News[]>(this.apiurl).pipe(
            tap(data => console.log(data)),
            catchError(this.handleError)
        );
    }
}
