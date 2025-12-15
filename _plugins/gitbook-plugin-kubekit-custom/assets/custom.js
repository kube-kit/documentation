/**
 * Clear Button for Search Input
 *
 * This script adds a clear (close icon) button inside the GitBook search input.
 * The button appears when the input is focused and allows users to quickly clear the search text.
 *
 * Dependencies: jQuery, GitBook JS API
 */


require(["gitbook", "jquery"], function (gitbook, $) {
    gitbook.events.bind("page.change", function () {
        var wrapper = $("#book-search-input");
        var input = $("#book-search-input input");
        var hintId = "clear-button";
        var isMouseDownOnClearButton = false;

        // Setup the Close Icon (Clear Button) 
        function setupClearButton() {
            var $hint = $("#" + hintId);

            if (!$hint.length) {
                $hint = $('<div id="' + hintId + '"></div>');
                wrapper.append($hint);
            }

            
            $hint.html(
                '<div class="clear-icon-img"></div>'
            );

            // Initially hide it
            $hint.hide();

            return $hint;
        }

        var $clearBtn = setupClearButton();

        // Visibility Logic (New: Show ONLY when text exists) 
        function updateVisibility() {
            if (input.val().length > 0) {
                $clearBtn.show();
            } else {
                $clearBtn.hide();
            }
        }
        
        // Use keyup to check text length dynamically
        input.off("keyup.clearBtn").on("keyup.clearBtn", updateVisibility);
        
        // Also check on initial page load (in case text is pre-filled)
        updateVisibility();
        
        // If text is added programmatically (like by a browser autofill), 'change' handles it
        input.off("change.clearBtn").on("change.clearBtn", updateVisibility);


        // Fix Click Conflict: Use Mouse Down/Up ---

        // A. Set flag on mouse down
        $clearBtn.off("mousedown.clearBtn").on("mousedown.clearBtn", function (e) {
            e.preventDefault(); // Prevent input blur from triggering before we handle the click
            isMouseDownOnClearButton = true;
        });

        // B. Clear flag on mouse up
        $clearBtn.off("mouseup.clearBtn").on("mouseup.clearBtn", function () {
            isMouseDownOnClearButton = false;
        });

        // C. Update Blur handler to respect the flag
        input.off("blur.clearBtn").on("blur.clearBtn", function () {
            // Only hide the button if we are not currently clicking it
            // (The click event fires *after* the blur event)
            if (!isMouseDownOnClearButton) {
                // Use a short delay just in case, but the flag should handle the conflict
                setTimeout(updateVisibility, 50); 
            }
        });


        // Handle Click (Clear Input) 
        $clearBtn.off("click.clearBtn").on("click.clearBtn", function (e) {
            e.preventDefault(); 
            
            // Clear the value
            input.val("");
            
            // Immediately update visibility (hides the button)
            updateVisibility(); 

            // Trigger events so GitBook knows to reset the search results
            input.trigger("keyup"); 
            input.trigger("change");

            // Keep focus on the input so user can type immediately
            input.focus();
        });

    });
});

/**
 * KubeKit.io Link Button
 *
 * This script adds a "Go to Website" button in the GitBook header that links to KubeKit.io.
 * The button includes a right-arrow icon and has hover effects for better user interaction.
 *
 * Dependencies: jQuery, GitBook JS API
 */

