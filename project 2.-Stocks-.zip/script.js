var select1 = $(".select1");
var input = $(".input");
var stocks = $(".stocks");
var continue1 = $(".continue1")
var stockList = [];
var prompt2 = $(".prompt2");

    select1.on("click", function() {
    $(stocks).append("<li>" +input.val() + "</li>");
    stockList.push(input.val());
    input.val("");
    
});

    continue1.on("click", function(){
        $(".page1").hide();
        console.log(stockList);
        if(stockList.length < 2) {
            prompt2.append("What data would you like for " + stockList[0] + "?");
        }
        else if(stockList.length < 3) {
            prompt2.append("What data would you like for " + stockList[0] + " and " + stockList[1] + " ?");
        }
        else if(stockList.length < 4) {
            prompt2.append("What data would you like for " + stockList[0] + ", " + stockList[1] + " and " + stockList[2] + "?");
        }
        else if(stockList.length < 5) {
            prompt2.append("What data would you like for " + stockList[0] + ", " + stockList[1] + ", " + stockList[2] + " and " + stockList[3] + "?");
        }    
    })
    
    var timeFrame = "MONTHLY_ADJUSTED"

    $( document ).ready(function() {
        var api_url = `https://www.alphavantage.co/query?function=TIME_SERIES_${timeFrame}&symbol=${userChoice}&apikey=`
        var key = 'YILUS7VUESIJVTGK' 
          $.ajax({
              url: api_url + key,
              contentType: "application/json",
              dataType: 'json',
              success: function(result){
                  console.log(result);
                }
          })
        });
    ​
        // "Thank you for using Alpha Vantage! Our standard API call frequency is 5 calls per minute and 500 calls per day. Please visit https://www.alphavantage.co/premium/ if you would like to target a higher API call frequency."
        var timeSeries1 = [];
        console.log(timeSeries1)
    ​
        $( document ).ready(function() {
            var api_url = `https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_DAILY&symbol=BTC&market=CNY&apikey=`
            var key = 'YILUS7VUESIJVTGK' 
              $.ajax({
                  url: api_url + key,
                  contentType: "application/json",
                  dataType: 'json',
                  success: function(result){
                    
                    
    let days =[]
     for(key in result["Time Series (Digital Currency Daily)"]){
        days.push(key)
    ​
     }
    ​
    ​
    ​
    ​
    ​
    ​
    ​
    ​
    var timeTest = []
    ​
    for (let i = 0; i < 10; i++) {
      let test =  result["Time Series (Digital Currency Daily)"][days[i]]["1b. open (USD)"]
      console.log(test)
      timeTest.push(test)
    }
    ​
        var dateTest = []
    for (let i = 0; i<10; i++){
        let test2 =  [days[i]]
        dateTest.push(test2)
        console.log()
    ​
    }
    ​
        var ctx = document.getElementById('myChart').getContext('2d');
        var seriesTest = [];
        var myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: dateTest,
                datasets: [{
                    label: '# of Votes',
                    data: timeTest,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }
                // {
    ​
                //     label: '# of Pies',
                //     data: [120, 5, 31, 51, 12, 13],
                    
                //     borderColor: "red",
                //     borderWidth: 1
                // }
                ]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
        });
           
    ​
                      
                  }
              })
            });