// https://api.pexels.com/v1/search/?page=2&per_page=15&query=people


var url = "https://api.pexels.com/v1/search?page=1&per_page=10&query="


if(url.includes("page=1")){
    url = "https://api.pexels.com/v1/search?page=1&per_page=10&query="
}
else{
    var page = 
    url = "https://api.pexels.com/v1/search?page=`${pageNo}`&per_page=10&query="
}

var totalImageData = []
var currentPage= 1
var imagePerPage;
 var currentImagePage= []
 var pageNumbers= []
 var totalLength;
var pageNo;
var nextPage; // link the url of next and previous page to every button 
var prevPage = totalImageData.prev_page; 
var searchQuery = document.getElementById("inputBox")

var count = 0;
const searchPhoto = async()=>
{
console.log("counter", count++)
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

    for(let i=0; i<pageNumbers.length; i++){
        let pageBtn = document.createElement('button')
        pageBtn.textContent = i
        setTimeout=(()=>{

            pageBtn.addEventListener('click', function(){
                pageNoPass(i)
            })
            paginationBtn.append(pageBtn)
        }, 4000)
    }
}
 
    // var paginationBtn = document.getElementById('paginationBtn')


pageNo = pageNoPass()



var btn = document.getElementById("btn")
btn.addEventListener( "click", searchPhoto)