/**
 * Created by Denis on 09.11.2016.
 */
var cheerio = require('cheerio');
var request = require('request');
request('https://news.ycombinator.com', function (error, response, html) {
    if (!error && response.statusCode == 200) {
        var $ = cheerio.load(html);
        $('span.comhead').each(function(i, element){
            var a = $(this).prev();
            console.log(a.text());
        });
    }
});