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
   // Create aside
   var keyword = document.createElement("aside");
   keyword.id = "keywords";
   // Create and append heading
   var heading = document.createElement("h1");
   heading.textContent = "Keyword List";
   keyword.appendChild(heading);
   // Create and append ordered list
   var keywordList = document.createElement("ol");
   keyword.appendChild(keywordList);

   var keyWordElems = document.querySelectorAll("dfn");
   var keyWords = [];
   for (var i = 0; i < keyWordElems.length; i++) {
      keyWords[i] = keyWordElems[i].innerHTML;
      var linkID = [];
      linkID[i] = replaceWS(keyWords[i]);
      keyWordElems[i].setAttribute("id", linkID[i]);
   }
   keyWords.sort;
   // console.log("Test for keywords", keyWords);
}

function makeKeyStyles() {

}





/* Supplied Functions */

function replaceWS(textStr) {
   var revText = textStr.replace(/\s+/g,"_");
   return revText;
}
