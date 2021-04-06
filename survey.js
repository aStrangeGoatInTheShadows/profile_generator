var readline = require('readline'),
  rl = readline.createInterface(process.stdin, process.stdout),
  prefix = '> ';

  
  const setupQuestions = [
    "What's your name? Nicknames are also acceptable?",
    "What's an activity you like doing?",
    "What do you listen to while doing that?",
    "Which meal is your favourite (eg: dinner, brunch, etc.)",
    "What's your favourite thing to eat for that meal?",
    "Which sport is your absolute favourite?",
    "What is your superpower? In a few words, tell us what you are amazing at!"
  ]

  const setupKeys = [
    'name',
    'hobby',
    'music',
    'meal',
    'food',
    'sport',
    'superPower'
  ]
 
  const profile = {
    initQ: setupQuestions,
    intiK: setupKeys,
    initI: 0 // index to step through setup
  }

  const p = profile;

rl.on('line', function (line) {
  
  switch (line.trim()) {
    case 'hello':
      console.log('world! \n Seriously though.');
      break;
    case 'close': console.log('bye bye');
      rl.close();
      break;
    default:
      p[p.intiK[p.initI]] = line;
      console.log('');
      p.initI++;
      if(p.initI === p.initQ.length) {
        rl.close();
      }
      break;
  }
  rl.setPrompt(p.initQ[p.initI], p.initQ[p.initI].length);
  rl.prompt();
}).on('close', function () {
  console.log('Have a great day!');
  process.exit(0);
});

console.log(prefix + 'Please setup your profile.');
rl.setPrompt(p.initQ[p.initI], p.initQ[p.initI].length);
p.InitI++;
rl.prompt();

//console.log(p);