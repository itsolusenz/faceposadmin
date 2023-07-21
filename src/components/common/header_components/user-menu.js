import React, { Fragment } from "react";
import { Link } from "react-router-dom";
//images import
//import man from "../../../assets/images/pr";
import jsCookie from 'js-cookie';
const UserMenu = () => {
	return (
		<Fragment>
			<li className="onhover-dropdown">
				<div className="media align-items-center">
					<img
						className="align-self-center pull-right img-50 rounded-circle blur-up lazyloaded"
						src={`${process.env.PUBLIC_URL}/profileimg.png`}
						alt="header-user"
					/>
					<div className="dotted-animation">
						<span className="animate-circle"></span>
						<span className="main-circle"></span>
					</div>
				</div>
				<ul className="profile-dropdown onhover-show-div p-20 profile-dropdown-hover">
					{/*<li>
						<Link to={`${process.env.PUBLIC_URL}/accounts/admin/edit/${jsCookie.get('adminloginid')}`}>
							<i data-feather="user"></i>Edit Profile
						</Link>
	</li>*/}
					{/*	<li>
						<a href="#javaScript">
							<i data-feather="mail"></i>Inbox
						</a>
					</li>
					<li>
						<a href="#javaScript">
							<i data-feather="lock"></i>Lock Screen
						</a>
					</li>
					<li>
						<a href="#javaScript">
							<i data-feather="settings"></i>Settings
						</a>
				</li>*/}
					<li>
						<Link to={`${process.env.PUBLIC_URL}/`}>
							<i data-feather="log-out"></i>Logout
						</Link>
					</li>
				</ul>
			</li>
		</Fragment>
	);
};

export default UserMenu;
