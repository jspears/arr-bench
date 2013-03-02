var bench = require('microbench').renew('Array Operations');
var ppush = Array.prototype.push, psplice = Array.prototype.splice;
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
        var olength = arr.length
        for (var i = 0, l = fix.length; i < l; i++)
            arr[olength + i] = fix[i];
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
    fixtures['primitive array 10s'] = function () {
        return bench.generators().primitiveNumArray(bench.tens(1));
    };
    fixtures['primitive array 100s'] = function () {
        return bench.generators().primitiveNumArray(bench.hundreds(1));
    };
    fixtures['primitive array 1000s'] = function () {
        return bench.generators().primitiveNumArray(bench.thousands(1));
    };
    fixtures['object array 10s'] = function () {
        return bench.generators().objectArray(bench.tens(1));
    };
    fixtures['object array 100s'] = function () {
        return bench.generators().objectArray(bench.hundreds(1));
    };

    fixtures['object array 1000s'] = function () {
        return bench.generators().objectArray(bench.thousands(1));
    };
    fixtures['mixed array 10s'] = function () {
        return bench.generators().primitiveMixedArray(bench.tens(1));
    };
    fixtures['mixed array 100s'] = function () {
        return bench.generators().primitiveMixedArray(bench.hundreds(1));
    };
    fixtures['mixed array 1000s'] = function () {
        return bench.generators().primitiveMixedArray(bench.thousands(1));
    };
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

//
//    bench.test('push10s',function (fixtures) {
//        ppush.apply([], fixtures.array10s);
////        var array = fixtures.array, v, times = array.length;
////        for (var i = 0; i < times; i++) {
////            v = array[i];
////        }
//
//    }).test('push100s',function (fixtures) {
//            ppush.apply([], fixtures.array100s);
//
//        }).test('push1000s',function (fixtures) {
//            ppush.apply([], fixtures.array1000s);
//
//        }).test('splice10s',function (fixtures) {
//            var arr = [];
//            var fix = fixtures.array10s;
//
//            arr.splice(arr.length, fix.length, fix);
//        }).test('splice100s',function (fixtures) {
//            var arr = [];
//            var fix = fixtures.array100s;
//            arr.splice(arr.length, fix.length, fix);
//        }).test('splice1000s', function (fixtures) {
//            var arr = [];
//            var fix = fixtures.array1000s;
//
//            arr.splice(arr.length, fix.length, fix);
//
//
//        });
//
//

bench.run();