# Lab 1
##### Lucas Ewing and Lauren West

In this lab, we designed and implemented a simple interface for a mobile web app. This app manages a list of items the user desires to complete. 
## Design Decisions
Design decisions we made included: using list items vs tiles and using pencil icon vs touch to edit. For the first option, the team decided to use list items, seeing that it would be easier for the user to scroll through the list on mobile. Also, since items are added sequentially and deleted when checked, it seemed that the list display would be more intuitive. 
The second design choice was much less clear--both choices had their pros and cons. Using a pencil icon to make edits would seemingly help a new user, but touching a pencil icon was not very elegant. Using touch simplifies the mobile interface where space is a commodity, but it may not be very clear what the user should do. After User-Testing, we decided on touch-to-edit.
We decided to go for a simplistic design. In minimalist spirit, we eliminated the border around our header after receiving user feedback that it looked out of place. Our goal was to have easily recognizable elements that reduced clutter for greater user experiences. 

## Alternative Design
Originally we were considering creating a tile-based design where each task/list item was displayed as individual tiles, with a title and some alternative information below:
image.png

![](https://user-images.githubusercontent.com/54875885/134599155-7cfdb068-7723-4ee4-8caf-c17f2df2b9c7.png)

We decided against the tile design due to it being very cluttered compared to the single-line list design.
Secondly, we also considered splitting up our list items by the date they were due, a bit like a calendar, however, we found it too tedious for someone to scroll through their to-do list by dates - a task list is not the same as a calendar in our opinion and should remain separate:

![](https://user-images.githubusercontent.com/54875885/134599173-99db41f8-2498-42b8-ad3c-f612856261a5.png)


 Our last alternative design prior to settling on our current one, we followed a standard simple list app with everything linearly lining up, and on the left side of the screen, we had different selections of lists/tasks in case someone wanted to group their To-Do's separately. We found this design to also be a bit too cluttered, so we decided to instead make the homepage a list of lists, and then within each list give the option to return to the homepage by swiping right or hitting an X button:

![](https://user-images.githubusercontent.com/54875885/134599183-414a0b2f-2302-4f1f-ae8e-d0d829456922.png)


## User Testing
It was mentioned in Design Designs that we used User Testing to decide on a pencil icon vs touch to edit. We set up an experiment and asked User A to comment on the design with the pencil feature and a design that would be touch to edit. User A said that the touch to edit was clear enough, and made for better aesthetics. We also took this test to User B, who shared similar remarks in favor of touch to edit. User C reminded us that we did not have a list box on our main page, so we made sure to add that in our final design. Lastly, User C remarked on our radio buttons and requested them to be changed to checkboxes which we did in our final design.
![)](https://user-images.githubusercontent.com/54875885/134599216-2724e8e7-9b9a-4954-bc96-4c50a109f02f.png)

## Final Design
#### Implemented Features:
- Created an item named "Buy new John Grisham book" from a previously empty list
- In a non-empty list, created an item named "Eat Lunch"
- Marked the item named "Call Mom" completed (assumes there exists an item named "Call Mom").
- Renamed the item "Text John" to "Text John about bank statements" (assumes there exists an item named "Text John").
- Showed only uncompleted items.*
- Deleted all completed items.*
- ✨CSS Magic ✨

* Our checked items are assumed to be automatically removed seconds after they have been checked, this is demonstrated between pages 6 and 7, where the checked "call mom" disappears.
## Challenges We Faced
We often found ourselves struggling to meet every expectation while simultaneously keeping our application as sleek-looking as possible. For example, we wanted a way to edit names that were both intuitive and easy, while also not cluttering the screen. At first, we had a pen in the corner of the screen that we wanted users to click on, however, through user feedback we were told the pencil icon was bothersome. The user-preferred clicking on the name to edit. This was a contemplated change to make for us, as we found that without the pencil icon there was no obvious indication for editing; however as stated by our user testers, our technique is common enough that most users would understand it intuitively anyways. Something we learned through lab 1 was that users already have a lot of experience with mobile applications, allowing us to create simpler design decisions such as clicking to edit the task names.
## What we are proud of
We are very proud of our simple aesthetic. From the start, we decided to apply a simple design to our app - black, white, and blue - with straightforward tasks. It is oddly difficult however to find a simple design that is simultaneously good-looking and usable, which is why we had many iterations, however, our final design is better than we originally imagined it could be.
