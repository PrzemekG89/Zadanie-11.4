function Phone(brand, price, color, ramMemory, rating) {
    this.brand = brand;
    this.price = price;
    this.color = color;
    this.ramMemory = ramMemory;
    this.rating = rating;
};

Phone.prototype.printInfo = function() {
    console.log("The phone brand is " + this.brand + ", color is " + this.color + " and the RAM memory is " + this.ramMemory + ". The rating is " + this.rating + " and the price is " + this.price + ".");
};

var SamsungGalaxyS6 = new Phone("Samsung", "1200", "white", "3GB", "7.52");
var iPhone6S = new Phone("Apple", "1800", "space grey", "2GB", "7.55");
var OnePlusOne = new Phone("One Plus", "1300", "black", "3GB", "8.20");

SamsungGalaxyS6.printInfo();
iPhone6S.printInfo();
OnePlusOne.printInfo();