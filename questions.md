# Exam 1 Questions

* Answers should be roughly 2-5 sentences, and in your own words.  
* Some questions ask for a code sample - keep them short and to the point.
* Be sure to be clear - be careful not to use vague pronouns like "it" if I can't be completely sure what "it" is.
* I cannot assume knowledge you don't demonstrate, so be clear and explicit.

## Q: What is the difference between a dynamic asset and a static asset?
Asset:
An asset is all materials needed to successfully complete a project. 
In terms of web design and development, “assets” typically refer to the text content, graphics and databases.

Static Asset: Definition :
1)Static asset is any content that can be delivered to an end user without having to be generated, modified, or processed. 
The server delivers the same file to each user, making static content one of the simplest and most efficient content types.
Advantages: 1)Static asset is easier to cache.
2)Static asset is less power-hungry.

Dynamic Asset:Definition :
1)Dynamic asset are the things that constantly or regularly changes based on user interactions.
2)It relies on both client-side and server-side scripting languages such as JavaScript, PHP, or ASP.
Advantages:1)it is interactive
2)it can be easily updated as per the requirements.

## Q: What is the difference between a relative and absolute file path in an href?  What is the "webserver root/document root" and how do absolute/relative paths relate to this document root?
1)The first difference between the two different types of path is that absolute paths always include the domain name of 
the website, including http://www., whereas relative path only point to a file or a file path. 
2)You can only use relative links/path when linking to pages or files within your site,and you must use absolute 
links if you're linking to a location on another website.
Absolute path example:
<a href="http://www.google.com/">Google search engine</a>
Relative path example:
<a href="page2.html">Go to page 2</a>

Web server root /document:
Web server root/document is NOT the "root" of the file system.The "document root" is how the web server treats requests for the "root".

Root is related to absolute and relative path in following way:
1)An absolute path is taken from some "root" of the server.
2)If the path is built starting from the current location, it is called relative.


## Q: What is the difference between server-side and client-side JS?
1)Server side :Works in the back end which could not be visible at the client end.
Client side:Works at the front end and script are visible among the users
2)Server side: Requires server interaction
Client side:Does not need interaction with the server.
3) Server side :Relatively secure.	
Client side :Insecure


## Q: What are the differences between `var`, `const`, and `let`, and when should you use each of them?
Var:
1) Var should not be used unless you're using older JS engines
2)it declares a variable within the scope of the current function
3)"Hoists" (meaning a declaration, but not an initialization, acts as
if it at the top of the function, regardless of line)

Let:
1)it is scoped to the current BLOCK
2)Has special treatment in a for initialization
3)It does NOT hoist (avoid the Temporal Dead Zone)

const:
1) it is not used just for "words"
2) const is block-scoped
3) it does NOT hoist
4) it Prevents reassigning the variable
5) it does NOT prevent mutation of an array or object because this doesn't change the variable, just a value
within it.
    

## Q: What are the 4 ways to create inheritance in JS? (no examples needed, just a sentence describing each)
1)Constructor Function:The new keyword can be used on a function call. In this the prototype property is 
assigned as the prototype of the new object.
2)Object.create:The Object.create() method creates a new object, using an existing object as the prototype of the newly created object..
3)ES6 classes :JavaScript classes, introduced in ECMAScript 2015, are primarily syntactical sugar over JavaScript's existing prototype-based inheritance. The class syntax does not introduce 
a new object-oriented inheritance model to JavaScript.
4)Brute Force Prototype Assignment :In this you can set the prototype directly.

## Q: Give a short code demonstration of 1 way to create JS inheritance to __example __ a method named "purr".
Object.create() inheritance is created:
const cat = {
purr: function() { //
console.log(`My name is ${this.name}.`);
}
};
const sammy = Object.create(cat);
sammy.name = 'Sammy';//"name" is a property set on "sammy", but not on "cat"
sammy.purr();
// expected output: "My name is Sammy."

## Q: Give a short code demonstration of a different way to create JS inheritance to __inherit__ a method named "hiss".
1)Constructor function:
const Cat = function(name) {
this.name = name;
};
Cat.prototype.hiss = function() {
console.log(`My name is ${this.name}.`);
};
const sammy = new Cat('Sammy');
sammy.hiss();
2)Object.create():
const cat = {
purr: function() { //
console.log(`My name is ${this.name}.`);
}
};
const sammy = Object.create(cat);
sammy.name = 'Sammy';//"name" is a property set on "sammy", but not on "cat"
sammy.purr();
3)ES6 CLASSES:
class Cat {
constructor(name) {
this.name = name;
}
hiss() {
console.log(`My name is ${this.name}.`);
}
}
const sammy = new Cat('Sammy');
sammy.hiss();
}
4)BRUTE FORCE:
const cat = {
hiss: function() {
console.log(`My name is ${this.name}.`);
}
};
const sammy = { name: 'Sammy' };
Object.setPrototypeOf(sammy, cat);
sammy.hiss();

## Q: Explain what a callback is, and give an example.
A callback is a function passed to another function, so that the receiving function gets control over
1) How many times to call the callback function
2) When to call the callback
3) What to pass in the call to the callback
Callbacks are a hugely powerful pattern that allows for code to be written with minimal information, which reduces the program complexity, which
makes changes easier.

Example: 
function functionOne(x){ 
  return x;
};
function functionTwo(var1){
  //some code
}
functionTwo(functionOne); 

## Q: What are the words that would correctly fill in the space in this sentence:

"If a function using `this` is used ` as a callback`, then `this` will not have the expected implicit value"

## Q: In CSS, what does it mean "You shouldn't name your classes after what they look like"? 
  ## Why?  Give an example of a class that is well named and a class that is poorly named.

Basic convention used for naming css class is always use lower case letters and a hyphen (the “-” sign) 
as a word separator. it should be semantically correct ans meaningful.
Example:
Good Practice for well named css class:
    <div class=”login-form”>
      <form>
        <div class=”login-email”>
          <label>…</label>
          <input type=”email”>
        </div>
        <div class=”login-password”>
          <label>…</label>
          <input type=”password”>
        </div>
      </form>
    </div>
    
  Css for above class:
    .login-form{
    }
    .login-email{
    }
    .login-password{
    }


Bad practice for poorly named class:
    <div class="red green">Will be green</div> >>>>Bad Naming convention
    <div class="green red">Will be green</div>
Bas Css:
    .red   { color: red; >>>>bad naming convention
    .green { color: green; }

The above example used “red” and “green” as class names. That’s not very semantic. 

