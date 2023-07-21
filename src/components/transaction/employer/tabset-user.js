import React, { Fragment } from "react";
import { Tabs, TabList, TabPanel, Tab } from "react-tabs";
import { Card, CardBody, CardHeader, Button, Col, Form, FormGroup, Input, Label, Row } from "reactstrap";
import MyDropzone from "../../common/dropzone";
const TabsetUser = () => {
	return (
		<Fragment>
			<Tabs>
				<TabList className="nav nav-tabs tab-coupon">
					<Tab className="nav-link">Information</Tab>
					<Tab className="nav-link">Documents</Tab>
					<Tab className="nav-link">Chats</Tab>
					<Tab className="nav-link">Payments</Tab>
					<Tab className="nav-link">Account</Tab>
				</TabList>
				<TabPanel>
					<Form className="needs-validation user-add" noValidate="">
						<h4>Account Details</h4>
						<FormGroup className="row">
							<Label className="col-xl-3 col-md-4">
								<span>*</span> User ID
							</Label>
							<Input
								className="form-control col-xl-8 col-md-7"
								id="validationCustom0"
								type="text"
								required=""
							/>
						</FormGroup>
						<FormGroup className="row">
							<Label className="col-xl-3 col-md-4">
								<span>*</span>Supplier ID
							</Label>
							<Input
								className="form-control col-xl-8 col-md-7"
								id="validationCustom1"
								type="text"
								required=""
							/>
						</FormGroup>
						<FormGroup className="row">
							<Label className="col-xl-3 col-md-4">
								<span>*</span> Name
							</Label>
							<Input
								className="form-control col-xl-8 col-md-7"
								id="validationCustom0"
								type="text"
								required=""
							/>
						</FormGroup>
						<FormGroup className="row">
							<Label className="col-xl-3 col-md-4">
								<span>*</span> Passport No
							</Label>
							<Input
								className="form-control col-xl-8 col-md-7"
								id="validationCustom0"
								type="text"
								required=""
							/>
						</FormGroup>
					
						<FormGroup className="row">
							<Label className="col-xl-3 col-md-4">
								<span>*</span> Salary
							</Label>
							<Input
								className="form-control col-xl-8 col-md-7"
								id="validationCustom2"
								type="text"
								required=""
							/>
						</FormGroup>
						<FormGroup className="row">
							<Label className="col-xl-3 col-md-4">
								<span>*</span> Supplier fee
							</Label>
							<Input
								className="form-control col-xl-8 col-md-7"
								id="validationCustom3"
								type="password"
								required=""
							/>
						</FormGroup>
						<FormGroup className="row">
							<Label className="col-xl-3 col-md-4">
								<span>*</span> Confirm Password
							</Label>
							<Input
								className="form-control col-xl-8 col-md-7"
								id="validationCustom4"
								type="password"
								required=""
							/>
						</FormGroup>
					</Form>
				</TabPanel>
				<TabPanel>
					{/* <div className="tab-pane fade"> */}
					<div className="account-setting">
						<h5 className="f-w-600 f-16">Birth Certificate</h5>
						<Card>
					
					<CardBody>
						<MyDropzone />
					</CardBody>
				</Card>
					</div>
					<div className="account-setting">
						<h5 className="f-w-600 f-16">Passport</h5>
						<Card>
					
					<CardBody>
						<MyDropzone />
					</CardBody>
				</Card>
					</div>
					<div className="account-setting">
						<h5 className="f-w-600 f-16">Work permit</h5>
						<Card>
					
					<CardBody>
						<MyDropzone />
					</CardBody>
				</Card>
					</div>
					<div className="account-setting">
						<h5 className="f-w-600 f-16">SIP</h5>
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
						<h5 className="f-w-600 f-16">Education Certificate</h5>
						<Card>
					
					<CardBody>
						<MyDropzone />
					</CardBody>
				</Card>
					</div>
					<div className="account-setting">
						<h5 className="f-w-600 f-16">Medical Report</h5>
						<Card>
					
					<CardBody>
						<MyDropzone />
					</CardBody>
				</Card>
					</div>
					

					
					{/* </div> */}
				</TabPanel>
				<TabPanel>
					
				</TabPanel>
			</Tabs>
			<div className="pull-right">
				<Button type="button" color="primary">
					Save
				</Button>
			</div>
		</Fragment>
	);
};

export default TabsetUser;
