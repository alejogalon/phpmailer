    <?php 
    $ogp = 'consumables';
    $prependpath = '../';
    $page = 'consumables/';
    $title = 'Purchase/Inquiry for Consumables | KGS Philippines';
    $description = 'This form is for those who wish to purchase consumables. We will contact you shortly.';
    include("../head.php"); ?>
     
    <body>
      <?php include("../assets/include/header.php"); ?>

      <nav>
          <ol class="breadcrumb" role="navigation" aria-label="Breadcrumb">
              <li class="breadcrumb-item"><a href="/" aria-label="Top">TOP</a></li>
              <li class="breadcrumb-item active" aria-current="page">Purchase / Inquiry for Consumables</li>
          </ol>
      </nav>

      <h1 class="other">
        Purchase / Inquiry<span>for Consumables</span>
      </h1>

      <div class="form-contents consumables">
        <h2 class="consumables-tlt">Consumables</h2>
        <div class="consumables-block">
          <div class="left">
            <picture>
              <source srcset="/assets/img/form/item01-sp.png" media="(max-width: 768px)">
                <img src="/assets/img/form/item01.png" alt="">
            </picture>
            <p class="tlt">Dedicated braille tape</p>
            <p class="price"><span>Price</span>8,888</p>
            <p class="txt">Dedicated braille tape (2 volumes, 1 set)　　900PHP+(TAX)+Shipping fee</p>
          </div>

          <!--<div class="right">
            <picture>
              <source srcset="/assets/img/form/item02-sp.png" media="(max-width: 768px)">
                <img src="/assets/img/form/item02.png" alt="">
            </picture>
            <p class="tlt">Special paper</p>
            <p class="price"><span>Price</span>8,888</p>
            <ul>
              <li>A4 size 100 sheets set: 4,320 PHP + (TAX) + shipping fee</li>
              <li>A3 size 100 sheets set: 8,410 PHP + (TAX) + shipping fee</li>
            </ul>
          </div>-->
        </div>

        <h2 class="consumables-tlt inq">Inquiry</h2>
        <p>Please enter the following information and submit. We will respond to you shortly. For urgent matters, you can also reach us by phone.</p>
        <form action="../consumables/confirm/" method="POST">
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

            <dt><label for="products">Interested items</label></dt>
            <dd>
                <select id="products" name="products" class="chkForm chkConditionSelect" aria-required="true">
                    <!-- 商品オプション -->
                    <option value="">Select a items</option>
                    <option value="Dedicated braille tape">Dedicated braille tape</option>
                    <!-- その他のオプション -->
                </select>
            </dd>
          </dl>

          <p class="kiyaku consumables">
            <label for="kiyaku">
              <input id="kiyaku" class="chkForm chkAgree chk-box" type="checkbox" aria-required="true">
                <span class="chk-box-parts">
                I hereby accept the <a href="/policy/" target="_blank">Privacy Policy  <img src="/assets/img/common/icon_popup.svg" width="11" height="13" alt="External link" class="external-link" aria-label="Opens in new window"></a> of KGS Philippines.
              </span>
            </label>
          </p>

          <input type="submit" value="Go to Confirmation Page" disabled id="submitButton" aria-disabled="true" name="con_confirm_btn">
        </form>
      </div>

      <!--Customer Center-->
      <?php include("../assets/include/customer-center.php"); ?>

      <?php include("../assets/include/footer.php"); ?>

    </body>
</html>