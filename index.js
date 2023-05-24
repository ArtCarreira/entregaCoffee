;(function(){

const atnModal = document.querySelectorAll("[data-modalAtn]");

for(let i = 0; i < atnModal.length; i++){
    atnModal[i].addEventListener("click", function(){
        let valueDataModal = atnModal[i].getAttribute("data-modalAtn");
        document.getElementById(valueDataModal).classList.toggle("show-modal");
    });
}

})();