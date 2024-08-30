/*
Attributes are initial values used in the opening tag to control the behavior
of the element in HTML. These can be the ID, the class(es).

The properties are the reflection of these attributes in JavaScript.
That is, they are going to become properties of the node object in JS.

It is important to mention that no matter how much we have changed a
property from JS of an object, the tag it is referencing will still
have the same attribute that was originally assigned.
This is because the attributes reflect the initial state of the HTML,
that is, how we started the HTML.
*/

const input = document.querySelector("#input-id")
console.dir(input); // >input#input-id.input-class (expandible object)

console.log(input.value); // "Name" value that can be seen in the input tag.

input.value = "Last-Name" // changes made in the value property, it also changes in what is display
//however, note that in the input element the attribute value still remains as initialized.

console.log(input); //<input id="input-id" class="input-class" type="text" value="Name"> <- prove of the aforementioned.

