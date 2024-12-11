var box = document.createElement('div');
box.style.width = '250px';
box.style.height = '350px';
box.style.backgroundColor = 'white';
box.style.border = '2px solid black'; // Change border color to black
box.style.position = 'fixed';
box.style.bottom = '70px'; // Position above the button
box.style.right = '10px'; // Align with the right side of the button
box.style.display = 'none'; // Initially hidden
box.style.borderRadius = '15px';
box.style.fontFamily = 'Segoe UI'; // Set font family
box.style.overflow = 'hidden'; // Hide overflow content

var header = document.createElement('h3');
header.innerText = 'FLEXBOT HELP';
header.style.textAlign = 'center';
header.style.margin = '0 0';
header.style.backgroundColor = '#3FA043'; // Header background color
header.style.color = 'white'; // Header text color
header.style.fontFamily = 'Segoe UI'; // Set font family
header.style.fontWeight = 'normal'; // Adjust font weight
header.style.fontSize = '12px'; // Make text smaller
header.style.padding = '10px'; // Add padding

var chatScreen = document.createElement('div');
chatScreen.style.flex = '1';
chatScreen.style.overflowY = 'auto'; // Enable vertical scrolling
chatScreen.style.height = '78%'; // Make it take the maximum width
chatScreen.style.fontSize = '11px';
document.body.appendChild(chatScreen);

var footer = document.createElement('div');
footer.style.display = 'flex';
footer.style.alignItems = 'center'; // Align items vertically in the center
footer.style.padding = '2px';

var textbox = document.createElement('textarea');
textbox.id = 'textbox';
textbox.style.flex = '1';
textbox.style.overflowX = 'auto';
textbox.style.borderRadius = '15px';
textbox.style.fontSize = '10px';
textbox.style.display = 'flex'; // Use flexbox
textbox.style.height='20px';
textbox.style.padding = '10px 5px 5px 5px';


var submitbutton = document.createElement('button');
submitbutton.type = 'button';
submitbutton.innerText = 'Submit';
submitbutton.style.backgroundColor = '#4CAF50'; // Green
submitbutton.style.color = 'white';
submitbutton.style.padding = '10px 20px';
submitbutton.style.border = 'none';
submitbutton.style.borderRadius = '10px';
submitbutton.style.cursor = 'pointer';
submitbutton.style.fontSize = '11px';
submitbutton.style.verticalAlign = 'middle';
submitbutton.onclick = sendresponse;

// Append the textbox and button to the footer
footer.appendChild(textbox);
footer.appendChild(submitbutton);

box.appendChild(header);
box.appendChild(chatScreen); // Append chat screen between header and footer
box.appendChild(footer);
document.body.appendChild(box);

var toggleButton = document.createElement('button');
toggleButton.innerText = 'Show/Hide Box';
toggleButton.style.position = 'fixed';
toggleButton.style.bottom = '20px'; // Position at the bottom
toggleButton.style.right = '10px'; // Align with the right side of the box
toggleButton.style.padding = '10px 20px';
toggleButton.style.backgroundColor = 'white';
toggleButton.style.color = '#3FA043';
toggleButton.style.border = '2px solid #3FA043';
toggleButton.style.borderRadius = '15px';
toggleButton.style.cursor = 'pointer';
toggleButton.style.fontFamily = 'Segoe UI'; // Set font family

// Append the button to the body (or any other desired element)
document.body.appendChild(toggleButton);

// Add click event to the toggle button
toggleButton.onclick = function() {
    if (box.style.display === 'none') {
        box.style.display = 'block';
    } else {
        box.style.display = 'none';
    }
};

// Function to handle sending responses
// Define the sendresponse function
function sendresponse() {
    console.log('sendresponse play');
    const input = textbox.value;
    const message = document.createElement('div');
    message.innerHTML = `<span style="color: red;"><strong>You:</strong> </span>` + input;
    chatScreen.appendChild(message);
    console.log(input);

    // Simulate a chatbot response
    const response = document.createElement('div');
    const output = getResponse(input);
    console.log(output);
    response.innerHTML = `<span style="color: blue;"><strong>FlexPLM Helper: </strong></span>` + output + `<hr>`;
    chatScreen.appendChild(response);

    textbox.value = '';
	console.log('end')
}

// Function to get chatbot response
function getResponse(input) {
    if (input.toLowerCase() === "hi") {
        return "Hello! How can I help you?";
    } else if (input.toLowerCase() === "install flexplm") {
        return "<br>1. Install Windchill DS<br>2. Install Windchill PDMLink<br>3. Install FlexPLM on Windchill<br>4. Deploy SCF Build";
    } else if (input.toLowerCase() === "make a product") {
        return "<br>Steps to create a new product in FlexPLM:<br>1. Log in to FlexPLM<br>2. Navigate to the 'Products' section<br>3. Click on 'Create New Product'<br>4. Fill in the required product details<br>5. Save the new product";
    } else {
        return "I'm not sure how to help with that.<br>";
    }
}
