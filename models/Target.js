/**
 * Created by Win on 2016/9/18.
 */

var keystone = require('keystone');
var Types = keystone.Field.Types;


var Target = keystone.List('Target',{
	map: { name: 'name'}
});

Target.add({
	matchId:{ type: Types.Relationship, ref: 'Match', index: true },
	name:{type:String},
	area:{type:String} //区域
});



Target.defaultColumns = 'matchId,name,area';
Target.register();
