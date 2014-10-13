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

    var _timingHoverTriggers,
        _timingsLegend;
    var _detachEvents = function(list, listener) {
        [].forEach.call(list, function (item) {
            item.removeEventListener('mouseenter', listener);
        });
    };
    var _attachEvents = function(list, listener) {
        [].forEach.call(list, function (item) {
            item.addEventListener('mouseenter', listener);
        });
    };
    var _hoverListener = function(e) {
        setTimeout(function () {
            var x = e.target.getBBox().x,
                y = e.target.getBBox().y + 100,
                legendWidth = _timingsLegend.clientWidth,
                legendHeight = _timingsLegend.clientHeight,
                entityWidth = e.target.childNodes[0].getBBox().width,
                entityHeight = e.target.childNodes[0].getBBox().height,
                entityCenter = x + ( entityWidth / 2),
                windowRightBorder = window.innerWidth + window.pageXOffset,
                yPos = ( ( y + entityHeight / 2 ) - 80 - legendHeight );

            _timingsLegend.style.left = (entityCenter - legendWidth / 2) + 'px';
            _timingsLegend.style.top = ( y < yPos ? y - 30 - legendHeight : yPos ) + 'px';
        }, 0);
    };
    var timingsLegend = function() {
        _timingHoverTriggers && _detachEvents(_timingHoverTriggers, _hoverListener);
        !_timingsLegend && (_timingsLegend = document.querySelector('.w-graph__timings-legend'));
        _timingHoverTriggers = document.querySelectorAll('.w-graph__entry-hover-trigger');
        _attachEvents(_timingHoverTriggers, _hoverListener);
    };

    return {
        mainLegend: mainLegend,
        timingsLegend: timingsLegend
    };
});
