// import block
const fs = require('fs');

// constants block
const file = './foo.txt';
const data = 'any message ';

// execute block
fs.writeFile(file, data, { flag: 'r+' }, async (err) => {
  console.log('success');
  await fs.readFile(file, 'utf-8', (err, data) => {
    console.log(data);
  })
})
