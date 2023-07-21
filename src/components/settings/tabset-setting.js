import React, { Fragment, useState } from "react";
import { Tabs, TabList, TabPanel, Tab } from "react-tabs";
import { User, Settings,Clipboard,Archive,MessageSquare,DollarSign,UserPlus,Box,BarChart} from "react-feather";
import {  Card, CardBody, CardHeader,Button, Col, Form, Input, Label, Row, Table,Media } from "reactstrap";
import MyDropzone from "../common/dropzone";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const TabsetProfile = () => {
	const [startDate, setstartDate] = useState(new Date());
	const [endDate, setendDate] = useState(new Date());

	const handleStartDate = (date) => {
		setstartDate(date);
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
						GST
					</Tab>
					<Tab className="nav-link">
						<Clipboard className="mr-2" />
						Whitelist/Blacklist Account
					</Tab>
					<Tab className="nav-link">
						<Archive className="mr-2" />
						Roles
					</Tab>
					<Tab className="nav-link">
						<MessageSquare className="mr-2" />
						Countries
					</Tab>
					<Tab className="nav-link">
						<UserPlus className="mr-2" />
						Password policy
					</Tab>
					<Tab className="nav-link">
						<DollarSign className="mr-2" />
						Valid email domains
					</Tab>
					<Tab className="nav-link">
						<BarChart className="mr-2" />
						Inactive accounts
					</Tab>
					
				</TabList>

				<TabPanel>
					<div className="tab-pane fade show active">
						<h5 className="f-w-600 f-16">Profile</h5>
						<div className="table-responsive profile-table">
						<Form className="needs-validation" noValidate="">
						
							<Row>
								<Col sm="12">
								
									<div className="form-group row">
										<Label className="col-xl-3 col-md-4">
											<span>*</span> GST
										</Label>
										<Input
											className="form-control col-md-7"
											id="validationCustom0"
											type="text"
											required=""
										/>
									</div>
									<div className="form-group row">
									
									<div className="bg-info card-body col-md-4">
										
									<Media body className="col-12">
										<span className="m-0">Account that change</span>
										<h3 className="mb-0">
											
											<small> This Month</small>
										</h3>
									
									</Media>
								
										</div>&nbsp;
										<div className="bg-warning card-body col-md-4">
										
									<Media body className="col-12">
										<span className="m-0">Date of change</span>
										<h3 className="mb-0">
											
											<small> This Month</small>
										</h3>
									
									</Media>
								
										</div>
										&nbsp;
										<div className="bg-danger card-body col-md-3">
										
									<Media body className="col-12">
										<span className="m-0">What changed</span>
										<h3 className="mb-0">
											
											<small> This Month</small>
										</h3>
									
									</Media>
								
										</div>
										
									</div>
								
								</Col>
							</Row>
						</Form>
						</div>
					</div>
				</TabPanel>
			
				<TabPanel>
					
				</TabPanel>
				
				
				<TabPanel>
				
				</TabPanel>
				
				
				
				
				
				
				
				
				
				<TabPanel></TabPanel>
			
				
			</Tabs>
		</div>
	);
};

export default TabsetProfile;
