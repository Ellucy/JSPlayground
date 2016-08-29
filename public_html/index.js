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

//var inner = function (resolve, reject) {
//  //randomly execute resolve or reject kasuta math randomit
//  setTimeout(function () {//pseudo thread
//    var r = Math.random();
//    if (r < 0.5) {
//      resolve('hi');
//    } else {
//      reject('bye');
//    }
//  }, 2000);
//};
//
//var p = new Promise(inner);
//
//var success = function () {
//  console.log('success', arguments);
//};
//
//var error = function () {
//  console.log('error', arguments);
//};
//
//p.then(success, error);
//console.log('jhtju');
//
//
//function callback(i, cb) {
//  console.log(i);
//  cb();
//}
//
//callback('Call', function () {
//  console.log('back');
//});


//promise to home here in time
let promiseToBeHereInTime = new Promise(function (resolve, reject) {
  let isHereInTime = false;

  if (isHereInTime) {
    resolve('in time');
  } else {
    reject('I am leaving!');
  }
});

promiseToBeHereInTime.then(function (resolve) {
  console.log('You are here ' + resolve);
}).catch(function (reject) {
  console.log('You are not here! ' + reject);
});

//promise after coming
let isHereInTime = function () {
  return new Promise(function (resolve, reject) {
    resolve('You were here on time, ');
  });
};

let isSoftwareDev = function(result) {
  return new Promise(function (resolve, reject) {
    resolve(result+ 'you are a software developer, ');
  });
};
let hasEnoughKnowledges = function(result) {
  return new Promise(function (resolve, reject) {
    resolve(result + 'and you are smart! ');
  });
};

isHereInTime().then(function(result) {
  return isSoftwareDev(result);
}).then(function(result) {
  return hasEnoughKnowledges(result);
}).then(function(result) {
console.log(result + 'You are hired, Good luck!');
});

    