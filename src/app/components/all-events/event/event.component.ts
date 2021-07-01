import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { EventCardService } from '../../home/home-events-card/event-card.service';
import { Events } from '../../home/home-events-card/event.model';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {

  eventsLength:number | any;
  id:number|any;
  event:Events|any;
  constructor(private eventSer: EventCardService , private route: ActivatedRoute , private router: Router) { }

  ngOnInit(): void {
    this.eventsLength = this.eventSer.getEventsLenght();
    this.route.params.subscribe(
      (p: Params) => {
        this.id = +p['id'];
        this.event = this.eventSer.getEvent(this.id);
      }
    );
  }

  goTo(dest:string){
    document.documentElement.scrollTop = 0;
    this.router.navigate([dest]);
  }
  goToEvent(i: number){
    this.id += i;
    if(this.id < 0 ){
        this.id = this.eventsLength-1;
        console.log(this.id);

    }else if( this.id == this.eventsLength){
      this.id = 0;
      console.log(this.id);

    }
    document.documentElement.scrollTop = 0;
    this.router.navigate(['events/',this.id]);
  }

}