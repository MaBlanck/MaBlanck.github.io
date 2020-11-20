//Animation bar de navigation
let toggleMenu = document.getElementById('sidebarCollapse');
toggleMenu.addEventListener('click', function (){
        document.getElementById('sidebar').classList.toggle('active')
        document.getElementById('content').classList.toggle('active')
    })
;
//Animation flèche remonté de page
let returnTop = document.createElement('p');
    returnTop.innerHTML = '<i class="fas fa-angle-up fa-2x"></i>';
    document.body.appendChild(returnTop);
    returnTop.style.position = 'fixed';
    returnTop.style.color = 'white';
    returnTop.style.bottom = '0';
    returnTop.style.right = '0';
    returnTop.style.visibility = 'hidden';
    returnTop.style.transform = '';
    returnTop.style.marginRight = '50px';
function scrollUp (){
window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
})};
returnTop.addEventListener('click', scrollUp);
//Animation de la flèche pour retour en haut de page
window.onscroll = function() {
    let y = window.scrollY;
    if (y > 600){
        returnTop.style.visibility = 'initial';
} else {
    returnTop.style.visibility = 'hidden';    
}};



