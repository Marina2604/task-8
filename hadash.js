function User(userName) {

    this.theNameOfTheUser = userName,

    this.followers = [], 

    this.ifollow = [],

    this.followAfter = function(member) {
        this.ifollow.push(member);
        member.followers.push(this);
    }

    this.sendMessage = function(mishmish) {
        this.followers.forEach((someone)=> {
            someone.getMessage(someone.theNameOfTheUser+ ' got a message from ' +this.theNameOfTheUser+ ': '+ mishmish);
        })
    }

    this.getMessage = function(mishmish2) {
            console.log(mishmish2);
    }

    //===========================================================================


    //אופציה נוספת

    // this.sendMessage = function(mishmish) {
    //     this.followers.forEach((someone)=> {
    //         someone.getMessage(this,mishmish);
    //     })
    // }

    // this.getMessage = function(sender,mishmish2) {
    //         console.log(this.theNameOfTheUser+" got this message from "+sender.theNameOfTheUser+": "+mishmish2);
    // }

    
    //============================================================================

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


userNumber1.sendMessage('Hello');
//userNumber2.getMessage(....);
//userNumber3.getMessage(....);
//userNumber4.getMessage(....);
userNumber2.sendMessage('Hey');
userNumber3.sendMessage('Good Shabes');
userNumber4.sendMessage('Batata');


console.log(' ');


console.log(userNumber1);
console.log(userNumber2);
console.log(userNumber3);
console.log(userNumber4);