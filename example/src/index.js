import React from 'react';
import ReactDOM from 'react-dom';
import MadeBy from '../../src/components/Feedback';

const App = React.createClass({
	render() {
		return (
			<div>
				<MadeBy />
			</div>
		);
	},
});

ReactDOM.render(<App />, document.getElementById('example'));