
import { calculateAge } from './../src/intergalactic';
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


    $('#result').text(calculateAge(new Date(year, month, day)));

  });
});
