jquery-smooth-scroll
====================

jQuery Smooth Scrolling Anchors Plugin


# Usage

Using `<a href="#target-id">`:

    <a href="#foo">Scroll to foo smoothly.</a>

    <!-- the scroll target -->
    <div id="foo"> ... </div>


    <!-- initialize -->
    $(function(){
        $('a[href^=#']).smoothScroll({
            // example using default options
            duration: 600,
            easing: 'swing'
        });
    })

Using any element:

    <!-- data-scroll-to accepts any jQuery-compatible selector -->
    <h1 data-scroll-to=".foo">Scroll to .foo smoothly.</h1>

    <!-- the scroll target -->
    <div class="foo"> ... </div>

    <!-- initialize -->
    $(function(){
        $('h1').smoothScroll();
    })

# Config Options

* duration - the scroll animation duration
* easing - the scroll animation easing

# Config Attributes

You can add config attributes to the clickable elements. (See demo.html)

* data-scroll-duration
* data-scroll-easing
* data-scroll-offset

# Todo

* change the browser fragment
* scroll when fragment changes
* scroll on init if fragment exists
* improve doc

