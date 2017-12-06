




var data = {
  Clockwork: {
    title: 'Clockwork',
    body: 'Practice with 3D modeling, with techniques focusing on lighting, sculpting, and movement. Created in Cinema 4D',
    text:'view',
    url:'https://vimeo.com/145183740'
  },
  saveTheBay: {
    title: 'Save the Bay',
    body: 'For this project at Expression College, I took on the creative director role and led myself and a team of designers to create a stop motion PSA for the Zero Trash, Zero Excuse campaign for Save the Bay, a  non-profit in the San Francisco Bay Area stressing the importance in eliminating the amount of trash consumers make, and above all making sure the trash doesn’t end up in the communities waterways.',
    quote: ' "Save the Bay is the largest regional organization working to protect, restore and celebrate San Francisco Bay since 1961." ',
    text:'view',
    url:'https://www.facebook.com/saveSFbay/videos/10153621892061335/'
  },
  sarahOliverHandbags: {
    title: 'Sarah Oliver Handbags',
    body: 'In this client based, Advertising Concepts class, two digital filmmakers paired with a designer to create a short video showcasing their client and product. Our client was Sarah Oliver Handbags,  Sarah Oliver is the founder & CEO, designer and knitter extraordinaire. Each handbag is handknit in the USA and manufactured by The Purlettes + 1, a  group of men and women, averaging the age of 88 at The Redwoods Senior Retirement Community, in Northern California. Sarah Came to us wanting to rebrand her image to attract a younger demographic.',
    text:'view',
    url:'https://vimeo.com/145183740'
},
haleyReel: {
  title: 'Pegasus for life',
  body: 'If unicorns aren\'t real, I will be so sad.',
  text:'view',
  url:'https://vimeo.com/145183740'
}
};

window.addEventListener('hashchange', function() {
  var dataToRender = location.hash.slice(1);
  renderContent(dataToRender);
});

function renderContent(whatContent) {
  document.querySelector('#content h1').textContent = data[whatContent].title;
  document.querySelector('#content main').textContent = data[whatContent].body;
  document.querySelector('#content quote').textContent = data[whatContent].quote;
  document.querySelector('#content links').textContent = data[whatContent].text;


}















// make sure to render content to the page when the page first loads, before a "hashchange" event has occured
// renderContent('ponies');
