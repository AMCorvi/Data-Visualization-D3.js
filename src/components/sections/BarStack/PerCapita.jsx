import React from 'react'
import Section from '../../layout/DemoSection.jsx'
import BarStack from './BarStack.jsx'
import RMD from 'react-markdown'
import marked from 'marked'
import chartMD from './BarStack.md'

const codemarked  = marked('```js\n' + chartMD  + '\n```')

const PerCapita = function () {

    return <Section chartname='Top Countries GDP per capita of employed' code={ <RMD source={ codemarked }/> } chart={ <BarStack/> } />

}


export default PerCapita
