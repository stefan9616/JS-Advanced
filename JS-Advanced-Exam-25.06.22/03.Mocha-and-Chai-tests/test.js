let expect = require('chai').expect;

const carService = {
    isItExpensive(issue) {
      if (issue === "Engine" || issue === "Transmission") {
        return `The issue with the car is more severe and it will cost more money`;
      } else {
        return `The overall price will be a bit cheaper`;
      }
    },
    discount(numberOfParts, totalPrice) {
      if (typeof numberOfParts !== "number" || typeof totalPrice !== "number") {
        throw new Error("Invalid input");
      }
  
      let discountPercentage = 0;
  
      if (numberOfParts > 2 && numberOfParts <= 7) {
        discountPercentage = 15;
      } else if (numberOfParts > 7) {
        discountPercentage = 30;
      }
  
      let result = (discountPercentage / 100) * totalPrice;
  
      if (numberOfParts <= 2) {
        return "You cannot apply a discount";
      } else {
        return `Discount applied! You saved ${result}$`;
      }
    },
    partsToBuy(partsCatalog, neededParts) {
      let totalSum = 0;
  
      if (!Array.isArray(partsCatalog) || !Array.isArray(neededParts)) {
        throw new Error("Invalid input");
      }
      neededParts.forEach((neededPart) => {
        partsCatalog.map((obj) => {
          if (obj.part === neededPart) {
            totalSum += obj.price;
          }
        });
      });
  
      return totalSum;
    },
  };

  describe("CarService tests", function () {
    describe("isItExpensive functionality", function () {
        it("returns correct output", function () {
            expect(carService.isItExpensive('Engine')).to.equal('The issue with the car is more severe and it will cost more money');
            expect(carService.isItExpensive('Transmission')).to.equal('The issue with the car is more severe and it will cost more money');
            expect(carService.isItExpensive('Tyre')).to.equal('The overall price will be a bit cheaper');
            expect(carService.isItExpensive('Lamp')).to.equal('The overall price will be a bit cheaper');
        });
    });
 
    describe('discount functionality', function(){
        it('throws error with wrong input', function() {
            () => carService.discount(1, '1').to.throw('Invalid input');
            () => carService.discount('1', '1').to.throw('Invalid input');
            () => carService.discount('1', 1).to.throw('Invalid input');
        });
 
        it('yields correct result with correct input', function() {
            expect(carService.discount(2, 100)).to.equal('You cannot apply a discount');
            expect(carService.discount(3, 100)).to.equal('Discount applied! You saved 15$');
            expect(carService.discount(8, 100)).to.equal('Discount applied! You saved 30$');
        });
    });
 
    describe('partsToBuy functionality', function() {
        it('throws error with wrong input', function() {
            () => carService.partsToBuy([1], '1').to.throw('Invalid input');
            () => carService.partsToBuy('1', '1').to.throw('Invalid input');
            () => carService.partsToBuy('1', [1]).to.throw('Invalid input');
        });
        it('correct input yields correct result', function() {
            expect(carService.partsToBuy([{ part: "blowoff valve", price: 145 }, { part: "coil springs", price: 230 }], ["blowoff valve", "injectors"])).to.equal(145);
            expect(carService.partsToBuy([{ part: "blowoff valve", price: 145 }, { part: "coil springs", price: 230 }], ["blowoff valve", "coil springs"])).to.equal(375);
            expect(carService.partsToBuy([], ["blowoff valve", "injectors"])).to.equal(0);
        });
    });
 
});