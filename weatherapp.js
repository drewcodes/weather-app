$(document).ready(function(){

  // Location request
  var locationAPI = "http://ip-api.com/json";

  $.getJSON(locationAPI, function (myLocation){

    var lon = myLocation.lon;
    var lat = myLocation.lat;

    // Modified API url with var's inserted and concatenated
    var api = "https://fcc-weather-api.glitch.me/api/current?lat="+lat+"&lon="+lon;

    // Today's Date
    var m_names = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");

    var d = new Date();
    var curr_date = d.getDate();
    var curr_month = d.getMonth();
    var curr_year = d.getFullYear();

     var todaysDate = m_names[curr_month] + " "+ curr_date + " " + curr_year;

    $.getJSON(api, function(data){

      // Sky Conditions: Clear, Clouds, Rain

      var tempC = Math.round(data.main.temp);
      var tempF = Math.round(data.main.temp * 9/5 + 32);

      var city = data.name;
      var windSpeed = Math.round((data.wind.speed * 0.65) * 100) / 100;
      var humidity = data.main.humidity;
      var tempHighC = Math.round(data.main.temp_max);
      var tempLowC = Math.round(data.main.temp_min);
      var tempHighF = Math.round((data.main.temp_max) * 9/5 + 32);
      var tempLowF = Math.round((data.main.temp_min) * 9/5 + 32);
      var image = data.weather[0].icon;

      // Populate data
      $('#date').html(todaysDate);
      $('#city').html("Weather in " + city);
      $('#temp').html(tempF + '&#176;' + ' f');
      $('#windSpeed').html('Wind Speed: ' + windSpeed + ' mph');
      $('#tempHigh').html("High: " + tempHighF + ' &#176;' + "f");
      $('#tempLow').html("Low: " + tempLowF + ' &#176;' + "f");
      $('#humidity').html("Humidity: " + humidity + "%");

      if(image !== undefined){
        $('#image').html("<img src=" + image + ">");
      }

      //Toggle
      var tempToggle = true;

      $("#tempToggle").click(function(){

        if (tempToggle === true) {
          $("#temp").html(tempC + '&#176;' + ' c');
          $('#tempHigh').html("High: " + tempHighC + ' &#176;' + " c");
          $('#tempLow').html("Low: " + tempLowC + ' &#176;' + " c");
          tempToggle = false;
        } else {
          $('#temp').html(tempF + '&#176;' + ' f');
          $('#tempHigh').html("High: " + tempHighF + ' &#176;' + " f");
          $('#tempLow').html("Low: " + tempLowF + ' &#176;' + " f");
          tempToggle = true;
        }
      });

      //Background Images
            if (tempF >= 70) {
              $(".app").css("background-image", "url('https://lh3.googleusercontent.com/sLMkivZelPoLeCLJqOPEQunil8Lfr4qeG5RqLZhS3et2kfnnXtJpALi0KdU4UMHBkFQq25S7lmw0OaDRrBlg92hlqHxS4Vfa5RvuqDPklDd-H-OMtWizlFtyb5TKnoGvyw3E23A2eiKu59yLmzk5CtsLoratyh9ct2nwrTkmFlFJYRuDIA37hYcQlVz1XmRBeJ5_x00GjjeB5XyksS-d64olM50G1PDksmuJAfENQszOHbAcu3psbIpJnJ8NTio6ehqoQYUVKO8geUgFLGLleWgj-bLlvGiOXk_tc1HJiwji0jGjjSSM9EnaYWDUSSo1GMOyVOk_prAi71nTyTND-SzR5KMxRiM-wVhEl1raR6Vbfar6VrrZHwXsOP41bBY0NdnyI32Fgy4IkXOuh1txP-7m0pi1HsUm2url_svYkm-CppmVHueUiReIajLa-sHfUkVyr3rUkKv5OM_qdPTLeH2NqEElcnG8nqFcdfzeuNFrCE_PyQqT_DazprDMzUuu7Xsw213U-Dg0GdTJPM4AdbAlur3iywgKye-PXaXP5ynm7qP4Y4trKafprpd-LM055PAbbCKz0aYRVR1gsdpVhtDHo0VXOb6Kw5cQzIlmVEAGKa46hcDM57IlAX6BwbpHpiuQQj4dF7kAMt-d1LnpgWa1rd3IOjR0SkA=w953-h635-no?.jpg')");
            } else if (tempF < 70 && tempF >= 50) {
            $(".app").css("background-image", "url('https://lh3.googleusercontent.com/XewY2sdYCZEoG8vbVaTefp9bQgisUguGYqc_f7tS408S57iS4vRfEaaVDTRKpTWthhL-051AXkTA8YH6b4OyxEMNTuc0bvMlHgWXY6T0DYn_hJyiP941R6PxoQ-uEe8AcNwiC9wRw6LN-Fo4cT-5RfuubCTr0x3Ltk8JbDbfpMrdw6IFTLBDIbnC7W8vY4WHUOEXDxjNKNSXwko15uMEFe9U0VdoolLJB0dMSdDn4Dgk1NNG_CsTiYGKTUZ1OCvO4HdEhx9NYNw5HBlxpdFSBUvBuqyNnPepttJ7fQqhESFOG3JPkAFuxcquEujcDMICb9X-y4w3qOOTSOFO2JZrW9IGXc_Vk3S285ddiPNJJ1dwZcxaMGhhlW9ZSk172Sz3bsdy0k9woYTYUi9ki5Vfdox6KTevumwdkJGTJ15tGzXaCoWuQlroK4K0fqO510t4l-ejiH_A0y8gqObMvvkQBpC7DT5Hf-eIUbSg6pzdLfkUHHaV7EauMF1UZRxIX8qjXpZG3eWXMmg-2DKa9UyKIMmpEzCHivG_g5X0D_s1Hg-krpBddeIuNihtc8jYE0DE27sNw9cFE6IVVHALxPsT5iCUIJ1mLHxMdASg8J03FfRRXHfgyTqH7n2odiYGlri-oZZblMXWneIaeSnBWBEyljgCEMyGzzVw0cM=w960-h635-no?.jpg')");
          } else if (tempF < 50 && tempF >= 40) {
              $(".app").css("background-image", "url('https://lh3.googleusercontent.com/r7FBzwNjUqH0XQGd3zFBWwE5uNSYiekdgdFeUEkk9maEdn69NzgPVZq9qkGPUupnn2a5MUB_NWPfDKy3Q0RdoCu6PIGncF--euPm6rnqgqhXDFyuXDHlqRqb7zuzl8so69HER8MICfmT1yuDiVk5YlxMuqxIqs8MCmvFf6JUyy5BZ-rTiMy1tyxwhFROmkI6ryCw61FV5EDpgnbSg0hRWZN0gfbLw0iJS6dz55lMDpX25qf3LFMNdv-VZ0Cgvg7vF47MxPusXXHwg2pg5WqQzfiGCsel3sDQiUKW_ImCAJPkrOS1OJ0rHG3BjSVHFWfe9eVThgPcjv1Ahyk3Hk_zkx8Oib22HxPNqtaNvtxBzRSqgmf33yOY-t6zo30iiEvGFGFhu4eC-S1OjKPa7xqFSENQhVlaCzX9uY_b0461Jnde03QHcLcQ9tR6RdEuHiPaxgliW7JAMRKJ5A7VE506z_NVThxsr8D2LvHDTrP4SnF0mCzkk2wNwKm3BfVl9L8BL_wL2KPMUPWjxeGNChO36h5eSZKuRABVlS3UE5qkH-WGFhfhOiztQRklMmtUYWFZsE3o79vSadkgedQaNqoHOQdEAlxPXlUXq3WFMjVd1K7QlVO3S0sWmd3H4R4jZcNtLdw4IEmNjN8ppCW_VIs1Z2YnVNeUYfMPF3E=w960-h640-no')");
            } else if (tempF > 39) {
              $(".app").css("background-image", "url('https://lh3.googleusercontent.com/gXhF-u4hznyXfLVuC9VsBlmf5Unhb0HcLaHpAtdVARpJRzS1ELHMIkOP283a3PDoeNgyW82rr2oOAq-J8E2BpLP_eCF6_xYQToCqNkRmGYMW6InwCmYEWVe1YfPxIrnQR11epQ5tOeyYtazidDRdv2Zfbut3VenV09bFuYBbyPmwgtQkIfRM8KcMtf6LjturGJdGQ7LurDq-NgShGxdKERSCibG7iK2Dt-AAiAF4nlrL8sI7D8xODEaUzvtTBZUqPA-DlOS6pFOYUjYLmgu3FfZXOLXylHMwYaJ1sBix6qosJSbddrY85JZ_uc3V8Lu0hKU9Xb-j0fFbBId5IdOHF5wa3sY2rdnzF4vlhk3gPJ6bIPIUtYByQbR8M8PrdDoqSOUJHN2ryebG70J7b44ri5U24y3Af45UN-7f0oQVMKSPsrorIIZg3hXVlsmfeghd9tZ04Q__F4P1EAhggVgvAuLeFLvMenr3w2YTa8fINbXD-jy7Ib5OQVYb3_mv6xMxLbFV_e8u8Z685kU1jz0m8698t629ov2g_o-27gYTOc77zso9iXmCXGsw7MnfpjUR-dMpN09dmSQ49l1ahV9jrjZKPzBMFbyDD4XH5bf1wup6WOHf6sZLK1hkqRYvCeLqxOANxppKADgpY2pVoIRIm7j0fGo-EsioqxM=w847-h635-no?.jpg')");
            }



    }); // .getJSON Call for weather data
  }); // .getJSON Call for locationAPI
  });
