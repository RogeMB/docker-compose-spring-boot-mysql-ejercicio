import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Tutorial } from '../components/dto/tutorial.dto';
import { TutorialsReponse } from '../interfaces/tutorials.interface';

@Injectable({
  providedIn: 'root'
})
export class TutorialService {

  constructor(private http: HttpClient) { }


  getTutorials():Observable<TutorialsReponse[]>{
    return this.http.get<TutorialsReponse []>(`${environment.api_base_url}api/tutorials`);
  }

  createTutorial(tutorial: Tutorial):Observable<Tutorial> {
    const headers = { 'content-type': 'application/json'}
    const body=JSON.stringify(tutorial);
    console.log(body)
    return this.http.post<Tutorial>(`${environment.api_base_url}api/tutorials`, body,{'headers':headers});
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }

}
