import { Table } from 'react-bootstrap';
export default function WorkersTable({ workers }) {
    return <Table hover responsive>
        <thead>
            <tr>
                <th>Nombre</th>
                <th>Rut</th>
                <th>Edad</th>
                <th>Profesión</th>
                <th>Cargo</th>
                <th>Grupo familiar</th>
            </tr>
        </thead>
        <tbody>
            {workers.map((worker, index) => (
                <tr key={index}>
                    <td>{worker.NOMBRE_TRABAJADOR ?? '-'}</td>
                    <td>{worker.RUT_TRABAJADOR ?? '-'}</td>
                    <td>{worker.EDAD ?? '-'}</td>
                    <td>{worker.PROFESION ?? '-'}</td>
                    <td>{worker.CARGO ?? '-'}</td>
                    <td>
                        {
                            (worker.CARGA_FAMILIAR && worker.CARGA_FAMILIAR.length > 0) ?
                                <ul>
                                    {
                                        worker.CARGA_FAMILIAR.map((item, index) =>
                                            <li key={index}>{item}</li>)
                                    }
                                </ul>
                                : 'No aplica'
                        }
                    </td>
                </tr>
            ))}
        </tbody>
    </Table>
}