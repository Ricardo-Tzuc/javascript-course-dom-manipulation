/*
    Traversing the DOM
        Often, you will want to move through the DOM without specifying each and every
        element beforehand. Learning how to navigate up and down the DOM tree and move
        from branch to branch is essential to understanding how to work with JavaScript
        and HTML. In this JS file you will see some methods to traverse the DOM, with
        parent, child and sibling properties.

    Parent Nodes
        The nodes in the DOM are referred to as parents, children, and siblings, depending
        on their relation to other nodes. The parent of any node is the node that is one
        level above it, or closer to the document in the DOM hierarchy.

    Children Nodes
        The children of a node are the nodes that are one level below it.
        Any nodes beyond one level of nesting are usually referred to as descendants.
    
    Sibling Nodes
        The siblings of a node are any node on the same tree level in the DOM.
        Siblings do not have to be the same type of node - text, element,
        and comment nodes can all be siblings.

 */
const parent = document.getElementById("parent")
console.log(parent); // <ul id="parent">...</ul> children also contained.

const children = parent.children
console.log(children); // HTMLCollection(4) [li, li.menu-item, li.menu-item, li.menu-item]

const firstChild = parent.firstElementChild
console.log(firstChild); // <li><a href="#">Home</a></li>

const lastChild = parent.lastElementChild
console.log(lastChild); // <li class="menu-item"><a href="#">Contact</a></li>

const lastChild2 = parent.lastChild
console.log(lastChild2); // this return the actual last node which is a #text node (\n)

const previousSibling = parent.previousElementSibling
console.log(previousSibling); // <p>Some example text</p>

const nextSibling = parent.nextElementSibling
console.log(nextSibling); // <section></section>
// those prints sometimes return the node (object) associated to that criteria.


// .children - live HTMLCollections
// .childNodes - live NodeList
// .firstChild - live NodeList
// .firstElementChild - non-live HTMLCollection
// .lastChild - live NodeList
// .lastElementChild  - non-live HTMLCollection
// .previousSibling - live NodeList
// .previousElementSibling - non-live HTMLCollection
// .nextSibling - live NodeList
// .nextElementSibling - non-live HTMLCollection



const children2 = document.querySelector("li")
console.log(children2); // <li><a href="#">Home</a></li>

const parent2 = children2.parentNode
console.log(parent2); // <ul id="parent">...</ul> children also contained.

const parent3 = children2.parentElement
console.log(parent3); //  <ul id="parent">...</ul>

const grandParent = children2.closest("menu")
console.log(grandParent); // <menu>...</menu> containing also the whole children elements.

// .parentNode - live NodeList
// .parentElement - non-live HTMLCollection
// closest(selector) - this one is the most used.

//source: https://www.digitalocean.com/community/tutorials/how-to-traverse-the-dom