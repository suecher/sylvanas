/**
 * Created by Administrator on 2016/9/30.
 */
var result = require('../../config/result.server.model');
var res1=[{
	
	"name" : "1号赛道",
	"__v" : 0,
	"area" : "A区",	
	},	
	{		
		"name" : "2号赛道",
		"__v" : 0,
		"area" : "A区",		
	}]

exports = module.exports = function (req, res) {

	console.log(req.body);
	if(req.body._id=='57e3a0865e601f0032c789e1'){
		res.send(result.createResult(true,res1));
		
	}else {
		res.send(result.createResult(false,{err:"参数有问题",code:1}));
	}
}
	
	
