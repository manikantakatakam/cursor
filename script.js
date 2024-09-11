document.addEventListener('mousemove', function(event) {
  let dot = document.createElement('div');
  dot.classList.add('dot');

  // Set the position of the dot based on mouse coordinates
  dot.style.left = `${event.pageX}px`;
  dot.style.top = `${event.pageY}px`;

  document.body.appendChild(dot);

  // Remove the dot after the animation ends
  setTimeout(() => {
    dot.remove();
  }, 1000); // Match the animation duration (1 second)
});
let clickCount = 0;
let clickTimeout;

document.addEventListener('click', function(event) {
  clickCount++;
  
  // Reset the click count after 400ms (to detect multiple clicks)
  if (clickTimeout) clearTimeout(clickTimeout);

  clickTimeout = setTimeout(() => {
    if (clickCount === 1) {
      // Single click (small blast)
      createBlast(event.pageX, event.pageY, 'small-blast');
    } else if (clickCount === 2) {
      // Double click (big blast)
      createBlast(event.pageX, event.pageY, 'big-blast');
    } else if (clickCount === 3) {
      // Triple click (much big blast)
      createBlast(event.pageX, event.pageY, 'much-big-blast');
    }
    clickCount = 0;
  }, 400); // Time window to differentiate clicks
});

function createBlast(x, y, blastClass) {
  // Create a blast element
  let blast = document.createElement('div');
  blast.classList.add('blast', blastClass);

  // Set the position of the blast
  blast.style.left = `${x - 25}px`;
  blast.style.top = `${y - 25}px`;

  document.body.appendChild(blast);

  // Remove the blast after the animation ends
  setTimeout(() => {
    blast.remove();
  }, 500); // Match the animation duration (1 second)
}