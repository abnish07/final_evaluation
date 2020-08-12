
var url;
var totalImageData = []
var currentPage = 1
var imagePerPage;
var currentImagePage = []
var pageNumbers = []
var totalLength;

var nextPage; // link the url of next and previous page to every button 
var prevPage;
var searchQuery = document.getElementById("inputBox")

var count = 0;

// fetch the api 
const searchPhoto = async (pageNo) => {
    console.log("counter", count++)
    if (pageNo > 1) {
        url = "https://api.pexels.com/v1/search?page=" + pageNo + "&per_page=10&query="
        console.log("line no 23 page", pageNo)
        console.log("if page no>1", url)
    } else {
        url = "https://api.pexels.com/v1/search?page=1&per_page=10&query="
    }

    await fetch(url + searchQuery.value, {
            headers: {
                Authorization: "563492ad6f91700001000001d22d4d36082543dd90a94f1c5359b474"
            }
        })
        .then(response => response.json())
        .then(data => {

            totalImageData = data,
                imagePerPage = totalImageData.per_page,
                totalLength = totalImageData.total_results,
                nextPage = totalImageData.next_page,
                prevPage = totalImageData.prev_page,
                console.log(totalImageData)
            pageNumbers = []

        });

    displayData()

}

// Debauncing function start (2 s set time)
const debaunce = function (fn, t) {
    var timer;
    return function () {

        clearTimeout(timer)
        timer = setTimeout(() => {
            fn.apply(this, arguments)
        }, t)
    }
}

searchQuery = document.getElementById('inputBox')
searchQuery.addEventListener("onkeyup", debauncing)
var debauncing = debaunce(searchPhoto, 2000)

// Debauncing function end

// Pageination and generate the page no
const pagination = () => {
    for (let i = 1; i < Math.floor(totalLength / imagePerPage); i++) {
        pageNumbers.push(i)
    }
    displayButton()
}

// display the data

const displayData = () => {

    var root = document.getElementById("root")
    root.textContent = ""
    var div = document.createElement("div")
    div.setAttribute("class", "gridBox")
    for (let i = 0; i < totalImageData.photos.length; i++) {

        var imageBlock = document.createElement("img")
        imageBlock.setAttribute('class', "imgBlock")
        imageBlock.setAttribute("src", totalImageData.photos[i].src.original)

        div.appendChild(imageBlock)
        root.append(imageBlock)
    }
    pagination()
}

// display the page no data
const displayButton = () => {
    var paginationBtn = document.getElementById('paginationBtn')
    paginationBtn.textContent = ""
    var prev = document.createElement('a')
    prev.title = "prev";
    prev.href = prevPage;
    prev.addEventListener('click', searchPhoto)
    var next = document.createElement('a')
    next.title = "next";
    next.href = nextPage

    for (let i = 0; i < pageNumbers.length; i++) {
        let pageBtn = document.createElement('button')
        pageBtn.textContent = i
        pageBtn.addEventListener('click', function () {

            pageNoPass(i)
        })
        paginationBtn.append(pageBtn)


    }
}

// send the page no a paramater and again display the data according to the page no
function pageNoPass(pageNo) {
    console.log("Pageno", pageNo)
    searchPhoto(pageNo)

}

// 
var btn = document.getElementById("btn")
btn.addEventListener("click", searchPhoto)