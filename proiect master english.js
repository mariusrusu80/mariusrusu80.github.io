
<!DOCTYPE html>
<!-- 
Proiect Rusu Marius
Application to display connection to power supply, load level a
phone battery and data network connection.
A pie chart with battery status (charge level) is also displayed.


open in browser:
http://htmlpreview.github.io/?https://github.com/mariusrusu80/mariusrusu80.github.io/blob/master/proiect.html

I created mylib.js library and included it

Documentation for battery display used on:
https://www.w3.org/TR/battery-status/

Book pie chart used on:
Librarie pie chart folosita de pe: 
http://canvasjs.com/
-->
<html>
<head>
<script src="http://canvasjs.com/assets/script/canvasjs.min.js"></script>
<script src="mylib.js"></script>
</head>
<body>

<p> Click the button to see battery charge and network status. </ p>



<button onclick = "displays Information ()"> Display Information </ button>

<! - battery status ->
<! - is connected to / disconnected from the charger ->
<div id = "load"> (unknown load status) </ div>
<! - battery level ->
<div id = "battery level"> (unknown battery level) </ div>

<! - internet network status ->
<div id = "network"> (unknown network status) </ div>


<! - pie chart battery level for fast viewing ->
</ div> <div style = "width: 100px;
<br/>


</ Body>
</ Html>