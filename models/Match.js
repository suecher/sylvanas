/**
 * Created by scan on 16/9/14.
 */
var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Post Model
 * ==========
 */

var Match = new keystone.List('Match', {
	map: { name: 'matchName' },
	autokey: { path: 'slug', from: 'matchName', unique: true },
});

Match.add({
	matchName:{type:String,required:true},
	describe:{type:String,wysiwyg:true,height:200},
	startTime:{ type: Date, default: Date.now },
	deadline:{ type: Date, default: Date.now },
	finish:{type:Boolean,default:false}
	
});

Match.schema.virtual('content.full').get(function () {
	return this.content.extended || this.content.brief;
});

Match.defaultColumns = 'title, state|20%, author|20%, publishedDate|20%';
Match.register();
