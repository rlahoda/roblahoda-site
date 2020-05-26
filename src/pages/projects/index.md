---
templateKey: "projects-page"
path: /projects
title: PROJECTS
subtitle: Stuff I've Built
projects:
  - covidchart:
    title: Covid-19 Chart Site
    linktitle: covid-19-graph.netlify.com
    linkaddress: https://covid-19-graph.netlify.com
    trackingaddress: https://covid-19-graph.netlify.com
    githubTitle: View on Github
    githubaddress: https://github.com/rlahoda/covid-19-data
    githubtracking: covid19
    width: wide
    paragraphs:
      - text: >
          With all the hype and confusion around the Covid-19 pandemic, I wanted to be able to see the data in a clear, helpful way that would help me understand what was going on better. I had heard that things were getting better at times, or worse, but it was hard to know what was going on
      - text: >
          This site uses data from the NY Times and the European Centre for Disease Prevention and Control to allow users to view data for various countries around the world or US states. The raw data came in the form of deaths and cases for each day in CSV format. So I wrote some Python code that would parse the CSV files into JSON, then take that JSON and write it into a Javascript file for display. During the processing, I added in additional data to further help with understanding and clarity.
      - text: >
          In addition to the total numbers of cases and deaths that have accumulated each day, other metrics such as the number of new cases and deaths, the percent of the total population of that country or state that has the virus or has died, the date of the first death, and the date of the first case were calculated.
      - text: >
          The site was built in vanilla Javascript using Chart.js for the charting and Python for data parsing and calculations. Additional features include using CSS Grid with a Flexbox fallback for the country/state card display grid, using HTML5 details/summary tags for collapsable data cards, using Javascript to automatically collapse the cards for easier scrolling on mobile view, a "scroll to top" button for easier scrolling on mobile and desktop, and the ability to add all countries/states or clear the chart as desired.
      - text: >
          The site is hosted via Netlify for continuous deployment from Github.
    technology:
      - Javascript
      - Html5
      - Css3
      - Sass
      - Flexbox
      - Netlify
  - roblahoda:
    title: Rob Lahoda • Web Developer
    linktitle: roblahoda.com
    linkaddress: http://www.roblahoda.com/?utm_source=github&utm_medium=github_pages&utm_campaign=github_projects&utm_content=projects
    trackingaddress: roblahoda.com
    githubaddress: https://github.com/rlahoda/roblahoda-site
    githubtracking: https://github.com/rlahoda/roblahoda-site
    width: normal
    paragraphs:
      - text: >
          This is the site you are currently viewing. It is build on Gatsby.js for content management and hosted on Netlify for continuious delivery from Github. The animation is done with Greensock Animation Platform (GSAP) and the layout is in CSS Grid with a Flexbox fallback. The icons are inline SVG inserted dynamically using Javascript.
    technology:
      - Javascript
      - Greensock
      - CssGrid
      - Netlify
      - Gatsby
  - myvacationmap:
    title: My Vacation Map
    linktitle: myvacationmap.com
    linkaddress: https://www.myvacationmap.com
    trackingaddress: https://www.myvacationmap.com
    githubTitle: Email me for access to this private repo! rob@roblahoda.com
    githubaddress: mailto:rob@roblahoda.com
    githubtracking: myvacationmap
    width: wide
    paragraphs:
      - text: >
          Have you ever been preparing for a trip and found a bunch of cool places to visit, only to not know where to keep that information so that it's easily accessable when you're out and about? My Vacation Map is a custom mapping app that is built on React and using the Leaflet mapping library to solve this problem.
      - text: >
          The app allows the user to add points onto the map with various information that the user would like to keep about that location. These can be personal notes, information from guidebooks, links to a website about that location, or many other possibilities. The user is able to add a category that will determine the icon and color of the map point for easier identification while reviewing their points. The app also is able to use geolocation to find the user's current location and even follow them as they move.
      - text: >
          My Vacation Map is built React with Redux for state management, the React-Leaflet component library for managing the Leaflet mapping, and the React-Geolocated component for geolocation. For data managemnet, there is a Drupal 8 back-end connected via REST and JSON Api end points as well as the Simple Oauth module for Oauth2 authentication management.
      - text: >
          For API management, custom Redux middleware was written to allow simplified triggering of complex events through components. Unit tests are written in Jest with Enzyme.
    technology:
      - React
      - Javascript
      - Drupal8
      - Redux
      - Jest
      - Leaflet
      - Pantheon
      - Netlify
  - demosite:
    title: Hot Dog Demo Site
    linktitle: Live Preview Site
    linkaddress: https://rlahoda.github.io/demo-site/
    trackingaddress: rockpaperscissors
    githubaddress: https://github.com/rlahoda/demo-site
    githubtracking: hotdog
    width: med
    paragraphs:
      - text: >
          I recently did a little code challenge where I was given a photoshop mockup of a site and asked to build it out however I wanted to. So I built this demo site. It’s written in HTML using semantic markup and tagging. The styles were written in SCSS and there’s a small amount of Javascript.
      - text: >
          All of the colors are in CSS variables, which allowed me to implement a “dark mode” setting by just adding a single CSS style to the body element. The layout is done in Flexbox and fully responsive with the order of the image/article sets changing on smaller viewport sizes to allow for the content to remain in a logical order on screen.
      - text: >
          The main navigation menu collapses on mobile using just CSS styles. SCSS mixin was used to create responsive type to change sizes based on the viewport size. I added hover animations to the primary nav menu items. The icons are inline SVG images for fast loading.
    technology:
      - Html5
      - Css3
      - Sass
      - Flexbox
  - rockpaperscissors:
    title: Rock, Paper, Scissors Game
    linktitle: Codepen Link
    linkaddress: https://codepen.io/rlahoda/full/pxBKmY/
    trackingaddress: rockpaperscissors
    githubaddress: https://github.com/rlahoda/rock-paper-scissors
    githubtracking: rockpaperscissorscode
    width: normal
    paragraphs:
      - text: >
          This is a Javascript Rock-Paper-Scissors game! It started off as a simple command-line challenge that I decided to translate into a full game with Greensock GSAP animation, SVG graphics for the hands, emojis, and a retro feel. It uses an ES6 Promise structure to get a random name for player 2 from a random name API.
    technology:
      - Javascript
      - Greensock
      - Codepen
  - westervillecaringsharing:
    title: Westerville Caring and Sharing
    linktitle: westervillecaringandsharing.org
    linkaddress: http://www.westervillecaringandsharing.org
    trackingaddress: westervillecaringsharing
    githubaddress: https://github.com/rlahoda/westerville_caring_sharing
    githubtracking: westervillecaringsharingcode
    width: normal
    paragraphs:
      - text: >
          A local charity contacted me about helping them update their website in time for their 25th anniversary. They had a previously unfinished site that needed rebuilding so I put together a simple site using Twig templates and a simple, Flexbox-based layout. The site design and content needed to be simple so that a volunteer from the organization could take over the code and continue to update the site. We were able to put together a nice, clean design in just over a month to have it ready for their organization's 25th Anniversary celebration.
    technology:
      - Flexbox
      - Twig
  - codepenperiodictable:
    title: CSS Grid Periodic Table
    linktitle: Codepen Link
    linkaddress: https://codepen.io/rlahoda/full/QVxYoE/
    trackingaddress: codepenperiodictable
    githubaddress: https://github.com/rlahoda/css_grid_periodic_table
    githubtracking: codepenperiodictablecode
    width: normal
    paragraphs:
      - text: >
          My wife is a chemist and I used to work for a chemistry information company, so I felt inspired to use this as a basis for playing around with CSS Grid. So I built a representation of the Periodic Table of Elements laid out using CSS Grid. The table is generated through an AJAX call to a Github repo containing the raw information in JSON. Using Greensock Animations I set up a fade in upon loading of the table and also a fade and scaling effect on the elements.
    technology:
      - Javascript
      - Greensock
      - CssGrid
      - Codepen
  - reactcalendarclock:
    title: React-based Multilingual Calendar/Clock
    linktitle: reactcalendar.roblahoda.com/
    linkaddress: https://reactcalendar.roblahoda.com/
    trackingaddress: http://reactcalendar.roblahoda.com/?utm_source=github&utm_medium=github_pages&utm_campaign=github_projects&utm_content=projects
    githubaddress: https://github.com/rlahoda/Multilingual-Calendar-React
    githubtracking: https://github.com/rlahoda/Multilingual-Calendar-React
    width: normal
    paragraphs:
      - text: >
          After building my multilingual clock and calendar in vanilla Javascript, I decided to rebuild it in React. The app is visually identical to the Codepen version except that this one is built in React. For more information see the description below for the original project.
    technology:
      - React
      - Javascript
  - hia:
    title: Heritage Insurance Advisors
    linktitle: hia-oh.com
    linkaddress: http://hia-oh.com/?utm_source=github&utm_medium=github_pages&utm_campaign=github_projects&utm_content=projects
    trackingaddress: hia-oh.com
    githubaddress: https://github.com/rlahoda/hia-theme
    githubtracking: https://github.com/rlahoda/hia-theme
    width: med
    paragraphs:
      - text: >
          A local business contacted me with the request to build a website for them that could grow significantly in the future. After some discussion with them, we decided that Drupal 8 would be an ideal platform based on their needs and future growth plans. Their desires were fairly open-ended so I built the theme with maximum flexibility in mind.
      - text: >
          The theme is built with Paragraphs as the primary layout tool. The client wanted the site up quickly so I used the UIKit front-end framework as a starting point for the design. The site is fully responsive and contains a custom quote form based on the Webform module that uses a variety of logic to allow the user to request a quote for the various types of insurance that is offered by the company.
    technology:
      - Drupal8
      - Pantheon
      - UiKit
  - lglf:
    alert: "Please Note: This site describes my family's desire to move internationally. However, due to circumstances beyond our control, this is no longer our intent."
    title: Love God Love France
    linktitle: lovegodlovefrance.org
    linkaddress: https://www.lovegodlovefrance.org/?utm_source=github&utm_medium=github_pages&utm_campaign=github_projects&utm_content=projects
    trackingaddress: lovegodlovefrance.org
    githubaddress: https://github.com/rlahoda/lahodatheme
    githubtracking: https://github.com/rlahoda/lahodatheme
    width: normal
    paragraphs:
      - text: >
          Working on a personal project I built this site using Drupal 8. I wanted to have maximum editorial flexibility so I used Paragraphs for the primary layout basis. There are a number of different Paragraph types including one that generates an SVG pie chart based off the values supplied by the content item. The site also includes Mailchimp signup forms and a responsive design.
    technology:
      - Drupal8
      - Flexbox
      - Pantheon
  - codepencalendarclock:
    title: Multilingual Calendar/Clock with CSS Grid and Flexbox Fallback
    linktitle: Codepen Link
    linkaddress: https://codepen.io/rlahoda/pen/JaJNdW
    trackingaddress: codepencalendarclock
    githubaddress: https://github.com/rlahoda/multilingual-calendar
    githubtracking: codepencalendarclockcode
    width: wide
    paragraphs:
      - text: >
          When learning a new language one of the first things people learn are numbers and dates. As a way to help language students get used to reading numbers and dates in the language they want to learn, I created this multilingual clock and calendar. The app shows all the numbers both as numbers and written out. The user can see the current time and date as well as the next and previous days. There is a full calendar of the entire month with the days of the week and numbers for each of the days with different styles for the current day and weekends.
      - text: >
          The app is built in Javascript with a CSS Grid layout and a Flexbox fallback. The user can change the order of dates in the date view from Month/Day/Year to Day/Month/Year and they are able to change the week start date from Sunday to Monday. There is an API call to Github to get a JSON file containing all of the different languages (currently English, French, Spanish, and German).
    technology:
      - Javascript
      - CssGrid
      - Flexbox
      - Codepen
  - codepenflashcards:
    title: Flashcards
    linktitle: Codepen Link
    linkaddress: https://codepen.io/rlahoda/full/xVaWpd/
    trackingaddress: codepenflashcards
    width: med
    paragraphs:
      - text: >
          I've always been fascinated by the prospect of learning another language. For a few years I have been slowly learning French and I wanted a way to make flashcards that I could use to help learn the vocabulary. Of course, I didn't want to deal with paper flashcards, I wanted something electronic. That led me to start this project.
      - text: >
          The project is written in Javascript with a Flexbox layout and allows the user to enter in the 'front' and 'back' values for the cards they are creating, then hide what they entered and test themselves on the cards. Adding and removing the cards happens dynamically and the user can create as many cards as they want.
    technology:
      - Javascript
      - Flexbox
      - Codepen
  - roblahodamedia:
    title: Rob Lahoda Media
    linktitle: media.roblahoda.com
    linkaddress: https://media.roblahoda.com/?utm_source=github&utm_medium=github_pages&utm_campaign=github_projects&utm_content=projects
    trackingaddress: media.roblahoda.com
    githubaddress: https://github.com/rlahoda/roblahoda-media
    githubtracking: https://github.com/rlahoda/roblahoda-media
    width: normal
    paragraphs:
      - text: >
          For over 15 years I have been a multimedia producer. I love visual storytelling and have used photography, video production, graphic design, and more to tell many stories through personal and client-based projects. My experience has run the gamut from sports to nature, architecture to astronomy, portraits to journalism.
      - text: >
          As a way to showcase my work, I created this portfolio site using a custom Gulp workflow, SASS, Twig templating for automating much of the code, Flexbox layout, and a responsive design.
    technology:
      - Twig
      - Gulp
      - Sass
---
