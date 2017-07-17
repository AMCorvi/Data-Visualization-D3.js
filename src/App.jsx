import React, { Component } from 'react'
import 'semantic-ui-css/semantic.min.css'
import { Tab } from 'semantic-ui-react'

import USgdp from './components/sections/PieChart/USGdp.jsx'
import PerCapita from './components/sections/BarStack/PerCapita.jsx'


const styl = {
	bg: {
		background: 'black',
	},
}


const panes = [
    { menuItem: 'React-D3', render: () => <Tab.Pane> <PerCapita /> <USgdp /> </Tab.Pane> },
	{ menuItem: 'Classic D3', render: () => <Tab.Pane>Tab 2 Content</Tab.Pane> },
]

class App extends Component {
	render() {
		return (
            <Tab panes={panes} menu={{ attached: true, tabular: false, 
                secondary: true, pointing: true, color: 'red' }}  />

		)
	}
}

export default App
