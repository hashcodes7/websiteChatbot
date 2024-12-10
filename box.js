        var box = document.createElement('div');

        // Set styles for the box
        box.style.width = '200px';
        box.style.height = '200px';
        box.style.backgroundColor = 'lightblue';
        box.style.border = '2px solid blue';
        box.style.position = 'absolute';
        box.style.top = '50%';
        box.style.left = '50%';
        box.style.transform = 'translate(-50%, -50%)';
        box.style.display = 'none'; // Initially hidden

        // Create a button element
        var button = document.createElement('button');
        button.innerText = 'Toggle Box';

        // Set styles for the button
        button.style.position = 'absolute';
        button.style.top = '10px';
        button.style.left = '10px';

        // Add click event to the button to toggle the box visibility
        button.onclick = function() {
            if (box.style.display === 'none') {
                box.style.display = 'block';
            } else {
                box.style.display = 'none';
            }
        };

        // Append the button to the box
        box.appendChild(button);

        // Append the box to the body
        document.body.appendChild(box);

        // Create a button to show/hide the box
        var toggleButton = document.createElement('button');
        toggleButton.innerText = 'Show/Hide Box';
        toggleButton.style.position = 'absolute';
        toggleButton.style.top = '10px';
        toggleButton.style.left = '10px';

        // Add click event to the toggle button
        toggleButton.onclick = function() {
            if (box.style.display === 'none') {
                box.style.display = 'block';
            } else {
                box.style.display = 'none';
            }
        };

        // Append the toggle button to the body
        document.body.appendChild(toggleButton);
