var http = require('http');

var options = {
  hostname: 'openexchangerates.org',
  port: 80,
  path: '/api/latest.json?app_id=35d5816f52d94037a8a41d9450cf6c78'
};

var req = http.request(options, function(res) {
  console.log('STATUS: ' + res.statusCode);
  console.log('HEADERS: ' + JSON.stringify(res.headers));
  res.setEncoding('utf8');
  res.on('data', function(chunk) {
    console.log('BODY: ' + chunk);
  });
});

req.on('error', function(e) {
  console.log('problem with request: ' + e.message);
});

req.write('data\n');
req.write('data\n');
req.end();
