function setupNeutrino() {
  darkBodyFix();
  addTabIndexToHtmlInfo();
  addTabIndexToQuickSettings();
  addLockToQuickSettings();
  // moveExtraNetworks("txt2img_extra_networks");
  // // addJumpButton("txt2img_extra_networks", "txt2img_toprow")
  // addExtNetCloseButton("txt2img_extra_networks", "txt2img")
  // // moveExtraNetworks("img2img_extra_networks");
  replaceButtons(); 
  moveStylesToTools();  
  unsetAnnoyingScroll();
  askBeforeClose();
  changeFaviconBase64('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAGlmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgOS4xLWMwMDEgNzkuYThkNDc1MywgMjAyMy8wMy8yMy0wODo1NjozNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDI0LjcgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyNC0wOS0wOFQyMDoxMTowOSswMzozMCIgeG1wOk1vZGlmeURhdGU9IjIwMjUtMTAtMDRUMTQ6NTA6NTErMDM6MzAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjUtMTAtMDRUMTQ6NTA6NTErMDM6MzAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOmFiMDgyZmFjLTQ0MmItMjY0ZC05M2QyLThhYzlhYmI1NWQ3ZiIgeG1wTU06RG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjJiNmM3ZDI2LTYxYWEtZGI0NC1hMTgwLWVlZmYyNTViNjk5OCIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjQ0ZWNhM2FiLTM4ZTItMzM0NS04ZTY1LWYyMzg1ODIyMjM0ZCI+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNyZWF0ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6NDRlY2EzYWItMzhlMi0zMzQ1LThlNjUtZjIzODU4MjIyMzRkIiBzdEV2dDp3aGVuPSIyMDI0LTA5LTA4VDIwOjExOjA5KzAzOjMwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjQuNyAoV2luZG93cykiLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmE3NTVlOTI3LTc1MjAtYmU0NC1iYmJmLThlNTE2MWFkYTQyZSIgc3RFdnQ6d2hlbj0iMjAyNC0wOS0wOFQyMDoxMTo0MSswMzozMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDI0LjcgKFdpbmRvd3MpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDphYjA4MmZhYy00NDJiLTI2NGQtOTNkMi04YWM5YWJiNTVkN2YiIHN0RXZ0OndoZW49IjIwMjUtMTAtMDRUMTQ6NTA6NTErMDM6MzAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyNC43IChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7nBWieAAACUklEQVQ4jY1TXUiTYRQ+UDetfaaWRk5bLm2t382phLXmDKKCEV65opVBBV30g2UJFgUSUaAQwSKcs5CBEqF2kVJBahcJJRSBGV20rYxa2SKtoC6ezvm+WZ85youH9z3vd87zPu/5nkOoLpwHvzkYddOb5y4aG3HRx39BciQX/sUtUkvw5TbX5RMK5xBWGBlz/wPOWcbrCQsBPlMLvfbQezlwphGKk9DvU0G+S02snOIkkmwclPDhaoWVyA1GbV2jaOepSGwGwvB6GiN5l0hbxck7cwi3jlbh8aV6dB32YW+uRmJnrGUU6QikRmpVAisHGzMJn243A9GX+NDTCjwZQMO6RVjOSjZkECoYK5nEZtRUTSGwsJwjZm7K5wSGmmpgNmo3SsEFtwWJO1343ncDsY4AThVnqSTTFJSlE0bbG4GJccS7Q7jsdcDCia07XMDwAOpKsvGoqZb3/ahcyD3SE0z2wDOfED7gxbf7ncDXCVzf7caV7Xb8fNCuNnZbNqscHcG5MhPMhr8IStkSm5jAxPuKBZz4YhCx8HlcrSxigrD6rJqls4B4DPX2DOTrFRRwUG3iosFuxDuDSPQEgfEvuHnQiwA/Be8iuHdmH3487EUkfBGl/Fxp7pQebMkidOzfimeBs3gaaECb36Ma5ljBbNw9fQhDjSfRtmczyjO1X/u7iWIGCRxpmnms/NGaNJNDSZpr0mDKH3OJkcSE06zsTGFlp6JBb2WZnahYmQciWLuEDwwzHybJPS7DVJUTInWcd+WFIm56O9NxfsW58Odd49r0X6clxy/tvi52AAAAAElFTkSuQmCC');
  // addRightClickResetToNums();    
}

function askBeforeClose() {
  window.addEventListener('beforeunload', function (e) {
    e.preventDefault();
    e.returnValue = '';
  });
}

function addRightClickResetToNums() {
  const numberInputs = document.querySelectorAll('input[type="number"]');
  numberInputs.forEach((input) => {
    input.defaultValue = input.value;
    input.addEventListener("contextmenu", (event) => {
      event.preventDefault();
      input.value = input.defaultValue;      
    });
  });
}

function moveExtraNetworks(id) {
  const element = document.querySelector(`div#${id}`);
  if (element) {
    const parent = element.parentNode;
    const grandparent = parent.parentNode;
    grandparent.insertBefore(parent, grandparent.firstChild);
  }
}

function unsetAnnoyingScroll() {
    const ids = ['#txt2img_settings', '#img2img_settings'];

    ids.forEach(id => {
        const element = document.querySelector(id);
        if (element && element.parentElement) {
            element.parentElement.style.alignItems = 'unset';
        }
    });
}

function addExtNetCloseButton(id, tab){
  const targetButton = document.querySelector("#"+tab+"_tools"+" "+"#"+tab+"_extra_networks");
  const hostEl = document.getElementById(id).parentElement;
  const closeButton = document.createElement("button");
  closeButton.textContent = "✕";
  closeButton.style.position = "absolute";
  closeButton.style.width = "0";
  closeButton.style.height = "0";
  closeButton.style.top = "0";
  closeButton.style.right = "2ch";
  closeButton.style.fontSize = "200%";
  closeButton.onclick = function() {
     targetButton.click();
  };
  hostEl.appendChild(closeButton);
}

