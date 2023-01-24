# Portfolio 2.0 Detailed Plan
*draft:* [Updated: 25/01/23] \
\
**Objective:** The aim for this document is to outline a detailed plan for the design, construction and deployment of 
Portfolio 2.0 website. It will set out requirement and ideas, alongside analysis on what is required to implement each 
step. This document is the rule of law, everything in this document is to be consider like law and applied directly into
the project in one way or another. This document is the MVP law book, everything we need to ensure the project reaches
MVP as defined in another section. Once we have ticked the definition of done at the end, then only then can we work
away from this document. It is designed to ensure we reach the definition of done and have something amazing to show 
prospective employers. 

**Scope:** Design, Planning, Construction, Deployment ~~and Maintenance~~ of Portfolio 2.0 project. Overlooks the entire 
process for building Project Portfolio 2.0 and is the law from start to the definition of done. Maintenance will not be
covered in this document, due to the nature of the project. Once deployed, the website will not need further work.
Only exception is adding new projects to the website, see the related section for more.

## Design
Designing of this project has taken place on different mediums, such as whiteboards and FreeForm App. These will be
included in the project folder, not within this document. Refer to these designs for any visual UI work that is done on
the project. Designs are allowed to change but must stick to the overall theme, feel, and expectations.

## Plan

So far there is a detailed visual design, that envisions how the website should look as a minimal viable production (MVP).
These will not be explored here in this document, however it is worth mentioning that any design decisions should be 
referred to these initials designs. These are found at current on the FreeForm app on Apple devices.

### MVP Features

In order for the product to be considered an MVP, the following functional and design requirements must be met:

- [ ] Must be a responsive design which takes into account common screen sizes (Phones and Computers)
- [ ] Must be a clean, professional and modern design that compliments the content.
- [ ] Each page must have a sufficient navigation pane, allowing the user to travel anywhere within the site with ease.
- [ ] The home page must be eye catching and draw the user into the website more.
- [ ] There must be a way in which a user can add their name to the website in order to personalise it.
- [ ] There must be a personalised greeting on the home page, depending on the time and name of the user.
- [ ] Any information entered by the user must be persistent and remain so until the session is ended.
- [ ] There is to be no Database or Server connected to the site, all transactions occur on the browser.
- [ ] There must be a way for a user to learn about the person who the Portfolio belongs to.
- [ ] There must be a way for a user to explore the various different website and projects made by the maker.
- [ ] There must be links and interactivity between the user and the projects
- [ ] The website must look comfortable and not overloaded with information
- [ ] A user should be able to remove their name from the website and have it reflected and deleted from the session.
- [ ] A user should be able to go from one section of the page, to another with ease - without needing to scroll
- [ ] A user should always be easily able to return to the homepage.
- [ ] If the user enters a new period of the day, whilst on the website, so too does the greeting change.

### Technical Requirements

It is important that we set out the technical means on which we wish to base the website on and how we would implement 
certain features.

In order to achieve the MVP requirements, the following technologies will need be used:

 
Languages:
- [ ] HTML
- [ ] CSS
- [ ] JavaScript (libraries to be determined)
  - [ ] React (Dynamic UI)
  - [ ] Vue (transitions and animations)
  - [ ] Angular *potentially*
- [ ] C# (for server or extra logic paired with JavaScript)
  - [ ] Blazor

Methods:
- [ ] Get local time of user machine (checking 1-minute intervals for changes)
- [ ] Updating greetings with new information whilst user is on the website.
- [ ] Store and retrieve session objects in the users browser

### Learning:

JavaScript is still fairly new to me, so I have to learn and use trial and error for things to work. I have never 
used any library with JavaScript, so we should start there.
- [ ] Learn basics of JavaScript
- [ ] Learn basics of React
- [ ] Learn basics of Vue

Once I have learned the basics with the libraries, then I can get to work building the functionality of the website.

Next up is C#:
- [ ] Learn Blazor
- [ ] Ensure I know the basics of C#

I have used a fair amount of C# so the biggest issue is learning Blazor, which may help me to build a more functional ]
website.

