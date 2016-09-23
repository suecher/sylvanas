/**
 * Created by Win on 2016/9/22.
 */

module.exports = {
	/**
	 * @description 返回结构
	 * @param {Boolean.返回的结果是否是正确的} result
	 * 返回的结果是否是正确的
	 *@param {String.错误的类型} errorType
	 * 错误的类型
	 * @param {String.错误的内容} errorMessage
	 * 错误的内容
	 * @param {Object.成功后返回的结构信息.} body
	 * 成功后返回的结构信息.
	 **/
	createResult:function(result,body){
		var resultObj = {};
		resultObj.result = result;
		resultObj.body = body;
		return resultObj;
	}
};
