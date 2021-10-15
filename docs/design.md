# Lab 1
##### Lucas Ewing and Lauren West

In this lab, we designed and implemented a simple interface for a mobile web app. This app manages a list of items the user desires to complete. Our web app is written in React and has full functionality. 

## Design Decisions
Design decisions we made included: using list items vs tiles and using pencil icon vs touch to edit. For the first option, the team decided to use list items, seeing that it would be easier for the user to scroll through the list on mobile. Also, since items are added sequentially and deleted when checked, it seemed that the list display would be more intuitive. 
The second design choice was much less clear--both choices had their pros and cons. Using a pencil icon to make edits would seemingly help a new user, but touching a pencil icon was not very elegant. Using touch simplifies the mobile interface where space is a commodity, but it may not be very clear what the user should do. At first, we decided on touch-to-edit, however further user testing changed our minds and we brought back the pencil-edit icon. The main reason was due to the difficult distinction between clicking to enter a list versus editing its name, and thus in order to avoid confusion we used the pencil-edit icon.

We decided to go for a simplistic design. In minimalist spirit, we eliminated the border around our header after receiving user feedback that it looked out of place. Our goal was to have easily recognizable elements that reduced clutter for greater user experiences. 

Our updated minimalist deisgn:

![image](https://user-images.githubusercontent.com/54875885/137419050-5f976fed-ed06-4251-a0d0-820cf5e0f74d.png)


We also made a decision about how a user would delete lists and tasks. Initially, we planned to make our delete button within our edit pop-up. This was in an effort to make sure that the user doesn't unintentionally delete an item. However, User A voiced the concern that it may be too difficult for them to find the delete. We determined that deleting a list or task on our mobile site was a low-impact, albeit destructive, action. For those reasons, we decided to change our design, creating a visible delete button for each list and task.

Our original design thought for delete/edit:

![image](https://user-images.githubusercontent.com/54875885/137418892-13c672db-1a76-4292-84d4-da61c694c726.png)

Our final design for delete/edit:

![image](https://user-images.githubusercontent.com/54875885/137418905-37a725ee-dd0b-4fcc-ba8b-7cf074791331.png)



##Include images/drawings of delete button in both ways

## Walkthrough

We are currently in the homepage of our site. From here, we can click on various lists. The default lists we have in our submission are Todo and Task. Notice that on this page, we can add more lists, and we can edit the names and delete current lists. In our walkthrough, we ask you to click on the Todo list next.

![walk1](https://user-images.githubusercontent.com/54875885/137417697-55486e01-4e88-4579-bc58-d1b738acc8b4.jpg)

Now, we are in the Todo list. Try to click on the checkbox to complete "Order sd card on Amazon." See the task move to the completed section. 
![walk2](https://user-images.githubusercontent.com/54875885/137417714-9bdeb334-d3c4-4147-8276-f1c7fa43a7f7.jpg)

Try clicking on the edit button next to Call Mom. Notice that the task we are editing shows up automatically in the textbox. 
![walk3](https://user-images.githubusercontent.com/54875885/137417723-d04da98e-c289-4412-8daf-303feabfc6f3.jpg)

Try changing the name to "Call Mom tomorrow," and click the "Edit Task Button" to confirm your changes. 
![walk4](https://user-images.githubusercontent.com/54875885/137417753-3867a973-92a8-455e-87ce-9c9272ac84f0.jpg)

Please delete the "Text John" task. See that the task is now gone!
![walk5](https://user-images.githubusercontent.com/54875885/137417766-317154dc-cd94-4175-898e-a91575567db3.jpg)

If you would like, go back, and click on the "Tasks" lists, or even try adding your own lists. Title it whatever you would like. Continue playing around with the application in anyway you see fit.
![Walk6](https://user-images.githubusercontent.com/54875885/137417773-b5f92da9-0f41-49e0-a1f9-f228a7d575c5.jpg)

## Alternative Design
Originally we were considering creating a tile-based design where each task/list item was displayed as individual tiles, with a title and some alternative information below:
image.png

![](https://user-images.githubusercontent.com/54875885/134599155-7cfdb068-7723-4ee4-8caf-c17f2df2b9c7.png)

We decided against the tile design due to it being very cluttered compared to the single-line list design.
Secondly, we also considered splitting up our list items by the date they were due, a bit like a calendar, however, we found it too tedious for someone to scroll through their to-do list by dates - a task list is not the same as a calendar in our opinion and should remain separate:

![](https://user-images.githubusercontent.com/54875885/134599173-99db41f8-2498-42b8-ad3c-f612856261a5.png)

 Another alternative design we had followed a standard simple list app with everything linearly lining up, and on the left side of the screen, we had different selections of lists/tasks in case someone wanted to group their To-Do's separately. We found this design to also be a bit too cluttered, so we decided to instead make the homepage a list of lists, and then within each list give the option to return to the homepage by swiping right or hitting an X button:

![](https://user-images.githubusercontent.com/54875885/134599183-414a0b2f-2302-4f1f-ae8e-d0d829456922.png)

Our original final design prior to Lab 2 incorporated all our user testing feedback from Lab 1, and we went for a simple list design, where editing the text is done via clicking directly on it, and swiping to the right brings back the user to the home page. We removed all clutter that was not explicitly needed: 

![](https://user-images.githubusercontent.com/54875885/134609943-90b7deb8-aff7-428f-bb2e-06d6730671dc.jpg)

![image](https://user-images.githubusercontent.com/54875885/137417522-c6a2440b-9775-4cdc-984f-0cce7e0b5117.png)

Lastly, our final design for Lab 2 looked very similar to our Lab 1 design, however we decided to bring back the pencil-edit icon for editing names of lists/tasks and added a delete button for each list/task as seen above. We reverted this change due to user-feedback that suggested that clicking and holding distinction between entering a list and editing a list name was too subtle. Further, to go back from a list into the larger list collection we added a back button in the top left. We chose to add a back button rather than simply have a swipe feature again due to user-feedback requesting a more obvious approach. Further, when adding a list/task we created a prompt feature that allows for user input and the option to cancel the addition of a new list/task.

## User Testing
It was mentioned in Design Designs that we used User Testing to decide on a pencil icon vs touch to edit. We set up an experiment and asked User A to comment on the design with the pencil feature and a design that would be touch to edit. User A said that the touch to edit was clear enough, and made for better aesthetics. We also took this test to User B, who shared similar remarks in favor of touch to edit. User C reminded us that we did not have a list box on our main page, so we made sure to add that in our final design. Lastly, User C remarked on our radio buttons and requested them to be changed to checkboxes which we did in our final design.
![)](https://user-images.githubusercontent.com/54875885/134599216-2724e8e7-9b9a-4954-bc96-4c50a109f02f.png)

For our Lab 2 user-testing we received the following feedback: 
- User A stated that every item was too large, we were requested to make everything visually smaller.
- User C was confused by the method of swiping left to go back a page, and requested a back button.
- All users requested an edit icon as compared to a hold to edit list/task name feature.


## Final Design
### Implemented Features:
#### LAB 1
- Created an item named "Buy new John Grisham book" from a previously empty list
- In a non-empty list, created an item named "Eat Lunch"
- Marked the item named "Call Mom" completed (assumes there exists an item named "Call Mom").
- Renamed the item "Text John" to "Text John about bank statements" (assumes there exists an item named "Text John").
- Showed only uncompleted items.*
- Deleted all completed items.*
- ✨CSS Magic ✨

#### LAB 2
- Added a prompt - used for "Add List", "Add Task", "Edit List", and "Edit Task" features.
- Created a pencil-edit icon, upon click prompts user to edit the element.
- Added a delete button next to List and Task elements
- Added a back button to allow users to go back a page.
- Completed tasks go down to a completed task section.


## Challenges We Faced
#### LAB 1
We often found ourselves struggling to meet every expectation while simultaneously keeping our application as sleek-looking as possible. For example, we wanted a way to edit names that were both intuitive and easy, while also not cluttering the screen. At first, we had a pen in the corner of the screen that we wanted users to click on, however, through user feedback we were told the pencil icon was bothersome. The user-preferred clicking on the name to edit. This was a contemplated change to make for us, as we found that without the pencil icon there was no obvious indication for editing; however as stated by our user testers, our technique is common enough that most users would understand it intuitively anyways. Something we learned through lab 1 was that users already have a lot of experience with mobile applications, allowing us to create simpler design decisions such as clicking to edit the task names.

#### LAB 2
Our main priority when porting our code to react involved avoiding repetitive code and sloppy implementation methods. We carefully thought through what our components should be, and came to Office Hours to improve upon our design. We also struggled with finding the most efficient way to generically write our pop-up -- we wanted to reuse it to both edit and add lists and tasks. At first, we were unsure about how to accomplish this. In the end, it involved learning about how to passing props (specific items with good names) and using state in a meaningful way in React. 
We struggled with finding the most efficient way to generically input code such as our prompt feature, and applying it to multiple similar but uniquely different elements. Specifically, we had to refactor our code multiple times in order to make our implementation simple yet effective, covering both the edit list/task feature and the add list/task feature. This took multiple iterations but we learned through the process that repeated drafts and restructuring of code tends to clear a lot of bugs and mistakes up, so while it was time consuming and challenging we are happy to have gone through it.

## What we are proud of
#### Lab 1
We are very proud of our simple aesthetic. From the start, we decided to apply a simple design to our app - black, white, and blue - with straightforward tasks. It is oddly difficult however to find a simple design that is simultaneously good-looking and usable, which is why we had many iterations, however, our final design is better than we originally imagined it could be. 
#### Lab 2
We are very proud of the working functionality. At first, we had deleted items from our list by indexing by ids; however, when we had missing ids, we were indexing incorrectly (because we started at zero, even when the zeroth element had been deleted). This caused various issues, such as the next item in the list appearing as completed. To fix this, we stopped indexing by ids, instead, we filtered out the target list or list item by their id. This fixed our issue, and having our deleting function as desired is something we are proud of.