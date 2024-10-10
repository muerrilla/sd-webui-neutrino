function setupNeutrino() {
  darkBodyFix();
  addTabIndexToQuickSettings();
  addLockToQuickSettings();
  replaceButtons(); 
  moveStylesToTools();  
  unsetAnnoyingScroll();
  askBeforeClose();
  changeTabIcon('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAFyWlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgOS4xLWMwMDEgNzkuYThkNDc1MywgMjAyMy8wMy8yMy0wODo1NjozNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDI0LjcgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyNC0wOS0wOFQyMDoxMTowOSswMzozMCIgeG1wOk1vZGlmeURhdGU9IjIwMjQtMDktMDhUMjA6MTE6NDErMDM6MzAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjQtMDktMDhUMjA6MTE6NDErMDM6MzAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOmE3NTVlOTI3LTc1MjAtYmU0NC1iYmJmLThlNTE2MWFkYTQyZSIgeG1wTU06RG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjgzYzUxMWIxLTFhZjItZTg0NC05YjEwLWQ0Y2JmM2U2ZGE5MiIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjQ0ZWNhM2FiLTM4ZTItMzM0NS04ZTY1LWYyMzg1ODIyMjM0ZCI+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNyZWF0ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6NDRlY2EzYWItMzhlMi0zMzQ1LThlNjUtZjIzODU4MjIyMzRkIiBzdEV2dDp3aGVuPSIyMDI0LTA5LTA4VDIwOjExOjA5KzAzOjMwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjQuNyAoV2luZG93cykiLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmE3NTVlOTI3LTc1MjAtYmU0NC1iYmJmLThlNTE2MWFkYTQyZSIgc3RFdnQ6d2hlbj0iMjAyNC0wOS0wOFQyMDoxMTo0MSswMzozMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDI0LjcgKFdpbmRvd3MpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpIaXN0b3J5PiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pnk7MtgAAAKDSURBVDiNlVNtSFNhFH7vXV9sZlFQuaub8+7eaeqmY5bZB0QU9SdTCimTwCjMoA+CEIOKsA8oyiCKcoroghAUqq0fkkaZUzB1ZEmIQVsxbGVWRmsWPL3vneXGpI8fh3Pv+57z3Oc89zlEGsQ8o2fCLjjcb7T2tlFtbfv7PwatYbVi/0Qt6yVGT7Bm7vb94HRG8Mmp4A1/CVrD6STEFZVD9ARriXCz+y07UJmyoErNDkfk83RB71mP4OgKEEaJTzZBlWYFMWaCJEogSXI4S2blfDoQ3mCC1n5/lLC5GDUiZmBx3jocqb6GKy1Omq9CWL0BHAXlZAsIDT6CGethvQoAp5ehTrfB2fsc3mAI93qfYSDwASt27AbRp2J2Rg40luUghnSQ5DSFVRQAEVJgWL8ZYwAuNt0BWaQHR+nztHhtaTk6hobxaOgVmt09sG0tUUBiGMxZasWtjh6MUxBX3wDyDxwFSUhBceUpPB0Zg62wGJeabsMz8hELc9ZQnaQpgF8aaDKXoazqPDpfevGFApUcq0L+wQo8HPIpwsZbV2F4/DtW7twDskQfDTCDzqWx5IIsEKA252Lw3Sc0tneh4HAlHrzwKmNJGwvgCwHZlA1JMERokGiElire7R2Bk9J39Q3iM2VQfq4aWw5V4PW3HzhxowFPfH442t2YxXygN0VrEJ+dh71VF3Dd2YoaVyt2HT+DmbIZ8qZCnK534HLzXZSePAs1HZP92ikRqRnYCydnTZrIBKIzKTNz9EuKuQQpfJco/zZX2Ehto7FWZjnGylmTEWllI4RGd4DQhbDHFe0Dl/Qfy0Rr47aVQez/WkfYSor9oTqhsdP/z+vc8Ngv9oXqae/8n5pX8bG8YZoEAAAAAElFTkSuQmCC');  
  // addRightClickResetToNums();    
}

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
    '🖼️': ['🡢', 'Send image and generation parameters to Img2Img tab'],
    '🎨️': ['🡲', 'Send image and generation parameters to Inpaint tab'],
    '📐': ['🢂', 'Send image and generation parameters to Extras tab'],
    '✨': ['▲', 'Create an upscaled version of the current image using hires fix settings'],
    '📦': ['DB', 'Interrogate DeepBooru - use DeepBooru for prompt'],
    '📎': ['CLIP', 'Interrogate CLIP - use CLIP for prompt'],
    '🌀': ['🌞', 'Restore progress']
  };
  const buttons = document.getElementsByClassName("gradio-button");

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

function unsetAnnoyingScroll() {
    const ids = ['#txt2img_settings', '#img2img_settings'];
    ids.forEach(id => {
        const element = document.querySelector(id);
        if (element && element.parentElement) {
            element.parentElement.style.alignItems = 'unset';
        }
    });
}

function askBeforeClose() {
  window.addEventListener('beforeunload', function (e) {
    e.preventDefault();
    e.returnValue = '';
  });
}

function changeTabIcon(base64Image) {
    var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/x-icon';
    link.rel = 'shortcut icon';
    link.href = base64Image;
    document.getElementsByTagName('head')[0].appendChild(link);
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

onUiLoaded(setupNeutrino);
