const https = require('https');

const payloads = [
    { input: "Hello" },
    { input: { input: "Hello" } },
    { input: { human_input: "Hello" } },
    { message: "Hello" }
];

const url = "https://my-fastapi-service-339827130138.us-central1.run.app/invoke";

function testPayload(payload) {
    return new Promise((resolve, reject) => {
        const data = JSON.stringify(payload);
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Content-Length': data.length
            }
        };

        const req = https.request(url, options, (res) => {
            let body = '';
            res.on('data', (chunk) => body += chunk);
            res.on('end', () => {
                console.log(`Payload: ${JSON.stringify(payload)}`);
                console.log(`Status: ${res.statusCode}`);
                console.log(`Response: ${body}`);
                console.log('---');
                resolve();
            });
        });

        req.on('error', (e) => {
            console.error(`Problem with request: ${e.message}`);
            resolve();
        });

        req.write(data);
        req.end();
    });
}

async function runTests() {
    for (const payload of payloads) {
        await testPayload(payload);
    }
}

runTests();
