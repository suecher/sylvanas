
/**
* Created by Administrator on 2016/9/28.
*/

var result = require('../../config/result.server.model');

exports = module.exports = function (req, res) {

	console.log(req.body);



	if(req.body.username != undefined){
		res.send(result.createResult(true,{body:""}));
	} else {
		res.send(result.createResult(false,{err:"参数有问题",code:1}));
	}


};
