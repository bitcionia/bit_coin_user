import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { EditlistComponent } from '../editlist/editlist.component';
import { ViewlistComponent } from '../viewlist/viewlist.component';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.scss']
})
export class UserlistComponent implements OnInit {

  constructor(
    public dialog: MatDialog,
    private router: Router

  ) { 
    
  }

  ngOnInit(): void {
  }
  addsymbol() {
    const dialogRef = this.dialog.open(ViewlistComponent, {
      width: '600px',
      height: '400px',

      // data: { formtype: 'addStrike', data:this.datadetails,},
    });
    dialogRef.afterClosed().subscribe((result) => {
      // this.getOptionStrike();
    });
  }
  warningAlert() {
    Swal.fire({
      icon: 'warning',
      title: 'Are you sure ?',
      text: 'Your will not be able to recover this imaginary file!',
      showCancelButton: true,
      confirmButtonColor: '#6259ca',
      cancelButtonColor: '#6259ca',
      confirmButtonText: 'Yes, delete it!',
      reverseButtons: true

    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: 'Deleted!',
          text: 'Your imaginary file has been deleted.',
          icon: 'success',
          confirmButtonColor: '#6259ca'
        })
      }
    })
  }

  editsymbol() {
    const dialogRef = this.dialog.open(EditlistComponent, {
      width: '600px',
      height: '600px',
      // data: { formtype: 'addStrike', data:this.datadetails,},
    });
    dialogRef.afterClosed().subscribe((result) => {
      // this.getOptionStrike();
    });
  }
  add(){
    this.router.navigateByUrl('/user/adduser')

  }
  inactive(){
    this.router.navigateByUrl('/user/inactive')

  }
  gotohome() {
    this.router.navigateByUrl('/dashboard/dashboard')
  }
}