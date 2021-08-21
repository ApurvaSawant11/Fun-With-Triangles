const outputDiv = document.querySelector("#outputDiv");
const inputAngles = document.querySelectorAll(".inputAngle");
const inputForm = document.querySelector("#anglesOfTriangleForm");

inputForm.addEventListener("submit", triangleHandler);
let angleArray=[]

function triangleHandler(e)
{
    e.preventDefault();
    let sum=0;


    for(var i=0;i<inputAngles.length;i++)
    {
        angleArray[i]=Number(inputAngles[i].value);
    }

    angleArray.map((angle) => {
        sum=sum+angle;
    });

    if(sum===180)
    {
        outputDiv.innerText = "Yay! These angles can make a triangle";
    }
    else{
        outputDiv.innerText = "Oops! These angles cannot make a triangle";
    }


}