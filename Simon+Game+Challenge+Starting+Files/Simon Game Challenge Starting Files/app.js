var heading = true
const red = new Audio("./sounds/red.mp3")
const blue = new Audio("./sounds/blue.mp3")
const green = new Audio("./sounds/green.mp3")
const yellow = new Audio("./sounds/yellow.mp3")
const wrong = new Audio("./sounds/wrong.mp3")

var array_length;
function page_reload() {
    location.reload();
}
var arr = [];
$(document).keypress(function () {
    if (heading === true) {
        $("h1").text("Game Started!")
        make_pattern();
        heading = false;
    }
})

function make_pattern() {
    var n1 = Math.floor(Math.random() * 4);
    arr.push(n1);
    array_length = arr.length;
    console.log(arr)
    if (n1 === 0) {
        green.play();
        $(".green").animate({
            opacity: 0.5
        })
        $(".green").animate({
            opacity: 1
        })
    }
    if (n1 === 1) {
        red.play();
        $(".red").animate({
            opacity: 0.5
        })
        $(".red").animate({
            opacity: 1
        })
    }
    if (n1 === 2) {
        yellow.play();
        $(".yellow").animate({
            opacity: 0.5
        })
        $(".yellow").animate({
            opacity: 1
        })
    }
    if (n1 === 3) {
        blue.play();
        $(".blue").animate({
            opacity: 0.5
        })
        $(".blue").animate({
            opacity: 1
        })
    }
}

// $(".red").click(function (event) {

//     $(".red").animate({
//         opacity: 0.5
//     })
//     $(".red").animate({
//         opacity: 1
//     })
//     if (arr[(arr.length - 1)] === 1) {
//         setTimeout(make_pattern, 1000);
//     }
//     else {
//         $("h1").text("Game Ended!");
//         wrong.play();
//         setTimeout(page_reload, 2000)
//     }
// })

// $(".blue").click(function (event) {
//     $(".blue").animate({
//         opacity: 0.5
//     })
//     $(".blue").animate({
//         opacity: 1
//     })
//     if (arr[(arr.length - 1)] === 3) {
//         setTimeout(make_pattern, 1000);
//     }
//     else {
//         $("h1").text("Game Ended!");
//         wrong.play();
//         setTimeout(page_reload, 2000)
//     }
// })

// $(".yellow").click(function (event) {
//     $(".yellow").animate({
//         opacity: 0.5
//     })
//     $(".yellow").animate({
//         opacity: 1
//     })
//     if (arr[(arr.length - 1)] === 2) {
//         setTimeout(make_pattern, 1000);
//     }
//     else {
//         $("h1").text("Game Ended!");
//         wrong.play();
//         setTimeout(page_reload, 2000)
//     }
// })

// $(".green").click(function (event) {
//     $(".green").animate({
//         opacity: 0.5
//     })
//     $(".green").animate({
//         opacity: 1
//     })
//     if (arr[(arr.length - 1)] === 0) {
//         setTimeout(make_pattern, 1000);
//     }
//     else {
//         $("h1").text("Game Ended!");
//         wrong.play();
//         setTimeout(page_reload, 2000)
//     }
// })
// to check for array.length 

$(".green").click(function (event) {
    $(".green").animate({
        opacity: 0.5
    })
    $(".green").animate({
        opacity: 1
    })
    var n2 = 0;
    check_pattern(n2);
})


$(".red").click(function (event) {
    $(".red").animate({
        opacity: 0.5
    })
    $(".red").animate({
        opacity: 1
    })
    var n2 = 1;
    check_pattern(n2);
})
$(".blue").click(function (event) {
    $(".blue").animate({
        opacity: 0.5
    })
    $(".blue").animate({
        opacity: 1
    })
    var n2 = 3;
    check_pattern(n2);
})


$(".yellow").click(function (event) {
    $(".yellow").animate({
        opacity: 0.5
    })
    $(".yellow").animate({
        opacity: 1
    })
    var n2 = 2;
    check_pattern(n2);
})



function check_pattern(n2) {
    // while (array_length > 0) {
    if (arr[-(array_length)] === n2) {
        if (array_length === 1) {
            make_pattern();
        }
        array_length = (array_length - 1);
    }
    else {
        $("h1").text("Game Ended!");
        wrong.play();
        setTimeout(page_reload, 2000)
    }
    if (arr[-(array_length)] === n2) {
        if (array_length === 1) {
            make_pattern();
        }
        array_length = array_length - 1;
    }
    else {
        $("h1").text("Game Ended!");
        wrong.play();
        setTimeout(page_reload, 2000)
    }


    if (arr[-(array_length)] === n2) {
        if (array_length === 1) {
            make_pattern();
        }
        array_length--;
    }
    else {
        $("h1").text("Game Ended!");
        wrong.play();
        setTimeout(page_reload, 2000)
    }


    if (arr[-(array_length)] === n2) {
        if (array_length === 1) {
            make_pattern();
        }
        array_length = array_length - 1;
    }
    else {
        $("h1").text("Game Ended!");
        wrong.play();
        setTimeout(page_reload, 2000)
    }
}
// }









