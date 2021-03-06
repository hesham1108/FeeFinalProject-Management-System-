import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/services/user/user-service';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss']
})
export class MyProfileComponent implements OnInit {

  user:any;
  load:boolean = true;

  subjects:any[]=[];
  constructor(
    private userSer:UserService,
    private toastr:ToastrService,
     private router : Router,
    private route:ActivatedRoute
     ) { }

  ngOnInit(): void {
    var token:string|any = localStorage.getItem("token");
    this.userSer.getSingleUser(token).subscribe(
      (res)=>{
        this.user = res
        if(res.roles.includes("Student")){
          this.subjects = res.userData.studentSubjects;
        }else  if(res.roles.includes("Staff")){
          this.subjects = res.userData.staffSubjects;
        }
        console.log(res);
        this.load=false;
      },
      (error)=>{
        this.toastr.error('حدث خطأ أثناء تحميل بيانات الملف الشخصي');
        this.toastr.info('حاول مرة اخري');
        this.router.navigate(['']);
      }
    );
  }

  goTo(dest:string){
    this.router.navigate([dest ],{relativeTo:this.route});
  }
}
