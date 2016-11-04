var React = require('react');
var ReactDOM = require('react-dom');
var ReactGridLayout = require('react-grid-layout');

var SearchController = require('./search-controller');
var RolledObject = require('./rolled-object');

var DataController = require('./tables/data-controller');
var Roller = require('./tables/roller');

// JSON loader
var jsonLoader = {
    fetchJSONFile: function(path, callback) {
        var httpRequest = new XMLHttpRequest();
        httpRequest.onreadystatechange = function() {
            if (httpRequest.readyState === 4) {
                if (httpRequest.status === 200) {
                    var data = JSON.parse(httpRequest.responseText);
                    if (callback) callback(data);
                }
            }
        };
        httpRequest.open('GET', path);
        httpRequest.send();
    },

};

// this requests the file and executes a callback with the parsed result once it is available
jsonLoader.fetchJSONFile('data/entities.json', function(data) {
	DataController.setData(data);
	
	var Grid = React.createClass({
		getInitialState: function() {
			return {
				rolledObjects: [],
				layout: [
					{i: 'search', x: 0, y: 0, w: 2, h: 2}
				],
				lastKey: 1
			};
		},
		addGridObject: function(object) {
			var newKey = this.state.lastKey + 1;
			this.setState({
				rolledObjects: [...this.state.rolledObjects, Object.assign(object, {key: newKey.toString()})],
				layout: [...this.state.layout, {i: newKey.toString(), x: 2, y: 0, w: 8, h: 5}],
				lastKey: newKey});
		},
		rollObjectForTableIndex: function(index) {
			return Roller.roll(DataController.selectTable(index));
		},
		
		render: function() {
			return (
				<ReactGridLayout className="layout" layout={this.state.layout} cols={12} rowHeight={30} width={1200}>
					<div key={'search'}><SearchController DataController={DataController} AddGridObject={this.addGridObject} RollObjectForTableIndex={this.rollObjectForTableIndex}/></div>
					{this.state.rolledObjects.map(object => {
						return <div key={object.key}>
							<RolledObject>{object}</RolledObject>
						</div>;
					})}
				</ReactGridLayout>
			)
		}
	});

	ReactDOM.render(
		<Grid />,
		document.getElementById('content')
	);
});