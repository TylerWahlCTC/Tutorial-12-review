"use strict";

/*
   New Perspectives on HTML5, CSS3 and JavaScript 6th Edition
   Tutorial 12
   Review Assignment

   Author: 
   Date:   

   Filename: bc_keys.js

   Functions
   =========
   
   findKeyWords()
      Locate the keywords in the article indicated by the <dfn> tag
      and add those keywords in alphabetical order to a keyword box.
      
   makeKeyStyles()
      Create an embedded style sheet for the keyword box.

      
   replaceWS(textStr)
      Replaces occurences of one or more consecutive white space
      characters with the _ character.

*/

window.addEventListener("load", findKeyWords);
window.addEventListener("load", makeKeyStyles);

function findKeyWords() {
  var keywords = document.getElementById("keywords");

  /* Locates the keywords from the document to create a keyword list */
  var keywords = document.createElement("aside");
  keywords.setAttribute("id", "keywords");

  var mainHeading = document.createElement("h1");
  var outlineList = document.createElement("ol");

  mainHeading.innerHTML = "Keyword List";
  keywords.appendChild(mainHeading);
  keywords.appendChild(outlineList);

  var keyWordElems = document.querySelectorAll("dfn");
  var keyWords = [];

  for (var i = 0; i < keyWordElems.length; i++) {
    keyWords[i] = keyWordElems[i].innerHTML;
    var linkID = [];
    linkID[i] = replaceWS(keyWords[i]);

    keyWordElems[i].setAttribute("id", linkID[i]);
  }
  keyWords.sort();

  for (var i = 0; i < keyWords.length; i++) {
    var keyWordListItem = document.createElement("li");
    var keyWordLink = document.createElement("a");

    keyWordLink.innerHTML = keyWords[i];

    linkID[i] = replaceWS(keyWords[i]);

    keyWordLink.setAttribute("id", "#" + linkID[i]);

    keyWordListItem.append(keyWordLink);
    outlineList.append(keyWordListItem);
  }

  keywords.appendChild(mainHeading);
  keywords.appendChild(outlineList);

  var target = document.getElementById("doc");
  target.insertBefore(keywords, target.firstChild);
}

function makeKeyStyles() {
  document.styleSheets[document.styleSheets.length - 1].insertRule(
    "aside#keywords { \
         border: 3px solid rgb(101, 101, 101); \
         float: right; \
         margin: 20px 0px 20px 20px \
         padding: 10px; \
         width: 320px; \
     }",
  );
  document.styleSheets[document.styleSheets.length - 1].insertRule(
    "aside#keywords h1 { \
     font-size:2em; \
     margin: 5px; \
     text-align: center; \
  }",
  );
  document.styleSheets[document.styleSheets.length - 1].insertRule(
    "aside#keywords ol { \
   margin-left: 20px; \
   font-size:1.2em; \
  }",
  );
  document.styleSheets[document.styleSheets.length - 1].insertRule(
    "aside#keywords ol li { \
    line-height: 1.5em; \
  }",
  );
  document.styleSheets[document.styleSheets.length - 1].insertRule(
    "aside#keywords ol li a { \
    color: rgb(101, 101, 101); \
    text-decoration: none; \
  }",
  );
}

/* Supplied Functions */

function replaceWS(textStr) {
  var revText = textStr.replace(/\s+/g, "_");
  return revText;
}
