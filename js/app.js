const sentenceTag = document.querySelector(`input[type='text']`);
const typesizeTag = document.querySelector(`input[name="typesize"]`);
const typesizeOutPut = document.querySelector(`.typesize-output`);

const lineheightTag = document.querySelector(`input[name="lineheight"]`);
const lineheightOutput = document.querySelector(`.lineheight-output`);

const italicTag = document.querySelector(`input[name="italic"]`);

const typefaceTag = document.querySelector(`select[name="typeface"]`);

const fontweightOutPut = document.querySelector('.fontweight-output');
const fontweightTag = document.querySelector(`input[name="fontweight"]`);

const colorTags = document.querySelectorAll('.colors div');

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

// When i change my select for fontWeight, update the font weight
function fontWeightValue(eve) {
  outputTag.style.fontWeight = eve.target.value;
  fontweightOutPut.innerHTML = eve.target.value;
}

// Changes line height value
function lineheightOutputValue(evet) {
  outputTag.style.lineHeight = evet.target.value;
  lineheightOutput.innerHTML = evet.target.value;
}

// When i change my italic checkbox, update the font style to either
// normal or italic if it's checked or not
function italicTagOutPut(eve) {
  if (eve.target.checked) {
    outputTag.style.fontStyle = 'italic';
  } else {
    outputTag.style.fontStyle = 'normal';
  }
}

// When i change my select for typeface, update the font family
function typefaceValue(eve) {
  outputTag.style.fontFamily = eve.target.value;
}

// go through all of my color tags, then..
// when i click one of them, change the background color and
// the text color, and make this tag be selected

colorTags.forEach((tag) => {
  tag.addEventListener('click', function () {
    outputTag.style.backgroundColor = this.style.backgroundColor;
    outputTag.style.color = this.style.color;

    // reset the classes
    colorTags.forEach((tag) => {
      tag.classList.remove('selected');
    });

    // Only to this clicked one
    this.classList.add('selected');
  });
});

// sentenceValue
sentenceTag.addEventListener('keyup', sentenceValue, false);

// outPutValue
outputTag.addEventListener('keyup', outPutValue, false);

// typeSizeValue
typesizeTag.addEventListener('input', typeSizeValue, false);

// lineheightOutputValue
lineheightTag.addEventListener('input', lineheightOutputValue, false);

// italicTagOutPut
italicTag.addEventListener('change', italicTagOutPut, false);

// typefaceValue
typefaceTag.addEventListener('input', typefaceValue, false);

// fontWeightValue
fontweightTag.addEventListener('input', fontWeightValue, false);
