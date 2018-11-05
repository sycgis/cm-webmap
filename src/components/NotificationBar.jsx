import React, { Component } from "react";

export class NotificationBar extends Component {
	render() {
		return (
			<div className="notification-bar">
				<div id="messageBar" className="message-bar" />
				<div id="projection" />
				<div id="rotation" />
				<div id="coordinates" />
			</div>
		);
	}
}

export default NotificationBar;
