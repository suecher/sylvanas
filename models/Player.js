/**
 * Created by Win on 2016/9/14.
 */
var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Post Model
 * ==========
 */

var Player = new keystone.List('Player');

Player.add({
	trueName:{type:String,wysiwyg:true,height:200},
	name:{type:String,required:true},
	mobile:{ type: String },
	motto:{ type: String },
	identity:{type:String }
});

Player.schema.virtual('content.full').get(function () {
	return this.content.extended || this.content.brief;
});

Player.defaultColumns = 'id, trueName|20%, name|20%, mobile|20%,identity';
Player.register();

/**
 * Created by Win on 2016/9/18.
 */
