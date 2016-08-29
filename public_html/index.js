//new Promise((resolveFn, rejectFn)); //pass in 2 functions, async handlers, first one gets called when promise is fullfilled, second one gets called when promise is rejected
//
//var email = getUser(name)
//  .then(function(user) {
//    return user.email;
//})
//  .catch(function (err) {
//    log.error({err:err}, '...');
//  throw new badUserName();
//});

var inner = function (resolve, reject) {
  //randomly execute resolve or reject kasuta math randomit
  setTimeout(function () {//pseudo thread
    var r = Math.random();
    if (r < 0.5) {
      resolve('hi');
    }
    else {
      reject('bye');
    }
  }, 2000);
};

var p = new Promise(inner);

var success = function () {
  console.log('success', arguments);
};

var error = function () {
  console.log('error', arguments);
};

p.then(success, error);
console.log('jhtju');


function callback(i, cb) {
  console.log(i);
  cb();
}

callback('Call', function(){
   console.log('back');
});