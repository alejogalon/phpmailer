<!DOCTYPE html>
<html lang="en">
    <head>
        <!--#include virtual="/assets/include/gtm.html"-->
        <?php include("assets/include/gtm.html"); ?>
        <meta charset="utf-8">
        <meta http-equiv="x-ua-compatible" content="ie=edge">
        <title><?php echo $title;?></title>
        <meta name="description" content="<?php echo $description;?>">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

        <!--favicon-->
        <!--#include virtual="/assets/include/favicon.html"-->
        <?php include("assets/include/favicon.html"); ?>
        <!--canonical-->
        <link rel="canonical" href="https://www.kgs-phil.com/<?php echo $page;?>" />

        <!--OGP-->
        <meta property="og:title" content="<?php echo $title;?>">
        <meta property="og:type" content="website">
        <meta property="og:url" content="https://www.kgs-phil.com/<?php echo $page;?>">
        <meta property="og:image" content="https://www.kgs-phil.com/assets/img/og.png">
        <meta property="og:description" content="<?php echo $description;?>">
        <meta property="og:site_name" content="KGS Philippines Corporation">
        <meta name="twitter:card" content="summary_large_image">
        <meta name="twitter:title" content="<?php echo $title;?>">
        <meta name="twitter:description" content="<?php echo $description;?>">
        <meta name="twitter:image" content="https://www.kgs-phil.com/assets/img/og.png">

        <link rel="stylesheet" href="<?php echo $prependpath;?>assets/css/common.css">
        <link rel="stylesheet" href="<?php echo $prependpath;?>assets/css/form.css">
        <link rel="stylesheet" href="<?php echo $prependpath;?>assets/css/form_custom.css">

        <script src="<?php echo $prependpath;?>assets/js/jquery-3.7.1.min.js"></script>
        <script src="<?php echo $prependpath;?>assets/js/common.js"></script>
        <script src="<?php echo $prependpath;?>assets/js/efo.js"></script>

        <!--Structured Data-->
        <?php include("assets/include/structured-data.html"); ?>

        <?php if($ogp=='consumables'){?>
        <script type="application/ld+json">
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "item": {
                  "@id": "https://www.kgs-phil.com/",
                  "name": "TOP"
                }
              },
              {
                "@type": "ListItem",
                "position": 2,
                "item": {
                  "@id": "https://www.kgs-phil.com/consumables/",
                  "name": "Purchase/Inquiry for Consumables"
                }
              }
            ]
          }
        </script>   
        <?php } if($ogp=='inquiry'){?>
        <script type="application/ld+json">
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "item": {
                  "@id": "https://www.kgs-phil.com/",
                  "name": "TOP"
                }
              },
              {
                "@type": "ListItem",
                "position": 2,
                "item": {
                  "@id": "https://www.kgs-phil.com/inquiry/",
                  "name": "Contact Us"
                }
              }
            ]
          }
        </script>    
        <?php } if($ogp=='support'){?>
        <script type="application/ld+json">
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "item": {
                "@id": "https://www.kgs-phil.com/",
                "name": "TOP"
              }
            },
            {
              "@type": "ListItem",
              "position": 2,
              "item": {
                "@id": "https://www.kgs-phil.com/support/",
                "name": "Support & Repair"
              }
            }
          ]
        }
      </script>
      <?php }?>
      </head>
    