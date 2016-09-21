/**
 * Created by Win on 2016/9/18.
 */
var keystone = require('keystone');
var Types = keystone.Field.Types;

var SignIn = new keystone.List('SignIn',{
	map:{name:'playerId'}
});

SignIn.add({
	matchId:{ type: Types.Relationship, ref: 'Match', index: true },
	playerId:{ type: Types.Relationship, ref: 'Player', index: true },
	number:{type:String},
	createTime:{type:Types.Date}
});


SignIn.schema.virtual('content.full').get(function () {
	return this.content.extended || this.content.brief;
});

SignIn.defaultColumns = 'matchId, state|20%, author|20%, publishedDate|20%';
SignIn.register();
