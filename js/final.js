const find = document.querySelectorAll('#lottie > svg')[0];

function setAttributes(el, attrs) {
  for (var key in attrs) {
    el.setAttribute(key, attrs[key]);
  }
}

// setAttributes(find, {
//   viewBox: '250 100 1800 2550',
//   style: 'width: 200%; height: 147%; transform: translate3d(-165px, 0px, 0px);',
// });
