/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 99);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__(106);
} else {
  module.exports = require('./cjs/react.development.js');
}


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (false) {
  var ReactIs = require('react-is');

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = require('./factoryWithTypeCheckers')(ReactIs.isElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(113)();
}


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__exports__ = __webpack_require__(158);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__exports__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__exports__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__exports__["c"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_0__exports__["d"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_reactBatchedUpdates__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_batch__ = __webpack_require__(73);
/* unused harmony reexport batch */


 // Enable batched updates in our subscriptions for use
// with standard React renderers (ReactDOM, React Native)

Object(__WEBPACK_IMPORTED_MODULE_2__utils_batch__["b" /* setBatch */])(__WEBPACK_IMPORTED_MODULE_1__utils_reactBatchedUpdates__["a" /* unstable_batchedUpdates */]);


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(139);

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

/*!
* sweetalert2 v11.1.7
* Released under the MIT License.
*/
(function (global, factory) {
   true ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.Sweetalert2 = factory());
}(this, function () { 'use strict';

  const DismissReason = Object.freeze({
    cancel: 'cancel',
    backdrop: 'backdrop',
    close: 'close',
    esc: 'esc',
    timer: 'timer'
  });

  const consolePrefix = 'SweetAlert2:';
  /**
   * Filter the unique values into a new array
   * @param arr
   */

  const uniqueArray = arr => {
    const result = [];

    for (let i = 0; i < arr.length; i++) {
      if (result.indexOf(arr[i]) === -1) {
        result.push(arr[i]);
      }
    }

    return result;
  };
  /**
   * Capitalize the first letter of a string
   * @param str
   */

  const capitalizeFirstLetter = str => str.charAt(0).toUpperCase() + str.slice(1);
  /**
   * Convert NodeList to Array
   * @param nodeList
   */

  const toArray = nodeList => Array.prototype.slice.call(nodeList);
  /**
   * Standardise console warnings
   * @param message
   */

  const warn = message => {
    console.warn("".concat(consolePrefix, " ").concat(typeof message === 'object' ? message.join(' ') : message));
  };
  /**
   * Standardise console errors
   * @param message
   */

  const error = message => {
    console.error("".concat(consolePrefix, " ").concat(message));
  };
  /**
   * Private global state for `warnOnce`
   * @type {Array}
   * @private
   */

  const previousWarnOnceMessages = [];
  /**
   * Show a console warning, but only if it hasn't already been shown
   * @param message
   */

  const warnOnce = message => {
    if (!previousWarnOnceMessages.includes(message)) {
      previousWarnOnceMessages.push(message);
      warn(message);
    }
  };
  /**
   * Show a one-time console warning about deprecated params/methods
   */

  const warnAboutDeprecation = (deprecatedParam, useInstead) => {
    warnOnce("\"".concat(deprecatedParam, "\" is deprecated and will be removed in the next major release. Please use \"").concat(useInstead, "\" instead."));
  };
  /**
   * If `arg` is a function, call it (with no arguments or context) and return the result.
   * Otherwise, just pass the value through
   * @param arg
   */

  const callIfFunction = arg => typeof arg === 'function' ? arg() : arg;
  const hasToPromiseFn = arg => arg && typeof arg.toPromise === 'function';
  const asPromise = arg => hasToPromiseFn(arg) ? arg.toPromise() : Promise.resolve(arg);
  const isPromise = arg => arg && Promise.resolve(arg) === arg;

  const isJqueryElement = elem => typeof elem === 'object' && elem.jquery;

  const isElement = elem => elem instanceof Element || isJqueryElement(elem);

  const argsToParams = args => {
    const params = {};

    if (typeof args[0] === 'object' && !isElement(args[0])) {
      Object.assign(params, args[0]);
    } else {
      ['title', 'html', 'icon'].forEach((name, index) => {
        const arg = args[index];

        if (typeof arg === 'string' || isElement(arg)) {
          params[name] = arg;
        } else if (arg !== undefined) {
          error("Unexpected type of ".concat(name, "! Expected \"string\" or \"Element\", got ").concat(typeof arg));
        }
      });
    }

    return params;
  };

  const swalPrefix = 'swal2-';
  const prefix = items => {
    const result = {};

    for (const i in items) {
      result[items[i]] = swalPrefix + items[i];
    }

    return result;
  };
  const swalClasses = prefix(['container', 'shown', 'height-auto', 'iosfix', 'popup', 'modal', 'no-backdrop', 'no-transition', 'toast', 'toast-shown', 'show', 'hide', 'close', 'title', 'html-container', 'actions', 'confirm', 'deny', 'cancel', 'default-outline', 'footer', 'icon', 'icon-content', 'image', 'input', 'file', 'range', 'select', 'radio', 'checkbox', 'label', 'textarea', 'inputerror', 'input-label', 'validation-message', 'progress-steps', 'active-progress-step', 'progress-step', 'progress-step-line', 'loader', 'loading', 'styled', 'top', 'top-start', 'top-end', 'top-left', 'top-right', 'center', 'center-start', 'center-end', 'center-left', 'center-right', 'bottom', 'bottom-start', 'bottom-end', 'bottom-left', 'bottom-right', 'grow-row', 'grow-column', 'grow-fullscreen', 'rtl', 'timer-progress-bar', 'timer-progress-bar-container', 'scrollbar-measure', 'icon-success', 'icon-warning', 'icon-info', 'icon-question', 'icon-error']);
  const iconTypes = prefix(['success', 'warning', 'info', 'question', 'error']);

  const getContainer = () => document.body.querySelector(".".concat(swalClasses.container));
  const elementBySelector = selectorString => {
    const container = getContainer();
    return container ? container.querySelector(selectorString) : null;
  };

  const elementByClass = className => {
    return elementBySelector(".".concat(className));
  };

  const getPopup = () => elementByClass(swalClasses.popup);
  const getIcon = () => elementByClass(swalClasses.icon);
  const getTitle = () => elementByClass(swalClasses.title);
  const getHtmlContainer = () => elementByClass(swalClasses['html-container']);
  const getImage = () => elementByClass(swalClasses.image);
  const getProgressSteps = () => elementByClass(swalClasses['progress-steps']);
  const getValidationMessage = () => elementByClass(swalClasses['validation-message']);
  const getConfirmButton = () => elementBySelector(".".concat(swalClasses.actions, " .").concat(swalClasses.confirm));
  const getDenyButton = () => elementBySelector(".".concat(swalClasses.actions, " .").concat(swalClasses.deny));
  const getInputLabel = () => elementByClass(swalClasses['input-label']);
  const getLoader = () => elementBySelector(".".concat(swalClasses.loader));
  const getCancelButton = () => elementBySelector(".".concat(swalClasses.actions, " .").concat(swalClasses.cancel));
  const getActions = () => elementByClass(swalClasses.actions);
  const getFooter = () => elementByClass(swalClasses.footer);
  const getTimerProgressBar = () => elementByClass(swalClasses['timer-progress-bar']);
  const getCloseButton = () => elementByClass(swalClasses.close); // https://github.com/jkup/focusable/blob/master/index.js

  const focusable = "\n  a[href],\n  area[href],\n  input:not([disabled]),\n  select:not([disabled]),\n  textarea:not([disabled]),\n  button:not([disabled]),\n  iframe,\n  object,\n  embed,\n  [tabindex=\"0\"],\n  [contenteditable],\n  audio[controls],\n  video[controls],\n  summary\n";
  const getFocusableElements = () => {
    const focusableElementsWithTabindex = toArray(getPopup().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])')) // sort according to tabindex
    .sort((a, b) => {
      a = parseInt(a.getAttribute('tabindex'));
      b = parseInt(b.getAttribute('tabindex'));

      if (a > b) {
        return 1;
      } else if (a < b) {
        return -1;
      }

      return 0;
    });
    const otherFocusableElements = toArray(getPopup().querySelectorAll(focusable)).filter(el => el.getAttribute('tabindex') !== '-1');
    return uniqueArray(focusableElementsWithTabindex.concat(otherFocusableElements)).filter(el => isVisible(el));
  };
  const isModal = () => {
    return !isToast() && !document.body.classList.contains(swalClasses['no-backdrop']);
  };
  const isToast = () => {
    return document.body.classList.contains(swalClasses['toast-shown']);
  };
  const isLoading = () => {
    return getPopup().hasAttribute('data-loading');
  };

  const states = {
    previousBodyPadding: null
  };
  const setInnerHtml = (elem, html) => {
    // #1926
    elem.textContent = '';

    if (html) {
      const parser = new DOMParser();
      const parsed = parser.parseFromString(html, "text/html");
      toArray(parsed.querySelector('head').childNodes).forEach(child => {
        elem.appendChild(child);
      });
      toArray(parsed.querySelector('body').childNodes).forEach(child => {
        elem.appendChild(child);
      });
    }
  };
  const hasClass = (elem, className) => {
    if (!className) {
      return false;
    }

    const classList = className.split(/\s+/);

    for (let i = 0; i < classList.length; i++) {
      if (!elem.classList.contains(classList[i])) {
        return false;
      }
    }

    return true;
  };

  const removeCustomClasses = (elem, params) => {
    toArray(elem.classList).forEach(className => {
      if (!Object.values(swalClasses).includes(className) && !Object.values(iconTypes).includes(className) && !Object.values(params.showClass).includes(className)) {
        elem.classList.remove(className);
      }
    });
  };

  const applyCustomClass = (elem, params, className) => {
    removeCustomClasses(elem, params);

    if (params.customClass && params.customClass[className]) {
      if (typeof params.customClass[className] !== 'string' && !params.customClass[className].forEach) {
        return warn("Invalid type of customClass.".concat(className, "! Expected string or iterable object, got \"").concat(typeof params.customClass[className], "\""));
      }

      addClass(elem, params.customClass[className]);
    }
  };
  const getInput = (popup, inputType) => {
    if (!inputType) {
      return null;
    }

    switch (inputType) {
      case 'select':
      case 'textarea':
      case 'file':
        return getChildByClass(popup, swalClasses[inputType]);

      case 'checkbox':
        return popup.querySelector(".".concat(swalClasses.checkbox, " input"));

      case 'radio':
        return popup.querySelector(".".concat(swalClasses.radio, " input:checked")) || popup.querySelector(".".concat(swalClasses.radio, " input:first-child"));

      case 'range':
        return popup.querySelector(".".concat(swalClasses.range, " input"));

      default:
        return getChildByClass(popup, swalClasses.input);
    }
  };
  const focusInput = input => {
    input.focus(); // place cursor at end of text in text input

    if (input.type !== 'file') {
      // http://stackoverflow.com/a/2345915
      const val = input.value;
      input.value = '';
      input.value = val;
    }
  };
  const toggleClass = (target, classList, condition) => {
    if (!target || !classList) {
      return;
    }

    if (typeof classList === 'string') {
      classList = classList.split(/\s+/).filter(Boolean);
    }

    classList.forEach(className => {
      if (target.forEach) {
        target.forEach(elem => {
          condition ? elem.classList.add(className) : elem.classList.remove(className);
        });
      } else {
        condition ? target.classList.add(className) : target.classList.remove(className);
      }
    });
  };
  const addClass = (target, classList) => {
    toggleClass(target, classList, true);
  };
  const removeClass = (target, classList) => {
    toggleClass(target, classList, false);
  };
  const getChildByClass = (elem, className) => {
    for (let i = 0; i < elem.childNodes.length; i++) {
      if (hasClass(elem.childNodes[i], className)) {
        return elem.childNodes[i];
      }
    }
  };
  const applyNumericalStyle = (elem, property, value) => {
    if (value === "".concat(parseInt(value))) {
      value = parseInt(value);
    }

    if (value || parseInt(value) === 0) {
      elem.style[property] = typeof value === 'number' ? "".concat(value, "px") : value;
    } else {
      elem.style.removeProperty(property);
    }
  };
  const show = (elem, display = 'flex') => {
    elem.style.display = display;
  };
  const hide = elem => {
    elem.style.display = 'none';
  };
  const setStyle = (parent, selector, property, value) => {
    const el = parent.querySelector(selector);

    if (el) {
      el.style[property] = value;
    }
  };
  const toggle = (elem, condition, display) => {
    condition ? show(elem, display) : hide(elem);
  }; // borrowed from jquery $(elem).is(':visible') implementation

  const isVisible = elem => !!(elem && (elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length));
  const allButtonsAreHidden = () => !isVisible(getConfirmButton()) && !isVisible(getDenyButton()) && !isVisible(getCancelButton());
  const isScrollable = elem => !!(elem.scrollHeight > elem.clientHeight); // borrowed from https://stackoverflow.com/a/46352119

  const hasCssAnimation = elem => {
    const style = window.getComputedStyle(elem);
    const animDuration = parseFloat(style.getPropertyValue('animation-duration') || '0');
    const transDuration = parseFloat(style.getPropertyValue('transition-duration') || '0');
    return animDuration > 0 || transDuration > 0;
  };
  const animateTimerProgressBar = (timer, reset = false) => {
    const timerProgressBar = getTimerProgressBar();

    if (isVisible(timerProgressBar)) {
      if (reset) {
        timerProgressBar.style.transition = 'none';
        timerProgressBar.style.width = '100%';
      }

      setTimeout(() => {
        timerProgressBar.style.transition = "width ".concat(timer / 1000, "s linear");
        timerProgressBar.style.width = '0%';
      }, 10);
    }
  };
  const stopTimerProgressBar = () => {
    const timerProgressBar = getTimerProgressBar();
    const timerProgressBarWidth = parseInt(window.getComputedStyle(timerProgressBar).width);
    timerProgressBar.style.removeProperty('transition');
    timerProgressBar.style.width = '100%';
    const timerProgressBarFullWidth = parseInt(window.getComputedStyle(timerProgressBar).width);
    const timerProgressBarPercent = parseInt(timerProgressBarWidth / timerProgressBarFullWidth * 100);
    timerProgressBar.style.removeProperty('transition');
    timerProgressBar.style.width = "".concat(timerProgressBarPercent, "%");
  };

  // Detect Node env
  const isNodeEnv = () => typeof window === 'undefined' || typeof document === 'undefined';

  const sweetHTML = "\n <div aria-labelledby=\"".concat(swalClasses.title, "\" aria-describedby=\"").concat(swalClasses['html-container'], "\" class=\"").concat(swalClasses.popup, "\" tabindex=\"-1\">\n   <button type=\"button\" class=\"").concat(swalClasses.close, "\"></button>\n   <ul class=\"").concat(swalClasses['progress-steps'], "\"></ul>\n   <div class=\"").concat(swalClasses.icon, "\"></div>\n   <img class=\"").concat(swalClasses.image, "\" />\n   <h2 class=\"").concat(swalClasses.title, "\" id=\"").concat(swalClasses.title, "\"></h2>\n   <div class=\"").concat(swalClasses['html-container'], "\" id=\"").concat(swalClasses['html-container'], "\"></div>\n   <input class=\"").concat(swalClasses.input, "\" />\n   <input type=\"file\" class=\"").concat(swalClasses.file, "\" />\n   <div class=\"").concat(swalClasses.range, "\">\n     <input type=\"range\" />\n     <output></output>\n   </div>\n   <select class=\"").concat(swalClasses.select, "\"></select>\n   <div class=\"").concat(swalClasses.radio, "\"></div>\n   <label for=\"").concat(swalClasses.checkbox, "\" class=\"").concat(swalClasses.checkbox, "\">\n     <input type=\"checkbox\" />\n     <span class=\"").concat(swalClasses.label, "\"></span>\n   </label>\n   <textarea class=\"").concat(swalClasses.textarea, "\"></textarea>\n   <div class=\"").concat(swalClasses['validation-message'], "\" id=\"").concat(swalClasses['validation-message'], "\"></div>\n   <div class=\"").concat(swalClasses.actions, "\">\n     <div class=\"").concat(swalClasses.loader, "\"></div>\n     <button type=\"button\" class=\"").concat(swalClasses.confirm, "\"></button>\n     <button type=\"button\" class=\"").concat(swalClasses.deny, "\"></button>\n     <button type=\"button\" class=\"").concat(swalClasses.cancel, "\"></button>\n   </div>\n   <div class=\"").concat(swalClasses.footer, "\"></div>\n   <div class=\"").concat(swalClasses['timer-progress-bar-container'], "\">\n     <div class=\"").concat(swalClasses['timer-progress-bar'], "\"></div>\n   </div>\n </div>\n").replace(/(^|\n)\s*/g, '');

  const resetOldContainer = () => {
    const oldContainer = getContainer();

    if (!oldContainer) {
      return false;
    }

    oldContainer.remove();
    removeClass([document.documentElement, document.body], [swalClasses['no-backdrop'], swalClasses['toast-shown'], swalClasses['has-column']]);
    return true;
  };

  const resetValidationMessage = () => {
    if (Swal.isVisible()) {
      Swal.resetValidationMessage();
    }
  };

  const addInputChangeListeners = () => {
    const popup = getPopup();
    const input = getChildByClass(popup, swalClasses.input);
    const file = getChildByClass(popup, swalClasses.file);
    const range = popup.querySelector(".".concat(swalClasses.range, " input"));
    const rangeOutput = popup.querySelector(".".concat(swalClasses.range, " output"));
    const select = getChildByClass(popup, swalClasses.select);
    const checkbox = popup.querySelector(".".concat(swalClasses.checkbox, " input"));
    const textarea = getChildByClass(popup, swalClasses.textarea);
    input.oninput = resetValidationMessage;
    file.onchange = resetValidationMessage;
    select.onchange = resetValidationMessage;
    checkbox.onchange = resetValidationMessage;
    textarea.oninput = resetValidationMessage;

    range.oninput = () => {
      resetValidationMessage();
      rangeOutput.value = range.value;
    };

    range.onchange = () => {
      resetValidationMessage();
      range.nextSibling.value = range.value;
    };
  };

  const getTarget = target => typeof target === 'string' ? document.querySelector(target) : target;

  const setupAccessibility = params => {
    const popup = getPopup();
    popup.setAttribute('role', params.toast ? 'alert' : 'dialog');
    popup.setAttribute('aria-live', params.toast ? 'polite' : 'assertive');

    if (!params.toast) {
      popup.setAttribute('aria-modal', 'true');
    }
  };

  const setupRTL = targetElement => {
    if (window.getComputedStyle(targetElement).direction === 'rtl') {
      addClass(getContainer(), swalClasses.rtl);
    }
  };
  /*
   * Add modal + backdrop to DOM
   */


  const init = params => {
    // Clean up the old popup container if it exists
    const oldContainerExisted = resetOldContainer();
    /* istanbul ignore if */

    if (isNodeEnv()) {
      error('SweetAlert2 requires document to initialize');
      return;
    }

    const container = document.createElement('div');
    container.className = swalClasses.container;

    if (oldContainerExisted) {
      addClass(container, swalClasses['no-transition']);
    }

    setInnerHtml(container, sweetHTML);
    const targetElement = getTarget(params.target);
    targetElement.appendChild(container);
    setupAccessibility(params);
    setupRTL(targetElement);
    addInputChangeListeners();
  };

  const parseHtmlToContainer = (param, target) => {
    // DOM element
    if (param instanceof HTMLElement) {
      target.appendChild(param); // Object
    } else if (typeof param === 'object') {
      handleObject(param, target); // Plain string
    } else if (param) {
      setInnerHtml(target, param);
    }
  };

  const handleObject = (param, target) => {
    // JQuery element(s)
    if (param.jquery) {
      handleJqueryElem(target, param); // For other objects use their string representation
    } else {
      setInnerHtml(target, param.toString());
    }
  };

  const handleJqueryElem = (target, elem) => {
    target.textContent = '';

    if (0 in elem) {
      for (let i = 0; (i in elem); i++) {
        target.appendChild(elem[i].cloneNode(true));
      }
    } else {
      target.appendChild(elem.cloneNode(true));
    }
  };

  const animationEndEvent = (() => {
    // Prevent run in Node env

    /* istanbul ignore if */
    if (isNodeEnv()) {
      return false;
    }

    const testEl = document.createElement('div');
    const transEndEventNames = {
      WebkitAnimation: 'webkitAnimationEnd',
      OAnimation: 'oAnimationEnd oanimationend',
      animation: 'animationend'
    };

    for (const i in transEndEventNames) {
      if (Object.prototype.hasOwnProperty.call(transEndEventNames, i) && typeof testEl.style[i] !== 'undefined') {
        return transEndEventNames[i];
      }
    }

    return false;
  })();

  // https://github.com/twbs/bootstrap/blob/master/js/src/modal.js

  const measureScrollbar = () => {
    const scrollDiv = document.createElement('div');
    scrollDiv.className = swalClasses['scrollbar-measure'];
    document.body.appendChild(scrollDiv);
    const scrollbarWidth = scrollDiv.getBoundingClientRect().width - scrollDiv.clientWidth;
    document.body.removeChild(scrollDiv);
    return scrollbarWidth;
  };

  const renderActions = (instance, params) => {
    const actions = getActions();
    const loader = getLoader();
    const confirmButton = getConfirmButton();
    const denyButton = getDenyButton();
    const cancelButton = getCancelButton(); // Actions (buttons) wrapper

    if (!params.showConfirmButton && !params.showDenyButton && !params.showCancelButton) {
      hide(actions);
    } else {
      show(actions);
    } // Custom class


    applyCustomClass(actions, params, 'actions'); // Render buttons

    renderButton(confirmButton, 'confirm', params);
    renderButton(denyButton, 'deny', params);
    renderButton(cancelButton, 'cancel', params);
    handleButtonsStyling(confirmButton, denyButton, cancelButton, params);

    if (params.reverseButtons) {
      actions.insertBefore(cancelButton, loader);
      actions.insertBefore(denyButton, loader);
      actions.insertBefore(confirmButton, loader);
    } // Loader


    setInnerHtml(loader, params.loaderHtml);
    applyCustomClass(loader, params, 'loader');
  };

  function handleButtonsStyling(confirmButton, denyButton, cancelButton, params) {
    if (!params.buttonsStyling) {
      return removeClass([confirmButton, denyButton, cancelButton], swalClasses.styled);
    }

    addClass([confirmButton, denyButton, cancelButton], swalClasses.styled); // Buttons background colors

    if (params.confirmButtonColor) {
      confirmButton.style.backgroundColor = params.confirmButtonColor;
      addClass(confirmButton, swalClasses['default-outline']);
    }

    if (params.denyButtonColor) {
      denyButton.style.backgroundColor = params.denyButtonColor;
      addClass(denyButton, swalClasses['default-outline']);
    }

    if (params.cancelButtonColor) {
      cancelButton.style.backgroundColor = params.cancelButtonColor;
      addClass(cancelButton, swalClasses['default-outline']);
    }
  }

  function renderButton(button, buttonType, params) {
    toggle(button, params["show".concat(capitalizeFirstLetter(buttonType), "Button")], 'inline-block');
    setInnerHtml(button, params["".concat(buttonType, "ButtonText")]); // Set caption text

    button.setAttribute('aria-label', params["".concat(buttonType, "ButtonAriaLabel")]); // ARIA label
    // Add buttons custom classes

    button.className = swalClasses[buttonType];
    applyCustomClass(button, params, "".concat(buttonType, "Button"));
    addClass(button, params["".concat(buttonType, "ButtonClass")]);
  }

  function handleBackdropParam(container, backdrop) {
    if (typeof backdrop === 'string') {
      container.style.background = backdrop;
    } else if (!backdrop) {
      addClass([document.documentElement, document.body], swalClasses['no-backdrop']);
    }
  }

  function handlePositionParam(container, position) {
    if (position in swalClasses) {
      addClass(container, swalClasses[position]);
    } else {
      warn('The "position" parameter is not valid, defaulting to "center"');
      addClass(container, swalClasses.center);
    }
  }

  function handleGrowParam(container, grow) {
    if (grow && typeof grow === 'string') {
      const growClass = "grow-".concat(grow);

      if (growClass in swalClasses) {
        addClass(container, swalClasses[growClass]);
      }
    }
  }

  const renderContainer = (instance, params) => {
    const container = getContainer();

    if (!container) {
      return;
    }

    handleBackdropParam(container, params.backdrop);
    handlePositionParam(container, params.position);
    handleGrowParam(container, params.grow); // Custom class

    applyCustomClass(container, params, 'container');
  };

  /**
   * This module containts `WeakMap`s for each effectively-"private  property" that a `Swal` has.
   * For example, to set the private property "foo" of `this` to "bar", you can `privateProps.foo.set(this, 'bar')`
   * This is the approach that Babel will probably take to implement private methods/fields
   *   https://github.com/tc39/proposal-private-methods
   *   https://github.com/babel/babel/pull/7555
   * Once we have the changes from that PR in Babel, and our core class fits reasonable in *one module*
   *   then we can use that language feature.
   */
  var privateProps = {
    promise: new WeakMap(),
    innerParams: new WeakMap(),
    domCache: new WeakMap()
  };

  const inputTypes = ['input', 'file', 'range', 'select', 'radio', 'checkbox', 'textarea'];
  const renderInput = (instance, params) => {
    const popup = getPopup();
    const innerParams = privateProps.innerParams.get(instance);
    const rerender = !innerParams || params.input !== innerParams.input;
    inputTypes.forEach(inputType => {
      const inputClass = swalClasses[inputType];
      const inputContainer = getChildByClass(popup, inputClass); // set attributes

      setAttributes(inputType, params.inputAttributes); // set class

      inputContainer.className = inputClass;

      if (rerender) {
        hide(inputContainer);
      }
    });

    if (params.input) {
      if (rerender) {
        showInput(params);
      } // set custom class


      setCustomClass(params);
    }
  };

  const showInput = params => {
    if (!renderInputType[params.input]) {
      return error("Unexpected type of input! Expected \"text\", \"email\", \"password\", \"number\", \"tel\", \"select\", \"radio\", \"checkbox\", \"textarea\", \"file\" or \"url\", got \"".concat(params.input, "\""));
    }

    const inputContainer = getInputContainer(params.input);
    const input = renderInputType[params.input](inputContainer, params);
    show(input); // input autofocus

    setTimeout(() => {
      focusInput(input);
    });
  };

  const removeAttributes = input => {
    for (let i = 0; i < input.attributes.length; i++) {
      const attrName = input.attributes[i].name;

      if (!['type', 'value', 'style'].includes(attrName)) {
        input.removeAttribute(attrName);
      }
    }
  };

  const setAttributes = (inputType, inputAttributes) => {
    const input = getInput(getPopup(), inputType);

    if (!input) {
      return;
    }

    removeAttributes(input);

    for (const attr in inputAttributes) {
      input.setAttribute(attr, inputAttributes[attr]);
    }
  };

  const setCustomClass = params => {
    const inputContainer = getInputContainer(params.input);

    if (params.customClass) {
      addClass(inputContainer, params.customClass.input);
    }
  };

  const setInputPlaceholder = (input, params) => {
    if (!input.placeholder || params.inputPlaceholder) {
      input.placeholder = params.inputPlaceholder;
    }
  };

  const setInputLabel = (input, prependTo, params) => {
    if (params.inputLabel) {
      input.id = swalClasses.input;
      const label = document.createElement('label');
      const labelClass = swalClasses['input-label'];
      label.setAttribute('for', input.id);
      label.className = labelClass;
      addClass(label, params.customClass.inputLabel);
      label.innerText = params.inputLabel;
      prependTo.insertAdjacentElement('beforebegin', label);
    }
  };

  const getInputContainer = inputType => {
    const inputClass = swalClasses[inputType] ? swalClasses[inputType] : swalClasses.input;
    return getChildByClass(getPopup(), inputClass);
  };

  const renderInputType = {};

  renderInputType.text = renderInputType.email = renderInputType.password = renderInputType.number = renderInputType.tel = renderInputType.url = (input, params) => {
    if (typeof params.inputValue === 'string' || typeof params.inputValue === 'number') {
      input.value = params.inputValue;
    } else if (!isPromise(params.inputValue)) {
      warn("Unexpected type of inputValue! Expected \"string\", \"number\" or \"Promise\", got \"".concat(typeof params.inputValue, "\""));
    }

    setInputLabel(input, input, params);
    setInputPlaceholder(input, params);
    input.type = params.input;
    return input;
  };

  renderInputType.file = (input, params) => {
    setInputLabel(input, input, params);
    setInputPlaceholder(input, params);
    return input;
  };

  renderInputType.range = (range, params) => {
    const rangeInput = range.querySelector('input');
    const rangeOutput = range.querySelector('output');
    rangeInput.value = params.inputValue;
    rangeInput.type = params.input;
    rangeOutput.value = params.inputValue;
    setInputLabel(rangeInput, range, params);
    return range;
  };

  renderInputType.select = (select, params) => {
    select.textContent = '';

    if (params.inputPlaceholder) {
      const placeholder = document.createElement('option');
      setInnerHtml(placeholder, params.inputPlaceholder);
      placeholder.value = '';
      placeholder.disabled = true;
      placeholder.selected = true;
      select.appendChild(placeholder);
    }

    setInputLabel(select, select, params);
    return select;
  };

  renderInputType.radio = radio => {
    radio.textContent = '';
    return radio;
  };

  renderInputType.checkbox = (checkboxContainer, params) => {
    const checkbox = getInput(getPopup(), 'checkbox');
    checkbox.value = 1;
    checkbox.id = swalClasses.checkbox;
    checkbox.checked = Boolean(params.inputValue);
    const label = checkboxContainer.querySelector('span');
    setInnerHtml(label, params.inputPlaceholder);
    return checkboxContainer;
  };

  renderInputType.textarea = (textarea, params) => {
    textarea.value = params.inputValue;
    setInputPlaceholder(textarea, params);
    setInputLabel(textarea, textarea, params);

    const getMargin = el => parseInt(window.getComputedStyle(el).marginLeft) + parseInt(window.getComputedStyle(el).marginRight);

    setTimeout(() => {
      // #2291
      if ('MutationObserver' in window) {
        // #1699
        const initialPopupWidth = parseInt(window.getComputedStyle(getPopup()).width);

        const textareaResizeHandler = () => {
          const textareaWidth = textarea.offsetWidth + getMargin(textarea);

          if (textareaWidth > initialPopupWidth) {
            getPopup().style.width = "".concat(textareaWidth, "px");
          } else {
            getPopup().style.width = null;
          }
        };

        new MutationObserver(textareaResizeHandler).observe(textarea, {
          attributes: true,
          attributeFilter: ['style']
        });
      }
    });
    return textarea;
  };

  const renderContent = (instance, params) => {
    const htmlContainer = getHtmlContainer();
    applyCustomClass(htmlContainer, params, 'htmlContainer'); // Content as HTML

    if (params.html) {
      parseHtmlToContainer(params.html, htmlContainer);
      show(htmlContainer, 'block'); // Content as plain text
    } else if (params.text) {
      htmlContainer.textContent = params.text;
      show(htmlContainer, 'block'); // No content
    } else {
      hide(htmlContainer);
    }

    renderInput(instance, params);
  };

  const renderFooter = (instance, params) => {
    const footer = getFooter();
    toggle(footer, params.footer);

    if (params.footer) {
      parseHtmlToContainer(params.footer, footer);
    } // Custom class


    applyCustomClass(footer, params, 'footer');
  };

  const renderCloseButton = (instance, params) => {
    const closeButton = getCloseButton();
    setInnerHtml(closeButton, params.closeButtonHtml); // Custom class

    applyCustomClass(closeButton, params, 'closeButton');
    toggle(closeButton, params.showCloseButton);
    closeButton.setAttribute('aria-label', params.closeButtonAriaLabel);
  };

  const renderIcon = (instance, params) => {
    const innerParams = privateProps.innerParams.get(instance);
    const icon = getIcon(); // if the given icon already rendered, apply the styling without re-rendering the icon

    if (innerParams && params.icon === innerParams.icon) {
      // Custom or default content
      setContent(icon, params);
      applyStyles(icon, params);
      return;
    }

    if (!params.icon && !params.iconHtml) {
      return hide(icon);
    }

    if (params.icon && Object.keys(iconTypes).indexOf(params.icon) === -1) {
      error("Unknown icon! Expected \"success\", \"error\", \"warning\", \"info\" or \"question\", got \"".concat(params.icon, "\""));
      return hide(icon);
    }

    show(icon); // Custom or default content

    setContent(icon, params);
    applyStyles(icon, params); // Animate icon

    addClass(icon, params.showClass.icon);
  };

  const applyStyles = (icon, params) => {
    for (const iconType in iconTypes) {
      if (params.icon !== iconType) {
        removeClass(icon, iconTypes[iconType]);
      }
    }

    addClass(icon, iconTypes[params.icon]); // Icon color

    setColor(icon, params); // Success icon background color

    adjustSuccessIconBackgoundColor(); // Custom class

    applyCustomClass(icon, params, 'icon');
  }; // Adjust success icon background color to match the popup background color


  const adjustSuccessIconBackgoundColor = () => {
    const popup = getPopup();
    const popupBackgroundColor = window.getComputedStyle(popup).getPropertyValue('background-color');
    const successIconParts = popup.querySelectorAll('[class^=swal2-success-circular-line], .swal2-success-fix');

    for (let i = 0; i < successIconParts.length; i++) {
      successIconParts[i].style.backgroundColor = popupBackgroundColor;
    }
  };

  const setContent = (icon, params) => {
    icon.textContent = '';

    if (params.iconHtml) {
      setInnerHtml(icon, iconContent(params.iconHtml));
    } else if (params.icon === 'success') {
      setInnerHtml(icon, "\n      <div class=\"swal2-success-circular-line-left\"></div>\n      <span class=\"swal2-success-line-tip\"></span> <span class=\"swal2-success-line-long\"></span>\n      <div class=\"swal2-success-ring\"></div> <div class=\"swal2-success-fix\"></div>\n      <div class=\"swal2-success-circular-line-right\"></div>\n    ");
    } else if (params.icon === 'error') {
      setInnerHtml(icon, "\n      <span class=\"swal2-x-mark\">\n        <span class=\"swal2-x-mark-line-left\"></span>\n        <span class=\"swal2-x-mark-line-right\"></span>\n      </span>\n    ");
    } else {
      const defaultIconHtml = {
        question: '?',
        warning: '!',
        info: 'i'
      };
      setInnerHtml(icon, iconContent(defaultIconHtml[params.icon]));
    }
  };

  const setColor = (icon, params) => {
    if (!params.iconColor) {
      return;
    }

    icon.style.color = params.iconColor;
    icon.style.borderColor = params.iconColor;

    for (const sel of ['.swal2-success-line-tip', '.swal2-success-line-long', '.swal2-x-mark-line-left', '.swal2-x-mark-line-right']) {
      setStyle(icon, sel, 'backgroundColor', params.iconColor);
    }

    setStyle(icon, '.swal2-success-ring', 'borderColor', params.iconColor);
  };

  const iconContent = content => "<div class=\"".concat(swalClasses['icon-content'], "\">").concat(content, "</div>");

  const renderImage = (instance, params) => {
    const image = getImage();

    if (!params.imageUrl) {
      return hide(image);
    }

    show(image, ''); // Src, alt

    image.setAttribute('src', params.imageUrl);
    image.setAttribute('alt', params.imageAlt); // Width, height

    applyNumericalStyle(image, 'width', params.imageWidth);
    applyNumericalStyle(image, 'height', params.imageHeight); // Class

    image.className = swalClasses.image;
    applyCustomClass(image, params, 'image');
  };

  const createStepElement = step => {
    const stepEl = document.createElement('li');
    addClass(stepEl, swalClasses['progress-step']);
    setInnerHtml(stepEl, step);
    return stepEl;
  };

  const createLineElement = params => {
    const lineEl = document.createElement('li');
    addClass(lineEl, swalClasses['progress-step-line']);

    if (params.progressStepsDistance) {
      lineEl.style.width = params.progressStepsDistance;
    }

    return lineEl;
  };

  const renderProgressSteps = (instance, params) => {
    const progressStepsContainer = getProgressSteps();

    if (!params.progressSteps || params.progressSteps.length === 0) {
      return hide(progressStepsContainer);
    }

    show(progressStepsContainer);
    progressStepsContainer.textContent = '';

    if (params.currentProgressStep >= params.progressSteps.length) {
      warn('Invalid currentProgressStep parameter, it should be less than progressSteps.length ' + '(currentProgressStep like JS arrays starts from 0)');
    }

    params.progressSteps.forEach((step, index) => {
      const stepEl = createStepElement(step);
      progressStepsContainer.appendChild(stepEl);

      if (index === params.currentProgressStep) {
        addClass(stepEl, swalClasses['active-progress-step']);
      }

      if (index !== params.progressSteps.length - 1) {
        const lineEl = createLineElement(params);
        progressStepsContainer.appendChild(lineEl);
      }
    });
  };

  const renderTitle = (instance, params) => {
    const title = getTitle();
    toggle(title, params.title || params.titleText, 'block');

    if (params.title) {
      parseHtmlToContainer(params.title, title);
    }

    if (params.titleText) {
      title.innerText = params.titleText;
    } // Custom class


    applyCustomClass(title, params, 'title');
  };

  const renderPopup = (instance, params) => {
    const container = getContainer();
    const popup = getPopup(); // Width

    if (params.toast) {
      // #2170
      applyNumericalStyle(container, 'width', params.width);
      popup.style.width = '100%';
      popup.insertBefore(getLoader(), getIcon());
    } else {
      applyNumericalStyle(popup, 'width', params.width);
    } // Padding


    applyNumericalStyle(popup, 'padding', params.padding); // Background

    if (params.background) {
      popup.style.background = params.background;
    }

    hide(getValidationMessage()); // Classes

    addClasses(popup, params);
  };

  const addClasses = (popup, params) => {
    // Default Class + showClass when updating Swal.update({})
    popup.className = "".concat(swalClasses.popup, " ").concat(isVisible(popup) ? params.showClass.popup : '');

    if (params.toast) {
      addClass([document.documentElement, document.body], swalClasses['toast-shown']);
      addClass(popup, swalClasses.toast);
    } else {
      addClass(popup, swalClasses.modal);
    } // Custom class


    applyCustomClass(popup, params, 'popup');

    if (typeof params.customClass === 'string') {
      addClass(popup, params.customClass);
    } // Icon class (#1842)


    if (params.icon) {
      addClass(popup, swalClasses["icon-".concat(params.icon)]);
    }
  };

  const render = (instance, params) => {
    renderPopup(instance, params);
    renderContainer(instance, params);
    renderProgressSteps(instance, params);
    renderIcon(instance, params);
    renderImage(instance, params);
    renderTitle(instance, params);
    renderCloseButton(instance, params);
    renderContent(instance, params);
    renderActions(instance, params);
    renderFooter(instance, params);

    if (typeof params.didRender === 'function') {
      params.didRender(getPopup());
    }
  };

  /*
   * Global function to determine if SweetAlert2 popup is shown
   */

  const isVisible$1 = () => {
    return isVisible(getPopup());
  };
  /*
   * Global function to click 'Confirm' button
   */

  const clickConfirm = () => getConfirmButton() && getConfirmButton().click();
  /*
   * Global function to click 'Deny' button
   */

  const clickDeny = () => getDenyButton() && getDenyButton().click();
  /*
   * Global function to click 'Cancel' button
   */

  const clickCancel = () => getCancelButton() && getCancelButton().click();

  function fire(...args) {
    const Swal = this;
    return new Swal(...args);
  }

  /**
   * Returns an extended version of `Swal` containing `params` as defaults.
   * Useful for reusing Swal configuration.
   *
   * For example:
   *
   * Before:
   * const textPromptOptions = { input: 'text', showCancelButton: true }
   * const {value: firstName} = await Swal.fire({ ...textPromptOptions, title: 'What is your first name?' })
   * const {value: lastName} = await Swal.fire({ ...textPromptOptions, title: 'What is your last name?' })
   *
   * After:
   * const TextPrompt = Swal.mixin({ input: 'text', showCancelButton: true })
   * const {value: firstName} = await TextPrompt('What is your first name?')
   * const {value: lastName} = await TextPrompt('What is your last name?')
   *
   * @param mixinParams
   */
  function mixin(mixinParams) {
    class MixinSwal extends this {
      _main(params, priorityMixinParams) {
        return super._main(params, Object.assign({}, mixinParams, priorityMixinParams));
      }

    }

    return MixinSwal;
  }

  /**
   * Shows loader (spinner), this is useful with AJAX requests.
   * By default the loader be shown instead of the "Confirm" button.
   */

  const showLoading = buttonToReplace => {
    let popup = getPopup();

    if (!popup) {
      Swal.fire();
    }

    popup = getPopup();
    const loader = getLoader();

    if (isToast()) {
      hide(getIcon());
    } else {
      replaceButton(popup, buttonToReplace);
    }

    show(loader);
    popup.setAttribute('data-loading', true);
    popup.setAttribute('aria-busy', true);
    popup.focus();
  };

  const replaceButton = (popup, buttonToReplace) => {
    const actions = getActions();
    const loader = getLoader();

    if (!buttonToReplace && isVisible(getConfirmButton())) {
      buttonToReplace = getConfirmButton();
    }

    show(actions);

    if (buttonToReplace) {
      hide(buttonToReplace);
      loader.setAttribute('data-button-to-replace', buttonToReplace.className);
    }

    loader.parentNode.insertBefore(loader, buttonToReplace);
    addClass([popup, actions], swalClasses.loading);
  };

  const RESTORE_FOCUS_TIMEOUT = 100;

  const globalState = {};

  const focusPreviousActiveElement = () => {
    if (globalState.previousActiveElement && globalState.previousActiveElement.focus) {
      globalState.previousActiveElement.focus();
      globalState.previousActiveElement = null;
    } else if (document.body) {
      document.body.focus();
    }
  }; // Restore previous active (focused) element


  const restoreActiveElement = returnFocus => {
    return new Promise(resolve => {
      if (!returnFocus) {
        return resolve();
      }

      const x = window.scrollX;
      const y = window.scrollY;
      globalState.restoreFocusTimeout = setTimeout(() => {
        focusPreviousActiveElement();
        resolve();
      }, RESTORE_FOCUS_TIMEOUT); // issues/900

      window.scrollTo(x, y);
    });
  };

  /**
   * If `timer` parameter is set, returns number of milliseconds of timer remained.
   * Otherwise, returns undefined.
   */

  const getTimerLeft = () => {
    return globalState.timeout && globalState.timeout.getTimerLeft();
  };
  /**
   * Stop timer. Returns number of milliseconds of timer remained.
   * If `timer` parameter isn't set, returns undefined.
   */

  const stopTimer = () => {
    if (globalState.timeout) {
      stopTimerProgressBar();
      return globalState.timeout.stop();
    }
  };
  /**
   * Resume timer. Returns number of milliseconds of timer remained.
   * If `timer` parameter isn't set, returns undefined.
   */

  const resumeTimer = () => {
    if (globalState.timeout) {
      const remaining = globalState.timeout.start();
      animateTimerProgressBar(remaining);
      return remaining;
    }
  };
  /**
   * Resume timer. Returns number of milliseconds of timer remained.
   * If `timer` parameter isn't set, returns undefined.
   */

  const toggleTimer = () => {
    const timer = globalState.timeout;
    return timer && (timer.running ? stopTimer() : resumeTimer());
  };
  /**
   * Increase timer. Returns number of milliseconds of an updated timer.
   * If `timer` parameter isn't set, returns undefined.
   */

  const increaseTimer = n => {
    if (globalState.timeout) {
      const remaining = globalState.timeout.increase(n);
      animateTimerProgressBar(remaining, true);
      return remaining;
    }
  };
  /**
   * Check if timer is running. Returns true if timer is running
   * or false if timer is paused or stopped.
   * If `timer` parameter isn't set, returns undefined
   */

  const isTimerRunning = () => {
    return globalState.timeout && globalState.timeout.isRunning();
  };

  let bodyClickListenerAdded = false;
  const clickHandlers = {};
  function bindClickHandler(attr = 'data-swal-template') {
    clickHandlers[attr] = this;

    if (!bodyClickListenerAdded) {
      document.body.addEventListener('click', bodyClickListener);
      bodyClickListenerAdded = true;
    }
  }

  const bodyClickListener = event => {
    for (let el = event.target; el && el !== document; el = el.parentNode) {
      for (const attr in clickHandlers) {
        const template = el.getAttribute(attr);

        if (template) {
          clickHandlers[attr].fire({
            template
          });
          return;
        }
      }
    }
  };

  const defaultParams = {
    title: '',
    titleText: '',
    text: '',
    html: '',
    footer: '',
    icon: undefined,
    iconColor: undefined,
    iconHtml: undefined,
    template: undefined,
    toast: false,
    showClass: {
      popup: 'swal2-show',
      backdrop: 'swal2-backdrop-show',
      icon: 'swal2-icon-show'
    },
    hideClass: {
      popup: 'swal2-hide',
      backdrop: 'swal2-backdrop-hide',
      icon: 'swal2-icon-hide'
    },
    customClass: {},
    target: 'body',
    backdrop: true,
    heightAuto: true,
    allowOutsideClick: true,
    allowEscapeKey: true,
    allowEnterKey: true,
    stopKeydownPropagation: true,
    keydownListenerCapture: false,
    showConfirmButton: true,
    showDenyButton: false,
    showCancelButton: false,
    preConfirm: undefined,
    preDeny: undefined,
    confirmButtonText: 'OK',
    confirmButtonAriaLabel: '',
    confirmButtonColor: undefined,
    denyButtonText: 'No',
    denyButtonAriaLabel: '',
    denyButtonColor: undefined,
    cancelButtonText: 'Cancel',
    cancelButtonAriaLabel: '',
    cancelButtonColor: undefined,
    buttonsStyling: true,
    reverseButtons: false,
    focusConfirm: true,
    focusDeny: false,
    focusCancel: false,
    returnFocus: true,
    showCloseButton: false,
    closeButtonHtml: '&times;',
    closeButtonAriaLabel: 'Close this dialog',
    loaderHtml: '',
    showLoaderOnConfirm: false,
    showLoaderOnDeny: false,
    imageUrl: undefined,
    imageWidth: undefined,
    imageHeight: undefined,
    imageAlt: '',
    timer: undefined,
    timerProgressBar: false,
    width: undefined,
    padding: undefined,
    background: undefined,
    input: undefined,
    inputPlaceholder: '',
    inputLabel: '',
    inputValue: '',
    inputOptions: {},
    inputAutoTrim: true,
    inputAttributes: {},
    inputValidator: undefined,
    returnInputValueOnDeny: false,
    validationMessage: undefined,
    grow: false,
    position: 'center',
    progressSteps: [],
    currentProgressStep: undefined,
    progressStepsDistance: undefined,
    willOpen: undefined,
    didOpen: undefined,
    didRender: undefined,
    willClose: undefined,
    didClose: undefined,
    didDestroy: undefined,
    scrollbarPadding: true
  };
  const updatableParams = ['allowEscapeKey', 'allowOutsideClick', 'background', 'buttonsStyling', 'cancelButtonAriaLabel', 'cancelButtonColor', 'cancelButtonText', 'closeButtonAriaLabel', 'closeButtonHtml', 'confirmButtonAriaLabel', 'confirmButtonColor', 'confirmButtonText', 'currentProgressStep', 'customClass', 'denyButtonAriaLabel', 'denyButtonColor', 'denyButtonText', 'didClose', 'didDestroy', 'footer', 'hideClass', 'html', 'icon', 'iconColor', 'iconHtml', 'imageAlt', 'imageHeight', 'imageUrl', 'imageWidth', 'preConfirm', 'preDeny', 'progressSteps', 'returnFocus', 'reverseButtons', 'showCancelButton', 'showCloseButton', 'showConfirmButton', 'showDenyButton', 'text', 'title', 'titleText', 'willClose'];
  const deprecatedParams = {};
  const toastIncompatibleParams = ['allowOutsideClick', 'allowEnterKey', 'backdrop', 'focusConfirm', 'focusDeny', 'focusCancel', 'returnFocus', 'heightAuto', 'keydownListenerCapture'];
  /**
   * Is valid parameter
   * @param {String} paramName
   */

  const isValidParameter = paramName => {
    return Object.prototype.hasOwnProperty.call(defaultParams, paramName);
  };
  /**
   * Is valid parameter for Swal.update() method
   * @param {String} paramName
   */

  const isUpdatableParameter = paramName => {
    return updatableParams.indexOf(paramName) !== -1;
  };
  /**
   * Is deprecated parameter
   * @param {String} paramName
   */

  const isDeprecatedParameter = paramName => {
    return deprecatedParams[paramName];
  };

  const checkIfParamIsValid = param => {
    if (!isValidParameter(param)) {
      warn("Unknown parameter \"".concat(param, "\""));
    }
  };

  const checkIfToastParamIsValid = param => {
    if (toastIncompatibleParams.includes(param)) {
      warn("The parameter \"".concat(param, "\" is incompatible with toasts"));
    }
  };

  const checkIfParamIsDeprecated = param => {
    if (isDeprecatedParameter(param)) {
      warnAboutDeprecation(param, isDeprecatedParameter(param));
    }
  };
  /**
   * Show relevant warnings for given params
   *
   * @param params
   */


  const showWarningsForParams = params => {
    if (!params.backdrop && params.allowOutsideClick) {
      warn('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`');
    }

    for (const param in params) {
      checkIfParamIsValid(param);

      if (params.toast) {
        checkIfToastParamIsValid(param);
      }

      checkIfParamIsDeprecated(param);
    }
  };



  var staticMethods = /*#__PURE__*/Object.freeze({
    isValidParameter: isValidParameter,
    isUpdatableParameter: isUpdatableParameter,
    isDeprecatedParameter: isDeprecatedParameter,
    argsToParams: argsToParams,
    isVisible: isVisible$1,
    clickConfirm: clickConfirm,
    clickDeny: clickDeny,
    clickCancel: clickCancel,
    getContainer: getContainer,
    getPopup: getPopup,
    getTitle: getTitle,
    getHtmlContainer: getHtmlContainer,
    getImage: getImage,
    getIcon: getIcon,
    getInputLabel: getInputLabel,
    getCloseButton: getCloseButton,
    getActions: getActions,
    getConfirmButton: getConfirmButton,
    getDenyButton: getDenyButton,
    getCancelButton: getCancelButton,
    getLoader: getLoader,
    getFooter: getFooter,
    getTimerProgressBar: getTimerProgressBar,
    getFocusableElements: getFocusableElements,
    getValidationMessage: getValidationMessage,
    isLoading: isLoading,
    fire: fire,
    mixin: mixin,
    showLoading: showLoading,
    enableLoading: showLoading,
    getTimerLeft: getTimerLeft,
    stopTimer: stopTimer,
    resumeTimer: resumeTimer,
    toggleTimer: toggleTimer,
    increaseTimer: increaseTimer,
    isTimerRunning: isTimerRunning,
    bindClickHandler: bindClickHandler
  });

  /**
   * Hides loader and shows back the button which was hidden by .showLoading()
   */

  function hideLoading() {
    // do nothing if popup is closed
    const innerParams = privateProps.innerParams.get(this);

    if (!innerParams) {
      return;
    }

    const domCache = privateProps.domCache.get(this);
    hide(domCache.loader);

    if (isToast()) {
      if (innerParams.icon) {
        show(getIcon());
      }
    } else {
      showRelatedButton(domCache);
    }

    removeClass([domCache.popup, domCache.actions], swalClasses.loading);
    domCache.popup.removeAttribute('aria-busy');
    domCache.popup.removeAttribute('data-loading');
    domCache.confirmButton.disabled = false;
    domCache.denyButton.disabled = false;
    domCache.cancelButton.disabled = false;
  }

  const showRelatedButton = domCache => {
    const buttonToReplace = domCache.popup.getElementsByClassName(domCache.loader.getAttribute('data-button-to-replace'));

    if (buttonToReplace.length) {
      show(buttonToReplace[0], 'inline-block');
    } else if (allButtonsAreHidden()) {
      hide(domCache.actions);
    }
  };

  function getInput$1(instance) {
    const innerParams = privateProps.innerParams.get(instance || this);
    const domCache = privateProps.domCache.get(instance || this);

    if (!domCache) {
      return null;
    }

    return getInput(domCache.popup, innerParams.input);
  }

  const fixScrollbar = () => {
    // for queues, do not do this more than once
    if (states.previousBodyPadding !== null) {
      return;
    } // if the body has overflow


    if (document.body.scrollHeight > window.innerHeight) {
      // add padding so the content doesn't shift after removal of scrollbar
      states.previousBodyPadding = parseInt(window.getComputedStyle(document.body).getPropertyValue('padding-right'));
      document.body.style.paddingRight = "".concat(states.previousBodyPadding + measureScrollbar(), "px");
    }
  };
  const undoScrollbar = () => {
    if (states.previousBodyPadding !== null) {
      document.body.style.paddingRight = "".concat(states.previousBodyPadding, "px");
      states.previousBodyPadding = null;
    }
  };

  /* istanbul ignore file */

  const iOSfix = () => {
    const iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream || navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1;

    if (iOS && !hasClass(document.body, swalClasses.iosfix)) {
      const offset = document.body.scrollTop;
      document.body.style.top = "".concat(offset * -1, "px");
      addClass(document.body, swalClasses.iosfix);
      lockBodyScroll();
      addBottomPaddingForTallPopups(); // #1948
    }
  };

  const addBottomPaddingForTallPopups = () => {
    const safari = !navigator.userAgent.match(/(CriOS|FxiOS|EdgiOS|YaBrowser|UCBrowser)/i);

    if (safari) {
      const bottomPanelHeight = 44;

      if (getPopup().scrollHeight > window.innerHeight - bottomPanelHeight) {
        getContainer().style.paddingBottom = "".concat(bottomPanelHeight, "px");
      }
    }
  };

  const lockBodyScroll = () => {
    // #1246
    const container = getContainer();
    let preventTouchMove;

    container.ontouchstart = e => {
      preventTouchMove = shouldPreventTouchMove(e);
    };

    container.ontouchmove = e => {
      if (preventTouchMove) {
        e.preventDefault();
        e.stopPropagation();
      }
    };
  };

  const shouldPreventTouchMove = event => {
    const target = event.target;
    const container = getContainer();

    if (isStylys(event) || isZoom(event)) {
      return false;
    }

    if (target === container) {
      return true;
    }

    if (!isScrollable(container) && target.tagName !== 'INPUT' && // #1603
    target.tagName !== 'TEXTAREA' && // #2266
    !(isScrollable(getHtmlContainer()) && // #1944
    getHtmlContainer().contains(target))) {
      return true;
    }

    return false;
  };

  const isStylys = event => {
    // #1786
    return event.touches && event.touches.length && event.touches[0].touchType === 'stylus';
  };

  const isZoom = event => {
    // #1891
    return event.touches && event.touches.length > 1;
  };

  const undoIOSfix = () => {
    if (hasClass(document.body, swalClasses.iosfix)) {
      const offset = parseInt(document.body.style.top, 10);
      removeClass(document.body, swalClasses.iosfix);
      document.body.style.top = '';
      document.body.scrollTop = offset * -1;
    }
  };

  // Adding aria-hidden="true" to elements outside of the active modal dialog ensures that
  // elements not within the active modal dialog will not be surfaced if a user opens a screen
  // reader’s list of elements (headings, form controls, landmarks, etc.) in the document.

  const setAriaHidden = () => {
    const bodyChildren = toArray(document.body.children);
    bodyChildren.forEach(el => {
      if (el === getContainer() || el.contains(getContainer())) {
        return;
      }

      if (el.hasAttribute('aria-hidden')) {
        el.setAttribute('data-previous-aria-hidden', el.getAttribute('aria-hidden'));
      }

      el.setAttribute('aria-hidden', 'true');
    });
  };
  const unsetAriaHidden = () => {
    const bodyChildren = toArray(document.body.children);
    bodyChildren.forEach(el => {
      if (el.hasAttribute('data-previous-aria-hidden')) {
        el.setAttribute('aria-hidden', el.getAttribute('data-previous-aria-hidden'));
        el.removeAttribute('data-previous-aria-hidden');
      } else {
        el.removeAttribute('aria-hidden');
      }
    });
  };

  /**
   * This module containts `WeakMap`s for each effectively-"private  property" that a `Swal` has.
   * For example, to set the private property "foo" of `this` to "bar", you can `privateProps.foo.set(this, 'bar')`
   * This is the approach that Babel will probably take to implement private methods/fields
   *   https://github.com/tc39/proposal-private-methods
   *   https://github.com/babel/babel/pull/7555
   * Once we have the changes from that PR in Babel, and our core class fits reasonable in *one module*
   *   then we can use that language feature.
   */
  var privateMethods = {
    swalPromiseResolve: new WeakMap()
  };

  /*
   * Instance method to close sweetAlert
   */

  function removePopupAndResetState(instance, container, returnFocus, didClose) {
    if (isToast()) {
      triggerDidCloseAndDispose(instance, didClose);
    } else {
      restoreActiveElement(returnFocus).then(() => triggerDidCloseAndDispose(instance, didClose));
      globalState.keydownTarget.removeEventListener('keydown', globalState.keydownHandler, {
        capture: globalState.keydownListenerCapture
      });
      globalState.keydownHandlerAdded = false;
    }

    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent); // workaround for #2088
    // for some reason removing the container in Safari will scroll the document to bottom

    if (isSafari) {
      container.setAttribute('style', 'display:none !important');
      container.removeAttribute('class');
      container.innerHTML = '';
    } else {
      container.remove();
    }

    if (isModal()) {
      undoScrollbar();
      undoIOSfix();
      unsetAriaHidden();
    }

    removeBodyClasses();
  }

  function removeBodyClasses() {
    removeClass([document.documentElement, document.body], [swalClasses.shown, swalClasses['height-auto'], swalClasses['no-backdrop'], swalClasses['toast-shown']]);
  }

  function close(resolveValue) {
    const popup = getPopup();

    if (!popup) {
      return;
    }

    resolveValue = prepareResolveValue(resolveValue);
    const innerParams = privateProps.innerParams.get(this);

    if (!innerParams || hasClass(popup, innerParams.hideClass.popup)) {
      return;
    }

    const swalPromiseResolve = privateMethods.swalPromiseResolve.get(this);
    removeClass(popup, innerParams.showClass.popup);
    addClass(popup, innerParams.hideClass.popup);
    const backdrop = getContainer();
    removeClass(backdrop, innerParams.showClass.backdrop);
    addClass(backdrop, innerParams.hideClass.backdrop);
    handlePopupAnimation(this, popup, innerParams); // Resolve Swal promise

    swalPromiseResolve(resolveValue);
  }

  const prepareResolveValue = resolveValue => {
    // When user calls Swal.close()
    if (typeof resolveValue === 'undefined') {
      return {
        isConfirmed: false,
        isDenied: false,
        isDismissed: true
      };
    }

    return Object.assign({
      isConfirmed: false,
      isDenied: false,
      isDismissed: false
    }, resolveValue);
  };

  const handlePopupAnimation = (instance, popup, innerParams) => {
    const container = getContainer(); // If animation is supported, animate

    const animationIsSupported = animationEndEvent && hasCssAnimation(popup);

    if (typeof innerParams.willClose === 'function') {
      innerParams.willClose(popup);
    }

    if (animationIsSupported) {
      animatePopup(instance, popup, container, innerParams.returnFocus, innerParams.didClose);
    } else {
      // Otherwise, remove immediately
      removePopupAndResetState(instance, container, innerParams.returnFocus, innerParams.didClose);
    }
  };

  const animatePopup = (instance, popup, container, returnFocus, didClose) => {
    globalState.swalCloseEventFinishedCallback = removePopupAndResetState.bind(null, instance, container, returnFocus, didClose);
    popup.addEventListener(animationEndEvent, function (e) {
      if (e.target === popup) {
        globalState.swalCloseEventFinishedCallback();
        delete globalState.swalCloseEventFinishedCallback;
      }
    });
  };

  const triggerDidCloseAndDispose = (instance, didClose) => {
    setTimeout(() => {
      if (typeof didClose === 'function') {
        didClose.bind(instance.params)();
      }

      instance._destroy();
    });
  };

  function setButtonsDisabled(instance, buttons, disabled) {
    const domCache = privateProps.domCache.get(instance);
    buttons.forEach(button => {
      domCache[button].disabled = disabled;
    });
  }

  function setInputDisabled(input, disabled) {
    if (!input) {
      return false;
    }

    if (input.type === 'radio') {
      const radiosContainer = input.parentNode.parentNode;
      const radios = radiosContainer.querySelectorAll('input');

      for (let i = 0; i < radios.length; i++) {
        radios[i].disabled = disabled;
      }
    } else {
      input.disabled = disabled;
    }
  }

  function enableButtons() {
    setButtonsDisabled(this, ['confirmButton', 'denyButton', 'cancelButton'], false);
  }
  function disableButtons() {
    setButtonsDisabled(this, ['confirmButton', 'denyButton', 'cancelButton'], true);
  }
  function enableInput() {
    return setInputDisabled(this.getInput(), false);
  }
  function disableInput() {
    return setInputDisabled(this.getInput(), true);
  }

  function showValidationMessage(error) {
    const domCache = privateProps.domCache.get(this);
    const params = privateProps.innerParams.get(this);
    setInnerHtml(domCache.validationMessage, error);
    domCache.validationMessage.className = swalClasses['validation-message'];

    if (params.customClass && params.customClass.validationMessage) {
      addClass(domCache.validationMessage, params.customClass.validationMessage);
    }

    show(domCache.validationMessage);
    const input = this.getInput();

    if (input) {
      input.setAttribute('aria-invalid', true);
      input.setAttribute('aria-describedby', swalClasses['validation-message']);
      focusInput(input);
      addClass(input, swalClasses.inputerror);
    }
  } // Hide block with validation message

  function resetValidationMessage$1() {
    const domCache = privateProps.domCache.get(this);

    if (domCache.validationMessage) {
      hide(domCache.validationMessage);
    }

    const input = this.getInput();

    if (input) {
      input.removeAttribute('aria-invalid');
      input.removeAttribute('aria-describedby');
      removeClass(input, swalClasses.inputerror);
    }
  }

  function getProgressSteps$1() {
    const domCache = privateProps.domCache.get(this);
    return domCache.progressSteps;
  }

  class Timer {
    constructor(callback, delay) {
      this.callback = callback;
      this.remaining = delay;
      this.running = false;
      this.start();
    }

    start() {
      if (!this.running) {
        this.running = true;
        this.started = new Date();
        this.id = setTimeout(this.callback, this.remaining);
      }

      return this.remaining;
    }

    stop() {
      if (this.running) {
        this.running = false;
        clearTimeout(this.id);
        this.remaining -= new Date() - this.started;
      }

      return this.remaining;
    }

    increase(n) {
      const running = this.running;

      if (running) {
        this.stop();
      }

      this.remaining += n;

      if (running) {
        this.start();
      }

      return this.remaining;
    }

    getTimerLeft() {
      if (this.running) {
        this.stop();
        this.start();
      }

      return this.remaining;
    }

    isRunning() {
      return this.running;
    }

  }

  var defaultInputValidators = {
    email: (string, validationMessage) => {
      return /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(string) ? Promise.resolve() : Promise.resolve(validationMessage || 'Invalid email address');
    },
    url: (string, validationMessage) => {
      // taken from https://stackoverflow.com/a/3809435 with a small change from #1306 and #2013
      return /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(string) ? Promise.resolve() : Promise.resolve(validationMessage || 'Invalid URL');
    }
  };

  function setDefaultInputValidators(params) {
    // Use default `inputValidator` for supported input types if not provided
    if (!params.inputValidator) {
      Object.keys(defaultInputValidators).forEach(key => {
        if (params.input === key) {
          params.inputValidator = defaultInputValidators[key];
        }
      });
    }
  }

  function validateCustomTargetElement(params) {
    // Determine if the custom target element is valid
    if (!params.target || typeof params.target === 'string' && !document.querySelector(params.target) || typeof params.target !== 'string' && !params.target.appendChild) {
      warn('Target parameter is not valid, defaulting to "body"');
      params.target = 'body';
    }
  }
  /**
   * Set type, text and actions on popup
   *
   * @param params
   * @returns {boolean}
   */


  function setParameters(params) {
    setDefaultInputValidators(params); // showLoaderOnConfirm && preConfirm

    if (params.showLoaderOnConfirm && !params.preConfirm) {
      warn('showLoaderOnConfirm is set to true, but preConfirm is not defined.\n' + 'showLoaderOnConfirm should be used together with preConfirm, see usage example:\n' + 'https://sweetalert2.github.io/#ajax-request');
    }

    validateCustomTargetElement(params); // Replace newlines with <br> in title

    if (typeof params.title === 'string') {
      params.title = params.title.split('\n').join('<br />');
    }

    init(params);
  }

  const swalStringParams = ['swal-title', 'swal-html', 'swal-footer'];
  const getTemplateParams = params => {
    const template = typeof params.template === 'string' ? document.querySelector(params.template) : params.template;

    if (!template) {
      return {};
    }

    const templateContent = template.content;
    showWarningsForElements(templateContent);
    const result = Object.assign(getSwalParams(templateContent), getSwalButtons(templateContent), getSwalImage(templateContent), getSwalIcon(templateContent), getSwalInput(templateContent), getSwalStringParams(templateContent, swalStringParams));
    return result;
  };

  const getSwalParams = templateContent => {
    const result = {};
    toArray(templateContent.querySelectorAll('swal-param')).forEach(param => {
      showWarningsForAttributes(param, ['name', 'value']);
      const paramName = param.getAttribute('name');
      let value = param.getAttribute('value');

      if (typeof defaultParams[paramName] === 'boolean' && value === 'false') {
        value = false;
      }

      if (typeof defaultParams[paramName] === 'object') {
        value = JSON.parse(value);
      }

      result[paramName] = value;
    });
    return result;
  };

  const getSwalButtons = templateContent => {
    const result = {};
    toArray(templateContent.querySelectorAll('swal-button')).forEach(button => {
      showWarningsForAttributes(button, ['type', 'color', 'aria-label']);
      const type = button.getAttribute('type');
      result["".concat(type, "ButtonText")] = button.innerHTML;
      result["show".concat(capitalizeFirstLetter(type), "Button")] = true;

      if (button.hasAttribute('color')) {
        result["".concat(type, "ButtonColor")] = button.getAttribute('color');
      }

      if (button.hasAttribute('aria-label')) {
        result["".concat(type, "ButtonAriaLabel")] = button.getAttribute('aria-label');
      }
    });
    return result;
  };

  const getSwalImage = templateContent => {
    const result = {};
    const image = templateContent.querySelector('swal-image');

    if (image) {
      showWarningsForAttributes(image, ['src', 'width', 'height', 'alt']);

      if (image.hasAttribute('src')) {
        result.imageUrl = image.getAttribute('src');
      }

      if (image.hasAttribute('width')) {
        result.imageWidth = image.getAttribute('width');
      }

      if (image.hasAttribute('height')) {
        result.imageHeight = image.getAttribute('height');
      }

      if (image.hasAttribute('alt')) {
        result.imageAlt = image.getAttribute('alt');
      }
    }

    return result;
  };

  const getSwalIcon = templateContent => {
    const result = {};
    const icon = templateContent.querySelector('swal-icon');

    if (icon) {
      showWarningsForAttributes(icon, ['type', 'color']);

      if (icon.hasAttribute('type')) {
        result.icon = icon.getAttribute('type');
      }

      if (icon.hasAttribute('color')) {
        result.iconColor = icon.getAttribute('color');
      }

      result.iconHtml = icon.innerHTML;
    }

    return result;
  };

  const getSwalInput = templateContent => {
    const result = {};
    const input = templateContent.querySelector('swal-input');

    if (input) {
      showWarningsForAttributes(input, ['type', 'label', 'placeholder', 'value']);
      result.input = input.getAttribute('type') || 'text';

      if (input.hasAttribute('label')) {
        result.inputLabel = input.getAttribute('label');
      }

      if (input.hasAttribute('placeholder')) {
        result.inputPlaceholder = input.getAttribute('placeholder');
      }

      if (input.hasAttribute('value')) {
        result.inputValue = input.getAttribute('value');
      }
    }

    const inputOptions = templateContent.querySelectorAll('swal-input-option');

    if (inputOptions.length) {
      result.inputOptions = {};
      toArray(inputOptions).forEach(option => {
        showWarningsForAttributes(option, ['value']);
        const optionValue = option.getAttribute('value');
        const optionName = option.innerHTML;
        result.inputOptions[optionValue] = optionName;
      });
    }

    return result;
  };

  const getSwalStringParams = (templateContent, paramNames) => {
    const result = {};

    for (const i in paramNames) {
      const paramName = paramNames[i];
      const tag = templateContent.querySelector(paramName);

      if (tag) {
        showWarningsForAttributes(tag, []);
        result[paramName.replace(/^swal-/, '')] = tag.innerHTML.trim();
      }
    }

    return result;
  };

  const showWarningsForElements = template => {
    const allowedElements = swalStringParams.concat(['swal-param', 'swal-button', 'swal-image', 'swal-icon', 'swal-input', 'swal-input-option']);
    toArray(template.children).forEach(el => {
      const tagName = el.tagName.toLowerCase();

      if (allowedElements.indexOf(tagName) === -1) {
        warn("Unrecognized element <".concat(tagName, ">"));
      }
    });
  };

  const showWarningsForAttributes = (el, allowedAttributes) => {
    toArray(el.attributes).forEach(attribute => {
      if (allowedAttributes.indexOf(attribute.name) === -1) {
        warn(["Unrecognized attribute \"".concat(attribute.name, "\" on <").concat(el.tagName.toLowerCase(), ">."), "".concat(allowedAttributes.length ? "Allowed attributes are: ".concat(allowedAttributes.join(', ')) : 'To set the value, use HTML within the element.')]);
      }
    });
  };

  const SHOW_CLASS_TIMEOUT = 10;
  /**
   * Open popup, add necessary classes and styles, fix scrollbar
   *
   * @param params
   */

  const openPopup = params => {
    const container = getContainer();
    const popup = getPopup();

    if (typeof params.willOpen === 'function') {
      params.willOpen(popup);
    }

    const bodyStyles = window.getComputedStyle(document.body);
    const initialBodyOverflow = bodyStyles.overflowY;
    addClasses$1(container, popup, params); // scrolling is 'hidden' until animation is done, after that 'auto'

    setTimeout(() => {
      setScrollingVisibility(container, popup);
    }, SHOW_CLASS_TIMEOUT);

    if (isModal()) {
      fixScrollContainer(container, params.scrollbarPadding, initialBodyOverflow);
      setAriaHidden();
    }

    if (!isToast() && !globalState.previousActiveElement) {
      globalState.previousActiveElement = document.activeElement;
    }

    if (typeof params.didOpen === 'function') {
      setTimeout(() => params.didOpen(popup));
    }

    removeClass(container, swalClasses['no-transition']);
  };

  const swalOpenAnimationFinished = event => {
    const popup = getPopup();

    if (event.target !== popup) {
      return;
    }

    const container = getContainer();
    popup.removeEventListener(animationEndEvent, swalOpenAnimationFinished);
    container.style.overflowY = 'auto';
  };

  const setScrollingVisibility = (container, popup) => {
    if (animationEndEvent && hasCssAnimation(popup)) {
      container.style.overflowY = 'hidden';
      popup.addEventListener(animationEndEvent, swalOpenAnimationFinished);
    } else {
      container.style.overflowY = 'auto';
    }
  };

  const fixScrollContainer = (container, scrollbarPadding, initialBodyOverflow) => {
    iOSfix();

    if (scrollbarPadding && initialBodyOverflow !== 'hidden') {
      fixScrollbar();
    } // sweetalert2/issues/1247


    setTimeout(() => {
      container.scrollTop = 0;
    });
  };

  const addClasses$1 = (container, popup, params) => {
    addClass(container, params.showClass.backdrop); // the workaround with setting/unsetting opacity is needed for #2019 and 2059

    popup.style.setProperty('opacity', '0', 'important');
    show(popup, 'grid');
    setTimeout(() => {
      // Animate popup right after showing it
      addClass(popup, params.showClass.popup); // and remove the opacity workaround

      popup.style.removeProperty('opacity');
    }, SHOW_CLASS_TIMEOUT); // 10ms in order to fix #2062

    addClass([document.documentElement, document.body], swalClasses.shown);

    if (params.heightAuto && params.backdrop && !params.toast) {
      addClass([document.documentElement, document.body], swalClasses['height-auto']);
    }
  };

  const handleInputOptionsAndValue = (instance, params) => {
    if (params.input === 'select' || params.input === 'radio') {
      handleInputOptions(instance, params);
    } else if (['text', 'email', 'number', 'tel', 'textarea'].includes(params.input) && (hasToPromiseFn(params.inputValue) || isPromise(params.inputValue))) {
      showLoading(getConfirmButton());
      handleInputValue(instance, params);
    }
  };
  const getInputValue = (instance, innerParams) => {
    const input = instance.getInput();

    if (!input) {
      return null;
    }

    switch (innerParams.input) {
      case 'checkbox':
        return getCheckboxValue(input);

      case 'radio':
        return getRadioValue(input);

      case 'file':
        return getFileValue(input);

      default:
        return innerParams.inputAutoTrim ? input.value.trim() : input.value;
    }
  };

  const getCheckboxValue = input => input.checked ? 1 : 0;

  const getRadioValue = input => input.checked ? input.value : null;

  const getFileValue = input => input.files.length ? input.getAttribute('multiple') !== null ? input.files : input.files[0] : null;

  const handleInputOptions = (instance, params) => {
    const popup = getPopup();

    const processInputOptions = inputOptions => populateInputOptions[params.input](popup, formatInputOptions(inputOptions), params);

    if (hasToPromiseFn(params.inputOptions) || isPromise(params.inputOptions)) {
      showLoading(getConfirmButton());
      asPromise(params.inputOptions).then(inputOptions => {
        instance.hideLoading();
        processInputOptions(inputOptions);
      });
    } else if (typeof params.inputOptions === 'object') {
      processInputOptions(params.inputOptions);
    } else {
      error("Unexpected type of inputOptions! Expected object, Map or Promise, got ".concat(typeof params.inputOptions));
    }
  };

  const handleInputValue = (instance, params) => {
    const input = instance.getInput();
    hide(input);
    asPromise(params.inputValue).then(inputValue => {
      input.value = params.input === 'number' ? parseFloat(inputValue) || 0 : "".concat(inputValue);
      show(input);
      input.focus();
      instance.hideLoading();
    }).catch(err => {
      error("Error in inputValue promise: ".concat(err));
      input.value = '';
      show(input);
      input.focus();
      instance.hideLoading();
    });
  };

  const populateInputOptions = {
    select: (popup, inputOptions, params) => {
      const select = getChildByClass(popup, swalClasses.select);

      const renderOption = (parent, optionLabel, optionValue) => {
        const option = document.createElement('option');
        option.value = optionValue;
        setInnerHtml(option, optionLabel);
        option.selected = isSelected(optionValue, params.inputValue);
        parent.appendChild(option);
      };

      inputOptions.forEach(inputOption => {
        const optionValue = inputOption[0];
        const optionLabel = inputOption[1]; // <optgroup> spec:
        // https://www.w3.org/TR/html401/interact/forms.html#h-17.6
        // "...all OPTGROUP elements must be specified directly within a SELECT element (i.e., groups may not be nested)..."
        // check whether this is a <optgroup>

        if (Array.isArray(optionLabel)) {
          // if it is an array, then it is an <optgroup>
          const optgroup = document.createElement('optgroup');
          optgroup.label = optionValue;
          optgroup.disabled = false; // not configurable for now

          select.appendChild(optgroup);
          optionLabel.forEach(o => renderOption(optgroup, o[1], o[0]));
        } else {
          // case of <option>
          renderOption(select, optionLabel, optionValue);
        }
      });
      select.focus();
    },
    radio: (popup, inputOptions, params) => {
      const radio = getChildByClass(popup, swalClasses.radio);
      inputOptions.forEach(inputOption => {
        const radioValue = inputOption[0];
        const radioLabel = inputOption[1];
        const radioInput = document.createElement('input');
        const radioLabelElement = document.createElement('label');
        radioInput.type = 'radio';
        radioInput.name = swalClasses.radio;
        radioInput.value = radioValue;

        if (isSelected(radioValue, params.inputValue)) {
          radioInput.checked = true;
        }

        const label = document.createElement('span');
        setInnerHtml(label, radioLabel);
        label.className = swalClasses.label;
        radioLabelElement.appendChild(radioInput);
        radioLabelElement.appendChild(label);
        radio.appendChild(radioLabelElement);
      });
      const radios = radio.querySelectorAll('input');

      if (radios.length) {
        radios[0].focus();
      }
    }
  };
  /**
   * Converts `inputOptions` into an array of `[value, label]`s
   * @param inputOptions
   */

  const formatInputOptions = inputOptions => {
    const result = [];

    if (typeof Map !== 'undefined' && inputOptions instanceof Map) {
      inputOptions.forEach((value, key) => {
        let valueFormatted = value;

        if (typeof valueFormatted === 'object') {
          // case of <optgroup>
          valueFormatted = formatInputOptions(valueFormatted);
        }

        result.push([key, valueFormatted]);
      });
    } else {
      Object.keys(inputOptions).forEach(key => {
        let valueFormatted = inputOptions[key];

        if (typeof valueFormatted === 'object') {
          // case of <optgroup>
          valueFormatted = formatInputOptions(valueFormatted);
        }

        result.push([key, valueFormatted]);
      });
    }

    return result;
  };

  const isSelected = (optionValue, inputValue) => {
    return inputValue && inputValue.toString() === optionValue.toString();
  };

  const handleConfirmButtonClick = instance => {
    const innerParams = privateProps.innerParams.get(instance);
    instance.disableButtons();

    if (innerParams.input) {
      handleConfirmOrDenyWithInput(instance, 'confirm');
    } else {
      confirm(instance, true);
    }
  };
  const handleDenyButtonClick = instance => {
    const innerParams = privateProps.innerParams.get(instance);
    instance.disableButtons();

    if (innerParams.returnInputValueOnDeny) {
      handleConfirmOrDenyWithInput(instance, 'deny');
    } else {
      deny(instance, false);
    }
  };
  const handleCancelButtonClick = (instance, dismissWith) => {
    instance.disableButtons();
    dismissWith(DismissReason.cancel);
  };

  const handleConfirmOrDenyWithInput = (instance, type
  /* 'confirm' | 'deny' */
  ) => {
    const innerParams = privateProps.innerParams.get(instance);
    const inputValue = getInputValue(instance, innerParams);

    if (innerParams.inputValidator) {
      handleInputValidator(instance, inputValue, type);
    } else if (!instance.getInput().checkValidity()) {
      instance.enableButtons();
      instance.showValidationMessage(innerParams.validationMessage);
    } else if (type === 'deny') {
      deny(instance, inputValue);
    } else {
      confirm(instance, inputValue);
    }
  };

  const handleInputValidator = (instance, inputValue, type
  /* 'confirm' | 'deny' */
  ) => {
    const innerParams = privateProps.innerParams.get(instance);
    instance.disableInput();
    const validationPromise = Promise.resolve().then(() => asPromise(innerParams.inputValidator(inputValue, innerParams.validationMessage)));
    validationPromise.then(validationMessage => {
      instance.enableButtons();
      instance.enableInput();

      if (validationMessage) {
        instance.showValidationMessage(validationMessage);
      } else if (type === 'deny') {
        deny(instance, inputValue);
      } else {
        confirm(instance, inputValue);
      }
    });
  };

  const deny = (instance, value) => {
    const innerParams = privateProps.innerParams.get(instance || undefined);

    if (innerParams.showLoaderOnDeny) {
      showLoading(getDenyButton());
    }

    if (innerParams.preDeny) {
      const preDenyPromise = Promise.resolve().then(() => asPromise(innerParams.preDeny(value, innerParams.validationMessage)));
      preDenyPromise.then(preDenyValue => {
        if (preDenyValue === false) {
          instance.hideLoading();
        } else {
          instance.closePopup({
            isDenied: true,
            value: typeof preDenyValue === 'undefined' ? value : preDenyValue
          });
        }
      });
    } else {
      instance.closePopup({
        isDenied: true,
        value
      });
    }
  };

  const succeedWith = (instance, value) => {
    instance.closePopup({
      isConfirmed: true,
      value
    });
  };

  const confirm = (instance, value) => {
    const innerParams = privateProps.innerParams.get(instance || undefined);

    if (innerParams.showLoaderOnConfirm) {
      showLoading();
    }

    if (innerParams.preConfirm) {
      instance.resetValidationMessage();
      const preConfirmPromise = Promise.resolve().then(() => asPromise(innerParams.preConfirm(value, innerParams.validationMessage)));
      preConfirmPromise.then(preConfirmValue => {
        if (isVisible(getValidationMessage()) || preConfirmValue === false) {
          instance.hideLoading();
        } else {
          succeedWith(instance, typeof preConfirmValue === 'undefined' ? value : preConfirmValue);
        }
      });
    } else {
      succeedWith(instance, value);
    }
  };

  const addKeydownHandler = (instance, globalState, innerParams, dismissWith) => {
    if (globalState.keydownTarget && globalState.keydownHandlerAdded) {
      globalState.keydownTarget.removeEventListener('keydown', globalState.keydownHandler, {
        capture: globalState.keydownListenerCapture
      });
      globalState.keydownHandlerAdded = false;
    }

    if (!innerParams.toast) {
      globalState.keydownHandler = e => keydownHandler(instance, e, dismissWith);

      globalState.keydownTarget = innerParams.keydownListenerCapture ? window : getPopup();
      globalState.keydownListenerCapture = innerParams.keydownListenerCapture;
      globalState.keydownTarget.addEventListener('keydown', globalState.keydownHandler, {
        capture: globalState.keydownListenerCapture
      });
      globalState.keydownHandlerAdded = true;
    }
  }; // Focus handling

  const setFocus = (innerParams, index, increment) => {
    const focusableElements = getFocusableElements(); // search for visible elements and select the next possible match

    if (focusableElements.length) {
      index = index + increment; // rollover to first item

      if (index === focusableElements.length) {
        index = 0; // go to last item
      } else if (index === -1) {
        index = focusableElements.length - 1;
      }

      return focusableElements[index].focus();
    } // no visible focusable elements, focus the popup


    getPopup().focus();
  };
  const arrowKeysNextButton = ['ArrowRight', 'ArrowDown'];
  const arrowKeysPreviousButton = ['ArrowLeft', 'ArrowUp'];

  const keydownHandler = (instance, e, dismissWith) => {
    const innerParams = privateProps.innerParams.get(instance);

    if (!innerParams) {
      return; // This instance has already been destroyed
    }

    if (innerParams.stopKeydownPropagation) {
      e.stopPropagation();
    } // ENTER


    if (e.key === 'Enter') {
      handleEnter(instance, e, innerParams); // TAB
    } else if (e.key === 'Tab') {
      handleTab(e, innerParams); // ARROWS - switch focus between buttons
    } else if ([...arrowKeysNextButton, ...arrowKeysPreviousButton].includes(e.key)) {
      handleArrows(e.key); // ESC
    } else if (e.key === 'Escape') {
      handleEsc(e, innerParams, dismissWith);
    }
  };

  const handleEnter = (instance, e, innerParams) => {
    // #720 #721
    if (e.isComposing) {
      return;
    }

    if (e.target && instance.getInput() && e.target.outerHTML === instance.getInput().outerHTML) {
      if (['textarea', 'file'].includes(innerParams.input)) {
        return; // do not submit
      }

      clickConfirm();
      e.preventDefault();
    }
  };

  const handleTab = (e, innerParams) => {
    const targetElement = e.target;
    const focusableElements = getFocusableElements();
    let btnIndex = -1;

    for (let i = 0; i < focusableElements.length; i++) {
      if (targetElement === focusableElements[i]) {
        btnIndex = i;
        break;
      }
    }

    if (!e.shiftKey) {
      // Cycle to the next button
      setFocus(innerParams, btnIndex, 1);
    } else {
      // Cycle to the prev button
      setFocus(innerParams, btnIndex, -1);
    }

    e.stopPropagation();
    e.preventDefault();
  };

  const handleArrows = key => {
    const confirmButton = getConfirmButton();
    const denyButton = getDenyButton();
    const cancelButton = getCancelButton();

    if (![confirmButton, denyButton, cancelButton].includes(document.activeElement)) {
      return;
    }

    const sibling = arrowKeysNextButton.includes(key) ? 'nextElementSibling' : 'previousElementSibling';
    const buttonToFocus = document.activeElement[sibling];

    if (buttonToFocus) {
      buttonToFocus.focus();
    }
  };

  const handleEsc = (e, innerParams, dismissWith) => {
    if (callIfFunction(innerParams.allowEscapeKey)) {
      e.preventDefault();
      dismissWith(DismissReason.esc);
    }
  };

  const handlePopupClick = (instance, domCache, dismissWith) => {
    const innerParams = privateProps.innerParams.get(instance);

    if (innerParams.toast) {
      handleToastClick(instance, domCache, dismissWith);
    } else {
      // Ignore click events that had mousedown on the popup but mouseup on the container
      // This can happen when the user drags a slider
      handleModalMousedown(domCache); // Ignore click events that had mousedown on the container but mouseup on the popup

      handleContainerMousedown(domCache);
      handleModalClick(instance, domCache, dismissWith);
    }
  };

  const handleToastClick = (instance, domCache, dismissWith) => {
    // Closing toast by internal click
    domCache.popup.onclick = () => {
      const innerParams = privateProps.innerParams.get(instance);

      if (innerParams.showConfirmButton || innerParams.showDenyButton || innerParams.showCancelButton || innerParams.showCloseButton || innerParams.timer || innerParams.input) {
        return;
      }

      dismissWith(DismissReason.close);
    };
  };

  let ignoreOutsideClick = false;

  const handleModalMousedown = domCache => {
    domCache.popup.onmousedown = () => {
      domCache.container.onmouseup = function (e) {
        domCache.container.onmouseup = undefined; // We only check if the mouseup target is the container because usually it doesn't
        // have any other direct children aside of the popup

        if (e.target === domCache.container) {
          ignoreOutsideClick = true;
        }
      };
    };
  };

  const handleContainerMousedown = domCache => {
    domCache.container.onmousedown = () => {
      domCache.popup.onmouseup = function (e) {
        domCache.popup.onmouseup = undefined; // We also need to check if the mouseup target is a child of the popup

        if (e.target === domCache.popup || domCache.popup.contains(e.target)) {
          ignoreOutsideClick = true;
        }
      };
    };
  };

  const handleModalClick = (instance, domCache, dismissWith) => {
    domCache.container.onclick = e => {
      const innerParams = privateProps.innerParams.get(instance);

      if (ignoreOutsideClick) {
        ignoreOutsideClick = false;
        return;
      }

      if (e.target === domCache.container && callIfFunction(innerParams.allowOutsideClick)) {
        dismissWith(DismissReason.backdrop);
      }
    };
  };

  function _main(userParams, mixinParams = {}) {
    showWarningsForParams(Object.assign({}, mixinParams, userParams));

    if (globalState.currentInstance) {
      globalState.currentInstance._destroy();

      if (isModal()) {
        unsetAriaHidden();
      }
    }

    globalState.currentInstance = this;
    const innerParams = prepareParams(userParams, mixinParams);
    setParameters(innerParams);
    Object.freeze(innerParams); // clear the previous timer

    if (globalState.timeout) {
      globalState.timeout.stop();
      delete globalState.timeout;
    } // clear the restore focus timeout


    clearTimeout(globalState.restoreFocusTimeout);
    const domCache = populateDomCache(this);
    render(this, innerParams);
    privateProps.innerParams.set(this, innerParams);
    return swalPromise(this, domCache, innerParams);
  }

  const prepareParams = (userParams, mixinParams) => {
    const templateParams = getTemplateParams(userParams);
    const params = Object.assign({}, defaultParams, mixinParams, templateParams, userParams); // precedence is described in #2131

    params.showClass = Object.assign({}, defaultParams.showClass, params.showClass);
    params.hideClass = Object.assign({}, defaultParams.hideClass, params.hideClass);
    return params;
  };

  const swalPromise = (instance, domCache, innerParams) => {
    return new Promise(resolve => {
      // functions to handle all closings/dismissals
      const dismissWith = dismiss => {
        instance.closePopup({
          isDismissed: true,
          dismiss
        });
      };

      privateMethods.swalPromiseResolve.set(instance, resolve);

      domCache.confirmButton.onclick = () => handleConfirmButtonClick(instance);

      domCache.denyButton.onclick = () => handleDenyButtonClick(instance);

      domCache.cancelButton.onclick = () => handleCancelButtonClick(instance, dismissWith);

      domCache.closeButton.onclick = () => dismissWith(DismissReason.close);

      handlePopupClick(instance, domCache, dismissWith);
      addKeydownHandler(instance, globalState, innerParams, dismissWith);
      handleInputOptionsAndValue(instance, innerParams);
      openPopup(innerParams);
      setupTimer(globalState, innerParams, dismissWith);
      initFocus(domCache, innerParams); // Scroll container to top on open (#1247, #1946)

      setTimeout(() => {
        domCache.container.scrollTop = 0;
      });
    });
  };

  const populateDomCache = instance => {
    const domCache = {
      popup: getPopup(),
      container: getContainer(),
      actions: getActions(),
      confirmButton: getConfirmButton(),
      denyButton: getDenyButton(),
      cancelButton: getCancelButton(),
      loader: getLoader(),
      closeButton: getCloseButton(),
      validationMessage: getValidationMessage(),
      progressSteps: getProgressSteps()
    };
    privateProps.domCache.set(instance, domCache);
    return domCache;
  };

  const setupTimer = (globalState$$1, innerParams, dismissWith) => {
    const timerProgressBar = getTimerProgressBar();
    hide(timerProgressBar);

    if (innerParams.timer) {
      globalState$$1.timeout = new Timer(() => {
        dismissWith('timer');
        delete globalState$$1.timeout;
      }, innerParams.timer);

      if (innerParams.timerProgressBar) {
        show(timerProgressBar);
        setTimeout(() => {
          if (globalState$$1.timeout && globalState$$1.timeout.running) {
            // timer can be already stopped or unset at this point
            animateTimerProgressBar(innerParams.timer);
          }
        });
      }
    }
  };

  const initFocus = (domCache, innerParams) => {
    if (innerParams.toast) {
      return;
    }

    if (!callIfFunction(innerParams.allowEnterKey)) {
      return blurActiveElement();
    }

    if (!focusButton(domCache, innerParams)) {
      setFocus(innerParams, -1, 1);
    }
  };

  const focusButton = (domCache, innerParams) => {
    if (innerParams.focusDeny && isVisible(domCache.denyButton)) {
      domCache.denyButton.focus();
      return true;
    }

    if (innerParams.focusCancel && isVisible(domCache.cancelButton)) {
      domCache.cancelButton.focus();
      return true;
    }

    if (innerParams.focusConfirm && isVisible(domCache.confirmButton)) {
      domCache.confirmButton.focus();
      return true;
    }

    return false;
  };

  const blurActiveElement = () => {
    if (document.activeElement && typeof document.activeElement.blur === 'function') {
      document.activeElement.blur();
    }
  };

  /**
   * Updates popup parameters.
   */

  function update(params) {
    const popup = getPopup();
    const innerParams = privateProps.innerParams.get(this);

    if (!popup || hasClass(popup, innerParams.hideClass.popup)) {
      return warn("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");
    }

    const validUpdatableParams = {}; // assign valid params from `params` to `defaults`

    Object.keys(params).forEach(param => {
      if (Swal.isUpdatableParameter(param)) {
        validUpdatableParams[param] = params[param];
      } else {
        warn("Invalid parameter to update: \"".concat(param, "\". Updatable params are listed here: https://github.com/sweetalert2/sweetalert2/blob/master/src/utils/params.js\n\nIf you think this parameter should be updatable, request it here: https://github.com/sweetalert2/sweetalert2/issues/new?template=02_feature_request.md"));
      }
    });
    const updatedParams = Object.assign({}, innerParams, validUpdatableParams);
    render(this, updatedParams);
    privateProps.innerParams.set(this, updatedParams);
    Object.defineProperties(this, {
      params: {
        value: Object.assign({}, this.params, params),
        writable: false,
        enumerable: true
      }
    });
  }

  function _destroy() {
    const domCache = privateProps.domCache.get(this);
    const innerParams = privateProps.innerParams.get(this);

    if (!innerParams) {
      return; // This instance has already been destroyed
    } // Check if there is another Swal closing


    if (domCache.popup && globalState.swalCloseEventFinishedCallback) {
      globalState.swalCloseEventFinishedCallback();
      delete globalState.swalCloseEventFinishedCallback;
    } // Check if there is a swal disposal defer timer


    if (globalState.deferDisposalTimer) {
      clearTimeout(globalState.deferDisposalTimer);
      delete globalState.deferDisposalTimer;
    }

    if (typeof innerParams.didDestroy === 'function') {
      innerParams.didDestroy();
    }

    disposeSwal(this);
  }

  const disposeSwal = instance => {
    // Unset this.params so GC will dispose it (#1569)
    delete instance.params; // Unset globalState props so GC will dispose globalState (#1569)

    delete globalState.keydownHandler;
    delete globalState.keydownTarget; // Unset WeakMaps so GC will be able to dispose them (#1569)

    unsetWeakMaps(privateProps);
    unsetWeakMaps(privateMethods); // Unset currentInstance

    delete globalState.currentInstance;
  };

  const unsetWeakMaps = obj => {
    for (const i in obj) {
      obj[i] = new WeakMap();
    }
  };



  var instanceMethods = /*#__PURE__*/Object.freeze({
    hideLoading: hideLoading,
    disableLoading: hideLoading,
    getInput: getInput$1,
    close: close,
    closePopup: close,
    closeModal: close,
    closeToast: close,
    enableButtons: enableButtons,
    disableButtons: disableButtons,
    enableInput: enableInput,
    disableInput: disableInput,
    showValidationMessage: showValidationMessage,
    resetValidationMessage: resetValidationMessage$1,
    getProgressSteps: getProgressSteps$1,
    _main: _main,
    update: update,
    _destroy: _destroy
  });

  let currentInstance;

  class SweetAlert {
    constructor(...args) {
      // Prevent run in Node env
      if (typeof window === 'undefined') {
        return;
      }

      currentInstance = this;
      const outerParams = Object.freeze(this.constructor.argsToParams(args));
      Object.defineProperties(this, {
        params: {
          value: outerParams,
          writable: false,
          enumerable: true,
          configurable: true
        }
      });

      const promise = this._main(this.params);

      privateProps.promise.set(this, promise);
    } // `catch` cannot be the name of a module export, so we define our thenable methods here instead


    then(onFulfilled) {
      const promise = privateProps.promise.get(this);
      return promise.then(onFulfilled);
    }

    finally(onFinally) {
      const promise = privateProps.promise.get(this);
      return promise.finally(onFinally);
    }

  } // Assign instance methods from src/instanceMethods/*.js to prototype


  Object.assign(SweetAlert.prototype, instanceMethods); // Assign static methods from src/staticMethods/*.js to constructor

  Object.assign(SweetAlert, staticMethods); // Proxy to instance methods to constructor, for now, for backwards compatibility

  Object.keys(instanceMethods).forEach(key => {
    SweetAlert[key] = function (...args) {
      if (currentInstance) {
        return currentInstance[key](...args);
      }
    };
  });
  SweetAlert.DismissReason = DismissReason;
  SweetAlert.version = '11.1.7';

  const Swal = SweetAlert;
  Swal.default = Swal;

  return Swal;

}));
if (typeof this !== 'undefined' && this.Sweetalert2){  this.swal = this.sweetAlert = this.Swal = this.SweetAlert = this.Sweetalert2}

"undefined"!=typeof document&&function(e,t){var n=e.createElement("style");if(e.getElementsByTagName("head")[0].appendChild(n),n.styleSheet)n.styleSheet.disabled||(n.styleSheet.cssText=t);else try{n.innerHTML=t}catch(e){n.innerText=t}}(document,".swal2-popup.swal2-toast{box-sizing:border-box;grid-column:1/4!important;grid-row:1/4!important;grid-template-columns:1fr 99fr 1fr;padding:1em;overflow-y:hidden;background:#fff;box-shadow:0 0 1px rgba(0,0,0,.075),0 1px 2px rgba(0,0,0,.075),1px 2px 4px rgba(0,0,0,.075),1px 3px 8px rgba(0,0,0,.075),2px 4px 16px rgba(0,0,0,.075);pointer-events:all}.swal2-popup.swal2-toast>*{grid-column:2}.swal2-popup.swal2-toast .swal2-title{margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-loading{justify-content:center}.swal2-popup.swal2-toast .swal2-input{height:2em;margin:.5em;font-size:1em}.swal2-popup.swal2-toast .swal2-validation-message{font-size:1em}.swal2-popup.swal2-toast .swal2-footer{margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-popup.swal2-toast .swal2-close{grid-column:3/3;grid-row:1/99;align-self:center;width:.8em;height:.8em;margin:0;font-size:2em}.swal2-popup.swal2-toast .swal2-html-container{margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-html-container:empty{padding:0}.swal2-popup.swal2-toast .swal2-loader{grid-column:1;grid-row:1/99;align-self:center;width:2em;height:2em;margin:.25em}.swal2-popup.swal2-toast .swal2-icon{grid-column:1;grid-row:1/99;align-self:center;width:2em;min-width:2em;height:2em;margin:0 .5em 0 0}.swal2-popup.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:700}.swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-popup.swal2-toast .swal2-actions{justify-content:flex-start;height:auto;margin:0;margin-top:.5em;padding:0 .5em}.swal2-popup.swal2-toast .swal2-styled{margin:.25em .5em;padding:.4em .6em;font-size:1em}.swal2-popup.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;transform:rotate(45deg);border-radius:50%}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-.8em;left:-.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-popup.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{-webkit-animation:swal2-toast-animate-success-line-tip .75s;animation:swal2-toast-animate-success-line-tip .75s}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{-webkit-animation:swal2-toast-animate-success-line-long .75s;animation:swal2-toast-animate-success-line-long .75s}.swal2-popup.swal2-toast.swal2-show{-webkit-animation:swal2-toast-show .5s;animation:swal2-toast-show .5s}.swal2-popup.swal2-toast.swal2-hide{-webkit-animation:swal2-toast-hide .1s forwards;animation:swal2-toast-hide .1s forwards}.swal2-container{display:grid;position:fixed;z-index:1060;top:0;right:0;bottom:0;left:0;box-sizing:border-box;grid-template-areas:\"top-start     top            top-end\" \"center-start  center         center-end\" \"bottom-start  bottom-center  bottom-end\";grid-template-rows:minmax(-webkit-min-content,auto) minmax(-webkit-min-content,auto) minmax(-webkit-min-content,auto);grid-template-rows:minmax(min-content,auto) minmax(min-content,auto) minmax(min-content,auto);height:100%;padding:.625em;overflow-x:hidden;transition:background-color .1s;-webkit-overflow-scrolling:touch}.swal2-container.swal2-backdrop-show,.swal2-container.swal2-noanimation{background:rgba(0,0,0,.4)}.swal2-container.swal2-backdrop-hide{background:0 0!important}.swal2-container.swal2-bottom-start,.swal2-container.swal2-center-start,.swal2-container.swal2-top-start{grid-template-columns:minmax(0,1fr) auto auto}.swal2-container.swal2-bottom,.swal2-container.swal2-center,.swal2-container.swal2-top{grid-template-columns:auto minmax(0,1fr) auto}.swal2-container.swal2-bottom-end,.swal2-container.swal2-center-end,.swal2-container.swal2-top-end{grid-template-columns:auto auto minmax(0,1fr)}.swal2-container.swal2-top-start>.swal2-popup{align-self:start}.swal2-container.swal2-top>.swal2-popup{grid-column:2;align-self:start;justify-self:center}.swal2-container.swal2-top-end>.swal2-popup,.swal2-container.swal2-top-right>.swal2-popup{grid-column:3;align-self:start;justify-self:end}.swal2-container.swal2-center-left>.swal2-popup,.swal2-container.swal2-center-start>.swal2-popup{grid-row:2;align-self:center}.swal2-container.swal2-center>.swal2-popup{grid-column:2;grid-row:2;align-self:center;justify-self:center}.swal2-container.swal2-center-end>.swal2-popup,.swal2-container.swal2-center-right>.swal2-popup{grid-column:3;grid-row:2;align-self:center;justify-self:end}.swal2-container.swal2-bottom-left>.swal2-popup,.swal2-container.swal2-bottom-start>.swal2-popup{grid-column:1;grid-row:3;align-self:end}.swal2-container.swal2-bottom>.swal2-popup{grid-column:2;grid-row:3;justify-self:center;align-self:end}.swal2-container.swal2-bottom-end>.swal2-popup,.swal2-container.swal2-bottom-right>.swal2-popup{grid-column:3;grid-row:3;align-self:end;justify-self:end}.swal2-container.swal2-grow-fullscreen>.swal2-popup,.swal2-container.swal2-grow-row>.swal2-popup{grid-column:1/4;width:100%}.swal2-container.swal2-grow-column>.swal2-popup,.swal2-container.swal2-grow-fullscreen>.swal2-popup{grid-row:1/4;align-self:stretch}.swal2-container.swal2-no-transition{transition:none!important}.swal2-popup{display:none;position:relative;box-sizing:border-box;grid-template-columns:minmax(0,100%);width:32em;max-width:100%;padding:0 0 1.25em;border:none;border-radius:5px;background:#fff;color:#545454;font-family:inherit;font-size:1rem}.swal2-popup:focus{outline:0}.swal2-popup.swal2-loading{overflow-y:hidden}.swal2-title{position:relative;max-width:100%;margin:0;padding:.8em 1em 0;color:#595959;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word}.swal2-actions{display:flex;z-index:1;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:center;width:auto;margin:1.25em auto 0;padding:0}.swal2-actions:not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}.swal2-actions:not(.swal2-loading) .swal2-styled:hover{background-image:linear-gradient(rgba(0,0,0,.1),rgba(0,0,0,.1))}.swal2-actions:not(.swal2-loading) .swal2-styled:active{background-image:linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.2))}.swal2-loader{display:none;align-items:center;justify-content:center;width:2.2em;height:2.2em;margin:0 1.875em;-webkit-animation:swal2-rotate-loading 1.5s linear 0s infinite normal;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-width:.25em;border-style:solid;border-radius:100%;border-color:#2778c4 transparent #2778c4 transparent}.swal2-styled{margin:.3125em;padding:.625em 1.1em;transition:box-shadow .1s;box-shadow:0 0 0 3px transparent;font-weight:500}.swal2-styled:not([disabled]){cursor:pointer}.swal2-styled.swal2-confirm{border:0;border-radius:.25em;background:initial;background-color:#7367f0;color:#fff;font-size:1em}.swal2-styled.swal2-confirm:focus{box-shadow:0 0 0 3px rgba(115,103,240,.5)}.swal2-styled.swal2-deny{border:0;border-radius:.25em;background:initial;background-color:#ea5455;color:#fff;font-size:1em}.swal2-styled.swal2-deny:focus{box-shadow:0 0 0 3px rgba(234,84,85,.5)}.swal2-styled.swal2-cancel{border:0;border-radius:.25em;background:initial;background-color:#6e7d88;color:#fff;font-size:1em}.swal2-styled.swal2-cancel:focus{box-shadow:0 0 0 3px rgba(110,125,136,.5)}.swal2-styled.swal2-default-outline:focus{box-shadow:0 0 0 3px rgba(100,150,200,.5)}.swal2-styled:focus{outline:0}.swal2-styled::-moz-focus-inner{border:0}.swal2-footer{justify-content:center;margin:1em 0 0;padding:1em 1em 0;border-top:1px solid #eee;color:#545454;font-size:1em}.swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;grid-column:auto!important;height:.25em;overflow:hidden;border-bottom-right-radius:5px;border-bottom-left-radius:5px}.swal2-timer-progress-bar{width:100%;height:.25em;background:rgba(0,0,0,.2)}.swal2-image{max-width:100%;margin:2em auto 1em}.swal2-close{z-index:2;align-items:center;justify-content:center;width:1.2em;height:1.2em;margin-top:0;margin-right:0;margin-bottom:-1.2em;padding:0;overflow:hidden;transition:color .1s,box-shadow .1s;border:none;border-radius:5px;background:0 0;color:#ccc;font-family:serif;font-family:monospace;font-size:2.5em;cursor:pointer;justify-self:end}.swal2-close:hover{transform:none;background:0 0;color:#f27474}.swal2-close:focus{outline:0;box-shadow:inset 0 0 0 3px rgba(100,150,200,.5)}.swal2-close::-moz-focus-inner{border:0}.swal2-html-container{z-index:1;justify-content:center;margin:1em 1.6em .3em;padding:0;overflow:auto;color:#545454;font-size:1.125em;font-weight:400;line-height:normal;text-align:center;word-wrap:break-word;word-break:break-word}.swal2-checkbox,.swal2-file,.swal2-input,.swal2-radio,.swal2-select,.swal2-textarea{margin:1em 2em 0}.swal2-file,.swal2-input,.swal2-textarea{box-sizing:border-box;width:auto;transition:border-color .1s,box-shadow .1s;border:1px solid #d9d9d9;border-radius:.1875em;background:inherit;box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px transparent;color:inherit;font-size:1.125em}.swal2-file.swal2-inputerror,.swal2-input.swal2-inputerror,.swal2-textarea.swal2-inputerror{border-color:#f27474!important;box-shadow:0 0 2px #f27474!important}.swal2-file:focus,.swal2-input:focus,.swal2-textarea:focus{border:1px solid #b4dbed;outline:0;box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(100,150,200,.5)}.swal2-file::-moz-placeholder,.swal2-input::-moz-placeholder,.swal2-textarea::-moz-placeholder{color:#ccc}.swal2-file:-ms-input-placeholder,.swal2-input:-ms-input-placeholder,.swal2-textarea:-ms-input-placeholder{color:#ccc}.swal2-file::placeholder,.swal2-input::placeholder,.swal2-textarea::placeholder{color:#ccc}.swal2-range{margin:1em 2em 0;background:#fff}.swal2-range input{width:80%}.swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}.swal2-range input,.swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}.swal2-input{height:2.625em;padding:0 .75em}.swal2-file{width:75%;margin-right:auto;margin-left:auto;background:inherit;font-size:1.125em}.swal2-textarea{height:6.75em;padding:.75em}.swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:inherit;color:inherit;font-size:1.125em}.swal2-checkbox,.swal2-radio{align-items:center;justify-content:center;background:#fff;color:inherit}.swal2-checkbox label,.swal2-radio label{margin:0 .6em;font-size:1.125em}.swal2-checkbox input,.swal2-radio input{flex-shrink:0;margin:0 .4em}.swal2-input-label{display:flex;justify-content:center;margin:1em auto 0}.swal2-validation-message{align-items:center;justify-content:center;margin:1em 0 0;padding:.625em;overflow:hidden;background:#f0f0f0;color:#666;font-size:1em;font-weight:300}.swal2-validation-message::before{content:\"!\";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}.swal2-icon{position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:2.5em auto .6em;border:.25em solid transparent;border-radius:50%;border-color:#000;font-family:inherit;line-height:5em;cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}.swal2-icon.swal2-error{border-color:#f27474;color:#f27474}.swal2-icon.swal2-error .swal2-x-mark{position:relative;flex-grow:1}.swal2-icon.swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}.swal2-icon.swal2-error.swal2-icon-show{-webkit-animation:swal2-animate-error-icon .5s;animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-error.swal2-icon-show .swal2-x-mark{-webkit-animation:swal2-animate-error-x-mark .5s;animation:swal2-animate-error-x-mark .5s}.swal2-icon.swal2-warning{border-color:#facea8;color:#f8bb86}.swal2-icon.swal2-info{border-color:#9de0f6;color:#3fc3ee}.swal2-icon.swal2-question{border-color:#c9dae1;color:#87adbd}.swal2-icon.swal2-success{border-color:#a5dc86;color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;transform:rotate(45deg);border-radius:50%}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=left]{top:-.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=right]{top:-.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}.swal2-icon.swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-.25em;left:-.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}.swal2-icon.swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}.swal2-icon.swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}.swal2-icon.swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-line-tip{-webkit-animation:swal2-animate-success-line-tip .75s;animation:swal2-animate-success-line-tip .75s}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-line-long{-webkit-animation:swal2-animate-success-line-long .75s;animation:swal2-animate-success-line-long .75s}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-circular-line-right{-webkit-animation:swal2-rotate-success-circular-line 4.25s ease-in;animation:swal2-rotate-success-circular-line 4.25s ease-in}.swal2-progress-steps{flex-wrap:wrap;align-items:center;max-width:100%;margin:1.25em auto;padding:0;background:inherit;font-weight:600}.swal2-progress-steps li{display:inline-block;position:relative}.swal2-progress-steps .swal2-progress-step{z-index:20;flex-shrink:0;width:2em;height:2em;border-radius:2em;background:#2778c4;color:#fff;line-height:2em;text-align:center}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#2778c4}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:#add8e6;color:#fff}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:#add8e6}.swal2-progress-steps .swal2-progress-step-line{z-index:10;flex-shrink:0;width:2.5em;height:.4em;margin:0 -1px;background:#2778c4}[class^=swal2]{-webkit-tap-highlight-color:transparent}.swal2-show{-webkit-animation:swal2-show .3s;animation:swal2-show .3s}.swal2-hide{-webkit-animation:swal2-hide .15s forwards;animation:swal2-hide .15s forwards}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{margin-right:initial;margin-left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}@-webkit-keyframes swal2-toast-show{0%{transform:translateY(-.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0)}}@keyframes swal2-toast-show{0%{transform:translateY(-.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0)}}@-webkit-keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@-webkit-keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@-webkit-keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@-webkit-keyframes swal2-show{0%{transform:scale(.7)}45%{transform:scale(1.05)}80%{transform:scale(.95)}100%{transform:scale(1)}}@keyframes swal2-show{0%{transform:scale(.7)}45%{transform:scale(1.05)}80%{transform:scale(.95)}100%{transform:scale(1)}}@-webkit-keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(.5);opacity:0}}@keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(.5);opacity:0}}@-webkit-keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@-webkit-keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@-webkit-keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@-webkit-keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(.4);opacity:0}50%{margin-top:1.625em;transform:scale(.4);opacity:0}80%{margin-top:-.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(.4);opacity:0}50%{margin-top:1.625em;transform:scale(.4);opacity:0}80%{margin-top:-.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@-webkit-keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0);opacity:1}}@-webkit-keyframes swal2-rotate-loading{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}@keyframes swal2-rotate-loading{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto!important}body.swal2-no-backdrop .swal2-container{background-color:transparent!important;pointer-events:none}body.swal2-no-backdrop .swal2-container .swal2-popup{pointer-events:all}body.swal2-no-backdrop .swal2-container .swal2-modal{box-shadow:0 0 10px rgba(0,0,0,.4)}@media print{body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow-y:scroll!important}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) .swal2-container{position:static!important}}body.swal2-toast-shown .swal2-container{box-sizing:border-box;width:360px;max-width:100%;background-color:transparent;pointer-events:none}body.swal2-toast-shown .swal2-container.swal2-top{top:0;right:auto;bottom:auto;left:50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{top:0;right:0;bottom:auto;left:auto}body.swal2-toast-shown .swal2-container.swal2-top-left,body.swal2-toast-shown .swal2-container.swal2-top-start{top:0;right:auto;bottom:auto;left:0}body.swal2-toast-shown .swal2-container.swal2-center-left,body.swal2-toast-shown .swal2-container.swal2-center-start{top:50%;right:auto;bottom:auto;left:0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{top:50%;right:auto;bottom:auto;left:50%;transform:translate(-50%,-50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{top:50%;right:0;bottom:auto;left:auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-left,body.swal2-toast-shown .swal2-container.swal2-bottom-start{top:auto;right:auto;bottom:0;left:0}body.swal2-toast-shown .swal2-container.swal2-bottom{top:auto;right:auto;bottom:0;left:50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{top:auto;right:0;bottom:0;left:auto}");

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__AppSetting__ = __webpack_require__(30);
function Sidebarmobile(){return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{id:'kt_header_mobile',className:'kt-header-mobile  kt-header-mobile--fixed '},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:'kt-header-mobile__logo'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('a',{href:'/dashboard'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('h3',{style:{color:'white'}},' ',__WEBPACK_IMPORTED_MODULE_1__AppSetting__["a" /* AppSetting */].name))),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:'kt-header-mobile__toolbar'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('button',{className:'kt-header-mobile__toggler kt-header-mobile__toggler--left',id:'kt_aside_mobile_toggler'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span',null)),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('button',{className:'kt-header-mobile__toggler',id:'kt_header_mobile_toggler'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span',null)),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('button',{className:'kt-header-mobile__topbar-toggler',id:'kt_header_mobile_topbar_toggler'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i',{className:'flaticon-more'}))));{/* end:: Header Mobile */}}/* harmony default export */ __webpack_exports__["a"] = (Sidebarmobile);

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_router_dom__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_MenuList__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__AppSetting__ = __webpack_require__(30);
var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var Asidebar=function(_Component){_inherits(Asidebar,_Component);function Asidebar(){_classCallCheck(this,Asidebar);var _this=_possibleConstructorReturn(this,(Asidebar.__proto__||Object.getPrototypeOf(Asidebar)).call(this));_this.state={errors:{}};return _this;}_createClass(Asidebar,[{key:'render',value:function render(){var errors=this.state.errors;var _props$auth=this.props.auth,isAuthenticated=_props$auth.isAuthenticated,user=_props$auth.user;var permissionList=user.permissionList;console.log("res",Object(__WEBPACK_IMPORTED_MODULE_4__common_MenuList__["a" /* checkPermission */])(this.props.auth,"DASHBOARD","READ"));return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('button',{className:'kt-aside-close ',id:'kt_aside_close_btn'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i',{className:'la la-close'})),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:'kt-aside  kt-aside--fixed  kt-grid__item kt-grid kt-grid--desktop kt-grid--hor-desktop',id:'kt_aside'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:'kt-aside__brand kt-grid__item ',id:'kt_aside_brand'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:'kt-aside__brand-logo'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_router_dom__["b" /* Link */],{to:'/admin/dashboard'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('h3',{style:{color:'white',textAlign:'center'}},' ',__WEBPACK_IMPORTED_MODULE_5__AppSetting__["a" /* AppSetting */].name)))),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:'kt-aside-menu-wrapper kt-grid__item kt-grid__item--fluid',id:'kt_aside_menu_wrapper'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{id:'kt_aside_menu',className:'kt-aside-menu ','data-ktmenu-vertical':1,'data-ktmenu-scroll':1,'data-ktmenu-dropdown-timeout':500},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('ul',{className:'kt-menu__nav '},Object(__WEBPACK_IMPORTED_MODULE_4__common_MenuList__["a" /* checkPermission */])(this.props.auth,"DASHBOARD","READ")&&__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('li',{className:'kt-menu__item ','aria-haspopup':'true'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_router_dom__["b" /* Link */],{to:'/admin/dashboard',className:'kt-menu__link '},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span',{className:'kt-menu__link-icon'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('svg',{xmlns:'http://www.w3.org/2000/svg',xmlnsXlink:'http://www.w3.org/1999/xlink',width:'24px',height:'24px',viewBox:'0 0 24 24',version:'1.1',className:'kt-svg-icon'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('g',{stroke:'none',strokeWidth:1,fill:'none',fillRule:'evenodd'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('polygon',{id:'Bound',points:'0 0 24 0 24 24 0 24'}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path',{d:'M12.9336061,16.072447 L19.36,10.9564761 L19.5181585,10.8312381 C20.1676248,10.3169571 20.2772143,9.3735535 19.7629333,8.72408713 C19.6917232,8.63415859 19.6104327,8.55269514 19.5206557,8.48129411 L12.9336854,3.24257445 C12.3871201,2.80788259 11.6128799,2.80788259 11.0663146,3.24257445 L4.47482784,8.48488609 C3.82645598,9.00054628 3.71887192,9.94418071 4.23453211,10.5925526 C4.30500305,10.6811601 4.38527899,10.7615046 4.47382636,10.8320511 L4.63,10.9564761 L11.0659024,16.0730648 C11.6126744,16.5077525 12.3871218,16.5074963 12.9336061,16.072447 Z',id:'Shape',fill:'#000000',fillRule:'nonzero'}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path',{d:'M11.0563554,18.6706981 L5.33593024,14.122919 C4.94553994,13.8125559 4.37746707,13.8774308 4.06710397,14.2678211 C4.06471678,14.2708238 4.06234874,14.2738418 4.06,14.2768747 L4.06,14.2768747 C3.75257288,14.6738539 3.82516916,15.244888 4.22214834,15.5523151 C4.22358765,15.5534297 4.2250303,15.55454 4.22647627,15.555646 L11.0872776,20.8031356 C11.6250734,21.2144692 12.371757,21.2145375 12.909628,20.8033023 L19.7677785,15.559828 C20.1693192,15.2528257 20.2459576,14.6784381 19.9389553,14.2768974 C19.9376429,14.2751809 19.9363245,14.2734691 19.935,14.2717619 L19.935,14.2717619 C19.6266937,13.8743807 19.0546209,13.8021712 18.6572397,14.1104775 C18.654352,14.112718 18.6514778,14.1149757 18.6486172,14.1172508 L12.9235044,18.6705218 C12.377022,19.1051477 11.6029199,19.1052208 11.0563554,18.6706981 Z',id:'Path',fill:'#000000',opacity:'0.3'})))),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span',{className:'kt-menu__link-text'},'Dashboard'))),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('li',{className:'kt-menu__section '},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('h4',{className:'kt-menu__section-text'},'Users'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i',{className:'kt-menu__section-icon flaticon-more-v2'})),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('li',{className:'kt-menu__item  kt-menu__item--submenu','aria-haspopup':'true','data-ktmenu-submenu-toggle':'hover'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('a',{href:'javascript:;',className:'kt-menu__link kt-menu__toggle'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span',{className:'kt-menu__link-icon'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('svg',{xmlns:'http://www.w3.org/2000/svg',xmlnsXlink:'http://www.w3.org/1999/xlink',width:'24px',height:'24px',viewBox:'0 0 24 24',version:'1.1',className:'kt-svg-icon'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('g',{stroke:'none',strokeWidth:1,fill:'none',fillRule:'evenodd'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('rect',{id:'bound',x:0,y:0,width:24,height:24}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path',{d:'M2.56066017,10.6819805 L4.68198052,8.56066017 C5.26776695,7.97487373 6.21751442,7.97487373 6.80330086,8.56066017 L8.9246212,10.6819805 C9.51040764,11.267767 9.51040764,12.2175144 8.9246212,12.8033009 L6.80330086,14.9246212 C6.21751442,15.5104076 5.26776695,15.5104076 4.68198052,14.9246212 L2.56066017,12.8033009 C1.97487373,12.2175144 1.97487373,11.267767 2.56066017,10.6819805 Z M14.5606602,10.6819805 L16.6819805,8.56066017 C17.267767,7.97487373 18.2175144,7.97487373 18.8033009,8.56066017 L20.9246212,10.6819805 C21.5104076,11.267767 21.5104076,12.2175144 20.9246212,12.8033009 L18.8033009,14.9246212 C18.2175144,15.5104076 17.267767,15.5104076 16.6819805,14.9246212 L14.5606602,12.8033009 C13.9748737,12.2175144 13.9748737,11.267767 14.5606602,10.6819805 Z',id:'Combined-Shape',fill:'#000000',opacity:'0.3'}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path',{d:'M8.56066017,16.6819805 L10.6819805,14.5606602 C11.267767,13.9748737 12.2175144,13.9748737 12.8033009,14.5606602 L14.9246212,16.6819805 C15.5104076,17.267767 15.5104076,18.2175144 14.9246212,18.8033009 L12.8033009,20.9246212 C12.2175144,21.5104076 11.267767,21.5104076 10.6819805,20.9246212 L8.56066017,18.8033009 C7.97487373,18.2175144 7.97487373,17.267767 8.56066017,16.6819805 Z M8.56066017,4.68198052 L10.6819805,2.56066017 C11.267767,1.97487373 12.2175144,1.97487373 12.8033009,2.56066017 L14.9246212,4.68198052 C15.5104076,5.26776695 15.5104076,6.21751442 14.9246212,6.80330086 L12.8033009,8.9246212 C12.2175144,9.51040764 11.267767,9.51040764 10.6819805,8.9246212 L8.56066017,6.80330086 C7.97487373,6.21751442 7.97487373,5.26776695 8.56066017,4.68198052 Z',id:'Combined-Shape',fill:'#000000'})))),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span',{className:'kt-menu__link-text'},'Users'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i',{className:'kt-menu__ver-arrow la la-angle-right'})),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:'kt-menu__submenu '},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span',{className:'kt-menu__arrow'}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('ul',{className:'kt-menu__subnav'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('li',{className:'kt-menu__item  kt-menu__item--parent','aria-haspopup':'true'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span',{className:'kt-menu__link'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span',{className:'kt-menu__link-text'},'Users'))),Object(__WEBPACK_IMPORTED_MODULE_4__common_MenuList__["a" /* checkPermission */])(this.props.auth,"USER","CREATE")&&__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('li',{className:'kt-menu__item ','aria-haspopup':'true'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_router_dom__["b" /* Link */],{to:'/admin/adduser',className:'kt-menu__link '},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i',{className:'kt-menu__link-bullet kt-menu__link-bullet--dot'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span',null)),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span',{className:'kt-menu__link-text'},'Add Users'))),Object(__WEBPACK_IMPORTED_MODULE_4__common_MenuList__["a" /* checkPermission */])(this.props.auth,"USER","READ")&&__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('li',{className:'kt-menu__item ','aria-haspopup':'true'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_router_dom__["b" /* Link */],{to:'/admin/listuser',className:'kt-menu__link '},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i',{className:'kt-menu__link-bullet kt-menu__link-bullet--dot'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span',null)),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span',{className:'kt-menu__link-text'},'List Users')))))),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('li',{className:'kt-menu__section '},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('h4',{className:'kt-menu__section-text'},'Page Builder'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i',{className:'kt-menu__section-icon flaticon-more-v2'})),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('li',{className:'kt-menu__item  kt-menu__item--submenu','aria-haspopup':'true','data-ktmenu-submenu-toggle':'hover'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_router_dom__["b" /* Link */],{to:'javascript:;',className:'kt-menu__link kt-menu__toggle'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span',{className:'kt-menu__link-icon'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('svg',{xmlns:'http://www.w3.org/2000/svg',xmlnsXlink:'http://www.w3.org/1999/xlink',width:'24px',height:'24px',viewBox:'0 0 24 24',version:'1.1',className:'kt-svg-icon'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('g',{stroke:'none',strokeWidth:1,fill:'none',fillRule:'evenodd'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('rect',{id:'bound',x:0,y:0,width:24,height:24}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path',{d:'M7,3 L17,3 C19.209139,3 21,4.790861 21,7 C21,9.209139 19.209139,11 17,11 L7,11 C4.790861,11 3,9.209139 3,7 C3,4.790861 4.790861,3 7,3 Z M7,9 C8.1045695,9 9,8.1045695 9,7 C9,5.8954305 8.1045695,5 7,5 C5.8954305,5 5,5.8954305 5,7 C5,8.1045695 5.8954305,9 7,9 Z',id:'Combined-Shape',fill:'#000000'}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path',{d:'M7,13 L17,13 C19.209139,13 21,14.790861 21,17 C21,19.209139 19.209139,21 17,21 L7,21 C4.790861,21 3,19.209139 3,17 C3,14.790861 4.790861,13 7,13 Z M17,19 C18.1045695,19 19,18.1045695 19,17 C19,15.8954305 18.1045695,15 17,15 C15.8954305,15 15,15.8954305 15,17 C15,18.1045695 15.8954305,19 17,19 Z',id:'Combined-Shape',fill:'#000000',opacity:'0.3'})))),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span',{className:'kt-menu__link-text'},'Slider'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i',{className:'kt-menu__ver-arrow la la-angle-right'})),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:'kt-menu__submenu '},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span',{className:'kt-menu__arrow'}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('ul',{className:'kt-menu__subnav'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('li',{className:'kt-menu__item  kt-menu__item--parent','aria-haspopup':'true'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span',{className:'kt-menu__link'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span',{className:'kt-menu__link-text'},'Slider'))),Object(__WEBPACK_IMPORTED_MODULE_4__common_MenuList__["a" /* checkPermission */])(this.props.auth,"SLIDER","CREATE")&&__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('li',{className:'kt-menu__item ','aria-haspopup':'true'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_router_dom__["b" /* Link */],{to:'/admin/addslider',className:'kt-menu__link '},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i',{className:'kt-menu__link-bullet kt-menu__link-bullet--dot'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span',null)),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span',{className:'kt-menu__link-text'},'Add Slider'))),Object(__WEBPACK_IMPORTED_MODULE_4__common_MenuList__["a" /* checkPermission */])(this.props.auth,"SLIDER","READ")&&__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('li',{className:'kt-menu__item ','aria-haspopup':'true'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_router_dom__["b" /* Link */],{to:'/admin/listslider',className:'kt-menu__link '},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i',{className:'kt-menu__link-bullet kt-menu__link-bullet--dot'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span',null)),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span',{className:'kt-menu__link-text'},'List Slider')))))),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('li',{className:'kt-menu__item  kt-menu__item--submenu','aria-haspopup':'true','data-ktmenu-submenu-toggle':'hover'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_router_dom__["b" /* Link */],{to:'javascript:;',className:'kt-menu__link kt-menu__toggle'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span',{className:'kt-menu__link-icon'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('svg',{xmlns:'http://www.w3.org/2000/svg',xmlnsXlink:'http://www.w3.org/1999/xlink',width:'24px',height:'24px',viewBox:'0 0 24 24',version:'1.1',className:'kt-svg-icon'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('g',{stroke:'none',strokeWidth:1,fill:'none',fillRule:'evenodd'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('rect',{id:'bound',x:0,y:0,width:24,height:24}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path',{d:'M2.56066017,10.6819805 L4.68198052,8.56066017 C5.26776695,7.97487373 6.21751442,7.97487373 6.80330086,8.56066017 L8.9246212,10.6819805 C9.51040764,11.267767 9.51040764,12.2175144 8.9246212,12.8033009 L6.80330086,14.9246212 C6.21751442,15.5104076 5.26776695,15.5104076 4.68198052,14.9246212 L2.56066017,12.8033009 C1.97487373,12.2175144 1.97487373,11.267767 2.56066017,10.6819805 Z M14.5606602,10.6819805 L16.6819805,8.56066017 C17.267767,7.97487373 18.2175144,7.97487373 18.8033009,8.56066017 L20.9246212,10.6819805 C21.5104076,11.267767 21.5104076,12.2175144 20.9246212,12.8033009 L18.8033009,14.9246212 C18.2175144,15.5104076 17.267767,15.5104076 16.6819805,14.9246212 L14.5606602,12.8033009 C13.9748737,12.2175144 13.9748737,11.267767 14.5606602,10.6819805 Z',id:'Combined-Shape',fill:'#000000',opacity:'0.3'}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path',{d:'M8.56066017,16.6819805 L10.6819805,14.5606602 C11.267767,13.9748737 12.2175144,13.9748737 12.8033009,14.5606602 L14.9246212,16.6819805 C15.5104076,17.267767 15.5104076,18.2175144 14.9246212,18.8033009 L12.8033009,20.9246212 C12.2175144,21.5104076 11.267767,21.5104076 10.6819805,20.9246212 L8.56066017,18.8033009 C7.97487373,18.2175144 7.97487373,17.267767 8.56066017,16.6819805 Z M8.56066017,4.68198052 L10.6819805,2.56066017 C11.267767,1.97487373 12.2175144,1.97487373 12.8033009,2.56066017 L14.9246212,4.68198052 C15.5104076,5.26776695 15.5104076,6.21751442 14.9246212,6.80330086 L12.8033009,8.9246212 C12.2175144,9.51040764 11.267767,9.51040764 10.6819805,8.9246212 L8.56066017,6.80330086 C7.97487373,6.21751442 7.97487373,5.26776695 8.56066017,4.68198052 Z',id:'Combined-Shape',fill:'#000000'})))),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span',{className:'kt-menu__link-text'},'Group'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i',{className:'kt-menu__ver-arrow la la-angle-right'})),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:'kt-menu__submenu '},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span',{className:'kt-menu__arrow'}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('ul',{className:'kt-menu__subnav'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('li',{className:'kt-menu__item  kt-menu__item--parent','aria-haspopup':'true'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span',{className:'kt-menu__link'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span',{className:'kt-menu__link-text'},'Group'))),Object(__WEBPACK_IMPORTED_MODULE_4__common_MenuList__["a" /* checkPermission */])(this.props.auth,"CATEGORY","CREATE")&&__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('li',{className:'kt-menu__item ','aria-haspopup':'true'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_router_dom__["b" /* Link */],{to:'/admin/addcategory',className:'kt-menu__link '},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i',{className:'kt-menu__link-bullet kt-menu__link-bullet--dot'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span',null)),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span',{className:'kt-menu__link-text'},'Add Group'))),Object(__WEBPACK_IMPORTED_MODULE_4__common_MenuList__["a" /* checkPermission */])(this.props.auth,"CATEGORY","READ")&&__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('li',{className:'kt-menu__item ','aria-haspopup':'true'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_router_dom__["b" /* Link */],{to:'/admin/listcategory',className:'kt-menu__link '},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i',{className:'kt-menu__link-bullet kt-menu__link-bullet--dot'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span',null)),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span',{className:'kt-menu__link-text'},'List Group')))))),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('li',{className:'kt-menu__item  kt-menu__item--submenu','aria-haspopup':'true','data-ktmenu-submenu-toggle':'hover'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('a',{href:'javascript:;',className:'kt-menu__link kt-menu__toggle'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span',{className:'kt-menu__link-icon'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('svg',{xmlns:'http://www.w3.org/2000/svg',xmlnsXlink:'http://www.w3.org/1999/xlink',width:'24px',height:'24px',viewBox:'0 0 24 24',version:'1.1',className:'kt-svg-icon'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('g',{stroke:'none',strokeWidth:1,fill:'none',fillRule:'evenodd'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('rect',{id:'bound',x:0,y:0,width:24,height:24}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path',{d:'M7,3 L17,3 C19.209139,3 21,4.790861 21,7 C21,9.209139 19.209139,11 17,11 L7,11 C4.790861,11 3,9.209139 3,7 C3,4.790861 4.790861,3 7,3 Z M7,9 C8.1045695,9 9,8.1045695 9,7 C9,5.8954305 8.1045695,5 7,5 C5.8954305,5 5,5.8954305 5,7 C5,8.1045695 5.8954305,9 7,9 Z',id:'Combined-Shape',fill:'#000000'}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path',{d:'M7,13 L17,13 C19.209139,13 21,14.790861 21,17 C21,19.209139 19.209139,21 17,21 L7,21 C4.790861,21 3,19.209139 3,17 C3,14.790861 4.790861,13 7,13 Z M17,19 C18.1045695,19 19,18.1045695 19,17 C19,15.8954305 18.1045695,15 17,15 C15.8954305,15 15,15.8954305 15,17 C15,18.1045695 15.8954305,19 17,19 Z',id:'Combined-Shape',fill:'#000000',opacity:'0.3'})))),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span',{className:'kt-menu__link-text'},'Sub-Group'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i',{className:'kt-menu__ver-arrow la la-angle-right'})),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:'kt-menu__submenu '},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span',{className:'kt-menu__arrow'}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('ul',{className:'kt-menu__subnav'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('li',{className:'kt-menu__item  kt-menu__item--parent','aria-haspopup':'true'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span',{className:'kt-menu__link'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span',{className:'kt-menu__link-text'},'Sub-Group'))),Object(__WEBPACK_IMPORTED_MODULE_4__common_MenuList__["a" /* checkPermission */])(this.props.auth,"SUB_CATEGORY","CREATE")&&__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('li',{className:'kt-menu__item ','aria-haspopup':'true'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_router_dom__["b" /* Link */],{to:'/admin/addsubcategory',className:'kt-menu__link '},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i',{className:'kt-menu__link-bullet kt-menu__link-bullet--dot'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span',null)),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span',{className:'kt-menu__link-text'},'Add Sub-Group'))),Object(__WEBPACK_IMPORTED_MODULE_4__common_MenuList__["a" /* checkPermission */])(this.props.auth,"SUB_CATEGORY","READ")&&__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('li',{className:'kt-menu__item ','aria-haspopup':'true'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_router_dom__["b" /* Link */],{to:'/admin/listsubcategory',className:'kt-menu__link '},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i',{className:'kt-menu__link-bullet kt-menu__link-bullet--dot'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span',null)),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span',{className:'kt-menu__link-text'},'List Sub-Group')))))),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('li',{className:'kt-menu__item  kt-menu__item--submenu','aria-haspopup':'true','data-ktmenu-submenu-toggle':'hover'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_router_dom__["b" /* Link */],{to:'javascript:;',className:'kt-menu__link kt-menu__toggle'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span',{className:'kt-menu__link-icon'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('svg',{xmlns:'http://www.w3.org/2000/svg',xmlnsXlink:'http://www.w3.org/1999/xlink',width:'24px',height:'24px',viewBox:'0 0 24 24',version:'1.1',className:'kt-svg-icon'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('g',{stroke:'none',strokeWidth:1,fill:'none',fillRule:'evenodd'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('rect',{id:'bound',x:0,y:0,width:24,height:24}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path',{d:'M2.56066017,10.6819805 L4.68198052,8.56066017 C5.26776695,7.97487373 6.21751442,7.97487373 6.80330086,8.56066017 L8.9246212,10.6819805 C9.51040764,11.267767 9.51040764,12.2175144 8.9246212,12.8033009 L6.80330086,14.9246212 C6.21751442,15.5104076 5.26776695,15.5104076 4.68198052,14.9246212 L2.56066017,12.8033009 C1.97487373,12.2175144 1.97487373,11.267767 2.56066017,10.6819805 Z M14.5606602,10.6819805 L16.6819805,8.56066017 C17.267767,7.97487373 18.2175144,7.97487373 18.8033009,8.56066017 L20.9246212,10.6819805 C21.5104076,11.267767 21.5104076,12.2175144 20.9246212,12.8033009 L18.8033009,14.9246212 C18.2175144,15.5104076 17.267767,15.5104076 16.6819805,14.9246212 L14.5606602,12.8033009 C13.9748737,12.2175144 13.9748737,11.267767 14.5606602,10.6819805 Z',id:'Combined-Shape',fill:'#000000',opacity:'0.3'}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path',{d:'M8.56066017,16.6819805 L10.6819805,14.5606602 C11.267767,13.9748737 12.2175144,13.9748737 12.8033009,14.5606602 L14.9246212,16.6819805 C15.5104076,17.267767 15.5104076,18.2175144 14.9246212,18.8033009 L12.8033009,20.9246212 C12.2175144,21.5104076 11.267767,21.5104076 10.6819805,20.9246212 L8.56066017,18.8033009 C7.97487373,18.2175144 7.97487373,17.267767 8.56066017,16.6819805 Z M8.56066017,4.68198052 L10.6819805,2.56066017 C11.267767,1.97487373 12.2175144,1.97487373 12.8033009,2.56066017 L14.9246212,4.68198052 C15.5104076,5.26776695 15.5104076,6.21751442 14.9246212,6.80330086 L12.8033009,8.9246212 C12.2175144,9.51040764 11.267767,9.51040764 10.6819805,8.9246212 L8.56066017,6.80330086 C7.97487373,6.21751442 7.97487373,5.26776695 8.56066017,4.68198052 Z',id:'Combined-Shape',fill:'#000000'})))),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span',{className:'kt-menu__link-text'},'Sub-Group Child'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i',{className:'kt-menu__ver-arrow la la-angle-right'})),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:'kt-menu__submenu '},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span',{className:'kt-menu__arrow'}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('ul',{className:'kt-menu__subnav'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('li',{className:'kt-menu__item  kt-menu__item--parent','aria-haspopup':'true'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span',{className:'kt-menu__link'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span',{className:'kt-menu__link-text'},'Sub-Group Child'))),Object(__WEBPACK_IMPORTED_MODULE_4__common_MenuList__["a" /* checkPermission */])(this.props.auth,"SUB_CATEGORY_CHILD","CREATE")&&__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('li',{className:'kt-menu__item ','aria-haspopup':'true'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_router_dom__["b" /* Link */],{to:'/admin/addsubcategorychild',className:'kt-menu__link '},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i',{className:'kt-menu__link-bullet kt-menu__link-bullet--dot'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span',null)),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span',{className:'kt-menu__link-text'},'Add Sub-Group Child'))),Object(__WEBPACK_IMPORTED_MODULE_4__common_MenuList__["a" /* checkPermission */])(this.props.auth,"SUB_CATEGORY_CHILD","READ")&&__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('li',{className:'kt-menu__item ','aria-haspopup':'true'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_router_dom__["b" /* Link */],{to:'/admin/listsubcategorychild',className:'kt-menu__link '},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i',{className:'kt-menu__link-bullet kt-menu__link-bullet--dot'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span',null)),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span',{className:'kt-menu__link-text'},'List Sub-Group Child')))))),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('li',{className:'kt-menu__item  kt-menu__item--submenu','aria-haspopup':'true','data-ktmenu-submenu-toggle':'hover'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_router_dom__["b" /* Link */],{to:'javascript:;',className:'kt-menu__link kt-menu__toggle'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span',{className:'kt-menu__link-icon'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('svg',{xmlns:'http://www.w3.org/2000/svg',xmlnsXlink:'http://www.w3.org/1999/xlink',width:'24px',height:'24px',viewBox:'0 0 24 24',version:'1.1',className:'kt-svg-icon'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('g',{stroke:'none',strokeWidth:1,fill:'none',fillRule:'evenodd'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('rect',{id:'bound',x:0,y:0,width:24,height:24}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path',{d:'M7,3 L17,3 C19.209139,3 21,4.790861 21,7 C21,9.209139 19.209139,11 17,11 L7,11 C4.790861,11 3,9.209139 3,7 C3,4.790861 4.790861,3 7,3 Z M7,9 C8.1045695,9 9,8.1045695 9,7 C9,5.8954305 8.1045695,5 7,5 C5.8954305,5 5,5.8954305 5,7 C5,8.1045695 5.8954305,9 7,9 Z',id:'Combined-Shape',fill:'#000000'}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path',{d:'M7,13 L17,13 C19.209139,13 21,14.790861 21,17 C21,19.209139 19.209139,21 17,21 L7,21 C4.790861,21 3,19.209139 3,17 C3,14.790861 4.790861,13 7,13 Z M17,19 C18.1045695,19 19,18.1045695 19,17 C19,15.8954305 18.1045695,15 17,15 C15.8954305,15 15,15.8954305 15,17 C15,18.1045695 15.8954305,19 17,19 Z',id:'Combined-Shape',fill:'#000000',opacity:'0.3'})))),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span',{className:'kt-menu__link-text'},'Blog & Case Studies'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i',{className:'kt-menu__ver-arrow la la-angle-right'})),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:'kt-menu__submenu '},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span',{className:'kt-menu__arrow'}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('ul',{className:'kt-menu__subnav'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('li',{className:'kt-menu__item  kt-menu__item--parent','aria-haspopup':'true'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span',{className:'kt-menu__link'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span',{className:'kt-menu__link-text'},'Blog & Case Studies'))),Object(__WEBPACK_IMPORTED_MODULE_4__common_MenuList__["a" /* checkPermission */])(this.props.auth,"BLOG","CREATE")&&__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('li',{className:'kt-menu__item ','aria-haspopup':'true'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_router_dom__["b" /* Link */],{to:'/admin/addblog',className:'kt-menu__link '},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i',{className:'kt-menu__link-bullet kt-menu__link-bullet--dot'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span',null)),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span',{className:'kt-menu__link-text'},'Add Blog & News'))),Object(__WEBPACK_IMPORTED_MODULE_4__common_MenuList__["a" /* checkPermission */])(this.props.auth,"BLOG","READ")&&__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('li',{className:'kt-menu__item ','aria-haspopup':'true'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_router_dom__["b" /* Link */],{to:'/admin/listblog',className:'kt-menu__link '},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i',{className:'kt-menu__link-bullet kt-menu__link-bullet--dot'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span',null)),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span',{className:'kt-menu__link-text'},'List Blog & News')))))),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('li',{className:'kt-menu__section '},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('h4',{className:'kt-menu__section-text'},'Product Management'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i',{className:'kt-menu__section-icon flaticon-more-v2'})),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('li',{className:'kt-menu__item  kt-menu__item--submenu','aria-haspopup':'true','data-ktmenu-submenu-toggle':'hover'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_router_dom__["b" /* Link */],{to:'javascript:;',className:'kt-menu__link kt-menu__toggle'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span',{className:'kt-menu__link-icon'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('svg',{xmlns:'http://www.w3.org/2000/svg',xmlnsXlink:'http://www.w3.org/1999/xlink',width:'24px',height:'24px',viewBox:'0 0 24 24',version:'1.1',className:'kt-svg-icon'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('g',{stroke:'none',strokeWidth:1,fill:'none',fillRule:'evenodd'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('rect',{id:'bound',x:0,y:0,width:24,height:24}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path',{d:'M2.56066017,10.6819805 L4.68198052,8.56066017 C5.26776695,7.97487373 6.21751442,7.97487373 6.80330086,8.56066017 L8.9246212,10.6819805 C9.51040764,11.267767 9.51040764,12.2175144 8.9246212,12.8033009 L6.80330086,14.9246212 C6.21751442,15.5104076 5.26776695,15.5104076 4.68198052,14.9246212 L2.56066017,12.8033009 C1.97487373,12.2175144 1.97487373,11.267767 2.56066017,10.6819805 Z M14.5606602,10.6819805 L16.6819805,8.56066017 C17.267767,7.97487373 18.2175144,7.97487373 18.8033009,8.56066017 L20.9246212,10.6819805 C21.5104076,11.267767 21.5104076,12.2175144 20.9246212,12.8033009 L18.8033009,14.9246212 C18.2175144,15.5104076 17.267767,15.5104076 16.6819805,14.9246212 L14.5606602,12.8033009 C13.9748737,12.2175144 13.9748737,11.267767 14.5606602,10.6819805 Z',id:'Combined-Shape',fill:'#000000',opacity:'0.3'}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path',{d:'M8.56066017,16.6819805 L10.6819805,14.5606602 C11.267767,13.9748737 12.2175144,13.9748737 12.8033009,14.5606602 L14.9246212,16.6819805 C15.5104076,17.267767 15.5104076,18.2175144 14.9246212,18.8033009 L12.8033009,20.9246212 C12.2175144,21.5104076 11.267767,21.5104076 10.6819805,20.9246212 L8.56066017,18.8033009 C7.97487373,18.2175144 7.97487373,17.267767 8.56066017,16.6819805 Z M8.56066017,4.68198052 L10.6819805,2.56066017 C11.267767,1.97487373 12.2175144,1.97487373 12.8033009,2.56066017 L14.9246212,4.68198052 C15.5104076,5.26776695 15.5104076,6.21751442 14.9246212,6.80330086 L12.8033009,8.9246212 C12.2175144,9.51040764 11.267767,9.51040764 10.6819805,8.9246212 L8.56066017,6.80330086 C7.97487373,6.21751442 7.97487373,5.26776695 8.56066017,4.68198052 Z',id:'Combined-Shape',fill:'#000000'})))),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span',{className:'kt-menu__link-text'},'Products'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i',{className:'kt-menu__ver-arrow la la-angle-right'})),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:'kt-menu__submenu '},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span',{className:'kt-menu__arrow'}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('ul',{className:'kt-menu__subnav'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('li',{className:'kt-menu__item  kt-menu__item--parent','aria-haspopup':'true'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span',{className:'kt-menu__link'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span',{className:'kt-menu__link-text'},'Products'))),Object(__WEBPACK_IMPORTED_MODULE_4__common_MenuList__["a" /* checkPermission */])(this.props.auth,"PRODUCTS","CREATE")&&__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('li',{className:'kt-menu__item ','aria-haspopup':'true'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_router_dom__["b" /* Link */],{to:'/admin/addproduct',className:'kt-menu__link '},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i',{className:'kt-menu__link-bullet kt-menu__link-bullet--dot'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span',null)),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span',{className:'kt-menu__link-text'},'Add Products'))),Object(__WEBPACK_IMPORTED_MODULE_4__common_MenuList__["a" /* checkPermission */])(this.props.auth,"PRODUCTS","READ")&&__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('li',{className:'kt-menu__item ','aria-haspopup':'true'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_router_dom__["b" /* Link */],{to:'/admin/listproduct',className:'kt-menu__link '},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i',{className:'kt-menu__link-bullet kt-menu__link-bullet--dot'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span',null)),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span',{className:'kt-menu__link-text'},'List Products')))))),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('li',{className:'kt-menu__item  kt-menu__item--submenu','aria-haspopup':'true','data-ktmenu-submenu-toggle':'hover'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_router_dom__["b" /* Link */],{to:'javascript:;',className:'kt-menu__link kt-menu__toggle'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span',{className:'kt-menu__link-icon'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('svg',{xmlns:'http://www.w3.org/2000/svg',xmlnsXlink:'http://www.w3.org/1999/xlink',width:'24px',height:'24px',viewBox:'0 0 24 24',version:'1.1',className:'kt-svg-icon'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('g',{stroke:'none',strokeWidth:1,fill:'none',fillRule:'evenodd'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('rect',{id:'bound',x:0,y:0,width:24,height:24}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path',{d:'M2.56066017,10.6819805 L4.68198052,8.56066017 C5.26776695,7.97487373 6.21751442,7.97487373 6.80330086,8.56066017 L8.9246212,10.6819805 C9.51040764,11.267767 9.51040764,12.2175144 8.9246212,12.8033009 L6.80330086,14.9246212 C6.21751442,15.5104076 5.26776695,15.5104076 4.68198052,14.9246212 L2.56066017,12.8033009 C1.97487373,12.2175144 1.97487373,11.267767 2.56066017,10.6819805 Z M14.5606602,10.6819805 L16.6819805,8.56066017 C17.267767,7.97487373 18.2175144,7.97487373 18.8033009,8.56066017 L20.9246212,10.6819805 C21.5104076,11.267767 21.5104076,12.2175144 20.9246212,12.8033009 L18.8033009,14.9246212 C18.2175144,15.5104076 17.267767,15.5104076 16.6819805,14.9246212 L14.5606602,12.8033009 C13.9748737,12.2175144 13.9748737,11.267767 14.5606602,10.6819805 Z',id:'Combined-Shape',fill:'#000000',opacity:'0.3'}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path',{d:'M8.56066017,16.6819805 L10.6819805,14.5606602 C11.267767,13.9748737 12.2175144,13.9748737 12.8033009,14.5606602 L14.9246212,16.6819805 C15.5104076,17.267767 15.5104076,18.2175144 14.9246212,18.8033009 L12.8033009,20.9246212 C12.2175144,21.5104076 11.267767,21.5104076 10.6819805,20.9246212 L8.56066017,18.8033009 C7.97487373,18.2175144 7.97487373,17.267767 8.56066017,16.6819805 Z M8.56066017,4.68198052 L10.6819805,2.56066017 C11.267767,1.97487373 12.2175144,1.97487373 12.8033009,2.56066017 L14.9246212,4.68198052 C15.5104076,5.26776695 15.5104076,6.21751442 14.9246212,6.80330086 L12.8033009,8.9246212 C12.2175144,9.51040764 11.267767,9.51040764 10.6819805,8.9246212 L8.56066017,6.80330086 C7.97487373,6.21751442 7.97487373,5.26776695 8.56066017,4.68198052 Z',id:'Combined-Shape',fill:'#000000'})))),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span',{className:'kt-menu__link-text'},'Product Attribute Setup'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i',{className:'kt-menu__ver-arrow la la-angle-right'})),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:'kt-menu__submenu '},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span',{className:'kt-menu__arrow'}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('ul',{className:'kt-menu__subnav'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('li',{className:'kt-menu__item  kt-menu__item--parent','aria-haspopup':'true'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span',{className:'kt-menu__link'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span',{className:'kt-menu__link-text'},'Product Attribute Setup'))),Object(__WEBPACK_IMPORTED_MODULE_4__common_MenuList__["a" /* checkPermission */])(this.props.auth,"PRODUCTS","CREATE")&&__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('li',{className:'kt-menu__item ','aria-haspopup':'true'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_router_dom__["b" /* Link */],{to:'/admin/addparentattribute',className:'kt-menu__link '},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i',{className:'kt-menu__link-bullet kt-menu__link-bullet--dot'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span',null)),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span',{className:'kt-menu__link-text'},'Parent Attribute Category'))),Object(__WEBPACK_IMPORTED_MODULE_4__common_MenuList__["a" /* checkPermission */])(this.props.auth,"PRODUCTS","CREATE")&&__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('li',{className:'kt-menu__item ','aria-haspopup':'true'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_router_dom__["b" /* Link */],{to:'/admin/addattribute',className:'kt-menu__link '},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i',{className:'kt-menu__link-bullet kt-menu__link-bullet--dot'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span',null)),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span',{className:'kt-menu__link-text'},'Attribute Category')))))),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('li',{className:'kt-menu__section '},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('h4',{className:'kt-menu__section-text'},'Order  Management'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i',{className:'kt-menu__section-icon flaticon-more-v2'})),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('li',{className:'kt-menu__item  kt-menu__item--submenu','aria-haspopup':'true','data-ktmenu-submenu-toggle':'hover'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_router_dom__["b" /* Link */],{to:'javascript:;',className:'kt-menu__link kt-menu__toggle'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span',{className:'kt-menu__link-icon'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('svg',{xmlns:'http://www.w3.org/2000/svg',xmlnsXlink:'http://www.w3.org/1999/xlink',width:'24px',height:'24px',viewBox:'0 0 24 24',version:'1.1',className:'kt-svg-icon'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('g',{stroke:'none',strokeWidth:1,fill:'none',fillRule:'evenodd'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('rect',{id:'bound',x:0,y:0,width:24,height:24}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path',{d:'M7,3 L17,3 C19.209139,3 21,4.790861 21,7 C21,9.209139 19.209139,11 17,11 L7,11 C4.790861,11 3,9.209139 3,7 C3,4.790861 4.790861,3 7,3 Z M7,9 C8.1045695,9 9,8.1045695 9,7 C9,5.8954305 8.1045695,5 7,5 C5.8954305,5 5,5.8954305 5,7 C5,8.1045695 5.8954305,9 7,9 Z',id:'Combined-Shape',fill:'#000000'}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path',{d:'M7,13 L17,13 C19.209139,13 21,14.790861 21,17 C21,19.209139 19.209139,21 17,21 L7,21 C4.790861,21 3,19.209139 3,17 C3,14.790861 4.790861,13 7,13 Z M17,19 C18.1045695,19 19,18.1045695 19,17 C19,15.8954305 18.1045695,15 17,15 C15.8954305,15 15,15.8954305 15,17 C15,18.1045695 15.8954305,19 17,19 Z',id:'Combined-Shape',fill:'#000000',opacity:'0.3'})))),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span',{className:'kt-menu__link-text'},'Orders'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i',{className:'kt-menu__ver-arrow la la-angle-right'})),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:'kt-menu__submenu '},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span',{className:'kt-menu__arrow'}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('ul',{className:'kt-menu__subnav'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('li',{className:'kt-menu__item  kt-menu__item--parent','aria-haspopup':'true'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span',{className:'kt-menu__link'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span',{className:'kt-menu__link-text'},'Orders'))),Object(__WEBPACK_IMPORTED_MODULE_4__common_MenuList__["a" /* checkPermission */])(this.props.auth,"ORDER","READ")&&__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('li',{className:'kt-menu__item ','aria-haspopup':'true'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_router_dom__["b" /* Link */],{to:'/admin/listorder',className:'kt-menu__link '},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i',{className:'kt-menu__link-bullet kt-menu__link-bullet--dot'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span',null)),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span',{className:'kt-menu__link-text'},'Order List')))))),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('li',{className:'kt-menu__item  kt-menu__item--submenu','aria-haspopup':'true','data-ktmenu-submenu-toggle':'hover'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_router_dom__["b" /* Link */],{to:'javascript:;',className:'kt-menu__link kt-menu__toggle'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span',{className:'kt-menu__link-icon'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('svg',{xmlns:'http://www.w3.org/2000/svg',xmlnsXlink:'http://www.w3.org/1999/xlink',width:'24px',height:'24px',viewBox:'0 0 24 24',version:'1.1',className:'kt-svg-icon'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('g',{stroke:'none',strokeWidth:1,fill:'none',fillRule:'evenodd'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('rect',{id:'bound',x:0,y:0,width:24,height:24}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path',{d:'M2.56066017,10.6819805 L4.68198052,8.56066017 C5.26776695,7.97487373 6.21751442,7.97487373 6.80330086,8.56066017 L8.9246212,10.6819805 C9.51040764,11.267767 9.51040764,12.2175144 8.9246212,12.8033009 L6.80330086,14.9246212 C6.21751442,15.5104076 5.26776695,15.5104076 4.68198052,14.9246212 L2.56066017,12.8033009 C1.97487373,12.2175144 1.97487373,11.267767 2.56066017,10.6819805 Z M14.5606602,10.6819805 L16.6819805,8.56066017 C17.267767,7.97487373 18.2175144,7.97487373 18.8033009,8.56066017 L20.9246212,10.6819805 C21.5104076,11.267767 21.5104076,12.2175144 20.9246212,12.8033009 L18.8033009,14.9246212 C18.2175144,15.5104076 17.267767,15.5104076 16.6819805,14.9246212 L14.5606602,12.8033009 C13.9748737,12.2175144 13.9748737,11.267767 14.5606602,10.6819805 Z',id:'Combined-Shape',fill:'#000000',opacity:'0.3'}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path',{d:'M8.56066017,16.6819805 L10.6819805,14.5606602 C11.267767,13.9748737 12.2175144,13.9748737 12.8033009,14.5606602 L14.9246212,16.6819805 C15.5104076,17.267767 15.5104076,18.2175144 14.9246212,18.8033009 L12.8033009,20.9246212 C12.2175144,21.5104076 11.267767,21.5104076 10.6819805,20.9246212 L8.56066017,18.8033009 C7.97487373,18.2175144 7.97487373,17.267767 8.56066017,16.6819805 Z M8.56066017,4.68198052 L10.6819805,2.56066017 C11.267767,1.97487373 12.2175144,1.97487373 12.8033009,2.56066017 L14.9246212,4.68198052 C15.5104076,5.26776695 15.5104076,6.21751442 14.9246212,6.80330086 L12.8033009,8.9246212 C12.2175144,9.51040764 11.267767,9.51040764 10.6819805,8.9246212 L8.56066017,6.80330086 C7.97487373,6.21751442 7.97487373,5.26776695 8.56066017,4.68198052 Z',id:'Combined-Shape',fill:'#000000'})))),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span',{className:'kt-menu__link-text'},'Order Status'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i',{className:'kt-menu__ver-arrow la la-angle-right'})),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:'kt-menu__submenu '},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span',{className:'kt-menu__arrow'}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('ul',{className:'kt-menu__subnav'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('li',{className:'kt-menu__item  kt-menu__item--parent','aria-haspopup':'true'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span',{className:'kt-menu__link'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span',{className:'kt-menu__link-text'},'Order Status'))),Object(__WEBPACK_IMPORTED_MODULE_4__common_MenuList__["a" /* checkPermission */])(this.props.auth,"PRODUCTS","CREATE")&&__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('li',{className:'kt-menu__item ','aria-haspopup':'true'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_router_dom__["b" /* Link */],{to:'/admin/addorderstatus',className:'kt-menu__link '},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i',{className:'kt-menu__link-bullet kt-menu__link-bullet--dot'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span',null)),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span',{className:'kt-menu__link-text'},'Add Order Status'))),Object(__WEBPACK_IMPORTED_MODULE_4__common_MenuList__["a" /* checkPermission */])(this.props.auth,"PRODUCTS","READ")&&__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('li',{className:'kt-menu__item ','aria-haspopup':'true'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_router_dom__["b" /* Link */],{to:'/admin/listorderstatus',className:'kt-menu__link '},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i',{className:'kt-menu__link-bullet kt-menu__link-bullet--dot'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span',null)),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span',{className:'kt-menu__link-text'},'List Order Status')))))),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('li',{className:'kt-menu__item  kt-menu__item--submenu','aria-haspopup':'true','data-ktmenu-submenu-toggle':'hover'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_router_dom__["b" /* Link */],{to:'javascript:;',className:'kt-menu__link kt-menu__toggle'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span',{className:'kt-menu__link-icon'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('svg',{xmlns:'http://www.w3.org/2000/svg',xmlnsXlink:'http://www.w3.org/1999/xlink',width:'24px',height:'24px',viewBox:'0 0 24 24',version:'1.1',className:'kt-svg-icon'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('g',{stroke:'none',strokeWidth:1,fill:'none',fillRule:'evenodd'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('rect',{id:'bound',x:0,y:0,width:24,height:24}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path',{d:'M7,3 L17,3 C19.209139,3 21,4.790861 21,7 C21,9.209139 19.209139,11 17,11 L7,11 C4.790861,11 3,9.209139 3,7 C3,4.790861 4.790861,3 7,3 Z M7,9 C8.1045695,9 9,8.1045695 9,7 C9,5.8954305 8.1045695,5 7,5 C5.8954305,5 5,5.8954305 5,7 C5,8.1045695 5.8954305,9 7,9 Z',id:'Combined-Shape',fill:'#000000'}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path',{d:'M7,13 L17,13 C19.209139,13 21,14.790861 21,17 C21,19.209139 19.209139,21 17,21 L7,21 C4.790861,21 3,19.209139 3,17 C3,14.790861 4.790861,13 7,13 Z M17,19 C18.1045695,19 19,18.1045695 19,17 C19,15.8954305 18.1045695,15 17,15 C15.8954305,15 15,15.8954305 15,17 C15,18.1045695 15.8954305,19 17,19 Z',id:'Combined-Shape',fill:'#000000',opacity:'0.3'})))),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span',{className:'kt-menu__link-text'},'Shipping'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i',{className:'kt-menu__ver-arrow la la-angle-right'})),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:'kt-menu__submenu '},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span',{className:'kt-menu__arrow'}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('ul',{className:'kt-menu__subnav'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('li',{className:'kt-menu__item  kt-menu__item--parent','aria-haspopup':'true'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span',{className:'kt-menu__link'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span',{className:'kt-menu__link-text'},'Shipping'))),Object(__WEBPACK_IMPORTED_MODULE_4__common_MenuList__["a" /* checkPermission */])(this.props.auth,"SHIPPING","CREATE")&&__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('li',{className:'kt-menu__item ','aria-haspopup':'true'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_router_dom__["b" /* Link */],{to:'/admin/addshipping',className:'kt-menu__link '},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i',{className:'kt-menu__link-bullet kt-menu__link-bullet--dot'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span',null)),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span',{className:'kt-menu__link-text'},'Add Shipping'))),Object(__WEBPACK_IMPORTED_MODULE_4__common_MenuList__["a" /* checkPermission */])(this.props.auth,"SHIPPING","READ")&&__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('li',{className:'kt-menu__item ','aria-haspopup':'true'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_router_dom__["b" /* Link */],{to:'/admin/listshipping',className:'kt-menu__link '},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i',{className:'kt-menu__link-bullet kt-menu__link-bullet--dot'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span',null)),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span',{className:'kt-menu__link-text'},'List Shipping')))))),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('li',{className:'kt-menu__item  kt-menu__item--submenu','aria-haspopup':'true','data-ktmenu-submenu-toggle':'hover'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_router_dom__["b" /* Link */],{to:'javascript:;',className:'kt-menu__link kt-menu__toggle'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span',{className:'kt-menu__link-icon'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('svg',{xmlns:'http://www.w3.org/2000/svg',xmlnsXlink:'http://www.w3.org/1999/xlink',width:'24px',height:'24px',viewBox:'0 0 24 24',version:'1.1',className:'kt-svg-icon'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('g',{stroke:'none',strokeWidth:1,fill:'none',fillRule:'evenodd'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('rect',{id:'bound',x:0,y:0,width:24,height:24}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path',{d:'M7,3 L17,3 C19.209139,3 21,4.790861 21,7 C21,9.209139 19.209139,11 17,11 L7,11 C4.790861,11 3,9.209139 3,7 C3,4.790861 4.790861,3 7,3 Z M7,9 C8.1045695,9 9,8.1045695 9,7 C9,5.8954305 8.1045695,5 7,5 C5.8954305,5 5,5.8954305 5,7 C5,8.1045695 5.8954305,9 7,9 Z',id:'Combined-Shape',fill:'#000000'}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path',{d:'M7,13 L17,13 C19.209139,13 21,14.790861 21,17 C21,19.209139 19.209139,21 17,21 L7,21 C4.790861,21 3,19.209139 3,17 C3,14.790861 4.790861,13 7,13 Z M17,19 C18.1045695,19 19,18.1045695 19,17 C19,15.8954305 18.1045695,15 17,15 C15.8954305,15 15,15.8954305 15,17 C15,18.1045695 15.8954305,19 17,19 Z',id:'Combined-Shape',fill:'#000000',opacity:'0.3'})))),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span',{className:'kt-menu__link-text'},'Coupon'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i',{className:'kt-menu__ver-arrow la la-angle-right'})),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:'kt-menu__submenu '},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span',{className:'kt-menu__arrow'}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('ul',{className:'kt-menu__subnav'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('li',{className:'kt-menu__item  kt-menu__item--parent','aria-haspopup':'true'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span',{className:'kt-menu__link'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span',{className:'kt-menu__link-text'},'Coupon'))),Object(__WEBPACK_IMPORTED_MODULE_4__common_MenuList__["a" /* checkPermission */])(this.props.auth,"COUPON","CREATE")&&__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('li',{className:'kt-menu__item ','aria-haspopup':'true'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_router_dom__["b" /* Link */],{to:'/admin/addcoupon',className:'kt-menu__link '},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i',{className:'kt-menu__link-bullet kt-menu__link-bullet--dot'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span',null)),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span',{className:'kt-menu__link-text'},'Add Coupon'))),Object(__WEBPACK_IMPORTED_MODULE_4__common_MenuList__["a" /* checkPermission */])(this.props.auth,"COUPON","READ")&&__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('li',{className:'kt-menu__item ','aria-haspopup':'true'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_router_dom__["b" /* Link */],{to:'/admin/listcoupon',className:'kt-menu__link '},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i',{className:'kt-menu__link-bullet kt-menu__link-bullet--dot'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span',null)),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span',{className:'kt-menu__link-text'},'List Coupon')))))),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('li',{className:'kt-menu__section '},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('h4',{className:'kt-menu__section-text'},'Site Setup'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i',{className:'kt-menu__section-icon flaticon-more-v2'})),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('li',{className:'kt-menu__item  kt-menu__item--submenu  ','aria-haspopup':'true','data-ktmenu-submenu-toggle':'hover'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_router_dom__["b" /* Link */],{to:'javascript:;',className:'kt-menu__link kt-menu__toggle'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span',{className:'kt-menu__link-icon'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('svg',{xmlns:'http://www.w3.org/2000/svg',xmlnsXlink:'http://www.w3.org/1999/xlink',width:'24px',height:'24px',viewBox:'0 0 24 24',version:'1.1',className:'kt-svg-icon'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('g',{stroke:'none',strokeWidth:1,fill:'none',fillRule:'evenodd'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('rect',{id:'bound',x:0,y:0,width:24,height:24}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path',{d:'M4,9.67471899 L10.880262,13.6470401 C10.9543486,13.689814 11.0320333,13.7207107 11.1111111,13.740321 L11.1111111,21.4444444 L4.49070127,17.526473 C4.18655139,17.3464765 4,17.0193034 4,16.6658832 L4,9.67471899 Z M20,9.56911707 L20,16.6658832 C20,17.0193034 19.8134486,17.3464765 19.5092987,17.526473 L12.8888889,21.4444444 L12.8888889,13.6728275 C12.9050191,13.6647696 12.9210067,13.6561758 12.9368301,13.6470401 L20,9.56911707 Z',id:'Combined-Shape',fill:'#000000'}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path',{d:'M4.21611835,7.74669402 C4.30015839,7.64056877 4.40623188,7.55087574 4.5299008,7.48500698 L11.5299008,3.75665466 C11.8237589,3.60013944 12.1762411,3.60013944 12.4700992,3.75665466 L19.4700992,7.48500698 C19.5654307,7.53578262 19.6503066,7.60071528 19.7226939,7.67641889 L12.0479413,12.1074394 C11.9974761,12.1365754 11.9509488,12.1699127 11.9085461,12.2067543 C11.8661433,12.1699127 11.819616,12.1365754 11.7691509,12.1074394 L4.21611835,7.74669402 Z',id:'Path',fill:'#000000',opacity:'0.3'})))),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span',{className:'kt-menu__link-text'},'Settings'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i',{className:'kt-menu__ver-arrow la la-angle-right'})),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:'kt-menu__submenu '},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span',{className:'kt-menu__arrow'}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('ul',{className:'kt-menu__subnav'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('li',{className:'kt-menu__item  kt-menu__item--parent','aria-haspopup':'true'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span',{className:'kt-menu__link'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span',{className:'kt-menu__link-text'},'Settings'))),Object(__WEBPACK_IMPORTED_MODULE_4__common_MenuList__["a" /* checkPermission */])(this.props.auth,"SETTING","CREATE")&&__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('li',{className:'kt-menu__item ','aria-haspopup':'true'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_router_dom__["b" /* Link */],{to:'/admin/sitesetting',className:'kt-menu__link '},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i',{className:'kt-menu__link-bullet kt-menu__link-bullet--dot'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span',null)),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span',{className:'kt-menu__link-text'},'Site Settings'))),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('li',{className:'kt-menu__item ','aria-haspopup':'true'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_router_dom__["b" /* Link */],{to:'/admin/updatepassword',className:'kt-menu__link '},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i',{className:'kt-menu__link-bullet kt-menu__link-bullet--dot'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span',null)),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span',{className:'kt-menu__link-text'},'Update Password')))))),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('li',{className:'kt-menu__item  kt-menu__item--submenu','aria-haspopup':'true','data-ktmenu-submenu-toggle':'hover'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_router_dom__["b" /* Link */],{to:'javascript:;',className:'kt-menu__link kt-menu__toggle'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span',{className:'kt-menu__link-icon'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('svg',{xmlns:'http://www.w3.org/2000/svg',xmlnsXlink:'http://www.w3.org/1999/xlink',width:'24px',height:'24px',viewBox:'0 0 24 24',version:'1.1',className:'kt-svg-icon'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('g',{stroke:'none',strokeWidth:1,fill:'none',fillRule:'evenodd'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('rect',{id:'bound',x:0,y:0,width:24,height:24}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path',{d:'M7,3 L17,3 C19.209139,3 21,4.790861 21,7 C21,9.209139 19.209139,11 17,11 L7,11 C4.790861,11 3,9.209139 3,7 C3,4.790861 4.790861,3 7,3 Z M7,9 C8.1045695,9 9,8.1045695 9,7 C9,5.8954305 8.1045695,5 7,5 C5.8954305,5 5,5.8954305 5,7 C5,8.1045695 5.8954305,9 7,9 Z',id:'Combined-Shape',fill:'#000000'}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path',{d:'M7,13 L17,13 C19.209139,13 21,14.790861 21,17 C21,19.209139 19.209139,21 17,21 L7,21 C4.790861,21 3,19.209139 3,17 C3,14.790861 4.790861,13 7,13 Z M17,19 C18.1045695,19 19,18.1045695 19,17 C19,15.8954305 18.1045695,15 17,15 C15.8954305,15 15,15.8954305 15,17 C15,18.1045695 15.8954305,19 17,19 Z',id:'Combined-Shape',fill:'#000000',opacity:'0.3'})))),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span',{className:'kt-menu__link-text'},'Team'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i',{className:'kt-menu__ver-arrow la la-angle-right'})),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:'kt-menu__submenu '},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span',{className:'kt-menu__arrow'}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('ul',{className:'kt-menu__subnav'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('li',{className:'kt-menu__item  kt-menu__item--parent','aria-haspopup':'true'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span',{className:'kt-menu__link'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span',{className:'kt-menu__link-text'},'Team'))),Object(__WEBPACK_IMPORTED_MODULE_4__common_MenuList__["a" /* checkPermission */])(this.props.auth,"COUPON","CREATE")&&__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('li',{className:'kt-menu__item ','aria-haspopup':'true'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_router_dom__["b" /* Link */],{to:'/admin/addteam',className:'kt-menu__link '},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i',{className:'kt-menu__link-bullet kt-menu__link-bullet--dot'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span',null)),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span',{className:'kt-menu__link-text'},'Add Team'))),Object(__WEBPACK_IMPORTED_MODULE_4__common_MenuList__["a" /* checkPermission */])(this.props.auth,"COUPON","READ")&&__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('li',{className:'kt-menu__item ','aria-haspopup':'true'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_router_dom__["b" /* Link */],{to:'/admin/listteam',className:'kt-menu__link '},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i',{className:'kt-menu__link-bullet kt-menu__link-bullet--dot'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span',null)),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span',{className:'kt-menu__link-text'},'List Team')))))),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('li',{className:'kt-menu__section '},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('h4',{className:'kt-menu__section-text'},'Manage Admin'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i',{className:'kt-menu__section-icon flaticon-more-v2'})),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('li',{className:'kt-menu__item  kt-menu__item--submenu  ','aria-haspopup':'true','data-ktmenu-submenu-toggle':'hover'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_router_dom__["b" /* Link */],{to:'javascript:;',className:'kt-menu__link kt-menu__toggle'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span',{className:'kt-menu__link-icon'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('svg',{xmlns:'http://www.w3.org/2000/svg',xmlnsXlink:'http://www.w3.org/1999/xlink',width:'24px',height:'24px',viewBox:'0 0 24 24',version:'1.1',className:'kt-svg-icon'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('g',{stroke:'none',strokeWidth:1,fill:'none',fillRule:'evenodd'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('rect',{id:'bound',x:0,y:0,width:24,height:24}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path',{d:'M4,9.67471899 L10.880262,13.6470401 C10.9543486,13.689814 11.0320333,13.7207107 11.1111111,13.740321 L11.1111111,21.4444444 L4.49070127,17.526473 C4.18655139,17.3464765 4,17.0193034 4,16.6658832 L4,9.67471899 Z M20,9.56911707 L20,16.6658832 C20,17.0193034 19.8134486,17.3464765 19.5092987,17.526473 L12.8888889,21.4444444 L12.8888889,13.6728275 C12.9050191,13.6647696 12.9210067,13.6561758 12.9368301,13.6470401 L20,9.56911707 Z',id:'Combined-Shape',fill:'#000000'}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path',{d:'M4.21611835,7.74669402 C4.30015839,7.64056877 4.40623188,7.55087574 4.5299008,7.48500698 L11.5299008,3.75665466 C11.8237589,3.60013944 12.1762411,3.60013944 12.4700992,3.75665466 L19.4700992,7.48500698 C19.5654307,7.53578262 19.6503066,7.60071528 19.7226939,7.67641889 L12.0479413,12.1074394 C11.9974761,12.1365754 11.9509488,12.1699127 11.9085461,12.2067543 C11.8661433,12.1699127 11.819616,12.1365754 11.7691509,12.1074394 L4.21611835,7.74669402 Z',id:'Path',fill:'#000000',opacity:'0.3'})))),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span',{className:'kt-menu__link-text'},'Role'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i',{className:'kt-menu__ver-arrow la la-angle-right'})),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:'kt-menu__submenu '},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span',{className:'kt-menu__arrow'}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('ul',{className:'kt-menu__subnav'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('li',{className:'kt-menu__item  kt-menu__item--parent','aria-haspopup':'true'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span',{className:'kt-menu__link'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span',{className:'kt-menu__link-text'},'Role'))),Object(__WEBPACK_IMPORTED_MODULE_4__common_MenuList__["a" /* checkPermission */])(this.props.auth,"ROLE","CREATE")&&__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('li',{className:'kt-menu__item ','aria-haspopup':'true'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_router_dom__["b" /* Link */],{to:'/admin/addrole',className:'kt-menu__link '},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i',{className:'kt-menu__link-bullet kt-menu__link-bullet--dot'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span',null)),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span',{className:'kt-menu__link-text'},'Add Role'))),Object(__WEBPACK_IMPORTED_MODULE_4__common_MenuList__["a" /* checkPermission */])(this.props.auth,"ROLE","READ")&&__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('li',{className:'kt-menu__item ','aria-haspopup':'true'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_router_dom__["b" /* Link */],{to:'/admin/listrole',className:'kt-menu__link '},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i',{className:'kt-menu__link-bullet kt-menu__link-bullet--dot'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span',null)),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span',{className:'kt-menu__link-text'},'List Role')))))),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('li',{className:'kt-menu__item  kt-menu__item--submenu','aria-haspopup':'true','data-ktmenu-submenu-toggle':'hover'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_router_dom__["b" /* Link */],{to:'javascript:;',className:'kt-menu__link kt-menu__toggle'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span',{className:'kt-menu__link-icon'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('svg',{xmlns:'http://www.w3.org/2000/svg',xmlnsXlink:'http://www.w3.org/1999/xlink',width:'24px',height:'24px',viewBox:'0 0 24 24',version:'1.1',className:'kt-svg-icon'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('g',{stroke:'none',strokeWidth:1,fill:'none',fillRule:'evenodd'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('rect',{id:'bound',x:0,y:0,width:24,height:24}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path',{d:'M7,3 L17,3 C19.209139,3 21,4.790861 21,7 C21,9.209139 19.209139,11 17,11 L7,11 C4.790861,11 3,9.209139 3,7 C3,4.790861 4.790861,3 7,3 Z M7,9 C8.1045695,9 9,8.1045695 9,7 C9,5.8954305 8.1045695,5 7,5 C5.8954305,5 5,5.8954305 5,7 C5,8.1045695 5.8954305,9 7,9 Z',id:'Combined-Shape',fill:'#000000'}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path',{d:'M7,13 L17,13 C19.209139,13 21,14.790861 21,17 C21,19.209139 19.209139,21 17,21 L7,21 C4.790861,21 3,19.209139 3,17 C3,14.790861 4.790861,13 7,13 Z M17,19 C18.1045695,19 19,18.1045695 19,17 C19,15.8954305 18.1045695,15 17,15 C15.8954305,15 15,15.8954305 15,17 C15,18.1045695 15.8954305,19 17,19 Z',id:'Combined-Shape',fill:'#000000',opacity:'0.3'})))),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span',{className:'kt-menu__link-text'},'Admins'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i',{className:'kt-menu__ver-arrow la la-angle-right'})),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:'kt-menu__submenu '},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span',{className:'kt-menu__arrow'}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('ul',{className:'kt-menu__subnav'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('li',{className:'kt-menu__item  kt-menu__item--parent','aria-haspopup':'true'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span',{className:'kt-menu__link'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span',{className:'kt-menu__link-text'},'Admins'))),Object(__WEBPACK_IMPORTED_MODULE_4__common_MenuList__["a" /* checkPermission */])(this.props.auth,"ADMIN","CREATE")&&__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('li',{className:'kt-menu__item ','aria-haspopup':'true'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_router_dom__["b" /* Link */],{to:'/admin/addadmin',className:'kt-menu__link '},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i',{className:'kt-menu__link-bullet kt-menu__link-bullet--dot'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span',null)),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span',{className:'kt-menu__link-text'},'Add Admin'))),Object(__WEBPACK_IMPORTED_MODULE_4__common_MenuList__["a" /* checkPermission */])(this.props.auth,"ADMIN","READ")&&__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('li',{className:'kt-menu__item ','aria-haspopup':'true'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_router_dom__["b" /* Link */],{to:'/admin/listadmin',className:'kt-menu__link '},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i',{className:'kt-menu__link-bullet kt-menu__link-bullet--dot'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span',null)),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span',{className:'kt-menu__link-text'},'List Admin')))))))))));}}]);return Asidebar;}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);Asidebar.propTypes={auth:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object.isRequired};var mapStateToProps=function mapStateToProps(state){return{auth:state.auth,errors:state.errors};};/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_2_react_redux__["b" /* connect */])(mapStateToProps,{})(Asidebar));

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__AppSetting__ = __webpack_require__(30);
function Header(){return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{style:{paddingTop:20}},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('button',{className:'kt-header-menu-wrapper-close',id:'kt_header_menu_mobile_close_btn'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i',{className:'la la-close'})),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:'kt-header-menu-wrapper',id:'kt_header_menu_wrapper'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{id:'kt_header_menu',className:'kt-header-menu kt-header-menu-mobile  kt-header-menu--layout-default '},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('ul',{className:'kt-menu__nav '},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('li',{className:'kt-menu__item  kt-menu__item--submenu kt-menu__item--rel','data-ktmenu-submenu-toggle':'click','aria-haspopup':'true'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["b" /* Link */],{to:'javascript:;',className:'kt-menu__link kt-menu__toggle'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span',{className:'kt-menu__link-text'},'Links')),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:'kt-menu__submenu kt-menu__submenu--classic kt-menu__submenu--left'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('ul',{className:'kt-menu__subnav'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('li',{className:'kt-menu__item ','aria-haspopup':'true'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('a',{href:__WEBPACK_IMPORTED_MODULE_2__AppSetting__["a" /* AppSetting */].url,target:'_blank',className:'kt-menu__link '},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span',{className:'kt-menu__link-icon'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('svg',{xmlns:'http://www.w3.org/2000/svg',xmlnsXlink:'http://www.w3.org/1999/xlink',width:'24px',height:'24px',viewBox:'0 0 24 24',version:'1.1',className:'kt-svg-icon'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('g',{stroke:'none',strokeWidth:1,fill:'none',fillRule:'evenodd'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('rect',{id:'bound',x:0,y:0,width:24,height:24}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path',{d:'M8,17 C8.55228475,17 9,17.4477153 9,18 L9,21 C9,21.5522847 8.55228475,22 8,22 L3,22 C2.44771525,22 2,21.5522847 2,21 L2,18 C2,17.4477153 2.44771525,17 3,17 L3,16.5 C3,15.1192881 4.11928813,14 5.5,14 C6.88071187,14 8,15.1192881 8,16.5 L8,17 Z M5.5,15 C4.67157288,15 4,15.6715729 4,16.5 L4,17 L7,17 L7,16.5 C7,15.6715729 6.32842712,15 5.5,15 Z',id:'Mask',fill:'#000000',opacity:'0.3'}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path',{d:'M2,11.8650466 L2,6 C2,4.34314575 3.34314575,3 5,3 L19,3 C20.6568542,3 22,4.34314575 22,6 L22,15 C22,15.0032706 21.9999948,15.0065399 21.9999843,15.009808 L22.0249378,15 L22.0249378,19.5857864 C22.0249378,20.1380712 21.5772226,20.5857864 21.0249378,20.5857864 C20.7597213,20.5857864 20.5053674,20.4804296 20.317831,20.2928932 L18.0249378,18 L12.9835977,18 C12.7263047,14.0909841 9.47412135,11 5.5,11 C4.23590829,11 3.04485894,11.3127315 2,11.8650466 Z M6,7 C5.44771525,7 5,7.44771525 5,8 C5,8.55228475 5.44771525,9 6,9 L15,9 C15.5522847,9 16,8.55228475 16,8 C16,7.44771525 15.5522847,7 15,7 L6,7 Z',id:'Combined-Shape',fill:'#000000'})))),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span',{className:'kt-menu__link-text'},'Visit Website'))))))))));}/* harmony default export */ __webpack_exports__["a"] = (Header);

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__actions_authAction__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_axios__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_appendScript__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils_removeScript__ = __webpack_require__(224);
var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var HeaderTopbar=function(_Component){_inherits(HeaderTopbar,_Component);function HeaderTopbar(){_classCallCheck(this,HeaderTopbar);return _possibleConstructorReturn(this,(HeaderTopbar.__proto__||Object.getPrototypeOf(HeaderTopbar)).apply(this,arguments));}_createClass(HeaderTopbar,[{key:'onLogoutClick',value:function onLogoutClick(e){e.preventDefault();this.props.logoutUser();}},{key:'componentDidMount',value:function componentDidMount(){// appendScript("/assets/vendors/general/jquery/dist/jquery.js");
// appendScript("/assets/vendors/general/popper.js/dist/umd/popper.js");
// appendScript("/assets/vendors/general/sticky-js/dist/sticky.min.js");
// appendScript("/assets/vendors/general/bootstrap/dist/js/bootstrap.min.js");
// appendScript("/assets/vendors/general/perfect-scrollbar/dist/perfect-scrollbar.js");
// appendScript("/assets/demo/default/base/scripts.bundle.js");
// appendScript("/assets/app/bundle/app.bundle.js");
Object(__WEBPACK_IMPORTED_MODULE_5__utils_appendScript__["a" /* default */])("/js/jquery.js");Object(__WEBPACK_IMPORTED_MODULE_5__utils_appendScript__["a" /* default */])("/js/popper.js");Object(__WEBPACK_IMPORTED_MODULE_5__utils_appendScript__["a" /* default */])("/js/sticky.min.js");Object(__WEBPACK_IMPORTED_MODULE_5__utils_appendScript__["a" /* default */])("/js/bootstrap.min.js");Object(__WEBPACK_IMPORTED_MODULE_5__utils_appendScript__["a" /* default */])("/js/perfect-scrollbar.js");Object(__WEBPACK_IMPORTED_MODULE_5__utils_appendScript__["a" /* default */])("/js/scripts.bundle.js");Object(__WEBPACK_IMPORTED_MODULE_5__utils_appendScript__["a" /* default */])("/js/app.bundle.js");}// componentDidUnmount () {
//   removeScript("/assets/vendors/general/jquery/dist/jquery.js");
//   removeScript("/assets/vendors/general/perfect-scrollbar/dist/perfect-scrollbar.js");
//   removeScript("/assets/demo/default/base/scripts.bundle.js");
//   removeScript("/assets/app/bundle/app.bundle.js");
// }
},{key:'render',value:function render(){var user=this.props.auth.user;return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:'kt-header__topbar'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:'kt-header__topbar-item kt-header__topbar-item--user'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:'kt-header__topbar-wrapper','data-toggle':'dropdown','data-offset':'0px,0px'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:'kt-header__topbar-user'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span',{className:'kt-header__topbar-welcome kt-hidden-mobile'},'Hi,'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span',{className:'kt-header__topbar-username kt-hidden-mobile'},user.name),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img',{className:'kt-hidden',alt:'Pic',src:'../assets/media/users/300_25.jpg'}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:'kt-notification__custom'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('button',{onClick:this.onLogoutClick.bind(this),className:'btn btn-brand btn-sm btn-bold text-white'},'Sign Out')))),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:'dropdown-menu dropdown-menu-fit dropdown-menu-right dropdown-menu-anim dropdown-menu-top-unround dropdown-menu-xl'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:'kt-user-card kt-user-card--skin-dark kt-notification-item-padding-x',style:{backgroundImage:'url(../assets/media/misc/bg-1.jpg)'}},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:'kt-user-card__avatar'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img',{className:'kt-hidden',alt:'Pic',src:'../assets/media/users/300_25.jpg'}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span',{className:'kt-badge kt-badge--lg kt-badge--rounded kt-badge--bold kt-font-success'},'M')),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:'kt-user-card__name'},user.name),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:'kt-notification__custom'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('a',{onClick:this.onLogoutClick.bind(this),href:'javascript:void(0);',target:'_blank',className:'btn btn-label-brand btn-sm btn-bold text-white'},'Sign Out'))))));}}]);return HeaderTopbar;}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);HeaderTopbar.propTypes={auth:__WEBPACK_IMPORTED_MODULE_1_prop_types__["PropTypes"].object.isRequired,logoutUser:__WEBPACK_IMPORTED_MODULE_1_prop_types__["PropTypes"].func.isRequired};var mapStateToProps=function mapStateToProps(state){return{auth:state.auth,errors:state.errors};};/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_2_react_redux__["b" /* connect */])(mapStateToProps,{logoutUser:__WEBPACK_IMPORTED_MODULE_3__actions_authAction__["c" /* logoutUser */]})(HeaderTopbar));

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_date_and_time__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_date_and_time___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_date_and_time__);
var now=new Date();function SubHeader(props){return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:'kt-subheader   kt-grid__item',id:'kt_subheader'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:'kt-subheader__main'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span',{className:'kt-subheader__separator kt-hidden'}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:'kt-subheader__breadcrumbs'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('a',{href:'/dashboard',className:'kt-subheader__breadcrumbs-home'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i',{className:'flaticon2-shelter'})),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span',{className:'kt-subheader__breadcrumbs-separator'}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('a',{href:true,className:'kt-subheader__breadcrumbs-link'},props.first,' '),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span',{className:'kt-subheader__breadcrumbs-separator'}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('a',{href:true,className:'kt-subheader__breadcrumbs-link'},props.second,' '),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span',{className:'kt-subheader__breadcrumbs-separator'}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('a',{href:true,className:'kt-subheader__breadcrumbs-link'},props.third,' '))),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:'kt-subheader__toolbar'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:'kt-subheader__wrapper'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('a',{href:'#',className:'btn kt-subheader__btn-daterange',id:'kt_dashboard_daterangepicker','data-toggle':'kt-tooltip',title:'Have a Nice Day','data-placement':'left'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span',{className:'kt-subheader__btn-daterange-title',id:'kt_dashboard_daterangepicker_title'},'Today'),'\xA0',__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span',{className:'kt-subheader__btn-daterange-date',id:'kt_dashboard_daterangepicker_date'},__WEBPACK_IMPORTED_MODULE_1_date_and_time___default.a.format(now,'MMM DD YYYY')),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('svg',{xmlns:'http://www.w3.org/2000/svg',xmlnsXlink:'http://www.w3.org/1999/xlink',width:'24px',height:'24px',viewBox:'0 0 24 24',version:'1.1',className:'kt-svg-icon kt-svg-icon--sm'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('g',{stroke:'none',strokeWidth:1,fill:'none',fillRule:'evenodd'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('rect',{id:'bound',x:0,y:0,width:24,height:24}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path',{d:'M4.875,20.75 C4.63541667,20.75 4.39583333,20.6541667 4.20416667,20.4625 L2.2875,18.5458333 C1.90416667,18.1625 1.90416667,17.5875 2.2875,17.2041667 C2.67083333,16.8208333 3.29375,16.8208333 3.62916667,17.2041667 L4.875,18.45 L8.0375,15.2875 C8.42083333,14.9041667 8.99583333,14.9041667 9.37916667,15.2875 C9.7625,15.6708333 9.7625,16.2458333 9.37916667,16.6291667 L5.54583333,20.4625 C5.35416667,20.6541667 5.11458333,20.75 4.875,20.75 Z',id:'check',fill:'#000000',fillRule:'nonzero',opacity:'0.3'}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path',{d:'M2,11.8650466 L2,6 C2,4.34314575 3.34314575,3 5,3 L19,3 C20.6568542,3 22,4.34314575 22,6 L22,15 C22,15.0032706 21.9999948,15.0065399 21.9999843,15.009808 L22.0249378,15 L22.0249378,19.5857864 C22.0249378,20.1380712 21.5772226,20.5857864 21.0249378,20.5857864 C20.7597213,20.5857864 20.5053674,20.4804296 20.317831,20.2928932 L18.0249378,18 L12.9835977,18 C12.7263047,14.0909841 9.47412135,11 5.5,11 C4.23590829,11 3.04485894,11.3127315 2,11.8650466 Z M6,7 C5.44771525,7 5,7.44771525 5,8 C5,8.55228475 5.44771525,9 6,9 L15,9 C15.5522847,9 16,8.55228475 16,8 C16,7.44771525 15.5522847,7 15,7 L6,7 Z',id:'Combined-Shape',fill:'#000000'}))),' '))));}/* harmony default export */ __webpack_exports__["a"] = (SubHeader);

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_redux__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__AppSetting__ = __webpack_require__(30);
var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var Footer=function(_Component){_inherits(Footer,_Component);function Footer(){_classCallCheck(this,Footer);var _this=_possibleConstructorReturn(this,(Footer.__proto__||Object.getPrototypeOf(Footer)).call(this));_this.state={errors:{}};return _this;}_createClass(Footer,[{key:'render',value:function render(){var errors=this.state.errors;var isAuthenticated=this.props.auth.isAuthenticated;return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:'kt-footer kt-grid__item kt-grid kt-grid--desktop kt-grid--ver-desktop'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:'kt-footer__copyright'},'2020\xA0\xA9\xA0',__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('a',{href:__WEBPACK_IMPORTED_MODULE_4__AppSetting__["a" /* AppSetting */].url,target:'_blank',className:'kt-link'},__WEBPACK_IMPORTED_MODULE_4__AppSetting__["a" /* AppSetting */].name)),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:'kt-footer__menu'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('a',{href:__WEBPACK_IMPORTED_MODULE_4__AppSetting__["a" /* AppSetting */].url,target:'_blank',className:'kt-footer__menu-link kt-link'},'About'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('a',{href:__WEBPACK_IMPORTED_MODULE_4__AppSetting__["a" /* AppSetting */].url,target:'_blank',className:'kt-footer__menu-link kt-link'},'Team'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('a',{href:__WEBPACK_IMPORTED_MODULE_4__AppSetting__["a" /* AppSetting */].url,target:'_blank',className:'kt-footer__menu-link kt-link'},'Contact')));}}]);return Footer;}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);Footer.propTypes={auth:__WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.object.isRequired};var mapStateToProps=function mapStateToProps(state){return{auth:state.auth,errors:state.errors};};/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_3_react_redux__["b" /* connect */])(mapStateToProps,{})(Footer));

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_26", function() { return GET_ERRORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_70", function() { return SET_CURRENT_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return ADD_STORE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_20", function() { return EDIT_STORE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_0", function() { return DELETE_STORE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_42", function() { return LIST_STORE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_75", function() { return STORE_LOADING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_76", function() { return STORE_STOPLOADING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return ADD_PLAN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_14", function() { return EDIT_PLAN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "U", function() { return DELETE_PLAN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_36", function() { return LIST_PLAN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_54", function() { return PLAN_LOADING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_55", function() { return PLAN_STOPLOADING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return ADD_SLIDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_19", function() { return EDIT_SLIDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Z", function() { return DELETE_SLIDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_41", function() { return LIST_SLIDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_73", function() { return SLIDER_LOADING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_74", function() { return SLIDER_STOPLOADING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return ADD_CATEGORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_9", function() { return EDIT_CATEGORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "P", function() { return DELETE_CATEGORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_31", function() { return LIST_CATEGORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "H", function() { return CATEGORY_LOADING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "I", function() { return CATEGORY_STOPLOADING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return ADD_SUBCATEGORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_21", function() { return EDIT_SUBCATEGORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_1", function() { return DELETE_SUBCATEGORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_43", function() { return LIST_SUBCATEGORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_79", function() { return SUBCATEGORY_LOADING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_80", function() { return SUBCATEGORY_STOPLOADING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return ADD_SUBCATEGORYCHILD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_22", function() { return EDIT_SUBCATEGORYCHILD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_2", function() { return DELETE_SUBCATEGORYCHILD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_44", function() { return LIST_SUBCATEGORYCHILD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_77", function() { return SUBCATEGORYCHILD_LOADING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_78", function() { return SUBCATEGORYCHILD_STOPLOADING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return ADD_PRODUCT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_15", function() { return EDIT_PRODUCT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "V", function() { return DELETE_PRODUCT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_37", function() { return LIST_PRODUCT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_58", function() { return PRODUCT_LOADING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_59", function() { return PRODUCT_STOPLOADING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return ADD_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_24", function() { return EDIT_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_4", function() { return DELETE_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_46", function() { return LIST_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_83", function() { return USER_LOADING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_84", function() { return USER_STOPLOADING; });
/* unused harmony export ADD_AUTHOR */
/* unused harmony export EDIT_AUTHOR */
/* unused harmony export DELETE_AUTHOR */
/* unused harmony export LIST_AUTHOR */
/* unused harmony export AUTHOR_LOADING */
/* unused harmony export AUTHOR_STOPLOADING */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return ADD_ORDERSTATUS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_12", function() { return EDIT_ORDERSTATUS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S", function() { return DELETE_ORDERSTATUS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_34", function() { return LIST_ORDERSTATUS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_48", function() { return ORDERSTATUS_LOADING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_49", function() { return ORDERSTATUS_STOPLOADING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return ADD_TEAM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_23", function() { return EDIT_TEAM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_3", function() { return DELETE_TEAM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_45", function() { return LIST_TEAM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_81", function() { return TEAM_LOADING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_82", function() { return TEAM_STOPLOADING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return ADD_BLOG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_8", function() { return EDIT_BLOG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "O", function() { return DELETE_BLOG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_30", function() { return LIST_BLOG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F", function() { return BLOG_LOADING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "G", function() { return BLOG_STOPLOADING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return ADD_SHIPPING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_18", function() { return EDIT_SHIPPING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Y", function() { return DELETE_SHIPPING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_40", function() { return LIST_SHIPPING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_71", function() { return SHIPPING_LOADING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_72", function() { return SHIPPING_STOPLOADING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return ADD_COUPON; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_10", function() { return EDIT_COUPON; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Q", function() { return DELETE_COUPON; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_32", function() { return LIST_COUPON; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "J", function() { return COUPON_LOADING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "K", function() { return COUPON_STOPLOADING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return ADD_ORDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_11", function() { return EDIT_ORDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "R", function() { return DELETE_ORDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_33", function() { return LIST_ORDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_50", function() { return ORDER_LOADING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_51", function() { return ORDER_STOPLOADING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return ADD_ROLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_17", function() { return EDIT_ROLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "X", function() { return DELETE_ROLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_39", function() { return LIST_ROLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_62", function() { return ROLE_LOADING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_63", function() { return ROLE_STOPLOADING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ADD_ADMIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_5", function() { return EDIT_ADMIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "L", function() { return DELETE_ADMIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_27", function() { return LIST_ADMIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return ADMIN_LOADING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return ADMIN_STOPLOADING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return ADD_PARENT_ATTRIBUTE_CATEGORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_13", function() { return EDIT_PARENT_ATTRIBUTE_CATEGORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "T", function() { return DELETE_PARENT_ATTRIBUTE_CATEGORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_35", function() { return LIST_PARENT_ATTRIBUTE_CATEGORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_52", function() { return PARENT_ATTRIBUTE_CATEGORY_LOADING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_53", function() { return PARENT_ATTRIBUTE_CATEGORY_STOPLOADING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ADD_ATTRIBUTE_CATEGORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_6", function() { return EDIT_ATTRIBUTE_CATEGORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "M", function() { return DELETE_ATTRIBUTE_CATEGORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_28", function() { return LIST_ATTRIBUTE_CATEGORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "B", function() { return ATTRIBUTE_CATEGORY_LOADING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C", function() { return ATTRIBUTE_CATEGORY_STOPLOADING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return ADD_ATTRIBUTE_MAPPING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_7", function() { return EDIT_ATTRIBUTE_MAPPING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "N", function() { return DELETE_ATTRIBUTE_MAPPING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_29", function() { return LIST_ATTRIBUTE_MAPPING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "D", function() { return ATTRIBUTE_MAPPING_LOADING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "E", function() { return ATTRIBUTE_MAPPING_STOPLOADING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return ADD_PRODUCTSUB; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_16", function() { return EDIT_PRODUCTSUB; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "W", function() { return DELETE_PRODUCTSUB; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_38", function() { return LIST_PRODUCTSUB; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_56", function() { return PRODUCTSUB_LOADING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_57", function() { return PRODUCTSUB_STOPLOADING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return ADD_PRODUCT_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return ADD_ORDER_ATTRIBUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return ADD_ATTRIBUTE_PRICE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ADD_ATTRIBUTE_ITEM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_60", function() { return REMOVE_ATTRIBUTE_ITEM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_65", function() { return SEARCH_PRODUCT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_66", function() { return SEARCH_PRODUCT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_64", function() { return SEARCH_PRODUCT_FAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_68", function() { return SEARCH_USER_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_69", function() { return SEARCH_USER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_67", function() { return SEARCH_USER_FAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_25", function() { return GET_CART_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return ADD_TO_CART_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_61", function() { return REMOVE_FROM_CART_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_47", function() { return LOAD_CART; });
var GET_ERRORS='GET_ERRORS';var SET_CURRENT_USER='SET_CURRENT_USER';//Store Type
var ADD_STORE='ADD_STORE';var EDIT_STORE='EDIT_STORE';var DELETE_STORE='DELETE_STORE';var LIST_STORE='LIST_STORE';var STORE_LOADING='STORE_LOADING';var STORE_STOPLOADING='STORE_STOPLOADING';//Plan Type
var ADD_PLAN='ADD_PLAN';var EDIT_PLAN='EDIT_PLAN';var DELETE_PLAN='DELETE_PLAN';var LIST_PLAN='LIST_PLAN';var PLAN_LOADING='PLAN_LOADING';var PLAN_STOPLOADING='PLAN_STOPLOADING';//Slider Type
var ADD_SLIDER='ADD_SLIDER';var EDIT_SLIDER='EDIT_SLIDER';var DELETE_SLIDER='DELETE_SLIDER';var LIST_SLIDER='LIST_SLIDER';var SLIDER_LOADING='SLIDER_LOADING';var SLIDER_STOPLOADING='SLIDER_STOPLOADING';//CATEGORY Type
var ADD_CATEGORY='ADD_CATEGORY';var EDIT_CATEGORY='EDIT_CATEGORY';var DELETE_CATEGORY='DELETE_CATEGORY';var LIST_CATEGORY='LIST_CATEGORY';var CATEGORY_LOADING='CATEGORY_LOADING';var CATEGORY_STOPLOADING='CATEGORY_STOPLOADING';//SUBCATEGORY Type
var ADD_SUBCATEGORY='ADD_SUBCATEGORY';var EDIT_SUBCATEGORY='EDIT_SUBCATEGORY';var DELETE_SUBCATEGORY='DELETE_SUBCATEGORY';var LIST_SUBCATEGORY='LIST_SUBCATEGORY';var SUBCATEGORY_LOADING='SUBCATEGORY_LOADING';var SUBCATEGORY_STOPLOADING='SUBCATEGORY_STOPLOADING';//SUBCATEGORYCHILD Type
var ADD_SUBCATEGORYCHILD='ADD_SUBCATEGORYCHILD';var EDIT_SUBCATEGORYCHILD='EDIT_SUBCATEGORYCHILD';var DELETE_SUBCATEGORYCHILD='DELETE_SUBCATEGORYCHILD';var LIST_SUBCATEGORYCHILD='LIST_SUBCATEGORYCHILD';var SUBCATEGORYCHILD_LOADING='SUBCATEGORYCHILD_LOADING';var SUBCATEGORYCHILD_STOPLOADING='SUBCATEGORYCHILD_STOPLOADING';//PRODUCT Type
var ADD_PRODUCT='ADD_PRODUCT';var EDIT_PRODUCT='EDIT_PRODUCT';var DELETE_PRODUCT='DELETE_PRODUCT';var LIST_PRODUCT='LIST_PRODUCT';var PRODUCT_LOADING='PRODUCT_LOADING';var PRODUCT_STOPLOADING='PRODUCT_STOPLOADING';//User Type
var ADD_USER='ADD_USER';var EDIT_USER='EDIT_USER';var DELETE_USER='DELETE_USER';var LIST_USER='LIST_USER';var USER_LOADING='USER_LOADING';var USER_STOPLOADING='USER_STOPLOADING';//Author Type
var ADD_AUTHOR='ADD_AUTHOR';var EDIT_AUTHOR='EDIT_AUTHOR';var DELETE_AUTHOR='DELETE_AUTHOR';var LIST_AUTHOR='LIST_AUTHOR';var AUTHOR_LOADING='AUTHOR_LOADING';var AUTHOR_STOPLOADING='AUTHOR_STOPLOADING';//OrderStatus Type
var ADD_ORDERSTATUS='ADD_ORDERSTATUS';var EDIT_ORDERSTATUS='EDIT_ORDERSTATUS';var DELETE_ORDERSTATUS='DELETE_ORDERSTATUS';var LIST_ORDERSTATUS='LIST_ORDERSTATUS';var ORDERSTATUS_LOADING='ORDERSTATUS_LOADING';var ORDERSTATUS_STOPLOADING='ORDERSTATUS_STOPLOADING';//TEAM Type
var ADD_TEAM='ADD_TEAM';var EDIT_TEAM='EDIT_TEAM';var DELETE_TEAM='DELETE_TEAM';var LIST_TEAM='LIST_TEAM';var TEAM_LOADING='TEAM_LOADING';var TEAM_STOPLOADING='TEAM_STOPLOADING';//BLOG Type
var ADD_BLOG='ADD_BLOG';var EDIT_BLOG='EDIT_BLOG';var DELETE_BLOG='DELETE_BLOG';var LIST_BLOG='LIST_BLOG';var BLOG_LOADING='BLOG_LOADING';var BLOG_STOPLOADING='BLOG_STOPLOADING';//Shipping Type
var ADD_SHIPPING='ADD_SHIPPING';var EDIT_SHIPPING='EDIT_SHIPPING';var DELETE_SHIPPING='DELETE_SHIPPING';var LIST_SHIPPING='LIST_SHIPPING';var SHIPPING_LOADING='SHIPPING_LOADING';var SHIPPING_STOPLOADING='SHIPPING_STOPLOADING';//Coupon Type
var ADD_COUPON='ADD_COUPON';var EDIT_COUPON='EDIT_COUPON';var DELETE_COUPON='DELETE_COUPON';var LIST_COUPON='LIST_COUPON';var COUPON_LOADING='COUPON_LOADING';var COUPON_STOPLOADING='COUPON_STOPLOADING';//ORDER Type
var ADD_ORDER='ADD_ORDER';var EDIT_ORDER='EDIT_ORDER';var DELETE_ORDER='DELETE_ORDER';var LIST_ORDER='LIST_ORDER';var ORDER_LOADING='ORDER_LOADING';var ORDER_STOPLOADING='ORDER_STOPLOADING';//ROLE Type
var ADD_ROLE='ADD_ROLE';var EDIT_ROLE='EDIT_ROLE';var DELETE_ROLE='DELETE_ROLE';var LIST_ROLE='LIST_ROLE';var ROLE_LOADING='ROLE_LOADING';var ROLE_STOPLOADING='ROLE_STOPLOADING';//ADMIN Type
var ADD_ADMIN='ADD_ADMIN';var EDIT_ADMIN='EDIT_ADMIN';var DELETE_ADMIN='DELETE_ADMIN';var LIST_ADMIN='LIST_ADMIN';var ADMIN_LOADING='ADMIN_LOADING';var ADMIN_STOPLOADING='ADMIN_STOPLOADING';//PARENT ATTRIBUTE CATEGORY Type
var ADD_PARENT_ATTRIBUTE_CATEGORY='ADD_PARENT_ATTRIBUTE_CATEGORY';var EDIT_PARENT_ATTRIBUTE_CATEGORY='EDIT_PARENT_ATTRIBUTE_CATEGORY';var DELETE_PARENT_ATTRIBUTE_CATEGORY='DELETE_PARENT_ATTRIBUTE_CATEGORY';var LIST_PARENT_ATTRIBUTE_CATEGORY='LIST_PARENT_ATTRIBUTE_CATEGORY';var PARENT_ATTRIBUTE_CATEGORY_LOADING='PARENT_ATTRIBUTE_CATEGORY_LOADING';var PARENT_ATTRIBUTE_CATEGORY_STOPLOADING='PARENT_ATTRIBUTE_CATEGORY_STOPLOADING';//ATTRIBUTE CATEGORY Type
var ADD_ATTRIBUTE_CATEGORY='ADD_ATTRIBUTE_CATEGORY';var EDIT_ATTRIBUTE_CATEGORY='EDIT_ATTRIBUTE_CATEGORY';var DELETE_ATTRIBUTE_CATEGORY='DELETE_ATTRIBUTE_CATEGORY';var LIST_ATTRIBUTE_CATEGORY='LIST_ATTRIBUTE_CATEGORY';var ATTRIBUTE_CATEGORY_LOADING='ATTRIBUTE_CATEGORY_LOADING';var ATTRIBUTE_CATEGORY_STOPLOADING='ATTRIBUTE_CATEGORY_STOPLOADING';//ATTRIBUTE MAPPING Type
var ADD_ATTRIBUTE_MAPPING='ADD_ATTRIBUTE_MAPPING';var EDIT_ATTRIBUTE_MAPPING='EDIT_ATTRIBUTE_MAPPING';var DELETE_ATTRIBUTE_MAPPING='DELETE_ATTRIBUTE_MAPPING';var LIST_ATTRIBUTE_MAPPING='LIST_ATTRIBUTE_MAPPING';var ATTRIBUTE_MAPPING_LOADING='ATTRIBUTE_MAPPING_LOADING';var ATTRIBUTE_MAPPING_STOPLOADING='ATTRIBUTE_MAPPING_STOPLOADING';//PRODUCT SUB  Type
var ADD_PRODUCTSUB='ADD_PRODUCTSUB';var EDIT_PRODUCTSUB='EDIT_PRODUCTSUB';var DELETE_PRODUCTSUB='DELETE_PRODUCTSUB';var LIST_PRODUCTSUB='LIST_PRODUCTSUB';var PRODUCTSUB_LOADING='PRODUCTSUB_LOADING';var PRODUCTSUB_STOPLOADING='PRODUCTSUB_STOPLOADING';// Demo
var ADD_PRODUCT_ID="ADD_PRODUCT_ID";var ADD_ORDER_ATTRIBUTES="ADD_ORDER_ATTRIBUTES";var ADD_ATTRIBUTE_PRICE="ADD_ATTRIBUTE_PRICE";var ADD_ATTRIBUTE_ITEM="ADD_ATTRIBUTE_ITEM";var REMOVE_ATTRIBUTE_ITEM="REMOVE_ATTRIBUTE_ITEM";// order emailing types
var SEARCH_PRODUCT_REQUEST="SEARCH_PRODUCT_REQUEST";var SEARCH_PRODUCT_SUCCESS="SEARCH_PRODUCT_SUCCESS";var SEARCH_PRODUCT_FAIL="SEARCH_PRODUCT_FAIL";var SEARCH_USER_REQUEST="SEARCH_USER_REQUEST";var SEARCH_USER_SUCCESS="SEARCH_USER_SUCCESS";var SEARCH_USER_FAIL="SEARCH_USER_FAIL";//CART Type
var GET_CART_SUCCESS='GET_CART_SUCCESS';var ADD_TO_CART_SUCCESS='ADD_TO_CART_SUCCESS';var REMOVE_FROM_CART_SUCCESS='REMOVE_FROM_CART_SUCCESS';var LOAD_CART='LOAD_CART';

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return menuList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return checkPermission; });
var menuList=[{label:"Dashboard",menu:"DASHBOARD",CREATE:1,READ:1,UPDATE:1,DELETE:1},{label:"User",menu:"USER",CREATE:1,READ:1,UPDATE:1,DELETE:1},{label:"Slider",menu:"SLIDER",CREATE:1,READ:1,UPDATE:1,DELETE:1},{label:"Category",menu:"CATEGORY",CREATE:1,READ:1,UPDATE:1,DELETE:1},{label:"Sub Category",menu:"SUB_CATEGORY",CREATE:1,READ:1,UPDATE:1,DELETE:1},{label:"Sub Category Child",menu:"SUB_CATEGORY_CHILD",CREATE:1,READ:1,UPDATE:1,DELETE:1},{label:"Products",menu:"PRODUCTS",CREATE:1,READ:1,UPDATE:1,DELETE:1},{label:"Blog",menu:"BLOG",CREATE:1,READ:1,UPDATE:1,DELETE:1},{label:"Order",menu:"ORDER",CREATE:1,READ:1,UPDATE:1,DELETE:1},{label:"Order Status",menu:"ORDER_STATUS",CREATE:1,READ:1,UPDATE:1,DELETE:1},{label:"Shipping",menu:"SHIPPING",CREATE:1,READ:1,UPDATE:1,DELETE:1},{label:"Coupon",menu:"COUPON",CREATE:1,READ:1,UPDATE:1,DELETE:1},{label:"Setting",menu:"SETTING",CREATE:1,READ:1,UPDATE:1,DELETE:1},{label:"Team",menu:"TEAM",CREATE:1,READ:1,UPDATE:1,DELETE:1},{label:"Role",menu:"ROLE",CREATE:1,READ:1,UPDATE:1,DELETE:1},{label:"Admin",menu:"ADMIN",CREATE:1,READ:1,UPDATE:1,DELETE:1}];var checkPermission=function checkPermission(auth,name,action){var user=auth.user;var permissionList=user.permissionList;if(permissionList===null){return true;}else{var findArray=permissionList.find(function(x){return x.menu===name&&x[action];});if(findArray){return true;}else{return false;}}};

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createFilter = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _util = __webpack_require__(228);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Search = function (_Component) {
  _inherits(Search, _Component);

  function Search(props) {
    _classCallCheck(this, Search);

    var _this = _possibleConstructorReturn(this, (Search.__proto__ || Object.getPrototypeOf(Search)).call(this, props));

    _this.state = {
      searchTerm: _this.props.value || ''
    };
    _this.updateSearch = _this.updateSearch.bind(_this);
    _this.filter = _this.filter.bind(_this);
    return _this;
  }

  _createClass(Search, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (typeof nextProps.value !== 'undefined' && nextProps.value !== this.props.value) {
        var e = {
          target: {
            value: nextProps.value
          }
        };
        this.updateSearch(e);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          onChange = _props.onChange,
          caseSensitive = _props.caseSensitive,
          sortResults = _props.sortResults,
          throttle = _props.throttle,
          filterKeys = _props.filterKeys,
          value = _props.value,
          fuzzy = _props.fuzzy,
          inputClassName = _props.inputClassName,
          inputProps = _objectWithoutProperties(_props, ['className', 'onChange', 'caseSensitive', 'sortResults', 'throttle', 'filterKeys', 'value', 'fuzzy', 'inputClassName']); // eslint-disable-line no-unused-vars


      inputProps.type = inputProps.type || 'search';
      inputProps.value = this.state.searchTerm;
      inputProps.onChange = this.updateSearch;
      inputProps.className = inputClassName;
      inputProps.placeholder = inputProps.placeholder || 'Search';
      return _react2.default.createElement(
        'div',
        { className: className },
        _react2.default.createElement('input', inputProps)
      );
    }
  }, {
    key: 'updateSearch',
    value: function updateSearch(e) {
      var _this2 = this;

      var searchTerm = e.target.value;
      this.setState({
        searchTerm: searchTerm
      }, function () {
        if (_this2._throttleTimeout) {
          clearTimeout(_this2._throttleTimeout);
        }

        _this2._throttleTimeout = setTimeout(function () {
          return _this2.props.onChange(searchTerm);
        }, _this2.props.throttle);
      });
    }
  }, {
    key: 'filter',
    value: function filter(keys) {
      var _props2 = this.props,
          filterKeys = _props2.filterKeys,
          caseSensitive = _props2.caseSensitive,
          fuzzy = _props2.fuzzy,
          sortResults = _props2.sortResults;

      return (0, _util.createFilter)(this.state.searchTerm, keys || filterKeys, {
        caseSensitive: caseSensitive,
        fuzzy: fuzzy,
        sortResults: sortResults
      });
    }
  }]);

  return Search;
}(_react.Component);

Search.defaultProps = {
  className: '',
  onChange: function onChange() {},

  caseSensitive: false,
  fuzzy: false,
  throttle: 200
};

Search.propTypes = {
  className: _propTypes2.default.string,
  inputClassName: _propTypes2.default.string,
  onChange: _propTypes2.default.func,
  caseSensitive: _propTypes2.default.bool,
  sortResults: _propTypes2.default.bool,
  fuzzy: _propTypes2.default.bool,
  throttle: _propTypes2.default.number,
  filterKeys: _propTypes2.default.oneOf([_propTypes2.default.string, _propTypes2.default.arrayOf(_propTypes2.default.string)]),
  value: _propTypes2.default.string
};

exports.default = Search;
exports.createFilter = _util.createFilter;

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return listProduct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return listProductOne; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addProduct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return createDraftProduct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return editProduct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return deleteProduct; });
/* unused harmony export setProductLoading */
/* unused harmony export stopProductLoading */
/* unused harmony export productId */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return productAttributes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return searchProduct; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__types__ = __webpack_require__(11);
var _this=this;function _asyncToGenerator(fn){return function(){var gen=fn.apply(this,arguments);return new Promise(function(resolve,reject){function step(key,arg){try{var info=gen[key](arg);var value=info.value;}catch(error){reject(error);return;}if(info.done){resolve(value);}else{return Promise.resolve(value).then(function(value){step("next",value);},function(err){step("throw",err);});}}return step("next");});};}// Get all product
var listProduct=function listProduct(){return function(dispatch){dispatch(setProductLoading());__WEBPACK_IMPORTED_MODULE_1_axios___default.a.get('/api/product/').then(function(res){console.log("product Result",res.data);dispatch({type:__WEBPACK_IMPORTED_MODULE_2__types__["_37" /* LIST_PRODUCT */],payload:res.data});}).catch(function(err){console.log("err data",err);dispatch({type:__WEBPACK_IMPORTED_MODULE_2__types__["_26" /* GET_ERRORS */],payload:err.response.data});});};};// Get one product
var listProductOne=function listProductOne(data){return function(dispatch){dispatch(setProductLoading());__WEBPACK_IMPORTED_MODULE_1_axios___default.a.post('/api/product/getproduct',data).then(function(res){dispatch({type:__WEBPACK_IMPORTED_MODULE_2__types__["_37" /* LIST_PRODUCT */],payload:res.data});}).catch(function(err){console.log("err data",err);dispatch({type:__WEBPACK_IMPORTED_MODULE_2__types__["_26" /* GET_ERRORS */],payload:err.response.data});});};};var addProduct=function addProduct(productData){return function(dispatch){dispatch(setProductLoading());__WEBPACK_IMPORTED_MODULE_1_axios___default.a.post('/api/product/',productData).then(function(res){return dispatch({type:__WEBPACK_IMPORTED_MODULE_2__types__["n" /* ADD_PRODUCT */],payload:res.data});}).catch(function(err){dispatch({type:__WEBPACK_IMPORTED_MODULE_2__types__["_26" /* GET_ERRORS */],payload:err.response.data});dispatch(stopProductLoading());});};};// Create Draft Product
var createDraftProduct=function createDraftProduct(){return function(dispatch){dispatch(setProductLoading());__WEBPACK_IMPORTED_MODULE_1_axios___default.a.post('/api/product/draft').then(function(res){return dispatch({type:__WEBPACK_IMPORTED_MODULE_2__types__["n" /* ADD_PRODUCT */],payload:res.data});}).catch(function(err){dispatch({type:__WEBPACK_IMPORTED_MODULE_2__types__["_26" /* GET_ERRORS */],payload:err.response.data});dispatch(stopProductLoading());});};};// Edit product
var editProduct=function editProduct(productData){return function(dispatch){dispatch(setProductLoading());__WEBPACK_IMPORTED_MODULE_1_axios___default.a.post('/api/product/edit',productData).then(function(res){return dispatch({type:__WEBPACK_IMPORTED_MODULE_2__types__["_15" /* EDIT_PRODUCT */],payload:res.data});}).catch(function(err){dispatch({type:__WEBPACK_IMPORTED_MODULE_2__types__["_26" /* GET_ERRORS */],payload:err.response.data});dispatch(stopProductLoading());});};};// delete product
var deleteProduct=function deleteProduct(deleteData){return function(dispatch){dispatch(setProductLoading());__WEBPACK_IMPORTED_MODULE_1_axios___default.a.post('/api/product/delete',deleteData).then(function(res){return dispatch({type:__WEBPACK_IMPORTED_MODULE_2__types__["V" /* DELETE_PRODUCT */],payload:res.data});}).catch(function(err){dispatch({type:__WEBPACK_IMPORTED_MODULE_2__types__["_26" /* GET_ERRORS */],payload:err.response.data});dispatch(stopProductLoading());});};};// Product loading
var setProductLoading=function setProductLoading(){return{type:__WEBPACK_IMPORTED_MODULE_2__types__["_58" /* PRODUCT_LOADING */]};};var stopProductLoading=function stopProductLoading(){return{type:__WEBPACK_IMPORTED_MODULE_2__types__["_59" /* PRODUCT_STOPLOADING */]};};var productId=function productId(id){return function(dispatch){dispatch({type:__WEBPACK_IMPORTED_MODULE_2__types__["p" /* ADD_PRODUCT_ID */],payload:id});};};var productAttributes=function productAttributes(data){return function(dispatch){dispatch({type:__WEBPACK_IMPORTED_MODULE_2__types__["k" /* ADD_ORDER_ATTRIBUTES */],payload:data});};};// order email actions
var searchProduct=function searchProduct(keyword){return function(){var _ref=_asyncToGenerator(/*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee(dispatch){var _ref2,data;return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:console.log(keyword);dispatch({type:__WEBPACK_IMPORTED_MODULE_2__types__["_65" /* SEARCH_PRODUCT_REQUEST */]});_context.prev=2;_context.next=5;return __WEBPACK_IMPORTED_MODULE_1_axios___default.a.get('/api/product/search?keyword='+keyword);case 5:_ref2=_context.sent;data=_ref2.data;dispatch({type:__WEBPACK_IMPORTED_MODULE_2__types__["_66" /* SEARCH_PRODUCT_SUCCESS */],payload:data});_context.next=13;break;case 10:_context.prev=10;_context.t0=_context['catch'](2);dispatch({type:__WEBPACK_IMPORTED_MODULE_2__types__["_64" /* SEARCH_PRODUCT_FAIL */],payload:_context.t0.response&&_context.t0.response.data.message?_context.t0.response.data.message:_context.t0.message});case 13:case'end':return _context.stop();}}},_callee,_this,[[2,10]]);}));return function(_x){return _ref.apply(this,arguments);};}();};

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__BrowserRouter__ = __webpack_require__(112);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__BrowserRouter__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__HashRouter__ = __webpack_require__(119);
/* unused harmony reexport HashRouter */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Link__ = __webpack_require__(61);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__Link__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__MemoryRouter__ = __webpack_require__(120);
/* unused harmony reexport MemoryRouter */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__NavLink__ = __webpack_require__(122);
/* unused harmony reexport NavLink */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Prompt__ = __webpack_require__(124);
/* unused harmony reexport Prompt */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Redirect__ = __webpack_require__(126);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_6__Redirect__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Route__ = __webpack_require__(62);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_7__Route__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Router__ = __webpack_require__(41);
/* unused harmony reexport Router */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__StaticRouter__ = __webpack_require__(128);
/* unused harmony reexport StaticRouter */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__Switch__ = __webpack_require__(130);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_10__Switch__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__generatePath__ = __webpack_require__(132);
/* unused harmony reexport generatePath */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__matchPath__ = __webpack_require__(133);
/* unused harmony reexport matchPath */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__withRouter__ = __webpack_require__(134);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_13__withRouter__["a"]; });





























/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return listCategory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return listCategoryOne; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addCategory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return editCategory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return deleteCategory; });
/* unused harmony export setCategoryLoading */
/* unused harmony export stopCategoryLoading */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__types__ = __webpack_require__(11);
// Get all category
var listCategory=function listCategory(){return function(dispatch){dispatch(setCategoryLoading());__WEBPACK_IMPORTED_MODULE_0_axios___default.a.get('/api/category/').then(function(res){dispatch({type:__WEBPACK_IMPORTED_MODULE_1__types__["_31" /* LIST_CATEGORY */],payload:res.data});}).catch(function(err){console.log("err data",err);dispatch({type:__WEBPACK_IMPORTED_MODULE_1__types__["_26" /* GET_ERRORS */],payload:err.response.data});});};};var listCategoryOne=function listCategoryOne(data){return function(dispatch){dispatch(setCategoryLoading());__WEBPACK_IMPORTED_MODULE_0_axios___default.a.post('/api/category/getcategory',data).then(function(res){dispatch({type:__WEBPACK_IMPORTED_MODULE_1__types__["_31" /* LIST_CATEGORY */],payload:res.data});}).catch(function(err){console.log("err data",err);dispatch({type:__WEBPACK_IMPORTED_MODULE_1__types__["_26" /* GET_ERRORS */],payload:err.response.data});});};};// Create category
var addCategory=function addCategory(categoryData){return function(dispatch){dispatch(setCategoryLoading());__WEBPACK_IMPORTED_MODULE_0_axios___default.a.post('/api/category/',categoryData).then(function(res){return dispatch({type:__WEBPACK_IMPORTED_MODULE_1__types__["g" /* ADD_CATEGORY */],payload:res.data});}).catch(function(err){dispatch({type:__WEBPACK_IMPORTED_MODULE_1__types__["_26" /* GET_ERRORS */],payload:err.response.data});dispatch(stopCategoryLoading());});};};// Edit category
var editCategory=function editCategory(categoryData){return function(dispatch){dispatch(setCategoryLoading());__WEBPACK_IMPORTED_MODULE_0_axios___default.a.post('/api/category/edit',categoryData).then(function(res){return dispatch({type:__WEBPACK_IMPORTED_MODULE_1__types__["_9" /* EDIT_CATEGORY */],payload:res.data});}).catch(function(err){dispatch({type:__WEBPACK_IMPORTED_MODULE_1__types__["_26" /* GET_ERRORS */],payload:err.response.data});dispatch(stopCategoryLoading());});};};// delete category
var deleteCategory=function deleteCategory(deleteData){return function(dispatch){dispatch(setCategoryLoading());__WEBPACK_IMPORTED_MODULE_0_axios___default.a.post('/api/category/delete',deleteData).then(function(res){return dispatch({type:__WEBPACK_IMPORTED_MODULE_1__types__["P" /* DELETE_CATEGORY */],payload:res.data});}).catch(function(err){dispatch({type:__WEBPACK_IMPORTED_MODULE_1__types__["_26" /* GET_ERRORS */],payload:err.response.data});dispatch(stopCategoryLoading());});};};// Category loading
var setCategoryLoading=function setCategoryLoading(){return{type:__WEBPACK_IMPORTED_MODULE_1__types__["H" /* CATEGORY_LOADING */]};};var stopCategoryLoading=function stopCategoryLoading(){return{type:__WEBPACK_IMPORTED_MODULE_1__types__["I" /* CATEGORY_STOPLOADING */]};};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var strictUriEncode = __webpack_require__(285);
var objectAssign = __webpack_require__(33);

function encoderForArrayFormat(opts) {
	switch (opts.arrayFormat) {
		case 'index':
			return function (key, value, index) {
				return value === null ? [
					encode(key, opts),
					'[',
					index,
					']'
				].join('') : [
					encode(key, opts),
					'[',
					encode(index, opts),
					']=',
					encode(value, opts)
				].join('');
			};

		case 'bracket':
			return function (key, value) {
				return value === null ? encode(key, opts) : [
					encode(key, opts),
					'[]=',
					encode(value, opts)
				].join('');
			};

		default:
			return function (key, value) {
				return value === null ? encode(key, opts) : [
					encode(key, opts),
					'=',
					encode(value, opts)
				].join('');
			};
	}
}

function parserForArrayFormat(opts) {
	var result;

	switch (opts.arrayFormat) {
		case 'index':
			return function (key, value, accumulator) {
				result = /\[(\d*)\]$/.exec(key);

				key = key.replace(/\[\d*\]$/, '');

				if (!result) {
					accumulator[key] = value;
					return;
				}

				if (accumulator[key] === undefined) {
					accumulator[key] = {};
				}

				accumulator[key][result[1]] = value;
			};

		case 'bracket':
			return function (key, value, accumulator) {
				result = /(\[\])$/.exec(key);
				key = key.replace(/\[\]$/, '');

				if (!result) {
					accumulator[key] = value;
					return;
				} else if (accumulator[key] === undefined) {
					accumulator[key] = [value];
					return;
				}

				accumulator[key] = [].concat(accumulator[key], value);
			};

		default:
			return function (key, value, accumulator) {
				if (accumulator[key] === undefined) {
					accumulator[key] = value;
					return;
				}

				accumulator[key] = [].concat(accumulator[key], value);
			};
	}
}

function encode(value, opts) {
	if (opts.encode) {
		return opts.strict ? strictUriEncode(value) : encodeURIComponent(value);
	}

	return value;
}

function keysSorter(input) {
	if (Array.isArray(input)) {
		return input.sort();
	} else if (typeof input === 'object') {
		return keysSorter(Object.keys(input)).sort(function (a, b) {
			return Number(a) - Number(b);
		}).map(function (key) {
			return input[key];
		});
	}

	return input;
}

exports.extract = function (str) {
	return str.split('?')[1] || '';
};

exports.parse = function (str, opts) {
	opts = objectAssign({arrayFormat: 'none'}, opts);

	var formatter = parserForArrayFormat(opts);

	// Create an object with no prototype
	// https://github.com/sindresorhus/query-string/issues/47
	var ret = Object.create(null);

	if (typeof str !== 'string') {
		return ret;
	}

	str = str.trim().replace(/^(\?|#|&)/, '');

	if (!str) {
		return ret;
	}

	str.split('&').forEach(function (param) {
		var parts = param.replace(/\+/g, ' ').split('=');
		// Firefox (pre 40) decodes `%3D` to `=`
		// https://github.com/sindresorhus/query-string/pull/37
		var key = parts.shift();
		var val = parts.length > 0 ? parts.join('=') : undefined;

		// missing `=` should be `null`:
		// http://w3.org/TR/2012/WD-url-20120524/#collect-url-parameters
		val = val === undefined ? null : decodeURIComponent(val);

		formatter(decodeURIComponent(key), val, ret);
	});

	return Object.keys(ret).sort().reduce(function (result, key) {
		var val = ret[key];
		if (Boolean(val) && typeof val === 'object' && !Array.isArray(val)) {
			// Sort object keys, not values
			result[key] = keysSorter(val);
		} else {
			result[key] = val;
		}

		return result;
	}, Object.create(null));
};

exports.stringify = function (obj, opts) {
	var defaults = {
		encode: true,
		strict: true,
		arrayFormat: 'none'
	};

	opts = objectAssign(defaults, opts);

	var formatter = encoderForArrayFormat(opts);

	return obj ? Object.keys(obj).sort().map(function (key) {
		var val = obj[key];

		if (val === undefined) {
			return '';
		}

		if (val === null) {
			return encode(key, opts);
		}

		if (Array.isArray(val)) {
			var result = [];

			val.slice().forEach(function (val2) {
				if (val2 === undefined) {
					return;
				}

				result.push(formatter(key, val2, result.length));
			});

			return result.join('&');
		}

		return encode(key, opts) + '=' + encode(val, opts);
	}).filter(function (x) {
		return x.length > 0;
	}).join('&') : '';
};


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(68);
var isBuffer = __webpack_require__(140);

/*global toString:true*/

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return (typeof FormData !== 'undefined') && (val instanceof FormData);
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && navigator.product === 'ReactNative') {
    return false;
  }
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined'
  );
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = merge(result[key], val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  extend: extend,
  trim: trim
};


/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return listSubCategory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return listSubCategoryOne; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addSubCategory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return editSubCategory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return deleteSubCategory; });
/* unused harmony export setSubCategoryLoading */
/* unused harmony export stopSubCategoryLoading */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__types__ = __webpack_require__(11);
// Get all subcategory
var listSubCategory=function listSubCategory(){return function(dispatch){dispatch(setSubCategoryLoading());__WEBPACK_IMPORTED_MODULE_0_axios___default.a.get('/api/subcategory/').then(function(res){dispatch({type:__WEBPACK_IMPORTED_MODULE_1__types__["_43" /* LIST_SUBCATEGORY */],payload:res.data});}).catch(function(err){console.log("err data",err);dispatch({type:__WEBPACK_IMPORTED_MODULE_1__types__["_26" /* GET_ERRORS */],payload:err.response.data});});};};// Get all subcategory
var listSubCategoryOne=function listSubCategoryOne(data){return function(dispatch){dispatch(setSubCategoryLoading());__WEBPACK_IMPORTED_MODULE_0_axios___default.a.post('/api/subcategory/getsubcategory',data).then(function(res){dispatch({type:__WEBPACK_IMPORTED_MODULE_1__types__["_43" /* LIST_SUBCATEGORY */],payload:res.data});}).catch(function(err){console.log("err data",err);dispatch({type:__WEBPACK_IMPORTED_MODULE_1__types__["_26" /* GET_ERRORS */],payload:err.response.data});});};};// Create subcategory
var addSubCategory=function addSubCategory(subcategoryData){return function(dispatch){dispatch(setSubCategoryLoading());__WEBPACK_IMPORTED_MODULE_0_axios___default.a.post('/api/subcategory/',subcategoryData).then(function(res){return dispatch({type:__WEBPACK_IMPORTED_MODULE_1__types__["u" /* ADD_SUBCATEGORY */],payload:res.data});}).catch(function(err){dispatch({type:__WEBPACK_IMPORTED_MODULE_1__types__["_26" /* GET_ERRORS */],payload:err.response.data});dispatch(stopSubCategoryLoading());});};};// Edit subcategory
var editSubCategory=function editSubCategory(subcategoryData){return function(dispatch){dispatch(setSubCategoryLoading());__WEBPACK_IMPORTED_MODULE_0_axios___default.a.post('/api/subcategory/edit',subcategoryData).then(function(res){return dispatch({type:__WEBPACK_IMPORTED_MODULE_1__types__["_21" /* EDIT_SUBCATEGORY */],payload:res.data});}).catch(function(err){dispatch({type:__WEBPACK_IMPORTED_MODULE_1__types__["_26" /* GET_ERRORS */],payload:err.response.data});dispatch(stopSubCategoryLoading());});};};// delete subcategory
var deleteSubCategory=function deleteSubCategory(deleteData){return function(dispatch){dispatch(setSubCategoryLoading());__WEBPACK_IMPORTED_MODULE_0_axios___default.a.post('/api/subcategory/delete',deleteData).then(function(res){return dispatch({type:__WEBPACK_IMPORTED_MODULE_1__types__["_1" /* DELETE_SUBCATEGORY */],payload:res.data});}).catch(function(err){dispatch({type:__WEBPACK_IMPORTED_MODULE_1__types__["_26" /* GET_ERRORS */],payload:err.response.data});dispatch(stopSubCategoryLoading());});};};// SubCategory loading
var setSubCategoryLoading=function setSubCategoryLoading(){return{type:__WEBPACK_IMPORTED_MODULE_1__types__["_79" /* SUBCATEGORY_LOADING */]};};var stopSubCategoryLoading=function stopSubCategoryLoading(){return{type:__WEBPACK_IMPORTED_MODULE_1__types__["_80" /* SUBCATEGORY_STOPLOADING */]};};

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return listParentAttributeCategory; });
/* unused harmony export listParentAttributeCategoryOne */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addParentAttributeCategory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return editParentAttributeCategory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return deleteParentAttributeCategory; });
/* unused harmony export setParentAttributeCategoryLoading */
/* unused harmony export stopParentAttributeCategoryLoading */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__types__ = __webpack_require__(11);
// Get all parentattributecategory
var listParentAttributeCategory=function listParentAttributeCategory(){return function(dispatch){dispatch(setParentAttributeCategoryLoading());__WEBPACK_IMPORTED_MODULE_0_axios___default.a.get('/api/parentattributecategory/').then(function(res){dispatch({type:__WEBPACK_IMPORTED_MODULE_1__types__["_35" /* LIST_PARENT_ATTRIBUTE_CATEGORY */],payload:res.data});}).catch(function(err){console.log("err data",err);dispatch({type:__WEBPACK_IMPORTED_MODULE_1__types__["_26" /* GET_ERRORS */],payload:err.response.data});});};};var listParentAttributeCategoryOne=function listParentAttributeCategoryOne(data){return function(dispatch){dispatch(setParentAttributeCategoryLoading());__WEBPACK_IMPORTED_MODULE_0_axios___default.a.post('/api/parentattributecategory/getparentattributecategory',data).then(function(res){dispatch({type:__WEBPACK_IMPORTED_MODULE_1__types__["_35" /* LIST_PARENT_ATTRIBUTE_CATEGORY */],payload:res.data});}).catch(function(err){console.log("err data",err);dispatch({type:__WEBPACK_IMPORTED_MODULE_1__types__["_26" /* GET_ERRORS */],payload:err.response.data});});};};// Create parentattributecategory
var addParentAttributeCategory=function addParentAttributeCategory(parentattributecategoryData){return function(dispatch){dispatch(setParentAttributeCategoryLoading());__WEBPACK_IMPORTED_MODULE_0_axios___default.a.post('/api/parentattributecategory/',parentattributecategoryData).then(function(res){return dispatch({type:__WEBPACK_IMPORTED_MODULE_1__types__["l" /* ADD_PARENT_ATTRIBUTE_CATEGORY */],payload:res.data});}).catch(function(err){dispatch({type:__WEBPACK_IMPORTED_MODULE_1__types__["_26" /* GET_ERRORS */],payload:err.response.data});dispatch(stopParentAttributeCategoryLoading());});};};// Edit parentattributecategory
var editParentAttributeCategory=function editParentAttributeCategory(parentattributecategoryData){return function(dispatch){dispatch(setParentAttributeCategoryLoading());__WEBPACK_IMPORTED_MODULE_0_axios___default.a.post('/api/parentattributecategory/edit',parentattributecategoryData).then(function(res){return dispatch({type:__WEBPACK_IMPORTED_MODULE_1__types__["_13" /* EDIT_PARENT_ATTRIBUTE_CATEGORY */],payload:res.data});}).catch(function(err){dispatch({type:__WEBPACK_IMPORTED_MODULE_1__types__["_26" /* GET_ERRORS */],payload:err.response.data});dispatch(stopParentAttributeCategoryLoading());});};};// delete parentattributecategory
var deleteParentAttributeCategory=function deleteParentAttributeCategory(deleteData){return function(dispatch){dispatch(setParentAttributeCategoryLoading());__WEBPACK_IMPORTED_MODULE_0_axios___default.a.post('/api/parentattributecategory/delete',deleteData).then(function(res){return dispatch({type:__WEBPACK_IMPORTED_MODULE_1__types__["T" /* DELETE_PARENT_ATTRIBUTE_CATEGORY */],payload:res.data});}).catch(function(err){dispatch({type:__WEBPACK_IMPORTED_MODULE_1__types__["_26" /* GET_ERRORS */],payload:err.response.data});dispatch(stopParentAttributeCategoryLoading());});};};// ParentAttributeCategory loading
var setParentAttributeCategoryLoading=function setParentAttributeCategoryLoading(){return{type:__WEBPACK_IMPORTED_MODULE_1__types__["_52" /* PARENT_ATTRIBUTE_CATEGORY_LOADING */]};};var stopParentAttributeCategoryLoading=function stopParentAttributeCategoryLoading(){return{type:__WEBPACK_IMPORTED_MODULE_1__types__["_53" /* PARENT_ATTRIBUTE_CATEGORY_STOPLOADING */]};};

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return listAttributeMapping; });
/* unused harmony export listAttributeMappingOne */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addAttributeMapping; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return editAttributeMapping; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return deleteAttributeMapping; });
/* unused harmony export setAttributeMappingLoading */
/* unused harmony export stopAttributeMappingLoading */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__types__ = __webpack_require__(11);
// Get all attributemapping
var listAttributeMapping=function listAttributeMapping(data){return function(dispatch){dispatch(setAttributeMappingLoading());__WEBPACK_IMPORTED_MODULE_0_axios___default.a.post('/api/attributemapping/getattributebyproduct',data).then(function(res){dispatch({type:__WEBPACK_IMPORTED_MODULE_1__types__["_29" /* LIST_ATTRIBUTE_MAPPING */],payload:res.data});}).catch(function(err){console.log("err data",err);dispatch({type:__WEBPACK_IMPORTED_MODULE_1__types__["_26" /* GET_ERRORS */],payload:err.response.data});});};};var listAttributeMappingOne=function listAttributeMappingOne(data){return function(dispatch){dispatch(setAttributeMappingLoading());__WEBPACK_IMPORTED_MODULE_0_axios___default.a.post('/api/attributemapping/getattributemapping',data).then(function(res){dispatch({type:__WEBPACK_IMPORTED_MODULE_1__types__["_29" /* LIST_ATTRIBUTE_MAPPING */],payload:res.data});}).catch(function(err){console.log("err data",err);dispatch({type:__WEBPACK_IMPORTED_MODULE_1__types__["_26" /* GET_ERRORS */],payload:err.response.data});});};};// Create attributemapping
var addAttributeMapping=function addAttributeMapping(attributemappingData){return function(dispatch){dispatch(setAttributeMappingLoading());__WEBPACK_IMPORTED_MODULE_0_axios___default.a.post('/api/attributemapping/',attributemappingData).then(function(res){return dispatch({type:__WEBPACK_IMPORTED_MODULE_1__types__["d" /* ADD_ATTRIBUTE_MAPPING */],payload:res.data});}).catch(function(err){dispatch({type:__WEBPACK_IMPORTED_MODULE_1__types__["_26" /* GET_ERRORS */],payload:err.response.data});dispatch(stopAttributeMappingLoading());});};};// Edit attributemapping
var editAttributeMapping=function editAttributeMapping(attributemappingData){return function(dispatch){dispatch(setAttributeMappingLoading());__WEBPACK_IMPORTED_MODULE_0_axios___default.a.post('/api/attributemapping/edit',attributemappingData).then(function(res){return dispatch({type:__WEBPACK_IMPORTED_MODULE_1__types__["_7" /* EDIT_ATTRIBUTE_MAPPING */],payload:res.data});}).catch(function(err){dispatch({type:__WEBPACK_IMPORTED_MODULE_1__types__["_26" /* GET_ERRORS */],payload:err.response.data});dispatch(stopAttributeMappingLoading());});};};// delete attributemapping
var deleteAttributeMapping=function deleteAttributeMapping(deleteData){return function(dispatch){dispatch(setAttributeMappingLoading());__WEBPACK_IMPORTED_MODULE_0_axios___default.a.post('/api/attributemapping/delete',deleteData).then(function(res){return dispatch({type:__WEBPACK_IMPORTED_MODULE_1__types__["N" /* DELETE_ATTRIBUTE_MAPPING */],payload:res.data});}).catch(function(err){dispatch({type:__WEBPACK_IMPORTED_MODULE_1__types__["_26" /* GET_ERRORS */],payload:err.response.data});dispatch(stopAttributeMappingLoading());});};};// AttributeMapping loading
var setAttributeMappingLoading=function setAttributeMappingLoading(){return{type:__WEBPACK_IMPORTED_MODULE_1__types__["D" /* ATTRIBUTE_MAPPING_LOADING */]};};var stopAttributeMappingLoading=function stopAttributeMappingLoading(){return{type:__WEBPACK_IMPORTED_MODULE_1__types__["E" /* ATTRIBUTE_MAPPING_STOPLOADING */]};};

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return listAttributeCategory; });
/* unused harmony export listAttributeCategoryOne */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addAttributeCategory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return editAttributeCategory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return deleteAttributeCategory; });
/* unused harmony export setAttributeCategoryLoading */
/* unused harmony export stopAttributeCategoryLoading */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__types__ = __webpack_require__(11);
// Get all attributecategory
var listAttributeCategory=function listAttributeCategory(){return function(dispatch){dispatch(setAttributeCategoryLoading());__WEBPACK_IMPORTED_MODULE_0_axios___default.a.get('/api/attributecategory/').then(function(res){dispatch({type:__WEBPACK_IMPORTED_MODULE_1__types__["_28" /* LIST_ATTRIBUTE_CATEGORY */],payload:res.data});}).catch(function(err){console.log("err data",err);dispatch({type:__WEBPACK_IMPORTED_MODULE_1__types__["_26" /* GET_ERRORS */],payload:err.response.data});});};};var listAttributeCategoryOne=function listAttributeCategoryOne(data){return function(dispatch){dispatch(setAttributeCategoryLoading());__WEBPACK_IMPORTED_MODULE_0_axios___default.a.post('/api/attributecategory/getattributecategory',data).then(function(res){dispatch({type:__WEBPACK_IMPORTED_MODULE_1__types__["_28" /* LIST_ATTRIBUTE_CATEGORY */],payload:res.data});}).catch(function(err){console.log("err data",err);dispatch({type:__WEBPACK_IMPORTED_MODULE_1__types__["_26" /* GET_ERRORS */],payload:err.response.data});});};};// Create attributecategory
var addAttributeCategory=function addAttributeCategory(attributecategoryData){return function(dispatch){dispatch(setAttributeCategoryLoading());__WEBPACK_IMPORTED_MODULE_0_axios___default.a.post('/api/attributecategory/',attributecategoryData).then(function(res){return dispatch({type:__WEBPACK_IMPORTED_MODULE_1__types__["b" /* ADD_ATTRIBUTE_CATEGORY */],payload:res.data});}).catch(function(err){dispatch({type:__WEBPACK_IMPORTED_MODULE_1__types__["_26" /* GET_ERRORS */],payload:err.response.data});dispatch(stopAttributeCategoryLoading());});};};// Edit attributecategory
var editAttributeCategory=function editAttributeCategory(attributecategoryData){return function(dispatch){dispatch(setAttributeCategoryLoading());__WEBPACK_IMPORTED_MODULE_0_axios___default.a.post('/api/attributecategory/edit',attributecategoryData).then(function(res){return dispatch({type:__WEBPACK_IMPORTED_MODULE_1__types__["_6" /* EDIT_ATTRIBUTE_CATEGORY */],payload:res.data});}).catch(function(err){dispatch({type:__WEBPACK_IMPORTED_MODULE_1__types__["_26" /* GET_ERRORS */],payload:err.response.data});dispatch(stopAttributeCategoryLoading());});};};// delete attributecategory
var deleteAttributeCategory=function deleteAttributeCategory(deleteData){return function(dispatch){dispatch(setAttributeCategoryLoading());__WEBPACK_IMPORTED_MODULE_0_axios___default.a.post('/api/attributecategory/delete',deleteData).then(function(res){return dispatch({type:__WEBPACK_IMPORTED_MODULE_1__types__["M" /* DELETE_ATTRIBUTE_CATEGORY */],payload:res.data});}).catch(function(err){dispatch({type:__WEBPACK_IMPORTED_MODULE_1__types__["_26" /* GET_ERRORS */],payload:err.response.data});dispatch(stopAttributeCategoryLoading());});};};// AttributeCategory loading
var setAttributeCategoryLoading=function setAttributeCategoryLoading(){return{type:__WEBPACK_IMPORTED_MODULE_1__types__["B" /* ATTRIBUTE_CATEGORY_LOADING */]};};var stopAttributeCategoryLoading=function stopAttributeCategoryLoading(){return{type:__WEBPACK_IMPORTED_MODULE_1__types__["C" /* ATTRIBUTE_CATEGORY_STOPLOADING */]};};

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var __DEV__ = "production" !== 'production';

var warning = function() {};

if (__DEV__) {
  var printWarning = function printWarning(format, args) {
    var len = arguments.length;
    args = new Array(len > 1 ? len - 1 : 0);
    for (var key = 1; key < len; key++) {
      args[key - 1] = arguments[key];
    }
    var argIndex = 0;
    var message = 'Warning: ' +
      format.replace(/%s/g, function() {
        return args[argIndex++];
      });
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  }

  warning = function(condition, format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);
    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }
    if (format === undefined) {
      throw new Error(
          '`warning(condition, format, ...args)` requires a warning ' +
          'message argument'
      );
    }
    if (!condition) {
      printWarning.apply(null, [format].concat(args));
    }
  };
}

module.exports = warning;


/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return listSubCategoryChild; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return listSubCategoryChildOne; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addSubCategoryChild; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return editSubCategoryChild; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return deleteSubCategoryChild; });
/* unused harmony export setSubCategoryChildLoading */
/* unused harmony export stopSubCategoryChildLoading */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__types__ = __webpack_require__(11);
// Get all subcategorychild
var listSubCategoryChild=function listSubCategoryChild(){return function(dispatch){dispatch(setSubCategoryChildLoading());__WEBPACK_IMPORTED_MODULE_0_axios___default.a.get('/api/subcategorychild/').then(function(res){dispatch({type:__WEBPACK_IMPORTED_MODULE_1__types__["_44" /* LIST_SUBCATEGORYCHILD */],payload:res.data});}).catch(function(err){console.log("err data",err);dispatch({type:__WEBPACK_IMPORTED_MODULE_1__types__["_26" /* GET_ERRORS */],payload:err.response.data});});};};// Get all subcategorychild
var listSubCategoryChildOne=function listSubCategoryChildOne(data){return function(dispatch){dispatch(setSubCategoryChildLoading());__WEBPACK_IMPORTED_MODULE_0_axios___default.a.post('/api/subcategorychild/getsubcategorychild',data).then(function(res){dispatch({type:__WEBPACK_IMPORTED_MODULE_1__types__["_44" /* LIST_SUBCATEGORYCHILD */],payload:res.data});}).catch(function(err){console.log("err data",err);dispatch({type:__WEBPACK_IMPORTED_MODULE_1__types__["_26" /* GET_ERRORS */],payload:err.response.data});});};};// Create subcategorychild
var addSubCategoryChild=function addSubCategoryChild(subcategorychildData){return function(dispatch){dispatch(setSubCategoryChildLoading());__WEBPACK_IMPORTED_MODULE_0_axios___default.a.post('/api/subcategorychild/',subcategorychildData).then(function(res){return dispatch({type:__WEBPACK_IMPORTED_MODULE_1__types__["v" /* ADD_SUBCATEGORYCHILD */],payload:res.data});}).catch(function(err){dispatch({type:__WEBPACK_IMPORTED_MODULE_1__types__["_26" /* GET_ERRORS */],payload:err.response.data});dispatch(stopSubCategoryChildLoading());});};};// Edit subcategorychild
var editSubCategoryChild=function editSubCategoryChild(subcategorychildData){return function(dispatch){dispatch(setSubCategoryChildLoading());__WEBPACK_IMPORTED_MODULE_0_axios___default.a.post('/api/subcategorychild/edit',subcategorychildData).then(function(res){return dispatch({type:__WEBPACK_IMPORTED_MODULE_1__types__["_22" /* EDIT_SUBCATEGORYCHILD */],payload:res.data});}).catch(function(err){dispatch({type:__WEBPACK_IMPORTED_MODULE_1__types__["_26" /* GET_ERRORS */],payload:err.response.data});dispatch(stopSubCategoryChildLoading());});};};// delete subcategorychild
var deleteSubCategoryChild=function deleteSubCategoryChild(deleteData){return function(dispatch){dispatch(setSubCategoryChildLoading());__WEBPACK_IMPORTED_MODULE_0_axios___default.a.post('/api/subcategorychild/delete',deleteData).then(function(res){return dispatch({type:__WEBPACK_IMPORTED_MODULE_1__types__["_2" /* DELETE_SUBCATEGORYCHILD */],payload:res.data});}).catch(function(err){dispatch({type:__WEBPACK_IMPORTED_MODULE_1__types__["_26" /* GET_ERRORS */],payload:err.response.data});dispatch(stopSubCategoryChildLoading());});};};// SubCategoryChild loading
var setSubCategoryChildLoading=function setSubCategoryChildLoading(){return{type:__WEBPACK_IMPORTED_MODULE_1__types__["_77" /* SUBCATEGORYCHILD_LOADING */]};};var stopSubCategoryChildLoading=function stopSubCategoryChildLoading(){return{type:__WEBPACK_IMPORTED_MODULE_1__types__["_78" /* SUBCATEGORYCHILD_STOPLOADING */]};};

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var invariant = function(condition, format, a, b, c, d, e, f) {
  if (false) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  }

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error(
        'Minified exception occurred; use the non-minified dev environment ' +
        'for the full error message and additional helpful warnings.'
      );
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(
        format.replace(/%s/g, function() { return args[argIndex++]; })
      );
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
};

module.exports = invariant;


/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReactReduxContext; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);

var ReactReduxContext = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createContext(null);

if (false) {
  ReactReduxContext.displayName = 'ReactRedux';
}

/* unused harmony default export */ var _unused_webpack_default_export = (ReactReduxContext);

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return KEY_PREFIX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return FLUSH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return REHYDRATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return PAUSE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return PERSIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return PURGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return REGISTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DEFAULT_VERSION; });
var KEY_PREFIX = 'persist:';
var FLUSH = 'persist/FLUSH';
var REHYDRATE = 'persist/REHYDRATE';
var PAUSE = 'persist/PAUSE';
var PERSIST = 'persist/PERSIST';
var PURGE = 'persist/PURGE';
var REGISTER = 'persist/REGISTER';
var DEFAULT_VERSION = -1;

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createBrowserHistory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return createHashHistory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return createMemoryHistory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createLocation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return locationsAreEqual; });
/* unused harmony export parsePath */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return createPath; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_resolve_pathname__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_value_equal__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_tiny_warning__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_tiny_invariant__ = __webpack_require__(118);






function addLeadingSlash(path) {
  return path.charAt(0) === '/' ? path : '/' + path;
}
function stripLeadingSlash(path) {
  return path.charAt(0) === '/' ? path.substr(1) : path;
}
function hasBasename(path, prefix) {
  return path.toLowerCase().indexOf(prefix.toLowerCase()) === 0 && '/?#'.indexOf(path.charAt(prefix.length)) !== -1;
}
function stripBasename(path, prefix) {
  return hasBasename(path, prefix) ? path.substr(prefix.length) : path;
}
function stripTrailingSlash(path) {
  return path.charAt(path.length - 1) === '/' ? path.slice(0, -1) : path;
}
function parsePath(path) {
  var pathname = path || '/';
  var search = '';
  var hash = '';
  var hashIndex = pathname.indexOf('#');

  if (hashIndex !== -1) {
    hash = pathname.substr(hashIndex);
    pathname = pathname.substr(0, hashIndex);
  }

  var searchIndex = pathname.indexOf('?');

  if (searchIndex !== -1) {
    search = pathname.substr(searchIndex);
    pathname = pathname.substr(0, searchIndex);
  }

  return {
    pathname: pathname,
    search: search === '?' ? '' : search,
    hash: hash === '#' ? '' : hash
  };
}
function createPath(location) {
  var pathname = location.pathname,
      search = location.search,
      hash = location.hash;
  var path = pathname || '/';
  if (search && search !== '?') path += search.charAt(0) === '?' ? search : "?" + search;
  if (hash && hash !== '#') path += hash.charAt(0) === '#' ? hash : "#" + hash;
  return path;
}

function createLocation(path, state, key, currentLocation) {
  var location;

  if (typeof path === 'string') {
    // Two-arg form: push(path, state)
    location = parsePath(path);
    location.state = state;
  } else {
    // One-arg form: push(location)
    location = Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__["a" /* default */])({}, path);
    if (location.pathname === undefined) location.pathname = '';

    if (location.search) {
      if (location.search.charAt(0) !== '?') location.search = '?' + location.search;
    } else {
      location.search = '';
    }

    if (location.hash) {
      if (location.hash.charAt(0) !== '#') location.hash = '#' + location.hash;
    } else {
      location.hash = '';
    }

    if (state !== undefined && location.state === undefined) location.state = state;
  }

  try {
    location.pathname = decodeURI(location.pathname);
  } catch (e) {
    if (e instanceof URIError) {
      throw new URIError('Pathname "' + location.pathname + '" could not be decoded. ' + 'This is likely caused by an invalid percent-encoding.');
    } else {
      throw e;
    }
  }

  if (key) location.key = key;

  if (currentLocation) {
    // Resolve incomplete/relative pathname relative to current location.
    if (!location.pathname) {
      location.pathname = currentLocation.pathname;
    } else if (location.pathname.charAt(0) !== '/') {
      location.pathname = Object(__WEBPACK_IMPORTED_MODULE_1_resolve_pathname__["a" /* default */])(location.pathname, currentLocation.pathname);
    }
  } else {
    // When there is no prior location and pathname is empty, set it to /
    if (!location.pathname) {
      location.pathname = '/';
    }
  }

  return location;
}
function locationsAreEqual(a, b) {
  return a.pathname === b.pathname && a.search === b.search && a.hash === b.hash && a.key === b.key && Object(__WEBPACK_IMPORTED_MODULE_2_value_equal__["a" /* default */])(a.state, b.state);
}

function createTransitionManager() {
  var prompt = null;

  function setPrompt(nextPrompt) {
     false ? warning(prompt == null, 'A history supports only one prompt at a time') : void 0;
    prompt = nextPrompt;
    return function () {
      if (prompt === nextPrompt) prompt = null;
    };
  }

  function confirmTransitionTo(location, action, getUserConfirmation, callback) {
    // TODO: If another transition starts while we're still confirming
    // the previous one, we may end up in a weird state. Figure out the
    // best way to handle this.
    if (prompt != null) {
      var result = typeof prompt === 'function' ? prompt(location, action) : prompt;

      if (typeof result === 'string') {
        if (typeof getUserConfirmation === 'function') {
          getUserConfirmation(result, callback);
        } else {
           false ? warning(false, 'A history needs a getUserConfirmation function in order to use a prompt message') : void 0;
          callback(true);
        }
      } else {
        // Return false from a transition hook to cancel the transition.
        callback(result !== false);
      }
    } else {
      callback(true);
    }
  }

  var listeners = [];

  function appendListener(fn) {
    var isActive = true;

    function listener() {
      if (isActive) fn.apply(void 0, arguments);
    }

    listeners.push(listener);
    return function () {
      isActive = false;
      listeners = listeners.filter(function (item) {
        return item !== listener;
      });
    };
  }

  function notifyListeners() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    listeners.forEach(function (listener) {
      return listener.apply(void 0, args);
    });
  }

  return {
    setPrompt: setPrompt,
    confirmTransitionTo: confirmTransitionTo,
    appendListener: appendListener,
    notifyListeners: notifyListeners
  };
}

var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
function getConfirmation(message, callback) {
  callback(window.confirm(message)); // eslint-disable-line no-alert
}
/**
 * Returns true if the HTML5 history API is supported. Taken from Modernizr.
 *
 * https://github.com/Modernizr/Modernizr/blob/master/LICENSE
 * https://github.com/Modernizr/Modernizr/blob/master/feature-detects/history.js
 * changed to avoid false negatives for Windows Phones: https://github.com/reactjs/react-router/issues/586
 */

function supportsHistory() {
  var ua = window.navigator.userAgent;
  if ((ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) && ua.indexOf('Mobile Safari') !== -1 && ua.indexOf('Chrome') === -1 && ua.indexOf('Windows Phone') === -1) return false;
  return window.history && 'pushState' in window.history;
}
/**
 * Returns true if browser fires popstate on hash change.
 * IE10 and IE11 do not.
 */

function supportsPopStateOnHashChange() {
  return window.navigator.userAgent.indexOf('Trident') === -1;
}
/**
 * Returns false if using go(n) with hash history causes a full page reload.
 */

function supportsGoWithoutReloadUsingHash() {
  return window.navigator.userAgent.indexOf('Firefox') === -1;
}
/**
 * Returns true if a given popstate event is an extraneous WebKit event.
 * Accounts for the fact that Chrome on iOS fires real popstate events
 * containing undefined state when pressing the back button.
 */

function isExtraneousPopstateEvent(event) {
  return event.state === undefined && navigator.userAgent.indexOf('CriOS') === -1;
}

var PopStateEvent = 'popstate';
var HashChangeEvent = 'hashchange';

function getHistoryState() {
  try {
    return window.history.state || {};
  } catch (e) {
    // IE 11 sometimes throws when accessing window.history.state
    // See https://github.com/ReactTraining/history/pull/289
    return {};
  }
}
/**
 * Creates a history object that uses the HTML5 history API including
 * pushState, replaceState, and the popstate event.
 */


function createBrowserHistory(props) {
  if (props === void 0) {
    props = {};
  }

  !canUseDOM ?  false ? invariant(false, 'Browser history needs a DOM') : Object(__WEBPACK_IMPORTED_MODULE_4_tiny_invariant__["a" /* default */])(false) : void 0;
  var globalHistory = window.history;
  var canUseHistory = supportsHistory();
  var needsHashChangeListener = !supportsPopStateOnHashChange();
  var _props = props,
      _props$forceRefresh = _props.forceRefresh,
      forceRefresh = _props$forceRefresh === void 0 ? false : _props$forceRefresh,
      _props$getUserConfirm = _props.getUserConfirmation,
      getUserConfirmation = _props$getUserConfirm === void 0 ? getConfirmation : _props$getUserConfirm,
      _props$keyLength = _props.keyLength,
      keyLength = _props$keyLength === void 0 ? 6 : _props$keyLength;
  var basename = props.basename ? stripTrailingSlash(addLeadingSlash(props.basename)) : '';

  function getDOMLocation(historyState) {
    var _ref = historyState || {},
        key = _ref.key,
        state = _ref.state;

    var _window$location = window.location,
        pathname = _window$location.pathname,
        search = _window$location.search,
        hash = _window$location.hash;
    var path = pathname + search + hash;
     false ? warning(!basename || hasBasename(path, basename), 'You are attempting to use a basename on a page whose URL path does not begin ' + 'with the basename. Expected path "' + path + '" to begin with "' + basename + '".') : void 0;
    if (basename) path = stripBasename(path, basename);
    return createLocation(path, state, key);
  }

  function createKey() {
    return Math.random().toString(36).substr(2, keyLength);
  }

  var transitionManager = createTransitionManager();

  function setState(nextState) {
    Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__["a" /* default */])(history, nextState);

    history.length = globalHistory.length;
    transitionManager.notifyListeners(history.location, history.action);
  }

  function handlePopState(event) {
    // Ignore extraneous popstate events in WebKit.
    if (isExtraneousPopstateEvent(event)) return;
    handlePop(getDOMLocation(event.state));
  }

  function handleHashChange() {
    handlePop(getDOMLocation(getHistoryState()));
  }

  var forceNextPop = false;

  function handlePop(location) {
    if (forceNextPop) {
      forceNextPop = false;
      setState();
    } else {
      var action = 'POP';
      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
        if (ok) {
          setState({
            action: action,
            location: location
          });
        } else {
          revertPop(location);
        }
      });
    }
  }

  function revertPop(fromLocation) {
    var toLocation = history.location; // TODO: We could probably make this more reliable by
    // keeping a list of keys we've seen in sessionStorage.
    // Instead, we just default to 0 for keys we don't know.

    var toIndex = allKeys.indexOf(toLocation.key);
    if (toIndex === -1) toIndex = 0;
    var fromIndex = allKeys.indexOf(fromLocation.key);
    if (fromIndex === -1) fromIndex = 0;
    var delta = toIndex - fromIndex;

    if (delta) {
      forceNextPop = true;
      go(delta);
    }
  }

  var initialLocation = getDOMLocation(getHistoryState());
  var allKeys = [initialLocation.key]; // Public interface

  function createHref(location) {
    return basename + createPath(location);
  }

  function push(path, state) {
     false ? warning(!(typeof path === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to push when the 1st ' + 'argument is a location-like object that already has state; it is ignored') : void 0;
    var action = 'PUSH';
    var location = createLocation(path, state, createKey(), history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var href = createHref(location);
      var key = location.key,
          state = location.state;

      if (canUseHistory) {
        globalHistory.pushState({
          key: key,
          state: state
        }, null, href);

        if (forceRefresh) {
          window.location.href = href;
        } else {
          var prevIndex = allKeys.indexOf(history.location.key);
          var nextKeys = allKeys.slice(0, prevIndex + 1);
          nextKeys.push(location.key);
          allKeys = nextKeys;
          setState({
            action: action,
            location: location
          });
        }
      } else {
         false ? warning(state === undefined, 'Browser history cannot push state in browsers that do not support HTML5 history') : void 0;
        window.location.href = href;
      }
    });
  }

  function replace(path, state) {
     false ? warning(!(typeof path === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to replace when the 1st ' + 'argument is a location-like object that already has state; it is ignored') : void 0;
    var action = 'REPLACE';
    var location = createLocation(path, state, createKey(), history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var href = createHref(location);
      var key = location.key,
          state = location.state;

      if (canUseHistory) {
        globalHistory.replaceState({
          key: key,
          state: state
        }, null, href);

        if (forceRefresh) {
          window.location.replace(href);
        } else {
          var prevIndex = allKeys.indexOf(history.location.key);
          if (prevIndex !== -1) allKeys[prevIndex] = location.key;
          setState({
            action: action,
            location: location
          });
        }
      } else {
         false ? warning(state === undefined, 'Browser history cannot replace state in browsers that do not support HTML5 history') : void 0;
        window.location.replace(href);
      }
    });
  }

  function go(n) {
    globalHistory.go(n);
  }

  function goBack() {
    go(-1);
  }

  function goForward() {
    go(1);
  }

  var listenerCount = 0;

  function checkDOMListeners(delta) {
    listenerCount += delta;

    if (listenerCount === 1 && delta === 1) {
      window.addEventListener(PopStateEvent, handlePopState);
      if (needsHashChangeListener) window.addEventListener(HashChangeEvent, handleHashChange);
    } else if (listenerCount === 0) {
      window.removeEventListener(PopStateEvent, handlePopState);
      if (needsHashChangeListener) window.removeEventListener(HashChangeEvent, handleHashChange);
    }
  }

  var isBlocked = false;

  function block(prompt) {
    if (prompt === void 0) {
      prompt = false;
    }

    var unblock = transitionManager.setPrompt(prompt);

    if (!isBlocked) {
      checkDOMListeners(1);
      isBlocked = true;
    }

    return function () {
      if (isBlocked) {
        isBlocked = false;
        checkDOMListeners(-1);
      }

      return unblock();
    };
  }

  function listen(listener) {
    var unlisten = transitionManager.appendListener(listener);
    checkDOMListeners(1);
    return function () {
      checkDOMListeners(-1);
      unlisten();
    };
  }

  var history = {
    length: globalHistory.length,
    action: 'POP',
    location: initialLocation,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    block: block,
    listen: listen
  };
  return history;
}

var HashChangeEvent$1 = 'hashchange';
var HashPathCoders = {
  hashbang: {
    encodePath: function encodePath(path) {
      return path.charAt(0) === '!' ? path : '!/' + stripLeadingSlash(path);
    },
    decodePath: function decodePath(path) {
      return path.charAt(0) === '!' ? path.substr(1) : path;
    }
  },
  noslash: {
    encodePath: stripLeadingSlash,
    decodePath: addLeadingSlash
  },
  slash: {
    encodePath: addLeadingSlash,
    decodePath: addLeadingSlash
  }
};

function stripHash(url) {
  var hashIndex = url.indexOf('#');
  return hashIndex === -1 ? url : url.slice(0, hashIndex);
}

function getHashPath() {
  // We can't use window.location.hash here because it's not
  // consistent across browsers - Firefox will pre-decode it!
  var href = window.location.href;
  var hashIndex = href.indexOf('#');
  return hashIndex === -1 ? '' : href.substring(hashIndex + 1);
}

function pushHashPath(path) {
  window.location.hash = path;
}

function replaceHashPath(path) {
  window.location.replace(stripHash(window.location.href) + '#' + path);
}

function createHashHistory(props) {
  if (props === void 0) {
    props = {};
  }

  !canUseDOM ?  false ? invariant(false, 'Hash history needs a DOM') : Object(__WEBPACK_IMPORTED_MODULE_4_tiny_invariant__["a" /* default */])(false) : void 0;
  var globalHistory = window.history;
  var canGoWithoutReload = supportsGoWithoutReloadUsingHash();
  var _props = props,
      _props$getUserConfirm = _props.getUserConfirmation,
      getUserConfirmation = _props$getUserConfirm === void 0 ? getConfirmation : _props$getUserConfirm,
      _props$hashType = _props.hashType,
      hashType = _props$hashType === void 0 ? 'slash' : _props$hashType;
  var basename = props.basename ? stripTrailingSlash(addLeadingSlash(props.basename)) : '';
  var _HashPathCoders$hashT = HashPathCoders[hashType],
      encodePath = _HashPathCoders$hashT.encodePath,
      decodePath = _HashPathCoders$hashT.decodePath;

  function getDOMLocation() {
    var path = decodePath(getHashPath());
     false ? warning(!basename || hasBasename(path, basename), 'You are attempting to use a basename on a page whose URL path does not begin ' + 'with the basename. Expected path "' + path + '" to begin with "' + basename + '".') : void 0;
    if (basename) path = stripBasename(path, basename);
    return createLocation(path);
  }

  var transitionManager = createTransitionManager();

  function setState(nextState) {
    Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__["a" /* default */])(history, nextState);

    history.length = globalHistory.length;
    transitionManager.notifyListeners(history.location, history.action);
  }

  var forceNextPop = false;
  var ignorePath = null;

  function locationsAreEqual$$1(a, b) {
    return a.pathname === b.pathname && a.search === b.search && a.hash === b.hash;
  }

  function handleHashChange() {
    var path = getHashPath();
    var encodedPath = encodePath(path);

    if (path !== encodedPath) {
      // Ensure we always have a properly-encoded hash.
      replaceHashPath(encodedPath);
    } else {
      var location = getDOMLocation();
      var prevLocation = history.location;
      if (!forceNextPop && locationsAreEqual$$1(prevLocation, location)) return; // A hashchange doesn't always == location change.

      if (ignorePath === createPath(location)) return; // Ignore this change; we already setState in push/replace.

      ignorePath = null;
      handlePop(location);
    }
  }

  function handlePop(location) {
    if (forceNextPop) {
      forceNextPop = false;
      setState();
    } else {
      var action = 'POP';
      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
        if (ok) {
          setState({
            action: action,
            location: location
          });
        } else {
          revertPop(location);
        }
      });
    }
  }

  function revertPop(fromLocation) {
    var toLocation = history.location; // TODO: We could probably make this more reliable by
    // keeping a list of paths we've seen in sessionStorage.
    // Instead, we just default to 0 for paths we don't know.

    var toIndex = allPaths.lastIndexOf(createPath(toLocation));
    if (toIndex === -1) toIndex = 0;
    var fromIndex = allPaths.lastIndexOf(createPath(fromLocation));
    if (fromIndex === -1) fromIndex = 0;
    var delta = toIndex - fromIndex;

    if (delta) {
      forceNextPop = true;
      go(delta);
    }
  } // Ensure the hash is encoded properly before doing anything else.


  var path = getHashPath();
  var encodedPath = encodePath(path);
  if (path !== encodedPath) replaceHashPath(encodedPath);
  var initialLocation = getDOMLocation();
  var allPaths = [createPath(initialLocation)]; // Public interface

  function createHref(location) {
    var baseTag = document.querySelector('base');
    var href = '';

    if (baseTag && baseTag.getAttribute('href')) {
      href = stripHash(window.location.href);
    }

    return href + '#' + encodePath(basename + createPath(location));
  }

  function push(path, state) {
     false ? warning(state === undefined, 'Hash history cannot push state; it is ignored') : void 0;
    var action = 'PUSH';
    var location = createLocation(path, undefined, undefined, history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var path = createPath(location);
      var encodedPath = encodePath(basename + path);
      var hashChanged = getHashPath() !== encodedPath;

      if (hashChanged) {
        // We cannot tell if a hashchange was caused by a PUSH, so we'd
        // rather setState here and ignore the hashchange. The caveat here
        // is that other hash histories in the page will consider it a POP.
        ignorePath = path;
        pushHashPath(encodedPath);
        var prevIndex = allPaths.lastIndexOf(createPath(history.location));
        var nextPaths = allPaths.slice(0, prevIndex + 1);
        nextPaths.push(path);
        allPaths = nextPaths;
        setState({
          action: action,
          location: location
        });
      } else {
         false ? warning(false, 'Hash history cannot PUSH the same path; a new entry will not be added to the history stack') : void 0;
        setState();
      }
    });
  }

  function replace(path, state) {
     false ? warning(state === undefined, 'Hash history cannot replace state; it is ignored') : void 0;
    var action = 'REPLACE';
    var location = createLocation(path, undefined, undefined, history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var path = createPath(location);
      var encodedPath = encodePath(basename + path);
      var hashChanged = getHashPath() !== encodedPath;

      if (hashChanged) {
        // We cannot tell if a hashchange was caused by a REPLACE, so we'd
        // rather setState here and ignore the hashchange. The caveat here
        // is that other hash histories in the page will consider it a POP.
        ignorePath = path;
        replaceHashPath(encodedPath);
      }

      var prevIndex = allPaths.indexOf(createPath(history.location));
      if (prevIndex !== -1) allPaths[prevIndex] = path;
      setState({
        action: action,
        location: location
      });
    });
  }

  function go(n) {
     false ? warning(canGoWithoutReload, 'Hash history go(n) causes a full page reload in this browser') : void 0;
    globalHistory.go(n);
  }

  function goBack() {
    go(-1);
  }

  function goForward() {
    go(1);
  }

  var listenerCount = 0;

  function checkDOMListeners(delta) {
    listenerCount += delta;

    if (listenerCount === 1 && delta === 1) {
      window.addEventListener(HashChangeEvent$1, handleHashChange);
    } else if (listenerCount === 0) {
      window.removeEventListener(HashChangeEvent$1, handleHashChange);
    }
  }

  var isBlocked = false;

  function block(prompt) {
    if (prompt === void 0) {
      prompt = false;
    }

    var unblock = transitionManager.setPrompt(prompt);

    if (!isBlocked) {
      checkDOMListeners(1);
      isBlocked = true;
    }

    return function () {
      if (isBlocked) {
        isBlocked = false;
        checkDOMListeners(-1);
      }

      return unblock();
    };
  }

  function listen(listener) {
    var unlisten = transitionManager.appendListener(listener);
    checkDOMListeners(1);
    return function () {
      checkDOMListeners(-1);
      unlisten();
    };
  }

  var history = {
    length: globalHistory.length,
    action: 'POP',
    location: initialLocation,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    block: block,
    listen: listen
  };
  return history;
}

function clamp(n, lowerBound, upperBound) {
  return Math.min(Math.max(n, lowerBound), upperBound);
}
/**
 * Creates a history object that stores locations in memory.
 */


function createMemoryHistory(props) {
  if (props === void 0) {
    props = {};
  }

  var _props = props,
      getUserConfirmation = _props.getUserConfirmation,
      _props$initialEntries = _props.initialEntries,
      initialEntries = _props$initialEntries === void 0 ? ['/'] : _props$initialEntries,
      _props$initialIndex = _props.initialIndex,
      initialIndex = _props$initialIndex === void 0 ? 0 : _props$initialIndex,
      _props$keyLength = _props.keyLength,
      keyLength = _props$keyLength === void 0 ? 6 : _props$keyLength;
  var transitionManager = createTransitionManager();

  function setState(nextState) {
    Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__["a" /* default */])(history, nextState);

    history.length = history.entries.length;
    transitionManager.notifyListeners(history.location, history.action);
  }

  function createKey() {
    return Math.random().toString(36).substr(2, keyLength);
  }

  var index = clamp(initialIndex, 0, initialEntries.length - 1);
  var entries = initialEntries.map(function (entry) {
    return typeof entry === 'string' ? createLocation(entry, undefined, createKey()) : createLocation(entry, undefined, entry.key || createKey());
  }); // Public interface

  var createHref = createPath;

  function push(path, state) {
     false ? warning(!(typeof path === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to push when the 1st ' + 'argument is a location-like object that already has state; it is ignored') : void 0;
    var action = 'PUSH';
    var location = createLocation(path, state, createKey(), history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var prevIndex = history.index;
      var nextIndex = prevIndex + 1;
      var nextEntries = history.entries.slice(0);

      if (nextEntries.length > nextIndex) {
        nextEntries.splice(nextIndex, nextEntries.length - nextIndex, location);
      } else {
        nextEntries.push(location);
      }

      setState({
        action: action,
        location: location,
        index: nextIndex,
        entries: nextEntries
      });
    });
  }

  function replace(path, state) {
     false ? warning(!(typeof path === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to replace when the 1st ' + 'argument is a location-like object that already has state; it is ignored') : void 0;
    var action = 'REPLACE';
    var location = createLocation(path, state, createKey(), history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      history.entries[history.index] = location;
      setState({
        action: action,
        location: location
      });
    });
  }

  function go(n) {
    var nextIndex = clamp(history.index + n, 0, history.entries.length - 1);
    var action = 'POP';
    var location = history.entries[nextIndex];
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (ok) {
        setState({
          action: action,
          location: location,
          index: nextIndex
        });
      } else {
        // Mimic the behavior of DOM histories by
        // causing a render after a cancelled POP.
        setState();
      }
    });
  }

  function goBack() {
    go(-1);
  }

  function goForward() {
    go(1);
  }

  function canGo(n) {
    var nextIndex = history.index + n;
    return nextIndex >= 0 && nextIndex < history.entries.length;
  }

  function block(prompt) {
    if (prompt === void 0) {
      prompt = false;
    }

    return transitionManager.setPrompt(prompt);
  }

  function listen(listener) {
    return transitionManager.appendListener(listener);
  }

  var history = {
    length: entries.length,
    action: 'POP',
    location: entries[index],
    index: index,
    entries: entries,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    canGo: canGo,
    block: block,
    listen: listen
  };
  return history;
}




/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__DO_NOT_USE__ActionTypes", function() { return ActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyMiddleware", function() { return applyMiddleware; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bindActionCreators", function() { return bindActionCreators; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "combineReducers", function() { return combineReducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compose", function() { return compose; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createStore", function() { return createStore; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_objectSpread2__ = __webpack_require__(175);


/**
 * Adapted from React: https://github.com/facebook/react/blob/master/packages/shared/formatProdErrorMessage.js
 *
 * Do not require this module directly! Use normal throw error calls. These messages will be replaced with error codes
 * during build.
 * @param {number} code
 */
function formatProdErrorMessage(code) {
  return "Minified Redux error #" + code + "; visit https://redux.js.org/Errors?code=" + code + " for the full message or " + 'use the non-minified dev environment for full errors. ';
}

// Inlined version of the `symbol-observable` polyfill
var $$observable = (function () {
  return typeof Symbol === 'function' && Symbol.observable || '@@observable';
})();

/**
 * These are private action types reserved by Redux.
 * For any unknown actions, you must return the current state.
 * If the current state is undefined, you must return the initial state.
 * Do not reference these action types directly in your code.
 */
var randomString = function randomString() {
  return Math.random().toString(36).substring(7).split('').join('.');
};

var ActionTypes = {
  INIT: "@@redux/INIT" + randomString(),
  REPLACE: "@@redux/REPLACE" + randomString(),
  PROBE_UNKNOWN_ACTION: function PROBE_UNKNOWN_ACTION() {
    return "@@redux/PROBE_UNKNOWN_ACTION" + randomString();
  }
};

/**
 * @param {any} obj The object to inspect.
 * @returns {boolean} True if the argument appears to be a plain object.
 */
function isPlainObject(obj) {
  if (typeof obj !== 'object' || obj === null) return false;
  var proto = obj;

  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }

  return Object.getPrototypeOf(obj) === proto;
}

// Inlined / shortened version of `kindOf` from https://github.com/jonschlinkert/kind-of
function miniKindOf(val) {
  if (val === void 0) return 'undefined';
  if (val === null) return 'null';
  var type = typeof val;

  switch (type) {
    case 'boolean':
    case 'string':
    case 'number':
    case 'symbol':
    case 'function':
      {
        return type;
      }
  }

  if (Array.isArray(val)) return 'array';
  if (isDate(val)) return 'date';
  if (isError(val)) return 'error';
  var constructorName = ctorName(val);

  switch (constructorName) {
    case 'Symbol':
    case 'Promise':
    case 'WeakMap':
    case 'WeakSet':
    case 'Map':
    case 'Set':
      return constructorName;
  } // other


  return type.slice(8, -1).toLowerCase().replace(/\s/g, '');
}

function ctorName(val) {
  return typeof val.constructor === 'function' ? val.constructor.name : null;
}

function isError(val) {
  return val instanceof Error || typeof val.message === 'string' && val.constructor && typeof val.constructor.stackTraceLimit === 'number';
}

function isDate(val) {
  if (val instanceof Date) return true;
  return typeof val.toDateString === 'function' && typeof val.getDate === 'function' && typeof val.setDate === 'function';
}

function kindOf(val) {
  var typeOfVal = typeof val;

  if (false) {
    typeOfVal = miniKindOf(val);
  }

  return typeOfVal;
}

/**
 * Creates a Redux store that holds the state tree.
 * The only way to change the data in the store is to call `dispatch()` on it.
 *
 * There should only be a single store in your app. To specify how different
 * parts of the state tree respond to actions, you may combine several reducers
 * into a single reducer function by using `combineReducers`.
 *
 * @param {Function} reducer A function that returns the next state tree, given
 * the current state tree and the action to handle.
 *
 * @param {any} [preloadedState] The initial state. You may optionally specify it
 * to hydrate the state from the server in universal apps, or to restore a
 * previously serialized user session.
 * If you use `combineReducers` to produce the root reducer function, this must be
 * an object with the same shape as `combineReducers` keys.
 *
 * @param {Function} [enhancer] The store enhancer. You may optionally specify it
 * to enhance the store with third-party capabilities such as middleware,
 * time travel, persistence, etc. The only store enhancer that ships with Redux
 * is `applyMiddleware()`.
 *
 * @returns {Store} A Redux store that lets you read the state, dispatch actions
 * and subscribe to changes.
 */

function createStore(reducer, preloadedState, enhancer) {
  var _ref2;

  if (typeof preloadedState === 'function' && typeof enhancer === 'function' || typeof enhancer === 'function' && typeof arguments[3] === 'function') {
    throw new Error( true ? formatProdErrorMessage(0) : 'It looks like you are passing several store enhancers to ' + 'createStore(). This is not supported. Instead, compose them ' + 'together to a single function. See https://redux.js.org/tutorials/fundamentals/part-4-store#creating-a-store-with-enhancers for an example.');
  }

  if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
    enhancer = preloadedState;
    preloadedState = undefined;
  }

  if (typeof enhancer !== 'undefined') {
    if (typeof enhancer !== 'function') {
      throw new Error( true ? formatProdErrorMessage(1) : "Expected the enhancer to be a function. Instead, received: '" + kindOf(enhancer) + "'");
    }

    return enhancer(createStore)(reducer, preloadedState);
  }

  if (typeof reducer !== 'function') {
    throw new Error( true ? formatProdErrorMessage(2) : "Expected the root reducer to be a function. Instead, received: '" + kindOf(reducer) + "'");
  }

  var currentReducer = reducer;
  var currentState = preloadedState;
  var currentListeners = [];
  var nextListeners = currentListeners;
  var isDispatching = false;
  /**
   * This makes a shallow copy of currentListeners so we can use
   * nextListeners as a temporary list while dispatching.
   *
   * This prevents any bugs around consumers calling
   * subscribe/unsubscribe in the middle of a dispatch.
   */

  function ensureCanMutateNextListeners() {
    if (nextListeners === currentListeners) {
      nextListeners = currentListeners.slice();
    }
  }
  /**
   * Reads the state tree managed by the store.
   *
   * @returns {any} The current state tree of your application.
   */


  function getState() {
    if (isDispatching) {
      throw new Error( true ? formatProdErrorMessage(3) : 'You may not call store.getState() while the reducer is executing. ' + 'The reducer has already received the state as an argument. ' + 'Pass it down from the top reducer instead of reading it from the store.');
    }

    return currentState;
  }
  /**
   * Adds a change listener. It will be called any time an action is dispatched,
   * and some part of the state tree may potentially have changed. You may then
   * call `getState()` to read the current state tree inside the callback.
   *
   * You may call `dispatch()` from a change listener, with the following
   * caveats:
   *
   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
   * If you subscribe or unsubscribe while the listeners are being invoked, this
   * will not have any effect on the `dispatch()` that is currently in progress.
   * However, the next `dispatch()` call, whether nested or not, will use a more
   * recent snapshot of the subscription list.
   *
   * 2. The listener should not expect to see all state changes, as the state
   * might have been updated multiple times during a nested `dispatch()` before
   * the listener is called. It is, however, guaranteed that all subscribers
   * registered before the `dispatch()` started will be called with the latest
   * state by the time it exits.
   *
   * @param {Function} listener A callback to be invoked on every dispatch.
   * @returns {Function} A function to remove this change listener.
   */


  function subscribe(listener) {
    if (typeof listener !== 'function') {
      throw new Error( true ? formatProdErrorMessage(4) : "Expected the listener to be a function. Instead, received: '" + kindOf(listener) + "'");
    }

    if (isDispatching) {
      throw new Error( true ? formatProdErrorMessage(5) : 'You may not call store.subscribe() while the reducer is executing. ' + 'If you would like to be notified after the store has been updated, subscribe from a ' + 'component and invoke store.getState() in the callback to access the latest state. ' + 'See https://redux.js.org/api/store#subscribelistener for more details.');
    }

    var isSubscribed = true;
    ensureCanMutateNextListeners();
    nextListeners.push(listener);
    return function unsubscribe() {
      if (!isSubscribed) {
        return;
      }

      if (isDispatching) {
        throw new Error( true ? formatProdErrorMessage(6) : 'You may not unsubscribe from a store listener while the reducer is executing. ' + 'See https://redux.js.org/api/store#subscribelistener for more details.');
      }

      isSubscribed = false;
      ensureCanMutateNextListeners();
      var index = nextListeners.indexOf(listener);
      nextListeners.splice(index, 1);
      currentListeners = null;
    };
  }
  /**
   * Dispatches an action. It is the only way to trigger a state change.
   *
   * The `reducer` function, used to create the store, will be called with the
   * current state tree and the given `action`. Its return value will
   * be considered the **next** state of the tree, and the change listeners
   * will be notified.
   *
   * The base implementation only supports plain object actions. If you want to
   * dispatch a Promise, an Observable, a thunk, or something else, you need to
   * wrap your store creating function into the corresponding middleware. For
   * example, see the documentation for the `redux-thunk` package. Even the
   * middleware will eventually dispatch plain object actions using this method.
   *
   * @param {Object} action A plain object representing “what changed”. It is
   * a good idea to keep actions serializable so you can record and replay user
   * sessions, or use the time travelling `redux-devtools`. An action must have
   * a `type` property which may not be `undefined`. It is a good idea to use
   * string constants for action types.
   *
   * @returns {Object} For convenience, the same action object you dispatched.
   *
   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
   * return something else (for example, a Promise you can await).
   */


  function dispatch(action) {
    if (!isPlainObject(action)) {
      throw new Error( true ? formatProdErrorMessage(7) : "Actions must be plain objects. Instead, the actual type was: '" + kindOf(action) + "'. You may need to add middleware to your store setup to handle dispatching other values, such as 'redux-thunk' to handle dispatching functions. See https://redux.js.org/tutorials/fundamentals/part-4-store#middleware and https://redux.js.org/tutorials/fundamentals/part-6-async-logic#using-the-redux-thunk-middleware for examples.");
    }

    if (typeof action.type === 'undefined') {
      throw new Error( true ? formatProdErrorMessage(8) : 'Actions may not have an undefined "type" property. You may have misspelled an action type string constant.');
    }

    if (isDispatching) {
      throw new Error( true ? formatProdErrorMessage(9) : 'Reducers may not dispatch actions.');
    }

    try {
      isDispatching = true;
      currentState = currentReducer(currentState, action);
    } finally {
      isDispatching = false;
    }

    var listeners = currentListeners = nextListeners;

    for (var i = 0; i < listeners.length; i++) {
      var listener = listeners[i];
      listener();
    }

    return action;
  }
  /**
   * Replaces the reducer currently used by the store to calculate the state.
   *
   * You might need this if your app implements code splitting and you want to
   * load some of the reducers dynamically. You might also need this if you
   * implement a hot reloading mechanism for Redux.
   *
   * @param {Function} nextReducer The reducer for the store to use instead.
   * @returns {void}
   */


  function replaceReducer(nextReducer) {
    if (typeof nextReducer !== 'function') {
      throw new Error( true ? formatProdErrorMessage(10) : "Expected the nextReducer to be a function. Instead, received: '" + kindOf(nextReducer));
    }

    currentReducer = nextReducer; // This action has a similiar effect to ActionTypes.INIT.
    // Any reducers that existed in both the new and old rootReducer
    // will receive the previous state. This effectively populates
    // the new state tree with any relevant data from the old one.

    dispatch({
      type: ActionTypes.REPLACE
    });
  }
  /**
   * Interoperability point for observable/reactive libraries.
   * @returns {observable} A minimal observable of state changes.
   * For more information, see the observable proposal:
   * https://github.com/tc39/proposal-observable
   */


  function observable() {
    var _ref;

    var outerSubscribe = subscribe;
    return _ref = {
      /**
       * The minimal observable subscription method.
       * @param {Object} observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns {subscription} An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe: function subscribe(observer) {
        if (typeof observer !== 'object' || observer === null) {
          throw new Error( true ? formatProdErrorMessage(11) : "Expected the observer to be an object. Instead, received: '" + kindOf(observer) + "'");
        }

        function observeState() {
          if (observer.next) {
            observer.next(getState());
          }
        }

        observeState();
        var unsubscribe = outerSubscribe(observeState);
        return {
          unsubscribe: unsubscribe
        };
      }
    }, _ref[$$observable] = function () {
      return this;
    }, _ref;
  } // When a store is created, an "INIT" action is dispatched so that every
  // reducer returns their initial state. This effectively populates
  // the initial state tree.


  dispatch({
    type: ActionTypes.INIT
  });
  return _ref2 = {
    dispatch: dispatch,
    subscribe: subscribe,
    getState: getState,
    replaceReducer: replaceReducer
  }, _ref2[$$observable] = observable, _ref2;
}

/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */
function warning(message) {
  /* eslint-disable no-console */
  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error(message);
  }
  /* eslint-enable no-console */


  try {
    // This error was thrown as a convenience so that if you enable
    // "break on all exceptions" in your console,
    // it would pause the execution at this line.
    throw new Error(message);
  } catch (e) {} // eslint-disable-line no-empty

}

function getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {
  var reducerKeys = Object.keys(reducers);
  var argumentName = action && action.type === ActionTypes.INIT ? 'preloadedState argument passed to createStore' : 'previous state received by the reducer';

  if (reducerKeys.length === 0) {
    return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';
  }

  if (!isPlainObject(inputState)) {
    return "The " + argumentName + " has unexpected type of \"" + kindOf(inputState) + "\". Expected argument to be an object with the following " + ("keys: \"" + reducerKeys.join('", "') + "\"");
  }

  var unexpectedKeys = Object.keys(inputState).filter(function (key) {
    return !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key];
  });
  unexpectedKeys.forEach(function (key) {
    unexpectedKeyCache[key] = true;
  });
  if (action && action.type === ActionTypes.REPLACE) return;

  if (unexpectedKeys.length > 0) {
    return "Unexpected " + (unexpectedKeys.length > 1 ? 'keys' : 'key') + " " + ("\"" + unexpectedKeys.join('", "') + "\" found in " + argumentName + ". ") + "Expected to find one of the known reducer keys instead: " + ("\"" + reducerKeys.join('", "') + "\". Unexpected keys will be ignored.");
  }
}

function assertReducerShape(reducers) {
  Object.keys(reducers).forEach(function (key) {
    var reducer = reducers[key];
    var initialState = reducer(undefined, {
      type: ActionTypes.INIT
    });

    if (typeof initialState === 'undefined') {
      throw new Error( true ? formatProdErrorMessage(12) : "The slice reducer for key \"" + key + "\" returned undefined during initialization. " + "If the state passed to the reducer is undefined, you must " + "explicitly return the initial state. The initial state may " + "not be undefined. If you don't want to set a value for this reducer, " + "you can use null instead of undefined.");
    }

    if (typeof reducer(undefined, {
      type: ActionTypes.PROBE_UNKNOWN_ACTION()
    }) === 'undefined') {
      throw new Error( true ? formatProdErrorMessage(13) : "The slice reducer for key \"" + key + "\" returned undefined when probed with a random type. " + ("Don't try to handle '" + ActionTypes.INIT + "' or other actions in \"redux/*\" ") + "namespace. They are considered private. Instead, you must return the " + "current state for any unknown actions, unless it is undefined, " + "in which case you must return the initial state, regardless of the " + "action type. The initial state may not be undefined, but can be null.");
    }
  });
}
/**
 * Turns an object whose values are different reducer functions, into a single
 * reducer function. It will call every child reducer, and gather their results
 * into a single state object, whose keys correspond to the keys of the passed
 * reducer functions.
 *
 * @param {Object} reducers An object whose values correspond to different
 * reducer functions that need to be combined into one. One handy way to obtain
 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
 * undefined for any action. Instead, they should return their initial state
 * if the state passed to them was undefined, and the current state for any
 * unrecognized action.
 *
 * @returns {Function} A reducer function that invokes every reducer inside the
 * passed object, and builds a state object with the same shape.
 */


function combineReducers(reducers) {
  var reducerKeys = Object.keys(reducers);
  var finalReducers = {};

  for (var i = 0; i < reducerKeys.length; i++) {
    var key = reducerKeys[i];

    if (false) {
      if (typeof reducers[key] === 'undefined') {
        warning("No reducer provided for key \"" + key + "\"");
      }
    }

    if (typeof reducers[key] === 'function') {
      finalReducers[key] = reducers[key];
    }
  }

  var finalReducerKeys = Object.keys(finalReducers); // This is used to make sure we don't warn about the same
  // keys multiple times.

  var unexpectedKeyCache;

  if (false) {
    unexpectedKeyCache = {};
  }

  var shapeAssertionError;

  try {
    assertReducerShape(finalReducers);
  } catch (e) {
    shapeAssertionError = e;
  }

  return function combination(state, action) {
    if (state === void 0) {
      state = {};
    }

    if (shapeAssertionError) {
      throw shapeAssertionError;
    }

    if (false) {
      var warningMessage = getUnexpectedStateShapeWarningMessage(state, finalReducers, action, unexpectedKeyCache);

      if (warningMessage) {
        warning(warningMessage);
      }
    }

    var hasChanged = false;
    var nextState = {};

    for (var _i = 0; _i < finalReducerKeys.length; _i++) {
      var _key = finalReducerKeys[_i];
      var reducer = finalReducers[_key];
      var previousStateForKey = state[_key];
      var nextStateForKey = reducer(previousStateForKey, action);

      if (typeof nextStateForKey === 'undefined') {
        var actionType = action && action.type;
        throw new Error( true ? formatProdErrorMessage(14) : "When called with an action of type " + (actionType ? "\"" + String(actionType) + "\"" : '(unknown type)') + ", the slice reducer for key \"" + _key + "\" returned undefined. " + "To ignore an action, you must explicitly return the previous state. " + "If you want this reducer to hold no value, you can return null instead of undefined.");
      }

      nextState[_key] = nextStateForKey;
      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
    }

    hasChanged = hasChanged || finalReducerKeys.length !== Object.keys(state).length;
    return hasChanged ? nextState : state;
  };
}

function bindActionCreator(actionCreator, dispatch) {
  return function () {
    return dispatch(actionCreator.apply(this, arguments));
  };
}
/**
 * Turns an object whose values are action creators, into an object with the
 * same keys, but with every function wrapped into a `dispatch` call so they
 * may be invoked directly. This is just a convenience method, as you can call
 * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
 *
 * For convenience, you can also pass an action creator as the first argument,
 * and get a dispatch wrapped function in return.
 *
 * @param {Function|Object} actionCreators An object whose values are action
 * creator functions. One handy way to obtain it is to use ES6 `import * as`
 * syntax. You may also pass a single function.
 *
 * @param {Function} dispatch The `dispatch` function available on your Redux
 * store.
 *
 * @returns {Function|Object} The object mimicking the original object, but with
 * every action creator wrapped into the `dispatch` call. If you passed a
 * function as `actionCreators`, the return value will also be a single
 * function.
 */


function bindActionCreators(actionCreators, dispatch) {
  if (typeof actionCreators === 'function') {
    return bindActionCreator(actionCreators, dispatch);
  }

  if (typeof actionCreators !== 'object' || actionCreators === null) {
    throw new Error( true ? formatProdErrorMessage(16) : "bindActionCreators expected an object or a function, but instead received: '" + kindOf(actionCreators) + "'. " + "Did you write \"import ActionCreators from\" instead of \"import * as ActionCreators from\"?");
  }

  var boundActionCreators = {};

  for (var key in actionCreators) {
    var actionCreator = actionCreators[key];

    if (typeof actionCreator === 'function') {
      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
    }
  }

  return boundActionCreators;
}

/**
 * Composes single-argument functions from right to left. The rightmost
 * function can take multiple arguments as it provides the signature for
 * the resulting composite function.
 *
 * @param {...Function} funcs The functions to compose.
 * @returns {Function} A function obtained by composing the argument functions
 * from right to left. For example, compose(f, g, h) is identical to doing
 * (...args) => f(g(h(...args))).
 */
function compose() {
  for (var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }

  if (funcs.length === 0) {
    return function (arg) {
      return arg;
    };
  }

  if (funcs.length === 1) {
    return funcs[0];
  }

  return funcs.reduce(function (a, b) {
    return function () {
      return a(b.apply(void 0, arguments));
    };
  });
}

/**
 * Creates a store enhancer that applies middleware to the dispatch method
 * of the Redux store. This is handy for a variety of tasks, such as expressing
 * asynchronous actions in a concise manner, or logging every action payload.
 *
 * See `redux-thunk` package as an example of the Redux middleware.
 *
 * Because middleware is potentially asynchronous, this should be the first
 * store enhancer in the composition chain.
 *
 * Note that each middleware will be given the `dispatch` and `getState` functions
 * as named arguments.
 *
 * @param {...Function} middlewares The middleware chain to be applied.
 * @returns {Function} A store enhancer applying the middleware.
 */

function applyMiddleware() {
  for (var _len = arguments.length, middlewares = new Array(_len), _key = 0; _key < _len; _key++) {
    middlewares[_key] = arguments[_key];
  }

  return function (createStore) {
    return function () {
      var store = createStore.apply(void 0, arguments);

      var _dispatch = function dispatch() {
        throw new Error( true ? formatProdErrorMessage(15) : 'Dispatching while constructing your middleware is not allowed. ' + 'Other middleware would not be applied to this dispatch.');
      };

      var middlewareAPI = {
        getState: store.getState,
        dispatch: function dispatch() {
          return _dispatch.apply(void 0, arguments);
        }
      };
      var chain = middlewares.map(function (middleware) {
        return middleware(middlewareAPI);
      });
      _dispatch = compose.apply(void 0, chain)(store.dispatch);
      return Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_objectSpread2__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_objectSpread2__["a" /* default */])({}, store), {}, {
        dispatch: _dispatch
      });
    };
  };
}

/*
 * This is a dummy function to check if the function name has been altered by minification.
 * If the function has been minified and NODE_ENV !== 'production', warn the user.
 */

function isCrushed() {}

if (false) {
  warning('You are currently using minified code outside of NODE_ENV === "production". ' + 'This means that you are running a slower development build of Redux. ' + 'You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify ' + 'or setting mode to production in webpack (https://webpack.js.org/concepts/mode/) ' + 'to ensure you have the correct code for your production build.');
}




/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppSetting; });
var AppSetting={name:"Overtone Acoustics",url:"http://overtoneacoustics.com/"};

/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return listRole; });
/* unused harmony export listRoleOne */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addRole; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return editRole; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return deleteRole; });
/* unused harmony export setRoleLoading */
/* unused harmony export stopRoleLoading */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__types__ = __webpack_require__(11);
// Get all role
var listRole=function listRole(){return function(dispatch){dispatch(setRoleLoading());__WEBPACK_IMPORTED_MODULE_0_axios___default.a.get('/api/role/').then(function(res){dispatch({type:__WEBPACK_IMPORTED_MODULE_1__types__["_39" /* LIST_ROLE */],payload:res.data});}).catch(function(err){console.log("err data",err);dispatch({type:__WEBPACK_IMPORTED_MODULE_1__types__["_26" /* GET_ERRORS */],payload:err.response.data});});};};var listRoleOne=function listRoleOne(data){return function(dispatch){dispatch(setRoleLoading());__WEBPACK_IMPORTED_MODULE_0_axios___default.a.post('/api/role/getrole',data).then(function(res){dispatch({type:__WEBPACK_IMPORTED_MODULE_1__types__["_39" /* LIST_ROLE */],payload:res.data});}).catch(function(err){console.log("err data",err);dispatch({type:__WEBPACK_IMPORTED_MODULE_1__types__["_26" /* GET_ERRORS */],payload:err.response.data});});};};// Create role
var addRole=function addRole(roleData){return function(dispatch){dispatch(setRoleLoading());__WEBPACK_IMPORTED_MODULE_0_axios___default.a.post('/api/role/',roleData).then(function(res){return dispatch({type:__WEBPACK_IMPORTED_MODULE_1__types__["q" /* ADD_ROLE */],payload:res.data});}).catch(function(err){dispatch({type:__WEBPACK_IMPORTED_MODULE_1__types__["_26" /* GET_ERRORS */],payload:err.response.data});dispatch(stopRoleLoading());});};};// Edit role
var editRole=function editRole(roleData){return function(dispatch){dispatch(setRoleLoading());__WEBPACK_IMPORTED_MODULE_0_axios___default.a.post('/api/role/edit',roleData).then(function(res){return dispatch({type:__WEBPACK_IMPORTED_MODULE_1__types__["_17" /* EDIT_ROLE */],payload:res.data});}).catch(function(err){dispatch({type:__WEBPACK_IMPORTED_MODULE_1__types__["_26" /* GET_ERRORS */],payload:err.response.data});dispatch(stopRoleLoading());});};};// delete role
var deleteRole=function deleteRole(deleteData){return function(dispatch){dispatch(setRoleLoading());__WEBPACK_IMPORTED_MODULE_0_axios___default.a.post('/api/role/delete',deleteData).then(function(res){return dispatch({type:__WEBPACK_IMPORTED_MODULE_1__types__["X" /* DELETE_ROLE */],payload:res.data});}).catch(function(err){dispatch({type:__WEBPACK_IMPORTED_MODULE_1__types__["_26" /* GET_ERRORS */],payload:err.response.data});dispatch(stopRoleLoading());});};};// Role loading
var setRoleLoading=function setRoleLoading(){return{type:__WEBPACK_IMPORTED_MODULE_1__types__["_62" /* ROLE_LOADING */]};};var stopRoleLoading=function stopRoleLoading(){return{type:__WEBPACK_IMPORTED_MODULE_1__types__["_63" /* ROLE_STOPLOADING */]};};

/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return listProductSub; });
/* unused harmony export listProductSubOne */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addProductSub; });
/* unused harmony export editProductSub */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return deleteProductSub; });
/* unused harmony export setProductSubLoading */
/* unused harmony export stopProductSubLoading */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__types__ = __webpack_require__(11);
// Get all productsub
var listProductSub=function listProductSub(){return function(dispatch){dispatch(setProductSubLoading());__WEBPACK_IMPORTED_MODULE_0_axios___default.a.get('/api/productsub/').then(function(res){dispatch({type:__WEBPACK_IMPORTED_MODULE_1__types__["_38" /* LIST_PRODUCTSUB */],payload:res.data});}).catch(function(err){console.log("err data",err);dispatch({type:__WEBPACK_IMPORTED_MODULE_1__types__["_26" /* GET_ERRORS */],payload:err.response.data});});};};var listProductSubOne=function listProductSubOne(data){return function(dispatch){dispatch(setProductSubLoading());__WEBPACK_IMPORTED_MODULE_0_axios___default.a.post('/api/productsub/getproductsub',data).then(function(res){dispatch({type:__WEBPACK_IMPORTED_MODULE_1__types__["_38" /* LIST_PRODUCTSUB */],payload:res.data});}).catch(function(err){console.log("err data",err);dispatch({type:__WEBPACK_IMPORTED_MODULE_1__types__["_26" /* GET_ERRORS */],payload:err.response.data});});};};// Create productsub
var addProductSub=function addProductSub(productsubData){return function(dispatch){dispatch(setProductSubLoading());__WEBPACK_IMPORTED_MODULE_0_axios___default.a.post('/api/productsub/',productsubData).then(function(res){return dispatch({type:__WEBPACK_IMPORTED_MODULE_1__types__["o" /* ADD_PRODUCTSUB */],payload:res.data});}).catch(function(err){dispatch({type:__WEBPACK_IMPORTED_MODULE_1__types__["_26" /* GET_ERRORS */],payload:err.response.data});dispatch(stopProductSubLoading());});};};// Edit productsub
var editProductSub=function editProductSub(productsubData){return function(dispatch){dispatch(setProductSubLoading());__WEBPACK_IMPORTED_MODULE_0_axios___default.a.post('/api/productsub/edit',productsubData).then(function(res){return dispatch({type:__WEBPACK_IMPORTED_MODULE_1__types__["_16" /* EDIT_PRODUCTSUB */],payload:res.data});}).catch(function(err){dispatch({type:__WEBPACK_IMPORTED_MODULE_1__types__["_26" /* GET_ERRORS */],payload:err.response.data});dispatch(stopProductSubLoading());});};};// delete productsub
var deleteProductSub=function deleteProductSub(deleteData){return function(dispatch){dispatch(setProductSubLoading());__WEBPACK_IMPORTED_MODULE_0_axios___default.a.post('/api/productsub/delete',deleteData).then(function(res){return dispatch({type:__WEBPACK_IMPORTED_MODULE_1__types__["W" /* DELETE_PRODUCTSUB */],payload:res.data});}).catch(function(err){dispatch({type:__WEBPACK_IMPORTED_MODULE_1__types__["_26" /* GET_ERRORS */],payload:err.response.data});dispatch(stopProductSubLoading());});};};// ProductSub loading
var setProductSubLoading=function setProductSubLoading(){return{type:__WEBPACK_IMPORTED_MODULE_1__types__["_56" /* PRODUCTSUB_LOADING */]};};var stopProductSubLoading=function stopProductSubLoading(){return{type:__WEBPACK_IMPORTED_MODULE_1__types__["_57" /* PRODUCTSUB_STOPLOADING */]};};

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _extends;
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return loginAdmin; });
/* unused harmony export loginStore */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Forgetpassword; });
/* unused harmony export loginRegister */
/* unused harmony export purchasePlan */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return setCurrentUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return logoutUser; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_setAuthToken__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jwt_decode__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jwt_decode___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jwt_decode__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__types__ = __webpack_require__(11);
//Login - Get User Token
var loginAdmin=function loginAdmin(userData){return function(dispatch){__WEBPACK_IMPORTED_MODULE_2_axios___default.a.post('/api/admin/login',userData).then(function(res){// Save to LocalStorage
var token=res.data.token;//Set Token to Localstorage
localStorage.setItem('jwtToken',token);//Set Token to Header
Object(__WEBPACK_IMPORTED_MODULE_0__utils_setAuthToken__["a" /* default */])(token);//Decode Token to get user Data
var decoded=__WEBPACK_IMPORTED_MODULE_1_jwt_decode___default()(token);//set Current User
dispatch(setCurrentUser(decoded));}).catch(function(err){return dispatch({type:__WEBPACK_IMPORTED_MODULE_3__types__["_26" /* GET_ERRORS */],payload:err.response.data});});};};//Login - Get User Token
var loginStore=function loginStore(userData){return function(dispatch){__WEBPACK_IMPORTED_MODULE_2_axios___default.a.post('/api/store/login',userData).then(function(res){// Save to LocalStorage
var token=res.data.token;//Set Token to Localstorage
localStorage.setItem('jwtToken',token);//Set Token to Header
Object(__WEBPACK_IMPORTED_MODULE_0__utils_setAuthToken__["a" /* default */])(token);//Decode Token to get user Data
var decoded=__WEBPACK_IMPORTED_MODULE_1_jwt_decode___default()(token);//set Current User
dispatch(setCurrentUser(decoded));}).catch(function(err){return dispatch({type:__WEBPACK_IMPORTED_MODULE_3__types__["_26" /* GET_ERRORS */],payload:err.response.data});});};};var Forgetpassword=function Forgetpassword(userData){return function(dispatch){__WEBPACK_IMPORTED_MODULE_2_axios___default.a.post('/api/admin/forget',userData).then(function(res){}).catch(function(err){return dispatch({type:__WEBPACK_IMPORTED_MODULE_3__types__["_26" /* GET_ERRORS */],payload:err.response.data});});};};//Login - Get User Token
var loginRegister=function loginRegister(userData){return function(dispatch){__WEBPACK_IMPORTED_MODULE_2_axios___default.a.post('/api/store/register',userData).then(function(res){// Save to LocalStorage
var token=res.data.token;//Set Token to Localstorage
localStorage.setItem('jwtToken',token);//Set Token to Header
Object(__WEBPACK_IMPORTED_MODULE_0__utils_setAuthToken__["a" /* default */])(token);//Decode Token to get user Data
var decoded=__WEBPACK_IMPORTED_MODULE_1_jwt_decode___default()(token);//set Current User
dispatch(setCurrentUser(decoded));}).catch(function(err){return dispatch({type:__WEBPACK_IMPORTED_MODULE_3__types__["_26" /* GET_ERRORS */],payload:err.response.data});});};};var purchasePlan=function purchasePlan(userData){return function(dispatch){__WEBPACK_IMPORTED_MODULE_2_axios___default.a.post('/api/store/purchaseplan',userData).then(function(res){// Save to LocalStorage
var token=res.data.token;//Set Token to Localstorage
localStorage.setItem('jwtToken',token);//Set Token to Header
Object(__WEBPACK_IMPORTED_MODULE_0__utils_setAuthToken__["a" /* default */])(token);//Decode Token to get user Data
var decoded=__WEBPACK_IMPORTED_MODULE_1_jwt_decode___default()(token);//set Current User
dispatch(setCurrentUser(decoded));}).catch(function(err){return dispatch({type:__WEBPACK_IMPORTED_MODULE_3__types__["_26" /* GET_ERRORS */],payload:err.response.data});});};};//set Logged in user
var setCurrentUser=function setCurrentUser(decoded){return{type:__WEBPACK_IMPORTED_MODULE_3__types__["_70" /* SET_CURRENT_USER */],payload:decoded};};//Log out users
var logoutUser=function logoutUser(){return function(dispatch){// Remove Token from localstorage
localStorage.removeItem('jwtToken');//Remove Auth Header for future reference
Object(__WEBPACK_IMPORTED_MODULE_0__utils_setAuthToken__["a" /* default */])(false);//set Current user to {} which will set isAuthenticated to false
dispatch(setCurrentUser({}));};};

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(231);


/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return listUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return editUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return deleteUser; });
/* unused harmony export setUserLoading */
/* unused harmony export stopUserLoading */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return searchUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return createUser; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__types__ = __webpack_require__(11);
var _this=this;function _asyncToGenerator(fn){return function(){var gen=fn.apply(this,arguments);return new Promise(function(resolve,reject){function step(key,arg){try{var info=gen[key](arg);var value=info.value;}catch(error){reject(error);return;}if(info.done){resolve(value);}else{return Promise.resolve(value).then(function(value){step("next",value);},function(err){step("throw",err);});}}return step("next");});};}// Get all user
var listUser=function listUser(){return function(dispatch){dispatch(setUserLoading());__WEBPACK_IMPORTED_MODULE_1_axios___default.a.get('/api/user/').then(function(res){return dispatch({type:__WEBPACK_IMPORTED_MODULE_2__types__["_46" /* LIST_USER */],payload:res.data});}).catch(function(err){return dispatch({type:__WEBPACK_IMPORTED_MODULE_2__types__["_26" /* GET_ERRORS */],payload:err.response.data});});};};// Create user
var addUser=function addUser(userData){return function(dispatch){dispatch(setUserLoading());__WEBPACK_IMPORTED_MODULE_1_axios___default.a.post('/api/user/register',userData).then(function(res){return dispatch({type:__WEBPACK_IMPORTED_MODULE_2__types__["y" /* ADD_USER */],payload:res.data});}).catch(function(err){dispatch({type:__WEBPACK_IMPORTED_MODULE_2__types__["_26" /* GET_ERRORS */],payload:err.response.data});dispatch(stopUserLoading());});};};// Edit user
var editUser=function editUser(userData){return function(dispatch){dispatch(setUserLoading());__WEBPACK_IMPORTED_MODULE_1_axios___default.a.post('/api/user/edit',userData).then(function(res){return dispatch({type:__WEBPACK_IMPORTED_MODULE_2__types__["_24" /* EDIT_USER */],payload:res.data});}).catch(function(err){dispatch({type:__WEBPACK_IMPORTED_MODULE_2__types__["_26" /* GET_ERRORS */],payload:err.response.data});dispatch(stopUserLoading());});};};// delete user
var deleteUser=function deleteUser(deleteData){return function(dispatch){dispatch(setUserLoading());__WEBPACK_IMPORTED_MODULE_1_axios___default.a.post('/api/user/delete',deleteData).then(function(res){return dispatch({type:__WEBPACK_IMPORTED_MODULE_2__types__["_4" /* DELETE_USER */],payload:res.data});}).catch(function(err){dispatch({type:__WEBPACK_IMPORTED_MODULE_2__types__["_26" /* GET_ERRORS */],payload:err.response.data});dispatch(stopUserLoading());});};};// User loading
var setUserLoading=function setUserLoading(){return{type:__WEBPACK_IMPORTED_MODULE_2__types__["_83" /* USER_LOADING */]};};var stopUserLoading=function stopUserLoading(){return{type:__WEBPACK_IMPORTED_MODULE_2__types__["_84" /* USER_STOPLOADING */]};};// Actions for email orders
var searchUser=function searchUser(keyword){return function(){var _ref=_asyncToGenerator(/*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee(dispatch){var _ref2,data;return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:console.log(keyword);dispatch({type:__WEBPACK_IMPORTED_MODULE_2__types__["_68" /* SEARCH_USER_REQUEST */]});_context.prev=2;_context.next=5;return __WEBPACK_IMPORTED_MODULE_1_axios___default.a.get('/api/user/search?keyword='+keyword);case 5:_ref2=_context.sent;data=_ref2.data;dispatch({type:__WEBPACK_IMPORTED_MODULE_2__types__["_69" /* SEARCH_USER_SUCCESS */],payload:data});_context.next=13;break;case 10:_context.prev=10;_context.t0=_context['catch'](2);dispatch({type:__WEBPACK_IMPORTED_MODULE_2__types__["_67" /* SEARCH_USER_FAIL */],payload:_context.t0.response&&_context.t0.response.data.message?_context.t0.response.data.message:_context.t0.message});case 13:case'end':return _context.stop();}}},_callee,_this,[[2,10]]);}));return function(_x){return _ref.apply(this,arguments);};}();};// Basic user create without quickbook 
var createUser=function createUser(userData){return function(dispatch){dispatch(setUserLoading());__WEBPACK_IMPORTED_MODULE_1_axios___default.a.post('/api/user/user-create',userData).then(function(res){return dispatch({type:__WEBPACK_IMPORTED_MODULE_2__types__["y" /* ADD_USER */],payload:res.data});}).catch(function(err){dispatch({type:__WEBPACK_IMPORTED_MODULE_2__types__["_26" /* GET_ERRORS */],payload:err.response.data});dispatch(stopUserLoading());});};};

/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return listOrderStatus; });
/* unused harmony export listOrderStatusOne */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addOrderStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return editOrderStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return deleteOrderStatus; });
/* unused harmony export setOrderStatusLoading */
/* unused harmony export stopOrderStatusLoading */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__types__ = __webpack_require__(11);
// Get all orderstatus
var listOrderStatus=function listOrderStatus(){return function(dispatch){dispatch(setOrderStatusLoading());__WEBPACK_IMPORTED_MODULE_0_axios___default.a.get('/api/orderstatus/').then(function(res){dispatch({type:__WEBPACK_IMPORTED_MODULE_1__types__["_34" /* LIST_ORDERSTATUS */],payload:res.data});}).catch(function(err){console.log("err data",err);dispatch({type:__WEBPACK_IMPORTED_MODULE_1__types__["_26" /* GET_ERRORS */],payload:err.response.data});});};};var listOrderStatusOne=function listOrderStatusOne(data){return function(dispatch){dispatch(setOrderStatusLoading());__WEBPACK_IMPORTED_MODULE_0_axios___default.a.post('/api/orderstatus/getorderstatus',data).then(function(res){dispatch({type:__WEBPACK_IMPORTED_MODULE_1__types__["_34" /* LIST_ORDERSTATUS */],payload:res.data});}).catch(function(err){console.log("err data",err);dispatch({type:__WEBPACK_IMPORTED_MODULE_1__types__["_26" /* GET_ERRORS */],payload:err.response.data});});};};// Create orderstatus
var addOrderStatus=function addOrderStatus(orderstatusData){return function(dispatch){dispatch(setOrderStatusLoading());__WEBPACK_IMPORTED_MODULE_0_axios___default.a.post('/api/orderstatus/',orderstatusData).then(function(res){return dispatch({type:__WEBPACK_IMPORTED_MODULE_1__types__["j" /* ADD_ORDERSTATUS */],payload:res.data});}).catch(function(err){dispatch({type:__WEBPACK_IMPORTED_MODULE_1__types__["_26" /* GET_ERRORS */],payload:err.response.data});dispatch(stopOrderStatusLoading());});};};// Edit orderstatus
var editOrderStatus=function editOrderStatus(orderstatusData){return function(dispatch){dispatch(setOrderStatusLoading());__WEBPACK_IMPORTED_MODULE_0_axios___default.a.post('/api/orderstatus/edit',orderstatusData).then(function(res){return dispatch({type:__WEBPACK_IMPORTED_MODULE_1__types__["_12" /* EDIT_ORDERSTATUS */],payload:res.data});}).catch(function(err){dispatch({type:__WEBPACK_IMPORTED_MODULE_1__types__["_26" /* GET_ERRORS */],payload:err.response.data});dispatch(stopOrderStatusLoading());});};};// delete orderstatus
var deleteOrderStatus=function deleteOrderStatus(deleteData){return function(dispatch){dispatch(setOrderStatusLoading());__WEBPACK_IMPORTED_MODULE_0_axios___default.a.post('/api/orderstatus/delete',deleteData).then(function(res){return dispatch({type:__WEBPACK_IMPORTED_MODULE_1__types__["S" /* DELETE_ORDERSTATUS */],payload:res.data});}).catch(function(err){dispatch({type:__WEBPACK_IMPORTED_MODULE_1__types__["_26" /* GET_ERRORS */],payload:err.response.data});dispatch(stopOrderStatusLoading());});};};// OrderStatus loading
var setOrderStatusLoading=function setOrderStatusLoading(){return{type:__WEBPACK_IMPORTED_MODULE_1__types__["_48" /* ORDERSTATUS_LOADING */]};};var stopOrderStatusLoading=function stopOrderStatusLoading(){return{type:__WEBPACK_IMPORTED_MODULE_1__types__["_49" /* ORDERSTATUS_STOPLOADING */]};};

/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__layouts_SidebarMobile__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__layouts_Asidebar__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__layouts_Header__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__layouts_HeaderTopbar__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__layouts_SubHeader__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__layouts_Footer__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__actions_attributemappingAction__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_sweetalert2__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_sweetalert2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_react_search_input__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_react_search_input___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_react_search_input__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__common_MenuList__ = __webpack_require__(12);
var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var queryString=__webpack_require__(17);var KEYS_TO_FILTERS=['parentattributecategory','attributecategory','attributeName','isEnabled','mappingType','mappingLabel','mappingValue'];var Toast=__WEBPACK_IMPORTED_MODULE_10_sweetalert2___default.a.mixin({toast:true,position:'top-end',showConfirmButton:false,timer:1000});var ListAttributeMapping=function(_Component){_inherits(ListAttributeMapping,_Component);function ListAttributeMapping(){_classCallCheck(this,ListAttributeMapping);var _this=_possibleConstructorReturn(this,(ListAttributeMapping.__proto__||Object.getPrototypeOf(ListAttributeMapping)).call(this));_this.state={errors:{},searchTerm:''};_this.onEditClick=_this.onEditClick.bind(_this);_this.onDeleteClick=_this.onDeleteClick.bind(_this);_this.searchUpdated=_this.searchUpdated.bind(_this);return _this;}_createClass(ListAttributeMapping,[{key:'componentDidMount',value:function componentDidMount(){var parsed=queryString.parse(this.props.location.search);this.props.listAttributeMapping({productID:parsed.productID});}//calls when edit button is clicked
},{key:'onEditClick',value:function onEditClick(res){localStorage.setItem('editattributemapping',JSON.stringify(res));var parsed=queryString.parse(this.props.location.search);this.props.history.push('editmapping?productID='+parsed.productID);}//calls when delete button is clicked
},{key:'onDeleteClick',value:function onDeleteClick(id){var deleteData={id:id};this.props.deleteAttributeMapping(deleteData);}},{key:'searchUpdated',value:function searchUpdated(term){this.setState({searchTerm:term});}},{key:'componentWillReceiveProps',value:function componentWillReceiveProps(nextProps){var _this2=this;if(nextProps.attributemapping.deleteattributemapping!==this.props.attributemapping.deleteattributemapping){Toast.fire({type:'success',title:' Attribute Deleted Successfully'}).then(function(getResult){var parsed=queryString.parse(_this2.props.location.search);_this2.props.listAttributeMapping({productID:parsed.productID});});}if(nextProps.attributemapping.addattributemapping!==this.props.attributemapping.addattributemapping){var parsed=queryString.parse(this.props.location.search);this.props.listAttributeMapping({productID:parsed.productID});}if(nextProps.errors!==this.props.errors){Toast.fire({type:'error',title:'Check all the fields'});this.setState({errors:nextProps.errors});}}},{key:'render',value:function render(){var _this3=this;var _props$attributemappi=this.props.attributemapping,listattributemapping=_props$attributemappi.listattributemapping,attributemappingloading=_props$attributemappi.attributemappingloading;var tableResult;if(listattributemapping==null||attributemappingloading){tableResult=__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('tr',null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('td',{colSpan:5,className:'text-center'},'Loading.....'));}else{if(Object.keys(listattributemapping).length>0){var filterData=listattributemapping.filter(Object(__WEBPACK_IMPORTED_MODULE_11_react_search_input__["createFilter"])(this.state.searchTerm,KEYS_TO_FILTERS));tableResult=filterData.map(function(result){return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('tr',null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('td',null,result.parentattributecategory?result.parentattributecategory.attributeName:"N/A"),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('td',null,result.attributecategory?result.attributecategory.attributeName:"N/A"),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('td',null,result.mappingName),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('td',null,result.mappingType),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('td',null,result.mappingLabel),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('td',null,result.mappingValue),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('td',null,result.isEnabled),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('td',null,Object(__WEBPACK_IMPORTED_MODULE_12__common_MenuList__["a" /* checkPermission */])(_this3.props.auth,"PRODUCTS","UPDATE")&&__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('button',{className:'btn btn-link',onClick:function onClick(){return _this3.onEditClick(result);}},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span',{className:'kt-badge kt-badge--brand kt-badge--inline kt-badge--pill'},'View/Edit'))),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('td',null,Object(__WEBPACK_IMPORTED_MODULE_12__common_MenuList__["a" /* checkPermission */])(_this3.props.auth,"PRODUCTS","DELETE")&&__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('button',{className:'btn btn-link',onClick:function onClick(){return _this3.onDeleteClick(result._id);}},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span',{className:'kt-badge kt-badge--brand kt-badge--inline kt-badge--danger'},'Delete'))));});}else{tableResult=__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('tr',null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('td',{colSpan:9,className:'text-center'},'No Record Found.....'));}}return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:'kt-content  kt-grid__item kt-grid__item--fluid',id:'kt_content'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:'kt-portlet'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:'kt-portlet__head kt-portlet__head--lg'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:'kt-portlet__head-label'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span',{className:'kt-portlet__head-icon'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i',{className:'kt-font-brand flaticon2-line-chart'})),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('h3',{className:'kt-portlet__head-title'},'List  Attribute Mapping'))),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:'col-sm-12 col-md-12'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11_react_search_input___default.a,{placeholder:'Search',onChange:this.searchUpdated,className:'search-input'})),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:'kt-portlet__body'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('table',{className:'table table-striped table-bordered table-hover table-checkable'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('thead',null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('tr',null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('th',null,'Parent Attribute Category'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('th',null,'Parent Attribute Position'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('th',null,'Attribite Category'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('th',null,'Type'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('th',null,'Label'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('th',null,'Value'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('th',null,'Is Enabled'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('th',null,'View/Edit'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('th',null,'Delete'))),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('tbody',null,tableResult),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('tfoot',null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('tr',null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('th',null,'Parent Attribute Category'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('th',null,'Parent Attribute Position'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('th',null,'Attribite Category'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('th',null,'Type'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('th',null,'Label'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('th',null,'Value'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('th',null,'Is Enabled'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('th',null,'View/Edit'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('th',null,'Delete'))))))));}}]);return ListAttributeMapping;}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);ListAttributeMapping.propTypes={auth:__WEBPACK_IMPORTED_MODULE_1_prop_types__["PropTypes"].object.isRequired,listAttributeMapping:__WEBPACK_IMPORTED_MODULE_1_prop_types__["PropTypes"].func.isRequired,deleteAttributeMapping:__WEBPACK_IMPORTED_MODULE_1_prop_types__["PropTypes"].func.isRequired};var mapStateToProps=function mapStateToProps(state){return{auth:state.auth,errors:state.errors,attributemapping:state.attributemapping};};/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_2_react_redux__["b" /* connect */])(mapStateToProps,{listAttributeMapping:__WEBPACK_IMPORTED_MODULE_9__actions_attributemappingAction__["d" /* listAttributeMapping */],deleteAttributeMapping:__WEBPACK_IMPORTED_MODULE_9__actions_attributemappingAction__["b" /* deleteAttributeMapping */]})(ListAttributeMapping));

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function checkDCE() {
  /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
  if (
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === 'undefined' ||
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== 'function'
  ) {
    return;
  }
  if (false) {
    // This branch is unreachable because this function is only called
    // in production, but the condition is true only in development.
    // Therefore if the branch is still here, dead code elimination wasn't
    // properly applied.
    // Don't change the message. React DevTools relies on it. Also make sure
    // this message doesn't occur elsewhere in this function, or it will cause
    // a false positive.
    throw new Error('^_^');
  }
  try {
    // Verify that the code above has been dead code eliminated (DCE'd).
    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
  } catch (err) {
    // DevTools shouldn't crash React, no matter what.
    // We should still report in case we break this code.
    console.error(err);
  }
}

if (true) {
  // DCE check should happen before ReactDOM bundle executes so that
  // DevTools can report bad minification during injection.
  checkDCE();
  module.exports = __webpack_require__(107);
} else {
  module.exports = require('./cjs/react-dom.development.js');
}


/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_router_es_Router__ = __webpack_require__(42);
// Written in this round about way for babel-transform-imports


/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_react_router_es_Router__["a" /* default */]);

/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_warning__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_warning___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_warning__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_invariant__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_invariant___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_invariant__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_prop_types__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






/**
 * The public API for putting history on context.
 */

var Router = function (_React$Component) {
  _inherits(Router, _React$Component);

  function Router() {
    var _temp, _this, _ret;

    _classCallCheck(this, Router);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
      match: _this.computeMatch(_this.props.history.location.pathname)
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  Router.prototype.getChildContext = function getChildContext() {
    return {
      router: _extends({}, this.context.router, {
        history: this.props.history,
        route: {
          location: this.props.history.location,
          match: this.state.match
        }
      })
    };
  };

  Router.prototype.computeMatch = function computeMatch(pathname) {
    return {
      path: "/",
      url: "/",
      params: {},
      isExact: pathname === "/"
    };
  };

  Router.prototype.componentWillMount = function componentWillMount() {
    var _this2 = this;

    var _props = this.props,
        children = _props.children,
        history = _props.history;


    __WEBPACK_IMPORTED_MODULE_1_invariant___default()(children == null || __WEBPACK_IMPORTED_MODULE_2_react___default.a.Children.count(children) === 1, "A <Router> may have only one child element");

    // Do this here so we can setState when a <Redirect> changes the
    // location in componentWillMount. This happens e.g. when doing
    // server rendering using a <StaticRouter>.
    this.unlisten = history.listen(function () {
      _this2.setState({
        match: _this2.computeMatch(history.location.pathname)
      });
    });
  };

  Router.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    __WEBPACK_IMPORTED_MODULE_0_warning___default()(this.props.history === nextProps.history, "You cannot change <Router history>");
  };

  Router.prototype.componentWillUnmount = function componentWillUnmount() {
    this.unlisten();
  };

  Router.prototype.render = function render() {
    var children = this.props.children;

    return children ? __WEBPACK_IMPORTED_MODULE_2_react___default.a.Children.only(children) : null;
  };

  return Router;
}(__WEBPACK_IMPORTED_MODULE_2_react___default.a.Component);

Router.propTypes = {
  history: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.object.isRequired,
  children: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.node
};
Router.contextTypes = {
  router: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.object
};
Router.childContextTypes = {
  router: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.object.isRequired
};


/* harmony default export */ __webpack_exports__["a"] = (Router);

/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_path_to_regexp__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_path_to_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_path_to_regexp__);


var patternCache = {};
var cacheLimit = 10000;
var cacheCount = 0;

var compilePath = function compilePath(pattern, options) {
  var cacheKey = "" + options.end + options.strict + options.sensitive;
  var cache = patternCache[cacheKey] || (patternCache[cacheKey] = {});

  if (cache[pattern]) return cache[pattern];

  var keys = [];
  var re = __WEBPACK_IMPORTED_MODULE_0_path_to_regexp___default()(pattern, keys, options);
  var compiledPattern = { re: re, keys: keys };

  if (cacheCount < cacheLimit) {
    cache[pattern] = compiledPattern;
    cacheCount++;
  }

  return compiledPattern;
};

/**
 * Public API for matching a URL pathname to a path pattern.
 */
var matchPath = function matchPath(pathname) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var parent = arguments[2];

  if (typeof options === "string") options = { path: options };

  var _options = options,
      path = _options.path,
      _options$exact = _options.exact,
      exact = _options$exact === undefined ? false : _options$exact,
      _options$strict = _options.strict,
      strict = _options$strict === undefined ? false : _options$strict,
      _options$sensitive = _options.sensitive,
      sensitive = _options$sensitive === undefined ? false : _options$sensitive;


  if (path == null) return parent;

  var _compilePath = compilePath(path, { end: exact, strict: strict, sensitive: sensitive }),
      re = _compilePath.re,
      keys = _compilePath.keys;

  var match = re.exec(pathname);

  if (!match) return null;

  var url = match[0],
      values = match.slice(1);

  var isExact = pathname === url;

  if (exact && !isExact) return null;

  return {
    path: path, // the path pattern used to match
    url: path === "/" && url === "" ? "/" : url, // the matched portion of the URL
    isExact: isExact, // whether or not we matched exactly
    params: keys.reduce(function (memo, key, index) {
      memo[key.name] = values[index];
      return memo;
    }, {})
  };
};

/* harmony default export */ __webpack_exports__["a"] = (matchPath);

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__(18);
var normalizeHeaderName = __webpack_require__(143);

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__(69);
  } else if (typeof process !== 'undefined') {
    // For node use HTTP adapter
    adapter = __webpack_require__(69);
  }
  return adapter;
}

var defaults = {
  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Content-Type');
    if (utils.isFormData(data) ||
      utils.isArrayBuffer(data) ||
      utils.isBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data)) {
      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
      return JSON.stringify(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    /*eslint no-param-reassign:0*/
    if (typeof data === 'string') {
      try {
        data = JSON.parse(data);
      } catch (e) { /* Ignore */ }
    }
    return data;
  }],

  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};

defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(142)))

/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = createSubscription;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__batch__ = __webpack_require__(73);
 // encapsulates the subscription logic for connecting a component to the redux store, as
// well as nesting subscriptions of descendant components, so that we can ensure the
// ancestor components re-render before descendants

function createListenerCollection() {
  var batch = Object(__WEBPACK_IMPORTED_MODULE_0__batch__["a" /* getBatch */])();
  var first = null;
  var last = null;
  return {
    clear: function clear() {
      first = null;
      last = null;
    },
    notify: function notify() {
      batch(function () {
        var listener = first;

        while (listener) {
          listener.callback();
          listener = listener.next;
        }
      });
    },
    get: function get() {
      var listeners = [];
      var listener = first;

      while (listener) {
        listeners.push(listener);
        listener = listener.next;
      }

      return listeners;
    },
    subscribe: function subscribe(callback) {
      var isSubscribed = true;
      var listener = last = {
        callback: callback,
        next: null,
        prev: last
      };

      if (listener.prev) {
        listener.prev.next = listener;
      } else {
        first = listener;
      }

      return function unsubscribe() {
        if (!isSubscribed || first === null) return;
        isSubscribed = false;

        if (listener.next) {
          listener.next.prev = listener.prev;
        } else {
          last = listener.prev;
        }

        if (listener.prev) {
          listener.prev.next = listener.next;
        } else {
          first = listener.next;
        }
      };
    }
  };
}

var nullListeners = {
  notify: function notify() {},
  get: function get() {
    return [];
  }
};
function createSubscription(store, parentSub) {
  var unsubscribe;
  var listeners = nullListeners;

  function addNestedSub(listener) {
    trySubscribe();
    return listeners.subscribe(listener);
  }

  function notifyNestedSubs() {
    listeners.notify();
  }

  function handleChangeWrapper() {
    if (subscription.onStateChange) {
      subscription.onStateChange();
    }
  }

  function isSubscribed() {
    return Boolean(unsubscribe);
  }

  function trySubscribe() {
    if (!unsubscribe) {
      unsubscribe = parentSub ? parentSub.addNestedSub(handleChangeWrapper) : store.subscribe(handleChangeWrapper);
      listeners = createListenerCollection();
    }
  }

  function tryUnsubscribe() {
    if (unsubscribe) {
      unsubscribe();
      unsubscribe = undefined;
      listeners.clear();
      listeners = nullListeners;
    }
  }

  var subscription = {
    addNestedSub: addNestedSub,
    notifyNestedSubs: notifyNestedSubs,
    handleChangeWrapper: handleChangeWrapper,
    isSubscribed: isSubscribed,
    trySubscribe: trySubscribe,
    tryUnsubscribe: tryUnsubscribe,
    getListeners: function getListeners() {
      return listeners;
    }
  };
  return subscription;
}

/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useIsomorphicLayoutEffect; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
 // React currently throws a warning when using useLayoutEffect on the server.
// To get around it, we can conditionally useEffect on the server (no-op) and
// useLayoutEffect in the browser. We need useLayoutEffect to ensure the store
// subscription callback always has the selector from the latest render commit
// available, otherwise a store update may happen between render and the effect,
// which may cause missed updates; we also must ensure the store subscription
// is created synchronously, otherwise a store update may occur before the
// subscription is created and an inconsistent state may be observed

var useIsomorphicLayoutEffect = typeof window !== 'undefined' && typeof window.document !== 'undefined' && typeof window.document.createElement !== 'undefined' ? __WEBPACK_IMPORTED_MODULE_0_react__["useLayoutEffect"] : __WEBPACK_IMPORTED_MODULE_0_react__["useEffect"];

/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _objectWithoutPropertiesLoose;
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = persistReducer;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__stateReconciler_autoMergeLevel1__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__createPersistoid__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__getStoredState__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__purgeStoredState__ = __webpack_require__(84);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }








var DEFAULT_TIMEOUT = 5000;
/*
  @TODO add validation / handling for:
  - persisting a reducer which has nested _persist
  - handling actions that fire before reydrate is called
*/
function persistReducer(config, baseReducer) {
  if (false) {
    if (!config) throw new Error('config is required for persistReducer');
    if (!config.key) throw new Error('key is required in persistor config');
    if (!config.storage) throw new Error("redux-persist: config.storage is required. Try using one of the provided storage engines `import storage from 'redux-persist/lib/storage'`");
  }

  var version = config.version !== undefined ? config.version : __WEBPACK_IMPORTED_MODULE_0__constants__["a" /* DEFAULT_VERSION */];
  var debug = config.debug || false;
  var stateReconciler = config.stateReconciler === undefined ? __WEBPACK_IMPORTED_MODULE_1__stateReconciler_autoMergeLevel1__["a" /* default */] : config.stateReconciler;
  var getStoredState = config.getStoredState || __WEBPACK_IMPORTED_MODULE_3__getStoredState__["a" /* default */];
  var timeout = config.timeout !== undefined ? config.timeout : DEFAULT_TIMEOUT;
  var _persistoid = null;
  var _purge = false;
  var _paused = true;
  var conditionalUpdate = function conditionalUpdate(state) {
    // update the persistoid only if we are rehydrated and not paused
    state._persist.rehydrated && _persistoid && !_paused && _persistoid.update(state);
    return state;
  };

  return function (state, action) {
    var _ref = state || {},
        _persist = _ref._persist,
        rest = _objectWithoutProperties(_ref, ['_persist']);

    var restState = rest;

    if (action.type === __WEBPACK_IMPORTED_MODULE_0__constants__["e" /* PERSIST */]) {
      var _sealed = false;
      var _rehydrate = function _rehydrate(payload, err) {
        // dev warning if we are already sealed
        if (false) console.error('redux-persist: rehydrate for "' + config.key + '" called after timeout.', payload, err);

        // only rehydrate if we are not already sealed
        if (!_sealed) {
          action.rehydrate(config.key, payload, err);
          _sealed = true;
        }
      };
      timeout && setTimeout(function () {
        !_sealed && _rehydrate(undefined, new Error('redux-persist: persist timed out for persist key "' + config.key + '"'));
      }, timeout);

      // @NOTE PERSIST resumes if paused.
      _paused = false;

      // @NOTE only ever create persistoid once, ensure we call it at least once, even if _persist has already been set
      if (!_persistoid) _persistoid = Object(__WEBPACK_IMPORTED_MODULE_2__createPersistoid__["a" /* default */])(config);

      // @NOTE PERSIST can be called multiple times, noop after the first
      if (_persist) return state;
      if (typeof action.rehydrate !== 'function' || typeof action.register !== 'function') throw new Error('redux-persist: either rehydrate or register is not a function on the PERSIST action. This can happen if the action is being replayed. This is an unexplored use case, please open an issue and we will figure out a resolution.');

      action.register(config.key);

      getStoredState(config).then(function (restoredState) {
        var migrate = config.migrate || function (s, v) {
          return Promise.resolve(s);
        };
        migrate(restoredState, version).then(function (migratedState) {
          _rehydrate(migratedState);
        }, function (migrateErr) {
          if (false) console.error('redux-persist: migration error', migrateErr);
          _rehydrate(undefined, migrateErr);
        });
      }, function (err) {
        _rehydrate(undefined, err);
      });

      return _extends({}, baseReducer(restState, action), {
        _persist: { version: version, rehydrated: false }
      });
    } else if (action.type === __WEBPACK_IMPORTED_MODULE_0__constants__["f" /* PURGE */]) {
      _purge = true;
      action.result(Object(__WEBPACK_IMPORTED_MODULE_4__purgeStoredState__["a" /* default */])(config));
      return _extends({}, baseReducer(restState, action), {
        _persist: _persist
      });
    } else if (action.type === __WEBPACK_IMPORTED_MODULE_0__constants__["b" /* FLUSH */]) {
      action.result(_persistoid && _persistoid.flush());
      return _extends({}, baseReducer(restState, action), {
        _persist: _persist
      });
    } else if (action.type === __WEBPACK_IMPORTED_MODULE_0__constants__["d" /* PAUSE */]) {
      _paused = true;
    } else if (action.type === __WEBPACK_IMPORTED_MODULE_0__constants__["h" /* REHYDRATE */]) {
      // noop on restState if purging
      if (_purge) return _extends({}, restState, {
        _persist: _extends({}, _persist, { rehydrated: true })

        // @NOTE if key does not match, will continue to default else below
      });if (action.key === config.key) {
        var reducedState = baseReducer(restState, action);
        var inboundState = action.payload;
        // only reconcile state if stateReconciler and inboundState are both defined
        var reconciledRest = stateReconciler !== false && inboundState !== undefined ? stateReconciler(inboundState, state, reducedState, config) : reducedState;

        var _newState = _extends({}, reconciledRest, {
          _persist: _extends({}, _persist, { rehydrated: true })
        });
        return conditionalUpdate(_newState);
      }
    }

    // if we have not already handled PERSIST, straight passthrough
    if (!_persist) return baseReducer(state, action);

    // run base reducer:
    // is state modified ? return original : return updated
    var newState = baseReducer(restState, action);
    if (newState === restState) return state;else {
      newState._persist = _persist;
      return conditionalUpdate(newState);
    }
  };
}

/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return listStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return editStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return deleteStore; });
/* unused harmony export setStoreLoading */
/* unused harmony export stopStoreLoading */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__types__ = __webpack_require__(11);
// Get all store
var listStore=function listStore(){return function(dispatch){dispatch(setStoreLoading());__WEBPACK_IMPORTED_MODULE_0_axios___default.a.get('/api/store/').then(function(res){return dispatch({type:__WEBPACK_IMPORTED_MODULE_1__types__["_42" /* LIST_STORE */],payload:res.data});}).catch(function(err){return dispatch({type:__WEBPACK_IMPORTED_MODULE_1__types__["_26" /* GET_ERRORS */],payload:err.response.data});});};};// Create store
var addStore=function addStore(storeData){return function(dispatch){dispatch(setStoreLoading());__WEBPACK_IMPORTED_MODULE_0_axios___default.a.post('/api/store/',storeData).then(function(res){return dispatch({type:__WEBPACK_IMPORTED_MODULE_1__types__["t" /* ADD_STORE */],payload:res.data});}).catch(function(err){dispatch({type:__WEBPACK_IMPORTED_MODULE_1__types__["_26" /* GET_ERRORS */],payload:err.response.data});dispatch(stopStoreLoading());});};};// Edit store
var editStore=function editStore(storeData){return function(dispatch){dispatch(setStoreLoading());__WEBPACK_IMPORTED_MODULE_0_axios___default.a.post('/api/store/edit',storeData).then(function(res){return dispatch({type:__WEBPACK_IMPORTED_MODULE_1__types__["_20" /* EDIT_STORE */],payload:res.data});}).catch(function(err){dispatch({type:__WEBPACK_IMPORTED_MODULE_1__types__["_26" /* GET_ERRORS */],payload:err.response.data});dispatch(stopStoreLoading());});};};// delete store
var deleteStore=function deleteStore(deleteData){return function(dispatch){dispatch(setStoreLoading());__WEBPACK_IMPORTED_MODULE_0_axios___default.a.post('/api/store/delete',deleteData).then(function(res){return dispatch({type:__WEBPACK_IMPORTED_MODULE_1__types__["_0" /* DELETE_STORE */],payload:res.data});}).catch(function(err){dispatch({type:__WEBPACK_IMPORTED_MODULE_1__types__["_26" /* GET_ERRORS */],payload:err.response.data});dispatch(stopStoreLoading());});};};// Store loading
var setStoreLoading=function setStoreLoading(){return{type:__WEBPACK_IMPORTED_MODULE_1__types__["_75" /* STORE_LOADING */]};};var stopStoreLoading=function stopStoreLoading(){return{type:__WEBPACK_IMPORTED_MODULE_1__types__["_76" /* STORE_STOPLOADING */]};};

/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return listSlider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addSlider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return editSlider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return deleteSlider; });
/* unused harmony export setSliderLoading */
/* unused harmony export stopSliderLoading */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__types__ = __webpack_require__(11);
// Get all slider
var listSlider=function listSlider(){return function(dispatch){dispatch(setSliderLoading());__WEBPACK_IMPORTED_MODULE_0_axios___default.a.get('/api/slider/').then(function(res){console.log("slider Result",res.data);dispatch({type:__WEBPACK_IMPORTED_MODULE_1__types__["_41" /* LIST_SLIDER */],payload:res.data});}).catch(function(err){console.log("err data",err);dispatch({type:__WEBPACK_IMPORTED_MODULE_1__types__["_26" /* GET_ERRORS */],payload:err.response.data});});};};// Create slider
var addSlider=function addSlider(sliderData){return function(dispatch){dispatch(setSliderLoading());__WEBPACK_IMPORTED_MODULE_0_axios___default.a.post('/api/slider/',sliderData).then(function(res){return dispatch({type:__WEBPACK_IMPORTED_MODULE_1__types__["s" /* ADD_SLIDER */],payload:res.data});}).catch(function(err){dispatch({type:__WEBPACK_IMPORTED_MODULE_1__types__["_26" /* GET_ERRORS */],payload:err.response.data});dispatch(stopSliderLoading());});};};// Edit slider
var editSlider=function editSlider(sliderData){return function(dispatch){dispatch(setSliderLoading());__WEBPACK_IMPORTED_MODULE_0_axios___default.a.post('/api/slider/edit',sliderData).then(function(res){return dispatch({type:__WEBPACK_IMPORTED_MODULE_1__types__["_19" /* EDIT_SLIDER */],payload:res.data});}).catch(function(err){dispatch({type:__WEBPACK_IMPORTED_MODULE_1__types__["_26" /* GET_ERRORS */],payload:err.response.data});dispatch(stopSliderLoading());});};};// delete slider
var deleteSlider=function deleteSlider(deleteData){return function(dispatch){dispatch(setSliderLoading());__WEBPACK_IMPORTED_MODULE_0_axios___default.a.post('/api/slider/delete',deleteData).then(function(res){return dispatch({type:__WEBPACK_IMPORTED_MODULE_1__types__["Z" /* DELETE_SLIDER */],payload:res.data});}).catch(function(err){dispatch({type:__WEBPACK_IMPORTED_MODULE_1__types__["_26" /* GET_ERRORS */],payload:err.response.data});dispatch(stopSliderLoading());});};};// Slider loading
var setSliderLoading=function setSliderLoading(){return{type:__WEBPACK_IMPORTED_MODULE_1__types__["_73" /* SLIDER_LOADING */]};};var stopSliderLoading=function stopSliderLoading(){return{type:__WEBPACK_IMPORTED_MODULE_1__types__["_74" /* SLIDER_STOPLOADING */]};};

/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__layouts_SidebarMobile__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__layouts_Asidebar__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__layouts_Header__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__layouts_HeaderTopbar__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__layouts_SubHeader__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__layouts_Footer__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__actions_parentattributecategoryAction__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_sweetalert2__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_sweetalert2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_react_search_input__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_react_search_input___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_react_search_input__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__common_MenuList__ = __webpack_require__(12);
var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var KEYS_TO_FILTERS=['attributeName','isEnabled'];var Toast=__WEBPACK_IMPORTED_MODULE_10_sweetalert2___default.a.mixin({toast:true,position:'top-end',showConfirmButton:false,timer:1000});var ListParentAttributeCategory=function(_Component){_inherits(ListParentAttributeCategory,_Component);function ListParentAttributeCategory(){_classCallCheck(this,ListParentAttributeCategory);var _this=_possibleConstructorReturn(this,(ListParentAttributeCategory.__proto__||Object.getPrototypeOf(ListParentAttributeCategory)).call(this));_this.state={errors:{},searchTerm:''};_this.onEditClick=_this.onEditClick.bind(_this);_this.onDeleteClick=_this.onDeleteClick.bind(_this);_this.searchUpdated=_this.searchUpdated.bind(_this);return _this;}_createClass(ListParentAttributeCategory,[{key:'componentDidMount',value:function componentDidMount(){this.props.listParentAttributeCategory();}//calls when edit button is clicked
},{key:'onEditClick',value:function onEditClick(res){localStorage.setItem('editparentattribute',JSON.stringify(res));this.props.history.push('editparentattribute');}//calls when delete button is clicked
},{key:'onDeleteClick',value:function onDeleteClick(id){var deleteData={id:id};this.props.deleteParentAttributeCategory(deleteData);}},{key:'searchUpdated',value:function searchUpdated(term){this.setState({searchTerm:term});}},{key:'componentWillReceiveProps',value:function componentWillReceiveProps(nextProps){var _this2=this;if(nextProps.parentattributecategory.deleteparentattributecategory!==this.props.parentattributecategory.deleteparentattributecategory){Toast.fire({type:'success',title:'Parent Attribute Deleted Successfully'}).then(function(getResult){_this2.props.listParentAttributeCategory();});}if(nextProps.parentattributecategory.addparentattributecategory!==this.props.parentattributecategory.addparentattributecategory){this.props.listParentAttributeCategory();}if(nextProps.errors!==this.props.errors){Toast.fire({type:'error',title:'Check all the fields'});this.setState({errors:nextProps.errors});}}},{key:'render',value:function render(){var _this3=this;var _props$parentattribut=this.props.parentattributecategory,listparentattributecategory=_props$parentattribut.listparentattributecategory,parentattributecategoryloading=_props$parentattribut.parentattributecategoryloading;var tableResult;if(listparentattributecategory==null||parentattributecategoryloading){tableResult=__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('tr',null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('td',{colSpan:5,className:'text-center'},'Loading.....'));}else{if(Object.keys(listparentattributecategory).length>0){var filterData=listparentattributecategory.filter(Object(__WEBPACK_IMPORTED_MODULE_11_react_search_input__["createFilter"])(this.state.searchTerm,KEYS_TO_FILTERS));tableResult=filterData.map(function(result){return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('tr',null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('td',null,result.attributeName),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('td',null,result.isEnabled),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('td',null,Object(__WEBPACK_IMPORTED_MODULE_12__common_MenuList__["a" /* checkPermission */])(_this3.props.auth,"PRODUCTS","UPDATE")&&__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('button',{className:'btn btn-link',onClick:function onClick(){return _this3.onEditClick(result);}},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span',{className:'kt-badge kt-badge--brand kt-badge--inline kt-badge--pill'},'Edit'))),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('td',null,Object(__WEBPACK_IMPORTED_MODULE_12__common_MenuList__["a" /* checkPermission */])(_this3.props.auth,"PRODUCTS","DELETE")&&__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('button',{className:'btn btn-link',onClick:function onClick(){return _this3.onDeleteClick(result._id);}},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span',{className:'kt-badge kt-badge--brand kt-badge--inline kt-badge--danger'},'Delete'))));});}else{tableResult=__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('tr',null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('td',{colSpan:4,className:'text-center'},'No Record Found.....'));}}return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:'kt-content  kt-grid__item kt-grid__item--fluid',id:'kt_content'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:'kt-portlet'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:'kt-portlet__head kt-portlet__head--lg'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:'kt-portlet__head-label'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span',{className:'kt-portlet__head-icon'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i',{className:'kt-font-brand flaticon2-line-chart'})),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('h3',{className:'kt-portlet__head-title'},'List Parent Attribute Category'))),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:'col-sm-12 col-md-12'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11_react_search_input___default.a,{placeholder:'Search by Attribute Name',onChange:this.searchUpdated,className:'search-input'})),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:'kt-portlet__body'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('table',{className:'table table-striped table-bordered table-hover table-checkable'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('thead',null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('tr',null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('th',null,'Category Name'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('th',null,'Is Enabled'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('th',null,'View/Edit'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('th',null,'Delete'))),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('tbody',null,tableResult),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('tfoot',null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('tr',null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('th',null,'Category Name'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('th',null,'Is Enabled'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('th',null,'View/Edit'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('th',null,'Delete'))))))));}}]);return ListParentAttributeCategory;}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);ListParentAttributeCategory.propTypes={auth:__WEBPACK_IMPORTED_MODULE_1_prop_types__["PropTypes"].object.isRequired,listParentAttributeCategory:__WEBPACK_IMPORTED_MODULE_1_prop_types__["PropTypes"].func.isRequired,deleteParentAttributeCategory:__WEBPACK_IMPORTED_MODULE_1_prop_types__["PropTypes"].func.isRequired};var mapStateToProps=function mapStateToProps(state){return{auth:state.auth,errors:state.errors,parentattributecategory:state.parentattributecategory};};/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_2_react_redux__["b" /* connect */])(mapStateToProps,{listParentAttributeCategory:__WEBPACK_IMPORTED_MODULE_9__actions_parentattributecategoryAction__["d" /* listParentAttributeCategory */],deleteParentAttributeCategory:__WEBPACK_IMPORTED_MODULE_9__actions_parentattributecategoryAction__["b" /* deleteParentAttributeCategory */]})(ListParentAttributeCategory));

/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return listOrder; });
/* unused harmony export addOrder */
/* unused harmony export editOrder */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return deleteOrder; });
/* unused harmony export setOrderLoading */
/* unused harmony export stopOrderLoading */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__types__ = __webpack_require__(11);
// Get all order
var listOrder=function listOrder(){return function(dispatch){dispatch(setOrderLoading());__WEBPACK_IMPORTED_MODULE_0_axios___default.a.get('/api/order/').then(function(res){dispatch({type:__WEBPACK_IMPORTED_MODULE_1__types__["_33" /* LIST_ORDER */],payload:res.data});}).catch(function(err){console.log("err data",err);dispatch({type:__WEBPACK_IMPORTED_MODULE_1__types__["_26" /* GET_ERRORS */],payload:err.response.data});});};};// Create order
var addOrder=function addOrder(orderData){return function(dispatch){dispatch(setOrderLoading());__WEBPACK_IMPORTED_MODULE_0_axios___default.a.post('/api/order/',orderData).then(function(res){return dispatch({type:__WEBPACK_IMPORTED_MODULE_1__types__["i" /* ADD_ORDER */],payload:res.data});}).catch(function(err){dispatch({type:__WEBPACK_IMPORTED_MODULE_1__types__["_26" /* GET_ERRORS */],payload:err.response.data});dispatch(stopOrderLoading());});};};// Edit order
var editOrder=function editOrder(orderData){return function(dispatch){dispatch(setOrderLoading());__WEBPACK_IMPORTED_MODULE_0_axios___default.a.post('/api/order/edit',orderData).then(function(res){return dispatch({type:__WEBPACK_IMPORTED_MODULE_1__types__["_11" /* EDIT_ORDER */],payload:res.data});}).catch(function(err){dispatch({type:__WEBPACK_IMPORTED_MODULE_1__types__["_26" /* GET_ERRORS */],payload:err.response.data});dispatch(stopOrderLoading());});};};// delete order
var deleteOrder=function deleteOrder(deleteData){return function(dispatch){dispatch(setOrderLoading());__WEBPACK_IMPORTED_MODULE_0_axios___default.a.post('/api/order/delete',deleteData).then(function(res){return dispatch({type:__WEBPACK_IMPORTED_MODULE_1__types__["R" /* DELETE_ORDER */],payload:res.data});}).catch(function(err){dispatch({type:__WEBPACK_IMPORTED_MODULE_1__types__["_26" /* GET_ERRORS */],payload:err.response.data});dispatch(stopOrderLoading());});};};// Order loading
var setOrderLoading=function setOrderLoading(){return{type:__WEBPACK_IMPORTED_MODULE_1__types__["_50" /* ORDER_LOADING */]};};var stopOrderLoading=function stopOrderLoading(){return{type:__WEBPACK_IMPORTED_MODULE_1__types__["_51" /* ORDER_STOPLOADING */]};};

/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return listTeam; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addTeam; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return editTeam; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return deleteTeam; });
/* unused harmony export setTeamLoading */
/* unused harmony export stopTeamLoading */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__types__ = __webpack_require__(11);
// Get all team
var listTeam=function listTeam(){return function(dispatch){dispatch(setTeamLoading());__WEBPACK_IMPORTED_MODULE_0_axios___default.a.get('/api/team/').then(function(res){console.log("team Result",res.data);dispatch({type:__WEBPACK_IMPORTED_MODULE_1__types__["_45" /* LIST_TEAM */],payload:res.data});}).catch(function(err){console.log("err data",err);dispatch({type:__WEBPACK_IMPORTED_MODULE_1__types__["_26" /* GET_ERRORS */],payload:err.response.data});});};};// Create team
var addTeam=function addTeam(teamData){return function(dispatch){dispatch(setTeamLoading());__WEBPACK_IMPORTED_MODULE_0_axios___default.a.post('/api/team/',teamData).then(function(res){return dispatch({type:__WEBPACK_IMPORTED_MODULE_1__types__["w" /* ADD_TEAM */],payload:res.data});}).catch(function(err){dispatch({type:__WEBPACK_IMPORTED_MODULE_1__types__["_26" /* GET_ERRORS */],payload:err.response.data});dispatch(stopTeamLoading());});};};// Edit team
var editTeam=function editTeam(teamData){return function(dispatch){dispatch(setTeamLoading());__WEBPACK_IMPORTED_MODULE_0_axios___default.a.post('/api/team/edit',teamData).then(function(res){return dispatch({type:__WEBPACK_IMPORTED_MODULE_1__types__["_23" /* EDIT_TEAM */],payload:res.data});}).catch(function(err){dispatch({type:__WEBPACK_IMPORTED_MODULE_1__types__["_26" /* GET_ERRORS */],payload:err.response.data});dispatch(stopTeamLoading());});};};// delete team
var deleteTeam=function deleteTeam(deleteData){return function(dispatch){dispatch(setTeamLoading());__WEBPACK_IMPORTED_MODULE_0_axios___default.a.post('/api/team/delete',deleteData).then(function(res){return dispatch({type:__WEBPACK_IMPORTED_MODULE_1__types__["_3" /* DELETE_TEAM */],payload:res.data});}).catch(function(err){dispatch({type:__WEBPACK_IMPORTED_MODULE_1__types__["_26" /* GET_ERRORS */],payload:err.response.data});dispatch(stopTeamLoading());});};};// Team loading
var setTeamLoading=function setTeamLoading(){return{type:__WEBPACK_IMPORTED_MODULE_1__types__["_81" /* TEAM_LOADING */]};};var stopTeamLoading=function stopTeamLoading(){return{type:__WEBPACK_IMPORTED_MODULE_1__types__["_82" /* TEAM_STOPLOADING */]};};

/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return listBlog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addBlog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return editBlog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return deleteBlog; });
/* unused harmony export setBlogLoading */
/* unused harmony export stopBlogLoading */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__types__ = __webpack_require__(11);
// Get all blog
var listBlog=function listBlog(){return function(dispatch){dispatch(setBlogLoading());__WEBPACK_IMPORTED_MODULE_0_axios___default.a.get('/api/blog/').then(function(res){console.log("blog Result",res.data);dispatch({type:__WEBPACK_IMPORTED_MODULE_1__types__["_30" /* LIST_BLOG */],payload:res.data});}).catch(function(err){console.log("err data",err);dispatch({type:__WEBPACK_IMPORTED_MODULE_1__types__["_26" /* GET_ERRORS */],payload:err.response.data});});};};// Create blog
var addBlog=function addBlog(blogData){return function(dispatch){dispatch(setBlogLoading());__WEBPACK_IMPORTED_MODULE_0_axios___default.a.post('/api/blog/',blogData).then(function(res){return dispatch({type:__WEBPACK_IMPORTED_MODULE_1__types__["f" /* ADD_BLOG */],payload:res.data});}).catch(function(err){dispatch({type:__WEBPACK_IMPORTED_MODULE_1__types__["_26" /* GET_ERRORS */],payload:err.response.data});dispatch(stopBlogLoading());});};};// Edit blog
var editBlog=function editBlog(blogData){return function(dispatch){dispatch(setBlogLoading());__WEBPACK_IMPORTED_MODULE_0_axios___default.a.post('/api/blog/edit',blogData).then(function(res){return dispatch({type:__WEBPACK_IMPORTED_MODULE_1__types__["_8" /* EDIT_BLOG */],payload:res.data});}).catch(function(err){dispatch({type:__WEBPACK_IMPORTED_MODULE_1__types__["_26" /* GET_ERRORS */],payload:err.response.data});dispatch(stopBlogLoading());});};};// delete blog
var deleteBlog=function deleteBlog(deleteData){return function(dispatch){dispatch(setBlogLoading());__WEBPACK_IMPORTED_MODULE_0_axios___default.a.post('/api/blog/delete',deleteData).then(function(res){return dispatch({type:__WEBPACK_IMPORTED_MODULE_1__types__["O" /* DELETE_BLOG */],payload:res.data});}).catch(function(err){dispatch({type:__WEBPACK_IMPORTED_MODULE_1__types__["_26" /* GET_ERRORS */],payload:err.response.data});dispatch(stopBlogLoading());});};};// Blog loading
var setBlogLoading=function setBlogLoading(){return{type:__WEBPACK_IMPORTED_MODULE_1__types__["F" /* BLOG_LOADING */]};};var stopBlogLoading=function stopBlogLoading(){return{type:__WEBPACK_IMPORTED_MODULE_1__types__["G" /* BLOG_STOPLOADING */]};};

/***/ }),
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return listShipping; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addShipping; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return editShipping; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return deleteShipping; });
/* unused harmony export setShippingLoading */
/* unused harmony export stopShippingLoading */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__types__ = __webpack_require__(11);
// Get all shipping
var listShipping=function listShipping(){return function(dispatch){dispatch(setShippingLoading());__WEBPACK_IMPORTED_MODULE_0_axios___default.a.get('/api/shipping/').then(function(res){dispatch({type:__WEBPACK_IMPORTED_MODULE_1__types__["_40" /* LIST_SHIPPING */],payload:res.data});}).catch(function(err){console.log("err data",err);dispatch({type:__WEBPACK_IMPORTED_MODULE_1__types__["_26" /* GET_ERRORS */],payload:err.response.data});});};};// Create shipping
var addShipping=function addShipping(shippingData){return function(dispatch){dispatch(setShippingLoading());__WEBPACK_IMPORTED_MODULE_0_axios___default.a.post('/api/shipping/',shippingData).then(function(res){return dispatch({type:__WEBPACK_IMPORTED_MODULE_1__types__["r" /* ADD_SHIPPING */],payload:res.data});}).catch(function(err){dispatch({type:__WEBPACK_IMPORTED_MODULE_1__types__["_26" /* GET_ERRORS */],payload:err.response.data});dispatch(stopShippingLoading());});};};// Edit shipping
var editShipping=function editShipping(shippingData){return function(dispatch){dispatch(setShippingLoading());__WEBPACK_IMPORTED_MODULE_0_axios___default.a.post('/api/shipping/edit',shippingData).then(function(res){return dispatch({type:__WEBPACK_IMPORTED_MODULE_1__types__["_18" /* EDIT_SHIPPING */],payload:res.data});}).catch(function(err){dispatch({type:__WEBPACK_IMPORTED_MODULE_1__types__["_26" /* GET_ERRORS */],payload:err.response.data});dispatch(stopShippingLoading());});};};// delete shipping
var deleteShipping=function deleteShipping(deleteData){return function(dispatch){dispatch(setShippingLoading());__WEBPACK_IMPORTED_MODULE_0_axios___default.a.post('/api/shipping/delete',deleteData).then(function(res){return dispatch({type:__WEBPACK_IMPORTED_MODULE_1__types__["Y" /* DELETE_SHIPPING */],payload:res.data});}).catch(function(err){dispatch({type:__WEBPACK_IMPORTED_MODULE_1__types__["_26" /* GET_ERRORS */],payload:err.response.data});dispatch(stopShippingLoading());});};};// Shipping loading
var setShippingLoading=function setShippingLoading(){return{type:__WEBPACK_IMPORTED_MODULE_1__types__["_71" /* SHIPPING_LOADING */]};};var stopShippingLoading=function stopShippingLoading(){return{type:__WEBPACK_IMPORTED_MODULE_1__types__["_72" /* SHIPPING_STOPLOADING */]};};

/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return listCoupon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addCoupon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return editCoupon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return deleteCoupon; });
/* unused harmony export setCouponLoading */
/* unused harmony export stopCouponLoading */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__types__ = __webpack_require__(11);
// Get all coupon
var listCoupon=function listCoupon(){return function(dispatch){dispatch(setCouponLoading());__WEBPACK_IMPORTED_MODULE_0_axios___default.a.get('/api/coupon/').then(function(res){console.log("coupon Result",res.data);dispatch({type:__WEBPACK_IMPORTED_MODULE_1__types__["_32" /* LIST_COUPON */],payload:res.data});}).catch(function(err){console.log("err data",err);dispatch({type:__WEBPACK_IMPORTED_MODULE_1__types__["_26" /* GET_ERRORS */],payload:err.response.data});});};};// Create coupon
var addCoupon=function addCoupon(couponData){return function(dispatch){dispatch(setCouponLoading());__WEBPACK_IMPORTED_MODULE_0_axios___default.a.post('/api/coupon/',couponData).then(function(res){return dispatch({type:__WEBPACK_IMPORTED_MODULE_1__types__["h" /* ADD_COUPON */],payload:res.data});}).catch(function(err){dispatch({type:__WEBPACK_IMPORTED_MODULE_1__types__["_26" /* GET_ERRORS */],payload:err.response.data});dispatch(stopCouponLoading());});};};// Edit coupon
var editCoupon=function editCoupon(couponData){return function(dispatch){dispatch(setCouponLoading());__WEBPACK_IMPORTED_MODULE_0_axios___default.a.post('/api/coupon/edit',couponData).then(function(res){return dispatch({type:__WEBPACK_IMPORTED_MODULE_1__types__["_10" /* EDIT_COUPON */],payload:res.data});}).catch(function(err){dispatch({type:__WEBPACK_IMPORTED_MODULE_1__types__["_26" /* GET_ERRORS */],payload:err.response.data});dispatch(stopCouponLoading());});};};// delete coupon
var deleteCoupon=function deleteCoupon(deleteData){return function(dispatch){dispatch(setCouponLoading());__WEBPACK_IMPORTED_MODULE_0_axios___default.a.post('/api/coupon/delete',deleteData).then(function(res){return dispatch({type:__WEBPACK_IMPORTED_MODULE_1__types__["Q" /* DELETE_COUPON */],payload:res.data});}).catch(function(err){dispatch({type:__WEBPACK_IMPORTED_MODULE_1__types__["_26" /* GET_ERRORS */],payload:err.response.data});dispatch(stopCouponLoading());});};};// Coupon loading
var setCouponLoading=function setCouponLoading(){return{type:__WEBPACK_IMPORTED_MODULE_1__types__["J" /* COUPON_LOADING */]};};var stopCouponLoading=function stopCouponLoading(){return{type:__WEBPACK_IMPORTED_MODULE_1__types__["K" /* COUPON_STOPLOADING */]};};

/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return listAdmin; });
/* unused harmony export listAdminOne */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addAdmin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return editAdmin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return deleteAdmin; });
/* unused harmony export setAdminLoading */
/* unused harmony export stopAdminLoading */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__types__ = __webpack_require__(11);
// Get all admin
var listAdmin=function listAdmin(){return function(dispatch){dispatch(setAdminLoading());__WEBPACK_IMPORTED_MODULE_0_axios___default.a.get('/api/admin/').then(function(res){dispatch({type:__WEBPACK_IMPORTED_MODULE_1__types__["_27" /* LIST_ADMIN */],payload:res.data});}).catch(function(err){console.log("err data",err);dispatch({type:__WEBPACK_IMPORTED_MODULE_1__types__["_26" /* GET_ERRORS */],payload:err.response.data});});};};var listAdminOne=function listAdminOne(data){return function(dispatch){dispatch(setAdminLoading());__WEBPACK_IMPORTED_MODULE_0_axios___default.a.post('/api/admin/getadmin',data).then(function(res){dispatch({type:__WEBPACK_IMPORTED_MODULE_1__types__["_27" /* LIST_ADMIN */],payload:res.data});}).catch(function(err){console.log("err data",err);dispatch({type:__WEBPACK_IMPORTED_MODULE_1__types__["_26" /* GET_ERRORS */],payload:err.response.data});});};};// Create admin
var addAdmin=function addAdmin(adminData){return function(dispatch){dispatch(setAdminLoading());__WEBPACK_IMPORTED_MODULE_0_axios___default.a.post('/api/admin/',adminData).then(function(res){return dispatch({type:__WEBPACK_IMPORTED_MODULE_1__types__["a" /* ADD_ADMIN */],payload:res.data});}).catch(function(err){dispatch({type:__WEBPACK_IMPORTED_MODULE_1__types__["_26" /* GET_ERRORS */],payload:err.response.data});dispatch(stopAdminLoading());});};};// Edit admin
var editAdmin=function editAdmin(adminData){return function(dispatch){dispatch(setAdminLoading());__WEBPACK_IMPORTED_MODULE_0_axios___default.a.post('/api/admin/edit',adminData).then(function(res){return dispatch({type:__WEBPACK_IMPORTED_MODULE_1__types__["_5" /* EDIT_ADMIN */],payload:res.data});}).catch(function(err){dispatch({type:__WEBPACK_IMPORTED_MODULE_1__types__["_26" /* GET_ERRORS */],payload:err.response.data});dispatch(stopAdminLoading());});};};// delete admin
var deleteAdmin=function deleteAdmin(deleteData){return function(dispatch){dispatch(setAdminLoading());__WEBPACK_IMPORTED_MODULE_0_axios___default.a.post('/api/admin/delete',deleteData).then(function(res){return dispatch({type:__WEBPACK_IMPORTED_MODULE_1__types__["L" /* DELETE_ADMIN */],payload:res.data});}).catch(function(err){dispatch({type:__WEBPACK_IMPORTED_MODULE_1__types__["_26" /* GET_ERRORS */],payload:err.response.data});dispatch(stopAdminLoading());});};};// Admin loading
var setAdminLoading=function setAdminLoading(){return{type:__WEBPACK_IMPORTED_MODULE_1__types__["z" /* ADMIN_LOADING */]};};var stopAdminLoading=function stopAdminLoading(){return{type:__WEBPACK_IMPORTED_MODULE_1__types__["A" /* ADMIN_STOPLOADING */]};};

/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__layouts_SidebarMobile__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__layouts_Asidebar__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__layouts_Header__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__layouts_HeaderTopbar__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__layouts_SubHeader__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__layouts_Footer__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__actions_productsubAction__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_sweetalert2__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_sweetalert2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_react_search_input__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_react_search_input___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_react_search_input__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__common_MenuList__ = __webpack_require__(12);
var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var queryString=__webpack_require__(17);var KEYS_TO_FILTERS=['productSubName','saleDesc','sku','type','salePrice','taxable'];var Toast=__WEBPACK_IMPORTED_MODULE_10_sweetalert2___default.a.mixin({toast:true,position:'top-end',showConfirmButton:false,timer:1000});var ListProductSub=function(_Component){_inherits(ListProductSub,_Component);function ListProductSub(){_classCallCheck(this,ListProductSub);var _this=_possibleConstructorReturn(this,(ListProductSub.__proto__||Object.getPrototypeOf(ListProductSub)).call(this));_this.state={errors:{},searchTerm:''};_this.onEditClick=_this.onEditClick.bind(_this);_this.onDeleteClick=_this.onDeleteClick.bind(_this);_this.searchUpdated=_this.searchUpdated.bind(_this);return _this;}_createClass(ListProductSub,[{key:'componentDidMount',value:function componentDidMount(){var parsed=queryString.parse(this.props.location.search);this.props.listProductSub({productID:parsed.productID});}//calls when edit button is clicked
},{key:'onEditClick',value:function onEditClick(res){localStorage.setItem('editproductsub',JSON.stringify(res));var parsed=queryString.parse(this.props.location.search);this.props.history.push('editmapping?productID='+parsed.productID);}//calls when delete button is clicked
},{key:'onDeleteClick',value:function onDeleteClick(id){var deleteData={id:id};this.props.deleteProductSub(deleteData);}},{key:'searchUpdated',value:function searchUpdated(term){this.setState({searchTerm:term});}},{key:'componentWillReceiveProps',value:function componentWillReceiveProps(nextProps){var _this2=this;if(nextProps.productsub.deleteproductsub!==this.props.productsub.deleteproductsub){Toast.fire({type:'success',title:' Sub-Products Deleted Successfully'}).then(function(getResult){var parsed=queryString.parse(_this2.props.location.search);_this2.props.listProductSub({productID:parsed.productID});});}if(nextProps.productsub.addproductsub!==this.props.productsub.addproductsub){var parsed=queryString.parse(this.props.location.search);this.props.listProductSub({productID:parsed.productID});}if(nextProps.errors!==this.props.errors){Toast.fire({type:'error',title:'Check all the fields'});this.setState({errors:nextProps.errors});}}},{key:'render',value:function render(){var _this3=this;var _props$productsub=this.props.productsub,listproductsub=_props$productsub.listproductsub,productsubloading=_props$productsub.productsubloading;var tableResult;if(listproductsub==null||productsubloading){tableResult=__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('tr',null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('td',{colSpan:9,className:'text-center'},'Loading.....'));}else{if(Object.keys(listproductsub).length>0){var filterData=listproductsub.filter(Object(__WEBPACK_IMPORTED_MODULE_11_react_search_input__["createFilter"])(this.state.searchTerm,KEYS_TO_FILTERS));tableResult=filterData.map(function(result){return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('tr',null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('td',null,result.productSubName),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('td',null,result.saleDesc),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('td',null,result.sku),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('td',null,result.type),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('td',null,result.salePrice),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('td',null,result.taxable),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('td',null,result.incomeAccount),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('td',null,result.purchaseDesc),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('td',null,Object(__WEBPACK_IMPORTED_MODULE_12__common_MenuList__["a" /* checkPermission */])(_this3.props.auth,"PRODUCTS","DELETE")&&__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('button',{className:'btn btn-link',onClick:function onClick(){return _this3.onDeleteClick(result._id);}},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span',{className:'kt-badge kt-badge--brand kt-badge--inline kt-badge--danger'},'Delete'))));});}else{tableResult=__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('tr',null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('td',{colSpan:9,className:'text-center'},'No Record Found.....'));}}return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:'kt-content  kt-grid__item kt-grid__item--fluid',id:'kt_content'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:'kt-portlet'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:'kt-portlet__head kt-portlet__head--lg'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:'kt-portlet__head-label'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span',{className:'kt-portlet__head-icon'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i',{className:'kt-font-brand flaticon2-line-chart'})),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('h3',{className:'kt-portlet__head-title'},'List  Sub-Products'))),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:'col-sm-12 col-md-12'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11_react_search_input___default.a,{placeholder:'Search',onChange:this.searchUpdated,className:'search-input'})),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:'kt-portlet__body'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('table',{className:'table table-striped table-bordered table-hover table-checkable'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('thead',null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('tr',null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('th',null,'Product  Name'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('th',null,'Sale Description'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('th',null,'SKU'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('th',null,'Type'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('th',null,'Sale Price'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('th',null,'Taxable'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('th',null,'Income Account'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('th',null,'Purchase Desc'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('th',null,'Delete'))),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('tbody',null,tableResult),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('tfoot',null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('tr',null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('th',null,'Product  Name'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('th',null,'Sale Description'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('th',null,'SKU'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('th',null,'Type'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('th',null,'Sale Price'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('th',null,'Taxable'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('th',null,'Income Account'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('th',null,'Purchase Desc'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('th',null,'Delete'))))))));}}]);return ListProductSub;}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);ListProductSub.propTypes={auth:__WEBPACK_IMPORTED_MODULE_1_prop_types__["PropTypes"].object.isRequired,listProductSub:__WEBPACK_IMPORTED_MODULE_1_prop_types__["PropTypes"].func.isRequired,deleteProductSub:__WEBPACK_IMPORTED_MODULE_1_prop_types__["PropTypes"].func.isRequired};var mapStateToProps=function mapStateToProps(state){return{auth:state.auth,errors:state.errors,productsub:state.productsub};};/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_2_react_redux__["b" /* connect */])(mapStateToProps,{listProductSub:__WEBPACK_IMPORTED_MODULE_9__actions_productsubAction__["c" /* listProductSub */],deleteProductSub:__WEBPACK_IMPORTED_MODULE_9__actions_productsubAction__["b" /* deleteProductSub */]})(ListProductSub));

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var asap = __webpack_require__(102);

function noop() {}

// States:
//
// 0 - pending
// 1 - fulfilled with _value
// 2 - rejected with _value
// 3 - adopted the state of another promise, _value
//
// once the state is no longer pending (0) it is immutable

// All `_` prefixed properties will be reduced to `_{random number}`
// at build time to obfuscate them and discourage their use.
// We don't use symbols or Object.defineProperty to fully hide them
// because the performance isn't good enough.


// to avoid using try/catch inside critical functions, we
// extract them to here.
var LAST_ERROR = null;
var IS_ERROR = {};
function getThen(obj) {
  try {
    return obj.then;
  } catch (ex) {
    LAST_ERROR = ex;
    return IS_ERROR;
  }
}

function tryCallOne(fn, a) {
  try {
    return fn(a);
  } catch (ex) {
    LAST_ERROR = ex;
    return IS_ERROR;
  }
}
function tryCallTwo(fn, a, b) {
  try {
    fn(a, b);
  } catch (ex) {
    LAST_ERROR = ex;
    return IS_ERROR;
  }
}

module.exports = Promise;

function Promise(fn) {
  if (typeof this !== 'object') {
    throw new TypeError('Promises must be constructed via new');
  }
  if (typeof fn !== 'function') {
    throw new TypeError('Promise constructor\'s argument is not a function');
  }
  this._75 = 0;
  this._83 = 0;
  this._18 = null;
  this._38 = null;
  if (fn === noop) return;
  doResolve(fn, this);
}
Promise._47 = null;
Promise._71 = null;
Promise._44 = noop;

Promise.prototype.then = function(onFulfilled, onRejected) {
  if (this.constructor !== Promise) {
    return safeThen(this, onFulfilled, onRejected);
  }
  var res = new Promise(noop);
  handle(this, new Handler(onFulfilled, onRejected, res));
  return res;
};

function safeThen(self, onFulfilled, onRejected) {
  return new self.constructor(function (resolve, reject) {
    var res = new Promise(noop);
    res.then(resolve, reject);
    handle(self, new Handler(onFulfilled, onRejected, res));
  });
}
function handle(self, deferred) {
  while (self._83 === 3) {
    self = self._18;
  }
  if (Promise._47) {
    Promise._47(self);
  }
  if (self._83 === 0) {
    if (self._75 === 0) {
      self._75 = 1;
      self._38 = deferred;
      return;
    }
    if (self._75 === 1) {
      self._75 = 2;
      self._38 = [self._38, deferred];
      return;
    }
    self._38.push(deferred);
    return;
  }
  handleResolved(self, deferred);
}

function handleResolved(self, deferred) {
  asap(function() {
    var cb = self._83 === 1 ? deferred.onFulfilled : deferred.onRejected;
    if (cb === null) {
      if (self._83 === 1) {
        resolve(deferred.promise, self._18);
      } else {
        reject(deferred.promise, self._18);
      }
      return;
    }
    var ret = tryCallOne(cb, self._18);
    if (ret === IS_ERROR) {
      reject(deferred.promise, LAST_ERROR);
    } else {
      resolve(deferred.promise, ret);
    }
  });
}
function resolve(self, newValue) {
  // Promise Resolution Procedure: https://github.com/promises-aplus/promises-spec#the-promise-resolution-procedure
  if (newValue === self) {
    return reject(
      self,
      new TypeError('A promise cannot be resolved with itself.')
    );
  }
  if (
    newValue &&
    (typeof newValue === 'object' || typeof newValue === 'function')
  ) {
    var then = getThen(newValue);
    if (then === IS_ERROR) {
      return reject(self, LAST_ERROR);
    }
    if (
      then === self.then &&
      newValue instanceof Promise
    ) {
      self._83 = 3;
      self._18 = newValue;
      finale(self);
      return;
    } else if (typeof then === 'function') {
      doResolve(then.bind(newValue), self);
      return;
    }
  }
  self._83 = 1;
  self._18 = newValue;
  finale(self);
}

function reject(self, newValue) {
  self._83 = 2;
  self._18 = newValue;
  if (Promise._71) {
    Promise._71(self, newValue);
  }
  finale(self);
}
function finale(self) {
  if (self._75 === 1) {
    handle(self, self._38);
    self._38 = null;
  }
  if (self._75 === 2) {
    for (var i = 0; i < self._38.length; i++) {
      handle(self, self._38[i]);
    }
    self._38 = null;
  }
}

function Handler(onFulfilled, onRejected, promise){
  this.onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : null;
  this.onRejected = typeof onRejected === 'function' ? onRejected : null;
  this.promise = promise;
}

/**
 * Take a potentially misbehaving resolver function and make sure
 * onFulfilled and onRejected are only called once.
 *
 * Makes no guarantees about asynchrony.
 */
function doResolve(fn, promise) {
  var done = false;
  var res = tryCallTwo(fn, function (value) {
    if (done) return;
    done = true;
    resolve(promise, value);
  }, function (reason) {
    if (done) return;
    done = true;
    reject(promise, reason);
  });
  if (!done && res === IS_ERROR) {
    done = true;
    reject(promise, LAST_ERROR);
  }
}


/***/ }),
/* 60 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_invariant__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_invariant___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_invariant__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_history__ = __webpack_require__(28);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var isModifiedEvent = function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
};

/**
 * The public API for rendering a history-aware <a>.
 */

var Link = function (_React$Component) {
  _inherits(Link, _React$Component);

  function Link() {
    var _temp, _this, _ret;

    _classCallCheck(this, Link);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.handleClick = function (event) {
      if (_this.props.onClick) _this.props.onClick(event);

      if (!event.defaultPrevented && // onClick prevented default
      event.button === 0 && // ignore everything but left clicks
      !_this.props.target && // let browser handle "target=_blank" etc.
      !isModifiedEvent(event) // ignore clicks with modifier keys
      ) {
          event.preventDefault();

          var history = _this.context.router.history;
          var _this$props = _this.props,
              replace = _this$props.replace,
              to = _this$props.to;


          if (replace) {
            history.replace(to);
          } else {
            history.push(to);
          }
        }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  Link.prototype.render = function render() {
    var _props = this.props,
        replace = _props.replace,
        to = _props.to,
        innerRef = _props.innerRef,
        props = _objectWithoutProperties(_props, ["replace", "to", "innerRef"]); // eslint-disable-line no-unused-vars

    __WEBPACK_IMPORTED_MODULE_2_invariant___default()(this.context.router, "You should not use <Link> outside a <Router>");

    __WEBPACK_IMPORTED_MODULE_2_invariant___default()(to !== undefined, 'You must specify the "to" property');

    var history = this.context.router.history;

    var location = typeof to === "string" ? Object(__WEBPACK_IMPORTED_MODULE_3_history__["c" /* createLocation */])(to, null, null, history.location) : to;

    var href = history.createHref(location);
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", _extends({}, props, { onClick: this.handleClick, href: href, ref: innerRef }));
  };

  return Link;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

Link.propTypes = {
  onClick: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
  target: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  replace: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  to: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object]).isRequired,
  innerRef: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func])
};
Link.defaultProps = {
  replace: false
};
Link.contextTypes = {
  router: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.shape({
    history: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.shape({
      push: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired,
      replace: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired,
      createHref: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired
    }).isRequired
  }).isRequired
};


/* harmony default export */ __webpack_exports__["a"] = (Link);

/***/ }),
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_router_es_Route__ = __webpack_require__(63);
// Written in this round about way for babel-transform-imports


/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_react_router_es_Route__["a" /* default */]);

/***/ }),
/* 63 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_warning__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_warning___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_warning__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_invariant__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_invariant___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_invariant__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__matchPath__ = __webpack_require__(43);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var isEmptyChildren = function isEmptyChildren(children) {
  return __WEBPACK_IMPORTED_MODULE_2_react___default.a.Children.count(children) === 0;
};

/**
 * The public API for matching a single path and rendering.
 */

var Route = function (_React$Component) {
  _inherits(Route, _React$Component);

  function Route() {
    var _temp, _this, _ret;

    _classCallCheck(this, Route);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
      match: _this.computeMatch(_this.props, _this.context.router)
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  Route.prototype.getChildContext = function getChildContext() {
    return {
      router: _extends({}, this.context.router, {
        route: {
          location: this.props.location || this.context.router.route.location,
          match: this.state.match
        }
      })
    };
  };

  Route.prototype.computeMatch = function computeMatch(_ref, router) {
    var computedMatch = _ref.computedMatch,
        location = _ref.location,
        path = _ref.path,
        strict = _ref.strict,
        exact = _ref.exact,
        sensitive = _ref.sensitive;

    if (computedMatch) return computedMatch; // <Switch> already computed the match for us

    __WEBPACK_IMPORTED_MODULE_1_invariant___default()(router, "You should not use <Route> or withRouter() outside a <Router>");

    var route = router.route;

    var pathname = (location || route.location).pathname;

    return Object(__WEBPACK_IMPORTED_MODULE_4__matchPath__["a" /* default */])(pathname, { path: path, strict: strict, exact: exact, sensitive: sensitive }, route.match);
  };

  Route.prototype.componentWillMount = function componentWillMount() {
    __WEBPACK_IMPORTED_MODULE_0_warning___default()(!(this.props.component && this.props.render), "You should not use <Route component> and <Route render> in the same route; <Route render> will be ignored");

    __WEBPACK_IMPORTED_MODULE_0_warning___default()(!(this.props.component && this.props.children && !isEmptyChildren(this.props.children)), "You should not use <Route component> and <Route children> in the same route; <Route children> will be ignored");

    __WEBPACK_IMPORTED_MODULE_0_warning___default()(!(this.props.render && this.props.children && !isEmptyChildren(this.props.children)), "You should not use <Route render> and <Route children> in the same route; <Route children> will be ignored");
  };

  Route.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps, nextContext) {
    __WEBPACK_IMPORTED_MODULE_0_warning___default()(!(nextProps.location && !this.props.location), '<Route> elements should not change from uncontrolled to controlled (or vice versa). You initially used no "location" prop and then provided one on a subsequent render.');

    __WEBPACK_IMPORTED_MODULE_0_warning___default()(!(!nextProps.location && this.props.location), '<Route> elements should not change from controlled to uncontrolled (or vice versa). You provided a "location" prop initially but omitted it on a subsequent render.');

    this.setState({
      match: this.computeMatch(nextProps, nextContext.router)
    });
  };

  Route.prototype.render = function render() {
    var match = this.state.match;
    var _props = this.props,
        children = _props.children,
        component = _props.component,
        render = _props.render;
    var _context$router = this.context.router,
        history = _context$router.history,
        route = _context$router.route,
        staticContext = _context$router.staticContext;

    var location = this.props.location || route.location;
    var props = { match: match, location: location, history: history, staticContext: staticContext };

    if (component) return match ? __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(component, props) : null;

    if (render) return match ? render(props) : null;

    if (typeof children === "function") return children(props);

    if (children && !isEmptyChildren(children)) return __WEBPACK_IMPORTED_MODULE_2_react___default.a.Children.only(children);

    return null;
  };

  return Route;
}(__WEBPACK_IMPORTED_MODULE_2_react___default.a.Component);

Route.propTypes = {
  computedMatch: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.object, // private, from <Switch>
  path: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.string,
  exact: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool,
  strict: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool,
  sensitive: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool,
  component: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.func,
  render: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.func,
  children: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.func, __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.node]),
  location: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.object
};
Route.contextTypes = {
  router: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.shape({
    history: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.object.isRequired,
    route: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.object.isRequired,
    staticContext: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.object
  })
};
Route.childContextTypes = {
  router: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.object.isRequired
};


/* harmony default export */ __webpack_exports__["a"] = (Route);

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

var isarray = __webpack_require__(123)

/**
 * Expose `pathToRegexp`.
 */
module.exports = pathToRegexp
module.exports.parse = parse
module.exports.compile = compile
module.exports.tokensToFunction = tokensToFunction
module.exports.tokensToRegExp = tokensToRegExp

/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */
var PATH_REGEXP = new RegExp([
  // Match escaped characters that would otherwise appear in future matches.
  // This allows the user to escape special characters that won't transform.
  '(\\\\.)',
  // Match Express-style parameters and un-named parameters with a prefix
  // and optional suffixes. Matches appear as:
  //
  // "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
  // "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
  // "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
  '([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'
].join('|'), 'g')

/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */
function parse (str, options) {
  var tokens = []
  var key = 0
  var index = 0
  var path = ''
  var defaultDelimiter = options && options.delimiter || '/'
  var res

  while ((res = PATH_REGEXP.exec(str)) != null) {
    var m = res[0]
    var escaped = res[1]
    var offset = res.index
    path += str.slice(index, offset)
    index = offset + m.length

    // Ignore already escaped sequences.
    if (escaped) {
      path += escaped[1]
      continue
    }

    var next = str[index]
    var prefix = res[2]
    var name = res[3]
    var capture = res[4]
    var group = res[5]
    var modifier = res[6]
    var asterisk = res[7]

    // Push the current path onto the tokens.
    if (path) {
      tokens.push(path)
      path = ''
    }

    var partial = prefix != null && next != null && next !== prefix
    var repeat = modifier === '+' || modifier === '*'
    var optional = modifier === '?' || modifier === '*'
    var delimiter = res[2] || defaultDelimiter
    var pattern = capture || group

    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter: delimiter,
      optional: optional,
      repeat: repeat,
      partial: partial,
      asterisk: !!asterisk,
      pattern: pattern ? escapeGroup(pattern) : (asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?')
    })
  }

  // Match any characters still remaining.
  if (index < str.length) {
    path += str.substr(index)
  }

  // If the path exists, push it onto the end.
  if (path) {
    tokens.push(path)
  }

  return tokens
}

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */
function compile (str, options) {
  return tokensToFunction(parse(str, options), options)
}

/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */
function encodeURIComponentPretty (str) {
  return encodeURI(str).replace(/[\/?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */
function encodeAsterisk (str) {
  return encodeURI(str).replace(/[?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction (tokens, options) {
  // Compile all the tokens into regexps.
  var matches = new Array(tokens.length)

  // Compile all the patterns before compilation.
  for (var i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$', flags(options))
    }
  }

  return function (obj, opts) {
    var path = ''
    var data = obj || {}
    var options = opts || {}
    var encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent

    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i]

      if (typeof token === 'string') {
        path += token

        continue
      }

      var value = data[token.name]
      var segment

      if (value == null) {
        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) {
            path += token.prefix
          }

          continue
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined')
        }
      }

      if (isarray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`')
        }

        if (value.length === 0) {
          if (token.optional) {
            continue
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty')
          }
        }

        for (var j = 0; j < value.length; j++) {
          segment = encode(value[j])

          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`')
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment
        }

        continue
      }

      segment = token.asterisk ? encodeAsterisk(value) : encode(value)

      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"')
      }

      path += token.prefix + segment
    }

    return path
  }
}

/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */
function escapeString (str) {
  return str.replace(/([.+*?=^!:${}()[\]|\/\\])/g, '\\$1')
}

/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */
function escapeGroup (group) {
  return group.replace(/([=!:$\/()])/g, '\\$1')
}

/**
 * Attach the keys as a property of the regexp.
 *
 * @param  {!RegExp} re
 * @param  {Array}   keys
 * @return {!RegExp}
 */
function attachKeys (re, keys) {
  re.keys = keys
  return re
}

/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */
function flags (options) {
  return options && options.sensitive ? '' : 'i'
}

/**
 * Pull out keys from a regexp.
 *
 * @param  {!RegExp} path
 * @param  {!Array}  keys
 * @return {!RegExp}
 */
function regexpToRegexp (path, keys) {
  // Use a negative lookahead to match only capturing groups.
  var groups = path.source.match(/\((?!\?)/g)

  if (groups) {
    for (var i = 0; i < groups.length; i++) {
      keys.push({
        name: i,
        prefix: null,
        delimiter: null,
        optional: false,
        repeat: false,
        partial: false,
        asterisk: false,
        pattern: null
      })
    }
  }

  return attachKeys(path, keys)
}

/**
 * Transform an array into a regexp.
 *
 * @param  {!Array}  path
 * @param  {Array}   keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function arrayToRegexp (path, keys, options) {
  var parts = []

  for (var i = 0; i < path.length; i++) {
    parts.push(pathToRegexp(path[i], keys, options).source)
  }

  var regexp = new RegExp('(?:' + parts.join('|') + ')', flags(options))

  return attachKeys(regexp, keys)
}

/**
 * Create a path regexp from string input.
 *
 * @param  {string}  path
 * @param  {!Array}  keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function stringToRegexp (path, keys, options) {
  return tokensToRegExp(parse(path, options), keys, options)
}

/**
 * Expose a function for taking tokens and returning a RegExp.
 *
 * @param  {!Array}          tokens
 * @param  {(Array|Object)=} keys
 * @param  {Object=}         options
 * @return {!RegExp}
 */
function tokensToRegExp (tokens, keys, options) {
  if (!isarray(keys)) {
    options = /** @type {!Object} */ (keys || options)
    keys = []
  }

  options = options || {}

  var strict = options.strict
  var end = options.end !== false
  var route = ''

  // Iterate over the tokens and create our regexp string.
  for (var i = 0; i < tokens.length; i++) {
    var token = tokens[i]

    if (typeof token === 'string') {
      route += escapeString(token)
    } else {
      var prefix = escapeString(token.prefix)
      var capture = '(?:' + token.pattern + ')'

      keys.push(token)

      if (token.repeat) {
        capture += '(?:' + prefix + capture + ')*'
      }

      if (token.optional) {
        if (!token.partial) {
          capture = '(?:' + prefix + '(' + capture + '))?'
        } else {
          capture = prefix + '(' + capture + ')?'
        }
      } else {
        capture = prefix + '(' + capture + ')'
      }

      route += capture
    }
  }

  var delimiter = escapeString(options.delimiter || '/')
  var endsWithDelimiter = route.slice(-delimiter.length) === delimiter

  // In non-strict mode we allow a slash at the end of match. If the path to
  // match already ends with a slash, we remove it for consistency. The slash
  // is valid at the end of a path match, not in the middle. This is important
  // in non-ending mode, where "/test/" shouldn't match "/test//route".
  if (!strict) {
    route = (endsWithDelimiter ? route.slice(0, -delimiter.length) : route) + '(?:' + delimiter + '(?=$))?'
  }

  if (end) {
    route += '$'
  } else {
    // In non-ending mode, we need the capturing groups to match as much as
    // possible by using a positive lookahead to the end or next path segment.
    route += strict && endsWithDelimiter ? '' : '(?=' + delimiter + '|$)'
  }

  return attachKeys(new RegExp('^' + route, flags(options)), keys)
}

/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 *
 * @param  {(string|RegExp|Array)} path
 * @param  {(Array|Object)=}       keys
 * @param  {Object=}               options
 * @return {!RegExp}
 */
function pathToRegexp (path, keys, options) {
  if (!isarray(keys)) {
    options = /** @type {!Object} */ (keys || options)
    keys = []
  }

  options = options || {}

  if (path instanceof RegExp) {
    return regexpToRegexp(path, /** @type {!Array} */ (keys))
  }

  if (isarray(path)) {
    return arrayToRegexp(/** @type {!Array} */ (path), /** @type {!Array} */ (keys), options)
  }

  return stringToRegexp(/** @type {string} */ (path), /** @type {!Array} */ (keys), options)
}


/***/ }),
/* 65 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_path_to_regexp__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_path_to_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_path_to_regexp__);


var patternCache = {};
var cacheLimit = 10000;
var cacheCount = 0;

var compileGenerator = function compileGenerator(pattern) {
  var cacheKey = pattern;
  var cache = patternCache[cacheKey] || (patternCache[cacheKey] = {});

  if (cache[pattern]) return cache[pattern];

  var compiledGenerator = __WEBPACK_IMPORTED_MODULE_0_path_to_regexp___default.a.compile(pattern);

  if (cacheCount < cacheLimit) {
    cache[pattern] = compiledGenerator;
    cacheCount++;
  }

  return compiledGenerator;
};

/**
 * Public API for generating a URL pathname from a pattern and parameters.
 */
var generatePath = function generatePath() {
  var pattern = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "/";
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (pattern === "/") {
    return pattern;
  }
  var generator = compileGenerator(pattern);
  return generator(params, { pretty: true });
};

/* harmony default export */ __webpack_exports__["a"] = (generatePath);

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var base64_url_decode = __webpack_require__(137);

function InvalidTokenError(message) {
  this.message = message;
}

InvalidTokenError.prototype = new Error();
InvalidTokenError.prototype.name = 'InvalidTokenError';

module.exports = function (token,options) {
  if (typeof token !== 'string') {
    throw new InvalidTokenError('Invalid token specified');
  }

  options = options || {};
  var pos = options.header === true ? 0 : 1;
  try {
    return JSON.parse(base64_url_decode(token.split('.')[pos]));
  } catch (e) {
    throw new InvalidTokenError('Invalid token specified: ' + e.message);
  }
};

module.exports.InvalidTokenError = InvalidTokenError;


/***/ }),
/* 67 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);
var setAuthToken=function setAuthToken(token){if(token){// Apply to every request
__WEBPACK_IMPORTED_MODULE_0_axios___default.a.defaults.headers.common['Authorization']=token;}else{// Delete auth Header
delete __WEBPACK_IMPORTED_MODULE_0_axios___default.a.defaults.headers.common['Authorization'];}};/* harmony default export */ __webpack_exports__["a"] = (setAuthToken);

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(18);
var settle = __webpack_require__(144);
var buildURL = __webpack_require__(146);
var parseHeaders = __webpack_require__(147);
var isURLSameOrigin = __webpack_require__(148);
var createError = __webpack_require__(70);

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password || '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    request.open(config.method.toUpperCase(), buildURL(config.url, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    // Listen for ready state
    request.onreadystatechange = function handleLoad() {
      if (!request || request.readyState !== 4) {
        return;
      }

      // The request errored out and we didn't get a response, this will be
      // handled by onerror instead
      // With one exception: request that using file: protocol, most browsers
      // will return status as 0 even though it's a successful request
      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
        return;
      }

      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
      var response = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(resolve, reject, response);

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      reject(createError('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED',
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      var cookies = __webpack_require__(149);

      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(config.url)) && config.xsrfCookieName ?
          cookies.read(config.xsrfCookieName) :
          undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (config.withCredentials) {
      request.withCredentials = true;
    }

    // Add responseType to request if needed
    if (config.responseType) {
      try {
        request.responseType = config.responseType;
      } catch (e) {
        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
        if (config.responseType !== 'json') {
          throw e;
        }
      }
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel);
        // Clean up request
        request = null;
      });
    }

    if (requestData === undefined) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var enhanceError = __webpack_require__(145);

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
module.exports = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;


/***/ }),
/* 73 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return setBatch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getBatch; });
// Default to a dummy "batch" implementation that just runs the callback
function defaultNoopBatch(callback) {
  callback();
}

var batch = defaultNoopBatch; // Allow injecting another batching function later

var setBatch = function setBatch(newBatch) {
  return batch = newBatch;
}; // Supply a getter just to skip dealing with ESM bindings

var getBatch = function getBatch() {
  return batch;
};

/***/ }),
/* 74 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = connectAdvanced;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_objectWithoutPropertiesLoose__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_hoist_non_react_statics__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_hoist_non_react_statics___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_hoist_non_react_statics__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_is__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_is___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_is__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_Subscription__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils_useIsomorphicLayoutEffect__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Context__ = __webpack_require__(26);


var _excluded = ["getDisplayName", "methodName", "renderCountProp", "shouldHandleStateChanges", "storeKey", "withRef", "forwardRef", "context"],
    _excluded2 = ["reactReduxForwardedRef"];





 // Define some constant arrays just to avoid re-creating these

var EMPTY_ARRAY = [];
var NO_SUBSCRIPTION_ARRAY = [null, null];

var stringifyComponent = function stringifyComponent(Comp) {
  try {
    return JSON.stringify(Comp);
  } catch (err) {
    return String(Comp);
  }
};

function storeStateUpdatesReducer(state, action) {
  var updateCount = state[1];
  return [action.payload, updateCount + 1];
}

function useIsomorphicLayoutEffectWithArgs(effectFunc, effectArgs, dependencies) {
  Object(__WEBPACK_IMPORTED_MODULE_6__utils_useIsomorphicLayoutEffect__["a" /* useIsomorphicLayoutEffect */])(function () {
    return effectFunc.apply(void 0, effectArgs);
  }, dependencies);
}

function captureWrapperProps(lastWrapperProps, lastChildProps, renderIsScheduled, wrapperProps, actualChildProps, childPropsFromStoreUpdate, notifyNestedSubs) {
  // We want to capture the wrapper props and child props we used for later comparisons
  lastWrapperProps.current = wrapperProps;
  lastChildProps.current = actualChildProps;
  renderIsScheduled.current = false; // If the render was from a store update, clear out that reference and cascade the subscriber update

  if (childPropsFromStoreUpdate.current) {
    childPropsFromStoreUpdate.current = null;
    notifyNestedSubs();
  }
}

function subscribeUpdates(shouldHandleStateChanges, store, subscription, childPropsSelector, lastWrapperProps, lastChildProps, renderIsScheduled, childPropsFromStoreUpdate, notifyNestedSubs, forceComponentUpdateDispatch) {
  // If we're not subscribed to the store, nothing to do here
  if (!shouldHandleStateChanges) return; // Capture values for checking if and when this component unmounts

  var didUnsubscribe = false;
  var lastThrownError = null; // We'll run this callback every time a store subscription update propagates to this component

  var checkForUpdates = function checkForUpdates() {
    if (didUnsubscribe) {
      // Don't run stale listeners.
      // Redux doesn't guarantee unsubscriptions happen until next dispatch.
      return;
    }

    var latestStoreState = store.getState();
    var newChildProps, error;

    try {
      // Actually run the selector with the most recent store state and wrapper props
      // to determine what the child props should be
      newChildProps = childPropsSelector(latestStoreState, lastWrapperProps.current);
    } catch (e) {
      error = e;
      lastThrownError = e;
    }

    if (!error) {
      lastThrownError = null;
    } // If the child props haven't changed, nothing to do here - cascade the subscription update


    if (newChildProps === lastChildProps.current) {
      if (!renderIsScheduled.current) {
        notifyNestedSubs();
      }
    } else {
      // Save references to the new child props.  Note that we track the "child props from store update"
      // as a ref instead of a useState/useReducer because we need a way to determine if that value has
      // been processed.  If this went into useState/useReducer, we couldn't clear out the value without
      // forcing another re-render, which we don't want.
      lastChildProps.current = newChildProps;
      childPropsFromStoreUpdate.current = newChildProps;
      renderIsScheduled.current = true; // If the child props _did_ change (or we caught an error), this wrapper component needs to re-render

      forceComponentUpdateDispatch({
        type: 'STORE_UPDATED',
        payload: {
          error: error
        }
      });
    }
  }; // Actually subscribe to the nearest connected ancestor (or store)


  subscription.onStateChange = checkForUpdates;
  subscription.trySubscribe(); // Pull data from the store after first render in case the store has
  // changed since we began.

  checkForUpdates();

  var unsubscribeWrapper = function unsubscribeWrapper() {
    didUnsubscribe = true;
    subscription.tryUnsubscribe();
    subscription.onStateChange = null;

    if (lastThrownError) {
      // It's possible that we caught an error due to a bad mapState function, but the
      // parent re-rendered without this component and we're about to unmount.
      // This shouldn't happen as long as we do top-down subscriptions correctly, but
      // if we ever do those wrong, this throw will surface the error in our tests.
      // In that case, throw the error from here so it doesn't get lost.
      throw lastThrownError;
    }
  };

  return unsubscribeWrapper;
}

var initStateUpdates = function initStateUpdates() {
  return [null, 0];
};

function connectAdvanced(
/*
  selectorFactory is a func that is responsible for returning the selector function used to
  compute new props from state, props, and dispatch. For example:
      export default connectAdvanced((dispatch, options) => (state, props) => ({
      thing: state.things[props.thingId],
      saveThing: fields => dispatch(actionCreators.saveThing(props.thingId, fields)),
    }))(YourComponent)
    Access to dispatch is provided to the factory so selectorFactories can bind actionCreators
  outside of their selector as an optimization. Options passed to connectAdvanced are passed to
  the selectorFactory, along with displayName and WrappedComponent, as the second argument.
    Note that selectorFactory is responsible for all caching/memoization of inbound and outbound
  props. Do not use connectAdvanced directly without memoizing results between calls to your
  selector, otherwise the Connect component will re-render on every state or props change.
*/
selectorFactory, // options object:
_ref) {
  if (_ref === void 0) {
    _ref = {};
  }

  var _ref2 = _ref,
      _ref2$getDisplayName = _ref2.getDisplayName,
      getDisplayName = _ref2$getDisplayName === void 0 ? function (name) {
    return "ConnectAdvanced(" + name + ")";
  } : _ref2$getDisplayName,
      _ref2$methodName = _ref2.methodName,
      methodName = _ref2$methodName === void 0 ? 'connectAdvanced' : _ref2$methodName,
      _ref2$renderCountProp = _ref2.renderCountProp,
      renderCountProp = _ref2$renderCountProp === void 0 ? undefined : _ref2$renderCountProp,
      _ref2$shouldHandleSta = _ref2.shouldHandleStateChanges,
      shouldHandleStateChanges = _ref2$shouldHandleSta === void 0 ? true : _ref2$shouldHandleSta,
      _ref2$storeKey = _ref2.storeKey,
      storeKey = _ref2$storeKey === void 0 ? 'store' : _ref2$storeKey,
      _ref2$withRef = _ref2.withRef,
      withRef = _ref2$withRef === void 0 ? false : _ref2$withRef,
      _ref2$forwardRef = _ref2.forwardRef,
      forwardRef = _ref2$forwardRef === void 0 ? false : _ref2$forwardRef,
      _ref2$context = _ref2.context,
      context = _ref2$context === void 0 ? __WEBPACK_IMPORTED_MODULE_7__Context__["a" /* ReactReduxContext */] : _ref2$context,
      connectOptions = Object(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_objectWithoutPropertiesLoose__["a" /* default */])(_ref2, _excluded);

  if (false) {
    if (renderCountProp !== undefined) {
      throw new Error("renderCountProp is removed. render counting is built into the latest React Dev Tools profiling extension");
    }

    if (withRef) {
      throw new Error('withRef is removed. To access the wrapped instance, use a ref on the connected component');
    }

    var customStoreWarningMessage = 'To use a custom Redux store for specific components, create a custom React context with ' + "React.createContext(), and pass the context object to React Redux's Provider and specific components" + ' like: <Provider context={MyContext}><ConnectedComponent context={MyContext} /></Provider>. ' + 'You may also pass a {context : MyContext} option to connect';

    if (storeKey !== 'store') {
      throw new Error('storeKey has been removed and does not do anything. ' + customStoreWarningMessage);
    }
  }

  var Context = context;
  return function wrapWithConnect(WrappedComponent) {
    if (false) {
      throw new Error("You must pass a component to the function returned by " + (methodName + ". Instead received " + stringifyComponent(WrappedComponent)));
    }

    var wrappedComponentName = WrappedComponent.displayName || WrappedComponent.name || 'Component';
    var displayName = getDisplayName(wrappedComponentName);

    var selectorFactoryOptions = Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__["a" /* default */])({}, connectOptions, {
      getDisplayName: getDisplayName,
      methodName: methodName,
      renderCountProp: renderCountProp,
      shouldHandleStateChanges: shouldHandleStateChanges,
      storeKey: storeKey,
      displayName: displayName,
      wrappedComponentName: wrappedComponentName,
      WrappedComponent: WrappedComponent
    });

    var pure = connectOptions.pure;

    function createChildSelector(store) {
      return selectorFactory(store.dispatch, selectorFactoryOptions);
    } // If we aren't running in "pure" mode, we don't want to memoize values.
    // To avoid conditionally calling hooks, we fall back to a tiny wrapper
    // that just executes the given callback immediately.


    var usePureOnlyMemo = pure ? __WEBPACK_IMPORTED_MODULE_3_react__["useMemo"] : function (callback) {
      return callback();
    };

    function ConnectFunction(props) {
      var _useMemo = Object(__WEBPACK_IMPORTED_MODULE_3_react__["useMemo"])(function () {
        // Distinguish between actual "data" props that were passed to the wrapper component,
        // and values needed to control behavior (forwarded refs, alternate context instances).
        // To maintain the wrapperProps object reference, memoize this destructuring.
        var reactReduxForwardedRef = props.reactReduxForwardedRef,
            wrapperProps = Object(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_objectWithoutPropertiesLoose__["a" /* default */])(props, _excluded2);

        return [props.context, reactReduxForwardedRef, wrapperProps];
      }, [props]),
          propsContext = _useMemo[0],
          reactReduxForwardedRef = _useMemo[1],
          wrapperProps = _useMemo[2];

      var ContextToUse = Object(__WEBPACK_IMPORTED_MODULE_3_react__["useMemo"])(function () {
        // Users may optionally pass in a custom context instance to use instead of our ReactReduxContext.
        // Memoize the check that determines which context instance we should use.
        return propsContext && propsContext.Consumer && Object(__WEBPACK_IMPORTED_MODULE_4_react_is__["isContextConsumer"])( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(propsContext.Consumer, null)) ? propsContext : Context;
      }, [propsContext, Context]); // Retrieve the store and ancestor subscription via context, if available

      var contextValue = Object(__WEBPACK_IMPORTED_MODULE_3_react__["useContext"])(ContextToUse); // The store _must_ exist as either a prop or in context.
      // We'll check to see if it _looks_ like a Redux store first.
      // This allows us to pass through a `store` prop that is just a plain value.

      var didStoreComeFromProps = Boolean(props.store) && Boolean(props.store.getState) && Boolean(props.store.dispatch);
      var didStoreComeFromContext = Boolean(contextValue) && Boolean(contextValue.store);

      if (false) {
        throw new Error("Could not find \"store\" in the context of " + ("\"" + displayName + "\". Either wrap the root component in a <Provider>, ") + "or pass a custom React context provider to <Provider> and the corresponding " + ("React context consumer to " + displayName + " in connect options."));
      } // Based on the previous check, one of these must be true


      var store = didStoreComeFromProps ? props.store : contextValue.store;
      var childPropsSelector = Object(__WEBPACK_IMPORTED_MODULE_3_react__["useMemo"])(function () {
        // The child props selector needs the store reference as an input.
        // Re-create this selector whenever the store changes.
        return createChildSelector(store);
      }, [store]);

      var _useMemo2 = Object(__WEBPACK_IMPORTED_MODULE_3_react__["useMemo"])(function () {
        if (!shouldHandleStateChanges) return NO_SUBSCRIPTION_ARRAY; // This Subscription's source should match where store came from: props vs. context. A component
        // connected to the store via props shouldn't use subscription from context, or vice versa.

        // This Subscription's source should match where store came from: props vs. context. A component
        // connected to the store via props shouldn't use subscription from context, or vice versa.
        var subscription = Object(__WEBPACK_IMPORTED_MODULE_5__utils_Subscription__["a" /* createSubscription */])(store, didStoreComeFromProps ? null : contextValue.subscription); // `notifyNestedSubs` is duplicated to handle the case where the component is unmounted in
        // the middle of the notification loop, where `subscription` will then be null. This can
        // probably be avoided if Subscription's listeners logic is changed to not call listeners
        // that have been unsubscribed in the  middle of the notification loop.

        // `notifyNestedSubs` is duplicated to handle the case where the component is unmounted in
        // the middle of the notification loop, where `subscription` will then be null. This can
        // probably be avoided if Subscription's listeners logic is changed to not call listeners
        // that have been unsubscribed in the  middle of the notification loop.
        var notifyNestedSubs = subscription.notifyNestedSubs.bind(subscription);
        return [subscription, notifyNestedSubs];
      }, [store, didStoreComeFromProps, contextValue]),
          subscription = _useMemo2[0],
          notifyNestedSubs = _useMemo2[1]; // Determine what {store, subscription} value should be put into nested context, if necessary,
      // and memoize that value to avoid unnecessary context updates.


      var overriddenContextValue = Object(__WEBPACK_IMPORTED_MODULE_3_react__["useMemo"])(function () {
        if (didStoreComeFromProps) {
          // This component is directly subscribed to a store from props.
          // We don't want descendants reading from this store - pass down whatever
          // the existing context value is from the nearest connected ancestor.
          return contextValue;
        } // Otherwise, put this component's subscription instance into context, so that
        // connected descendants won't update until after this component is done


        return Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__["a" /* default */])({}, contextValue, {
          subscription: subscription
        });
      }, [didStoreComeFromProps, contextValue, subscription]); // We need to force this wrapper component to re-render whenever a Redux store update
      // causes a change to the calculated child component props (or we caught an error in mapState)

      var _useReducer = Object(__WEBPACK_IMPORTED_MODULE_3_react__["useReducer"])(storeStateUpdatesReducer, EMPTY_ARRAY, initStateUpdates),
          _useReducer$ = _useReducer[0],
          previousStateUpdateResult = _useReducer$[0],
          forceComponentUpdateDispatch = _useReducer[1]; // Propagate any mapState/mapDispatch errors upwards


      if (previousStateUpdateResult && previousStateUpdateResult.error) {
        throw previousStateUpdateResult.error;
      } // Set up refs to coordinate values between the subscription effect and the render logic


      var lastChildProps = Object(__WEBPACK_IMPORTED_MODULE_3_react__["useRef"])();
      var lastWrapperProps = Object(__WEBPACK_IMPORTED_MODULE_3_react__["useRef"])(wrapperProps);
      var childPropsFromStoreUpdate = Object(__WEBPACK_IMPORTED_MODULE_3_react__["useRef"])();
      var renderIsScheduled = Object(__WEBPACK_IMPORTED_MODULE_3_react__["useRef"])(false);
      var actualChildProps = usePureOnlyMemo(function () {
        // Tricky logic here:
        // - This render may have been triggered by a Redux store update that produced new child props
        // - However, we may have gotten new wrapper props after that
        // If we have new child props, and the same wrapper props, we know we should use the new child props as-is.
        // But, if we have new wrapper props, those might change the child props, so we have to recalculate things.
        // So, we'll use the child props from store update only if the wrapper props are the same as last time.
        if (childPropsFromStoreUpdate.current && wrapperProps === lastWrapperProps.current) {
          return childPropsFromStoreUpdate.current;
        } // TODO We're reading the store directly in render() here. Bad idea?
        // This will likely cause Bad Things (TM) to happen in Concurrent Mode.
        // Note that we do this because on renders _not_ caused by store updates, we need the latest store state
        // to determine what the child props should be.


        return childPropsSelector(store.getState(), wrapperProps);
      }, [store, previousStateUpdateResult, wrapperProps]); // We need this to execute synchronously every time we re-render. However, React warns
      // about useLayoutEffect in SSR, so we try to detect environment and fall back to
      // just useEffect instead to avoid the warning, since neither will run anyway.

      useIsomorphicLayoutEffectWithArgs(captureWrapperProps, [lastWrapperProps, lastChildProps, renderIsScheduled, wrapperProps, actualChildProps, childPropsFromStoreUpdate, notifyNestedSubs]); // Our re-subscribe logic only runs when the store/subscription setup changes

      useIsomorphicLayoutEffectWithArgs(subscribeUpdates, [shouldHandleStateChanges, store, subscription, childPropsSelector, lastWrapperProps, lastChildProps, renderIsScheduled, childPropsFromStoreUpdate, notifyNestedSubs, forceComponentUpdateDispatch], [store, subscription, childPropsSelector]); // Now that all that's done, we can finally try to actually render the child component.
      // We memoize the elements for the rendered child component as an optimization.

      var renderedWrappedComponent = Object(__WEBPACK_IMPORTED_MODULE_3_react__["useMemo"])(function () {
        return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(WrappedComponent, Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__["a" /* default */])({}, actualChildProps, {
          ref: reactReduxForwardedRef
        }));
      }, [reactReduxForwardedRef, WrappedComponent, actualChildProps]); // If React sees the exact same element reference as last time, it bails out of re-rendering
      // that child, same as if it was wrapped in React.memo() or returned false from shouldComponentUpdate.

      var renderedChild = Object(__WEBPACK_IMPORTED_MODULE_3_react__["useMemo"])(function () {
        if (shouldHandleStateChanges) {
          // If this component is subscribed to store updates, we need to pass its own
          // subscription instance down to our descendants. That means rendering the same
          // Context instance, and putting a different value into the context.
          return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(ContextToUse.Provider, {
            value: overriddenContextValue
          }, renderedWrappedComponent);
        }

        return renderedWrappedComponent;
      }, [ContextToUse, renderedWrappedComponent, overriddenContextValue]);
      return renderedChild;
    } // If we're in "pure" mode, ensure our wrapper component only re-renders when incoming props have changed.


    var Connect = pure ? __WEBPACK_IMPORTED_MODULE_3_react___default.a.memo(ConnectFunction) : ConnectFunction;
    Connect.WrappedComponent = WrappedComponent;
    Connect.displayName = ConnectFunction.displayName = displayName;

    if (forwardRef) {
      var forwarded = __WEBPACK_IMPORTED_MODULE_3_react___default.a.forwardRef(function forwardConnectRef(props, ref) {
        return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(Connect, Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__["a" /* default */])({}, props, {
          reactReduxForwardedRef: ref
        }));
      });
      forwarded.displayName = displayName;
      forwarded.WrappedComponent = WrappedComponent;
      return __WEBPACK_IMPORTED_MODULE_2_hoist_non_react_statics___default()(forwarded, WrappedComponent);
    }

    return __WEBPACK_IMPORTED_MODULE_2_hoist_non_react_statics___default()(Connect, WrappedComponent);
  };
}

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__(161);
} else {
  module.exports = require('./cjs/react-is.development.js');
}


/***/ }),
/* 76 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = shallowEqual;
function is(x, y) {
  if (x === y) {
    return x !== 0 || y !== 0 || 1 / x === 1 / y;
  } else {
    return x !== x && y !== y;
  }
}

function shallowEqual(objA, objB) {
  if (is(objA, objB)) return true;

  if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);
  if (keysA.length !== keysB.length) return false;

  for (var i = 0; i < keysA.length; i++) {
    if (!Object.prototype.hasOwnProperty.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
      return false;
    }
  }

  return true;
}

/***/ }),
/* 77 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = wrapMapToPropsConstant;
/* unused harmony export getDependsOnOwnProps */
/* harmony export (immutable) */ __webpack_exports__["b"] = wrapMapToPropsFunc;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_verifyPlainObject__ = __webpack_require__(78);

function wrapMapToPropsConstant(getConstant) {
  return function initConstantSelector(dispatch, options) {
    var constant = getConstant(dispatch, options);

    function constantSelector() {
      return constant;
    }

    constantSelector.dependsOnOwnProps = false;
    return constantSelector;
  };
} // dependsOnOwnProps is used by createMapToPropsProxy to determine whether to pass props as args
// to the mapToProps function being wrapped. It is also used by makePurePropsSelector to determine
// whether mapToProps needs to be invoked when props have changed.
//
// A length of one signals that mapToProps does not depend on props from the parent component.
// A length of zero is assumed to mean mapToProps is getting args via arguments or ...args and
// therefore not reporting its length accurately..

function getDependsOnOwnProps(mapToProps) {
  return mapToProps.dependsOnOwnProps !== null && mapToProps.dependsOnOwnProps !== undefined ? Boolean(mapToProps.dependsOnOwnProps) : mapToProps.length !== 1;
} // Used by whenMapStateToPropsIsFunction and whenMapDispatchToPropsIsFunction,
// this function wraps mapToProps in a proxy function which does several things:
//
//  * Detects whether the mapToProps function being called depends on props, which
//    is used by selectorFactory to decide if it should reinvoke on props changes.
//
//  * On first call, handles mapToProps if returns another function, and treats that
//    new function as the true mapToProps for subsequent calls.
//
//  * On first call, verifies the first result is a plain object, in order to warn
//    the developer that their mapToProps function is not returning a valid result.
//

function wrapMapToPropsFunc(mapToProps, methodName) {
  return function initProxySelector(dispatch, _ref) {
    var displayName = _ref.displayName;

    var proxy = function mapToPropsProxy(stateOrDispatch, ownProps) {
      return proxy.dependsOnOwnProps ? proxy.mapToProps(stateOrDispatch, ownProps) : proxy.mapToProps(stateOrDispatch);
    }; // allow detectFactoryAndVerify to get ownProps


    proxy.dependsOnOwnProps = true;

    proxy.mapToProps = function detectFactoryAndVerify(stateOrDispatch, ownProps) {
      proxy.mapToProps = mapToProps;
      proxy.dependsOnOwnProps = getDependsOnOwnProps(mapToProps);
      var props = proxy(stateOrDispatch, ownProps);

      if (typeof props === 'function') {
        proxy.mapToProps = props;
        proxy.dependsOnOwnProps = getDependsOnOwnProps(props);
        props = proxy(stateOrDispatch, ownProps);
      }

      if (false) verifyPlainObject(props, displayName, methodName);
      return props;
    };

    return proxy;
  };
}

/***/ }),
/* 78 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__isPlainObject__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__warning__ = __webpack_require__(79);


function verifyPlainObject(value, displayName, methodName) {
  if (!Object(__WEBPACK_IMPORTED_MODULE_0__isPlainObject__["a" /* default */])(value)) {
    Object(__WEBPACK_IMPORTED_MODULE_1__warning__["a" /* default */])(methodName + "() in " + displayName + " must return a plain object. Instead received " + value + ".");
  }
}

/***/ }),
/* 79 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = warning;
/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */
function warning(message) {
  /* eslint-disable no-console */
  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error(message);
  }
  /* eslint-enable no-console */


  try {
    // This error was thrown as a convenience so that if you enable
    // "break on all exceptions" in your console,
    // it would pause the execution at this line.
    throw new Error(message);
    /* eslint-disable no-empty */
  } catch (e) {}
  /* eslint-enable no-empty */

}

/***/ }),
/* 80 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = createStoreHook;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return useStore; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Context__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__useReduxContext__ = __webpack_require__(81);



/**
 * Hook factory, which creates a `useStore` hook bound to a given context.
 *
 * @param {React.Context} [context=ReactReduxContext] Context passed to your `<Provider>`.
 * @returns {Function} A `useStore` hook bound to the specified context.
 */

function createStoreHook(context) {
  if (context === void 0) {
    context = __WEBPACK_IMPORTED_MODULE_1__components_Context__["a" /* ReactReduxContext */];
  }

  var useReduxContext = context === __WEBPACK_IMPORTED_MODULE_1__components_Context__["a" /* ReactReduxContext */] ? __WEBPACK_IMPORTED_MODULE_2__useReduxContext__["a" /* useReduxContext */] : function () {
    return Object(__WEBPACK_IMPORTED_MODULE_0_react__["useContext"])(context);
  };
  return function useStore() {
    var _useReduxContext = useReduxContext(),
        store = _useReduxContext.store;

    return store;
  };
}
/**
 * A hook to access the redux store.
 *
 * @returns {any} the redux store
 *
 * @example
 *
 * import React from 'react'
 * import { useStore } from 'react-redux'
 *
 * export const ExampleComponent = () => {
 *   const store = useStore()
 *   return <div>{store.getState()}</div>
 * }
 */

var useStore = /*#__PURE__*/createStoreHook();

/***/ }),
/* 81 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = useReduxContext;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Context__ = __webpack_require__(26);


/**
 * A hook to access the value of the `ReactReduxContext`. This is a low-level
 * hook that you should usually not need to call directly.
 *
 * @returns {any} the value of the `ReactReduxContext`
 *
 * @example
 *
 * import React from 'react'
 * import { useReduxContext } from 'react-redux'
 *
 * export const CounterComponent = ({ value }) => {
 *   const { store } = useReduxContext()
 *   return <div>{store.getState()}</div>
 * }
 */

function useReduxContext() {
  var contextValue = Object(__WEBPACK_IMPORTED_MODULE_0_react__["useContext"])(__WEBPACK_IMPORTED_MODULE_1__components_Context__["a" /* ReactReduxContext */]);

  if (false) {
    throw new Error('could not find react-redux context value; please ensure the component is wrapped in a <Provider>');
  }

  return contextValue;
}

/***/ }),
/* 82 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = createPersistoid;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(27);


// @TODO remove once flow < 0.63 support is no longer required.

function createPersistoid(config) {
  // defaults
  var blacklist = config.blacklist || null;
  var whitelist = config.whitelist || null;
  var transforms = config.transforms || [];
  var throttle = config.throttle || 0;
  var storageKey = '' + (config.keyPrefix !== undefined ? config.keyPrefix : __WEBPACK_IMPORTED_MODULE_0__constants__["c" /* KEY_PREFIX */]) + config.key;
  var storage = config.storage;
  var serialize = config.serialize === false ? function (x) {
    return x;
  } : defaultSerialize;

  // initialize stateful values
  var lastState = {};
  var stagedState = {};
  var keysToProcess = [];
  var timeIterator = null;
  var writePromise = null;

  var update = function update(state) {
    // add any changed keys to the queue
    Object.keys(state).forEach(function (key) {
      if (!passWhitelistBlacklist(key)) return; // is keyspace ignored? noop
      if (lastState[key] === state[key]) return; // value unchanged? noop
      if (keysToProcess.indexOf(key) !== -1) return; // is key already queued? noop
      keysToProcess.push(key); // add key to queue
    });

    //if any key is missing in the new state which was present in the lastState,
    //add it for processing too
    Object.keys(lastState).forEach(function (key) {
      if (state[key] === undefined) {
        keysToProcess.push(key);
      }
    });

    // start the time iterator if not running (read: throttle)
    if (timeIterator === null) {
      timeIterator = setInterval(processNextKey, throttle);
    }

    lastState = state;
  };

  function processNextKey() {
    if (keysToProcess.length === 0) {
      if (timeIterator) clearInterval(timeIterator);
      timeIterator = null;
      return;
    }

    var key = keysToProcess.shift();
    var endState = transforms.reduce(function (subState, transformer) {
      return transformer.in(subState, key, lastState);
    }, lastState[key]);

    if (endState !== undefined) {
      try {
        stagedState[key] = serialize(endState);
      } catch (err) {
        console.error('redux-persist/createPersistoid: error serializing state', err);
      }
    } else {
      //if the endState is undefined, no need to persist the existing serialized content
      delete stagedState[key];
    }

    if (keysToProcess.length === 0) {
      writeStagedState();
    }
  }

  function writeStagedState() {
    // cleanup any removed keys just before write.
    Object.keys(stagedState).forEach(function (key) {
      if (lastState[key] === undefined) {
        delete stagedState[key];
      }
    });

    writePromise = storage.setItem(storageKey, serialize(stagedState)).catch(onWriteFail);
  }

  function passWhitelistBlacklist(key) {
    if (whitelist && whitelist.indexOf(key) === -1 && key !== '_persist') return false;
    if (blacklist && blacklist.indexOf(key) !== -1) return false;
    return true;
  }

  function onWriteFail(err) {
    // @TODO add fail handlers (typically storage full)
    if (err && "production" !== 'production') {
      console.error('Error storing data', err);
    }
  }

  var flush = function flush() {
    while (keysToProcess.length !== 0) {
      processNextKey();
    }
    return writePromise || Promise.resolve();
  };

  // return `persistoid`
  return {
    update: update,
    flush: flush
  };
}

// @NOTE in the future this may be exposed via config
function defaultSerialize(data) {
  return JSON.stringify(data);
}

/***/ }),
/* 83 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getStoredState;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(27);




function getStoredState(config) {
  var transforms = config.transforms || [];
  var storageKey = '' + (config.keyPrefix !== undefined ? config.keyPrefix : __WEBPACK_IMPORTED_MODULE_0__constants__["c" /* KEY_PREFIX */]) + config.key;
  var storage = config.storage;
  var debug = config.debug;
  var deserialize = config.serialize === false ? function (x) {
    return x;
  } : defaultDeserialize;
  return storage.getItem(storageKey).then(function (serialized) {
    if (!serialized) return undefined;else {
      try {
        var state = {};
        var rawState = deserialize(serialized);
        Object.keys(rawState).forEach(function (key) {
          state[key] = transforms.reduceRight(function (subState, transformer) {
            return transformer.out(subState, key, rawState);
          }, deserialize(rawState[key]));
        });
        return state;
      } catch (err) {
        if (false) console.log('redux-persist/getStoredState: Error restoring data ' + serialized, err);
        throw err;
      }
    }
  });
}

function defaultDeserialize(serial) {
  return JSON.parse(serial);
}

/***/ }),
/* 84 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = purgeStoredState;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(27);




function purgeStoredState(config) {
  var storage = config.storage;
  var storageKey = '' + (config.keyPrefix !== undefined ? config.keyPrefix : __WEBPACK_IMPORTED_MODULE_0__constants__["c" /* KEY_PREFIX */]) + config.key;
  return storage.removeItem(storageKey, warnIfRemoveError);
}

function warnIfRemoveError(err) {
  if (err && "production" !== 'production') {
    console.error('redux-persist/purgeStoredState: Error purging data stored state', err);
  }
}

/***/ }),
/* 85 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Bounce */
/* unused harmony export Flip */
/* unused harmony export Icons */
/* unused harmony export Slide */
/* unused harmony export ToastContainer */
/* unused harmony export Zoom */
/* unused harmony export collapseToast */
/* unused harmony export cssTransition */
/* unused harmony export toast */
/* unused harmony export useToast */
/* unused harmony export useToastContainer */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_clsx__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_dom__);




function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function isNum(v) {
  return typeof v === 'number' && !isNaN(v);
}
function isBool(v) {
  return typeof v === 'boolean';
}
function isStr(v) {
  return typeof v === 'string';
}
function isFn(v) {
  return typeof v === 'function';
}
function parseClassName(v) {
  return isStr(v) || isFn(v) ? v : null;
}
function isToastIdValid(toastId) {
  return toastId === 0 || toastId;
}
function getAutoCloseDelay(toastAutoClose, containerAutoClose) {
  return toastAutoClose === false || isNum(toastAutoClose) && toastAutoClose > 0 ? toastAutoClose : containerAutoClose;
}
var canUseDom = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
function canBeRendered(content) {
  return Object(__WEBPACK_IMPORTED_MODULE_0_react__["isValidElement"])(content) || isStr(content) || isFn(content) || isNum(content);
}

var POSITION = {
  TOP_LEFT: 'top-left',
  TOP_RIGHT: 'top-right',
  TOP_CENTER: 'top-center',
  BOTTOM_LEFT: 'bottom-left',
  BOTTOM_RIGHT: 'bottom-right',
  BOTTOM_CENTER: 'bottom-center'
};
var TYPE = {
  INFO: 'info',
  SUCCESS: 'success',
  WARNING: 'warning',
  ERROR: 'error',
  DEFAULT: 'default'
};

/**
 * Used to collapse toast after exit animation
 */
function collapseToast(node, done, duration
/* COLLAPSE_DURATION */
) {
  if (duration === void 0) {
    duration = 300;
  }

  var scrollHeight = node.scrollHeight,
      style = node.style;
  requestAnimationFrame(function () {
    style.minHeight = 'initial';
    style.height = scrollHeight + 'px';
    style.transition = "all " + duration + "ms";
    requestAnimationFrame(function () {
      style.height = '0';
      style.padding = '0';
      style.margin = '0';
      setTimeout(done, duration);
    });
  });
}

/**
 * Css animation that just work.
 * You could use animate.css for instance
 *
 *
 * ```
 * cssTransition({
 *   enter: "animate__animated animate__bounceIn",
 *   exit: "animate__animated animate__bounceOut"
 * })
 * ```
 *
 */

function cssTransition(_ref) {
  var enter = _ref.enter,
      exit = _ref.exit,
      _ref$appendPosition = _ref.appendPosition,
      appendPosition = _ref$appendPosition === void 0 ? false : _ref$appendPosition,
      _ref$collapse = _ref.collapse,
      collapse = _ref$collapse === void 0 ? true : _ref$collapse,
      _ref$collapseDuration = _ref.collapseDuration,
      collapseDuration = _ref$collapseDuration === void 0 ? 300 : _ref$collapseDuration;
  return function ToastTransition(_ref2) {
    var children = _ref2.children,
        position = _ref2.position,
        preventExitTransition = _ref2.preventExitTransition,
        done = _ref2.done,
        nodeRef = _ref2.nodeRef,
        isIn = _ref2.isIn;
    var enterClassName = appendPosition ? enter + "--" + position : enter;
    var exitClassName = appendPosition ? exit + "--" + position : exit;
    var baseClassName = Object(__WEBPACK_IMPORTED_MODULE_0_react__["useRef"])();
    var animationStep = Object(__WEBPACK_IMPORTED_MODULE_0_react__["useRef"])(0
    /* Enter */
    );
    Object(__WEBPACK_IMPORTED_MODULE_0_react__["useLayoutEffect"])(function () {
      onEnter();
    }, []);
    Object(__WEBPACK_IMPORTED_MODULE_0_react__["useEffect"])(function () {
      if (!isIn) preventExitTransition ? onExited() : onExit();
    }, [isIn]);

    function onEnter() {
      var node = nodeRef.current;
      baseClassName.current = node.className;
      node.className += " " + enterClassName;
      node.addEventListener('animationend', onEntered);
    }

    function onEntered(e) {
      if (e.target !== nodeRef.current) return;
      var node = nodeRef.current;
      node.removeEventListener('animationend', onEntered);

      if (animationStep.current === 0
      /* Enter */
      ) {
          node.className = baseClassName.current;
        }
    }

    function onExit() {
      animationStep.current = 1
      /* Exit */
      ;
      var node = nodeRef.current;
      node.className += " " + exitClassName;
      node.addEventListener('animationend', onExited);
    }

    function onExited() {
      var node = nodeRef.current;
      node.removeEventListener('animationend', onExited);
      collapse ? collapseToast(node, done, collapseDuration) : done();
    }

    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Fragment, null, children);
  };
}

var eventManager = {
  list: /*#__PURE__*/new Map(),
  emitQueue: /*#__PURE__*/new Map(),
  on: function on(event, callback) {
    this.list.has(event) || this.list.set(event, []);
    this.list.get(event).push(callback);
    return this;
  },
  off: function off(event, callback) {
    if (callback) {
      var cb = this.list.get(event).filter(function (cb) {
        return cb !== callback;
      });
      this.list.set(event, cb);
      return this;
    }

    this.list["delete"](event);
    return this;
  },
  cancelEmit: function cancelEmit(event) {
    var timers = this.emitQueue.get(event);

    if (timers) {
      timers.forEach(clearTimeout);
      this.emitQueue["delete"](event);
    }

    return this;
  },

  /**
   * Enqueue the event at the end of the call stack
   * Doing so let the user call toast as follow:
   * toast('1')
   * toast('2')
   * toast('3')
   * Without setTimemout the code above will not work
   */
  emit: function emit(event) {
    var _this = this;

    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    this.list.has(event) && this.list.get(event).forEach(function (callback) {
      var timer = setTimeout(function () {
        // @ts-ignore
        callback.apply(void 0, args);
      }, 0);
      _this.emitQueue.has(event) || _this.emitQueue.set(event, []);

      _this.emitQueue.get(event).push(timer);
    });
  }
};

/**
 * `useKeeper` is a helper around `useRef`.
 *
 * You don't need to access the `.current`property to get the value
 * If refresh is set to true. The ref will be updated every render
 */

function useKeeper(arg, refresh) {
  if (refresh === void 0) {
    refresh = false;
  }

  var ref = Object(__WEBPACK_IMPORTED_MODULE_0_react__["useRef"])(arg);
  Object(__WEBPACK_IMPORTED_MODULE_0_react__["useEffect"])(function () {
    if (refresh) ref.current = arg;
  });
  return ref.current;
}

function reducer(state, action) {
  switch (action.type) {
    case 0
    /* ADD */
    :
      return [].concat(state, [action.toastId]).filter(function (id) {
        return id !== action.staleId;
      });

    case 1
    /* REMOVE */
    :
      return isToastIdValid(action.toastId) ? state.filter(function (id) {
        return id !== action.toastId;
      }) : [];
  }
}

var _excluded = ["delay", "staleId"];
function useToastContainer(props) {
  var _useReducer = Object(__WEBPACK_IMPORTED_MODULE_0_react__["useReducer"])(function (x) {
    return x + 1;
  }, 0),
      forceUpdate = _useReducer[1];

  var _useReducer2 = Object(__WEBPACK_IMPORTED_MODULE_0_react__["useReducer"])(reducer, []),
      toast = _useReducer2[0],
      dispatch = _useReducer2[1];

  var containerRef = Object(__WEBPACK_IMPORTED_MODULE_0_react__["useRef"])(null);
  var toastCount = useKeeper(0);
  var queue = useKeeper([]);
  var collection = useKeeper({});
  var instance = useKeeper({
    toastKey: 1,
    displayedToast: 0,
    props: props,
    containerId: null,
    isToastActive: isToastActive,
    getToast: function getToast(id) {
      return collection[id] || null;
    }
  });
  Object(__WEBPACK_IMPORTED_MODULE_0_react__["useEffect"])(function () {
    instance.containerId = props.containerId;
    eventManager.cancelEmit(3
    /* WillUnmount */
    ).on(0
    /* Show */
    , buildToast).on(1
    /* Clear */
    , function (toastId) {
      return containerRef.current && removeToast(toastId);
    }).on(5
    /* ClearWaitingQueue */
    , clearWaitingQueue).emit(2
    /* DidMount */
    , instance);
    return function () {
      return eventManager.emit(3
      /* WillUnmount */
      , instance);
    };
  }, []);
  Object(__WEBPACK_IMPORTED_MODULE_0_react__["useEffect"])(function () {
    instance.isToastActive = isToastActive;
    instance.displayedToast = toast.length;
    eventManager.emit(4
    /* Change */
    , toast.length, props.containerId);
  }, [toast]);
  Object(__WEBPACK_IMPORTED_MODULE_0_react__["useEffect"])(function () {
    instance.props = props;
  });

  function isToastActive(id) {
    return toast.indexOf(id) !== -1;
  }

  function clearWaitingQueue(_ref) {
    var containerId = _ref.containerId;
    var limit = instance.props.limit;

    if (limit && (!containerId || instance.containerId === containerId)) {
      toastCount -= queue.length;
      queue = [];
    }
  }

  function removeToast(toastId) {
    dispatch({
      type: 1
      /* REMOVE */
      ,
      toastId: toastId
    });
  }

  function dequeueToast() {
    var _queue$shift = queue.shift(),
        toastContent = _queue$shift.toastContent,
        toastProps = _queue$shift.toastProps,
        staleId = _queue$shift.staleId;

    appendToast(toastContent, toastProps, staleId);
  }
  /**
   * check if a container is attached to the dom
   * check for multi-container, build only if associated
   * check for duplicate toastId if no update
   */


  function isNotValid(_ref2) {
    var containerId = _ref2.containerId,
        toastId = _ref2.toastId,
        updateId = _ref2.updateId;
    return !containerRef.current || instance.props.enableMultiContainer && containerId !== instance.props.containerId || collection[toastId] && updateId == null ? true : false;
  } // this function and all the function called inside needs to rely on ref(`useKeeper`)


  function buildToast(content, _ref3) {
    var _options$icon;

    var delay = _ref3.delay,
        staleId = _ref3.staleId,
        options = _objectWithoutPropertiesLoose(_ref3, _excluded);

    if (!canBeRendered(content) || isNotValid(options)) return;
    var toastId = options.toastId,
        updateId = options.updateId,
        data = options.data;
    var props = instance.props;

    var closeToast = function closeToast() {
      return removeToast(toastId);
    };

    var isNotAnUpdate = options.updateId == null;
    if (isNotAnUpdate) toastCount++;
    var toastProps = {
      toastId: toastId,
      updateId: updateId,
      isLoading: options.isLoading,
      theme: options.theme || props.theme,
      icon: (_options$icon = options.icon) != null ? _options$icon : props.icon,
      isIn: false,
      key: options.key || instance.toastKey++,
      type: options.type,
      closeToast: closeToast,
      closeButton: options.closeButton,
      rtl: props.rtl,
      position: options.position || props.position,
      transition: options.transition || props.transition,
      className: parseClassName(options.className || props.toastClassName),
      bodyClassName: parseClassName(options.bodyClassName || props.bodyClassName),
      style: options.style || props.toastStyle,
      bodyStyle: options.bodyStyle || props.bodyStyle,
      onClick: options.onClick || props.onClick,
      pauseOnHover: isBool(options.pauseOnHover) ? options.pauseOnHover : props.pauseOnHover,
      pauseOnFocusLoss: isBool(options.pauseOnFocusLoss) ? options.pauseOnFocusLoss : props.pauseOnFocusLoss,
      draggable: isBool(options.draggable) ? options.draggable : props.draggable,
      draggablePercent: isNum(options.draggablePercent) ? options.draggablePercent : props.draggablePercent,
      draggableDirection: options.draggableDirection || props.draggableDirection,
      closeOnClick: isBool(options.closeOnClick) ? options.closeOnClick : props.closeOnClick,
      progressClassName: parseClassName(options.progressClassName || props.progressClassName),
      progressStyle: options.progressStyle || props.progressStyle,
      autoClose: options.isLoading ? false : getAutoCloseDelay(options.autoClose, props.autoClose),
      hideProgressBar: isBool(options.hideProgressBar) ? options.hideProgressBar : props.hideProgressBar,
      progress: options.progress,
      role: isStr(options.role) ? options.role : props.role,
      deleteToast: function deleteToast() {
        removeFromCollection(toastId);
      }
    };
    if (isFn(options.onOpen)) toastProps.onOpen = options.onOpen;
    if (isFn(options.onClose)) toastProps.onClose = options.onClose; //  tweak for vertical dragging

    if (toastProps.draggableDirection === "y"
    /* Y */
    && toastProps.draggablePercent === 80
    /* DRAGGABLE_PERCENT */
    ) {
        toastProps.draggablePercent *= 1.5;
      }

    var closeButton = props.closeButton;

    if (options.closeButton === false || canBeRendered(options.closeButton)) {
      closeButton = options.closeButton;
    } else if (options.closeButton === true) {
      closeButton = canBeRendered(props.closeButton) ? props.closeButton : true;
    }

    toastProps.closeButton = closeButton;
    var toastContent = content;

    if (Object(__WEBPACK_IMPORTED_MODULE_0_react__["isValidElement"])(content) && !isStr(content.type)) {
      toastContent = Object(__WEBPACK_IMPORTED_MODULE_0_react__["cloneElement"])(content, {
        closeToast: closeToast,
        toastProps: toastProps,
        data: data
      });
    } else if (isFn(content)) {
      toastContent = content({
        closeToast: closeToast,
        toastProps: toastProps,
        data: data
      });
    } // not handling limit + delay by design. Waiting for user feedback first


    if (props.limit && props.limit > 0 && toastCount > props.limit && isNotAnUpdate) {
      queue.push({
        toastContent: toastContent,
        toastProps: toastProps,
        staleId: staleId
      });
    } else if (isNum(delay) && delay > 0) {
      setTimeout(function () {
        appendToast(toastContent, toastProps, staleId);
      }, delay);
    } else {
      appendToast(toastContent, toastProps, staleId);
    }
  }

  function appendToast(content, toastProps, staleId) {
    var toastId = toastProps.toastId;
    if (staleId) delete collection[staleId];
    collection[toastId] = {
      content: content,
      props: toastProps
    };
    dispatch({
      type: 0
      /* ADD */
      ,
      toastId: toastId,
      staleId: staleId
    });
  }

  function removeFromCollection(toastId) {
    delete collection[toastId];
    var queueLen = queue.length;
    toastCount = isToastIdValid(toastId) ? toastCount - 1 : toastCount - instance.displayedToast;
    if (toastCount < 0) toastCount = 0;

    if (queueLen > 0) {
      var freeSlot = isToastIdValid(toastId) ? 1 : instance.props.limit;

      if (queueLen === 1 || freeSlot === 1) {
        instance.displayedToast++;
        dequeueToast();
      } else {
        var toDequeue = freeSlot > queueLen ? queueLen : freeSlot;
        instance.displayedToast = toDequeue;

        for (var i = 0; i < toDequeue; i++) {
          dequeueToast();
        }
      }
    } else {
      forceUpdate();
    }
  }

  function getToastToRender(cb) {
    var toastToRender = {};
    var toastList = props.newestOnTop ? Object.keys(collection).reverse() : Object.keys(collection);

    for (var i = 0; i < toastList.length; i++) {
      var _toast = collection[toastList[i]];
      var position = _toast.props.position;
      toastToRender[position] || (toastToRender[position] = []);
      toastToRender[position].push(_toast);
    }

    return Object.keys(toastToRender).map(function (p) {
      return cb(p, toastToRender[p]);
    });
  }

  return {
    getToastToRender: getToastToRender,
    collection: collection,
    containerRef: containerRef,
    isToastActive: isToastActive
  };
}

function getX(e) {
  return e.targetTouches && e.targetTouches.length >= 1 ? e.targetTouches[0].clientX : e.clientX;
}

function getY(e) {
  return e.targetTouches && e.targetTouches.length >= 1 ? e.targetTouches[0].clientY : e.clientY;
}

function useToast(props) {
  var _useState = Object(__WEBPACK_IMPORTED_MODULE_0_react__["useState"])(true),
      isRunning = _useState[0],
      setIsRunning = _useState[1];

  var _useState2 = Object(__WEBPACK_IMPORTED_MODULE_0_react__["useState"])(false),
      preventExitTransition = _useState2[0],
      setPreventExitTransition = _useState2[1];

  var toastRef = Object(__WEBPACK_IMPORTED_MODULE_0_react__["useRef"])(null);
  var drag = useKeeper({
    start: 0,
    x: 0,
    y: 0,
    delta: 0,
    removalDistance: 0,
    canCloseOnClick: true,
    canDrag: false,
    boundingRect: null
  });
  var syncProps = useKeeper(props, true);
  var autoClose = props.autoClose,
      pauseOnHover = props.pauseOnHover,
      closeToast = props.closeToast,
      onClick = props.onClick,
      closeOnClick = props.closeOnClick;
  Object(__WEBPACK_IMPORTED_MODULE_0_react__["useEffect"])(function () {
    if (isFn(props.onOpen)) props.onOpen(Object(__WEBPACK_IMPORTED_MODULE_0_react__["isValidElement"])(props.children) && props.children.props);
    return function () {
      if (isFn(syncProps.onClose)) syncProps.onClose(Object(__WEBPACK_IMPORTED_MODULE_0_react__["isValidElement"])(syncProps.children) && syncProps.children.props);
    };
  }, []);
  Object(__WEBPACK_IMPORTED_MODULE_0_react__["useEffect"])(function () {
    props.draggable && bindDragEvents();
    return function () {
      props.draggable && unbindDragEvents();
    };
  }, [props.draggable]);
  Object(__WEBPACK_IMPORTED_MODULE_0_react__["useEffect"])(function () {
    props.pauseOnFocusLoss && bindFocusEvents();
    return function () {
      props.pauseOnFocusLoss && unbindFocusEvents();
    };
  }, [props.pauseOnFocusLoss]);

  function onDragStart(e) {
    if (props.draggable) {
      var toast = toastRef.current;
      drag.canCloseOnClick = true;
      drag.canDrag = true;
      drag.boundingRect = toast.getBoundingClientRect();
      toast.style.transition = '';
      drag.x = getX(e.nativeEvent);
      drag.y = getY(e.nativeEvent);

      if (props.draggableDirection === "x"
      /* X */
      ) {
          drag.start = drag.x;
          drag.removalDistance = toast.offsetWidth * (props.draggablePercent / 100);
        } else {
        drag.start = drag.y;
        drag.removalDistance = toast.offsetHeight * (props.draggablePercent / 100);
      }
    }
  }

  function onDragTransitionEnd() {
    if (drag.boundingRect) {
      var _drag$boundingRect = drag.boundingRect,
          top = _drag$boundingRect.top,
          bottom = _drag$boundingRect.bottom,
          left = _drag$boundingRect.left,
          right = _drag$boundingRect.right;

      if (props.pauseOnHover && drag.x >= left && drag.x <= right && drag.y >= top && drag.y <= bottom) {
        pauseToast();
      } else {
        playToast();
      }
    }
  }

  function playToast() {
    setIsRunning(true);
  }

  function pauseToast() {
    setIsRunning(false);
  }

  function bindFocusEvents() {
    if (!document.hasFocus()) pauseToast();
    window.addEventListener('focus', playToast);
    window.addEventListener('blur', pauseToast);
  }

  function unbindFocusEvents() {
    window.removeEventListener('focus', playToast);
    window.removeEventListener('blur', pauseToast);
  }

  function bindDragEvents() {
    document.addEventListener('mousemove', onDragMove);
    document.addEventListener('mouseup', onDragEnd);
    document.addEventListener('touchmove', onDragMove);
    document.addEventListener('touchend', onDragEnd);
  }

  function unbindDragEvents() {
    document.removeEventListener('mousemove', onDragMove);
    document.removeEventListener('mouseup', onDragEnd);
    document.removeEventListener('touchmove', onDragMove);
    document.removeEventListener('touchend', onDragEnd);
  }

  function onDragMove(e) {
    if (drag.canDrag) {
      e.preventDefault();
      var toast = toastRef.current;
      if (isRunning) pauseToast();
      drag.x = getX(e);
      drag.y = getY(e);

      if (props.draggableDirection === "x"
      /* X */
      ) {
          drag.delta = drag.x - drag.start;
        } else {
        drag.delta = drag.y - drag.start;
      } // prevent false positif during a toast click


      if (drag.start !== drag.x) drag.canCloseOnClick = false;
      toast.style.transform = "translate" + props.draggableDirection + "(" + drag.delta + "px)";
      toast.style.opacity = "" + (1 - Math.abs(drag.delta / drag.removalDistance));
    }
  }

  function onDragEnd() {
    var toast = toastRef.current;

    if (drag.canDrag) {
      drag.canDrag = false;

      if (Math.abs(drag.delta) > drag.removalDistance) {
        setPreventExitTransition(true);
        props.closeToast();
        return;
      }

      toast.style.transition = 'transform 0.2s, opacity 0.2s';
      toast.style.transform = "translate" + props.draggableDirection + "(0)";
      toast.style.opacity = '1';
    }
  }

  var eventHandlers = {
    onMouseDown: onDragStart,
    onTouchStart: onDragStart,
    onMouseUp: onDragTransitionEnd,
    onTouchEnd: onDragTransitionEnd
  };

  if (autoClose && pauseOnHover) {
    eventHandlers.onMouseEnter = pauseToast;
    eventHandlers.onMouseLeave = playToast;
  } // prevent toast from closing when user drags the toast


  if (closeOnClick) {
    eventHandlers.onClick = function (e) {
      onClick && onClick(e);
      drag.canCloseOnClick && closeToast();
    };
  }

  return {
    playToast: playToast,
    pauseToast: pauseToast,
    isRunning: isRunning,
    preventExitTransition: preventExitTransition,
    toastRef: toastRef,
    eventHandlers: eventHandlers
  };
}

function CloseButton(_ref) {
  var closeToast = _ref.closeToast,
      theme = _ref.theme,
      _ref$ariaLabel = _ref.ariaLabel,
      ariaLabel = _ref$ariaLabel === void 0 ? 'close' : _ref$ariaLabel;
  return Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])("button", {
    className: "Toastify"
    /* CSS_NAMESPACE */
    + "__close-button " + "Toastify"
    /* CSS_NAMESPACE */
    + "__close-button--" + theme,
    type: "button",
    onClick: function onClick(e) {
      e.stopPropagation();
      closeToast(e);
    },
    "aria-label": ariaLabel
  }, Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])("svg", {
    "aria-hidden": "true",
    viewBox: "0 0 14 16"
  }, Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])("path", {
    fillRule: "evenodd",
    d: "M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"
  })));
}

function ProgressBar(_ref) {
  var _cx, _animationEvent;

  var delay = _ref.delay,
      isRunning = _ref.isRunning,
      closeToast = _ref.closeToast,
      type = _ref.type,
      hide = _ref.hide,
      className = _ref.className,
      userStyle = _ref.style,
      controlledProgress = _ref.controlledProgress,
      progress = _ref.progress,
      rtl = _ref.rtl,
      isIn = _ref.isIn,
      theme = _ref.theme;

  var style = _extends({}, userStyle, {
    animationDuration: delay + "ms",
    animationPlayState: isRunning ? 'running' : 'paused',
    opacity: hide ? 0 : 1
  });

  if (controlledProgress) style.transform = "scaleX(" + progress + ")";
  var defaultClassName = Object(__WEBPACK_IMPORTED_MODULE_1_clsx__["a" /* default */])("Toastify"
  /* CSS_NAMESPACE */
  + "__progress-bar", controlledProgress ? "Toastify"
  /* CSS_NAMESPACE */
  + "__progress-bar--controlled" : "Toastify"
  /* CSS_NAMESPACE */
  + "__progress-bar--animated", "Toastify"
  /* CSS_NAMESPACE */
  + "__progress-bar-theme--" + theme, "Toastify"
  /* CSS_NAMESPACE */
  + "__progress-bar--" + type, (_cx = {}, _cx["Toastify"
  /* CSS_NAMESPACE */
  + "__progress-bar--rtl"] = rtl, _cx));
  var classNames = isFn(className) ? className({
    rtl: rtl,
    type: type,
    defaultClassName: defaultClassName
  }) : Object(__WEBPACK_IMPORTED_MODULE_1_clsx__["a" /* default */])(defaultClassName, className); // 🧐 controlledProgress is derived from progress
  // so if controlledProgress is set
  // it means that this is also the case for progress

  var animationEvent = (_animationEvent = {}, _animationEvent[controlledProgress && progress >= 1 ? 'onTransitionEnd' : 'onAnimationEnd'] = controlledProgress && progress < 1 ? null : function () {
    isIn && closeToast();
  }, _animationEvent); // TODO: add aria-valuenow, aria-valuemax, aria-valuemin

  return Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])("div", Object.assign({
    role: "progressbar",
    "aria-hidden": hide ? 'true' : 'false',
    "aria-label": "notification timer",
    className: classNames,
    style: style
  }, animationEvent));
}
ProgressBar.defaultProps = {
  type: TYPE.DEFAULT,
  hide: false
};

var _excluded$1 = ["theme", "type"];

var Svg = function Svg(_ref) {
  var theme = _ref.theme,
      type = _ref.type,
      rest = _objectWithoutPropertiesLoose(_ref, _excluded$1);

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("svg", Object.assign({
    viewBox: "0 0 24 24",
    width: "100%",
    height: "100%",
    fill: theme === 'colored' ? 'currentColor' : "var(--toastify-icon-color-" + type + ")"
  }, rest));
};

function Warning(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Svg, Object.assign({}, props), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", {
    d: "M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"
  }));
}

function Info(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Svg, Object.assign({}, props), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", {
    d: "M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"
  }));
}

function Success(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Svg, Object.assign({}, props), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", {
    d: "M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"
  }));
}

function Error(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Svg, Object.assign({}, props), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", {
    d: "M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"
  }));
}

function Spinner() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "Toastify"
    /* CSS_NAMESPACE */
    + "__spinner"
  });
}

var Icons = {
  info: Info,
  warning: Warning,
  success: Success,
  error: Error,
  spinner: Spinner
};

var Toast = function Toast(props) {
  var _cx, _cx2;

  var _useToast = useToast(props),
      isRunning = _useToast.isRunning,
      preventExitTransition = _useToast.preventExitTransition,
      toastRef = _useToast.toastRef,
      eventHandlers = _useToast.eventHandlers;

  var closeButton = props.closeButton,
      children = props.children,
      autoClose = props.autoClose,
      onClick = props.onClick,
      type = props.type,
      hideProgressBar = props.hideProgressBar,
      closeToast = props.closeToast,
      Transition = props.transition,
      position = props.position,
      className = props.className,
      style = props.style,
      bodyClassName = props.bodyClassName,
      bodyStyle = props.bodyStyle,
      progressClassName = props.progressClassName,
      progressStyle = props.progressStyle,
      updateId = props.updateId,
      role = props.role,
      progress = props.progress,
      rtl = props.rtl,
      toastId = props.toastId,
      deleteToast = props.deleteToast,
      isIn = props.isIn,
      isLoading = props.isLoading,
      icon = props.icon,
      theme = props.theme;
  var defaultClassName = Object(__WEBPACK_IMPORTED_MODULE_1_clsx__["a" /* default */])("Toastify"
  /* CSS_NAMESPACE */
  + "__toast", "Toastify"
  /* CSS_NAMESPACE */
  + "__toast-theme--" + theme, "Toastify"
  /* CSS_NAMESPACE */
  + "__toast--" + type, (_cx = {}, _cx["Toastify"
  /* CSS_NAMESPACE */
  + "__toast--rtl"] = rtl, _cx));
  var cssClasses = isFn(className) ? className({
    rtl: rtl,
    position: position,
    type: type,
    defaultClassName: defaultClassName
  }) : Object(__WEBPACK_IMPORTED_MODULE_1_clsx__["a" /* default */])(defaultClassName, className);
  var isProgressControlled = !!progress;
  var maybeIcon = Icons[type];
  var iconProps = {
    theme: theme,
    type: type
  };
  var Icon = maybeIcon && maybeIcon(iconProps);

  if (icon === false) {
    Icon = void 0;
  } else if (isFn(icon)) {
    Icon = icon(iconProps);
  } else if (Object(__WEBPACK_IMPORTED_MODULE_0_react__["isValidElement"])(icon)) {
    Icon = Object(__WEBPACK_IMPORTED_MODULE_0_react__["cloneElement"])(icon, iconProps);
  } else if (isStr(icon)) {
    Icon = icon;
  } else if (isLoading) {
    Icon = Icons.spinner();
  }

  function renderCloseButton(closeButton) {
    if (!closeButton) return;
    var props = {
      closeToast: closeToast,
      type: type,
      theme: theme
    };
    if (isFn(closeButton)) return closeButton(props);
    if (Object(__WEBPACK_IMPORTED_MODULE_0_react__["isValidElement"])(closeButton)) return Object(__WEBPACK_IMPORTED_MODULE_0_react__["cloneElement"])(closeButton, props);
  }

  return Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(Transition, {
    isIn: isIn,
    done: deleteToast,
    position: position,
    preventExitTransition: preventExitTransition,
    nodeRef: toastRef
  }, Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])("div", Object.assign({
    id: toastId,
    onClick: onClick,
    className: cssClasses
  }, eventHandlers, {
    style: style,
    ref: toastRef
  }), Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])("div", Object.assign({}, isIn && {
    role: role
  }, {
    className: isFn(bodyClassName) ? bodyClassName({
      type: type
    }) : Object(__WEBPACK_IMPORTED_MODULE_1_clsx__["a" /* default */])("Toastify"
    /* CSS_NAMESPACE */
    + "__toast-body", bodyClassName),
    style: bodyStyle
  }), Icon && Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])("div", {
    className: Object(__WEBPACK_IMPORTED_MODULE_1_clsx__["a" /* default */])("Toastify"
    /* CSS_NAMESPACE */
    + "__toast-icon", (_cx2 = {}, _cx2["Toastify"
    /* CSS_NAMESPACE */
    + "--animate-icon " + "Toastify"
    /* CSS_NAMESPACE */
    + "__zoom-enter"] = !isLoading, _cx2))
  }, Icon), Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])("div", null, children)), renderCloseButton(closeButton), (autoClose || isProgressControlled) && Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(ProgressBar, Object.assign({}, updateId && !isProgressControlled ? {
    key: "pb-" + updateId
  } : {}, {
    rtl: rtl,
    theme: theme,
    delay: autoClose,
    isRunning: isRunning,
    isIn: isIn,
    closeToast: closeToast,
    hide: hideProgressBar,
    type: type,
    style: progressStyle,
    className: progressClassName,
    controlledProgress: isProgressControlled,
    progress: progress
  }))));
};

var Bounce = /*#__PURE__*/cssTransition({
  enter: "Toastify"
  /* CSS_NAMESPACE */
  + "--animate " + "Toastify"
  /* CSS_NAMESPACE */
  + "__bounce-enter",
  exit: "Toastify"
  /* CSS_NAMESPACE */
  + "--animate " + "Toastify"
  /* CSS_NAMESPACE */
  + "__bounce-exit",
  appendPosition: true
});
var Slide = /*#__PURE__*/cssTransition({
  enter: "Toastify"
  /* CSS_NAMESPACE */
  + "--animate " + "Toastify"
  /* CSS_NAMESPACE */
  + "__slide-enter",
  exit: "Toastify"
  /* CSS_NAMESPACE */
  + "--animate " + "Toastify"
  /* CSS_NAMESPACE */
  + "__slide-exit",
  appendPosition: true
});
var Zoom = /*#__PURE__*/cssTransition({
  enter: "Toastify"
  /* CSS_NAMESPACE */
  + "--animate " + "Toastify"
  /* CSS_NAMESPACE */
  + "__zoom-enter",
  exit: "Toastify"
  /* CSS_NAMESPACE */
  + "--animate " + "Toastify"
  /* CSS_NAMESPACE */
  + "__zoom-exit"
});
var Flip = /*#__PURE__*/cssTransition({
  enter: "Toastify"
  /* CSS_NAMESPACE */
  + "--animate " + "Toastify"
  /* CSS_NAMESPACE */
  + "__flip-enter",
  exit: "Toastify"
  /* CSS_NAMESPACE */
  + "--animate " + "Toastify"
  /* CSS_NAMESPACE */
  + "__flip-exit"
});

var ToastContainer = function ToastContainer(props) {
  var _useToastContainer = useToastContainer(props),
      getToastToRender = _useToastContainer.getToastToRender,
      containerRef = _useToastContainer.containerRef,
      isToastActive = _useToastContainer.isToastActive;

  var className = props.className,
      style = props.style,
      rtl = props.rtl,
      containerId = props.containerId;

  function getClassName(position) {
    var _cx;

    var defaultClassName = Object(__WEBPACK_IMPORTED_MODULE_1_clsx__["a" /* default */])("Toastify"
    /* CSS_NAMESPACE */
    + "__toast-container", "Toastify"
    /* CSS_NAMESPACE */
    + "__toast-container--" + position, (_cx = {}, _cx["Toastify"
    /* CSS_NAMESPACE */
    + "__toast-container--rtl"] = rtl, _cx));
    return isFn(className) ? className({
      position: position,
      rtl: rtl,
      defaultClassName: defaultClassName
    }) : Object(__WEBPACK_IMPORTED_MODULE_1_clsx__["a" /* default */])(defaultClassName, parseClassName(className));
  }

  return Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])("div", {
    ref: containerRef,
    className: "Toastify"
    /* CSS_NAMESPACE */
    ,
    id: containerId
  }, getToastToRender(function (position, toastList) {
    var containerStyle = toastList.length === 0 ? _extends({}, style, {
      pointerEvents: 'none'
    }) : _extends({}, style);
    return Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])("div", {
      className: getClassName(position),
      style: containerStyle,
      key: "container-" + position
    }, toastList.map(function (_ref) {
      var content = _ref.content,
          toastProps = _ref.props;
      return Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(Toast, Object.assign({}, toastProps, {
        isIn: isToastActive(toastProps.toastId),
        key: "toast-" + toastProps.key,
        closeButton: toastProps.closeButton === true ? CloseButton : toastProps.closeButton
      }), content);
    }));
  }));
};
ToastContainer.defaultProps = {
  position: POSITION.TOP_RIGHT,
  transition: Bounce,
  rtl: false,
  autoClose: 5000,
  hideProgressBar: false,
  closeButton: CloseButton,
  pauseOnHover: true,
  pauseOnFocusLoss: true,
  closeOnClick: true,
  newestOnTop: false,
  draggable: true,
  draggablePercent: 80
  /* DRAGGABLE_PERCENT */
  ,
  draggableDirection: "x"
  /* X */
  ,
  role: 'alert',
  theme: 'light'
};

var containers = /*#__PURE__*/new Map();
var latestInstance;
var containerDomNode;
var containerConfig;
var queue = [];
var lazy = false;
/**
 * Check whether any container is currently mounted in the DOM
 */

function isAnyContainerMounted() {
  return containers.size > 0;
}
/**
 * Get the toast by id, given it's in the DOM, otherwise returns null
 */


function getToast(toastId, _ref) {
  var containerId = _ref.containerId;
  var container = containers.get(containerId || latestInstance);
  if (!container) return null;
  return container.getToast(toastId);
}
/**
 * Generate a random toastId
 */


function generateToastId() {
  return Math.random().toString(36).substr(2, 9);
}
/**
 * Generate a toastId or use the one provided
 */


function getToastId(options) {
  if (options && (isStr(options.toastId) || isNum(options.toastId))) {
    return options.toastId;
  }

  return generateToastId();
}
/**
 * If the container is not mounted, the toast is enqueued and
 * the container lazy mounted
 */


function dispatchToast(content, options) {
  if (isAnyContainerMounted()) {
    eventManager.emit(0
    /* Show */
    , content, options);
  } else {
    queue.push({
      content: content,
      options: options
    });

    if (lazy && canUseDom) {
      lazy = false;
      containerDomNode = document.createElement('div');
      document.body.appendChild(containerDomNode);
      Object(__WEBPACK_IMPORTED_MODULE_2_react_dom__["render"])(Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(ToastContainer, Object.assign({}, containerConfig)), containerDomNode);
    }
  }

  return options.toastId;
}
/**
 * Merge provided options with the defaults settings and generate the toastId
 */


function mergeOptions(type, options) {
  return _extends({}, options, {
    type: options && options.type || type,
    toastId: getToastId(options)
  });
}

var createToastByType = function createToastByType(type) {
  return function (content, options) {
    return dispatchToast(content, mergeOptions(type, options));
  };
};

var toast = function toast(content, options) {
  return dispatchToast(content, mergeOptions(TYPE.DEFAULT, options));
};

toast.loading = function (content, options) {
  return dispatchToast(content, mergeOptions(TYPE.DEFAULT, _extends({
    isLoading: true,
    autoClose: false,
    closeOnClick: false,
    closeButton: false,
    draggable: false
  }, options)));
};

function handlePromise(promise, _ref2, options) {
  var pending = _ref2.pending,
      error = _ref2.error,
      success = _ref2.success;
  var id = isStr(pending) ? toast.loading(pending, options) : toast.loading(pending.render, _extends({}, options, pending));
  var resetParams = {
    isLoading: null,
    autoClose: null,
    closeOnClick: null,
    closeButton: null,
    draggable: null
  };

  var resolver = function resolver(type, input, result) {
    var params = isStr(input) ? {
      render: input
    } : input;
    toast.update(id, _extends({
      type: type
    }, resetParams, options, params, {
      data: result
    }));
    return result;
  };

  var p = isFn(promise) ? promise() : promise;
  p.then(function (result) {
    return resolver('success', success, result);
  })["catch"](function (err) {
    return resolver('error', error, err);
  });
  return p;
}

toast.promise = handlePromise;
toast.success = /*#__PURE__*/createToastByType(TYPE.SUCCESS);
toast.info = /*#__PURE__*/createToastByType(TYPE.INFO);
toast.error = /*#__PURE__*/createToastByType(TYPE.ERROR);
toast.warning = /*#__PURE__*/createToastByType(TYPE.WARNING);
toast.warn = toast.warning;

toast.dark = function (content, options) {
  return dispatchToast(content, mergeOptions(TYPE.DEFAULT, _extends({
    theme: 'dark'
  }, options)));
};
/**
 * Remove toast programmaticaly
 */


toast.dismiss = function (id) {
  return eventManager.emit(1
  /* Clear */
  , id);
};
/**
 * Clear waiting queue when limit is used
 */


toast.clearWaitingQueue = function (params) {
  if (params === void 0) {
    params = {};
  }

  return eventManager.emit(5
  /* ClearWaitingQueue */
  , params);
};
/**
 * return true if one container is displaying the toast
 */


toast.isActive = function (id) {
  var isToastActive = false;
  containers.forEach(function (container) {
    if (container.isToastActive && container.isToastActive(id)) {
      isToastActive = true;
    }
  });
  return isToastActive;
};

toast.update = function (toastId, options) {
  if (options === void 0) {
    options = {};
  }

  // if you call toast and toast.update directly nothing will be displayed
  // this is why I defered the update
  setTimeout(function () {
    var toast = getToast(toastId, options);

    if (toast) {
      var oldOptions = toast.props,
          oldContent = toast.content;

      var nextOptions = _extends({}, oldOptions, options, {
        toastId: options.toastId || toastId,
        updateId: generateToastId()
      });

      if (nextOptions.toastId !== toastId) nextOptions.staleId = toastId;
      var content = nextOptions.render || oldContent;
      delete nextOptions.render;
      dispatchToast(content, nextOptions);
    }
  }, 0);
};
/**
 * Used for controlled progress bar.
 */


toast.done = function (id) {
  toast.update(id, {
    progress: 1
  });
};
/**
 * Track changes. The callback get the number of toast displayed
 *
 */


toast.onChange = function (callback) {
  if (isFn(callback)) {
    eventManager.on(4
    /* Change */
    , callback);
  }

  return function () {
    isFn(callback) && eventManager.off(4
    /* Change */
    , callback);
  };
};
/**
 * Configure the ToastContainer when lazy mounted
 */


toast.configure = function (config) {
  if (config === void 0) {
    config = {};
  }

  lazy = true;
  containerConfig = config;
};

toast.POSITION = POSITION;
toast.TYPE = TYPE;
/**
 * Wait until the ToastContainer is mounted to dispatch the toast
 * and attach isActive method
 */

eventManager.on(2
/* DidMount */
, function (containerInstance) {
  latestInstance = containerInstance.containerId || containerInstance;
  containers.set(latestInstance, containerInstance);
  queue.forEach(function (item) {
    eventManager.emit(0
    /* Show */
    , item.content, item.options);
  });
  queue = [];
}).on(3
/* WillUnmount */
, function (containerInstance) {
  containers["delete"](containerInstance.containerId || containerInstance);

  if (containers.size === 0) {
    eventManager.off(0
    /* Show */
    ).off(1
    /* Clear */
    ).off(5
    /* ClearWaitingQueue */
    );
  }

  if (canUseDom && containerDomNode) {
    document.body.removeChild(containerDomNode);
  }
});


//# sourceMappingURL=react-toastify.esm.js.map


/***/ }),
/* 86 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__AppSetting__ = __webpack_require__(30);
var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var AuthLeft=function(_Component){_inherits(AuthLeft,_Component);function AuthLeft(){_classCallCheck(this,AuthLeft);return _possibleConstructorReturn(this,(AuthLeft.__proto__||Object.getPrototypeOf(AuthLeft)).apply(this,arguments));}_createClass(AuthLeft,[{key:'render',value:function render(){var currentDate=new Date();var currentYear=currentDate.getFullYear();return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:'kt-grid__item kt-grid__item--order-tablet-and-mobile-2 kt-grid kt-grid--hor kt-login__aside',style:{backgroundImage:'linear-gradient(rgba(0,0,0,0.8),rgba(0,0,0,0.8)),url(/images/login-bg.png)',backgroundPosition:"left"}},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:'kt-grid__item'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('a',{href:'#',className:'kt-login__logo'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img',{src:'/images/logo1.png'}))),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:'kt-grid__item kt-grid__item--fluid kt-grid kt-grid--ver'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:'kt-grid__item kt-grid__item--middle'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('h3',{className:'kt-login__title'},'Welcome to ',__WEBPACK_IMPORTED_MODULE_1__AppSetting__["a" /* AppSetting */].name,' ADMIN!'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('h4',{className:'kt-login__subtitle'},'CMS for Managing Products and Orders.'))),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:'kt-grid__item'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:'kt-login__info'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:'kt-login__copyright'},'\xA9 ',currentYear,' ',__WEBPACK_IMPORTED_MODULE_1__AppSetting__["a" /* AppSetting */].name),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:'kt-login__menu'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('a',{href:'http://overtoneacoustics.com/',className:'kt-link'},'Main Website'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('a',{href:'#',className:'kt-link'},'Legal'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('a',{href:'#',className:'kt-link'},'Contact')))));}}]);return AuthLeft;}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);/* harmony default export */ __webpack_exports__["a"] = (AuthLeft);

/***/ }),
/* 87 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return listPlan; });
/* unused harmony export addPlan */
/* unused harmony export editPlan */
/* unused harmony export deletePlan */
/* unused harmony export setPlanLoading */
/* unused harmony export stopPlanLoading */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__types__ = __webpack_require__(11);
// Get all plan
var listPlan=function listPlan(){return function(dispatch){dispatch(setPlanLoading());__WEBPACK_IMPORTED_MODULE_0_axios___default.a.get('/api/plan/').then(function(res){return dispatch({type:__WEBPACK_IMPORTED_MODULE_1__types__["_36" /* LIST_PLAN */],payload:res.data});}).catch(function(err){return dispatch({type:__WEBPACK_IMPORTED_MODULE_1__types__["_26" /* GET_ERRORS */],payload:err.response.data});});};};// Create plan
var addPlan=function addPlan(planData){return function(dispatch){dispatch(setPlanLoading());__WEBPACK_IMPORTED_MODULE_0_axios___default.a.post('/api/plan/',planData).then(function(res){return dispatch({type:__WEBPACK_IMPORTED_MODULE_1__types__["m" /* ADD_PLAN */],payload:res.data});}).catch(function(err){dispatch({type:__WEBPACK_IMPORTED_MODULE_1__types__["_26" /* GET_ERRORS */],payload:err.response.data});dispatch(stopPlanLoading());});};};// Edit plan
var editPlan=function editPlan(planData){return function(dispatch){dispatch(setPlanLoading());__WEBPACK_IMPORTED_MODULE_0_axios___default.a.post('/api/plan/edit',planData).then(function(res){return dispatch({type:__WEBPACK_IMPORTED_MODULE_1__types__["_14" /* EDIT_PLAN */],payload:res.data});}).catch(function(err){dispatch({type:__WEBPACK_IMPORTED_MODULE_1__types__["_26" /* GET_ERRORS */],payload:err.response.data});dispatch(stopPlanLoading());});};};// delete plan
var deletePlan=function deletePlan(deleteData){return function(dispatch){dispatch(setPlanLoading());__WEBPACK_IMPORTED_MODULE_0_axios___default.a.post('/api/plan/delete',deleteData).then(function(res){return dispatch({type:__WEBPACK_IMPORTED_MODULE_1__types__["U" /* DELETE_PLAN */],payload:res.data});}).catch(function(err){dispatch({type:__WEBPACK_IMPORTED_MODULE_1__types__["_26" /* GET_ERRORS */],payload:err.response.data});dispatch(stopPlanLoading());});};};// Plan loading
var setPlanLoading=function setPlanLoading(){return{type:__WEBPACK_IMPORTED_MODULE_1__types__["_54" /* PLAN_LOADING */]};};var stopPlanLoading=function stopPlanLoading(){return{type:__WEBPACK_IMPORTED_MODULE_1__types__["_55" /* PLAN_STOPLOADING */]};};

/***/ }),
/* 88 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CountryDropdown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return RegionDropdown; });
/* unused harmony export CountryRegionData */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);



var CountryRegionData = [["Afghanistan","AF","Badakhshan~BDS|Badghis~BDG|Baghlan~BGL|Balkh~BAL|Bamyan~BAM|Daykundi~DAY|Farah~FRA|Faryab~FYB|Ghazni~GHA|Ghor~GHO|Helmand~HEL|Herat~HER|Jowzjan~JOW|Kabul~KAB|Kandahar~KAN|Kapisa~KAP|Khost~KHO|Kunar~KNR|Kunduz~KDZ|Laghman~LAG|Logar~LOW|Maidan Wardak~WAR|Nangarhar~NAN|Nimruz~NIM|Nuristan~NUR|Paktia~PIA|Paktika~PKA|Panjshir~PAN|Parwan~PAR|Samangan~SAM|Sar-e Pol~SAR|Takhar~TAK|Urozgan~ORU|Zabul~ZAB"],["Åland Islands","AX","Brändö~BR|Eckerö~EC|Finström~FN|Föglö~FG|Geta~GT|Hammarland~HM|Jomala~JM|Kumlinge~KM|Kökar~KK|Lemland~LE|Lumparland~LU|Mariehamn~MH|Saltvik~SV|Sottunga~ST|Sund~SD|Vårdö~VR"],["Albania","AL","Berat~01|Dibër~09|Durrës~02|Elbasan~03|Fier~04|Gjirokastër~05|Korçë~06|Kukës~07|Lezhë~08|Shkodër~10|Tirana~11|Vlorë~12"],["Algeria","DZ","Adrar~01|Aïn Defla~44|Aïn Témouchent~46|Algiers~16|Annaba~23|Batna~05|Béchar~08|Béjaïa~06|Biskra~07|Blida~09|Bordj Bou Arréridj~34|Bouïra~10|Boumerdès~35|Chlef~02|Constantine~25|Djelfa~17|El Bayadh~32|El Oued~39|El Tarf~36|Ghardaïa~47|Guelma~24|Illizi~33|Jijel~18|Khenchela~40|Laghouat~03|Mascara~29|Médéa~26|Mila~43|Mostaganem~27|Msila~28|Naâma~45|Oran~31|Ouargla~30|Oum el Bouaghi~04|Relizane~48|Saïda~20|Sétif~19|Sidi Bel Abbès~22|Skikda~21|Souk Ahras~41|Tamanghasset~11|Tébessa~12|Tiaret~14|Tindouf~37|Tipaza~42|Tissemsilt~38|Tizi Ouzou~15|Tlemcen~13"],["American Samoa","AS","Tutuila~01|Aunu'u~02|Ta'ū~03|Ofu‑Olosega~04|Rose Atoll~21|Swains Island~22"],["Andorra","AD","Andorra la Vella~07|Canillo~02|Encamp~03|Escaldes-Engordany~08|La Massana~04|Ordino~05|Sant Julià de Lòria~06"],["Angola","AO","Bengo~BGO|Benguela~BGU|Bié~BIE|Cabinda~CAB|Cuando Cubango~CCU|Cuanza Norte~CNO|Cuanza Sul~CUS|Cunene~CNN|Huambo~HUA|Huíla~HUI|Luanda~LUA|Lunda Norte~LNO|Lunda Sul~LSU|Malanje~MAL|Moxico~MOX|Namibe~NAM|Uíge~UIG|Zaire~ZAI"],["Anguilla","AI","Anguilla~01|Anguillita Island~02|Blowing Rock~03|Cove Cay~04|Crocus Cay~05|Deadman's Cay~06|Dog Island~07|East Cay~08|Little Island~09|Little Scrub Island~10|Mid Cay~11|North Cay~12|Prickly Pear Cays~13|Rabbit Island~14|Sandy Island/Sand Island~15|Scilly Cay~16|Scrub Island~17|Seal Island~18|Sombrero/Hat Island~19|South Cay~20|South Wager Island~21|West Cay~22"],["Antarctica","AQ","Antarctica~AQ"],["Antigua and Barbuda","AG","Antigua Island~01|Barbuda Island~02|Bird Island~04|Bishop Island~05|Blake Island~06|Crump Island~09|Dulcina Island~10|Exchange Island~11|Five Islands~12|Great Bird Island~13|Green Island~14|Guiana Island~15|Hawes Island~17|Hells Gate Island~16|Henry Island~18|Johnson Island~19|Kid Island~20|Lobster Island~22|Maiden Island~24|Moor Island~25|Nanny Island~26|Pelican Island~27|Prickly Pear Island~28|Rabbit Island~29|Red Head Island~31|Redonda Island~03|Sandy Island~32|Smith Island~33|The Sisters~34|Vernon Island~35|Wicked Will Island~36|York Island~37"],["Argentina","AR","Buenos Aires~B|Capital Federal~C|Catamarca~K|Chaco~H|Chubut~U|Córdoba~X|Corrientes~W|Entre Ríos~E|Formosa~P|Jujuy~Y|La Pampa~L|La Rioja~F|Mendoza~M|Misiones~N|Neuquén~Q|Río Negro~R|Salta~A|San Juan~J|San Luis~D|Santa Cruz~Z|Santa Fe~S|Santiago del Estero~G|Tierra del Fuego~V|Tucumán~T"],["Armenia","AM","Aragatsotn~AG|Ararat~AR|Armavir~AV|Gegharkunik~GR|Kotayk~KT|Lori~LO|Shirak~SH|Syunik~SU|Tavush~TV|Vayots Dzor~VD|Yerevan~ER"],["Aruba","AW","Aruba~AW"],["Australia","AU","Australian Capital Territory~ACT|New South Wales~NSW|Northern Territory~NT|Queensland~QLD|South Australia~SA|Tasmania~TAS|Victoria~VIC|Western Australia~WA"],["Austria","AT","Burgenland~1|Kärnten~2|Niederösterreich~3|Oberösterreich~4|Salzburg~5|Steiermark~6|Tirol~7|Vorarlberg~8|Wien~9"],["Azerbaijan","AZ","Abşeron~ABS|Ağcabədi~AGC|Ağdam~AGM|Ağdaş~AGS|Ağstafa~AGA|Ağsu~AGU|Astara~AST|Bakı~BAK|Babək~BAB|Balakən~BAL|Bərdə~BAR|Beyləqan~BEY|Biləsuvar~BIL|Cəbrayıl~CAB|Cəlilabad~CAL|Culfa~CUL|Daşkəsən~DAS|Füzuli~FUZ|Gədəbəy~GAD|Goranboy~GOR|Göyçay~GOY|Göygöl~GYG|Hacıqabul~HAC|İmişli~IMI|İsmayıllı~ISM|Kəlbəcər~KAL|Kǝngǝrli~KAN|Kürdəmir~KUR|Laçın~LAC|Lənkəran~LAN|Lerik~LER|Masallı~MAS|Neftçala~NEF|Oğuz~OGU|Ordubad~ORD|Qəbələ~QAB|Qax~QAX|Qazax~QAZ|Qobustan~QOB|Quba~QBA|Qubadli~QBI|Qusar~QUS|Saatlı~SAT|Sabirabad~SAB|Şabran~SBN|Sədərək~SAD|Şahbuz~SAH|Şəki~SAK|Salyan~SAL|Şamaxı~SMI|Şəmkir~SKR|Samux~SMX|Şərur~SAR|Siyəzən~SIY|Şuşa~SUS|Tərtər~TAR|Tovuz~TOV|Ucar~UCA|Xaçmaz~XAC|Xızı~XIZ|Xocalı~XCI|Xocavənd~XVD|Yardımlı~YAR|Yevlax~YEV|Zəngilan~ZAN|Zaqatala~ZAQ|Zərdab~ZAR"],["Bahamas","BS","Acklins Island~01|Berry Islands~22|Bimini~02|Black Point~23|Cat Island~03|Central Abaco~24|Crooked Island and Long Cay~28|East Grand Bahama~29|Exuma~04|Freeport~05|Fresh Creek~06|Governor's Harbour~07|Green Turtle Cay~08|Harbour Island~09|High Rock~10|Inagua~11|Kemps Bay~12|Long Island~13|Marsh Harbour~14|Mayaguana~15|Moore’s Island~40|New Providence~16|Nichollstown and Berry Islands~17|North Abaco~42|North Andros~41|North Eleuthera~33|Ragged Island~18|Rock Sound~19|San Salvador and Rum Cay~20|Sandy Point~21|South Abaco~35|South Andros~36|South Eleuthera~37|West Grand Bahama~39"],["Bahrain","BH","Al Janūbīyah~14|Al Manāmah~13|Al Muḩarraq~15|Al Wusţá~16|Ash Shamālīyah~17"],["Bangladesh","BD","Barisal~A|Chittagong~B|Dhaka~C|Khulna~D|Mymensingh~M|Rajshahi~E|Rangpur~F|Sylhet~G"],["Barbados","BB","Christ Church~01|Saint Andrew~02|Saint George~03|Saint James~04|Saint John~05|Saint Joseph~06|Saint Lucy~07|Saint Michael~08|Saint Peter~09|Saint Philip~10|Saint Thomas~11"],["Belarus","BY","Brest voblast~BR|Gorod Minsk~HM|Homiel voblast~HO|Hrodna voblast~HR|Mahilyow voblast~MA|Minsk voblast~MI|Vitsebsk voblast~VI"],["Belgium","BE","Brussels~BRU|Flanders~VLG|Wallonia~WAL"],["Belize","BZ","Belize District~BZ|Cayo District~CY|Corozal District~CZL|Orange Walk District~OW|Stann Creek District~SC|Toledo District~TOL"],["Benin","BJ","Alibori~AL|Atakora~AK|Atlantique~AQ|Borgou~BO|Collines Department~CO|Donga~DO|Kouffo~KO|Littoral Department~LI|Mono Department~MO|Ouémé~OU|Plateau~PL|Zou~ZO"],["Bermuda","BM","City of Hamilton~03|Devonshire Parish~01|Hamilton Parish~02|Paget Parish~04|Pembroke Parish~05|Sandys Parish~08|Smith's Parish~09|Southampton Parish~10|St. George's Parish~07|Town of St. George~06|Warwick Parish~11"],["Bhutan","BT","Bumthang~33|Chhukha~12|Dagana~22|Gasa~GA|Haa~13|Lhuntse~44|Mongar~42|Paro~11|Pemagatshel~43|Punakha~23|Samdrup Jongkhar~45|Samtse~14|Sarpang~31|Thimphu~15|Trashigang~41|Trashiyangtse~TY|Trongsa~32|Tsirang~21|Wangdue Phodrang~24|Zhemgang~34"],["Bolivia","BO","Beni~B|Chuquisaca~H|Cochabamba~C|La Paz~L|Oruro~O|Pando~N|Potosí~P|Santa Cruz~S|Tarija~T"],["Bonaire, Sint Eustatius and Saba","BQ","Bonaire~BO|Saba Isand~SA|Sint Eustatius~SE"],["Bosnia and Herzegovina","BA","Brčko Distrikt~BRC|Federacija Bosne i Hercegovine~BIH|Republika Srpska~SRP"],["Botswana","BW","Central~CE|Ghanzi~GH|Kgalagadi~KG|Kgatleng~KL|Kweneng~KW|North West~NW|North-East~NE|South East~SE|Southern~SO"],["Bouvet Island","BV","Bouvet Island~BV"],["Brazil","BR","Acre~AC|Alagoas~AL|Amapá~AP|Amazonas~AM|Bahia~BA|Ceará~CE|Distrito Federal~DF|Espírito Santo~ES|Goiás~GO|Maranhão~MA|Mato Grosso~MT|Mato Grosso do Sul~MS|Minas Gerais~MG|Pará~PA|Paraíba~PB|Paraná~PR|Pernambuco~PE|Piauí~PI|Rio de Janeiro~RJ|Rio Grande do Norte~RN|Rio Grande do Sul~RS|Rondônia~RO|Roraima~RR|Santa Catarina~SC|São Paulo~SP|Sergipe~SE|Tocantins~TO"],["British Indian Ocean Territory","IO","British Indian Ocean Territory~IO"],["Brunei Darussalam","BN","Belait~BE|Brunei Muara~BM|Temburong~TE|Tutong~TU"],["Bulgaria","BG","Blagoevgrad~01|Burgas~02|Dobrich~08|Gabrovo~07|Jambol~28|Khaskovo~26|Kjustendil~10|Kurdzhali~09|Lovech~11|Montana~12|Pazardzhik~13|Pernik~14|Pleven~15|Plovdiv~16|Razgrad~17|Ruse~18|Shumen~27|Silistra~19|Sliven~20|Smoljan~21|Sofija~23|Sofija-Grad~22|Stara Zagora~24|Turgovishhe~25|Varna~03|Veliko Turnovo~04|Vidin~05|Vraca~06"],["Burkina Faso","BF","Balé~BAL|Bam/Lake Bam~BAM|Banwa Province~BAN|Bazèga~BAZ|Bougouriba~BGR|Boulgou Province~BLG|Boulkiemdé~BLK|Comoé/Komoe~COM|Ganzourgou Province~GAN|Gnagna~GNA|Gourma Province~GOU|Houet~HOU|Ioba~IOB|Kadiogo~KAD|Kénédougou~KEN|Komondjari~KMD|Kompienga~KMP|Kossi Province~KOS|Koulpélogo~KOP|Kouritenga~KOT|Kourwéogo~KOW|Léraba~LER|Loroum~LOR|Mouhoun~MOU|Namentenga~NAM|Naouri/Nahouri~NAO|Nayala~NAY|Noumbiel~NOU|Oubritenga~OUB|Oudalan~OUD|Passoré~PAS|Poni~PON|Sanguié~SNG|Sanmatenga~SMT|Séno~SEN|Sissili~SIS|Soum~SOM|Sourou~SOR|Tapoa~TAP|Tui/Tuy~TUI|Yagha~YAG|Yatenga~YAT|Ziro~ZIR|Zondoma~ZON|Zoundwéogo~ZOU"],["Burundi","BI","Bubanza~BB|Bujumbura Mairie~BM|Bujumbura Rural~BL|Bururi~BR|Cankuzo~CA|Cibitoke~CI|Gitega~GI|Karuzi~KR|Kayanza~KY|Kirundo~KI|Makamba~MA|Muramvya~MU|Muyinga~MY|Mwaro~MW|Ngozi~NG|Rutana~RT|Ruyigi~RY"],["Cambodia","KH","Baat Dambang~2|Banteay Mean Chey~1|Kampong Chaam~3|Kampong Chhnang~4|Kampong Spueu~5|Kampong Thum~6|Kampot~7|Kandaal~8|Kaoh Kong~9|Kracheh~10|Krong Kaeb~23|Krong Pailin~24|Krong Preah Sihanouk~18|Mondol Kiri~11|Otdar Mean Chey~22|Phnom Penh~12|Pousaat~15|Preah Vihear~13|Prey Veaeng~14|Rotanah Kiri~16|Siem Reab~17|Stueng Treng~19|Svaay Rieng~20|Taakaev~21|Tbong Khmum~25"],["Cameroon","CM","Adamaoua~AD|Centre~CE|Est~ES|Extrême-Nord~EN|Littoral~LT|Nord~NO|Nord-Ouest~NW|Ouest~OU|Sud~SU|Sud-Ouest~SW"],["Canada","CA","Alberta~AB|British Columbia~BC|Manitoba~MB|New Brunswick~NB|Newfoundland and Labrador~NL|Northwest Territories~NT|Nova Scotia~NS|Nunavut~NU|Ontario~ON|Prince Edward Island~PE|Quebec~QC|Saskatchewan~SK|Yukon~YT"],["Cape Verde","CV","Boa Vista~BV|Brava~BR|Calheta de São Miguel~CS|Maio~MA|Mosteiros~MO|Paúl~PA|Porto Novo~PN|Praia~PR|Ribeira Brava~RB|Ribeira Grande~RG|Sal~SL|Santa Catarina~CA|Santa Cruz~CR|São Domingos~SD|São Filipe~SF|São Nicolau~SN|São Vicente~SV|Tarrafal~TA|Tarrafal de São Nicolau~TS"],["Cayman Islands","KY","Creek~undefined|Eastern~undefined|Midland~undefined|South Town~undefined|Spot Bay~undefined|Stake Bay~undefined|West End~undefined|Western~undefined"],["Central African Republic","CF","Bamingui-Bangoran~BB|Bangui~BGF|Basse-Kotto~BK|Haute-Kotto~HK|Haut-Mbomou~HM|Kémo~KG|Lobaye~LB|Mambéré-Kadéï~HS|Mbomou~MB|Nana-Grebizi~10|Nana-Mambéré~NM|Ombella-M'Poko~MP|Ouaka~UK|Ouham~AC|Ouham Péndé~OP|Sangha-Mbaéré~SE|Vakaga~VK"],["Chad","TD","Bahr el Ghazal~BG|Batha~BA|Borkou~BO|Chari-Baguirmi~CB|Ennedi-Est~EE|Ennedi-Ouest~EO|Guéra~GR|Hadjer Lamis~HL|Kanem~KA|Lac~LC|Logone Occidental~LO|Logone Oriental~LR|Mondoul~MA|Mayo-Kébbi-Est~ME|Moyen-Chari~MC|Ouaddai~OD|Salamat~SA|Sila~SI|Tandjilé~TA|Tibesti~TI|Ville de Ndjamena~ND|Wadi Fira~WF"],["Chile","CL","Aisén del General Carlos Ibáñez del Campo~AI|Antofagasta~AN|Araucanía~AR|Arica y Parinacota~AP|Atacama~AT|Bío-Bío~BI|Coquimbo~CO|Libertador General Bernardo O'Higgins~LI|Los Lagos~LL|Los Ríos~LR|Magallanes y Antartica Chilena~MA|Marga-Marga~|Maule~ML|Ñuble~NB|Región Metropolitana de Santiago~RM|Tarapacá~TA|Valparaíso~VS"],["China","CN","Anhui~AH|Beijing~BJ|Chongqing~CQ|Fujian~FJ|Gansu~GS|Guangdong~GD|Guangxi~GX|Guizhou~GZ|Hainan~HI|Hebei~HE|Heilongjiang~HL|Henan~HA|Hong Kong~HK|Hubei~HB|Hunan~HN|Inner Mongolia~NM|Jiangsu~JS|Jiangxi~JX|Jilin~JL|Liaoning~LN|Macau~MO|Ningxia~NX|Qinghai~QH|Shaanxi~SN|Shandong~SD|Shanghai~SH|Shanxi~SX|Sichuan~SC|Tianjin~TJ|Tibet~XZ|Xinjiang~XJ|Yunnan~YN|Zhejiang~ZJ"],["Christmas Island","CX","Christmas Island~CX"],["Cocos (Keeling) Islands","CC","Direction Island~DI|Home Island~HM|Horsburgh Island~HR|North Keeling Island~NK|South Island~SI|West Island~WI"],["Colombia","CO","Amazonas~AMA|Antioquia~ANT|Arauca~ARA|Archipiélago de San Andrés~SAP|Atlántico~ATL|Bogotá D.C.~DC|Bolívar~BOL|Boyacá~BOY|Caldas~CAL|Caquetá~CAQ|Casanare~CAS|Cauca~CAU|Cesar~CES|Chocó~CHO|Córdoba~COR|Cundinamarca~CUN|Guainía~GUA|Guaviare~GUV|Huila~HUI|La Guajira~LAG|Magdalena~MAG|Meta~MET|Nariño~NAR|Norte de Santander~NSA|Putumayo~PUT|Quindío~QUI|Risaralda~RIS|Santander~SAN|Sucre~SUC|Tolima~TOL|Valle del Cauca~VAC|Vaupés~VAU|Vichada~VID"],["Comoros","KM","Andjazîdja~G|Andjouân~A|Moûhîlî~M"],["Congo, Republic of the (Brazzaville)","CG","Bouenza~11|Brazzaville~BZV|Cuvette~8|Cuvette-Ouest~15|Kouilou~5|Lékoumou~2|Likouala~7|Niari~9|Plateaux~14|Pointe-Noire~16|Pool~12|Sangha~13"],["Congo, the Democratic Republic of the (Kinshasa)","CD","Bandundu~BN|Bas-Congo~BC|Équateur~EQ|Kasaï-Occidental~KE|Kasaï-Oriental~KW|Katanga~KA|Kinshasa~KN|Maniema~MA|Nord-Kivu~NK|Orientale~OR|Sud-Kivu~SK"],["Cook Islands","CK","Aitutaki~undefined|Atiu~undefined|Avarua~undefined|Mangaia~undefined|Manihiki~undefined|Ma'uke~undefined|Mitiaro~undefined|Nassau~undefined|Palmerston~undefined|Penrhyn~undefined|Pukapuka~undefined|Rakahanga~undefined"],["Costa Rica","CR","Alajuela~2|Cartago~3|Guanacaste~5|Heredia~4|Limón~7|Puntarenas~6|San José~1"],["Côte d'Ivoire, Republic of","CI","Agnéby~16|Bafing~17|Bas-Sassandra~09|Denguélé~10|Dix-Huit Montagnes~06|Fromager~18|Haut-Sassandra~02|Lacs~07|Lagunes~01|Marahoué~12|Moyen-Cavally~19|Moyen-Comoé~05|N'zi-Comoé~11|Savanes~03|Sud-Bandama~15|Sud-Comoé~13|Vallée du Bandama~04|Worodougou~14|Zanzan~08"],["Croatia","HR","Bjelovarsko-bilogorska županija~07|Brodsko-posavska županija~12|Dubrovačko-neretvanska županija~19|Grad Zagreb~21|Istarska županija~18|Karlovačka županija~04|Koprivničko-križevačka županija~06|Krapinsko-zagorska županija~02|Ličko-senjska županija~09|Međimurska županija~20|Osječko-baranjska županija~14|Požeško-slavonska županija~11|Primorsko-goranska županija~08|Sisačko-moslavačka županija~03|Splitsko-dalmatinska županija~17|Šibensko-kninska županija~15|Varaždinska županija~05|Virovitičko-podravska županija~10|Vukovarsko-srijemska županija~16|Zadarska županija~13|Zagrebačka županija~01"],["Cuba","CU","Artemisa~15|Camagüey~09|Ciego de Ávila~08|Cienfuegos~06|Granma~12|Guantánamo~14|Holguín~11|Isla de la Juventud~99|La Habana~03|Las Tunas~10|Matanzas~04|Mayabeque~16|Pinar del Río~01|Sancti Spíritus~07|Santiago de Cuba~13|Villa Clara~05"],["Curaçao","CW","Curaçao~CW"],["Cyprus","CY","Ammochostos~04|Keryneia~06|Larnaka~03|Lefkosia~01|Lemesos~02|Pafos~05"],["Czech Republic","CZ","Hlavní město Praha~PR|Jihočeský kraj~JC|Jihomoravský kraj~JM|Karlovarský kraj~KA|Královéhradecký kraj~KR|Liberecký kraj~LI|Moravskoslezský kraj~MO|Olomoucký kraj~OL|Pardubický kraj~PA|Plzeňský kraj~PL|Středočeský kraj~ST|Ústecký kraj~US|Vysočina~VY|Zlínský kraj~ZL"],["Denmark","DK","Hovedstaden~84|Kujalleq~GL-KU|Midtjylland~82|Norderøerne~FO-01|Nordjylland~81|Østerø~FO-06|Qaasuitsup~GL-QA|Qeqqata~GL-QE|Sandø~FO-02|Sermersooq~GL-SM|Sjælland~85|Strømø~FO-03|Suderø~FO-04|Syddanmark~83|Vågø~FO-05"],["Djibouti","DJ","Ali Sabieh~AS|Arta~AR|Dikhil~DI|Obock~OB|Tadjourah~TA"],["Dominica","DM","Saint Andrew Parish~02|Saint David Parish~03|Saint George Parish~04|Saint John Parish~05|Saint Joseph Parish~06|Saint Luke Parish~07|Saint Mark Parish~08|Saint Patrick Parish~09|Saint Paul Parish~10|Saint Peter Parish~11"],["Dominican Republic","DO","Cibao Central~02|Del Valle~37|Distrito Nacional~01|Enriquillo~38|Norcentral~04|Nordeste~33|Noroeste~34|Norte~35|Valdesia~42"],["Ecuador","EC","Azuay~A|Bolívar~B|Cañar~F|Carchi~C|Chimborazo~H|Cotopaxi~X|El Oro~O|Esmeraldas~E|Galápagos~W|Guayas~G|Imbabura~I|Loja~L|Los Ríos~R|Manabí~M|Morona-Santiago~S|Napo~N|Orellana~D|Pastaza~Y|Pichincha~P|Santa Elena~SE|Santo Domingo de los Tsáchilas~SD|Sucumbíos~U|Tungurahua~T|Zamora-Chinchipe~Z"],["Egypt","EG","Alexandria~ALX|Aswan~ASN|Asyout~AST|Bani Sueif~BNS|Beheira~BH|Cairo~C|Daqahlia~DK|Dumiat~DT|El Bahr El Ahmar~BA|El Ismailia~IS|El Suez~SUZ|El Wadi El Gedeed~WAD|Fayoum~FYM|Gharbia~GH|Giza~GZ|Helwan~HU|Kafr El Sheikh~KFS|Luxor~LX|Matrouh~MT|Menia~MN|Menofia~MNF|North Sinai~SIN|Port Said~PTS|Qalubia~KB|Qena~KN|Sharqia~SHR|Sixth of October~SU|Sohag~SHG|South Sinai~JS"],["El Salvador","SV","Ahuachapán~AH|Cabañas~CA|Cuscatlán~CU|Chalatenango~CH|La Libertad~LI|La Paz~PA|La Unión~UN|Morazán~MO|San Miguel~SM|San Salvador~SS|Santa Ana~SA|San Vicente~SV|Sonsonate~SO|Usulután~US"],["Equatorial Guinea","GQ","Annobón~AN|Bioko Norte~BN|Bioko Sur~BS|Centro Sur~CS|Kié-Ntem~KN|Litoral~LI|Wele-Nzas~WN"],["Eritrea","ER","Anseba~AN|Debub~DU|Debub-Keih-Bahri~DK|Gash-Barka~GB|Maekel~MA|Semien-Keih-Bahri~SK"],["Estonia","EE","Harjumaa (Tallinn)~37|Hiiumaa (Kardla)~39|Ida-Virumaa (Johvi)~44|Järvamaa (Paide)~41|Jõgevamaa (Jogeva)~49|Läänemaa~57|Lääne-Virumaa (Rakvere)~59|Pärnumaa (Parnu)~67|Põlvamaa (Polva)~65|Raplamaa (Rapla)~70|Saaremaa (Kuessaare)~74|Tartumaa (Tartu)~78|Valgamaa (Valga)~82|Viljandimaa (Viljandi)~84|Võrumaa (Voru)~86"],["Ethiopia","ET","Addis Ababa~AA|Afar~AF|Amhara~AM|Benshangul-Gumaz~BE|Dire Dawa~DD|Gambela~GA|Harari~HA|Oromia~OR|Somali~SO|Southern Nations Nationalities and People's Region~SN|Tigray~TI"],["Falkland Islands (Islas Malvinas)","FK","Falkland Islands (Islas Malvinas)~undefined"],["Faroe Islands","FO","Bordoy~undefined|Eysturoy~undefined|Mykines~undefined|Sandoy~undefined|Skuvoy~undefined|Streymoy~undefined|Suduroy~undefined|Tvoroyri~undefined|Vagar~undefined"],["Fiji","FJ","Ba~01|Bua~02|Cakaudrove~03|Kadavu~04|Lau~05|Lomaiviti~06|Macuata~07|Nadroga and Navosa~08|Naitasiri~09|Namosi~10|Ra~11|Rewa~12|Rotuma~R|Serua~13|Tailevu~14"],["Finland","FI","Ahvenanmaan maakunta~FI-01|Etelä-Karjala~FI-02|Etelä-Pohjanmaa~FI-03|Etelä-Savo~FI-04|Kainuu~FI-05|Kanta-Häme~FI-06|Keski-Pohjanmaa~FI-07|Keski-Suomi~FI-08|Kymenlaakso~FI-09|Lappi~FI-10|Pirkanmaa~FI-11|Pohjanmaa~FI-12|Pohjois-Karjala~FI-13|Pohjois-Pohjanmaa~FI-14|Pohjois-Savo~FI-15|Päijät-Häme~FI-16|Satakunta~FI-17|Uusimaa~FI-18|Varsinais-Suomi~FI-19"],["France","FR","Auvergne-Rhône-Alpes~ARA|Bourgogne-Franche-Comté~BFC|Bretagne~BRE|Centre-Val de Loire~CVL|Corse~COR|Grand Est~GES|Hauts-de-France~HDF|Île-de-France~IDF|Normandie~NOR|Nouvelle-Aquitaine~NAQ|Occitanie~OCC|Pays de la Loire~PDL|Provence-Alpes-Cote d'Azur~PAC|Clipperton~CP|Guadeloupe~GP|Guyane~GF|Martinique~MQ|Mayotte~YT|Novelle-Calédonie~NC|Polynésie~PF|Saint-Pierre-et-Miquelon~PM|Saint Barthélemy~BL|Saint Martin~MF|Réunion~RE|Terres Australes Françaises~TF|Wallis-et-Futuna~WF"],["French Guiana","GF","French Guiana~undefined"],["French Polynesia","PF","Archipel des Marquises~undefined|Archipel des Tuamotu~undefined|Archipel des Tubuai~undefined|Iles du Vent~undefined|Iles Sous-le-Vent~undefined"],["French Southern and Antarctic Lands","TF","Adelie Land~undefined|Ile Crozet~undefined|Iles Kerguelen~undefined|Iles Saint-Paul et Amsterdam~undefined"],["Gabon","GA","Estuaire~1|Haut-Ogooué~2|Moyen-Ogooué~3|Ngounié~4|Nyanga~5|Ogooué-Ivindo~6|Ogooué-Lolo~7|Ogooué-Maritime~8|Woleu-Ntem~9"],["Gambia, The","GM","Banjul~B|Central River~M|Lower River~L|North Bank~N|Upper River~U|Western~W"],["Georgia","GE","Abkhazia (Sokhumi)~AB|Ajaria (Bat'umi)~AJ|Guria~GU|Imereti~IM|K'akheti~KA|Kvemo Kartli~KK|Mtshkheta-Mtianeti~MM|Rach'a-Lexhkumi-KvemoSvaneti~RL|Samegrelo-Zemo Svaneti~SZ|Samtskhe-Javakheti~SJ|Shida Kartli~SK|Tbilisi~TB"],["Germany","DE","Baden-Württemberg~BW|Bayern~BY|Berlin~BE|Brandenburg~BB|Bremen~HB|Hamburg~HH|Hessen~HE|Mecklenburg-Vorpommern~MV|Niedersachsen~NI|Nordrhein-Westfalen~NW|Rheinland-Pfalz~RP|Saarland~SL|Sachsen~SN|Sachsen-Anhalt~ST|Schleswig-Holstein~SH|Thüringen~TH"],["Ghana","GH","Ahafo~undefined|Ashanti~AH|Bono~undefined|Bono East~undefined|Central~CP|Eastern~EP|Greater Accra~AA|Northern~NP|North East~undefined|Oti~undefined|Savannah~undefined|Upper East~UE|Upper West~UW|Volta~TV|Western~WP|Western North~undefined"],["Gibraltar","GI","Gibraltar~undefined"],["Greece","GR","Anatolikí Makedonía kai Thráki~A|Attikḯ~I|Dytikí Elláda~G|Dytikí Makedonía~C|Ionía Nísia~F|Kentrikí Makedonía~B|Krítí~M|Notío Aigaío~L|Peloponnísos~J|Stereá Elláda~H|Thessalía~E|Voreío Aigaío~K|Ípeiros~D|Ágion Óros~69"],["Greenland","GL","Kommune Kujalleq~KU|Kommuneqarfik Sermersooq~SM|Qaasuitsup Kommunia~QA|Qeqqata Kommunia~QE"],["Grenada","GD","Saint Andrew~01|Saint David~02|Saint George~03|Saint John~04|Saint Mark~05|Saint Patrick~06|Southern Grenadine Islands~10"],["Guadeloupe","GP","Guadeloupe~undefined"],["Guam","GU","Guam~undefined"],["Guatemala","GT","Alta Verapaz~AV|Baja Verapaz~BV|Chimaltenango~CM|Chiquimula~CQ|El Progreso~PR|Escuintla~ES|Guatemala~GU|Huehuetenango~HU|Izabal~IZ|Jalapa~JA|Jutiapa~JU|Petén~PE|Quetzaltenango~QZ|Quiché~QC|Retalhuleu~Re|Sacatepéquez~SA|San Marcos~SM|Santa Rosa~SR|Sololá~SO|Suchitepéquez~SU|Totonicapán~TO|Zacapa~ZA"],["Guernsey","GG","Castel~undefined|Forest~undefined|St. Andrew~undefined|St. Martin~undefined|St. Peter Port~undefined|St. Pierre du Bois~undefined|St. Sampson~undefined|St. Saviour~undefined|Torteval~undefined|Vale~undefined"],["Guinea","GN","Boké~B|Conakry~C|Faranah~F|Kankan~K|Kindia~D|Labé~L|Mamou~M|Nzérékoré~N"],["Guinea-Bissau","GW","Bafatá~BA|Biombo~BM|Bissau~BS|Bolama-Bijagos~BL|Cacheu~CA|Gabú~GA|Oio~OI|Quinara~QU|Tombali~TO"],["Guyana","GY","Barima-Waini~BA|Cuyuni-Mazaruni~CU|Demerara-Mahaica~DE|East Berbice-Corentyne~EB|Essequibo Islands-West Demerara~ES|Mahaica-Berbice~MA|Pomeroon-Supenaam~PM|Potaro-Siparuni~PT|Upper Demerara-Berbice~UD|Upper Takutu-Upper Essequibo~UT"],["Haiti","HT","Artibonite~AR|Centre~CE|Grand'Anse~GA|Nippes~NI|Nord~ND|Nord-Est~NE|Nord-Ouest~NO|Ouest~OU|Sud~SD|Sud-Est~SE"],["Heard Island and McDonald Islands","HM","Heard Island and McDonald Islands~undefined"],["Holy See (Vatican City)","VA","Holy See (Vatican City)~01"],["Honduras","HN","Atlántida~AT|Choluteca~CH|Colón~CL|Comayagua~CM|Copán~CP|Cortés~CR|El Paraíso~EP|Francisco Morazán~FM|Gracias a Dios~GD|Intibucá~IN|Islas de la Bahía~IB|La Paz~LP|Lempira~LE|Ocotepeque~OC|Olancho~OL|Santa Bárbara~SB|Valle~VA|Yoro~YO"],["Hong Kong","HK","Hong Kong~HK"],["Hungary","HU","Bács-Kiskun~BK|Baranya~BA|Békés~BE|Békéscsaba~BC|Borsod-Abauj-Zemplen~BZ|Budapest~BU|Csongrád~CS|Debrecen~DE|Dunaújváros~DU|Eger~EG|Érd~ER|Fejér~FE|Győr~GY|Győr-Moson-Sopron~GS|Hajdú-Bihar~HB|Heves~HE|Hódmezővásárhely~HV|Jász-Nagykun-Szolnok~N|Kaposvár~KV|Kecskemét~KM|Komárom-Esztergom~KE|Miskolc~MI|Nagykanizsa~NK|Nógrád~NO|Nyíregyháza~NY|Pécs~PS|Pest~PE|Salgótarján~ST|Somogy~SO|Sopron~SN|Szabolcs-á-Bereg~SZ|Szeged~SD|Székesfehérvár~SF|Szekszárd~SS|Szolnok~SK|Szombathely~SH|Tatabánya~TB|Tolna~TO|Vas~VA|Veszprém~VE|Veszprém (City)~VM|Zala~ZA|Zalaegerszeg~ZE"],["Iceland","IS","Austurland~7|Höfuðborgarsvæði~1|Norðurland eystra~6|Norðurland vestra~5|Suðurland~8|Suðurnes~2|Vestfirðir~4|Vesturland~3"],["India","IN","Andaman and Nicobar Islands~AN|Andhra Pradesh~AP|Arunachal Pradesh~AR|Assam~AS|Bihar~BR|Chandigarh~CH|Chhattisgarh~CT|Dadra and Nagar Haveli and Daman and Diu~DH|Delhi~DL|Goa~GA|Gujarat~GJ|Haryana~HR|Himachal Pradesh~HP|Jammu and Kashmir~JK|Jharkhand~JH|Karnataka~KA|Kerala~KL|Ladakh~LA|Lakshadweep~LD|Madhya Pradesh~MP|Maharashtra~MH|Manipur~MN|Meghalaya~ML|Mizoram~MZ|Nagaland~NL|Odisha~OR|Puducherry~PY|Punjab~PB|Rajasthan~RJ|Sikkim~SK|Tamil Nadu~TN|Telangana~TG|Tripura~TR|Uttarakhand~UT|Uttar Pradesh~UP|West Bengal~WB"],["Indonesia","ID","Aceh~AC|Bali~BA|Bangka Belitung~BB|Banten~BT|Bengkulu~BE|Gorontalo~GO|Jakarta Raya~JK|Jambi~JA|Jawa Barat~JB|Jawa Tengah~JT|Jawa Timur~JI|Kalimantan Barat~KB|Kalimantan Selatan~KS|Kalimantan Tengah~KT|Kalimantan Timur~KI|Kalimantan Utara~KU|Kepulauan Riau~KR|Lampung~LA|Maluku~MA|Maluku Utara~MU|Nusa Tenggara Barat~NB|Nusa Tenggara Timur~NT|Papua~PA|Papua Barat~PB|Riau~RI|Sulawesi Selatan~SR|Sulawesi Tengah~ST|Sulawesi Tenggara~SG|Sulawesi Utara~SA|Sumatera Barat~SB|Sumatera Selatan~SS|Sumatera Utara~SU|Yogyakarta~YO"],["Iran, Islamic Republic of","IR","Alborz~32|Ardabīl~03|Āz̄arbāyjān-e Gharbī~02|Āz̄arbāyjān-e Sharqī~01|Būshehr~06|Chahār Maḩāl va Bakhtīārī~08|Eşfahān~04|Fārs~14|Gīlān~19|Golestān~27|Hamadān~24|Hormozgān~23|Īlām~05|Kermān~15|Kermānshāh~17|Khorāsān-e Jonūbī~29|Khorāsān-e Raẕavī~30|Khorāsān-e Shomālī~61|Khūzestān~10|Kohgīlūyeh va Bowyer Aḩmad~18|Kordestān~16|Lorestān~20|Markazi~22|Māzandarān~21|Qazvīn~28|Qom~26|Semnān~12|Sīstān va Balūchestān~13|Tehrān~07|Yazd~25|Zanjān~11"],["Iraq","IQ","Al Anbār~AN|Al Başrah~BA|Al Muthanná~MU|Al Qādisīyah~QA|An Najaf~NA|Arbīl~AR|As Sulaymānīyah~SU|Bābil~BB|Baghdād~BG|Dohuk~DA|Dhī Qār~DQ|Diyālá~DI|Karbalā'~KA|Kirkuk~KI|Maysān~MA|Nīnawá~NI|Şalāḩ ad Dīn~SD|Wāsiţ~WA"],["Ireland","IE","Carlow~CW|Cavan~CN|Clare~CE|Cork~CO|Donegal~DL|Dublin~D|Galway~G|Kerry~KY|Kildare~KE|Kilkenny~KK|Laois~LS|Leitrim~LM|Limerick~LK|Longford~LD|Louth~LH|Mayo~MO|Meath~MH|Monaghan~MN|Offaly~OY|Roscommon~RN|Sligo~SO|Tipperary~TA|Waterford~WD|Westmeath~WH|Wexford~WX|Wicklow~WW"],["Isle of Man","IM","Isle of Man~undefined"],["Israel","IL","HaDarom~D|HaMerkaz~M|HaTsafon~Z|H̱efa~HA|Tel-Aviv~TA|Yerushalayim~JM"],["Italy","IT","Abruzzo~65|Basilicata~77|Calabria~78|Campania~72|Emilia-Romagna~45|Friuli-Venezia Giulia~36|Lazio~62|Liguria~42|Lombardia~25|Marche~57|Molise~67|Piemonte~21|Puglia~75|Sardegna~88|Sicilia~82|Toscana~52|Trentino-Alto Adige~32|Umbria~55|Valle d'Aosta~23|Veneto~34"],["Jamaica","JM","Clarendon~13|Hanover~09|Kingston~01|Manchester~12|Portland~04|Saint Andrew~02|Saint Ann~06|Saint Catherine~14|Saint Elizabeth~11|Saint James~08|Saint Mary~05|Saint Thomas~03|Trelawny~07|Westmoreland~10"],["Japan","JP","Aichi~23|Akita~05|Aomori~02|Chiba~12|Ehime~38|Fukui~18|Fukuoka~40|Fukushima~07|Gifu~21|Gunma~10|Hiroshima~34|Hokkaido~01|Hyogo~28|Ibaraki~08|Ishikawa~17|Iwate~03|Kagawa~37|Kagoshima~46|Kanagawa~14|Kochi~39|Kumamoto~43|Kyoto~26|Mie~24|Miyagi~04|Miyazaki~45|Nagano~20|Nagasaki~42|Nara~29|Niigata~15|Oita~44|Okayama~33|Okinawa~47|Osaka~27|Saga~41|Saitama~11|Shiga~25|Shimane~32|Shizuoka~22|Tochigi~09|Tokushima~36|Tokyo~13|Tottori~31|Toyama~16|Wakayama~30|Yamagata~06|Yamaguchi~35|Yamanashi~19"],["Jersey","JE","Jersey~undefined"],["Jordan","JO","‘Ajlūn~AJ|Al 'Aqabah~AQ|Al Balqā’~BA|Al Karak~KA|Al Mafraq~MA|Al ‘A̅şimah~AM|Aţ Ţafīlah~AT|Az Zarqā’~AZ|Irbid~IR|Jarash~JA|Ma‘ān~MN|Mādabā~MD"],["Kazakhstan","KZ","Almaty~ALA|Aqmola~AKM|Aqtobe~AKT|Astana~AST|Atyrau~ATY|Batys Qazaqstan~ZAP|Bayqongyr~undefined|Mangghystau~MAN|Ongtustik Qazaqstan~YUZ|Pavlodar~PAV|Qaraghandy~KAR|Qostanay~KUS|Qyzylorda~KZY|Shyghys Qazaqstan~VOS|Soltustik Qazaqstan~SEV|Zhambyl~ZHA"],["Kenya","KE","Baringo~01|Bomet~02|Bungoma~03|Busia~04|Eleyo/Marakwet~05|Embu~06|Garissa~07|Homa Bay~08|Isiolo~09|Kajiado~10|Kakamega~11|Kericho~12|Kiambu~13|Kilifi~14|Kirinyaga~15|Kisii~16|Kisumu~17|Kitui~18|Kwale~19|Laikipia~20|Lamu~21|Machakos~22|Makueni~23|Mandera~24|Marsabit~25|Meru~26|Migori~27|Mombasa~28|Murang'a~29|Nairobi City~30|Nakuru~31|Nandi~32|Narok~33|Nyamira~34|Nyandarua~35|Nyeri~36|Samburu~37|Siaya~38|Taita/Taveta~39|Tana River~40|Tharaka-Nithi~41|Trans Nzoia~42|Turkana~43|Uasin Gishu~44|Vihiga~45|Wajir~46|West Pokot~47"],["Kiribati","KI","Abaiang~undefined|Abemama~undefined|Aranuka~undefined|Arorae~undefined|Banaba~undefined|Beru~undefined|Butaritari~undefined|Central Gilberts~undefined|Gilbert Islands~G|Kanton~undefined|Kiritimati~undefined|Kuria~undefined|Line Islands~L|Maiana~undefined|Makin~undefined|Marakei~undefined|Nikunau~undefined|Nonouti~undefined|Northern Gilberts~undefined|Onotoa~undefined|Phoenix Islands~P|Southern Gilberts~undefined|Tabiteuea~undefined|Tabuaeran~undefined|Tamana~undefined|Tarawa~undefined|Teraina~undefined"],["Korea, Democratic People's Republic of","KP","Chagang-do (Chagang Province)~04|Hamgyong-bukto (North Hamgyong Province)~09|Hamgyong-namdo (South Hamgyong Province)~08|Hwanghae-bukto (North Hwanghae Province)~06|Hwanghae-namdo (South Hwanghae Province)~05|Kangwon-do (Kangwon Province)~07|Nasŏn (Najin-Sŏnbong)~13|P'yongan-bukto (North P'yongan Province)~03|P'yongan-namdo (South P'yongan Province)~02|P'yongyang-si (P'yongyang City)~01|Yanggang-do (Yanggang Province)~10"],["Korea, Republic of","KR","Ch'ungch'ongbuk-do~43|Ch'ungch'ongnam-do~44|Cheju-do~49|Chollabuk-do~45|Chollanam-do~46|Inch'on-Kwangyokhi~28|Kang-won-do~42|Kwangju-Kwangyokshi~29|Kyonggi-do~41|Kyongsangbuk-do~47|Kyongsangnam-do~48|Pusan-Kwangyokshi~26|Seoul-T'ukpyolshi~11|Sejong~50|Taegu-Kwangyokshi~27|Taejon-Kwangyokshi~30|Ulsan-Kwangyokshi~31"],["Kosovo","XK","Farizaj~FZ|Gjakova~GK|Gjilan~GL|Mitrovica~MI|Peja/Peć~PE|Pristina~PR|Prizren~PZ"],["Kuwait","KW","Al Aḩmadi~AH|Al Farwānīyah~FA|Al Jahrā’~JA|Al ‘Āşimah~KU|Ḩawallī~HA|Mubārak al Kabir~MU"],["Kyrgyzstan","KG","Batken Oblasty~B|Bishkek Shaary~GB|Chuy Oblasty (Bishkek)~C|Jalal-Abad Oblasty~J|Naryn Oblasty~N|Osh Oblasty~O|Talas Oblasty~T|Ysyk-Kol Oblasty (Karakol)~Y"],["Laos","LA","Attapu~AT|Bokèo~BK|Bolikhamxai~BL|Champasak~CH|Houaphan~HO|Khammouan~KH|Louang Namtha~LM|Louangphabang~LP|Oudômxai~OU|Phôngsali~PH|Salavan~SL|Savannakhét~SV|Vientiane~VI|Xaignabouli~XA|Xékong~XE|Xaisomboun~XS|Xiangkhouang~XI"],["Latvia","LV","Aglona~001|Aizkraukle~002|Aizpute~003|Aknīste~004|Aloja~005|Alsunga~06|Alūksne~007|Amata~008|Ape~009|Auce~010|Ādaži~011|Babīte~012|Baldone~013|Baltinava~014|Balvi~015|Bauska~016|Beverīna~017|Brocēni~018|Burtnieki~019|Carnikava~020|Cesvaine~021|Cēsis~022|Cibla~023|Dagda~024|Daugavpils~025|Daugavpils (City)~DGV|Dobele~026|Dundaga~027|Durbe~028|Engure~029|Ērgļi~030|Garkalne~031|Grobiņa~032|Gulbene~033|Iecava~034|Ikšķile~035|Ilūkste~036|Inčukalns~037|Jaunjelgava~038|Jaunpiebalga~039|Jaunpils~040|Jelgava~041|Jelgava (City)~JEL|Jēkabpils~042|Jēkabpils (City)~JKB|Jūrmala (City)~JUR|Kandava~043|Kārsava~044|Kocēni~045|Koknese~046|Krāslava~047|Krimulda~048|Krustpils~049|Kuldīga~050|Ķegums~051|Ķekava~052|Lielvārde~053|Liepāja~LPX|Limbaži~054|Līgatne~055|Līvāni~056|Lubāna~057|Ludza~058|Madona~059|Mazsalaca~060|Mālpils~061|Mārupe~062|Mērsrags~063|Naukšēni~064|Nereta~065|Nīca~066|Ogre~067|Olaine~068|Ozolnieki~069|Pārgauja~070|Pāvilosta~071|Pļaviņas~072|Preiļi~073|Priekule~074|Priekuļi~075|Rauna~076|Rēzekne~077|Rēzekne (City)~REZ|Riebiņi~078|Rīga~RIX|Roja~079|Ropaži~080|Rucava~081|Rugāji~082|Rundāle~083|Rūjiena~084|Sala~085|Salacgrīva~086|Salaspils~087|Saldus~088|Saulkrasti~089|Sēja~090|Sigulda~091|Skrīveri~092|Skrunda~093|Smiltene~094|Stopiņi~095|Strenči~096|Talsi~097|Tērvete~098|Tukums~099|Vaiņode~100|Valka~101|Valmiera~VMR|Varakļāni~102|Vārkava~103|Vecpiebalga~104|Vecumnieki~105|Ventspils~106|Ventspils (City)~VEN|Viesīte~107|Viļaka~108|Viļāni~109|Zilupe~110"],["Lebanon","LB","Aakkâr~AK|Baalbelk-Hermel~BH|Béqaa~BI|Beyrouth~BA|Liban-Nord~AS|Liban-Sud~JA|Mont-Liban~JL|Nabatîyé~NA"],["Lesotho","LS","Berea~D|Butha-Buthe~B|Leribe~C|Mafeteng~E|Maseru~A|Mohales Hoek~F|Mokhotlong~J|Qacha's Nek~H|Quthing~G|Thaba-Tseka~K"],["Liberia","LR","Bomi~BM|Bong~BG|Gbarpolu~GP|Grand Bassa~GB|Grand Cape Mount~CM|Grand Gedeh~GG|Grand Kru~GK|Lofa~LO|Margibi~MG|Maryland~MY|Montserrado~MO|Nimba~NI|River Cess~RI|River Geee~RG|Sinoe~SI"],["Libya","LY","Al Buţnān~BU|Al Jabal al Akhḑar~JA|Al Jabal al Gharbī~JG|Al Jafārah~JI|Al Jufrah~JU|Al Kufrah~FK|Al Marj~MJ|Al Marquab~MB|Al Wāḩāt~WA|An Nuqaţ al Khams~NQ|Az Zāwiyah~ZA|Banghāzī~BA|Darnah~DR|Ghāt~GH|Mişrātah~MI|Murzuq~MQ|Nālūt~NL|Sabhā~SB|Surt~SR|Ţarābulus~TB|Yafran~WD|Wādī ash Shāţiʾ~WS"],["Liechtenstein","LI","Balzers~01|Eschen~02|Gamprin~03|Mauren~04|Planken~05|Ruggell~06|Schaan~07|Schellenberg~08|Triesen~09|Triesenberg~10|Vaduz~11"],["Lithuania","LT","Alytaus~AL|Kauno~KU|Klaipėdos~KL|Marijampolės~MR|Panevėžio~PN|Šiaulių~SA|Tauragės~TA|Telšių~TE|Utenos~UT|Vilniaus~VL"],["Luxembourg","LU","Capellen~CA|Clevaux~CL|Diekirch~DI|Echternach~EC|Esch-sur-Alzette~ES|Grevenmacher~GR|Luxembourg~LU|Mersch~ME|Redange~RD|Remich~RM|Vianden~VD|Wiltz~WI"],["Macao","MO","Macao~undefined"],["Macedonia, Republic of","MK","Aračinovo~02|Berovo~03|Bitola~04|Bogdanci~05|Bogovinje~06|Bosilovo~07|Brvenica~08|Centar Župa~78|Čaška~80|Češinovo-Obleševo~81|Čučer Sandevo~82|Debar~21|Debarca~22|Delčevo~23|Demir Hisar~25|Demir Kapija~24|Doran~26|Dolneni~27|Gevgelija~18|Gostivar~19|Gradsko~20|Ilinden~34|Jegunovce~35|Karbinci~37|Kavadarci~36|Kičevo~40|Kočani~42|Konče~41|Kratovo~43|Kriva Palanka~44|Krivogaštani~45|Kruševo~46|Kumanovo~47|Lipkovo~48|Lozovo~49|Makedonska Kamenica~51|Makedonski Brod~52|Mavrovo i Rostuša~50|Mogila~53|Negotino~54|Novaci~55|Novo Selo~56|Ohrid~58|Pehčevo~60|Petrovec~59|Plasnica~61|Prilep~62|Probištip~63|Radoviš~|Rankovce~65|Resen~66|Rosoman~67|Skopje~85|Sopište~70|Staro Nagoričane~71|Struga~72|Strumica~73|Studeničani~74|Sveti Nikole~69|Štip~83|Tearce~75|Tetovo~76|Valandovo~10|Vasilevo~11|Veles~13|Vevčani~12|Vinica~14|Vrapčište~16|Zelenikovo~32|Zrnovci~33|Želino~30"],["Madagascar","MG","Antananarivo~T|Antsiranana~D|Fianarantsoa~F|Mahajanga~M|Toamasina~A|Toliara~U"],["Malawi","MW","Balaka~BA|Blantyre~BL|Chikwawa~CK|Chiradzulu~CR|Chitipa~CT|Dedza~DE|Dowa~DO|Karonga~KR|Kasungu~KS|Likoma~LK|Lilongwe~LI|Machinga~MH|Mangochi~MG|Mchinji~MC|Mulanje~MU|Mwanza~MW|Mzimba~MZ|Nkhata Bay~NE|Nkhotakota~NB|Nsanje~NS|Ntcheu~NU|Ntchisi~NI|Phalombe~PH|Rumphi~RU|Salima~SA|Thyolo~TH|Zomba~ZO"],["Malaysia","MY","Johor~01|Kedah~02|Kelantan~03|Melaka~04|Negeri Sembilan~05|Pahang~06|Perak~08|Perlis~09|Pulau Pinang~07|Sabah~12|Sarawak~13|Selangor~10|Terengganu~11|Wilayah Persekutuan (Kuala Lumpur)~14|Wilayah Persekutuan (Labuan)~15|Wilayah Persekutuan (Putrajaya)~16"],["Maldives","MV","Alifu Alifu~02|Alifu Dhaalu~00|Baa~20|Dhaalu~17|Faafu~14|Gaafu Alifu~27|Gaafu Dhaalu~28|Gnaviyani~29|Haa Alifu~07|Haa Dhaalu~23|Kaafu~26|Laamu~05|Lhaviyani~03|Malé~MLE|Meemu~12|Noonu~25|Raa~13|Seenu~01|Shaviyani~24|Thaa~08|Vaavu~04"],["Mali","ML","Bamako~BKO|Gao~7|Kayes~1|Kidal~8|Koulikoro~2|Mopti~5|Segou~4|Sikasso~3|Tombouctou~6|Taoudénit~9|Ménaka~10"],["Malta","MT","Attard~01|Balzan~02|Birgu~03|Birkirkara~04|Birżebbuġa~05|Bormla~06|Dingli~07|Fgura~08|Floriana~09|Fontana~10|Guda~11|Gżira~12|Għajnsielem~13|Għarb~14|Għargħur~15|Għasri~16|Għaxaq~17|Ħamrun~18|Iklin~19|Isla~20|Kalkara~21|Kerċem~22|Kirkop~23|Lija~24|Luqa~25|Marsa~26|Marsaskala~27|Marsaxlokk~28|Mdina~29|Mellieħa~30|Mġarr~31|Mosta~32|Mqabba~33|Msida~34|Mtarfa~35|Munxar~36|Nadur~37|Naxxar~38|Paola~39|Pembroke~40|Pietà~41|Qala~42|Qormi~43|Qrendi~44|Rabat Għawdex~45|Rabat Malta~46|Safi~47|San Ġiljan~48|San Ġwann~49|San Lawrenz~50|San Pawl il-Baħar~51|Sannat~52|Santa Luċija~53|Santa Venera~54|Siġġiewi~55|Sliema~56|Swieqi~57|Tai Xbiex~58|Tarzien~59|Valletta~60|Xagħra~61|Xewkija~62|Xgħajra~63|Żabbar~64|Żebbuġ Għawde~65|Żebbuġ Malta~66|Żejtun~67|Żurrieq~68"],["Marshall Islands","MH","Ailinglaplap~ALL|Ailuk~ALK|Arno~ARN|Aur~AUR|Bikini and Kili~KIL|Ebon~EBO|Jabat~JAB|Jaluit~JAL|Kwajalein~KWA|Lae~LAE|Lib~LIB|Likiep~LIK|Majuro~MAJ|Maloelap~MAL|Mejit~MEJ|Namdrik~NMK|Namu~NMU|Rongelap~RON|Ujae~UJA|Utrik~UTI|Wotho~WTH|Wotje~WTJ"],["Martinique","MQ","Martinique~undefined"],["Mauritania","MR","Adrar~07|Assaba~03|Brakna~05|Dakhlet Nouadhibou~08|Gorgol~04|Guidimaka~10|Hodh Ech Chargui~01|Hodh El Gharbi~02|Inchiri~12|Nouakchott Nord~14|Nouakchott Ouest~13|Nouakchott Sud~15|Tagant~09|Tiris Zemmour~11|Trarza~06"],["Mauritius","MU","Agalega Islands~AG|Beau Bassin-Rose Hill~BR|Black River~BL|Cargados Carajos Shoals~CC|Curepipe~CU|Flacq~FL|Grand Port~GP|Moka~MO|Pamplemousses~PA|Plaines Wilhems~PW|Port Louis (City)~PU|Port Louis~PL|Riviere du Rempart~RR|Rodrigues Island~RO|Savanne~SA|Vacoas-Phoenix~CP"],["Mayotte","YT","Dzaoudzi~01|Pamandzi~02|Mamoudzou~03|Dembeni~04|Bandrélé~05|Kani-Kéli~06|Bouéni~07|Chirongui~08|Sada~09|Ouangani~10|Chiconi~11|Tsingoni~12|M'Tsangamouji~13|Acoua~14|Mtsamboro~15|Bandraboua~16|Koungou~17"],["Mexico","MX","Aguascalientes~AGU|Baja California~BCN|Baja California Sur~BCS|Campeche~CAM|Ciudad de México~DIF|Chiapas~CHP|Chihuahua~CHH|Coahuila de Zaragoza~COA|Colima~COL|Durango~DUR|Estado de México~MEX|Guanajuato~GUA|Guerrero~GRO|Hidalgo~HID|Jalisco~JAL|Michoacán de Ocampo~MIC|Morelos~MOR|Nayarit~NAY|Nuevo León~NLE|Oaxaca~OAX|Puebla~PUE|Querétaro de Arteaga~QUE|Quintana Roo~ROO|San Luis Potosí~SLP|Sinaloa~SIN|Sonora~SON|Tabasco~TAB|Tamaulipas~TAM|Tlaxcala~TLA|Veracruz~VER|Yucatán~YUC|Zacatecas~ZAC"],["Micronesia, Federated States of","FM","Chuuk (Truk)~TRK|Kosrae~KSA|Pohnpei~PNI|Yap~YAP"],["Moldova","MD","Aenii Noi~AN|Basarabeasca~BS|Bălți~BA|Bender~BD|Briceni~BR|Cahul~CA|Cantemir~CT|Călărași~CL|Căușeni~CS|Chișinău~CU|Cimișlia~CM|Criuleni~CR|Dondușeni~DO|Drochia~DR|Dubăsari~DU|Edineț~ED|Fălești~FA|Florești~FL|Găgăuzia~GA|Glodeni~GL|Hîncești~HI|Ialoveni~IA|Leova~LE|Nisporeni~NI|Ocnița~OC|Orhei~OR|Rezina~RE|Rîșcani~RI|Sîngerei~SI|Soroca~SO|Stânga Nistrului~SN|Strășeni~ST|Șoldănești~SD|Ștefan Vodă~SV|Taraclia~TA|Telenești~TE|Ungheni~UN"],["Monaco","MC","Colle~CL|Condamine~CO|Fontvieille~FO|Gare~GA|Jardin Exotique~JE|Larvotto~LA|Malbousquet~MA|Monaco-Ville~MO|Moneghetti~MG|Monte-Carlo~MC|Moulins~MU|Port-Hercule~PH|Saint-Roman~SR|Sainte-Dévote~SD|Source~SO|Spélugues~SP|Vallon de la Rousse~VR"],["Mongolia","MN","Arhangay~073|Bayan-Olgiy~071|Bayanhongor~069|Bulgan~067|Darhan~037|Dornod~061|Dornogovi~063|Dundgovi~059|Dzavhan~057|Govi-Altay~065|Govi-Sumber~064|Hovd~043|Hovsgol~041|Omnogovi~053|Ovorhangay~055|Selenge~049|Suhbaatar~051|Tov~047|Ulaanbaatar~1|Uvs~046"],["Montenegro","ME","Andrijevica~01|Bar~02|Berane~03|Bijelo Polje~04|Budva~05|Cetinje~06|Danilovgrad~07|Gusinje~22|Herceg Novi~08|Kolašin~09|Kotor~10|Mojkovac~11|Nikšić~12|Petnica~23|Plav~13|Plužine~14|Pljevlja~15|Podgorica~16|Rožaje~17|Šavnik~18|Tivat~19|Ulcinj~20|Žabljak~21"],["Montserrat","MS","Saint Anthony~undefined|Saint Georges~undefined|Saint Peter's~undefined"],["Morocco","MA","Tanger-Tétouan-Al Hoceïma~MA-01|L'Oriental~MA-02|Fès-Meknès~MA-03|Rabat-Salé-Kénitra~MA-04|Béni Mellal-Khénifra~MA-05|Casablanca-Settat~MA-06|Marrakech-Safi~MA-07|Drâa-Tafilalet~MA-08|Souss-Massa~MA-09|Guelmim-Oued Noun~MA-10|Laâyoune-Sakia El Hamra~MA-11|Dakhla-Oued Ed-Dahab~MA-12"],["Mozambique","MZ","Cabo Delgado~P|Gaza~G|Inhambane~I|Manica~B|Maputo~L|Maputo (City)~MPM|Nampula~N|Niassa~A|Sofala~S|Tete~T|Zambezia~Q"],["Myanmar","MM","Ayeyarwady~07|Bago~02|Chin~14|Kachin~11|Kayah~12|Kayin~13|Magway~03|Mandalay~04|Mon~15|Nay Pyi Taw~18|Rakhine~16|Sagaing~01|Shan~17|Tanintharyi~05|Yangon~06"],["Namibia","NA","Erongo~ER|Hardap~HA|Kavango East~KE|Kavango West~KW|Karas~KA|Khomas~KH|Kunene~KU|Ohangwena~OW|Omaheke~OH|Omusati~OS|Oshana~ON|Oshikoto~OT|Otjozondjupa~OD|Zambezi~CA"],["Nauru","NR","Aiwo~01|Anabar~02|Anetan~03|Anibare~04|Baiti~05|Boe~06|Buada~07|Denigomodu~08|Ewa~09|Ijuw~10|Meneng~11|Nibok~12|Uaboe~13|Yaren~14"],["Nepal","NP","Province No. 1~1|Province No. 2~2|Bagmati Province~3|Gandaki Province~4|Lumbini Province~5|Karnali Province~6|Sudurpashchim~7"],["Netherlands","NL","Drenthe~DR|Flevoland~FL|Friesland~FR|Gelderland~GE|Groningen~GR|Limburg~LI|Noord-Brabant~NB|Noord-Holland~NH|Overijssel~OV|Utrecht~UT|Zeeland~ZE|Zuid-Holland~ZH"],["New Caledonia","NC","Iles Loyaute~undefined|Nord~undefined|Sud~undefined"],["New Zealand","NZ","Auckland~AUK|Bay of Plenty~BOP|Canterbury~CAN|Gisborne~GIS|Hawke's Bay~HKB|Marlborough~MBH|Manawatu-Wanganui~MWT|Northland~NTL|Nelson~NSN|Otago~OTA|Southland~STL|Taranaki~TKI|Tasman~TAS|Waikato~WKO|Wellington~WGN|West Coast~WTC|Chatham Islands Territory~CIT"],["Nicaragua","NI","Boaco~BO|Carazo~CA|Chinandega~CI|Chontales~CO|Estelí~ES|Granada~GR|Jinotega~JI|León~LE|Madriz~MD|Managua~MN|Masaya~MS|Matagalpa~MT|Nueva Segovia~NS|Río San Juan~SJ|Rivas~RI|Atlántico Norte~AN|Atlántico Sur~AS"],["Niger","NE","Agadez~1|Diffa~2|Dosso~3|Maradi~4|Niamey~8|Tahoua~5|Tillabéri~6|Zinder~7"],["Nigeria","NG","Abia~AB|Abuja Federal Capital Territory~FC|Adamawa~AD|Akwa Ibom~AK|Anambra~AN|Bauchi~BA|Bayelsa~BY|Benue~BE|Borno~BO|Cross River~CR|Delta~DE|Ebonyi~EB|Edo~ED|Ekiti~EK|Enugu~EN|Gombe~GO|Imo~IM|Jigawa~JI|Kaduna~KD|Kano~KN|Katsina~KT|Kebbi~KE|Kogi~KO|Kwara~KW|Lagos~LA|Nassarawa~NA|Niger~NI|Ogun~OG|Ondo~ON|Osun~OS|Oyo~OY|Plateau~PL|Rivers~RI|Sokoto~SO|Taraba~TA|Yobe~YO|Zamfara~ZA"],["Niue","NU","Niue~undefined"],["Norfolk Island","NF","Norfolk Island~undefined"],["Northern Mariana Islands","MP","Northern Islands~undefined|Rota~undefined|Saipan~undefined|Tinian~undefined"],["Norway","NO","Akershus~02|Aust-Agder~09|Buskerud~06|Finnmark~20|Hedmark~04|Hordaland~12|Møre og Romsdal~15|Nordland~18|Nord-Trøndelag~17|Oppland~05|Oslo~03|Rogaland~11|Sogn og Fjordane~14|Sør-Trøndelag~16|Telemark~08|Troms~19|Vest-Agder~10|Vestfold~07|Østfold~01|Jan Mayen~22|Svalbard~21"],["Oman","OM","Ad Dakhiliyah~DA|Al Buraymi~BU|Al Wusta~WU|Az Zahirah~ZA|Janub al Batinah~BS|Janub ash Sharqiyah~SS|Masqat~MA|Musandam~MU|Shamal al Batinah~BJ|Shamal ash Sharqiyah~SJ|Zufar~ZU"],["Pakistan","PK","Āzād Kashmīr~JK|Balōchistān~BA|Gilgit-Baltistān~GB|Islāmābād~IS|Khaībar Pakhtūnkhwās~KP|Punjāb~PB|Sindh~SD|Federally Administered Tribal Areas~TA"],["Palau","PW","Aimeliik~002|Airai~004|Angaur~010|Hatobohei~050|Kayangel~100|Koror~150|Melekeok~212|Ngaraard~214|Ngarchelong~218|Ngardmau~222|Ngatpang~224|Ngchesar~226|Ngeremlengui~227|Ngiwal~228|Peleliu~350|Sonsoral~370"],["Palestine, State of","PS","Ak Khalīl~HBN|Al Quds~JEM|Arīḩā wal Aghwār~JRH|Bayt Laḩm~BTH|Dayr al Balaḩ~DEB|Ghazzah~GZA|Janīn~JEN|Khān Yūnis~KYS|Nāblus~NBS|Qalqīyah~QQA|Rafaḩ~RFH|Rām Allāh wal Bīrah~RBH|Salfīt~SLT|Shamāl Ghazzah~NGZ|Ţūbās~TBS|Ţūlkarm~TKM"],["Panama","PA","Bocas del Toro~1|Chiriquí~4|Coclé~2|Colón~3|Darién~5|Emberá~EM|Herrera~6|Kuna Yala~KY|Los Santos~7|Ngäbe-Buglé~NB|Panamá~8|Panamá Oeste~10|Veraguas~9"],["Papua New Guinea","PG","Bougainville~NSB|Central~CPM|Chimbu~CPK|East New Britain~EBR|East Sepik~ESW|Eastern Highlands~EHG|Enga~EPW|Gulf~GPK|Hela~HLA|Jiwaka~JWK|Madang~MOM|Manus~MRL|Milne Bay~MBA|Morobe~MPL|Port Moresby~NCD|New Ireland~NIK|Northern~NPP|Southern Highlands~SHM|West New Britain~WBK|West Sepik~SAN|Western~WPD|Western Highlands~WHM"],["Paraguay","PY","Alto Paraguay~16|Alto Parana~10|Amambay~13|Asuncion~ASU|Caaguazu~5|Caazapa~6|Canindeyu~14|Central~11|Concepcion~1|Cordillera~3|Boqueron~17|Guaira~4|Itapua~7|Misiones~8|Neembucu~12|Paraguari~9|Presidente Hayes~15|San Pedro~2"],["Peru","PE","Amazonas~AMA|Ancash~ANC|Apurimac~APU|Arequipa~ARE|Ayacucho~AYA|Cajamarca~CAJ|Callao~CAL|Cusco~CUS|Huancavelica~HUV|Huanuco~HUC|Ica~ICA|Junin~JUN|La Libertad~LAL|Lambayeque~LAM|Lima~LIM|Loreto~LOR|Madre de Dios~MDD|Moquegua~MOQ|Municipalidad Metropolitana de Lima~LMA|Pasco~PAS|Piura~PIU|Puno~PUN|San Martin~SAM|Tacna~TAC|Tumbes~TUM|Ucayali~UCA"],["Philippines","PH","Abra~ABR|Agusan del Norte~AGN|Agusan del Sur~AGS|Aklan~AKL|Albay~ALB|Antique~ANT|Apayao~APA|Aurora~AUR|Basilan~BAS|Bataan~BAN|Batanes~BTN|Batangas~BTG|Benguet~BEN|Biliran~BIL|Bohol~BOH|Bukidnon~BUK|Bulacan~BUL|Cagayan~CAG|Camarines Norte~CAN|Camarines Sur~CAS|Camiguin~CAM|Capiz~CAP|Catanduanes~CAT|Cavite~CAV|Cebu~CEB|Compostela~COM|Cotabato~NCO|Davao del Norte~DAV|Davao del Sur~DAS|Davao Occidental~DVO|Davao Oriental~DAO|Dinagat Islands~DIN|Eastern Samar~EAS|Guimaras~GUI|Ifugao~IFU|Ilocos Norte~ILN|Ilocos Sur~ILS|Iloilo~ILI|Isabela~ISA|Kalinga~KAL|La Union~LUN|Laguna~LAG|Lanao del Norte~LAN|Lanao del Sur~LAS|Leyte~LEY|Maguindanao~MAG|Masbate~MAS|Metro Manila~00|Mindoro Occidental~MDC|Mindoro Oriental~MDR|Misamis Occidental~MSC|Misamis Oriental~MSR|Mountain Province~MOU|Negros Occidental~NEC|Negros Oriental~NER|Northern Samar~NSA|Nueva Ecija~NUE|Nueva Vizcaya~NUV|Palawan~PLW|Pampanga~PAM|Pangasinan~PAN|Quezon~QUE|Quirino~QUI|Rizal~RIZ|Romblon~ROM|Samar~WSA|Sarangani~SAR|Siquijor~SIG|Sorsogon~SOR|Southern Leyte~SLE|Sultan Kudarat~AUK|Sulu~SLU|Surigao del Norte~SUN|Surigao del Sur~SUR|Tarlac~TAR|Tawi-Tawi~TAW|Zambales~ZMB|Zamboanga del Norte~ZAN|Zamboanga del Sur~ZAS|Zamboanga Sibugay~ZSI"],["Pitcairn","PN","Pitcairn Islands~undefined"],["Poland","PL","Dolnośląskie~DS|Kujawsko-pomorskie~KP|Łódzkie~LD|Lubelskie~LU|Lubuskie~LB|Małopolskie~MA|Mazowieckie~MZ|Opolskie~OP|Podkarpackie~PK|Podlaskie~PD|Pomorskie~PM|Śląskie~SL|Świętokrzyskie~SK|Warmińsko-mazurskie~WN|Wielkopolskie~WP|Zachodniopomorskie~ZP"],["Portugal","PT","Açores~20|Aveiro~01|Beja~02|Braga~03|Bragança~04|Castelo Branco~05|Coimbra~06|Évora~07|Faro~08|Guarda~09|Leiria~10|Lisboa~11|Madeira~30|Portalegre~12|Porto~13|Santarém~14|Setúbal~15|Viana do Castelo~16|Vila Real~17|Viseu~18"],["Puerto Rico","PR","Adjuntas~undefined|Aguada~undefined|Aguadilla~undefined|Aguas Buenas~undefined|Aibonito~undefined|Anasco~undefined|Arecibo~undefined|Arroyo~undefined|Barceloneta~undefined|Barranquitas~undefined|Bayamon~undefined|Cabo Rojo~undefined|Caguas~undefined|Camuy~undefined|Canovanas~undefined|Carolina~undefined|Cat~undefined|Ceiba~undefined|Ciales~undefined|Cidra~undefined|Coamo~undefined|Comerio~undefined|Corozal~undefined|Culebra~undefined|Dorado~undefined|Fajardo~undefined|Florida~undefined|Guanica~undefined|Guayama~undefined|Guayanilla~undefined|Guaynabo~undefined|Gurabo~undefined|Hatillo~undefined|Hormigueros~undefined|Humacao~undefined|Isabe~undefined|Juana Diaz~undefined|Juncos~undefined|Lajas~undefined|Lares~undefined|Las Marias~undefined|Las oiza~undefined|Luquillo~undefined|Manati~undefined|Maricao~undefined|Maunabo~undefined|Mayaguez~undefined|Moca~undefined|Morovis~undefined|Naguabo~undefined|Naranjito~undefined|Orocovis~undefined|Patillas~undefined|Penuelas~undefined|Ponce~undefined|Quebradillas~undefined|Rincon~undefined|Rio Grande~undefined|Sabana linas~undefined|San German~undefined|San Juan~undefined|San Lorenzo~undefined|San Sebastian~undefined|Santa Isabel~undefined|Toa Alta~undefined|Toa Baja~undefined|Trujillo Alto~undefined|Utuado~undefined|Vega Alta~undefined|Vega ues~undefined|Villalba~undefined|Yabucoa~undefined|Yauco~undefined"],["Qatar","QA","Ad Dawḩah~DA|Al Khawr wa adh Dhakhīrah~KH|Al Wakrah~WA|Ar Rayyān~RA|Ash Shamāl~MS|Az̧ Za̧`āyin~ZA|Umm Şalāl~US"],["Réunion","RE","Réunion~undefined"],["Romania","RO","Alba~AB|Arad~AR|Arges~AG|Bacau~BC|Bihor~BH|Bistrita-Nasaud~BN|Botosani~BT|Braila~BR|Brasov~BV|Bucuresti~B|Buzau~BZ|Calarasi~CL|Caras-Severin~CS|Cluj~CJ|Constanta~CT|Covasna~CV|Dambovita~DB|Dolj~DJ|Galati~GL|Giurgiu~GR|Gorj~GJ|Harghita~HR|Hunedoara~HD|Ialomita~IL|Iasi~IS|Maramures~MM|Mehedinti~MH|Mures~MS|Neamt~NT|Olt~OT|Prahova~PH|Salaj~SJ|Satu Mare~SM|Sibiu~SB|Suceava~SV|Teleorman~TR|Timis~TM|Tulcea~TL|Valcea~VL|Vaslui~VS|Vrancea~VN"],["Russian Federation","RU","Republic of Adygea~AD|Republic of Altai (Gorno-Altaysk)~AL|Altai Krai~ALT|Amur Oblast~AMU|Arkhangelsk Oblast~ARK|Astrakhan Oblast~AST|Republic of Bashkortostan~BA|Belgorod Oblast~BEL|Bryansk Oblast~BRY|Republic of Buryatia~BU|Chechen Republic~CE|Chelyabinsk Oblast~CHE|Chukotka Autonomous Okrug~CHU|Chuvash Republic~CU|Republic of Dagestan~DA|Republic of Ingushetia~IN|Irkutsk Oblast~IRK|Ivanovo Oblast~IVA|Jewish Autonomous Oblast~JEW|Kabardino-Balkar Republic~KB|Kaliningrad Oblast~KLN|Republic of Kalmykia~KL|Kaluga Oblast~KLU|Kamchatka Krai~KAM|Karachay-Cherkess Republic~KC|Republic of Karelia~KR|Khabarovsk Krai~KHA|Republic of Khakassia~KK|Khanty-Mansi Autonomous Okrug - Yugra~KHM|Kemerovo Oblast~KEM|Kirov Oblast~KIR|Komi Republic~KO|Kostroma Oblast~KOS|Krasnodar Krai~KDA|Krasnoyarsk Krai~KYA|Kurgan Oblast~KGN|Kursk Oblast~KRS|Leningrad Oblast~LEN|Lipetsk Oblast~LIP|Magadan Oblast~MAG|Mari El Republic~ME|Republic of Mordovia~MO|Moscow Oblast~MOS|Moscow~MOW|Murmansk Oblast~MU|Nenets Autonomous Okrug~NEN|Nizhny Novgorod Oblast~NIZ|Novgorod Oblast~NGR|Novosibirsk Oblast~NVS|Omsk Oblast~OMS|Orenburg Oblast~ORE|Oryol Oblast~ORL|Penza Oblast~PNZ|Perm Krai~PER|Primorsky Krai~PRI|Pskov Oblast~PSK|Rostov Oblast~ROS|Ryazan Oblast~RYA|Saint Petersburg~SPE|Sakha (Yakutia) Republic~SA|Sakhalin Oblast~SAK|Samara Oblast~SAM|Saratov Oblast~SAR|Republic of North Ossetia-Alania~NOA|Smolensk Oblast~SMO|Stavropol Krai~STA|Sverdlovsk Oblast~SVE|Tambov Oblast~TAM|Republic of Tatarstan~TA|Tomsk Oblast~TOM|Tuva Republic~TU|Tula Oblast~TUL|Tver Oblast~TVE|Tyumen Oblast~TYU|Udmurt Republic~UD|Ulyanovsk Oblast~ULY|Vladimir Oblast~VLA|Volgograd Oblast~VGG|Vologda Oblast~VLG|Voronezh Oblast~VOR|Yamalo-Nenets Autonomous Okrug~YAN|Yaroslavl Oblast~YAR|Zabaykalsky Krai~ZAB"],["Rwanda","RW","Kigali~01|Eastern~02|Northern~03|Western~04|Southern~05"],["Saint Barthélemy","BL","Au Vent~02|Sous le Vent~01"],["Saint Helena, Ascension and Tristan da Cunha","SH","Ascension~AC|Saint Helena~HL|Tristan da Cunha~TA"],["Saint Kitts and Nevis","KN","Saint Kitts~K|Nevis~N"],["Saint Lucia","LC","Anse-la-Raye~01|Canaries~12|Castries~02|Choiseul~03|Dennery~05|Gros Islet~06|Laborie~07|Micoud~08|Soufriere~10|Vieux Fort~11"],["Saint Martin","MF","Saint Martin~undefined"],["Saint Pierre and Miquelon","PM","Miquelon~undefined|Saint Pierre~undefined"],["Saint Vincent and the Grenadines","VC","Charlotte~01|Grenadines~06|Saint Andrew~02|Saint David~03|Saint George~04|Saint Patrick~05"],["Samoa","WS","A'ana~AA|Aiga-i-le-Tai~AL|Atua~AT|Fa'asaleleaga~FA|Gaga'emauga~GE|Gagaifomauga~GI|Palauli~PA|Satupa'itea~SA|Tuamasaga~TU|Va'a-o-Fonoti~VF|Vaisigano~VS"],["San Marino","SM","Acquaviva~01|Borgo Maggiore~06|Chiesanuova~02|Domagnano~03|Faetano~04|Fiorentino~05|Montegiardino~08|San Marino~07|Serravalle~09"],["Sao Tome and Principe","ST","Principe~P|Sao Tome~S"],["Saudi Arabia","SA","'Asir~14|Al Bahah~11|Al Hudud ash Shamaliyah~08|Al Jawf~12|Al Madinah al Munawwarah~03|Al Qasim~05|Ar Riyad~01|Ash Sharqiyah~04|Ha'il~06|Jazan~09|Makkah al Mukarramah~02|Najran~10|Tabuk~07"],["Senegal","SN","Dakar~DK|Diourbel~DB|Fatick~FK|Kaffrine~KA|Kaolack~KL|Kedougou~KE|Kolda~KD|Louga~LG|Matam~MT|Saint-Louis~SL|Sedhiou~SE|Tambacounda~TC|Thies~TH|Ziguinchor~ZG"],["Serbia","RS","Beograd (Belgrade)~00|Borski~14|Braničevski~11|Jablanički~23|Južnobački~06|Južnobanatski~04|Kolubarski~09|Kosovski~25|Kosovsko-Mitrovački~28|Kosovsko-Pomoravski~29|Mačvanski~08|Moravički~17|Nišavski~20|Pčinjski~24|Pećki~26|Pirotski~22|Podunavski~10|Pomoravski~13|Prizrenski~27|Rasinski~19|Raški~18|Severnobački~01|Severnobanatski~03|Srednjebanatski~02|Sremski~07|Šumadijski~12|Toplički~21|Zaječarski~15|Zapadnobački~05|Zlatiborski~16"],["Seychelles","SC","Anse aux Pins~01|Anse Boileau~02|Anse Etoile~03|Anse Royale~05|Anu Cap~04|Baie Lazare~06|Baie Sainte Anne~07|Beau Vallon~08|Bel Air~09|Bel Ombre~10|Cascade~11|Glacis~12|Grand'Anse Mahe~13|Grand'Anse Praslin~14|La Digue~15|La Riviere Anglaise~16|Les Mamelles~24|Mont Buxton~17|Mont Fleuri~18|Plaisance~19|Pointe La Rue~20|Port Glaud~21|Roche Caiman~25|Saint Louis~22|Takamaka~23"],["Sierra Leone","SL","Eastern~E|Northern~N|Southern~S|Western~W"],["Singapore","SG","Central Singapore~01|North East~02|North West~03|South East~04|South West~05"],["Sint Maarten (Dutch part)","SX","Sint Maarten~undefined"],["Slovakia","SK","Banskobystricky~BC|Bratislavsky~BL|Kosicky~KI|Nitriansky~NI|Presovsky~PV|Trenciansky~TC|Trnavsky~TA|Zilinsky~ZI"],["Slovenia","SI","Ajdovscina~001|Apace~195|Beltinci~002|Benedikt~148|Bistrica ob Sotli~149|Bled~003|Bloke~150|Bohinj~004|Borovnica~005|Bovec~006|Braslovce~151|Brda~007|Brezice~009|Brezovica~008|Cankova~152|Celje~011|Cerklje na Gorenjskem~012|Cerknica~013|Cerkno~014|Cerkvenjak~153|Cirkulane~196|Crensovci~015|Crna na Koroskem~016|Crnomelj~017|Destrnik~018|Divaca~019|Dobje~154|Dobrepolje~020|Dobrna~155|Dobrova-Polhov Gradec~021|Dobrovnik~156|Dol pri Ljubljani~022|Dolenjske Toplice~157|Domzale~023|Dornava~024|Dravograd~025|Duplek~026|Gorenja Vas-Poljane~027|Gorisnica~028|Gorje~207|Gornja Radgona~029|Gornji Grad~030|Gornji Petrovci~031|Grad~158|Grosuplje~032|Hajdina~159|Hoce-Slivnica~160|Hodos~161|Horjul~162|Hrastnik~034|Hrpelje-Kozina~035|Idrija~036|Ig~037|Ilirska Bistrica~038|Ivancna Gorica~039|Izola~040|Jesenice~041|Jursinci~042|Kamnik~043|Kanal~044|Kidricevo~045|Kobarid~046|Kobilje~047|Kocevje~048|Komen~049|Komenda~164|Koper~050|Kodanjevica na Krki~197|Kostel~165|Kozje~051|Kranj~052|Kranjska Gora~053|Krizevci~166|Krsko~054|Kungota~055|Kuzma~056|Lasko~057|Lenart~058|Lendava~059|Litija~060|Ljubljana~061|Ljubno~062|Ljutomer~063|Log-Dragomer~208|Logatec~064|Loska Dolina~065|Loski Potok~066|Lovrenc na Pohorju~167|Lukovica~068|Luce~067|Majsperk~069|Makole~198|Maribor~070|Markovci~168|Medvode~071|Menges~072|Metlika~073|Mezica~074|Miklavz na Dravskem Polju~169|Miren-Kostanjevica~075|Mirna~212|Mirna Pec~170|Mislinja~076|Mokronog-Trebelno~199|Moravce~077|Moravske Toplice~078|Mozirje~079|Murska Sobota~080|Naklo~082|Nazarje~083|Nova Gorica~084|Novo Mesto~085|Odranci~086|Ormoz~087|Osilnica~088|Pesnica~089|Piran~090|Pivka~091|Podcetrtek~092|Podlehnik~172|Podvelka~093|Poljcane~200|Postojna~094|Prebold~174|Preddvor~095|Prevalje~175|Ptuj~096|Race-Fram~098|Radece~099|Radenci~100|Radlje ob Dravi~101|Radovljica~102|Ravne na Koroskem~103|Razkrizje~176|Recica ob Savinji~209|Rence-Vogrsko~201|Ribnica~104|Ribnica na Poboriu~177|Rogaska Slatina~106|Rogasovci~105|Rogatec~107|Ruse~108|Salovci~033|Selnica ob Dravi~178|Semic~109|Sempeter-Vrtojba~183|Sencur~117|Sentilj~118|Sentjernej~119|Sentjur~120|Sentrupert~211|Sevnica~110|Sezana~111|Skocjan~121|Skofja Loka~122|Skofljica~123|Slovenj Gradec~112|Slovenska Bistrica~113|Slovenske Konjice~114|Smarje pri elsah~124|Smarjeske Toplice~206|Smartno ob Paki~125|Smartno pri Litiji~194|Sodrazica~179|Solcava~180|Sostanj~126|Sredisce ob Dravi~202|Starse~115|Store~127|Straza~203|Sveta Ana~181|Sveta Trojica v Slovenskih Goricah~204|Sveta Andraz v Slovenskih Goricah~182|Sveti Jurij~116|Sveti Jurij v Slovenskih Goricah~210|Sveti Tomaz~205|Tabor~184|Tisina~010|Tolmin~128|Trbovlje~129|Trebnje~130|Trnovska Vas~185|Trzin~186|Trzic~131|Turnisce~132|Velenje~133|Velika Polana~187|Velike Lasce~134|Verzej~188|Videm~135|Vipava~136|Vitanje~137|Vodice~138|Vojnik~139|Vransko~189|Vrhnika~140|Vuzenica~141|Zagorje ob Savi~142|Zavrc~143|Zrece~144|Zalec~190|Zelezniki~146|Zetale~191|Ziri~147|Zirovnica~192|Zuzemberk~193"],["Solomon Islands","SB","Central~CE|Choiseul~CH|Guadalcanal~GU|Honiara~CT|Isabel~IS|Makira-Ulawa~MK|Malaita~ML|Rennell and Bellona~RB|Temotu~TE|Western~WE"],["Somalia","SO","Awdal~AW|Bakool~BK|Banaadir~BN|Bari~BR|Bay~BY|Galguduud~GA|Gedo~GE|Hiiraan~HI|Jubbada Dhexe~JD|Jubbada Hoose~JH|Mudug~MU|Nugaal~NU|Sanaag~SA|Shabeellaha Dhexe~SD|Shabeellaha Hoose~SH|Sool~SO|Togdheer~TO|Woqooyi Galbeed~WO"],["South Africa","ZA","Eastern Cape~EC|Free State~FS|Gauteng~GT|KwaZulu-Natal~NL|Limpopo~LP|Mpumalanga~MP|Northern Cape~NC|North West~NW|Western Cape~WC"],["South Georgia and South Sandwich Islands","GS","Bird Island~undefined|Bristol Island~undefined|Clerke Rocks~undefined|Montagu Island~undefined|Saunders Island~undefined|South Georgia~undefined|Southern Thule~undefined|Traversay Islands~undefined"],["South Sudan","SS","Central Equatoria~CE|Eastern Equatoria~EE|Jonglei~JG|Lakes~LK|Northern Bahr el Ghazal~BN|Unity~UY|Upper Nile~NU|Warrap~WR|Western Bahr el Ghazal~BW|Western Equatoria~EW"],["Spain","ES","Albacete~AB|Alicante~A|Almería~AN|Araba/Álava~VI|Asturias~O|Ávila~AV|Badajoz~BA|Barcelona~B|Bizkaia~BI|Burgos~BU|Cáceres~CC|Cádiz~CA|Cantabria~S|Castellón/Castelló~CS|Ceuta~CE|Ciudad Real~CR|Córdoba~CO|A Coruña~C|Cuenca~CU|Gipuzkoa~SS|Girona~GI|Granada~GR|Guadalajara~GU|Huelva~H|Huesca~HU|Illes Balears~PM|Jaén~J|León~LE|Lleida~L|Lugo~LU|Madrid~M|Málaga~MA|Melilla~ML|Murcia~MU|Navarra/Nafarroa~NA|Ourense~OR|Palencia~P|Las Palmas~GC|Pontevedra~PO|La Rioja~LO|Salamanca~SA|Santa Cruz de Tenerife~TF|Segovia~SG|Sevilla~SE|Soria~SO|Tarragona~T|Teruel~TE|Toledo~TO|Valencia/València~V|Valladolid~VA|Zamora~ZA|Zaragoza~Z"],["Sri Lanka","LK","Basnahira~1|Dakunu~3|Madhyama~2|Naegenahira~5|Sabaragamuwa~9|Uturu~4|Uturumaeda~7|Vayamba~6|Uva~8"],["Sudan","SD","Al Bahr al Ahmar~RS|Al Jazirah~GZ|Al Khartum~KH|Al Qadarif~GD|An Nil al Abyad~NW|An Nil al Azraq~NB|Ash Shamaliyah~NO|Gharb Darfur~DW|Gharb Kurdufan~GK|Janub Darfur~DS|Janub Kurdufan~KS|Kassala~KA|Nahr an Nil~NR|Shamal Darfur~DN|Sharq Darfur~DE|Shiamal Kurdufan~KN|Sinnar~SI|Wasat Darfur Zalinjay~DC"],["Suriname","SR","Brokopondo~BR|Commewijne~CM|Coronie~CR|Marowijne~MA|Nickerie~NI|Para~PR|Paramaribo~PM|Saramacca~SA|Sipaliwini~SI|Wanica~WA"],["Swaziland","SZ","Hhohho~HH|Lubombo~LU|Manzini~MA|Shiselweni~SH"],["Sweden","SE","Blekinge~K|Dalarna~W|Gävleborg~X|Gotland~I|Halland~N|Jämtland~Z|Jönköping~F|Kalmar~H|Kronoberg~G|Norrbotten~BD|Örebro~T|Östergötland~E|Skåne~M|Södermanland~D|Stockholm~AB|Uppsala~C|Värmland~S|Västerbotten~AC|Västernorrland~Y|Västmanland~U|Västra Götaland~O"],["Switzerland","CH","Aargau~AG|Appenzell Ausserrhoden~AR|Appenzell Innerhoden~AI|Basel-Landschaft~BL|Basel-Stadt~BS|Bern~BE|Fribourg~FR|Genève~GE|Glarus~GL|Graubünden~GR|Jura~JU|Luzern~LU|Neuchâtel~NE|Nidwalden~NW|Obwalden~OW|Sankt Gallen~SG|Schaffhausen~SH|Schwyz~SZ|Solothurn~SO|Thurgau~TG|Ticino~TI|Uri~UR|Valais~VS|Vaud~VD|Zug~ZG|Zürich~ZH"],["Syrian Arab Republic","SY","Al Hasakah~HA|Al Ladhiqiyah~LA|Al Qunaytirah~QU|Ar Raqqah~RA|As Suwayda'~SU|Dar'a~DR|Dayr az Zawr~DY|Dimashq~DI|Halab~HL|Hamah~HM|Hims~HI|Idlib~ID|Rif Dimashq~RD|Tartus~TA"],["Taiwan","TW","Chang-hua~CHA|Chia-i~CYQ|Hsin-chu~HSQ|Hua-lien~HUA|Kao-hsiung~KHH|Keelung~KEE|Kinmen~KIN|Lienchiang~LIE|Miao-li~MIA|Nan-t'ou~NAN|P'eng-hu~PEN|New Taipei~NWT|P'ing-tung~PING|T'ai-chung~TXG|T'ai-nan~TNN|T'ai-pei~TPE|T'ai-tung~TTT|T'ao-yuan~TAO|Yi-lan~ILA|Yun-lin~YUN"],["Tajikistan","TJ","Dushanbe~DU|Kŭhistoni Badakhshon~GB|Khatlon~KT|Sughd~SU"],["Tanzania, United Republic of","TZ","Arusha~01|Coast~19|Dar es Salaam~02|Dodoma~03|Iringa~04|Kagera~05|Kigoma~08|Kilimanjaro~09|Lindi~12|Manyara~26|Mara~13|Mbeya~14|Morogoro~16|Mtwara~17|Mwanza~18|Pemba North~06|Pemba South~10|Rukwa~20|Ruvuma~21|Shinyanga~22|Singida~23|Tabora~24|Tanga~25|Zanzibar North~07|Zanzibar Central/South~11|Zanzibar Urban/West~15"],["Thailand","TH","Amnat Charoen~37|Ang Thong~15|Bueng Kan~38|Buri Ram~31|Chachoengsao~24|Chai Nat~18|Chaiyaphum~36|Chanthaburi~22|Chiang Mai~50|Chiang Rai~57|Chon Buri~20|Chumphon~86|Kalasin~46|Kamphaeng Phet~62|Kanchanaburi~71|Khon Kaen~40|Krabi~81|Krung Thep Mahanakhon (Bangkok)~10|Lampang~52|Lamphun~51|Loei~42|Lop Buri~16|Mae Hong Son~58|Maha Sarakham~44|Mukdahan~49|Nakhon Nayok~26|Nakhon Phathom~73|Nakhon Phanom~48|Nakhon Ratchasima~30|Nakhon Sawan~60|Nakhon Si Thammarat~80|Nan~55|Narathiwat~96|Nong Bua Lam Phu~39|Nong Khai~43|Nonthaburi~12|Pathum Thani~13|Pattani~94|Phangnga~82|Phatthalung~93|Phayao~56|Phetchabun~67|Phetchaburi~76|Phichit~66|Phitsanulok~65|Phra Nakhon Si Ayutthaya~14|Phrae~54|Phuket~83|Prachin Buri~25|Prachuap Khiri Khan~77|Ranong~85|Ratchaburi~70|Rayong~21|Roi Et~45|Sa Kaeo~27|Sakon Nakhon~47|Samut Prakan~11|Samut Sakhon~74|Samut Songkhram~75|Saraburi~19|Satun~91|Sing Buri~17|Si Sa ket~33|Songkhla~90|Sukhothai~64|Suphan Buri~72|Surat Thani~84|Surin~32|Tak~63|Trang~92|Trat~23|Ubon Ratchathani~34|Udon Thani~41|Uthai Thani~61|Uttaradit~53|Yala~95|Yasothon~35"],["Timor-Leste","TL","Aileu~AL|Ainaro~AN|Baucau~BA|Bobonaro~BO|Cova Lima~CO|Dili~DI|Ermera~ER|Lautem~LA|Liquica~LI|Manatuto~MT|Manufahi~MF|Oecussi~OE|Viqueque~VI"],["Togo","TG","Centre~C|Kara~K|Maritime~M|Plateaux~P|Savannes~S"],["Tokelau","TK","Atafu~undefined|Fakaofo~undefined|Nukunonu~undefined"],["Tonga","TO","'Eua~01|Ha'apai~02|Niuas~03|Tongatapu~04|Vava'u~05"],["Trinidad and Tobago","TT","Arima~ARI|Chaguanas~CHA|Couva-Tabaquite-Talparo~CTT|Diefo Martin~DMN|Mayaro-Rio Claro~MRC|Penal-Debe~PED|Point Fortin~PTF|Port-of-Spain~POS|Princes Town~PRT|San Fernando~SFO|San Juan-Laventille~SJL|Sangre Grande~SGE|Siparia~SIP|Tobago~TOB|Tunapuna-Piarco~TUP"],["Tunisia","TN","Ariana~12|Beja~31|Ben Arous~13|Bizerte~23|Gabes~81|Gafsa~71|Jendouba~32|Kairouan~41|Kasserine~42|Kebili~73|Kef~33|Mahdia~53|Medenine~82|Monastir~52|Nabeul~21|Sfax~61|Sidi Bouzid~43|Siliana~34|Sousse~51|Tataouine~83|Tozeur~72|Tunis~11|Zaghouan~22"],["Turkey","TR","Adana~01|Adiyaman~02|Afyonkarahisar~03|Agri~04|Aksaray~68|Amasya~05|Ankara~06|Antalya~07|Ardahan~75|Artvin~08|Aydin~09|Balikesir~10|Bartin~74|Batman~72|Bayburt~69|Bilecik~11|Bingol~12|Bitlis~13|Bolu~14|Burdur~15|Bursa~16|Canakkale~17|Cankiri~18|Corum~19|Denizli~20|Diyarbakir~21|Duzce~81|Edirne~22|Elazig~23|Erzincan~24|Erzurum~25|Eskisehir~26|Gaziantep~27|Giresun~28|Gumushane~29|Hakkari~30|Hatay~31|Igdir~76|Isparta~32|Istanbul~34|Izmir~35|Kahramanmaras~46|Karabuk~78|Karaman~70|Kars~36|Kastamonu~37|Kayseri~38|Kilis~79|Kirikkale~71|Kirklareli~39|Kirsehir~40|Kocaeli~41|Konya~42|Kutahya~43|Malatya~44|Manisa~45|Mardin~47|Mersin~33|Mugla~48|Mus~49|Nevsehir~50|Nigde~51|Ordu~52|Osmaniye~80|Rize~53|Sakarya~54|Samsun~55|Sanliurfa~63|Siirt~56|Sinop~57|Sirnak~73|Sivas~58|Tekirdag~59|Tokat~60|Trabzon~61|Tunceli~62|Usak~64|Van~65|Yalova~77|Yozgat~66|Zonguldak~67"],["Turkmenistan","TM","Ahal~A|Asgabat~S|Balkan~B|Dashoguz~D|Lebap~L|Mary~M"],["Turks and Caicos Islands","TC","Turks and Caicos Islands~undefined"],["Tuvalu","TV","Funafuti~FUN|Nanumanga~NMG|Nanumea~NMA|Niutao~NIT|Nui~NUI|Nukufetau~NKF|Nukulaelae~NKL|Vaitupu~VAU"],["Uganda","UG","Abim~317|Adjumani~301|Amolatar~314|Amuria~216|Amuru~319|Apac~302|Arua~303|Budaka~217|Bududa~223|Bugiri~201|Bukedea~224|Bukwa~218|Buliisa~419|Bundibugyo~401|Bushenyi~402|Busia~202|Butaleja~219|Dokolo~318|Gulu~304|Hoima~403|Ibanda~416|Iganga~203|Isingiro~417|Jinja~204|Kaabong~315|Kabale~404|Kabarole~405|Kaberamaido~213|Kalangala~101|Kaliro~220|Kampala~102|Kamuli~205|Kamwenge~413|Kanungu~414|Kapchorwa~206|Kasese~406|Katakwi~207|Kayunga~112|Kibaale~407|Kiboga~103|Kiruhura~418|Kisoro~408|Kitgum~305|Koboko~316|Kotido~306|Kumi~208|Kyenjojo~415|Lira~307|Luwero~104|Lyantonde~116|Manafwa~221|Maracha~320|Masaka~105|Masindi~409|Mayuge~214|Mbale~209|Mbarara~410|Mityana~114|Moroto~308|Moyo~309|Mpigi~106|Mubende~107|Mukono~108|Nakapiripirit~311|Nakaseke~115|Nakasongola~109|Namutumba~222|Nebbi~310|Ntungamo~411|Oyam~321|Pader~312|Pallisa~210|Rakai~110|Rukungiri~412|Sembabule~111|Sironko~215|Soroti~211|Tororo~212|Wakiso~113|Yumbe~313"],["Ukraine","UA","Cherkasy~71|Chernihiv~74|Chernivtsi~77|Dnipropetrovsk~12|Donetsk~14|Ivano-Frankivsk~26|Kharkiv~63|Kherson~65|Khmelnytskyi~68|Kiev~32|Kirovohrad~35|Luhansk~09|Lviv~46|Mykolaiv~48|Odessa~51|Poltava~53|Rivne~56|Sumy~59|Ternopil~61|Vinnytsia~05|Volyn~07|Zakarpattia~21|Zaporizhia~23|Zhytomyr~18|Avtonomna Respublika Krym~43|Kyïv~30|Sevastopol~40"],["United Arab Emirates","AE","Abu Dhabi~AZ|Ajman~AJ|Dubai~DU|Fujairah~FU|Ras al Khaimah~RK|Sharjah~SH|Umm Al Quwain~UQ"],["United Kingdom","GB","Aberdeen City~ABE|Aberdeenshire~ABD|Angus~ANS|Antrim and Newtownabbey~ANN|Ards and North Down~AND|Argyll and Bute~AGB|Armagh, Banbridge and Craigavon~ABC|Barking and Dagenham~BDG|Barnet~BNE|Barnsley~BNS|Bath and North East Somerset~BAS|Bedford~BDF|Belfast~BFS|Bexley~BEX|Birmingham~BIR|Blackburn with Darwen~BBD|Blackpool~BPL|Blaenau Gwent~BGW|Bolton~BOL|Bournemouth~BMH|Bracknell Forest~BRC|Bradford~BRD|Brent~BEN|Bridgend~BGE|Brighton and Hove~BNH|Bristol, City of~BST|Bromley~BRY|Buckinghamshire~BKM|Bury~BUR|Caerphilly~CAY|Calderdale~CLD|Cambridgeshire~CAM|Camden~CMD|Cardiff~CRF|Carmarthenshire~CMN|Causeway Coast and Glens~CCG|Central Bedfordshire~CBF|Ceredigion~CGN|Cheshire East~CHE|Cheshire West and Chester~CHW|Clackmannanshire~CLK|Conwy~CWY|Cornwall~CON|Coventry~COV|Croydon~CRY|Cumbria~CMA|Darlington~DAL|Denbighshire~DEN|Derby~DER|Derbyshire~DBY|Derry and Strabane~DRS|Devon~DEV|Doncaster~DNC|Dorset~DOR|Dudley~DUD|Dumfries and Galloway~DGY|Dundee City~DND|Durham County~DUR|Ealing~EAL|East Ayrshire~EAY|East Dunbartonshire~EDU|East Lothian~ELN|East Renfrewshire~ERW|East Riding of Yorkshire~ERY|East Sussex~ESX|Edinburgh, City of~EDH|Eilean Siar~ELS|Enfield~ENF|Essex~ESS|Falkirk~FAL|Fermanagh and Omagh~FMO|Fife~FIF|Flintshire~FLN|Gateshead~GAT|Glasgow City~GLG|Gloucestershire~GLS|Greenwich~GRE|Gwynedd~GWN|Hackney~HCK|Halton~HAL|Hammersmith and Fulham~HMF|Hampshire~HAM|Haringey~HRY|Harrow~HRW|Hartlepool~HPL|Havering~HAV|Herefordshire~HEF|Hertfordshire~HRT|Highland~HLD|Hillingdon~HIL|Hounslow~HNS|Inverclyde~IVC|Isle of Anglesey~AGY|Isle of Wight~IOW|Isles of Scilly~IOS|Islington~ISL|Kensington and Chelsea~KEC|Kent~KEN|Kingston upon Hull~KHL|Kingston upon Thames~KTT|Kirklees~KIR|Knowsley~KWL|Lambeth~LBH|Lancashire~LAN|Leeds~LDS|Leicester~LCE|Leicestershire~LEC|Lewisham~LEW|Lincolnshire~LIN|Lisburn and Castlereagh~LBC|Liverpool~LIV|London, City of~LND|Luton~LUT|Manchester~MAN|Medway~MDW|Merthyr Tydfil~MTY|Merton~MRT|Mid and East Antrim~MEA|Mid Ulster~MUL|Middlesbrough~MDB|Midlothian~MLN|Milton Keynes~MIK|Monmouthshire~MON|Moray~MRY|Neath Port Talbot~NTL|Newcastle upon Tyne~NET|Newham~NWM|Newport~NWP|Newry, Mourne and Down~NMD|Norfolk~NFK|North Ayrshire~NAY|North East Lincolnshire~NEL|North Lanarkshire~NLK|North Lincolnshire~NLN|North Somerset~NSM|North Tyneside~NTY|North Yorkshire~NYK|Northamptonshire~NTH|Northumberland~NBL|Nottingham~NGM|Nottinghamshire~NTT|Oldham~OLD|Orkney Islands~ORK|Oxfordshire~OXF|Pembrokeshire~PEM|Perth and Kinross~PKN|Peterborough~PTE|Plymouth~PLY|Poole~POL|Portsmouth~POR|Powys~POW|Reading~RDG|Redbridge~RDB|Redcar and Cleveland~RCC|Renfrewshire~RFW|Rhondda, Cynon, Taff~RCT|Richmond upon Thames~RIC|Rochdale~RCH|Rotherham~ROT|Rutland~RUT|St. Helens~SHN|Salford~SLF|Sandwell~SAW|Scottish Borders, The~SCB|Sefton~SFT|Sheffield~SHF|Shetland Islands~ZET|Shropshire~SHR|Slough~SLG|Solihull~SOL|Somerset~SOM|South Ayrshire~SAY|South Gloucestershire~SGC|South Lanarkshire~SLK|South Tyneside~STY|Southampton~STH|Southend-on-Sea~SOS|Southwark~SWK|Staffordshire~STS|Stirling~STG|Stockport~SKP|Stockton-on-Tees~STT|Stoke-on-Trent~STE|Suffolk~SFK|Sunderland~SND|Surrey~SRY|Sutton~STN|Swansea~SWA|Swindon~SWD|Tameside~TAM|Telford and Wrekin~TFW|Thurrock~THR|Torbay~TOB|Torfaen~TOF|Tower Hamlets~TWH|Trafford~TRF|Vale of Glamorgan, The~VGL|Wakefield~WKF|Walsall~WLL|Waltham Forest~WFT|Wandsworth~WND|Warrington~WRT|Warwickshire~WAR|West Berkshire~WBK|West Dunbartonshire~WDU|West Lothian~WLN|West Sussex~WSX|Westminster~WSM|Wigan~WGN|Wiltshire~WIL|Windsor and Maidenhead~WNM|Wirral~WRL|Wokingham~WOK|Wolverhampton~WLV|Worcestershire~WOR|Wrexham~WRX|York~YOR"],["United States","US","Alabama~AL|Alaska~AK|American Samoa~AS|Arizona~AZ|Arkansas~AR|California~CA|Colorado~CO|Connecticut~CT|Delaware~DE|District of Columbia~DC|Micronesia~FM|Florida~FL|Georgia~GA|Guam~GU|Hawaii~HI|Idaho~ID|Illinois~IL|Indiana~IN|Iowa~IA|Kansas~KS|Kentucky~KY|Louisiana~LA|Maine~ME|Marshall Islands~MH|Maryland~MD|Massachusetts~MA|Michigan~MI|Minnesota~MN|Mississippi~MS|Missouri~MO|Montana~MT|Nebraska~NE|Nevada~NV|New Hampshire~NH|New Jersey~NJ|New Mexico~NM|New York~NY|North Carolina~NC|North Dakota~ND|Northern Mariana Islands~MP|Ohio~OH|Oklahoma~OK|Oregon~OR|Palau~PW|Pennsylvania~PA|Puerto Rico~PR|Rhode Island~RI|South Carolina~SC|South Dakota~SD|Tennessee~TN|Texas~TX|Utah~UT|Vermont~VT|Virgin Islands~VI|Virginia~VA|Washington~WA|West Virginia~WV|Wisconsin~WI|Wyoming~WY|Armed Forces Americas~AA|Armed Forces Europe, Canada, Africa and Middle East~AE|Armed Forces Pacific~AP"],["United States Minor Outlying Islands","UM","Baker Island~81|Howland Island~84|Jarvis Island~86|Johnston Atoll~67|Kingman Reef~89|Midway Islands~71|Navassa Island~76|Palmyra Atoll~95|Wake Island~79|Bajo Nuevo Bank~BN|Serranilla Bank~SB"],["Uruguay","UY","Artigas~AR|Canelones~CA|Cerro Largo~CL|Colonia~CO|Durazno~DU|Flores~FS|Florida~FD|Lavalleja~LA|Maldonado~MA|Montevideo~MO|Paysandú~PA|Río Negro~RN|Rivera~RV|Rocha~RO|Salto~SA|San José~SJ|Soriano~SO|Tacuarembó~TA|Treinta y Tres~TT"],["Uzbekistan","UZ","Toshkent shahri~TK|Andijon~AN|Buxoro~BU|Farg‘ona~FA|Jizzax~JI|Namangan~NG|Navoiy~NW|Qashqadaryo (Qarshi)~QA|Samarqand~SA|Sirdaryo (Guliston)~SI|Surxondaryo (Termiz)~SU|Toshkent wiloyati~TO|Xorazm (Urganch)~XO|Qoraqalpog‘iston Respublikasi (Nukus)~QR"],["Vanuatu","VU","Malampa~MAP|Pénama~PAM|Sanma~SAM|Shéfa~SEE|Taféa~TAE|Torba~TOB"],["Venezuela, Bolivarian Republic of","VE","Dependencias Federales~W|Distrito Federal~A|Amazonas~Z|Anzoátegui~B|Apure~C|Aragua~D|Barinas~E|Bolívar~F|Carabobo~G|Cojedes~H|Delta Amacuro~Y|Falcón~I|Guárico~J|Lara~K|Mérida~L|Miranda~M|Monagas~N|Nueva Esparta~O|Portuguesa~P|Sucre~R|Táchira~S|Trujillo~T|Vargas~X|Yaracuy~U|Zulia~V"],["Vietnam","VN","Đồng Nai~39|Đồng Tháp~45|Gia Lai~30|Hà Giang~03|Hà Nam~63|Hà Tây~15|Hà Tĩnh~23|Hải Dương~61|Hậu Giang~73|Hòa Bình~14|Hưng Yên~66|Khánh Hòa~34|Kiên Giang~47|Kon Tum~28|Lai Châu~01|Lâm Đồng~35|Lạng Sơn~09|Lào Cai~02|Long An~41|Nam Định~67|Nghệ An~22|Ninh Bình~18|Ninh Thuận~36|Phú Thọ~68|Phú Yên~32|Quảng Bình~24|Quảng Nam~27|Quảng Ngãi~29|Quảng Ninh~13|Quảng Trị~25|Sóc Trăng~52|Sơn La~05|Tây Ninh~37|Thái Bình~20|Thái Nguyên~69|Thanh Hóa~21|Thừa Thiên–Huế~26|Tiền Giang~46|Trà Vinh~51|Tuyên Quang~07|Vĩnh Long~49|Vĩnh Phúc~70|Yên Bái~06|Cần Thơ~CT|Đà Nẵng~DN|Hà Nội~HN|Hải Phòng~HP|Hồ Chí Minh (Sài Gòn)~SG"],["Virgin Islands, British","VG","Anegada~ANG|Jost Van Dyke~JVD|Tortola~TTA|Virgin Gorda~VGD"],["Virgin Islands, U.S.","VI","St. Thomas~STH|St. John~SJO|St. Croix~SCR"],["Wallis and Futuna","WF","Alo~ALO|Sigave~SIG|Wallis~WAL"],["Western Sahara","EH","Es Smara~ESM|Boujdour~BOD|Laâyoune~LAA|Aousserd~AOU|Oued ed Dahab~OUD"],["Yemen","YE","Abyān~AB|'Adan~AD|Aḑ Ḑāli'~DA|Al Bayḑā'~BA|Al Ḩudaydah~HU|Al Jawf~JA|Al Mahrah~MR|Al Maḩwīt~MW|'Amrān~AM|Dhamār~DH|Ḩaḑramawt~HD|Ḩajjah~HJ|Ibb~IB|Laḩij~LA|Ma'rib~MA|Raymah~RA|Şā‘dah~SD|Şan‘ā'~SN|Shabwah~SH|Tā‘izz~TA"],["Zambia","ZM","Central~02|Copperbelt~08|Eastern~03|Luapula~04|Lusaka~09|Northern~05|North-Western~06|Southern~07|Western~01"],["Zimbabwe","ZW","Bulawayo~BU|Harare~HA|Manicaland~MA|Mashonaland Central~MC|Mashonaland East~ME|Mashonaland West~MW|Masvingo~MV|Matabeleland North~MN|Matabeleland South~MS|Midlands~MI"]];

var C = {
	DISPLAY_TYPE_FULL: 'full',
	DISPLAY_TYPE_SHORT: 'short',
	REGION_LIST_DELIMITER: '|',
	SINGLE_REGION_DELIMITER: '~'
};

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};

var objectWithoutProperties = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var slicedToArray = function () {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if (Symbol.iterator in Object(arr)) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();

var toConsumableArray = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  } else {
    return Array.from(arr);
  }
};

// reduces the subset of countries depending on whether the user specified a white/blacklist, and lists priority
// countries first
var filterCountries = function filterCountries(countries, priorityCountries, whitelist, blacklist) {
	var countriesListedFirst = [];
	var filteredCountries = countries;

	if (whitelist.length > 0) {
		filteredCountries = countries.filter(function (_ref) {
			var _ref2 = slicedToArray(_ref, 2),
			    countrySlug = _ref2[1];

			return whitelist.indexOf(countrySlug) > -1;
		});
	} else if (blacklist.length > 0) {
		filteredCountries = countries.filter(function (_ref3) {
			var _ref4 = slicedToArray(_ref3, 2),
			    countrySlug = _ref4[1];

			return blacklist.indexOf(countrySlug) === -1;
		});
	}

	if (priorityCountries.length > 0) {

		// ensure the countries are added in the order in which they are specified by the user
		priorityCountries.forEach(function (slug) {
			var result = filteredCountries.find(function (_ref5) {
				var _ref6 = slicedToArray(_ref5, 2),
				    countrySlug = _ref6[1];

				return countrySlug === slug;
			});
			if (result) {
				countriesListedFirst.push(result);
			}
		});

		filteredCountries = filteredCountries.filter(function (_ref7) {
			var _ref8 = slicedToArray(_ref7, 2),
			    countrySlug = _ref8[1];

			return priorityCountries.indexOf(countrySlug) === -1;
		});
	}

	return countriesListedFirst.length ? [].concat(countriesListedFirst, toConsumableArray(filteredCountries)) : filteredCountries;
};

// called when requesting new regions. It reduces the subset of regions depending on whether the user specifies
// a white/blacklist
var filterRegions = function filterRegions(regionsObject, whitelistObject, blacklistObject) {
	var _regionsObject = slicedToArray(regionsObject, 3),
	    country = _regionsObject[0],
	    countryCode = _regionsObject[1],
	    regions = _regionsObject[2];

	var whitelist = whitelistObject.hasOwnProperty(countryCode) ? whitelistObject[countryCode] : [];
	var blacklist = blacklistObject.hasOwnProperty(countryCode) ? blacklistObject[countryCode] : [];
	var filteredRegions = regions.split('|');

	if (whitelist.length > 0 && filteredRegions.length > 0) {
		filteredRegions = filteredRegions.filter(function (region) {
			for (var i = 0, n = whitelist.length; i < n; i++) {
				if (region.indexOf(whitelist[i]) > -1) {
					return true;
				}
			}
			return false;
		});
	} else if (blacklist.length > 0 && filteredRegions.length > 0) {
		filteredRegions = filteredRegions.filter(function (region) {
			for (var i = 0, n = blacklist.length; i < n; i++) {
				if (region.indexOf(blacklist[i]) > -1) {
					return false;
				}
			}

			return true;
		});
	}

	return [country, countryCode, filteredRegions.join('|')];
};

var CountryDropdown = function (_Component) {
	inherits(CountryDropdown, _Component);

	function CountryDropdown(props) {
		classCallCheck(this, CountryDropdown);

		var _this = possibleConstructorReturn(this, (CountryDropdown.__proto__ || Object.getPrototypeOf(CountryDropdown)).call(this, props));

		_this.state = {
			countries: filterCountries(CountryRegionData, props.priorityOptions, props.whitelist, props.blacklist)
		};
		return _this;
	}

	createClass(CountryDropdown, [{
		key: 'getCountries',
		value: function getCountries() {
			var _props = this.props,
			    valueType = _props.valueType,
			    labelType = _props.labelType;


			return this.state.countries.map(function (_ref) {
				var _ref2 = slicedToArray(_ref, 2),
				    countryName = _ref2[0],
				    countrySlug = _ref2[1];

				return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					'option',
					{ value: valueType === C.DISPLAY_TYPE_SHORT ? countrySlug : countryName, key: countrySlug },
					labelType === C.DISPLAY_TYPE_SHORT ? countrySlug : countryName
				);
			});
		}
	}, {
		key: 'getDefaultOption',
		value: function getDefaultOption() {
			var _props2 = this.props,
			    showDefaultOption = _props2.showDefaultOption,
			    defaultOptionLabel = _props2.defaultOptionLabel;

			if (!showDefaultOption) {
				return null;
			}
			return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				'option',
				{ value: '', key: 'default' },
				defaultOptionLabel
			);
		}
	}, {
		key: 'render',
		value: function render() {
			// unused properties deliberately added so arbitraryProps gets populated with anything else the user specifies
			var _props3 = this.props,
			    name = _props3.name,
			    id = _props3.id,
			    classes = _props3.classes,
			    value = _props3.value,
			    _onChange = _props3.onChange,
			    _onBlur = _props3.onBlur,
			    disabled = _props3.disabled,
			    showDefaultOption = _props3.showDefaultOption,
			    defaultOptionLabel = _props3.defaultOptionLabel,
			    labelType = _props3.labelType,
			    valueType = _props3.valueType,
			    whitelist = _props3.whitelist,
			    blacklist = _props3.blacklist,
			    customOptions = _props3.customOptions,
			    priorityOptions = _props3.priorityOptions,
			    arbitraryProps = objectWithoutProperties(_props3, ['name', 'id', 'classes', 'value', 'onChange', 'onBlur', 'disabled', 'showDefaultOption', 'defaultOptionLabel', 'labelType', 'valueType', 'whitelist', 'blacklist', 'customOptions', 'priorityOptions']);


			var attrs = _extends({}, arbitraryProps, {
				name: name,
				value: value,
				onChange: function onChange(e) {
					return _onChange(e.target.value, e);
				},
				onBlur: function onBlur(e) {
					return _onBlur(e.target.value, e);
				},
				disabled: disabled
			});
			if (id) {
				attrs.id = id;
			}
			if (classes) {
				attrs.className = classes;
			}

			return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				'select',
				attrs,
				this.getDefaultOption(),
				this.getCountries()
			);
		}
	}]);
	return CountryDropdown;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);


CountryDropdown.propTypes = {
	value: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number]),
	name: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
	id: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
	classes: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
	showDefaultOption: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
	defaultOptionLabel: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number]),
	priorityOptions: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.array,
	onChange: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
	onBlur: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
	labelType: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOf([C.DISPLAY_TYPE_FULL, C.DISPLAY_TYPE_SHORT]),
	valueType: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOf([C.DISPLAY_TYPE_FULL, C.DISPLAY_TYPE_SHORT]),
	whitelist: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.array,
	blacklist: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.array,
	disabled: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool
};
CountryDropdown.defaultProps = {
	value: '',
	name: 'rcrs-country',
	id: '',
	classes: '',
	showDefaultOption: true,
	defaultOptionLabel: 'Select Country',
	priorityOptions: [],
	onChange: function onChange() {},
	onBlur: function onBlur() {},
	labelType: C.DISPLAY_TYPE_FULL,
	valueType: C.DISPLAY_TYPE_FULL,
	whitelist: [],
	blacklist: [],
	disabled: false
};

var RegionDropdown = function (_PureComponent) {
	inherits(RegionDropdown, _PureComponent);

	function RegionDropdown(props) {
		classCallCheck(this, RegionDropdown);

		var _this = possibleConstructorReturn(this, (RegionDropdown.__proto__ || Object.getPrototypeOf(RegionDropdown)).call(this, props));

		_this.state = {
			regions: _this.getRegions(props.country)
		};
		_this.getRegions = _this.getRegions.bind(_this);
		return _this;
	}

	createClass(RegionDropdown, [{
		key: 'componentDidUpdate',
		value: function componentDidUpdate(prevProps) {
			var country = this.props.country;

			if (country === prevProps.country) {
				return;
			}

			var defaultRegions = this.getRegions(country);

			this.setState({
				regions: [].concat(toConsumableArray(defaultRegions), toConsumableArray(this.getCustomOptions(defaultRegions)))
			});
		}
	}, {
		key: 'getCustomOptions',
		value: function getCustomOptions(regions) {
			var customOptions = this.props.customOptions;


			var duplicateRegions = this.getDuplicates(regions);

			if (duplicateRegions.length) {
				console.error('Error: Duplicate regions present: ' + duplicateRegions.toString() + '.\nThe above item(s) is/are already getting added to the region dropdown by the library.');
				return [];
			}

			return customOptions.map(function (option) {
				if (option) {
					return { regionName: option, regionShortCode: option };
				}
			});
		}
	}, {
		key: 'getDuplicates',
		value: function getDuplicates(regions) {
			var _props = this.props,
			    customOptions = _props.customOptions,
			    valueType = _props.valueType;

			var regionKey = valueType === C.DISPLAY_TYPE_FULL ? 'regionName' : 'regionShortCode';

			return regions.filter(function (region) {
				return customOptions.indexOf(region[regionKey]) !== -1;
			}).map(function (region) {
				return region[regionKey];
			});
		}
	}, {
		key: 'getRegions',
		value: function getRegions(country) {
			if (!country) {
				return [];
			}

			var _props2 = this.props,
			    countryValueType = _props2.countryValueType,
			    whitelist = _props2.whitelist,
			    blacklist = _props2.blacklist;

			var searchIndex = countryValueType === C.DISPLAY_TYPE_FULL ? 0 : 1;
			var regions = [];
			CountryRegionData.forEach(function (i) {
				if (i[searchIndex] === country) {
					regions = i;
				}
			});

			// this could happen if the user is managing the state of the region/country themselves and screws up passing
			// in a valid country
			if (!regions || regions.length === 0) {
				console.error('Error. Unknown country passed: ' + country + '. If you\'re passing a country shortcode, be sure to include countryValueType="short" on the RegionDropdown');
				return [];
			}

			var filteredRegions = filterRegions(regions, whitelist, blacklist);

			return filteredRegions[2].split(C.REGION_LIST_DELIMITER).map(function (regionPair) {
				var _regionPair$split = regionPair.split(C.SINGLE_REGION_DELIMITER),
				    _regionPair$split2 = slicedToArray(_regionPair$split, 2),
				    regionName = _regionPair$split2[0],
				    _regionPair$split2$ = _regionPair$split2[1],
				    regionShortCode = _regionPair$split2$ === undefined ? null : _regionPair$split2$;

				return { regionName: regionName, regionShortCode: regionShortCode };
			});
		}
	}, {
		key: 'getRegionList',
		value: function getRegionList() {
			var _props3 = this.props,
			    labelType = _props3.labelType,
			    valueType = _props3.valueType;

			return this.state.regions.map(function (_ref) {
				var regionName = _ref.regionName,
				    regionShortCode = _ref.regionShortCode;

				var label = labelType === C.DISPLAY_TYPE_FULL ? regionName : regionShortCode;
				var value = valueType === C.DISPLAY_TYPE_FULL ? regionName : regionShortCode;
				return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					'option',
					{ value: value, key: regionName },
					label
				);
			});
		}

		// there are two default options. The "blank" option which shows up when the user hasn't selected a country yet, and
		// a "default" option which shows

	}, {
		key: 'getDefaultOption',
		value: function getDefaultOption() {
			var _props4 = this.props,
			    blankOptionLabel = _props4.blankOptionLabel,
			    showDefaultOption = _props4.showDefaultOption,
			    defaultOptionLabel = _props4.defaultOptionLabel,
			    country = _props4.country;

			if (!country) {
				return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					'option',
					{ value: '' },
					blankOptionLabel
				);
			}
			if (showDefaultOption) {
				return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					'option',
					{ value: '' },
					defaultOptionLabel
				);
			}
			return null;
		}
	}, {
		key: 'render',
		value: function render() {
			var _props5 = this.props,
			    value = _props5.value,
			    country = _props5.country,
			    _onChange = _props5.onChange,
			    _onBlur = _props5.onBlur,
			    id = _props5.id,
			    name = _props5.name,
			    classes = _props5.classes,
			    disabled = _props5.disabled,
			    blankOptionLabel = _props5.blankOptionLabel,
			    showDefaultOption = _props5.showDefaultOption,
			    defaultOptionLabel = _props5.defaultOptionLabel,
			    labelType = _props5.labelType,
			    valueType = _props5.valueType,
			    countryValueType = _props5.countryValueType,
			    disableWhenEmpty = _props5.disableWhenEmpty,
			    customOptions = _props5.customOptions,
			    arbitraryProps = objectWithoutProperties(_props5, ['value', 'country', 'onChange', 'onBlur', 'id', 'name', 'classes', 'disabled', 'blankOptionLabel', 'showDefaultOption', 'defaultOptionLabel', 'labelType', 'valueType', 'countryValueType', 'disableWhenEmpty', 'customOptions']);


			var isDisabled = disabled || disableWhenEmpty && country === '';
			var attrs = _extends({}, arbitraryProps, {
				name: name,
				value: value,
				onChange: function onChange(e) {
					return _onChange(e.target.value, e);
				},
				onBlur: function onBlur(e) {
					return _onBlur(e.target.value, e);
				},
				disabled: isDisabled
			});
			if (id) {
				attrs.id = id;
			}
			if (classes) {
				attrs.className = classes;
			}

			return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				'select',
				attrs,
				this.getDefaultOption(),
				this.getRegionList()
			);
		}
	}]);
	return RegionDropdown;
}(__WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"]);


RegionDropdown.propTypes = {
	country: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
	countryValueType: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOf([C.DISPLAY_TYPE_FULL, C.DISPLAY_TYPE_SHORT]),
	value: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number]),
	name: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
	id: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
	classes: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
	blankOptionLabel: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
	showDefaultOption: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
	defaultOptionLabel: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
	onChange: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
	onBlur: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
	labelType: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
	valueType: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
	whitelist: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object,
	blacklist: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object,
	disabled: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
	disableWhenEmpty: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
	customOptions: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.array
};
RegionDropdown.defaultProps = {
	country: '',
	value: '',
	name: 'rcrs-region',
	id: '',
	classes: '',
	blankOptionLabel: '-',
	showDefaultOption: true,
	defaultOptionLabel: 'Select Region',
	onChange: function onChange() {},
	onBlur: function onBlur() {},
	countryValueType: C.DISPLAY_TYPE_FULL,
	labelType: C.DISPLAY_TYPE_FULL,
	valueType: C.DISPLAY_TYPE_FULL,
	whitelist: {},
	blacklist: {},
	disabled: false,
	disableWhenEmpty: false,
	customOptions: []
};


//# sourceMappingURL=rcrs.es.js.map


/***/ }),
/* 89 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__layouts_SidebarMobile__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__layouts_Asidebar__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__layouts_Header__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__layouts_HeaderTopbar__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__layouts_SubHeader__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__layouts_Footer__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__actions_attributecategoryAction__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_sweetalert2__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_sweetalert2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_react_search_input__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_react_search_input___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_react_search_input__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__common_MenuList__ = __webpack_require__(12);
var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var KEYS_TO_FILTERS=['attributeName','isEnabled'];var Toast=__WEBPACK_IMPORTED_MODULE_10_sweetalert2___default.a.mixin({toast:true,position:'top-end',showConfirmButton:false,timer:1000});var ListAttributeCategory=function(_Component){_inherits(ListAttributeCategory,_Component);function ListAttributeCategory(){_classCallCheck(this,ListAttributeCategory);var _this=_possibleConstructorReturn(this,(ListAttributeCategory.__proto__||Object.getPrototypeOf(ListAttributeCategory)).call(this));_this.state={errors:{},searchTerm:''};_this.onEditClick=_this.onEditClick.bind(_this);_this.onDeleteClick=_this.onDeleteClick.bind(_this);_this.searchUpdated=_this.searchUpdated.bind(_this);return _this;}_createClass(ListAttributeCategory,[{key:'componentDidMount',value:function componentDidMount(){this.props.listAttributeCategory();}//calls when edit button is clicked
},{key:'onEditClick',value:function onEditClick(res){localStorage.setItem('editattribute',JSON.stringify(res));this.props.history.push('editattribute');}//calls when delete button is clicked
},{key:'onDeleteClick',value:function onDeleteClick(id){var deleteData={id:id};this.props.deleteAttributeCategory(deleteData);}},{key:'searchUpdated',value:function searchUpdated(term){this.setState({searchTerm:term});}},{key:'componentWillReceiveProps',value:function componentWillReceiveProps(nextProps){var _this2=this;if(nextProps.attributecategory.deleteattributecategory!==this.props.attributecategory.deleteattributecategory){Toast.fire({type:'success',title:' Attribute Deleted Successfully'}).then(function(getResult){_this2.props.listAttributeCategory();});}if(nextProps.attributecategory.addattributecategory!==this.props.attributecategory.addattributecategory){this.props.listAttributeCategory();}if(nextProps.errors!==this.props.errors){Toast.fire({type:'error',title:'Check all the fields'});this.setState({errors:nextProps.errors});}}},{key:'render',value:function render(){var _this3=this;var _props$attributecateg=this.props.attributecategory,listattributecategory=_props$attributecateg.listattributecategory,attributecategoryloading=_props$attributecateg.attributecategoryloading;var tableResult;if(listattributecategory==null||attributecategoryloading){tableResult=__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('tr',null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('td',{colSpan:5,className:'text-center'},'Loading.....'));}else{if(Object.keys(listattributecategory).length>0){var filterData=listattributecategory.filter(Object(__WEBPACK_IMPORTED_MODULE_11_react_search_input__["createFilter"])(this.state.searchTerm,KEYS_TO_FILTERS));tableResult=filterData.map(function(result){return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('tr',null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('td',null,result.attributeName),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('td',null,result.isEnabled),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('td',null,Object(__WEBPACK_IMPORTED_MODULE_12__common_MenuList__["a" /* checkPermission */])(_this3.props.auth,"PRODUCTS","UPDATE")&&__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('button',{className:'btn btn-link',onClick:function onClick(){return _this3.onEditClick(result);}},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span',{className:'kt-badge kt-badge--brand kt-badge--inline kt-badge--pill'},'Edit'))),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('td',null,Object(__WEBPACK_IMPORTED_MODULE_12__common_MenuList__["a" /* checkPermission */])(_this3.props.auth,"PRODUCTS","DELETE")&&__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('button',{className:'btn btn-link',onClick:function onClick(){return _this3.onDeleteClick(result._id);}},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span',{className:'kt-badge kt-badge--brand kt-badge--inline kt-badge--danger'},'Delete'))));});}else{tableResult=__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('tr',null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('td',{colSpan:4,className:'text-center'},'No Record Found.....'));}}return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:'kt-content  kt-grid__item kt-grid__item--fluid',id:'kt_content'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:'kt-portlet'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:'kt-portlet__head kt-portlet__head--lg'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:'kt-portlet__head-label'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span',{className:'kt-portlet__head-icon'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i',{className:'kt-font-brand flaticon2-line-chart'})),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('h3',{className:'kt-portlet__head-title'},'List  Attribute Category'))),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:'col-sm-12 col-md-12'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11_react_search_input___default.a,{placeholder:'Search by Attribute Name',onChange:this.searchUpdated,className:'search-input'})),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:'kt-portlet__body'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('table',{className:'table table-striped table-bordered table-hover table-checkable'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('thead',null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('tr',null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('th',null,'Category Name'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('th',null,'Is Enabled'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('th',null,'View/Edit'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('th',null,'Delete'))),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('tbody',null,tableResult),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('tfoot',null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('tr',null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('th',null,'Category Name'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('th',null,'Is Enabled'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('th',null,'View/Edit'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('th',null,'Delete'))))))));}}]);return ListAttributeCategory;}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);ListAttributeCategory.propTypes={auth:__WEBPACK_IMPORTED_MODULE_1_prop_types__["PropTypes"].object.isRequired,listAttributeCategory:__WEBPACK_IMPORTED_MODULE_1_prop_types__["PropTypes"].func.isRequired,deleteAttributeCategory:__WEBPACK_IMPORTED_MODULE_1_prop_types__["PropTypes"].func.isRequired};var mapStateToProps=function mapStateToProps(state){return{auth:state.auth,errors:state.errors,attributecategory:state.attributecategory};};/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_2_react_redux__["b" /* connect */])(mapStateToProps,{listAttributeCategory:__WEBPACK_IMPORTED_MODULE_9__actions_attributecategoryAction__["d" /* listAttributeCategory */],deleteAttributeCategory:__WEBPACK_IMPORTED_MODULE_9__actions_attributecategoryAction__["b" /* deleteAttributeCategory */]})(ListAttributeCategory));

/***/ }),
/* 90 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["default"] = dateFormat;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "masks", function() { return masks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i18n", function() { return i18n; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatTimezone", function() { return formatTimezone; });
var token=/d{1,4}|D{3,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|W{1,2}|[LlopSZN]|"[^"]*"|'[^']*'/g;var timezone=/\b(?:[A-Z]{1,3}[A-Z][TC])(?:[-+]\d{4})?|((?:Australian )?(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time)\b/g;var timezoneClip=/[^-+\dA-Z]/g;function dateFormat(date,mask,utc,gmt){if(arguments.length===1&&typeof date==="string"&&!/\d/.test(date)){mask=date;date=undefined}date=date||date===0?date:new Date;if(!(date instanceof Date)){date=new Date(date)}if(isNaN(date)){throw TypeError("Invalid date")}mask=String(masks[mask]||mask||masks["default"]);var maskSlice=mask.slice(0,4);if(maskSlice==="UTC:"||maskSlice==="GMT:"){mask=mask.slice(4);utc=true;if(maskSlice==="GMT:"){gmt=true}}var _=function _(){return utc?"getUTC":"get"};var _d=function d(){return date[_()+"Date"]()};var D=function D(){return date[_()+"Day"]()};var _m=function m(){return date[_()+"Month"]()};var y=function y(){return date[_()+"FullYear"]()};var _H=function H(){return date[_()+"Hours"]()};var _M=function M(){return date[_()+"Minutes"]()};var _s=function s(){return date[_()+"Seconds"]()};var _L=function L(){return date[_()+"Milliseconds"]()};var _o=function o(){return utc?0:date.getTimezoneOffset()};var _W=function W(){return getWeek(date)};var _N=function N(){return getDayOfWeek(date)};var flags={d:function d(){return _d()},dd:function dd(){return pad(_d())},ddd:function ddd(){return i18n.dayNames[D()]},DDD:function DDD(){return getDayName({y:y(),m:_m(),d:_d(),_:_(),dayName:i18n.dayNames[D()],short:true})},dddd:function dddd(){return i18n.dayNames[D()+7]},DDDD:function DDDD(){return getDayName({y:y(),m:_m(),d:_d(),_:_(),dayName:i18n.dayNames[D()+7]})},m:function m(){return _m()+1},mm:function mm(){return pad(_m()+1)},mmm:function mmm(){return i18n.monthNames[_m()]},mmmm:function mmmm(){return i18n.monthNames[_m()+12]},yy:function yy(){return String(y()).slice(2)},yyyy:function yyyy(){return pad(y(),4)},h:function h(){return _H()%12||12},hh:function hh(){return pad(_H()%12||12)},H:function H(){return _H()},HH:function HH(){return pad(_H())},M:function M(){return _M()},MM:function MM(){return pad(_M())},s:function s(){return _s()},ss:function ss(){return pad(_s())},l:function l(){return pad(_L(),3)},L:function L(){return pad(Math.floor(_L()/10))},t:function t(){return _H()<12?i18n.timeNames[0]:i18n.timeNames[1]},tt:function tt(){return _H()<12?i18n.timeNames[2]:i18n.timeNames[3]},T:function T(){return _H()<12?i18n.timeNames[4]:i18n.timeNames[5]},TT:function TT(){return _H()<12?i18n.timeNames[6]:i18n.timeNames[7]},Z:function Z(){return gmt?"GMT":utc?"UTC":formatTimezone(date)},o:function o(){return(_o()>0?"-":"+")+pad(Math.floor(Math.abs(_o())/60)*100+Math.abs(_o())%60,4)},p:function p(){return(_o()>0?"-":"+")+pad(Math.floor(Math.abs(_o())/60),2)+":"+pad(Math.floor(Math.abs(_o())%60),2)},S:function S(){return["th","st","nd","rd"][_d()%10>3?0:(_d()%100-_d()%10!=10)*_d()%10]},W:function W(){return _W()},WW:function WW(){return pad(_W())},N:function N(){return _N()}};return mask.replace(token,function(match){if(match in flags){return flags[match]()}return match.slice(1,match.length-1)})}var masks={default:"ddd mmm dd yyyy HH:MM:ss",shortDate:"m/d/yy",paddedShortDate:"mm/dd/yyyy",mediumDate:"mmm d, yyyy",longDate:"mmmm d, yyyy",fullDate:"dddd, mmmm d, yyyy",shortTime:"h:MM TT",mediumTime:"h:MM:ss TT",longTime:"h:MM:ss TT Z",isoDate:"yyyy-mm-dd",isoTime:"HH:MM:ss",isoDateTime:"yyyy-mm-dd'T'HH:MM:sso",isoUtcDateTime:"UTC:yyyy-mm-dd'T'HH:MM:ss'Z'",expiresHeaderFormat:"ddd, dd mmm yyyy HH:MM:ss Z"};var i18n={dayNames:["Sun","Mon","Tue","Wed","Thu","Fri","Sat","Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],monthNames:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","January","February","March","April","May","June","July","August","September","October","November","December"],timeNames:["a","p","am","pm","A","P","AM","PM"]};var pad=function pad(val){var len=arguments.length>1&&arguments[1]!==undefined?arguments[1]:2;return String(val).padStart(len,"0")};var getDayName=function getDayName(_ref){var y=_ref.y,m=_ref.m,d=_ref.d,_=_ref._,dayName=_ref.dayName,_ref$short=_ref["short"],_short=_ref$short===void 0?false:_ref$short;var today=new Date;var yesterday=new Date;yesterday.setDate(yesterday[_+"Date"]()-1);var tomorrow=new Date;tomorrow.setDate(tomorrow[_+"Date"]()+1);var today_d=function today_d(){return today[_+"Date"]()};var today_m=function today_m(){return today[_+"Month"]()};var today_y=function today_y(){return today[_+"FullYear"]()};var yesterday_d=function yesterday_d(){return yesterday[_+"Date"]()};var yesterday_m=function yesterday_m(){return yesterday[_+"Month"]()};var yesterday_y=function yesterday_y(){return yesterday[_+"FullYear"]()};var tomorrow_d=function tomorrow_d(){return tomorrow[_+"Date"]()};var tomorrow_m=function tomorrow_m(){return tomorrow[_+"Month"]()};var tomorrow_y=function tomorrow_y(){return tomorrow[_+"FullYear"]()};if(today_y()===y&&today_m()===m&&today_d()===d){return _short?"Tdy":"Today"}else if(yesterday_y()===y&&yesterday_m()===m&&yesterday_d()===d){return _short?"Ysd":"Yesterday"}else if(tomorrow_y()===y&&tomorrow_m()===m&&tomorrow_d()===d){return _short?"Tmw":"Tomorrow"}return dayName};var getWeek=function getWeek(date){var targetThursday=new Date(date.getFullYear(),date.getMonth(),date.getDate());targetThursday.setDate(targetThursday.getDate()-(targetThursday.getDay()+6)%7+3);var firstThursday=new Date(targetThursday.getFullYear(),0,4);firstThursday.setDate(firstThursday.getDate()-(firstThursday.getDay()+6)%7+3);var ds=targetThursday.getTimezoneOffset()-firstThursday.getTimezoneOffset();targetThursday.setHours(targetThursday.getHours()-ds);var weekDiff=(targetThursday-firstThursday)/(864e5*7);return 1+Math.floor(weekDiff)};var getDayOfWeek=function getDayOfWeek(date){var dow=date.getDay();if(dow===0){dow=7}return dow};var formatTimezone=function formatTimezone(date){return(String(date).match(timezone)||[""]).pop().replace(timezoneClip,"").replace(/GMT\+0000/g,"UTC")};

/***/ }),
/* 91 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Editor__ = __webpack_require__(266);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__components_Editor__["a"]; });
/**
 * Copyright (c) 2017-present, Ephox, Inc.
 *
 * This source code is licensed under the Apache 2 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */




/***/ }),
/* 92 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return isFunction; });
/* unused harmony export configHandlers2 */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return configHandlers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return uuid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return isTextareaOrInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return mergePlugins; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return isBeforeInputEventAvailable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return isInDoc; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_EditorPropTypes__ = __webpack_require__(93);
/**
 * Copyright (c) 2017-present, Ephox, Inc.
 *
 * This source code is licensed under the Apache 2 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

var isFunction = function (x) { return typeof x === 'function'; };
var isEventProp = function (name) { return name in __WEBPACK_IMPORTED_MODULE_0__components_EditorPropTypes__["b" /* eventPropTypes */]; };
var eventAttrToEventName = function (attrName) { return attrName.substr(2); };
var configHandlers2 = function (handlerLookup, on, off, adapter, prevProps, props, boundHandlers) {
    var prevEventKeys = Object.keys(prevProps).filter(isEventProp);
    var currEventKeys = Object.keys(props).filter(isEventProp);
    var removedKeys = prevEventKeys.filter(function (key) { return props[key] === undefined; });
    var addedKeys = currEventKeys.filter(function (key) { return prevProps[key] === undefined; });
    removedKeys.forEach(function (key) {
        // remove event handler
        var eventName = eventAttrToEventName(key);
        var wrappedHandler = boundHandlers[eventName];
        off(eventName, wrappedHandler);
        delete boundHandlers[eventName];
    });
    addedKeys.forEach(function (key) {
        var wrappedHandler = adapter(handlerLookup, key);
        var eventName = eventAttrToEventName(key);
        boundHandlers[eventName] = wrappedHandler;
        on(eventName, wrappedHandler);
    });
};
var configHandlers = function (editor, prevProps, props, boundHandlers, lookup) {
    return configHandlers2(lookup, editor.on.bind(editor), editor.off.bind(editor), function (handlerLookup, key) { return function (e) { var _a; return (_a = handlerLookup(key)) === null || _a === void 0 ? void 0 : _a(e, editor); }; }, prevProps, props, boundHandlers);
};
var unique = 0;
var uuid = function (prefix) {
    var time = Date.now();
    var random = Math.floor(Math.random() * 1000000000);
    unique++;
    return prefix + '_' + random + unique + String(time);
};
var isTextareaOrInput = function (element) {
    return element !== null && (element.tagName.toLowerCase() === 'textarea' || element.tagName.toLowerCase() === 'input');
};
var normalizePluginArray = function (plugins) {
    if (typeof plugins === 'undefined' || plugins === '') {
        return [];
    }
    return Array.isArray(plugins) ? plugins : plugins.split(' ');
};
// eslint-disable-next-line max-len
var mergePlugins = function (initPlugins, inputPlugins) { return normalizePluginArray(initPlugins).concat(normalizePluginArray(inputPlugins)); };
var isBeforeInputEventAvailable = function () { return window.InputEvent && typeof InputEvent.prototype.getTargetRanges === 'function'; };
var isInDoc = function (elem) {
    if (!('isConnected' in Node.prototype)) {
        // Fallback for IE and old Edge
        var current = elem;
        var parent_1 = elem.parentNode;
        while (parent_1 != null) {
            current = parent_1;
            parent_1 = current.parentNode;
        }
        return current === elem.ownerDocument;
    }
    return elem.isConnected;
};


/***/ }),
/* 93 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return eventPropTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditorPropTypes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_prop_types__);
/**
 * Copyright (c) 2017-present, Ephox, Inc.
 *
 * This source code is licensed under the Apache 2 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

var eventPropTypes = {
    onActivate: __WEBPACK_IMPORTED_MODULE_0_prop_types__["func"],
    onAddUndo: __WEBPACK_IMPORTED_MODULE_0_prop_types__["func"],
    onBeforeAddUndo: __WEBPACK_IMPORTED_MODULE_0_prop_types__["func"],
    onBeforeExecCommand: __WEBPACK_IMPORTED_MODULE_0_prop_types__["func"],
    onBeforeGetContent: __WEBPACK_IMPORTED_MODULE_0_prop_types__["func"],
    onBeforeRenderUI: __WEBPACK_IMPORTED_MODULE_0_prop_types__["func"],
    onBeforeSetContent: __WEBPACK_IMPORTED_MODULE_0_prop_types__["func"],
    onBeforePaste: __WEBPACK_IMPORTED_MODULE_0_prop_types__["func"],
    onBlur: __WEBPACK_IMPORTED_MODULE_0_prop_types__["func"],
    onChange: __WEBPACK_IMPORTED_MODULE_0_prop_types__["func"],
    onClearUndos: __WEBPACK_IMPORTED_MODULE_0_prop_types__["func"],
    onClick: __WEBPACK_IMPORTED_MODULE_0_prop_types__["func"],
    onContextMenu: __WEBPACK_IMPORTED_MODULE_0_prop_types__["func"],
    onCopy: __WEBPACK_IMPORTED_MODULE_0_prop_types__["func"],
    onCut: __WEBPACK_IMPORTED_MODULE_0_prop_types__["func"],
    onDblclick: __WEBPACK_IMPORTED_MODULE_0_prop_types__["func"],
    onDeactivate: __WEBPACK_IMPORTED_MODULE_0_prop_types__["func"],
    onDirty: __WEBPACK_IMPORTED_MODULE_0_prop_types__["func"],
    onDrag: __WEBPACK_IMPORTED_MODULE_0_prop_types__["func"],
    onDragDrop: __WEBPACK_IMPORTED_MODULE_0_prop_types__["func"],
    onDragEnd: __WEBPACK_IMPORTED_MODULE_0_prop_types__["func"],
    onDragGesture: __WEBPACK_IMPORTED_MODULE_0_prop_types__["func"],
    onDragOver: __WEBPACK_IMPORTED_MODULE_0_prop_types__["func"],
    onDrop: __WEBPACK_IMPORTED_MODULE_0_prop_types__["func"],
    onExecCommand: __WEBPACK_IMPORTED_MODULE_0_prop_types__["func"],
    onFocus: __WEBPACK_IMPORTED_MODULE_0_prop_types__["func"],
    onFocusIn: __WEBPACK_IMPORTED_MODULE_0_prop_types__["func"],
    onFocusOut: __WEBPACK_IMPORTED_MODULE_0_prop_types__["func"],
    onGetContent: __WEBPACK_IMPORTED_MODULE_0_prop_types__["func"],
    onHide: __WEBPACK_IMPORTED_MODULE_0_prop_types__["func"],
    onInit: __WEBPACK_IMPORTED_MODULE_0_prop_types__["func"],
    onKeyDown: __WEBPACK_IMPORTED_MODULE_0_prop_types__["func"],
    onKeyPress: __WEBPACK_IMPORTED_MODULE_0_prop_types__["func"],
    onKeyUp: __WEBPACK_IMPORTED_MODULE_0_prop_types__["func"],
    onLoadContent: __WEBPACK_IMPORTED_MODULE_0_prop_types__["func"],
    onMouseDown: __WEBPACK_IMPORTED_MODULE_0_prop_types__["func"],
    onMouseEnter: __WEBPACK_IMPORTED_MODULE_0_prop_types__["func"],
    onMouseLeave: __WEBPACK_IMPORTED_MODULE_0_prop_types__["func"],
    onMouseMove: __WEBPACK_IMPORTED_MODULE_0_prop_types__["func"],
    onMouseOut: __WEBPACK_IMPORTED_MODULE_0_prop_types__["func"],
    onMouseOver: __WEBPACK_IMPORTED_MODULE_0_prop_types__["func"],
    onMouseUp: __WEBPACK_IMPORTED_MODULE_0_prop_types__["func"],
    onNodeChange: __WEBPACK_IMPORTED_MODULE_0_prop_types__["func"],
    onObjectResizeStart: __WEBPACK_IMPORTED_MODULE_0_prop_types__["func"],
    onObjectResized: __WEBPACK_IMPORTED_MODULE_0_prop_types__["func"],
    onObjectSelected: __WEBPACK_IMPORTED_MODULE_0_prop_types__["func"],
    onPaste: __WEBPACK_IMPORTED_MODULE_0_prop_types__["func"],
    onPostProcess: __WEBPACK_IMPORTED_MODULE_0_prop_types__["func"],
    onPostRender: __WEBPACK_IMPORTED_MODULE_0_prop_types__["func"],
    onPreProcess: __WEBPACK_IMPORTED_MODULE_0_prop_types__["func"],
    onProgressState: __WEBPACK_IMPORTED_MODULE_0_prop_types__["func"],
    onRedo: __WEBPACK_IMPORTED_MODULE_0_prop_types__["func"],
    onRemove: __WEBPACK_IMPORTED_MODULE_0_prop_types__["func"],
    onReset: __WEBPACK_IMPORTED_MODULE_0_prop_types__["func"],
    onSaveContent: __WEBPACK_IMPORTED_MODULE_0_prop_types__["func"],
    onSelectionChange: __WEBPACK_IMPORTED_MODULE_0_prop_types__["func"],
    onSetAttrib: __WEBPACK_IMPORTED_MODULE_0_prop_types__["func"],
    onSetContent: __WEBPACK_IMPORTED_MODULE_0_prop_types__["func"],
    onShow: __WEBPACK_IMPORTED_MODULE_0_prop_types__["func"],
    onSubmit: __WEBPACK_IMPORTED_MODULE_0_prop_types__["func"],
    onUndo: __WEBPACK_IMPORTED_MODULE_0_prop_types__["func"],
    onVisualAid: __WEBPACK_IMPORTED_MODULE_0_prop_types__["func"]
};
var EditorPropTypes = __assign({ apiKey: __WEBPACK_IMPORTED_MODULE_0_prop_types__["string"], id: __WEBPACK_IMPORTED_MODULE_0_prop_types__["string"], inline: __WEBPACK_IMPORTED_MODULE_0_prop_types__["bool"], init: __WEBPACK_IMPORTED_MODULE_0_prop_types__["object"], initialValue: __WEBPACK_IMPORTED_MODULE_0_prop_types__["string"], onEditorChange: __WEBPACK_IMPORTED_MODULE_0_prop_types__["func"], outputFormat: __WEBPACK_IMPORTED_MODULE_0_prop_types__["oneOf"](['html', 'text']), value: __WEBPACK_IMPORTED_MODULE_0_prop_types__["string"], tagName: __WEBPACK_IMPORTED_MODULE_0_prop_types__["string"], cloudChannel: __WEBPACK_IMPORTED_MODULE_0_prop_types__["string"], plugins: __WEBPACK_IMPORTED_MODULE_0_prop_types__["oneOfType"]([__WEBPACK_IMPORTED_MODULE_0_prop_types__["string"], __WEBPACK_IMPORTED_MODULE_0_prop_types__["array"]]), toolbar: __WEBPACK_IMPORTED_MODULE_0_prop_types__["oneOfType"]([__WEBPACK_IMPORTED_MODULE_0_prop_types__["string"], __WEBPACK_IMPORTED_MODULE_0_prop_types__["array"]]), disabled: __WEBPACK_IMPORTED_MODULE_0_prop_types__["bool"], textareaName: __WEBPACK_IMPORTED_MODULE_0_prop_types__["string"], tinymceScriptSrc: __WEBPACK_IMPORTED_MODULE_0_prop_types__["string"], rollback: __WEBPACK_IMPORTED_MODULE_0_prop_types__["oneOfType"]([__WEBPACK_IMPORTED_MODULE_0_prop_types__["number"], __WEBPACK_IMPORTED_MODULE_0_prop_types__["oneOf"]([false])]), scriptLoading: __WEBPACK_IMPORTED_MODULE_0_prop_types__["shape"]({
        async: __WEBPACK_IMPORTED_MODULE_0_prop_types__["bool"],
        defer: __WEBPACK_IMPORTED_MODULE_0_prop_types__["bool"],
        delay: __WEBPACK_IMPORTED_MODULE_0_prop_types__["number"]
    }) }, eventPropTypes);


/***/ }),
/* 94 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__layouts_SidebarMobile__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__layouts_Asidebar__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__layouts_Header__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__layouts_HeaderTopbar__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__layouts_SubHeader__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__layouts_Footer__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__actions_attributemappingAction__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__actions_parentattributecategoryAction__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__actions_attributecategoryAction__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__actions_productAction__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_axios__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_sweetalert2__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_sweetalert2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ListAttributeMapping__ = __webpack_require__(39);
var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var queryString=__webpack_require__(17);var Toast=__WEBPACK_IMPORTED_MODULE_14_sweetalert2___default.a.mixin({toast:true,position:'top-end',showConfirmButton:false,timer:3000});var AddAttributeMapping=function(_Component){_inherits(AddAttributeMapping,_Component);function AddAttributeMapping(){_classCallCheck(this,AddAttributeMapping);var _this=_possibleConstructorReturn(this,(AddAttributeMapping.__proto__||Object.getPrototypeOf(AddAttributeMapping)).call(this));_this.state={errors:{},parentAttributeCategoryID:'',attributeCategoryID:'',productID:'',mappingName:'',mappingLabel:'',mappingType:'',mappingValue:'',photoUrl:'',additionalPrice:"0",dependentField:[{type:"",label:"",list:[{label:"",value:"",additionalPrice:"0"}]}],isEnabled:'',subField:"No",parsed:"",nextScreen:false,postionReadOnly:false};_this.onChange=_this.onChange.bind(_this);_this.onSubmit=_this.onSubmit.bind(_this);_this.onReset=_this.onReset.bind(_this);_this.uploadImage=_this.uploadImage.bind(_this);return _this;}_createClass(AddAttributeMapping,[{key:'componentDidMount',value:function componentDidMount(){this.props.listParentAttributeCategory();this.props.listAttributeCategory();this.props.listProduct();var parsed=queryString.parse(this.props.location.search);if(!parsed.productID){this.props.history.push('/admin/listproduct');return;}this.setState({productID:parsed.productID});}//for upload image
},{key:'uploadImage',value:function uploadImage(e){var self=this;var data=new FormData();data.append('file',e.target.files[0]);data.append('filename',e.target.files[0].name);__WEBPACK_IMPORTED_MODULE_13_axios___default.a.post('/upload',data).then(function(response){self.setState({photoUrl:response.data.file,uploadStatus:'Uploaded SuccessFully'});}).catch(function(error){console.log(error);});}},{key:'componentWillReceiveProps',value:function componentWillReceiveProps(nextProps){if(nextProps.attributemapping.addattributemapping!==this.props.attributemapping.addattributemapping){Toast.fire({type:'success',title:' Attribute Mapping Added Successfully'});this.onReset();var parsed=queryString.parse(this.props.location.search);if(this.state.nextScreen){this.props.history.push('/admin/addsub?productID='+parsed.productID);}}if(nextProps.errors!==this.props.errors){Toast.fire({type:'error',title:'Check all the fields'});this.setState({errors:nextProps.errors});}}//onchange state value for category
},{key:'onChange',value:function onChange(e){var _this2=this;this.setState(_defineProperty({},e.target.name,e.target.value));if(e.target.name==="parentAttributeCategoryID"){var data={productID:this.state.productID,parentAttributeCategoryID:e.target.value};__WEBPACK_IMPORTED_MODULE_13_axios___default.a.post("/api/attributemapping/getposition",data).then(function(result){var temp=result.data;_this2.setState({mappingName:temp.mappingName,postionReadOnly:true});}).catch(function(err){_this2.setState({mappingName:"",postionReadOnly:false});});}}//submit data to server
},{key:'onSubmit',value:function onSubmit(e){this.setState({errors:{}});e.preventDefault();var Data={parentAttributeCategoryID:this.state.parentAttributeCategoryID,attributeCategoryID:this.state.attributeCategoryID,productID:this.state.productID,mappingName:this.state.mappingName.toString(),mappingLabel:this.state.mappingLabel,mappingType:this.state.mappingType,mappingValue:this.state.mappingValue,photoUrl:this.state.photoUrl,additionalPrice:this.state.additionalPrice,dependentField:JSON.stringify(this.state.dependentField),isEnabled:this.state.isEnabled};this.props.addAttributeMapping(Data);}},{key:'onSubmitNext',value:function onSubmitNext(){this.setState({errors:{}});var Data={parentAttributeCategoryID:this.state.parentAttributeCategoryID,attributeCategoryID:this.state.attributeCategoryID,productID:this.state.productID,mappingName:this.state.mappingName.toString(),mappingLabel:this.state.mappingLabel,mappingType:this.state.mappingType,mappingValue:this.state.mappingValue,photoUrl:this.state.photoUrl,additionalPrice:this.state.additionalPrice,dependentField:JSON.stringify(this.state.dependentField),isEnabled:this.state.isEnabled};this.props.addAttributeMapping(Data);}//Reset all statevalues
},{key:'onReset',value:function onReset(){this.setState({errors:{},parentAttributeCategoryID:'',attributeCategoryID:'',// productID:'',
mappingName:'',mappingLabel:'',mappingType:'',mappingValue:'',photoUrl:'',additionalPrice:'',dependentField:[{type:"",label:"",list:[{label:"",value:"",additionalPrice:"0"}]}],isEnabled:'',nextScreen:false});}////LOGIC START FOR DEPENDENT FIELD
},{key:'addField',value:function addField(){var dependentField=this.state.dependentField.concat([{type:"",label:"",list:[{label:"",value:"",additionalPrice:"0"}]}]);this.setState({dependentField:dependentField});}},{key:'removeField',value:function removeField(idx,sub){this.setState({dependentField:this.state.dependentField.filter(function(s,sidx){return idx!==sidx;})});}},{key:'onhandleChangeField',value:function onhandleChangeField(e,index){var name=e.target.name;var value=e.target.value;var temp=this.state.dependentField;if(name==="type"){temp[index].type=value;}else if(name==="label"){temp[index].label=value;}this.setState({dependentField:temp});}},{key:'onhandleChangeSubField',value:function onhandleChangeSubField(e,index,indexSub){var name=e.target.name;var value=e.target.value;var temp=this.state.dependentField;if(name==="label"){temp[index].list[indexSub].label=value;}else if(name==="value"){temp[index].list[indexSub].value=value;}else if(name==="additionalPrice"){temp[index].list[indexSub].additionalPrice=value;}this.setState({dependentField:temp});}},{key:'addSubField',value:function addSubField(index){var temp=this.state.dependentField;temp[index].list=temp[index].list.concat([{type:"",label:"",list:[{label:"",value:"",additionalPrice:"0"}]}]);this.setState({dependentField:temp});}},{key:'removeSubField',value:function removeSubField(index,idx,sub){var temp=this.state.dependentField;temp[index].list=temp[index].list.filter(function(s,sidx){return idx!==sidx;});this.setState({dependentField:temp});}},{key:'render',value:function render(){var _this3=this;var errors=this.state.errors;var attributemappingloading=this.props.attributemapping.attributemappingloading;//Parent AttributeList list
var _props$parentattribut=this.props.parentattributecategory,listparentattributecategory=_props$parentattribut.listparentattributecategory,parentattributecategoryloading=_props$parentattribut.parentattributecategoryloading;var optionParentCategory=[];if(listparentattributecategory==null||parentattributecategoryloading){optionParentCategory=__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('option',{value:''},'Loading...');}else{if(Object.keys(listparentattributecategory).length>0){optionParentCategory=listparentattributecategory.map(function(result){return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('option',{value:result._id},result.attributeName);});}else{optionParentCategory=__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('option',{value:''},'No Parent Attributes  Found...');}}//AttributeCategory list
var _props$attributecateg=this.props.attributecategory,listattributecategory=_props$attributecateg.listattributecategory,attributecategoryloading=_props$attributecateg.attributecategoryloading;var optionCategory=[];if(listattributecategory==null||attributecategoryloading){optionCategory=__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('option',{value:''},'Loading...');}else{if(Object.keys(listattributecategory).length>0){optionCategory=listattributecategory.map(function(result){return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('option',{value:result._id},result.attributeName);});}else{optionCategory=__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('option',{value:''},'No Attributes Category Found...');}}//Product  list
var _props$product=this.props.product,listproduct=_props$product.listproduct,productloading=_props$product.productloading;var optionResult=[];if(listproduct==null||productloading){optionResult=__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('option',{value:''},'Loading...');}else{if(Object.keys(listproduct).length>0){optionResult=listproduct.map(function(result){return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('option',{value:result._id},result.name);});}else{optionResult=__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('option',{value:''},'No Products Found...');}}var dependentField=this.state.dependentField.map(function(value,index){var list=value.list;return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Fragment,null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:'row border py-2 mt-4'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{'class':'col-md-2'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('label',{className:'col-form-label'},'Type '),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('select',{name:'type',onChange:function onChange(e){return _this3.onhandleChangeField(e,index);},value:value.type,className:'form-control',placeholder:''},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('option',{value:''},'Select type'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('option',{value:'dropdown'},'Dropdown'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('option',{value:'color'},'Color Code')),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('label',{className:'col-form-label mt-3'},'Label '),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input',{type:'text',name:'label',onChange:function onChange(e){return _this3.onhandleChangeField(e,index);},value:value.label,className:'form-control',placeholder:''})),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{'class':'col-md-8 border border-success py-2'},list.map(function(result,indexSub){return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{'class':'row mt-3'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('label',{className:'col-lg-1 col-form-label'},'Label:'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:'col-lg-2'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input',{type:'text',required:true,name:'label',onChange:function onChange(e){return _this3.onhandleChangeSubField(e,index,indexSub);},value:result.label,className:'form-control',placeholder:''})),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('label',{className:'col-lg-1 col-form-label'},'Value:'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:'col-lg-2'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input',{type:'text',required:true,name:'value',onChange:function onChange(e){return _this3.onhandleChangeSubField(e,index,indexSub);},value:result.value,className:'form-control',placeholder:''})),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('label',{className:'col-lg-1 col-form-label'},'Price:'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:'col-lg-2'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input',{type:'text',required:true,name:'additionalPrice',onChange:function onChange(e){return _this3.onhandleChangeSubField(e,index,indexSub);},value:result.additionalPrice,className:'form-control',placeholder:''})),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:'col-lg-3 '},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('button',{type:'button',value:value.type,onClick:function onClick(){return _this3.addSubField(index);},className:'btn btn-success btn-sm mt-1'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i',{'class':'fa fa-plus'})),'\xA0\xA0\xA0',list.length>1?__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('button',{type:'button',value:value.type,onClick:function onClick(){return _this3.removeSubField(index,indexSub,value.label);},className:'btn btn-danger btn-sm mt-1'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i',{'class':'fa fa-trash'})):null));})),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:'col-lg-2 d-flex align-content-center'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('button',{type:'button',value:value.type,onClick:function onClick(){return _this3.addField();},className:'btn btn-success btn-sm mt-1'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i',{'class':'fa fa-plus'})),'\xA0\xA0\xA0',_this3.state.dependentField.length>1?__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('button',{type:'button',value:value.type,onClick:function onClick(){return _this3.removeField(index,value.title);},className:'btn btn-danger btn-sm mt-1'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i',{'class':'fa fa-trash'})):null)));});return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__layouts_SidebarMobile__["a" /* default */],null),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:'kt-grid kt-grid--hor kt-grid--root'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:'kt-grid__item kt-grid__item--fluid kt-grid kt-grid--ver kt-page'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__layouts_Asidebar__["a" /* default */],null),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:'kt-grid__item kt-grid__item--fluid kt-grid kt-grid--hor kt-wrapper',id:'kt_wrapper'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{id:'kt_header',className:'kt-header kt-grid__item  kt-header--fixed '},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__layouts_Header__["a" /* default */],null),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__layouts_HeaderTopbar__["a" /* default */],null)),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:'kt-grid__item kt-grid__item--fluid kt-grid kt-grid--hor'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__layouts_SubHeader__["a" /* default */],{first:'Home',second:'Add  Attribute Category',third:''}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:'kt-content  kt-grid__item kt-grid__item--fluid',id:'kt_content'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:'kt-portlet'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:'kt-portlet__head'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:'kt-portlet__head-label'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('h3',{className:'kt-portlet__head-title'},'Add  Attribute Mapping')),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:'kt-portlet__head-label'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('button',{type:'button',className:'btn btn-success'},'Add /Edit Sub-Products'))),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('form',{className:'kt-form kt-form--fit kt-form--label-right',onSubmit:this.onSubmit},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:'kt-portlet__body'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:'form-group row'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('label',{className:'col-lg-2 col-form-label'},'Select Parent Category Attribute:'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:'col-lg-3'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('select',{name:'parentAttributeCategoryID',onChange:function onChange(e){return _this3.onChange(e);},value:this.state.parentAttributeCategoryID,className:'form-control',placeholder:''},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('option',{value:''},'Select'),optionParentCategory),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span',{className:'form-text text-danger'},errors.parentAttributeCategoryID)),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('label',{className:'col-lg-2 col-form-label'},'Position Of Parent Category:'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:'col-lg-3'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input',{type:'number',disabled:this.state.postionReadOnly,name:'mappingName',onChange:this.onChange,value:this.state.mappingName,className:'form-control',placeholder:''}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span',{className:'form-text text-danger'},errors.mappingName),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span',{className:'form-text'},'Position for sorting parent category'))),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:'form-group row'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('label',{className:'col-lg-2 col-form-label'},'Select Parent Category Attribute:'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:'col-lg-3'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('select',{name:'attributeCategoryID',onChange:function onChange(e){return _this3.onChange(e);},value:this.state.attributeCategoryID,className:'form-control',placeholder:''},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('option',{value:''},'Select'),optionCategory),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span',{className:'form-text text-danger'},errors.attributeCategoryID)),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('label',{className:'col-lg-2 col-form-label'},'Type:'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:'col-lg-3'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('select',{name:'mappingType',onChange:function onChange(e){return _this3.onChange(e);},value:this.state.mappingType,className:'form-control',placeholder:''},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('option',{value:''},'Select type'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('option',{value:'dropdown'},'Dropdown'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('option',{value:'color'},'Color Code'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('option',{value:'image+text'},'Image+Text')),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span',{className:'form-text text-danger'},errors.attributeCategoryID))),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:'form-group row'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('label',{className:'col-lg-2 col-form-label'},'Label:'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:'col-lg-3'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input',{type:'text',name:'mappingLabel',onChange:this.onChange,value:this.state.mappingLabel,className:'form-control',placeholder:''}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span',{className:'form-text text-danger'},errors.mappingLabel)),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('label',{className:'col-lg-2 col-form-label'},'Value:'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:'col-lg-3'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input',{type:'text',name:'mappingValue',onChange:this.onChange,value:this.state.mappingValue,className:'form-control',placeholder:''}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span',{className:'form-text text-danger'},errors.mappingValue))),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:'form-group row'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('label',{className:'col-lg-2 col-form-label'},'Additional Cost:'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:'col-lg-3'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input',{type:'text',name:'additionalPrice',onChange:this.onChange,value:this.state.additionalPrice,className:'form-control',placeholder:''}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span',{className:'form-text text-danger'},errors.additionalPrice)),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('label',{className:'col-lg-2 col-form-label'},'isEnabled:'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:'col-lg-3'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('select',{name:'isEnabled',onChange:this.onChange,value:this.state.isEnabled,className:'form-control',placeholder:''},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('option',{value:''},'Select isEnabled'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('option',{value:'Yes'},'Yes'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('option',{value:'No'},'No')),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span',{className:'form-text text-danger'},errors.isEnabled))),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:'form-group row'},this.state.mappingType==="image+text"&&__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Fragment,null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('label',{className:'col-lg-2 col-form-label'},'Upload  Image:'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:'col-lg-3'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:'kt-input-icon'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input',{type:'file',name:'photoUrl',onChange:this.uploadImage,className:'form-control',placeholder:''}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span',{className:'form-text text-danger'},errors.photoUrl)),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span',{className:'form-text text-success'},this.state.uploadStatus),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span',{className:'form-text text-muted'},'File Resolution (292px X 69px)'))),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Fragment,null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('label',{className:'col-lg-2 col-form-label'},'Sub-Fields:'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:'col-lg-3'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('select',{name:'subField',onChange:this.onChange,value:this.state.subField,className:'form-control',placeholder:''},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('option',{value:''},'Select'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('option',{value:'Yes'},'Yes'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('option',{value:'No'},'No')),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span',{className:'form-text text-danger'},errors.subField))))),this.state.subField==="Yes"&&__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Fragment,null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:'kt-portlet__head'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:'kt-portlet__head-label'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('h3',{className:'kt-portlet__head-title'},'Add  Sub-Fields'))),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:'kt-portlet__body'},dependentField)),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:'kt-portlet__foot kt-portlet__foot--fit-x'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:'kt-form__actions'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:'row'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:'col-lg-5 d-flex justify-content-around'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('button',{type:'submit',className:'btn btn-success '+(attributemappingloading?'kt-spinner kt-spinner--sm kt-spinner--light':'')},'Save & Add Another'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('button',{type:'button',onClick:function onClick(){_this3.setState({nextScreen:true},function(){_this3.onSubmitNext();});},className:'btn btn-warning '+(attributemappingloading?'kt-spinner kt-spinner--sm kt-spinner--light':'')},'Save & Next'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('button',{type:'button',onClick:this.onReset,className:'btn btn-secondary'},'Cancel')),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:'col-lg-10'}))))))),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_15__ListAttributeMapping__["a" /* default */],{history:this.props.history,location:this.props.location})),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__layouts_Footer__["a" /* default */],null)))));}}]);return AddAttributeMapping;}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);AddAttributeMapping.propTypes={auth:__WEBPACK_IMPORTED_MODULE_1_prop_types__["PropTypes"].object.isRequired,addAttributeMapping:__WEBPACK_IMPORTED_MODULE_1_prop_types__["PropTypes"].func.isRequired,listParentAttributeCategory:__WEBPACK_IMPORTED_MODULE_1_prop_types__["PropTypes"].func.isRequired,listAttributeCategory:__WEBPACK_IMPORTED_MODULE_1_prop_types__["PropTypes"].func.isRequired};var mapStateToProps=function mapStateToProps(state){return{auth:state.auth,errors:state.errors,attributemapping:state.attributemapping,parentattributecategory:state.parentattributecategory,attributecategory:state.attributecategory,product:state.product};};/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_2_react_redux__["b" /* connect */])(mapStateToProps,{addAttributeMapping:__WEBPACK_IMPORTED_MODULE_9__actions_attributemappingAction__["a" /* addAttributeMapping */],listParentAttributeCategory:__WEBPACK_IMPORTED_MODULE_10__actions_parentattributecategoryAction__["d" /* listParentAttributeCategory */],listAttributeCategory:__WEBPACK_IMPORTED_MODULE_11__actions_attributecategoryAction__["d" /* listAttributeCategory */],listProduct:__WEBPACK_IMPORTED_MODULE_12__actions_productAction__["e" /* listProduct */]})(AddAttributeMapping));

/***/ }),
/* 95 */
/***/ (function(module, exports) {


/***/ }),
/* 96 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return attributePrice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return createAttributeItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return deleteAttributeItems; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__types__ = __webpack_require__(11);
// const attribute = [];
var attributePrice=function attributePrice(price){return function(dispatch){dispatch({type:__WEBPACK_IMPORTED_MODULE_0__types__["e" /* ADD_ATTRIBUTE_PRICE */],payload:price});};};var createAttributeItems=function createAttributeItems(id,key,price){return function(dispatch,getState){var _getState=getState(),attributeItems=_getState.attributeItems;var found=attributeItems.attributeList.find(function(idx){return idx.key==key;});if(found){//   const index = attributeItems.attributeList.findIndex(
//     (idx) => idx.key == key
//   );
attributeItems.attributeList=attributeItems.attributeList.filter(function(idx){return idx.key!=key;});}if(attributeItems.attributeList.find(function(idx){return idx.productId==id;})){// attributeItems.attributeList
}var item=[id,{price:price,key:key}];attributeItems.attributeList.push({productId:id,price:price,key:key});dispatch({type:__WEBPACK_IMPORTED_MODULE_0__types__["c" /* ADD_ATTRIBUTE_ITEM */],payload:attributeItems});};};var deleteAttributeItems=function deleteAttributeItems(id){return function(dispatch,getState){var _getState2=getState(),attributeList=_getState2.attributeItems.attributeList;var index=attributeList.findIndex(function(id){return id.productId==id;});var newAttributes=attributeList.filter(function(item){return item.productId!=id;});dispatch({type:__WEBPACK_IMPORTED_MODULE_0__types__["_60" /* REMOVE_ATTRIBUTE_ITEM */],payload:{attributeList:newAttributes}});};};

/***/ }),
/* 97 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export getCart */
/* unused harmony export loadCart */
/* harmony export (immutable) */ __webpack_exports__["a"] = addToCart;
/* harmony export (immutable) */ __webpack_exports__["b"] = removeFromCart;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__types__ = __webpack_require__(11);
function getCart(){return function(dispatch){dispatch({type:__WEBPACK_IMPORTED_MODULE_0__types__["_25" /* GET_CART_SUCCESS */]});};}function loadCart(productList){return function(dispatch){dispatch({type:__WEBPACK_IMPORTED_MODULE_0__types__["_47" /* LOAD_CART */],item:productList});};}function addToCart(cartItem){return function(dispatch){dispatch({type:__WEBPACK_IMPORTED_MODULE_0__types__["x" /* ADD_TO_CART_SUCCESS */],item:cartItem});};}function removeFromCart(item){return function(dispatch){dispatch({type:__WEBPACK_IMPORTED_MODULE_0__types__["_61" /* REMOVE_FROM_CART_SUCCESS */],item:item});};}

/***/ }),
/* 98 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__layouts_SidebarMobile__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__layouts_Asidebar__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__layouts_Header__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__layouts_HeaderTopbar__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__layouts_SubHeader__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__layouts_Footer__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__actions_attributemappingAction__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_sweetalert2__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_sweetalert2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_react_search_input__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_react_search_input___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_react_search_input__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__common_MenuList__ = __webpack_require__(12);
var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var queryString=__webpack_require__(17);var KEYS_TO_FILTERS=['parentattributecategory','attributecategory','attributeName','isEnabled','mappingType','mappingLabel','mappingValue'];var Toast=__WEBPACK_IMPORTED_MODULE_10_sweetalert2___default.a.mixin({toast:true,position:'top-end',showConfirmButton:false,timer:1000});var ListAttributeMapping=function(_Component){_inherits(ListAttributeMapping,_Component);function ListAttributeMapping(){_classCallCheck(this,ListAttributeMapping);var _this=_possibleConstructorReturn(this,(ListAttributeMapping.__proto__||Object.getPrototypeOf(ListAttributeMapping)).call(this));_this.state={errors:{},searchTerm:''};_this.onEditClick=_this.onEditClick.bind(_this);_this.onDeleteClick=_this.onDeleteClick.bind(_this);_this.searchUpdated=_this.searchUpdated.bind(_this);return _this;}_createClass(ListAttributeMapping,[{key:'componentDidMount',value:function componentDidMount(){var parsed=queryString.parse("productID=614d7297a9c0ba3aeec9e672");console.log(parsed);this.props.listAttributeMapping({productID:parsed.productID});}//calls when edit button is clicked
},{key:'onEditClick',value:function onEditClick(res){localStorage.setItem('editattributemapping',JSON.stringify(res));var parsed=queryString.parse(this.props.location.search);this.props.history.push('editmapping?productID='+parsed.productID);}//calls when delete button is clicked

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(100);
module.exports = __webpack_require__(105);


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// @remove-on-eject-begin
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
// @remove-on-eject-end


if (typeof Promise === 'undefined') {
  // Rejection tracking prevents a common issue where React gets into an
  // inconsistent state due to an error, but it gets swallowed by a Promise,
}



if (false) {