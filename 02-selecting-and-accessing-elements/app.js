// HTMLCollections vs. NodeList

/*
    Both are not arrays even though they look like one.
    They have features that make them have some behaviors of arrays.

    HTML Collections:
        - List of DOM elements that match certain criteria.

    Node Lists:
        - List of nodes. A node is any individual element in the DOM
        tree, this could de elements, attributes, texts, comments, and so on.


    Live Collections vs Static Collections:
        An HTMLCollection is always live means when there is a change in
        the document, it will be automatically updated to reflect the change.
         
        A NodeList is sometimes static, is not always live. It can be static or live
        depending on how it is generated. a NodeList generated with the querySelectorAll
        method is static. A change in the document is not reflected in the NodeList.

        In exception cases, when a NodeList is generated with the getElementByName, that 
        NodeList will be live.

        Looping through the collections:

            You cannot loop through an HTMLCollection with any of the array methods.
            Unless you first create an array from the collection.

            But with a NodeList, you can use the forEach method to loop through it.
            In addition, you cannot use other array methods like map, filter, and others
            without first creating an array from it.

            If for some reason, you still want to loop through an HTMLCollection
            without first creating an array from it, you can use the for...of statement.
 */

// All of this is made in order to have dynamic websites.

// Getting HtmlCollections & NodeLists:
const title = document.getElementById("app-title")
console.log(title); // <h1 id="app-title">I'm the header of this app </h1>

const title2 = document.querySelector("#app-title")
console.log(title2); // <h1 id="app-title">I'm the header of this app </h1>

const paragraph = document.querySelector("p")
console.log(paragraph); // <p></p>

const menuItems = document.getElementsByClassName("menu-item")
console.log(menuItems); //HTMLCollection(3) [li.menu-item, li.menu-item, li.menu-item]

const paragraphs = document.getElementsByTagName("p")
console.log(paragraphs); // HTMLCollection(4) [p, p, p, p]

const menuItems2 = document.querySelectorAll(".menu-item")
console.log(menuItems2); // NodeList(3) [li.menu-item, li.menu-item, li.menu-item]

/*
In terms of performance, using getElement/s is faster when querying than using querySelector.
They are newer, but in terms of speed, queries with getElements will be ideal.
 */

// More info in this article: "https://www.freecodecamp.org/news/dom-manipulation-htmlcollection-vs-nodelist/#:~:text=A%20NodeList%20is%20not%20always,t%20reflected%20in%20the%20NodeList%20."