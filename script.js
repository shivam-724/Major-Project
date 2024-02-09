const inputBox = document.querySelector(".Vname input");
const plusbtn = document.querySelector(".row button");
const currlist = document.querySelector('.mylist');


plusbtn.onclick = () =>{
    let theinput = inputBox.value;
    let getstorage = localStorage.getItem("New task");
    if(getstorage == null){
        listArr = [];
    }
    else{
        listArr = JSON.parse(getstorage);
    }
    listArr.push(theinput);
    localStorage.setItem("New task",JSON.stringify(listArr));
    displaytask();
}

function displaytask(){
    let getstorage = localStorage.getItem("New task");
    if(getstorage == null){
        listArr = [];
    }
    else{
        listArr = JSON.parse(getstorage);
    }
    const pending = document.querySelector(".left");
    pending.textContent = listArr.length;
    
    let newbranch = '';
    listArr.forEach((element, index) => {
        newbranch += `<li>${element}</li>`;

    });
    currlist.innerHTML = newbranch;
    console.log(currlist.innerHTML)
    
}

displaytask();