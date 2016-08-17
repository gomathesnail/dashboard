var React = require('react');
var ReactDOM = require('react-dom');

var Roller = require('./tables/roller');

module.exports = React.createClass({
	render: function() {
		return (
			<div>
				<div>{this.props.tableData.name}</div>
				<ul>{Roller.roll(this.props.tableData).properties.map(function(object, i){
						return <li key={i} >{object.prefix} : {object.value}</li>;
					})}
				</ul>
			</div>
		)
	}
});