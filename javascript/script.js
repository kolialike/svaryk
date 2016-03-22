jQuery(function($){
	
	var buttom = $(".buttom")
	var list = $(".list")
	list.on('click', '.close', function(event) {
		event.preventDefault();
		$(this).parent().remove();
	});
	buttom.on("click", function(event){
		event.preventDefault();
		list.append( '<li>Новый элемент списка <a class="close" href="#"></a></li>' );
	});
	
});