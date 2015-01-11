# jsla-api

This is a small project that will help link up the multiple services that [js.la](http://js.la) uses to help automate some of the more administative proccesses.

## Installing

You will need [node.js]( http://nodejs.org ). Then run

    $ npm install

Now you should have all the dependencies needed to run the api. 

## Running

Running the api is just as simple as the install proccess. Do

    $ npm start

Then test to see if everything is working properly by pinging the server

    $ curl -X GET http://localhost:3030/ping # PONG

## Configuration

This is using [dotenv](https://www.npmjs.com/package/dotenv) and has a few pieces that need to be configured. Here is a sample configuration.

```
# basic optional stuff
PORT=9001
NODE_HOSTNAME=js.la
# this is to obscure webhook urls
HASH=1234 
# mailchimp
MAILCHIMP_API_KEY=supersecret
MAILCHIMP_LIST_ID=listtoaddemailsto
```

## What this currently has.

- tito webhook url
- mail chimp intergration
- api

## API


### PUT /api/subscribe

This will subscribe the email given to this endpoint to the mailchimp list specified.