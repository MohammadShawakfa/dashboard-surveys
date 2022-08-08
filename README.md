# Task1Restruct

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.0.0.

#This website was part of my apprenticeship, the outcomes were:
o Dealing with angular components, material components, and structuring the project.
o Used Angular directives to show/hide elements, display lists, and add behavior to things.
o Add editable fields to update a model with two-way data binding/format data with pipes.
o Bind component methods to user events, like keystrokes and clicks.
o Use routing to navigate among different views and their components.
o Dealing with services / HTTP REQUESTS / JSON file.


it was divided as followed:
TASK #1: RENDERING CARDS:
o The Survey cards are displayed depending on the data received from the JSON (dynamic):

The card will display the following, using Angular Directives and string interpolation, data binding:
▪ Survey Name.
▪ Period (or periods).
• Start date and end date (Format the date using angular pipes).
• If multiple periods exist, you will need to display them in a dropdown list.
▪ Custom icon and color for each state (Published / Expired / Closed.
added Missing tabs on top (Published / Expired / Closed) (filtering is task5)
o Used Angular Material Tabs.
o added some color indications to show the difference between [Published / Expired / Closed]
surveys, and to show the active one from the non-active.
o Used font awesome for the icons.

TASK #1.2 (Enhancements): HTTP REQUEST
- GET and UPDATE the JSON data using HTTP requests ...
- Implemented a service to get the JSON data
- Used https://mocki.io/ to create an API

TASK #2: SELECTING CARDS
- Select one card only.
o If another card is selected the previous card will be deselected.
- Added an indication to show the selected card (using conditions for different classes or styles).
- The Selected card will be sent to a dialog in another task. (for now console.log it)

TASK #3: ACTIVATE GO TO DASHBOARD
- This button will be disabled unless a survey is selected
Used the following material components:
o Dialog (to display the data of the chosen survey when clicking on go to dashboard)
▪ Chosen Survey (By clicking on the cards)
▪ Open Dialog and edit the survey name
▪ New data will be saved (update the survey name)
▪ The new name should be at least 4 characters, and only English letters and numbers.


TASK #5: TOGGLE LIST VIEW AND GRID VIEW
- View the surveys and periods in a mat-table
- Applied searching / filtering / pagination / sorting

TASK #5: FILTERING DATA
~ Explored and learned more about pipes and services.
- Filtered by survey state (using tabs)
o (All Surveys / Published / Expired / Closed)
Filter by survey name (using a search input field)
Filter by period (date input).
The filters work altogether, meaning that if you filter by some date and switch the tabs to a different
category, the data will be filtered with both the date and the category filter

TASK #6: ADD SOME DATE VALIDATION
The end date should be after the start Date

TASK #7: ACCESSIBILITY
- Large Text Toggle (2 Modes, Large Text / Normal Text).
- Dark Theme Toggle.
- The state was stored using local storage.

TASK #8: INTERNATIONALIZATION AND RTL SUPPORT
used ngx translate and translated the website with giving the option to toggle between English and Arabic.
also, the text changes from LTR to RTL depending on the chosen language.



#NOTE: if you face this error "Error: Type TranslateModule does not have 'ɵmod' property"
you can try these solutions:

1-npm ci
2-Add in scripts: {
    "postinstall": "ngcc"
}  " Located in (package.json)

*Remember to turn off the server and re-serve the project after making these changes.
