# Coding Challenge 10
# Customer Purchase Orders

This project involves creating a web application that loads and displays purchase order data from a CSV file using D3.js. Each data entry will dynamically generate an `<li>` element that details customer names, order IDs, and purchase amounts.

## Tasks
-Create an HTML fle and name it `index.html`, include the D3.js library in the `<head>` section of HTML file, create JavaScript file named `example.js` to implement logic for data loading and display.
-Implement function to load data from CSV file named `purchase_orders.csv`, located in a `data` directory at the root of project, after this data is loaded, dynamically create and append an `<li>` element for each purchase order within an `<ul>` in the body of HTML document.
-Ensure CSV file is correctly formatted with headers for `customerName`, `orderId`, and `purchaseAmount`.
-Use `d3.dsv` to fetch data from the CSV file accurately.