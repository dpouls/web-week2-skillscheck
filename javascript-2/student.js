//////////////////SETUP////////////////////
// Open javascripot-2/index.html in the browser. You should see "An Ode to Code" and a small box below it.

//////////////////STEP 1////////////////////
//Create a variable called lovesCode and set it true or false (as a boolean) depending on if you love code or not. It's okay if you don't, yet
var lovesCode = true;
// Code Here

//////////////////STEP 2////////////////////
//Create a variable called age that is your age as a number
var age = 24
// Code Here

//////////////////STEP 3////////////////////
//Create a variable called name that is your name as a string
var name = "Dallin"
// Code Here

//////////////////STEP 4////////////////////
//Create a variable called phrase that is initially set as an empty string
var phrase = '';
// Code Here

//////////////////STEP 5////////////////////
//Create an if statement that checks to see if the lovesCode variable is equal to true, if it is, set the phrase variable created above to 'I love code', if it's not true set the phrase variable to 'I do not love to code'
function checker(){
    if(lovesCode === true){
    phrase = "I love code";
} else {
    phrase = "I do not love to code";
}; return phrase;
}

// This code seems to work on repl, but for whatever reason wont work on "An ode to code"

//////////////////Wrap Up////////////////////
// Refresh the index.html page in your browser. You should now see a poem that uses the variables from above.