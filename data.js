




var data = {
  ponies: {
    title: 'Clockwork',
    body: 'Ponies are absolutely the best!?'
  },
  unicorns: {
    title: 'Save the Bay',
    body: 'If unicorns aren\'t real, I will be so sad. But what\'s cool is that, '
  },
  pegasi: {
    title: 'Sarah Oliver Handbags',
    body: 'If unicorns aren\'t real, I will be so sad.'
},
haley: {
  title: 'Pegasus for life',
  body: 'If unicorns aren\'t real, I will be so sad.'
}
};

window.addEventListener('hashchange', function() {
  var dataToRender = location.hash.slice(1);
  renderContent(dataToRender);

});

function renderContent(whatContent) {
  document.querySelector('#content h1').textContent = data[whatContent].title;
  document.querySelector('#content main').textContent = data[whatContent].body;
}









// make sure to render content to the page when the page first loads, before a "hashchange" event has occured
// renderContent('ponies');
