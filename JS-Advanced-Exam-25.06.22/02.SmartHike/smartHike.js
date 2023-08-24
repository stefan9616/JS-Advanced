class SmartHike {
    constructor(username) {
        this.username = username;
        this.goals = {};
        this.listOfHikes = [];
        this.resources = 100;
    }
 
    addGoal(peak, altitude) {
        if (peak in this.goals) {
            return `${peak} has already been added to your goals`
        } else {
            this.goals[peak] = altitude;
            return `You have successfully added a new goal - ${peak}`
        };
    };
 
    hike(peak, time, difficultyLevel) {
        if (!(peak in this.goals)) {
            throw new Error(`${peak} is not in your current goals`);
        };
 
        if (this.resources === 0) {
            throw new Error("You don't have enough resources to start the hike");
        };
 
        let difference = this.resources - time * 10;
        if (difference < 0) {
            return "You don't have enough resources to complete the hike";
        };
 
        let hike = {peak, time, difficultyLevel};
        this.listOfHikes.push(hike);
        this.resources -= time * 10
        return `You hiked ${peak} peak for ${time} hours and you have ${this.resources}% resources left`
    };
 
    rest(time) {
        this.resources += time * 10;
        if (this.resources > 100) {
            this.resources = 100;
            return `Your resources are fully recharged. Time for hiking!`
        } else {
            return `You have rested for ${time} hours and gained ${time*10}% resources`
        };
    };
 
    showRecord(criteria) {
        if (criteria == 'all') {
            let result = 'All hiking records:\n';
            for (const item of this.listOfHikes) {
                result += `${this.username} hiked ${item.peak} for ${item.time} hours\n`;
            }
            return result.trim();
        };
 
        if (this.listOfHikes.length == 0) {
            return `${this.username} has not done any hiking yet`;
        };
 
        let tempArr = [];
        for (const item of this.listOfHikes) {
            if (item.difficultyLevel == criteria) {
                tempArr.push(item);
            };
        };
        if (tempArr.length == 0) {
            return `${this.username} has not done any ${criteria} hiking yet`
        };
 
        let bestHike = undefined
        for (const item of tempArr) {
            if (bestHike == undefined) {
                bestHike = item;
            } else {
                if (item.time < bestHike.time) {
                    bestHike = item;
                };
            };
        };
        return `${this.username}'s best ${criteria} hike is ${bestHike.peak} peak, for ${bestHike.time} hours`;
    };
};