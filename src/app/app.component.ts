import { Component, OnInit } from "@angular/core";
import { PageEvent, MatPaginatorModule } from "@angular/material/paginator";
import { VehicalsService } from "./services/vehicals.service";

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

  cars$: Vehical[] = [];

  today: string = "";

  public pageEvent: PageEvent = new PageEvent();

  constructor(
    // private fb: FormBuilder,
    // private router: Router,
    private _vehicalsService: VehicalsService
  ) {}

  ngOnInit(): void {
    this.today = new Date().toISOString().slice(0, 10);
  }

  ngDestroy(): void {
    this.cars$ = [];
    this.length = 0;
    this.pageIndex = 0;
    this.pageEvent = new PageEvent();
  }

  search() {
    this._vehicalsService.getVehicals(this.filters).subscribe((data) => {
      this.cars$ = data[0];
      this.length = data[1];
    });
  }

  reset() {
    this.filters = {
      make: "",
      model: "",
      minPrice: 0,
      maxPrice: 0,
      startDate: new Date(),
      endDate: new Date(+new Date() + 86400000),
      page: 1,
      limit: 10,
    };
  }

  onPaginateChange(event: PageEvent) {
    this.pageIndex = event.pageIndex;
    this.filters.page = event.pageIndex + 1;
    this.search();
  }
}
