import React from 'react';
import ReactDOM from 'react-dom';
import { IndexLink, Link } from 'react-router';


export default class NavBar extends React.Component {

	render() {
		return (
		<div>
			<IndexLink to="/" style={{color: 'rgba(104, 104, 104, 0.5)' }} activeStyle={{color: 'rgba(165, 210, 95, 1)'}} activeClassName="active">
				<div className='col-lg-2 col-lg-offset-0 col-xs-6 col-xs-offset-3 navcard'>
				   	<i className="fa fa-gamepad fa-2x icon" aria-hidden="true"> <span style={{fontSize: '14px', fontFamily: 'Helvetica'}}> Games</span></i>
				</div>
			</IndexLink>
			<Link to="streamers" style={{color: 'rgba(104, 104, 104, 0.5)'}} activeStyle={{color: 'rgba(165, 210, 95, 1)'}} activeClassName="active">
				<div className='col-lg-2 col-lg-offset-0 col-xs-6 col-xs-offset-3 navcard'>
				   	<i className="fa fa-users fa-2x icon" aria-hidden="true"> <span style={{fontSize: '14px', fontFamily: 'Helvetica'}}> Streamers</span></i>
				</div>
			</Link>
			<Link to="scatter" style={{color: 'rgba(104, 104, 104, 0.5)'}} activeStyle={{color: 'rgba(165, 210, 95, 1)'}} activeClassName="active">
				<div className='col-lg-2 col-lg-offset-0 col-xs-6 col-xs-offset-3 navcard'>
				   	<i className="fa fa-line-chart fa-2x icon" aria-hidden="true"> <span style={{fontSize: '14px', fontFamily: 'Helvetica'}}> Scatter</span></i>
				</div>
			</Link>
		</div>
			)
	}
}

