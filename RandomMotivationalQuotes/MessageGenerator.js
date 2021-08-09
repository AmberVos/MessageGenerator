const randomMessage {

messageArray = ["You look amazing today!", "Don't worry, everything will eventually make sense...", "You are more than ready to slay the day!"]
const chooseRandomMessage {
for (let i = 0; i < messageArray.length; i++) {
    Math.floor(Math.random()*3)
}
}
return chooseRandomMessage
};
console.log(randomMessage)
