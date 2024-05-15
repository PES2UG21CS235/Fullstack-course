var message = "in global";
console.log("global : message = " + message);

var a = function () {
    var message = "inside a"
    console.log("a : message = " + message);
    var b2 = function () {
        console.log("b2 : message = " + message);
    }
    b1();
    b2();
}

var b1 = function () {
    console.log("b1 : message = " + message);
}
a();