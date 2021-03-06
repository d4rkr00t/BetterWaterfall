define(['vendor/d3/d3.min'], function(d3) {
    var mainGraphCont,
        svg,
        paddings = { top: 0, right: 120, bottom: 0, left: 60 },
        width = 340,
        height = 0,
        xScale,
        yScale,
        vStep = 31,
        timings = [],
        max = 0,
        detailCont = d3.select('.w-detail'),
        waterfallCont = d3.select('.w-graph__cont')
        title = detailCont.select('.w-detail__title'),
        host = detailCont.select('.w-detail__host'),
        mimeType = detailCont.select('.w-detail__mime-type'),
        callback = false;

    var prepareTimings = function(data) {
        var propList = ['blocked', 'dns', 'connect', 'ssl', 'send', 'wait', 'receive'],
            result = [],
            totalTime = 0;

        for (var i = 0; i < propList.length; i++) {
            if (data.timings[propList[i]]) {

                data.timings[propList[i]] > max && (max = data.timings[propList[i]]);
                if (propList[i] === 'ssl') {
                    result.push({
                        title: propList[i],
                        val: data.timings[propList[i]],
                        xPos: totalTime - data.timings[propList[i]],
                        ms: (Math.ceil(data.timings[propList[i]] * 100) / 100) + ' ms',
                        percent: (Math.ceil(((data.timings[propList[i]] * 100) / data.time) * 100) / 100) + '%'
                    });
                } else {
                    result.push({
                        title: propList[i],
                        val: data.timings[propList[i]],
                        xPos: totalTime,
                        ms: (Math.ceil(data.timings[propList[i]] * 100) / 100) + ' ms',
                        percent: (Math.ceil(((data.timings[propList[i]] * 100) / data.time) * 100) / 100) + '%'
                    });

                    totalTime += data.timings[propList[i]];
                }
            }

        }

        return result;
    };

    var prepareMainGraph = function(data) {
        width = width - paddings.left - paddings.right;
        height = (timings.length * vStep) - paddings.top - paddings.bottom;

        mainGraphCont = d3.select('.w-detail-graph');

        svg = mainGraphCont
            .attr('width', width + paddings.left + paddings.right)
            .attr('height', height + paddings.top + paddings.bottom + 50)
        .append('g')
            .attr('transform', 'translate(' + paddings.left + ',' + paddings.top + ')');

        /**
         * Create graph scales
         */
        xScale = d3.scale.linear()
                    .domain([0, data.time])
                    .range([1, width]);

        yScale = d3.scale.linear()
                    .domain([0, height / vStep])
                    .range([0, height]);
    };

    /**
     * Graph Methods
     */

    var drawTimings = (function() {
        var cont;

        return function (svg, timings) {
            if (!!svg.select('.w-detail__timings')[0]) cont = svg.append('g').attr('class', 'w-detail__timings');

            /**
             * Timings Group
             */
            var group = cont.selectAll('.w-detail__timing')
                            .data(timings);

            group
                .exit()
                    .select('.w-detail__timing-entry')
                        .transition()
                        .duration(300)
                        .attr('width', 0);

            group
                .exit()
                    .transition()
                    .duration(300)
                    .remove();

            groupEnter = group.enter().append('g')
                .attr('class', function (d) {
                    return 'w-detail__timing -' + d.title;
                });

            groupEnter
                .append('rect')
                    .attr('class', function (d) {
                        return 'w-detail__timing-entry -' + d.title;
                    })
                    .attr('x', function (d) { return xScale(d.xPos); })
                    .attr('y', function (d, i) { return yScale(i); })
                    .attr('width', 0)
                    .attr('height', function () { return vStep; })
                    .transition()
                    .duration(400)
                    .attr('width', function (d) { return xScale(d.val); });

            groupEnter
                .append('text')
                    .attr('class', function (d) {
                        return 'w-detail__timing-title -' + d.title;
                    })
                    .text(function (d) { return d.title })
                    .attr('x', function (d) { return xScale(d.xPos) - 10; })
                    .attr('y', function (d, i) { return yScale(i) + ( vStep / 2 ) + 5; })
                    .attr('text-anchor', 'end');

            groupEnter
                .append('text')
                    .attr('class', function (d) {
                        return 'w-detail__timing-info' + (d.val === max ? ' -max' : '');
                    })
                    .text(function (d) { return d.ms; })
                    .attr('x', function (d) { return xScale(d.xPos + d.val) + 10; })
                    .attr('y', function (d, i) { return yScale(i) + 21; })
                    .attr('text-anchor', 'start');

            groupEnter
                .append('text')
                    .attr('class', 'w-detail__timing-info -percent')
                    .text(function (d) { return d.percent; })
                    .attr('x', function (d) { return xScale(d.xPos + d.val) + 10; })
                    .attr('y', function (d, i) { return yScale(i) + 21; })
                    .attr('text-anchor', 'start');

        };
    })();

    var drawTotalTime = (function() {
        var cont;

        return function (svg, data) {
            if (!!svg.select('.w-detail__total-time')[0]) cont = svg.append('g').attr('class', 'w-detail__total-time');

            cont
                .append('line')
                .attr('class', 'w-detail__total-time__line')
                .attr('x1', 0)
                .attr('x2', xScale(data.time))
                .attr('y1', height + 18.5)
                .attr('y2', height + 18.5);

            cont
                .append('text')
                .attr('class', 'w-detail__total-time__text')
                .text('Total Time: ' + (Math.ceil(data.time * 100) / 100) + ' ms')
                .attr('x', xScale(data.time) / 2)
                .attr('y', height + 38)
                .attr('text-anchor', 'middle');
        };
    })();

    var drawSizes = (function() {
        var cont;

        return function (svg, data) {
            if (!!svg.select('.w-detail__sizes')[0]) cont = svg.append('g').attr('class', 'w-detail__sizes');

            cont
                .append('text')
                .attr('class', 'w-detail__size -size')
                .text('Size: ' + (Math.ceil((data.size / 1024) * 100) / 100) + ' KB')
                .attr('x', xScale(data.time) + paddings.right)
                .attr('y', 18)
                .attr('text-anchor', 'end');

            cont
                .append('text')
                .attr('class', 'w-detail__size -content-size')
                .text('Content: ' + (Math.ceil((data.contentSize / 1024) * 100) / 100) + ' KB')
                .attr('x', xScale(data.time) + paddings.right)
                .attr('y', 38)
                .attr('text-anchor', 'end');
        };
    })();

    /**
     * State actions
     */
    var open = function() {
        waterfallCont.classed('-blur', true);
        detailCont.classed('-open', true);
    };

    var close = function() {
        waterfallCont.classed('-blur', false);
        callback && callback();
    };

    var cleanUp = function() {
        svg && svg.selectAll('*').remove();
        detailCont.classed('-open', false);
    };

    var resize = function(data) {
        height = (timings.length * vStep) - paddings.top - paddings.bottom;

        mainGraphCont.attr('height', height + paddings.top + paddings.bottom + 50);

        xScale
            .domain([0, data.time])
            .range([1, width]);

        yScale
            .domain([0, height / vStep])
            .range([0, height]);
    };

    var setStaticData = function(data) {
        title
            .text(data.name)
            .attr('href', data.url);

        host.text(data.host);
        mimeType
            .text(data.mimeType)
            .attr('class', 'w-detail__mime-type -' + data.type);
    };

    detailCont.on('click', function  () {
        close();
    });

    return {
        render: function (data, cb) {
            max = 0;
            timings = prepareTimings(data);
            callback = cb;

            if (!mainGraphCont) {
                prepareMainGraph(data);
            } else {
                resize(data);
            }

            cleanUp();
            setStaticData(data);
            open();

            if (data.time > 0) {
                drawTimings(svg, timings);
                drawTotalTime(svg, data);
                drawSizes(svg, data);
            }
        },
        cleanUp: cleanUp
    };
});
