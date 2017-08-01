var request = require('request');
var cheerio = require('cheerio');
//var cheerioTableParser = require('cheerioTableParser');

request('https://webapps2.abc.utah.gov/Production/OnlinePriceList/DisplayPriceList.aspx', function(err, resp, body){
   if(!err && resp.statusCode == 200)
   {
        var $ = cheerio.load(body);
        var rows = $('table tr').toArray();

        rows.map(function(row){
        
            var cells = $(row).find('td').toArray();

            console.log(cells.map(function(cell){
                return $(cell).text().trim();
        
            }).join());        

        });       
    }
});


