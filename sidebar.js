let left_menu=document.querySelector('.left-menu');
let overlay=document.querySelector('.overlay');
let menu_block=document.querySelector('.menu-block');
let menu_opener=document.querySelector('.menu-opener a');
left_menu.addEventListener('click', function(e) {
if (left_menu.classList.contains('active')) {
left_menu.classList.remove('active');
overlay.classList.remove('active');
menu_block.classList.remove('active');
menu_opener.classList.remove('active');
} else {
left_menu.classList.add('active');
overlay.classList.add('active');
menu_block.classList.add('active');
menu_opener.classList.add('active');
}
});

let navbarDropdown1a = document.querySelector('a#navbarDropdown1');
let navbarDropdown1ul = document.querySelector('#navbarDropdown1ul ');

navbarDropdown1a.addEventListener('click', function(e) {
e.preventDefault();
if (navbarDropdown12a.classList.contains('show')) {
navbarDropdown12a.classList.remove('show');
navbarDropdown12ul.classList.remove('show');
}
if (navbarDropdown18a.classList.contains('show')) {
navbarDropdown18a.classList.remove('show');
navbarDropdown18ul.classList.remove('show');
}
if (navbarDropdown25a.classList.contains('show')) {
navbarDropdown25a.classList.remove('show');
navbarDropdown25ul.classList.remove('show');
}
if (navbarDropdown33a.classList.contains('show')) {
navbarDropdown33a.classList.remove('show');
navbarDropdown33ul.classList.remove('show');
}
if (navbarDropdown47a.classList.contains('show')) {
navbarDropdown47a.classList.remove('show');
navbarDropdown47ul.classList.remove('show');
}
navbarDropdown1a.classList.toggle('show');
navbarDropdown1ul.classList.toggle('show');
});

let navbarDropdown12a = document.querySelector('a#navbarDropdown12');
let navbarDropdown12ul = document.querySelector('#navbarDropdown12ul ');

navbarDropdown12a.addEventListener('click', function(e) {
e.preventDefault();
if (navbarDropdown1a.classList.contains('show')) {
navbarDropdown1a.classList.remove('show');
navbarDropdown1ul.classList.remove('show');
}
if (navbarDropdown18a.classList.contains('show')) {
navbarDropdown18a.classList.remove('show');
navbarDropdown18ul.classList.remove('show');
}
if (navbarDropdown25a.classList.contains('show')) {
navbarDropdown25a.classList.remove('show');
navbarDropdown25ul.classList.remove('show');
}
if (navbarDropdown33a.classList.contains('show')) {
navbarDropdown33a.classList.remove('show');
navbarDropdown33ul.classList.remove('show');
}
if (navbarDropdown47a.classList.contains('show')) {
navbarDropdown47a.classList.remove('show');
navbarDropdown47ul.classList.remove('show');
}
navbarDropdown12a.classList.toggle('show');
navbarDropdown12ul.classList.toggle('show');
});

let navbarDropdown18a = document.querySelector('a#navbarDropdown18');
let navbarDropdown18ul = document.querySelector('#navbarDropdown18ul ');

navbarDropdown18a.addEventListener('click', function(e) {
e.preventDefault();
if (navbarDropdown1a.classList.contains('show')) {
navbarDropdown1a.classList.remove('show');
navbarDropdown1ul.classList.remove('show');
}
if (navbarDropdown12a.classList.contains('show')) {
navbarDropdown12a.classList.remove('show');
navbarDropdown12ul.classList.remove('show');
}
if (navbarDropdown25a.classList.contains('show')) {
navbarDropdown25a.classList.remove('show');
navbarDropdown25ul.classList.remove('show');
}
if (navbarDropdown33a.classList.contains('show')) {
navbarDropdown33a.classList.remove('show');
navbarDropdown33ul.classList.remove('show');
}
if (navbarDropdown47a.classList.contains('show')) {
navbarDropdown47a.classList.remove('show');
navbarDropdown47ul.classList.remove('show');
}
navbarDropdown18a.classList.toggle('show');
navbarDropdown18ul.classList.toggle('show');
});

let navbarDropdown25a = document.querySelector('a#navbarDropdown25');
let navbarDropdown25ul = document.querySelector('#navbarDropdown25ul ');

navbarDropdown25a.addEventListener('click', function(e) {
e.preventDefault();
if (navbarDropdown1a.classList.contains('show')) {
navbarDropdown1a.classList.remove('show');
navbarDropdown1ul.classList.remove('show');
}
if (navbarDropdown12a.classList.contains('show')) {
navbarDropdown12a.classList.remove('show');
navbarDropdown12ul.classList.remove('show');
}
if (navbarDropdown18a.classList.contains('show')) {
navbarDropdown18a.classList.remove('show');
navbarDropdown18ul.classList.remove('show');
}
if (navbarDropdown33a.classList.contains('show')) {
navbarDropdown33a.classList.remove('show');
navbarDropdown33ul.classList.remove('show');
}
if (navbarDropdown47a.classList.contains('show')) {
navbarDropdown47a.classList.remove('show');
navbarDropdown47ul.classList.remove('show');
}
navbarDropdown25a.classList.toggle('show');
navbarDropdown25ul.classList.toggle('show');
});
let navbarDropdown33a = document.querySelector('a#navbarDropdown33');
let navbarDropdown33ul = document.querySelector('#navbarDropdown33ul ');

navbarDropdown33a.addEventListener('click', function(e) {
e.preventDefault();
if (navbarDropdown1a.classList.contains('show')) {
navbarDropdown1a.classList.remove('show');
navbarDropdown1ul.classList.remove('show');
}
if (navbarDropdown12a.classList.contains('show')) {
navbarDropdown12a.classList.remove('show');
navbarDropdown12ul.classList.remove('show');
}
if (navbarDropdown18a.classList.contains('show')) {
navbarDropdown18a.classList.remove('show');
navbarDropdown18ul.classList.remove('show');
}
if (navbarDropdown25a.classList.contains('show')) {
navbarDropdown25a.classList.remove('show');
navbarDropdown25ul.classList.remove('show');
}
if (navbarDropdown47a.classList.contains('show')) {
navbarDropdown47a.classList.remove('show');
navbarDropdown47ul.classList.remove('show');
}
navbarDropdown33a.classList.toggle('show');
navbarDropdown33ul.classList.toggle('show');
});
let navbarDropdown47a = document.querySelector('a#navbarDropdown47');
let navbarDropdown47ul = document.querySelector('#navbarDropdown47ul ');

navbarDropdown47a.addEventListener('click', function(e) {
e.preventDefault();
if (navbarDropdown1a.classList.contains('show')) {
navbarDropdown1a.classList.remove('show');
navbarDropdown1ul.classList.remove('show');
}
if (navbarDropdown12a.classList.contains('show')) {
navbarDropdown12a.classList.remove('show');
navbarDropdown12ul.classList.remove('show');
}
if (navbarDropdown18a.classList.contains('show')) {
navbarDropdown18a.classList.remove('show');
navbarDropdown18ul.classList.remove('show');
}
if (navbarDropdown25a.classList.contains('show')) {
navbarDropdown25a.classList.remove('show');
navbarDropdown25ul.classList.remove('show');
}
if (navbarDropdown33a.classList.contains('show')) {
navbarDropdown33a.classList.remove('show');
navbarDropdown33ul.classList.remove('show');
}
navbarDropdown47a.classList.toggle('show');
navbarDropdown47ul.classList.toggle('show');
});