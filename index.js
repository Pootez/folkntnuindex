const links = document.getElementsByClassName('link')
console.log(links)

for (link of links) {
    const name = link.innerHTML

    link.style.cssText += `background-image: url(./images/${name}.png);`
}