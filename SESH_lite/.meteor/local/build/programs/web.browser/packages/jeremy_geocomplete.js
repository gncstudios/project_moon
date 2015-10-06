//////////////////////////////////////////////////////////////////////////
//                                                                      //
// This is a generated file. You can view the original                  //
// source in your browser if your browser supports source maps.         //
// Source maps are supported by all recent versions of Chrome, Safari,  //
// and Firefox, and by Internet Explorer 11.                            //
//                                                                      //
//////////////////////////////////////////////////////////////////////////


(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var $ = Package.jquery.$;
var jQuery = Package.jquery.jQuery;
var GoogleMaps = Package['dburles:google-maps'].GoogleMaps;

(function(){

///////////////////////////////////////////////////////////////////////
//                                                                   //
// packages/jeremy_geocomplete/packages/jeremy_geocomplete.js        //
//                                                                   //
///////////////////////////////////////////////////////////////////////
                                                                     //
(function () {                                                       // 1
                                                                     // 2
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/jeremy:geocomplete/lib/jquery.geocomplete.js                                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
/**                                                                                                                    // 1
 * jQuery Geocoding and Places Autocomplete Plugin - V 1.6.5                                                           // 2
 *                                                                                                                     // 3
 * @author Martin Kleppe <kleppe@ubilabs.net>, 2014                                                                    // 4
 * @author Ubilabs http://ubilabs.net, 2014                                                                            // 5
 * @license MIT License <http://www.opensource.org/licenses/mit-license.php>                                           // 6
 */                                                                                                                    // 7
                                                                                                                       // 8
// # $.geocomplete()                                                                                                   // 9
// ## jQuery Geocoding and Places Autocomplete Plugin                                                                  // 10
//                                                                                                                     // 11
// * https://github.com/ubilabs/geocomplete/                                                                           // 12
// * by Martin Kleppe <kleppe@ubilabs.net>                                                                             // 13
                                                                                                                       // 14
(function($, window, document, undefined){                                                                             // 15
                                                                                                                       // 16
  // ## Options                                                                                                        // 17
  // The default options for this plugin.                                                                              // 18
  //                                                                                                                   // 19
  // * `map` - Might be a selector, an jQuery object or a DOM element. Default is `false` which shows no map.          // 20
  // * `details` - The container that should be populated with data. Defaults to `false` which ignores the setting.    // 21
  // * 'detailsScope' - Allows you to scope the 'details' container and have multiple geocomplete fields on one page. Must be a parent of the input. Default is 'null'
  // * `location` - Location to initialize the map on. Might be an address `string` or an `array` with [latitude, longitude] or a `google.maps.LatLng`object. Default is `false` which shows a blank map.
  // * `bounds` - Whether to snap geocode search to map bounds. Default: `true` if false search globally. Alternatively pass a custom `LatLngBounds object.
  // * `autoselect` - Automatically selects the highlighted item or the first item from the suggestions list on Enter. // 25
  // * `detailsAttribute` - The attribute's name to use as an indicator. Default: `"name"`                             // 26
  // * `mapOptions` - Options to pass to the `google.maps.Map` constructor. See the full list [here](http://code.google.com/apis/maps/documentation/javascript/reference.html#MapOptions).
  // * `mapOptions.zoom` - The inital zoom level. Default: `14`                                                        // 28
  // * `mapOptions.scrollwheel` - Whether to enable the scrollwheel to zoom the map. Default: `false`                  // 29
  // * `mapOptions.mapTypeId` - The map type. Default: `"roadmap"`                                                     // 30
  // * `markerOptions` - The options to pass to the `google.maps.Marker` constructor. See the full list [here](http://code.google.com/apis/maps/documentation/javascript/reference.html#MarkerOptions).
  // * `markerOptions.draggable` - If the marker is draggable. Default: `false`. Set to true to enable dragging.       // 32
  // * `markerOptions.disabled` - Do not show marker. Default: `false`. Set to true to disable marker.                 // 33
  // * `maxZoom` - The maximum zoom level too zoom in after a geocoding response. Default: `16`                        // 34
  // * `types` - An array containing one or more of the supported types for the places request. Default: `['geocode']` See the full list [here](http://code.google.com/apis/maps/documentation/javascript/places.html#place_search_requests).
  // * `blur` - Trigger geocode when input loses focus.                                                                // 36
  // * `geocodeAfterResult` - If blur is set to true, choose whether to geocode if user has explicitly selected a result before blur.
  // * `restoreValueAfterBlur` - Restores the input's value upon blurring. Default is `false` which ignores the setting.
                                                                                                                       // 39
  var defaults = {                                                                                                     // 40
    bounds: true,                                                                                                      // 41
    country: null,                                                                                                     // 42
    map: false,                                                                                                        // 43
    details: false,                                                                                                    // 44
    detailsAttribute: "name",                                                                                          // 45
    detailsScope: null,                                                                                                // 46
    autoselect: true,                                                                                                  // 47
    location: false,                                                                                                   // 48
                                                                                                                       // 49
    mapOptions: {                                                                                                      // 50
      zoom: 14,                                                                                                        // 51
      scrollwheel: false,                                                                                              // 52
      mapTypeId: "roadmap"                                                                                             // 53
    },                                                                                                                 // 54
                                                                                                                       // 55
    markerOptions: {                                                                                                   // 56
      draggable: false                                                                                                 // 57
    },                                                                                                                 // 58
                                                                                                                       // 59
    maxZoom: 16,                                                                                                       // 60
    types: ['geocode'],                                                                                                // 61
    blur: false,                                                                                                       // 62
    geocodeAfterResult: false,                                                                                         // 63
    restoreValueAfterBlur: false                                                                                       // 64
  };                                                                                                                   // 65
                                                                                                                       // 66
  // See: [Geocoding Types](https://developers.google.com/maps/documentation/geocoding/#Types)                         // 67
  // on Google Developers.                                                                                             // 68
  var componentTypes = ("street_address route intersection political " +                                               // 69
    "country administrative_area_level_1 administrative_area_level_2 " +                                               // 70
    "administrative_area_level_3 colloquial_area locality sublocality " +                                              // 71
    "neighborhood premise subpremise postal_code natural_feature airport " +                                           // 72
    "park point_of_interest post_box street_number floor room " +                                                      // 73
    "lat lng viewport location " +                                                                                     // 74
    "formatted_address location_type bounds").split(" ");                                                              // 75
                                                                                                                       // 76
  // See: [Places Details Responses](https://developers.google.com/maps/documentation/javascript/places#place_details_responses)
  // on Google Developers.                                                                                             // 78
  var placesDetails = ("id place_id url website vicinity reference name rating " +                                     // 79
    "international_phone_number icon formatted_phone_number").split(" ");                                              // 80
                                                                                                                       // 81
  // The actual plugin constructor.                                                                                    // 82
  function GeoComplete(input, options) {                                                                               // 83
                                                                                                                       // 84
    this.options = $.extend(true, {}, defaults, options);                                                              // 85
                                                                                                                       // 86
    this.input = input;                                                                                                // 87
    this.$input = $(input);                                                                                            // 88
                                                                                                                       // 89
    this._defaults = defaults;                                                                                         // 90
    this._name = 'geocomplete';                                                                                        // 91
                                                                                                                       // 92
    this.init();                                                                                                       // 93
  }                                                                                                                    // 94
                                                                                                                       // 95
  // Initialize all parts of the plugin.                                                                               // 96
  $.extend(GeoComplete.prototype, {                                                                                    // 97
    init: function(){                                                                                                  // 98
      this.initMap();                                                                                                  // 99
      this.initMarker();                                                                                               // 100
      this.initGeocoder();                                                                                             // 101
      this.initDetails();                                                                                              // 102
      this.initLocation();                                                                                             // 103
    },                                                                                                                 // 104
                                                                                                                       // 105
    // Initialize the map but only if the option `map` was set.                                                        // 106
    // This will create a `map` within the given container                                                             // 107
    // using the provided `mapOptions` or link to the existing map instance.                                           // 108
    initMap: function(){                                                                                               // 109
      if (!this.options.map){ return; }                                                                                // 110
                                                                                                                       // 111
      if (typeof this.options.map.setCenter == "function"){                                                            // 112
        this.map = this.options.map;                                                                                   // 113
        return;                                                                                                        // 114
      }                                                                                                                // 115
                                                                                                                       // 116
      this.map = new google.maps.Map(                                                                                  // 117
        $(this.options.map)[0],                                                                                        // 118
        this.options.mapOptions                                                                                        // 119
      );                                                                                                               // 120
                                                                                                                       // 121
      // add click event listener on the map                                                                           // 122
      google.maps.event.addListener(                                                                                   // 123
        this.map,                                                                                                      // 124
        'click',                                                                                                       // 125
        $.proxy(this.mapClicked, this)                                                                                 // 126
      );                                                                                                               // 127
                                                                                                                       // 128
      // add dragend even listener on the map                                                                          // 129
      google.maps.event.addListener(                                                                                   // 130
        this.map,                                                                                                      // 131
        'dragend',                                                                                                     // 132
        $.proxy(this.mapDragged, this)                                                                                 // 133
      );                                                                                                               // 134
                                                                                                                       // 135
      // add idle even listener on the map                                                                             // 136
      google.maps.event.addListener(                                                                                   // 137
        this.map,                                                                                                      // 138
        'idle',                                                                                                        // 139
        $.proxy(this.mapIdle, this)                                                                                    // 140
      );                                                                                                               // 141
                                                                                                                       // 142
      google.maps.event.addListener(                                                                                   // 143
        this.map,                                                                                                      // 144
        'zoom_changed',                                                                                                // 145
        $.proxy(this.mapZoomed, this)                                                                                  // 146
      );                                                                                                               // 147
    },                                                                                                                 // 148
                                                                                                                       // 149
    // Add a marker with the provided `markerOptions` but only                                                         // 150
    // if the option was set. Additionally it listens for the `dragend` event                                          // 151
    // to notify the plugin about changes.                                                                             // 152
    initMarker: function(){                                                                                            // 153
      if (!this.map){ return; }                                                                                        // 154
      var options = $.extend(this.options.markerOptions, { map: this.map });                                           // 155
                                                                                                                       // 156
      if (options.disabled){ return; }                                                                                 // 157
                                                                                                                       // 158
      this.marker = new google.maps.Marker(options);                                                                   // 159
                                                                                                                       // 160
      google.maps.event.addListener(                                                                                   // 161
        this.marker,                                                                                                   // 162
        'dragend',                                                                                                     // 163
        $.proxy(this.markerDragged, this)                                                                              // 164
      );                                                                                                               // 165
    },                                                                                                                 // 166
                                                                                                                       // 167
    // Associate the input with the autocompleter and create a geocoder                                                // 168
    // to fall back when the autocompleter does not return a value.                                                    // 169
    initGeocoder: function(){                                                                                          // 170
                                                                                                                       // 171
      // Indicates is user did select a result from the dropdown.                                                      // 172
      var selected = false;                                                                                            // 173
                                                                                                                       // 174
      var options = {                                                                                                  // 175
        types: this.options.types,                                                                                     // 176
        bounds: this.options.bounds === true ? null : this.options.bounds,                                             // 177
        componentRestrictions: this.options.componentRestrictions                                                      // 178
      };                                                                                                               // 179
                                                                                                                       // 180
      if (this.options.country){                                                                                       // 181
        options.componentRestrictions = {country: this.options.country};                                               // 182
      }                                                                                                                // 183
                                                                                                                       // 184
      this.autocomplete = new google.maps.places.Autocomplete(                                                         // 185
        this.input, options                                                                                            // 186
      );                                                                                                               // 187
                                                                                                                       // 188
      this.geocoder = new google.maps.Geocoder();                                                                      // 189
                                                                                                                       // 190
      // Bind autocomplete to map bounds but only if there is a map                                                    // 191
      // and `options.bindToMap` is set to true.                                                                       // 192
      if (this.map && this.options.bounds === true){                                                                   // 193
        this.autocomplete.bindTo('bounds', this.map);                                                                  // 194
      }                                                                                                                // 195
                                                                                                                       // 196
      // Watch `place_changed` events on the autocomplete input field.                                                 // 197
      google.maps.event.addListener(                                                                                   // 198
        this.autocomplete,                                                                                             // 199
        'place_changed',                                                                                               // 200
        $.proxy(this.placeChanged, this)                                                                               // 201
      );                                                                                                               // 202
                                                                                                                       // 203
      // Prevent parent form from being submitted if user hit enter.                                                   // 204
      this.$input.on('keypress.' + this._name, function(event){                                                        // 205
        if (event.keyCode === 13){ return false; }                                                                     // 206
      });                                                                                                              // 207
                                                                                                                       // 208
      // Assume that if user types anything after having selected a result,                                            // 209
      // the selected location is not valid any more.                                                                  // 210
      if (this.options.geocodeAfterResult === true){                                                                   // 211
        this.$input.bind('keypress.' + this._name, $.proxy(function(){                                                 // 212
          if (event.keyCode != 9 && this.selected === true){                                                           // 213
              this.selected = false;                                                                                   // 214
          }                                                                                                            // 215
        }, this));                                                                                                     // 216
      }                                                                                                                // 217
                                                                                                                       // 218
      // Listen for "geocode" events and trigger find action.                                                          // 219
      this.$input.bind('geocode.' + this._name, $.proxy(function(){                                                    // 220
        this.find();                                                                                                   // 221
      }, this));                                                                                                       // 222
                                                                                                                       // 223
      // Saves the previous input value                                                                                // 224
      this.$input.bind('geocode:result.' + this._name, $.proxy(function(){                                             // 225
        this.lastInputVal = this.$input.val();                                                                         // 226
      }, this));                                                                                                       // 227
                                                                                                                       // 228
      // Trigger find action when input element is blurred out and user has                                            // 229
      // not explicitly selected a result.                                                                             // 230
      // (Useful for typing partial location and tabbing to the next field                                             // 231
      // or clicking somewhere else.)                                                                                  // 232
      if (this.options.blur === true){                                                                                 // 233
        this.$input.on('blur.' + this._name, $.proxy(function(){                                                       // 234
          if (this.options.geocodeAfterResult === true && this.selected === true) { return; }                          // 235
                                                                                                                       // 236
          if (this.options.restoreValueAfterBlur === true && this.selected === true) {                                 // 237
            setTimeout($.proxy(this.restoreLastValue, this), 0);                                                       // 238
          } else {                                                                                                     // 239
            this.find();                                                                                               // 240
          }                                                                                                            // 241
        }, this));                                                                                                     // 242
      }                                                                                                                // 243
    },                                                                                                                 // 244
                                                                                                                       // 245
    // Prepare a given DOM structure to be populated when we got some data.                                            // 246
    // This will cycle through the list of component types and map the                                                 // 247
    // corresponding elements.                                                                                         // 248
    initDetails: function(){                                                                                           // 249
      if (!this.options.details){ return; }                                                                            // 250
                                                                                                                       // 251
      if(this.options.detailsScope) {                                                                                  // 252
        var $details = $(this.input).parents(this.options.detailsScope).find(this.options.details);                    // 253
      } else {                                                                                                         // 254
        var $details = $(this.options.details);                                                                        // 255
      }                                                                                                                // 256
                                                                                                                       // 257
      var attribute = this.options.detailsAttribute,                                                                   // 258
        details = {};                                                                                                  // 259
                                                                                                                       // 260
      function setDetail(value){                                                                                       // 261
        details[value] = $details.find("[" +  attribute + "=" + value + "]");                                          // 262
      }                                                                                                                // 263
                                                                                                                       // 264
      $.each(componentTypes, function(index, key){                                                                     // 265
        setDetail(key);                                                                                                // 266
        setDetail(key + "_short");                                                                                     // 267
      });                                                                                                              // 268
                                                                                                                       // 269
      $.each(placesDetails, function(index, key){                                                                      // 270
        setDetail(key);                                                                                                // 271
      });                                                                                                              // 272
                                                                                                                       // 273
      this.$details = $details;                                                                                        // 274
      this.details = details;                                                                                          // 275
    },                                                                                                                 // 276
                                                                                                                       // 277
    // Set the initial location of the plugin if the `location` options was set.                                       // 278
    // This method will care about converting the value into the right format.                                         // 279
    initLocation: function() {                                                                                         // 280
                                                                                                                       // 281
      var location = this.options.location, latLng;                                                                    // 282
                                                                                                                       // 283
      if (!location) { return; }                                                                                       // 284
                                                                                                                       // 285
      if (typeof location == 'string') {                                                                               // 286
        this.find(location);                                                                                           // 287
        return;                                                                                                        // 288
      }                                                                                                                // 289
                                                                                                                       // 290
      if (location instanceof Array) {                                                                                 // 291
        latLng = new google.maps.LatLng(location[0], location[1]);                                                     // 292
      }                                                                                                                // 293
                                                                                                                       // 294
      if (location instanceof google.maps.LatLng){                                                                     // 295
        latLng = location;                                                                                             // 296
      }                                                                                                                // 297
                                                                                                                       // 298
      if (latLng){                                                                                                     // 299
        if (this.map){ this.map.setCenter(latLng); }                                                                   // 300
        if (this.marker){ this.marker.setPosition(latLng); }                                                           // 301
      }                                                                                                                // 302
    },                                                                                                                 // 303
                                                                                                                       // 304
    destroy: function(){                                                                                               // 305
      if (this.map) {                                                                                                  // 306
        google.maps.event.clearInstanceListeners(this.map);                                                            // 307
        google.maps.event.clearInstanceListeners(this.marker);                                                         // 308
      }                                                                                                                // 309
                                                                                                                       // 310
      this.autocomplete.unbindAll();                                                                                   // 311
      google.maps.event.clearInstanceListeners(this.autocomplete);                                                     // 312
      google.maps.event.clearInstanceListeners(this.input);                                                            // 313
      this.$input.removeData();                                                                                        // 314
      this.$input.off(this._name);                                                                                     // 315
      this.$input.unbind('.' + this._name);                                                                            // 316
    },                                                                                                                 // 317
                                                                                                                       // 318
    // Look up a given address. If no `address` was specified it uses                                                  // 319
    // the current value of the input.                                                                                 // 320
    find: function(address){                                                                                           // 321
      this.geocode({                                                                                                   // 322
        address: address || this.$input.val()                                                                          // 323
      });                                                                                                              // 324
    },                                                                                                                 // 325
                                                                                                                       // 326
    // Requests details about a given location.                                                                        // 327
    // Additionally it will bias the requests to the provided bounds.                                                  // 328
    geocode: function(request){                                                                                        // 329
      // Don't geocode if the requested address is empty                                                               // 330
      if (!request.address) {                                                                                          // 331
        return;                                                                                                        // 332
      }                                                                                                                // 333
      if (this.options.bounds && !request.bounds){                                                                     // 334
        if (this.options.bounds === true){                                                                             // 335
          request.bounds = this.map && this.map.getBounds();                                                           // 336
        } else {                                                                                                       // 337
          request.bounds = this.options.bounds;                                                                        // 338
        }                                                                                                              // 339
      }                                                                                                                // 340
                                                                                                                       // 341
      if (this.options.country){                                                                                       // 342
        request.region = this.options.country;                                                                         // 343
      }                                                                                                                // 344
                                                                                                                       // 345
      this.geocoder.geocode(request, $.proxy(this.handleGeocode, this));                                               // 346
    },                                                                                                                 // 347
                                                                                                                       // 348
    // Get the selected result. If no result is selected on the list, then get                                         // 349
    // the first result from the list.                                                                                 // 350
    selectFirstResult: function() {                                                                                    // 351
      //$(".pac-container").hide();                                                                                    // 352
                                                                                                                       // 353
      var selected = '';                                                                                               // 354
      // Check if any result is selected.                                                                              // 355
      if ($(".pac-item-selected")[0]) {                                                                                // 356
        selected = '-selected';                                                                                        // 357
      }                                                                                                                // 358
                                                                                                                       // 359
      // Get the first suggestion's text.                                                                              // 360
      var $span1 = $(".pac-container:last .pac-item" + selected + ":first span:nth-child(2)").text();                  // 361
      var $span2 = $(".pac-container:last .pac-item" + selected + ":first span:nth-child(3)").text();                  // 362
                                                                                                                       // 363
      // Adds the additional information, if available.                                                                // 364
      var firstResult = $span1;                                                                                        // 365
      if ($span2) {                                                                                                    // 366
        firstResult += " - " + $span2;                                                                                 // 367
      }                                                                                                                // 368
                                                                                                                       // 369
      this.$input.val(firstResult);                                                                                    // 370
                                                                                                                       // 371
      return firstResult;                                                                                              // 372
    },                                                                                                                 // 373
                                                                                                                       // 374
    // Restores the input value using the previous value if it exists                                                  // 375
    restoreLastValue: function() {                                                                                     // 376
      if (this.lastInputVal){ this.$input.val(this.lastInputVal); }                                                    // 377
    },                                                                                                                 // 378
                                                                                                                       // 379
    // Handles the geocode response. If more than one results was found                                                // 380
    // it triggers the "geocode:multiple" events. If there was an error                                                // 381
    // the "geocode:error" event is fired.                                                                             // 382
    handleGeocode: function(results, status){                                                                          // 383
      if (status === google.maps.GeocoderStatus.OK) {                                                                  // 384
        var result = results[0];                                                                                       // 385
        this.$input.val(result.formatted_address);                                                                     // 386
        this.update(result);                                                                                           // 387
                                                                                                                       // 388
        if (results.length > 1){                                                                                       // 389
          this.trigger("geocode:multiple", results);                                                                   // 390
        }                                                                                                              // 391
                                                                                                                       // 392
      } else {                                                                                                         // 393
        this.trigger("geocode:error", status);                                                                         // 394
      }                                                                                                                // 395
    },                                                                                                                 // 396
                                                                                                                       // 397
    // Triggers a given `event` with optional `arguments` on the input.                                                // 398
    trigger: function(event, argument){                                                                                // 399
      this.$input.trigger(event, [argument]);                                                                          // 400
    },                                                                                                                 // 401
                                                                                                                       // 402
    // Set the map to a new center by passing a `geometry`.                                                            // 403
    // If the geometry has a viewport, the map zooms out to fit the bounds.                                            // 404
    // Additionally it updates the marker position.                                                                    // 405
    center: function(geometry){                                                                                        // 406
      if (geometry.viewport){                                                                                          // 407
        this.map.fitBounds(geometry.viewport);                                                                         // 408
        if (this.map.getZoom() > this.options.maxZoom){                                                                // 409
          this.map.setZoom(this.options.maxZoom);                                                                      // 410
        }                                                                                                              // 411
      } else {                                                                                                         // 412
        this.map.setZoom(this.options.maxZoom);                                                                        // 413
        this.map.setCenter(geometry.location);                                                                         // 414
      }                                                                                                                // 415
                                                                                                                       // 416
      if (this.marker){                                                                                                // 417
        this.marker.setPosition(geometry.location);                                                                    // 418
        this.marker.setAnimation(this.options.markerOptions.animation);                                                // 419
      }                                                                                                                // 420
    },                                                                                                                 // 421
                                                                                                                       // 422
    // Update the elements based on a single places or geocoding response                                              // 423
    // and trigger the "geocode:result" event on the input.                                                            // 424
    update: function(result){                                                                                          // 425
                                                                                                                       // 426
      if (this.map){                                                                                                   // 427
        this.center(result.geometry);                                                                                  // 428
      }                                                                                                                // 429
                                                                                                                       // 430
      if (this.$details){                                                                                              // 431
        this.fillDetails(result);                                                                                      // 432
      }                                                                                                                // 433
                                                                                                                       // 434
      this.trigger("geocode:result", result);                                                                          // 435
    },                                                                                                                 // 436
                                                                                                                       // 437
    // Populate the provided elements with new `result` data.                                                          // 438
    // This will lookup all elements that has an attribute with the given                                              // 439
    // component type.                                                                                                 // 440
    fillDetails: function(result){                                                                                     // 441
                                                                                                                       // 442
      var data = {},                                                                                                   // 443
        geometry = result.geometry,                                                                                    // 444
        viewport = geometry.viewport,                                                                                  // 445
        bounds = geometry.bounds;                                                                                      // 446
                                                                                                                       // 447
      // Create a simplified version of the address components.                                                        // 448
      $.each(result.address_components, function(index, object){                                                       // 449
        var name = object.types[0];                                                                                    // 450
                                                                                                                       // 451
        $.each(object.types, function(index, name){                                                                    // 452
          data[name] = object.long_name;                                                                               // 453
          data[name + "_short"] = object.short_name;                                                                   // 454
        });                                                                                                            // 455
      });                                                                                                              // 456
                                                                                                                       // 457
      // Add properties of the places details.                                                                         // 458
      $.each(placesDetails, function(index, key){                                                                      // 459
        data[key] = result[key];                                                                                       // 460
      });                                                                                                              // 461
                                                                                                                       // 462
      // Add infos about the address and geometry.                                                                     // 463
      $.extend(data, {                                                                                                 // 464
        formatted_address: result.formatted_address,                                                                   // 465
        location_type: geometry.location_type || "PLACES",                                                             // 466
        viewport: viewport,                                                                                            // 467
        bounds: bounds,                                                                                                // 468
        location: geometry.location,                                                                                   // 469
        lat: geometry.location.lat(),                                                                                  // 470
        lng: geometry.location.lng()                                                                                   // 471
      });                                                                                                              // 472
                                                                                                                       // 473
      // Set the values for all details.                                                                               // 474
      $.each(this.details, $.proxy(function(key, $detail){                                                             // 475
        var value = data[key];                                                                                         // 476
        this.setDetail($detail, value);                                                                                // 477
      }, this));                                                                                                       // 478
                                                                                                                       // 479
      this.data = data;                                                                                                // 480
    },                                                                                                                 // 481
                                                                                                                       // 482
    // Assign a given `value` to a single `$element`.                                                                  // 483
    // If the element is an input, the value is set, otherwise it updates                                              // 484
    // the text content.                                                                                               // 485
    setDetail: function($element, value){                                                                              // 486
                                                                                                                       // 487
      if (value === undefined){                                                                                        // 488
        value = "";                                                                                                    // 489
      } else if (typeof value.toUrlValue == "function"){                                                               // 490
        value = value.toUrlValue();                                                                                    // 491
      }                                                                                                                // 492
                                                                                                                       // 493
      if ($element.is(":input")){                                                                                      // 494
        $element.val(value);                                                                                           // 495
      } else {                                                                                                         // 496
        $element.text(value);                                                                                          // 497
      }                                                                                                                // 498
    },                                                                                                                 // 499
                                                                                                                       // 500
    // Fire the "geocode:dragged" event and pass the new position.                                                     // 501
    markerDragged: function(event){                                                                                    // 502
      this.trigger("geocode:dragged", event.latLng);                                                                   // 503
    },                                                                                                                 // 504
                                                                                                                       // 505
    mapClicked: function(event) {                                                                                      // 506
        this.trigger("geocode:click", event.latLng);                                                                   // 507
    },                                                                                                                 // 508
                                                                                                                       // 509
    // Fire the "geocode:mapdragged" event and pass the current position of the map center.                            // 510
    mapDragged: function(event) {                                                                                      // 511
      this.trigger("geocode:mapdragged", this.map.getCenter());                                                        // 512
    },                                                                                                                 // 513
                                                                                                                       // 514
    // Fire the "geocode:idle" event and pass the current position of the map center.                                  // 515
    mapIdle: function(event) {                                                                                         // 516
      this.trigger("geocode:idle", this.map.getCenter());                                                              // 517
    },                                                                                                                 // 518
                                                                                                                       // 519
    mapZoomed: function(event) {                                                                                       // 520
      this.trigger("geocode:zoom", this.map.getZoom());                                                                // 521
    },                                                                                                                 // 522
                                                                                                                       // 523
    // Restore the old position of the marker to the last knwon location.                                              // 524
    resetMarker: function(){                                                                                           // 525
      this.marker.setPosition(this.data.location);                                                                     // 526
      this.setDetail(this.details.lat, this.data.location.lat());                                                      // 527
      this.setDetail(this.details.lng, this.data.location.lng());                                                      // 528
    },                                                                                                                 // 529
                                                                                                                       // 530
    // Update the plugin after the user has selected an autocomplete entry.                                            // 531
    // If the place has no geometry it passes it to the geocoder.                                                      // 532
    placeChanged: function(){                                                                                          // 533
      var place = this.autocomplete.getPlace();                                                                        // 534
      this.selected = true;                                                                                            // 535
                                                                                                                       // 536
      if (!place.geometry){                                                                                            // 537
        if (this.options.autoselect) {                                                                                 // 538
          // Automatically selects the highlighted item or the first item from the                                     // 539
          // suggestions list.                                                                                         // 540
          var autoSelection = this.selectFirstResult();                                                                // 541
          this.find(autoSelection);                                                                                    // 542
        }                                                                                                              // 543
      } else {                                                                                                         // 544
        // Use the input text if it already gives geometry.                                                            // 545
        this.update(place);                                                                                            // 546
      }                                                                                                                // 547
    }                                                                                                                  // 548
  });                                                                                                                  // 549
                                                                                                                       // 550
  // A plugin wrapper around the constructor.                                                                          // 551
  // Pass `options` with all settings that are different from the default.                                             // 552
  // The attribute is used to prevent multiple instantiations of the plugin.                                           // 553
  $.fn.geocomplete = function(options) {                                                                               // 554
                                                                                                                       // 555
    var attribute = 'plugin_geocomplete';                                                                              // 556
                                                                                                                       // 557
    // If you call `.geocomplete()` with a string as the first parameter                                               // 558
    // it returns the corresponding property or calls the method with the                                              // 559
    // following arguments.                                                                                            // 560
    if (typeof options == "string"){                                                                                   // 561
                                                                                                                       // 562
      var instance = $(this).data(attribute) || $(this).geocomplete().data(attribute),                                 // 563
        prop = instance[options];                                                                                      // 564
                                                                                                                       // 565
      if (typeof prop == "function"){                                                                                  // 566
        prop.apply(instance, Array.prototype.slice.call(arguments, 1));                                                // 567
        return $(this);                                                                                                // 568
      } else {                                                                                                         // 569
        if (arguments.length == 2){                                                                                    // 570
          prop = arguments[1];                                                                                         // 571
        }                                                                                                              // 572
        return prop;                                                                                                   // 573
      }                                                                                                                // 574
    } else {                                                                                                           // 575
      return this.each(function() {                                                                                    // 576
        // Prevent against multiple instantiations.                                                                    // 577
        var instance = $.data(this, attribute);                                                                        // 578
        if (!instance) {                                                                                               // 579
          instance = new GeoComplete( this, options );                                                                 // 580
          $.data(this, attribute, instance);                                                                           // 581
        }                                                                                                              // 582
      });                                                                                                              // 583
    }                                                                                                                  // 584
  };                                                                                                                   // 585
                                                                                                                       // 586
})( jQuery, window, document );                                                                                        // 587
                                                                                                                       // 588
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                     // 598
}).call(this);                                                       // 599
                                                                     // 600
///////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['jeremy:geocomplete'] = {};

})();
