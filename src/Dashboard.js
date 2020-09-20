import React from 'react';
import './Dashboard.css';
import MainNavbar from './MainNavbar';
import UploadMenu from './UploadMenu';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import APIMenu from './APIMenu';
import UploadStatusPie from './UploadStatusPie';
import StatusCard from './StatusTable';
import SystemLogCard from './SystemLogCard';

class Dashboard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isAPIMenuVisible: true,
            isUploadMenuVisible: true,
            isFileUploadVisible: true,
            uploadMenuState: [
                { state: 'unclicked', color: 'dark', text: 'Upload Packages' },
                { state: 'clicked', color: 'light', text: 'Click Here To Upload' },
                { state: 'finished', color: 'success', text: 'Finished !' },
            ],
            uploadMenuStatus: 2,
        }
    }

    render() {
        const colors = ["#138185", "#ff0000", "#138185", "#ff0000", "#ff0000"];
        const data = [
            { name: 'Success', value: 400 },
            { name: 'Failed', value: 300 },
            { name: 'UnknownFileType', value: 300 },
            { name: 'Pending', value: 200 },
          ];
        return(
            <div className="dashboard">
                <Container fluid>
                <Row className="justify-content-md-left" style={{ 'padding': '40px'}}>
                    <MainNavbar/>
                </Row>
                    <Row>
                        <Col sm={4}></Col>
                        <Col>
                            <UploadMenu 
                                isVisible={this.state.isUploadMenuVisible}
                                isFileUploadVisible={this.state.isFileUploadVisible}
                                menuState={this.state.uploadMenuState[this.state.uploadMenuStatus]}
                            />
                            {/* <APIMenu isVisible={this.state.isAPIMenuVisible}/> */}
                        </Col>
                        <Col sm={4}></Col>
                    </Row>
                    <Row>
                        <UploadStatusPie isVisible={this.state.isPieVisible}/>
                    </Row>
                    <Row>
                        <Col xs={4} sm={4} md={4} lg={4}>
                            <StatusCard/>
                        </Col>
                        <Col xs={8} sm={8} md={8} lg={8}>
                            <SystemLogCard/>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Dashboard;