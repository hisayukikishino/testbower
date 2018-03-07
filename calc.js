var counter = (function () {
    //プライベートにしたいプロパティ
    var count = 0;

    return {
        //加算メソッド
        increment: function () {
            count += 1;
            console.log(count);
        },

        //減算メソッド
        decrement: function () {
            count -= 1;
            console.log(count);
        }
    };
}());

var sum = (function(a, b) {
    return a + b;
}());