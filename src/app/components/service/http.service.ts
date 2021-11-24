import { Injectable } from '@angular/core';
import {  EventEmitter, Output } from "@angular/core";
// import { HttpClient, HttpHeaders } from "@angular/common/http";
// import { Observable, Subject } from "rxjs";
import { Router } from "@angular/router";
// import { ToastrService } from "ngx-toastr";
// import { map } from "rxjs/operators";
import * as pako from "pako";
import { ToastrService } from "ngx-toastr";
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class HttpService {
  errorCount:number=0;
  tokenId: any;
  get<T>(arg0: string) {
    throw new Error('Method not implemented.');
  }
  token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxOWQ2MzgxYmQzMDAyNzU2YmU4ODYxMiIsImlhdCI6MTYzNzcwNzAwNCwiZXhwIjoxNjM3NzkzNDA0fQ.ZiozAL5Fx7pxBC36YUYCIydcU_qeRToYpQyb8hthOc4"
//LIVE
baseURL: string = "https://www.bitconia.com/api/v1/";
headers: any = new HttpHeaders({ "Content-Type": "application/json" });
// headers = new HttpHeaders().set("Content-Type", "application/json")
//       .set("Authorization",this.token)
// formheaders: any = new HttpHeaders({ "Content-Type": "multipart/form-data" });
userloginurl: string = "user/auth/login";
  logout: string ="user/auth/logout";
  userOTPUrl: string="user/g2f/auth/get";
  setOTPUrl: string="user/g2f/auth/enable";
  changepassword : string="user/auth/changepassword";
  activityuser : string="user/auth/activity";
  getprofile: string="user/auth/getprofile";
  resetpassword : string="user/auth/resetpassword";
  forgetpassword: string="user/auth/forgotpassword";
  create_user: string="user/user/signup";
  signupathu:string="user/auth/signup/sent/otp"
  googleathu : string="user/auth/g2f/get";
  googlenable : string="user/auth/g2f/enable";
  googleverify: string="user/auth/g2f/verify";
  googledisable : string="user/auth/g2f/disable";
  loginverify: string="user/auth/verify/otp";
  twofactor: string="user/auth/sent/otp";
    constructor(
    public http: HttpClient,
    public router: Router,
    public toastr: ToastrService,

  ) {
    
} 
  errorCallBack(apiResp) {
    if (!apiResp) {
      // this.errorCount++;
      /** spinner ends after 10 seconds */
      if (this.errorCount < 1) {
        // this.toastr.error("Something went wrong..Please try after somtime!")
        this.toastr.error("Please try after somtime!", "", {
          positionClass: "toast-bottom-right",
          closeButton: true,
          timeOut: 5000,
        });
      }
    }
  }
  getSessionToken() {
    this.tokenId = JSON.parse(localStorage.getItem("data"));
    return this.tokenId;
  }
  // getAuthHeaders() {
  //   return this.headers.append(
  //     "Authorization", + this.getSessionToken()
  //   );
  // }
  
  getAuthHeaders() {
    return this.headers.append(
      "Authorization", this.getSessionToken()
    );
  }
userLogin(jsonObj: any): Observable<any> {
  // ////debugger
  return this.http.post(this.baseURL + this.userloginurl, jsonObj, {
    headers: this.headers,
  });
}
logoutSession(jsonObj: any): Observable<any> {
  // ////debugger
  return this.http.post(this.baseURL + this.logout, jsonObj, {
    headers: this.getAuthHeaders(),
  });
}
getUser(): Observable<any> {
  return this.http.get(this.baseURL + this.activityuser, {
    headers: this.getAuthHeaders(),
  });
}
changePassword(jsonObj: any): Observable<any> {
  return this.http.post(this.baseURL + this.changepassword, jsonObj, 
    {
      headers: this.getAuthHeaders(),
    });
}
forgetPassword(jsonObj: any): Observable<any> {
  return this.http.post(this.baseURL + this.forgetpassword, jsonObj, {
    headers: this.getAuthHeaders(),
  });
}
resetPassword(jsonObj: any): Observable<any> {
  return this.http.post(this.baseURL + this.resetpassword, jsonObj, {
    headers: this.getAuthHeaders(),
  });
}
createuser(jsonObj: any): Observable<any> {
  return this.http.post(this.baseURL + this.create_user, jsonObj, {
  });
    // ...
    // this.headers.set(key, base);  });
}
g2fa(): Observable<any> {
  return this.http.get(this.baseURL + this.googleathu, {
    headers: this.getAuthHeaders(),
  });
}
g2faenable(jsonObj: any): Observable<any> {
  return this.http.post(this.baseURL + this.googlenable, jsonObj, {
    headers: this.getAuthHeaders(),
  });
}
g2fverify(jsonObj: any): Observable<any> {
  return this.http.post(this.baseURL + this.googleverify, jsonObj, {
    headers: this.getAuthHeaders(),
  });
}
signupotp(jsonObj: any): Observable<any> {
  return this.http.post(this.baseURL + this.signupathu, jsonObj, {
    headers: this.getAuthHeaders() ,
  });
}
loginotp(jsonObj: any): Observable<any> {
  return this.http.post(this.baseURL + this.loginverify, jsonObj, {
    headers: this.getAuthHeaders(),
  });
}
twofactorotp(jsonObj: any): Observable<any> {
  return this.http.post(this.baseURL + this.twofactor, jsonObj, {
    headers: this.getAuthHeaders(),
  });
}twofactorver(jsonObj: any): Observable<any> {
  return this.http.post(this.baseURL + this.loginverify, jsonObj, {
    headers: this.getAuthHeaders(),
  });
}
}

function existing(key: any, existing: any): HttpHeaders | { [header: string]: string | string[]; } {
    throw new Error('Function not implemented.');
  }
function key(key: any, existing: (key: any, existing: any) => HttpHeaders | { [header: string]: string | string[]; }): HttpHeaders | { [header: string]: string | string[]; } {
  throw new Error('Function not implemented.');
}

