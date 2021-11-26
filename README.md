# MoneySuperMarket.com 
## Java Developer Technical Test

## Overview

MoneySuperMarket have gone Bitcoin crazy and decided to allow their customers to keep an 
eye on the best exchanges with the highest selling price.

This application calls the below Bitcoin exchanges to retrieve selling price information:

 * https://blockchain.info/ticker
 * https://api.exmo.com/v1/ticker

It finds the exchange with the best (highest) price and returns the price and the exchange name.

## Prerequisites
1.	Download and install Node Version Manager or make sure you're running an LTS copy of Node
2. 	Download the MSM technical test project files [HERE](https://github.com/MSMGCustomerPlatform/backend-task/archive/refs/heads/main.zip.) and save locally.
3. 	Unzip to a <your_code> folder of your choice.
4.	Open your IDE of choice, and open/import the <your_code> folder.
5.  Open a terminal navigate to the ./<your_code> folder and either `npm install` or `yarn` dependant on your preference
6.  Execute: `./gradlew bootRun` and ensure the project builds, tests and runs successfully 
7.	Open http://localhost:8080/exchangeapp/highestprice/ in a browser and view the response from the application e.g.:
![img_1.png](readme_files/img_1.png)
      
## Exercise

We've done a deal with a new exchange and would like to include their prices in the application.  Feel free to refactor
the existing code as you see fit so that it adheres to SOLID principles.

The new Api is:
https://api.bitfinex.com/v1/pubticker/btcusd

(hint - you'll need the ask price)

The application responds on http://localhost:8080/exchangeapp/highestprice/

## Stetch Goal

Finished early? We'd also like to look at including a parameter to expand beyond just USD selling prices.

You'll need to extend the application to include bitfinex within the highest price calculation.

## Technologies

 * Java 1.8
 * Gradle
 * JUnit
 * Mockito
 * Hamcrest/AssertJ
