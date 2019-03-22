
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import './styles.css';

import Inter from './../src/intergalactic';

$(document).ready(function() {
  $('#bday').submit(function(event) {
    event.preventDefault();

    let year = $('#year').val();
    let exp = $('#lifexp').val();

    let input = new Inter(year, exp);

    $('#earth').text(`${input.calculateEarthAge()} and expected to live ${input.calculateExpectedEarth()} years more.`);
    $('#mercury').text(`${input.calculateMercuryAge()} and expected to live ${input.calculateExpectedMercury()} years more.`);
    $('#venus').text(`${input.calculateVenushAge()} and expected to live ${input.calculateExpectedVenus()} years more.`);
    $('#mars').text(`${input.calculateMarsAge()} and expected to live ${input.calculateExpectedMars()} years more.`);
    $('#jupiter').text(`${input.calculateJupiterAge()} and expected to live ${input.calculateExpectedJupiter()} years more.`);;

  });
});
