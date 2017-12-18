    //this is for when you want to set the amount of times you want the amount multiplied times the amount
function coinCounter(numDays)
{
var reward= .01
for(var i = 1; i <= numDays; i++)
    { reward += reward;







    }
return reward

}


coinCounter(20)


function calculateDays(expectedReward) {
    var days= 0
while (coinCounter(days) <= expectedReward){
days++ 


}
return days

}

calculateDays(10000)