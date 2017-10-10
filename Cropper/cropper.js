var browse = document.getElementById("browse");
	var paste = document.getElementById("paste");
	var canvas  = el("myCanvas");
	var context = canvas.getContext("2d");
	var img = new Image();
	  
	function ckeckChoice(){
		if(document.getElementById("local").checked){
			browse.style.display = "inline";
			paste.style.display = "none";
		}
		else{
			browse.style.display = "none";
			paste.style.display = "inline";

			document.body.addEventListener("keydown",function(e){     // Ctrl + V - так читаємо дані із буфера і заповнюємо поле path
				e = e || window.event;
				var key = e.which || e.keyCode; // keyCode detection
				var ctrl = e.ctrlKey ? e.ctrlKey : ((key === 17) ? true : false); // ctrl detection
				
				if ( key == 86 && ctrl ) {
					//alert("Ctrl + V Pressed !");
					var input = document.createElement('input');
					input.type = 'text';
					var parent = el("parent");
					input.width = "2px";
					input.style.marginLeft = "-3000px";
					//input.style.marginBottom = "100px";
					parent.appendChild(input);
					//input.style.visibility = "hidden";
					input.contenteditable = true;
					input.focus();
					function func() {
  						el('path').value = input.value;
  						parent.removeChild(input);
					}
					setTimeout(func, 1);
				} 
				
			},false);
		}
	}

	function el(id){
		return document.getElementById(id); // звертаємось до елементів
	} 
	// для вибору із діалогового вікна
	function openPopupWindow(){
		el('file').click();
		el('file').addEventListener("change", readImage, false);
		// функція для активізація crop mode
	}
	
	function activeCropMode(){				// активуємо кроп коли фотка загрузилась
		el('checkbox').checked = true;
		CropMode();
	}

	function CropMode(){					// зміна cropa
		if (el('checkbox').checked){
			el('myCanvas').onmouseover = function () {  // міняємо курсор
				this.style.cursor="crosshair";
			};
			imageCropper.init();     // CROPPING!!!!!!!!!!!!!!!!!
		}
		else{
			el('myCanvas').onmouseover = function () {  // міняємо курсор
				this.style.cursor="default";
			};
		}
	}

	el('checkbox').addEventListener('change', CropMode);

	// для вставки адреси картинки із буферу
	paste.onclick = function (){
		img.addEventListener("load", function() {
       		context.canvas.width = img.width;
       		context.canvas.height = img.height;
        	context.drawImage(img, 0, 0);
        });
	 	img.src =  el('path').value;    
	 	activeCropMode();    
	}

