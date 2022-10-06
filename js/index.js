var  data= [
    {
      "title": "Work",
      "timeframes": {
        "daily": {
          "current": 5,
          "previous": 7
        },
        "weekly": {
          "current": 32,
          "previous": 36
        },
        "monthly": {
          "current": 103,
          "previous": 128
        }
      }
    },
    {
      "title": "Play",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 2
        },
        "weekly": {
          "current": 10,
          "previous": 8
        },
        "monthly": {
          "current": 23,
          "previous": 29
        }
      }
    },
    {
      "title": "Study",
      "timeframes": {
        "daily": {
          "current": 0,
          "previous": 1
        },
        "weekly": {
          "current": 4,
          "previous": 7
        },
        "monthly": {
          "current": 13,
          "previous": 19
        }
      }
    },
    {
      "title": "Exercise",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 1
        },
        "weekly": {
          "current": 4,
          "previous": 5
        },
        "monthly": {
          "current": 11,
          "previous": 18
        }
      }
    },
    {
      "title": "Social",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 3
        },
        "weekly": {
          "current": 5,
          "previous": 10
        },
        "monthly": {
          "current": 21,
          "previous": 23
        }
      }
    },
    {
      "title": "Self Care",
      "timeframes": {
        "daily": {
          "current": 0,
          "previous": 1
        },
        "weekly": {
          "current": 2,
          "previous": 2
        },
        "monthly": {
          "current": 7,
          "previous": 11
        }
      }
    }
  ];

for(let i =0; i<data.length;i++){
    document.querySelectorAll(".card  .daily-div  .current-hrs")[i].innerText = data[i].timeframes.daily.current+" hrs";
    document.querySelectorAll(".card  .daily-div  .previous-hrs")[i].innerText = data[i].timeframes.daily.previous+" hrs";
    document.querySelectorAll(".card  .weekly-div  .current-hrs")[i].innerText = data[i].timeframes.weekly.current+" hrs";
    document.querySelectorAll(".card  .weekly-div  .previous-hrs")[i].innerText = data[i].timeframes.weekly.previous+" hrs";
    document.querySelectorAll(".card  .monthly-div  .current-hrs")[i].innerText = data[i].timeframes.monthly.current+" hrs";
    document.querySelectorAll(".card  .monthly-div  .previous-hrs")[i].innerText = data[i].timeframes.monthly.previous+" hrs";
}

// var number = document.querySelectorAll(".card-bottom-row").length;
for(let i =0; i < 3; i++){
    document.querySelectorAll(".track-option")[i].addEventListener("click", () => {
        if(document.querySelectorAll(".track-option")[i].innerText == "Daily"){
            document.querySelectorAll(".track-option")[i].classList.add("track-option-clicked");
            document.querySelectorAll(".track-option")[i+1].classList.remove("track-option-clicked");
            document.querySelectorAll(".track-option")[i+2].classList.remove("track-option-clicked");
            for(let j = 0; j<data.length;j++){
                document.querySelectorAll(".daily-div")[j].classList.add("daily-div-show");
                document.querySelectorAll(".daily-div")[j].classList.remove("daily-div-hide");
                document.querySelectorAll(".weekly-div")[j].classList.add("weekly-div-hide");
                document.querySelectorAll(".monthly-div")[j].classList.add("monthly-div-hide");
                document.querySelectorAll(".weekly-div")[j].classList.remove("weekly-div-show");
                document.querySelectorAll(".monthly-div")[j].classList.remove("monthly-div-show");
            }
        }else if(document.querySelectorAll(".track-option")[i].innerText == "Weekly"){
            document.querySelectorAll(".track-option")[i-1].classList.remove("track-option-clicked");
            document.querySelectorAll(".track-option")[i].classList.add("track-option-clicked");
            document.querySelectorAll(".track-option")[i+1].classList.remove("track-option-clicked");
            for(let j = 0; j<data.length;j++){
                document.querySelectorAll(".weekly-div")[j].classList.add("weekly-div-show");
                document.querySelectorAll(".weekly-div")[j].classList.remove("weekly-div-hide");
                document.querySelectorAll(".daily-div")[j].classList.add("daily-div-hide");
                document.querySelectorAll(".monthly-div")[j].classList.add("monthly-div-hide");
                document.querySelectorAll(".daily-div")[j].classList.remove("daily-div-show");
                document.querySelectorAll(".monthly-div")[j].classList.remove("monthly-div-show");
            }
        }else{
            document.querySelectorAll(".track-option")[i-2].classList.remove("track-option-clicked");
            document.querySelectorAll(".track-option")[i-1].classList.remove("track-option-clicked");
            document.querySelectorAll(".track-option")[i].classList.add("track-option-clicked");
            for(let j = 0; j<data.length;j++){
                document.querySelectorAll(".monthly-div")[j].classList.add("monthly-div-show");
                document.querySelectorAll(".monthly-div")[j].classList.remove("monthly-div-hide");
                document.querySelectorAll(".daily-div")[j].classList.add("daily-div-hide");
                document.querySelectorAll(".weekly-div")[j].classList.add("weekly-div-hide");
                document.querySelectorAll(".daily-div")[j].classList.remove("daily-div-show");
                document.querySelectorAll(".weekly-div")[j].classList.remove("weekly-div-show");
            }
        }
       
    })
}