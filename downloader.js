var https = require('https');
var fs = require('fs');
var download = function (url, dest, cb) {
  var file = fs.createWriteStream(dest);
  https.get(url, function(response) {
    response.pipe(file);
    file.on('finish', function() {
      file.close(cb);
    });
  });
}

download("https://source.unsplash.com/1080x1350/","coba.jpg",function () {
    console.log("on succesed");
})

