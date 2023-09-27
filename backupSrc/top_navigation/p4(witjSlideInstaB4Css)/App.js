(function ($) {
    //-----------------------------------------------------------------------PART 1

    let stickyTop = 0,
        scrollTarget = false;

    // let timeline = $('.timeline__nav'),
    //     items = $('li', timeline),
    //     milestones = $('.timeline-container .timeline .timeline-item .timeline__content .timeline__content-title'),
    //     // milestones = $('.timeline__content-title'),
    //     offsetTop = parseInt(timeline.css('top'));

    let timeline = $('.stories'),
        items = $('.story', timeline),
        milestones = $('.timeline-container .timeline .timeline-item .timeline__content .timeline__content-title'),
        // milestones = $('.timeline__content-title'),
        offsetTop = parseInt(timeline.css('top'));

    const TIMELINE_VALUES = {
        start: 190,
        step: 30 //30
    };

    const TIMELINE_VALUES2 = {
        start: 0,
        step: 30 //30
    };


    $(window).resize(function () {
        timeline.removeClass('fixed');

        stickyTop = timeline.offset().top - offsetTop;

        $(window).trigger('scroll');
    }).trigger('resize');

    $(window).scroll(function () {
        if ($(window).scrollTop() > stickyTop) {
            timeline.addClass('fixed');
        } else {
            timeline.removeClass('fixed');
        }
    }).trigger('scroll');

    // items.find('span').click(function () {
    items.click(function () {
        debugger;

        // let li = $(this).parent(),
        let li = $(this),
            index = li.index(),
            milestone = milestones.eq(index);

        if (!li.hasClass('active') && milestone.length) {
            scrollTarget = index;

            let scrollTargetTop = milestone.offset().top - 250; //80

            $('html, body').animate({ scrollTop: scrollTargetTop }, {
                duration: 400,
                complete: function complete() {
                    scrollTarget = false;
                }
            });

        }
    });

    $(window).scroll(function () {
        let viewLine = $(window).scrollTop() + $(window).height() / 2, //3
            active = -1;

        if (scrollTarget === false) {
            milestones.each(function () {

                if ($(this).offset().top - viewLine > 0) {
                    return false;
                }

                active++;
            });
        } else {
            active = scrollTarget;
        }

        // timeline.css('top', -1 * active * TIMELINE_VALUES.step + TIMELINE_VALUES.start + 'px');
        timeline.css('left', -1 * active * (TIMELINE_VALUES2.step) + TIMELINE_VALUES2.start + 'px');

        items.filter('.active').removeClass('active');

        items.eq(active != -1 ? active : 0).addClass('active');
    }).trigger('scroll');

    //END--------------------------------------------------------------------PART 1

    $.fn.timeline = function () {
        var selectors = {
            id: $(this),
            item: $(this).find(".timeline-item"),
            activeClass: "timeline-item--active",
            img: ".timeline__img"
        };
        selectors.item.eq(0).addClass(selectors.activeClass);
        selectors.id.css(
            "background-image",
            "url(" +
            selectors.item
                .first()
                .find(selectors.img)
                .attr("src") +
            ")"
        );
        var itemLength = selectors.item.length;
        $(window).scroll(function () {
            var max, min;
            var pos = $(this).scrollTop();
            selectors.item.each(function (i) {
                min = $(this).offset().top;
                max = $(this).height() + $(this).offset().top;
                var that = $(this);
                if (i == itemLength - 2 && pos > min + $(this).height() / 2) { //2
                    selectors.item.removeClass(selectors.activeClass);
                    selectors.id.css(
                        "background-image",
                        "url(" +
                        selectors.item
                            .last()
                            .find(selectors.img)
                            .attr("src") +
                        ")"
                    );
                    selectors.item.last().addClass(selectors.activeClass);
                } else if (pos <= max - 40 && pos >= min) {
                    selectors.id.css(
                        "background-image",
                        "url(" +
                        $(this)
                            .find(selectors.img)
                            .attr("src") +
                        ")"
                    );
                    selectors.item.removeClass(selectors.activeClass);
                    $(this).addClass(selectors.activeClass);

                    items.filter('.active').removeClass('active');
                    items.eq($(this).index()).addClass('active');
                }
            });
        });
    };

})(jQuery);

$("#timeline-1").timeline();