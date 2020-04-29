function italic() {
    var element = document.getElementById('textArea')
    var ita = document.getElementById('italic')
    element.classList.toggle("italicafter")
    ita.classList.toggle("italicSelected")
}

function bold() {
    var element = document.getElementById('textArea')
    var bold = document.getElementById('bold')
    element.classList.toggle("boldafter")
    bold.classList.toggle("boldSelected")

}

function underline() {
    var element = document.getElementById('textArea')
    var thing = document.getElementById('underline')
    element.classList.toggle("underlineAfter")
    thing.classList.toggle("underlineSelected")

}


function myFunction() {
var colour = document.getElementById("colourPanel")
var font = document.getElementById('fontsize')
 colour.classList.toggle("done")
font.classList.toggle("downer")
}



function red() {
    document.getElementById('textArea').style.color = "red"
    document.getElementById('colourChange').style.textDecorationColor = "red"
    document.getElementById('colourChange').style.color = "red"
    document.getElementById('colourPanel').style.display = "none";
}

    function orange() {
    document.getElementById('textArea').style.color = "#FF6600"
    document.getElementById('colourChange').style.textDecorationColor = "#FF6600"
    document.getElementById('colourChange').style.color = "#FF6600"
    document.getElementById('colourPanel').style.display = "none";
}

    function black() {
    document.getElementById('textArea').style.color = "black"
    document.getElementById('colourChange').style.textDecorationColor = "black"
    document.getElementById('colourChange').style.color = "black"
    document.getElementById('colourPanel').style.display = "none !important";
}

    function blue() {
    document.getElementById('textArea').style.color = "#12A0DB"
    document.getElementById('colourChange').style.textDecorationColor = "#12A0DB"
    document.getElementById('colourChange').style.color = "#12A0DB"
    document.getElementById('colourPanel').style.display = "none !important";
}

    function darkblue() {
    document.getElementById('textArea').style.color = "#013567"
    document.getElementById('colourChange').style.textDecorationColor = "#013567"
    document.getElementById('colourChange').style.color = "#013567"
    document.getElementById('colourPanel').style.display = "none !important";
}

    function green() {
    document.getElementById('textArea').style.color = "#36C309"
    document.getElementById('colourChange').style.textDecorationColor = "#36C309"
    document.getElementById('colourChange').style.color = "#36C309"
    document.getElementById('colourPanel').style.display = "none !important";
}

    function darkgreen() {
    document.getElementById('textArea').style.color = "#195007"
    document.getElementById('colourChange').style.textDecorationColor = "#195007"
    document.getElementById('colourChange').style.color = "#195007"
    document.getElementById('colourPanel').style.display = "none !important";
}

function left() {
        var align = document.getElementById('leftalign')
        document.getElementById('textArea').style.textAlign = 'left';
        document.getElementById('textArea').style.textAlignLast = 'left';
        align.style.backgroundColor = "#e9e9e9";
        align.style.zIndex = "9999";
        document.getElementById('rightalign').style.backgroundColor = 'transparent';
        document.getElementById('centeralign').style.backgroundColor = 'transparent';
        document.getElementById('justify').style.backgroundColor = 'transparent';
}

function right() {
    var align = document.getElementById('rightalign')
    document.getElementById('textArea').style.textAlign = 'right';
    document.getElementById('textArea').style.textAlignLast = 'right';
    align.style.backgroundColor = "#e9e9e9";
    document.getElementById('leftalign').style.backgroundColor = 'transparent';
    document.getElementById('centeralign').style.backgroundColor = 'transparent';
    document.getElementById('justify').style.backgroundColor = 'transparent';
}

function center() {
    var align = document.getElementById('centeralign')
    document.getElementById('textArea').style.textAlign = 'center';
    document.getElementById('textArea').style.textAlignLast = 'center';
    align.style.backgroundColor = "#e9e9e9";
    document.getElementById('leftalign').style.backgroundColor = 'transparent';
    document.getElementById('rightalign').style.backgroundColor = 'transparent';
    document.getElementById('justify').style.backgroundColor = 'transparent';
}


function just() {
    var align = document.getElementById('justify')
    document.getElementById('textArea').style.textAlignLast = 'justify';
    document.getElementById('textArea').style.whiteSpace = 'normal';
    align.style.backgroundColor = "#e9e9e9";
    document.getElementById('leftalign').style.backgroundColor = 'transparent';
    document.getElementById('rightalign').style.backgroundColor = 'transparent';
    document.getElementById('centeralign').style.backgroundColor = 'transparent';
}

