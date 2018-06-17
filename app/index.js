var React = require('react');
var ReactDOM = require('react-dom');
require('./index.css'); 
//any css we include will be included into our application when budled
 
 //component properties maybe

//component may have state too it
// lifecycle event --> hooks tie in to know when certain events happen
// UI of component is most important and required!!

//app is the name of component


//not valid js syntax so when ran through webpack it becomes something else
 class App extends React.Component { 
 	render() {
 		return (
 			<div> 
 				Hello React Training
 			</div>
 		)
 	}

 }

 //take component and render to react-dom

 ReactDOM.render(
 	<App />, 
 	document.getElementById('app')
 );

