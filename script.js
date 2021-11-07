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

            output += '<content class="wraper-card">'
            for (var i = 0; i < result.length; i++){
                  var obj = r["result"][i];

                  output += '<img height="500px" width="500px" src="' + obj[0] + '"/>';
                  output += '<h5 style="font-size: 50px; ">' + obj[1] + "</h5>";
                  output += '<h5 style="font-size: 50px; ">' + obj[2] + "</h5>";
                  
               }

            output += "</content>";
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


/*
<content class="wraper-card"> <img height="500px" width="500px" src="https://soccer-shop.com.ua/imgs/m65437.jpg" 
<="" img=""> 

<h5 style="font-size: 50px; ">2.000₴" </h5><h5 style="font-size: 50px; ">Кеды Soccer<br>

<content class="wraper-card"> 

<img height="500px" width="500px" src="https://content.rozetka.com.ua/goods/images/big/132294831.jpg"
 <="" img=""> <h5 style="font-size: 50px; ">500₴" </h5><h5 style="font-size: 50px; ">Мяч Joma Egeo<br>
 
 <content class="wraper-card"> <img height="500px" width="500px" 
 src="https://avatars.mds.yandex.net/get-mpic/4544006/img_id1777469868928864199.jpeg/orig" 
 
 <="" img=""> <h5 style="font-size: 50px; ">1800₴" </h5><h5 style="font-size: 50px; ">Ворота DFC GOAL<br><content class="wraper-card"> <img height="500px" width="500px" src="https://avatars.mds.yandex.net/get-marketpic/5658607/pic1d6768dccc920a77883bb8c66459b3ee/orig" <="" img=""> <h5 style="font-size: 50px; ">200₴" </h5><h5 style="font-size: 50px; ">Перчатки Sprinter<br><content class="wraper-card"> <img height="500px" width="500px" src="https://avatars.mds.yandex.net/get-mpic/5320264/img_id2803466286534228915.jpeg/13hq" <="" img=""> <h5 style="font-size: 50px; ">150₴" </h5><h5 style="font-size: 50px; ">Наколенник<br><content class="wraper-card"> <img height="500px" width="500px" src="https://avatars.mds.yandex.net/get-mpic/5240013/img_id4211522532027448142.jpeg/13hq" <="" img=""> <h5 style="font-size: 50px; ">550₴" </h5><h5 style="font-size: 50px; ">Кальсоны Craft<br></h5></content></h5></content></h5></content></h5></content></h5></content></h5></content>
*/
