        // Create a div element
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

        // Append the box to the body
        document.body.appendChild(box);