HTML and CSS is a trial and error thing, I know them well enough that I can learn as I go.

## Development (Construct)
It is all well and good to have a detailed plan for the mvp and technical requirements for a product, but how do we 
proceed? We need a plan to implement everything above and how we're going to do it practically.

### The Path:

We need to stick to the path, with some room to be flexible - but let's stay on the path as much as possible.

1. Develop a code structure, plan dependencies etc.
2. Learn the skills required as defined in the learning section
3. Create repo on GitHub (each feature must have a new fork)
4. Code HTML and CSS
5. Code C#
6. Code JavaScript
7. Test
8. Deploy

The first and main priority is to build the Home Page, once this has been completed then move onto the next page.

### GitHub
GitHub will be the main repository for this project and will act as a host for all websites involved in this project.
To ensure that GitHub is used properly and all changes track the following must occur:

- All features must be in their own fork, not feature is to be added directly to main.
- The website, once deployed must not suffer any downtime - thus always be able to back up to a previous version.
- Once a feature is proven and won't break the website and isn't left incomplete, then merge the changes.
- Use all knowledge learned from COMPSCI 235 for implement GitHub correctly.
- Any use of GitHub for this project must adhere to GitHub's terms and expectations, along side industry best practice.
- Commit regular during sprints.

### Test Cases
If we want a functional website that can handle anything we throw at it, we must test our code. As we are not using
a database for this website, then our test cases are simple. We need to test every possible user input and 
ensure that the website handles it the way we want it to. Test cases will need to be made prior to coding.

Firstly we need to develop classes and dependencies, how is our code going to interact with each other?
Then we need to write test cases ensuring that for any scenario we can think of, the code will always behave how we want
it to. Writing test cases prior to code helps us to understand exactly what we want our code to do.

### Sprints
Sprints will occur when a feature or epic is required to be released. A sprint will be defined as 2 weeks and with
flexible timings due to the nature of the project and expectations. For a sprint to occur the following conditions
must be met:

- [ ] A sprint must revolve around an epic or multiple user stories
- [ ] The objective and result of a sprint will be clearly defined prior.
- [ ] A sprint will occur on a separate branch to the main repo branch of the project
- [ ] Once a sprint has finished, sufficient testing must be done prior to merging the sprint.
- [ ] A sprint does not have to be long, but it has to be consistent.

## Final Product (Deploy)

A final product will be final and ready to be shown when it hits the following criteria (not an exhausted list).

### Definition of Done:
- [ ] The website is of professional and attractive quality
- [ ] The website successfully implements all epics and user stories outlined during planning
- [ ] The website successfully implements all MVP features as defined in this document.
- [ ] The GitHub repository was used correctly as defined in the GitHub section of this document.
- [ ] All technical and functional requirements were fulfilled.
- [ ] Everything specified in this document has been fulfilled.
- [ ] There are no errors and the website passes all tests.
- [ ] The website is something I can be proud of.
- [ ] Ensure Portfolio 1.0 is removed from **jaredmcdowall.me** and added to the archive section of Portfolio 2.0
- [ ] Once all the above has been reached, deploy the website to **jaredmcdowall.me**

Once the definition of done has been reached and validated, then this document has served its purpose. Once definition 
of done is reached, then this document will act merely as a guide for future development. For any future projects, a 
new document will be made - with this one being a template.

## Maintain

The maintenance of the project is important, and so is continuation of the development of new features that will make the 
website better. However, maintenance is not within the scope of this document, as Portfolio 2.0 is not a feature rich
website, we are not required to define what comes next. For future projects, we will need to clearly define how to 
continue the project beyond the scope initially planned for. However, the MVP and definition of done is sufficient for 
this project. As explained before, it is important to keep the website online at all times, as it is a key website. Once
we have achieved definition of done, it is likely that the website will not need much more work and thus will not be
required by this document.

In saying this, each time a new website comes along - it is important that the new website is reflected in Portfolio 2.0.
This will be done by simply adding a new item within the projects mechanism and thus will not affect the running of the
website and will not need any work. Ensure each entry is adding respectfully and no code is changed beyond that scope.