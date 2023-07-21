import React, { Fragment, useState } from "react";
import { Tabs, TabList, TabPanel, Tab } from "react-tabs";
import { User, Unlock } from "react-feather";
import { withRouter, useHistory } from "react-router-dom";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import { ToastContainer, toast } from "react-toastify";
import jsCookie from 'js-cookie';
import "react-toastify/dist/ReactToastify.css";
import axios from 'axios';

const LoginTabset = () => {
	const history = useHistory();
	const [err, setErr] = useState([]);
	const [suc, setSuc] = useState([]);

	const [gifbutto, setGifbutt] = useState([]);

	const clickActive = (event) => {
		document.querySelector(".nav-link").classList.remove("show");
		event.target.classList.add("show");
	};

	const routeChange = () => {
		history.push(`${process.env.PUBLIC_URL}/dashboard`);
	};


	const loginUser = async event => {
		event.preventDefault();
		setGifbutt(`${process.env.PUBLIC_URL}/loading.gif`);
		const data2 = '';
		const Email = event.target.loginemail.value;
		const Password = event.target.loginpassword.value;

		if (Email == 'info@laabamone.ie' && Password == 'Admin123$%^') {

			history.push(`${process.env.PUBLIC_URL}/dashboard`);
			setSuc('Logged in...');
			jsCookie.set('adminloginid', '1');
			setErr('');

		}
		else {
			setErr('Incorrect username and password');
			setSuc('');
			setGifbutt('');
		}
		/*	const response = axios.get(`https://api.laabamone.com/api/v1/LoginVerification?Email=${Email}&password=${Password}&RollID=5`)
				.then(response => {
					const res = response.data.UserId;
					console.log('response', res);
					history.push(`${process.env.PUBLIC_URL}/dashboard`);
					setSuc('Logged in...');
					jsCookie.set('adminloginid', res);
					setErr('');
	
	
	
				}).catch((error) => {
					console.log(error);
					setTimeout(function () {
						//setGifbutt(`${process.env.PUBLIC_URL}/loading.gif`); 
						setErr('Incorrect username and password');
						setSuc('');
						setGifbutt('');
					}, 10000);
				})*/



	}
	const registerUser = async event => {
		event.preventDefault();
		const Email = event.target.email.value;
		const response = await axios.get(`https://api.laabamone.com/api/v1/ForgotPassword?Email=${Email}&RoleID=5`);
		console.log('data', response.data);
		const data = response.data;
		if (data === true) {
			setSuc('Password Sent to your Mail.Please check your Email.');
			setErr('');
		}
		else {
			setSuc('')
			setErr('Invalid Email Address');
		}

	}

	return (
		<div>
			<Fragment>
				<Tabs>
					<TabList className="nav nav-tabs tab-coupon">
						<Tab className="nav-link" onClick={(e) => clickActive(e)}>
							<User />
							Login
						</Tab>
						<Tab className="nav-link" onClick={(e) => clickActive(e)}>
							<Unlock />
							Forgot password
						</Tab>
					</TabList>

					<TabPanel>
						<p style={{ color: 'Green' }}>{suc}</p>
						<p style={{ color: 'red' }}>{err}</p>
						<form action="/" className="" onSubmit={loginUser}>

							<FormGroup>
								<Input
									required
									name="loginemail"
									type="email"
									className="form-control"
									placeholder="Username"
									id="exampleInputEmail1"
								/>
							</FormGroup>
							<FormGroup>
								<Input
									required
									name="loginpassword"
									type="password"
									className="form-control"
									placeholder="Password"
								/>
							</FormGroup>
							<div className="form-terms">
								<div className="custom-control custom-checkbox mr-sm-2">
									<Input
										type="checkbox"
										className="custom-control-input"
										id="customControlAutosizing"
									/>
									<Label className="d-block">
										<Input
											className="checkbox_animated"
											id="chk-ani2"
											type="checkbox"
										/>
										Remember Me{" "}

									</Label>
								</div>
							</div>
							<div className="form-button">


								{((gifbutto != '') && (gifbutto != null)) ?
									<><img src={gifbutto} style={{ width: '100px;', height: '46px', border: '2.5px solid #557191', borderRadius: '30px' }}></img></>
									:
									<><Button color="primary" type="submit" >Login</Button></>
								}




							</div>
							<div className="form-footer">
								{/*<span>Or Login up with social platforms</span>*/}
								<ul className="social">
									{/*}	<li>
										<a href="/#">
											<i className="icon-google"></i>
										</a>
						         </li>*/}
									{/*<li>
										<a href="/#">
											<i className="icon-twitter-alt"></i>
										</a>
									</li>
									<li>
										<a href="/#">
											<i className="icon-instagram"></i>
										</a>
									</li>
									<li>
										<a href="/#">
											<i className="icon-pinterest-alt"></i>
										</a>
									</li>*/}
								</ul>
							</div>

						</form>
					</TabPanel>
					<TabPanel>
						<p style={{ color: 'Green' }}>{suc}</p>
						<p style={{ color: 'red' }}>{err}</p>
						<form action="/" method="post" onSubmit={registerUser} >

							<FormGroup>
								<Input
									required=""
									name="email"
									type="email"
									className="form-control"
									placeholder="Enter email"
									id="exampleInputEmail12"
								/>
							</FormGroup>


							<div className="form-button">
								<Button
									color="primary"
									type="submit"
								//onClick={() => ForgotPassword()}
								>
									Forgot password
								</Button>
							</div>


						</form>
					</TabPanel>
				</Tabs>
			</Fragment>
		</div>
	);
};

export default withRouter(LoginTabset);
