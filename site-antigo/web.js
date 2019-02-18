$(function() {
    
    $.getJSON("speakers.json", function(e) {

        content = "";

        e.forEach(function(object) {
            content += '<article><div class="image round"> <img src="images/speaker/' + object.picture + '" alt="' + object.name + '" /></div>'
                       + '<header><h3>' + object.name + '</h3> </header>'
                       + '<p>' + object.bio + '</p> '
                       + '<footer><ul class="icons">';
                        if (object.twitter) {
                           content += '<li><a href="' + object.twitter + '" target="_blank" class="icon fa-twitter"><span class="label">Twitter</span></a></li>'
                        }
    
                        if (object.facebook.length) {
                            content +=  '<li><a href="' + object.facebook + '" target="_blank" class="icon fa-facebook"><span class="label">Facebook</span></a></li>'
                        }
    
                        if(object.github.length) {
                            content +=  '<li><a href="' + object.github + '" target="_blank" class="icon fa-github"><span class="label">Github</span></a></li>'
                        }

                        if(object.linkedin.length) {
                            content +=  '<li><a href="' + object.linkedin + '" target="_blank" class="icon fa-linkedin"><span class="label">linkedin</span></a></li>'
                        }
                        content +=  '</ul></footer></article>';
    
        });

        content += "<article></article><article></article><article></article>";
    
        jQuery("#speaker-list").html(content);

    })
})