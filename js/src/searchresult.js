var React = require('react');

var SearchResult = require('./searchresult');

module.exports = React.createClass({
	render: function() {
		return (
			<div className="search-result"><a onClick={this.props.children.loadResult} href={"#" + this.props.children.name}>{this.props.children.name}</a></div>
		)
	}
});