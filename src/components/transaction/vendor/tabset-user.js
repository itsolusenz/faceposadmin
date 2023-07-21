import React, { Fragment } from "react";
import { Tabs, TabList, TabPanel, Tab } from "react-tabs";
import { Card, CardBody, CardHeader, Button, Col, Form, FormGroup, Input, Label, Row } from "reactstrap";
import MyDropzone from "../../common/dropzone";
const TabsetUser = () => {
	return (
		<Fragment>
		
					<Form className="needs-validation user-add" noValidate="">
						
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
								<span>*</span>Vendor name
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
								<span>*</span>Contact no.
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
								<span>*</span>Category
							</Label>
							<Input
								className="form-control col-xl-8 col-md-7"
								id="validationCustom1"
								type="text"
								required=""
							/>
						</FormGroup>
							<div className="account-setting">
						<h5 className="f-w-600 f-16">Address</h5>
						<Row>
							<Col>
							<div className="form-group row">
										<Label className="col-xl-2 col-md-2">Address 1</Label>
										<Input
											className="form-control col-md-3"
											type="text"
											required=""
										/>
										<Label className="col-xl-2 col-md-2">Address 2</Label>
										<Input
											className="form-control col-md-4"
											type="text"
											required=""
										/>
										
							</div>
							
							<div className="form-group row">
										<Label className="col-xl-1 col-md-1">City</Label>
										<Input
											className="form-control col-md-2"
											type="text"
											required=""
										/>
										<Label className="col-xl-2 col-md-2">Postalcode</Label>
										<Input
											className="form-control col-md-2"
											type="text"
											required=""
										/>
										<Label className="col-xl-1 col-md-1">Country</Label>
										<Input
											className="form-control col-md-3"
											type="text"
											required=""
										/>
										
							</div>
							
							</Col>
						</Row>
					</div>
					<div className="account-setting">
						<h5 className="f-w-600 f-16">Vendor Contact</h5>
						<Row>
							<Col>
							<div className="form-group row">
										<Label className="col-xl-2 col-md-2">Office phone</Label>
										<Input
											className="form-control col-md-3"
											type="text"
											required=""
										/>
										<Label className="col-xl-2 col-md-2">Fax</Label>
										<Input
											className="form-control col-md-4"
											type="text"
											required=""
										/>
										
							</div>
							
							<div className="form-group row">
										<Label className="col-xl-2 col-md-2">Email</Label>
										<Input
											className="form-control col-md-3"
											type="text"
											required=""
										/>
										
										
							</div>
							
							</Col>
						</Row>
					</div>
					
					</Form>
				
			<div className="pull-right">
				<Button type="button" color="primary">
					Save
				</Button>
			</div>
		</Fragment>
	);
};

export default TabsetUser;
