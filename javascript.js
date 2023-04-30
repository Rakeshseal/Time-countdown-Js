var dest = new Date("oct 3, 2023 10:00:00").getTime();
        var x = setInterval(function(){
          var now = new Date().getTime();
          var diff = dest - now;
          var days = Math.floor(diff / (1000* 60*60*24));
          console.log(days);
          var hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          console.log(hours);
          var minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
          console.log(minutes);
          var seconds = Math.floor((diff % (1000 * 60)) / 1000);
          console.log(seconds);
          document.getElementById("time").innerHTML = days + "day," +" " + hours + "hrs," +" " + minutes + "min," +" " + seconds + "s"
        },1000);