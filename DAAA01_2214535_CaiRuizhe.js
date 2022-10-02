const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const tiervalidate = ['Ruby',"Gold",'Diamond','Platinum']
class Member{
    constructor(name,birthdate,tier,Join,Points){
        this.Name = name
        this.Tier = tier
        this.Birth = new Date(birthdate)
        this.Join = new Date()
        this.Points = Points
    }
    // converts date format to the day month year format for birth date
    bdategetter(){
        var bdate = ''
        var day = this.Birth.getDate()
        var month = months[this.Birth.getMonth()]
        var year = this.Birth.getFullYear()
        bdate = day + ' ' + month + ' ' +year
        return bdate
    }
    // converts date format to the day month year format for join date
    jdategetter(){
        var cdate = ''
        var day = this.Join.getDate()
        var month = months[this.Join.getMonth()]
        var year = this.Join.getFullYear()
        cdate = day + ' ' + month + ' ' +year
        return cdate
    }
    // outputs info of member
    outputinfo(sample){
        i = sample
        console.log()
        console.log('Name: '+(Memberlist.memberL)[i].Name);
        console.log('Membership Type: '+(Memberlist.memberL)[i].Tier);
        console.log('Date Joined: '+this.jdategetter());
        console.log('Date of birth: '+this.bdategetter());
        console.log('Points earned: '+(Memberlist.memberL)[i].Points);
        console.log('\n');
    }
}

