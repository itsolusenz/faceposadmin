import React, { Fragment } from "react";
import LoginTabset from "./loginTabset";
import { ArrowLeft } from "react-feather";
import Slider from "react-slick";
import stats from "../../assets/images/LOGO.png";
import "../../assets/scss/slick.scss";
import "../../assets/scss/slick-theme.scss";
import { Card, CardBody, Col, Container, Row } from "reactstrap";

const Login = () => {
	var settings = {
		dots: true,
		infinite: true,
		speed: 500,
		arrows: false,
	};
	return (
		<Fragment>
			<div className="page-wrapper">
				<div className="authentication-box">
					<Container>
						<Row>
							<Col className="col-md-5 p-0 card-left">
								<Card className="bg-primary">
									<div className="svg-icon">
										<img alt="" src={stats} className="Img-fluid" style={{ height: '80px', width: '80px' }} />
									</div>
									<Slider className="single-item" {...settings}>
										<div>
											<div>
												<h3>Welcome to Admin</h3>
												<p>
													FacePOS is the cheapest, fastest but most importantly the safest way to spend or send money around the world.
												</p>
											</div>
										</div>
										<div>
											<div>
												<h3>Welcome to Admin</h3>
												<p>
													FacePOS is the cheapest, fastest but most importantly the safest way to spend or send money around the world.

												</p>
											</div>
										</div>
										<div>
											<div>
												<h3>Welcome to Admin</h3>
												<p>
													FacePOS is the cheapest, fastest but most importantly the safest way to spend or send money around the world.

												</p>
											</div>
										</div>
									</Slider>
								</Card>
							</Col>
							<Col className="col-md-7 p-0 card-right">
								<Card className="tab2-card">
									<CardBody>
										<LoginTabset />
									</CardBody>
								</Card>
							</Col>
						</Row>
						{/*}	<a
							href="https://multikart-react.vercel.app/"
							target="_blank"
							rel="noreferrer"
							className="btn btn-primary back-btn"
						>
							<ArrowLeft />
							back
	</a>**/}
					</Container>
				</div>
			</div>
		</Fragment>
	);
};

export default Login;
