var btnSearchClick = document.querySelector('.btn-search');
var btnClose = document.querySelector('.btn-close');
var modalSearch = document.querySelector('.js-modal-search');
btnSearchClick.onclick = () =>{
    modalSearch.classList.toggle('active');
};
var couter =1;
setInterval(function(){
    document.getElementById('radio'+ couter).checked = true;
    couter++;
    if(couter>4){
        couter = 1;
    }
},3000);
