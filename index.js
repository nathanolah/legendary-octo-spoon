import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import ngrok from '@ngrok/ngrok';
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.post('/webhook', (req, res) => {
    console.log('Received webhook:', req.body);
    res.status(200).send('Webhook received');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

const initTunnel = async () => {

    // try {
    //     await ngrok.forward({
    //         // The port your app is running on.
    //         addr: port,
    //         authtoken: process.env.NGROK_AUTHTOKEN,
    //         domain: process.env.NGROK_DOMAIN,
    //         // Secure your endpoint with a traffic policy.
    //         // This could also be a path to a traffic policy file.
    //         //traffic_policy: '{"on_http_request": [{"actions": [{"type": "oauth","config": {"provider": "google"}}]}]}'
    //     });

    //     // Output ngrok url to console
    //     console.log(`Ingress established at ${process.env.NGROK_DOMAIN}`);

    // } catch (err) {
    //     console.error('Error establishing ngrok tunnel:', err);
    // }


    // const listener = await ngrok.forward({
    //         // The port your app is running on.
    //         addr: 8080,
    //         authtoken: process.env.NGROK_AUTHTOKEN,
    //         domain: process.env.NGROK_DOMAIN,
    //         // Secure your endpoint with a traffic policy.
    //         // This could also be a path to a traffic policy file.
    //         traffic_policy: '{"on_http_request": [{"actions": [{"type": "oauth","config": {"provider": "google"}}]}]}'
    // });

    // // Output ngrok url to console
    // console.log(`Ingress established at ${listener.url()}`);


    // try {
    //     await ngrok.authtoken(process.env.NGROK_AUTHTOKEN);
    //     const url = await ngrok.connect({
    //         addr: port,
    //         subdomain: process.env.NGROK_DOMAIN.split('//')[1].split('.')[0] // Extract subdomain from full domain
    //     });
    //     console.log(`ngrok tunnel established at: ${url}`);
    // } catch (err) {
    //     console.error('Error establishing ngrok tunnel:', err);
    // }
};

initTunnel();


// ngrok.connect().then(url => {
//   console.log(`ngrok tunnel established at: ${url}`);
// }).catch(err => {
//   console.error('Error establishing ngrok tunnel:', err);
// });
