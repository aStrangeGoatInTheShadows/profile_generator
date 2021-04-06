var readline = require('readline'),
  rl = readline.createInterface(process.stdin, process.stdout),
  prefix = '> ';

  
  const setupQuestions = [
    "What's your name? Nicknames are also acceptable",
    "What's an activity you like doing?",
    "What do you listen to while doing that?",
    "Which meal is your favourite (eg: dinner, brunch, etc.)",
    "Which meal is your favourite (eg: dinner, brunch, etc.)",
    "Which sport is your absolute favourite?",
    "What is your superpower? In a few words, tell us what you are amazing at!"
  ]
 
  const profile = {
    init: setupQuestions
  }

rl.on('line', function (line) {
  switch (line.trim()) {
    case 'hello':
      console.log('world!');
      break;
    case 'close': console.log('bye bye');
      rl.close();
      break;
    default:
      console.log('Say what? I might have heard `' + line.trim() + '`');
      break;
  }
  rl.setPrompt(prefix, prefix.length);
  rl.prompt();
}).on('close', function () {
  console.log('Have a great day!');
  process.exit(0);
});

console.log(prefix + 'Please setup your profile.');
rl.setPrompt(profile.init[0], profile.init[0].length);
rl.prompt();

// What's your name? Nicknames are also acceptable :)
// 
// 
// 
// Which sport is your absolute favourite?
// W


