import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AnalysisComponent } from "./dashboard/analysis/analysis.component";
import { LoginComponent } from "./security/login/login.component";
import { RegisterComponent } from "./security/register/register.component";

const routes: Routes = [
    { path: "sign-in", component: LoginComponent },
    { path: "sign-up", component: RegisterComponent },
    { path: "analysis", component: AnalysisComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class PagesRoutingModule {}
