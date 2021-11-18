import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommondataService } from '../../service/commondata.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  count:number;
 

  quickdatall: any=[];
  ticketnum:any;
  tickdata: any;
  data: any = [];

  log: string;
  quickdata=new Map();
  constructor(    private router: Router,public sharedata:CommondataService,

    ) {

      this.sharedata.activityLogShare.subscribe((msg: any) => {
        if (msg !== "") {
          console.log(msg)
          for(let i=1;i<=msg.length;i++){
            // var getKeysArray = Object.keys( msg[i]);
          // var getValueArray = Object.values( msg[i]);
          // console.log(getKeysArray)
          // console.log(msg[i-1].get(i))
          
          this.quickdata.set(i,msg[i-1].get(i))
          
console.log(this.quickdata)
  // this.quickdatall.push(quickdata)
  // console.log(this.quickdatall[i-1])
          }
        }
      });
  //  this.sharedata.countdata
  //  console.log(this.sharedata.countdata);
    }
     

  ngOnInit(): void {
    console.log("44",history.state.data)
    

this.count=history.state.data 
this.ticketnum=this.count*4.99
this.tickdata=(this.ticketnum.toFixed(2))

  }
  gototicket(data,i){
    var json={key:data,value:i}
    this.router.navigateByUrl('user-Draw/buynow',{state:{data:json}})
    console.log("66",data,i)
}
clearall(){
  debugger
  this.quickdata.clear();
}
closetick(data){
  debugger
  this.quickdata.delete(data);

}
}