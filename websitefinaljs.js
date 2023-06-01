<script>
let rain = document.getElementById('rain');
let background = document.getElementById('background');
let soilders = document.getElementById('soilders');
let words = document.getElementById('words');
let tank = document.getElementById('tank')
let pic1 = document.getElementById('pic1')
let pic2 = document.getElementById('pic2')
let pic3 = document.getElementById('pic3')
let pic4 = document.getElementById('pic4')
let pic5 = document.getElementById('pic5')
let pic6 = document.getElementById('pic6')
let pic7 = document.getElementById('pic7')
let pic8 = document.getElementById('pic8')
let pic9 = document.getElementById('pic9')
let pic10 = document.getElementById('pic10')
let pic11 = document.getElementById('pic11')
let pic12 = document.getElementById('pic12')
let pic14 = document.getElementById('pic14')
let pic15 = document.getElementById('pic15')
let pic16 = document.getElementById('pic16')
let pic17 = document.getElementById('pic17')
let pic18 = document.getElementById('pic18')
let pic19 = document.getElementById('pic19')
let pic20 = document.getElementById('pic20')



window.addEventListener('scroll', function () {
  let value = window.scrollY;
  background.style.top = value * 0 + 'px';
  soilders.style.marginRight = value * 1.0 + 'px';
  words.style.bottom = value * 3 + 'px';
  pic1.style.marginLeft = value * 0.1 + 'px';
  pic2.style.marginRight = value * 0.2 + 'px';
  pic3.style.marginLeft = value * 0.1 + 'px';
  pic4.style.marginRight = value * 0.2 + 'px';
  pic5.style.marginLeft = value * 0.2 + 'px';
  pic6.style.marginRight = value * 0.2 + 'px';
  pic7.style.marginLeft = value * 0.2 + 'px';
  pic8.style.marginRight = value * 0.3 + 'px';
  pic9.style.marginLeft = value * 0.3 + 'px';
  pic10.style.top = value * 0.25 + 'px';
  pic11.style.top = value * 0.22 + 'px';
  pic12.style.top = value * 0.25 + 'px';
  pic14.style.top = value * 0.24 + 'px';
  pic15.style.marginRight = value * 0.2 + 'px';
  pic16.style.marginLeft = value * 0.2 + 'px';
  pic17.style.marginRight = value * 0.3 + 'px';
  pic18.style.marginLeft = value * 0.3 + 'px';
  pic19.style.marginRight = value * 0.2 + 'px';
  pic20.style.marginLeft = value * 0.2 + 'px';


})

</script>