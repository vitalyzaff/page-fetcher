const args = process.argv.slice(2);
const request = require('request');
const fs = require('fs');

request(args[0], (error, response, body) => {
  fs.writeFile(args[1], body, (err) => {
    if (err) throw err;
    console.log(`Downloaded and saved ${fileSize()} bytes to ${args[1]}`);
  });
});

const fileSize = function() {
  let file = fs.statSync(args[1]);
  return file.size;
};

