import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../account/user';
import { Logininfo } from '../account/logininfo';
import { Postinfo } from '../account/postinfo';
@Injectable({
  providedIn: 'root'
})
export class UserService {
url="http://localhost:8080/"
  constructor(private http: HttpClient) { }
createuser(userInfo:User):Observable<User>{
  return this.http.post<User>(this.url+"api/user/signup",userInfo)

}
userlogin(logininfo:Logininfo):Observable<Logininfo>{
  return this.http.post<Logininfo>(this.url+"api/user/signin",logininfo)
  
}
createpost(postinfo:Postinfo,token:string):Observable<Postinfo>{
  return this.http.post<Postinfo>(this.url+'api/post/incident',postinfo,{
    headers:{
    "Content-Type": "application/json",
     Authorization: `Bearer ${token}`,
}})
}

getpost(token: string):Observable<any>{
  return this.http.get<any>(this.url+'api/post/incidents',{
      headers:{
       Authorization: `Bearer ${token}`,
  }
  })
}
}