// Для завантаження фото в canvas

	function readImage() {
	    if (/\.(jpe?g|png|gif)$/i.test(this.files[0].name )) {   // щоб можна було загрузити лише картинки
	        document.getElementById('path').value = this.files[0].name;
	        var FR = new FileReader();
	        FR.onload = function(e) {
	           img.addEventListener("load", function() {
	           		context.canvas.width = img.width;
	           		context.canvas.height = img.height;
	            	context.drawImage(img, 0, 0);
	           });
	           img.src = e.target.result; // змінити для картинок із нету, просто URL тут прописати 
	           activeCropMode();
	        };       
	        FR.readAsDataURL( this.files[0] );
	    }
	    else alert("Оберіть файл із розширенням .jpg, .jpeg, .png, .gif");
	}

	var imageCropper = {

        ctx: null,
        image: null,
        click: false,
        downPointX: 0,
        downPointY: 0,
        lastPointX: 0,
        lastPointY: 0,
        flag: 0,

        init: function() {
            this.ctx = context;
            this.initCanvas();
        },

        initCanvas: function(image) {
            this.image = img;
            this.image.src = img.src;
            this.initEventsOnCanvas();
    	},


    initEventsOnCanvas: function() {
        this.ctx.canvas.onmousedown = this.onMouseDown.bind(this);
        this.ctx.canvas.onmouseup = this.onMouseUp.bind(this);
    },


    onMouseDown: function(e) {
        var loc = this.windowToCanvas(e.clientX, e.clientY);
        e.preventDefault();
        this.click = true;
        this.ctx.canvas.onmousemove = this.onMouseMove.bind(this);
        this.downPointX = loc.x;
        this.downPointY = loc.y;
        this.lastPointX = loc.x;
        this.lastPointY = loc.y;
        
    
    },


    onMouseMove: function(e) {
        e.preventDefault();
        if (this.click) {
            var loc = this.windowToCanvas(e.clientX, e.clientY);
            this.lastPointX = loc.x;
            this.lastPointY = loc.y;
            this.reDrawCanvas();
        }
    },

    onMouseUp: function(e) {
        e.preventDefault();
        this.click = false;
        this.reDrawCanvas();
        this.cropImage();
    },

    reDrawCanvas: function() {
        this.drawImage();
        this.drawSelRect();
    },
 	

    drawImage: function() {
       	this.ctx.drawImage(this.image, 0, 0);
      
    },

  
    drawSelRect: function() {
    	var bbox = canvas.getBoundingClientRect();
        this.ctx.strokeStyle = 'black';
        this.ctx.setLineDash([10 * (canvas.width / bbox.width), 10 * (canvas.width / bbox.width)]);
        this.ctx.lineWidth = 1 * (canvas.width / bbox.width);  // Оскільки змінили розміри контексту в канвасі
        this.ctx.strokeRect(this.downPointX, this.downPointY, (this.lastPointX - this.downPointX), (this.lastPointY - this.downPointY));
    },

    windowToCanvas: function(x, y) {
        
        var bbox = canvas.getBoundingClientRect();
        return {
				x: (x - bbox.left) * (canvas.width / bbox.width),    // Оскільки змінили розміри контексту в канвасі
            y: (y - bbox.top) * (canvas.height / bbox.height)
        };
    },

    cropImage: function() {
    	this.drawImage();
    	var modal = document.getElementById('myModal');
    	var span = document.getElementsByClassName("close")[0];
        var tempCtx = el('croppedImage').getContext("2d");
        var bbox = canvas.getBoundingClientRect();
        var scaleX = (canvas.width / bbox.width);
        var scaleY = (canvas.height / bbox.height);
        var newImage = new Image();

        modal.style.display = "block";
        tempCtx.canvas.width = (this.lastPointX - this.downPointX) / scaleX; 
        tempCtx.canvas.height = (this.lastPointY - this.downPointY) / scaleY;

		if((this.lastPointX > this.downPointX) && (this.lastPointY > this.downPointY)) // вниз вправо
        	tempCtx.drawImage(this.image, this.downPointX, this.downPointY, (this.lastPointX - this.downPointX), (this.lastPointY - this.downPointY), 0, 0, (tempCtx.canvas.width), (tempCtx.canvas.height));

        if((this.lastPointX < this.downPointX) && (this.lastPointY > this.downPointY)){ // вниз вліво
        	tempCtx.canvas.width = (this.downPointX - this.lastPointX) / scaleX; 
        	tempCtx.drawImage(this.image, this.lastPointX, this.downPointY, (this.downPointX - this.lastPointX), (this.lastPointY - this.downPointY), 0, 0, (tempCtx.canvas.width), (tempCtx.canvas.height));
        }

        if((this.lastPointY < this.downPointY) && (this.lastPointX > this.downPointX)){ // вгору вправо
			tempCtx.canvas.height = (this.downPointY - this.lastPointY) / scaleY;
			tempCtx.drawImage(this.image, this.downPointX, this.lastPointY, (this.lastPointX - this.downPointX), (this.downPointY - this.lastPointY), 0, 0, (tempCtx.canvas.width), (tempCtx.canvas.height));
        }
        if((this.lastPointY < this.downPointY) && (this.lastPointX < this.downPointX)){ // вгору вліво
        	tempCtx.canvas.width = (this.downPointX - this.lastPointX) / scaleX; 
        	tempCtx.canvas.height = (this.downPointY - this.lastPointY) / scaleY;
        	tempCtx.drawImage(this.image, this.lastPointX, this.lastPointY, (this.downPointX - this.lastPointX), (this.downPointY - this.lastPointY), 0, 0, (tempCtx.canvas.width), (tempCtx.canvas.height));
        }

        
        newImage.crossOrigin = "";

        function createCORSRequest(method, url) {
			  var xhr = new XMLHttpRequest();
			  if ("withCredentials" in xhr) {
			    xhr.open(method, url, true);

			  } else if (typeof XDomainRequest != "undefined") {
			    xhr = new XDomainRequest();
			    xhr.open(method, url);

			  } else {

			    // Otherwise, CORS is not supported by the browser.
			    xhr = null;

			  }
			  return xhr;
			}

			var xhr = createCORSRequest('GET', el('path').value);
			if (!xhr) {
			  throw new Error('CORS not supported');
			}
			else
        		newImage.src = el('croppedImage').toDataURL("image/png");
      										// міняємо картинку!!!!!!!!!!!

        span.onclick = function() {				// закрити модальне вікно
		    modal.style.display = "none";
		}

		window.onclick = function(event) {   // закрити модальне вікно натиснувши будь де на екрані крім вікна
		    if (event.target == modal) {
		        modal.style.display = "none";
		    } 
		}

		cancel.onclick = function(){		// закрити модальне вікно натиснувши cancel
			modal.style.display = "none";
		}

	 	function replace(){	
	 	  	this.image = newImage;		// замінюємо картинку головного канваса 
			this.ctx.canvas.width = this.image.width;
			this.ctx.canvas.height = this.image.height;
			/*this.ctx.drawImage(this.image, this.downPointX, this.downPointY, (this.lastPointX - this.downPointX), (this.lastPointY - this.downPointY), 0, 0, (this.ctx.canvas.width),(this.ctx.canvas.height));*/
		/*	this.flag = 1;
			this.changeFirstPointX = this.downPointX;
			this.changeFirstPointY = this.downPointY;
			this.changeLastPointX = this.lastPointX;
			this.changeLastPointY = this.lastPointY;*/
			this.drawImage();
			modal.style.display = "none";
		}

		el('replace').addEventListener('click', replace.bind(this));

		
		saveAs.onclick = function () {		    
		    var lnk = document.createElement('a'), e;
		    lnk.download = "picture.jpg";		
		    lnk.href = el('croppedImage').toDataURL();	
		    lnk.click();
		    modal.style.display = "none";
		}
		        		
    }   
               
}

    