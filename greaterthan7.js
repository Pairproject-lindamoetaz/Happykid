function makeinstance(type,content,categorie,favourite){
    return {
    type:type,
    content:content,
    categorie:categorie,
    favourite:false,
    
}
}
var instance1=makeinstance('video','./video/7.mp4','gaming')
var instance2=makeinstance('video','./video/8.mp4','gaming')
var instance3=makeinstance('video','./video/9.mp4','gaming')
var instance4=makeinstance('video','./video/111.mp4','Learning')
var instance5=makeinstance('video','./video/222.mp4','Learning')
var instance6=makeinstance('video','./video/333.mp4','Learning')
var instance7=makeinstance('image','./images/1.jpg','gaming')
var instance8=makeinstance('image','./images/2.webp','gaming')
var instance9=makeinstance('image','./images/3.webp','gaming')
var instance10=makeinstance('image','./images/11.png','Learning')
var instance11=makeinstance('image','./images/22.jfif','Learning')
var instance12=makeinstance('image','./images/33.png','Learning')

var All=[instance1,instance2,instance3,instance4,instance5,instance6,instance7,instance8,instance9,instance10,instance11,instance12]
var bestof=[]
var toggelefavorite=function(index){  
    bestof.push(All[index])
    console.log(bestof)
    displayfav(bestof)
}

function each(array, func) {
    for (var i = 0; i < array.length; i++) {
        func(array[i], i);
    }
}

function displayfav(bestof) {
    $('.fav').empty(); 

    each(bestof, function (ele, i) {      
        var existingImage = $('.fav img[src="' + ele.content + '"]');     
        if (existingImage.length === 0) {
            // Append the image only if it doesn't already exist 
            $('.fav').append(`
                <img src=${ele.content}>
            `);
        }
    });
}


var $conatiner2 = $('.container2')
function display(All) {
    each(All, function (ele, i) {
        if(ele.type==='image'){ 
            $('.Images').append(`
        <img id="image-item"  src=${ele.content}><br>   
        <button class="like" onclick="toggelefavorite(${i})">♡</button>
`)
    }
    else if(ele.type==='video'){
        $('.Videos').append(` 
      
        <video id="videoitem" src=${ele.content} controls></video>
        `)

    }
})
}
display(All)
function filter(array, predicate) {
    var acc = [];
    each(array, function (element, index) {

        if (predicate(element, index)) {

            acc.push(element);
        }
    });
    return acc;
}
function filterByCategorie(query) {
    return filter(All, function (ele) {
        return ele.categorie.toLowerCase().includes(query.toLowerCase());
    });
}
function SearchUp() {
    var searchInput = $("#inp").val()
    var results = filterByCategorie(searchInput)
    console.log(results)
    if (results.length > 0) {
        $('.Images').empty()
        $('.Videos').empty()
        display(results);
    } else {
        alert("no results");
    }
}
var $searchbutton = $('#btn')
$searchbutton.on('click', SearchUp)

