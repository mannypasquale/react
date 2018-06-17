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

//way you set what ui/specific component will look like
// is with the render() component

// what render method returns will be specifci UI for this component

// component definition kinda
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

 // how we use a component
 // you need to first say which component you want to render!!
 // then the 2nd argument is the DOM node where you want to render the component

 // in this case App is the component we made above and the element id we are going to assign it is 'app'
 // this means in the index.html there will be a div with the id of 'app'
 ReactDOM.render(
 	<App />, // <-- this is JSX too tells you that you actually want to use the componentn 
 	document.getElementById('app')  //once we have our template we gonna have div in their with the id of app
 );

