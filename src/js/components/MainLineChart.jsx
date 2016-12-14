import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import { ResponsiveContainer, 
		 XAxis, YAxis, CartesianGrid, AreaChart, Area, Tooltip, linearGradient} from 'recharts';


export default class MainLineChart extends React.Component {
	render() {
		const { data } = this.props;
		return (
			<div className="chart">
			<AreaChart width={600} height={225} data={data} 
			margin={{ top: 75, right: 40, left: 40, bottom: 5 }}>
			<defs>
			   <linearGradient id="chartcolor" x1="0" y1="0" x2="0" y2="1">
			     <stop offset="5%" stopColor="rgb(75, 75, 75)" stopOpacity={1}/>
			     <stop offset="95%" stopColor="rgb(75, 75, 75)" stopOpacity={0.4}/>
			   </linearGradient>
			</defs>
			  <XAxis label="time" dataKey="viewers" tickLine={false} tick={false}/>
			  <YAxis label="viewers" type="number" tickLine={false} tick={false} domain={['dataMin - 500', 'dataMax + 500']} />
			  <Area type="monotone" dataKey="viewers" stroke="rgb(200, 170, 200)" fill="url(#chartcolor)" />
			  <Tooltip cursor={false} />
			</AreaChart>
			</div>
			)
	}
}