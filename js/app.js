const sentenceTag = document.querySelector(`input[type='text']`);
const outputTag = document.querySelector('.output');

// when i type in my sentence tag, update the output tag accordingly
function outPutValue(eve) {
  outputTag.innerHTML = eve.target.value;
}

sentenceTag.addEventListener('input', outPutValue, false);
