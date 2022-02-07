var api = 'https://disease.sh/v3/covid-19/nyt/usa';

fetch(api)
	.then(response => response.json())
	.then(data => {
		plotData(data);
	});

function plotData(data) {
	var keys = data.map(a => a.date),
		cases = data.map(a => a.cases);

	keys.unshift("xyz");
	cases.unshift("cases");

	var columns = [
		keys,
		cases
	];

	var chart = bb.generate({
	    bindto: "#covid-all-us-cases",
	    data: {
	    	x: "xyz",
	        type: "line",
	        columns: [ keys, cases ]
  	    },
	    axis: {
	    	x: {
	    		type: "category",
	    		clipPath: false,
	    		tick: {
	    			count: 10
	    		}
	    	}
	    },
	    padding: { right: 50 }
	});
}
