import { Component, OnInit, AfterViewChecked, ElementRef } from '@angular/core';
import {UrlConstants} from '../core/common/url.constants';
import {UtilityService} from '../core/services/utility.service';
import { SystemConstants } from '../core/common/system.constants';
import {AuthenService} from '../core/services/authen.service';
import {LoggedInUser} from '../core/domain/loggedin.user';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit,AfterViewChecked {
  public user: LoggedInUser;
  public baseFolder: string = SystemConstants.BASE_API;
  constructor(private elementRef : ElementRef, private utilityService : UtilityService,
    private authenService :AuthenService ) { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem(SystemConstants.CURRENT_USER));
  }

  logout(){
    localStorage.removeItem(SystemConstants.CURRENT_USER);
    this.utilityService.navigate(UrlConstants.LOGIN);
  }

  ngAfterViewChecked(){
    var s = document.createElement("script");
    s.type = "text/javascript";
    s.src = "../assets/js/custom.js";
    this.elementRef.nativeElement.appendChild(s);  
  }
  
}
