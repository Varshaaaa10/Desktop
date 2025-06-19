function assignbooth(){
    let username=document.getElementById("username").value.trim()
if(username===""){
    console.log("Please Insert Your Username")
    return;
}
let firstchar=username.charAt(0).toLowerCase()
let boothmessage ="";
    if(firstchar>="a"&&firstchar<="d"){
        boothmessage ="You Belong to  booth 1"
    }
    else if(firstchar>="e"&&firstchar<="h"){
        boothmessage=" You Belong to  booth 2"
    }
    else if(firstchar>="i"&&firstchar<="l"){
        boothmessage=" You Belong to  booth 3"
    }
    else if(firstchar>="m"&&firstchar<="p"){
       boothmessage="You Belong to  booth 4"
    }
    else if(firstchar>="q"&&firstchar<="t"){
        boothmessage="You Belong to  booth 5"
    }
    else if(firstchar>="u"&&firstchar<="z"){
        boothmessage=" You Belong to  booth 6"
    }
    else{
        console.log(" Invalid Input ");
    }

        window.location.href = `result.html?message=${encodeURIComponent(boothmessage)}`;

}
