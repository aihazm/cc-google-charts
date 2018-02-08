define(["../utils/helper"], function (helper) {

    const minRequirements = {
        dimensions: 1,
        measures: 1
    };


    function show(scope, element) {
        
        if(!helper.checkMinRequirements(scope.data, minRequirements)){
            return true;
        }

        
        google.charts.load("current", { packages: ["corechart"] });
        google.charts.setOnLoadCallback(drawChart);

        function drawChart() {

            //let dt = new google.visualization.DataTable(helper.qTable2DataTabelJson(scope.data));
            //let dt = new google.visualization.arrayToDataTable(helper.qTable2Array(scope.data), false);

            var data = google.visualization.arrayToDataTable([
                ['Element', 'Density', { role: 'style' }],
                ['Copper', 8.94, '#b87333'],            // RGB value
                ['Silver', 10.49, 'silver'],            // English color name
                ['Gold', 19.30, 'gold'],
                ['Platinum', 21.45, 'color: #e5e4e2' ], // CSS-style declaration
             ]);
      

            var chart = new google.visualization.BarChart(element[0]);

            var options = {
                title: "Density of Precious Metals, in g/cm^3",
                width: 600,
                height: 400,
                bar: {groupWidth: "95%"},
                legend: { position: "none" },
            };

            chart.draw(data, {});
        }
    }

    return {
        show: show
    }
});