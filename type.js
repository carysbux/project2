const div = document.querySelector(text);
const text = " texthere ";

function textTypingEffect(element, text, i = 0) {
      element.textContent += text[i]

      if(i === text.length - 1) {
          return;
        }
     setTimeout(() => textTypingEffect(element, text, i + 1), 50);
      }

    textTypingEffect(div/sec, text, 7)
      


