(function () {
   var app = "https://script.googleusercontent.com/macros/echo?user_content_key=DEFjP_8-rcUnz3dYubOsEa53D90Ejix7vWnGkBs_wOt73Teibtxn_dyP63pL7bmyy9M3pEVL3EvJI-MQN3-cuQUOkniddeV7m5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnCVlpwlqYlfu-eZmgMkJsYv1wy9lRlus_ipD-UvIYqT0cPcypsK0S6kTn75f7Xhihla4FSjLAxiTaPMT8DHd1bEvFGkOwkF02dz9Jw9Md8uu&lib=MWsWkOTAuPWbFUxbmalKwSnG998_-Yd_2",
      output = '',
      xhr = new XMLHttpRequest();
   xhr.open('GET', app);
   xhr.onreadystatechange = function() {
     if (xhr.readyState !== 4) return;

     if (xhr.status == 200) {
        try {
            var r = JSON.parse(xhr.responseText),
               result = r["result"];
            for (var i = 0; i < result.length; i++){
                  var obj = r["result"][i];
                  output += ('<content class="wraper-card"> <img height="500px" width="500px" src="') + obj.join('"</img> <h5 style="font-size: 50px; ">') + '<br>';
            }
        } catch(e) {}
     } 
     else{
     	window.location.replace("sorry.html");
     }
     

   document.getElementById('info').innerHTML = output;

   }
   xhr.send()
})()

console.log("%c Стоп-стоп-стоп!","Font-size: 50px; color: red;")
console.log("%c Если тебя попросили сюда что-то написать, это мошенники.","Font-size: 20px; color: red;")
console.log("%c Если ты знаешь, что делаешь приходи к нам работать: https://t.me/Andrey_Gorbokon","Font-size: 20px; color: red;")