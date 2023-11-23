# ReSimple – Prueba técnica 

- Autor: Ignacio Prado Ramírez
- Fecha: 23 de noviembre del 2023

## Introducción

Este documento fue creado por el área de TI de ReSimple y está orientado al
postulante para el cargo de `Desarrollador Senior`. A continuación, se detallarán los
requisitos, instrucciones y material complementario, que el postulante deberá
cumplir a lo largo de esta prueba técnica.

## Requisitos técnicos

- La prueba debe ser subida a un repositorio GitHub público.
- En el correo enviado se le indicará al postulante la fecha de entrega de la
prueba.
- La parte lógica de la prueba debe ser realizada con el lenguaje `JavaScript`.
- El frontend de la prueba se puede realizar de forma libre, incluso usando
librerías (Bootstrap, Skeleton, Materialize, étc). Se considerará puntaje
adicional si se desarrolla con React.
- Todas las variables, métodos, clases, funciones o cualquier cosa
relacionada con código, `debe ser en inglés`.
- Utilizar la metodología BEM para el nombramiento de clases de CSS.
- El diseño debe ser responsivo y adaptable a múltiples dispositivos.


## Instrucciones

El archivo Excel llamado `origen-datos-junior.xlsx` simula una base de datos, de
la cual debes obtener la data, manipularla y mostrarla a través de una interfaz
frontend. Además, con la data del Excel, hay que realizar ciertas agrupaciones con
la data, donde en la raíz están las Empresas, dentro de Empresas están las Áreas,
y dentro de Áreas están los Trabajadores, y cada trabajador puede tener de 0 a N
Cargas Familiares, es decir:

- Empresas
    - Áreas
        - Trabajadores
            - Cargas Familiares


En el siguiente link (https://prueba-tecnica-senior-resimple.netlify.app/) se muestra
un ejemplo del despliegue de los datos del Excel a modo de referencia para
orientarte de manera más visual. Considera que éste es sólo un ejemplo, puedes
desarrollarlo de la manera en que más te acomode, lo importante es agrupar de
manera lógica la data.
Dado que el Excel “origen-datos-senior.xlsx” cuenta sólo con los IDs de
Empresa y Área, te dejamos disponible un archivo JSON llamado “diccionario-dedatos.json”, donde podrás obtener a través de la ID el nombre de la Empresa y el
Área, para que la puedas desplegar a través del frontend.

## Dudas o consultas
Si tienes dudas con la prueba técnica, puedes ponerte en contacto con nosotros y
te ayudaremos.

    Matías Fuentes
    mfuentes@resimple.cl

    Daniel Carrasco
    dcarrasco@resimple.cl