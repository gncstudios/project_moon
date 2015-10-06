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
var Template = Package.templating.Template;
var $ = Package.jquery.$;
var jQuery = Package.jquery.jQuery;
var _ = Package.underscore._;
var _s = Package['mrt:underscore-string-latest']._s;
var Blaze = Package.blaze.Blaze;
var UI = Package.blaze.UI;
var Handlebars = Package.blaze.Handlebars;
var Spacebars = Package.spacebars.Spacebars;
var HTML = Package.htmljs.HTML;

/* Package-scope variables */
var $, _, Aggregates, Formats, Rules, Transforms, Utils, Form, Shower;

(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/copleykj_shower/packages/copleykj_shower.js                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
(function () {                                                                                                         // 1
                                                                                                                       // 2
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////    // 3
//                                                                                                               //    // 4
// packages/copleykj:shower/js/pre.js                                                                            //    // 5
//                                                                                                               //    // 6
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////    // 7
                                                                                                                 //    // 8
$ = Package.jquery.$;                                                                                            // 1  // 9
_ = Package.underscore._;                                                                                        // 2  // 10
                                                                                                                 // 3  // 11
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////    // 12
                                                                                                                       // 13
}).call(this);                                                                                                         // 14
                                                                                                                       // 15
                                                                                                                       // 16
                                                                                                                       // 17
                                                                                                                       // 18
                                                                                                                       // 19
                                                                                                                       // 20
(function () {                                                                                                         // 21
                                                                                                                       // 22
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////    // 23
//                                                                                                               //    // 24
// packages/copleykj:shower/js/aggregates.js                                                                     //    // 25
//                                                                                                               //    // 26
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////    // 27
                                                                                                                 //    // 28
Aggregates = {                                                                                                   // 1  // 29
    sum: function(fields, formFieldsObject){                                                                     // 2  // 30
        var sum = 0;                                                                                             // 3  // 31
        _(fields).each( function(fieldName) {                                                                    // 4  // 32
            var fieldValue = parseFloat(formFieldsObject[fieldName]);                                            // 5  // 33
            if(_.isNumber(fieldValue)){                                                                          // 6  // 34
                sum += fieldValue;                                                                               // 7  // 35
            }                                                                                                    // 8  // 36
        });                                                                                                      // 9  // 37
        return sum.toString();                                                                                   // 10
    },                                                                                                           // 11
    avg: function(fields, formFieldsObject){                                                                     // 12
        var sum = parseFloat(this.sum(fields, formFieldsObject));                                                // 13
        sum = sum / fields.length;                                                                               // 14
        return sum.toString();                                                                                   // 15
    },                                                                                                           // 16
    join: function(fields, formFieldsObject, argument){                                                          // 17
        var fieldValues = [];                                                                                    // 18
        _(fields).each( function(fieldName) {                                                                    // 19
            fieldValues.push(formFieldsObject[fieldName]);                                                       // 20
        });                                                                                                      // 21
        return fieldValues.join(argument);                                                                       // 22
    },                                                                                                           // 23
    arraySet: function(fields, formFieldsObject){                                                                // 24
        var newField = [];                                                                                       // 25
        _(fields).each( function(fieldName) {                                                                    // 26
            newField.push(formFieldsObject[fieldName]);                                                          // 27
        });                                                                                                      // 28
        return newField;                                                                                         // 29
    },                                                                                                           // 30
    objectSet: function(fields, formFieldsObject){                                                               // 31
        var newField = {};                                                                                       // 32
        _(fields).each( function(fieldName) {                                                                    // 33
            newField[fieldName] = formFieldsObject[fieldName];                                                   // 34
        });                                                                                                      // 35
        return newField;                                                                                         // 36
    }                                                                                                            // 37
};                                                                                                               // 38
                                                                                                                 // 39
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////    // 68
                                                                                                                       // 69
}).call(this);                                                                                                         // 70
                                                                                                                       // 71
                                                                                                                       // 72
                                                                                                                       // 73
                                                                                                                       // 74
                                                                                                                       // 75
                                                                                                                       // 76
(function () {                                                                                                         // 77
                                                                                                                       // 78
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////    // 79
//                                                                                                               //    // 80
// packages/copleykj:shower/js/formats.js                                                                        //    // 81
//                                                                                                               //    // 82
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////    // 83
                                                                                                                 //    // 84
Formats = {                                                                                                      // 1  // 85
    email: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    money: /^[\$\€\£\¥]?[-]?[0-9]*[\.]?[0-9]+$/,                                                                 // 3  // 87
    integer: /^[-]?\d+$/,                                                                                        // 4  // 88
    boolean: /^(yes|no|true|false|0|1)$/i,                                                                       // 5  // 89
    hex: /^[a-fA-F0-9]+$/,                                                                                       // 6  // 90
    float: /^[-]?[0-9]*[\.]?[0-9]+$/,                                                                            // 7  // 91
    alphanumeric: /^[a-zA-Z0-9\ \']+$/,                                                                          // 8  // 92
    ipv4: /^((([01]?[0-9]{1,2})|(2[0-4][0-9])|(25[0-5]))[.]){3}(([0-1]?[0-9]{1,2})|(2[0-4][0-9])|(25[0-5]))$/,   // 9  // 93
    phone:  /^([\+][0-9]{1,3}[\ \.\-])?([\(]{1}[0-9]{2,6}[\)])?([0-9\ \.\-\/]{3,20})((x|ext|extension)[\ ]?[0-9]{1,4})?$/,
    url: /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i,
                                                                                                                 // 12
    //TODO: Cleanup..                                                                                            // 13
    //      Move var declarations to the top since they are hoisted anyway                                       // 14
    //      Prefer while over do->while                                                                          // 15
    creditcard: function (val) {                                                                                 // 16
        //spaces and dashes may be valid characters, but must be stripped to calculate the checksum.             // 17
        var valid = false, cardNumber = val.replace(/ +/g, '').replace(/-+/g, '');                               // 18
                                                                                                                 // 19
        var numDigits = cardNumber.length;                                                                       // 20
                                                                                                                 // 21
        if (numDigits >= 14 && numDigits <= 16 && parseInt(cardNumber, 10) > 0) {                                // 22
                                                                                                                 // 23
            var sum = 0, i = numDigits - 1, pos = 1, digit, luhn = "";                                           // 24
            do {                                                                                                 // 25
                digit = parseInt(cardNumber.charAt(i), 10);                                                      // 26
                luhn += (pos++ % 2 === 0) ? digit * 2 : digit;                                                   // 27
            } while (--i >= 0);                                                                                  // 28
                                                                                                                 // 29
            for (i = 0; i < luhn.length; i++) {                                                                  // 30
                sum += parseInt(luhn.charAt(i), 10);                                                             // 31
            }                                                                                                    // 32
            valid = sum % 10 === 0;                                                                              // 33
        }                                                                                                        // 34
        return valid;                                                                                            // 35
    }                                                                                                            // 36
};                                                                                                               // 37
                                                                                                                 // 38
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////    // 123
                                                                                                                       // 124
}).call(this);                                                                                                         // 125
                                                                                                                       // 126
                                                                                                                       // 127
                                                                                                                       // 128
                                                                                                                       // 129
                                                                                                                       // 130
                                                                                                                       // 131
(function () {                                                                                                         // 132
                                                                                                                       // 133
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////    // 134
//                                                                                                               //    // 135
// packages/copleykj:shower/js/rules.js                                                                          //    // 136
//                                                                                                               //    // 137
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////    // 138
                                                                                                                 //    // 139
//Rules are always passed 5 arguments, fieldValue, ruleValue, fieldName, formFieldsObject and fieldRequirements respectively.
Rules = {                                                                                                        // 2  // 141
    maxLength: function(fieldValue, ruleValue) {                                                                 // 3  // 142
        return fieldValue.length <= ruleValue;                                                                   // 4  // 143
    },                                                                                                           // 5  // 144
    minLength: function(fieldValue, ruleValue) {                                                                 // 6  // 145
        return fieldValue.length >= ruleValue;                                                                   // 7  // 146
    },                                                                                                           // 8  // 147
    exactLength: function (fieldValue, ruleValue) {                                                              // 9  // 148
        // keep comparator as ==                                                                                 // 10
        return fieldValue.length == ruleValue;                                                                   // 11
    },                                                                                                           // 12
    failIfFound:function (fieldValue, ruleValue) {                                                               // 13
        return fieldValue.indexOf(ruleValue) === -1;                                                             // 14
    },                                                                                                           // 15
    minValue: function(fieldValue, ruleValue) {                                                                  // 16
        return fieldValue >= ruleValue;                                                                          // 17
    },                                                                                                           // 18
    maxValue: function(fieldValue, ruleValue) {                                                                  // 19
        return fieldValue <= ruleValue;                                                                          // 20
    },                                                                                                           // 21
    equalsValue: function(fieldValue, ruleValue) {                                                               // 22
        // keep comparator as ==                                                                                 // 23
        return fieldValue == ruleValue;                                                                          // 24
    },                                                                                                           // 25
    equalsField: function(fieldValue, ruleValue, fieldName, formFieldsObject) {                                  // 26
        return formFieldsObject[ruleValue] == fieldValue                                                         // 27
    },                                                                                                           // 28
    notEqualsField: function(fieldValue, ruleValue, fieldName, formFieldsObject) {                               // 29
        return formFieldsObject[ruleValue] != fieldValue                                                         // 30
    },                                                                                                           // 31
    maxFileSize: function(fieldValue, ruleValue) {                                                               // 32
        return this.maxValue(fieldValue.fileSize, ruleValue);                                                    // 33
    },                                                                                                           // 34
    acceptedFileTypes: function(fieldValue, ruleValue) {                                                         // 35
        var fileType = fieldValue.FileType;                                                                      // 36
        return ruleValue.indexOf(fileType) >= 0;                                                                 // 37
    }                                                                                                            // 38
                                                                                                                 // 39
};                                                                                                               // 40
                                                                                                                 // 41
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////    // 181
                                                                                                                       // 182
}).call(this);                                                                                                         // 183
                                                                                                                       // 184
                                                                                                                       // 185
                                                                                                                       // 186
                                                                                                                       // 187
                                                                                                                       // 188
                                                                                                                       // 189
(function () {                                                                                                         // 190
                                                                                                                       // 191
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////    // 192
//                                                                                                               //    // 193
// packages/copleykj:shower/js/transforms.js                                                                     //    // 194
//                                                                                                               //    // 195
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////    // 196
                                                                                                                 //    // 197
//Data transformation functions                                                                                  // 1  // 198
Transforms = {                                                                                                   // 2  // 199
    trim: function(string) {                                                                                     // 3  // 200
        return _(string).trim();                                                                                 // 4  // 201
    },                                                                                                           // 5  // 202
    clean: function(string) {                                                                                    // 6  // 203
        return _(string).clean();                                                                                // 7  // 204
    },                                                                                                           // 8  // 205
    capitalize: function(string) {                                                                               // 9  // 206
        return _(string).capitalize();                                                                           // 10
    },                                                                                                           // 11
    slugify:function(string) {                                                                                   // 12
        return _(string).slugify();                                                                              // 13
    },                                                                                                           // 14
    humanize:function(string) {                                                                                  // 15
        return _(string).humanize();                                                                             // 16
    },                                                                                                           // 17
    stripTags: function(string) {                                                                                // 18
        return _(string).stripTags();                                                                            // 19
    },                                                                                                           // 20
    escapeHTML: function(string) {                                                                               // 21
        return _(string).escapeHTML();                                                                           // 22
    },                                                                                                           // 23
    toUpperCase: function(string) {                                                                              // 24
        return string.toUpperCase();                                                                             // 25
    },                                                                                                           // 26
    toLowerCase: function(string) {                                                                              // 27
        return string.toLowerCase();                                                                             // 28
    }                                                                                                            // 29
};                                                                                                               // 30
                                                                                                                 // 31
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////    // 229
                                                                                                                       // 230
}).call(this);                                                                                                         // 231
                                                                                                                       // 232
                                                                                                                       // 233
                                                                                                                       // 234
                                                                                                                       // 235
                                                                                                                       // 236
                                                                                                                       // 237
(function () {                                                                                                         // 238
                                                                                                                       // 239
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////    // 240
//                                                                                                               //    // 241
// packages/copleykj:shower/js/utils.js                                                                          //    // 242
//                                                                                                               //    // 243
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////    // 244
                                                                                                                 //    // 245
Utils = {                                                                                                        // 1  // 246
    getFormData: function(formElem){                                                                             // 2  // 247
        var formData = $(formElem).serializeArray(), fileInputs = $(formElem).find("input[type=file]");          // 3  // 248
                                                                                                                 // 4  // 249
        fileInputs.each(function () {                                                                            // 5  // 250
          var fileSize = 0, fileType = '', fieldName = this.name;                                                // 6  // 251
                                                                                                                 // 7  // 252
          if (this.files.length > 0) {                                                                           // 8  // 253
            fileSize = this.files[0].size;                                                                       // 9  // 254
            fileType = this.files[0].type;                                                                       // 10
          }                                                                                                      // 11
          formData.push({name: fieldName, fileSize: fileSize, fileType: fileType, files: this.files});           // 12
        });                                                                                                      // 13
                                                                                                                 // 14
        return formData;                                                                                         // 15
    },                                                                                                           // 16
    failureCallback: function(erroredFields, formHandle){                                                        // 17
        $(".meso-error").text("");                                                                               // 18
        _(erroredFields).each(function(value, key) {                                                             // 19
            formHandle.find("#"+key+"-error").addClass("meso-error").text(value.message);                        // 20
        });                                                                                                      // 21
    },                                                                                                           // 22
    successCallback:function(formData, formHandle){                                                              // 23
        if(formHandle[0] && formHandle[0].reset) {                                                               // 24
            formHandle[0].reset();                                                                               // 25
        }                                                                                                        // 26
        $(".meso-error").text("");                                                                               // 27
        $(".meso-error").removeClass("meso-error");                                                              // 28
    }                                                                                                            // 29
};                                                                                                               // 30
                                                                                                                 // 31
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////    // 277
                                                                                                                       // 278
}).call(this);                                                                                                         // 279
                                                                                                                       // 280
                                                                                                                       // 281
                                                                                                                       // 282
                                                                                                                       // 283
                                                                                                                       // 284
                                                                                                                       // 285
(function () {                                                                                                         // 286
                                                                                                                       // 287
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////    // 288
//                                                                                                               //    // 289
// packages/copleykj:shower/js/form.js                                                                           //    // 290
//                                                                                                               //    // 291
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////    // 292
                                                                                                                 //    // 293
Form = function(fields, aggregates, removeFields, onSuccess, onFailure, onSubmit){                               // 1  // 294
    this.fields = fields;                                                                                        // 2  // 295
    this.onSuccess = onSuccess;                                                                                  // 3  // 296
    this.onFailure = onFailure;                                                                                  // 4  // 297
    this.aggregates = aggregates;                                                                                // 5  // 298
    this.removeFields = removeFields;                                                                            // 6  // 299
    this.onSubmit = onSubmit;                                                                                    // 7  // 300
    this.erroredFields = {};                                                                                     // 8  // 301
    this.selector = "";                                                                                          // 9  // 302
};                                                                                                               // 10
                                                                                                                 // 11
Form.prototype.setSelector = function(selector){                                                                 // 12
    this.selector = selector;                                                                                    // 13
};                                                                                                               // 14
                                                                                                                 // 15
Form.prototype.validate = function (formFields, callback){                                                       // 16
    var self = this, result;                                                                                     // 17
    var formFieldsObject = _.isArray(formFields) ? this.formToObject(formFields) : formFields;                   // 18
                                                                                                                 // 19
    self.erroredFields = {};                                                                                     // 20
                                                                                                                 // 21
    _(self.fields).each( function(field, fieldName) {                                                            // 22
                                                                                                                 // 23
        // get the current value of the field that we are validating                                             // 24
        var fieldValue = formFieldsObject[fieldName];                                                            // 25
                                                                                                                 // 26
        if(_.isEmpty(fieldValue) && field.defaultValue){                                                         // 27
            if(_.isFunction(field.defaultValue)){                                                                // 28
                formFieldsObject[fieldName] = field.defaultValue(formFieldsObject);                              // 29
            }else{                                                                                               // 30
                formFieldsObject[fieldName] = field.defaultValue;                                                // 31
            }                                                                                                    // 32
        }                                                                                                        // 33
                                                                                                                 // 34
        // check if field is required (or conditional required)                                                  // 35
        if (field.required && !(fieldValue && _(fieldValue).trim().length > 0)) {                                // 36
                                                                                                                 // 37
            // simple case - required=true                                                                       // 38
            if (field.required === true) {                                                                       // 39
                self.addFieldError(fieldName, "required");                                                       // 40
            } else {                                                                                             // 41
                // more complex case - required:{dependsOn: "otherfield"}                                        // 42
                if (field.required.dependsOn) {                                                                  // 43
                    var dependsOnValue = formFieldsObject[field.required.dependsOn];                             // 44
                    if (dependsOnValue && _(dependsOnValue).trim().length > 0) {                                 // 45
                        if (field.required.value) {                                                              // 46
                            // even more complex case - required:{dependsOn: "otherfield", value:"USA"}          // 47
                            if (field.required.value === dependsOnValue) {                                       // 48
                                self.addFieldError(fieldName, "required");                                       // 49
                            }                                                                                    // 50
                        } else {                                                                                 // 51
                            self.addFieldError(fieldName, "required");                                           // 52
                        }                                                                                        // 53
                    }                                                                                            // 54
                }                                                                                                // 55
                                                                                                                 // 56
                if(field.required.whenFieldAbsent && _(formFieldsObject[field.required.whenFieldAbsent]).isUndefined()){
                    self.addFieldError(fieldName, "required");                                                   // 58
                }                                                                                                // 59
            }                                                                                                    // 60
                                                                                                                 // 61
        }                                                                                                        // 62
                                                                                                                 // 63
        // if there is a value we are going to validate it                                                       // 64
        if(fieldValue){                                                                                          // 65
                                                                                                                 // 66
            // transform the data if need be.                                                                    // 67
            if(field.transforms){                                                                                // 68
                fieldValue=transform(fieldValue, field.transforms);                                              // 69
                formFieldsObject[fieldName]=fieldValue;                                                          // 70
            }                                                                                                    // 71
                                                                                                                 // 72
            // check the data format                                                                             // 73
            if(field.format) {                                                                                   // 74
                if(_.isArray(fieldValue)){                                                                       // 75
                   _(fieldValue).each(function(subValue) {                                                       // 76
                       self.checkFormat(subValue, fieldName, field.format);                                      // 77
                   });                                                                                           // 78
                }else{                                                                                           // 79
                    self.checkFormat(fieldValue, fieldName, field.format);                                       // 80
                }                                                                                                // 81
            }                                                                                                    // 82
                                                                                                                 // 83
            // check rule sets                                                                                   // 84
            _(field.rules).each( function( ruleValue, ruleName ) {                                               // 85
                if(_.isArray(fieldValue)){                                                                       // 86
                   _(fieldValue).each( function( subValue, key ) {                                               // 87
                       result = Rules[ruleName](subValue, ruleValue, fieldName, formFieldsObject, self.fields);  // 88
                       if(!result){                                                                              // 89
                           self.addFieldError(fieldName, ruleName, key);                                         // 90
                       }                                                                                         // 91
                   });                                                                                           // 92
                }else{                                                                                           // 93
                    result = Rules[ruleName](fieldValue, ruleValue, fieldName, formFieldsObject, self.fields);   // 94
                    if(!result){                                                                                 // 95
                        self.addFieldError(fieldName, ruleName);                                                 // 96
                    }                                                                                            // 97
                }                                                                                                // 98
            });                                                                                                  // 99
        }                                                                                                        // 100
                                                                                                                 // 101
                                                                                                                 // 102
    });                                                                                                          // 103
                                                                                                                 // 104
    //aggregate here before we remove fields that could be part of aggregation.. We shouldn't need to validate these fields
    _(self.aggregates).each( function(aggregateInfo, newFieldName) {                                             // 106
        var aggregateName = aggregateInfo[0];                                                                    // 107
        var aggregateFields = aggregateInfo[1];                                                                  // 108
        var aggregateArgs = aggregateInfo[2];                                                                    // 109
        var newField = Aggregates[aggregateName](aggregateFields, formFieldsObject, aggregateArgs);              // 110
                                                                                                                 // 111
        formFieldsObject[newFieldName] = newField;                                                               // 112
    });                                                                                                          // 113
                                                                                                                 // 114
    //remove any unwanted fields                                                                                 // 115
    _(self.removeFields).each( function( value ) {                                                               // 116
       delete formFieldsObject[value];                                                                           // 117
    });                                                                                                          // 118
                                                                                                                 // 119
    if(_.isEmpty(self.erroredFields)){                                                                           // 120
        self.erroredFields = false;                                                                              // 121
        if(Meteor.isClient){                                                                                     // 122
            self.onSuccess(formFieldsObject, $(self.selector));                                                  // 123
        }                                                                                                        // 124
    }else{                                                                                                       // 125
        self.addMessages();                                                                                      // 126
        if(Meteor.isClient){                                                                                     // 127
            self.onFailure(self.erroredFields, $(self.selector));                                                // 128
        }                                                                                                        // 129
    }                                                                                                            // 130
                                                                                                                 // 131
    if(callback && _(callback).isFunction()){                                                                    // 132
        callback(self.erroredFields, formFieldsObject);                                                          // 133
    }else{                                                                                                       // 134
        return {errors:self.erroredFields, formData:formFieldsObject};                                           // 135
    }                                                                                                            // 136
                                                                                                                 // 137
};                                                                                                               // 138
                                                                                                                 // 139
Form.prototype.addMessages = function(){                                                                         // 140
    var self = this;                                                                                             // 141
    _(self.erroredFields).each( function( value, key ) {                                                         // 142
        self.erroredFields[key].message = self.erroredFields[key].required ? self.fields[key].requiredMessage || "*Required Field*" : self.fields[key].message || "*Invalid Input*";
    });                                                                                                          // 144
};                                                                                                               // 145
                                                                                                                 // 146
Form.prototype.addFieldError = function(fieldName, ruleName, key){                                               // 147
                                                                                                                 // 148
    if(!this.erroredFields[fieldName]){                                                                          // 149
        this.erroredFields[fieldName] = {};                                                                      // 150
    }                                                                                                            // 151
    if(key){                                                                                                     // 152
        if(!this.erroredFields[fieldName][ruleName]){                                                            // 153
            this.erroredFields[fieldName][ruleName] = [];                                                        // 154
        }                                                                                                        // 155
        this.erroredFields[fieldName][ruleName][key] = true;                                                     // 156
    }else{                                                                                                       // 157
       this.erroredFields[fieldName][ruleName] = true;                                                           // 158
    }                                                                                                            // 159
};                                                                                                               // 160
                                                                                                                 // 161
Form.prototype.checkFormat = function(fieldValue, fieldName, fieldFormat) {                                      // 162
    var self = this;                                                                                             // 163
    var format;                                                                                                  // 164
                                                                                                                 // 165
    if(_.isString(fieldFormat)){                                                                                 // 166
        format=Formats[fieldFormat];                                                                             // 167
    }else{                                                                                                       // 168
        format = fieldFormat;                                                                                    // 169
    }                                                                                                            // 170
                                                                                                                 // 171
    if(!format){                                                                                                 // 172
        throw new Error("Unknown format:"+fieldFormat);                                                          // 173
    }                                                                                                            // 174
    else {                                                                                                       // 175
        if( _.isRegExp(format) ) {                                                                               // 176
            // it's a regular expression                                                                         // 177
            if(!format.test(fieldValue)){                                                                        // 178
                self.addFieldError(fieldName, "Invalid format");                                                 // 179
            }                                                                                                    // 180
        } else {                                                                                                 // 181
            // it's a function                                                                                   // 182
            if(!format(fieldValue)){                                                                             // 183
                self.addFieldError(fieldName, "Invalid format");                                                 // 184
            }                                                                                                    // 185
        }                                                                                                        // 186
    }                                                                                                            // 187
};                                                                                                               // 188
                                                                                                                 // 189
Form.prototype.formToObject = function(formFields){                                                              // 190
    var formFieldsObject = {};                                                                                   // 191
                                                                                                                 // 192
    _(formFields).each( function( field ) {                                                                      // 193
        var name = field.name;                                                                                   // 194
        var value = field.fileSize ? _(field).pick(['fileType', 'fileSize', 'files']) : field.value;             // 195
                                                                                                                 // 196
        if(_.isUndefined(formFieldsObject[name])){                                                               // 197
            formFieldsObject[name] = value;                                                                      // 198
        }else if(_.isArray(formFieldsObject[name])){                                                             // 199
            formFieldsObject[name].push(value);                                                                  // 200
        }else{                                                                                                   // 201
            formFieldsObject[name] = [formFieldsObject[name], value];                                            // 202
        }                                                                                                        // 203
    });                                                                                                          // 204
                                                                                                                 // 205
    return formFieldsObject;                                                                                     // 206
};                                                                                                               // 207
                                                                                                                 // 208
var transform = function (fieldValue, transformList) {                                                           // 209
    _(transformList).each(function (transformName) {                                                             // 210
        var transform=Transforms[transformName];                                                                 // 211
        if (transform){                                                                                          // 212
            fieldValue = transform(fieldValue);                                                                  // 213
        }                                                                                                        // 214
        else{                                                                                                    // 215
            throw new Error("Invalid transform:" + transformName);                                               // 216
        }                                                                                                        // 217
    });                                                                                                          // 218
    return fieldValue;                                                                                           // 219
};                                                                                                               // 220
                                                                                                                 // 221
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////    // 515
                                                                                                                       // 516
}).call(this);                                                                                                         // 517
                                                                                                                       // 518
                                                                                                                       // 519
                                                                                                                       // 520
                                                                                                                       // 521
                                                                                                                       // 522
                                                                                                                       // 523
(function () {                                                                                                         // 524
                                                                                                                       // 525
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////    // 526
//                                                                                                               //    // 527
// packages/copleykj:shower/js/shower.js                                                                         //    // 528
//                                                                                                               //    // 529
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////    // 530
                                                                                                                 //    // 531
Shower = function(optionsObject){                                                                                // 1  // 532
    var selector = "";                                                                                           // 2  // 533
    var formIdentifier = optionsObject.name || optionsObject.id;                                                 // 3  // 534
                                                                                                                 // 4  // 535
    optionsObject = _({onSuccess:Utils.successCallback, onFailure:Utils.failureCallback}).extend(optionsObject); // 5  // 536
                                                                                                                 // 6  // 537
    //Make sure they've got all the info we need and they haven't provided the same form information twice       // 7  // 538
    if(!formIdentifier){                                                                                         // 8  // 539
        throw new Error("Please specify the name of the form to validate.");                                     // 9  // 540
    }                                                                                                            // 10
    if(!optionsObject.fields){                                                                                   // 11
        throw new Error("Please specify which fields to validate.");                                             // 12
    }                                                                                                            // 13
    if(Shower[formIdentifier]){                                                                                  // 14
        throw new Error("Form is already being validated");                                                      // 15
    }                                                                                                            // 16
                                                                                                                 // 17
    //Create a new form object scoped to Shower.formName                                                         // 18
    Shower[formIdentifier] = new Form(optionsObject.fields, optionsObject.aggregates, optionsObject.removeFields, optionsObject.onSuccess, optionsObject.onFailure);
                                                                                                                 // 20
    //if this is the browser, set up a submit event handler.                                                     // 21
    if(Meteor.isClient){                                                                                         // 22
        var events = {};                                                                                         // 23
                                                                                                                 // 24
        //decide which selector to use to grab the form handle                                                   // 25
        if(optionsObject.name){                                                                                  // 26
            selector = 'form[name='+formIdentifier+']';                                                          // 27
        }else{                                                                                                   // 28
            selector = '#'+formIdentifier;                                                                       // 29
        }                                                                                                        // 30
                                                                                                                 // 31
                                                                                                                 // 32
        if(!optionsObject.disableSubmit){                                                                        // 33
                                                                                                                 // 34
            if(optionsObject.template && _(optionsObject.template).isString()){                                  // 35
                events['submit '+ selector] = function (event) {                                                 // 36
                    var formFields = Shower.Utils.getFormData(event.target);                                     // 37
                    Shower[formIdentifier].setSelector(event.target);                                            // 38
                    event.preventDefault();                                                                      // 39
                                                                                                                 // 40
                    if(optionsObject.onSubmit){                                                                  // 41
                        optionsObject.onSubmit(event);                                                           // 42
                    }                                                                                            // 43
                                                                                                                 // 44
                    if(_(optionsObject.method).isFunction()){                                                    // 45
                        optionsObject.method(formFields, this);                                                  // 46
                    }else{                                                                                       // 47
                        Meteor.call(optionsObject.method, formFields, this);                                     // 48
                    }                                                                                            // 49
                };                                                                                               // 50
                Template[optionsObject.template].events(events);                                                 // 51
            }else{                                                                                               // 52
                $(function(){                                                                                    // 53
                    //attach a submit event to the form                                                          // 54
                    $(document.body).on('submit', selector, function (event) {                                   // 55
                        event.preventDefault();                                                                  // 56
                                                                                                                 // 57
                        if(optionsObject.onSubmit){                                                              // 58
                            optionsObject.onSubmit(event);                                                       // 59
                        }                                                                                        // 60
                                                                                                                 // 61
                        var formFields = Utils.getFormData(this);                                                // 62
                        Shower[formIdentifier].setSelector(event.target);                                        // 63
                                                                                                                 // 64
                        if(_(optionsObject.method).isFunction()){                                                // 65
                            optionsObject.method(formFields);                                                    // 66
                        }else{                                                                                   // 67
                            Meteor.call(optionsObject.method, formFields);                                       // 68
                        }                                                                                        // 69
                    });                                                                                          // 70
                });                                                                                              // 71
            }                                                                                                    // 72
                                                                                                                 // 73
                                                                                                                 // 74
        }                                                                                                        // 75
                                                                                                                 // 76
                                                                                                                 // 77
    }                                                                                                            // 78
};                                                                                                               // 79
                                                                                                                 // 80
Shower.Rules = Rules;                                                                                            // 81
Shower.Transforms = Transforms;                                                                                  // 82
Shower.Formats = Formats;                                                                                        // 83
Shower.Aggregates = Aggregates;                                                                                  // 84
Shower.Utils = Utils;                                                                                            // 85
                                                                                                                 // 86
Shower.registerAggregate = function (name, fn) {                                                                 // 87
    if (Shower.Aggregates[name]) {                                                                               // 88
        throw new Error(name + " is already defined as a aggregate.");                                           // 89
    }                                                                                                            // 90
    Shower.Aggregates[name] = fn;                                                                                // 91
};                                                                                                               // 92
                                                                                                                 // 93
Shower.registerFormat = function (name, fn) {                                                                    // 94
    if (Shower.Formats[name]) {                                                                                  // 95
        throw new Error(name + " is already defined as a format.");                                              // 96
    }                                                                                                            // 97
    Shower.Formats[name] = fn;                                                                                   // 98
};                                                                                                               // 99
                                                                                                                 // 100
Shower.registerRule = function (name, fn) {                                                                      // 101
  if (Shower.Rules[name]) {                                                                                      // 102
    throw new Error(name + " is already defined as a rule.");                                                    // 103
  }                                                                                                              // 104
  Shower.Rules[name] = fn;                                                                                       // 105
};                                                                                                               // 106
                                                                                                                 // 107
Shower.registerTransform = function (name, fn) {                                                                 // 108
  if (Shower.Transforms[name]) {                                                                                 // 109
    throw new Error(name + " is already defined as a transform.");                                               // 110
  }                                                                                                              // 111
  Shower.Transforms[name] = fn;                                                                                  // 112
};                                                                                                               // 113
                                                                                                                 // 114
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////    // 646
                                                                                                                       // 647
}).call(this);                                                                                                         // 648
                                                                                                                       // 649
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['copleykj:shower'] = {
  Shower: Shower
};

})();
