var React = require('react');

var Search = require('./search');

module.exports = React.createClass({
	getInitialState: function() {
		return {
			searchText: '',
			results: []
		};
	},
	handleNewSearchText: function(event) {
		var searchText = event.target.value;
		if (searchText != '') {
			var results = [];
			var i = 0;
			this.props.DataController.TableData.forEach(object => {
				if (object.name && object.name.toLowerCase().indexOf(searchText.toLowerCase()) > -1) {
					// create another variable to clone the i counter
					var index = i;
					results.push({
						name: object.name,
						loadResult: () => {
							this.props.AddGridObject(this.props.RollObjectForTableIndex(index));
						}
					});
				}
				i++;
			});
			this.setState({
				searchText: searchText,
				results: results
			});
		} else {
			this.setState({
				searchText: '',
				results: []
			});
		}
	},

	render: function() {
		return (
			<Search SearchText={this.state.searchText} HandleNewSearchText={this.handleNewSearchText} Results={this.state.results} />
		)
	}
});