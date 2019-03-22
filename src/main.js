
import Intergalactic from './../src/intergalactic';
import $ from 'jquery';
import './styles.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

$(document).ready(function() {
  $('#bday').submit(function(event) {
    event.preventDefault();


    let year = $('#year').val();
    let month = $('#month').val();
    let day = $('#day').val();
    let exp = parseInt($('#lifexp').val());



    let myAge = new Intergalactic(new Date(year, month, day), exp);

    let myExpect = (exp - myAge.calculateEarthAge() );
    $('#earth').text(myAge.calculateEarthAge() + " and life exp " + myAge.calculateEarthAge());

    console.log(myAge.calculateEarthAge());


  });
});
