import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatTableModule } from "@angular/material/table";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatNativeDateModule } from "@angular/material/core";
import { MatRadioModule } from "@angular/material/radio";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatSortModule } from "@angular/material/sort";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatStepperModule } from "@angular/material/stepper";
import { MatIconModule } from "@angular/material/icon";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatTabsModule } from "@angular/material/tabs";
import { MatListModule } from "@angular/material/list";
import { MatDialogModule } from "@angular/material/dialog";
import { MatMenuModule } from "@angular/material/menu";
import { MatAutocompleteModule } from "@angular/material/autocomplete";

const materials = [
  MatButtonModule,
  MatSidenavModule,
  MatToolbarModule,
  MatTableModule,
  MatDatepickerModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatNativeDateModule,
  MatRadioModule,
  MatRadioModule,
  MatPaginatorModule,
  MatSortModule,
  MatStepperModule,
  MatIconModule,
  MatCheckboxModule,
  MatSnackBarModule,
  MatExpansionModule,
  MatProgressBarModule,
  MatTabsModule,
  MatListModule,
  MatDialogModule,
  MatMenuModule,
  MatAutocompleteModule,
];

@NgModule({
  imports: [materials],
  exports: [materials],
})
export class MaterialModule {}
