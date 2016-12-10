import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import { Link } from 'react-router';

export default class Header extends React.Component {

	render() {
		return (
			<div className="starter">
				<h1 className="largefont">twitchnow.fyi</h1>
				<h3><strong>{this.props.summary.viewers.toLocaleString()}</strong> <span className="text-muted"> viewers </span> </h3>
				<h3><strong>{this.props.summary.channels.toLocaleString()}</strong> <span className="text-muted"> channels </span> </h3>
			</div>
			)
	}
}