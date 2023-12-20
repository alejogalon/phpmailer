<?php 
    $ogp = 'inquiry';
    $prependpath = '../';
    $page = 'inquiry/';
    $title = 'Contact Us | KGS Philippines';
    $description = 'Please feel free to contact us.';
    include("../head.php"); ?>
    
    <body>
      <?php include("../assets/include/header.php"); ?>
      <nav>
          <ol class="breadcrumb" role="navigation" aria-label="Breadcrumb">
              <li class="breadcrumb-item"><a href="/" aria-label="Top">TOP</a></li>
              <li class="breadcrumb-item active" aria-current="page">Contact Us</li>
          </ol>
      </nav>

      <h1>Contact Us</h1>

      <div class="form-contents">
        <p>Please enter the following information and submit. We will respond to you shortly. For urgent matters, you can also reach us by phone.</p>
        <form action="../inquiry/confirm/" method="POST">
          <dl>
            <dt><label for="firstName">First Name</label></dt>
            <dd><input type="text" id="firstName" name="firstName" class="chkForm chkCondition" data-input-ttl="first name." placeholder="Your First Name" aria-required="true"></dd>

            <dt><label for="lastName">Last Name</label></dt>
            <dd><input type="text" id="lastName" name="lastName" class="chkForm chkCondition" data-input-ttl=" Last name." placeholder="Your Last Name" aria-required="true"></dd>

            <dt><label for="email">Email</label></dt>
            <dd><input type="email" id="email" name="email" class="chkForm chkMailAddress" placeholder="Your Email Address" aria-required="true"></dd>

            <dt><label for="phone">Phone Number</label></dt>
            <dd>
              <div class="inner-wrap">
                <select id="phonePrefix" name="phonePrefix">
                    <!-- 電話番号の国コードなど -->
                    <option value="+63">+63</option>
                    <!-- その他のオプション -->
                </select>
                <input type="tel" id="phoneNumber" name="phoneNumber" class="chkForm chkCondition chkAllNum" data-input-ttl="a valid phone number." placeholder="9123456789" aria-required="true">
              </div>
            </dd>

            <dt><label for="comments">Inquiry / Comments</label></dt>
            <dd><textarea id="comments" name="comments" class="chkForm chkCondition" data-input-ttl="any additional comments or details." placeholder="Your Comments" aria-required="true"></textarea></dd>
          </dl>

          <p class="kiyaku">
            <label for="kiyaku">
              <input id="kiyaku" class="chkForm chkAgree chk-box" type="checkbox" aria-required="true">
                <span class="chk-box-parts">
                I hereby accept the <a href="/policy/" target="_blank">Privacy Policy  <img src="/assets/img/common/icon_popup.svg" width="11" height="13" alt="External link" class="external-link" aria-label="Opens in new window"></a> of KGS Philippines.
              </span>
            </label>
          </p>

          <input type="submit" value="Go to Confirmation Page" disabled id="submitButton" aria-disabled="true" name="inq_confirm_btn">
        </form>
      </div>

      <!--Customer Center-->
      <?php include("../assets/include/customer-center.php"); ?>

      <?php include("../assets/include/footer.php"); ?>
    </body>
</html>