function fonter() {
var fonts = document.getElementById('fonts')
var sizer = document.getElementById('createLink')
var ten = document.getElementById('ten')
var twelve = document.getElementById('twelve')
var fourt = document.getElementById('fourteen')
var eight = document.getElementById('eighteen')
var twenty = document.getElementById('twentyfour')
var thirty = document.getElementById('thirty')
var font = document.getElementById('font')
var sizer = document.getElementById('createLink')

sizer.classList.toggle('downy')
sizer.classList.remove('downy2')
fonts.classList.toggle('fonter')

ten.classList.remove('please')
twelve.classList.remove('please')
fourt.classList.remove('please')
eight.classList.remove('please')
twentyfour.classList.remove('please')
thirty.classList.remove('please')



}	

function verdana() {
var font = document.getElementById('verdana')
var helvetica = document.getElementById('helvetica')
var arial = document.getElementById('arial')
var treb = document.getElementById('treb')
var times = document.getElementById('timesnew')
var cour = document.getElementById('calibri')
document.getElementById('textArea').style.fontFamily = "verdana";
font.classList.add('selectedFont')
helvetica.classList.remove("selectedFont");
arial.classList.remove("selectedFont");
times.classList.remove("selectedFont");
treb.classList.remove("selectedFont");
cour.classList.remove("selectedFont");
}

function please() {
var font = document.getElementById('helvetica')
var verdana = document.getElementById('verdana')
var arial = document.getElementById('arial')
var treb = document.getElementById('treb')
var times = document.getElementById('timesnew')
var cour = document.getElementById('calibri')
document.getElementById("textArea").style.fontFamily = "helvetica";
font.classList.add('selectedFont')
verdana.classList.remove("selectedFont");
arial.classList.remove("selectedFont");
times.classList.remove("selectedFont");
treb.classList.remove("selectedFont");
cour.classList.remove("selectedFont");
}


function pleases() {
var font = document.getElementById('arial')
var verdana = document.getElementById('verdana')
var helvetica = document.getElementById('helvetica')
var treb = document.getElementById('treb')
var times = document.getElementById('timesnew')
var cour = document.getElementById('calibri')
document.getElementById("textArea").style.fontFamily = "arial";
font.classList.add('selectedFont')
verdana.classList.remove("selectedFont");
helvetica.classList.remove("selectedFont");
times.classList.remove("selectedFont");
treb.classList.remove("selectedFont");
cour.classList.remove("selectedFont");
}

function times() {
var font = document.getElementById('timesnew')
var verdana = document.getElementById('verdana')
var helvetica = document.getElementById('helvetica')
var arial = document.getElementById('arial')
var treb = document.getElementById('treb')
var cour = document.getElementById('calibri')
document.getElementById("textArea").style.fontFamily = "times new roman";
font.classList.add('selectedFont')
verdana.classList.remove("selectedFont");
helvetica.classList.remove("selectedFont");
arial.classList.remove("selectedFont");
treb.classList.remove("selectedFont");
cour.classList.remove("selectedFont");
}

function cour() {
var font = document.getElementById('calibri')
var verdana = document.getElementById('verdana')
var helvetica = document.getElementById('helvetica')
var arial = document.getElementById('arial')
var treb = document.getElementById('treb')
var times = document.getElementById('timesnew')
document.getElementById("textArea").style.fontFamily = "courier new";
font.classList.add('selectedFont')
verdana.classList.remove("selectedFont");
helvetica.classList.remove("selectedFont");
arial.classList.remove("selectedFont");
treb.classList.remove("selectedFont");
times.classList.remove("selectedFont");



}

function treber(){
var font = document.getElementById('treb')
var verdana = document.getElementById('verdana')
var helvetica = document.getElementById('helvetica')
var arial = document.getElementById('arial')
var times = document.getElementById('timesnew')
var cour = document.getElementById('calibri')
document.getElementById("textArea").style.fontFamily =  "Trebuchet MS";
font.classList.add('selectedFont')
verdana.classList.remove("selectedFont");
helvetica.classList.remove("selectedFont");
arial.classList.remove("selectedFont");
times.classList.remove("selectedFont");
cour.classList.remove("selectedFont");


}

