import { Component, OnInit } from '@angular/core';
import { BookingService } from '../booking.service';
import { Reservation } from './Reservation';
import { BookingData } from '../booking/bookingdata';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  reservationData :  Reservation;
  reservationList : Reservation[];
  bookings : BookingData[];
  book : BookingData;

  constructor(private bookingService : BookingService) {     
  
    this.reservationList = [];
    this.viewData();
    
  }

  ngOnInit(): void {
  }
  showInfo() {

    

  }
  
  viewData() : void {

    this.bookingService.findAllBookings().subscribe(res=>{
      this.bookings = res;      
      for(let i=0;i<this.bookings.length;i++)
      {
        this.reservationData = new Reservation();
        this.reservationData.guestName= this.bookings[i].guestName;
        this.reservationData.suiteType= this.bookings[i].suiteType;
        this.reservationData.suiteNo = this.bookings[i].id; 
        console.log('Guest----------'+this.reservationData.guestName);
        
        this.reservationList.push(this.reservationData);
        console.log("Size--------------"+this.reservationList.length);
        
      }

    }); 

    console.log("Length--------------"+this.reservationList.length);  
        
  }
  onCancel(id : string) : void {
    this.bookingService.removeBooking(id);

  }


}
