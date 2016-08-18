var React = require('react');

module.exports = React.createClass({
	render: function() {
		return (
			<div className="search">
				<input type="text" placeholder="Search..." onChange={this.props.HandleNewSearchText} value={this.props.SearchText} />
				<ul>{(this.props.Results).map(function(object, i){
						return <li key={i} >{object}</li>;
					})}
				</ul>
			</div>
		)
	}
});