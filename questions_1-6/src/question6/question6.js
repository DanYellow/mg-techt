// -- for current browsers
Array.from(document.querySelectorAll('a[title]'))
  .forEach(function(link) {
    link.style.fontWeight = 'bold';
    link.removeAttribute('href', null);
    link.addEventListener('click', function(e) {
      console.log(e.currentTarget.getAttribute('title'));
    })
  });

// -- for old browsers
const links = document.querySelectorAll('a[title]');
let link = null;
for (let i = 0; i < links.length; i++) {
  link = links[i];
  link.style.fontWeight = 'bold';
  link.removeAttribute('href', null);
  link.addEventListener('click', function(e) {
    console.log(e.currentTarget.getAttribute('title'));
  });
}