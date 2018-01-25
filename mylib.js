function afiseazaInformatii() {
    //actualizeaza automat statusul bateriei si prezinta grafic nivelul bateriei sub forma unei "placinte" 
    function actualizeazaStatusBaterie(battery) {
        //actualizeaza continutul din div-urile incarcare, nivelBaterie si timpDescarcare
        //este conectat incarcatorul sau nu?
        document.querySelector('#incarcare').textContent = battery.charging ? 'se incarca' : 'nu se incarca';
        //nivelul bateriei
        document.querySelector('#nivelBaterie').textContent = battery.level;
        //timpul de descarcare in minute
        document.querySelector('#timpDescarcare').textContent = battery.dischargingTime / 60;
        //creeaza pie chart cu nivelul bateriei
        //incarcarea - are valori de la 0 pana la 1
        var incarcare = battery.level; 
        //cat este descarcarea, diferenta dintre 1 si incarcare
        var descarcare = 1-incarcare; 
        //chartul
        var chart = new CanvasJS.Chart("pieIncarcareBaterie", {
          //proprietati titlu
          title: {
            text: "Incarcare Baterie",
          },
          //proprietati legenda
          legend: {
            verticalAlign: "center",
            horizontalAlign: "left",
            fontSize: 15,
            fontFamily: "arial"
          },
          //proprietati "placinta"
          data: [{
            type: "pie",
            percentFormatString: "#0",
            toolTipContent: "{legendText} (#percent%)",
            showInLegend: true,
            indexLabelPlacement: "outside",    
            indexLabelFontSize: 15,
            indexLabelMaxWidth: 53,   
            indexLabel: "{y} (#percent%)",
            //incepem de la unghiul 270, pentru a se afisa frumos (de sus)
            startAngle: 270,
            dataPoints: [
                  //prima este incarcarea
                  { y: incarcare, legendText: 'Baterie incarcata in procentul' }, 
                  //descarcarea
                  { y: descarcare, legendText: 'Baterie descarcata in procentul' }
            ]
          }]
        });
        //afiseaza pie chart-ul
        chart.render();
        //afisam status retea
        if (Modernizr.applicationcache) {
            //este conectat la retea sau nu?
            document.querySelector('#retea').textContent = navigator.online ? 'conectat la retea' : 'deconectat de la retea';
        } else {
            document.querySelector('#retea').textContent = 'acest dispozitiv nu are suport pt aceasta functie';        
        }
    }

    //vezi https://www.w3.org/TR/battery-status/
    navigator.getBattery().then(function(battery) {
        // actualizeaza statusul bateriei la inceput
        actualizeazaStatusBaterie(battery);
        // actualizeaza statusul in cazul in care este conectat / deconectat la incarcator
        battery.onchargingchange = function () {
          actualizeazaStatusBaterie(battery);
        };
        // actualizeaza statusul in cazul in care se schimba nivelul bateriei
        battery.onlevelchange = function () {
          actualizeazaStatusBaterie(battery);
        };
        //actualizeaza statusul in cazul in care se schimba timpul de descarcare (in minute)
        battery.ondischargingtimechange = function () {
          actualizeazaStatusBaterie(battery);
        };
    });
    
    //Mobile JavaScript Application Development de Adrian Kosmaczewski - pagina 17
    //https://modernizr.com/
    function deviceOnline(e) { 
        document.querySelector('#retea').textContent = 'conectat la retea';
    }
    function deviceOffline(e) { 
        document.querySelector('#retea').textContent = 'deconectat de la retea';
    }
    
    if (Modernizr.applicationcache) {
        window.addEventListener("online", deviceOnline, false);
        window.addEventListener("offline", deviceOffline, false);
    } else {
       //nu este suport pt asta 
    }
        
};


