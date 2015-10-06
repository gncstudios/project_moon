/////////////////////////////////////////////////////////////////////////
//                                                                     //
// client/compatibility/bootstrap.js                                   //
// This file is in bare mode and is not in its own closure.            //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
/*!                                                                    //
 * Bootstrap v3.1.1 (http://getbootstrap.com)                          //
 * Copyright 2011-2014 Twitter, Inc.                                   //
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */                                                                    //
                                                                       //
if (typeof jQuery === 'undefined') {                                   // 7
  throw new Error('Bootstrap\'s JavaScript requires jQuery');          // 7
}                                                                      //
                                                                       //
/* ========================================================================
 * Bootstrap: transition.js v3.1.1                                     //
 * http://getbootstrap.com/javascript/#transitions                     //
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.                                   //
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
                                                                       //
+(function ($) {                                                       // 18
  'use strict';                                                        // 19
                                                                       //
  // CSS TRANSITION SUPPORT (Shoutout: http://www.modernizr.com/)      //
  // ============================================================      //
                                                                       //
  function transitionEnd() {                                           // 24
    var el = document.createElement('bootstrap');                      // 25
                                                                       //
    var transEndEventNames = {                                         // 27
      'WebkitTransition': 'webkitTransitionEnd',                       // 28
      'MozTransition': 'transitionend',                                // 29
      'OTransition': 'oTransitionEnd otransitionend',                  // 30
      'transition': 'transitionend'                                    // 31
    };                                                                 //
                                                                       //
    for (var name in babelHelpers.sanitizeForInObject(transEndEventNames)) {
      if (el.style[name] !== undefined) {                              // 35
        return { end: transEndEventNames[name] };                      // 36
      }                                                                //
    }                                                                  //
                                                                       //
    return false; // explicit for ie8 (  ._.)                          // 40
  }                                                                    //
                                                                       //
  // http://blog.alexmaccaw.com/css-transitions                        //
  $.fn.emulateTransitionEnd = function (duration) {                    // 44
    var called = false,                                                // 45
        $el = this;                                                    //
    $(this).one($.support.transition.end, function () {                // 46
      called = true;                                                   // 46
    });                                                                //
    var callback = function () {                                       // 47
      if (!called) $($el).trigger($.support.transition.end);           // 47
    };                                                                 //
    setTimeout(callback, duration);                                    // 48
    return this;                                                       // 49
  };                                                                   //
                                                                       //
  $(function () {                                                      // 52
    $.support.transition = transitionEnd();                            // 53
  });                                                                  //
})(jQuery);                                                            //
                                                                       //
/* ========================================================================
 * Bootstrap: alert.js v3.1.1                                          //
 * http://getbootstrap.com/javascript/#alerts                          //
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.                                   //
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
                                                                       //
+(function ($) {                                                       // 67
  'use strict';                                                        // 68
                                                                       //
  // ALERT CLASS DEFINITION                                            //
  // ======================                                            //
                                                                       //
  var dismiss = '[data-dismiss="alert"]';                              // 73
  var Alert = function (el) {                                          // 74
    $(el).on('click', dismiss, this.close);                            // 75
  };                                                                   //
                                                                       //
  Alert.prototype.close = function (e) {                               // 78
    var $this = $(this);                                               // 79
    var selector = $this.attr('data-target');                          // 80
                                                                       //
    if (!selector) {                                                   // 82
      selector = $this.attr('href');                                   // 83
      selector = selector && selector.replace(/.*(?=#[^\s]*$)/, ''); // strip for ie7
    }                                                                  //
                                                                       //
    var $parent = $(selector);                                         // 87
                                                                       //
    if (e) e.preventDefault();                                         // 89
                                                                       //
    if (!$parent.length) {                                             // 91
      $parent = $this.hasClass('alert') ? $this : $this.parent();      // 92
    }                                                                  //
                                                                       //
    $parent.trigger(e = $.Event('close.bs.alert'));                    // 95
                                                                       //
    if (e.isDefaultPrevented()) return;                                // 97
                                                                       //
    $parent.removeClass('in');                                         // 99
                                                                       //
    function removeElement() {                                         // 101
      $parent.trigger('closed.bs.alert').remove();                     // 102
    }                                                                  //
                                                                       //
    $.support.transition && $parent.hasClass('fade') ? $parent.one($.support.transition.end, removeElement).emulateTransitionEnd(150) : removeElement();
  };                                                                   //
                                                                       //
  // ALERT PLUGIN DEFINITION                                           //
  // =======================                                           //
                                                                       //
  var old = $.fn.alert;                                                // 116
                                                                       //
  $.fn.alert = function (option) {                                     // 118
    return this.each(function () {                                     // 119
      var $this = $(this);                                             // 120
      var data = $this.data('bs.alert');                               // 121
                                                                       //
      if (!data) $this.data('bs.alert', data = new Alert(this));       // 123
      if (typeof option == 'string') data[option].call($this);         // 124
    });                                                                //
  };                                                                   //
                                                                       //
  $.fn.alert.Constructor = Alert;                                      // 128
                                                                       //
  // ALERT NO CONFLICT                                                 //
  // =================                                                 //
                                                                       //
  $.fn.alert.noConflict = function () {                                // 134
    $.fn.alert = old;                                                  // 135
    return this;                                                       // 136
  };                                                                   //
                                                                       //
  // ALERT DATA-API                                                    //
  // ==============                                                    //
                                                                       //
  $(document).on('click.bs.alert.data-api', dismiss, Alert.prototype.close);
})(jQuery);                                                            //
                                                                       //
/* ========================================================================
 * Bootstrap: button.js v3.1.1                                         //
 * http://getbootstrap.com/javascript/#buttons                         //
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.                                   //
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
                                                                       //
+(function ($) {                                                       // 156
  'use strict';                                                        // 157
                                                                       //
  // BUTTON PUBLIC CLASS DEFINITION                                    //
  // ==============================                                    //
                                                                       //
  var Button = function (element, options) {                           // 162
    this.$element = $(element);                                        // 163
    this.options = $.extend({}, Button.DEFAULTS, options);             // 164
    this.isLoading = false;                                            // 165
  };                                                                   //
                                                                       //
  Button.DEFAULTS = {                                                  // 168
    loadingText: 'loading...'                                          // 169
  };                                                                   //
                                                                       //
  Button.prototype.setState = function (state) {                       // 172
    var d = 'disabled';                                                // 173
    var $el = this.$element;                                           // 174
    var val = $el.is('input') ? 'val' : 'html';                        // 175
    var data = $el.data();                                             // 176
                                                                       //
    state = state + 'Text';                                            // 178
                                                                       //
    if (!data.resetText) $el.data('resetText', $el[val]());            // 180
                                                                       //
    $el[val](data[state] || this.options[state]);                      // 182
                                                                       //
    // push to event loop to allow forms to submit                     //
    setTimeout($.proxy(function () {                                   // 185
      if (state == 'loadingText') {                                    // 186
        this.isLoading = true;                                         // 187
        $el.addClass(d).attr(d, d);                                    // 188
      } else if (this.isLoading) {                                     //
        this.isLoading = false;                                        // 190
        $el.removeClass(d).removeAttr(d);                              // 191
      }                                                                //
    }, this), 0);                                                      //
  };                                                                   //
                                                                       //
  Button.prototype.toggle = function () {                              // 196
    var changed = true;                                                // 197
    var $parent = this.$element.closest('[data-toggle="buttons"]');    // 198
                                                                       //
    if ($parent.length) {                                              // 200
      var $input = this.$element.find('input');                        // 201
      if ($input.prop('type') == 'radio') {                            // 202
        if ($input.prop('checked') && this.$element.hasClass('active')) changed = false;else $parent.find('.active').removeClass('active');
      }                                                                //
      if (changed) $input.prop('checked', !this.$element.hasClass('active')).trigger('change');
    }                                                                  //
                                                                       //
    if (changed) this.$element.toggleClass('active');                  // 209
  };                                                                   //
                                                                       //
  // BUTTON PLUGIN DEFINITION                                          //
  // ========================                                          //
                                                                       //
  var old = $.fn.button;                                               // 216
                                                                       //
  $.fn.button = function (option) {                                    // 218
    return this.each(function () {                                     // 219
      var $this = $(this);                                             // 220
      var data = $this.data('bs.button');                              // 221
      var options = typeof option == 'object' && option;               // 222
                                                                       //
      if (!data) $this.data('bs.button', data = new Button(this, options));
                                                                       //
      if (option == 'toggle') data.toggle();else if (option) data.setState(option);
    });                                                                //
  };                                                                   //
                                                                       //
  $.fn.button.Constructor = Button;                                    // 231
                                                                       //
  // BUTTON NO CONFLICT                                                //
  // ==================                                                //
                                                                       //
  $.fn.button.noConflict = function () {                               // 237
    $.fn.button = old;                                                 // 238
    return this;                                                       // 239
  };                                                                   //
                                                                       //
  // BUTTON DATA-API                                                   //
  // ===============                                                   //
                                                                       //
  $(document).on('click.bs.button.data-api', '[data-toggle^=button]', function (e) {
    var $btn = $(e.target);                                            // 247
    if (!$btn.hasClass('btn')) $btn = $btn.closest('.btn');            // 248
    $btn.button('toggle');                                             // 249
    e.preventDefault();                                                // 250
  });                                                                  //
})(jQuery);                                                            //
                                                                       //
/* ========================================================================
 * Bootstrap: carousel.js v3.1.1                                       //
 * http://getbootstrap.com/javascript/#carousel                        //
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.                                   //
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
                                                                       //
+(function ($) {                                                       // 264
  'use strict';                                                        // 265
                                                                       //
  // CAROUSEL CLASS DEFINITION                                         //
  // =========================                                         //
                                                                       //
  var Carousel = function (element, options) {                         // 270
    this.$element = $(element);                                        // 271
    this.$indicators = this.$element.find('.carousel-indicators');     // 272
    this.options = options;                                            // 273
    this.paused = this.sliding = this.interval = this.$active = this.$items = null;
                                                                       //
    this.options.pause == 'hover' && this.$element.on('mouseenter', $.proxy(this.pause, this)).on('mouseleave', $.proxy(this.cycle, this));
  };                                                                   //
                                                                       //
  Carousel.DEFAULTS = {                                                // 285
    interval: 5000,                                                    // 286
    pause: 'hover',                                                    // 287
    wrap: true                                                         // 288
  };                                                                   //
                                                                       //
  Carousel.prototype.cycle = function (e) {                            // 291
    e || (this.paused = false);                                        // 292
                                                                       //
    this.interval && clearInterval(this.interval);                     // 294
                                                                       //
    this.options.interval && !this.paused && (this.interval = setInterval($.proxy(this.next, this), this.options.interval));
                                                                       //
    return this;                                                       // 300
  };                                                                   //
                                                                       //
  Carousel.prototype.getActiveIndex = function () {                    // 303
    this.$active = this.$element.find('.item.active');                 // 304
    this.$items = this.$active.parent().children();                    // 305
                                                                       //
    return this.$items.index(this.$active);                            // 307
  };                                                                   //
                                                                       //
  Carousel.prototype.to = function (pos) {                             // 310
    var that = this;                                                   // 311
    var activeIndex = this.getActiveIndex();                           // 312
                                                                       //
    if (pos > this.$items.length - 1 || pos < 0) return;               // 314
                                                                       //
    if (this.sliding) return this.$element.one('slid.bs.carousel', function () {
      that.to(pos);                                                    // 316
    });                                                                //
    if (activeIndex == pos) return this.pause().cycle();               // 317
                                                                       //
    return this.slide(pos > activeIndex ? 'next' : 'prev', $(this.$items[pos]));
  };                                                                   //
                                                                       //
  Carousel.prototype.pause = function (e) {                            // 322
    e || (this.paused = true);                                         // 323
                                                                       //
    if (this.$element.find('.next, .prev').length && $.support.transition) {
      this.$element.trigger($.support.transition.end);                 // 326
      this.cycle(true);                                                // 327
    }                                                                  //
                                                                       //
    this.interval = clearInterval(this.interval);                      // 330
                                                                       //
    return this;                                                       // 332
  };                                                                   //
                                                                       //
  Carousel.prototype.next = function () {                              // 335
    if (this.sliding) return;                                          // 336
    return this.slide('next');                                         // 337
  };                                                                   //
                                                                       //
  Carousel.prototype.prev = function () {                              // 340
    if (this.sliding) return;                                          // 341
    return this.slide('prev');                                         // 342
  };                                                                   //
                                                                       //
  Carousel.prototype.slide = function (type, next) {                   // 345
    var $active = this.$element.find('.item.active');                  // 346
    var $next = next || $active[type]();                               // 347
    var isCycling = this.interval;                                     // 348
    var direction = type == 'next' ? 'left' : 'right';                 // 349
    var fallback = type == 'next' ? 'first' : 'last';                  // 350
    var that = this;                                                   // 351
                                                                       //
    if (!$next.length) {                                               // 353
      if (!this.options.wrap) return;                                  // 354
      $next = this.$element.find('.item')[fallback]();                 // 355
    }                                                                  //
                                                                       //
    if ($next.hasClass('active')) return this.sliding = false;         // 358
                                                                       //
    var e = $.Event('slide.bs.carousel', { relatedTarget: $next[0], direction: direction });
    this.$element.trigger(e);                                          // 361
    if (e.isDefaultPrevented()) return;                                // 362
                                                                       //
    this.sliding = true;                                               // 364
                                                                       //
    isCycling && this.pause();                                         // 366
                                                                       //
    if (this.$indicators.length) {                                     // 368
      this.$indicators.find('.active').removeClass('active');          // 369
      this.$element.one('slid.bs.carousel', function () {              // 370
        var $nextIndicator = $(that.$indicators.children()[that.getActiveIndex()]);
        $nextIndicator && $nextIndicator.addClass('active');           // 372
      });                                                              //
    }                                                                  //
                                                                       //
    if ($.support.transition && this.$element.hasClass('slide')) {     // 376
      $next.addClass(type);                                            // 377
      $next[0].offsetWidth; // force reflow                            // 378
      $active.addClass(direction);                                     // 379
      $next.addClass(direction);                                       // 380
      $active.one($.support.transition.end, function () {              // 381
        $next.removeClass([type, direction].join(' ')).addClass('active');
        $active.removeClass(['active', direction].join(' '));          // 384
        that.sliding = false;                                          // 385
        setTimeout(function () {                                       // 386
          that.$element.trigger('slid.bs.carousel');                   // 386
        }, 0);                                                         //
      }).emulateTransitionEnd($active.css('transition-duration').slice(0, -1) * 1000);
    } else {                                                           //
      $active.removeClass('active');                                   // 390
      $next.addClass('active');                                        // 391
      this.sliding = false;                                            // 392
      this.$element.trigger('slid.bs.carousel');                       // 393
    }                                                                  //
                                                                       //
    isCycling && this.cycle();                                         // 396
                                                                       //
    return this;                                                       // 398
  };                                                                   //
                                                                       //
  // CAROUSEL PLUGIN DEFINITION                                        //
  // ==========================                                        //
                                                                       //
  var old = $.fn.carousel;                                             // 405
                                                                       //
  $.fn.carousel = function (option) {                                  // 407
    return this.each(function () {                                     // 408
      var $this = $(this);                                             // 409
      var data = $this.data('bs.carousel');                            // 410
      var options = $.extend({}, Carousel.DEFAULTS, $this.data(), typeof option == 'object' && option);
      var action = typeof option == 'string' ? option : options.slide;
                                                                       //
      if (!data) $this.data('bs.carousel', data = new Carousel(this, options));
      if (typeof option == 'number') data.to(option);else if (action) data[action]();else if (options.interval) data.pause().cycle();
    });                                                                //
  };                                                                   //
                                                                       //
  $.fn.carousel.Constructor = Carousel;                                // 421
                                                                       //
  // CAROUSEL NO CONFLICT                                              //
  // ====================                                              //
                                                                       //
  $.fn.carousel.noConflict = function () {                             // 427
    $.fn.carousel = old;                                               // 428
    return this;                                                       // 429
  };                                                                   //
                                                                       //
  // CAROUSEL DATA-API                                                 //
  // =================                                                 //
                                                                       //
  $(document).on('click.bs.carousel.data-api', '[data-slide], [data-slide-to]', function (e) {
    var $this = $(this),                                               // 437
        href;                                                          //
    var $target = $($this.attr('data-target') || (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '')); //strip for ie7
    var options = $.extend({}, $target.data(), $this.data());          // 439
    var slideIndex = $this.attr('data-slide-to');                      // 440
    if (slideIndex) options.interval = false;                          // 441
                                                                       //
    $target.carousel(options);                                         // 443
                                                                       //
    if (slideIndex = $this.attr('data-slide-to')) {                    // 445
      $target.data('bs.carousel').to(slideIndex);                      // 446
    }                                                                  //
                                                                       //
    e.preventDefault();                                                // 449
  });                                                                  //
                                                                       //
  $(window).on('load', function () {                                   // 452
    $('[data-ride="carousel"]').each(function () {                     // 453
      var $carousel = $(this);                                         // 454
      $carousel.carousel($carousel.data());                            // 455
    });                                                                //
  });                                                                  //
})(jQuery);                                                            //
                                                                       //
/* ========================================================================
 * Bootstrap: collapse.js v3.1.1                                       //
 * http://getbootstrap.com/javascript/#collapse                        //
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.                                   //
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
                                                                       //
+(function ($) {                                                       // 470
  'use strict';                                                        // 471
                                                                       //
  // COLLAPSE PUBLIC CLASS DEFINITION                                  //
  // ================================                                  //
                                                                       //
  var Collapse = function (element, options) {                         // 476
    this.$element = $(element);                                        // 477
    this.options = $.extend({}, Collapse.DEFAULTS, options);           // 478
    this.transitioning = null;                                         // 479
                                                                       //
    if (this.options.parent) this.$parent = $(this.options.parent);    // 481
    if (this.options.toggle) this.toggle();                            // 482
  };                                                                   //
                                                                       //
  Collapse.DEFAULTS = {                                                // 485
    toggle: true                                                       // 486
  };                                                                   //
                                                                       //
  Collapse.prototype.dimension = function () {                         // 489
    var hasWidth = this.$element.hasClass('width');                    // 490
    return hasWidth ? 'width' : 'height';                              // 491
  };                                                                   //
                                                                       //
  Collapse.prototype.show = function () {                              // 494
    if (this.transitioning || this.$element.hasClass('in')) return;    // 495
                                                                       //
    var startEvent = $.Event('show.bs.collapse');                      // 497
    this.$element.trigger(startEvent);                                 // 498
    if (startEvent.isDefaultPrevented()) return;                       // 499
                                                                       //
    var actives = this.$parent && this.$parent.find('> .panel > .in');
                                                                       //
    if (actives && actives.length) {                                   // 503
      var hasData = actives.data('bs.collapse');                       // 504
      if (hasData && hasData.transitioning) return;                    // 505
      actives.collapse('hide');                                        // 506
      hasData || actives.data('bs.collapse', null);                    // 507
    }                                                                  //
                                                                       //
    var dimension = this.dimension();                                  // 510
                                                                       //
    this.$element.removeClass('collapse').addClass('collapsing')[dimension](0);
                                                                       //
    this.transitioning = 1;                                            // 517
                                                                       //
    var complete = function () {                                       // 519
      this.$element.removeClass('collapsing').addClass('collapse in')[dimension]('auto');
      this.transitioning = 0;                                          // 524
      this.$element.trigger('shown.bs.collapse');                      // 525
    };                                                                 //
                                                                       //
    if (!$.support.transition) return complete.call(this);             // 528
                                                                       //
    var scrollSize = $.camelCase(['scroll', dimension].join('-'));     // 530
                                                                       //
    this.$element.one($.support.transition.end, $.proxy(complete, this)).emulateTransitionEnd(350)[dimension](this.$element[0][scrollSize]);
  };                                                                   //
                                                                       //
  Collapse.prototype.hide = function () {                              // 538
    if (this.transitioning || !this.$element.hasClass('in')) return;   // 539
                                                                       //
    var startEvent = $.Event('hide.bs.collapse');                      // 541
    this.$element.trigger(startEvent);                                 // 542
    if (startEvent.isDefaultPrevented()) return;                       // 543
                                                                       //
    var dimension = this.dimension();                                  // 545
                                                                       //
    this.$element[dimension](this.$element[dimension]())[0].offsetHeight;
                                                                       //
    this.$element.addClass('collapsing').removeClass('collapse').removeClass('in');
                                                                       //
    this.transitioning = 1;                                            // 556
                                                                       //
    var complete = function () {                                       // 558
      this.transitioning = 0;                                          // 559
      this.$element.trigger('hidden.bs.collapse').removeClass('collapsing').addClass('collapse');
    };                                                                 //
                                                                       //
    if (!$.support.transition) return complete.call(this);             // 566
                                                                       //
    this.$element[dimension](0).one($.support.transition.end, $.proxy(complete, this)).emulateTransitionEnd(350);
  };                                                                   //
                                                                       //
  Collapse.prototype.toggle = function () {                            // 574
    this[this.$element.hasClass('in') ? 'hide' : 'show']();            // 575
  };                                                                   //
                                                                       //
  // COLLAPSE PLUGIN DEFINITION                                        //
  // ==========================                                        //
                                                                       //
  var old = $.fn.collapse;                                             // 582
                                                                       //
  $.fn.collapse = function (option) {                                  // 584
    return this.each(function () {                                     // 585
      var $this = $(this);                                             // 586
      var data = $this.data('bs.collapse');                            // 587
      var options = $.extend({}, Collapse.DEFAULTS, $this.data(), typeof option == 'object' && option);
                                                                       //
      if (!data && options.toggle && option == 'show') option = !option;
      if (!data) $this.data('bs.collapse', data = new Collapse(this, options));
      if (typeof option == 'string') data[option]();                   // 592
    });                                                                //
  };                                                                   //
                                                                       //
  $.fn.collapse.Constructor = Collapse;                                // 596
                                                                       //
  // COLLAPSE NO CONFLICT                                              //
  // ====================                                              //
                                                                       //
  $.fn.collapse.noConflict = function () {                             // 602
    $.fn.collapse = old;                                               // 603
    return this;                                                       // 604
  };                                                                   //
                                                                       //
  // COLLAPSE DATA-API                                                 //
  // =================                                                 //
                                                                       //
  $(document).on('click.bs.collapse.data-api', '[data-toggle=collapse]', function (e) {
    var $this = $(this),                                               // 612
        href;                                                          //
    var target = $this.attr('data-target') || e.preventDefault() || (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, ''); //strip for ie7
    var $target = $(target);                                           // 616
    var data = $target.data('bs.collapse');                            // 617
    var option = data ? 'toggle' : $this.data();                       // 618
    var parent = $this.attr('data-parent');                            // 619
    var $parent = parent && $(parent);                                 // 620
                                                                       //
    if (!data || !data.transitioning) {                                // 622
      if ($parent) $parent.find('[data-toggle=collapse][data-parent="' + parent + '"]').not($this).addClass('collapsed');
      $this[$target.hasClass('in') ? 'addClass' : 'removeClass']('collapsed');
    }                                                                  //
                                                                       //
    $target.collapse(option);                                          // 627
  });                                                                  //
})(jQuery);                                                            //
                                                                       //
/* ========================================================================
 * Bootstrap: dropdown.js v3.1.1                                       //
 * http://getbootstrap.com/javascript/#dropdowns                       //
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.                                   //
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
                                                                       //
+(function ($) {                                                       // 641
  'use strict';                                                        // 642
                                                                       //
  // DROPDOWN CLASS DEFINITION                                         //
  // =========================                                         //
                                                                       //
  var backdrop = '.dropdown-backdrop';                                 // 647
  var toggle = '[data-toggle=dropdown]';                               // 648
  var Dropdown = function (element) {                                  // 649
    $(element).on('click.bs.dropdown', this.toggle);                   // 650
  };                                                                   //
                                                                       //
  Dropdown.prototype.toggle = function (e) {                           // 653
    var $this = $(this);                                               // 654
                                                                       //
    if ($this.is('.disabled, :disabled')) return;                      // 656
                                                                       //
    var $parent = getParent($this);                                    // 658
    var isActive = $parent.hasClass('open');                           // 659
                                                                       //
    clearMenus();                                                      // 661
                                                                       //
    if (!isActive) {                                                   // 663
      if ('ontouchstart' in document.documentElement && !$parent.closest('.navbar-nav').length) {
        // if mobile we use a backdrop because click events don't delegate
        $('<div class="dropdown-backdrop"/>').insertAfter($(this)).on('click', clearMenus);
      }                                                                //
                                                                       //
      var relatedTarget = { relatedTarget: this };                     // 669
      $parent.trigger(e = $.Event('show.bs.dropdown', relatedTarget));
                                                                       //
      if (e.isDefaultPrevented()) return;                              // 672
                                                                       //
      $parent.toggleClass('open').trigger('shown.bs.dropdown', relatedTarget);
                                                                       //
      $this.focus();                                                   // 678
    }                                                                  //
                                                                       //
    return false;                                                      // 681
  };                                                                   //
                                                                       //
  Dropdown.prototype.keydown = function (e) {                          // 684
    if (!/(38|40|27)/.test(e.keyCode)) return;                         // 685
                                                                       //
    var $this = $(this);                                               // 687
                                                                       //
    e.preventDefault();                                                // 689
    e.stopPropagation();                                               // 690
                                                                       //
    if ($this.is('.disabled, :disabled')) return;                      // 692
                                                                       //
    var $parent = getParent($this);                                    // 694
    var isActive = $parent.hasClass('open');                           // 695
                                                                       //
    if (!isActive || isActive && e.keyCode == 27) {                    // 697
      if (e.which == 27) $parent.find(toggle).focus();                 // 698
      return $this.click();                                            // 699
    }                                                                  //
                                                                       //
    var desc = ' li:not(.divider):visible a';                          // 702
    var $items = $parent.find('[role=menu]' + desc + ', [role=listbox]' + desc);
                                                                       //
    if (!$items.length) return;                                        // 705
                                                                       //
    var index = $items.index($items.filter(':focus'));                 // 707
                                                                       //
    if (e.keyCode == 38 && index > 0) index--; // up                   // 709
    if (e.keyCode == 40 && index < $items.length - 1) index++; // down
    if (! ~index) index = 0;                                           // 711
                                                                       //
    $items.eq(index).focus();                                          // 713
  };                                                                   //
                                                                       //
  function clearMenus(e) {                                             // 716
    $(backdrop).remove();                                              // 717
    $(toggle).each(function () {                                       // 718
      var $parent = getParent($(this));                                // 719
      var relatedTarget = { relatedTarget: this };                     // 720
      if (!$parent.hasClass('open')) return;                           // 721
      $parent.trigger(e = $.Event('hide.bs.dropdown', relatedTarget));
      if (e.isDefaultPrevented()) return;                              // 723
      $parent.removeClass('open').trigger('hidden.bs.dropdown', relatedTarget);
    });                                                                //
  }                                                                    //
                                                                       //
  function getParent($this) {                                          // 728
    var selector = $this.attr('data-target');                          // 729
                                                                       //
    if (!selector) {                                                   // 731
      selector = $this.attr('href');                                   // 732
      selector = selector && /#[A-Za-z]/.test(selector) && selector.replace(/.*(?=#[^\s]*$)/, ''); //strip for ie7
    }                                                                  //
                                                                       //
    var $parent = selector && $(selector);                             // 736
                                                                       //
    return $parent && $parent.length ? $parent : $this.parent();       // 738
  }                                                                    //
                                                                       //
  // DROPDOWN PLUGIN DEFINITION                                        //
  // ==========================                                        //
                                                                       //
  var old = $.fn.dropdown;                                             // 745
                                                                       //
  $.fn.dropdown = function (option) {                                  // 747
    return this.each(function () {                                     // 748
      var $this = $(this);                                             // 749
      var data = $this.data('bs.dropdown');                            // 750
                                                                       //
      if (!data) $this.data('bs.dropdown', data = new Dropdown(this));
      if (typeof option == 'string') data[option].call($this);         // 753
    });                                                                //
  };                                                                   //
                                                                       //
  $.fn.dropdown.Constructor = Dropdown;                                // 757
                                                                       //
  // DROPDOWN NO CONFLICT                                              //
  // ====================                                              //
                                                                       //
  $.fn.dropdown.noConflict = function () {                             // 763
    $.fn.dropdown = old;                                               // 764
    return this;                                                       // 765
  };                                                                   //
                                                                       //
  // APPLY TO STANDARD DROPDOWN ELEMENTS                               //
  // ===================================                               //
                                                                       //
  $(document).on('click.bs.dropdown.data-api', clearMenus).on('click.bs.dropdown.data-api', '.dropdown form', function (e) {
    e.stopPropagation();                                               // 774
  }).on('click.bs.dropdown.data-api', toggle, Dropdown.prototype.toggle).on('keydown.bs.dropdown.data-api', toggle + ', [role=menu], [role=listbox]', Dropdown.prototype.keydown);
})(jQuery);                                                            //
                                                                       //
/* ========================================================================
 * Bootstrap: modal.js v3.1.1                                          //
 * http://getbootstrap.com/javascript/#modals                          //
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.                                   //
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
                                                                       //
+(function ($) {                                                       // 789
  'use strict';                                                        // 790
                                                                       //
  // MODAL CLASS DEFINITION                                            //
  // ======================                                            //
                                                                       //
  var Modal = function (element, options) {                            // 795
    this.options = options;                                            // 796
    this.$element = $(element);                                        // 797
    this.$backdrop = this.isShown = null;                              // 798
                                                                       //
    if (this.options.remote) {                                         // 801
      this.$element.find('.modal-content').load(this.options.remote, $.proxy(function () {
        this.$element.trigger('loaded.bs.modal');                      // 805
      }, this));                                                       //
    }                                                                  //
  };                                                                   //
                                                                       //
  Modal.DEFAULTS = {                                                   // 810
    backdrop: true,                                                    // 811
    keyboard: true,                                                    // 812
    show: true                                                         // 813
  };                                                                   //
                                                                       //
  Modal.prototype.toggle = function (_relatedTarget) {                 // 816
    return this[!this.isShown ? 'show' : 'hide'](_relatedTarget);      // 817
  };                                                                   //
                                                                       //
  Modal.prototype.show = function (_relatedTarget) {                   // 820
    var that = this;                                                   // 821
    var e = $.Event('show.bs.modal', { relatedTarget: _relatedTarget });
                                                                       //
    this.$element.trigger(e);                                          // 824
                                                                       //
    if (this.isShown || e.isDefaultPrevented()) return;                // 826
                                                                       //
    this.isShown = true;                                               // 828
                                                                       //
    this.escape();                                                     // 830
                                                                       //
    this.$element.on('click.dismiss.bs.modal', '[data-dismiss="modal"]', $.proxy(this.hide, this));
                                                                       //
    this.backdrop(function () {                                        // 834
      var transition = $.support.transition && that.$element.hasClass('fade');
                                                                       //
      if (!that.$element.parent().length) {                            // 837
        that.$element.appendTo(document.body); // don't move modals dom position
      }                                                                //
                                                                       //
      that.$element.show().scrollTop(0);                               // 841
                                                                       //
      if (transition) {                                                // 845
        that.$element[0].offsetWidth; // force reflow                  // 846
      }                                                                //
                                                                       //
      that.$element.addClass('in').attr('aria-hidden', false);         // 849
                                                                       //
      that.enforceFocus();                                             // 853
                                                                       //
      var e = $.Event('shown.bs.modal', { relatedTarget: _relatedTarget });
                                                                       //
      transition ? that.$element.find('.modal-dialog') // wait for modal to slide in
      .one($.support.transition.end, function () {                     //
        that.$element.focus().trigger(e);                              // 860
      }).emulateTransitionEnd(300) : that.$element.focus().trigger(e);
    });                                                                //
  };                                                                   //
                                                                       //
  Modal.prototype.hide = function (e) {                                // 867
    if (e) e.preventDefault();                                         // 868
                                                                       //
    e = $.Event('hide.bs.modal');                                      // 870
                                                                       //
    this.$element.trigger(e);                                          // 872
                                                                       //
    if (!this.isShown || e.isDefaultPrevented()) return;               // 874
                                                                       //
    this.isShown = false;                                              // 876
                                                                       //
    this.escape();                                                     // 878
                                                                       //
    $(document).off('focusin.bs.modal');                               // 880
                                                                       //
    this.$element.removeClass('in').attr('aria-hidden', true).off('click.dismiss.bs.modal');
                                                                       //
    $.support.transition && this.$element.hasClass('fade') ? this.$element.one($.support.transition.end, $.proxy(this.hideModal, this)).emulateTransitionEnd(300) : this.hideModal();
  };                                                                   //
                                                                       //
  Modal.prototype.enforceFocus = function () {                         // 894
    $(document).off('focusin.bs.modal') // guard against infinite focus loop
    .on('focusin.bs.modal', $.proxy(function (e) {                     //
      if (this.$element[0] !== e.target && !this.$element.has(e.target).length) {
        this.$element.focus();                                         // 899
      }                                                                //
    }, this));                                                         //
  };                                                                   //
                                                                       //
  Modal.prototype.escape = function () {                               // 904
    if (this.isShown && this.options.keyboard) {                       // 905
      this.$element.on('keyup.dismiss.bs.modal', $.proxy(function (e) {
        e.which == 27 && this.hide();                                  // 907
      }, this));                                                       //
    } else if (!this.isShown) {                                        //
      this.$element.off('keyup.dismiss.bs.modal');                     // 910
    }                                                                  //
  };                                                                   //
                                                                       //
  Modal.prototype.hideModal = function () {                            // 914
    var that = this;                                                   // 915
    this.$element.hide();                                              // 916
    this.backdrop(function () {                                        // 917
      that.removeBackdrop();                                           // 918
      that.$element.trigger('hidden.bs.modal');                        // 919
    });                                                                //
  };                                                                   //
                                                                       //
  Modal.prototype.removeBackdrop = function () {                       // 923
    this.$backdrop && this.$backdrop.remove();                         // 924
    this.$backdrop = null;                                             // 925
  };                                                                   //
                                                                       //
  Modal.prototype.backdrop = function (callback) {                     // 928
    var animate = this.$element.hasClass('fade') ? 'fade' : '';        // 929
                                                                       //
    if (this.isShown && this.options.backdrop) {                       // 931
      var doAnimate = $.support.transition && animate;                 // 932
                                                                       //
      this.$backdrop = $('<div class="modal-backdrop ' + animate + '" />').appendTo(document.body);
                                                                       //
      this.$element.on('click.dismiss.bs.modal', $.proxy(function (e) {
        if (e.target !== e.currentTarget) return;                      // 938
        this.options.backdrop == 'static' ? this.$element[0].focus.call(this.$element[0]) : this.hide.call(this);
      }, this));                                                       //
                                                                       //
      if (doAnimate) this.$backdrop[0].offsetWidth; // force reflow    // 944
                                                                       //
      this.$backdrop.addClass('in');                                   // 946
                                                                       //
      if (!callback) return;                                           // 948
                                                                       //
      doAnimate ? this.$backdrop.one($.support.transition.end, callback).emulateTransitionEnd(150) : callback();
    } else if (!this.isShown && this.$backdrop) {                      //
      this.$backdrop.removeClass('in');                                // 957
                                                                       //
      $.support.transition && this.$element.hasClass('fade') ? this.$backdrop.one($.support.transition.end, callback).emulateTransitionEnd(150) : callback();
    } else if (callback) {                                             //
      callback();                                                      // 966
    }                                                                  //
  };                                                                   //
                                                                       //
  // MODAL PLUGIN DEFINITION                                           //
  // =======================                                           //
                                                                       //
  var old = $.fn.modal;                                                // 974
                                                                       //
  $.fn.modal = function (option, _relatedTarget) {                     // 976
    return this.each(function () {                                     // 977
      var $this = $(this);                                             // 978
      var data = $this.data('bs.modal');                               // 979
      var options = $.extend({}, Modal.DEFAULTS, $this.data(), typeof option == 'object' && option);
                                                                       //
      if (!data) $this.data('bs.modal', data = new Modal(this, options));
      if (typeof option == 'string') data[option](_relatedTarget);else if (options.show) data.show(_relatedTarget);
    });                                                                //
  };                                                                   //
                                                                       //
  $.fn.modal.Constructor = Modal;                                      // 988
                                                                       //
  // MODAL NO CONFLICT                                                 //
  // =================                                                 //
                                                                       //
  $.fn.modal.noConflict = function () {                                // 994
    $.fn.modal = old;                                                  // 995
    return this;                                                       // 996
  };                                                                   //
                                                                       //
  // MODAL DATA-API                                                    //
  // ==============                                                    //
                                                                       //
  $(document).on('click.bs.modal.data-api', '[data-toggle="modal"]', function (e) {
    var $this = $(this);                                               // 1004
    var href = $this.attr('href');                                     // 1005
    var $target = $($this.attr('data-target') || href && href.replace(/.*(?=#[^\s]+$)/, '')); //strip for ie7
    var option = $target.data('bs.modal') ? 'toggle' : $.extend({ remote: !/#/.test(href) && href }, $target.data(), $this.data());
                                                                       //
    if ($this.is('a')) e.preventDefault();                             // 1009
                                                                       //
    $target.modal(option, this).one('hide', function () {              // 1011
      $this.is(':visible') && $this.focus();                           // 1014
    });                                                                //
  });                                                                  //
                                                                       //
  $(document).on('show.bs.modal', '.modal', function () {              // 1018
    $(document.body).addClass('modal-open');                           // 1019
  }).on('hidden.bs.modal', '.modal', function () {                     //
    $(document.body).removeClass('modal-open');                        // 1020
  });                                                                  //
})(jQuery);                                                            //
                                                                       //
/* ========================================================================
 * Bootstrap: tooltip.js v3.1.1                                        //
 * http://getbootstrap.com/javascript/#tooltip                         //
 * Inspired by the original jQuery.tipsy by Jason Frame                //
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.                                   //
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
                                                                       //
+(function ($) {                                                       // 1034
  'use strict';                                                        // 1035
                                                                       //
  // TOOLTIP PUBLIC CLASS DEFINITION                                   //
  // ===============================                                   //
                                                                       //
  var Tooltip = function (element, options) {                          // 1040
    this.type = this.options = this.enabled = this.timeout = this.hoverState = this.$element = null;
                                                                       //
    this.init('tooltip', element, options);                            // 1048
  };                                                                   //
                                                                       //
  Tooltip.DEFAULTS = {                                                 // 1051
    animation: true,                                                   // 1052
    placement: 'top',                                                  // 1053
    selector: false,                                                   // 1054
    template: '<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
    trigger: 'hover focus',                                            // 1056
    title: '',                                                         // 1057
    delay: 0,                                                          // 1058
    html: false,                                                       // 1059
    container: false                                                   // 1060
  };                                                                   //
                                                                       //
  Tooltip.prototype.init = function (type, element, options) {         // 1063
    this.enabled = true;                                               // 1064
    this.type = type;                                                  // 1065
    this.$element = $(element);                                        // 1066
    this.options = this.getOptions(options);                           // 1067
                                                                       //
    var triggers = this.options.trigger.split(' ');                    // 1069
                                                                       //
    for (var i = triggers.length; i--;) {                              // 1071
      var trigger = triggers[i];                                       // 1072
                                                                       //
      if (trigger == 'click') {                                        // 1074
        this.$element.on('click.' + this.type, this.options.selector, $.proxy(this.toggle, this));
      } else if (trigger != 'manual') {                                //
        var eventIn = trigger == 'hover' ? 'mouseenter' : 'focusin';   // 1077
        var eventOut = trigger == 'hover' ? 'mouseleave' : 'focusout';
                                                                       //
        this.$element.on(eventIn + '.' + this.type, this.options.selector, $.proxy(this.enter, this));
        this.$element.on(eventOut + '.' + this.type, this.options.selector, $.proxy(this.leave, this));
      }                                                                //
    }                                                                  //
                                                                       //
    this.options.selector ? this._options = $.extend({}, this.options, { trigger: 'manual', selector: '' }) : this.fixTitle();
  };                                                                   //
                                                                       //
  Tooltip.prototype.getDefaults = function () {                        // 1090
    return Tooltip.DEFAULTS;                                           // 1091
  };                                                                   //
                                                                       //
  Tooltip.prototype.getOptions = function (options) {                  // 1094
    options = $.extend({}, this.getDefaults(), this.$element.data(), options);
                                                                       //
    if (options.delay && typeof options.delay == 'number') {           // 1097
      options.delay = {                                                // 1098
        show: options.delay,                                           // 1099
        hide: options.delay                                            // 1100
      };                                                               //
    }                                                                  //
                                                                       //
    return options;                                                    // 1104
  };                                                                   //
                                                                       //
  Tooltip.prototype.getDelegateOptions = function () {                 // 1107
    var options = {};                                                  // 1108
    var defaults = this.getDefaults();                                 // 1109
                                                                       //
    this._options && $.each(this._options, function (key, value) {     // 1111
      if (defaults[key] != value) options[key] = value;                // 1112
    });                                                                //
                                                                       //
    return options;                                                    // 1115
  };                                                                   //
                                                                       //
  Tooltip.prototype.enter = function (obj) {                           // 1118
    var self = obj instanceof this.constructor ? obj : $(obj.currentTarget)[this.type](this.getDelegateOptions()).data('bs.' + this.type);
                                                                       //
    clearTimeout(self.timeout);                                        // 1122
                                                                       //
    self.hoverState = 'in';                                            // 1124
                                                                       //
    if (!self.options.delay || !self.options.delay.show) return self.show();
                                                                       //
    self.timeout = setTimeout(function () {                            // 1128
      if (self.hoverState == 'in') self.show();                        // 1129
    }, self.options.delay.show);                                       //
  };                                                                   //
                                                                       //
  Tooltip.prototype.leave = function (obj) {                           // 1133
    var self = obj instanceof this.constructor ? obj : $(obj.currentTarget)[this.type](this.getDelegateOptions()).data('bs.' + this.type);
                                                                       //
    clearTimeout(self.timeout);                                        // 1137
                                                                       //
    self.hoverState = 'out';                                           // 1139
                                                                       //
    if (!self.options.delay || !self.options.delay.hide) return self.hide();
                                                                       //
    self.timeout = setTimeout(function () {                            // 1143
      if (self.hoverState == 'out') self.hide();                       // 1144
    }, self.options.delay.hide);                                       //
  };                                                                   //
                                                                       //
  Tooltip.prototype.show = function () {                               // 1148
    var e = $.Event('show.bs.' + this.type);                           // 1149
                                                                       //
    if (this.hasContent() && this.enabled) {                           // 1151
      this.$element.trigger(e);                                        // 1152
                                                                       //
      if (e.isDefaultPrevented()) return;                              // 1154
      var that = this;                                                 // 1155
                                                                       //
      var $tip = this.tip();                                           // 1157
                                                                       //
      this.setContent();                                               // 1159
                                                                       //
      if (this.options.animation) $tip.addClass('fade');               // 1161
                                                                       //
      var placement = typeof this.options.placement == 'function' ? this.options.placement.call(this, $tip[0], this.$element[0]) : this.options.placement;
                                                                       //
      var autoToken = /\s?auto?\s?/i;                                  // 1167
      var autoPlace = autoToken.test(placement);                       // 1168
      if (autoPlace) placement = placement.replace(autoToken, '') || 'top';
                                                                       //
      $tip.detach().css({ top: 0, left: 0, display: 'block' }).addClass(placement);
                                                                       //
      this.options.container ? $tip.appendTo(this.options.container) : $tip.insertAfter(this.$element);
                                                                       //
      var pos = this.getPosition();                                    // 1178
      var actualWidth = $tip[0].offsetWidth;                           // 1179
      var actualHeight = $tip[0].offsetHeight;                         // 1180
                                                                       //
      if (autoPlace) {                                                 // 1182
        var $parent = this.$element.parent();                          // 1183
                                                                       //
        var orgPlacement = placement;                                  // 1185
        var docScroll = document.documentElement.scrollTop || document.body.scrollTop;
        var parentWidth = this.options.container == 'body' ? window.innerWidth : $parent.outerWidth();
        var parentHeight = this.options.container == 'body' ? window.innerHeight : $parent.outerHeight();
        var parentLeft = this.options.container == 'body' ? 0 : $parent.offset().left;
                                                                       //
        placement = placement == 'bottom' && pos.top + pos.height + actualHeight - docScroll > parentHeight ? 'top' : placement == 'top' && pos.top - docScroll - actualHeight < 0 ? 'bottom' : placement == 'right' && pos.right + actualWidth > parentWidth ? 'left' : placement == 'left' && pos.left - actualWidth < parentLeft ? 'right' : placement;
                                                                       //
        $tip.removeClass(orgPlacement).addClass(placement);            // 1197
      }                                                                //
                                                                       //
      var calculatedOffset = this.getCalculatedOffset(placement, pos, actualWidth, actualHeight);
                                                                       //
      this.applyPlacement(calculatedOffset, placement);                // 1204
      this.hoverState = null;                                          // 1205
                                                                       //
      var complete = function () {                                     // 1207
        that.$element.trigger('shown.bs.' + that.type);                // 1208
      };                                                               //
                                                                       //
      $.support.transition && this.$tip.hasClass('fade') ? $tip.one($.support.transition.end, complete).emulateTransitionEnd(150) : complete();
    }                                                                  //
  };                                                                   //
                                                                       //
  Tooltip.prototype.applyPlacement = function (offset, placement) {    // 1219
    var replace;                                                       // 1220
    var $tip = this.tip();                                             // 1221
    var width = $tip[0].offsetWidth;                                   // 1222
    var height = $tip[0].offsetHeight;                                 // 1223
                                                                       //
    // manually read margins because getBoundingClientRect includes difference
    var marginTop = parseInt($tip.css('margin-top'), 10);              // 1226
    var marginLeft = parseInt($tip.css('margin-left'), 10);            // 1227
                                                                       //
    // we must check for NaN for ie 8/9                                //
    if (isNaN(marginTop)) marginTop = 0;                               // 1230
    if (isNaN(marginLeft)) marginLeft = 0;                             // 1231
                                                                       //
    offset.top = offset.top + marginTop;                               // 1233
    offset.left = offset.left + marginLeft;                            // 1234
                                                                       //
    // $.fn.offset doesn't round pixel values                          //
    // so we use setOffset directly with our own function B-0          //
    $.offset.setOffset($tip[0], $.extend({                             // 1238
      using: function (props) {                                        // 1239
        $tip.css({                                                     // 1240
          top: Math.round(props.top),                                  // 1241
          left: Math.round(props.left)                                 // 1242
        });                                                            //
      }                                                                //
    }, offset), 0);                                                    //
                                                                       //
    $tip.addClass('in');                                               // 1247
                                                                       //
    // check to see if placing tip in new offset caused the tip to resize itself
    var actualWidth = $tip[0].offsetWidth;                             // 1250
    var actualHeight = $tip[0].offsetHeight;                           // 1251
                                                                       //
    if (placement == 'top' && actualHeight != height) {                // 1253
      replace = true;                                                  // 1254
      offset.top = offset.top + height - actualHeight;                 // 1255
    }                                                                  //
                                                                       //
    if (/bottom|top/.test(placement)) {                                // 1258
      var delta = 0;                                                   // 1259
                                                                       //
      if (offset.left < 0) {                                           // 1261
        delta = offset.left * -2;                                      // 1262
        offset.left = 0;                                               // 1263
                                                                       //
        $tip.offset(offset);                                           // 1265
                                                                       //
        actualWidth = $tip[0].offsetWidth;                             // 1267
        actualHeight = $tip[0].offsetHeight;                           // 1268
      }                                                                //
                                                                       //
      this.replaceArrow(delta - width + actualWidth, actualWidth, 'left');
    } else {                                                           //
      this.replaceArrow(actualHeight - height, actualHeight, 'top');   // 1273
    }                                                                  //
                                                                       //
    if (replace) $tip.offset(offset);                                  // 1276
  };                                                                   //
                                                                       //
  Tooltip.prototype.replaceArrow = function (delta, dimension, position) {
    this.arrow().css(position, delta ? 50 * (1 - delta / dimension) + '%' : '');
  };                                                                   //
                                                                       //
  Tooltip.prototype.setContent = function () {                         // 1283
    var $tip = this.tip();                                             // 1284
    var title = this.getTitle();                                       // 1285
                                                                       //
    $tip.find('.tooltip-inner')[this.options.html ? 'html' : 'text'](title);
    $tip.removeClass('fade in top bottom left right');                 // 1288
  };                                                                   //
                                                                       //
  Tooltip.prototype.hide = function () {                               // 1291
    var that = this;                                                   // 1292
    var $tip = this.tip();                                             // 1293
    var e = $.Event('hide.bs.' + this.type);                           // 1294
                                                                       //
    function complete() {                                              // 1296
      if (that.hoverState != 'in') $tip.detach();                      // 1297
      that.$element.trigger('hidden.bs.' + that.type);                 // 1298
    }                                                                  //
                                                                       //
    this.$element.trigger(e);                                          // 1301
                                                                       //
    if (e.isDefaultPrevented()) return;                                // 1303
                                                                       //
    $tip.removeClass('in');                                            // 1305
                                                                       //
    $.support.transition && this.$tip.hasClass('fade') ? $tip.one($.support.transition.end, complete).emulateTransitionEnd(150) : complete();
                                                                       //
    this.hoverState = null;                                            // 1313
                                                                       //
    return this;                                                       // 1315
  };                                                                   //
                                                                       //
  Tooltip.prototype.fixTitle = function () {                           // 1318
    var $e = this.$element;                                            // 1319
    if ($e.attr('title') || typeof $e.attr('data-original-title') != 'string') {
      $e.attr('data-original-title', $e.attr('title') || '').attr('title', '');
    }                                                                  //
  };                                                                   //
                                                                       //
  Tooltip.prototype.hasContent = function () {                         // 1325
    return this.getTitle();                                            // 1326
  };                                                                   //
                                                                       //
  Tooltip.prototype.getPosition = function () {                        // 1329
    var el = this.$element[0];                                         // 1330
    return $.extend({}, typeof el.getBoundingClientRect == 'function' ? el.getBoundingClientRect() : {
      width: el.offsetWidth,                                           // 1332
      height: el.offsetHeight                                          // 1333
    }, this.$element.offset());                                        //
  };                                                                   //
                                                                       //
  Tooltip.prototype.getCalculatedOffset = function (placement, pos, actualWidth, actualHeight) {
    return placement == 'bottom' ? { top: pos.top + pos.height, left: pos.left + pos.width / 2 - actualWidth / 2 } : placement == 'top' ? { top: pos.top - actualHeight, left: pos.left + pos.width / 2 - actualWidth / 2 } : placement == 'left' ? { top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left - actualWidth } :
    /* placement == 'right' */{ top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left + pos.width };
  };                                                                   //
                                                                       //
  Tooltip.prototype.getTitle = function () {                           // 1344
    var title;                                                         // 1345
    var $e = this.$element;                                            // 1346
    var o = this.options;                                              // 1347
                                                                       //
    title = $e.attr('data-original-title') || (typeof o.title == 'function' ? o.title.call($e[0]) : o.title);
                                                                       //
    return title;                                                      // 1352
  };                                                                   //
                                                                       //
  Tooltip.prototype.tip = function () {                                // 1355
    return this.$tip = this.$tip || $(this.options.template);          // 1356
  };                                                                   //
                                                                       //
  Tooltip.prototype.arrow = function () {                              // 1359
    return this.$arrow = this.$arrow || this.tip().find('.tooltip-arrow');
  };                                                                   //
                                                                       //
  Tooltip.prototype.validate = function () {                           // 1363
    if (!this.$element[0].parentNode) {                                // 1364
      this.hide();                                                     // 1365
      this.$element = null;                                            // 1366
      this.options = null;                                             // 1367
    }                                                                  //
  };                                                                   //
                                                                       //
  Tooltip.prototype.enable = function () {                             // 1371
    this.enabled = true;                                               // 1372
  };                                                                   //
                                                                       //
  Tooltip.prototype.disable = function () {                            // 1375
    this.enabled = false;                                              // 1376
  };                                                                   //
                                                                       //
  Tooltip.prototype.toggleEnabled = function () {                      // 1379
    this.enabled = !this.enabled;                                      // 1380
  };                                                                   //
                                                                       //
  Tooltip.prototype.toggle = function (e) {                            // 1383
    var self = e ? $(e.currentTarget)[this.type](this.getDelegateOptions()).data('bs.' + this.type) : this;
    self.tip().hasClass('in') ? self.leave(self) : self.enter(self);   // 1385
  };                                                                   //
                                                                       //
  Tooltip.prototype.destroy = function () {                            // 1388
    clearTimeout(this.timeout);                                        // 1389
    this.hide().$element.off('.' + this.type).removeData('bs.' + this.type);
  };                                                                   //
                                                                       //
  // TOOLTIP PLUGIN DEFINITION                                         //
  // =========================                                         //
                                                                       //
  var old = $.fn.tooltip;                                              // 1397
                                                                       //
  $.fn.tooltip = function (option) {                                   // 1399
    return this.each(function () {                                     // 1400
      var $this = $(this);                                             // 1401
      var data = $this.data('bs.tooltip');                             // 1402
      var options = typeof option == 'object' && option;               // 1403
                                                                       //
      if (!data && option == 'destroy') return;                        // 1405
      if (!data) $this.data('bs.tooltip', data = new Tooltip(this, options));
      if (typeof option == 'string') data[option]();                   // 1407
    });                                                                //
  };                                                                   //
                                                                       //
  $.fn.tooltip.Constructor = Tooltip;                                  // 1411
                                                                       //
  // TOOLTIP NO CONFLICT                                               //
  // ===================                                               //
                                                                       //
  $.fn.tooltip.noConflict = function () {                              // 1417
    $.fn.tooltip = old;                                                // 1418
    return this;                                                       // 1419
  };                                                                   //
})(jQuery);                                                            //
                                                                       //
