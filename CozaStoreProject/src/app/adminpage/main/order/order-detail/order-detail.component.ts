import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../core/services/data.service';
import { ActivatedRoute, Params } from '@angular/router';
import {SystemConstants} from '../../../core/common/system.constants';
import { NotificationService } from '../../../core/services/notification.service';
import { UtilityService } from '../../../core/services/utility.service';
import { MessageConstants } from '../../../core/common/message.constants';
@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent implements OnInit {

  public orderDetails: any[];
  public entity: any;
  public totalAmount: number;
  public orderId: number;
  public baseFolder : string = SystemConstants.BASE_API;
  constructor(private _dataService: DataService,
    private activatedRoute: ActivatedRoute, private _notificationService: NotificationService,
    private _utilityService: UtilityService) { }


  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.orderId = params['id'];
      this.loadOrder(this.orderId);
      this.loadOrderDetail(this.orderId);
    });

  }
  public loadOrder(id: number) {
    this._dataService.get('/api/order/detail/' + id.toString()).subscribe((response: any) => {
      this.entity = response;
    }, error => this._dataService.handleError(error));
  }

  public loadOrderDetail(id: number) {
    this._dataService.get('/api/order/getalldetails/' + id.toString()).subscribe((response: any[]) => {
      this.orderDetails = response;
      this.totalAmount = 0;
      for(var item of this.orderDetails){
        this.totalAmount = this.totalAmount + (item.Quantity * item.Price);
      }
      console.log(this.totalAmount);
    }, error => this._dataService.handleError(error));
  }

  public exportToExcel() {
    this._dataService.get('/api/order/exportExcel/' + this.orderId.toString()).subscribe((response: any) => {
      console.log(response);
      window.open(this.baseFolder + response.Message);
    }, error => this._dataService.handleError(error));
  }

  public goBack() {
    this._utilityService.navigate('/admin/main/order/index');
  }

  public saveChanges(valid: boolean) {
    if (valid) {
      this.entity.OrderDetails = this.orderDetails;
      this._dataService.post('/api/order/add', JSON.stringify(this.entity)).subscribe((response: any) => {
        this.entity = response;
        this._notificationService.printSuccessMessage(MessageConstants.CREATED_OK_MSG);
      }, error => this._dataService.handleError(error));

    }
  }

  
}
