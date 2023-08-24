describe("Tests …", function () {
    describe("Is Genre Suitable", function () {

        it("Check under 12", function () {
            expect(bookSelection.isGenreSuitable('Thriller', 10)).to.equal(`Books with Thriller genre are not suitable for kids at 10 age`);
        });
        it("Check equal 12", function () {
            expect(bookSelection.isGenreSuitable('Thriller', 12)).to.equal(`Books with Thriller genre are not suitable for kids at 12 age`);
        });
        it("Check over 12", function () {
            expect(bookSelection.isGenreSuitable('Thriller', 13)).to.equal(`Those books are suitable`);
        });
        it("Check under 12", function () {
            expect(bookSelection.isGenreSuitable('Horror', 10)).to.equal(`Books with Horror genre are not suitable for kids at 10 age`);
        });
        it("Check equal 12", function () {
            expect(bookSelection.isGenreSuitable('Horror', 12)).to.equal(`Books with Horror genre are not suitable for kids at 12 age`);
        });
        it("Check over 12", function () {
            expect(bookSelection.isGenreSuitable('Horror', 13)).to.equal(`Those books are suitable`);
        });
    });

    describe("isItAffordable", function () {

        it("Check for invalid input", () => {
            expect(() => bookSelection.isItAffordable('string', 1).to.throw('Invalid input')); //Когато условието на задачата е throw new Error
        });

        it("Check for invalid input", () => {
            expect(() => bookSelection.isItAffordable(1, 'string').to.throw('Invalid input'));
        });
        it("Check for invalid input", () => {
            expect(() => bookSelection.isItAffordable([], 1).to.throw('Invalid input'));
        });
        it("Check for invalid input", () => {
            expect(() => bookSelection.isItAffordable({}, 1).to.throw('Invalid input'));
        });
        it("Check for invalid input", () => {
            expect(() => bookSelection.isItAffordable(Nan, 1).to.throw('Invalid input'));
        });
        it("Check for invalid input", () => {
            expect(() => bookSelection.isItAffordable(undefined, 1).to.throw('Invalid input'));
        });
        it("Check for invalid input", () => {
            expect(bookSelection.isItAffordable(20, 10)).to.equal('You don\'t have enough money');
        });
        it("Check for invalid input", () => {
            expect(bookSelection.isItAffordable(10, 20)).to.equal('Book bought. You have 10$ left');
        });
    });

    describe("isItAffordable", function () {

        it("Check for invalid input", () => {
            expect(() => bookSelection.suitableTitles('string', 1).to.throw('Invalid input')); //Когато условието на задачата е throw new Error
        });
        it("Check for invalid input", () => {
            expect(() => bookSelection.suitableTitles([], 1).to.throw('Invalid input')); 
        });
        it("Check for invalid input", () => {
            expect(() => bookSelection.suitableTitles('string', 'string').to.throw('Invalid input')); 
        });
        it("Check for invalid input", () => {
            expect(bookSelection.suitableTitles([{title: 'book1', genre: 'Horror'}, {title: 'book2', genre: 'Horror'}], 'Horror'))
            .to.deep.equal(['book1','book2']);
        });
    });
});

