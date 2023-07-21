import React, { Fragment } from "react";
import { Tabs, TabList, TabPanel, Tab } from "react-tabs";
import { User, Settings,Clipboard,Archive,MessageSquare,DollarSign,UserPlus,Box,BarChart} from "react-feather";
import { Card, CardBody, CardHeader, Button, Col, Form, FormGroup, Input, Label, Row } from "reactstrap";
import MyDropzone from "../../common/dropzone";
import Package from "../../common/package/page";
import Paycheck from "../../common/package/paycheck";
const TabsetUser = () => {
	return (
		<Fragment>
		<Tabs>
				<TabList className="nav nav-tabs tab-coupon">
					<Tab className="nav-link">
						<User className="mr-2" />
						Profile
					</Tab>
					<Tab className="nav-link">
						<Clipboard className="mr-2" />
						Banking Details
					</Tab>
					<Tab className="nav-link">
						<Archive className="mr-2" />
						Key Contact Person (KCP) Details
					</Tab>
					<Tab className="nav-link">
						<MessageSquare className="mr-2" />
						Orders
					</Tab>
					<Tab className="nav-link">
						<UserPlus className="mr-2" />
						Packages
					</Tab>
					<Tab className="nav-link">
						<DollarSign className="mr-2" />
						Ratings
					</Tab>
					<Tab className="nav-link">
						<DollarSign className="mr-2" />
						Chat
					</Tab>
					
					<Tab className="nav-link">
						<BarChart className="mr-2" />
						Calendar
					</Tab>
					<Tab className="nav-link">
						<Box className="mr-2" />
						Paycheck
					</Tab>
					<Tab className="nav-link">
						<Settings className="mr-2" />
						Settings
					</Tab>
				</TabList>

				
				<TabPanel>
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
						<FormGroup className="row">
							<Label className="col-xl-3 col-md-4">
								<span>*</span>UEN No.
							</Label>
							<Input
								className="form-control col-xl-8 col-md-7"
								id="validationCustom1"
								type="text"
								required=""
							/>
						</FormGroup>
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
										<Label className="col-xl-2 col-md-2">Website</Label>
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
						<h5 className="f-w-600 f-16">Principal Activities</h5>
						<Row>
							<Col>
							
									<div className="form-group row">
									
										<div className=" col-xl-2 col-md-3 checkbox-space">
											<Label className="d-block">
												<Input
													className="checkbox_animated"
													id="chk-ani2"
													type="checkbox"
												/>
												Training
											</Label>
										</div>
										<div className=" col-xl-2 col-md-3 checkbox-space">
											<Label className="d-block">
												<Input
													className="checkbox_animated"
													id="chk-ani2"
													type="checkbox"
												/>
												Services
											</Label>
										</div>
										<div className=" col-xl-3 col-md-3 checkbox-space">
											<Label className="d-block">
												<Input
													className="checkbox_animated"
													id="chk-ani2"
													type="checkbox"
												/>
												Employment Agency
											</Label>
										</div>
										<div className=" col-xl-2 col-md-3 checkbox-space">
											<Label className="d-block">
												<Input
													className="checkbox_animated"
													id="chk-ani2"
													type="checkbox"
												/>
												Transport
											</Label>
										</div>
										<div className=" col-xl-2 col-md-3 checkbox-space">
											<Label className="d-block">
												<Input
													className="checkbox_animated"
													id="chk-ani2"
													type="checkbox"
												/>
												Insurance
											</Label>
										</div>
										<br/><br/>
										
										
										<div className=" col-xl-2 col-md-3 checkbox-space">
											<Label className="d-block">
												<Input
													className="checkbox_animated"
													id="chk-ani2"
													type="checkbox"
												/>
												Medical

											</Label>
										</div>
										<div className=" col-xl-2 col-md-3 checkbox-space">
											<Label className="d-block">
												<Input
													className="checkbox_animated"
													id="chk-ani2"
													type="checkbox"
												/>
												SIP
											</Label>
										</div>
										<div className=" col-xl-3 col-md-3 checkbox-space">
											<Label className="d-block">
												<Input
													className="checkbox_animated"
													id="chk-ani2"
													type="checkbox"
												/>
												Accommodation
											</Label>
										</div>
										<div className=" col-xl-2 col-md-3 checkbox-space">
											<Label className="d-block">
												<Input
													className="checkbox_animated"
													id="chk-ani2"
													type="checkbox"
												/>
												Counselling
											</Label>
										</div>
										<div className=" col-xl-2 col-md-3 checkbox-space">
											<Label className="d-block">
												<Input
													className="checkbox_animated"
													id="chk-ani2"
													type="checkbox"
												/>
												Elderly Care

											</Label>
										</div>
										<br/><br/><br/>

										
										<div className=" col-xl-2 col-md-3 checkbox-space">
											<Label className="d-block">
												<Input
													className="checkbox_animated"
													id="chk-ani2"
													type="checkbox"
												/>
												Embroidery
											</Label>
										</div>
										<div className=" col-xl-2 col-md-3 checkbox-space">
											<Label className="d-block">
												<Input
													className="checkbox_animated"
													id="chk-ani2"
													type="checkbox"
												/>
												Languages
											</Label>
										</div>
									
										
										<div className=" col-xl-3 col-md-3 checkbox-space">
											<Label className="d-block">
												<Input
													className="checkbox_animated"
													id="chk-ani2"
													type="checkbox"
												/>
												First Aid
											</Label>
										</div>
										<div className=" col-xl-2 col-md-3 checkbox-space">
											<Label className="d-block">
												<Input
													className="checkbox_animated"
													id="chk-ani2"
													type="checkbox"
												/>
												Others

											</Label>
										</div>
									
									</div>
							</Col>
						</Row>
					</div>
				
						<FormGroup className="row">
							<Label className="col-xl-3 col-md-4">
								<span>*</span>Registered Address
							</Label>
							<Input
								className="form-control col-xl-8 col-md-7"
								id="validationCustom1"
								type="text"
								required=""
							/>
						</FormGroup>
						<FormGroup className="row">
							<Label className="col-xl-1 col-md-2">
								<span>*</span>Logo
							</Label>
							<MyDropzone/>
						</FormGroup>
						<FormGroup className="row">
							<Label className="col-xl-3 col-md-4">
								<span>*</span>Vendor Description
							</Label>
							<textarea className="col-md-8" srows="4" cols="12"></textarea>
						</FormGroup>
						
				
					
					</Form>
				
			<div className="pull-right">
				<Button type="button" color="primary">
					Save
				</Button>
			</div>
		    	</TabPanel>
			   
			    <TabPanel>
			<FormGroup className="row">
							<Label className="col-xl-3 col-md-4">
								<span>*</span> Account Name
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
								<span>*</span> Bank Name
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
								<span>*</span> Account Type
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
								<span>*</span>  Account No.
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
								<span>*</span> Bank Statement
							</Label>
							<MyDropzone/>
						</FormGroup>
				</TabPanel>			
			
			  	<TabPanel>
				  

			<FormGroup className="row">
							<Label className="col-xl-3 col-md-4">
								<span>*</span> KCP Name
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
								<span>*</span>  KCP Position
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
								<span>*</span> KCP Contact
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
								<span>*</span>  KCP Email
							</Label>
							<Input
								className="form-control col-xl-8 col-md-7"
								id="validationCustom0"
								type="email"
								required=""
							/>
						</FormGroup>
						
				</TabPanel>	
			
				<TabPanel>
				
				</TabPanel>
			
				<TabPanel>
					<Package></Package>
				</TabPanel>
				<TabPanel>
				
				</TabPanel>
				<TabPanel>
				
				</TabPanel>
				<TabPanel>
				
				</TabPanel>
				<TabPanel>
				       <Paycheck></Paycheck>
				</TabPanel>
			
			</Tabs>
		</Fragment>
	);
};

export default TabsetUser;
