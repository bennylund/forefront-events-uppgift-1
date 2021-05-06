const http = require ('http');
const url = require('url'); 

class Producer {
    constructor(queueToEmitAt) {
        this.queueToEmitAt = queueToEmitAt;
    }

    startListening(port) {
        const internalApp = http.createServer( async (req, res) => {

            const { method, url, headers } = req;
            const parsedURL = new URL(req.url, 'http://' + headers.host);
            
            if ( parsedURL.pathname === '/startat/aktiebolag' && req.method === 'POST') {
                const orgnr = parsedURL.searchParams.get('orgnr')
                if(!orgnr) {
                    res.statusCode = 400;
                    res.end("IP address is required, please add IP address in the query");
                } else {
                    this.queueToEmitAt.emit("startatAktiebolag", orgnr, Date.now());

                    res.setHeader('content-type', 'Application/json');
                    res.statusCode = 200;
                    res.end("{ 'lagt på mediumkö' : 'startatAktiebolag' }");  
                }
            }
            else {
                res.statusCode = 400;
                res.end("API Endpoint Not Supported");
            }
        });

        internalApp.listen(port);
    }
};

module.exports = Producer