$(function() {
    
    $.getJSON("speakers.json", function(e) {

        content = "";

        e.forEach(function(object) {
            content += '<article><div class="image round"> <img src="/images/speaker/' + object.picture + '" alt="' + object.name + '" /></div>'
                       + '<header><h3>' + object.name + '</h3> </header>'
                       + '<p>' + object.bio + '</p></article>';
    
        });

        content += "<article></article><article></article><article></article>";
    
        jQuery("#speaker-list").html(content);

    })
})