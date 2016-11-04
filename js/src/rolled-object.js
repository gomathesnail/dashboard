var React = require('react');
var ReactDOM = require('react-dom');

module.exports = React.createClass({
	render: function() {
		return (
			<div>
				<div>{this.props.children.name}</div>
				<ul>{this.props.children.properties.map(function(object, i){
						return <li key={i} >{object.prefix} : {object.value}</li>;
					})}
				</ul>
			</div>
		)
	}
});