var Game = function(){
    var self = this;
    self.info = [
        {id:'F01', type:1, name:'双色球', playTypes:
            [
                {id:'00', name:'普通', price:200, betTypes:
                    [
                        {id:'00', name:'单式'},
                        {id:'01', name:'复式'},
                        {id:'02', name:'胆拖'}
                    ]
                }
            ]
        },
        {id:'F02', type:1, name:'福彩3d', playTypes:
            [
                {id:'01', name:'直选', price:200, betTypes:
                    [
                        {id:'00', name:'单式'},
                        {id:'01', name:'复式'},
                        {id:'03', name:'和值'}
                    ]
                },
                {id:'02', name:'组三', price:200, betTypes:
                    [
                        {id:'01', name:'复式'}
                    ]
                },
                {id:'03', name:'组六', price:200, betTypes:
                    [
                        {id:'01', name:'复式'}
                    ]
                },
                {id:'04', name:'组选', price:200, betTypes:
                    [
                        {id:'03', name:'和值'}
                    ]
                }
            ]
        },
        {id:'F04', type:2, name:'快3', playTypes:
            [
                {id:'01', name:'三不同', price:200, betTypes:
                    [
                        {id:'00', name:'单式'}
                    ]
                },
                {id:'02', name:'二同单选', price:200, betTypes:
                    [
                        {id:'00', name:'单式'}
                    ]
                },
                {id:'03', name:'三同单选', price:200, betTypes:
                    [
                        {id:'00', name:'单式'}
                    ]
                },
                {id:'04', name:'和值', price:200, betTypes:
                    [
                        {id:'01', name:'普通'}
                    ]
                },
                {id:'05', name:'二不同', price:200, betTypes:
                    [
                        {id:'01', name:'普通'}
                    ]
                },
                {id:'06', name:'二同复选', price:200, betTypes:
                    [
                        {id:'01', name:'普通'}
                    ]
                },
                {id:'07', name:'三同通选', price:200, betTypes:
                    [
                        {id:'00', name:'单式'}
                    ]
                },
                {id:'08', name:'三连通选', price:200, betTypes:
                    [
                        {id:'00', name:'单式'}
                    ]
                }
            ]
        },
        {id:'T01', type:1, name: '大乐透', playTypes:
            [
                {id:'00', name:'标准', price:200, betTypes:
                    [
                        {id:'00', name: '单式'},
                        {id:'01', name: '复式'},
                        {id:'02', name: '胆拖'}
                    ]
                },
                {id:'05', name:'追加', price:300, betTypes:
                    [
                        {id:'00', name: '单式'},
                        {id:'01', name: '复式'},
                        {id:'02', name: '胆拖'}
                    ]
                }
            ]
        },
        {id:'T05', type:2, name:'11选5', playTypes:
            [
                {id:'21', name:'任选一', price:200, betTypes:
                    [
                        {id:'01', name:'复式'}
                    ]
                },
                {id:'22', name:'任选二', price:200, betTypes:
                    [
                        {id:'00', name:'单式'},
                        {id:'01', name:'复式'},
                        {id:'02', name:'胆拖'}
                    ]
                },
                {id:'23', name:'任选三', price:200, betTypes:
                    [
                        {id:'00', name:'单式'},
                        {id:'01', name:'复式'},
                        {id:'02', name:'胆拖'}
                    ]
                },
                {id:'24', name:'任选四', price:200, betTypes:
                    [
                        {id:'00', name:'单式'},
                        {id:'01', name:'复式'},
                        {id:'02', name:'胆拖'}
                    ]
                },
                {id:'25', name:'任选五', price:200, betTypes:
                    [
                        {id:'00', name:'单式'},
                        {id:'01', name:'复式'},
                        {id:'02', name:'胆拖'}
                    ]
                },
                {id:'26', name:'任选六', price:200, betTypes:
                    [
                        {id:'00', name:'单式'},
                        {id:'01', name:'复式'},
                        {id:'02', name:'胆拖'}
                    ]
                },
                {id:'27', name:'任选七', price:200, betTypes:
                    [
                        {id:'00', name:'单式'},
                        {id:'01', name:'复式'},
                        {id:'02', name:'胆拖'}
                    ]
                },
                {id:'28', name:'任选八', price:200, betTypes:
                    [
                        {id:'00', name:'单式'},
                        {id:'01', name:'复式'},
                        {id:'02', name:'胆拖'}
                    ]
                },
                {id:'29', name:'前二组选', price:200, betTypes:
                    [
                        {id:'00', name:'单式'},
                        {id:'01', name:'复式'},
                        {id:'02', name:'胆拖'},
                        {id:'03', name:'和值'},
                        {id:'06', name:'跨度'}
                    ]
                },
                {id:'30', name:'前二直选', price:200, betTypes:
                    [
                        {id:'00', name:'单式'},
                        {id:'01', name:'复式'},
                        {id:'07', name:'定位'},
                        {id:'03', name:'和值'},
                        {id:'06', name:'跨度'}
                    ]
                },
                {id:'31', name:'前三组选', price:200, betTypes:
                    [
                        {id:'00', name:'单式'},
                        {id:'01', name:'复式'},
                        {id:'02', name:'胆拖'},
                        {id:'03', name:'和值'},
                        {id:'06', name:'跨度'}
                    ]
                },
                {id:'32', name:'前三直选', price:200, betTypes:
                    [
                        {id:'00', name:'单式'},
                        {id:'01', name:'复式'},
                        {id:'07', name:'定位'},
                        {id:'03', name:'和值'},
                        {id:'06', name:'跨度'}
                    ]
                }
            ]
        },
        {id:'T06', type:2, name:'新快赢481', playTypes:
            [
                {id:'00', name:'组选', price:200, betTypes:[
                    {id:'00', name:'单式'}
                ]},
                {id:'01', name:'组选24', price:200, betTypes:[
                    {id:'00', name:'单式'},
                    {id:'01', name:'复式'},
                    {id:'02', name:'胆拖'}
                ]},
                {id:'02', name:'组选12', price:200, betTypes:[
                    {id:'00', name:'单式'},
                    {id:'01', name:'复式'},
                    {id:'02', name:'胆拖'},
                    {id:'08', name:'重胆拖'}
                ]},
                {id:'03', name:'组选6', price:200, betTypes:[
                    {id:'00', name:'单式'},
                    {id:'01', name:'复式'},
                    {id:'02', name:'胆拖'}
                ]},
                {id:'04', name:'组选4', price:200, betTypes:[
                    {id:'00', name:'单式'},
                    {id:'01', name:'复式'},
                    {id:'02', name:'胆拖'},
                    {id:'08', name:'重胆拖'}
                ]},
                {id:'05', name:'任一', price:200, betTypes:[
                    {id:'00', name:'单式'},
                    {id:'01', name:'复式'}
                ]},
                {id:'06', name:'任二', price:200, betTypes:[
                    {id:'00', name:'单式'},
                    {id:'01', name:'复式'},
                    {id:'03', name:'和值'},
                    {id:'06', name:'跨度'},
                    {id:'09', name:'全包'}
                ]},
                {id:'07', name:'任三', price:200, betTypes:[
                    {id:'00', name:'单式'},
                    {id:'01', name:'复式'},
                    {id:'09', name:'全包'}
                ]},
                {id:'08', name:'选四直选', price:200, betTypes:[
                    {id:'00', name:'单式'},
                    {id:'01', name:'复式'}
                ]},
                {id:'09', name:'任选', price:200, betTypes:[
                    {id:'00', name:'单式'},
                    {id:'01', name:'复式'},
                    {id:'02', name:'组合'}
                ]}
            ]
        },
        {id:'T51', type:3, name:'竞彩足球', playTypes:
            [
                {id:'01', name:'让球胜平负', price:200, betTypes:[]},
                {id:'02', name:'胜平负', price:200, betTypes:[]},
                {id:'03', name:'比分', price:200, betTypes:[]},
                {id:'04', name:'总进球', price:200, betTypes:[]},
                {id:'05', name:'胜负半全场', price:200, betTypes:[]},
                {id:'06', name:'混合投注', price:200, betTypes:[]}
            ]
        }
    ];
    self.infoArray = {};
    self.init();
};

//init the game tree
Game.prototype.init = function(){
    var self = this;
    for(var key in self.info)
    {
        var game = self.info[key];
        self.infoArray[game.id] = game;
        for(var pKey in game.playTypes)
        {
            var playType = game.playTypes[pKey];
            playType.parent = game;
            game[playType.id] = playType;
            for(var bkey in playType.betTypes)
            {
                var betType = playType.betTypes[bkey];
                betType.parent = playType;
                playType[betType.id] = betType;
            }
        }
    };
};

/**
 * get the game info
 * @param gameCode
 * @param playTypeCode
 * @param betTypeCode
 * @returns {*}
 */
Game.prototype.getInfo = function(gameCode, playTypeCode, betTypeCode)
{
    var self = this;
    var obj;
    if(gameCode)
    {
        obj = self.infoArray[gameCode];
    }
    else
    {
        return self.info;
    }
    if(playTypeCode)
    {
        obj = obj[playTypeCode];
    }
    if(betTypeCode)
    {
        obj = obj[betTypeCode];
    }
    return obj;
};

module.exports = new Game();