class memberGroup{
    constructor(newmember){
        this.memberL = []
        this.memberL.push(new Member('Leonardo', '1 Jan 1980','Gold', '1 Dec 2019', 1400))
        this.memberL.push(new Member('Catherine','28 Oct 1985','Ruby','14 Jan 2020',250))
        this.memberL.push(new Member('Luther','16 march 1992','Gold','29 Apr 2020',3350))
        this.memberL.push(new Member('Bruce','18 Mar 1994','Diamond','3 Jun 2020',40200))
        this.memberL.push(new Member('Amy','31 May 2000','Ruby','5 Jun 2020',500))
    }
    // checks to see if member already exists
    checkduplicate(sample){
        sample = sample.toLowerCase()
        var exist = false
        for(var o =0;o < this.memberL.length;o++){
            if(sample === (this.memberL[o].Name).toLowerCase()){
                exist = true

            }
        }
        return exist
    }
    //true means it exists
    namefinder(sample){     //finds the index of person whos name is inputted
        sample = sample.toLowerCase()
        for(var o =0;o < this.memberL.length;o++){
            if(sample === (this.memberL[o].Name).toLowerCase()){
                return o
            }
        }
    }
    tierfinder(sample){    //input tier to find people in that tier
        var tierlist = []
        sample = sample.toLowerCase()
        for(var o =0;o < this.memberL.length;o++){
            if(sample === (this.memberL[o].Tier).toLowerCase()){
                tierlist.push(this.memberL[o].Name)
            }
        }
        return tierlist
    }
    tiervalidator(sample){   //validates tier inputted
        var realtier = false
        sample = sample.toLowerCase()
        for(var o =0;o < tiervalidate.length;o++){
            if(sample === (tiervalidate[o]).toLowerCase()){
                realtier = true
            }
        }
        return realtier
    }
    // compares the points of members in the array of objects and returns the lowest and highest points
    Pointscomparison(){
        var highest = 0
        var lowest = 99999999999
        var hlarray = []
        for(var o =0;o < this.memberL.length;o++){
            if(this.memberL[o].Points > highest){
                highest = this.memberL[o].Points
            }
        }
        for(var o =0;o < this.memberL.length;o++){
            if(this.memberL[o].Points < lowest){
                lowest = this.memberL[o].Points
            }
        }
        hlarray = [highest,lowest]
        return hlarray
    }
    // outputs the name of the member when their points are inputted
    pointfinder(sample){
        for(var o =0;o < this.memberL.length;o++){ //this.memberL.length is the length of the array of members
            if(sample === (this.memberL[o].Points)){
                return this.memberL[o].Name
            }
        }
    }
    // counts the points of people in a certain tier
    tiercounter(sample){
        var tiercount = 0
        sample = sample.toLowerCase()
        for(var o =0;o < this.memberL.length;o++){
            if(sample === (this.memberL[o].Tier).toLowerCase()){
                tiercount += 1
            }
        }
        return tiercount
    }
    // compares the ages of all the members
    agecomparer(){
        var oldestname, youngestname
        var oldest = new Date()
        var youngest = (this.memberL)[0].Birth
        var agelister = []
        for(var o =0;o < this.memberL.length;o++){
            if(((this.memberL)[o].Birth) < oldest){
                oldestname = ((this.memberL)[o]).Name
                oldest = ((this.memberL)[o]).Birth
            }
        }
        for(var o =0;o < this.memberL.length;o++){
            if(((this.memberL)[o].Birth) > youngest){
                youngestname = ((this.memberL)[o]).Name
                youngest = ((this.memberL)[o]).Birth
            }
        }
        agelister = [oldestname,youngestname]
        return agelister
    }
    // checks to see if a person has ranked up
    rankup(sample){
        var rankchange = false;
        ((this.memberL)[this.namefinder(sample)].Points) += added
            var oldtier = ((this.memberL)[this.namefinder(sample)]).Tier
            if(((this.memberL)[this.namefinder(sample)].Points) >= 20000){
                (this.memberL)[this.namefinder(sample)].Tier = 'Diamond';
            }
            else if(((this.memberL)[this.namefinder(sample)].Points) >= 5000){
                (this.memberL)[this.namefinder(sample)].Tier = 'Platinum';
            }
            else if(((this.memberL)[this.namefinder(sample)].Points) >= 500){
                (this.memberL)[this.namefinder(sample)].Tier = 'Gold';
            }
            var newtier = ((this.memberL)[this.namefinder(sample)]).Tier
            console.log('Your new amount of points is ' + (this.memberL)[this.namefinder(sample)].Points)
            if(oldtier != newtier){
                rankchange = true
            }
        return [rankchange,newtier]
    }
    // calculates the number of points earned by a person if they spend the certain amoount of money
    pointcalc(sample){
        var spent = sample
        var added = 0
        if(spent <= 50){
            var added = 10
        }
        else if(spent <= 100){
            var added = 50
        }
        else if(spent <= 200){
            var added = 100
        }
        else if(spent <= 500){
            var added = 200
        }
        else if(spent <= 1000){
            var added = 500
        }
        else if(spent <= 2500){
            var added = 1000
        }
        else{
            var added = 2000
        }
        return added
    }
    // checks to see if user has enough points to put at stake 
    stakevalidator(sample,stake){
        var poor = true
        var remaining
        if(stake <= (this.memberL)[this.namefinder(sample)].Points){
            remaining = (this.memberL)[this.namefinder(sample)].Points - stake
            poor = false
        }
        return [poor,remaining]
    }
    // generates a set of random numbers
    luckycards(sample){
        var cards = [];
        for(var o = 0; o < sample;o++){
            cards[o] = Math.floor(Math.random() * 10) + 1;
        }
        return cards
    }
    // shuffles the a pre determined set of cards
    cardmatcher(){
        var cards = ['Apple','Banana','Apple','Banana','Orange','Orange']
        this.shuffle(cards)
        return cards
    }
    // shuffles a list
    shuffle(sample) {
        let currentIndex = sample.length,  randomIndex;
      
        // While there remain elements to shuffle.
        while (currentIndex != 0) {
      
          // Pick a remaining element.
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
      
          // And swap it with the current element.
          [sample[currentIndex], sample[randomIndex]] = [
            sample[randomIndex], sample[currentIndex]];
        }
      
        return sample;
    }      
}
// checks if input is an integer
function integercheck(sample){
    if(Number.isInteger(sample)){
        return true
    }
    else{
        return false
    }
}
// checks if input is all alphabetic
function alphachecker(sample) {     return /^[a-zA-Z]+$/.test(sample); }
var input = require('readline-sync')
// var Leonardo = {Name: 'Leonardo',Tier:'Gold',Join: '1 Dec 2019',Birth: '1 Jan 1980',Points: 1400};
// var Catherine = {Name: 'Catherine',Tier: 'Ruby',Join: '14 Jan 2020',Birth: '28 Oct 1985',Points: 250};
// var Luther = {Name: 'Luther',Tier: 'Gold', Join:'29 Apr 2020',Birth: '16 Mar 1992',Points:3350};
// var Bruce = {Name: 'Bruce',Tier:'Diamond', Join:'3 Jun 2020',Birth:'18 Mar 1994',Points: 40200};
// var Amy = {Name:'Amy',Tier:'Ruby',Join: '5 Jun 2020',Birth: '31 May 2000',Points:500};
// var Memberrecord   = [Leonardo,Catherine,Luther,Bruce,Amy]
do{
    var name = input.question('Welcome to XYZ Memberhsip Loyalty Programme!\nPlease enter your name: ')
    if(!alphachecker(name)){
        console.log('Please dont insert non alphabetic characters as your name.')
        console.log()
    }
}while(!alphachecker(name))
Memberlist = new memberGroup()

