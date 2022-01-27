const fs = require('fs');


// const files = fs.readdirSync('./');
// console.log(files);

fs.readdir('./', (err, res) => {
  if (err) console.log(err);
  else console.log('result', res);
})
