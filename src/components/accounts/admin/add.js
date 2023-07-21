import React, { Fragment } from "react";
import TabsetUser from "./tabset-user";
import Breadcrumb from "../../common/breadcrumb";
import { Card, CardBody, CardHeader, Col, Container, Row } from "reactstrap";
import { useParams } from "react-router-dom";
import jsCookie from 'js-cookie';
const AddHelper = () => {
	jsCookie.set('pagename','admin');
	jsCookie.set('pagehead','accounts');	
	const { id } = useParams();
	return (
		<Fragment>
			<Breadcrumb  title={ id !='' ? 'Update Admin' : 'Add Admin'}  parent="Accounts" />
			<Container fluid={true}>
				<Row>
					<Col sm="12">
						<Card>
							<CardHeader>
							<Row>
															<Col sm="6"><h5> { id !='' ? 'Update' : 'Add'} Admin</h5></Col>  								
															<Col sm="6">
																	<div className="btn-popup pull-right">
																		<a href="/accounts/admin/view">
																		<button type="button"  data-original-title="test"  className="btn btn-light-gradien">Back</button>
																		</a>
																	</div>
															</Col>
											</Row>
								
							</CardHeader>
							<CardBody>
								<TabsetUser />
							</CardBody>
						</Card>
					</Col>
				</Row>
			</Container>
		</Fragment>
	);
};

export default AddHelper;
