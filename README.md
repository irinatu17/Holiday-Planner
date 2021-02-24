# Holiday planner
Interactive Front-End Milestone Project - Code Institute

The live website can be viewed [here](https://irinatu17.github.io/Holiday-Planner/)         


<img src="https://i.ibb.co/F63RnRQ/holiday-planner-mockup.png" alt="mockup" target="_blank" rel="noopener" width="850">

TravelWithLove is a single page application that uses Google Maps API to allow users to search for their next holiday destination. The users can search for different destinations all around the world and find accommodation, restaurants, attractions and shops by clicking at the categories. The application also allows the users to get detailed information (name, address, contact number, rating and a link to external websites) of the chosen establishment by clicking at the marker. As well as that, the website gives the users a choice of planning the holiday by themselves by using the map section or selecting the all-inclusive travel packages with detailed description. Additionally, website allows the user to contact TravelWithLove management team to book the tour or ask a question.



## Table of Contents
1. [**UX**](#ux)
    - [**User Stories**](#user-stories)
    - [**Strategy**](#strategy)
    - [**Scope**](#scope)
    - [**Structure**](#structure)
    - [**Skeleton**](#skeleton)
    - [**Surface**](#surface)
2. [**Technologies**](#technologies)
    - [**Languages**](#languages)
    - [**Libraries and Frameworks**](#libraries-and-frameworks)
    - [**Tools**](#tools)
3. [**Features**](#features)
    - [**Existing Features**](#existing-features)
    - [**Features Left to Implement**](#features-left-to-implement)
4. [**Testing**](#testing)
5. [**Deployment**](#deployment)
6. [**Credits**](#credits)
    - [**Content**](#content)
    - [**Media**](#media)
    - [**Code**](#code)
    - [**Acknowledgements**](#acknowledgements)
7. [**Disclaimer**](#disclaimer)

---

## UX
### User Stories
As a traveller, I want to find a hotel in my next holiday destination.

- As a traveller, I want to see what attractions are in the city where I think to spend my holidays, so I can decide what to do before I get there, for example, visit museums, parks or cinemas.

- As a traveller, I want to book a hotel in the city centre for my next holiday, so I want to visually compare locations of several hotels that I picked, checking with the map.

- As a traveller, I want to check out different restaurants that are nearby in the city where I live, so I can choose one to visit soon.

- As a traveller, I want to see if there are any shops nearby and what type of shops are in the town I am currently in during my holidays, so I can decide which one to visit.

- As a traveller, I want to book all-inclusive tour, so that I will not need to care about organising flights, accommodation and entertainment by myself.

- As a busy person, who spends almost all the time working, I have no time for planning my holidays, so I want to contact the travel agency directly to discuss and organise my next holiday and book one of the all-inclusive travel packages according to my personal preferences

### Strategy
My goal in design was to make it minimalistic, simple to access information on the site, as well as to give the users the feeling of reliability, security and positiveness.

### Scope

This website will be used by people, who want to find out what hotels, attractions, restaurants and shops are in the area of their next holiday destination. In addition, this website gives the alternative to book a travel package if the user does not like to plan holidays on their own. The website is made for either helping travellers to plan their holidays using the map or make them to choose a travel package from this site.

### Structure

In the “Map” section, I wanted them to be able to quickly access different establishments, such as accommodation, restaurants, attractions and shops, in a chosen city, providing a short information and external links to these places. In the “about” section, I wanted to give some instructions for users and showcase that they have a choice to plan everything by themselves or use our service. As well as that, I provided some information about the ideas and principles of TravelWithLove company to persuade the user to book the tour.

### Skeleton

Wireframes can be found [here](https://github.com/irinatu17/holiday-planner/blob/master/assets/wireframes/Wireframes.pdf)

### Surface

The combination of blue and yellow colours was chosen to create a sleek, calm and reliable feel. As well as the idea of using different shades of white, and different shades was chosen to give more space and volume. The colour scheme is consistent and does not hinder readability in any way.    

<div align="right">
    <b><a href="#table-of-contents">↥ Back To Top</a></b>
</div>

## Technologies
### Languages
- [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML) - to build the foundation of the project.
- [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) - to create custom styles.
- [JavaScript](https://www.javascript.com/) - to call on the Google Maps and Places API to include the map and perform the functionality of the website(DOM manipulation).

### Libraries and Frameworks
- [Bootstrap](https://www.bootstrapcdn.com/) - as the front-end framework for layout and design.
- [Google Fonts](https://fonts.google.com/) - to import fonts.
- [FontAwesome](https://fontawesome.com/) - to provide icons used across the project. 
- [JQuery](https://jquery.com/) - to simplify DOM manipulation and to initialize Bootstrap functions.
- [Google Maps JavaScript API](https://developers.google.com/maps/documentation/javascript/overview)- to render the map.
- [Google Places API](https://developers.google.com/places/web-service/overview)- to allow users to search a city using autocomplete function, search for different categories of establishments and get their names, addresses, contact numbers and websites.

### Tools
- [GitPod](https://www.gitpod.io/) - an online IDE for developing this project.
- [VS Code](https://code.visualstudio.com/) - the primary IDE for developing the project at the later stages.
- [Git](https://git-scm.com/) - for version control.
- [GitHub](https://git-scm.com/) - for remotely storing project's code.
- [TinyPng](https://tinypng.com/) - for compressing images.
- [ImgBB](https://imgbb.com/) - to host images used in README.
- [Balsamiq](https://balsamiq.com/) - to create wireframes.

<div align="right">
    <b><a href="#table-of-contents">↥ Back To Top</a></b>
</div>

## Features
The navbar at the top of the page allows user to easily navigate throughout the webpage. It includes three parts: “About”, “Travel Packages” and “Contact us” that allows user to scroll to these sections, by clicking on the button. Logo “TravelWithLove” reloads the homepage by clicking on it. The navigation bar is shown only on the laptop and tablet screens and was removed from the mobile device in order to enhance UX after some testing was made, that from my prospective improves UX and gives more free space on screens with small resolutions.

A search bar with a placeholder “Enter the city to start…” uses the Google Places API and autocomplete provides a list of locations to search for.

The button group including the following buttons “Hotels”, “Restaurants”, “Attractions” and “Shopping” allows a user to choose the category for the nearby search, which will display markers on the map for the selected option.

The icon information window, that appears when a user clicks on one of the markers, gives the user the ability to get more detailed information, displaying name, address, contact number, an external link to the website.

The section “About” is static and displays the information about the main idea of the website.

The image carousel displays 3 vertically centred responsive images when a user clicks on one of the cards in a “Travel Packages” section. It was made by combing modal and carousel components from Bootstrap.

The "Read more…" button toggles the paragraphs describing the travel package by using a smooth slide up or down animation.

The “Contact us” modal allows users to contact the TravelWithLove management by filling out the form. After submission and sending the e-mail the vertically centred pop-up appears, letting the user know that his enquiry was successfully sent.

The buttons for social links allow users to open the websites in new tab by using 'target="_blank".
## Testing

### User scenarios that were used for testing are detailed below:

1. Search the city and autocomplete:

i. Open the page, go to the “Map” section at the top of the site.

ii. Enter a city (desired destination) into the search box and make sure that the autocomplete shows suggested cities.

iii. Click on one of the suggested letiants and verify that the map loads with that location in the centre.

2. Display the hotels nearby:

i. Go to the “Map” section at the top of the page.

ii. Enter a city into the search input box in order to make the map centre on the chosen location.

iii. Click on the “Hotels” button of the button group and get the markers displayed.

3. Display info window:

i. Go to the Map section at the top of the page.

ii. Enter a city into the search input box in order to make the map centre on the chosen location.

iii. Click on the “Hotels” button of the button group and get the markers displayed.

iv. Click on one of the markers and verify that the info window displays the name, address, contact number and website of the chosen place.

4. Display the information about a travel package:

i. Go to the Travel Packages section.

ii. Click on the “Read more” button and get the paragraph with a text about the selected package slide down.

iii. Click on the “Read more” button again to hide the paragraph.

iv. On the laptop device hover over the image to see information about number of days and the price.

5. Display the image carousel:

i. Go to the “Travel Packages" section.

ii. Click on the image to get the carousel displayed in the centre of the screen.

iii. Click on the next and previous controls to show next and previous images respectively.

6. Contact form:

i. Go to the "Contact Us" section in the footer.

ii. Try to submit the empty form and verify that an error message about the required fields appears.

iii. Try to submit the form with an invalid email address without using “@” and verify that a relevant error message appears.

iv. Try to submit the form with all inputs valid and verify that a success message appears.

v. Get the pop-up window displayed in the centre of the screen, that shows that the enquiry was successfully submitted.

All the links in the footer as well as the links to external websites in the info windows in the “Map” section will open in a new tab using 'target="_blank". All links have been manually tested to ensure that they are pointing to the correct destination.

This site was tested across multiple browsers (Chrome, Internet Explorer, FireFox) and on multiple mobile devices (iPhone 5, 6, 8, Samsung Galaxy, Sony Xperia), tablets(iPad) and laptops (with HiDPI and MDPI and touch screens), as well as on Google Chrome's developer tools to see how it looks across all the different device screen sizes to ensure compatibility and responsiveness.

### Validation ·
- HTML was validated using [W3C Markup Validation Service](https://validator.w3.org/#validate_by_input)
- CSS was validated using [W3C CSS Validation Service](https://jigsaw.w3.org/css-validator/)
- JS was validated using [JSHint](https://jshint.com/)

As well as the testing described, I asked my friends and family to have a look and check out the website on their devices and send me some feedback. The interesting issue that I got at that stage was that some people wanted to enter the country, not the city, and this confused users. In order to fix this issue and enhance UX, I changed the placeholder for the search box, asking the user to enter the city to begin using the map. Another issue found at this point was when the user clicks at the “Read more” button under one of the packages, and all three paragraphs of the row appeared, despite the text of the other two was hidden. To fix this issue and to improve UX, the Bootstrap’s “card-desk” class was removed and all the three cards in a line were placed in the different columns.

<div align="right">
    <b><a href="#table-of-contents">↥ Back To Top</a></b>
</div>

## Deployment
This site is hosted using **GitHub pages**, deployed directly from the master branch, the live version can be found [here](https://irinatu17.github.io/holiday-planner/).    

The deployed version of the site is the most current version in the repository.     
To deploy this page to GitHub Pages from its GitHub repository the following steps have to be made:     
1. From the menu items near the top of the page, select **Settings**
2. Scroll down to the **GitHub Pages** section
3. Under **Source** click the drop-down menu labelled None and select **Master Branch**.   
On selecting Master Branch the page will be automatically refreshed and the website is now deployed
5. Scroll back down to the **GitHub Pages** section in **Settings** to retrieve the link to the deployed website.     It may take a short time to go live, but typically less than 60 seconds

### How to run locally
You can clone this repository directly into the editor of your choice by pasting the following command into the terminal:      
`git clone https://github.com/irinatu17/holiday-planner.git`    
Alternatively, you to **clone** this project from GitHub follow the steps:
1. Under the repository name, click **Clone or download**
2. In the **Clone with HTTPs section**, copy the clone URL for the repository
3. In your local IDE open **Git Bash**
4. Change the current working directory to the location where you want the cloned directory to be made
5. Type `git clone`, and then paste the URL you copied in Step 2   
`git clone https://github.com/irinatu17/holiday-planner.git`    
6. Press Enter. Your local clone will be created   

Further reading and troubleshooting on cloning a repository from GitHub can be found [here](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository).
<div align="right">
    <b><a href="#table-of-contents">↥ Back To Top</a></b>
</div>

---
## Credits
### Content
All the content in the "About" and the "Travel packages" sections of this website were written by me.

Significant part of the maps.js file JavaScript code has been taken from the Google Maps JavaScript API Documentation, then modified, customised and supplemented in accordance with the goals.
### Media
The background image was obtained from [Unsplash](https://unsplash.com/).

Pictures in the “Travel packages” section were taken from free available Google images by searching them using 800x600 size parameters.
### Acknowledgements
This is a list of some websites that helped me during development to get some inspiration, find information about technologies and features used or to find relevant examples: 
1. W3schools
2. Google Maps Platform Documentation 
3. Google Places API documentation.
4. Stack Overflow
5. Dribble 

As well, I would like to thank my mentor Rahul Lakhanpal and all the tutors in the Code Institute for their help, advice and support throughout the project.


---

## Disclaimer
This site is made for **educational purposes** only.   

<div align="right">
    <b><a href="#table-of-contents">↥ Back To Top</a></b>
</div>


