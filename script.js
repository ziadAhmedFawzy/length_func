// funct to length

let countStr = string => {
    let result = 0;
    for(var i = 0; i < 1000000; i++)
    {
        if(typeof string[i] == "string") {
            result = i + 1;
        }
    }
    console.log(result);
};

countStr('ziad love js');


let btn = document.getElementById('go');

btn.onclick = function() {
    window.location.href = "https://ziadahmedfawzy.github.io/search_func/";
}