foo = [{a: 1}]
// concat は破壊的ではないので foo は変わらない
bar = foo.concat([{b: 2}])
// bar[0]: {a: 1}
// bar[1]: {b: 2}
// bar[bar.length - 1]: {b: 2}
