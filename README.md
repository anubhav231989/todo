# The Classic TODO Application for 3 Tier Web Architecture Demo Purpose.


The front-end of the application is in jquery/HTML.
The rest apis the front-end interacts with is a node/express application with mysql as the database.

## Following prerequisites are needed to run this project:
    - node.
    - mysql server.
    - python3 (just to serve the index.html, any other simple web server would also do.)

## npm install on root directory.


To run the front-end just serve the index.html file in the "frontend" via any http server.
For example using simple http server in python3,
python3 -m http.server 8080

To start the backend,
node server.js