import React from 'react';
import * as XLSX from 'xlsx';
import _ from 'underscore'
import { Container, Alert } from 'react-bootstrap';

import Header from './components/Header.jsx';
import Title from './components/Title.jsx';
import Footer from './components/Footer.jsx';

import ORGANIZATIONS_DATA from './data/dicionario-de-datos.json';
import WORKERS_DATA from './data/origen-datos-senior.xlsx';
import Organizations from './components/Organizations.jsx';

function App() {
  const [dataGrouped, setDataGrouped] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [isError, setIsError] = React.useState(false);
  React.useEffect(() => {

    fetch(WORKERS_DATA)
      .then((res) => res.arrayBuffer())
      .then((ab) => {
        const workbook = XLSX.read(ab, { type: "array" });
        const sheetname = workbook.SheetNames[0]
        const worksheet = workbook.Sheets[sheetname]
        const json = XLSX.utils.sheet_to_json(worksheet);

        var groupWorker = (data, field) => _.map(_.groupBy(data, field), function (obj, key) {
          var temp = {};
          temp.NOMBRE_TRABAJADOR = obj[0].NOMBRE_TRABAJADOR;
          temp.PROFESION = obj[0].PROFESION;
          temp.CARGO = obj[0].CARGO;
          temp.EDAD = obj[0].EDAD;
          temp.RUT_TRABAJADOR = key;
          temp.CARGA_FAMILIAR = obj.map((item) => (item.CARGA_FAMILIAR)).filter(Boolean)
          return temp;
        });
        var groupArea = (data, field, ORGANIZATION) => _.map(_.groupBy(data, field), function (obj, key) {
          var temp = {};
          temp = groupWorker(obj, 'RUT_TRABAJADOR')
          temp.ID_AREA = key;
          temp.NOMBRE_AREA = (ORGANIZATION && ORGANIZATION.AREAS ? ORGANIZATION.AREAS.find((item) => item.ID_AREA === key).NOMBRE_AREA : '')
          return temp;
        });

        var groupByOrganizations = _.map(_.groupBy(json, 'ID_EMPRESA'), function (obj, key) {
          var temp = {};
          var tempOrganization = (ORGANIZATIONS_DATA && ORGANIZATIONS_DATA.EMPRESAS ? ORGANIZATIONS_DATA.EMPRESAS.find((item) => item.ID_EMPRESA === +key) : undefined)
          if (tempOrganization) {
            temp = groupArea(obj, 'ID_AREA', tempOrganization)
            temp.NOMBRE_EMPRESA = (tempOrganization ? tempOrganization.NOMBRE_EMPRESA : '')
          } else {
            setIsError(true)
            return;
          }
          temp.ID_EMPRESA = key;
          return temp;
        });

        setDataGrouped(groupByOrganizations);
        setIsLoading(true)
      });

  }, []);

  const noDataMessage = <p>No existe informacion a mostrar desde la fuente de datos</p>;
  const loadingMessage = <Alert variant='light'>
    <div className="p-5 text-center">Procesando informacion...</div>
  </Alert>;

  const errorMessage = <Alert variant='warning'>
    <div className="p-5 text-center">Hubo un error procesando la información. Intente más tarde.</div>
  </Alert>;

  return (
    <Container>
      <Header></Header>
      <Title title='ReSimple' description='Prueba técnica'></Title>
      {isError && errorMessage}
      {!isLoading && !isError &&
        loadingMessage}
      {isLoading && !isError &&
        ((dataGrouped && dataGrouped.length > 0) ? <Organizations organizations={dataGrouped}></Organizations> : noDataMessage)
      }
      <Footer text='Noviembre 2023'></Footer>
    </Container>
  );
}

export default App;
