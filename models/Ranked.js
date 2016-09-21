/**
 * Created by Win on 2016/9/18.
 */

var keystone = require('keystone');
var Types = keystone.Field.Types;


var Ranked = new keystone.List('Ranked', {
	map: { name: 'matchId' }
});

Ranked.add({
	matchId:{ type: Types.Relationship, ref: 'Match', index: true },
	flowId:{ type: Types.Relationship, ref: 'MatchFlow', index: true },
	playerId:{ type: Types.Relationship, ref: 'Player', index: true },
	number:{type:String},
	rank:{type:Number},
	scoreId:{ type: Types.Relationship, ref: 'Score', index: true }, //成绩集合
	sort:{type:Number}, // 下轮赛事排序
	road:{ type: Types.Relationship, ref: 'Target', index: true } //靶位
});

Ranked.defaultColumns = 'matchId,flowId,playerId,number,rank,scoreId,sort,road';
Ranked.register();


