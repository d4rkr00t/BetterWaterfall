(function () {
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
})();
