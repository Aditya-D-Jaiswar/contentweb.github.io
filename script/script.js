function responsive_menu(){
    var e = document.getElementById('menu_list');
    if(e.className === 'nav_list'){
        e.className += "responsive_menu"
    }else{
        e.className = 'nav_list';
    }
}
function myfunction(){
    var preloader = document.getElementById("loading");
			preloader.style.display = 'none';
		};