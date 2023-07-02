import React from 'react'
import {ResponsiveContainer, BarChart as Chart, CartesianGrid, XAxis, Tooltip, YAxis, Bar, } from 'recharts'


const BarChart = ({data}) => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <Chart data={data} margin={{top:50}}>
        <CartesianGrid strokeDasharray='3 3'/>
        <XAxis dataKey='date'/>
        <YAxis allowDecimals={false}/>
        <Tooltip/>
        <Bar dataKey='count' fill='#2cb1bc' barSize={75} />
      </Chart>
    </ResponsiveContainer>
  )
}

export default BarChart
