const rentCar = {
    searchCar(shop, model) {
        let findModel = [];
        if (Array.isArray(shop) && typeof model == 'string') {
            for (let i = 0; i < shop.length; i++) {
                if (model == shop[i]) {
                    findModel.push(shop[i]);
                }
            }
            if (findModel.length !== 0) {
                return `There is ${findModel.length} car of model ${model} in the catalog!`;
            } else {
                throw new Error('There are no such models in the catalog!')
            }
        } else {
            throw new Error('Invalid input!')
        }
    },
    calculatePriceOfCar(model, days) {
        let catalogue = {
            Volkswagen: 20,
            Audi: 36,
            Toyota: 40,
            BMW: 45,
            Mercedes: 50
        };

        if (typeof model == 'string' && Number.isInteger(days)) {
            if (catalogue.hasOwnProperty(model)) {
                let cost = catalogue[model] * days;
                return `You choose ${model} and it will cost $${cost}!`
            } else {
                throw new Error('No such model in the catalog!')
            }
        } else {
            throw new Error('Invalid input!')
        }
    },
    checkBudget(costPerDay, days, budget) {
        if (!Number.isInteger(costPerDay) || !Number.isInteger(days) || !Number.isInteger(budget)) {
            throw new Error('Invalid input!');
        } else {
            let cost = costPerDay * days;
            if (cost <= budget) {
                return `You rent a car!`
            } else {
                return 'You need a bigger budget!'
            }
        }
    }
}

describe("Tests …", function() {
    describe("SearchCar", function() {
        it("Test 1", () => {
            expect(() => rentCar.searchCar('string', 1).to.throw('Invalid input'));
        });
        it("Test 2", () => {
            expect(() => rentCar.searchCar(1, 'string').to.throw('Invalid input'));
        });
        it("Test 3", () => {
            expect(() => rentCar.searchCar([], 1).to.throw('Invalid input'));
        });
        it("Test 4", () => {
            expect(() => rentCar.searchCar({}, 'string').to.throw('Invalid input'));
        });
        it("Test 5", function () {
            expect(rentCar.searchCar(['Audi', 'BMW', 'Mercedes'], 'BMW')).to.equal('There is 1 car of model BMW in the catalog!');
        });
        it("Test 6", function () {
            expect(rentCar.searchCar(['Audi','Audi', 'BMW', 'Mercedes'], 'Audi')).to.equal('There is 2 car of model Audi in the catalog!');
        });
        it("Test 7", () => {
            expect(() => rentCar.searchCar(['Audi', 'BMW', 'Mercedes'], 'Opel').to.throw('There are no such models in the catalog!'));
        });
     });

     describe("Calculate Price", function() {
        it("Test 1", () => {
            expect(() => rentCar.calculatePriceOfCar(1, 'string').to.throw('Invalid input'));
        });
        it("Test 2", () => {
            expect(() => rentCar.calculatePriceOfCar('string', 1.2).to.throw('Invalid input'));
        });
        it("Test 3", () => {
            expect(() => rentCar.calculatePriceOfCar('string', [1,2,3]).to.throw('Invalid input'));
        });
        it("Test 4", () => {
            expect(() => rentCar.calculatePriceOfCar('string', {}).to.throw('Invalid input'));
        });
        it("Test 5", () => {
            expect(() => rentCar.calculatePriceOfCar('string', undefined).to.throw('Invalid input'));
        });
        it("Test 6", function () {
            expect(rentCar.calculatePriceOfCar('Toyota', 3)).to.equal('You choose Toyota and it will cost $120!');
        });
        it("Test 7", function () {
            expect(rentCar.calculatePriceOfCar('Volkswagen', 2)).to.equal('You choose Volkswagen and it will cost $40!');
        });
        it("Test 8", function () {
            expect(rentCar.calculatePriceOfCar('Audi', 1)).to.equal('You choose Audi and it will cost $36!');
        });
        it("Test 8", function () {
            expect(rentCar.calculatePriceOfCar('Mercedes', 3)).to.equal('You choose Mercedes and it will cost $150!');
        });
        it("Test 10", () => {
            expect(() => rentCar.calculatePriceOfCar('BMW', 2).to.equal('You choose BMW and it will cost $90!'));
        });
        it("Test 11", () => {
            expect(() => rentCar.calculatePriceOfCar('Opel', 2).to.throw('No such model in the catalog!'));
        });
    });

    describe("Check budget", function() {
        it("Test 1", () => {
            expect(() => rentCar.checkBudget('string', 1.2, 1.3).to.throw('Invalid input'));
        });
        it("Test 2", () => {
            expect(() => rentCar.checkBudget(1.2,'string', 1.3).to.throw('Invalid input'));
        });
        it("Test 3", () => {
            expect(() => rentCar.checkBudget( 1.2, 1.3,'string').to.throw('Invalid input'));
        });
        it("Test 4", () => {
            expect(() => rentCar.checkBudget(1, 3,'string').to.throw('Invalid input'));
        });
        it("Test 5", function () {
            expect(rentCar.checkBudget(10, 2, 30)).to.equal(`You rent a car!`);
        });
        it("Test 6", function () {
            expect(rentCar.checkBudget(10, 2, 20)).to.equal(`You rent a car!`);
        });
        it("Test 7", function () {
            expect(rentCar.checkBudget(10, 2, 15)).to.equal('You need a bigger budget!');
        });
     });
});