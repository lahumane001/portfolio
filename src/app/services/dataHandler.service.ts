import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs";

@Injectable({
    providedIn : 'root'
})

export class DataHandlerService{

    url = 'https://port-folio-63dc7-default-rtdb.asia-southeast1.firebasedatabase.app/userData.json'
    isLoggedIn:boolean = false;

    constructor(private http : HttpClient){}

    loggedIn(){
        this.isLoggedIn =  true;
        localStorage.setItem("login", "this.isLoggedIn")
    }
    loggedOut(){
        this.isLoggedIn = false;
        localStorage.clear();
    }
    checkAuthentication(){
        return new Promise((resolve)=>{
            setTimeout(() => {
                let getLogin = localStorage.getItem("login")
                resolve(this.isLoggedIn || getLogin == 'true' )
            }, 2000);
        })
    }
    postData(res: any) {
        return this.http.post(this.url, res)
      }
     
      getData(){
        return this.http.get(this.url).pipe(map((rawData : any)=>{
            let arr :any[] = [];
            for (let data in rawData){
                arr.push({...rawData[data], id: data})
            }
            return arr;  
        }))
    }
}