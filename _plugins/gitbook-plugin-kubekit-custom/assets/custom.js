// Ctrl+K search functionality
require(['gitbook', 'jquery'], function(gitbook, $) {
    gitbook.events.bind('page.change', function() {
        // Add keyboard shortcut badge (HTML only, styling in CSS)
        if (!$('#search-shortcut-hint').length) {
            var isMac = false;
            if (navigator.userAgentData && navigator.userAgentData.platform) {
                isMac = navigator.userAgentData.platform.toUpperCase().indexOf('MAC') >= 0;
            } else if (navigator.userAgent) {
                isMac = /Mac|iPhone|iPad|iPod/.test(navigator.userAgent);
            }

            var shortcut = isMac ? '⌘K' : 'Ctrl+K';
            
            $('#book-search-input').append(
                '<span id="search-shortcut-hint">' + shortcut + '</span>'
            );
        }
        
        // Add Ctrl+K functionality
        $(document).off('keydown.searchShortcut').on('keydown.searchShortcut', function(e) {
            if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
                e.preventDefault();
                $('#book-search-input input').focus();
            }
        });
    });
});

// Add KubeKit.io link button
require(['gitbook', 'jquery'], function(gitbook, $) {
    gitbook.events.bind('page.change', function() {
        // Remove existing button if present
        $('#kubekit-link-btn').remove();
        
        // Create button
        var button = $('<a>')
            .attr({
                'id': 'kubekit-link-btn',
                'href': 'https://kubekit.io',
                'target': '_blank',
                'class': 'btn pull-right'
            }) // add right-arrow-icon
            .html('Go to Website <span class="heroicons-solid--arrow-sm-right"></span>');
        
        // Add hover effect
        button.hover(
            function() {
                $(this).css({
                    'background': 'rgba(59, 130, 246, 0.2)',
                    'border-color': '#2563eb'
                });
            },
            function() {
                $(this).css({
                    'background': 'rgba(59, 130, 246, 0.1)',
                    'border-color': '#3b82f6'
                });
            }
        );
        
        // Append to header
        $('.book-header').append(button);
    });
});