function mad() {
    var ten = document.getElementById('ten')
    var twelve = document.getElementById('twelve')
    var fourt = document.getElementById('fourteen')
    var eight = document.getElementById('eighteen')
    var twenty = document.getElementById('twentyfour')
    var thirty = document.getElementById('thirty')
    var font = document.getElementById('font')
    var sizer = document.getElementById('createLink')
    var dispose = document.getElementById('fonts')
    
    dispose.classList.remove('fonter')
    sizer.classList.toggle('downy2')
    sizer.classList.remove('downy')
    ten.classList.toggle('please')
    twelve.classList.toggle('please')
    fourt.classList.toggle('please')
    eight.classList.toggle('please')
    twentyfour.classList.toggle('please')
    thirty.classList.toggle('please')
    
    
}

function ten() {
    var ten = document.getElementById('ten')
    var twelve = document.getElementById('twelve')
    var fourt = document.getElementById('fourteen')
    var eight = document.getElementById('eighteen')
    var twenty = document.getElementById('twentyfour')
    var thirty = document.getElementById('thirty')

    document.getElementById('textArea').style.fontSize = " 0.6944444444444444vw"
    ten.classList.add('selectedSize')
    twelve.classList.remove('selectedSize')
    fourt.classList.remove('selectedSize')
    eight.classList.remove('selectedSize')
    twenty.classList.remove('selectedSize')
    thirty.classList.remove('selectedSize')
}

function twelve() {
    var ten = document.getElementById('ten')
    var twelve = document.getElementById('twelve')
    var fourt = document.getElementById('fourteen')
    var eight = document.getElementById('eighteen')
    var twenty = document.getElementById('twentyfour')
    var thirty = document.getElementById('thirty')

    document.getElementById('textArea').style.fontSize = "0.8333333333333334vw"
    twelve.classList.add('selectedSize')
    ten.classList.remove('selectedSize')
    fourt.classList.remove('selectedSize')
    eight.classList.remove('selectedSize')
    twenty.classList.remove('selectedSize')
    thirty.classList.remove('selectedSize')
}

function four() {
    var ten = document.getElementById('ten')
    var twelve = document.getElementById('twelve')
    var fourt = document.getElementById('fourteen')
    var eight = document.getElementById('eighteen')
    var twenty = document.getElementById('twentyfour')
    var thirty = document.getElementById('thirty')
    document.getElementById('textArea').style.fontSize = "0.9722222222222222vw"
    fourt.classList.add('selectedSize')
    ten.classList.remove('selectedSize')
    twelve.classList.remove('selectedSize')
    eight.classList.remove('selectedSize')
    twenty.classList.remove('selectedSize')
    thirty.classList.remove('selectedSize')
}

function eight() {
    var ten = document.getElementById('ten')
    var twelve = document.getElementById('twelve')
    var fourt = document.getElementById('fourteen')
    var eight = document.getElementById('eighteen')
    var twenty = document.getElementById('twentyfour')
    var thirty = document.getElementById('thirty')
    document.getElementById('textArea').style.fontSize = "1.25vw"
    eight.classList.add('selectedSize')
    ten.classList.remove('selectedSize')
    twelve.classList.remove('selectedSize')
    fourt.classList.remove('selectedSize')
    twenty.classList.remove('selectedSize')
    thirty.classList.remove('selectedSize')
}

function twenty() {
    var ten = document.getElementById('ten')
    var twelve = document.getElementById('twelve')
    var fourt = document.getElementById('fourteen')
    var eight = document.getElementById('eighteen')
    var twenty = document.getElementById('twentyfour')
    var thirty = document.getElementById('thirty')
    document.getElementById('textArea').style.fontSize = "1.6666666666666667vw"
    twenty.classList.add('selectedSize')
    ten.classList.remove('selectedSize')
    twelve.classList.remove('selectedSize')
    fourt.classList.remove('selectedSize')
    eight.classList.remove('selectedSize')
    thirty.classList.remove('selectedSize')
}


function thirty() {
    var ten = document.getElementById('ten')
    var twelve = document.getElementById('twelve')
    var fourt = document.getElementById('fourteen')
    var eight = document.getElementById('eighteen')
    var twenty = document.getElementById('twentyfour')
    var thirty = document.getElementById('thirty')
    document.getElementById('textArea').style.fontSize = "2.0833333333333335vw"
    thirty.classList.add('selectedSize')
    ten.classList.remove('selectedSize')
    twelve.classList.remove('selectedSize')
    fourt.classList.remove('selectedSize')
    eight.classList.remove('selectedSize')
    twenty.classList.remove('selectedSize')
}


function link() {
    var check = document.getElementById('check')
    var text = document.getElementById('textArea')

    check.classList.toggle('checked')
    text.classList.toggle('caps')
}