// the semi-colon before function invocation is a safety net against concatenated
// scripts and/or other plugins which may not be closed properly.
;(function ( $, window, document, undefined ) {

    // Create the defaults once
    var pluginName = "Q1SmoothScroll",
        defaults = {
            duration: 600,
            easing: 'swing'
        };

    // The actual plugin constructor
    function Q1SmoothScroll( element, options ) {

        this.element = element;
        this.options = $.extend( {}, defaults, options );

        this._defaults = defaults;
        this._name = pluginName;
        this._version = 0.01;

        this.init();
    }

    Q1SmoothScroll.prototype = {

        init: function() {
            var me = this,
                options = me.options,
                el = $(me.element),
                duration = el.data('scroll-duration') || options.duration,
                easing = el.data('scroll-easing') || options.easing,
                scrollOffset = el.data('scroll-offset') ? parseInt(el.data('scroll-offset'), 10) : 0,
                targetSelector = el.attr('href') || el.data('scroll-to') || '',
                targetEl;

            if ( targetSelector == '' ) {
                return console.error('[%s] invalid "href" or "data-scroll-to" attribute (%s). Use href="#foo" or data-scroll-to=".foo" (a css selector).', pluginName, targetSelector);
            }

            targetEl = $(targetSelector).first();

            if (!targetEl) {
                return console.error("[%s] can't find element '%s'", pluginName, targetSelector);
            }

            el.click(function(evt){
                evt.preventDefault();

                var targetOffset = targetEl.offset().top + scrollOffset;

                $('html, body').animate({ scrollTop: targetOffset }, duration, easing);
            });


        }

    };

    // A really lightweight plugin wrapper around the constructor,
    // preventing against multiple instantiations
    $.fn['smoothScroll'] = function ( options ) {
        return this.each(function () {
            if (!$.data(this, "plugin_" + pluginName)) {
                $.data(this, "plugin_" + pluginName, new Q1SmoothScroll( this, options ));
            }
        });
    };

})( jQuery, window, document );
