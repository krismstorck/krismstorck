// --------------
// Hover animaton
// --------------

const mouthSpeed = 0.2;
const easeType = Power4.easeOut;
const mouthOpen = gsap.timeline({ paused: true });
mouthOpen.to('.mouth-outside', {duration: mouthSpeed, ease: easeType, x: -70, y: 170,}, 0);
mouthOpen.to('.mouth-inside', {duration: mouthSpeed, ease: easeType, x:-70, y: 170}, 0);
mouthOpen.to('.tongue', {duration: mouthSpeed, ease: easeType, x:-70, y: 170}, 0);
mouthOpen.to('.teeth', {duration: mouthSpeed, ease: easeType, x:-70,y: 170}, 0);
mouthOpen.to('.jaw', {duration: mouthSpeed, ease: easeType, x:0,y: 70}, 0);


// ------------
// Mouse events
// ------------

const button = document.querySelector('button');

button.addEventListener('mouseenter', enterButton);
button.addEventListener('mouseleave', leaveButton);

function enterButton() { mouthOpen.play(); }
function leaveButton() { mouthOpen.reverse(); }


