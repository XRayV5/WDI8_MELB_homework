console.log("Linked.");

// Dramatis Personae
var hobbits = [
  'Frodo Baggins',
  'Samwise \'Sam\' Gamgee',
  'Meriadoc \'Merry\' Brandybuck',
  'Peregrin \'Pippin\' Took'
];

var buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
];

var lands = ['The Shire', 'Rivendell', 'Mordor'];
var body = document.body;
var hobies = ['Andrew', 'Ray', 'Dean','Harry'];
//Part1

function makeMiddleEarth(){
  var $section = $('<section>').attr('id','middle-earth');
  for(var k in lands){
      $section.append("<article><h1>"+lands[k]+"</h1></article>");
  }
  $(body).append($section);
}
makeMiddleEarth();

//part2
var makeHobbits = function(){
   // display an `unordered list` of hobbits in the shire
      // (which is the second article tag on the page)
   // give each hobbit a class of `hobbit`
   var $hobyque = $('<ul>');

   for(var k in hobbits){
     $hobyque.append($('<li>').text(hobbits[k])).addClass('hobbit');
   }
   var $hoby = $('article').first().append($($hobyque));
}

makeHobbits();

//Part3
var keepItSecretKeepItSafe = function () {
   // create a div with an id of `'the-ring'`
   // give the div a class of `'magic-imbued-jewelry'`
   // add the ring as a child of `Frodo`
   var $appendFrodo = $('<div>').attr("id","the-ring").addClass('magic-imbued-jewelry');
   $("li:contains('Frodo')").append($appendFrodo);
}

keepItSecretKeepItSafe();

//Part4
var makeBuddies = function () {
   // create an `aside` tag
   // attach an `unordered list` of the `'buddies'` in the aside
   // insert your aside as a child element of `rivendell`
   var $buddyList = $('<ul>');
   for(var k in buddies){
     $buddyList.append("<li>"+buddies[k]+"</li>");
   }
   var sideList = $('<aside>').append($buddyList);
   $("article:contains('Rivendell')").append(sideList);
};

makeBuddies();

//Part5
var beautifulStranger = function () {
    var $change = $("li:contains('Strider')").text("Aragorn");
   // change the `'Strider'` text to `'Aragorn'`
};

beautifulStranger();

//Part6
var leaveTheShire = function () {
    //var $moveHbs =  $("article:contains('Rivendell')").append($("<ul>"));
   // assemble the `hobbits` and move them to `rivendell`
   var $moveHbs = $("article").first().find("ul");
   $("article:contains('Rivendell')").append($moveHbs);
};
leaveTheShire();

//part7
var forgeTheFellowShip = function () {
  // create a new div called `'the-fellowship'` within `rivendell`
  // add each `hobbit` and `buddy` one at a time to `'the-fellowship'`
  // after each character is added make an alert that they // have joined your party
  var $flwship = $("<div>").attr("id","the-fellowship");
  var line = $("article li");
  for(var i=0;i<line.length;i++){
    $flwship.append(line[i]);
    console.log(line[i].textContent+" has joined you party!");
  }
  $("article:contains('Rivendell')").append($flwship);
};
forgeTheFellowShip();

//part8
var theBalrog = function () {
   // change the `'Gandalf'` text to `'Gandalf the White'`
   // apply the following style to the element, make the // background 'white', add a grey border
   var $gandalf = $("li:contains('Gandalf')").text("Gandalf the White");
   $gandalf.css("background", "white");
   $gandalf.css("border-color","grey");
};
theBalrog();


//p9
var hornOfGondor = function () {
   // pop up an alert that the horn of gondor has been blown
   // Boromir's been killed by the Uruk-hai!
   // Remove `Boromir` from the Fellowship
   $("li:contains('Boromir')").remove();
};
hornOfGondor();

//Part10
var itsDangerousToGoAlone = function (){
   // take `Frodo` and `Sam` out of the fellowship and move
   // them to `Mordor`
   // add a div with an id of `'mount-doom'` to `Mordor`

   var $sam = $("li:contains('Sam')");
   //$("li:contains('Sam')").remove();
   var $fro = $("li:contains('Frodo')");
   //$("li:contains('Frodo')").remove();
   $("article").last().append($sam);
   $("article").last().append($fro);
   $("article").last().append("<div id='mount-doom'></div>");
};
itsDangerousToGoAlone();

var weWantsIt = function () {
  // Create a div with an id of `'gollum'` and add it to Mordor
  // Remove `the ring` from `Frodo` and give it to `Gollum`
  // Move Gollum into Mount Doom
  $("article").last().append("<div id='gollum'></div>");
  var $glm = $("#gollum").append($("#the-ring"));
  $("#mount-doom").append($glm);
};
weWantsIt();

var thereAndBackAgain = function () {
   // remove `Gollum` and `the Ring` from the document
   // Move all the `hobbits` back to `the shire`
   $("#gollum").remove();
   $("li").each(function(){
     //console.log($(this).text());
     var temp =$(this).text();
        for(var k in hobbits){
          if(temp===hobbits[k]){
            $("article").first().append(this);
          }
        }
   });
};

thereAndBackAgain();
