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
            let dt = new google.visualization.arrayToDataTable(helper.qTable2Array(scope.data), false);

            var data = google.visualization.arrayToDataTable([
                ['Task', 'Hours per Day'],
                ['Work',     11],
                ['Eat',      2],
                ['Commute',  2],
                ['Watch TV', 2],
                ['Sleep',    7]
              ]);
      
              var options = {
                title: 'My Daily Activities'
              };
      

            var chart = new google.visualization.PieChart(element[0]);

            chart.draw(data, options);
        }
    }

    return {
        show: show
    }
});