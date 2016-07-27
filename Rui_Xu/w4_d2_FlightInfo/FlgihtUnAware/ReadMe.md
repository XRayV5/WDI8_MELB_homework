#Flight Ray-Dar
- select and show airport info of (v1.0 Australia)
- show flight info of all enroute flights to an airport
- flight/airport data visualization with google map API

http://www.aircharterguide.com/AirportSearch.aspx?Region=Asia+%5bfs%5d+Pacific&Country=AU


https://en.wikipedia.org/wiki/List_of_airports_by_ICAO_code:_Y

- all airports http://openflights.org/data.html
https://raw.githubusercontent.com/jpatokal/openflights/master/data/airports.dat

Airport ID	Unique OpenFlights identifier for this airport.
Name	Name of airport. May or may not contain the City name.
City	Main city served by airport. May be spelled differently from Name.
Country	Country or territory where airport is located.
IATA/FAA	3-letter FAA code, for airports located in Country "United States of America".
3-letter IATA code, for all other airports.
Blank if not assigned.
ICAO	4-letter ICAO code.
Blank if not assigned.
Latitude	Decimal degrees, usually to six significant digits. Negative is South, positive is North.
Longitude	Decimal degrees, usually to six significant digits. Negative is West, positive is East.
Altitude	In feet.
Timezone	Hours offset from UTC. Fractional hours are expressed as decimals, eg. India is 5.5.
DST	Daylight savings time. One of E (Europe), A (US/Canada), S (South America), O (Australia), Z (New Zealand), N (None) or U (Unknown). See also: Help: Time
Tz database time zone	Timezone in "tz" (Olson) format, eg. "America/Los_Angeles".



Sprint 1
1. get all Aus airport data and push it to the DB
