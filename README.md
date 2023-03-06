# TUTORIAL 4

* *Date Created*: 04 MAR 2023
* *Last Modification Date*: 06 FEB 2023
* *Tutorial 4:
* *Created By: FAIZA UMATIYA
* *Deployed app link = 
* *Gitlab Link = 



# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


### Deployment

<!-- This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment) -->

I first created a simple react app having 3 page: LoginPage, ProfileListingPage and ProfileDetailPage which I pushed in on Gitlab. After uploading on GitLab, i created a new repository in GitHub to deploy in Netlify. After pushing the same react app on GitHub, I created account on Netlify [1]. The Netlify account was linked with the GitHub repository. After authorization is done, the application was deployed in a minute. Therefore, the simple react app was deployed on Netlify successfully.

# Built With

<!--- Provide a list of the frameworks used to build this application, your list should include the name of the framework used, the url where the framework is available for download and what the framework was used for, see the example below --->

* [Reactjs](https://reactjs.org/docs/create-a-new-react-app.html) - The web framework used
**

# Sources Used

As required by the tutorial submission requirement, we could use the boilerplate code for the purpose of fulfillment of tutorial.
All the files just consist of code from basic boilerplate code referenced from [2]. 

To make Login page along with style, i took reference from the [3] for easy building the login form along with its validation. On sending the POST request body data, user should be directed to Profile Listing Page using "window.location.href" [4] on successful login. In Profile listing page, we need to display the user details which will be fetched from API provided. I used "await fetch" [5] to display users fetched from the given API. Finally, I'm  rendering the fetched data as a list of items using the "map()" method on the "filteredUsers" array [6]. Further, on clicking the card grid of the user, i should be redirected to Profile Detail Page having user profile details accessed from external API [5]. Lastly I implemented search box on Profile Listing Page which would filter users based on firstname and lastname [7].

For styling, the user details should be displayed as a list/grid. I used card grid in list format using the CSS. For login page, I used [3] CSS to keep it minimalistic. For profile listing page and profile detail page, I used [8] [9] [10] CSS to display in card grid format.

# Acknowledgments

## References :

[1]	“Develop and deploy websites and apps in record time,” Netlify. [Online]. Available: https://www.netlify.com/. [Accessed: 17-Feb-2023].

[2] “Create a new react app,” Reactjs.org. [Online]. Available: https://reactjs.org/docs/create-a-new-react-app.html. [Accessed: 17-Feb-2023].

[3]	J. F. Costa, “How to create your first login page with HTML, CSS and JavaScript,” The Startup, 10-Dec-2019. [Online]. Available: https://medium.com/swlh/how-to-create-your-first-login-page-with-html-css-and-javascript-602dd71144f1. [Accessed: 02-Mar-2023].

[4]	All About Code, “How do you redirect to another page in Javascript?,” Medium, 13-May-2019. [Online]. Available: https://allaboutcode.medium.com/how-do-you-redirect-to-another-page-in-javascript-6c7524c1f88a. [Accessed: 02-Mar-2023].

[5]	D. Sharma, “Access data from an external API into a react component,” Pluralsight.com. [Online]. Available: https://www.pluralsight.com/guides/access-data-from-an-external-api-into-a-react-component. [Accessed: 03-Mar-2023].

[6]	G. Singhal, “How to use the map() function to export JavaScript in react,” Pluralsight.com. [Online]. Available: https://www.pluralsight.com/guides/how-to-use-the-map()-function-to-export-javascript-in-react. [Accessed: 03-Mar-2023].

[7] M. Gathoni, “How to filter search results while typing with React,” MUO, 23-Sep-2022. [Online]. Available: https://www.makeuseof.com/react-search-bar-filters-data-create/. [Accessed: 04-Mar-2023].

[8] S. Emmanuel, “How to search and filter components in React,” freecodecamp.org, 04-Jun-2021. [Online]. Available: https://www.freecodecamp.org/news/search-and-filter-component-in-reactjs/. [Accessed: 04-Mar-2023].

[9] “cards auto-fill align-items stretch (Interactive Example),” Quackit.com. [Online]. Available: https://www.quackit.com/html/html_editors/scratchpad/?example=/css/grid/examples/cards_auto-fill_align-items_stretch. [Accessed: 05-Mar-2023].

[10] Codepen.io. [Online]. Available: https://codepen.io/Spruce_khalifa/pen/GRrWjmRs. [Accessed: 06-Mar-2023].
 




