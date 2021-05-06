class Aktiebolag  {
    constructor(queueToReadFrom) {
        this.queueToReadFrom = queueToReadFrom;
    }

    kopplaEventsAttLyssnaEfter() {
        this.queueToReadFrom.on("startatAktiebolag", (orgnr,datum) => {
            console.log("consumer: Aktiebolag startat " + datum +" med orgnr: " + orgnr);
        })
    }
};

module.exports = Aktiebolag