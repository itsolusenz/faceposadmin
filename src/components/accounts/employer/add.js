import React, { Fragment ,useState,useEffect} from "react";
import designer from "../../../assets/images/dashboard/designer.jpg";
import TabsetProfile from "../../settings/tabset-profile";
import Breadcrumb from "../../common/breadcrumb";
import { Card, CardBody, Col, Container, Media, Row, Button } from "reactstrap";
import { useParams } from "react-router-dom";


const Profile = () => {
	
    
	return (
		<Fragment>
			<Breadcrumb title="Employer Profile" parent="Accounts" subparent="Employer" />
			<Container fluid={true}>
				<Row>
					
					<Col xl="12">
						<Card className="profile-card">
							<CardBody>
							<TabsetProfile  />
							</CardBody>
						</Card>
					</Col>
				</Row>
			</Container>
		</Fragment>
	);
};

export default Profile;
