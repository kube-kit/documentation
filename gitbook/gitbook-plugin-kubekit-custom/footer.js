/**
 * Footer customization for KubeKit documentation
 * 
 * This script modifies the footer to include custom copyright information.
 *
 * Dependencies: jQuery, GitBook JS API
 */

require(['gitbook', 'jquery'], function(gitbook, $) {
    gitbook.events.bind('page.change', function() {
        // Select the copyright span
        var $copyrightSpan = $('.page-footer .copyright');
        
        // Update the copyright text
        var currentYear = new Date().getFullYear();
        $copyrightSpan.html('&copy; ' + currentYear + ' KubeKit. All Rights Reserved.');
    });
});