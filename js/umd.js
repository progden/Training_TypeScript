/**
 * Created by progden on 2017/7/10.
 */
(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD
        define(['jquery', 'underscore'], factory);
    } else if (typeof exports === 'object') {
        // Node, CommonJS-like
        module.exports = factory(require('jquery'), require('underscore'));
    } else {
        // Browser globals (root is window)
        root.umd = factory(root.jQuery, root._);
    }
}(this, function ($, _) {
    //    methods
    function highlight(msg, keyword){
        return msg.replace(keyword, "<b>"+keyword+"</b>");
    };

    return {
        highlight: highlight
    }
}));
