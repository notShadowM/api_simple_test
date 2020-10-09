const text = document.querySelector("#text");
const form = document.querySelector("#form");
const div = document.querySelector("#picsHolder");

let api_key= "";

const imgCreate = (src) =>{
    const img = document.createElement("img");
    img.src = src;
    div.appendChild(img);
}

function cb(e){
    // e =>{
        e.preventDefault();
    
        const termValue = text.value;
        div.textContent = "";
        if(termValue === "" || termValue === null || termValue === " "){
            fetch(`https://wall.alphacoders.com/api2.0/get.php?auth=${api_key}&method=newest`)
            .then(res => res.json())
            .then(data => {
                data.wallpapers.forEach(element => {
                    const src = element.url_image;
                    imgCreate(src);
                });
            })
            .catch(console.log);
        }else{
            fetch(`https://wall.alphacoders.com/api2.0/get.php?auth=${api_key}&method=search&term=${termValue}`)
            .then(res => res.json())
            .then(data => {
                data.wallpapers.forEach(element => {
                    const src = element.url_image;
                    imgCreate(src);
                });
            })
        }
    
    // }
}

form.addEventListener("submit", cb);



