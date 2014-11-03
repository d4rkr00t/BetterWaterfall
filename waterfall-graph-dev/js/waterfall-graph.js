/**
 *
 * Waterfall graph
 *
 */
define(['vendor/d3/d3.min', 'app/utils', 'app/legend'], function (d3, utils, legend) {

var paddings = { top: 100, bottom: 68, left: 18 + 350, right: 38 },
    vStep = 3,

    mainGraphCont,
    mainLegend,
    timingsLegend,
    svg,
    width,
    height,
    xScale,
    yScale,

    detailView,

    pageStartTime,
    pageEndTime,
    entries,
    mainHost,
    onLoad,
    onContentLoad,

    state = {},

    _prev = null,
    _prevThis = null;

var prepEntriesData = function(entr, pageStartTime) {
    var totalSize = 0;

    return entr.map(function (item) {
        var startTime = new Date(item.startedDateTime).getTime(),
            yPos = totalSize,
            parsedUrl = item.request.url.match(/^data/) ? {
                    name: item.request.url.split('/')[0],
                    host: 'data-uri'
                } : utils.parseUrl(item.request.url);

        totalSize += utils.formatSize(item.response.content.size) + vStep;

        return {
            time: item.time,
            method: item.request.method,
            name: parsedUrl.name,
            host: parsedUrl.host,
            url: item.request.url,
            mimeType: item.response.content.mimeType,
            type: utils.getContentType(item.response.content.mimeType),
            contentSize: item.response.content.size,
            respHeaderSize: item.response.headersSize,
            respBodySize: item.response.bodySize,
            cache: item.cache,
            size: item.response.headersSize + item.response.bodySize,
            yPos: yPos,
            timings: {
                startTime: startTime,
                startTimeRelated: startTime - pageStartTime,
                endTime: startTime + item.time,
                endTimeRelated: (startTime + item.time) - pageStartTime,
                blocked: item.timings.blocked > 0 ? item.timings.blocked : 0,
                dns: item.timings.dns > 0 ? item.timings.dns : 0,
                connect: item.timings.connect > 0 ? item.timings.connect : 0,
                send: item.timings.send > 0 ? item.timings.send : 0,
                wait: item.timings.wait > 0 ? item.timings.wait : 0,
                receive: item.timings.receive > 0 ? item.timings.receive : 0,
                ssl: item.timings.ssl > 0 ? item.timings.ssl : 0
            }
        };
    });
};

var getGraphHeight = function(entr, paddings) {
    return Math.ceil(entr.reduce(function (sum, item) {
        if (sum.toString() !== '[object Object]') {
            return sum + utils.formatSize(item.contentSize) + vStep;
        }
        return utils.formatSize(sum.contentSize) + utils.formatSize(item.contentSize) + vStep;
    }));
};

var getPageEndTime = function(onLoad, entries, pageStartTime) {

    var lastEntry;

    for (var i = 0; i < entries.length; i++) {
        if (!lastEntry || entries[i].timings.endTime > lastEntry.timings.endTime) {
            lastEntry = entries[i];
        }
    }

    return Math.ceil(lastEntry.timings.endTime - pageStartTime) + 200;
};

/**
 *
 *
 * Graph Methods
 *
 *
 */

var _cleanUp = function(el, d) {
    d3.select(el.parentNode).classed('-hover', false);
    d3.select(el.parentNode).classed('-click', false);

    mainGraphCont.classed('-hover', false);
    mainGraphCont.classed('-click', false);

    mainLegend
        .classed('-hover', false)
        .classed('-click', false)
        .classed('-' + d.type, false);

    timingsLegend.classed('-hover', false);
    timingsLegend.classed('-click', false);

    for (var timing in d.timings) {
        if ( d.timings.hasOwnProperty(timing) ) {
            d.timings[timing] && timingsLegend.classed('-' + timing, false);
        }
    }

    detailView.cleanUp();
};

var drawXAxis = (function() {
    var cont,
        step = 100;

    return function (svg, width, height, paddings) {
        if (!svg.select('.w-graph__x-axis') || !cont) cont = svg.append('g').attr('class', 'w-graph__x-axis');

        cont.selectAll('.w-graph__x-axis-tick').remove();

        var count = new Array(Math.floor((width / step))),
            groups = cont.selectAll('.w-graph__x-axis-tick')
                            .data(count);

        cont.selectAll('.w-graph__x-axis-tick').remove();
        cont.selectAll('.w-graph__x-axis-text').remove();

        var groupsEnter = groups.enter().append('g');

        groups
            .append('line')
            .attr('x1', function (d, i) { return i * step + 0.5; })
            .attr('x2', function (d, i) { return i * step + 0.5; })
            .attr('y1', 0 - paddings.top + 40)
            .attr('y2', height + paddings.bottom)
            .attr('class', function (d, i) {
                if (i * step === 1000) return 'w-graph__x-axis-tick -thousand';
                return 'w-graph__x-axis-tick';
            });

        groups
            .append('text')
            .text(function (d, i) {
                return (i * step) + ' ms';
            })
            .attr('x', function (d, i) {return i * step + 6; })
            .attr('y', 50 - paddings.top)
            .attr('text-anchor', 'right')
            .attr('class', function (d, i) {
                if (i * step === 1000) return 'w-graph__x-axis-text -thousand';
                return 'w-graph__x-axis-text';
            });
    };
})();

var drawDOMEvents = (function() {
    var cont;

    return function (svg, onLoad, onContentLoad, paddings) {
        if (!svg.select('.w-graph__dom-events')[0][0]) cont = svg.append('g').attr('class', 'w-graph__dom-events');

        if (!state.onLoadDrawn) {
            if (onLoad) {
                cont
                    .append('line')
                    .attr('x1', xScale(onLoad))
                    .attr('x2', xScale(onLoad))
                    .attr('y1', 0 - paddings.top + 10)
                    .attr('y2', height + paddings.bottom)
                    .attr('class', 'w-graph__dom-event -onload');

                cont
                    .append('text')
                    .text('Load event (' + Math.floor(onLoad) + ' ms)')
                    .attr('x', xScale(onLoad) + 6)
                    .attr('y', 20 - paddings.top)
                    .attr('text-anchor', 'right')
                    .attr('class', 'w-graph__dom-text -onload');

                state.onLoadDrawn = true;
            }
        } else {
            cont.select('.w-graph__dom-event.-onload')
                .transition()
                .duration(200)
                .attr('y2', height + paddings.bottom);
        }

        if (!state.onContentLoadDrawn) {
            if (onContentLoad) {
                cont
                    .append('line')
                    .attr('x1', xScale(onContentLoad))
                    .attr('x2', xScale(onContentLoad))
                    .attr('y1', 0 - paddings.top + 10)
                    .attr('y2', height + paddings.bottom)
                    .attr('class', 'w-graph__dom-event -oncontentload');

                cont
                    .append('text')
                    .text('DOMContentLoaded event (' + Math.floor(onContentLoad) + ' ms)')
                    .attr('x', xScale(onContentLoad) + 6)
                    .attr('y', 20 - paddings.top)
                    .attr('text-anchor', 'right')
                    .attr('class', 'w-graph__dom-text -oncontentload');

                state.onContentLoadDrawn = true;
            }
        } else {
            cont.select('.w-graph__dom-event.-oncontentload')
                .transition()
                .duration(200)
                .attr('y2', height + paddings.bottom);
        }


    };
})();

var drawEntries = (function() {
    var cont;

    return function (svg, data, entries) {
        if (!svg.select('.w-graph__entries')[0][0]) cont = svg.append('g').attr('class', 'w-graph__entries');

        /**
         * Main Entry time
         */
        var group = cont.selectAll('.w-graph__entry')
                        .data(entries, function (d) {
                            return d.url + pageStartTime + data.pages[0].title + data.pages[0].id;
                        });

        groupEnter = group
            .enter().append('g')
            .attr('class', function (d) {
                return 'w-graph__entry -' + d.type;
            });

        var _hover = function(el, d, cls) {
            d3.select(el.parentNode).classed(cls, true);
            mainGraphCont.classed(cls, true);
            mainLegend
                .classed(cls, true)
                .classed('-' + d.type, true);

            timingsLegend.classed(cls, true);

            for (var timing in d.timings) {
                if ( d.timings.hasOwnProperty(timing) ) {
                    d.timings[timing] && timingsLegend.classed('-' + timing, true);
                }
            }
        };

        var hoverGroup = groupEnter
            .append('g')
                .attr('class', 'w-graph__entry-hover-trigger')
                .on('click', function(d) {
                    if (_prev !== d) {
                        _prev && _cleanUp(_prevThis, _prev);

                        _prev = d;
                        _prevThis = this;

                        detailView.render(d);

                        _hover(this, d, '-click');
                    } else {
                        _prev = null;
                        _cleanUp(this, d);
                    }
                })
                .on('mouseover', function(d) {
                    if (mainLegend.classed('-click')) return;
                    _hover(this, d, '-hover');
                })
                .on('mouseout', function(d) {
                    if (mainLegend.classed('-click')) return;
                    _cleanUp(this, d);
                });

        hoverGroup
            .append('rect')
                .attr('class', 'w-graph__entry-main')
                .attr('x', function (d) {
                    return xScale(d.timings.startTimeRelated);
                })
                .attr('y', function (d) {
                    return yScale(d.yPos);
                })
                .attr('height', function (d) {
                    return utils.formatSize(d.contentSize);
                })
                .attr('width', function (d) {
                    return d.time || 2;
                });

        /**
         * Timings parts
         */
        var subGroup = hoverGroup.append('g').attr('class', 'w-graph__entry-sub');
        var drawTimingPart = function(grp, prop, timingPropsToAdd) {
            subGroup
                .append('rect')
                .attr('class', '-' + prop)
                .attr('x', function (d) {
                    if (!timingPropsToAdd) { return d.timings.startTimeRelated; };

                    var x = d.timings.startTimeRelated;

                    for (var i = 0, max = timingPropsToAdd.length; i < max; i++) {
                        x += d.timings[timingPropsToAdd[i]];
                    }

                    return x;
                })
                .attr('y', function (d) {
                    return xScale(d.yPos);
                })
                .attr('width', function (d) {
                    return d.timings[prop];
                })
                .attr('height', function (d) {
                    return utils.formatSize(d.contentSize);
                });
        };

        subGroup
            .append('rect')
                .attr('class', 'w-graph__entry-sub')
                .attr('x', function (d) {
                    return xScale(d.timings.startTimeRelated);
                })
                .attr('y', function (d) {
                    return yScale(d.yPos);
                })
                .attr('height', function (d) {
                    return utils.formatSize(d.contentSize);
                })
                .attr('width', function (d) {
                    return d.time || 2;
                })
                .attr('fill', 'rgba(255,255,255,.1)');

        drawTimingPart(subGroup, 'blocked');
        drawTimingPart(subGroup, 'dns', ['blocked']);
        drawTimingPart(subGroup, 'connect', ['blocked', 'dns']);
        drawTimingPart(subGroup, 'send', ['blocked', 'dns', 'connect']);
        drawTimingPart(subGroup, 'wait', ['blocked', 'dns', 'connect', 'send']);
        drawTimingPart(subGroup, 'receive', ['blocked', 'dns', 'connect', 'send', 'wait']);

        /**
         * Entry Info
         */
        var entryInfoGroup = groupEnter.append('g').attr('class', 'w-graph__entry-sub-info');

        entryInfoGroup
            .append('line')
            .attr('x1', function (d) {
                return xScale(d.timings.endTimeRelated) + 8;
            })
            .attr('x2', function (d) {
                return xScale(d.timings.endTimeRelated) + 8;
            })
            .attr('y1', function (d) {
                return yScale(d.yPos);
            })
            .attr('y2', function (d) {
                return yScale(d.yPos + utils.formatSize(d.contentSize));
            })
            .attr('class', 'w-graph__entry-sub-info__line');

        entryInfoGroup
            .append('line')
            .attr('x1', function (d) {
                return xScale(d.timings.endTimeRelated) + 8;
            })
            .attr('x2', function (d) {
                return xScale(d.timings.endTimeRelated) + 30;
            })
            .attr('y1', function (d) {
                return yScale(d.yPos + (utils.formatSize(d.contentSize) / 2 ));
            })
            .attr('y2', function (d) {
                return yScale(d.yPos + (utils.formatSize(d.contentSize) / 2 ));
            })
            .attr('class', 'w-graph__entry-sub-info__line');

        entryInfoGroup
            .append('line')
            .attr('x1', function (d) {
                return xScale(d.timings.endTimeRelated) + 30;
            })
            .attr('x2', function (d) {
                return xScale(d.timings.endTimeRelated) + 30;
            })
            .attr('y1', function (d) {
                return yScale(d.yPos + (utils.formatSize(d.contentSize) / 2 )) - 53;
            })
            .attr('y2', function (d) {
                return yScale(d.yPos + (utils.formatSize(d.contentSize) / 2 )) + 53;
            })
            .attr('class', 'w-graph__entry-sub-info__line');

        var textX = function(d) {
            return xScale(d.timings.endTimeRelated) + 38;
        };

        entryInfoGroup
            .append('text')
            .text(function (d) {
                return 'Name: ' + d.name
            })
            .attr('x', textX)
            .attr('y', function (d) {
                return yScale(d.yPos + (utils.formatSize(d.contentSize) / 2 )) - 43;
            })
            .attr('class', 'w-graph__entry-sub-info__text -name');

        entryInfoGroup
            .append('text')
            .text(function (d) {
                return 'Host: ' + d.host
            })
            .attr('x', textX)
            .attr('y', function (d) {
                return yScale(d.yPos + (utils.formatSize(d.contentSize) / 2 )) - 24;
            })
            .attr('class', function (d) {
                return 'w-graph__entry-sub-info__text -host ' + (d.host === mainHost ? '' : '-diff')
            });

        entryInfoGroup
            .append('text')
            .text(function (d) {
                return 'Content-Type: ' + d.mimeType
            })
            .attr('x', textX)
            .attr('y', function (d) {
                return yScale(d.yPos + (utils.formatSize(d.contentSize) / 2 )) - 5;
            })
            .attr('class', function (d) {
                return 'w-graph__entry-sub-info__text -' + d.type;
            });

        entryInfoGroup
            .append('text')
            .text(function (d) {
                return 'Size: ' + ( Math.round( (d.size / 1024) * 100 ) / 100 ) + ' KB'
            })
            .attr('x', textX)
            .attr('y', function (d) {
                return yScale(d.yPos + (utils.formatSize(d.contentSize) / 2 )) + 14;
            })
            .attr('class', 'w-graph__entry-sub-info__text');

        entryInfoGroup
            .append('text')
            .text(function (d) {
                return 'Content Size: ' + ( Math.round( (d.contentSize / 1024) * 100 ) / 100 ) + ' KB'
            })
            .attr('x', textX)
            .attr('y', function (d) {
                return yScale(d.yPos + (utils.formatSize(d.contentSize) / 2 )) + 33;
            })
            .attr('class', 'w-graph__entry-sub-info__text');

        entryInfoGroup
            .append('text')
            .text(function (d) {
                return 'Total Time: ' + ( Math.round( d.time * 100 ) / 100 ) + ' ms'
            })
            .attr('x', textX)
            .attr('y', function (d) {
                return yScale(d.yPos + (utils.formatSize(d.contentSize) / 2 )) + 52;
            })
            .attr('class', 'w-graph__entry-sub-info__text -total');
    };
})();

var drawTotalResources = (function() {
    var cont;

    return function (svg, data) {
        if (!svg.select('.w-graph__total')[0][0]) cont = svg.append('g').attr('class', 'w-graph__total');

        cont.selectAll('*').remove();

        cont
            .append('text')
                .text(function (d) {
                    return 'Total Resources: ' + data.entries.length
                })
                .attr('x', 0)
                .attr('y', 30 - paddings.top);
    };
})();

var _clean = function() {
    _prevThis && _prev && _cleanUp(_prevThis, _prev);
    onLoad = null;
    onContentLoad = null;
    state = {};
    svg.select('.w-graph__entries').remove();
    svg.select('.w-graph__dom-events').remove();
};

return {
    render: function (data, dv) {
        detailView = dv;

        if (data.entries.length > 0 && data.pages.length > 0) {

            mainGraphCont && _clean();

            document.querySelector('.w-no-data').classList.add('-hidden');

            pageStartTime = new Date(data.pages[0].startedDateTime).getTime();
            entries = prepEntriesData(data.entries, pageStartTime);
            onLoad = data.pages[0].pageTimings.onLoad;
            onContentLoad = data.pages[0].pageTimings.onContentLoad;
            pageEndTime = getPageEndTime(onLoad, entries, pageStartTime);
            width = Math.ceil(pageEndTime) || 400;
            height = getGraphHeight(entries) || 400;
            mainHost = entries[0].host;

            !mainGraphCont && (mainGraphCont = d3.select('.w-graph'));
            !mainLegend && (mainLegend = d3.select('.w-graph__main-legend'));
            !timingsLegend && (timingsLegend = d3.select('.w-graph__timings-legend'));

            /**
             * Define graph sizes
             */

            if (!svg) {
                svg = mainGraphCont
                            .attr('width', width + paddings.left + paddings.right)
                            .attr('height', height + paddings.top + paddings.bottom)
                        .append('g')
                            .attr('transform', 'translate(' + paddings.left + ',' + paddings.top + ')');
            } else {
                mainGraphCont
                    .attr('width', width + paddings.left + paddings.right)
                    .attr('height', height + paddings.top + paddings.bottom);
            }

            /**
             * Create graph scales
             */
            xScale = d3.scale.linear()
                        .domain([0, width])
                        .range([0, width]);

            yScale = d3.scale.linear()
                        .domain([0, height])
                        .range([0, height]);

            drawXAxis(svg, width, height, paddings);
            drawDOMEvents(svg, onLoad, onContentLoad, paddings);
            drawEntries(svg, data, entries);
            drawTotalResources(svg, data);

            legend.mainLegend();
        }
    }
};

});
