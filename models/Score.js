/**
 * Created by Win on 2016/9/18.
 */
var keystone = require('keystone');
var Types = keystone.Field.Types;

var Score = new keystone.List('Score',{
	map:{name:'playerId'}
});

Score.add({
	matchId:{ type: Types.Relationship, ref: 'Match', index: true },
	playerId:{ type: Types.Relationship, ref: 'Player', index: true },
	bow:{ type: Types.Relationship, ref: 'Bow', index: true },
	number:{type:String},
	createTime:{type:Types.Date},
	lastTime:{type:Types.Date},
});


Score.defaultColumns = 'matchId, state|20%, author|20%, publishedDate|20%';
Score.register();
