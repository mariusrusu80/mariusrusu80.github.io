function afiseazaInformatii() {
    function updateBatteryStatus(battery) {
        document.querySelector('#charging').textContent = battery.charging ? 'charging' : 'not charging';
        document.querySelector('#level').textContent = battery.level;
        document.querySelector('#dischargingTime').textContent = battery.dischargingTime / 60;

        var incarcare = battery.level; 
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

    navigator.getBattery().then(function(battery) {
    // Update the battery status initially when the promise resolves ...
    updateBatteryStatus(battery);

    // .. and for any subsequent updates.
    battery.onchargingchange = function () {
      updateBatteryStatus(battery);
    };

    battery.onlevelchange = function () {
      updateBatteryStatus(battery);
    };

    battery.ondischargingtimechange = function () {
      updateBatteryStatus(battery);
    };
    });
};
