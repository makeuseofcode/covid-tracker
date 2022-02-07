var api = 'https://disease.sh/v3/covid-19/nyt/usa';

fetch(api)
	.then(response => response.json())
	.then(data => {
		plotData(data.filter((a, index) => index % 7 == 0));
	});

function plotData(data) {
	var keys = data.map(a => a.date),
		cases = data.map(a => a.cases),
		columns;

	keys.unshift("dates");
	cases.unshift("cases");

	columns = [ keys, cases ];

	bb.generate({
	    bindto: "#covid-us-cases-weekly",
	    data: {
	    	x: "dates",
	        columns: columns
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