/* ========================================================================
 * Bootstrap: popover.js v3.1.1                                        //
 * http://getbootstrap.com/javascript/#popovers                        //
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.                                   //
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
                                                                       //
+(function ($) {                                                       // 1433
  'use strict';                                                        // 1434
                                                                       //
  // POPOVER PUBLIC CLASS DEFINITION                                   //
  // ===============================                                   //
                                                                       //
  var Popover = function (element, options) {                          // 1439
    this.init('popover', element, options);                            // 1440
  };                                                                   //
                                                                       //
  if (!$.fn.tooltip) throw new Error('Popover requires tooltip.js');   // 1443
                                                                       //
  Popover.DEFAULTS = $.extend({}, $.fn.tooltip.Constructor.DEFAULTS, {
    placement: 'right',                                                // 1446
    trigger: 'click',                                                  // 1447
    content: '',                                                       // 1448
    template: '<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
  });                                                                  //
                                                                       //
  // NOTE: POPOVER EXTENDS tooltip.js                                  //
  // ================================                                  //
                                                                       //
  Popover.prototype = $.extend({}, $.fn.tooltip.Constructor.prototype);
                                                                       //
  Popover.prototype.constructor = Popover;                             // 1458
                                                                       //
  Popover.prototype.getDefaults = function () {                        // 1460
    return Popover.DEFAULTS;                                           // 1461
  };                                                                   //
                                                                       //
  Popover.prototype.setContent = function () {                         // 1464
    var $tip = this.tip();                                             // 1465
    var title = this.getTitle();                                       // 1466
    var content = this.getContent();                                   // 1467
                                                                       //
    $tip.find('.popover-title')[this.options.html ? 'html' : 'text'](title);
    $tip.find('.popover-content')[// we use append for html objects to maintain js events
    this.options.html ? typeof content == 'string' ? 'html' : 'append' : 'text'](content);
                                                                       //
    $tip.removeClass('fade top bottom left right in');                 // 1474
                                                                       //
    // IE8 doesn't accept hiding via the `:empty` pseudo selector, we have to do
    // this manually by checking the contents.                         //
    if (!$tip.find('.popover-title').html()) $tip.find('.popover-title').hide();
  };                                                                   //
                                                                       //
  Popover.prototype.hasContent = function () {                         // 1481
    return this.getTitle() || this.getContent();                       // 1482
  };                                                                   //
                                                                       //
  Popover.prototype.getContent = function () {                         // 1485
    var $e = this.$element;                                            // 1486
    var o = this.options;                                              // 1487
                                                                       //
    return $e.attr('data-content') || (typeof o.content == 'function' ? o.content.call($e[0]) : o.content);
  };                                                                   //
                                                                       //
  Popover.prototype.arrow = function () {                              // 1495
    return this.$arrow = this.$arrow || this.tip().find('.arrow');     // 1496
  };                                                                   //
                                                                       //
  Popover.prototype.tip = function () {                                // 1499
    if (!this.$tip) this.$tip = $(this.options.template);              // 1500
    return this.$tip;                                                  // 1501
  };                                                                   //
                                                                       //
  // POPOVER PLUGIN DEFINITION                                         //
  // =========================                                         //
                                                                       //
  var old = $.fn.popover;                                              // 1508
                                                                       //
  $.fn.popover = function (option) {                                   // 1510
    return this.each(function () {                                     // 1511
      var $this = $(this);                                             // 1512
      var data = $this.data('bs.popover');                             // 1513
      var options = typeof option == 'object' && option;               // 1514
                                                                       //
      if (!data && option == 'destroy') return;                        // 1516
      if (!data) $this.data('bs.popover', data = new Popover(this, options));
      if (typeof option == 'string') data[option]();                   // 1518
    });                                                                //
  };                                                                   //
                                                                       //
  $.fn.popover.Constructor = Popover;                                  // 1522
                                                                       //
  // POPOVER NO CONFLICT                                               //
  // ===================                                               //
                                                                       //
  $.fn.popover.noConflict = function () {                              // 1528
    $.fn.popover = old;                                                // 1529
    return this;                                                       // 1530
  };                                                                   //
})(jQuery);                                                            //
                                                                       //
/* ========================================================================
 * Bootstrap: scrollspy.js v3.1.1                                      //
 * http://getbootstrap.com/javascript/#scrollspy                       //
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.                                   //
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
                                                                       //
+(function ($) {                                                       // 1544
  'use strict';                                                        // 1545
                                                                       //
  // SCROLLSPY CLASS DEFINITION                                        //
  // ==========================                                        //
                                                                       //
  function ScrollSpy(element, options) {                               // 1550
    var href;                                                          // 1551
    var process = $.proxy(this.process, this);                         // 1552
                                                                       //
    this.$element = $(element).is('body') ? $(window) : $(element);    // 1554
    this.$body = $('body');                                            // 1555
    this.$scrollElement = this.$element.on('scroll.bs.scroll-spy.data-api', process);
    this.options = $.extend({}, ScrollSpy.DEFAULTS, options);          // 1557
    this.selector = (this.options.target || (href = $(element).attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '') //strip for ie7
     || '') + ' .nav li > a';                                          //
    this.offsets = $([]);                                              // 1561
    this.targets = $([]);                                              // 1562
    this.activeTarget = null;                                          // 1563
                                                                       //
    this.refresh();                                                    // 1565
    this.process();                                                    // 1566
  }                                                                    //
                                                                       //
  ScrollSpy.DEFAULTS = {                                               // 1569
    offset: 10                                                         // 1570
  };                                                                   //
                                                                       //
  ScrollSpy.prototype.refresh = function () {                          // 1573
    var offsetMethod = this.$element[0] == window ? 'offset' : 'position';
                                                                       //
    this.offsets = $([]);                                              // 1576
    this.targets = $([]);                                              // 1577
                                                                       //
    var self = this;                                                   // 1579
    var $targets = this.$body.find(this.selector).map(function () {    // 1580
      var $el = $(this);                                               // 1583
      var href = $el.data('target') || $el.attr('href');               // 1584
      var $href = /^#./.test(href) && $(href);                         // 1585
                                                                       //
      return $href && $href.length && $href.is(':visible') && [[$href[offsetMethod]().top + (!$.isWindow(self.$scrollElement.get(0)) && self.$scrollElement.scrollTop()), href]] || null;
    }).sort(function (a, b) {                                          //
      return a[0] - b[0];                                              // 1592
    }).each(function () {                                              //
      self.offsets.push(this[0]);                                      // 1594
      self.targets.push(this[1]);                                      // 1595
    });                                                                //
  };                                                                   //
                                                                       //
  ScrollSpy.prototype.process = function () {                          // 1599
    var scrollTop = this.$scrollElement.scrollTop() + this.options.offset;
    var scrollHeight = this.$scrollElement[0].scrollHeight || this.$body[0].scrollHeight;
    var maxScroll = scrollHeight - this.$scrollElement.height();       // 1602
    var offsets = this.offsets;                                        // 1603
    var targets = this.targets;                                        // 1604
    var activeTarget = this.activeTarget;                              // 1605
    var i;                                                             // 1606
                                                                       //
    if (scrollTop >= maxScroll) {                                      // 1608
      return activeTarget != (i = targets.last()[0]) && this.activate(i);
    }                                                                  //
                                                                       //
    if (activeTarget && scrollTop <= offsets[0]) {                     // 1612
      return activeTarget != (i = targets[0]) && this.activate(i);     // 1613
    }                                                                  //
                                                                       //
    for (i = offsets.length; i--;) {                                   // 1616
      activeTarget != targets[i] && scrollTop >= offsets[i] && (!offsets[i + 1] || scrollTop <= offsets[i + 1]) && this.activate(targets[i]);
    }                                                                  //
  };                                                                   //
                                                                       //
  ScrollSpy.prototype.activate = function (target) {                   // 1624
    this.activeTarget = target;                                        // 1625
                                                                       //
    $(this.selector).parentsUntil(this.options.target, '.active').removeClass('active');
                                                                       //
    var selector = this.selector + '[data-target="' + target + '"],' + this.selector + '[href="' + target + '"]';
                                                                       //
    var active = $(selector).parents('li').addClass('active');         // 1635
                                                                       //
    if (active.parent('.dropdown-menu').length) {                      // 1639
      active = active.closest('li.dropdown').addClass('active');       // 1640
    }                                                                  //
                                                                       //
    active.trigger('activate.bs.scrollspy');                           // 1645
  };                                                                   //
                                                                       //
  // SCROLLSPY PLUGIN DEFINITION                                       //
  // ===========================                                       //
                                                                       //
  var old = $.fn.scrollspy;                                            // 1652
                                                                       //
  $.fn.scrollspy = function (option) {                                 // 1654
    return this.each(function () {                                     // 1655
      var $this = $(this);                                             // 1656
      var data = $this.data('bs.scrollspy');                           // 1657
      var options = typeof option == 'object' && option;               // 1658
                                                                       //
      if (!data) $this.data('bs.scrollspy', data = new ScrollSpy(this, options));
      if (typeof option == 'string') data[option]();                   // 1661
    });                                                                //
  };                                                                   //
                                                                       //
  $.fn.scrollspy.Constructor = ScrollSpy;                              // 1665
                                                                       //
  // SCROLLSPY NO CONFLICT                                             //
  // =====================                                             //
                                                                       //
  $.fn.scrollspy.noConflict = function () {                            // 1671
    $.fn.scrollspy = old;                                              // 1672
    return this;                                                       // 1673
  };                                                                   //
                                                                       //
  // SCROLLSPY DATA-API                                                //
  // ==================                                                //
                                                                       //
  $(window).on('load', function () {                                   // 1680
    $('[data-spy="scroll"]').each(function () {                        // 1681
      var $spy = $(this);                                              // 1682
      $spy.scrollspy($spy.data());                                     // 1683
    });                                                                //
  });                                                                  //
})(jQuery);                                                            //
                                                                       //
/* ========================================================================
 * Bootstrap: tab.js v3.1.1                                            //
 * http://getbootstrap.com/javascript/#tabs                            //
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.                                   //
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
                                                                       //
+(function ($) {                                                       // 1698
  'use strict';                                                        // 1699
                                                                       //
  // TAB CLASS DEFINITION                                              //
  // ====================                                              //
                                                                       //
  var Tab = function (element) {                                       // 1704
    this.element = $(element);                                         // 1705
  };                                                                   //
                                                                       //
  Tab.prototype.show = function () {                                   // 1708
    var $this = this.element;                                          // 1709
    var $ul = $this.closest('ul:not(.dropdown-menu)');                 // 1710
    var selector = $this.data('target');                               // 1711
                                                                       //
    if (!selector) {                                                   // 1713
      selector = $this.attr('href');                                   // 1714
      selector = selector && selector.replace(/.*(?=#[^\s]*$)/, ''); //strip for ie7
    }                                                                  //
                                                                       //
    if ($this.parent('li').hasClass('active')) return;                 // 1718
                                                                       //
    var previous = $ul.find('.active:last a')[0];                      // 1720
    var e = $.Event('show.bs.tab', {                                   // 1721
      relatedTarget: previous                                          // 1722
    });                                                                //
                                                                       //
    $this.trigger(e);                                                  // 1725
                                                                       //
    if (e.isDefaultPrevented()) return;                                // 1727
                                                                       //
    var $target = $(selector);                                         // 1729
                                                                       //
    this.activate($this.parent('li'), $ul);                            // 1731
    this.activate($target, $target.parent(), function () {             // 1732
      $this.trigger({                                                  // 1733
        type: 'shown.bs.tab',                                          // 1734
        relatedTarget: previous                                        // 1735
      });                                                              //
    });                                                                //
  };                                                                   //
                                                                       //
  Tab.prototype.activate = function (element, container, callback) {   // 1740
    var $active = container.find('> .active');                         // 1741
    var transition = callback && $.support.transition && $active.hasClass('fade');
                                                                       //
    function next() {                                                  // 1746
      $active.removeClass('active').find('> .dropdown-menu > .active').removeClass('active');
                                                                       //
      element.addClass('active');                                      // 1752
                                                                       //
      if (transition) {                                                // 1754
        element[0].offsetWidth; // reflow for transition               // 1755
        element.addClass('in');                                        // 1756
      } else {                                                         //
        element.removeClass('fade');                                   // 1758
      }                                                                //
                                                                       //
      if (element.parent('.dropdown-menu')) {                          // 1761
        element.closest('li.dropdown').addClass('active');             // 1762
      }                                                                //
                                                                       //
      callback && callback();                                          // 1765
    }                                                                  //
                                                                       //
    transition ? $active.one($.support.transition.end, next).emulateTransitionEnd(150) : next();
                                                                       //
    $active.removeClass('in');                                         // 1774
  };                                                                   //
                                                                       //
  // TAB PLUGIN DEFINITION                                             //
  // =====================                                             //
                                                                       //
  var old = $.fn.tab;                                                  // 1781
                                                                       //
  $.fn.tab = function (option) {                                       // 1783
    return this.each(function () {                                     // 1784
      var $this = $(this);                                             // 1785
      var data = $this.data('bs.tab');                                 // 1786
                                                                       //
      if (!data) $this.data('bs.tab', data = new Tab(this));           // 1788
      if (typeof option == 'string') data[option]();                   // 1789
    });                                                                //
  };                                                                   //
                                                                       //
  $.fn.tab.Constructor = Tab;                                          // 1793
                                                                       //
  // TAB NO CONFLICT                                                   //
  // ===============                                                   //
                                                                       //
  $.fn.tab.noConflict = function () {                                  // 1799
    $.fn.tab = old;                                                    // 1800
    return this;                                                       // 1801
  };                                                                   //
                                                                       //
  // TAB DATA-API                                                      //
  // ============                                                      //
                                                                       //
  $(document).on('click.bs.tab.data-api', '[data-toggle="tab"], [data-toggle="pill"]', function (e) {
    e.preventDefault();                                                // 1809
    $(this).tab('show');                                               // 1810
  });                                                                  //
})(jQuery);                                                            //
                                                                       //
/* ========================================================================
 * Bootstrap: affix.js v3.1.1                                          //
 * http://getbootstrap.com/javascript/#affix                           //
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.                                   //
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
                                                                       //
+(function ($) {                                                       // 1824
  'use strict';                                                        // 1825
                                                                       //
  // AFFIX CLASS DEFINITION                                            //
  // ======================                                            //
                                                                       //
  var Affix = function (element, options) {                            // 1830
    this.options = $.extend({}, Affix.DEFAULTS, options);              // 1831
    this.$window = $(window).on('scroll.bs.affix.data-api', $.proxy(this.checkPosition, this)).on('click.bs.affix.data-api', $.proxy(this.checkPositionWithEventLoop, this));
                                                                       //
    this.$element = $(element);                                        // 1836
    this.affixed = this.unpin = this.pinnedOffset = null;              // 1837
                                                                       //
    this.checkPosition();                                              // 1841
  };                                                                   //
                                                                       //
  Affix.RESET = 'affix affix-top affix-bottom';                        // 1844
                                                                       //
  Affix.DEFAULTS = {                                                   // 1846
    offset: 0                                                          // 1847
  };                                                                   //
                                                                       //
  Affix.prototype.getPinnedOffset = function () {                      // 1850
    if (this.pinnedOffset) return this.pinnedOffset;                   // 1851
    this.$element.removeClass(Affix.RESET).addClass('affix');          // 1852
    var scrollTop = this.$window.scrollTop();                          // 1853
    var position = this.$element.offset();                             // 1854
    return this.pinnedOffset = position.top - scrollTop;               // 1855
  };                                                                   //
                                                                       //
  Affix.prototype.checkPositionWithEventLoop = function () {           // 1858
    setTimeout($.proxy(this.checkPosition, this), 1);                  // 1859
  };                                                                   //
                                                                       //
  Affix.prototype.checkPosition = function () {                        // 1862
    if (!this.$element.is(':visible')) return;                         // 1863
                                                                       //
    var scrollHeight = $(document).height();                           // 1865
    var scrollTop = this.$window.scrollTop();                          // 1866
    var position = this.$element.offset();                             // 1867
    var offset = this.options.offset;                                  // 1868
    var offsetTop = offset.top;                                        // 1869
    var offsetBottom = offset.bottom;                                  // 1870
                                                                       //
    if (this.affixed == 'top') position.top += scrollTop;              // 1872
                                                                       //
    if (typeof offset != 'object') offsetBottom = offsetTop = offset;  // 1874
    if (typeof offsetTop == 'function') offsetTop = offset.top(this.$element);
    if (typeof offsetBottom == 'function') offsetBottom = offset.bottom(this.$element);
                                                                       //
    var affix = this.unpin != null && scrollTop + this.unpin <= position.top ? false : offsetBottom != null && position.top + this.$element.height() >= scrollHeight - offsetBottom ? 'bottom' : offsetTop != null && scrollTop <= offsetTop ? 'top' : false;
                                                                       //
    if (this.affixed === affix) return;                                // 1882
    if (this.unpin) this.$element.css('top', '');                      // 1883
                                                                       //
    var affixType = 'affix' + (affix ? '-' + affix : '');              // 1885
    var e = $.Event(affixType + '.bs.affix');                          // 1886
                                                                       //
    this.$element.trigger(e);                                          // 1888
                                                                       //
    if (e.isDefaultPrevented()) return;                                // 1890
                                                                       //
    this.affixed = affix;                                              // 1892
    this.unpin = affix == 'bottom' ? this.getPinnedOffset() : null;    // 1893
                                                                       //
    this.$element.removeClass(Affix.RESET).addClass(affixType).trigger($.Event(affixType.replace('affix', 'affixed')));
                                                                       //
    if (affix == 'bottom') {                                           // 1900
      this.$element.offset({ top: scrollHeight - offsetBottom - this.$element.height() });
    }                                                                  //
  };                                                                   //
                                                                       //
  // AFFIX PLUGIN DEFINITION                                           //
  // =======================                                           //
                                                                       //
  var old = $.fn.affix;                                                // 1909
                                                                       //
  $.fn.affix = function (option) {                                     // 1911
    return this.each(function () {                                     // 1912
      var $this = $(this);                                             // 1913
      var data = $this.data('bs.affix');                               // 1914
      var options = typeof option == 'object' && option;               // 1915
                                                                       //
      if (!data) $this.data('bs.affix', data = new Affix(this, options));
      if (typeof option == 'string') data[option]();                   // 1918
    });                                                                //
  };                                                                   //
                                                                       //
  $.fn.affix.Constructor = Affix;                                      // 1922
                                                                       //
  // AFFIX NO CONFLICT                                                 //
  // =================                                                 //
                                                                       //
  $.fn.affix.noConflict = function () {                                // 1928
    $.fn.affix = old;                                                  // 1929
    return this;                                                       // 1930
  };                                                                   //
                                                                       //
  // AFFIX DATA-API                                                    //
  // ==============                                                    //
                                                                       //
  $(window).on('load', function () {                                   // 1937
    $('[data-spy="affix"]').each(function () {                         // 1938
      var $spy = $(this);                                              // 1939
      var data = $spy.data();                                          // 1940
                                                                       //
      data.offset = data.offset || {};                                 // 1942
                                                                       //
      if (data.offsetBottom) data.offset.bottom = data.offsetBottom;   // 1944
      if (data.offsetTop) data.offset.top = data.offsetTop;            // 1945
                                                                       //
      $spy.affix(data);                                                // 1947
    });                                                                //
  });                                                                  //
})(jQuery);                                                            //
