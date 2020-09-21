const sentenceTag = document.querySelector(`input[type='text']`);
const outputTag = document.querySelector('.output');
const originalText = outputTag.value;

// when i type in my sentence tag, update the output tag accordingly
// if there's no value, put in the original text
function sentenceValue(eve) {
  if (eve.target.value) {
    outputTag.value = eve.target.value;
  } else {
    outputTag.value = originalText;
  }
}

// When i type in my output tag, update the sentence tag accordingly
function outPutValue(e) {
  sentenceTag.value = e.target.value;
}

// sentenceValue
sentenceTag.addEventListener('keyup', sentenceValue, false);

// outPutValue
outputTag.addEventListener('keyup', outPutValue, false);
