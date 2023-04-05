const doSomething = function () {
  let i = 0;
  if (this === that) {
    i = 0;
  } else {
    i = 1;
  }
};

export function sum(a, b) {
  return a + b;
}

export function TestFunction() {
  console.log('data ---------------------------------------- ');
}

export function ShowText() {
  return '<h1>This is a sample Page</h1>';
}

export function ShowUSerNAme() {
  let myFnameChecker = readCookie('username');
  return myFnameChecker;
}
export function ShowUSerEmail() {
  let myFnameChecker = readCookie('username');
  return myFnameChecker;
}

// checkUserLogedInStatus();
export function checkUserLogedInStatus() {
  console.log('data  ++++++++++++++++++++++++++++ ');
  //  alert('loging in here');
  let myAccessTokenChecker = readCookie('accessToken');
  let myFnameChecker = readCookie('email');
  var currentLocation = window.location;
  var urls = location.hostname;

  var currloc = location.pathname;
  // alert(myFnameChecker);

  if (myAccessTokenChecker) {
  } else {
    location.replace('/');
  }
}

function writeCookie(name, value, days) {
  var date, expires;
  if (days) {
    date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = '; expires=' + date.toGMTString();
  } else {
    expires = '';
  }
  document.cookie = name + '=' + value + expires + '; path=/';
}

function readCookie(name) {
  var i,
    c,
    ca,
    nameEQ = name + '=';
  ca = document.cookie.split(';');
  for (i = 0; i < ca.length; i++) {
    c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1, c.length);
    }
    if (c.indexOf(nameEQ) == 0) {
      return c.substring(nameEQ.length, c.length);
    }
  }
  return '';
}

export function LogOut() {
  alert('Logiing Outttt');
  writeCookie('accessToken', '', 0);
  writeCookie('username', '', 0);
  writeCookie('email', '', 0);
  writeCookie('mobile', '', 0);
  writeCookie('fname', '', 0);
  writeCookie('lname', '', 0);
  writeCookie('image', '', 0);
  location.replace('/');
}

export default doSomething;
