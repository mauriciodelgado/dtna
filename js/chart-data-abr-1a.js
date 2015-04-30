
	var barChartData = {
				labels : ["W1","W2","W3","W4", "W5"],
				datasets : [
					{
						fillColor : "rgba(110, 164, 90, 0.5)",
						strokeColor : "rgba(110, 164, 90, 0.8)",
						highlightFill: "rgba(110, 164, 90, 0.75)",
						highlightStroke: "rgba(110, 164, 90, 1)",
						//data : [randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()]
					data: [165, 825, 825, 660, 495,]
					},
					{
						fillColor : "rgba(48, 164, 255, 0.2)",
						strokeColor : "rgba(48, 164, 255, 0.8)",
						highlightFill : "rgba(48, 164, 255, 0.75)",
						highlightStroke : "rgba(48, 164, 255, 1)",
						//data : [randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()]
						data: [303, 576, 737, 823, 931]
					}
				]
		
			}

	

	

window.onload = function(){

var chart2 = document.getElementById("bar-chart").getContext("2d");
window.myBar = new Chart(chart2).Bar(barChartData, {
	responsive : true
});


};