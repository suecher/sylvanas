/**
 * Created by Administrator on 2016/9/19.
 */
var keystone = require('keystone');

exports = module.exports = function (req, res) {
	var view = new keystone.View(req, res);
	var locals = res.locals;

	console.log(req.params);
	
	
	res.send({'result':'suc'});
};
