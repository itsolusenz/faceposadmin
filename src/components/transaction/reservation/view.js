import React, { Fragment, useState ,useEffect } from "react";
import Breadcrumb from "../../common/breadcrumb";
import data from "../../../assets/data/transaction_reservation";
import Datatable from "../../common/datatable";
import {Modal, Button, Card, CardBody, CardHeader, Col, Container, Row,  ModalHeader, ModalBody, Form, FormGroup, Label, Input, ModalFooter } from "reactstrap";
import { Search } from "react-feather";
const Sub_category = () => {
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
		
		  /*  const loadUsers = async()=>{ 
					
						const response =await fetch("https://jsonplaceholder.typicode.com/todos");
						const data = await response.json();						
						setUsers(data); 
           
 
           }
	       loadUsers();*/
								fetch('https://jsonplaceholder.typicode.com/todos')
								.then(response => response.json())
								.then(json => setUsers(json))
    }, [])
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
		console.log(ninjas.filter((row) => row.title.toLowerCase().indexOf(q) > -1));
        matches = ninjas.filter((row) => row.title.toLowerCase().indexOf(q) > -1) ;
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
			<Breadcrumb title="Reservation" parent="Transaction Extension" /> 
			
			<Container fluid={true}>
				<Row>
				
					<Col sm="12">
						<Card>
							<CardHeader>
											<Row>
															<Col sm="6"><h5>Reservation Listing</h5></Col>  								
															<Col sm="6">
																	<div className="btn-popup pull-right">
																		<a href="/transaction/reservation/add">
																		<button type="button"  data-original-title="test"  className="btn btn-light-gradien">Add Reservation</button>
																		</a>
																	</div>
															</Col>
											</Row>  
							</CardHeader>
							<CardBody>
							<h4>Search Result for - {q}</h4>
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
							
							
							   <Datatable
									    multiSelectOption={true}
										myData={userarry}										
										pageSize={10}
										pagination={true} 
										className="-striped -highlight"										
										sortable={true}
										page="package_list"
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
			<Breadcrumb title="Reservation" parent="Transaction Extension" />
			{/* <!-- Container-fluid starts--> */}
			<Container fluid={true}>
				<Row>
				
					<Col sm="12">
						<Card>
							<CardHeader>
							<Row>
							<Col sm="6"><h5>Reservation Listing</h5></Col>  								
							<Col sm="6">
									<div className="btn-popup pull-right">
									    <a href="/transaction/reservation/add">
										<button type="button"  data-original-title="test"  className="btn btn-light-gradien">Add Reservation</button>
										</a>
									</div>
							</Col></Row>  
							</CardHeader>
							<CardBody>
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
								
								</div>						
							{userarry=='' && find=='1' ?
							<div className="row col-sm-12 "><h4 className="form-control text-center">No Data Found......</h4></div>
								
						:
						ninjas!=''?
								<Datatable
									    multiSelectOption={true}
										myData={ninjas}										
										pageSize={10}
										pagination={true} 
										className="-striped -highlight"										
										sortable={true}
										page="package_list"
									/>
							:	<div className="row col-sm-12 "><h4 className="form-control text-center">Load......</h4></div>
						}
	                         
							
							</CardBody>
						</Card>
					</Col>
				</Row>
			</Container>
		
		</Fragment>
	);
	}

	{/*return (
		<Fragment>
			<Breadcrumb title="Transaction Reservation Listing Page" parent="Physical" />
		
			<Container fluid={true}>
				<Row>
					<Col sm="12">
						<Card>
							<CardHeader>
								<h5>Transaction Reservation Listing</h5>
							</CardHeader>
							<CardBody>
								<div className="btn-popup pull-right">
								<a href="/transaction/reservation/add">
										<button type="button"  data-original-title="test"  class="btn btn-primary">Add</button>
										</a>
									
									
								</div>
								<div className="clearfix"></div>
								<div id="basicScenario" className="product-physical">
									<Datatable
										myData={data}
										multiSelectOption={false}
										pageSize={10}
										pagination={true}
										class="-striped -highlight"
									/>
								</div>
							</CardBody>
						</Card>
					</Col>
				</Row>
			</Container>
			
		</Fragment>
	);*/}
};
export default Sub_category;
