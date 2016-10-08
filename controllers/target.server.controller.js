/**
 * Created by Administrator on 2016/10/8.
 */

var keystone = require('keystone');
var result = require('../config/result.server.model');
var Target = keystone.list('Target');

module.exports = {
	//根据ID搜索赛道信息
	getByIdList:function(idList,callback){
		
		Target.model.find({_id:{$in:idList}})
			.exec()
			.then(function(targetList){
				
				callback(result.createResult(true,targetList));
			},function(err){
				throw err;
				
				callback(result.createResult(false,err));
			});
	}
};
