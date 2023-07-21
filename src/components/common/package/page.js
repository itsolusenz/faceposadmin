import React from "react";
import Packagetype from "./package_type";
import { Card, CardBody, CardHeader, Button, Col, Form, FormGroup, Input, Label, Row } from "reactstrap"; 
const Package = () => {
    return (
		<div>

                    <Form className="needs-validation user-add" noValidate="">
						<h4>package Details..</h4>
						<FormGroup className="row">
							<Label className="col-xl-3 col-md-4">
								<span>*</span> Package ID
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
								<span>*</span>Vendor name
							</Label>
							<Input
								className="form-control col-xl-8 col-md-7"
								id="validationCustom1"
								type="text"
								required=""
							/>
						</FormGroup>
						<div className="form-group row"  >
										<Label className="col-xl-3 col-md-4">Category1</Label>
										<select className="custom-select col-md-7" required="">
											<option value="">--Select--</option>
											<option value="1">Training</option>
											<option value="2">Services</option>
											
										</select>
								    	</div>
                                        <div className="form-group row"  >
										<Label className="col-xl-3 col-md-4">Category2</Label>
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
						<FormGroup className="row">
							<Label className="col-xl-3 col-md-4">
								<span>*</span> Description
							</Label>
							<textarea col="3" className="col-xl-7 col-md-7" ></textarea>
						</FormGroup>
                       
                                        
                                        <div className="form-group row"  >
										<Label className="col-xl-3 col-md-4">Type</Label>
                                        <Label className="col-xl-2 col-md-3">Basic</Label>
                                        <div className="col-xl-3 col-md-4">
										<Packagetype></Packagetype>
                                        </div>
								    	</div>  
                                        <div className="form-group row"  >
										<Label className="col-xl-3 col-md-4"></Label>
                                        <Label className="col-xl-2 col-md-3">Standard</Label>
                                        <div className="col-xl-3 col-md-4">
										<Packagetype></Packagetype>
                                        </div>
								    	</div>
                                        <div className="form-group row"  >
										<Label className="col-xl-3 col-md-4"></Label>
                                        <Label className="col-xl-2 col-md-3">Enhanced</Label>
                                        <div className="col-xl-3 col-md-4">
										<Packagetype></Packagetype>
                                        </div>
								    	</div>



						<FormGroup className="row">
							<Label className="col-xl-3 col-md-4">
								<span>*</span> Ratings
							</Label>
							
						</FormGroup>
						
					</Form>
       </div>
    );
}

export default Package;