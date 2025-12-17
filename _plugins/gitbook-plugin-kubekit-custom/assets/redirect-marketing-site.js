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
    gitbook.events.bind('page.change', function () {
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
    
});