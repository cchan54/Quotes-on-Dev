<?php
/*
*
* @package QOD_starter_theme
*/
get_header(); 
?>


<div id="primary" class="content-area">
<main id="main" class="site-main" role="main">

    <?php if(is_user_logged_in() && current_user_can('edit_posts')): ?>

    <div id="quote-submission-wrapper"> 
    <form id="quote-submission-form">
    <h1> Submit a Quote </h1>
      <div>
        <label for="quote-author">Author of Quote</label><br>
        <input type="text" name="quote_author" id="quote-author">
      </div> 

      <div>
        <label for="quote">Quote</label> <br>
        <textarea rows="3" cols="20" type="text" name="quote" id="quote-content" class="quote-box" ></textarea><br>
      </div> 

      <div>
        <label for="quote-source">Source of Quote</label> <br>
        <input type="text" name="quote_source" id="quote-source"><br>
      </div> 


      <div>
        <label for="quote-source-url">Url of Source</label> <br>
        <input type="url" name="quote_source_url" id="quote-source-url"><br>
      </div> 

      <input type="submit" value="Submit Quote" class="submit-quote" >
    </form>

</div>
 
<?php else: ?>

  <p class="green"><?php echo sprintf('<a href="%1s">%2s</a>', esc_url( wp_login_url()), "Click here to log in" ); ?></p>

<?php endif; ?>


</main> 
</div> 
<?php
get_footer(); ?> 