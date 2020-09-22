const sentenceTag = document.querySelector(`input[type='text']`);
const typesizeTag = document.querySelector(`input[name="typesize"]`);
const typesizeOutPut = document.querySelector(`.typesize-output`);

const lineheightTag = document.querySelector(`input[name="lineheight"]`);
const lineheightOutput = document.querySelector(`.lineheight-output`);

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

// when I change my typesize slider, update the text next to it AND
// change the outPutTag's font size
function typeSizeValue(event) {
  outputTag.style.fontSize = event.target.value + 'px';
  typesizeOutPut.innerHTML = event.target.value + 'px';
}

function lineheightOutputValue(evet) {
  outputTag.style.lineHeight = evet.target.value;
  lineheightOutput.innerHTML = evet.target.value;
}

// sentenceValue
sentenceTag.addEventListener('keyup', sentenceValue, false);

// outPutValue
outputTag.addEventListener('keyup', outPutValue, false);

// typeSizeValue
typesizeTag.addEventListener('input', typeSizeValue, false);

// lineheightOutputValue
lineheightTag.addEventListener('input', lineheightOutputValue, false);
