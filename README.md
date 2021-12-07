# MoneySuperMarket.com 
## NodeJS Developer Technical Test

## Overview

MoneySuperMarket have gone Bitcoin crazy and decided to allow their customers to keep an 
eye on the best exchanges with the highest selling price.

This application calls the below Bitcoin exchanges to retrieve selling price information:

 * https://blockchain.info/ticker
 * https://api.exmo.com/v1/ticker

It finds the exchange with the best (highest) price and returns the price and the exchange name.

## Prerequisites
1.	Download and install Node Version Manager or make sure you're running an LTS copy of Node
2. 	Clone this repo into a folder of your choice.
3.	Open your IDE of choice, and open/import the <your_code> folder.
4.  Open a terminal navigate to the ./<your_code> folder and either `npm install` or `yarn` dependant on your preference
5.  Execute: `npm run test` to run tests.
6.	Execute: `npm run start` and ensure the project builds and runs successfully 
      
## Exercise

We've done a deal with a new exchange and would like to include their prices in the application.  Feel free to refactor
the existing code as you see fit so that it adheres to SOLID principles.

The new Api is:
https://api.bitfinex.com/v1/pubticker/btcusd

(hint - you'll need the ask price)

The application responds on http://localhost:3000/exchangeapp/highestprice/

## Stretch Goal

Finished early? We'd also like to look at including a parameter to expand beyond just USD selling prices.

## Technologies

 * NPM
 * Jest
