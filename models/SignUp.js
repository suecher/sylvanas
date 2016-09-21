/**
 * Created by Win on 2016/9/18.
 */
var keystone = require('keystone');
var Types = keystone.Field.Types;


var SignUp = keystone.List('SignUp',{
	map: { name: 'playerId'}
});

SignUp.add({
	matchId:{ type: Types.Relationship, ref: 'Match', index: true },
	playerId:{ type: Types.Relationship, ref: 'Player', index: true },
	securityCode:{type:String},
	createTime:{type:Types.Date},
	mobile:{type:String},
	bow:{ type: Types.Relationship, ref: 'Bow', index: true }
});

SignUp.schema.virtual('content.full').get(function () {
	return this.content.extended || this.content.brief;
});



SignUp.defaultColumns = '_id,matchId,playerId,securityCode,mobile,createTime,bow';
SignUp.register();
