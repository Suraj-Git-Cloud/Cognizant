import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Template } from '@angular/compiler/src/render3/r3_ast';
import { BookingService } from '../booking.service';
import { BookingData } from './bookingdata';
import { MyrouterService } from '../myrouter.service';


@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  minDate: Date = new Date ("05/11/2020");
  maxDate: Date = new Date ("12/31/2020");
   dateValue: Date = new Date ("dd//mm//yyyy"); 
   dateValue2: Date = new Date ();
   bookingData : BookingData; 
   buttonType : any;


AmountPaybable : BigInteger;
bookingForm = this.fb.group({
  guestName :[''],
  guestID : [''],
  suiteType : [''],
  datepicker : [''],
  datepicker2 : [''],

}); 




onSubmit(buttonType) : void {
console.log('Button type---'+buttonType);

if(buttonType=='Submit') {
 
this.bookingData.guestName = this.bookingForm.controls['guestName'].value;
this.bookingData.guestId = this.bookingForm.controls['guestID'].value;
this.bookingData.suiteType = this.bookingForm.controls['suiteType'].value; 
this.bookingData.checkIn = this.bookingForm.controls['datepicker'].value;
this.bookingData.checkOut = this.bookingForm.controls['datepicker2'].value;
console.log(this.bookingData);
this.bookingService.addBooking(this.bookingData).subscribe(res=>{
 

});

}
else if (buttonType=='View') {
  this.routerService.routeToViewBooking();

}



}

viewBookings() {
  console.log('Heyyyy----------------');
}

  constructor(private fb : FormBuilder, private bookingService : BookingService, private routerService : MyrouterService) {
    
    this.bookingData = new BookingData();
    this.buttonType = 'Submit';

  }

  ngOnInit(): void {
  }


}
