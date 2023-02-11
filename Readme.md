Frontend 3 Contest 1
The first step in fetching data from an API using .then is to make a GET request to the API endpoint. In this case, the API endpoint is https://dummyjson.com/products

The API will return an array of products, where each product contains information such as name, id, image, price, discount, and stock.

The next step is to render all of the products in the form of a flexwrap, as shown in the UI. The UI can be found in the Figma file located at the link: Figma Link: https://www.figma.com/file/Fo1jvXO3ztetyRXmuAtnBo/Untitled?node-id=0%3A3&t=RoAA3alsZd6anSuC-1

To handle the promise returned by the GET request, we will use the .then method. This method allows us to specify a callback function that will be executed once the promise is resolved. This callback function will contain the code for rendering the products in the form of a flexwrap.

The .then method is an important part of working with promises in JavaScript. Promises are objects that represent the eventual outcome of an asynchronous operation. By using .then, we can ensure that our code will only be executed once the promise has been resolved and the data from the API has been retrieved.


Evaluation Criteria:
API Request: *15 marks
Correct API endpoint used
Proper GET request made
Data Handling: 25 marks
Proper handling of promise using .then method
Data correctly extracted from API response
UI Rendering: 40 marks
Products displayed in flexwrap format as shown in the UI
All product information (name, id, image, price, discount, stock) displayed correctly
Code Quality: 10 marks
Proper coding conventions used
Code is well-organized and easy to understand
Adequate comments provided
Deployed : 10 Marks