<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>GoldAngelLocket</title>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <style>
    body {
      text-align: center;
      padding: 50px;
    }
    #image {
      width: 300px;
      cursor: pointer;
    }
    #upload {
      margin-top: 20px;
    }
    #logo {
      position: fixed;
      bottom: 10px;
      right: 10px;
    }
  </style>
</head>
<body>
  <div class="container">
    <img src="rimuru.gif" id="image" />
    <input type="file" id="upload" accept="image/*" />
  </div>

  <a id="logo" href="https://github.com/anthonytedja" onclick="event.stopPropagation()">
    <i class="fa fa-github fa-lg"></i>
  </a>

  <script>
    // =====================
    // IMAGE UPLOAD + TOGGLE
    // =====================

    const upload = document.getElementById('upload');
    const image = document.getElementById('image');

    let uploadedImageURL = null;
    let toggled = false;

    const defaultImage = "rimuru.gif";
    const secondImage = "https://via.placeholder.com/300x300?text=Second+Image";

    upload.addEventListener('change', function () {
      const file = this.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
          uploadedImageURL = e.target.result;
          image.src = uploadedImageURL;
          toggled = false;
        }
        reader.readAsDataURL(file);
      }
    });

    const touchEvent = 'ontouchstart' in window ? 'touchstart' : 'click';

    image.addEventListener(touchEvent, function (e) {
      e.stopPropagation();
      if (uploadedImageURL) {
        toggled = !toggled;
        image.src = toggled ? secondImage : uploadedImageURL;
      } else {
        // fallback: just reset to default image
        image.src = defaultImage;
      }
      console.log('Image toggled');
    });

    // Preload default image
    const preloadImage = new Image();
    preloadImage.src = defaultImage;

    // =====================
    // THEME: AUTO BASED ON OS
    // =====================

    function light() {
      document.documentElement.setAttribute('rimuru-data-theme', 'light');
    }

    function dark() {
      document.documentElement.setAttribute('rimuru-data-theme', 'dark');
    }

    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      dark();
    } else {
      light();
    }

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (event) => {
      event.matches ? dark() : light();
    });
  </script>
</body>
</html>
