# Week 4

Scripting For The Web  
Sep 23, 2020

- Check-in
- Warm-up Browsing
- jQuery Fun
- pair up - student feedback on 'subversive site' 
- New Media Lecture series Tonight!

- TOC
{:toc}

#### Warm-up Claridryl website

- [Claridryl](https://web.archive.org/web/20180102111443/http://www.adultswim.com/promotions/claridryl) website on Wayback machine

## jQuery Basics

*- note: there are slides*

We've learned a ton so far. We now understand the basics of Javascript values, variables and functions. We understand the concept of the DOM and know that Javascript lets us modify the DOM.

With that knowledge we're going to add one other tool. This is the Javascript library jQuery.

Broadly stated, a programming library is a package of code with pre-written functions (and possibly variables, classes, etc) to simplify working in a specific area or category. jQuery is a Javascript library that makes programming in Javascript easier and it is quick to learn.

To use jQuery you first must pull it into your index file on the page where you want to use it. You can add your own jQuery code inside the ```<script></script>``` tags or link to an external script.

Example

```
<!DOCTYPE html>
<html>
<title>Minimal example - working with jquery</title>
  <body>
    <script src="jquery.js">
    <script src="script.js">
  </body>
</html>
```

jQuery is the most famous Javascript library and at one point could be found on over 60% of websites. There are 2 options to use it:

### Download jQuery and save it in your site's directory

[Download it](https://jquery.com/download/). Choose the compressed, production version 3.3.1.
Then add a link to it in your html index document. Then add a link to your own external script file after that, normally before the closing ```</body>``` tag.

### or use a CDN

A CDN means Content Delivery Network. Since so much of the web uses jQuery, there are companies and foundations that provide free links to jQuery online. Rather than having folks download jQuery from each website that uses it, a website developer can instead link to one of these centrally provided copies of jQuery online. That way, when someone visits your webpage, they will already have a copy of jQuery cached in their browser, and so your page will load faster.

Example - exactly same as above except for the jquery link

```
<!DOCTYPE html>
<html>
<title>Minimal example - working with jquery</title>
  <body>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src="script.js">
  </body>
</html>
```

### What's it for?

Same things as Javascript

* Dynamic change
* Interaction!

### Where to place it

* In HEAD or BODY

- best practices are to add link to jquery and then link to your own external javascript file right before the closing ```</body>``` tag
- why? so your HTML and CSS is loaded first and then your script is applied to them


## jQuery basics

If you understand how CSS works you can understand how jQuery works!

With jQuery, our basic syntax is:

```
$('selector').action();
```

```$```             --> tells the browser we're using jQuery

```('selector')```  --> is a tag, class or id we are selecting on the webpage. Don't forget the # or . for IDs and classes.

```action()```      --> is what action should be taken on what we've selected


### Example minimal jQuery call

```
$("p").click(function(){
  alert("The paragraph was clicked.");
}); 
```

#### Document Ready

It's *best practices* to wrap all of your jQuery code inside a *ready event*. In other words, we want all of our webpage's HTML and CSS code to load first BEFORE we start running our jQuery code so that if our script needs content from our webpage it's already loaded first.

```
$(document).ready(function(){

  //our jQuery code goes here

});
```

#### jQuery selectors


Examples of things you can select:

```
$("p")
```

Example: When you click a button, all paragraphs are hidden

```
$(document).ready(function(){
  $("button").click(function(){
    $("p").hide();
  });
});
```

```
$("*")  //select everything on page
$(this) //select current element, whatever it is
$("p.main") //select <p> elements with class "main"
$("p:first")//select first <p> on page
$("p:even") //select all even-numbered paragraphs
$("a[target='/'"]//select all <a> that link to home ("/")
$("[href]") //select anything with a href attribute
```

Many more [example selectors](https://www.w3schools.com/jquery/jquery_selectors.asp)

### jQuery events


Events are "things that can happen" on a webpage including:

- the page has loaded
- the page has been resized
- the page has been scrolled
- something has been clicked (or something has been double clicked)
- the mouse has hovered on something (or the mouse is no longer on)
- a button has been pressed (or a button has been held down, or released)
- a form has been submitted or the mouse cursor has entered a form field

There are more events. You can find a listing of jQuery events [here](https://www.w3schools.com/jquery/jquery_events.asp).


#### Common events

```
$("p").click(function(){
  $(this).hide();
});

$("#main").mouseenter(function(){
  alert("You entered main!");
});

```

#### Effects

##### Hiding effect

```
$("#hide").click(function(){
  $("p").hide();
});

$("#show").click(function(){
  $("p").show();
});
```

##### Fading effect

```
fadeIn()
fadeOut()
fadeToggle()
fadeTo()
```

example:

```
$(document).ready(function(){
  $("button").click(function(){
    
    $("#div3").fadeIn(3000);
  });
});
```

more on [fading in and out options](https://www.w3schools.com/jquery/jquery_fade.asp)

#### Other effects

Animations

Slides 

Callbacks (functions that you want to have triggered when an effect finishes running)

#### jQuery chaining

Use multiple jQuery calls at once by chaining them together.

```
$("#p1").css("color", "red").slideUp(2000).slideDown(2000); 
```

To make it easier to read, you can break your code over multiple lines:

```
$("#p1").css("color", "red")
  .slideUp(2000)
  .slideDown(2000); 
```

#### jQuery Actions: GET content


- text()
- html()
- attr()
- val()

Easy to do!

```let myText = $('#main');```

#### jQuery Actions: SET content


```
$('button').click(function(){

  $('body').html("<p>Changing all your content!</p>");
});
```

#### jQuery Actions: ADD content

- append()
- prepend()
- after()
- before()

$('p').prepend("I believe the opposite of this:");

##### Remove an element

remove()

Example: 

```$('#main').remove();```

### jQuery to alter CSS

- addClass() - Adds one or more classes to the selected elements
- removeClass() - Removes one or more classes from the selected elements
- toggleClass() - Toggles between adding/removing classes from the selected elements
- css() - Sets or returns the style attribute

examples:

```
$("button").click(function(){
  $("h1, h2, h2, p").toggleClass("bg-Blue");
});
```

##### Get and Set CSS

Get example:

```
let bg = $('body').css('background-color');
```

Set example:

```
$("p").css({"background-color": "purple", "font-size": "4em"}); 
```

#### change Dimensions


- width()
- height()
- innerWidth()
- innerHeight()
- outerWidth()
- outerHeight()
  
 
#### An aside: anonymous functions and passing functions

When we run ```$(document).ready(function(){})``` we are passing an anonymous function as an argument to ```$(document.ready()```

There are two things of note here: anonymous functions, and passing functions as arguments.

### Anonymous Functions

1. Anonymous functions are created at *runtime*
2. They don't have a name


Example of a named (not anonymous function):

```
function flyToTheMoon(){
      alert("Zoom! Zoom! Zoom!");
}

flyToTheMoon();
```

Anonymously

```
function() {
   alert("Zoom! Zoom! Zoom!");
}
```

So we have an anonymous function stored as flyToTheMoon now.

Going back to our previous jQuery starter code, we are passing an anonymous function to the function ready(), which runs only once our page has loaded.


### jQuery resources

- jQuery [reference](https://www.w3schools.com/jquery/jquery_ref_overview.asp)
- jQuery [events](https://www.w3schools.com/jquery/jquery_events.asp)

## Homework

Finish your project!


Grading Rubric:

25% Concept Idea
- Does the concept make sense?
- Is it a novel idea?
- Does the execution match the concept?
- Is there a surprising hidden content that rewards the user?

25% Design
- Is the site organized into separate HTML, CSS stylesheet(s) and Javascript/jQuery
- Is the navigation intuitive?
- Does the site work on different browsers and screen sizes?

25% Functionality
- Does the jQuery function properly?
- Does the project work as intended?

Completeness
- Does the project have a title?
- Do all pages have proper headings (h1, etc) and realistic text (not dummy) and pages with content?
- Project contains a website with both obvious corporate entity and hidden subversive messaging

