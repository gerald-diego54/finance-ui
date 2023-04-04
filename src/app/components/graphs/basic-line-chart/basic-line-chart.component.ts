import { Component, OnInit } from "@angular/core";
import * as Highcharts from "highcharts";
import HC_exporting from "highcharts/modules/exporting";
import HC_exportData from "highcharts/modules/export-data";

HC_exporting(Highcharts);
HC_exportData(Highcharts);

@Component({
    selector: "app-basic-line-chart",
    templateUrl: "./basic-line-chart.component.html",
    styleUrls: ["./basic-line-chart.component.css"],
})
export class BasicLineChartComponent implements OnInit {
    constructor() {}

    public Highcharts = Highcharts;
    public chartOptions: Highcharts.Options = {
        chart: {
            type: "line",
        },
        title: {
            text: "My Line Chart",
        },
        xAxis: {
            categories: <Array<string>>["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        },
        yAxis: {
            title: {
                text: "Number of Visits",
            },
        },
        series: [
            {
                name: "Visits",
                type: "line",
                data: [10, 20, 30, 40, 50, 60],
            },
        ],
    };

    ngOnInit(): void {}
}
