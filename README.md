# random-password-generator

# Introduction


![Deployed Site](Assets\images\deployed-site.png)

This application is meant to generate a password that should be adaptable to meet any criteria. When you select the button "Generate Password", you should see a few prompts come up asking you what you would like your password to include. This application will then take your preferences of password characters and randomly generate a password with your parameters and your specified character length. Take a look throughout the page as well as the provided code. Follow the install instructions to properly run the code.


![Github Repository](Assets\images\github-repository.png)

# Install

[github Repository](https://github.com/PN-Barnes/random-password-generator)

[VS Code](https://code.visualstudio.com/)

[node.js](https://nodejs.org/en/)

# Description 

The code found within this application uses functions, variables within global and local scope, if/else statements, confirm, prompt, and alerts throughout the whole deploynment. 

I wrote this code by declaring global variables that need to load before any of the browser prompts start as well as the function can be called. These variables are used to hold data that the function will use to push data and store the users preferred characters.

![Global Variables](Assets\images\Global-variables.png)

After the global variables have loaded within the browswer, the next part is the start of the large function that writes the password to the page. This large function uses a for loop with if statements that use locally declared variables 

![Local Variables](Assets\images\local-variables.png)

Once the local variables are declared, then the if statements take the confirm prompt values to store and check the users preferred password characters. I wrote seperate if statements in order to check each confirm variable individually so one confirm value does not effect another value. It also checks that at least one parameter was selected, if not, there is another alert notifying the user they have to restart the process and at least select one parameter. 

![If Statements](Assets\images\if-statements.png)

After all the variables are checked and the arrays are pushed into the array going to be used for character selection.THe for Loop goes into effect with generating random indexes to be used to select a random array and a random index element within that random array. Then, once a character is selected it repeats the process until the generated characters match the user selected character amount. These characters are then stored into what will be the password and join them into one single string, finishing the password generation. 

![For Loop](Assets\images\for-loop.png)

Moving back up to the top. The event listener calls the function of writepassword when the button is clicked within the document. 


# References 

## [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)

## [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)

## [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

#### [Scope](https://developer.mozilla.org/en-US/docs/Glossary/Scope)

#### [For Loops](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for)

#### [If/Else statements](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else)

#### [Variables](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var)


# Credits

The assignment of password to the button, the HTML, and CSS was written by **Trilogy education services** to start this code work flow. All code of the functionality of the Javascript was written by **Paul Barnes**.

© 2021 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
