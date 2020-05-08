import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class UserService {
  constructor(private http: HttpClient) {}
  API_URL = "http://shopnstop.in/api/";
  getLoggedInUser() {
    return this.http.get(this.API_URL);
  }
}
