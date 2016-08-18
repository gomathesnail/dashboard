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
			this.props.DataController.TableData.forEach(function(object, i){
				if (object.name && object.name.toLowerCase().indexOf(searchText.toLowerCase()) > -1) {
					results.push(object.name);
				}
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