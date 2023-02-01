let Shipping = function () {
  this.company = "";
};

Shipping.prototype = {
  setStrategy: function (company) {
    this.company = company;
  },

  calculate: function (package) {
    return this.company.calculate(package);
  }
};

let UPS = function () {
  this.calculate = function (package) {
    // calculations...
    return "$45.95";
  }
};

let USPS = function () {
  this.calculate = function (package) {
    // calculations...
    return "$39.40";
  }
};

let Fedex = function () {
  this.calculate = function (package) {
    // calculations...
    return "$43.20";
  }
};

function run() {

  let package = { from: "76712", to: "10012", weigth: "lkg" };

  // the 3 strategies

  let ups = new UPS();
  let usps = new USPS();
  let fedex = new Fedex();

  let shipping = new Shipping();

  shipping.setStrategy(ups);
  console.log("UPS Strategy: " + shipping.calculate(package));
  shipping.setStrategy(usps);
  console.log("USPS Strategy: " + shipping.calculate(package));
  shipping.setStrategy(fedex);
  console.log("Fedex Strategy: " + shipping.calculate(package));
}
