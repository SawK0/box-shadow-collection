const boxes = document.querySelectorAll(".box");


boxes.forEach(box=>{
    box.addEventListener("click",event=>{
        console.log(event.target.textContent)
        const boxText = event.target.textContent;
        const copyStlye = event.target.style.boxShadow;

        navigator.clipboard.writeText(`box-shadow: ${copyStlye};`);
        event.target.textContent = "Copied"

        setTimeout(() => {
            event.target.textContent = boxText;
        }, 3000);
    })
})


