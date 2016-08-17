var React = require('react');
var ReactDOM = require('react-dom');
var ReactGridLayout = require('react-grid-layout');

var Generator = require('./generator');
var DataController = require('./tables/data-controller');

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
	
	var MyFirstGrid = React.createClass({
	  render: function() {
		// layout is an array of objects, see the demo for more complete usage 
		var layout = [
		  {i: 'a', x: 0, y: 0, w: 8, h: 5},
		  {i: 'b', x: 1, y: 0, w: 8, h: 5},
		  {i: 'c', x: 2, y: 0, w: 8, h: 5}
		];
		return (
		  <ReactGridLayout className="layout" layout={layout} cols={12} rowHeight={30} width={1200}>
			<div key={'a'}><Generator tableData={DataController.selectTable(57)} /></div>
			<div key={'b'}><Generator tableData={DataController.selectTable(57)} /></div>
			<div key={'c'}><Generator tableData={DataController.selectTable(57)} /></div>
		  </ReactGridLayout>
		)
	  }
	});

	ReactDOM.render(
		<MyFirstGrid />,
		document.getElementById('content')
	);
});