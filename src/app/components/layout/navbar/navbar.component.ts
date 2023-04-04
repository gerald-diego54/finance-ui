import { ActivatedRoute } from "@angular/router";
import { Component, OnInit, ChangeDetectorRef } from "@angular/core";
import { HostListener } from "@angular/core";

@Component({
    selector: "app-navbar",
    templateUrl: "./navbar.component.html",
    styleUrls: ["./navbar.component.css"],
})
export class NavbarComponent implements OnInit {
    constructor(private cdRef: ChangeDetectorRef, private route: ActivatedRoute) {}

    public disableMountainShape: boolean = false;
    public isScrolled: boolean = true;
    public mobile: boolean = false;
    public open_summary: boolean = false;
    public open: boolean = false;

    @HostListener("window:resize", ["$event"])
    public onResize(event?: any): void {
        if (window.innerWidth <= 768) {
            this.mobile = true;
        } else {
            this.mobile = false;
        }
    }

    @HostListener("window:scroll", ["$event"])
    public onScroll(event?: any): void {
        const pos = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
        if (pos > 0) {
            this.isScrolled = false;
        } else {
            this.isScrolled = true;
        }
    }

    ngOnInit(): void {
        this.onResize(event);
        this.onScroll(event);
        if (this.route.snapshot.routeConfig?.path == "sign-in" || this.route.snapshot.routeConfig?.path == "sign-up") {
            this.disableMountainShape = true;
        } else {
            this.disableMountainShape = false;
        }
    }
}
