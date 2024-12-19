const butsah = localStorage.getItem("butsah"); 

if(butsah){
    const parser = new DOMParser();
    const paragraf = parser.parseFromString(butsah, "text/html");
    const bodyContentuud = paragraf.getElementsByTagName("body")[0];

    if (bodyContentuud) {
        document.getElementById("details").innerHTML = bodyContentuud.innerHTML;
    } else {
        console.error("aldaa aldaa body baihku baina");
    }
    const puud = document.getElementsByTagName("p");
    for(let i = 0; i < puud.length; i++){
        puud[i].className = "puud";
    }
    document.querySelectorAll('img.ikonlazy').forEach(img => {
        if (img.dataset.src) {
            img.src = img.dataset.src;
        }
    });
    const elements = document.querySelectorAll('div.ikonarsave');
    for (let i = 0; i < elements.length; i++) {
        elements[i].remove();
    }

    console.log(paragraf.getElementsByTagName("body"));
    console.log(paragraf.getElementsByTagName("p"));
    console.log(paragraf.getElementsByTagName("p").length);
}else{
    console.error("locald butsah alga.");
}
