## Notes

1. Even if it was a small code base, I have made folder structure keeping extensibility to a large code base in mind. Segregation of components and reusable hooks has been done keeping the same thing in mind.

2. Unit testing is done for most of the components and have tried to cover as many cases as possible, it is missing cleaning of mock data to separate files and some complex test cases. Where only structural components snapshot testing is used.

3. Comments has not been added, which I like to do in the code for future reference and readability in large code bases, to save the time. There are some typos in the commit statements and might be in var names.
4. Use of Redux and redux patter is avoided to save time and complete the project in time.
5. We prioritized accessibility by using semantic elements for headers, main content, and other native elements, reducing the use of generic divs. Did not have tools to check with screen readers but have checked the score in the lighthouse which gives good results, complain about the contrast of the test against the background which has taken liberty here for this small app.

    ![alt text](image.png)

## Execute following commands in sequence to run the application

-   npm install
-   npm run json-server (port 8080 and endpoint http://localhost:8080/hotels)
-   npm run dev (app will run on http://localhost:5173)

## Following command to run test cases

-   npm run test

## Additional libraries and their uses

-   Vite library is used to create the project's initial setup
-   json-server : To run light weight server for named end points in the data/data.json (I have changed an object name in the given data file for a better end point name)
-   styled-components: For easier styling based on flex box and closer to JSX syntax
-   fontAwesom: used for icons used in ratings
-   vitest, react testing library, and other related libraries: to enable unit testing
