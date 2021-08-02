var button = document.querySelector('.button')
var inputValue = document.querySelector('.inputValue')
var cname = document.querySelector('.cname')
var desc = document.querySelector('.desc')
var temp = document.querySelector('.temp')

button.addEventListener('click',function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&units=imperial&appid=f6fdc6ba591c468b8be4b69f899328a4')
    .then(response => response.json())
    .then(data => {
        var cnameValue = data['name'];
        var tempValue = data['main']['temp'];
        var descValue = data['weather'][0]['description'];

        cname.innerHTML = cnameValue;
        temp.innerHTML = tempValue;
        desc.innerHTML = descValue;
    })

.catch(err => alert("Wrong city name!"))
})


