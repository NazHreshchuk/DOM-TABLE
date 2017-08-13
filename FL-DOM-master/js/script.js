(function () {
    var students = [{
            name: 'Liudmyla',
            lastName: 'Bashta',
            img: 'https://www.plagiarismtoday.com/wp-content/uploads/2016/07/nyancat-385-sized.jpg',
            coverImg: 'http://i2.kym-cdn.com/photos/images/facebook/000/243/865/8f3.jpg',
            email: 'liudmyla.bashta@gmail.com',
            skills: ['Javascript', 'HTML', 'CSS']
        },
        {
            name: 'Roman',
            lastName: 'Chapkailo',
            img: 'https://s-media-cache-ak0.pinimg.com/736x/76/47/9d/76479dd91dc55c2768ddccfc30a4fbf5--pikachu-halloween-costume-diy-halloween-costumes.jpg',
            coverImg: 'http://fbcovershub.com/media/cover-250-beautiful-seaside-fb-cover-1388015476.jpg',
            email: 'romafromukraine@gmail.com',
            skills: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'Khrystyna',
            lastName: 'Dalivska',
            img: 'https://ichef-1.bbci.co.uk/news/660/cpsprodpb/169F6/production/_91026629_gettyimages-519508400.jpg',
            coverImg: 'https://sky.easypano.com/EPSUpload2/Pano/2017/04-12/12/636275969355928205/560_315.jpg',
            email: 'khrystynadalivska@gmail.com',
            skills: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'Ivan',
            lastName: 'Gnatyshyn',
            img: 'https://cdn.pixabay.com/photo/2014/03/29/09/17/cat-300572_960_720.jpg',
            coverImg: 'https://static.pexels.com/photos/9135/sky-clouds-blue-horizon.jpg',
            email: 'gnatyshyn.ivan@gmail.com',
            skills: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'Andrii',
            lastName: "Hun'ka",
            img: 'https://cdn.pixabay.com/photo/2017/01/06/19/15/soap-bubble-1958650_960_720.jpg',
            coverImg: 'http://i.dailymail.co.uk/i/pix/2017/01/16/20/332EE38400000578-4125738-image-a-132_1484600112489.jpg',
            email: 'andriyggg@gmail.com',
            skills: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'Maksym',
            lastName: 'Izmailov',
            img: 'https://cdn.pixabay.com/photo/2016/04/17/10/38/doberman-1334497_960_720.jpg',
            coverImg: 'https://cdn.pixabay.com/photo/2016/03/06/05/03/sunrise-1239728_960_720.jpg',
            email: 'maksym.izmailov.lv@gmail.com',
            skills: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'Taras',
            lastName: 'Kharkhalis',
            img: 'https://cdn.pixabay.com/photo/2014/03/29/09/17/cat-300572_960_720.jpg',
            coverImg: 'https://static.pexels.com/photos/9135/sky-clouds-blue-horizon.jpg',
            email: 'taraskharkhalis97@gmail.com',
            skills: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'Khrystia',
            lastName: 'Kondratovych',
            img: 'https://www.webdesign.org/img_articles/21726/17.jpg',
            coverImg: 'https://cdn.pixabay.com/photo/2016/10/13/10/37/dandelion-1737324_960_720.jpg',
            email: 'khrustyk@gmail.com',
            skills: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'Iuliia',
            lastName: 'Kurylo',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSljkhtuNjmEz2YeriPLPdntnTKNAwXFOAQSx1u6yAkPhYYw8-Pnw',
            coverImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT-qepvLICH8tsGuZqbZwpO7rk5afp274Lu4bgjai8Uo30gDKifA',
            email: 'iulia.kurylo@gmail.com',
            skills: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'Roman',
            lastName: 'Mandziuk',
            img: 'http://qnimate.com/wp-content/uploads/2014/03/images2.jpg',
            coverImg: 'http://html.com/wp-content/uploads/very-large-flamingo.jpg',
            email: 'rmandzyuk94@gmail.com',
            skills: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'Oleh',
            lastName: 'Marko',
            img: 'https://www.petdrugsonline.co.uk/images/page-headers/cats-master-header',
            coverImg: 'http://wiki-carpathians.com/wp-content/uploads/2015/02/climate-carpathians.jpg',
            email: 'olehmarko@gmail.com',
            skills: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'Anatoliy',
            lastName: 'Mazur',
            img: 'https://cdn.pixabay.com/photo/2014/03/29/09/17/cat-300572_960_720.jpg',
            coverImg: 'https://static.pexels.com/photos/9135/sky-clouds-blue-horizon.jpg',
            email: 'mail4tolik@gmail.com',
            skills: ['JavaScript', 'CSS', 'HTML']
        },
        {
            name: 'Vitaliy',
            lastName: 'Palyushok',
            img: 'https://www.mammoth.com.au/res/images/mammothcloud/person-img.png',
            coverImg: 'http://facebookcovers.piz18.com/wp-content/uploads/2012/04/geek-fb-cover.jpg',
            email: 'xskeletons@gmail.com',
            skills: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'Stepan',
            lastName: 'Prokopiak',
            Img: 'https://cdn.pixabay.com/photo/2014/03/29/09/17/cat-300572_960_720.jpg',
            coverImg: 'https://static.pexels.com/photos/9135/sky-clouds-blue-horizon.jpg',
            email: 'sprokopyak96@gmail.com',
            skills: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'Stepan',
            lastName: 'Sendun',
            img: 'http://i.piccy.info/i9/a25aa836358fb23a05d6e9207c976dd9/1500482900/30480/1163444/537377255ws00241_57th_annua.jpg',
            coverImg: 'http://i.piccy.info/i9/b311de1aaff52532b361a178e8e35de4/1500482959/135850/1163444/0008540461_10.jpg',
            email: 'steve.neeson21@gmail.com',
            skills: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'Andrii',
            lastName: 'Soroka',
            img: '',
            coverImg: '',
            email: '',
            skills: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'Illya',
            lastName: 'Syniuk',
            img: 'https://scontent-frx5-1.xx.fbcdn.net/v/t1.0-9/13654406_578754465640942_346398414832563762_n.jpg?oh=64beb0cc766acd05d9a659ff89d0aef0&oe=5A2FEB0F',
            coverImg: 'https://www.facebook.com/photo.php?fbid=578802345636154&set=a.326403767542681.1073741828.100005191805447&type=3&theater',
            email: 'illyasynuik@gmail.com',
            skills: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'Andrew',
            lastName: 'Tantsiura',
            img: 'https://cdn.pixabay.com/photo/2014/03/29/09/17/cat-300572_960_720.jpg',
            coverImg: 'https://static.pexels.com/photos/9135/sky-clouds-blue-horizon.jpg',
            email: 'andrii.tans@gmail.com',
            skills: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'Liliya',
            lastName: 'Tserkovna',
            img: 'https://scontent-frx5-1.xx.fbcdn.net/v/t1.0-1/c0.17.160.160/p160x160/14725559_311214412585028_1352062715786494390_n.jpg?oh=b2cbcb3de774187b75d5253a276bc2f7&oe=59F5D47B',
            coverImg: 'https://scontent-frx5-1.xx.fbcdn.net/v/t1.0-9/14368772_295189700854166_8626244722206545788_n.jpg?oh=02cf7516f9337bc439a42595ff893821&oe=5A051EC4',
            email: 'lilichkaTserkovna@gmail.com',
            skills: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'Anton',
            lastName: 'Zhygalov',
            img: 'http://static.tvtropes.org/pmwiki/pub/images/Hello_Kitty_Pink_2981.jpg',
            coverImg: 'https://thumb1.shutterstock.com/display_pic_with_logo/156640/208511908/stock-photo-arad-romania-september-hello-kitty-pattern-printed-on-cardboard-box-studio-shot-208511908.jpg',
            email: 'antonzhygalov@gmail.com',
            skills: ['JavaScript', 'HTML', 'CSS']
        }
    ];

	let student = ["Student", "Profile picture", "Email", "Skills", "Controls"];
	let flag = 0;
	let index = -1;

	// get element by id

	function el(id) {
		return document.getElementById(id); 
	}

	// create form elements: Name, LastName, Profile picture, Skills

	function createFormElement(name, type, required) {

		let label = document.createElement("label");
		label.appendChild(document.createTextNode(name));
		let input = document.createElement("input");
		input.setAttribute("type", type);
		input.setAttribute("class", "form-control");
		if(required)
			input.required = true;
		if(name == "Skills:")
			validationSkills(input);
		label.appendChild(input);
		return label;
	}

	// validation for comma separeted Skills

	function validationSkills(element) {

		element.setAttribute("pattern", "^([a-zA-Z]+)[+,a-zA-Z]+$");
	}

	// check if all form elements filled corectly

	function validateData() {

		let formElements = document.getElementsByClassName("form-control");
		let correctFields = 0;

		for (let i = 0; i < formElements.length; i++) {
			if(formElements[i].checkValidity())
				correctFields++;
		}

	// if all fields are corect
		if(correctFields === formElements.length)
			return true;
		else 
			return false;

	}

	// create form elements: buttons Save and Cancel

	function createButton(type, value) {

		let input = document.createElement("input");
		input.setAttribute("type", type);
		input.setAttribute("value", value);
		input.setAttribute("class", "btn btn-default");
		input.setAttribute("id", value.toLowerCase());
		return input;
	}

	// line break

	function createBr() {

		let br = document.createElement("br");
		return br;
	}

	// add form elements: Name, LastName, Profile picture, Skills and line break

	function addFormElement(form, name, type, required) {

		form.appendChild(createFormElement(name, type, required));
		form.appendChild(createBr());
	}

	// create form

    function createForm() {

    	let form = document.createElement("form");
    	form.setAttribute("id", "userFormData");

    	// add elements
    	addFormElement(form, "Name:", "text", 1);
    	addFormElement(form,"Last name:", "text", 1);
    	addFormElement(form, "Profile picture:", "text", 1);
    	addFormElement(form, "Email:", "email", 1);
    	addFormElement(form, "Skills:", "text");

    	// add div element with buttons: Save, Cancel
    	let div = document.createElement("DIV");
    	div.setAttribute("id", "buttonsParent");
    	div.appendChild(createButton("submit", "Save"));
    	div.appendChild(createButton("reset", "Cancel"));
    	form.appendChild(div);

    	let parent = el("container");
    	parent.appendChild(form);
    }

    // Clear form

    function clearForm() {

    	let formElements = document.getElementsByClassName("form-control");

    	for (let i = 0; i < formElements.length; i++) {
    		formElements[i].value = '';
    	}
    }

    // create new student

   	function createNewStudent() {

   		let formElements = document.getElementsByClassName("form-control");
		
		let tempStudent = {};

		tempStudent.name = formElements[0].value;
		tempStudent.lastName = formElements[1].value;
		tempStudent.img = formElements[2].value;
		tempStudent.email = formElements[3].value;
		tempStudent.skills = formElements[4].value.split(',');
		
    	return tempStudent;
   	}

    // Add student to array of Students

    function addStudent() {

   		let newStudent = createNewStudent();

    	// if form filled corectly - add user to array
    	if(validateData()) {

    		students.push(newStudent);
    		addStudentToTable(newStudent);
    		clearForm();
    		addRowHandlers();
    	}
    }

    // Add new Student to table

    function addStudentToTable(student) {

    	let tbody = document.getElementsByTagName("tbody")[0];

    	let tr = createNewRow(student);
		tbody.appendChild(tr);

    }
    
	// create Edit and Remove buttons

	function createButtonIcon(name, type) {

		let button = document.createElement("button");
		button.setAttribute("class", "btn btn-default btn-sm");
		let value = name.slice(0, -2);
		button.setAttribute("id", value);
		button.appendChild(document.createTextNode(name));
		let span = document.createElement("span");
		span.setAttribute("class", type);
		button.appendChild(span);
		return button;
	}

	// Create new Row

	function createNewRow(key) {

		let tr = document.createElement("TR");
		let tempStudent = {
			studentName: `${key.name} ${key.lastName}`,
			img: key.img,
			email: key.email,
			skills: key.skills,
			controls: ''
		};

		for (let prop in tempStudent) {

			let td = document.createElement("TD");
			if (prop == "controls") {
				let btnEdit = createButtonIcon("Edit  ", "glyphicon glyphicon-edit");
				let btnRemove = createButtonIcon("Remove  ", "glyphicon glyphicon-trash");
				td.appendChild(btnEdit);
				td.appendChild(btnRemove);
			}
		 		
		 	if (prop == "img") {
		 		let img = document.createElement("IMG");
		 		img.setAttribute("alt", "Invalid address!");
		 		// check if photo present 
		 		if(key[prop])
		 			img.src = key[prop];
		 		else
		 			img.src = "https://animal-id.info/img/no-user.jpg";
		 		td.appendChild(img);
		 		
		 	}

		 	else
		 		td.appendChild(document.createTextNode(tempStudent[prop]));

			tr.appendChild(td);
		}
		return tr;
	}

	function createTable() {
// <table>
		let table = document.createElement("TABLE");
    	table.setAttribute("id", "myTable");
    	table.setAttribute("class", "table table-hover");
    	
// <thead>
    	let thead = document.createElement("THEAD");
    	let tr = document.createElement("TR");

    	for (let key of student) {
    		let th = document.createElement("TH");
    		let span = document.createElement("SPAN");
			span.setAttribute("class", "glyphicon glyphicon-sort");

    		th.appendChild(document.createTextNode(key + " "));
    		if(key == "Student" || key == "Email")
    			th.appendChild(span);
    		tr.appendChild(th);
    	}

    	thead.appendChild(tr);
    	table.appendChild(thead);

// <tbody>
		let tbody = document.createElement("TBODY");
		for (let key of students) {
			
			let tr = createNewRow(key);
			tbody.appendChild(tr);

		}

		table.appendChild(tbody);
// add table to div container
	    let parent = el("container");
    	parent.appendChild(table);
	}

	// function createSortIcons() {

	// 	let cells = document.getElementsByTagName("TH");
	// 	let span = document.createElement("SPAN");
	// 	span.appendChild(document.createTextNode("&#xe150"));
	// 	span.setAttribute("class", "glyphicon");
	// 	cells[0].innerHTML.appendChild(span);
	// 	cells[2].innerHTML.appendChild(span);
	// }

// add onclick row handler 

	function addRowHandlers() {

	    let rows = document.getElementsByTagName("tr");
	    for (let i = 1; i < rows.length; i++) {
	        let currentRow = rows[i];
	        
	        currentRow.addEventListener('click', function(e) {

            	let elementId = e.target.id;
      
            	// if click on button Remove - delete user

            	if(elementId == 'Remove') {

            		removeStudent(students, currentRow, i);
            		return;
            	}

            	// if click on button Edit - edit user

            	if(elementId == 'Edit') {

            		index = editStudent(students, i);
            		flag = 1;
            		return;		
            	}

            	// else popup window with student data

            	else {
            		let cells = currentRow.getElementsByTagName("td");
                    showPopupWindow(cells[0].innerHTML, cells[1].getElementsByTagName("img")[0].src, cells[2].innerHTML, cells[3].innerHTML);
                }

            });
	    }
	}
// create popup window with data about student


	function createPopupWindow() {

		let div = document.createElement("DIV");
		div.setAttribute("id", "myModal");
		div.setAttribute("class", "modal");

		let divContent = document.createElement("DIV");
		divContent.setAttribute("class", "modal-content");

		let spanClose = document.createElement("SPAN");
		spanClose.setAttribute("class", "close");
		spanClose.innerHTML = "&times";
		divContent.appendChild(spanClose);

		let student = document.createElement("P");
		student.setAttribute("id", "studName");
		divContent.appendChild(student);

		let img = document.createElement("IMG");
		img.setAttribute("id", "studImg");
		img.setAttribute("alt", "No image!");
		divContent.appendChild(img);

		let email = document.createElement("P");
		email.setAttribute("id", "studEmail");
		divContent.appendChild(email);

		let skills = document.createElement("P");
		skills.setAttribute("id", "studSkills");
		divContent.appendChild(skills);

		//add content to parent div
		div.appendChild(divContent);
		//add popup to container
		let parent = el("container");
    	parent.appendChild(div);

	}

// show popup window

	function showPopupWindow(stud, picture, mail, skill) {
		// Get the modal
		let modal = el('myModal');

		// Get the <span> element that closes the modal
		let span = document.getElementsByClassName("close")[0];

		// Set user data
		el("studName").innerHTML = "<b>Student:</b> " + stud;
		el("studImg").src = picture;
		el("studEmail").innerHTML = "<b>Email:</b> " + mail;
		el("studSkills").innerHTML = "<b>Skills:</b> " + skill;

		// When the user clicks the button, open the modal 
		modal.style.display = "block";
		
		// When the user clicks on <span> (x), close the modal
		span.onclick = function() {

		     modal.style.display = "none";
		}

		// When the user clicks anywhere outside of the modal, close it
		window.onclick = function(event) {

		    if (event.target == modal) {
		        modal.style.display = "none";
		    }
		}
	}

// remove student 

	function removeStudent(students, currentRow, index) {

	    let tbody = document.getElementsByTagName("TBODY")[0];
	    // remove student from table
	    tbody.removeChild(currentRow);
	    // remove student from array
	    students.splice(index - 1, 1);

	}


// edit student 

	function editStudent(students, i) {

		console.log(i);
		let formElements = document.getElementsByClassName("form-control");
		let stud = students[i-1];
		let k = 0;
	// fill form with student data
		for (let key in stud) {

			if(key !== 'coverImg') {
				formElements[k].value = stud[key];
				k++;
			}
		}

		return i;

	}

	function updateStudent(students) {

		let stud = createNewStudent();
		//update student in array
		students[index - 1] = stud;

		//update student in form
		let rows = document.getElementsByTagName("tr");
		cells = rows[index].getElementsByTagName('td');

		cells[0].innerHTML = `${stud.name} ${stud.lastName}`;
		cells[1].getElementsByTagName('img')[0].src = stud.img;
		cells[2].innerHTML = stud.email;
		cells[3].innerHTML = stud.skills;

		clearForm();
	}

	// add new user
	function addOrUpdateStudent() { 
		el("userFormData").addEventListener("submit", function (e) {
			e.preventDefault();
			// if it is new user
			if (flag == 0) {
				addStudent();
			}
			// update student
			else {
				updateStudent(students, index);
				flag = 0;
			}
	    });
	}

	// sort data

	function sortTableData(n) {

		let table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
	  	table = document.getElementById("myTable");
	  	switching = true;
	  
	  	dir = "asc"; 
	
	  	while (switching) {
	    
		    switching = false;
		    rows = table.getElementsByTagName("TR");
		    
		    for (i = 1; i < (rows.length - 1); i++) {
	      //start by saying there should be no switching:
	      		shouldSwitch = false;
	  
		      	x = rows[i].getElementsByTagName("TD")[n];
		     	y = rows[i + 1].getElementsByTagName("TD")[n];
	  
	      		if (dir == "asc") {
	        		if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
			          shouldSwitch = true;
			          break;
			        }
			    } else if (dir == "desc") {

			        if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
			          //if so, mark as a switch and break the loop:
			         	shouldSwitch= true;
			        	break;
			        }
	      		}
	    	}
		    if (shouldSwitch) {
		  		rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
		      	switching = true;
		      //Each time a switch is done, increase this count by 1:
		      	switchcount ++;      
		    } else {
		      /*If no switching has been done AND the direction is "asc",
		      set the direction to "desc" and run the while loop again.*/
		      	if (switchcount == 0 && dir == "asc") {
		        	dir = "desc";
		        	switching = true;
		      	}
		    }
		}
			// sort array
		function compare(a, b) {

			let field = n == 0 ? "name" : "email";
			let comparison = 0;

		 	if (a[field] < b[field])
		    	comparison = -1;
		 	if (a[field]> b[field])
		    	comparison = 1;
		 	return (dir == "asc") ? comparison : (comparison * -1);
		}

		students.sort(compare);

		addRowHandlers();
	}	




// create form 
	createForm();
// create table
	createTable();
// add or update user

// create window with sudent data
	createPopupWindow();

// click on row - show user or remove/edit
	addRowHandlers();
// add or update student
	addOrUpdateStudent();

// sort by name
	document.getElementsByTagName('th')[0].addEventListener('click', function(){sortTableData(0)}); 
// sort bu email
	document.getElementsByTagName('th')[2].addEventListener('click', function(){sortTableData(2)}); 

})();