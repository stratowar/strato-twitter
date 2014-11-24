24.11.
Improvements made to the PhpTwitterFinal project:
-trim function has been added to the new tweet form,
-a warning has been added when you are about to delete a tweet,
-the new tweet form widens when user wants to type into it.

Also, the JavaTwitter project is improved, and it now has the same functionality and options as the PhpTwitterFinal project. In this project I have applied a Route option of AngularJS.

--------------------------------------------------------------------------------------------------------------------------------

20.11.
I have fixed the error that was appearing in the User page, before user data was loaded. This was fixed by simply adding an if condition to the links filter.
Also, I have added an alert which will trigger if you try to send an empty tweet.
And the background is changed.

--------------------------------------------------------------------------------------------------------------------------------

18.11.
I have added the final version of the PhpTwitter project (PhpTwitterFinal inside the TwitterAPI folder, on the TwitterAPI branch) . In this version I have improved the presentation of tweets, added delete option, improved the User page, and added the Following (trending) page. There is an option for viewing the bigger picture of every user which has posted the tweet. Also you can post a tweet with the hashtag, @, and with Serbian letters. The links filter from TwitterWithoutPHP project is also included. Also, now you can see the remaining number of characters while typing the new tweet.

--------------------------------------------------------------------------------------------------------------------------------

13.11.
I have made one new filter in app.js file, called "links". Its purpose is to find the words in tweets beginning with @, or # and to replace that word with a clickable link.
Also, I had to add the "linky" filter from the ngSanitize module, to make plain text seen as links.

--------------------------------------------------------------------------------------------------------------------------------

04.11.
Added one new project (JavaTwitter). It is based on TwitterWithoutPHP project, but it is using JSP to implement and open index page of the project. I have made new library, called HTML, and used it to make coding on the JSP page easier.

Updated PhpTwitter project. Now you can post a tweet too.

--------------------------------------------------------------------------------------------------------------------------------

31.10.
I have added a new project (TwitterWithoutPHP). In this project you are authorized via Oauth.io,
you connect to the Twitter, gain a tokken, and after that you can view my timeline, post a new tweet, and delete tweets.

--------------------------------------------------------------------------------------------------------------------------------

24.10.
I have added updated version of my project (PhpTwitter). Now you can see tweets, and post a new tweet.
For all this to work, I have used php, alongside with AngularJS and Bootstrap.

(Please, change index file to Main.html)

In the next version I will try to accomplish this only with JavaScript.

--------------------------------------------------------------------------------------------------------------------------------

I have added some projects involving AngularJS and Twitter API. These are the projects that I am exploring, and maybe I will implement some parts of them into my project.


