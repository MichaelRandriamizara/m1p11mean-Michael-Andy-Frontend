import { Injectable } from '@angular/core';
import {baseUrl} from '../../../configurations/server.config';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {startApiCall} from '../../utils/sweet-alert.utils';


const SERVICE_API = baseUrl('api/services/');

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) {}

    getAll(ignorePhotos: boolean, next: (res: any) => void) {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
            }),
            params: new HttpParams()
        };
        if (ignorePhotos) {
            httpOptions.params = httpOptions.params.set('ignorePhotos', ignorePhotos);
        }
        this.http.get(SERVICE_API, httpOptions).subscribe(res => {
        next(res);
        });
    }

    getRanking(id: string, next: (res: any) => void) {
        this.http.get(baseUrl('api/serviceRatings/') + id).subscribe(res => {
            next(res);
        });
    }

    updateRating(rating: any, next: () => void) {
        console.log(rating);
        this.http.post(baseUrl('api/serviceRatings/'), rating, httpOptions).subscribe(res => {
            next();
        });
    }

    findCurrentOffers(next: (res: any) => void) {
        this.http.get(baseUrl('api/specialServices/currents')).subscribe(res => {
            next(res);
        });
    }

    getService(id: string, next: (res: any) => void) {
      startApiCall(close => {
          this.http.get(SERVICE_API + id).subscribe(res => {
          next(res);
          close();
        });
      });
    }
}
