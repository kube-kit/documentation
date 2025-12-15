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