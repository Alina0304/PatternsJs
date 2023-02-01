function Publisher() {
  this.subscribers = [];
}

Publisher.prototype.deliver = function(data) {

  this.subscribers.forEach(

      function(fn) {

        fn(data);

      }

  );

  return this;

};

Function.prototype.subscribe = function(publisher) {
  publisher.subscribers.push(this);
  return this;
};



let Microsoft = new Publisher;
let Google = new Publisher;
let Apple = new Publisher;

let Ann = function(from) {
  console.log('Delivery from '+from+' to Ann');
};
let Vasya = function(from) {
  console.log('Delivery from '+from+' to Vasya');
};
let Maria = function(from) {
  console.log('Delivery from '+from+' to Maria ');
};

Ann.subscribe(Microsoft).subscribe(Google).subscribe(Apple);
Vasya.subscribe(Google).subscribe(Apple);
Maria.subscribe(Microsoft);

Microsoft.deliver('news 1').deliver('news 2');
Google.deliver('googlenews 1').deliver('googlenews 2');