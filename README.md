# The Weather Here
A little web application that prompts users to "check-in". Based on user's locations the server fetches the local weather using the [Dark Sky API](https://darksky.net/dev). 
The server then queries the [OpenAQ](https://docs.openaq.org) database for pollution data within 10km of the given coordinates.
The user can view all the check-ins on a world map created.  

You can visit the application [here](https://weather-checkin.herokuapp.com/)

## Built With 
* [Node.js](https://nodejs.org/en/) - Node.js is an asynchronous event driven JavaScript runtime that allows the use of JavaScript outside the browser. It is designed to build scalable network applications.

* [Express.js](https://expressjs.com/) - Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.

* [Dark Sky API](https://darksky.net/dev) - Easy to use and developer friendly weather API.

* [OpenAQ API](https://docs.openaq.org) - An open-source API for air quality data powered by [OpenAQ](https://openaq.org).

* [Nedb](https://www.npmjs.com/package/nedb) - A persistent database for lightweight JavaScript applications. It is a subset of the popular NoSQL database [MongoDB](https://www.mongodb.com/)

* [node-fetch](https://www.npmjs.com/package/node-fetch) - A light-weight module that brings window.fetch to Node.js.

## Author 
* [**Saaransh Mishra**](https://github.com/SaaranshMishra) 
