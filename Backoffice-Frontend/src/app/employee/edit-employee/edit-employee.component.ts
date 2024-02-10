import {Component, HostListener, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {EmployeeService} from "../../services/employee/employee.service";
import {RoleService} from "../../services/role/role.service";
import {getBase64} from "../../utils/upload-image.util";

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrl: './edit-employee.component.scss'
})
export class EditEmployeeComponent implements OnInit{
  constructor(private router:ActivatedRoute, private employeeService: EmployeeService, private roleService: RoleService, private route: Router) {

  }

  id: string = '';
  form: any = {
    name: null,
    email: null,
    phone: null,
    photo: null,
    role: null
  };

  roles: any = [];

  dragAreaClass: string = "dragarea";
  onFileChange(event: any) {
    let files: FileList = event.target.files;
    this.getFile(files);
  }

  ngOnInit(): void {
    this.id = this.router.snapshot.paramMap.get('id')!;
    this.employeeService.get(this.id, data => {
      this.form = data;
      this.roleService.getAll(data => {
        this.roles = data;
      });
      this.form.role = data.role['_id'];
    });

    this.dragAreaClass = "dragarea";
  }

  onSubmit(): void {
    const { name, email, phone, photo, role } = this.form;
    this.employeeService.update(this.id, {name, email, phone, photo, role}, () => {
      this.route.navigate(['/employe']);
    })
  }

  getFile(files: FileList) {
    if (files.length > 0) {
      if (files[0].type.match(/image\/*/) == null) {
        return;
      }
      getBase64(files[0]).then((base64) => {
        this.form.photo = base64;
      });
    }
  }

  removePhoto() {
    this.form.photo = null;
  }

  @HostListener("dragover", ["$event"]) onDragOver(event: any) {
    this.dragAreaClass = "droparea";
    event.preventDefault();
  }
  @HostListener("dragenter", ["$event"]) onDragEnter(event: any) {
    this.dragAreaClass = "droparea";
    event.preventDefault();
  }
  @HostListener("dragend", ["$event"]) onDragEnd(event: any) {
    this.dragAreaClass = "dragarea";
    event.preventDefault();
  }
  @HostListener("dragleave", ["$event"]) onDragLeave(event: any) {
    this.dragAreaClass = "dragarea";
    event.preventDefault();
  }
  @HostListener("drop", ["$event"]) onDrop(event: any) {
    this.dragAreaClass = "dragarea";
    event.preventDefault();
    event.stopPropagation();
    if (event.dataTransfer.files) {
      let files: FileList = event.dataTransfer.files;
      this.getFile(files);

    }
  }

}
