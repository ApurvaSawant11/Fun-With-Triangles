const inputOption1 = document.querySelectorAll(".inputOption1");
const inputOption2 = document.querySelectorAll(".inputOption2");
const inputOption3 = document.querySelectorAll(".inputOption3");

const outputDiv = document.querySelectorAll(".output");


document.forms[0].addEventListener("submit", (e) => {
    e.preventDefault();
    const b=Number(inputOption1[0].value);
    const h=Number(inputOption1[1].value);

    outputDiv[0].innerText=((b*h)/2);
});

document.forms[1].addEventListener("submit", (e) => {
    e.preventDefault();

    const a = Number(inputOption2[0].value);
    const b = Number(inputOption2[1].value);
    const c = Number(inputOption2[2].value);

    if((a+b)>c && (b+c)>a && (a+c)>b)
    {
        const s = (a+b+c)/2;
        outputDiv[1].innerText = Math.sqrt(s*(s-a)*(s-b)*(s-c));
    }
    else{
        outputDiv[1].innerText = "Please enter valid inputs"
    }

});

document.forms[2].addEventListener("submit", (e) => {
    e.preventDefault();

    const b = Number(inputOption3[0].value);
    const c = Number(inputOption3[1].value);
    const angle = Number(inputOption3[2].value);

    outputDiv[2].innerText = (b*c*Math.sin(angle*Math.PI/180))/2;
});