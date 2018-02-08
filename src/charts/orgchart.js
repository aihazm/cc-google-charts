define([], function () {
    function show(scope, element) {

        console.log(scope.$parent, scope.$parent.component, scope.$parent.component.data);
        console.log('OK, we have a custom component.', element);
        google.charts.load("current", { packages: ["orgchart"] });
        google.charts.setOnLoadCallback(drawChart);

        function drawChart() {
            var data = new google.visualization.DataTable();
            data.addColumn('string', 'Name');
            data.addColumn('string', 'Manager');
            data.addColumn('string', 'ToolTip');

            // For each orgchart box, provide the name, manager, and tooltip to show.
            data.addRows([
                [{ v: 'Mike', f: 'Mike<div style="color:red; font-style:italic">President</div>' },
                    '', 'The President'],
                [{ v: 'Jim', f: 'Jim<div style="color:red; font-style:italic">Vice President</div>' },
                    'Mike', 'VP'],
                ['Alice', 'Mike', ''],
                ['Bob', 'Jim', 'Bob Sponge'],
                ['Carol', 'Bob', '']
            ]);


            var chart = new google.visualization.OrgChart(element[0]);

            var options = {
                title: "Red Sox Attendance"
            };

            chart.draw(data, {allowHtml:true});
        }
    }

    return {
        show: show
    }
});