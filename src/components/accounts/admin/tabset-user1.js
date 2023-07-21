import React, { Fragment, useState, useEffect } from "react";
import { Tabs, TabList, TabPanel, Tab } from "react-tabs";
import { Card, CardBody, CardHeader, Button, Col, Form, FormGroup, Input, Label, Row } from "reactstrap";
import MyDropzone from "../../common/dropzone";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import jsCookie from 'js-cookie';
import Moment from 'moment';
import axios from 'axios';
const TabsetUser = () => {




	const [employer, setEmp] = useState([]);
	const [country1, setCountry] = useState([]);
	const [useridadd, setUSerid] = useState([]);
	const [datalen, setData] = useState([]);
	const [gifbutto, setGifbutt] = useState('');
	const [err, setErr] = useState([]);
	const [suc, setSuc] = useState([]);
	const [inputmobile, setInputmobile] = useState([]);
	const [inputemail, setInputemail] = useState([]);
	const [inputpass, setInputpass] = useState([]);
	useEffect(() => {
		//toast.success("Successfully Updated.. !");	
		const loadUsers = async () => {
			const response = await axios.get("https://api.laabamone.com/api/v1/Masters/Country");
			console.log('signupsignup', response.data.$values);
			setCountry(response.data.$values);
			setData(response.data.$values.length);

		}
		loadUsers();


	}, [])

	console.log(employer, 'responserrr');
	const registerUser1 = async event => {
		event.preventDefault()

		let type = "Employer";
		let url = "";
		console.log('email', event.target.email.value);
		console.log('password', event.target.password.value);
		console.log('mob_no', event.target.mob_no.value);
		console.log('mob_code', event.target.mob_code.value);
		console.log('status', event.target.status.value);
		console.log('type', type);


		const response = await fetch("https://api.laabamone.com/api/v1/CreateProfile", {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			method: 'POST',
			body: JSON.stringify({ Email: event.target.email.value, Password: event.target.password.value, ContactNumber: event.target.mob_no.value, SourceCountry: event.target.mob_code.value, UserTypes: type }),

		});
		const data = await response.json();
		console.log('data', data);
		const errmessage = data.ErrorMessages.$values[0];
		//url =`accounts/employer/edit/${empid}`;

		const res = data.ResponseCode;
		if (res == 'Created') {
			const userid1 = data.Item['ID'];
			console.log('userid', userid1);
			setErr(res);
			setUSerid(userid1);
			jsCookie.set('empuserid', userid1)

		}
		else {
			setErr(errmessage);

		}
		//window.location.href = `${url}`;





	}

	return (
		<Fragment>

			<form onSubmit={
				registerUser1
			}>
				<Row className="col-md-12">
					<p style={{ color: 'red' }}>{err}</p>
					<p style={{ color: 'Green', fontSize: '20px' }}>{suc}</p>

					<FormGroup className="row col-md-12">
						<Label className="text-center col-xl-12 col-md-12">
							<h3>USER CREATION</h3>
						</Label>

					</FormGroup>

					<FormGroup className="row col-md-12">
						<Label className="col-xl-3 col-md-4">
							<span>*</span>Mobile No
						</Label>

						<select className="form-control col-xl-3 col-md-3" name="mob_code">
							{country1.map((code, i) => (
								<option value={code.CountryID} key={i}>{code.DailingCode}</option>
							))}

						</select> <span className="col-xl-1 col-md-1">&nbsp;</span>


						<input name="mob_no"
							value={inputmobile}
							onChange={e => setInputmobile(e.target.value)}
							placeholder="Enter your mobile" required="" type="text" className="form-control col-xl-4 col-md-4" />

					</FormGroup>

					<FormGroup className="row col-md-12">
						<Label className="col-xl-3 col-md-4">
							<span>*</span>Status
						</Label>

						<select className="form-control col-xl-8 col-md-7" name="status"   >

							<option value={1} selected={(employer['Status'] == '1') ? 'selected' : ''}>
								Posted
							</option>
							<option value={2} selected={(employer['Status'] == '2') ? 'selected' : ''}>
								Pending
							</option>
							<option value={3} selected={(employer['Status'] == '3') ? 'selected' : ''}>
								Deleted
							</option>
							<option value={4} selected={(employer['Status'] == '4') ? 'selected' : ''}>
								Suspended
							</option>
						</select>


					</FormGroup>







					<FormGroup className="row col-md-12">
						<Label className="col-xl-3 col-md-4">
							<span>*</span>Email
						</Label>
						<Input
							className="form-control col-xl-8 col-md-7"
							id="validationCustom1"
							type="text"
							required=""
							name="email"
							value={inputemail}
							onChange={e => setInputemail(e.target.value)}

						/>
					</FormGroup>
					<FormGroup className="row col-md-12 ">
						<Label className="col-xl-3 col-md-4">
							<span>*</span>Password
						</Label>
						<Input
							className="form-control col-xl-8 col-md-7"
							id="validationCustom1"
							type="password"
							required=""
							name="password"
							value={inputpass}
							onChange={e => setInputpass(e.target.value)}

						/>
					</FormGroup>
					<FormGroup className="row col-md-12">
						<div className="pull-right row" style={{ paddingTop: '30px' }}>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
							{((gifbutto != '') && (gifbutto != null)) ?
								<><img src={gifbutto} style={{ width: '100px;', height: '46px', border: '2.5px solid #557191', borderRadius: '30px' }}></img></>
								:
								<>	<Button type="button" color="primary" type="submit">Save</Button></>
							}



						</div>
					</FormGroup>


				</Row>
				<Row className="col-md-12">



				</Row>

			</form>


		</Fragment>
	);

};

export default TabsetUser;
