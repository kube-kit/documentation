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
