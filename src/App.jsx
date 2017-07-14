import React, { Component } from 'react'
import 'semantic-ui-css/semantic.min.css'
import { Tab } from 'semantic-ui-react'


import PerCapita from './components/sections/BarStack/PerCapita.jsx'


const styl = {
	bg: {
		background: 'black',
	},
}


const panes = [
	{ menuItem: 'Per Capita GDP Comparisons', render: () => <Tab.Pane > <PerCapita /> </Tab.Pane> },
	{ menuItem: 'Tab 2', render: () => <Tab.Pane>Tab 2 Content</Tab.Pane> },
	{ menuItem: 'Tab 3', render: () => <Tab.Pane>Tab 3 Content</Tab.Pane> },
]

class App extends Component {
	render() {
		return (
			<Tab panes={panes} menu={{ attached: true, tabular: false, secondary: true, pointing: true, color: 'purple' }}  />

		)
	}
}

export default App
