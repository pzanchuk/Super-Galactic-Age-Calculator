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

    $('#earth').text(`${Math.round(input.calculateEarthAge())} and expected to live ${Math.round(input.calculateExpectedEarth())} years more.`);
    $('#mercury').text(`${Math.round(input.calculateMercuryAge())} and expected to live ${Math.round(input.calculateExpectedMercury())} years more.`);
    $('#venus').text(`${Math.round(input.calculateVenusAge())} and expected to live ${Math.round(input.calculateExpectedVenus())} years more.`);
    $('#mars').text(`${Math.round(input.calculateMarsAge())} and expected to live ${Math.round(input.calculateExpectedMars())} years more.`);
    $('#jupiter').text(`${Math.round(input.calculateJupiterAge())} and expected to live ${Math.round(input.calculateExpectedJupiter())} years more.`);

  });
});
