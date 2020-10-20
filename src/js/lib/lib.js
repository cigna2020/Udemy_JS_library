import $ from './core';
import './modules/display';
import './modules/classes'; // таким образом в функцию $ добавим еще один метод
import './modules/handlers';
import './modules/actions';


export default $; // таким образом разширяем функционал $, добавляя методы с display...