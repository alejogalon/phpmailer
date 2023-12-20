<?php 
    $prependpath = '../../';
    $title = 'Contact Us - Thanks | KGS Philippines';
    $description = 'Please feel free to contact us.';
    $page = 'inquiry/thanks/';
    $ogp = 'inquiry';
    include($prependpath."head.php"); 
    ?>
    <body>
      <?php include($prependpath."assets/include/header.php"); ?>
      <nav>
          <ol class="breadcrumb" role="navigation" aria-label="Breadcrumb">
              <li class="breadcrumb-item"><a href="/" aria-label="Top">TOP</a></li>
              <li class="breadcrumb-item active" aria-current="page">Contact Us</li>
          </ol>
      </nav>
      <h1>Contact Us</h1>

      <div class="form-contents thanks">
        <h2>Thank you for <br class="sp_display">submitting <br>your inquiry. </h2>
        <p class="thanks-txt">We will review your information and get back to you as soon as possible.</p>
        <div class="btn"><a href="/" aria-label="Go to Top Page">Go to TOP Page</a></div>
      </div>
      <!--Customer Center-->
      <?php include($prependpath."assets/include/customer-center.php"); ?>

      <?php include($prependpath."assets/include/footer.php"); ?>

    </body>
</html>