function changeText() {
    
    let timerId = setTimeout(function () {
        document.getElementById("text-change").innerHTML = 'We are Secured';
        setTimeout(function () {
            document.getElementById("text-change").innerHTML = "We are Reliable";
            setTimeout(function () {
                document.getElementById("text-change").innerHTML = "We are at your Service";
                setTimeout(function () {
                    document.getElementById("text-change").innerHTML = "We are Fast";
                }, 3000)
                timerId = setTimeout(changeText, 3000);
            }, 3000);
        }, 3000);
    }, 3000);
}
