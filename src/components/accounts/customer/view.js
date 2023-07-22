import React, { Fragment, useState, useEffect } from "react";
import Breadcrumb from "../../common/breadcrumb";
import data from "../../../assets/data/admin_list";
import Datatable from "../../common/datatable";
import { Modal, Button, Card, CardBody, CardHeader, Col, Container, Row, ModalHeader, ModalBody, Form, FormGroup, Label, Input, ModalFooter } from "reactstrap";
import { Search } from "react-feather";
import jsCookie from 'js-cookie';
import axios from "axios";
import { decode as base64_decode, encode as base64_encode } from 'base-64';

const Customerview = () => {

	const [open, setOpen] = useState(false);
	let chartData = [];
	const onOpenModal = () => {
		setOpen(true);
	};

	const onCloseModal = () => {
		setOpen(false);
	};

	const [ninjas, setUsers] = useState([]);
	const [userarry, setArrayy] = useState([]);
	const [q, setQ] = useState("");
	const [find, setfind] = useState("0");
	//	const [ninjas, setUsers1] = useState([]);
	useEffect(() => {
		const loadUserslov = async () => {
			const response = await axios.get("https://www.laabamone.com/Facepos/api.php?eventtype=Getprofilelist_admin");
			//console.log('loc',response.data); 
			setUsers(response.data);

		}

		loadUserslov();
	}, [])
	//console.log('ninjas', ninjas);
	function setarrayvalues(getarr) {
		setArrayy(getarr);
	}
	function Clear(val) {
		setQ(val);
		setArrayy([]);
		setfind('0');
	}

	function search() {

		let matches = [];
		console.log(ninjas.filter((row) => row.Email.toLowerCase().indexOf(q) > -1));
		matches = ninjas.filter(
			(row) =>
			(row.Email.toLowerCase().indexOf(q) > -  1 || row.ContactNumber.toLowerCase().indexOf(q) > -1 || row.UserNumber.indexOf(q) > -1
			));
		console.log('matches', matches);
		setarrayvalues(matches);

		if (matches == '') {
			setfind('1');
		}

	}
	const Getprofileimg = (a) => {
		const proimg = base64_decode('aHR0cHM6Ly9mYWNlcG9zdXBkYXRlZGJ1Y2tldG5ldzEyMzQ1NjE1Mzc1OC1kZXYuczMuZXUtd2VzdC0xLmFtYXpvbmF3cy5jb20vcHVibGljL3Byb2ZpbGUvTE9HSU1BR0UwLjMyMjE4NzA2MzM4OTY3NjM0LmpwZw==')
		return proimg;
	}
	if (userarry != '') {


		return (

			<Fragment>
				<Breadcrumb title="Admin" parent="Accounts Extension" />

				<Container fluid={true}>
					<Row>

						<Col sm="12">
							<Card>
								<CardHeader>
									<Row>
										<Col sm="6"><h5>Customer Listing</h5></Col>
										{/*<Col sm="6">
											<div className="btn-popup pull-right">
												<a href="/accounts/Admin/add">
													<button type="button" data-original-title="test" className="btn btn-light-gradien">Add Admin</button>
												</a>
											</div>
		</Col>*/}
									</Row>
								</CardHeader>
								<CardBody>
									<h4>Search Result for - {q}</h4>
									<div className="btn-popup pull-right">
										<Form className="form-inline search-form">
											<FormGroup>
												<input style={{ border: '1px solid #85bc57', width: '400px' }}
													className={"form-control-plaintext "}
													type="search"
													placeholder="Search.." value={q} onChange={(e) => Clear(e.target.value)}
												/>
												<span style={{ color: '#85bc57', border: '1px solid #85bc57', padding: '6px 4px 1px 3px', borderRadius: '4px', cursor: 'pointer' }}
													className="d-sm mobile-search"
													onClick={() => search()}
												>
													<Search />
												</span>
											</FormGroup>
										</Form>

									</div>


									<Datatable

										myData={userarry}
										pageSize={10}
										pagination={true}
										className="-striped -highlight"
										sortable={true}
										page="customerlist"
									/>


								</CardBody>
							</Card>
						</Col>
					</Row>
				</Container>
				{/* <!-- Container-fluid Ends--> */}
			</Fragment>
		);
	}

	else if (ninjas.length > 0) {

		return (

			<Fragment>
				<Breadcrumb title="Admin" parent="Accounts Extension" />
				{/* <!-- Container-fluid starts--> */}
				<Container fluid={true}>
					<Row>

						<Col sm="12">
							<Card>
								<CardHeader>
									<Row>
										<Col sm="6" style={{ paddingBottom: '20px' }}><h5 style={{ color: '#FFF' }}>Customer Listing</h5></Col>
										{/*}	<Col sm="6">
											<div className="btn-popup pull-right">
												<a href="/accounts/Admin/add">
													<button type="button" data-original-title="test" className="btn btn-light-gradien">Add Admin</button>
												</a>
											</div>
		</Col>*/}
									</Row>
								</CardHeader>
								<CardBody>
									<div className="btn-popup pull-right">
										<Form className="form-inline search-form">
											<FormGroup>
												<input style={{ border: '1px solid #85bc57', width: '400px' }}
													className={"form-control-plaintext "}
													type="search"
													placeholder="Search.." value={q} onChange={(e) => Clear(e.target.value)}
												/>

												<span style={{ color: '#85bc57', border: '1px solid #85bc57', padding: '6px 4px 1px 3px', borderRadius: '4px', cursor: 'pointer' }}
													className="d-sm mobile-search" onClick={() => search()}
												>
													<Search />
												</span>
											</FormGroup>
										</Form>

									</div>


									{userarry == '' && find == '1' ?
										<div className="row col-sm-12 "><h4 className="form-control text-center">No Data Found......</h4></div>

										:
										ninjas.length > 0 ?
											<Datatable

												myData={ninjas}
												pageSize={10}
												pagination={true}
												className="-striped -highlight"
												sortable={true}
												page="customerlist"
											/>
											: <div className="row col-sm-12 "><h4 className="form-control text-center">Load......</h4></div>
									}


								</CardBody>
							</Card>
						</Col>
					</Row>
				</Container>
				{/* <!-- Container-fluid Ends--> */}
			</Fragment>
		);
	}
	else
		return (<>Loading..</>);

};
export default Customerview;
