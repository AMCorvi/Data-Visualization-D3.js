import React from 'react'
import { PieTooltip } from 'react-d3-tooltip'
import employmentBySector from '../../../data/EmployedbySector.json'

const styl = {
    chart: {
        width: "100%" 
    }
}
const width = 800,
    height = 600,
    name = function (data) {
      return data["Industry"]
    },
    value = function (data) {
        return data['Percent (%)']
    },
    chartSeries = [
                     {
                       "field": "Retail trade",
                       "name": "Retail trade"
                     },
                     {
                       "field": "Accommodation and food services",
                       "name": "Accommodation and food services"
                     },
                     {
                       "field": "Professional and technical services",
                       "name": "Professional and technical services"
                     },
                     {
                       "field": "Administrative and waste service",
                       "name": "Administrative and waste service"
                     },
                     {
                       "field": "Local education",
                       "name": "Local education"
                     },
                     {
                       "field": "Ambulatory health care services",
                       "name": "Ambulatory health care services"
                     },
                     {
                       "field": "Local government (excluding education)",
                       "name": "Local government (excluding education)"
                     },
                     {
                       "field": "Finance and insurance",
                       "name": "Finance and insurance"
                     },
                     {
                       "field": "Construction",
                       "name": "Construction"
                     },
                     {
                       "field": "Wholesale trade",
                       "name": "Wholesale trade"
                     },
                     {
                       "field": "Hospitals",
                       "name": "Hospitals"
                     },
                     {
                       "field": "Transportation and warehousing",
                       "name": "Transportation and warehousing"
                     },
                     {
                       "field": "Non-durable goods manufacturing",
                       "name": "Non-durable goods manufacturing"
                     },
                     {
                       "field": "Educational services",
                       "name": "Educational services"
                     },
                     {
                       "field": "Nursing and residential care",
                       "name": "Nursing and residential care"
                     },
                     {
                       "field": "Membership associations and organizations",
                       "name": "Membership associations and organizations"
                     },
                     {
                       "field": "Federal government",
                       "name": "Federal government"
                     },
                     {
                       "field": "Social assistance",
                       "name": "Social assistance"
                     },
                     {
                       "field": "Information",
                       "name": "Information"
                     },
                     {
                       "field": "State government (excluding education)",
                       "name": "State government (excluding education)"
                     },
                     {
                       "field": "State education",
                       "name": "State education"
                     },
                     {
                       "field": "Management of companies and enterprises",
                       "name": "Management of companies and enterprises"
                     },
                     {
                       "field": "Arts, entertainment and recreation",
                       "name": "Arts, entertainment and recreation"
                     },
                     {
                       "field": "Real estate, rental and leasing",
                       "name": "Real estate, rental and leasing"
                     },
                     {
                       "field": "Personal and laundry services",
                       "name": "Personal and laundry services"
                     }
    ],
    innerRadius = 40


const PieChartEmployment = () => {


    return <PieTooltip
        
      title='Employment By Sector'
      data= {employmentBySector}
      width= {width}
      height= {height}
      chartSeries= {chartSeries}
      value = {value}
      name = {name}


      style={styl.chart}
    />

}

export default PieChartEmployment

