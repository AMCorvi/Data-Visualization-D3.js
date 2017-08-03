import React from 'react'
import Section from '../../layout/DemoSection.jsx'
import TreeChart from './TreeChart.jsx'

const CorvusLineage = function () {

    return <Section chartname='Lineage Of Corvus Species'  chart={ <TreeChart /> } source='https://en.wikipedia.org/wiki/List_of_Corvus_species' />

}




export default CorvusLineage
