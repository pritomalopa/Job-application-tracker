1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
In JavaScript, getElementById, getElementsByClassName, and querySelector / querySelectorAll are methods used to select elements from the DOM, but they work in different ways and have different behaviors.

getElementById is used to select a single element by its unique id attribute. Since ids are supposed to be unique in an HTML document, this method always returns a single element object. If no element with the specified id exists, it returns null. For example:

const header = document.getElementById('main-header');

Here, header will directly reference the element with id="main-header".

getElementsByClassName is used to select all elements that have a certain class. It returns an HTMLCollection, which is live—meaning that if the DOM changes after the selection, the collection automatically updates. Since it can match multiple elements, you often need to access them by index or loop through them. Example:

const cards = document.getElementsByClassName('card');
console.log(cards[0]); // first element with class "card"

Here, cards is not a single element, but a collection of elements.

querySelector and querySelectorAll are more modern and versatile methods that allow you to select elements using CSS selectors.

querySelector returns the first element that matches the selector.

querySelectorAll returns a static NodeList of all matching elements. Unlike getElementsByClassName, this NodeList does not automatically update if the DOM changes.

Example:

const firstCard = document.querySelector('.card'); // first element with class "card"
const allCards = document.querySelectorAll('.card'); // NodeList of all elements with class "card"

Using querySelector and querySelectorAll, you can use complex selectors like .container > .card:first-child or #main-header h1 which is not possible with getElementById or getElementsByClassName.

2. How do you create and insert a new element into the DOM?
To dynamically modify a webpage, JavaScript allows creating new elements and inserting them into the DOM:

Steps to create and insert an element:

Create the element: Use document.createElement("tagName") to create a new element.

Modify content or attributes: Set properties such as textContent, className, id, or other attributes.

Insert into the DOM: Use appendChild(), insertBefore(), or append() to attach the element to a parent node in the DOM.
Example:

// Step 1: Create a new div element
let newDiv = document.createElement("div");

// Step 2: Set content and class
newDiv.textContent = "Hello, World!";
newDiv.className = "greeting";

// Step 3: Insert into the DOM
document.body.appendChild(newDiv);

This will create a new <div> element with the text "Hello, World!" and append it to the body of the page.

3. What is Event Bubbling? And how does it work?
Event Bubbling is the process where an event starts at the target element and then bubbles up to its parent elements all the way to the document root.

Example:

<div id="parent">
  <button id="child">Click me</button>
</div>
document.getElementById("child").addEventListener("click", () => {
    console.log("Button clicked");
});

document.getElementById("parent").addEventListener("click", () => {
    console.log("Parent clicked");
});

Clicking the button logs:

Button clicked
Parent clicked

The event first triggers on the button, then bubbles to the parent.

4. What is Event Delegation in JavaScript? Why is it useful?
Definition:
Event Delegation is a technique where a single event listener is attached to a parent element to handle events for all its child elements, including those dynamically added in the future.

Advantages:

Reduces memory usage by minimizing the number of event listeners.

Automatically handles dynamically created elements.

Simplifies code for large sets of similar elements.

Example:

let list = document.getElementById("myList");

list.addEventListener("click", function(e) {
    if (e.target && e.target.nodeName === "LI") {
        console.log("Clicked item:", e.target.textContent);
    }
});

Explanation:
Even if new <li> elements are added to #myList, the single event listener on the parent <ul> handles clicks for all child elements. The e.target property identifies the actual clicked element.

5. What is the difference between preventDefault() and stopPropagation() methods?
5. Difference between preventDefault() and stopPropagation()
Method	Purpose	Example Use Case
preventDefault()	Prevents the default browser behavior for an event.	Stopping a form from submitting or preventing a link from navigating.
stopPropagation()	Stops the event from bubbling up the DOM or capturing down.	Prevents parent elements from receiving the event triggered on a child.

Example:

<a href="https://google.com" id="link">Go to Google</a>
document.getElementById("link").addEventListener("click", function(e) {
    e.preventDefault();  // Prevents navigation to Google
    e.stopPropagation(); // Stops the click from bubbling to parent elements
    console.log("Link clicked, but navigation prevented!");
});

Explanation:

preventDefault() stops the default action (navigation).

stopPropagation() ensures no parent element can respond to the click event.

This allows full control over both browser actions and event flow.
