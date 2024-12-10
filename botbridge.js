        <script>
        function sendresponse() {
            const inputElement = document.getElementById('textbox');
            const chatElement = document.getElementById('chat');

            if (inputElement && chatElement) {
                const input = inputElement.value;
                const message = document.createElement('div');
                message.innerHTML = `<span style="color: red;">You: </span>`+input;
               console.log('message is ' + message.innerHTML);
                chatElement.appendChild(message);
                console.log(input);

                // Simulate a chatbot response
                const response = document.createElement('div');
                const output = getResponse(input);
                console.log(output);
                response.innerHTML = `<span style="color: blue;">FlexPLM Helper: </span>`+output+`<hr>`;
                chatElement.appendChild(response);

                inputElement.value = '';
            } else {
                console.error('Element with ID "textbox" or "chat" not found');
            }
        }

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
    </script>
