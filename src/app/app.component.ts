import { Component, OnInit } from "@angular/core";
import { PageEvent, MatPaginatorModule } from "@angular/material/paginator";
import { JsonPipe } from "@angular/common";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { FormsModule, Validators } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import * as dayjs from "dayjs";
import { FormBuilder } from "@angular/forms";
import { VehicalsService } from "./services/vehicals.service";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatCardModule } from "@angular/material/card";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  length = 0;
  panelOpenState = true;
  pageIndex = 0;
  filters: Filters = {
    make: "",
    model: "",
    minPrice: 0,
    maxPrice: 0,
    startDate: new Date(),
    endDate: new Date(+new Date() + 86400000),
    page: 1,
    limit: 10,
  };
  makers = ["Toyota", "Honda", "Ford", "Chevrolet", "Nissan", "Audi", "BMW"];
  models = ["Camry", "Accord", "Focus", "Civic", "Sentra", "A4", "M3"];
  selectedMakes: string[] = [];
  cars$: Vehical[] = [];

  today: string = "";

  public pageEvent: PageEvent = new PageEvent();

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private _vehicalsService: VehicalsService
  ) {}

  ngOnInit(): void {
    this.today = new Date().toISOString().slice(0, 10);
  }

  search() {
    this._vehicalsService.getVehicals(this.filters).subscribe((data) => {
      this.cars$ = data[0];
      this.length = data[1];
    });
  }

  onPaginateChange(event: PageEvent) {
    this.pageIndex = event.pageIndex;
    this.filters.page = event.pageIndex + 1;
    this.search();
  }
}
