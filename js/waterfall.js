function debounce(a,b,c){var d;return function(){var e=this,f=arguments;clearTimeout(d),d=setTimeout(function(){d=null,c||a.apply(e,f)},b),c&&!d&&a.apply(e,f)}}

var getHAR = function() {
    var harPromise = D();

    chrome.devtools.network.getHAR(function (har) {
        harPromise.resolve(har);
    });

    return harPromise.promise;
};

var getResourceTimings = function() {
    var timingsPromise = D();

    chrome.devtools.inspectedWindow.eval('window.performance.getEntries()', function (result) {
        timingsPromise.resolve(result);
    });

    return timingsPromise.promise;
};

var processData = function(values) {
    var har = values[0],
        timing = values[1];

    console.log(har);
};

chrome.devtools.network.onRequestFinished.addListener(debounce(function(req) {
    Promise.all([getHAR(), getResourceTimings()]).then(processData);
}, 300));

D.all(getHAR(), getResourceTimings()).then(processData);
