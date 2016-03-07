var adjective = [
    'an amazing',
    'a luxurious',
    'a crazy',
    'an imaginary',
    'a fun',
    ],
    //the current adjectives length
    maxAdjective = adjective.length;

var noun = [
    'alligator',
    'elevator',
    'rabit',
    'sun',
    'mug',
    ],
    //the current nouns length
    maxNoun = noun.length;

var context = [
    'on a skateboard',
    'on an island',
    'on a quest',
    'on a horse',
    'in a club',
    ],
    //the current context length
    maxContext = context.length;

var verb = [
    'eating',
    'hitting on',
    'screaming at',
    'fishing with',
    'playing video games with',
    ],
    //the current verbs length
    maxVerb = verb.length;


//get and return a random adjectives from array
function getRandomAdjective() {
    //calculate a random index
    var rndIdx = Math.floor(Math.random()*(maxAdjective -1 ));
    //return the random adjective
    return adjective[rndIdx];
}

function getSecondRandomAdjective() {
    //calculate a random index
    var rndScndIdx = Math.floor(Math.random()*(maxAdjective -1 ));
    //return the random adjective
    return adjective[rndScndIdx];
}

function getRandomNoun() {
    //calculate a random index
    var rndIdx = Math.floor(Math.random()*(maxNoun -1 ));
    //return the random noun
    return noun[rndIdx];
}

function getSecondRandomNoun() {
    //calculate a random index
    var rndScndIdx = Math.floor(Math.random()*(maxNoun -1 ));
    //return the random noun
    return noun[rndScndIdx];
}

function getRandomContext() {
    //calculate a random index
    var rndIdx = Math.floor(Math.random()*(maxContext -1 ));
    //return the random context
    return context[rndIdx];
}

function getRandomVerb() {
    //calculate a random index
    var rndIdx = Math.floor(Math.random()*(maxVerb -1 ));
    //return the random verb
    return verb[rndIdx];
}

//show a random sentences in a DOM selector
function showRandomAdjective(selector){
  var randomAdjective = getRandomAdjective();
  $(selector).html(randomAdjective + "&nbsp;");
}

function showSecondRandomAdjective(selector){
  var randomSecondAdjective = getSecondRandomAdjective();
  $(selector).html(randomSecondAdjective + "&nbsp;");
}

function showRandomNoun(selector){
  var randomNoun = getRandomNoun();
  $(selector).html(randomNoun + "&nbsp;");
}

function showSecondRandomNoun(selector){
  var randomSecondNoun = getSecondRandomNoun();
  $(selector).html(randomSecondNoun + "&nbsp;");
}

function showRandomContext(selector){
  var randomContext = getRandomContext();
  $(selector).html(randomContext + "&nbsp;");
}

function showRandomVerb(selector){
  var randomVerb = getRandomVerb();
  $(selector).html(randomVerb + "&nbsp;");
}

$('.random-button').click(function(e){
    console.log('get-random-sentence button clicked...');
    showRandomAdjective(".random-adjective");
    showRandomNoun(".random-noun");
    showRandomContext(".random-context");
    showRandomVerb(".random-verb");
    showSecondRandomAdjective(".random-adjective2");
    showSecondRandomNoun(".random-noun2");
});

//console.log(getRandomSentence());
