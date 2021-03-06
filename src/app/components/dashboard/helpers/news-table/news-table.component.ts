import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { Card } from 'src/app/services/news/card.model';
import { HomeNewsCardServiceService } from 'src/app/services/news/home-news-card-service.service';
import { UserService } from 'src/app/services/user/user-service';

@Component({
  selector: 'app-news-table',
  templateUrl: './news-table.component.html',
  styleUrls: ['../tables-style.scss']
})
export class NewsTableComponent implements OnInit {
  search:string='';
  allNews: Observable<Card[]>|any = [];
  load:boolean = true;
  delete:boolean = false;
  deleteId:number|any;
  tokenValue:string|any;
  constructor(private newsSer: HomeNewsCardServiceService , private router: Router , private toastr:ToastrService,private userSer:UserService) { }

  ngOnInit(): void {
    this.tokenValue =  localStorage.getItem("token");
    if(this.tokenValue){
      this.userSer.getSingleUser(this.tokenValue).subscribe(
        (res)=>{
          if(res.roles.includes('Admin')||res.roles.includes('SuperAdmin')){
            this.reloadData();
          }else{
            this.toastr.error('غير مسموح لك بالدخول هنا ');
            this.router.navigate(['']);
          }
        }
      )
     }else{
      this.toastr.error('غير مسموح لك بالدخول هنا ');
      this.router.navigate(['']);
    }
  }

  reloadData(){
    this.newsSer.getAllCards().subscribe(
      (res)=>{
        this.allNews = res.reverse();
        this.load = false;
      },
      (error)=>{
        this.toastr.error('حدث خطأ أثناء تحميل الأخبار');
        this.toastr.info('حاول مرة اخري');
        this.load = false;
      }
    );


  }

  editMyNews(id:number){
    this.router.navigate(['dash/addNews/' , id]);
  }

  /// delete from the table
  deleteMyNews(){

    document.documentElement.scrollTop = 0;
    this.load=true;
    this.newsSer.deleteNews(this.deleteId).subscribe(
      (resp)=>{
      if(resp){
        this.toastr.success('لقد تم مسح الخبر بنجاح');
        this.delete=false;
        this.reloadData();

      }
    },
    (error)=>{
      this.toastr.error('حدث خطأ أثناء مسح الخبر ');
      this.toastr.info('حاول مرة اخري');
      this.load = false;
    }
    );
  }

  goTo(dest:string){
    this.router.navigate([dest]);
  }


  ondelete(id:number){
    this.deleteId = id;
      this.delete = true;
  }
  onCancel(){
      this.delete=false;
  }

}
