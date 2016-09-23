/**
 * Created by Administrator on 2016/9/19.
 */


var keystone = require('keystone');
var Types = keystone.Field.Types;

var Devices = new keystone.List('Devices',{
	map:{name:'name'}
});


Devices.add({
	target:{ type: Types.Relationship, ref: 'Target', index: true },
	name:{type:String },
	username:{type:String },
	password:{type:Types.Password ,workFactor:10},
	matchId:{ type: Types.Relationship, ref: 'Match', index: true }
});

Devices.defaultColumns = 'matchId,flowId|20%, playerId|20%, bow|20%,picture,number,archeryList,totalPoint,createTime,remarks,devices';
Devices.register();
