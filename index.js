let result = document.getElementById('inputText');

let calculate =(number)=> {
    result.value+=number;
}

let clr=()=> {
    result.value = result.value.slice(0, 0);
}

let del=()=> {
    result.value =  result.value.slice(0, -1);
}

let Result=()=> {
    try {
        result.value = eval(result.value);
    }
    catch(err) {
        alert("Invalid input entered, try again!");
    }
}