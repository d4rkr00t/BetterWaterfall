define(function () {

    var mainLegend = function() {
        var mainLegend = document.querySelector('.w-graph__main-legend'),
            width;

        var onScroll = function() {
            var winWidth = window.innerWidth,
                scrollPos = window.pageXOffset,
                pos = (scrollPos + winWidth / 2 ) - mainLegend.clientWidth / 2;

            mainLegend.style.left = pos + 'px';
        };

        window.onscroll = onScroll;
        onScroll();

        mainLegend.classList.add('-visible');
    };

    return {
        mainLegend: mainLegend
    };
});
