import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import { Link } from 'react-router';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';


class CustomizedToolTip extends React.Component {
	render() {
		const { active } = this.props;
		if (active) {
			const { label, payload, summary } = this.props; 
			const displayInTip = payload[0].payload;
			const percentageOfTotal = Math.round((displayInTip.viewers / summary.viewers) * 100).toLocaleString();
		return (
			<div className="well well-lg">
			  <img src={displayInTip.banner} alt="http://ellipsispress.com/wp-content/uploads/Ellipsis_Logo.gif"  />
			  <h3>{displayInTip.streamer}</h3>
			  <h4>{displayInTip.viewers.toLocaleString()}<span className="text-muted"> viewers</span></h4>
			  <h4>{percentageOfTotal}% <span className="text-muted">of {displayInTip.game} viewers</span></h4>
			  <h6 className="text-muted"><em>{displayInTip.title}</em></h6>
			</div>
			)
		}
		return null;
	}
}

class CustomizedLabel extends React.Component {
	render() {
	const {x, y, stroke, payload, summary} = this.props;
	const percentageOfTotal = Math.round((payload.viewers / summary.viewers) * 100).toLocaleString();
    return	(
     <text x={x} y={y} dx={15} 
    			 fontSize={14} 
    			 fill = "rgb(255, 255, 255)"
    			 textAnchor="middle">{percentageOfTotal}%
    	   </text>
    	   )
	}
}


export default class GamesChart extends React.Component {
		
	render() {
		const { data } = this.props;
		console.log(data);
		return(
			<div className="row">
				<ResponsiveContainer height={600}>
				  <BarChart data={data}
				            margin={{top: 50, right: 30, left: 80, bottom: 5}}
				            layout="vertical">
				    <XAxis dataKey="viewers" type="number" axisLine={false} tickLine={false} tick={false} />
				    <YAxis type="category" dataKey="streamer" tickLine={false} tick={{fill: 'rgb(255, 255, 255)'}} />
				    <Tooltip content={<CustomizedToolTip summary={this.props.summary}/>}  itemStyle={{background: '#333'}} cursor={{fill: '#333'}} />
				    <Bar dataKey="viewers" fill="rgb(55, 61, 66)" label={<CustomizedLabel summary={this.props.summary}/>} isAnimationActive={false} />
				  </BarChart>
				</ResponsiveContainer>
			</div>
				)
			}	
	}
