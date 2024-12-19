export var butsah;


    var info = {
        deesc: []
    };

    const xhr = new XMLHttpRequest();
    const corsProxy = 'https://corsproxy.io/';
    xhr.open("GET", corsProxy + "https://ikon.mn/rss");

    xhr.onload = function () {
        if (xhr.status === 200) {
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(xhr.responseText, "text/xml");
            let bobo = document.getElementById("list");
                for (let i = 0; i < xmlDoc.getElementsByTagName("item").length; i++) {
                    let div = document.createElement("div");
                    div.className = "bnbn"
                    bobo.appendChild(div);
                    let elm = document.createElement("a");
                    let tsag = document.createElement("span");
                    let hevlesenO = document.createElement("span");
                    hevlesenO.textContent = "Нийтлэсэн огноо : ";
                    hevlesenO.className = "hev";
                    elm.setAttribute("href", "./details.html");
                    elm.id = "bobo" + i;
                    elm.className = "bobo";
                    tsag.className = "baba";
                    div.appendChild(elm);
                    div.appendChild(hevlesenO);
                    div.appendChild(tsag);
                    let channel = xmlDoc.getElementsByTagName("channel")[0];
                    let item = channel.getElementsByTagName("item")[i];
                    let hugatsaa = item.getElementsByTagName("pubDate")[0];
                    tsag.textContent = hugatsaa.textContent;
                    console.log(hugatsaa.textContent);
                    let title = item.getElementsByTagName("title")[0];
                    info.deesc[i] = item.getElementsByTagName("description")[0].textContent;
                    console.log(item.getElementsByTagName("description")[0].textContent);
                    document.getElementById("bobo" + i).textContent = title.textContent;

                    (function(index){
                        document.getElementById("bobo" + index).addEventListener("click", function () {
                            console.log("daragdsan element: " + elm.id);
                            butsah = info.deesc[index];
                            localStorage.setItem("butsah", butsah);
                        });
                    })(i);
                }
        } else {
            console.error("RSS tathad aldaa garlaa.");
        }
    };

    xhr.onerror = function () {
        console.error("Хүсэлт илгээхэд алдаа гарлаа.");
    };

    xhr.send();
