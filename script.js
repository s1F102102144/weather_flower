const API_KEY_WEATHER = 'e9e01c7a156a661afeda375b86069276';
const URL = "https://api.openweathermap.org/data/2.5/onecall?";

const CITY = 'lat=35.69&lon=139.69'; 
 
$.ajax({
    url: URL + CITY + '&exclude=hourly,minutely&appid=' + API_KEY_WEATHER,
    type: "GET",
    success: function(data) {
        console.log(JSON.stringify(data, null, '\t'));
        let htmltext1 = "";  // 表示するHTML   HTML to be shown
        let htmltext2 = "";
        let htmltext3 = "";
        let htmltext4 = "";
        let htmltext5 = "";
        let htmltext_n1 = "";
        let htmltext_n2 = "";
        let htmltext_n3 = "";
        let htmltext_n4 = "";

        let n_weather = data.current.weather[0].main;   //　現在の天気  
        console.log(n_weather+"_nowweather");
        let n_Temp = data.current.temp; //　気温

        let dateObj = new Date();    //　Dateオブジェクト作成  make a Date object
        dateObj.setTime(Number(data.current.dt) *1000); //取得したdtをセット set "dt" to the object
        let month = dateObj.getMonth() + 1;  // 月を取り出し。ただし1月が0  Jan. is 0.
        let date = dateObj.getDate();    // 日を取り出し
        let hours = dateObj.getHours();  // 時を取り出し
        let minutes = dateObj.getMinutes();  //分を取り出し
        if (minutes < 10){
            minutes = ("0" + String(minutes));
        }

        let datenext1 = new Date();     //１日先のDateオブジェクト
        datenext1.setTime(Number(data.daily[1].dt) *1000); 
        let month_n1 = datenext1.getMonth() + 1;  
        let date_n1 = datenext1.getDate();    
     
        let datenext2 = new Date();    //２日先のDateオブジェクト
        datenext2.setTime(Number(data.daily[2].dt) *1000); 
        let month_n2 = datenext2.getMonth() + 1;  
        let date_n2 = datenext2.getDate(); 

        let datenext3 = new Date();    //３日先のDateオブジェクト
        datenext3.setTime(Number(data.daily[3].dt) *1000); 
        let month_n3 = datenext3.getMonth() + 1;  
        let date_n3 = datenext3.getDate(); 

        let datenext4 = new Date();    //４日先のDateオブジェクト
        datenext4.setTime(Number(data.daily[4].dt) *1000); 
        let month_n4 = datenext4.getMonth() + 1;  
        let date_n4 = datenext4.getDate(); 


        let weathernext1 = data.daily[1].weather[0].main;  //１日先の天気 
        let tempnext1 = data.daily[1].temp.day;  //１日先の気温

        let weathernext2 = data.daily[2].weather[0].main;  //２日先の天気 
        let tempnext2 = data.daily[2].temp.day;  //２日先の気温

        let weathernext3 = data.daily[3].weather[0].main;  //３日先の天気 
        let tempnext3 = data.daily[3].temp.day;  //３日先の気温

        let weathernext4 = data.daily[4].weather[0].main;  //４日先の天気 
        let tempnext4 = data.daily[4].temp.day;  //４日先の気温

        // 以下でHTMLを作成   build HTML below
        
        if (n_weather == "Clear"){
            htmltext5 = "<link rel=\"stylesheet\" type=\"text/css\" href=\"./css/sunny.css\"></link>"
        }else if(n_weather == "Clouds"){
            htmltext5 = "<link rel=\"stylesheet\" type=\"text/css\" href=\"./css/cloud.css\"></link>"
        }else{
            htmltext5 = "<link rel=\"stylesheet\" type=\"text/css\" href=\"./css/rainy.css\"></link>"
        }
        document.getElementById("css").innerHTML = htmltext5;


        htmltext3 += (month + "/" + date + "  " + hours+ ":" + minutes)
        console.log(htmltext3+"html2");
        b = document.getElementById("date");
        b.textContent = htmltext3;


        htmltext4 = Math.floor(n_Temp - 273) + "℃"
        c = document.getElementById("nowtemp");
        c.textContent = htmltext4;


        if (n_weather == "Clear"){
            htmltext1 = "はれ"
        }else if(n_weather == "Clouds"){
            htmltext1 = "くもり"
        }else{
            htmltext1 = "あめ"
        }
        document.getElementById("weather").innerHTML = htmltext1;


        if (n_weather == "Clear"){
            weathericon = "<img src=\"./img/sunny_icon.png\">"
        }else if(n_weather == "Clouds"){
            weathericon = "<img src=\"./img/cloud_icon.png\">"
        }else{
            weathericon = "<img src=\"./img/rainy_icon.png\">"
        }
        document.getElementById("weather_icon").innerHTML = weathericon;


        if (n_weather == "Clear"){
            htmltext2 = "<img src='./img/sunny.png'>"
        }else if(n_weather == "Clouds"){
            htmltext2 = "<img src=\"./img/cloud.png\">"
        }else{
            htmltext2 = "<img src='./img/rainy.png'>"
        }
        document.getElementById("img").innerHTML = htmltext2;


        daynext1 = (month_n1 + "/" + date_n1)
        d = document.getElementById("day_next1");
        d.textContent = daynext1;

        daynext2 = (month_n2 + "/" + date_n2)
        e = document.getElementById("day_next2");
        e.textContent = daynext2;

        daynext3 = (month_n3 + "/" + date_n3)
        f = document.getElementById("day_next3");
        f.textContent = daynext3;

        daynext4 = (month_n4 + "/" + date_n4)
        g = document.getElementById("day_next4");
        g.textContent = daynext4;
    

        if (weathernext1 == "Clear"){
            htmltext_n1 += "<img src=\"./img/sunny_icon.png\">"
        }else if(weathernext1 == "Clouds"){
            htmltext_n1 += "<img src=\"./img/cloud_icon.png\">"
        }else{
            htmltext_n1 += "<img src=\"./img/rainy_icon.png\">"
        }
        htmltext_n1 += "<br>"
        htmltext_n1 += Math.floor(tempnext1 - 273) + "℃"
        document.getElementById("main_next1").innerHTML = htmltext_n1;

        if (weathernext2 == "Clear"){
            htmltext_n2 += "<img src=\"./img/sunny_icon.png\">"
        }else if(weathernext2 == "Clouds"){
            htmltext_n2 += "<img src=\"./img/cloud_icon.png\">"
        }else{
            htmltext_n2 += "<img src=\"./img/rainy_icon.png\">"
        }
        htmltext_n2 += "<br>"
        htmltext_n2 += Math.floor(tempnext2 - 273) + "℃"
        document.getElementById("main_next2").innerHTML = htmltext_n2;

        if (weathernext3 == "Clear"){
            htmltext_n3 += "<img src=\"./img/sunny_icon.png\">"
        }else if(weathernext3 == "Clouds"){
            htmltext_n3 += "<img src=\"./img/cloud_icon.png\">"
        }else{
            htmltext_n3 += "<img src=\"./img/rainy_icon.png\">"
        }
        htmltext_n3 += "<br>"
        htmltext_n3 += Math.floor(tempnext3 - 273) + "℃"
        document.getElementById("main_next3").innerHTML = htmltext_n3;

        if (weathernext4 == "Clear"){
            htmltext_n4 += "<img src=\"./img/sunny_icon.png\">"
        }else if(weathernext4 == "Clouds"){
            htmltext_n4 += "<img src=\"./img/cloud_icon.png\">"
        }else{
            htmltext_n4 += "<img src=\"./img/rainy_icon.png\">"
        }
        htmltext_n4 += "<br>"
        htmltext_n4 += Math.floor(tempnext4 - 273) + "℃"
        document.getElementById("main_next4").innerHTML = htmltext_n4;
    }
});


