/* eslint-disable no-alert */
/* eslint-disable no-console */
// Script de Frontend
// Importar los estilos
// import './styles/styles.css';
// Importamos materialize
import 'materialize-css/dist/css/materialize.css';
import 'materialize-css/dist/js/materialize';

console.log('Modern JS Working!! Thanks Babel ...');
// let es solo una variable en el entorno en el que fue declarada
// sino le mandan message, entonces mandará el saludo por defecto
const show = (message = 'Saludo por defecto') => {
  alert(message);
};
// Ejemplo
show();
show('Mi saludo');
