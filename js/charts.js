google.load("visualization", "1", {
    packages: ["corechart"]
});
google.setOnLoadCallback(drawChart);

function drawChart() {
    var data = createDataTable();

    var options = {
        title: '成分比較表',
    };

    var chart = new google.visualization.BarChart(document.getElementById('chart_div'));

    chart.draw(data, options);
}

function createDataTable() {
    var data = new google.visualization.DataTable();

    // 行（成分）数の設定
    data.addRows(integrants.length);

    // 列（選択したドリンク）の設定
    data.addColumn("string", "成分");
    selectedObjects.forEach(function(selected_index){
      data.addColumn("number", drinks[Number(selected_index)].name);
    });

    // 行データの設定
    var integrant_keys = Object.keys(drinks[0]).filter(function(key) {
        return (key !== "name" && key !== "image");
    });
    integrant_keys.forEach(function(integrant, row_no) {
        data.setValue(row_no, 0, integrants[row_no]);
        selectedObjects.forEach(function(selected_index, i) {
            data.setValue(row_no, i+1, drinks[Number(selected_index)][integrant]);
        });
    });

    return data;
}