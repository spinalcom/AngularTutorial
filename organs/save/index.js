var spinalCore = require('spinalcore');
require('./tutoModel');

var conn = spinalCore.connect("http://644:4YCSeYUzsDG8XSrjqXgkDPrdmJ3fQqHs@127.0.0.1:8888/");

spinalCore.load(conn, "tuto",
  function (tuto) {
    console.log("Model loaded.");
    setInterval(function () { increment(tuto); }, 2000);
  },
  function () {
    var tuto = new tutoModel();
    spinalCore.store(conn, tuto, "tuto",
      function () {
        console.log("Model saved.");
        setInterval(function () { increment(tuto); }, 2000);
      });
  }
);



function increment (tuto) {
  tuto.myNumber.set(tuto.myNumber.get() + 1);
  console.log("Model new value: " + tuto.myNumber.get());
}
