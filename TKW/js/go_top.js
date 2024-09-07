window.onload = function(){
    let iconButton = document.getElementById("goTopBtn");
    iconButton.style.display = "none";
}
window.onscroll = function() {
    let iconButton = document.getElementById("goTopBtn");
    let scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
    let windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    if (scrollPosition > windowHeight / 2) {
        iconButton.style.display = "block";
    } else {
        iconButton.style.display = "none";
        document.getElementById("goTopBtn").onclick = function(event) {
        event.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
        };
        
    }
};





