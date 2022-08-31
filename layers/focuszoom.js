const zoom = document.querySelector('focus-zoom');

const toggleSpotlight = (bool) =>
zoom.style.setProperty('--focal-size',
bool ?
'8vmax' :
'100%');

window.addEventListener('pointermove', e => {
  zoom.style.setProperty('--mouse-x', e.clientX + 'px');
  zoom.style.setProperty('--mouse-y', e.clientY + 'px');
});

window.addEventListener('keydown', (e) =>
toggleSpotlight(e.altKey));
window.addEventListener('keyup', (e) =>
toggleSpotlight(e.altKey));