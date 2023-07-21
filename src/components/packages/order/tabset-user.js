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
								<span>*</span>Vendor Name
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
								<span>*</span>Package name
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
