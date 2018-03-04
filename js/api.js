(function($) {
  var lastPage = '';
  $('#new-quote-button').on('click', function(event) {
    event.preventDefault();

    var api_url =
      api_vars.root_url +
      'wp/v2/posts?filter[orderby]=rand&filter[posts_per_page]=1';

    /* Ajax get method that renders random post and grabs .entry-title and .entry-content */
    $.ajax({
      method: 'get',
      url: api_url
    })
    .done(function(data) {
      var post = data.shift(),
        quoteSource = post._qod_quote_source_url,
        quoteSourceUrl = post._qod_source_url;

      /* Renders entry-title and entry-content in appropriate places */
      $('.entry-title').html(
        '<h2 class="entry-title">' + post.title.rendered + '</h2>'
      );
      $('.entry-content').html(post.content.rendered);

      /* Renders the link if it has both a source and url */
      if (quoteSource && quoteSourceUrl) {
        $('.source').html(
          ', <a href="' + quoteSourceUrl + '">' + quoteSource + '</a>'
        );

        /* if just source and no url, then just print source with no link */
      } else if (quoteSource) {
        $('.source').html(', <a href="' + quoteSource + '">');

        /* else, then just print html */
      } else {
        $('.source').text('');
      }
      var push_url = api_vars.home_url + "/" + post[0].slug; 
      history.pushState(null, null, push_url);
    });
    $(window).on('popstate', function() {
      console.log("popstate fired!");
      if (window.location.hash.indexOf('qm-overview ') === 1) {
        return false;
      } else {
        window.location.replace(lastPage);
      }
    });
  });

  /* Ajax post method to post upon submission */

 
  $('.submit-quote').on('click', function (event) {
 
    event.preventDefault();
    var title = $('#quote-author').val();
    var quote = $('#quote-content').val();
    var source = $('#quote-source').val();
    var sourceUrl = $('#quote-source-url').val();
 
    $.ajax({
      method: 'post',
      url: api_vars.root_url + 'wp/v2/posts/',
      data: {
        title: title,
        content: quote,
        _qod_quote_source: source,
        _qod_quote_source_url: sourceUrl,
        status: "publish"
      },
      beforeSend: function (xhr) {
        xhr.setRequestHeader('X-WP-Nonce', api_vars.nonce);
      }
    }).done(function () {
      alert(api_vars.success);
      $("#quote-submission-form").trigger('reset');
    }).fail(function() {
      alert(api_vars.failure);
    });
  }); 

})(jQuery);