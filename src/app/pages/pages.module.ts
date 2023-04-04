import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatBadgeModule } from "@angular/material/badge";
import { MatButtonModule } from "@angular/material/button";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatListModule } from "@angular/material/list";
import { MatMenuModule } from "@angular/material/menu";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatStepperModule } from "@angular/material/stepper";
import { MatTreeModule } from "@angular/material/tree";
import { NgModule } from "@angular/core";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { PagesRoutingModule } from "./page-routing.module";
import { HighchartsChartModule } from "highcharts-angular";

import { AnalysisComponent } from "./dashboard/analysis/analysis.component";
import { FooterComponent } from "../components/layout/footer/footer.component";
import { LoginComponent } from "./security/login/login.component";
import { NavbarComponent } from "../components/layout/navbar/navbar.component";
import { RegisterComponent } from "./security/register/register.component";
import { SidebarComponent } from "../components/layout/sidebar/sidebar.component";
import { BasicLineChartComponent } from "../components/graphs/basic-line-chart/basic-line-chart.component";

@NgModule({
    imports: [
        CommonModule,
        CommonModule,
        FormsModule,
        MatBadgeModule,
        MatButtonModule,
        MatCheckboxModule,
        MatIconModule,
        MatInputModule,
        MatListModule,
        MatMenuModule,
        MatSidenavModule,
        MatStepperModule,
        MatTreeModule,
        PagesRoutingModule,
        ReactiveFormsModule,
        MatProgressBarModule,
        HighchartsChartModule,
    ],
    declarations: [
        AnalysisComponent,
        FooterComponent,
        LoginComponent,
        NavbarComponent,
        RegisterComponent,
        SidebarComponent,
        BasicLineChartComponent,
    ],
})
export class PagesModule {}
