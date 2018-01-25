function afiseazaInformatii() {
    var incarcare = 0.90; 
    var descarcare = 1-incarcare; 
    var chart = new CanvasJS.Chart("incarcareBaterie", {
      title: {
        text: "Incarcare Baterie",
      },
      legend: {
        verticalAlign: "center",
        horizontalAlign: "left",
        fontSize: 15,
        fontFamily: "arial"
      },

      data: [{
        type: "pie",
        percentFormatString: "#0",
        toolTipContent: "{legendText} (#percent%)",
        showInLegend: true,
        indexLabelPlacement: "outside",    
        indexLabelFontSize: 15,
        indexLabelMaxWidth: 53,   
        indexLabel: "{y} (#percent%)",
        startAngle: 270,
        dataPoints: [
              { y: incarcare, legendText: 'Baterie incarcata in procentul' }, 
              { y: descarcare, legendText: 'Baterie descarcata in procentul' }
        ]
      }]
    });

    chart.render();
}
