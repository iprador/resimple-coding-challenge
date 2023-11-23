import { Container, Row, Col } from 'react-bootstrap';
import logo from '../assets/logo.png'
export default function Footer({ text }) {
    return <Container className='my-5'>
        <Row>
            <Col md='6' xs='12'>
                <img
                    alt=""
                    src={logo}
                    height="90"
                    className="d-inline-block align-center mx-auto"
                />
            </Col>
            <Col md='6' xs='12' className='header-name'>
                <span className='header-name__p'>{text ?? ''}</span>
            </Col>
        </Row>
    </Container>;
}