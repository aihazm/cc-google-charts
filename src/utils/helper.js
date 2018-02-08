define([], function () {
    function checkMinRequirements(data, reqs) {//reqs may need validation
        let valid = false;
        if (!reqs.dimensions && !reqs.measures) { // no min data requirements => valid
            valid = true;
        } else {
            valid = (data.rows.length > 0)
                && ((reqs.dimensions) ? data.qHyperCube.qDimensionInfo.length >= reqs.dimensions : true)
                && ((reqs.measures) ? data.qHyperCube.qMeasureInfo.length >= reqs.measures : true);
        }
        if (!valid) {
            console.warn(`INVALID -- needs minimum requirements ${JSON.stringify(reqs)}`);
        }
        return valid;
    }

    function qTable2Array(data){
        let res = [];
        let h = [];
        data.headers.forEach(header => {            
            h.push(header.qFallbackTitle);
        });
        res.push(h);
        data.rows.forEach(row => {
            let r = [];
            row.cells.forEach(function (cell) {
                r.push(cell.qText);
            });
            res.push(r);
        });

        return res;
    }

    function qTable2DataTabelJson(data) {
        let res = {
            cols: [],
            rows: []
        };
        data.headers.forEach(header => {
            res.cols.push({ id: header.col, label: header.qFallbackTitle, type: 'string' });
        });
        data.rows.forEach(row => {
            let r = { c: [] };
            row.cells.forEach(function (cell) {
                r.c.push({ v: cell.qText });
            });
            res.rows.push(r);
        });
        return res;
    }


    return {
        checkMinRequirements: checkMinRequirements,
        qTable2DataTabelJson: qTable2DataTabelJson,
        qTable2Array: qTable2Array
    }
});