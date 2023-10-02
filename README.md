# SVG Generator Using Node JS
## User Story
> * WHEN I am prompted for text
>   THEN I can enter up to three characters
> * WHEN I am prompted for the text color
>   THEN I can enter a color keyword (OR a hexadecimal number)
> * WHEN I am prompted for a shape
>   THEN I am presented with a list of shapes to choose from: circle, triangle, and square
> * WHEN I am prompted for the shape's color
>   THEN I can enter a color keyword (OR a hexadecimal number)
> * WHEN I have entered input for all the prompts
>   THEN an SVG file is created named `logo.svg`
>   AND the output text "Generated logo.svg" is printed in the command line
> * WHEN I open the `logo.svg` file in a browser
>   THEN I am shown a 300x200 pixel image that matches the criteria I entered

## Screenshot of End Product

![SVG Generated using Node](./example/Screenshot%202023-10-02%20at%203.53.42%20PM.png)

## Learning Process

I learned alot about object oriented programming in this challenge. I like organization and enjoy the way you are able to build class objects in their own file and export them for use to the main `index.js`.

I did experience some challenges. writing objects and object classes is certainly not like traversing the dom in front end development. It really helped to break it down into smaller tasks, like completing the shapes classes, then testing them, and then moving on etc. While I prefer behavior driven development, I can see the value of Jest and testing in TDD.

Learning how to use the `render()` method in conjunction with the svg file was fun. It reinforced in my mind the need to go over my syntax very carefully. 

## Technologies Used 

node.js
inquierer package
jest package for testing

I also found a very cool NPM called max length input prompt. It allowed me to keep the user to 3 characters without writing a long conditional statement.

## Links

* [Github Repo](https://github.com/TorySnopl/node_svg)
* [Demo Video](https://drive.google.com/file/d/1MPThN6Lm_aZXVaYE7_mu7Fc1zLAPJHXg/view)

## Credits
Thank you to the developers of the technologies listed above. Also a big shoutout to the team at askBCS who helped me troubleshoot along the way.

### Code
No starter code was given for this project. 
