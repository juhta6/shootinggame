tabris.ui.set("toolbarVisible", false);
var page = new tabris.Page({
  topLevel: true,
  background: "white"
}).open();


var shoot = setInterval(beams,interval);
var shoot2 = setInterval(beam2,interval);
var horizontal = 168;
var horizontal1 = horizontal;
var horizontal2 = 168;
var horizontal3 = horizontal2;
var vertical = "prev() 1";
var vertical1 = 0;
var interval = "";
var set = 0;
var set2 = 0;
var i = "";
var a = "";

var text = new tabris.TextView({
  layoutData: {top: 5, left: 5},
  text: set
}).appendTo(page);

var text2 = new tabris.TextView({
  layoutData: {top: 5, right: 5},
  text: set2
}).appendTo(page);

var char = new tabris.Composite({
  layoutData: {centerX: 0, bottom: 105, height: 40, width: 25},
  background: "rgba(20,20,20, 0.95)",
}).appendTo(page);

var char2 = new tabris.Composite({
  layoutData: {centerX: 0, bottom: 105, height: 40, width: 25},
  background: "rgba(20,20,20, 0.95)",
}).appendTo(page);

var button1 = new tabris.Composite({
  layoutData: {left: 10, bottom: 10, height: 80, width: 80},
  background: "rgba(20,20,20, 0.9)",
  highlightOnTouch: true
}).on("tap", function(widget){
     horizontal1 = horizontal
     vertical = 0
  set++;
  i++;
}).on("touchmove", function(widget){
  char.set({layoutData: {left: horizontal = horizontal - 5, bottom: 105, height: 40, width: 25}})
  char2.set({layoutData: {left: horizontal2 = horizontal2 - 5, bottom: 105, height: 40, width: 25}})
   if (horizontal < 2){
   horizontal = 1;
 }
   if (horizontal2 < 2){
   horizontal2 = 1;
   }
}).on("touchend", function(widget){
  char.set({layoutData: {left: horizontal, bottom: 105, height: 40, width: 25}})
  char2.set({layoutData: {left: horizontal2, bottom: 105, height: 40, width: 25}})
}).appendTo(page);

var button2 = new tabris.Composite({
  layoutData: {right: 10, bottom: 10, height: 80, width: 80},
  background: "rgba(20,20,20, 0.9)",
  highlightOnTouch: true
}).on("tap", function(widget){
  set2++;
}).on("touchmove", function(widget){
  char.set({layoutData: {left: horizontal = horizontal + 5, bottom: 105, height: 40, width: 25}})
  char2.set({layoutData: {left: horizontal2 = horizontal2 + 5, bottom: 105, height: 40, width: 25}})
    if (horizontal > screen.width - 27){
   horizontal = screen.width - 26;
 }
      if (horizontal2 > screen.width - 27){
   horizontal2 = screen.width - 26;
 }
}).on("touchend", function(widget){
  char.set({layoutData: {left: horizontal, bottom: 105, height: 40, width: 25}})
  char2.set({layoutData: {left: horizontal2, bottom: 105, height: 40, width: 25}})
}).appendTo(page);
 
new tabris.Composite({
  layoutData: {right: 0, left: 0, bottom: 101, height: 3},
  background: "black"
}).appendTo(page);

var background = new tabris.Composite({
  layoutData: {right: 0, left: 0, bottom: 147, top: 0},
  background: "transparent"
}).appendTo(page);

function beams(widget){
   text.set({text: (set), textColor: "red"});
   vertical = vertical
   page.find("#"+i).dispose();
  if (set > 0) {
         i = "0"
         beam(widget)
     page.find("#0").dispose();
    
  }
   if (vertical > screen.height - 300){
     page.find("#0").dispose();
     text.set("text", set = 0)
   }
  }

function beam(widget){
  new tabris.Composite({
    id: ++i,
    layoutData: {bottom: vertical = vertical + 10, left: horizontal1 + 10, width: 5, height: 15},
    background: "red"
  }).appendTo(background);
};

function beam2(widget){
    text2.set({text: (set2), textColor: "blue"});
  if (set2 == 1){
    horizontal3 = horizontal2
    vertical1 = 145
  } else if (set2 >= 1){
  new tabris.Composite({
    id: a,
    background: "blue"
  }).appendTo(page);
   page.find("#"+a).set({layoutData: {bottom: vertical1 = vertical1 + 5, left: horizontal3 - 12.5, width: 50, height: 40}});
  }
   if (vertical1 > screen.height - 50){
     page.find("#"+a).dispose();
     text2.set("text", set2 = 0);
  }
};   
