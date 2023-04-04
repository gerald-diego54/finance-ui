import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
    { path: "", redirectTo: "/budget/sign-in", pathMatch: "full" },
    {
        path: "budget",
        loadChildren: () => import("./pages/pages.module").then((module) => module.PagesModule),
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
