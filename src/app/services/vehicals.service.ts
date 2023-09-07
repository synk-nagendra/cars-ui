import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { Observable } from "rxjs";
@Injectable({
  providedIn: "root",
})
export class VehicalsService {
  apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) {}

  getVehicals(filters: Filters): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}cars`, {
      headers: {
        "Content-Type": "application/json",
      },
      params: {
        make: filters.make.toString(),
        model: filters.model.toString(),
        minPrice: filters.minPrice.toString(),
        maxPrice: filters.maxPrice.toString(),
        startDate: filters.startDate.toISOString(),
        endDate: filters.endDate.toISOString(),
        page: filters.page.toString(),
        limit: filters.limit.toString(),
      },
    });
  }
}
