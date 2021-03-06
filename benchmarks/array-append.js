var bench = require('microbench').renew('Array Operations');

    var ppush = Array.prototype.push, psplice = Array.prototype.splice, forEach = Array.prototype.forEach;
bench.set('default iterations', 100);
var tests = {
    push:function (fix) {
        var arr = [];
        ppush.apply(arr, fix);
        return arr;
    },
    'push in for loop':function(fix){
        var arr = [];
        for (var i= 0,l=fix.length; i<l; i++)
            arr.push(fix[i]);

        return arr;
    },
    'push in forEach':function(fix){
        var arr = [];
        fix.forEach(function(v){
            arr.push(v);
        });

        return arr;

    },
    'push in prototype forEach':function(fix){
        var arr = [];
        forEach.call(fix, function(v){
            arr.push(v);
        });

        return arr;

    },
    'forEach.call(fix, function(v){ ppush.call(this, v);}, arr);':function(fix){
        var arr = [];
        forEach.call(fix, function(v){
            ppush.call(this, v);
        }, arr);

        return arr;

    },
    splice:function (fix) {
        var arr = [];
        arr.splice(arr.length, fix.length, fix);
        return arr;
    },
    'splice prototype':function (fix) {
        var arr = [];
        psplice.apply(arr, [arr.length, fix.length, fix]);
        return arr;
    },
    'for (i < length)':function (fix) {
        var arr = [];
        var length = arr.length
        for (var i = 0, l = fix.length; i < l; i++)
            arr[length + i] = fix[i];
        return arr;

    },
    'while (i > -1) push':function (fix) {
        var arr = [];
        var i = fix.length-1;
        while (i-- > -1)
            arr.push(fix[i]);
        return arr;

    },
    'while (i > -1) expand':function (fix) {
        var arr = [];
        var i = fix.length-1;
        while (i-- > -1)
            arr[arr.length] = fix[i];
        return arr;
    },

    'for var in expand':function (fix) {
        var arr = [];
        for (var i in fix)
            arr[arr.length] = fix[i];
        return arr;
    }
}

var _fix = (function (fixtures) {
    var count = 1;
    var amount = ['tens', 'hundreds','thousands']
    var types = ['primitiveNumArray', 'objectArray', 'primitiveMixedArray'];
    var gen = bench.generators();
    amount.forEach(function(a){
        types.forEach(function(t){
            fixtures[a+' of '+t] = function(){ return gen[t](bench[a](count)) }
        });
    });
    return fixtures;
})({});

bench.perTestFixtures('primitive num array', function (fixtures) {
    Object.keys(_fix).forEach(function (k) {
        fixtures[k] = _fix[k]();
    });
});

Object.keys(_fix).forEach(function (k) {
    bench.category(k, function () {
        Object.keys(tests).forEach(function (fk) {
            bench.test(fk, function (fix) {
                tests[fk](fix[k])
            })
        });
    });
});

bench.run();