do{ 
    do{
        var option = input.questionInt('\n' +name+", please select your choice:\n\t1. Display all members' information\n\t2. Display member information\n\t3. Add new member\n\t4. Update points earned\n\t5. Statistics\n\t6. Earn Points\n\t7. Exit\n\t8. Admin Controls\n\t>>");
        if(!integercheck(option)){
            console.log('Option only accepts integers, please input an integer.')
        }
    }while(!integercheck(option))
    if(option == 1){
        for(var i = 0;i < (Memberlist.memberL).length;i++){
        Memberlist.memberL[i].outputinfo(i)
       }
    }


    else if(option == 7){
        console.log('Thank you & goodbye!\n');
    }


    else if(option == 2){
        var membername = input.question('Please enter the members name: ')
        if(!alphachecker(membername)){
            console.log('Please dont insert non alphabetic characters as your name.')
            console.log()
        }
        else if(!(Memberlist.checkduplicate(membername))){
            console.log()
            console.log('Member does not exist.')
        }
        else{
            Memberlist.memberL[Memberlist.namefinder(membername)].outputinfo(Memberlist.namefinder(membername))
        }
    }

    else if(option == 3){
        exist = false
        do{
            var nmembername = input.question('Please enter the members name: ')
            if(!alphachecker(nmembername)){
                console.log('Please dont insert non alphabetic characters as your name.')
                console.log()
            }
        }while(!alphachecker(nmembername))
        do{
            if(Memberlist.checkduplicate(nmembername)){
                console.log("Member's name exists in database. Please enter a new name.")
            }
            else{
                exist = false
                var nmemberbirth = input.question('Please enter the members birthdate: ')
            }
        }while(exist)
        var nmember = new Member(nmembername,nmemberbirth,'Ruby','',0);
        (Memberlist.memberL).push(nmember)
    }

    else if(option == 4){
        do{
            var nameadd = input.question("Please enter the member's name: ")
            if(!alphachecker(nameadd)){
                console.log('Please dont insert non alphabetic characters as your name.')
                console.log()
            }
        }while(!alphachecker(nameadd))
        if(!(Memberlist.checkduplicate(nameadd))){
            console.log("Member does not exist.")
        }
        else{
            
            var spent = input.question('Please enter amount spent: ')
            spent = parseFloat(spent)
            var added = Memberlist.pointcalc(spent)
            var ranklist = Memberlist.rankup(nameadd)
            if((ranklist)[0]){
                console.log('Congrats u have ranked up to '+ranklist[1])
            }
        }
    }

    else if(option == 5){
        do{
            var suboption = input.question('\t\tPlease select an option from the sub-menu:\n\t\t1. Display the names of (all) a certain type of members only\n\t\t2. Display name of the youngest and the oldest member in the system.\n\t\t3. Display the name of the member with the highest or lowest points earned\n\t\t4. Display the total number of people in each membership type\n\t\t5. Display the total points in each membership type.\n\t\t6. Return to main-menu\n\t\t>>')
            suboption = parseInt(suboption)
            if(suboption == 1){
                tiertype = input.question('Enter Membership Type: ')
                if(Memberlist.tiervalidator(tiertype)){
                    var certaintype = Memberlist.tierfinder(tiertype)
                    console.log('Member(s) of membership type ' + tiertype + ': ' + certaintype)
                }
                else{
                    console.log('Please enter a valid membership type.')
                }
            }
            else if(suboption ==2){
                console.log('Youngest Member: '+Memberlist.agecomparer()[1])
                console.log('Oldest Member: '+Memberlist.agecomparer()[0])
            }
            else if(suboption == 3){
                console.log('Highest member: '+Memberlist.pointfinder(Memberlist.Pointscomparison()[0]))
                console.log('Lowest member: '+Memberlist.pointfinder(Memberlist.Pointscomparison()[1]))
            }
            else if(suboption == 4){
                console.log('\t\tRuby: '+Memberlist.tiercounter('ruby'))
                console.log('\t\tGold: '+Memberlist.tiercounter('gold'))
                console.log('\t\tPlatinum: '+Memberlist.tiercounter('platinum'))
                console.log('\t\tDiamond: '+Memberlist.tiercounter('diamond'))
                console.log()
            }
            else if(suboption == 5){
                console.log()
                for(var p = 0; p < tiervalidate.length; p++){
                    var totalpoints = 0
                    for(var i=0;i < (Memberlist.tierfinder(tiervalidate[p])).length;i++){
                        totalpoints += Memberlist.memberL[Memberlist.namefinder((Memberlist.tierfinder(tiervalidate[p])[i]))].Points
                    }
                    console.log('\t\t' + tiervalidate[p] + ': '+totalpoints)
                }
                console.log()
            }
        }while(suboption != 6)
    }
    else if(option == 6){
        do{
            var staker = input.question('Please input your name: ')
            if(!alphachecker(staker)){
                console.log('Please dont insert non alphabetic characters as your name.')
                console.log()
            }
        }while(!alphachecker(staker))
        if(!(Memberlist.checkduplicate(staker))){
            console.log("Member does not exist.")
        }
        else{
            var gameoption = input.question('\t\tPlease select an option from the game-menu:\n\t\t1. Lucky Cards\n\t\t2. Card matching\n\t\t>>')
            gameoption = parseInt(gameoption)
            if(gameoption == 1){
                console.log('\tRules:\n\t\tDraw 2 cards between 1 and 10 respectively, if you guess the total of both, you will be rewarded with double the points that u put at stake.')
                do{
                    var stake = input.questionInt('\n\tPlease input the amount u want to put at stake: ')
                    if(!integercheck(stake)){
                        console.log('Please enter an integer value for the stake.')
                    }
                }while(!integercheck(stake))
                if(Memberlist.stakevalidator(staker,stake)[0]){
                    console.log()
                    console.log('Broke ass bitch u have no points u broke ass hobo :skull: lmao imagine being so broke HAHHAHA')
                }
                else{
                    var magicnumbers = Memberlist.luckycards(2)
                    var correct = magicnumbers[0] + magicnumbers[1]
                    console.log('The first card is '+magicnumbers[0]+'\nThe second card is unknown')
                    var guess = input.question('Please input your guess: ')
                    console.log('The answer was: '+correct)
                    if(guess == correct){
                        (Memberlist.memberL)[Memberlist.namefinder(staker)].Points += 2 * stake
                        console.log('Congrats '+staker+', you have won!! You now have '+(Memberlist.memberL)[Memberlist.namefinder(staker)].Points+' Points')
                    }
                    else{
                        (Memberlist.memberL)[Memberlist.namefinder(staker)].Points -= stake
                        console.log('GG go next(L), You now have '+(Memberlist.memberL)[Memberlist.namefinder(staker)].Points+' Points')
                    }
                }
            }
            else if(gameoption == 2){
                var fullblank = ['X','X','X','X','X','X']
                console.log('\tRules:\n\t\tSelect 2 cards, if they match, u win double the points you put at stake\n')
                do{
                    var stake = input.questionInt('\n\tPlease input the amount u want to put at stake: ')
                    if(!integercheck(stake)){
                        console.log('Please enter an integer value for the stake.')
                    }
                }while(!integercheck(stake))
                if(Memberlist.stakevalidator(staker,stake)[0]){
                    console.log()
                    console.log('Broke ass bitch u have no points u broke ass hobo :skull: lmao imagine being so broke HAHHAHA')
                }
                else{
                    var cardarray = Memberlist.cardmatcher()
                    var cardpicked = input.question(fullblank+'\nPick a card from 1-6: ')
                    fullblank[cardpicked-1] = cardarray[cardpicked-1]
                    do{
                        var cardpicked2 = input.question(fullblank+'\n\nPick another card from 1-6: ')
                        if(cardpicked == cardpicked2){
                            console.log("You can't pick the same card twice")
                        }
                    }while(cardpicked2 == cardpicked)
                    console.log('\n'+cardarray+'\n')
                    if(cardarray[cardpicked2-1] === cardarray[cardpicked-1]){
                        (Memberlist.memberL)[Memberlist.namefinder(staker)].Points += 2 * stake
                        console.log('Congrats '+staker+', you have won!! You now have '+(Memberlist.memberL)[Memberlist.namefinder(staker)].Points+' Points')
                    }
                    else{
                        (Memberlist.memberL)[Memberlist.namefinder(staker)].Points -= stake
                        console.log('GG go next(L), You now have '+(Memberlist.memberL)[Memberlist.namefinder(staker)].Points+' Points')
                    }
                }
            }
            else{
                console.log('Please enter a valid input.\n')
            }
        }
    }
    else if(option == 8){
        do{
            var adminoption = input.questionInt('Please select from the following admin options:\n\t1. Update Points\n\t2. Delete User\n\t>>')
            if(!integercheck(adminoption)){
            console.log('Please enter an integer value for the admin option.')
            }
        }while(!integercheck(adminoption))
        if(adminoption == 1){
            var newpointname = input.question("Input the name of the person who's points you want to update: ")
            if(!(Memberlist.checkduplicate(newpointname))){
                console.log("Member does not exist.")
            }
            else{
                do{
                    var newpoints = input.questionInt('Input the amount of points you want to add: ')
                    if(!integercheck(newpoints)){
                    console.log('Please enter an integer value for the added points.')
                    }
                }while(!integercheck(newpoints))
                var added = newpoints
                var baller = Memberlist.rankup(newpointname)
                if(baller[0]){
                    console.log('Congrats u have ranked up to '+baller[1])
                }
            }
        }
        else if(adminoption == 2){
            do{
                var deletename = input.question('Input the name of the person you want to remove from the system: ')
                if(!alphachecker(deletename)){
                    console.log('Please input a name with only alphabetic characters')
                }
            }while(!alphachecker(deletename))
            if(!(Memberlist.checkduplicate(deletename))){
                console.log("Member does not exist.")
            }
            else{
                Memberlist.memberL.splice(Memberlist.namefinder(deletename))
                console.log(deletename+' has been removed from the system.')
            }
        }
        else{
            console.log('Please enter a valid input.\n')
        }
    }
    else{
        console.log('Please enter a valid input.\n')
    }
}while(option != 7)