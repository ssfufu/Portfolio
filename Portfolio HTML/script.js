/*
document.getElementById("next").onclick = function() {
    PptHide()
};

function PptHide() {
    document.getElementById("ppt").style.display = `none`;
    document.getElementsByTagName("p").style.display = `none`;
}
*/
/*function Hide() {
    var powerPt = document.getElementsByClassName("PPT");
    if (powerPt.style.display === "block") {
        powerPt.style.display = "none";
    }
}
*/

/*function Next() {
    var pExp = document.getElementById('exp');
    var pExp2 = document.getElementById('exp2');
    var NBtn = document.getElementById('NextButton');
    pExp.style.display = 'none';
    pExp2.style.display = 'block';
    NBtn.innerHTML = '<button id="BackButton" onclick="Back()">Back</button>';

    function Back() {
        var pExp = document.getElementById('exp');
        var pExp2 = document.getElementById('exp2');
        var BBtn = document.getElementById('BackButton');
        pExp2.style.display = 'none';
        pExp.style.display = 'block';
        BBtn.innerHTML = '<button id="NextButton" onclick="Next()">Next</button>';

    }
}
*/
var pExp = document.getElementById('exp');
var pExp2 = document.getElementById('exp2');
var Button1 = document.getElementById('Btn');

function maybe() {
    pExp.style.display = 'none';
    pExp2.style.display = 'block';
    Button1.style.display = 'none';
}

function maybe2() {
    pExp.style.display = 'block';
    pExp2.style.display = 'none';
    Button1.style.display = 'block';
}