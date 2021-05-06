/*
 * restanrop att testa med:
 *  curl -s -X POST http://localhost:4000/startat/aktiebolag?orgnr=5555555555
 *  curl -s -X POST http://localhost:4000/startat/aktiebolag?orgnr=1234432112
 *
 */


const MediumQueue  = require("./medium");
const medium = new MediumQueue();

const Producer = require("./producer");
const eventProducer = new Producer(medium);
eventProducer.startListening(4000);

const Aktiebolag  = require("./aktiebolag");
const consumerAktiebolag = new Aktiebolag(medium);
consumerAktiebolag.kopplaEventsAttLyssnaEfter();



 