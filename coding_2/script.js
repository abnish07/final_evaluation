// https://api.pexels.com/v1/search/?page=2&per_page=15&query=people

// var pageNo;
// var url = "https://api.pexels.com/v1/search?page=1&per_page=10&query="
// 


var url;
var totalImageData = []
var currentPage= 1
var imagePerPage;
 var currentImagePage= []
 var pageNumbers= []
 var totalLength;

var nextPage; // link the url of next and previous page to every button 
var prevPage; 
var searchQuery = document.getElementById("inputBox")

var count = 0;
const searchPhoto = async(pageNo)=>
{
console.log("counter", count++)

if(pageNo>1){
    url = url.replace("page=1", "page="+pageNo)
    console.log("line no 23 page", pageNo)
    console.log("if page no>1", url)
}
else{
     url = "https://api.pexels.com/v1/search?page=1&per_page=10&query="
     console.log("url", url)
}
    // if(url.includes("page=1")){
    //     url = "https://api.pexels.com/v1/search?page=1&per_page=10&query="
    // }
    // else{
    //      console.log("line no 33 url", url)
    //     // url = "https://api.pexels.com/v1/search?page=1&per_page=10&query="
    // }
    await fetch(url+searchQuery.value,{
        headers:{
            Authorization: "563492ad6f91700001000001d22d4d36082543dd90a94f1c5359b474"
        }
    })
  .then(response => response.json())
  .then(data => {

      totalImageData = data,
      imagePerPage= totalImageData.per_page,
      totalLength = totalImageData.total_results,
      nextPage = totalImageData.next_page,
      prevPage = totalImageData.prev_page,
      console.log(totalImageData)
     pageNumbers= []

  }
  );
 
  displayData()

//   console.log("pageNo", pageNo )
}

// Debauncing function start (2 s set time)
const debaunce = function (fn, t){
    var timer;
    return function(){

        clearTimeout(timer)
        timer = setTimeout(() =>{
            fn.apply(this, arguments)
        },t)
    }
}

    searchQuery = document.getElementById('inputBox')
    searchQuery.addEventListener("onkeyup", debauncing)  
    var debauncing = debaunce(searchPhoto, 2000)

    // Debauncing function end

    // display the data
    const pagination=()=>{
        for(let i=1; i<Math.floor(totalLength/imagePerPage); i++){
            pageNumbers.push(i)
        }
        // console.log("pagenumbers", pageNumbers)
        displayButton()
    }
    
const displayData = ()=>{

    var root = document.getElementById("root")
    root.textContent=""
    var div = document.createElement("div")
    div.setAttribute("class", "gridBox")
    for(let i=0; i<totalImageData.photos.length; i++){

        var imageBlock = document.createElement("img")
        imageBlock.setAttribute('class', "imgBlock")
        imageBlock.setAttribute("src", totalImageData.photos[i].src.original)

        div.appendChild(imageBlock)
        root.append(imageBlock)
    }
    pagination()
}
const displayButton=()=>{
    var paginationBtn = document.getElementById('paginationBtn')
    paginationBtn.textContent=""
    var prev = document.createElement('a')
    prev.title = "prev";
    prev.href= prevPage;
    prev.addEventListener('click', searchPhoto)
    var next = document.createElement('a')
    next.title = "next";
    next.href= nextPage

    // prev.setAttribute('')

    for(let i=0; i<pageNumbers.length; i++){
        let pageBtn = document.createElement('button')
        pageBtn.textContent = i
        // setTimeout=(()=>{
                pageBtn.addEventListener('click', function(){

                pageNoPass(i)
            })
        // }, 4000)
        paginationBtn.append(pageBtn)
      

    }
}

function pageNoPass(pageNo){
    console.log("Pageno", pageNo)
    searchPhoto(pageNo)

}
 
    // var paginationBtn = document.getElementById('paginationBtn')





var btn = document.getElementById("btn")
btn.addEventListener( "click", searchPhoto)