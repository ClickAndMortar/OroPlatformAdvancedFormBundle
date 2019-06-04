define([
    'jquery',
    'oroui/js/app/views/base/view',
    'jquery.inputmask'
], function ($, BaseView) {
    'use strict';

    var InputMaskView;
    InputMaskView = BaseView.extend({
        /**
         * Default options
         */
        options: {
            mask: '',
            placeholder: ''
        },

        /**
         * @constructor
         *
         * @param {Object} options
         */
        initialize: function (options) {
            if (options.mask != '') {
                this.initInputMask(options);
            }
        },

        /**
         * Init current input with mask from options
         *
         * @param {Object} options
         *
         */
        initInputMask: function (options) {
            this.$el.mask(options.mask, {placeholder: options.placeholder});
        }
    });

    return InputMaskView;
});
