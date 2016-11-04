var React = require('react');

var SearchResult = require('./searchresult');

module.exports = React.createClass({
	render: function() {
		return (
			<div className="search">
				<input type="text" placeholder="Search..." onChange={this.props.HandleNewSearchText} value={this.props.SearchText} />
				<ul>{(this.props.Results).map(function(object, i){
						return <li key={i}><SearchResult>{object}</SearchResult></li>;
					})}
				</ul>
			</div>
		)
	}
});