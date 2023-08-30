//Creating Constructor function
let Person = function (name, initials, birthyear) {
  this.name = name;
  this.initials = initials;
  this.birthyear = birthyear;

  this.calcAge = function () {
    let age = new Date().getFullYear - this.birthyear;
    console.log(age);
  };
};
