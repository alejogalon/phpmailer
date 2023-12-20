<?php 
    $prependpath = '../../';
    $title = 'Support & Repair- Thanks | KGS Philippines';
    $description = 'This is a form for those who want to request support or repair. We will contact you shortly.';
    $page = 'support/thanks/';
    $ogp = 'support';
    include($prependpath."head.php"); 
    ?>
    <body>
      <?php include($prependpath."assets/include/header.php"); ?>
      <nav>
          <ol class="breadcrumb" role="navigation" aria-label="Breadcrumb">
              <li class="breadcrumb-item"><a href="/" aria-label="Top">TOP</a></li>
              <li class="breadcrumb-item active" aria-current="page">Support & Repair</li>
          </ol>
      </nav>
      <h1>Support &amp; <br class="sp_display">Repair</h1>
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