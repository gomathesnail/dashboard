module.exports = new function() {
	this.setData = function(tableData) {
		this.TableData = tableData;
	}

	// Send a table to savedData.generated by specifying a table index to get it from the dataTable
	this.selectTable = function(index) {
		//console.log(this.TableData[index]);
		return this.TableData[index];
	};
};