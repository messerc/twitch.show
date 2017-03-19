import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import { ResponsiveContainer, 
		 XAxis, YAxis, ZAxis, CartesianGrid, ScatterChart, Scatter, Tooltip} from 'recharts';


class CustomizedToolTip extends React.Component {
	render() {
		const { active } = this.props;
		if (active) {
			const { payload } = this.props; 
			const displayInTip = payload[0].payload;
			console.log(displayInTip)
		return (
			<div className="well well-sm">
				<h4>{displayInTip.game.name}</h4>
				<hr style={{borderColor: 'rgb(51, 51, 51)'}} />
				<p><span className="text-muted">viewers:  </span>{displayInTip.viewers.toLocaleString()}</p>
				<p><span className="text-muted">channels: </span>{displayInTip.channels.toLocaleString()}</p>
				<p><span className="text-muted">avg viewers/channel: </span> {Math.round(displayInTip.viewers/displayInTip.channels).toLocaleString()}</p>
			</div>
			)
		}
		return null;
	}
}


export default class ScatterPlot extends React.Component {
	render() {
		const { games } = this.props;
		console.log(games.top);
		return (
			<div className="container-fluid col-md-8">
			<ResponsiveContainer height={400}>
				<ScatterChart margin={{ top: 75, right: 70, left: 20, bottom: 5 }}>
					  <XAxis label="channels" dataKey={'channels'} tickLine={false} tick={false}/>
					  <YAxis label="viewers" dataKey={'viewers'} type="number" tickLine={false} tick={false} domain={['dataMin - 500', 'dataMax + 500']} />
					  <ZAxis dataKey={'viewers'} domain={['dataMin', 'dataMax']} range={[0, 300]} name="percentage" unit="%" />
					  <Scatter name="game" data={games.top} isAnimationActive={false} stroke="rgba(200, 170, 200, 1)" fill="rgba(200, 170, 200, 0.7)" />
					  <Tooltip content={<CustomizedToolTip />} />
				</ScatterChart>
			</ResponsiveContainer>
			</div>
			)
	}
}

