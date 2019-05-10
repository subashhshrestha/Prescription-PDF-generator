import { Component, OnInit } from '@angular/core';
import {Router, NavigationExtras} from "@angular/router";

@Component({
  selector: 'app-med-in',
  templateUrl: './med-in.component.html',
  styleUrls: ['./med-in.component.css']
})
export class MedInComponent implements OnInit {

  constructor(private router:Router) { }
  uniqueId=1;
  medicine:any[]=[
    {
      id:this.uniqueId,
      name:'',
      doses:'',
      times:'',
      days:'',
      added:false,
    },
  ];
  // xyz=[{"name":'subash'}]

  add(){
    this.medicine[this.medicine.length -1].added=true;
    this.uniqueId++;
    this.medicine.push({
      id:this.uniqueId,
    name:'',
    doses:'',
    times:'',
    days:''})
  }

  show(){
    let nav :NavigationExtras={
      queryParams:{
        "data":JSON.stringify(this.medicine)
      }
    }
    this.router.navigate(['print'],nav)
  }
  remove(item){
    this.medicine=this.medicine.filter(data=>data.id!=item.id);
    ;

  }

  ngOnInit() {
  }

}
