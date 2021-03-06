
function displaysInformations () {
    // Automatically updates the battery status and graphically displays the battery level as a "pie"
    // Also updates the network connection status
    function updatesStatusBattery (battery) {
        // updates the contents of the load div, battery level
        // Is the charger connected or not?
        document.querySelector ('upload') textContent = battery.charging? 'is loading': 'does not load';
        // battery level
        document.querySelector ('#letBaterie') textContent = battery.level;
        // creates pie chart with battery level
        // load - has values ​​from 0 to 1
        var loading = battery.level;
        // how much is the download, the difference between 1 and the load
        unloading var = 1-load;
        // Chart
        var chart = new CanvasJS.Chart ("pieCarcareBaterie", {
          // title properties
          title: {
            text: "Battery charging",
          }
          // legend properties
          legend: {
            verticalAlign: "center",
            horizontalAlign: "left",
            fontSize: 15,
            fontFamily: "arial"
          }
          // properties "pie"
          date: [{
            type: "pie",
	    
percentFormatString: "# 0",
            toolTipContent: "{legendText} (#%%)",
            showInLegend: true,
            indexLabelPlacement: "outside",
            indexLabelFontSize: 15,
            indexLabelMaxWidth: 53,
            indexLabel: "{y} (#%%)",
            // start from angle 270 to be beautiful (top)
            startAngle: 270,
            dataPoints: [
                  // the first is the load
                  {y: load, legendText: 'Battery Charged in Percent'},
                  // download
                  {y: download, legendText: 'Downloaded as a percentage'}
            ]
          }]
        });
        // displays the pie chart
        chart.render ();
        // we show network status
        var devOnline = navigator.onLine;
        // is it connected to the network or not?
        document.querySelector ('# network') textContent = devOnline? 'connected to the network': 'disconnected from the network';

    }

    // see https://www.w3.org/TR/battery-status/
    navigator.getBattery () then (function (battery) {
        // updates battery status at first
        actualizeazaStatusBaterie (battery);
        // updates the status if it is connected / disconnected to the charger
        battery.onchargingchange = function ()
          actualizeazaStatusBaterie (battery);
        };
        // updates status if the battery level changes
        battery.onlevelchange = function ()
          actualizeazaStatusBaterie (battery);
        };
    });
           
};	