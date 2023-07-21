import React, { Fragment, useState,useEffect } from "react";
import Breadcrumb from "../../common/breadcrumb";
import "react-toastify/dist/ReactToastify.css";
import { data } from "../../../assets/data/category";
import Datatable from "../../common/datatable";
import SearchHeader from "../../common/header_components/searchHeader";
import { Search } from "react-feather";
import jsCookie from 'js-cookie';
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

const Category = () => {
	const [open, setOpen] = useState(false);

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
		jsCookie.set('pagename','employer');
		jsCookie.set('pagehead','accounts');
		
							
		                        fetch('https://api.laabamone.com/api/v1/Masters/GetEmployerList?ID=1&Status=0')
								.then(response => response.json())
								.then(json => setUsers(json.$values))
    }, [])
	console.log('ninjas',ninjas);
	function setarrayvalues(getarr)
	{ 
		setArrayy(getarr);	
	}
	function Clear(val)
	{ 
		setQ(val);		
		setArrayy([]);	
		setfind('0');
	}
	
	function search()
	{   
		
		let matches =[];			
		console.log(ninjas.filter((row) => row.FullName.toLowerCase().indexOf(q) > -1));
        matches = ninjas.filter(
			(row) => 
			(row.FullName.toLowerCase().indexOf(q)> -  1 || row.Occupation.toLowerCase().indexOf(q)> -1 || row.PreferredContact.indexOf(q)> -1 || row.Dob.indexOf(q)> -1
			)) ;
		console.log('matches',matches);
		setarrayvalues(matches);
		if(matches=='')
		{
		setfind('1');
		} 
		
	}
		
	if(userarry!='')
	{
		
	
	return (
		
		<Fragment>
			<Breadcrumb title="Employer" parent="Accounts Extension" /> 
			
			<Container fluid={true}>
				<Row>
				
					<Col sm="12">
						<Card>
						
							<CardBody>
							<Row>
								<Col  sm="3">
								<a href="/accounts/employer/add">
								<button type="button"  data-original-title="test"  className="btn btn-success">Add Employer</button>
								</a>	
								</Col>
								<Col  sm="4">
							<h4>Search Result for - {q}</h4></Col>
							<Col  sm="5">
							<div className="btn-popup pull-right">
										<Form className="form-inline search-form">
												<FormGroup>
								<input style={{border :'1px solid #85bc57',width:'400px'}}
									className={"form-control-plaintext " }
									type="search"
									placeholder="Search.." value={q}  onChange={(e)=> Clear(e.target.value)}
								/>
								<span style={{color:'#85bc57',border :'1px solid #85bc57',padding:'6px 4px 1px 3px',borderRadius:'4px',cursor:'pointer'}}
									className="d-sm mobile-search"
									onClick={() => search()} 
								>
									<Search />
								</span>
							</FormGroup>
										</Form>
						
							</div>
							</Col></Row>
							
							
							   <Datatable
									    multiSelectOption={false}
										myData={userarry}										
										pageSize={10}
										pagination={true} 
										className="-striped -highlight"										
										sortable={true}
										page="employer_page"
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
	
	else 
	{
		console.log('ninjas2',ninjas);
	return (
		
		<Fragment>
			<Breadcrumb title="Employer" parent="Accounts Extension" />
			{/* <!-- Container-fluid starts--> */}
			<Container fluid={true}>
				<Row>
				
					<Col sm="12">
						<Card>
						{/*}	<CardHeader>
							<Row>
							<Col sm="6"><h5>Employer Listing</h5></Col>  								
							<Col sm="6">
									<div className="btn-popup pull-right">
									    <a href="/accounts/employer/add">
										<button type="button"  data-original-title="test"  className="btn btn-light-gradien">Add Employer</button>
										</a>
									</div>
							</Col></Row>  
							</CardHeader>*/}
							<CardBody>
								<Row>
								<Col  sm="6">
								<a href="/accounts/employer/add">
								<button type="button"  data-original-title="test"  className="btn btn-success">Add Employer</button>
								</a>	
								</Col>
								<Col  sm="6">
								<div className="btn-popup pull-right">
										<Form className="form-inline search-form">
											<FormGroup>
												<input style={{border :'1px solid #85bc57',width:'400px'}}
													className={"form-control-plaintext " }
													type="search"
													placeholder="Search.." value={q} onChange={(e)=> Clear(e.target.value)}
												/>
												
												<span style={{color:'#85bc57',border :'1px solid #85bc57',padding:'6px 4px 1px 3px',borderRadius:'4px',cursor:'pointer'}}
													className="d-sm mobile-search"  onClick={() => search()}
												>
													<Search />
												</span>
											</FormGroup>
										</Form>
								
								</div></Col></Row>						
							{userarry=='' && find=='1' ?
							<div className="row col-sm-12 "><h4 className="form-control text-center">No Data Found......</h4></div>
								
						:
						ninjas!=''?
								<Datatable									  
										myData={ninjas}										
										pageSize={10}
										pagination={true} 																			
										sortable={true}
										page="employer_page"
									/>
							:	<div className="row col-sm-12 "><h4 className="form-control text-center">Load......</h4></div>
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
	
};

export default Category;
