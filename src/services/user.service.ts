import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { catchError } from "rxjs/operators";

@Injectable()
export class UserService {
  constructor(private http: HttpClient) {}
  API_URL = "http://shopnstop.in/api/user.php";
  getLoggedInUser() {
    let httpOptions = {
      headers: new HttpHeaders({ "Content-Type": "application/json" })
    };
    return this.http
      .post(this.API_URL + "saverecords.php", event, httpOptions)
      .pipe(
        catchError(this.handleError("saveEvent")) // then handle the error
      );
  }

  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      console.error("error aaya" + JSON.stringify(error));
      return of(result as T);
    };
  }
}
