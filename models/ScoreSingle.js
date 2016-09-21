/**
 * Created by Administrator on 2016/9/19.
 */

var keystone = require('keystone');
var Types = keystone.Field.Types;

var ScoreSingle = new keystone.List('ScoreSingle',{
	map:{name:'playerId'}
});


ScoreSingle.add({
	matchId:{ type: Types.Relationship, ref: 'Match', index: true },
	flowId:{type:Types.Relationship,ref:'MatchFlow',index:true},
	playerId:{ type: Types.Relationship, ref: 'Player', index: true },
	bow:{ type: Types.Relationship, ref: 'Bow', index: true },
	picture:{type:Types.Url},
	number:{type:String},
	archeryList:{type:Types.NumberArray},
	totalPoint : {type:Number},
	createTime:{type:Types.Date},
	remarks:{type:String},
	devices:{type:Types.Relationship,ref:'Devices',index:true}
});

ScoreSingle.defaultColumns = 'matchId, flowId|20%, playerId|20%, bow|20%,picture,number,archeryList,totalPoint,createTime,remarks,devices';
ScoreSingle.register();

