import React, { Fragment } from "react";
import TabsetUser from "./tabset-user";
import Breadcrumb from "../../common/breadcrumb";
import { Card, CardBody, CardHeader, Col, Container, Row } from "reactstrap";

const AddHelper = () => {
	return (
		<Fragment>
			<Breadcrumb title="Transaction Refund" parent="Transaction" />
			<Container fluid={true}>
				<Row>
					<Col sm="12">
						<Card>
							<CardHeader>
								<h5> Transaction Refund Details</h5>
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
