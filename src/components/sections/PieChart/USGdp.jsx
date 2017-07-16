import React from 'react'
import Section from '../../layout/DemoSection.jsx'
import PieChartEmployment from './PieChartEmployment.jsx'

const UsGdp = function () {

    return <Section chartname='Employment By Sector'  chart={ <PieChartEmployment /> } source='https://en.wikipedia.org/wiki/Economy_of_the_United_States#Employment_by_sector' />

}




export default UsGdp
