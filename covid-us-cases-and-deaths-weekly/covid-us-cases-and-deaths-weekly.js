var api = 'https://disease.sh/v3/covid-19/nyt/usa';

fetch(api)
	.then(response => response.json())
	.then(data => {
		plotData(data.filter((a, index) => index % 7 == 0));
	});

function plotData(data) {
	var keys = data.map(a => a.date),
		cases = data.map(a => a.cases),
		deaths = data.map(a => a.deaths),
		columns;

	keys.unshift("dates");
	cases.unshift("cases");
	deaths.unshift("deaths");

	columns = [ keys, cases, deaths ];

	bb.generate({
	    bindto: "#covid-us-cases-and-deaths-weekly",
	    data: {
	    	x: "dates",
	        columns: columns,
	        axes: { "cases": "y", "deaths": "y2" },
		    types: {
		    	cases: "bar"
		    }
	    },
	    axis: {
	    	x: {
	    		type: "category",
	    		clipPath: false,
	    		tick: {
	    			count: 10,
	    			fit: true
	    		}
	    	},
	    	y: {
	    		label: {
	    			text: "cases",
			        position: "outer-center"
			    }
	    	},
	    	y2: {
	    		show: true,
	    		label: {
	    			text: "deaths",
			        position: "outer-center"
			    }
	    	}
	    },
	    padding: { right: 100 }
	});
}
