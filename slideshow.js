var content = null;
var playing = true;
if (localStorage.clickcount) {
    localStorage.clickcount = Number(localStorage.clickcount);
} else localStorage.clickcount = 0;

window.onload = function () {
    


$.getJSON("https://geiers1-afbab.firebaseio.com/.json", function (data) {
    content = data;
    $("#newsHeadline").html(content.news[localStorage.clickcount].headline);
    $("#newsContent").html(content.news[localStorage.clickcount].article);
    $("#newsDate").html(content.news[localStorage.clickcount].date); 
    document.getElementById("newsArticle").style.backgroundImage = (content.news[localStorage.clickcount].image);
});
    

var seuraava = window.setInterval(function(){playSlides()},3000);
    

    
function playSlides() { 
    console.log(localStorage.clickcount);
    if (localStorage.clickcount < 2) localStorage.clickcount = Number(localStorage.clickcount) + 1;
    else localStorage.clickcount = 0;
    $("#newsHeadline").html(content.news[localStorage.clickcount].headline);
    $("#newsContent").html(content.news[localStorage.clickcount].article);
    $("#newsDate").html(content.news[localStorage.clickcount].date);
    
    document.getElementById("newsArticle").style.backgroundImage = (content.news[localStorage.clickcount].image);
    //$("#newsArticle").style.backgroundImage.fadeIn(slow)
}
    

    
    
document.getElementById("playpause").onclick = function(){playpause()};
document.getElementById("previous").onclick = function(){previous()};
document.getElementById("next").onclick = function(){next()};
    
function playpause() {
    if (playing) {
        clearInterval(seuraava);
        playing = false;
        document.getElementById("playpause").innerHTML = "PLAY";
    }
    else {
        playing = true;
        seuraava = window.setInterval(function(){playSlides()},3000);
        document.getElementById("playpause").innerHTML = "PAUSE";
    }
}
    
    
function next() {
    if (localStorage.clickcount < 2) localStorage.clickcount = Number(localStorage.clickcount) + 1;
    else localStorage.clickcount = 0;
    $("#newsHeadline").html(content.news[localStorage.clickcount].headline);
    $("#newsContent").html(content.news[localStorage.clickcount].article);
    $("#newsDate").html(content.news[localStorage.clickcount].date);
    document.getElementById("newsArticle").style.backgroundImage = (content.news[localStorage.clickcount].image);
}
    
function previous() {
    if (localStorage.clickcount > 0) localStorage.clickcount = Number(localStorage.clickcount) - 1;
    else localStorage.clickcount = 2;
    $("#newsHeadline").html(content.news[localStorage.clickcount].headline);
    $("#newsContent").html(content.news[localStorage.clickcount].article);
    $("#newsDate").html(content.news[localStorage.clickcount].date);
    document.getElementById("newsArticle").style.backgroundImage = (content.news[localStorage.clickcount].image);
}
    
    
 
    
    
    
}
