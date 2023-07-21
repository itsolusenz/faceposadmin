import React from "react";
import { Label} from "reactstrap"; 
import {  Form, FormGroup, Input} from "reactstrap";  
const Packagetype = () => {
    return (
		
                 
        <Form className="needs-validation user-add" noValidate="">
     
        <FormGroup className="row">
            <Label className="col-xl-3 col-md-4">
                <span>*</span> Total earned
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
                <span>*</span> Total withdrawn
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
                <span>*</span> Balance
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
                <span>*</span> Pending amount
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
                <span>*</span> History
            </Label>
            <Input
                className="form-control col-xl-8 col-md-7"
                id="validationCustom0"
                type="text"
                required=""
            />
        </FormGroup>
        </Form>
                   
       

);
}
export default Packagetype;