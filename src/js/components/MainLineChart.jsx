import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import { ResponsiveContainer, 
		 XAxis, YAxis, CartesianGrid, AreaChart, Area, Tooltip, linearGradient} from 'recharts';


class CustomizedToolTip extends React.Component {
	render() {
		const { active } = this.props;
		if (active) {
			const { payload } = this.props; 
			const displayInTip = payload[0].payload;
		return (
			<div className="well well-sm">
				<p><span className="text-muted">viewers:  </span>{displayInTip.viewers.toLocaleString()}</p>
				<p><span className="text-muted">time: </span>{displayInTip.date}</p>
			</div>
			)
		}
		return null;
	}
}


export default class MainLineChart extends React.Component {
	render() {
		const { data } = this.props;
		return (
			<div className="chart">
			<ResponsiveContainer height={240}>
				<AreaChart data={data} margin={{ top: 75, right: 40, left: 30, bottom: 5 }}>
					<defs>
					   <linearGradient id="chartcolor" x1="0" y1="0" x2="0" y2="1">
					     <stop offset="5%" stopColor="rgb(75, 75, 75)" stopOpacity={1}/>
					     <stop offset="95%" stopColor="rgb(75, 75, 75)" stopOpacity={0.4}/>
					   </linearGradient>
					</defs>
					  <XAxis label="time" dataKey="viewers" tickLine={false} tick={false}/>
					  <YAxis label="viewers" type="number" tickLine={false} tick={false} domain={['dataMin - 500', 'dataMax + 500']} />
					  <Area type="monotone" 
					  dataKey="viewers" 
					  stroke="rgb(200, 170, 200)" 
					  fill="url(#chartcolor)" 
					  isAnimationActive={false} 
					  activeDot={{stroke: "rgb(200, 170, 200)", fill: "rgb(200, 170, 200)", strokeWidth: 2, r: 2}} />
					  <Tooltip content={<CustomizedToolTip  />} coordinate={{x: 500, y: 50}} cursor={false} />
				</AreaChart>
			</ResponsiveContainer>
			</div>
			)
	}
}