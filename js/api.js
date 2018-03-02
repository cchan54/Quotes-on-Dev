(function($){

  $('#new-quote-button').on('click', function(event){
    event.preventDefault();

    var api_url = api_vars.root_url + 'wp/v2/posts?filter[orderby]=rand&filter[posts_per_page]=1';


    /* Ajax method that renders random post and grabs .entry-title and .entry-content */
    $.ajax({
      method: 'get',
      url: api_url,
    })

    .done(function(data){
      var post = data.shift(),
      quoteSource = post._qod_quote_source_url,
      quoteSourceUrl = post._qod_source_url;

    /* Renders entry-title and entry-content in appropriate places */
      $('.entry-title').html( '<h2 class="entry-title">' + post.title.rendered + '</h2>' );
      $('.entry-content').html( post.content.rendered );

    /* Renders the link if it has both a source and url */
      if( quoteSource && quoteSourceUrl) {
				$('.source').html( ', <a href="' + quoteSourceUrl + '">' + quoteSource + '</a>' );

    /* if just source and no url, then just print source with no link */
      }else if( quoteSource ) {
        $('.source').html( ', <a href="' + quoteSource + '">');

    /* else, then just print html */
      }else {
        $('.source').text('');
      }


	});

});


$('#quote-submission-form').on('submit', function(event){
  event.preventDefault();

  


})




}(jQuery));
