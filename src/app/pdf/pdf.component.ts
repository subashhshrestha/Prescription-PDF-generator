import { Component, OnInit } from '@angular/core';
import * as jspdf from 'jspdf'; 
import html2canvas from 'html2canvas'; 
import {ActivatedRoute,Params} from '@angular/router'
@Component({
  selector: 'app-pdf',
  templateUrl: './pdf.component.html',
  styleUrls: ['./pdf.component.css']
})
export class PdfComponent implements OnInit {
  medicines:any[];
  constructor(private route:ActivatedRoute) {
    
   }

  ngOnInit() {
  this.route.queryParams.subscribe(params=>{
    this.medicines=JSON.parse(params['data']);
    console.log(this.medicines);
  })  
  
  }
  bool:boolean=false;
  
  generatePdf() {
    const div = document.getElementById("html2Pdf");
    const options = {background: "white", height:div.clientHeight, width:div.clientWidth};

    html2canvas(div,{scale:3}).then((canvas) => {
        //Initialize JSPDF
        let doc = new jspdf("p", "mm", "a4");
        //Converting canvas to Image
        let imgData = canvas.toDataURL("image/PNG");
        //Add image Canvas to PDF
        doc.addImage(imgData, 'PNG', 0, 0,211,298);

        // let pdfOutput = doc.output();
        // // using ArrayBuffer will allow you to put image inside PDF
        // let buffer = new ArrayBuffer(pdfOutput.length);
        // let array = new Uint8Array(buffer);
        // for (let i = 0; i < pdfOutput.length; i++) {
        //     array[i] = pdfOutput.charCodeAt(i);
        // }

        //Name of pdf
        const fileName = "example.pdf";

        // Make file
        doc.save(fileName);

    });
}

}
