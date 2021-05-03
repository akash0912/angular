import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';  
declare const callMe: any;
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  constructor(
    public activatedRoute: ActivatedRoute  
  ) { }

  ngOnInit(): void {
    callMe();
    this.activatedRoute.params.subscribe(param => {  
      // tslint:disable-next-line: no-string-literal  
        
      });
  }

}
