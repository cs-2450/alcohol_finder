var request = require('request');
var cheerio = require('cheerio');
var beverage_model = require('../models/beverage.js');

//var cheerioTableParser = require('cheerioTableParser');

request('https://webapps2.abc.utah.gov/Production/OnlinePriceList/DisplayPriceList.aspx', function(err, resp, body){
    if(!err && resp.statusCode == 200)
    {
        var $ = cheerio.load(body);
        var rows = $('table tr').toArray();
        var id = 1;


        rows.map(function(row){


            var cells = $(row).find('td').toArray();


            var beverage = [id, getDescription($, cells), getCategory($, cells), getSize($, cells), getProduct_Code($, cells), getPrice($, cells), getStat($, cells),getOn_Special($, cells), getSpecial_Price($, cells) ];
            beverage_model.create(beverage, function(response) {
                console.log(response);
            });
            id++;
        });


    }
});

function getDescription($, row)
{
    return $(row[0]).text().trim();
}

function getCategory($, row)
{
    return $(row[1]).text().trim();
}

function getSize($, row)
{
    return $(row[4]).text().trim();
}

function getProduct_Code($, row)
{
    return $(row[5]).text().trim();
}

function getPrice($, row)
{
    return $(row[6]).text().trim();
}

function getStat($, row)
{
    return $(row[7]).text().trim();
}

function getOn_Special($, row)
{
    if($(row[8]).text().trim() == "Y")
    {
        var result = true;
    }
    else
    {
        result = false;
    }
    return result;
}

function getSpecial_Price($, row)
{
    return "";
}