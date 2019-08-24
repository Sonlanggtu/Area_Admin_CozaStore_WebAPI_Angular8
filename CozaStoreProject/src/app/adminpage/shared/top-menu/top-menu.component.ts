import { Component, OnInit, NgZone } from '@angular/core';
import {LoggedInUser} from '../../core/domain/loggedin.user'
import {AuthenService} from '../../core/services/authen.service';
import {SystemConstants} from '../../core/common/system.constants';
import {UrlConstants} from '../../core/common/url.constants';
import {UtilityService}  from '../../core/services/utility.service';
import {DataService} from '../../core/services/data.service';
import {SignalrService} from '../../core/services/signalr.service';
declare var moment: any;
@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.css']
})
export class TopMenuComponent implements OnInit {
  public user: LoggedInUser;
  public baseFolder: string = SystemConstants.BASE_API;
  public canSendMessage: Boolean;
  public getdate
  public announcements: any[];
  constructor(private _authenService: AuthenService, private _signalRService: SignalrService,
    private _dataService: DataService, private _utilityService: UtilityService,
    private _ngZone: NgZone) {
    // this can subscribe for events  
    this.subscribeToEvents();
    // this can check for conenction exist or not.  
    this.canSendMessage = _signalRService.connectionExists;
  }

  ngOnInit() {
    this.user = this._authenService.getLoggedInUser();
    this.loadAnnouncements();
  }
  private subscribeToEvents(): void {
    var self = this;
    self.announcements = [];

    // if connection exists it can call of method.  
    this._signalRService.connectionEstablished.subscribe(() => {
      this.canSendMessage = true;
    });

    // finally our service method to call when response received from server event and transfer response to some variable to be shwon on the browser.  
    this._signalRService.announcementReceived.subscribe((announcement: any) => {
      this._ngZone.run(() => {
        var datesave = moment(announcement.CreatedDate);
        var datesave2 = moment(datesave).diff(0);
        var getdatenow = moment().valueOf();
        var result = moment(getdatenow).diff(moment(datesave2));
        announcement.CreatedDate = (moment.duration(result).humanize() + ' ago');
      //  announcement.CreatedDate = moment(moment(announcement.CreatedDate).format("YYYYMMDD"), "YYYYMMDD").fromNow();
        self.announcements.push(announcement);
      });
    });
  }

  markAsRead(id: number) {
    var body = { announId: id };
    this._dataService.get('/api/Announcement/markAsRead?announId=' + id.toString()).subscribe((response: any) => {
      if (response) {
        this.loadAnnouncements();
      }
    });
  }

  private loadAnnouncements() {
    this._dataService.get('/api/Announcement/getTopMyAnnouncement').subscribe((response: any) => {
      this.announcements = [];
      for (let item of response) {
        var datesave = moment(item.CreatedDate);
        var datesave2 = moment(datesave).diff(0);
        var getdatenow = moment().valueOf();
        var result = moment(getdatenow).diff(moment(datesave2));
        item.CreatedDate = (moment.duration(result).humanize() + ' ago');
        this.announcements.push(item);
      }
    });
  }

  logout(){
    localStorage.removeItem(SystemConstants.CURRENT_USER);
    this._utilityService.navigate(UrlConstants.LOGIN);
  }

}
