import { count } from './../src/intergalactic';
import { isHaiku } from './../src/intergalactic';
import $ from 'jquery';
import './styles.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

$(document).ready(function() {
  $('#haiku').submit(function(event) {
    event.preventDefault();


    let first = count($('#first').val());
    let second = count($('#second').val());
    let third = count($('#third').val());

    $('#result').text(isHaiku(first, second, third));

  });
});
