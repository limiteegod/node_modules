var async = require('async');

var jc = require('./build/Release/jc');
var check = jc.check();

var drawNumber = {};

var getDrawNumber = function(matchCode, cb)
{
    console.log(matchCode);
    if(matchCode == "201406135006")
    {
        cb(null, "0:0,1:2,-1");
    }
    else
    {
        cb(null, "0:0,1:1,-1");
    }
}

var start = new Date().getTime();
for(var i = 0; i < 2; i++)
{
    var number = '01|201406135003|1@3.550,0@1.99;01|201406135005|1@3.150,3@1.97;01|201406135006|1@3.150';
    var numberArray = number.split(';');
    var matches = [];
    for(var j = 0; j < numberArray.length; j++)
    {
        var matchCode = numberArray[j].split('|')[1];
        matches.push(matchCode);
    }
    async.eachSeries(matches, function(matchCode, callback) {
        if(drawNumber[matchCode] == undefined)
        {
            getDrawNumber(matchCode, function(err, data){
                drawNumber[matchCode] = data;
                check.setDrawNumber({code:matchCode, number:data});
                callback(err);
            });
        }
        else
        {
            callback();
        }
    }, function(err){
        console.log(check.count({
            number:number,
            bType:'31'
        }));
    });
}
var end = new Date().getTime();
console.log("执行耗时:" + (end - start) + "ms.");

