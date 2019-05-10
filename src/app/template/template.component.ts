import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-templates',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  constructor() { }
  sn=0;
  bool:boolean=false;
  medicines:any[]=[{
    name:"Acetaminophen",
    doses:'5mg',
    times:'3',
    days:'20'
  },
  {
    name:"Amoxicillin",
    doses:'500mg',
    times:'3',
    days:'5'
  },
  {
    name:"Ibuprofen",
    doses:'100mg',
    times:'3',
    days:'3'
  },
  {
    name:"Pantoprazole",
    doses:'5mg',
    times:'2',
    days:'20'
  },]
  ngOnInit() {
  }

}
