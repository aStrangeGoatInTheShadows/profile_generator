// This can take a prefix however I didn't utilize it
let readline = require('readline'),
  rl = readline.createInterface(process.stdin, process.stdout), prefix = '> ';

const setupQuestions = [
  "What's your name? Nicknames are also acceptable? ",
  "What's an activity you like doing? ",
  "What do you listen to while doing that? ",
  "Which meal is your favourite (eg: dinner, brunch, etc.) ",
  "What's your favourite thing to eat for that meal? ",
  "Which sport is your absolute favourite? ",
  "What is your superpower? In a few words, tell us what you are amazing at! "
];

const setupKeys = [
  'name',
  'hobby',
  'music',
  'meal',
  'food',
  'sport',
  'superPower'
];

const profile = {
  initQ: setupQuestions,
  intiK: setupKeys,
  initI: 0 // index to step through setup
};

const p = profile;

const generateOutput = function() {
  return `${p.name} loves listening to ${p.music} while ${p.hobby}, devouring ${p.food} for ${p.meal}, prefers ${p.sport} over any other sport, and is amazing at ${p.superPower}.`;
};

// ************************* This is called by rl prompt *********************
rl.on('line', function(line) {
  switch (line.trim()) {
  case 'hello':
    console.log(' world! \n Seriously though.');
    break;
  case 'close': console.log('bye bye');
    rl.close();
    break;
  default:
    p[p.intiK[p.initI]] = line;
    p.initI++;
    if (p.initI === p.initQ.length) {
      rl.close();
    }
    console.clear();
    break;
  }
  rl.setPrompt(p.initQ[p.initI], p.initQ[p.initI].length);
  rl.prompt();
  // ********************** This is called by rl.close() ****************************
}).on('close', function() {
  console.log('\nWelcome to our platform.\n');
  console.log(generateOutput());
  console.log('\nHave a great day!\n');
  process.exit(0);
});

// **************************** CONCEPTUALLY, THIS RUNS FIRST! ***********************
console.clear();
console.log('Please setup your profile.');
rl.setPrompt(p.initQ[p.initI], p.initQ[p.initI].length);
p.InitI++;
rl.prompt();

//console.log(p);