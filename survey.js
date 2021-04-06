const readline = require('readline');
const profile = {};


const inpootOutpoot = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const userQuery = (question, key) => {
  
  inpootOutpoot.question(question, (userIn) => {    
    profile[key] = userIn;

    console.log(`${key} is set to : ${profile[key]}`);
    inpootOutpoot.pause();
  });  
};

userQuery('What would youi like to name your profile?', 'name');
userQuery('What\'s an activity you enjoy?', 'hobby');

// rl.question('What would you like to name your profile?? ', (userIn) => {
//   console.log(`Thanks: ${userIn}`);
//   profile.name = userIn;

//   rl.close();
// });



/*r1.question('What would you like to name your profile? ', (nmIn) => {
  console.log(`Awesome choice: ${nmIn}`);

  profile.name = nmIn;

  r1.close();
});*/

console.log(profile);

// What's your name? Nicknames are also acceptable :)
// What's an activity you like doing?
// What do you listen to while doing that?
// Which meal is your favourite (eg: dinner, brunch, etc.)
// What's your favourite thing to eat for that meal?
// Which sport is your absolute favourite?
// What is your superpower? In a few words, tell us what you are amazing at!

'use strict'

const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const question1 = () => {
  return new Promise((resolve, reject) => {
    rl.question('q1 What do you think of Node.js? ', (answer) => {
      console.log(`Thank you for your valuable feedback: ${answer}`)
      resolve()
    })
  })
}

const question2 = () => {
  return new Promise((resolve, reject) => {
    rl.question('q2 What do you think of Node.js? ', (answer) => {
      console.log(`Thank you for your valuable feedback: ${answer}`)
      resolve()
    })
  })
}

const main = async () => {
  await question1()
  await question2()
  rl.close()
}

main()