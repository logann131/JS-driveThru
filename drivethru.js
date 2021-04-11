        //TODO: Set up a variable to hold the order total
        const orders = document.getElementById("orders");
        const total = document.getElementById("total");
        let price = 0;
       
        // TODO: Add EventListeners to each image element
        const imgs = document.getElementsByTagName("img");
        for (let img of imgs) {
            img.addEventListener("mouseover", addBorder);
            img.addEventListener("mouseout", removeBorder);
            img.addEventListener("click",placeOrder);
        }

        //alters the elements class name to add the CSS border styling
        function addBorder(e)
        {
            e.target.className = 'border'; //e.target = this
          
        }
        //alters the elements class name to remove the CSS border styling.
        function removeBorder()
        {
            console.log();
            this.className = 'noBorder';
        }
        //TODO: Create a list item from the clicked image element and add it to the unordered list.
        //the total is also updated and displayed in the <h3> element.


        function placeOrder(e)
        {
            // text contains the alt text for  the image that was clicked
            let text = e.target.alt;
            const textElement = document.createElement("li");
            textElement.textContent = text;
            orders.appendChild(textElement);
            price++;
            console.log(e);

            total.innerHTML = "Total: $" +price.toFixed(2);
        }
