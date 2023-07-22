import React, { Fragment, useState, useEffect } from "react";
import { Modal, Button, Card, CardBody, CardHeader, Col, Container, Row, ModalHeader, ModalBody, Form, FormGroup, Label, Input, ModalFooter } from "reactstrap";
import Breadcrumb from "../../common/breadcrumb";
import { useParams } from "react-router-dom";
import axios from "axios";
import { decode as base64_decode, encode as base64_encode } from 'base-64';
const Listview = () => {
    const { cusid } = useParams();
    console.log(cusid);
    const [Users, setUsers] = useState([]);
    const [Banks, setBanks] = useState([]);
    useEffect(() => {
        const loadUserslov = async () => {
            const response = await axios.get("https://www.laabamone.com/Facepos/api.php?eventtype=Getprofilelist_admin&id=" + cusid);
            //console.log('loc',response.data); 
            setUsers(response.data);
            setBanks(response.data[0].selectedbanks);

        }

        loadUserslov();
    }, [cusid])
    const Getprofileimg = (a) => {
        //alert(a);
        let promig;
        if (a != '' && a != 'null' && a != null && a != undefined) {
            promig = base64_decode(a)
        }
        else {
            promig = `${process.env.PUBLIC_URL}/profileimg.png`;
        }
        return promig;
    }
    return (
        <Fragment>
            <Breadcrumb title="Admin" parent="Accounts Extension" />
            {/* <!-- Container-fluid starts--> */}
            <Container fluid={true}>
                <Row>

                    <Col sm="12">
                        <Card>
                            <CardHeader>
                                <Row>

                                    <Col sm="6" style={{ paddingBottom: '20px' }}><h5 style={{ color: '#FFF' }}>Customer Details</h5></Col>
                                </Row>
                            </CardHeader>
                            <CardBody>
                                <Row>
                                    <Col sm="4">

                                    </Col>
                                    <Col sm="4">
                                        {Users.map((a, i) =>
                                            <div key={i} style={{ textAlign: 'center' }}>
                                                <img src={`${Getprofileimg(`${a.profileimage}`)}`} style={{ height: 45, width: 45, borderRadius: 50 }} />

                                                <h3><b>+{a.mobile}</b></h3>
                                                <h5>{a.email}</h5>
                                                <h5>{a.name}</h5>
                                                <h5>{a.gender}</h5>
                                            </div>
                                        )}

                                    </Col>
                                    <Col sm="4">

                                    </Col>

                                </Row>
                                <Row >
                                    <Col sm="2"></Col>
                                    <Col sm="8">
                                        <CardHeader style={{ textAlign: "center", paddingBottom: '20px' }}>
                                            <Row>
                                                <Col sm="4">
                                                    <h5 style={{ color: '#FFF' }}> s.no</h5>
                                                </Col>
                                                <Col sm="4">
                                                    <h5 style={{ color: '#FFF' }}>Bankname</h5>
                                                </Col>
                                                <Col sm="4">
                                                    <h5 style={{ color: '#FFF' }}>Bankcode</h5>
                                                </Col>
                                            </Row>
                                        </CardHeader>
                                    </Col>
                                    <Col sm="2">
                                    </Col>




                                </Row>
                                {Banks.length > 0 ?
                                    <div> {Banks.map((res, k) =>

                                        <Row key={k}>
                                            <Col sm="2"></Col>
                                            <Col sm="8">
                                                <CardHeader style={{ textAlign: "center", paddingBottom: '20px', backgroundColor: '#f1f1f1' }}>
                                                    <Row>
                                                        <Col sm="4">
                                                            <h7><b> {res.sno}</b></h7>
                                                        </Col>
                                                        <Col sm="4">
                                                            <h7><b> {res.bankname}</b></h7>
                                                        </Col>
                                                        <Col sm="4">
                                                            <h7><b> {res.bankcode}</b></h7>
                                                        </Col>
                                                    </Row>
                                                </CardHeader>
                                            </Col>
                                            <Col sm="2">
                                            </Col></Row>


                                    )}</div> :
                                    <Row style={{ textAlign: "center" }}>
                                        <Col sm="12">No Data Available</Col>
                                    </Row>
                                }
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Fragment>

    );
}
export default Listview;