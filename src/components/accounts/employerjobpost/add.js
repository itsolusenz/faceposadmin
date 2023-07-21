import React, { Fragment } from "react";
import TabsetUser from "./tabset-user";
import Breadcrumb from "../../common/breadcrumb";
import { Card, CardBody, CardHeader, Col, Container, Row } from "reactstrap";
import { useParams } from "react-router-dom";
import jsCookie from 'js-cookie';
const AddHelper = () => {
	jsCookie.set('pagename','admin');
	jsCookie.set('pagehead','accounts');	
	const { jobid } = useParams();
	return (
		<Fragment>
			<Breadcrumb  title={ jobid !='' ? 'Update Jobpost' : 'Add Jobpost'}  parent="Accounts" />
			<Container fluid={true}>
				<Row>
					<Col sm="12">
						<Card>
							
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
