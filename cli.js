var nsrank = require('./nsrank');

nsrank.get(function (ranks) {
    for (var i = 0, len = ranks.length; i < len; i++) {
        console.log((i + 1) + ') ' + ranks[i]);
    }
});