/* FUNCTIONS IN JS
    
    CalculateArea
        get window height 
        get window width
        calculate area
        store area
        
    CreateMessage
        do calculation
        check value
        output message
    
    animateImage
        get image position
        calculate new value
        set image position
        change text color
        if position correct
        output message
*/
    scope
        var foo = 500;

            function myFunc(){

              foo = 600;
            }

            myFunc();
            console.log(foo);

// CREATING Array
	var multipleValues = [];
	var multipleValues = new Array(); // this is object
    var multipleValues = Array();
	var multipleValues = Array(5);
	
	multipleValues.length
	
	var multipleValues = [10, 20, 30 , 40, 50];
	
	var otherValues = multipleValues.reverse();
							= multipleValues.join();
							= multipleValues.sort();
							
	var myArrayOfLinks = document.getElementByTagName("a");

	
//Numbers
	var x = 200; //60-bit float point numbers
	
	5+"5"  	// "55"
	a*5 		//NaN
	
	Number("50") // cast to 50
	Number("a") // NaN
	
	isNaN(myNumber);
	
	//using the Math object 
	
		Math.round(200.6); // 201
		Math.max(100, 200, 300); //300
		
// Strings

	str.length
	str.split(" ");
	str.toUpperCase();
	str.indexOf("someWorld"); // -1 ( doesn't exist )
	str.slice(6,5); // strart from 6th and grab 5 sumbols 
			//alternative
				.substr()
				.substring()
	
	
	//string comparation 
		(aardvark < beluga) // true 
		(aardvark < Beluga) // false
			// ABCD.. less than abcd..

	//reference  -->> http://developer.mozilla.org/en/JavaScrpt/Refrnce
	
// DATES
	var today = new Date(); 
	today.getMonth(); // 0 - 11;
	today.getFullYear(); // YYYY (not zero-based)
	today.getDay(); // 0-6 ( 0 is Sunday)
	today.getDate(); // 1 - 31 day of mont
	today.getHours(); // 0 - 23
	today.getTime(); // milliseconds since 1/1/1970	
	
	today.set...();
	
	var myDate(1906, 11, 9);
	console.log( " Grace Hopper was born on: ", myDate.getDay()); 
	
	//comparing DATES
		var date1 = new Date(2000,0,1);
		var date2 = new Date(2000,0,1);	
		
		(date1 == date2 ) // false (this is different object)
		(date1.getTime == date2.getTime ) // 94938840000 == 94938840000 - true
		
// Objects in JavaScript
			var player1 = { name: "Fred", score: 100, rank: 1 } ;
			var player2 = { name: "Sam", score: 120, rank: 5 } ;
				
			function playerDetails(){
				//display information about each player
				console.log(this.name + " has a rang of: " + 
				this.rang + " and a score of  " + this.score);
			}
		
		player1.logDetails = playerDetails;
		player2.logDetails = playerDetails;
		
		player1.logDetails();
		player2.logDetails();
		
// DOM  document object model 
	
		// Nodes and Elements 
			//node.element  // <p> <li> 
			//node.attribute   // id class
					
			
			//node.text
			
	document.getElementById("someID");
	document.getElementsByTagName("li");  //return array
	
			// example 
				var mainTitle = document.getElementById("mainTitle");
				console.log("this is an element of type: ", mainTitle.nodeType );
				console.log("the Inner HTML is : ", mainTitle.innerHTML);
				console.log("Child nodes : ", mainTitle.childNodes.length);
	
				var myLinks = document.getElementByTagName("a");
				console.log("Links: ", myLinks.length);
	
				
				var myListItems = document.getElementsByTagName("li");
				//myFirstList
				var myFirstList = document.getElementById("abc");
				var limitedList = myFirstList.getElementsByTagName("li");
					
			myElement.getAttribute("align");
			myElement.setAttribute("align", "left") // If the element doesnt exist, it will be create 
				
		/*	
		1. create the element
		2. add the element
		*/
		
		//Create the elements
		var newHeading = document.createElement("h1");
		var newParagrph = document.createElement("p");
		
		// to add content, eithe use innerHTML
		newHeading.innerHTML = "some head text";
		newParagrph.innerHTML = "some paragraph";
		//OR 
			//create child nodes manually
			var h1Text = document.createTextNode("some head text ");
			var pText = document.createTextNode("some paragraph text");
			//and add them as child nodest new eleents
			newHeading.appendChild(h1Text);
			newParagrph.appendChild(pText);
			
		document.getElementById("SomeElementID").appendChild(newHeading);
		document.getElementById("SomeElementID").appendChild(newParagrph);
		
		//----------------------------
		//insertBefore
		var myNewElement = document.createElement("li");
		var secondItem = myElement.getElementByTagName("li")[1];
		myNewElement.insertBefore(myNewElement, secondItem);
		
	// EVENTs
			/*
				onload
				onclick
				onmouseover
				onblur
				onfocus
			*/
	//1 method
		<button onclick = "alert('hello world');">
			Run some js code
		</button>
	//2 method	
		/*
			element.event = 
				window.onload
				nameField.onblur
		*/
	myElement.onclick = function() {
		// your event handler code
	};
	
	//3rd method
		document.addEventListener("click", myFunction, false);
		document.addEventListener("onmousedown", myFunction, false);
		document.addEventListener("onmousedown", otherMyFunction, false);
		document.removeEventListener();
	
	//example
		var myImage = document.getElementById("mainImage");
		myImage.onclick = function(){
			console.log("you clicked the image");
		};

	//onload example 
		function prepareEventHandlers(){
			var myImage = document.getElementById("mainImage");
			myImage.onclick = function(){
				console.log("you clicked the image");
			};
		};
	
		window.onload = function() {
			// preparate anything we need to
			prepareEventHandlers();
		}
		
	 // onfocus , onblur
		var emailField = document.getElementById("email");
		
		emailField.onfocus(){
			if (emailField.value == "your email"){
				emailField.value="";
			}
		};
		
		emailField.onblur = function(){
			if ( emailField.value == "")	{
				emalField.value = "your email";
			}
		};

	// Date Time
	setTimeout("simple message", 5000); // alert() 
	
		//change picturs for time
		
		var myImage = document.getElementById("mainImage");
		var imageArray = ["_images/overlook.jpg","_images/lunch.jpg","_images/overlook.jpg", ];
		
		var imageIndex = 0;
		
		function changeImage(){
			myImage.setAttribute("scr", imageArray[imageIndex]);
			imageIndex++;
			if(imageIndex >= imageArray.length){
				imageIndex = 0;
			}
		}
		
		var intervalHandle = setInterval(changeImage, 5000);
		
		myImage.onclick = function()	{
			clearInterval(intervalHandle);
		}
		
	// DEBUGGING JavaScript
		//firebug 
		
	
	