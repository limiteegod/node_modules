var jc = require('./build/Release/jc');
var check = jc.check();

var getDrawNumber = function(matchCode)
{
    console.log(matchCode);
};

var start = new Date().getTime();
for(var i = 0; i < 1; i++)
{
    console.log(check.count0100({
        number:'01|201406135003|1@3.550,0@1.99;01|201406135005|1@3.150,3@1.97;01|201406135006|1@3.150',
        bType:'31',
        getDrawNumber:getDrawNumber
    }));
}
var end = new Date().getTime();
console.log("执行耗时:" + (end - start) + "ms.");

