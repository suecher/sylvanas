/**
 * Created by Win on 2016/9/18.
 */
/**
 * Created by scan on 16/9/14.
 */
var keystone = require('keystone');


var Bow = new keystone.List('Bow',{
	map: { name: 'bowName' }
});

Bow.add({	
	bowName:{ type: String}

});

Bow.schema.virtual('content.full').get(function () {
	return this.content.extended || this.content.brief;
});

Bow.defaultColumns = '_id,bowName';
Bow.register();
