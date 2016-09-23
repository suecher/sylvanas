/**
 * Created by Administrator on 2016/9/19.
 */
var keystone = require('keystone');
var result = require('../../config/result.server.model');
var bcrypt = require('bcrypt-nodejs');
exports = module.exports = function (req, res) {
	
	var params = req.body;
	if(params.username){
		var Devices = keystone.list('Devices');
		Devices.model.findOne({username:params.username})			
			.exec()
			.then(function (devices) { //first promise fulfilled
				if(devices != null){

					var salt = bcrypt.genSaltSync(10);
					
					if(bcrypt.compareSync(params.password,devices.password)){
						
						res.send(result.createResult(true,devices));
					} else {
						res.send(result.createResult(false,{err:"密码错误!",code:0}));
					}
				} else {
					res.send(result.createResult(false,{err:"没有查询到数据,用户名密码错误或者不存在这个用户!",code:0}));
				}

			}, function (err) { //first promise rejected
				throw err;
			}).then(function (result) { //second promise fulfilled
			
			console.log(result);
			//do something with final results
		}, function (err) { //something happened
			//catch the error, it can be thrown by any promise in the chain
			console.log(err);
		});
	} else {
		res.send(result.createResult(false,{err:"缺少必要参数或者参数名称错误!"}));
	}
	
	Devices = keystone.list('Devices');
	
	
	
	
	
};
