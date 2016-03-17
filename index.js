


var parser = require('html2hscript');
parser('<h1>Hello World</h1>', function(err, hscript) {
  console.log(hscript);
});
