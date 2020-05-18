import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BookingData } from './booking/bookingdata';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  bookingDataList : BookingData[];



  constructor(private http : HttpClient) { 

    this.bookingDataList =[];
  }

  



  getAllBookings() :Observable<BookingData[]> {

    return this.http.get<BookingData[]>('http://localhost:3000/bookings');

  }

  addBooking(bookingData : BookingData) : Observable<BookingData>  {
   return this.http.post<BookingData>('http://localhost:3000/bookings', bookingData);
  }

  findAllBookings() :Observable<BookingData[]> {

    console.log("Find All ");
    return this.http.get<BookingData[]>('http://localhost:3000/bookings');

  }
  removeBooking(id : string)  : Observable<BookingData> {

    return this.http.delete<BookingData>('http://localhost:3000/bookings'+id);

  }


}
