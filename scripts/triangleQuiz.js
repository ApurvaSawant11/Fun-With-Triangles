const form = document.querySelector("#form");
const que = document.querySelectorAll(".que");
const outputDiv = document.querySelector("#score");

const answers=["Acute", "Equilateral", "32", "Obtuse", "Hypotenuse", "True", "180","Three","True","60","False"];
let score=0;

form.addEventListener("submit", (e) => {
    e.preventDefault();

    let index=0;

    const data = new FormData(form);

    for(let entry of data)
    {
       if(entry[1] === answers[index])
       {
           que[index].style.backgroundColor = "lightgreen";
           score++;
       }
       else{
        que[index].style.backgroundColor = "red";
       }
       index++;
    }

    outputDiv.innerText = `Your Score is: ${score}`;
})