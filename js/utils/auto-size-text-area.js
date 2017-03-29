$(document).ready(function(){

	$(document).on("input", "textarea", function(){
		this.style.height = 'auto';
  		this.style.height = (this.scrollHeight) + 'px';
	})
	
})
