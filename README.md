# film-finder-final
Introduction
You are going to make a film finder! This project will give you an overview of the variety of movies. For now, you don't need to worry too much about the database(yet)! This is already made for you. There are a collection of movies in the database that can be filtered by the user through filter buttons. The picked movie can link the user to the IMDB

Requirements
Your project should satisfy the following:

As a user, I want to see the available movies as posters from the movie.
Check the data: There is a link to the poster for each movie in the database.
As a user, I want to filter out the movies with 5 filters in a form of radio buttons. The filter functions will be described as follows.
As a user, I can only filter one at a time.
The current filter will switch to the filter that has been clicked on(radio button). Unless it's a checkbox then there can be more filters selected at the same time.
Category 1: As a user, I want to filter all new movies: from the last years, this means 2014 and newer.

Category 2: As a user, I want to filter movies with "Avenger" in the title.

Category 3: As a user, I want to filter movies with "X-Men" in the title.

Category 4: As a user, I want to filter movies with "Princess" in the title.

Category 5: As a user, I want to filter movies with "Batman" in the title.

Use array methods for the filters.
check if a string is already in another string with .includes()` method.
The last 4 filters look very alike, Do you need multiple functions for that? Or can it be solved with one function?
As a user, I can click on a poster from the movie, which will link me to their IMDB page.
IMDB works with an id for each film/series in the URL. See for example: https://www.imdb.com/title/tt0944947/. Edit The URL from the IMDB and paste the correct ID behind it.
Design
First focus on the functionality and JavaScript, before you start with the styling. 

Bonus Requirements
As a user, I can type the title of a movie into an input field, when I press enter it will show me the films filtered on the title that has been filled in.
Tips & Tricks
Wait till the page is loaded before you do something with JavaScript. Revisit the lesson on this subject if you need a refresher: "Changing the DOM, wait for the page to load".

Styling suggestions:

You may style your page with CSS-grid.

You may style your page with Flex-box.

You will probably need a switch statement. Check the docs
