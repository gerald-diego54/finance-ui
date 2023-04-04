import { Component, OnInit, HostListener } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";

@Component({
    selector: "app-register",
    templateUrl: "./register.component.html",
    styleUrls: ["./register.component.css"],
})
export class RegisterComponent implements OnInit {
    constructor(private _formBuilder: FormBuilder) {}

    public isLinear: boolean = false;
    public mobile = true;
    public firstFormGroup: any = this._formBuilder.group({
        firstCtrl: ["", Validators.required],
    });
    public secondFormGroup: any = this._formBuilder.group({
        secondCtrl: ["", Validators.required],
    });

    @HostListener("window:resize", ["$event"])
    public onResize(event?: any): void {
        if (window.innerWidth <= 768) {
            this.mobile = false;
        } else {
            this.mobile = true;
        }
    }

    ngOnInit(): void {
        this.onResize(event);
    }
}
