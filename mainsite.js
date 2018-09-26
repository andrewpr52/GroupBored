/*global $ */
/* exported showLoginForm */
/* exported hideLoginForm */
/* exported setPostHeadingGroup */
/*jslint node: true */
/*jslint browser: true */
/*global window */
"use strict";

window.onload = function runAll() {
    setPostHeadingGroup();
}

//FadeIn the login form, and disable scrolling the body while it is open.
function showLoginForm() {
    $('#loginContainer').fadeIn();
    $('body').css('overflow', 'hidden');
}

//FadeOut the login form, and re-enable scrolling after the fade is complete.
function hideLoginForm() {
    $('#loginContainer').fadeOut(function () {
        $('body').css('overflow', 'visible');
    });
}

function setPostHeadingGroup() {
     $('.groupLabel').each(function () {
         if ($(this).hasClass('active')) {
             $('#newPostContainer h2').text('Post in: ' + $(this).text());
         }
     });
    
    if ($('.groupLabel').hasClass('active')) {
        $('#newpostContainer.h2').text('Post in: ' + $('.groupLabel').text());
    }
}