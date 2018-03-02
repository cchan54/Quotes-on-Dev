(function ($) {
	'use strict';

$(function() {

  /* activate quote button is clicked  */
	$('#new-quote-button').on('click', function(event) {
    event.preventDefault();

    var api_url = api_vars.root_url + 'wp/v2/posts?filter[orderby]=rand&filter[posts_per_page]=1';

  /* ajax method to get random post from API */
		$.ajax({
			method: 'get', 
			url: api_url,
      
    }).done(function(data) {  //when done, use vars to display post
      // alert('hello, it works')
			var post = data.shift(),
			quoteSource = post._qod_quote_source,
			quoteSourceUrl = post._qod_quote_source_url,
			$sourceSpan = $('.source');

			$('.entry-content').html( post.content.rendered );
			$('.entry-title').html( '<h2 class="entry-title">&mdash; ' + post.title.rendered + '</h2>' ); // Authors name in string

			if ( quoteSource && quoteSourceUrl ) {
				$sourceSpan.html( ', <a href="' + quoteSourceUrl + '">' + quoteSource + '</a>' );
			} else if ( quoteSource) {
				$sourceSpan.html( ', ' + quoteSource );
			} else { 
				$sourceSpan.text('');
			}

		});

	});

});


}(jQuery));