var states = [
  'AL	 -Alabama	Montgomery - EST.	December 14, 1819',
  'AK -	Alaska	Juneau - EST.	January 3, 1959',
  'AZ -	Arizona	Phoenix - EST.	February 14, 1912',
  'AR -	Arkansas	Little Rock - EST.	June 15, 1836',
  'CA -	California	Sacramento - EST.	September 9, 1850',
  'CO -	Colorado	Denver - EST.	August 1, 1876',
  'CT -	Connecticut	Hartford - EST.	January 9, 1788',
  'DE -	Delaware	Dover - EST.	December 7, 1787',
  'FL -	Florida	Tallahassee - EST.	March 3, 1845',
  'GA -	Georgia	Atlanta - EST.	January 2, 1788',
  'HI -	Hawaii	Honolulu - EST.	August 21, 1959',
  'ID -	Idaho	Boise - EST.	July 3, 1890',
  'IL -	Illinois	Springfield - EST.	December 3, 1818',
  'IN -	Indiana	Indianapolis - EST.	December 11, 1816',
  'IA -	Iowa	Des Moines - EST.	December 28, 1846',
  'KS -	Kansas	Topeka - EST.	January 29, 1861',
  'KY -	Kentucky	Frankfort - EST.	June 1, 1792',
  'LA -	Louisiana	Baton Rouge - EST.	April 30, 1812',
  'ME -	Maine	Augusta - EST.	March 15, 1820',
  'MD -	Maryland	Annapolis - EST.	April 28, 1788',
  'MA -	Massachusetts	Boston - EST.	February 6, 1788',
  'MI -	Michigan	Lansing - EST.	January 26, 1837',
  'MN -	Minnesota	Saint Paul - EST.	May 11, 1858',
  'MS -	Mississippi	Jackson - EST.	December 10, 1817',
  'MO -	Missouri	Jefferson City - EST.	August 10, 1821',
  'MT -	Montana	Helena - EST.	November 8, 1889',
  'NE -	Nebraska	Lincoln - EST.	March 1, 1867',
  'NV -	Nevada	Carson City - EST.	October 31, 1864',
  'NH -	New Hampshire	Concord - EST.	June 21, 1788',
  'NJ -	New Jersey	Trenton - EST.	December 18, 1787',
  'NM -	New Mexico	Santa Fe - EST.	January 6, 1912',
  'NY -	New York	Albany - EST.	July 26, 1788',
  'NC -	North Carolina	Raleigh - EST.	November 21, 1789',
  'ND -	North Dakota	Bismarck - EST.	November 2, 1889',
  'OH -	Ohio	Columbus - EST.	March 1, 1803',
  'OK -	Oklahoma	Oklahoma City - EST.	November 16, 1907',
  'OR -	Oregon	Salem - EST.	February 14, 1859',
  'PA -	Pennsylvania	Harrisburg - EST.	December 12, 1787',
  'RI -	Rhode Island	Providence - EST.	May 19, 1790',
  'SC -	South Carolina	Columbia - EST.	May 23, 1788',
  'SD -	South Dakota	Pierre - EST.	November 2, 1889',
  'TN -	Tennessee	Nashville - EST.	June 1, 1796',
  'TX -	Texas	Austin - EST.	December 29, 1845',
  'UT -	Utah	Salt Lake City - EST.	January 4, 1896',
  'VT -	Vermont	Montpelier - EST.	March 4, 1791',
  'VA -	Virginia	Richmond - EST.	June 25, 1788',
  'WA -	Washington	Olympia - EST.	November 11, 1889',
  'WV -	West Virginia	Charleston - EST.	June 20, 1863',
  'WI -	Wisconsin	Madison - EST.	May 29, 1848',
  'WY -	Wyoming	Cheyenne - EST.	July 10, 1890'
]

function getRandomState() {
  return states[Math.floor(Math.random()*states.length)];
}

function getRandomColour() {
  return '#'+(Math.random()*0xFFFFFF<<0).toString(16);;
}

window.addEventListener('load', function () {
  document.querySelector("#demo").innerHTML = getRandomState();
  document.body.style.backgroundColor = getRandomColour();
});
