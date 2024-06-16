# Car Leasing - React
This is a ReactTS web page that can calculate the leasing of a car based on its type (brand new or used), the lease period (in months),
the car's value and down payment (in %). This project was written as a solution to the Java & React Internship 2024 assignment
at Prime Holding JSC.

## Solution
The whole web page is made of a heading, an input div and an output div. 

The input div plays the role of a form that takes the user input required for the calculation. It uses the grid system to display 
the `CalcInputItem`s. A `CalcInputItem` is used to display a div, containing one or more given input nodes and a label that is 
generated based on given input id and label text. This component is used to easily wrap the inputs and their label in a single div 
for easier manipulation by the grid system. The component offers taking more than one inputs for cases when, for example, you have
a text input and want to connect it with a range slider. This way the text input and the range slider will be in the same div and
will not be displaced by the grid system.

The output div simply displays the calculation results and, just like the input div, it uses grid for displaying the output texts.
All calculations are done automatically after every change in any of the input values. However, if any of the input values is
invalid, the calculation will not be done! This approach allows the user to easily type the number they want over the
already written one, since the text inputs accept numbers smaller than the allowed range.

The design of the web page follows the design from the screenshots from the assignment! Below you can see my implementation of 
the assignment's design.

## Screenshots
Desktop view

![image](https://github.com/vsl700/car-leasing-react/assets/51147745/894c2ec3-437f-4360-86e3-6696a6451108)

![image](https://github.com/vsl700/car-leasing-react/assets/51147745/53fd5ba3-42bb-4b1e-a509-4e36a3cf4ed0)

Mobile view

![image](https://github.com/vsl700/car-leasing-react/assets/51147745/b424a3e3-c3a9-4574-9f41-32cf242d3759)
