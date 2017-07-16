import React from 'react'
import Section from '../../layout/DemoSection.jsx'
import BarStack from './BarStack.jsx'


const PerCapita = function () {

    return <Section chartname='Top Countries GDP Per Capita Employed' source="https://en.wikipedia.org/wiki/List_of_countries_by_GDP_(PPP)_per_person_employed" chart={ <BarStack/> } />

}


export default PerCapita
