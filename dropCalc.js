// Wait until the DOM is fully loaded
    const inputs = document.querySelectorAll('.input-box'); // Get all input boxes
    const calculateBtn = document.getElementById('calculate-btn'); // Get the calculate button

document.addEventListener('DOMContentLoaded', () => {
  
    // Check if all inputs are filled
    const checkInputs = () => {
      const allFilled = Array.from(inputs).every(input => input.value.trim() !== '');

      if(allFilled){
       calculateBtn.classList.add('enabled');
        calculateBtn.disabled = false;
      }
    };
  
    // Add event listeners to all input boxes
    inputs.forEach(input => {
      input.addEventListener('input', checkInputs); // Call checkInputs on input change
    });
  });

  calculateBtn.addEventListener('click', () => {
    event.preventDefault();

    const armhole = parseFloat(document.getElementById('armhole_depth').value);
    const bodyCirc = parseFloat(document.getElementById('body_circ').value);
    const bodyHeight = parseFloat(document.getElementById('body_height').value);
    const collarWidth = parseFloat(document.getElementById('collar_width').value);
    const cuffDepth = parseFloat(document.getElementById('cuff_depth').value);
    const neckDepth = parseFloat(document.getElementById('neck_depth').value);
    const neckWidth = parseFloat(document.getElementById('neck_width').value);
    const ribLength = parseFloat(document.getElementById('rib_length').value);
    const sleeveLength = parseFloat(document.getElementById('sleeve_length').value);



    const rowsRes = parseFloat(document.getElementById('rows').value);
    const rows = rowsRes / 4;
    const colsRes = parseFloat(document.getElementById('cols').value);
    const cols = colsRes / 4;

    // Perform the multiplication
    const armholeRes = armhole * cols;
    const bodyCircRes = bodyCirc * cols;
    const bodyHeightRes = bodyHeight * rows;
    const collarWidthRes = collarWidth * rows;
    const cuffDepthRes = cuffDepth * rows;
    const neckDepthRes = neckDepth * rows;
    const neckWidthRes = neckWidth * cols;
    const ribLengthRes = ribLength * rows;
    const sleeveLengthRes = sleeveLength * rows;

    localStorage.setItem('armholeRes', armholeRes);
    localStorage.setItem('bodyCircRes', bodyCircRes);
    localStorage.setItem('bodyHeightRes', bodyHeightRes);
    localStorage.setItem('collarWidthRes', collarWidthRes);
    localStorage.setItem('cuffDepthRes', cuffDepthRes);
    localStorage.setItem('neckDepthRes', neckDepthRes);
    localStorage.setItem('neckWidthRes', neckWidthRes);
    localStorage.setItem('ribLengthRes', ribLengthRes);
    localStorage.setItem('sleeveLengthRes', sleeveLengthRes);

    window.location.href = 'dropCalcFin.htm';
  });