define([], function () {
    function show(scope, element) {

        console.log(scope.$parent, scope.$parent.component, scope.$parent.component.data);
        console.log('OK, we have a custom component.', element);
        google.charts.load("current", { packages: ["gantt"] });
        google.charts.setOnLoadCallback(drawChart);
        function daysToMilliseconds(days) {
            return days * 24 * 60 * 60 * 1000;
          }
        function drawChart() {
            var data = new google.visualization.DataTable();
            data.addColumn('string', 'Task ID');
            data.addColumn('string', 'Task Name');
            data.addColumn('date', 'Start Date');
            data.addColumn('date', 'End Date');
            data.addColumn('number', 'Duration');
            data.addColumn('number', 'Percent Complete');
            data.addColumn('string', 'Dependencies');

            data.addRows([
                ['Research', 'Find sources',
                new Date(2015, 0, 1), new Date(2015, 0, 5), null,  100,  null],
                ['Write', 'Write paper',
                null, new Date(2015, 0, 9), daysToMilliseconds(3), 25, 'Research,Outline'],
                ['Cite', 'Create bibliography',
                null, new Date(2015, 0, 7), daysToMilliseconds(1), 20, 'Research'],
                ['Complete', 'Hand in paper',
                null, new Date(2015, 0, 10), daysToMilliseconds(1), 0, 'Cite,Write'],
                ['Outline', 'Outline paper',
                null, new Date(2015, 0, 6), daysToMilliseconds(1), 100, 'Research']
            ]);
      

            var chart = new google.visualization.Gantt(element[0]);

            var options = {
                height: 275
              };

            chart.draw(data, options);
        }
    }

    return {
        show: show
    }
});