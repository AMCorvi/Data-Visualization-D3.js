import React from 'react'
import Section from '../../layout/DemoSection.jsx'
import BarStack from './BarStack.jsx'
import marked from 'marked'

const codemarked  = marked('```js\n' + BarStack + '\n```')

const PerCapita = function () {

    return <Section chartname='Top Countries GDP per capita of employed' code={codemarked} chart={ <BarStack/> } />

}

export default PerCapita
