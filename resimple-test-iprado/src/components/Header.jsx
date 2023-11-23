import { Container, Row, Col } from 'react-bootstrap';
import logo from '../assets/logo.png'
export default function Header() {
    return <Container>
        <Row >
            <Col md='6' xs='12'>
                <img
                    alt=""
                    src={logo}
                    height="90"
                    className="d-inline-block align-center mx-auto"
                />
            </Col>
            <Col md='6' xs='12' className='header-name'>
                <span className='header-name__p'>Ignacio Prado Ramírez</span>
            </Col>
        </Row>
    </Container>;
}