<?php
$others = '';
$email = '';
$firstName= $_POST['firstName'];
$lastName= $_POST['lastName'];
$email= $_POST['email'];
$phonePrefix= $_POST['phonePrefix'];
$phoneNumber= $_POST['phoneNumber'];
if (isset($_POST["submit_btn"])){
    $prod_comment= $_POST['comments'];
    $others = 'con';
    $bodyHtml = "We would like to inform you that a new Consumable Purchase request has been received through our website. The details are as follows:
        <br><br><br>【Inquiry Details】<br>First Name: ".$firstName."<br>Last Name: ".$lastName."<br>"."Email: ".$email.
    "<br>"."Phone Number: ".$phonePrefix." ".$phoneNumber."<br>"."Interested items: ".$prod_comment;
    $bodyHtml2 = file_get_contents("kgs_mail_form/Consumable_Purchase_for_user.txt")."First Name: ".$firstName."<br>Last Name: ".$lastName."<br>"."Email: ".$email.
            "<br>"."Phone Number: ".$phonePrefix." ".$phoneNumber."<br>"."Interested items: ".$prod_comment."<br><br>"
            .file_get_contents("kgs_mail_form/Consumable_Purchase_for_user_footer.txt");
}
if (isset($_POST["submit_btn_inq"])){
    $prod_comment= $_POST['comments'];
    $others = 'inq';
    $bodyHtml = "We would like to inform you that a new inquiry has been received through our website. The details are as follows:
        <br><br><br>【Inquiry Details】<br>First Name: ".$firstName."<br>Last Name: ".$lastName."<br>"."Email: ".$email.
    "<br>"."Phone Number: ".$phonePrefix." ".$phoneNumber."<br>"."Inquiry / Comments: ".$prod_comment;
    $bodyHtml2 = file_get_contents("kgs_mail_form/Concact_us_for_user.txt")."First Name: ".$firstName."<br>Last Name: ".$lastName."<br>"."Email: ".$email.
    "<br>"."Phone Number: ".$phonePrefix." ".$phoneNumber."<br>"."Inquiry / Comments: ".$prod_comment."<br><br>"
            .file_get_contents("kgs_mail_form/Concact_us_for_user_footer.txt");
}
if (isset($_POST["submit_btn_sup"])){
    $products= $_POST['products'];
    $serialNumber= $_POST['serialNumber'];
    $issues= $_POST['issues'];
    $prod_comment= $_POST['comments'];
    $others = 'sup';
    $bodyHtml = "We would like to inform you that a new Support & Repair request has been received through our website. The details are as follows:
        <br><br><br>【Inquiry Details】<br>First Name: ".$firstName."<br>Last Name: ".$lastName."<br>"."Email: ".$email.
    "<br>"."Phone Number: ".$phonePrefix." ".$phoneNumber."<br>"."Products: ".$products.
    "<br>"."Serial Number: ".$serialNumber."<br>"."Issue: ".$issues."<br>"."Comments: ".$prod_comment;
    $bodyHtml2 = file_get_contents("kgs_mail_form/Support_Repair_for_user.txt")."First Name: ".$firstName."<br>Last Name: ".$lastName."<br>"."Email: ".$email.
    "<br>"."Phone Number: ".$phonePrefix." ".$phoneNumber."<br>"."Products: ".$products.
    "<br>"."Serial Number: ".$serialNumber."<br>"."Issue: ".$issues."<br>"."Comments: ".$prod_comment."<br><br>"
            .file_get_contents("kgs_mail_form/Support_Repair_for_user_footer.txt");
}


use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\SMTP;

require_once "vendor/autoload.php";
require 'vendor/phpmailer/phpmailer/src/PHPMailer.php'; 
require 'vendor/phpmailer/phpmailer/src/SMTP.php';
require 'vendor/phpmailer/phpmailer/src/Exception.php';

$mail = new PHPMailer(true);
$mail2 = new PHPMailer(true);
$bodyText =  'KGS Support';
try {
    // Server settings
    $mail->isSMTP();                                            // Send using SMTP
    $mail->Host       = 'youremail';  
    $mail->Port       = 465;                                    // TCP port to connect to, use 465 for `PHPMailer::ENCRYPTION_SMTPS` above
    $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
    $mail->Username   = 'username';                     // SMTP username
    $mail->Password   = 'yourpassword';                               // SMTP password
    $mail->SMTPSecure = 'ssl'; 
    $mail->CharSet  = 'UTF-8';        

    // Recipients
    $mail->setFrom('email', 'name mailer');
    $mail->addAddress('email2');               // Name is optional
    // Content
    $mail->isHTML(true);                                  // Set email format to HTML
    $mail->Subject = $others=='con'?'New Consumable Purchase request Alert - Action Required'
                    :($others=='inq'?'New inquiry Alert - Action Required'  
                    :'New Support & Repair request Alert - Action Required');
    $mail->Body    = $bodyHtml;
    $mail->AltBody = $bodyText;
    if($mail->send())
    {
        try {
            // Server settings
            $mail2->isSMTP();                                            // Send using SMTP
            $mail2->Host       = 'youremail';  
            $mail2->Port       = 465;                                    // TCP port to connect to, use 465 for `PHPMailer::ENCRYPTION_SMTPS` above
            $mail2->SMTPAuth   = true;                                   // Enable SMTP authentication
            $mail2->Username   = 'username';                     // SMTP username
            $mail2->Password   = 'yourpassword';                               // SMTP password
            $mail2->SMTPSecure = 'ssl'; 
            $mail2->CharSet  = 'UTF-8';        
        
            // Recipients
            $mail2->setFrom('email', 'name mailer');
            $mail2->addAddress($email);               // Name is optional
            // Content
            $mail2->isHTML(true);                                  // Set email format to HTML
            $mail2->Subject = $others=='con'?'Notice of Consumable Purchase Receipt'
                        :($others=='inq'?'Notice of Inquiry Reception'
                        :'Notice of Support/Repair Request Receipt');
            $mail2->Body    = $bodyHtml2;
            $mail2->AltBody = $bodyText;
            if($mail2->send())
            {
                if($others=='con'){
                    header("Location: consumables/thanks/");
                }
                if($others=='inq'){
                    header("Location: inquiry/thanks/");
                }
                if($others=='sup'){
                    header("Location: support/thanks/");
                }
                exit();
            }
        } catch (Exception $e) {
            echo "Email not sent. {$mail2->ErrorInfo}", PHP_EOL;
        }
    }
} catch (Exception $e) {
    echo "Email not sent. {$mail->ErrorInfo}", PHP_EOL;
}

