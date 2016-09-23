/**
 * Created by Win on 2016/9/23.
 */

var keystone = require('keystone');
var result = require('../../config/result.server.model');


exports = module.exports = function (req, res) {
	var params = req.body;
	if(params.devicesId){
		var Target = keystone.list('Target');
		Target.model.find()
			.exec()
			.then(function (Target) { //first promise fulfilled
				res.send(Target);
			}, function (err) { //first promise rejected
				throw err;
			}).then(function (result) { //second promise fulfilled
			//do something with final results
		}, function (err) { //something happened
			//catch the error, it can be thrown by any promise in the chain
			console.log(err);
		});										
	} else {
		res.send(result.createResult(false,{err:"缺少必要参数或者参数名称错误!"}));
	}
};
