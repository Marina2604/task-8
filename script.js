function User(userName) {

    this.theNameOfTheUser = userName,

    this.followers = [], 

    this.ifollow = [],

    this.followAfter = function(member) {
        this.ifollow.push(member);
        member.followers.push(this);
    }

    this.sendMessage = function() {
        this.followers.forEach((someone)=> {
            console.log(this.theNameOfTheUser+' says thanks to '+someone.theNameOfTheUser+ ' because his interesting');
        })
    }

    this.getMessage = function() {
        this.ifollow.forEach((somebody)=> {
            console.log(somebody.theNameOfTheUser+' says nice to follow you '+this.theNameOfTheUser);
        })
    }

}


let userNumber1 = new User('Lior');
let userNumber2 = new User('Ofek');
let userNumber3 = new User('Omri');
let userNumber4 = new User('Chen');


userNumber1.followAfter(userNumber2);
userNumber1.followAfter(userNumber4);
userNumber2.followAfter(userNumber1);
userNumber3.followAfter(userNumber1);
userNumber3.followAfter(userNumber4);
userNumber4.followAfter(userNumber1);
userNumber4.followAfter(userNumber2);


userNumber1.sendMessage();
userNumber2.sendMessage();
userNumber3.sendMessage();
userNumber4.sendMessage();


console.log(' ');
console.log(' ');


userNumber1.getMessage();
userNumber2.getMessage();
userNumber3.getMessage();
userNumber4.getMessage();


console.log(userNumber1);
console.log(userNumber2);
console.log(userNumber3);
console.log(userNumber4);