function moveStylesToTools() {
  const txt2imgStyles = document.getElementById('txt2img_styles_row');
  const img2imgStyles = document.getElementById('img2img_styles_row');
  const txt2imgTools = document.getElementById('txt2img_tools');
  const img2imgTools = document.getElementById('img2img_tools');
  if (txt2imgStyles && txt2imgTools) {
    txt2imgTools.appendChild(txt2imgStyles);
  }
  if (img2imgStyles && img2imgTools) {
    img2imgTools.appendChild(img2imgStyles);
  }
}

// function addJumpButton(id, target) {
//   const targetElement = document.getElementById(target);
//   const hostEl = document.getElementById(id).parentElement;
//   const closeButton = document.createElement("button");
//   closeButton.textContent = "▼";
//   closeButton.style.position = "absolute";
//   closeButton.style.width = "0";
//   closeButton.style.height = "0";
//   closeButton.style.top = "0";
//   closeButton.style.right = "2ch";
//   closeButton.style.fontSize = "200%";
//   closeButton.onclick = function() {
//     window.scrollTo({
//       top: targetElement.offsetTop,
//       behavior: 'instant'
//     });  
//   };
//   hostEl.appendChild(closeButton);
// }

function darkBodyFix() {
  const firstDiv = document.querySelector('div');
  if (firstDiv && firstDiv.classList.contains('dark')) {
    document.body.classList.add('dark');
  }
}

function addTabIndexToQuickSettings() {
  const quickSettings = document.getElementById('quicksettings');
  quickSettings.setAttribute('tabindex', '0');
}

function addTabIndexToHtmlInfo() {
  const info_txt2img = document.getElementById('html_info_txt2img');
  info_txt2img.setAttribute('tabindex', '0');
  const info_img2img = document.getElementById('html_info_img2img');
  info_img2img.setAttribute('tabindex', '0');
}

function addLockToQuickSettings() {
  const quickSettings = document.getElementById('quicksettings');

  if (quickSettings) {
    const newCheckbox = document.createElement('input');
    newCheckbox.type = 'checkbox';
    newCheckbox.id = 'z-lock';
    newCheckbox.title = 'Lock Quicksettings';

    const checkboxValue = localStorage.getItem('z-lock');

    if (checkboxValue !== null) {
      newCheckbox.checked = (checkboxValue === 'true');
      if (newCheckbox.checked) {
        quickSettings.classList.add('locked');
      }
    }

    newCheckbox.addEventListener('change', () => {
      if (newCheckbox.checked) {
        quickSettings.classList.add('locked');
      } else {
        quickSettings.classList.remove('locked');
      }

      localStorage.setItem('z-lock', newCheckbox.checked);
      newCheckbox.blur(); 
    });

    quickSettings.appendChild(newCheckbox);
  }
}

function replaceButtons(){
  const buttons = document.getElementsByClassName("gradio-button");

  const buttonsToReplace = {
    '🔄': ['⭮', 'Refresh list'],
    '🎲️': ['⛬', 'Set seed to -1, makes a random seed every gen'],
    '♻️': ['⮌', 'Reuse seed from last gen, mostly useful if it was random'],
    '📂': ['🗁', 'Open images output directory'],
    '↙️': ['🡷', 'Read gen params from prompt or last gen if prompt is empty'],
    '🗑️': ['✕', 'Clear prompt'],
    '📋': ['🗲', 'Apply selected styles to prompt'],
    '💾': ['🖫', 'Save'],
    '🖌️': ['🖉', 'Edit Styles'],
    '💥': ['◍', 'Run Preprocessor'],
    '🗃️': ['▤', 'Save zip archive with images to a dedicated directory (log/images)'],
    '🖼️': ['⚦', 'Send image and generation parameters to Img2Img tab'],
    '🎨️': ['⚥', 'Send image and generation parameters to Inpaint tab'],
    '📐': ['⚧', 'Send image and generation parameters to Extras tab'],
    '✨': ['🔥', 'Create an upscaled version of the current image using hires fix settings']
  };

  for (let i = 0; i < buttons.length; i++) {
    const button = buttons[i];
    // const replacement = buttonsToReplace[button.innerHTML];
    const replacement = buttonsToReplace[button.textContent.trim()];
    if (replacement) {
      const [buttonIcon, buttonTooltip] = replacement;
      button.innerHTML = buttonIcon;
      button.setAttribute('title', buttonTooltip);
    }
  } 
}

function generateRandomCardSet() {
  const codePointBase = 0x1F0A1; 
  let cardSet = "";
  let element = document.getElementById("txt2img_tools");
  element = element.querySelector("#txt2img_extra_networks");
  const cardWidth = parseFloat(getComputedStyle(document.documentElement).fontSize); 
  const availableWidth = element.clientWidth; 
  const count = Math.floor(availableWidth / cardWidth) - 1; 
  for (let i = 0; i < count; i++) {
    const randomOffset = Math.floor(Math.random() * 13);
    const randomSuit = Math.floor(Math.random() * 4);
    const codePoint = codePointBase + (randomSuit * 16) + randomOffset;
    cardSet += String.fromCodePoint(codePoint) + " ";
  }
  return cardSet.trim();
}

function changeFaviconBase64(base64Image) {
    var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/x-icon';
    link.rel = 'shortcut icon';
    link.href = base64Image;
    document.getElementsByTagName('head')[0].appendChild(link);
}

onUiLoaded(setupNeutrino);
