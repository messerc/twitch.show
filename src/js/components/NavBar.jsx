import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';


export default class NavBar extends React.Component {
	render() {
		return (
		<div>
			<Link to="/" activeClassName="active">
				<div className='col-lg-2 col-lg-offset-0 col-md-10 col-md-offset-1 navcard'>
					<div className="col-xs-4">
				   		<i className="fa fa-gamepad fa-2x icon" aria-hidden="true"></i>
				   	</div>
				   	<div className="col-xs-8 nav">
				   		<h5 className="nav">Games</h5>
				   	</div>
				   	<hr className="navline" />
				</div>
			</Link>
			<Link to="streamers">
				<div className='col-lg-2 col-lg-offset-0 col-md-10 col-md-offset-1 navcard'>
					<div className="col-xs-4">
				   		<i className="fa fa-users fa-2x icon" aria-hidden="true"></i>
				   	</div>
				   	<div className="col-xs-8 nav">
				   		<h5 className="nav">Streamers</h5>
				   	</div>
				   	<hr className="navline" />
				</div>
			</Link>
			<Link to="scatter">
				<div className='col-lg-2 col-lg-offset-0 col-md-10 col-md-offset-1 navcard'>
					<div className="col-xs-4">
				   		<i className="fa fa-line-chart fa-2x icon" aria-hidden="true"></i>
				   	</div>
				   	<div className="col-xs-8 nav">
				   		<h5  className="nav">Scatter</h5>
				   	</div>
				   	<hr className="navline" />
				</div>
			</Link>
		</div>
			)
	}
}
