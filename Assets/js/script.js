let inputValue = document.querySelector('.form-control');
let button = document.querySelector('.btn')

let key = '0bcd6a71dba0923cd9ec2f33753a81d7'


button.addEventListener('click', function() {
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+ inputValue.value +'&appid='+ key + '')
    .then(response => response.json())
    .then(data => console.log(data))

    .catch(err => alert('Invalid Inquiry'))
})

