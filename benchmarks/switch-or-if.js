var bench = require('microbench').renew('Array Operations');

//var ppush = Array.prototype.push, psplice = Array.prototype.splice, forEach = Array.prototype.forEach;
bench.set('default iterations', 100);
var switchFunc = function (count) {
    var str = 'switch(val){ \n';
    str += count.map(function (v, i) {
        return 'case ' + v + ': return ' + i;
    }).join(';\n');
    str += '}; return -1';
//    console.log('str', str);
    return new Function('val', str);
}
var ifEqSwitch = function (count) {
    var str = count.map(function (v, i) {
        return 'if ( ' + v + ' == val ) return ' + i;
    }).join(';\n');
    str += '; return -1';
//    console.log('str', str);
    return new Function('val', str);
}
var ifEqEqEqSwitch = function (count) {
    var str = count.map(function (v, i) {
        return 'if ( ' + v + ' === val ) return ' + i;
    }).join(';\n');
    str += '; return -1';
    // console.log('str', str);
    return new Function('val', str);
}
var ifElseEqEqEq = function (count) {
    var str = count.map(function (v, i) {
        return 'if ( ' + v + ' === val ){  return ' + i;
    }).join('\n } else ');
    str += '} return -1;';
    // console.log('str\n\n', str);
    return new Function('val', str);
}
function mkTest(func) {
    return function (fix) {
        var sw = func(fix);
        for (var v in fix)
            sw(v);
    }
}
var tests = {
    'number switch statement':mkTest(switchFunc),
    'number if/else === statement': mkTest(ifElseEqEqEq),
    'number if === statement': mkTest(ifEqEqEqSwitch),
    'number if == statement':mkTest(ifEqSwitch)
}

var _fix = (function (fixtures) {
    var count = 1;
    var amount = ['tens', 'hundreds']
    var types = ['primitiveNumArray'];
    var gen = bench.generators();
    amount.forEach(function (a) {
        types.forEach(function (t) {
            fixtures[a + ' of ' + t] = function () {
                return gen[t](bench[a](count))
            }
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