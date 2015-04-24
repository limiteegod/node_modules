var async = require('async');

var config = require('mcp_config');
var ec = config.ec;
var game = config.game;

var esut = require('easy_util');
var log = esut.log;

var util = require('mcp_util');
var mathUtil = util.mathUtil;

var Validate = function(){
    var self = this;

    var bunchMap = {};
    //所有的串关场次特征码。
    bunchMap["11"] = "10000000";
    bunchMap["21"] = "01000000";
    bunchMap["31"] = "00100000";
    bunchMap["41"] = "00010000";
    bunchMap["51"] = "00001000";
    bunchMap["61"] = "00000100";
    bunchMap["71"] = "00000010";
    bunchMap["81"] = "00000001";
    bunchMap["23"] = "11000000";
    bunchMap["36"] = "11000000";
    bunchMap["37"] = "11100000";
    bunchMap["410"] = "11000000";
    bunchMap["414"] = "11100000";
    bunchMap["415"] = "11110000";
    bunchMap["515"] = "11000000";
    bunchMap["525"] = "11100000";
    bunchMap["530"] = "11110000";
    bunchMap["531"] = "11111000";
    bunchMap["621"] = "11000000";
    bunchMap["641"] = "11100000";
    bunchMap["656"] = "11110000";
    bunchMap["662"] = "11111000";
    bunchMap["663"] = "11111100";
    bunchMap["7127"] = "11111110";
    bunchMap["8255"] = "11111111";
    bunchMap["33"] = "01000000";
    bunchMap["34"] = "01100000";
    bunchMap["46"] = "01000000";
    bunchMap["411"] = "01110000";
    bunchMap["510"] = "01000000";
    bunchMap["520"] = "01100000";
    bunchMap["526"] = "01111000";
    bunchMap["615"] = "01000000";
    bunchMap["635"] = "01100000";
    bunchMap["650"] = "01110000";
    bunchMap["657"] = "01111100";
    bunchMap["7120"] = "01111110";
    bunchMap["8247"] = "01111111";
    bunchMap["44"] = "00100000";
    bunchMap["45"] = "00110000";
    bunchMap["516"] = "00111000";
    bunchMap["620"] = "00100000";
    bunchMap["642"] = "00111100";
    bunchMap["55"] = "00010000";
    bunchMap["56"] = "00011000";
    bunchMap["622"] = "00011100";
    bunchMap["735"] = "00010000";
    bunchMap["870"] = "00010000";
    bunchMap["66"] = "00001000";
    bunchMap["67"] = "00001100";
    bunchMap["721"] = "00001000";
    bunchMap["856"] = "00001000";
    bunchMap["77"] = "00000100";
    bunchMap["78"] = "00000110";
    bunchMap["828"] = "00000100";
    bunchMap["88"] = "00000010";
    bunchMap["89"] = "00000011";
    self.bunchMap = bunchMap;
};


Validate.prototype.validate = function(order, ticket, cb)
{
    var self = this;
    var tickets = order.tickets;
    var name = "validate" + ticket.pType;
    if(self[name])
    {
        var number = ticket.number;
        if(!number)
        {
            cb(ec.E2066);
            return;
        }
        self[name](order, ticket, function(err, count){
            if(err)
            {
                cb(err);
            }
            else
            {
                var price = game.getInfo(ticket.gameCode, ticket.pType).price;
                //校验注数
                if(count*ticket.multiple*price != ticket.amount)
                {
                    cb(ec.E2061);
                }
                else
                {
                    cb(null);
                }
            }
        });
    }
    else    //不支持的玩法
    {
        log.error("no method defined.");
        cb(ec.E2062);
    }
}


/**
 * @param order
 * @param ticket
 * @param cb
 */
Validate.prototype.validate01 = function(order, ticket, cb)
{
    var self = this;
    self.getCount(order, ticket, cb);
}

/**
 * @param order
 * @param ticket
 * @param cb
 */
Validate.prototype.validate02 = function(order, ticket, cb)
{
    var self = this;
    self.getCount(order, ticket, cb);
}

/**
 * @param order
 * @param ticket
 * @param cb
 */
Validate.prototype.validate03 = function(order, ticket, cb) {
    var self = this;
    self.getCount(order, ticket, cb);
}

/**
 * @param order
 * @param ticket
 * @param cb
 */
Validate.prototype.validate04 = function(order, ticket, cb)
{
    var self = this;
    self.getCount(order, ticket, cb);
}

/**
 * @param order
 * @param ticket
 * @param cb
 */
Validate.prototype.validate05 = function(order, ticket, cb)
{
    var self = this;
    self.getCount(order, ticket, cb);
}

/**
 * @param order
 * @param ticket
 * @param cb
 */
Validate.prototype.validate06 = function(order, ticket, cb)
{
    var self = this;
    self.getCount(order, ticket, cb);
}

/**
 * 获得号码的注数
 * @param order
 * @param ticket
 * @param cb
 */
Validate.prototype.getCount = function(order, ticket, cb)
{
    var self = this;
    var bType = ticket.bType;
    var bunchFlag = self.bunchMap[bType];
    if(bunchFlag == undefined)
    {
        log.error("no flag defined.");
        cb(ec.E2062);
        return;
    }
    var m = parseInt(bType.substring(0, 1));
    var n = parseInt(bType.substring(1));
    var number = ticket.number;
    var items = number.split(";");
    var choiceLengthArray = [];
    for(var i = 0; i < items.length; i++)
    {
        var curMatch = items[i];
        var reg = /^\d{2}\|\d{12,}\|\d{1,}(@\d{1,}\.\d{1,}){0,}(,\d{1,}(@\d{1,}\.\d{1,}){0,}){0,}$/;
        if(!reg.test(curMatch))
        {
            cb(ec.E2066);
            return;
        }
        var curMatchDetailArray = curMatch.split("|");
        var choice = curMatchDetailArray[2];
        var length = choice.split(',').length;
        choiceLengthArray.push(length);
    }
    var count = 0;
    for(var i = 0; i < bunchFlag.length; i++)
    {
        var flag = bunchFlag.charAt(i);
        if(flag == '1')
        {
            var dc = mathUtil.getDetailC(m, i + 1);
            for(var j = 0; j < dc.length; j++)
            {
                var set = dc[j];
                var curCount = 1;
                for(var k = 0; k < set.length; k++)
                {
                    curCount *= choiceLengthArray[set[k]];
                }
                count += curCount;
            }
        }
    }
    cb(null, count);
}

module.exports = new Validate();