    <?php 
    $ogp = 'consumables';
    $prependpath = '../../';
    $title = '';
    $description = '';
    
    if (isset($_POST["con_confirm_btn"])) {
        $firstName= $_POST['firstName'];
        $lastName= $_POST['lastName'];
        $email= $_POST['email'];
        $phonePrefix= $_POST['phonePrefix'];
        $phoneNumber= $_POST['phoneNumber'];
        $prod_comment= $_POST['products'];
        $others = 'con';
        $page = 'consumables/confirm/';
        $title = 'Purchase/Inquiry for Consumables - Confirm | KGS Philippines';
        $description = 'This form is for those who wish to purchase consumables. We will contact you shortly.';
    };

    include($prependpath."head.php"); 
    ?>
    <body>
      <?php include($prependpath."assets/include/header.php"); ?>
        <nav>
          <ol class="breadcrumb" role="navigation" aria-label="Breadcrumb">
              <li class="breadcrumb-item"><a href="/" aria-label="Top">TOP</a></li>
              <li class="breadcrumb-item active" aria-current="page">Purchase / Inquiry for Consumables</li>
          </ol>
      </nav>
      <h1 class="other">Purchase / Inquiry<span>for Consumables</span></h1>
     
      
      <div class="form-contents confirm">
        <p>Please review the information below before submitting your inquiry.</p>
        <form action="<?php echo $prependpath.'send.php'?>" method="POST">
        <input type="text" value="<?php echo $firstName;?>" name="firstName" hidden>
        <input type="text" value="<?php echo $lastName;?>" name="lastName" hidden>
        <input type="text" value="<?php echo $email;?>" name="email" hidden>
        <input type="text" value="<?php echo $phonePrefix;?>" name="phonePrefix" hidden>
        <input type="text" value="<?php echo $phoneNumber;?>" name="phoneNumber" hidden>
        <input type="text" value="<?php echo $prod_comment;?>" name="comments" hidden>
          <dl>
            <dt>First Name</dt>
            <dd><?php echo $firstName;?></dd>
          </dl>
          <dl>
            <dt>Last Name</dt>
            <dd><?php echo $lastName;?></dd>
          </dl>
          <dl>
            <dt>Email</dt>
            <dd><?php echo $email;?></dd>
          </dl>
          <dl>
            <dt>Phone <br class="sp_display">Number</dt>
            <dd><?php echo $phonePrefix;?><?php echo $phoneNumber;?></dd>
          </dl>
          <dl class="end">
            <dt><?php echo $others=='con'?'Interested items':'Comments'?></dt>
            <dd><?php echo $prod_comment;?></dd>
          </dl>

          <input type="submit" value="Send" class="confirmEmail" id="submitButton" aria-disabled="false" name="submit_btn">
        </form>
      </div>

      <!--Customer Center-->
      <?php include($prependpath."assets/include/customer-center.php"); ?>

      <?php include($prependpath."assets/include/footer.php"); ?>
      
    </body>
</html>