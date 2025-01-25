const boxes = document.querySelectorAll('.box');
const continueBtn = document.getElementById('continue-btn');

let selectedType = '';

boxes.forEach(box => {
  box.addEventListener('click', () => {
    // Remove 'selected' class from all boxes
    boxes.forEach(b => b.classList.remove('selected'));
    
    // Add 'selected' class to the clicked box
    box.classList.add('selected');
    
    // Set the selected type
    selectedType = box.dataset.value;
    
    // Enable the continue button
    continueBtn.classList.add('enabled');
    continueBtn.disabled = false;
  });
});

continueBtn.addEventListener('click', () => {
  // Redirect based on the selected type
  if (selectedType === 'sweater') {
    window.location.href = 'sweaterOpt.htm'; // Redirect to type1 page
  } else if (selectedType === 'socks') {
    alert(`We're working on socks!`);
   //window.location.href = 'sockOpt.htm'; // Redirect to type2 page
  } else if (selectedType === 'hat') {
    alert(`Hang tight! We've got hats on the way!`);
    //window.location.href = 'hatOpt.htm'; // Redirect to type3 page
  }

//ANCHOR FOR SWEATER CONSTRUCTION
  else if (selectedType === 'raglan') {
    window.location.href = 'raglanCalc.htm'; // Redirect to type1 page
  } else if (selectedType === 'drop') {
    window.location.href = 'dropCalc.htm'; // Redirect to type1 page
   //window.location.href = 'sockOpt.htm'; // Redirect to type2 page
  }

//TODO FOR SOCK CONSTRUCTION

//TODO FOR HAT CONSTUCTION
});