
$(function(){

  //追加チェックBOXの処理
  $(".hidden-chk").hide();
  $(".hidden-chk td .adjust-hidden-chk").hide();

  $('input[name="itemChk[data][]"]').on('click', function(){

    //要素からフォーカスを外す
    $(this).blur();

   if($(this).prop("checked") == true){
    $(this).parents(".adjust-chk").find(".chk-box").removeClass("form-error");
    if($(this).val() == "取扱商品について"){
        $(".hidden-chk").show();
        $(".hidden-chk td").css("display","block");
        $(".hidden-chk td .adjust-hidden-chk").slideDown();
        $("#chkbox-area-hidden").find(".chk-box").addClass("chkCheck2 chkForm chkCondition");
    }
   }else if($(this).prop("checked") == false && $(this).val() == "取扱商品について"){
        $(".hidden-chk td .adjust-hidden-chk").slideUp();
        $(".hidden-chk").slideUp();
        $("#chkbox-area-hidden").find(".chk-box").removeClass("chkCheck2 chkForm chkCondition form-error");
        $(".adjust-hidden-chk .chk-box").prop('checked', false); //アイテムを全部checkedはずす
    }
  });

  $('input[name="products-item[data][]"]').on('click', function(){
    //要素からフォーカスを外す
    $(this).blur();
   if($(this).prop("checked") == true){
    $(this).parents(".adjust-hidden-chk").find(".chk-box").removeClass("form-error");
   }
  });

  //追加チェックBOXの処理終わり

  var initialProcessingFlg = 1,
      btnClickFlg = 0,
      submitFlg = 0,
      chkCheckFlg ="";

      //$(".customSelectBox").customSelect();

      $(window).scroll(function(){
        if($(window).scrollTop() >= $('header').height()){
            $('.page-top').fadeIn(500);
        }else if($(window).scrollTop() < $(window).height()){
            $('.page-top').fadeOut(500);
        }
      });

      //トップへ戻るボタン
    $body = $("body");
    
    var $window = $(window);
    var $document = $(document);
    var windowWidth = $window.width();
    var ua = navigator.userAgent;
        hoge = '';

    $window.on({
        "resize": function(){
            var ww = $window.width();
            if(windowWidth != ww) {
                windowWidth = ww;
            }
        },
        "load": function(){
        },
        "scroll": function(){
            //追従
            if ($(".page-top").length) {
                scrollHeight = $document.outerHeight();
                scrollPosition = $window.outerHeight() + $window.scrollTop();
                footHeight = $("footer").outerHeight();
                scrollFixedPos = scrollHeight - scrollPosition;

                if( ua.indexOf('iPhone') > 0 || ua.indexOf('iPod') > 0 || (ua.indexOf('Android') > 0 && ua.indexOf('Mobile') > 0) || ( ua.indexOf('windows') > 0 && ua.indexOf('phone') > 0) || ( ua.indexOf('firefox') > 0 && ua.indexOf('mobile') > 0) ) 
                {
                  scrollFixedPos = scrollFixedPos + $(".page-top").outerHeight();
                }


                if ( scrollFixedPos <= footHeight ) {
                    $(".page-top").removeClass("fixed");
                } else {
                    $(".page-top").addClass("fixed");
                }
            }
        }
    });

    $('a[href^="#"]').click(function(){
      var speed = 700,
          href= $(this).attr("href"),
          target = $(href == "#" || href == "" ? 'html' : href),
          position = target.offset().top;
      $("html, body").animate({scrollTop:position}, speed, "swing");
      return false;
    });

    //利用規約をリンクへ置換
    $(".kiyaku .mwform-checkbox-field-text").wrapInner('<a href="/guideline/" />');
    $(".kiyaku .mwform-checkbox-field-text").append("に同意いたします。");


      jQuery(function( $ ) {
        jQuery( 'input[name="address"]' ).keyup( function( e ) {
            AjaxZip3.zip2addr('address','','pref','city');
        } )
      } );

  //////////////////////////////////////////
  // 初期処理
  //////////////////////////////////////////
  $('#submitConfirm').val("1");

  if($(".conf").length > 0){
    $('#submitConfirm').val("0");

    var areaTxtNum =  "〒" + $("#tel-num").text();
        areaTxt = $("#area").text() + $("#city-detail").text();
        areaTxtRoom = $("#room-num").text();

        $("dl").css("display","none");

    if($("#tel-num").text() > 0){
      $("#conf-number").text(areaTxtNum);
    }else{
      $("#conf-number").css("display","none");
    }

    if($("#area").text() == "選択してください"){
      $("#conf-txt").css("display","none");
    }else{
      $("#conf-txt").text(areaTxt);
    }

    $("#conf-room").text(areaTxtRoom);
  }

  initialProcessingFlg = 0;

  //+++++++++++++++++++++++++
  // submitイベントバインド
  //+++++++++++++++++++++++++
  $('.btnConf').on('click',function()
  {

    chkCheckFlg = 0;

    if(allErrChk() == 0)
    {
      submitFlg = 1;
      /*$('form').submit();
        return false;*/
    }
    else{
      ballonHeight = $('.formAlertBottom').outerHeight();

      scTop = $('.form-error').eq(0).offset().top - $('.form-error').eq(0).closest('dd').find('.formAlertTop').outerHeight() - ballonHeight;

      setTimeout(function(){
        $('body,html').animate({scrollTop:scTop}, 500, 'swing');
      },50);
      return false;
    }
  });

  //戻るボタン
  $('.btnBack').on('click',function()
  {
    submitFlg = 1;
    $('#submitBack').val("1");
  });

  $('form').on('submit',function()
  {
    if(submitFlg == 0)
    {
      //-------------------------------------
      // フォーム入力中にsubmitされた場合
      // (enter submit)
      //-------------------------------------
      if(allErrChk() == 0)
      {
      }
      else {
        scTop = $('.form-error').eq(0).offset().top - $('.form-error').eq(0).closest('dd').find('.formAlertTop').outerHeight() - 20;
        setTimeout(function(){
          $('body,html').animate({scrollTop:scTop}, 500, 'swing');
        },50);
        return false;
      }
    }
  });


  function allErrChk()
  {
    var flg = 0;

    $('.chkForm').trigger('blur');

    if($('.form-error').length >= 1){
      flg = 1;
    }
    return flg;
  }

    //+++++++++++++++++++++++++
    // エラーチェックイベント
    //+++++++++++++++++++++++++
    $(document).on('blur','.chkForm',function()
    {
        errorJudgment(0,this);
    });
    //+++++++++++++++++++++++++
    // Eメール確認
    //+++++++++++++++++++++++++
    $(document).on('click','.confirmEmail',function()
    {
        confirmSend();
    });
    //+++++++++++++++++++++++++
    // エラーチェックイベント
    //+++++++++++++++++++++++++
    $(document).on('change','.chkAgree,.chkCheck,.chkCheck2',function()
    {
        errorJudgment(0,this);
    });

    function errorJudgment(type,thisElem)
    {

        if($(thisElem).hasClass('holdNow')){
            $(thisElem).val('');
        }

        var returntArray = checkError(thisElem);

        if(initialProcessingFlg == 1 && $(thisElem).val() == "")
        {
            $(thisElem).val($(thisElem).attr('title'))
        }

        if($(thisElem).hasClass('holdNow')){
            $(thisElem).val($(thisElem).attr('data-placeholder'));
        }


        var chkType = 0;
        if($(thisElem).hasClass('lblChk')) chkType = 1;

        if(returntArray[0] == 1 || $(thisElem).prop("tagName") == 'SPAN')
        {
            //--------------------------------------
            // 入力エラー発生
            //--------------------------------------
        }
        else
        {
            //--------------------------------------
            // 入力エラー無し
            //--------------------------------------
            $(thisElem).removeClass('form-error');

            parentElem = $(thisElem).closest('dd');
            if($(thisElem).attr('data-inputid') == 'inputAgree')
            {
                parentElem = $(thisElem).closest('.agree-check');
            }

            parentElem.find('.'+$(thisElem).attr('data-inputId')).remove();
        }
    }

    function checkError(t)
    {
        var className = $(t).attr('class');
        var classNameArr = className.split(' ');
        var errFlg = 0;
        var returntArray = new Array();

        returntArray[3] = ""; // 空を入れておく 4番目の配列はデザイン判定用
        //------------------------------
        // 取得できたクラス名でループ
        //------------------------------
        for(var i=0,len = classNameArr.length;i<len;i++)
        {

            switch (classNameArr[i])
            {
                case 'chkCondition' :
                    // 必須チェック
                    errFlg = chkCondition(t);
                    break;
                case 'chkAllNum' :
                    // 全半角数値チェック
                    errFlg = chkAllNum(t);
                    break;
                case 'chkAllNumEn' :
                    // 全半角数値チェック
                    errFlg = chkAllNumEn(t);
                    break;
                case 'chkAllHiraKana':
                    errFlg = chkAllHiraKana(t);
                    break;
                case 'chkAlphabetUpper':
                    errFlg = chkAlphabetUpper(t);
                    break;
                case 'chkNameType2':
                    // お名前チェック
                    errFlg = chkNameType2(t);
                    break;
                case 'chkNameKanaType2':
                    // お名前(かな)チェック
                    errFlg = chkNameKanaType2(t);
                    break;
                case 'chkMailAddressType2':
                    errFlg = chkMailAddressType2(t);
                    break;
                case 'chkPassWord':
                    errFlg = chkPassWord(t);
                    break;
                case 'chkAlltel':
                    errFlg = chkAlltel(t);
                    break;
                case 'chkTelLeft' :
                    // 電話番号チェック 左部分のみ
                    errFlg = chkTelLeft(t);
                    break;
                case 'chkConditionSelect' :
                    errFlg = chkConditionSelect(t);
                    break;
                case 'chkConditionSelect2' :
                    errFlg = chkConditionSelect2(t);
                    break;
                case 'chkValStringNumType2':
                    errFlg = chkValStringNumType2(t);
                    break;
                case 'chkMailAddress':
                    errFlg = chkMailAddress(t);
                    break;
                case 'chkConditionRadio':
                    errFlg = chkConditionRadio(t);
                    break;
                case 'chkAgree':
                      errFlg = chkAgree(t);
                      break;
                case 'chkCheck':
                      errFlg = chkCheck(t);
                      break;
                case 'chkCheck2':
                      errFlg = chkCheck2(t);
                      break;
                default:
                    if(classNameArr[i].indexOf('chkValStringNum') > -1)
                    {
                        // 文字数制限(入力桁固定)
                        var chkNum = classNameArr[i].replace('chkValStringNum','');
                        errFlg = chkValStringNum(t,chkNum);
                    }
                    break;
            }

            if(errFlg == 1)
            {
                // エラーが発生した時点でループを抜ける
                break;
            }
        }

        returntArray[0] = errFlg;
        returntArray[1] = $(t).val();
        returntArray[2] = $(t).attr('name');

        return returntArray;
    }


    /*
     * 必須入力チェック
     *
     * @param t DOMオブジェクト
     *
     */
    function chkCondition(t)
    {
        if($(t).val() == "")
        {
            // 入力がない = エラー
            var msg = "";
            if($(t).attr('data-input-ttl') != undefined){
                msg = $(t).attr('data-input-ttl');
                msg = 'Please enter your ' + msg
            }
            else {
                msg = 'Please enter.'
            }

            errorView(t,msg,1);
            return 1;
        }else{
            //入力に問題がなければエラー文言を消す
            $(t).next(".formAlertTop").remove();
        }
        return 0;
    }
        /*
       * 同意チェック
       *
       * @param t DOMオブジェクト
       *
       */
        function confirmSend()
        {
            setTimeout(() => {
                var submitButton = document.getElementById('submitButton');
                document.querySelector('input[type="submit"]').disabled = true;

                submitButton.setAttribute('aria-disabled', 'true');
              }, "500");
        }
      /*
       * 同意チェック
       *
       * @param t DOMオブジェクト
       *
       */
      function chkAgree(t)
      {
        var submitButton = document.getElementById('submitButton');
        if(!$(".chkAgree:checked").val())
        {
        　document.querySelector('input[type="submit"]').disabled = true;
        // チェックボックスがチェックされていなければボタンを無効化
        submitButton.setAttribute('aria-disabled', 'true');
          msg = 'Please check the box to indicate your agreement with our privacy policy.';
          errorView(t,msg,2);
          return 1;
        }else{
            //入力に問題がなければエラー文言を消す
            $(".chkAgree:checked").parents(".kiyaku").find(".formAlertTop").remove();

            //送信ボタンのdisabledを外す
            document.querySelector('input[type="submit"]').disabled = false;

            // チェックボックスがチェックされたらボタンを有効化
            submitButton.removeAttribute('aria-disabled');
        }
        return 0;
      }

      /*
       * チェックボックス
       *
       * @param t DOMオブジェクト
       *
       */
      function chkCheck(t)
      {
        if(!$(".chkCheck:checked").val())
        {
          msg = 'いずれかを選択してください。';
          errorView(t,msg,5);
          return 1;
        }else{
        }
        return 0;
      }

      /*
       * チェックボックス
       *
       * @param t DOMオブジェクト
       *
       */
      function chkCheck2(t)
      {
        if(!$(".chkCheck2:checked").val())
        {
          msg = 'いずれかを選択してください。';
          errorView(t,msg,5);
          return 1;
        }
        return 0;
      }

    /*
     * 必須入力チェック(プルダウン)
     * プルダウンがデザインされている場合
     *
     * @param t DOMオブジェクト
     *
     */
    function chkConditionSelect(t)
    {
        if($(t).prop('tagName') == 'SPAN')
        {
            return 0;
        }
        if($(t).val() == "")
        {
            // 入力がない = エラー
            errorView(t,'Please select a product from the list.',3);
            return 1;
        }
        else
        {
            $(t).removeClass('form-error');
            //入力に問題がなければエラー文言を消す
            $(t).next(".formAlertTop").remove();
            return 0;
        }
        return 0;
    }

    /*
     * 必須入力チェック(プルダウン)
     * プルダウンがデザインされている場合
     *
     * @param t DOMオブジェクト
     *
     */
    function chkConditionSelect2(t)
    {
        if($(t).prop('tagName') == 'SPAN')
        {
            return 0;
        }
        if($(t).val() == "")
        {
            // 入力がない = エラー
            errorView(t,'Please select the issue you are experiencing.',3);
            return 1;
        }
        else
        {
            $(t).removeClass('form-error');
            //入力に問題がなければエラー文言を消す
            $(t).next(".formAlertTop").remove();
            return 0;
        }
        return 0;
    }

    /*
     * 半角数字のみチェック
     *
     * @param t DOMオブジェクト
     *
     */
    function chkAllNum(t)
    {
        $(t).val(text_mb2b($(t).val()));
        if(!$(t).val().match(/^[0-9]*$/))
        {
            // 半角数字以外が入力されている = エラー
            var msg = "";

            if($(t).attr('data-input-ttl') != undefined){
                msg = $(t).attr('data-input-ttl');
                msg = "Please enter " + msg
            }else if($(t).val().match('-')){
                msg = ''
            }else {
                msg = ''
            }

            errorView(t,msg,2);
            return 1;
        }else{
            //入力に問題がなければエラー文言を消す
            $(t).parents(".inner-wrap").next(".formAlertTop").remove();
        }
        return 0;
    }

     /*
     * 半角英数字のみチェック
     *
     * @param t DOMオブジェクト
     *
     */
    function chkAllNumEn(t)
    {
        $(t).val(text_mb2b($(t).val()));
        if(!$(t).val().match(/^[0-9a-zA-Z]*$/))
        {
            // 半角数字以外が入力されている = エラー
            var msg = "";

            if($(t).attr('data-input-ttl') != undefined){
                msg = $(t).attr('data-input-ttl');
                msg = msg
            }

            /*else if($(t).val().match('-')){
                msg = ''
            }else {
                msg = ''
            }*/

            errorView(t,msg,2);
            return 1;
        }
        return 0;
    }

    /*
     * 半角英字大文字のみチェック
     *
     * @param t DOMオブジェクト
     *
     */
    function chkAlphabetUpper(t)
    {
        $(t).val($(t).val().toUpperCase());
        if(!$(t).val().match(/^[A-Z]*$/))
        {
            // 半角数字以外が入力されている = エラー
            errorView(t,'半角英字大文字で入力してください',2);
            return 1;
        }
        return 0;
    }





    /*
     * 必須入力チェック(ラジオボタン)
     *
     * @param t DOMオブジェクト
     *
     */
    function chkConditionRadio(t)
    {

        var thisRadioName = $(t).attr('name')

        if (!$("input:radio[name='"+thisRadioName+"']:checked").val())
        {
            // 入力がない = エラー
            errorView(t,'選択してください',1);
            return 1;
        }
        return 0;
    }

    /*
     * ひらがなチェック
     *
     * @param t DOMオブジェクト
     *
     */
    function chkAllHiraKana(t)
    {
        if (!$(t).val().match(/^[\u3040-\u309F\s　]+$/))
        {
            // 全角ひらがな以外が入力されている = エラー
            errorView(t,'ひらがなで入力してください',2);
            return 1;
        }
        return 0;
    }


    /*
     * 電話番号チェック　左端のみ
     *
     * @param t DOMオブジェクト
     *
     */
    function chkTelLeft(t)
    {
        $(t).val(text_mb2b($(t).val()));
        if($(t).val() != "" && $(t).val() != undefined)
        {
            var value = $(t).val();

            if(!value.match(/^[0-9]*$/))
            {
                // 半角数字以外が入力されている = エラー
                errorView(t,'半角数字で入力してください',4);
                return 1;
            }
            else if(value.indexOf('0') != 0)
            {
                // 先頭が0スタートでない場合はエラー
                errorView(t,'正しく入力してください',4);
                return 1;
            }
        }
        return 0;
    }

    /*
     * 電話番号チェック
     *
     * @param t DOMオブジェクト
     *
     */
    function chkAlltel(t)
    {
        $(t).val(text_mb2b($(t).val()));
        if(!$(t).val().match(/^[0-9]*$/))
        {
            var msg = "";
            if($(t).val().match('-')){
                errorView(t,'－（ハイフン）なしで入力してください。',4);
                return 1;
            }else if(!$(t).val().match(/^[0-9]*$/)){
                errorView(t,'半角数字で入力してください',4);
                return 1;
            }
        }else{
            var msg = "";
            if($(t).val() == ''){
            }
            else if($(t).val().indexOf('0') != 0){
                // 先頭が0スタートでない場合はエラー
                errorView(t,'正しく入力してください',4);
                return 1;
            }
        }
        return 0;
    }


    function StringChange(str){
        var kanaMap = {
        'ｶﾞ': 'ガ', 'ｷﾞ': 'ギ', 'ｸﾞ': 'グ', 'ｹﾞ': 'ゲ', 'ｺﾞ': 'ゴ',
        'ｻﾞ': 'ザ', 'ｼﾞ': 'ジ', 'ｽﾞ': 'ズ', 'ｾﾞ': 'ゼ', 'ｿﾞ': 'ゾ',
        'ﾀﾞ': 'ダ', 'ﾁﾞ': 'ヂ', 'ﾂﾞ': 'ヅ', 'ﾃﾞ': 'デ', 'ﾄﾞ': 'ド',
        'ﾊﾞ': 'バ', 'ﾋﾞ': 'ビ', 'ﾌﾞ': 'ブ', 'ﾍﾞ': 'ベ', 'ﾎﾞ': 'ボ',
        'ﾊﾟ': 'パ', 'ﾋﾟ': 'ピ', 'ﾌﾟ': 'プ', 'ﾍﾟ': 'ペ', 'ﾎﾟ': 'ポ',
        'ｳﾞ': 'ヴ', 'ﾜﾞ': 'ヷ', 'ｦﾞ': 'ヺ',
        'ｱ': 'ア', 'ｲ': 'イ', 'ｳ': 'ウ', 'ｴ': 'エ', 'ｵ': 'オ',
        'ｶ': 'カ', 'ｷ': 'キ', 'ｸ': 'ク', 'ｹ': 'ケ', 'ｺ': 'コ',
        'ｻ': 'サ', 'ｼ': 'シ', 'ｽ': 'ス', 'ｾ': 'セ', 'ｿ': 'ソ',
        'ﾀ': 'タ', 'ﾁ': 'チ', 'ﾂ': 'ツ', 'ﾃ': 'テ', 'ﾄ': 'ト',
        'ﾅ': 'ナ', 'ﾆ': 'ニ', 'ﾇ': 'ヌ', 'ﾈ': 'ネ', 'ﾉ': 'ノ',
        'ﾊ': 'ハ', 'ﾋ': 'ヒ', 'ﾌ': 'フ', 'ﾍ': 'ヘ', 'ﾎ': 'ホ',
        'ﾏ': 'マ', 'ﾐ': 'ミ', 'ﾑ': 'ム', 'ﾒ': 'メ', 'ﾓ': 'モ',
        'ﾔ': 'ヤ', 'ﾕ': 'ユ', 'ﾖ': 'ヨ',
        'ﾗ': 'ラ', 'ﾘ': 'リ', 'ﾙ': 'ル', 'ﾚ': 'レ', 'ﾛ': 'ロ',
        'ﾜ': 'ワ', 'ｦ': 'ヲ', 'ﾝ': 'ン',
        'ｧ': 'ァ', 'ｨ': 'ィ', 'ｩ': 'ゥ', 'ｪ': 'ェ', 'ｫ': 'ォ',
        'ｯ': 'ッ', 'ｬ': 'ャ', 'ｭ': 'ュ', 'ｮ': 'ョ',
        '｡': '。', '､': '、', 'ｰ': 'ー', '｢': '「', '｣': '」', '･': '・'
    };

        var objKeys = $.map(kanaMap, function(value, key) {
            return key;
        });

    var reg = new RegExp('(' + objKeys.join('|') + ')', 'g');
    return str
            .replace(reg, function (match) {
                return kanaMap[match];
            })
            .replace(/ﾞ/g, '゛')
            .replace(/ﾟ/g, '゜');

    }

    /*
     * 入力桁固定チェック
     *
     * @param t DOMオブジェクト
     *
     */
    function chkValStringNumType2(t,chkNum)
    {

        if($(t).val().length > 0 )
        {
            if($(t).val().length != 13 && $(t).val().length != 15 )
            {
                msg = '13桁もしくは15桁で入力してください。';
                errorView(t,msg,2);
                return 1;
            }
        }
        return 0;
    }


    /*
     * 入力桁固定チェック
     *
     * @param t DOMオブジェクト
     *
     */
    function chkValStringNum(t,chkNum)
    {

        if($(t).val().length > 0 )
        {
            if($(t).val().length != chkNum && $(t).val().indexOf('例）') < 0)
            {
                var msg = "";
                if($(t).attr('data-input-ttl') != undefined){
                    msg = $(t).attr('data-input-ttl');
                    msg = msg+'は'+chkNum+'桁で入力してください。';
                }
                else {
                    msg = chkNum+'桁で入力してください。';
                }

                errorView(t,msg,2);
                return 1;
            }
        }
        return 0;
    }


    /*
     * 名前チェック フォーム２つ番
     *  エラー監視
     * @param t DOMオブジェクト
     *
     */
    function chkNameType2(t)
    {
        var thisValue = $(t).val();

        if(thisValue == "")
        {
            errorView(t,'Please enter your Last name.',1);
            return 1;
        }
        return 0;
    }

    /*
     * 名前チェック フォーム２つ番
     *  エラー監視
     * @param t DOMオブジェクト
     *
     */
    function chkNameKanaType2(t)
  {
    var thisValue = $(t).val();

    if(thisValue == "")
    {
      errorView(t,'入力してください。',1);
      return 1;
    }
    //else if (!thisValue.match(/^[\u3040-\u309F\s　]+$/))
    else if(!$(t).val().match(/^[ァ-ヶー\s　]*$/))
    {
      // 全角ひらがな以外が入力されている = エラー
      //errorView(t,'ひらがなで入力してください',2);
      errorView(t,'全角カナで入力してください',2);
      return 1;
    }

    return 0;
  }



    /*
     * メールアドレスグループのチェック
     * ・必須チェック
     * ・メールアドレス型チェック
     * ・確認との一致チェック
     *
     * @param t DOMオブジェクト
     *
     */
    function chkMailAddressType2(t)
    {
        var mail1Elem = $('.chkMailAddressType2.mailData1'),
                //mail2Elem = $('.chkMailAddressType2.mailData2'),
                mail1Value = mail1Elem.val(),
                //mail2Value = mail2Elem.val(),
                thisValue = $(t).val(),
                thisChkFlg = mailAddressChkInner(thisValue);

        if(thisChkFlg == 1)
        {
            errorView(t,'Please enter a valid email address.',1);
            return 1;
        }
        else if(thisChkFlg == 2)
        {
            msg = '';
            errorView(t,'Please enter a valid email address.',1);
            return 1;
        }
        else
        {
            if(mailAddressChkInner(mail1Value) == 0 && mailAddressChkInner(mail2Value) == 0)
            {
                if(mail1Value != mail2Value)
                {
                    //$('.inputMail1,.inputMail2').remove();
                    errorView(t,'同じメールアドレスを入力してください。',1);
                    return 1;
                } else {
                    // 双方正常入力で一致の場合はここでもエラー削除
                    mail1Elem.removeClass('form-error');
                    mail2Elem.removeClass('form-error');
                    parentElem = mail1Elem.closest('dd');
                    //parentElem.find('.'+mail1Elem.attr('data-inputId')).remove();
                    //parentElem.find('.'+mail2Elem.attr('data-inputId')).remove();
                }
            }
        }
        return 0;
    }

    function mailAddressChkInner(value)
    {
        var reFlg = 0; // 0:エラー無し 1:必須エラー 2:メールアドレス形式エラー

        if(value == "")
        {
            reFlg = 1;
        }
        /*else if(!value.match(/^[A-Za-z0-9]+[\w\.\-\\+]+@[\w\.-]+\.\w{2,}$/))
        {
            reFlg = 2;
        }*/
        return reFlg;
    }

    function chkMailAddress(t)
    {
        if(!$(t).val().match(/^[A-Za-z0-9]+[\w\.\-\\+]+@[\w\.-]+\.\w{2,}$/))
        {
            errorView(t,'Please enter a valid email address.',1);
            return 1;
        }else{
            //入力に問題がなければエラー文言を消す
            $(t).next(".formAlertTop").remove();
        }
        return 0;
    }





    /*
     * パスワードグループのチェック
     * ・必須チェック
     * ・半角英数字のみチェック
     * ・文字数4～50文字
     * ・確認との一致チェック
     *
     * @param t DOMオブジェクト
     *
     */
    function chkPassWord(t)
    {
        var pw1Elem = $('.chkPassWord.pwData1'),
                pw2Elem = $('.chkPassWord.pwData2'),
                pw1Value = pw1Elem.val(),
                pw2Value = pw2Elem.val(),
                thisValue = $(t).val(),
                thisChkFlg = pwAddressChkInner(thisValue);

        if(thisChkFlg == 1)
        {
            errorView(t,'入力してください。',1);
            return 1;
        }
        else if(thisChkFlg == 2)
        {
            msg = '';
            errorView(t,'半角英数字のみで入力してください。',1);
            return 1;
        }
        else if(thisChkFlg == 3)
        {
            errorView(t,'パスワードは4文字以上50文字以内で入力してください。',1);
            return 1;
        }
        else
        {
            if(pwAddressChkInner(pw1Value) == 0 && pwAddressChkInner(pw2Value) == 0)
            {
                if(pw1Value != pw2Value)
                {
                    $('.inputpw1,.inputpw2').remove();
                    errorView(t,'同じパスワードを入力してください。',1);
                    return 1;
                } else {
                    // 双方正常入力で一致の場合はここでもエラー削除
                    pw1Elem.removeClass('form-error');
                    pw2Elem.removeClass('form-error');
                    parentElem = pw1Elem.closest('dd');
                    parentElem.find('.'+pw1Elem.attr('data-inputId')).remove();
                    parentElem.find('.'+pw2Elem.attr('data-inputId')).remove();
                }
            }
        }
        return 0;
    }

    function pwAddressChkInner(value)
    {
        var reFlg = 0; // 0:エラー無し 1:必須エラー 2:メールアドレス形式エラー

        if(value == "")
        {
            reFlg = 1;
        }
        else if(!value.match(/^[a-zA-Z0-9]+$/))
        {
            reFlg = 2;
        }
        else if(value.length < 4 || value.length > 50)
        {
            reFlg = 3;
        }

        return reFlg;
    }


    function text_mb2b(text){
        text = text.replace(/[Ａ-Ｚａ-ｚ０-９]/g,function(s)
                    {
                        return String.fromCharCode(s.charCodeAt(0)-0xFEE0);
                    });
        return text;
    }

    /*
     * エラー表示
     *
     * @param t DOMオブジェクト
     *
     */
    function errorView(t,errMes,type)
    {

        if($('#form-another-add__checkbox').prop('checked') != true && $(t).hasClass('chkForm2')){
            return false;
        }

        $(t).addClass('form-error');

        // エラーツールチップの生成
        var html = "",
                elemText,
                jqElement,
                h = $(t).closest('dd,td,li,.kiyaku,#chkbox-area').find('.'+elemText).outerHeight(),
                oTop  = $(t).offset().top,
                oLeft = $(t).offset().left;

        switch(type)
        {
            case 1:
                // 個別処理
            break;
            case 2:
                // 個別処理
            break;
            case 3:
                // 個別処理　デザイン要素使用時
                // 背景色の変更
                if($(t).prop("tagName") == 'SELECT')
                {
                    // デザインプルダウン
                    $(t).next('span').addClass('form-error');
                }
            break;
            case 4:
                // 個別処理
            break;
            case 5:
                if(chkCheckFlg === 0){
                  setTimeout(function(){
                      $("#chkbox-area .formAlertTop").eq(1).css("display","none");
                      $("#chkbox-area .formAlertTop").eq(2).css("display","none");
                      $("#chkbox-area .formAlertTop").eq(3).css("display","none");
                  },200);

                  chkCheckFlg = "";
                }
            break;
        }

        elemText = 'formAlertTop';
        html += "<div class=\"formAlertBottom\">";
            html += "<div class=\"formAlertBody\">";
                html += errMes;
            html += "</div>";
        html += "</div>";

        jqElement = $("<div/>").addClass('formAlertTop').attr({//アクセシビリティ対応
            'role': 'alert',
            'aria-live': 'assertive',
            'aria-hidden': 'false'
        });
        jqElement.append(html);

        if($(t).prop("tagName") == 'LABEL')
        {
            if($(t).closest('dd,td,li,.kiyaku').find('.formAlertTop').length == 0)
            {
                $(t).closest('dd,td,li,.kiyaku').append(jqElement);
            }
        }
        else
        {
            $(t).closest('dd,td,li,.kiyaku').append(jqElement);
        }


        h = $(t).closest('dd,td,li,.kiyaku').find('.'+elemText).outerHeight();
        oW = $(t).closest('dd,td,li,.kiyaku').find('.'+elemText).outerWidth();
        tW = $(t).outerWidth();

        oTop = parseInt($(t).offset().top) - parseInt(h);
        oLeft = parseInt($(t).offset().left)+parseInt(tW/2)-parseInt(oW/2);
        if (matchMedia('(max-width: 767px)').matches) {
            oLeft = parseInt($(t).offset().left);
        }


        if($(t).parents('body').attr('id') == 'modal-price-negotiation')
        {
            oTop = oTop -200;
        }

        if($(t).closest('dd,td,li,.kiyaku').find('.formAlertTop').length > 1)
        {
            $(t).closest('dd,td,li,.kiyaku').find('.formAlertTop').each(function()
            {
                if($(this).css('left') == oLeft+'px')
                {
                    jqElement.remove();
                }
            });
        }

        jqElement.css({'top':oTop,'left':oLeft});

        $(t).addClass("form-error");

        /*tmObj = setTimeout(function ()
        {
            $(t).closest('dd,td,li,.kiyaku').find('.'+elemText).remove();
        },3000);*/

    }

    if( document.getElementById("form") != null || document.getElementById("confScreen") != null){
        $(window).on("beforeunload",function(e){
            return "このページを離れてもよろしいですか？入力した内容が保存されない可能性があります。";
        });
    }

});
