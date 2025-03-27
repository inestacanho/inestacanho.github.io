function showIframe(id) {
    // Hide
    var iframes = document.querySelectorAll('iframe');
    iframes.forEach(function(iframe) {
        iframe.classList.remove('active');
    });

    // Show
    document.getElementById(id).classList.add('active');
}