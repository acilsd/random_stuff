(function() {

  if (!("FormData" in window)) {
    return;
  }

  var form = document.querySelector(".main-form");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    var data = new FormData(form);

    request(data, function(response) {
      console.log(response);
    });
  });



  if ("FileReader" in window) {
    form.querySelector("#upload-photo").addEventListener("change", function () {

      var files = this.files;

      for (var i = 0; i < files.length; i++) {
        preview(files[i]);
      }
    });
  }


  function request(data, fn) {

    var xhr = new XMLHttpRequest();

    xhr.open("post", "/send?" + (new Date()).getTime());

    xhr.addEventListener("readystatechange", function () {
      if (xhr.readyState == 4) {
        fn(xhr.responseText);
      }
    });

    xhr.send(data);
  }


  function preview(file) {

    if (file.type.match(/image.*/)) {
      var reader  = new FileReader();

      reader.addEventListener("load", function(event) {
        var img = document.createElement('img');
        img.src = event.target.result;
        img.alt = file.name;

        document.body.appendChild(img);
      });

      reader.readAsDataURL(file);
    }
  }
})();
