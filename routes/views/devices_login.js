/**
 * Created by Administrator on 2016/9/19.
 */
var keystone = require('keystone');
var result = require('../../config/result.server.model');
var bcrypt = require('bcrypt-nodejs');

var DevicesController = require('../../controllers/devices.server.controller');


	
exports = module.exports = function (req, res) {
	
	var params = req.body;
	if(params.username){
		DevicesController.login(params.username,params.password,params.matchId,function(result){
			res.send(result);
		});
		
	} else {
		res.send(result.createResult(false,{err:"缺少必要参数或者参数名称错误!"}));
	}
	
};
