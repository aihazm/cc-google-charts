define([
    "./charts/demo-chart",
    "./charts/barchart",
    "./charts/piechart",
    "./charts/bubblechart",
    "./charts/ganttchart",
    "./charts/orgchart",
    "//www.gstatic.com/charts/loader.js"
], function (
    demoChart,
    barchart,
    piechart,
    bubblechart,
    ganttchart,
    orgchart
) {
        'use strict';

        const SUPPORTED_CHARTS = [
            "piechart",
            "barchart",
            "bubblechart",
            "ganttchart",
            "orgchart",
            "demochart"
        ];

        return {
            componentName: "ccGoogleCharts",
            restrict: 'E',
            scope: true,
            replace: true,
            template: '<div></div>',
            link: function (scope, element, attrs) {

                attrs.$observe("type", val => {
                    paint(val, scope, element);
                });
                //if data added (dimension & measures) -- needs refact.
                scope.data.OnData.bind(function () {
                    paint(attrs.type, scope, element);
                });

                function paint(val, scope, element) {
                    if (!SUPPORTED_CHARTS.includes(val)) { // not sure this is available for all browsers
                        console.warn(`Chart type ${val} is not (yet) supported`);
                        return;
                    }
                    //can be done in a better way
                    switch (val) {
                        case "piechart":
                            piechart.show(scope, element);
                            break;
                        case "barchart":
                            barchart.show(scope, element);
                            break;
                        case "bubblechart":
                            bubblechart.show(scope, element);
                            break;
                        case "ganttchart":
                            ganttchart.show(scope, element);
                            break;
                        case "orgchart":
                            orgchart.show(scope, element);
                            break;
                        case "demochart":
                        default:
                            demoChart.show(scope, element);
                            break;
                    }
                }

            }
        }
    });