import React, { Component } from 'react';

export default class TapTile extends React.Component {
	render() {
		return (
			<div
				className="tap-tile">
				<div
					className="tile-left">
					<h1>{this.props.tapNumber}</h1>
				</div>

				<div
					className="information">
					<h1>{this.props.itemName}</h1>
					<h3>{this.props.ownerName}</h3>
					<p>{this.props.description}</p>
				</div>

				<div 
					className="tile-right">

					<h1
						className={this.props.percentageClass}>
						{`${this.props.remainingPercentage}%`}
					</h1>

				</div>
			</div>
		);
	}
}
