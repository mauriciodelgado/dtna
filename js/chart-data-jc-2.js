var randomScalingFactor = function(){ return Math.round(Math.random()*1000)};
	
	var lineChartData = {
			labels : ["January","February","March","April","May","June","July"],
			datasets : [
				{
					label: "My First dataset",
					fillColor : "rgba(220,220,220,0.2)",
					strokeColor : "rgba(220,220,220,1)",
					pointColor : "rgba(220,220,220,1)",
					pointStrokeColor : "#fff",
					pointHighlightFill : "#fff",
					pointHighlightStroke : "rgba(220,220,220,1)",
					data : [randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()]
				},
				{
					label: "My Second dataset",
					fillColor : "rgba(48, 164, 255, 0.2)",
					strokeColor : "rgba(48, 164, 255, 1)",
					pointColor : "rgba(48, 164, 255, 1)",
					pointStrokeColor : "#fff",
					pointHighlightFill : "#fff",
					pointHighlightStroke : "rgba(48, 164, 255, 1)",
					data : [randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()]
				}
			]

		}
		

    //MARZO - 13
//	var barChartData = {
//	    labels: ["TX",	    "CA",	    "GA",	    "WI",	    "MO",	    "AZ",	    "IL",	    "OH",	    "IN",	    "OK",	    "UT",	    "MI",	    "AR",	    "MN",	    "IA",
//	    "FL",	    "PA",	    "TN",	    "WA",	    "OR",	    "ND",	    "MS",	    "NE",	    "NC",	    "AL",	    "AB",	    "CO",	    "NY",	    "KS",	    "KY",
//	    "ON",	    "LA",	    "VA",	    "EM",	    "NV",	    "BC",	    "QC",	    "SK",	    "SD",	    "NJ",	    "NB",	    "ME",	    "ID",	    "MB",	    "WV",
//	    "Null",	    "MT",	    "CT",	    "SC",	    "MD",	    "RI",	    "MA",	    "DE",	    "VT"],
//	    datasets: [
//					{
//					    label: ["Testsss", "sadad"],
//						fillColor : "rgba(110, 164, 90, 0.5)",
//						strokeColor : "rgba(110, 164, 90, 0.8)",
//						highlightFill: "rgba(110, 164, 90, 0.75)",
//						highlightStroke: "rgba(110, 164, 90, 1)",
//						data: [794,348,247,243,222,217,216,210,156,152,133,129,101,95,90,90,74,68,65,62,57,55,45,42,38,
//37,33,29,25,25,24,23,22,19,19,18,13,12,11,9,7,7,6,5,5,5,4,3,3,2,2,2,1,1]
//					}
//				]
//		
//			}

 
    //ABRIL - 13
	var barChartData = {
	    labels: ["TX","CA","MO","AZ","WI","GA","IL","OK","OH","PA","FL","UT","IN","TN","MN","IA","WA","AR","CO","MI","NC","OR","NY","MS","AL","EM","LA","KS","KY","AB","SD","NULL","ON",
"QC","NE","ND","BC","ID","NV","VA","MD","MB","NJ","NB","MA","MT","SK","VT","SC","NM","CT","NF","CU","NS","NH","WV"],
	    datasets: [
					{
					    label: ["Testsss", "sadad"],
					    fillColor: "rgba(110, 164, 90, 0.5)",
					    strokeColor: "rgba(110, 164, 90, 0.8)",
					    highlightFill: "rgba(110, 164, 90, 0.75)",
					    highlightStroke: "rgba(110, 164, 90, 1)",
					    data: [436,358,293,280,250,239,192,191,144,144,116,114,113,112,101,80,80,78,78,76,68,56,53,49,43,38,36,30,27,27,26,21,21,19,18,16,16,14,14,14,
13,13,12,10,7,6,4,4,4,4,3,2,1,1,1,1]
					}
	    ]
	}


/*

    -- MayO - 13
	var barChartData = {
	    labels: ["TX","CA","MO","WI","TN","OH","GA","IL","AZ","IN","PA","OK","FL","MN","UT","WA","IA","AL","EM","MS","MI","NC","KY","BC","KS","SD","CO","OR","AR","LA","ON","ND","ID","NULL",
"VA","NE","NV","NY","MB","AB","NJ","MT","QC","MA","CT","MD","SK","SC","WV","NH","RI","NB","VT","NM","ME","CU","WY"],
	    datasets: [
					{
					    label: ["Testsss", "sadad"],
					    fillColor: "rgba(110, 164, 90, 0.5)",
					    strokeColor: "rgba(110, 164, 90, 0.8)",
					    highlightFill: "rgba(110, 164, 90, 0.75)",
					    highlightStroke: "rgba(110, 164, 90, 1)",
					    data: [412,345,295,235,206,180,166,144,141,135,133,124,111,101,101,98,97,88,72,66,49,47,47,40,38,36,35,31,29,29,27,26,24,23,22,21,19,18,14,14,10,10,9,
9,6,4,4,3,3,3,3,3,2,2,1,1,1]
					}
	    ]
	}
    */

	

window.onload = function(){

var chart2 = document.getElementById("bar-chart").getContext("2d");
window.myBar = new Chart(chart2).Bar(barChartData, {
    responsive: true
});


};