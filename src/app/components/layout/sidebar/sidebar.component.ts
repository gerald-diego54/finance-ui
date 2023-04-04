import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-sidebar",
    templateUrl: "./sidebar.component.html",
    styleUrls: ["./sidebar.component.css"],
})
export class SidebarComponent implements OnInit {
    constructor() {}

    public collapsed: boolean = false;
    public sidebarOpen: boolean = false;

    public toggleSidebar(): void {
        this.sidebarOpen = !this.sidebarOpen;
    }

    ngOnInit(): void {}
}
