/**closures-usage*/
///
function sum(a) {
    return function (b) {
        return a + b;
    }
}
///
function makeBuffer() {
    retStr = "";

    return function (str) {
        if(str != undefined){
            return retStr += str;
        }
        return retStr;
    }
}
///
function makeBuffer_2() {
    retStr = "";

    function buffer(str) {
        if(str != undefined){
            return retStr += str;
        }
        return retStr;
    }

    buffer.clear = function(){
      retStr = "";
    };

    return add;
}
///
