const elements =  ["H", "Br", "Ba", "Wa"]

const content = 'Breaking Bad is about Walter White, an ordinary, middle class American guy in his fifties, who is brilliant in chemistry, who ends up selling best quality meth. This guy spent more than half of his life passionately working on chemistry, making a great discovery while doing so, only to find out he is diagnosed with lung cancer. Having realized that he had very little time left and he had to secure future of his family before he dies he plans to earn money for the same. Teaming up with his Brother-in-law, Hank (a DEA agent), to bust a drug deal, Walter meets Jesse Pinkman, his student, who makes and sells meth for his living. After';

const chemify = function(str) {
  let regex = new RegExp(/H|Br|Ba|Wa/, 'g');
  var strb = str.replace(regex, function(match) {
    return '[' + match + ']';
  });
  
  console.log(strb)