// Add KubeKit.io link button
require(["gitbook", "jquery"], function (gitbook, $) {
    gitbook.events.bind("page.change", function () {
        // Remove existing button if present
        $("#kubekit-link-btn").remove();

        // Create button
        var button = $("<a>")
            .attr({
                id: "kubekit-link-btn",
                href: "https://kubekit.io",
                target: "_blank",
                class: "btn pull-right",
            }) // add right-arrow-icon
            .html(
                'Go to Website <span class="heroicons-solid--arrow-sm-right"></span>'
            );

        // Add hover effect
        button.hover(
            function () {
                $(this).css({
                    background: "rgba(59, 130, 246, 0.2)",
                    "border-color": "#2563eb",
                });
            },
            function () {
                $(this).css({
                    background: "rgba(59, 130, 246, 0.1)",
                    "border-color": "#3b82f6",
                });
            }
        );

        // Append to header
        $(".book-header").append(button);
    });
    
    /**
     * Ctrl/Cmd + K Search Shortcut and ESC to Blur
     *
     * This script enhances the search input in GitBook by adding keyboard shortcuts:
     * - Ctrl/Cmd + K focuses the search input.
     * - ESC blurs the search input.
     *
     * It also displays a dynamic hint inside the search input:
     * - Shows "Ctrl + K" (or "Cmd + K" on Mac) when inactive.
     * - Shows "ESC" when active (focused).
     *
     * The hint is only visible on desktop viewports (width >= 1024px).
     *
     * Dependencies: jQuery, GitBook JS API
     *
     * Uncomment the code below to enable the functionality.
     */

    // require(['gitbook', 'jquery'], function(gitbook, $) {
    //     gitbook.events.bind('page.change', function() {

    //         var wrapper = $('#book-search-input');
    //         var input = $('#book-search-input input');
    //         var hintId = 'search-shortcut-hint';

    //         // Platform Detection
    //         var isMac = false;
    //         if (navigator.userAgentData && navigator.userAgentData.platform) {
    //             isMac = navigator.userAgentData.platform.toUpperCase().indexOf('MAC') >= 0;
    //         } else if (navigator.userAgent) {
    //             isMac = /Mac|iPhone|iPad|iPod/.test(navigator.userAgent);
    //         }

    //         var cmdKey = '&#8984;'; // Unicode for Command symbol
    //         var ctrlKey = 'Ctrl';
    //         var cmdKeyText = isMac ? cmdKey : ctrlKey;
    //         var kKeyText = 'K';

    //         // Helper to Render the Hint
    //         function renderHint(mode) {
    //             var $hint = $('#' + hintId);

    //             // Create if doesn't exist
    //             if (!$hint.length) {
    //                 $hint = $('<div id="' + hintId + '"></div>');
    //                 wrapper.append($hint);
    //             }

    //             // Update Content based on mode
    //             if (mode === 'active') {
    //                 $hint.html('<kbd>Esc</kbd>');
    //                 input.css('width', '85% !important'); // Expand input width when active
    //             } else {
    //                 $hint.html('<kbd>' + cmdKeyText + '</kbd><kbd>' + kKeyText + '</kbd>');
    //                 input.css('width', '75% !important'); // Default width
    //             }

    //             // Handle Desktop/Mobile Visibility
    //             updateShortcutVisibility();
    //         }

    //         // Visibility Logic
    //         function isDesktop() {
    //             return window.innerWidth >= 1024;
    //         }

    //         function updateShortcutVisibility() {
    //             var $hint = $('#' + hintId);
    //             if (isDesktop()) {
    //                 $hint.show();
    //             } else {
    //                 $hint.hide();
    //             }
    //         }

    //         // Initialize
    //         renderHint('default');

    //         // Global Shortcut (Ctrl/Cmd + K)
    //         $(document).off('keydown.searchShortcut').on('keydown.searchShortcut', function(e) {
    //             if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
    //                 e.preventDefault();
    //                 input.focus();
    //             }
    //         });

    //         // Input State Handling (Focus/Blur/Esc)

    //         // When input gets focus (via click OR shortcut), show "ESC"
    //         input.off('focus.searchHint').on('focus.searchHint', function() {
    //             renderHint('active');
    //         });

    //         // When input loses focus (via click outside OR Esc), show "Ctrl + K"
    //         input.off('blur.searchHint').on('blur.searchHint', function() {
    //             renderHint('default');
    //         });

    //         // Handle ESC key specifically to trigger blur
    //         input.off('keydown.escShortcut').on('keydown.escShortcut', function(e) {
    //             if (e.key === 'Escape') {
    //                 e.preventDefault();
    //                 $(this).blur(); // This will trigger the blur handler above
    //             }
    //         });

    //         // 6. Window Resize Handler
    //         $(window).off('resize.searchHint').on('resize.searchHint', updateShortcutVisibility);
    //     });
    // });
});
