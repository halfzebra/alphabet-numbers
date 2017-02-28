function alphaToNum(alpha) {

    var i = 0;
    var num = 0;
    var len = alpha.length;

    for (; i < len; i++) {
        num = num * 26 + alpha.charCodeAt(i) - 0x40;
    }

    return num - 1;
}

function numToAlpha(num) {

    var alpha = '';

    for (; num >= 0; num = parseInt(num / 26, 10) - 1) {
        alpha = String.fromCharCode(num % 26 + 0x41) + alpha;
    }

    return alpha;
}

function buildColumnsArray(range) {

    var i;
    var res = [];
    var rangeNum = range.split(':').map(function(val) {
            return alphaToNum(val.replace(/[0-9]/g, ''));
        });
    var start = rangeNum[0];
    var end = rangeNum[1] + 1;

    for (i = start; i < end ; i++) {
        res.push(numToAlpha(i));
    }

    return res;
}

module.exports = {
    alphaToNum: alphaToNum,
    numToAlpha: numToAlpha,
    buildColumnsArray: buildColumnsArray
};