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
    data.addColumn("number", "ライジン");
    data.addColumn("number", "レッドブル");
    
    // 行データの設定
    var integrant_keys = Object.keys(drinks[0]).filter(function(key){
      return (key !== "name" && key !== "image");
    });
    integrant_keys.forEach(function(integrant, row_no){
      data.setValue(row_no, 0, integrants[row_no]);
      data.setValue(row_no, 1, drinks[0][integrant]);
      data.setValue(row_no, 2, drinks[1][integrant]);
    });

    return data;
}