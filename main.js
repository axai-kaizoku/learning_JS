'use strict';


var user = 'John Mockery';
var designation = 'Sr. Designer';
var origanization = 'Sentinel Design';
var city = 'New York';
var country = 'USA';
var location = city + ', ' + country;
var favQuote = 'To \'single-quote\' or "double-quote"';

var employeeData = `Name: ${user}
Designation: ${designation}
Organization: ${origanization}
Location: ${location}`;

console.log(employeeData);
