/*
Window:
    “Window “is the global object in the browser.
    This means that all global variables and functions
    become properties and methods of “window”.
    It includes a wide range of methods and properties to interact with the browser window, control history, manage timers, and much more (setTimeout, setInterval ).
    It contains sub-objects or properties such as history, location, navigator and one of the most used document.
Document:
    It is a window property, which represents the HTML document (DOM tree) loaded in the browser window.
    It provides methods and properties to access and manipulate DOM elements. For example, getElementById, querySelector, createElement, innerHTML, among others.
*/


// Commands used in browser console:
console.dir(window) //window > document, fn, more...

/* console.dir():
    - Used to show an interactive representation of an JS object
    in the browser console. This allows the object to be explored
    in a hierarchical manner.

    -You can use console.dir() with any object in JavaScript,
    not just the document object or native objects.
    This includes objects you have created yourself,
    native objects such as Array or Date, and DOM objects.
    */

/*
 */
console.dir(document) // document > html, properties, fn, more...