const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const csvWriter = createCsvWriter({
    path: '/Users/anthonygoss/Projects/Trends/outputs/curr.csv',
    header: [
        {id: 'place', title: 'State'},
        {id: 'nat', title: 'National Avg'},
        {id: 'loc', title: 'Local Avg'},
        {id: 'query' title: 'Seach Query'}
    ]
});
 
const records = [
    {name: 'Bob',  lang: 'French, English'},
    {name: 'Mary', lang: 'English'}
];
 
csvWriter.writeRecords(records)       // returns a promise
    .then(() => {
        console.log('...Done');
    });