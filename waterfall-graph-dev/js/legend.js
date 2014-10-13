define(function () {

    var mainLegend = function() {
        var mainLegend = document.querySelector('.w-graph__main-legend'),
            width = mainLegend.clientWidth;

        var onScroll = function() {
            var winWidth = window.innerWidth,
                scrollPos = window.pageXOffset,
                pos = (scrollPos + winWidth / 2 ) - width / 2;

            mainLegend.style.left = pos + 'px';
        };

        window.onscroll = onScroll;
        onScroll();
    };

    var _timingHoverTriggers;
    var timingsLegend = function() {
        console.log(_timingHoverTriggers);
    };

    var timingsLegendGetNewElems = function() {
        if (_timingHoverTriggers) {
            _timingHoverTriggers = document.querySelectorAll('.w-graph__entry-hover-trigger');
        } else {
            _timingHoverTriggers = document.querySelectorAll('.w-graph__entry-hover-trigger');
        }
        timingsLegend();
    };

    return {
        mainLegend: mainLegend,
        timingsLegend: timingsLegendGetNewElems
    };
});
