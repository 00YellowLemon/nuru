const https = require('https');

const payload = {
    message: "Hello",
    userid: "test-user-123"
};
const url = "https://my-fastapi-service-339827130138.us-central1.run.app/invoke";

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
        console.log(`Status: ${res.statusCode}`);
        console.log(`Response: ${body}`);
    });
});

req.on('error', (e) => {
    console.error(`Problem with request: ${e.message}`);
});

req.write(data);
req.end();
