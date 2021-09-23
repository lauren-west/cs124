# Lab 1
##### Lucas Ewing and Lauren West

In this lab, we designed and implemented a simple interface for a mobile web app. This app manages a list of items the user desires to complete. 
## Design Decisions
Design decisions we made included using list items vs tiles and using pencil icon vs touch to edit. For the first option, the team decided to use list items, seeing that it would be easier for the user to scroll through the list on mobile. Also, since items are added sequentially and deleted when checked, it seemed that the list display would be more intuitive. 
The second design choice was much less clear--both choices had their pros and cons. Using a pencil icon to make edits would seemingly help a new user out, but touching a pencil icon was not very elegant. Using touch simplifies the mobile interface where space is a commodity, but it may not be very clear what the user should do. After User-Testing, we decided on touch to edit.
## Alternative Design
Originally we were considering creating a tile-based design where each task/list item was displayed as individual tiles, with a title and some alternative information below:
image.png

We decided against the tile design due to it being very cluttered compared to the single-line list design.
Secondly, we also considered splitting up our list items by the date they were due, a bit like a calendar, however, we found it too tedious for someone to scroll through their to-do list by dates - a task list is not the same as a calendar in our opinion and should remain separate:

 Our last alternative design prior to settling on our current one, we followed a standard simple list app with everything linearly lining up, and on the left side of the screen, we had different selections of lists/tasks in case someone wanted to group their To-Do's separately. We found this design to also be a bit too cluttered, so we decided to instead make the homepage a list of lists, and then within each list give the option to return to the homepage by swiping right or hitting an X button:


## User Testing
It was mentioned in Design Designs that we used User Testing to decide on a pencil icon vs touch to edit. We set up an experiment and asked User A to comment on the design with the pencil feature and a design that would be touch to edit. User A said that the touch to edit was clear enough, and made for better aesthetics. We also took this test to User B, who shared similar remarks in favor of touch to edit.
## Final Design
#### Implemented Features:
- Created an item named "Buy new John Grisham book" from a previously empty list
- In a non-empty list, created an item named "Eat Lunch"
- Marked the item named "Call Mom" completed (assumes there exists an item named "Call Mom").
- Renamed the item "Text John" to "Text John about bank statements" (assumes there exists an item named "Text John").
- Showed only uncompleted items.
- Deleted all completed items.
- ✨CSS Magic ✨
## Challenges We Faced
## What we are proud of