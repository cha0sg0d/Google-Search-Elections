/* Tony's first attempt at a Trends analysis */

/* TO DO: Store average for each data point by looping thru JSON */

const googleTrends = require('google-trends-api');

allStates = ["AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DC", "DE", "FL", "GA", 
          "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", 
          "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", 
          "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", 
          "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"];

states = ["AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DC", "DE", "FL", "GA", 
          "HI", "ID", "IL", "IN", "IA"];

states1 = ["KS", "KY", "LA", "ME", "MD", 
          "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", 
          "NM"];

states2 = ["NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", 
         "SD", "TN", "TX", "UT"]; 

states3 = ["VT", "VA", "WA","WV","WI", "WY"];

temp = ["WA"]

bigList = [states,states1,states2,states3]


const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const csvWriter = createCsvWriter({
    path: '/Users/anthonygoss/Projects/Trends/outputs/2004_kerry_3.csv',
    header: [
        {id: 'place', title: 'State'},
        {id: 'nat', title: 'National Avg'},
        {id: 'loc', title: 'Local Avg'},
        {id: 'query', title: 'Seach Query'}
    ]
});


var place = [];
var nat_avg = [];
var local_avg = [];
var start = [];
var end = [];
var query = [];


avgs = [];
str1 = "US-";

var g2016 = ['Hillary Clinton','Donald Trump'];
var r2016 = ['Donald Trump','Donald Trump'];
var d2016 = ['Hillary Clinton', 'Hillary Clinton'];

var g2012 = ['Barack Obama','Mitt Romney'];
var r2012 = ['Mitt Romney', 'Mitt Romney'];
var d2012 = ['Barack Obama','Barack Obama'];

var g2008 = ['Barack Obama','John McCain'];
var r2008 = ['John McCain','John McCain'];
var d2008 = ['Barack Obama', 'Barack Obama'];

var g2004 = ['John Kerry','George W Bush'];
var r2004 = ['George W Bush','George W Bush'];
var d2004 = ['John Kerry','John Kerry'];

var dates = [new Date('2008-07-01'), new Date('2008-10-31')];

var count = 0;

// allStates.forEach(getRatios);

// states.forEach(getRatios);

// states1.forEach(getRatios);
// console.log(count)

// states2.forEach(getRatios);
// console.log(count)

states3.forEach(getRatios);
// console.log(count)

function getRatios(item,index,arr) {

	tag = str1.concat(item);
	tag = ['US',tag]
	// console.log(tag)

	googleTrends.interestOverTime({keyword: d2004, 
		startTime: dates[0], endTime: dates[1], 
		geo: tag})

	.then(function(res) {
	  // Only will occur when response comes back
		val = JSON.parse(res)
		// console.log(res)
	  avg = val.default.averages

	 //  place.push(item);
		// nat_avg.push(avg[0]);
		// local_avg.push(avg[1]);
		// start.push(dates[0]);
		// end.push(dates[1]);
		// query.push(r2016[0]);

	 	var infoDict = {
	 		  place: item,
  			nat: avg[0],
  			loc: avg[1],
  			query: d2004[0]
	 	};

	  avgs.push(infoDict)
	  count++;

	  // console.log(infoDict)

	  if (count == arr.length) {

	  	csvWriter.writeRecords(avgs)       // returns a promise
	    .then(() => {
	        console.log('...Done');
	    });

	  }

	  // if (count == arr.length) {
	  // 	for (var i = arr.length - 1; i >= 0; i--) {
	  // 		console.log(place[i],nat_avg[i],local_avg[i])
	  // 	}
	  // }

	})
	.catch((err) => {
	  console.log(err);
	})
}

// googleTrends.interestOverTime({keyword: ['Donald Trump','Donald Trump'], startTime: dates[0], 
// 	endTime: dates[1], 
// 	geo: ['US','US-HI']})
// .then(function(res) {
// 	console.log(res);
// })
// .catch((err) => {
// 	console.log(err);
// })

