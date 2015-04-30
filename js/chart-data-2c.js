
	var barChartData = {
				labels : ["W1","W2","W3","W4", "W5"],
				datasets : [
					{
						fillColor : "rgba(110, 164, 90, 0.5)",
						strokeColor : "rgba(110, 164, 90, 0.8)",
						highlightFill: "rgba(110, 164, 90, 0.75)",
						highlightStroke: "rgba(110, 164, 90, 1)",
						//data : [randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()]
					data: [155, 936, 939, 1248, 952,]
					},
					{
						fillColor : "rgba(48, 164, 255, 0.2)",
						strokeColor : "rgba(48, 164, 255, 0.8)",
						highlightFill : "rgba(48, 164, 255, 0.75)",
						highlightStroke : "rgba(48, 164, 255, 1)",
						//data : [randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()]
						data: [327, 770, 1196, 1044, 1089]
					}
				]
		
			}

	

	

window.onload = function(){

var chart2 = document.getElementById("bar-chart").getContext("2d");
window.myBar = new Chart(chart2).Bar(barChartData, {
	responsive : true
});


};