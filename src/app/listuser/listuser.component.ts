import { Component, OnInit } from '@angular/core';
import { Employee } from 'app/models/employee.model';
import { EmployeeService } from 'app/service/employee.service';
import { Subscriber } from 'rxjs';
@Component({
  selector: 'app-listuser',
  templateUrl: './listuser.component.html',
  styleUrls: ['./listuser.component.scss']
})
export class ListuserComponent implements OnInit {

  employees: any=[]

  constructor( private service: EmployeeService){
  }
  ngOnInit(): void {

    this.employees = this.service.getEmployees().subscribe(
      data => this.employees = data
    )
  }
}
