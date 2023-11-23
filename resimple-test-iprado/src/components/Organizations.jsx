import { Accordion } from 'react-bootstrap';
import WorkersTable from './WorkersTable.jsx';

export default function Organizations({ organizations }) {
    return <Accordion defaultActiveKey={0} flush>
        {organizations.map((item, index) =>
            <Accordion.Item eventKey={index} key={index}>
                <Accordion.Header>
                    {item.NOMBRE_EMPRESA}
                </Accordion.Header>
                <Accordion.Body>
                    <Accordion defaultActiveKey={0} flush>
                        {item.map((itemChild, indexChild) =>
                            <Accordion.Item eventKey={indexChild} key={indexChild}>
                                <Accordion.Header>
                                    {itemChild.NOMBRE_AREA}
                                </Accordion.Header>
                                <Accordion.Body>
                                    <WorkersTable workers={itemChild}></WorkersTable>
                                </Accordion.Body>
                            </Accordion.Item>
                        )}
                    </Accordion>
                </Accordion.Body>
            </Accordion.Item>
        )}
    </Accordion>
}