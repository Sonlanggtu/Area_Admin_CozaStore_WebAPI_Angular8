import { Component, OnInit, TemplateRef, ViewChild  } from '@angular/core';
import {DataService} from '../../core/services/data.service';
import {NotificationService} from '../../core/services/notification.service';
import {MessageConstants} from '../../core/common/message.constants';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css']
})
export class RoleComponent implements OnInit {
  public modalAddEdit: BsModalRef;
  public pageIndex: number = 1;
  public pageSize: number = 20;
  public pageDisplay: number = 10;
  public filter: string = '';
  public TotalRows: number;
  public roles: any[];
  public entity: any;
  constructor(private _dataService: DataService, private _notificationService: NotificationService,
    private modalService: BsModalService) {
      
   }

  ngOnInit() {
    this.loadData();
  }

  loadRoles(id: any){
      this._dataService.get('/api/appRole/detail/' + id)
      .subscribe((response: any)=>{
        this.entity = response;
      })
  }

  delRoles(id:any){
    this._dataService.delete('/api/appRole/delete',id)
    .subscribe((response : any) =>{
      this._notificationService.printSuccessMessage(MessageConstants.DELETED_OK_MSG);
      this.loadData();
    })
  }


  loadData(){
    this._dataService.get('/api/appRole/getlistpaging?page='+this.pageIndex+'&pageSize='
    +this.pageSize+'&filter='+this.filter)
    .subscribe((response: any)=>{
      this.roles = response.Items;
      this.pageIndex = response.PageIndex;
      this.pageSize = response.PageSize;
      this.TotalRows = response.TotalRows;
      console.log(response);
    })
  }

  pageChanged(event: any):void{
    this.pageIndex = event.page;
    this.loadData();
  }

  showAddModal(template: TemplateRef<any>) {
    this.entity = {};
    this.modalAddEdit = this.modalService.show(template);
  }

  showEditModal(id: any,template: TemplateRef<any> ) {
    this.loadRoles(id);
    this.modalAddEdit = this.modalService.show(template);
  }

  showDelModal(id: any){
    this._notificationService.printConfirmationDialog(MessageConstants.CONFIRM_DELETE_MSG,
      () =>this.delRoles(id));
  }


  saveChange(valid: boolean) {
    if (valid) {
      if (this.entity.Id == undefined) {
        this._dataService.post('/api/appRole/add', JSON.stringify(this.entity))
          .subscribe((response: any) => {
            this.loadData();
            this.modalAddEdit.hide();
            this._notificationService.printSuccessMessage(MessageConstants.CREATED_OK_MSG);
          }, error => this._dataService.handleError(error));
      }
      else {
        this._dataService.put('/api/appRole/update', JSON.stringify(this.entity))
          .subscribe((response: any) => {
            this.loadData();
            this.modalAddEdit.hide();
            this._notificationService.printSuccessMessage(MessageConstants.UPDATED_OK_MSG);
          }, error => this._dataService.handleError(error));
      }
    }
  }
}
