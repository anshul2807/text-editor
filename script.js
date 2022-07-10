let outerContainer = document.getElementById("outerContainer");

let curr_line=0;
const innerContDiv=[];


function incrementCurrentLine(){
    return ++curr_line;
}


function addNewInput(line){
    let innerCont = document.createElement("div");
    let innerContLeft=document.createElement("div");
    let innerContRight=document.createElement("div");
    let innerContRightInput = document.createElement("input");

    innerContRightInput.type="text";
    innerContRight.appendChild(innerContRightInput);
    innerContRight.classList.add("inner-container__right");

    innerContLeft.innerHTML=line;
    innerContLeft.classList.add("inner-container__left");

    innerCont.classList.add("inner-container");
    innerCont.appendChild(innerContLeft);
    innerCont.appendChild(innerContRight);

    outerContainer.appendChild(innerCont);
    innerContRightInput.setAttribute("id",line);
    innerContRightInput.focus();

    return line;
}


addNewInput(incrementCurrentLine());


window.addEventListener("keyup",(e)=>{
    if(e.target.tagName == "INPUT" && e.keyCode == 13){
        addNewInput(incrementCurrentLine());
    }
    if(e.target.tagName == "INPUT" && e.keyCode==38){
        document.getElementById(Math.max(e.target.id-1,1)).focus()
    }
    if(e.target.tagName == "INPUT" && e.keyCode==40){
        document.getElementById(Math.min(parseInt(e.target.id)+1 , curr_line)).focus()
    }
})





// document.getElementById(curr_cursor).focus()