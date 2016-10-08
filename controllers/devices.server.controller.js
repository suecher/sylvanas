/**
 * Created by Administrator on 2016/10/8.
 */

var keystone = require('keystone');
var result = require('../config/result.server.model');
var bcrypt = require('bcrypt-nodejs');
var TargetController = require('../controllers/target.server.controller');
var _ = require('lodash');

module.exports = {
	login:function(username,password,matchId,callback){
		
		var Devices = keystone.list('Devices');
		
		Devices.model.findOne({username:username})
			.exec()
			.then(function (devices) { //first promise fulfilled
				if(devices != null){

					var salt = bcrypt.genSaltSync(10);

					if(bcrypt.compareSync(password,devices.password)){

						

						TargetController.getByIdList(devices.target,function(targetresult){
							
							
							var clientDevices = devices.toObject();
							clientDevices.target = targetresult.body;
							callback(result.createResult(true,clientDevices));
						});
						
						
					} else {
						callback(result.createResult(false,{err:"密码错误!",code:0}));
					}
				} else {
					callback(result.createResult(false,{err:"没有查询到数据,用户名密码错误或者不存在这个用户!",code:0}));
				}

			}, function (err) { //first promise rejected
				throw err;
			}).then(function (result) { //second promise fulfilled

			//console.log(result);
			//do something with final results
		}, function (err) { //something happened
			
			console.log(err);
		});															
	}
};
