# WikiDB API
wikiDB is a simple API built using Mongoose, Node.js, and Express.js. It allows for CRUD (Create, Read, Update, and Delete) operations on a MongoDB collection.

## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites
You will need to have Node.js and MongoDB installed on your machine. You can download Node.js from https://nodejs.org/en/download/ and MongoDB from https://www.mongodb.com/download-center#community.

### Installing
Clone the repository to your local machine and install the dependencies.

```
git clone https://github.com/dvip1/WikiDB
cd WikiDB
npm install
```
The API should now be running on http://localhost:3000

### API Endpoints
The API has the following endpoints:
#### GET /articles
Returns all articles in the database.
#### POST /articles
Creates a new article in the database.
#### GET /articles/:articleTitle
Returns the article with the specified title.
#### PUT /articles/:articleTitle
Updates the article with the specified title.
#### DELETE /articles/:articleTitle
Deletes the article with the specified title.
#### PATCH /articles/:articleTitle
Updates the article with the specified title.

## Built With
* [Node.js](https://nodejs.org/en/) - JavaScript runtime
* [Express.js](https://expressjs.com/) - Web framework
* [Mongoose](http://mongoosejs.com/) - MongoDB object modeling
## Authors
* **Dvip Patel** - *Initial work* - [dvip1]
## License
This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
## Acknowledgments
* Hat tip to anyone whose code was used
* Inspiration
* etc
