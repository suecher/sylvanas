/**
 * Created by scan on 16/9/14.
 */
var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Post Model
 * ==========
 */

var MatchFlow = new keystone.List('MatchFlow', {
	map: { name: 'flowName' }
});

MatchFlow.add({
	flowName:{type:String,required:true},
	matchId:{ type: Types.Relationship, ref: 'Match', index: true },
	flowType:{type:String},
	attendance:{type:Number},
	sort:{type:Number},
	bow:{ type: Types.Relationship, ref: 'Bow', index: true },
	finish:{type:Boolean }
});

MatchFlow.schema.virtual('content.full').get(function () {
	return this.content.extended || this.content.brief;
});

MatchFlow.defaultColumns = 'title, state|20%, author|20%, publishedDate|20%';
MatchFlow.register();
