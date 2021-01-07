var content = document.getElementById('display-name')
content.innerText = 'Count Down Starts now :';
var start = document.getElementById('count-down');
start.innerText = '10';

setTimeout(function()
    {
        start.innerText = '9';
        setTimeout(function()
        {
            start.innerText = '8';
            setTimeout(function()
            {
                start.innerText = '7';
                setTimeout(function()
                {
                    start.innerText = '6';
                    setTimeout(function()
                    {
                        start.innerText = '5';
                        setTimeout(function()
                        {
                            start.innerText = '4';
                            setTimeout(function()
                            {
                                start.innerText = '3';
                                setTimeout(function()
                                {
                                    start.innerText = '2';
                                    setTimeout(function()
                                    {
                                        start.innerText = '1';
                                        setTimeout(function()
                                        {
                                            start.innerText = '0';
                                            setTimeout(function()
                                                {
                                                    content.innerText = '';
                                                    start.setAttribute("style","font-family : cursive ; color : red")
                                                    start.innerHTML = "Happy Christmas<br> -from SANTA"
                                                },1000)
                                        },1000)
                                    },1000)
                                },1000)
                            },1000)
                        },1000)
                    },1000)
                },1000)
            },1000)
        },1000)
    },1000)