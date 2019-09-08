
const googleTrends = require('google-trends-api');


allStates = ["AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DC", "DE", "FL", "GA", 
          "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", 
          "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", 
          "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", 
          "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"];

states = ["AL"];

var place = [];
var nat_avg = [];
var local_avg = [];
var start = [];
var end = [];
var query = [];

avgs = [];
str1 = "US-";

var g2016 = ['Hillary Clinton','Donald Trump'];

var dates = [new Date('2016-07-01'), new Date('2016-10-31')];

var count = 0;


function getRatios(item,index,arr) {
	// console.log(item,index,arr)
	tag = str1.concat(item);
	tag = ['US',tag]
	// console.log(tag)

	googleTrends.interestByRegion({keyword: g2016, 
		startTime: dates[0], endTime: dates[1], 
		geo: 'US', resolution:'REGION'})

	.then(function(res) {
		// Only will occur when response comes back
		val = JSON.parse(res)
		console.log(res)
	  avg = val.default.averages

	 	// var infoDict = {
	 	// 	  place: item,
  	// 		dem: avg[0],
  	// 		rep: avg[1],
  	// 		query: g2016
	 	// };

	  // avgs.push(infoDict)
	  // console.log(infoDict)
	  // count++;

	  if (count == arr.length) {
	  	console.log('Done')
	  }

	})
	.catch((err) => {
	  console.log(err);
	})
}


count = 0;

states.forEach(function(item, index, arr) { // we add index param here, starts with 0

    setTimeout(function() {
        getRatios(item,index,arr)
    }, 2000*(index+1)) // or just index, depends on your needs
}) 


