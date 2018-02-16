var $burguerButton = document.getElementById('burguer');
var $closeButton = document.getElementById('close');
var $menu = document.getElementById('menu');
$burguerButton.addEventListener('click', showMenu);
$closeButton.addEventListener('click', closeMenu);
function showMenu() {
	$menu.classList.remove('ocultar')
	$menu.classList.add('mostrar')

}
function closeMenu(){
	$menu.classList.add('ocultar')
};