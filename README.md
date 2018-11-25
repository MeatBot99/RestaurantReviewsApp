# Feat: Restaurant Reviews: An app about restaurants
This is the final project for the *Udacity Front End Nanodegree* program. The Restaurant
Reviews app displays a variety of restaurants in New York City and information about
each one. The app is responsive and meets accessibility standards and features
offline functionality once the files have been cached.

# To Run This Project
Download or clone the project files and run a python server from the terminal.
The project worked for me by using python to serve the files.

[Python](https://www.python.org/) is useful for a variety of things but in this
case it runs file service.

[Git Bash](https://gitforwindows.org/) is an easy to use terminal interface that
has colored highlighting of text that helps in navigation compared to *vanilla*
terminal interfaces or command prompts.

Once the requisite programs have been installed on your machine and you have some
familiarity with how to use them, load up the terminal.
Change the directory to where ever you have the files stored and input
"python -m http.server 8000". Once you are serving files, open a browser and
navigate to "localhost:8000" and this wonderful project should be running and
ready for you to use.

# Directions
The website contains several different types of restaurant cuisines. Each restaurant
has a picture and general information about it on the landing page and a map marker
displaying where it is located. There are filtering options available to narrow
your search by cuisine and/or neighborhood. Navigating to a selection will open
the second page that contains more details and reviews about your selection and
several options of how to navigate back to the home page.

## Dependencies

 - openstreetmap.org
 - mapbox.com
 - leaflet (unpkg.com)
 - Google APIs
 - creativecommons.org
 - Python (to serve files)
 - Use in **not** private mode to see *offline* functionality.
