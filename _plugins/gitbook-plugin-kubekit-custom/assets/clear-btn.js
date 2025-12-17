/**
 * Clear Button for Search Input
 *
 * This script adds a clear (close icon) button inside the GitBook search input.
 * The button appears when the input is focused and allows users to quickly clear the search text.
 *
 * Dependencies: jQuery, GitBook JS API
 */


require(["gitbook", "jquery"], function (gitbook, $) {
    gitbook.events.bind('page.change', function () {
        var wrapper = $("#book-search-input");
        var input = $("#book-search-input input");
        var clearButtonID = "clear-button";

        // Setup the Clear Button ; Initially hide it
        function setupClearButton() {
            var $clearBtn = $("#" + clearButtonID);

            if (!$clearBtn.length) {
                $clearBtn = $('<div id="' + clearButtonID + '"></div>');
                wrapper.append($clearBtn);
            }

            $clearBtn.html(
                '<div class="clear-icon-img"></div>'
            );

            $clearBtn.hide();

            return $clearBtn;
        }

        var $clearBtn = setupClearButton();

        // Only show the button when there is text in the input
        function updateVisibility() {
            $clearBtn.toggle(input.val().length > 0);
        }

        // use 'input' event to check text length dynamically (keypressing, pasting, autofill, etc.)
        input.on("input.clearBtn", updateVisibility);

        // Also check on initial page load (in case text is pre-filled)
        updateVisibility();
        
        // Handle Click (Clear Input) 
        $clearBtn.off("click.clearBtn").on("click.clearBtn", function (e) {
            e.preventDefault();

            input.val("").trigger("input").focus();  // Clear, update visibility, and focus
        });

    });
});
