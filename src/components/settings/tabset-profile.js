import React, { Fragment, useState, useEffect } from "react";
import { Tabs, TabList, TabPanel, Tab } from "react-tabs";
import { User, Settings, Clipboard, Archive, MessageSquare, DollarSign, UserPlus, Box, BarChart, ExternalLink } from "react-feather";
import MyDropzone from "../common/dropzone";
import TabsetUser from "../accounts/admin/tabset-user1";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useParams } from "react-router-dom";
import jsCookie from 'js-cookie';
import Moment from 'moment';
import axios from 'axios';
import {
	Button,
	Card,
	CardBody,
	CardHeader,
	Col,
	Container,
	Form,
	FormGroup,
	Input,
	Label,
	Modal,
	ModalBody,
	ModalFooter,
	ModalHeader,
	Row,
} from "reactstrap";

const TabsetProfile = (params) => {
	//const { emplid } = useParams();
	const { empid } = useParams();

	const [startDate, setstartDate] = useState(new Date());
	const [endDate, setendDate] = useState(new Date());
	const [employer, setEmp] = useState([]);
	const [country1, setCountry] = useState([]);
	const [user, setUsers] = useState([]);
	const [datalen, setData] = useState([]);
	const [err, setErr] = useState([]);
	const [suc, setSuc] = useState([]);
	const [erremp, setErremp] = useState([]);
	const [sucemp, setSucemp] = useState([]);
	const [inputname, setInputname] = useState([]);
	const [inputdob, setInputdob] = useState([]);
	const [open, setOpen] = useState(false);


	const [useridadd, setUSerid] = useState([]);

	const [gifbutto, setGifbutt] = useState('');

	const [inputmobile, setInputmobile] = useState([]);
	const [inputemail, setInputemail] = useState([]);
	const [inputpass, setInputpass] = useState([]);

	const onOpenModal = () => {
		setOpen(true);
	};

	const onCloseModal = () => {
		setOpen(false);
	};
	useEffect(() => {
		//toast.success("Successfully Updated.. !");	
		const loadUsers = async () => {
			const response = await axios.get("https://api.laabamone.com/api/v1/Masters/Country");
			console.log('signupsignup', response.data.$values);
			setCountry(response.data.$values);
			setData(response.data.$values.length);

		}
		loadUsers();
		const adminid = jsCookie.get('adminlgoinid');


		fetch(`https://api.laabamone.com/api/v1/Masters/GetEmployerListByID?ID=${empid}`)
			.then(response => response.json())
			.then(json => setEmp(json))



	}, [])
	if (employer.UserId != '' && employer.UserId != null && employer.UserId != undefined) {
		console.log(employer.UserId, 'responseemp');
		fetch(`https://api.laabamone.com/api/v1/GetUserByID?ID=${employer.UserId}`)
			.then(response => response.json())
			.then(json => setUsers(json))
		console.log(user, 'responseuser');
	}

	const registerEmp = async event => {

		const dob1 = event.target.dob.value;
		if (dob1 != '') {
			//alert(event.target.userid.value);
			event.preventDefault();

			let ddate = dob1.split("/");
			const dob = ddate[2] + '-' + ddate[0] + '-' + ddate[1];
			console.log('dob', dob);

			let prefercontact = '';
			let contc = '';
			const contact1 = event.target.PreferredContact1.checked;
			const contact2 = event.target.PreferredContact2.checked;
			const contact3 = event.target.PreferredContact3.checked;

			if ((contact1 == true)) {
				prefercontact += event.target.PreferredContact1.value;
			}

			if ((contact2 == true)) {

				if (prefercontact != '') {
					contc = ',';
				}
				prefercontact += contc + event.target.PreferredContact2.value;
			}
			if ((contact3 == true)) {
				if (prefercontact != '') {
					contc = ',';
				}
				prefercontact += contc + event.target.PreferredContact3.value;
			}
			//	console.log('prefercontact',(prefercontact));

			let type = "Admin";

			console.log('fullname', event.target.fullname.value);
			console.log('Salutation', event.target.salutation.value);
			console.log('gender', event.target.gender.value);
			//console.log('DOB',event.target.dob.value);
			console.log('Address1', event.target.address1.value);
			console.log('Address2', event.target.address2.value);
			console.log('city', event.target.city.value);
			console.log('postcode', event.target.postcode.value);
			console.log('Occupation', event.target.occupation.value);

			//	console.log('Feedback',event.target.feedback.value);

			if (empid != '' && empid != null && empid != undefined) {
				const response = await fetch("https://api.laabamone.com/api/v1/Masters/UpdateEmployer", {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					method: 'POST',
					body: JSON.stringify({ EmployerID: empid, UserID: event.target.userid.value, Salutation: event.target.salutation.value, FullName: event.target.fullname.value, Gender: event.target.gender.value, DOB: dob, Address1: event.target.address1.value, Address2: event.target.address2.value, City: event.target.city.value, PostalCode: event.target.postcode.value, Country: event.target.country.value, Occupation: event.target.occupation.value, PreferredContact: prefercontact, Feedback: 'Facebook,TikTok', Settings: '' }),

				});
				const data = await response.json();
				console.log('dataed', data);
				//const errmessage = data.ErrorMessages.$values[0];

				const res = data.ResponseCode;
				if (res == 'Created') {

					//	setGifbutt('/assets/images/loading.gif'); 
					setErr('');
					setSuc('Successfully Updated..');


				}
				else {
					setErr('errmessage');
					setSuc('');
				}

			}
			else {

				const response = await fetch("https://api.laabamone.com/api/v1/Masters/CreateEmployer", {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					method: 'POST',
					body: JSON.stringify({ UserID: event.target.userid.value, Salutation: event.target.salutation.value, FullName: event.target.fullname.value, Gender: event.target.gender.value, DOB: dob, Address1: event.target.address1.value, Address2: event.target.address2.value, City: event.target.city.value, PostalCode: event.target.postcode.value, Country: event.target.country.value, Occupation: event.target.occupation.value, PreferredContact: prefercontact, Feedback: event.target.feedback.value, Settings: '' }),

				});
				const data = await response.json();
				console.log('data', data);


				const res = data.ResponseCode;
				if (res == 'Created') {
					//setGifbutt('/assets/images/loading.gif');                 
					//toast.success("Successfully Added.. !");							
					setErremp('Employer '.res);
				}
				else {
					const errmessage = 'Error';
					setErremp(errmessage);

				}


			}


		}

	}
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

		if (employer.UserId != '' && employer.UserId != null) {

			const response = await fetch("https://api.laabamone.com/api/v1/UpdateProfile", {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				method: 'POST',
				body: JSON.stringify({ ID: employer.UserId, Password: event.target.password.value, Status: event.target.status.value, ContactNumber: event.target.mob_no.value, SourceCountry: event.target.mob_code.value, UserTypes: type }),

			});
			const data = await response.json();
			console.log('dataed', data);
			const errmessage = data.ErrorMessages.$values[0];

			const res = data.ResponseCode;
			if (res == 'Created') {

				//	setGifbutt('/assets/images/loading.gif'); 
				setErr('');
				setSuc('Successfully Updated..');


			}
			else {
				setErr(errmessage);
				setSuc('');
			}











		}
		else {
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


	}
	{/*} useEffect(() => {	
		
       
                              fetch(`https://jsonplaceholder.typicode.com/todos/${empid}`)
                              .then(response => response.json())
                              .then(json => setEmp(json))
                              
  }, [])*/}

	const handleStartDate = (date) => {

		//console.log(new Date(),'datae')
		setstartDate(date);
		setInputdob(Moment(date).format('DD/MM/YYYY'));
	};

	const handleEndDate = (date) => {
		setendDate(date);
	};
	return (
		<div>
			<Tabs>
				<TabList className="nav nav-tabs tab-coupon">
					<Tab className="nav-link">
						<User className="mr-2" />
						Profile
					</Tab>
					<Tab className="nav-link">
						<Clipboard className="mr-2" />
						Documents
					</Tab>
					<Tab className="nav-link">
						<Archive className="mr-2" />
						Job post
					</Tab>
					<Tab className="nav-link">
						<MessageSquare className="mr-2" />
						Chats
					</Tab>
					<Tab className="nav-link">
						<UserPlus className="mr-2" />
						Employment
					</Tab>
					<Tab className="nav-link">
						<DollarSign className="mr-2" />
						Coins
					</Tab>
					<Tab className="nav-link">
						<BarChart className="mr-2" />
						Calendar
					</Tab>
					<Tab className="nav-link">
						<Box className="mr-2" />
						Cart
					</Tab>
					<Tab className="nav-link">
						<Settings className="mr-2" />
						Settings
					</Tab>
				</TabList>

				<TabPanel>
					<div className="tab-pane fade show active">
						<h5 className="f-w-600 f-16"> &nbsp;&nbsp;&nbsp;User Details</h5>
						<div className="table-responsive profile-table">
							<Fragment>

								<form onSubmit={
									registerUser1
								}>
									<Row className="col-md-12">
										<p style={{ color: 'red' }}>{err}</p>
										<p style={{ color: 'Green', fontSize: '20px' }}>{suc}</p>



										<FormGroup className="row col-md-12">
											<Label className="col-md-2">
												<span>*</span>Mobile No
											</Label>

											<select className="form-control col-md-1" name="mob_code">
												{country1.map((code, i) => (code.CountryID == user['SourceCountry'] ?

													<option value={code.CountryID} key={i} selected>{code.DailingCode}</option>
													:
													<option value={code.CountryID} key={i}>{code.DailingCode}</option>
												))}

											</select> &nbsp;


											<input name="mob_no"
												value={inputmobile == "" ? (user['ContactNumber'] != '' ? user['ContactNumber'] : inputmobile) : inputmobile}
												onChange={e => setInputmobile(e.target.value)}
												placeholder="Enter your mobile" required="" type="text" className="form-control col-xl-3 col-md-3" />
											<Label className="col-md-2">
												<span>*</span>Status
											</Label>
											<select className="form-control col-md-2" name="status"   >

												<option value={1} selected={(user['Status'] == '1') ? 'selected' : ''}>
													Posted
												</option>
												<option value={2} selected={(user['Status'] == '2') ? 'selected' : ''}>
													Pending
												</option>
												<option value={3} selected={(user['Status'] == '3') ? 'selected' : ''}>
													Deleted
												</option>
												<option value={4} selected={(user['Status'] == '4') ? 'selected' : ''}>
													Suspended
												</option>
											</select>
										</FormGroup>




										<FormGroup className="row col-md-12">
											<Label className="col-md-2">
												<span>*</span>Email
											</Label>
											<Input
												className="form-control col-md-4"
												id="validationCustom1"
												type="text"
												required=""
												name="email"
												value={inputemail == "" ? (user['Email'] != '' ? user['Email'] : inputemail) : inputemail}
												onChange={e => setInputemail(e.target.value)}

											/>&nbsp;
											<Label className="col-md-2">
												<span>*</span>Password
											</Label>
											<Input
												className="form-control col-md-2"
												id="validationCustom1"
												type="password"
												required=""
												name="password"
												value={inputpass == "" ? (user['Password'] != '' ? user['Password'] : inputpass) : inputpass}
												onChange={e => setInputpass(e.target.value)}

											/>
											<div className="col-md-1" >

												{((gifbutto != '') && (gifbutto != null)) ?
													<><img src={gifbutto} style={{ width: '100px;', height: '46px', border: '2.5px solid #557191', borderRadius: '30px' }}></img></>
													:
													<>	<Button type="button" color="primary" type="submit">Save</Button></>
												}



											</div>
										</FormGroup>



									</Row>


								</form>


							</Fragment>

							{((useridadd != '' && useridadd != null) || (empid != '' && empid != null)) ?
								<form method="post" onSubmit={registerEmp}>
									<h5 className="f-w-600 f-16"> &nbsp;&nbsp;&nbsp;Employer Details</h5>
									<div className="table-responsive profile-table">
										<Fragment>

											<Row>
												<Col sm="12">

													<p style={{ color: 'red' }}>{erremp}</p>
													<p style={{ color: 'Green', fontSize: '20px' }}>{sucemp}</p>

													<input type="hidden" name="userid" value={useridadd}></input>



													<div className="form-group row" style={{ paddingLeft: '10px' }}>
														<Label className="col-md-2">
															<span>*</span> FullName
														</Label>
														<select className="form-control col-md-1" name="salutation"   >
															<option value="Mr" selected={(employer['Salutation'] == 'Mr') ? 'Selected ' : ''}>Mr</option>
															<option value="Ms" selected={(employer['Salutation'] == 'Ms') ? 'Selected ' : ''}>Ms</option>
															<option value="Mrs" selected={(employer['Salutation'] == 'Mrs') ? 'Selected ' : ''}>Mrs</option>
															<option value="Dr" selected={(employer['Salutation'] == 'D') ? 'Selected ' : ''}>Dr</option>

														</select>

														<Input
															className="form-control col-md-2"
															id="validationCustom0"
															type="text"
															required=""
															name="fullname"
															value={inputname == "" ? (employer['FullName'] != '' ? employer['FullName'] : inputname) : inputname}
															onChange={e => setInputname(e.target.value)}

														/>
														<Label className="col-md-1">
															Gender
														</Label>
														<select className="form-control col-md-2" name="gender"   >
															<option value="Male">Male</option>
															<option value="Female">Female</option>
															<option value="notspecify">Prefer not to specify</option>
														</select>
														<Label className="col-md-1">DOB</Label>
														<DatePicker name="dob" className="col-md-10"
															selected={startDate}
															onChange={handleStartDate}
															value={inputdob == "" ? (employer['Dob'] != '' ? Moment(`${employer['Dob']}`).format('DD/MM/YYYY') : inputdob) : inputdob}
														/>

													</div>


													<div className="form-group row" style={{ paddingLeft: '10px' }}>
														<Label className="col-xl-2 col-md-2">Address 1</Label>
														<Input name="address1"
															className="form-control col-md-6"
															type="text"
															required=""
															value={employer['Address1'] != '' ? employer['Address1'] : ''}
														/>
														<Label className="col-xl-1 col-md-1">City</Label>
														<Input name="city"
															className="form-control col-md-2"
															type="text"
															required=""
															value={employer['City'] != '' ? employer['City'] : ''}
														/>



													</div>

													<div className="form-group row" style={{ paddingLeft: '10px' }}>
														<Label className="col-xl-2 col-md-2">Address 2</Label>
														<Input name="address2"
															className="form-control col-md-6"
															type="text"
															required=""
															value={employer['Address2'] != '' ? employer['Address2'] : ''}
														/>

														<Label className="col-xl-1 col-md-1">Pin</Label>
														<Input name="postcode"
															className="form-control col-md-2"
															type="text"
															required=""
															value={employer['PostalCode'] != '' ? employer['PostalCode'] : ''}
														/>





													</div>

													<div className="form-group row" style={{ paddingLeft: '10px' }}>
														<Label className="col-xl-2 col-md-2">Occupation</Label>
														<Input name="occupation"
															className="form-control col-md-6"
															type="text"
															required=""
															value={employer['Occupation'] != '' ? employer['Occupation'] : ''}
														/>
														<Label className="col-xl-1 col-md-1">Country</Label>

														<select className="form-control col-md-2" name="country">
															{country1.map((code, i) => (code.CountryID == employer['Country'] != '' ?

																<option value={code.CountryID} key={i} selected>{code.CountryName}</option>
																:
																<option value={code.CountryID} key={i}>{code.CountryName}</option>
															))}

														</select>







													</div>

													<div className="form-group row" style={{ paddingLeft: '10px' }}>
														<Label className="col-md-3">
															<span>*</span> Preferred Contact Method
														</Label>
														<Label className=" col-md-2 d-block">
															<Input

																id="edo-ani"
																type="checkbox"
																name="PreferredContact1"
																value="email"
																defaultChecked
															/>Email
														</Label>
														<Label className=" col-md-2 d-block">
															<Input

																id="edo-ani"
																type="checkbox"
																name="PreferredContact2"
																value="sms"

															/>SMS
														</Label>
														<Label className=" col-xl-3 col-md-3 d-block">
															<Input
																className=""
																id="edo-ani"
																type="checkbox"
																name="PreferredContact3"
																value="whatsapp"

															/>Whatsapp
														</Label>

													</div>

													<div className="form-group row" style={{ paddingLeft: '10px' }}>

														<Label className="col-xl-3 col-md-4">Feedback</Label>

														<Label className=" col-md-3 d-block">
															<Input


																type="checkbox"
																name="PreferredContact1"
																value="email"

															/>Search Engine (Google; Yahoo)
														</Label>
														<Label className=" col-md-2 d-block">
															<Input

																id="edo-ani"
																type="checkbox"
																name="PreferredContact1"
																value="email"
																defaultChecked
															/>Facebook
														</Label>
														<Label className=" col-md-2 d-block">
															<Input


																type="checkbox"
																name="PreferredContact1"
																value="email"

															/>Instagram
														</Label>
														<Label className=" col-md-2 d-block">
															<Input


																type="checkbox"
																name="PreferredContact1"
																value="email"

															/>YouTube
														</Label>



													</div>
													<div className="form-group row" style={{ paddingLeft: '10px' }}>
														<Label className="col-md-3">
															&nbsp;
														</Label>
														<Label className=" col-md-1 d-block">
															<Input


																type="checkbox"
																name="PreferredContact1"
																value="email"
																defaultChecked
															/>TikTok
														</Label>
														<Label className=" col-md-5 d-block">
															<Input


																type="checkbox"
																name="PreferredContact1"
																value="email"

															/>Shared post from a Friend/Relative on Follow Us
														</Label>
														<Label className=" col-md-2 d-block">
															<Input


																type="checkbox"
																name="PreferredContact1"
																value="email"

															/>Radio
														</Label>
													</div>
													<div className="form-group row" style={{ paddingLeft: '10px' }}>
														<Label className="col-md-3">
															&nbsp;
														</Label>
														<Label className=" col-md-1 d-block">
															<Input


																type="checkbox"
																name="PreferredContact1"
																value="email"

															/>TV
														</Label>
														<Label className=" col-md-2 d-block">
															<Input


																type="checkbox"
																name="PreferredContact1"
																value="email"

															/>Bus Advertisment
														</Label>
														<Label className=" col-md-3 d-block">
															<Input


																type="checkbox"
																name="PreferredContact1"
																value="email"

															/>MRT Station Advertisment
														</Label>
														<Label className=" col-md-2 d-block">
															<Input


																type="checkbox"
																name="PreferredContact1"
																value="email"

															/>Other
														</Label>
													</div>
													<div className="form-group row" style={{ paddingLeft: '10px' }}>

														{/*}	<Label className="col-xl-3 col-md-4">Feedback</Label>
									
										<Input name="feedback"
											className="form-control col-md-7"
											type="text"
											required=""
											value={ (employer.Feedback.match('TikTok') ) ? employer['Feedback'] : ''}
			/>*/}
														<div className="col-md-2" >
															<Button type="button" color="primary" type="submit">Save</Button>
														</div>
													</div>



												</Col>
											</Row>

										</Fragment>
									</div>







								</form>
								: ''}

						</div>
					</div>
				</TabPanel>

				<TabPanel>
					{/* <div className="tab-pane fade"> */}
					<div className="account-setting">
						<h5 className="f-w-600 f-16">EOP</h5>
						<Card>

							<CardBody>
								<MyDropzone />
							</CardBody>
						</Card>
					</div>
					<div className="account-setting">
						<h5 className="f-w-600 f-16">MOM</h5>
						<Card>

							<CardBody>
								<MyDropzone />
							</CardBody>
						</Card>
					</div>
					<div className="account-setting">
						<h5 className="f-w-600 f-16">IPA</h5>
						<Card>

							<CardBody>
								<MyDropzone />
							</CardBody>
						</Card>
					</div>
					<div className="account-setting">
						<h5 className="f-w-600 f-16">Employment Contract</h5>
						<Card>

							<CardBody>
								<MyDropzone />
							</CardBody>
						</Card>
					</div>
					<div className="account-setting">
						<h5 className="f-w-600 f-16">Insurance Letter</h5>
						<Card>

							<CardBody>
								<MyDropzone />
							</CardBody>
						</Card>
					</div>
					<div className="account-setting">
						<h5 className="f-w-600 f-16">Issuance Letter</h5>
						<Card>

							<CardBody>
								<MyDropzone />
							</CardBody>
						</Card>
					</div>
					<div className="account-setting">
						<h5 className="f-w-600 f-16">OEC</h5>
						<Card>

							<CardBody>
								<MyDropzone />
							</CardBody>
						</Card>
					</div>
					<div className="account-setting">
						<h5 className="f-w-600 f-16">Entry Approval Letter</h5>
						<Card>

							<CardBody>
								<MyDropzone />
							</CardBody>
						</Card>
					</div>


					{/* </div> */}
				</TabPanel>


				<TabPanel>
					<div className="tab-pane fade show active">
						<h5 className="f-w-600 f-16">Job Post</h5>
						<div className="table-responsive profile-table">
							<Form className="needs-validation" noValidate="">

								<Row>
									<Col sm="12">

										<div className="form-group row">
											<Label className="col-xl-3 col-md-4">
												<span>*</span> Job Post ID
											</Label>
											<Input
												className="form-control col-md-7"
												id="validationCustom0"
												type="text"
												required=""
											/>
										</div>
										<div className="form-group row">
											<Label className="col-xl-3 col-md-4">
												<span>*</span> Employer ID
											</Label>
											<Input
												className="form-control col-md-7"
												id="validationCustom0"
												type="text"
												required=""
											/>
										</div>

										<div className="form-group row">
											<Label className="col-xl-3 col-md-4">
												<span>*</span> Post title
											</Label>
											<textarea rows="4" className="form-control col-md-7"></textarea>
										</div>


										<div className="form-group row">

											<Label className="col-xl-12 col-md-12"><span>*</span>Job requirement</Label><br />
										</div>
										<div className="form-group row" style={{ paddingLeft: '30px' }}>
											<Label className="col-xl-3 col-md-4">Job scope</Label>
											<select className="custom-select col-md-7" required="">
												<option value="">--Select--</option>
												<option value="1">House chores</option>
												<option value="2">Cooking</option>
												<option value="3">Marketing</option>
												<option value="4">Gardening</option>
												<option value="5"> Elder Care</option>
												<option value="6">Infant Care</option>
												<option value="7">Child Care</option>
												<option value="8">Pet Care</option>
											</select>
										</div>
										<div className="form-group row" style={{ paddingLeft: '30px' }}>
											<Label className="col-xl-3 col-md-4"><span>*</span>Cooking skill</Label>
											<select className="custom-select col-md-7" required="">
												<option value="">--Select--</option>
												<option value="1">House chores</option>
												<option value="2">Cooking</option>
												<option value="3">Marketing</option>
												<option value="4">Gardening</option>
												<option value="5"> Elder Care</option>
												<option value="6">Infant Care</option>
												<option value="7">Child Care</option>
												<option value="8">Pet Care</option>
											</select>
										</div>
										<div className="form-group row" style={{ paddingLeft: '30px' }}>
											<Label className="col-xl-3 col-md-4">Additional requirement</Label>
											<textarea rows="4" className="form-control col-md-7"></textarea>
										</div>


										<div className="form-group row">
											<Label className="col-xl-12 col-md-12">Work environment <span>*</span></Label><br />
										</div>
										<div className="form-group row" style={{ paddingLeft: '30px' }}>
											<Label className="col-xl-12 col-md-12">Family size</Label><br />
										</div>

										<div className="form-group row" style={{ paddingLeft: '50px' }}>

											<Label className="d-block">
												<Input
													className="radio_animated"
													id="edo-ani"
													type="radio"
													name="prefer_contact"
													defaultChecked
												/>
											</Label>Elderly
											<Label className="col-md-3 d-block">
												<Input
													className="form-control"
													id="validationCustom0"
													type="text"
													value="(65 yr old & above)"
												/>
											</Label>
											<Label className="d-block">
												<Input
													className="radio_animated"
													id="edo-ani"
													type="radio"
													name="prefer_contact"
													defaultChecked
												/>
											</Label>Adult
											<Label className="col-md-2 d-block">
												<Input
													className="form-control"
													id="validationCustom0"
													type="text"
													value="(21~ 64)"
												/>
											</Label>
											<Label className="d-block">
												<Input
													className="radio_animated"
													id="edo-ani"
													type="radio"
													name="prefer_contact"
													defaultChecked
												/>
											</Label>Teen
											<Label className="col-md-2 d-block">
												<Input
													className="form-control"
													id="validationCustom0"
													type="text"
													value="(21~ 64)"
												/>
											</Label>
										</div>
										<div className="form-group row" style={{ paddingLeft: '50px' }}>
											<Label className="d-block">
												<Input
													className="radio_animated"
													id="edo-ani"
													type="radio"
													name="prefer_contact"
													defaultChecked
												/>
											</Label>Child &nbsp;&nbsp;
											<Label className="col-md-3 d-block">
												<Input
													className="form-control"
													id="validationCustom0"
													type="text"
													value="(21~ 64)"
												/>
											</Label>
											<Label className="d-block">
												<Input
													className="radio_animated"
													id="edo-ani"
													type="radio"
													name="prefer_contact"
													defaultChecked
												/>
											</Label>Baby
											<Label className="col-md-2 d-block">
												<Input
													className="form-control"
													id="validationCustom0"
													type="text"
													value="(21~ 64)"
												/>
											</Label>




										</div>

										<div className="form-group row" style={{ paddingLeft: '30px' }}>
											<Label className="col-xl-3 col-md-3">Pet</Label>
											<select className="custom-select col-md-2" >
												<option value="">--Type of pet--</option>

											</select>
											<select className="custom-select col-md-1" >
												<option value="">0</option>
												<option value="">1</option>
												<option value="">2</option>
												<option value="">3</option>

											</select>
											<Label className="col-md-1"><span className="badge badge-secondary">+</span></Label>
										</div>
										<div className="form-group row" style={{ paddingLeft: '30px' }}>
											<Label className="col-xl-3 col-md-3">Housing</Label><br />
											<select className="custom-select col-md-7" required="">
												<option value="">--Select--</option>
												<option value="1">1-3 room apartment</option>
												<option value="2">4-5 room apartment</option>
												<option value="3"> Greater than 5 room apartment`</option>
												<option value="4">Terrace house</option>
												<option value="5"> Bungalow</option>
											</select>

										</div>

										<div className="form-group row">
											<Label className="col-xl-12 col-md-12">Preferred helper’s profile <span>*</span></Label><br />
										</div>
										<div className="form-group row" style={{ paddingLeft: '50px' }}>

											<Label className="col-xl-3 col-md-3 d-block">Age Range</Label>
											<select className="custom-select col-md-7" required="">

												<option value="">--Select--</option>
												<option value="1">20-29</option>
												<option value="2">30-39</option>
												<option value="3"> 40-49</option>
												<option value="4">50 & above	</option>

											</select>

										</div>
										<div className="form-group row" style={{ paddingLeft: '50px' }}>

											<Label className="col-xl-3 col-md-3 d-block">Yrs of experience</Label>
											<select className="custom-select col-md-7" required="">


												<option value="">--Select--</option>
												<option value="1">0</option>
												<option value="2"> 1-4</option>
												<option value="3"> 5-8</option>
												<option value="4"> Greater than 8</option>

											</select>

										</div>
										<div className="form-group row" style={{ paddingLeft: '50px' }}>

											<Label className="col-xl-3 col-md-3 d-block">Nationality</Label>
											<select className="custom-select col-md-7" required="">

												<option value="">--Select--</option>
												<option value="1">Philippines</option>
												<option value="2">Indonesia</option>
												<option value="3"> Myanmar</option>
												<option value="4">India</option>

											</select>

										</div>
										<div className="form-group row" style={{ paddingLeft: '50px' }}>

											<Label className="col-xl-3 col-md-3 d-block">Religion</Label>
											<select className="custom-select col-md-7" required="">

												<option value="">--Select--</option>
												<option value="1">Hindu</option>
												<option value="2">Christian</option>
												<option value="3">Muslim</option>
												<option value="4">Buddhist</option>
												<option value="4">No preference	</option>

											</select>

										</div>
										<div className="form-group row" style={{ paddingLeft: '50px' }}>

											<Label className="col-xl-3 col-md-3 d-block">Diet preference</Label>
											<select className="custom-select col-md-7" required="">

												<option value="">--Select--</option>
												<option value="1">Halal</option>
												<option value="2">Vegetarian</option>

												<option value="3">No preference	</option>

											</select>

										</div>
										<div className="form-group row" style={{ paddingLeft: '50px' }}>

											<Label className="col-xl-3 col-md-3 d-block">Spoken Language</Label>
											<select className="custom-select col-md-7" required="">

												<option value="">--Select--</option>
												<option value="1">English</option>
												<option value="2">Mandarin</option>
												<option value="3">Bahasa</option>
												<option value="4">Tamil</option>
												<option value="5">Hokkien</option>
												<option value="6">Cantonese</option>

											</select>

										</div>


										<div className="form-group row">
											<Label className="col-xl-12 col-md-12">Helper’s benefits <span>*</span></Label><br />
										</div>
										<div className="form-group row" style={{ paddingLeft: '50px' }}>

											<Label className="col-xl-3 col-md-3 d-block">Salary</Label>
											<Input
												className="form-control col-md-7"
												type="text"
												required=""
											/>

										</div>
										<div className="form-group row" style={{ paddingLeft: '50px' }}>

											<Label className="col-xl-3 col-md-3 d-block">Off day</Label>
											<select className="custom-select col-md-7" required="">


												<option value="">--Select--</option>
												<option value="1">Weekly</option>
												<option value="2">Quarterly</option>
												<option value="3"> No Off Day</option>
												<option value="4">Others (pls specify)</option>

											</select>

										</div>
										<div className="form-group row" style={{ paddingLeft: '50px' }}>

											<Label className="col-xl-3 col-md-3 d-block">Accommodation</Label>
											<select className="custom-select col-md-7" required="">


												<option value="">--Select--</option>
												<option value="1">In separate room</option>
												<option value="2">Share</option>
												<option value="3"> Flexible</option>
												<option value="4">To Be Discussed</option>

											</select>

										</div>
										<div className="form-group row" style={{ paddingLeft: '50px' }}>

											<Label className="col-xl-3 col-md-3 d-block">Additional benefit (optional)</Label>
											<Input
												className="form-control col-md-7"
												type="text"
												required=""
											/>

										</div>




										<div className="pull-right"><button type="button" className="btn btn-primary">Save</button></div>

									</Col>
								</Row>
							</Form>
						</div>
					</div>
				</TabPanel>









				<TabPanel></TabPanel>
				<TabPanel>

					<div className="tab-pane fade show active">
						<h5 className="f-w-600 f-16">Employment</h5>
						<div className="table-responsive profile-table">
							<Form className="needs-validation" noValidate="">

								<Row>
									<Col sm="12">

										<div className="form-group row">
											<Label className="col-xl-3 col-md-4">
												<span>*</span> Employment ID
											</Label>
											<Input
												className="form-control col-md-7"
												id="validationCustom0"
												type="text"
												required=""
											/>
										</div>
										<div className="form-group row">
											<Label className="col-xl-3 col-md-4">
												<span>*</span> Employer ID
											</Label>
											<Input
												className="form-control col-md-7"
												id="validationCustom0"
												type="text"
												required=""
											/>
										</div>
										<div className="form-group row">
											<Label className="col-xl-3 col-md-4">
												<span>*</span> Employment ID
											</Label>
											<Input
												className="form-control col-md-7"
												id="validationCustom0"
												type="text"
												required=""
											/>
										</div>
										<div className="form-group row">
											<Label className="col-xl-3 col-md-4">
												<span>*</span> Helper ID
											</Label>
											<Input
												className="form-control col-md-7"
												id="validationCustom0"
												type="text"
												required=""
											/>
										</div>
										<div className="form-group row">
											<Label className="col-xl-3 col-md-4">
												<span>*</span> Supplier ID
											</Label>
											<Input
												className="form-control col-md-7"
												id="validationCustom0"
												type="text"
												required=""
											/>
										</div>




										<div className="account-setting">
											<h5 className="f-w-600 f-16">Packages</h5>
											<Row>
												<Col>
													<div className="form-group row">
														<Label className="col-xl-3 col-md-4">Review</Label>
														<Input
															className="form-control col-md-7"
															type="text"
															required=""
														/>


													</div>



												</Col>
											</Row>
										</div>

										<div className="form-group row">
											<Label className="col-xl-3 col-md-4">
												<span>*</span> Status
											</Label>
											<Input
												className="form-control col-md-7"
												id="validationCustom0"
												type="text"
												required=""
											/>
										</div>
										<div className="account-setting">
											<h5 className="f-w-600 f-16">Orders</h5>
											<div className="form-group row">

												<Label className="col-xl-3 col-md-4">
													<span>*</span> Order
												</Label>
												<Input
													className="form-control col-md-7"
													id="validationCustom0"
													type="text"
													required=""
												/>
											</div></div>

										<div className="form-group row">
											<Label className="col-xl-3 col-md-4">
												<span>*</span> Total Cost
											</Label>
											<Input
												className="form-control col-md-7"
												id="validationCustom0"
												type="text"
												required=""
											/>
										</div>

										<div className="form-group row">
											<Label className="col-xl-3 col-md-4">
												<span>*</span> Total paid
											</Label>
											<Input
												className="form-control col-md-7"
												id="validationCustom0"
												type="text"
												required=""
											/>
										</div>





									</Col>
								</Row>
							</Form>
						</div>
					</div>


				</TabPanel>
				<TabPanel>

					<div className="tab-pane fade show active">
						<h5 className="f-w-600 f-16">Coins</h5>
						<div className="table-responsive profile-table">
							<Form className="needs-validation" noValidate="">

								<Row>
									<Col sm="12">






										<div className="form-group row">
											<Label className="col-xl-3 col-md-4">
												<span>*</span> User ID
											</Label>
											<Input
												className="form-control col-md-7"
												id="validationCustom0"
												type="text"
												required=""
											/>
										</div>
										<div className="account-setting">

											<div className="form-group row">

												<Label className="col-xl-3 col-md-4">
													<span>*</span> Total coin
												</Label>
												<Input
													className="form-control col-md-7"
													id="validationCustom0"
													type="text"
													required=""
												/>
											</div></div>



										<div className="form-group row">
											<Label className="col-xl-3 col-md-4">
												<span>*</span> Coin history
											</Label>
											<Input
												className="form-control col-md-7"
												id="validationCustom0"
												type="text"
												required=""
											/>
										</div>





									</Col>
								</Row>
							</Form>
						</div>
					</div>


				</TabPanel>
				<TabPanel>

					<div className="tab-pane fade show active">
						<h5 className="f-w-600 f-16">Coins</h5>
						<div className="table-responsive profile-table">
							<Form className="needs-validation" noValidate="">

								<Row>
									<Col sm="12">






										<div className="form-group row">
											<Label className="col-xl-3 col-md-4">
												<span>*</span> Calendar ID
											</Label>
											<Input
												className="form-control col-md-7"
												id="validationCustom0"
												type="text"
												required=""
											/>
										</div>
										<div className="account-setting">

											<div className="form-group row">

												<Label className="col-xl-3 col-md-4">
													<span>*</span>User ID
												</Label>
												<Input
													className="form-control col-md-7"
													id="validationCustom0"
													type="text"
													required=""
												/>
											</div></div>



										<div className="form-group row">
											<Label className="col-xl-3 col-md-4">
												<span>*</span> Events
											</Label>
											<Input
												className="form-control col-md-7"
												id="validationCustom0"
												type="text"
												required=""
											/>
										</div>





									</Col>
								</Row>
							</Form>
						</div>
					</div>


				</TabPanel>
				<TabPanel>

					<div className="tab-pane fade show active">
						<h5 className="f-w-600 f-16">Coins</h5>
						<div className="table-responsive profile-table">
							<Form className="needs-validation" noValidate="">

								<Row>
									<Col sm="12">






										<div className="form-group row">
											<Label className="col-xl-3 col-md-4">
												<span>*</span> User ID
											</Label>
											<Input
												className="form-control col-md-7"
												id="validationCustom0"
												type="text"
												required=""
											/>
										</div>
										<div className="account-setting">

											<div className="form-group row">

												<Label className="col-xl-3 col-md-4">
													<span>*</span>Packages
												</Label>
												<Input
													className="form-control col-md-7"
													id="validationCustom0"
													type="text"
													required=""
												/>
											</div></div>



										<div className="form-group row">
											<Label className="col-xl-3 col-md-4">
												<span>*</span> Total price
											</Label>
											<Input
												className="form-control col-md-7"
												id="validationCustom0"
												type="text"
												required=""
											/>
										</div>



									</Col>
								</Row>
							</Form>
						</div>
					</div>


				</TabPanel>
			</Tabs>
		</div>
	);
};

export default TabsetProfile;
