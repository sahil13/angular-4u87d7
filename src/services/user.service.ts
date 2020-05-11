import { Injectable, Output, EventEmitter } from "@angular/core";
import { Observable, of } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { catchError } from "rxjs/operators";

@Injectable()
export class UserService {
  constructor(private http: HttpClient) {}
  API_URL = "https://shopnstop.in/api/user.php";
  
  @Output() currentUser: EventEmitter<any> = new EventEmitter();
  getLoggedInUser(loginFormValues) {
    let httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    };
    return this.http.post(this.API_URL, loginFormValues, httpOptions).pipe(
      catchError(this.handleError("saveEvent")) // then handle the error
    );
  }

  setUserName(response) {
    var obj = JSON.stringify(response);
    var obj1 = JSON.parse(obj);
    this.currentUser = obj1[0].username;
    sessionStorage.setItem("username", obj1[0].username);
  }
  getUserName() {
    return sessionStorage.getItem("username");
  }

  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      console.error("error aaya" + JSON.stringify(error));
      return of(result as T);
    };
  }
}
