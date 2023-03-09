import { AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Employee } from '../employee/employee.component'
import { EmployeeService } from '../service/employee.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],

})
export class DashboardComponent implements OnInit {
    @ViewChild('img') img: any;
    @ViewChild('addEmployeeButton') addEmployeeButton: any;
    title = 'EmployeeCRUD';
    formvalue!: "";
    employeeForm: FormGroup;

    employees: Employee[];
    employeesToDisplay: Employee[];
    educationOptions = [
      'Duy Tan',
      'Bach Khoa',
      'Kinh Te',
      'VKU',
    ];


  constructor(
    private fb: FormBuilder,
    private employeeService: EmployeeService,
  ) {
    this.employeeForm = fb.group({});
    this.employees = [];
    this.employeesToDisplay = this.employees;
  }

  ngOnInit(): void {
    this.employeeForm = this.fb.group({
      firstname: this.fb.control(''),
      lastname: this.fb.control(''),
      birthday: this.fb.control(''),
      gender: this.fb.control(''),
      education: this.fb.control(''),
      company: this.fb.control(''),
      jobExperience: this.fb.control(''),
      salary: this.fb.control(''),
      // img: this.fb.control('')
    });

    this.employeeService.getEmployees().subscribe((res) => {
      for (let emp of res) {
        this.employees.unshift(emp);
      }
      this.employeesToDisplay = this.employees;
    });
  }



  addEmployee() {
    let employee: Employee = {
      firstname: this.FirstName.value,
      lastname: this.LastName.value,
      birthdate: this.BirthDay.value,
      gender: this.Gender.value,
      education: this.educationOptions[parseInt(this.Education.value)],
      company: this.Company.value,
      jobExperience: this.JobExperience.value,
      salary: this.Salary.value,
      // img: this.Img.value
    };
    this.employeeService.postEmployee(employee).subscribe((res) => {
      this.employees.unshift(res);
      this.clearForm();
    });
  }

  removeEmployee(event: any) {
    if(confirm("Are you want to remove this employee")){
      this.employees.forEach((val, index) => {
        if (val.id === parseInt(event)) {
          this.employeeService.deleteEmployee(event).subscribe((res) => {
            this.employees.splice(index, 1);
          });
        }
      });
    }
  }
  alerEdit(){

    if(confirm("Close the form that will lose data, won't you?")){
     this.clearForm()
    } else{
      this.addEmployee()
    }
  }
  editEmployee(event: any) {
    this.employees.forEach((val, ind) => {
      if (val.id === event) {
        this.setForm(val);
      }
    });

    this.addEmployeeButton.nativeElement.click();

  }

  setForm(emp: Employee) {
    this.FirstName.setValue(emp.firstname);
    this.LastName.setValue(emp.lastname);
    this.BirthDay.setValue(emp.birthdate);
    this.Gender.setValue(emp.gender);

    let educationIndex = 0;
    this.educationOptions.forEach((val, index) => {
      if (val === emp.education) educationIndex = index;
    });

    this.Education.setValue(educationIndex);
    this.Company.setValue(emp.company);
    this.JobExperience.setValue(emp.jobExperience);
    this.Salary.setValue(emp.salary);
    // this.Img.setValue(emp.img);
  }

  searchEmployees(event: any) {
    let filteredEmployees: Employee[] = [];

    if (event === '') {
      this.employeesToDisplay = this.employees;
    } else {
      filteredEmployees = this.employees.filter((val, index) => {
        let targetKey = val.firstname.toLowerCase() + '' + val.lastname.toLowerCase();
        let searchKey = event.toLowerCase();
        return targetKey.includes(searchKey);
      });
      this.employeesToDisplay = filteredEmployees;
    }
  }

  clearForm() {
    this.FirstName.setValue(this.employees.values),
    this.Img.setValue(this.employees.values),
    this.BirthDay.setValue(this.employees.values),
    this.Gender.setValue(this.employees.values),
    this.Education.setValue(this.employees.values),
    this.Company.setValue(this.employees.values),
    this.JobExperience.setValue(this.employees.values),
    this.Salary.setValue(this.employees.values)
    // this.Img.setValue(this.employees.values)
  }

  public get FirstName(): FormControl {
    return this.employeeForm.get('firstname') as FormControl;
  }
  public get LastName(): FormControl {
    return this.employeeForm.get('lastname') as FormControl;
  }
  public get BirthDay(): FormControl {
    return this.employeeForm.get('birthday') as FormControl;
  }
  public get Gender(): FormControl {
    return this.employeeForm.get('gender') as FormControl;
  }
  public get Education(): FormControl {
    return this.employeeForm.get('education') as FormControl;
  }
  public get Company(): FormControl {
    return this.employeeForm.get('company') as FormControl;
  }
  public get JobExperience(): FormControl {
    return this.employeeForm.get('jobExperience') as FormControl;
  }
  public get Salary(): FormControl {
    return this.employeeForm.get('salary') as FormControl;
  }
  public get Img(): FormControl{
    return this.employeeForm.get('image') as FormControl;
  }

}
