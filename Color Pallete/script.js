const container = document.querySelector(".container");
const refreshBtn = document.querySelector(".refresh-btn");
const maxPaletteBox = 32;
const generatePalette = () => {
    //calling function to generate pallete on page load
    container.innerHTML = ""; //clearing the container
    for(let i = 0; i < maxPaletteBox; i++)
    {
    //generating random hex color code
    let randomHex = Math.floor(Math.random() * 0xffffff).toString(16) /*0xffffff is equal to 16777215*/
    /*Add # before the value to make 6 character long and make it valid hex code*/ 
    randomHex = `#${randomHex.padStart(6, "0")}`; /*padStart append 0 after # to ensure that RandomHex string is always 6 character long*/
    
    //creating a new element 'li' and inserting into a container
    const color = document.createElement("li");
    color.classList.add("color");
    color.innerHTML = `<div class="rect-box" style="background: ${randomHex}"></div>
    <span class="hex-value">${randomHex}</span>`;
    //adding click event to current li element to copy the color
    color.addEventListener("click", () => copyColor(color, randomHex));

    container.appendChild(color);
    }
}

const copyColor = (elem, hexValue) => {
    // console.log(elem, hexValue);
    const colorElement = elem.querySelector(".hex-value");//getting color element which is span
    //Copying the hexValue and updating text to copied 
    //and changing text back to orignal hex value after 1 second 
    navigator.clipboard.writeText(hexValue).then(() => {
        colorElement.innerText = "Copied";
        setTimeout(() => colorElement.innerText = hexValue, 1000);
    }).catch(() => alert("Failed to copy the color!")); //show this when color is not able to copied
}

refreshBtn.addEventListener("click", generatePalette);








