/**
 * Created by Win on 2016/9/23.
 */
var bcrypt = require('bcrypt-nodejs');
var keystone = require('keystone');

exports = module.exports = function (req, res) {
	
	var salt = bcrypt.genSaltSync(10);
	var hash  = bcrypt.hashSync('internet',salt);
	var hash2  = bcrypt.hashSync('internet',salt);

	
	
	res.send(bcrypt.compareSync('internet2','$2a$10$0fz3t9EMud.QaZ/zx9LX3O8Sbf2IC/4WKmWepbPYpOTNc9I2Iy3e2'));

};
