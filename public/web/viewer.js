/**
 * @licstart The following is the entire license notice for the
 * JavaScript code in this page
 *
 * Copyright 2023 Mozilla Foundation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @licend The above is the entire license notice for the
 * JavaScript code in this page
 */

/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.GenericCom = void 0;
var _app = __webpack_require__(2);
var _preferences = __webpack_require__(43);
var _download_manager = __webpack_require__(44);
var _genericl10n = __webpack_require__(45);
var _generic_scripting = __webpack_require__(47);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
;
const GenericCom = {};
exports.GenericCom = GenericCom;
class GenericPreferences extends _preferences.BasePreferences {
  _writeToStorage(prefObj) {
    return _asyncToGenerator(function* () {
      localStorage.setItem("pdfjs.preferences", JSON.stringify(prefObj));
    })();
  }
  _readFromStorage(prefObj) {
    return _asyncToGenerator(function* () {
      return JSON.parse(localStorage.getItem("pdfjs.preferences"));
    })();
  }
}
class GenericExternalServices extends _app.DefaultExternalServices {
  static createDownloadManager() {
    return new _download_manager.DownloadManager();
  }
  static createPreferences() {
    return new GenericPreferences();
  }
  static createL10n(_ref) {
    let _ref$locale = _ref.locale,
      locale = _ref$locale === void 0 ? "en-US" : _ref$locale;
    return new _genericl10n.GenericL10n(locale);
  }
  static createScripting(_ref2) {
    let sandboxBundleSrc = _ref2.sandboxBundleSrc;
    return new _generic_scripting.GenericScripting(sandboxBundleSrc);
  }
}
_app.PDFViewerApplication.externalServices = GenericExternalServices;

/***/ }),
/* 2 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.PDFViewerApplication = exports.PDFPrintServiceFactory = exports.DefaultExternalServices = void 0;
var _ui_utils = __webpack_require__(3);
var _pdfjsLib = __webpack_require__(4);
var _app_options = __webpack_require__(5);
var _event_utils = __webpack_require__(6);
var _pdf_link_service = __webpack_require__(7);
var _webAnnotation_editor_params = __webpack_require__(8);
var _overlay_manager = __webpack_require__(9);
var _password_prompt = __webpack_require__(11);
var _webPdf_attachment_viewer = __webpack_require__(12);
var _webPdf_cursor_tools = __webpack_require__(14);
var _webPdf_document_properties = __webpack_require__(16);
var _webPdf_find_bar = __webpack_require__(17);
var _pdf_find_controller = __webpack_require__(18);
var _pdf_history = __webpack_require__(20);
var _webPdf_layer_viewer = __webpack_require__(21);
var _webPdf_outline_viewer = __webpack_require__(22);
var _webPdf_presentation_mode = __webpack_require__(23);
var _pdf_rendering_queue = __webpack_require__(24);
var _pdf_scripting_manager = __webpack_require__(25);
var _webPdf_sidebar = __webpack_require__(26);
var _webPdf_sidebar_resizer = __webpack_require__(27);
var _webPdf_thumbnail_viewer = __webpack_require__(28);
var _pdf_viewer = __webpack_require__(30);
var _webSecondary_toolbar = __webpack_require__(40);
var _webToolbar = __webpack_require__(41);
var _view_history = __webpack_require__(42);
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
const FORCE_PAGES_LOADED_TIMEOUT = 10000;
const WHEEL_ZOOM_DISABLED_TIMEOUT = 1000;
const ViewOnLoad = {
  UNKNOWN: -1,
  PREVIOUS: 0,
  INITIAL: 1
};
const ViewerCssTheme = {
  AUTOMATIC: 0,
  LIGHT: 1,
  DARK: 2
};
class DefaultExternalServices {
  constructor() {
    throw new Error("Cannot initialize DefaultExternalServices.");
  }
  static updateFindControlState(data) {}
  static updateFindMatchesCount(data) {}
  static initPassiveLoading(callbacks) {}
  static reportTelemetry(data) {}
  static createDownloadManager() {
    throw new Error("Not implemented: createDownloadManager");
  }
  static createPreferences() {
    throw new Error("Not implemented: createPreferences");
  }
  static createL10n(options) {
    throw new Error("Not implemented: createL10n");
  }
  static createScripting(options) {
    throw new Error("Not implemented: createScripting");
  }
  static get supportsPinchToZoom() {
    return (0, _pdfjsLib.shadow)(this, "supportsPinchToZoom", true);
  }
  static get supportsIntegratedFind() {
    return (0, _pdfjsLib.shadow)(this, "supportsIntegratedFind", false);
  }
  static get supportsDocumentFonts() {
    return (0, _pdfjsLib.shadow)(this, "supportsDocumentFonts", true);
  }
  static get supportedMouseWheelZoomModifierKeys() {
    return (0, _pdfjsLib.shadow)(this, "supportedMouseWheelZoomModifierKeys", {
      ctrlKey: true,
      metaKey: true
    });
  }
  static get isInAutomation() {
    return (0, _pdfjsLib.shadow)(this, "isInAutomation", false);
  }
  static updateEditorStates(data) {
    throw new Error("Not implemented: updateEditorStates");
  }
  static get canvasMaxAreaInBytes() {
    return (0, _pdfjsLib.shadow)(this, "canvasMaxAreaInBytes", -1);
  }
}
exports.DefaultExternalServices = DefaultExternalServices;
const PDFViewerApplication = {
  initialBookmark: document.location.hash.substring(1),
  _initializedCapability: (0, _pdfjsLib.createPromiseCapability)(),
  appConfig: null,
  pdfDocument: null,
  pdfLoadingTask: null,
  printService: null,
  pdfViewer: null,
  pdfThumbnailViewer: null,
  pdfRenderingQueue: null,
  pdfPresentationMode: null,
  pdfDocumentProperties: null,
  pdfLinkService: null,
  pdfHistory: null,
  pdfSidebar: null,
  pdfSidebarResizer: null,
  pdfOutlineViewer: null,
  pdfAttachmentViewer: null,
  pdfLayerViewer: null,
  pdfCursorTools: null,
  pdfScriptingManager: null,
  store: null,
  downloadManager: null,
  overlayManager: null,
  preferences: null,
  toolbar: null,
  secondaryToolbar: null,
  eventBus: null,
  l10n: null,
  annotationEditorParams: null,
  isInitialViewSet: false,
  downloadComplete: false,
  isViewerEmbedded: window.parent !== window,
  url: "",
  baseUrl: "",
  _downloadUrl: "",
  externalServices: DefaultExternalServices,
  _boundEvents: Object.create(null),
  documentInfo: null,
  metadata: null,
  _contentDispositionFilename: null,
  _contentLength: null,
  _saveInProgress: false,
  _wheelUnusedTicks: 0,
  _wheelUnusedFactor: 1,
  _touchUnusedTicks: 0,
  _touchUnusedFactor: 1,
  _PDFBug: null,
  _hasAnnotationEditors: false,
  _title: document.title,
  _printAnnotationStoragePromise: null,
  _touchInfo: null,
  _isCtrlKeyDown: false,
  initialize(appConfig) {
    var _this = this;
    return _asyncToGenerator(function* () {
      _this.preferences = _this.externalServices.createPreferences();
      _this.appConfig = appConfig;
      yield _this._initializeOptions();
      _this._forceCssTheme();
      yield _this._initializeL10n();
      if (_this.isViewerEmbedded && _app_options.AppOptions.get("externalLinkTarget") === _pdf_link_service.LinkTarget.NONE) {
        _app_options.AppOptions.set("externalLinkTarget", _pdf_link_service.LinkTarget.TOP);
      }
      yield _this._initializeViewerComponents();
      _this.bindEvents();
      _this.bindWindowEvents();
      const appContainer = appConfig.appContainer || document.documentElement;
      _this.l10n.translate(appContainer).then(() => {
        _this.eventBus.dispatch("localized", {
          source: _this
        });
      });
      _this._initializedCapability.resolve();
    })();
  },
  _initializeOptions() {
    var _this2 = this;
    return _asyncToGenerator(function* () {
      if (_app_options.AppOptions.get("disablePreferences")) {
        if (_app_options.AppOptions.get("pdfBugEnabled")) {
          yield _this2._parseHashParams();
        }
        return;
      }
      if (_app_options.AppOptions._hasUserOptions()) {
        console.warn("_initializeOptions: The Preferences may override manually set AppOptions; " + 'please use the "disablePreferences"-option in order to prevent that.');
      }
      try {
        _app_options.AppOptions.setAll(yield _this2.preferences.getAll());
      } catch (reason) {
        console.error(`_initializeOptions: "${reason.message}".`);
      }
      if (_app_options.AppOptions.get("pdfBugEnabled")) {
        yield _this2._parseHashParams();
      }
    })();
  },
  _parseHashParams() {
    var _this3 = this;
    return _asyncToGenerator(function* () {
      const hash = document.location.hash.substring(1);
      if (!hash) {
        return;
      }
      const _this3$appConfig = _this3.appConfig,
        mainContainer = _this3$appConfig.mainContainer,
        viewerContainer = _this3$appConfig.viewerContainer,
        params = (0, _ui_utils.parseQueryString)(hash);
      if (params.get("disableworker") === "true") {
        try {
          yield loadFakeWorker();
        } catch (ex) {
          console.error(`_parseHashParams: "${ex.message}".`);
        }
      }
      if (params.has("disablerange")) {
        _app_options.AppOptions.set("disableRange", params.get("disablerange") === "true");
      }
      if (params.has("disablestream")) {
        _app_options.AppOptions.set("disableStream", params.get("disablestream") === "true");
      }
      if (params.has("disableautofetch")) {
        _app_options.AppOptions.set("disableAutoFetch", params.get("disableautofetch") === "true");
      }
      if (params.has("disablefontface")) {
        _app_options.AppOptions.set("disableFontFace", params.get("disablefontface") === "true");
      }
      if (params.has("disablehistory")) {
        _app_options.AppOptions.set("disableHistory", params.get("disablehistory") === "true");
      }
      if (params.has("verbosity")) {
        _app_options.AppOptions.set("verbosity", params.get("verbosity") | 0);
      }
      if (params.has("textlayer")) {
        switch (params.get("textlayer")) {
          case "off":
            _app_options.AppOptions.set("textLayerMode", _ui_utils.TextLayerMode.DISABLE);
            break;
          case "visible":
          case "shadow":
          case "hover":
            viewerContainer.classList.add(`textLayer-${params.get("textlayer")}`);
            try {
              yield loadPDFBug(_this3);
              _this3._PDFBug.loadCSS();
            } catch (ex) {
              console.error(`_parseHashParams: "${ex.message}".`);
            }
            break;
        }
      }
      if (params.has("pdfbug")) {
        _app_options.AppOptions.set("pdfBug", true);
        _app_options.AppOptions.set("fontExtraProperties", true);
        const enabled = params.get("pdfbug").split(",");
        try {
          yield loadPDFBug(_this3);
          _this3._PDFBug.init({
            OPS: _pdfjsLib.OPS
          }, mainContainer, enabled);
        } catch (ex) {
          console.error(`_parseHashParams: "${ex.message}".`);
        }
      }
      if (params.has("locale")) {
        _app_options.AppOptions.set("locale", params.get("locale"));
      }
    })();
  },
  _initializeL10n() {
    var _this4 = this;
    return _asyncToGenerator(function* () {
      _this4.l10n = _this4.externalServices.createL10n({
        locale: _app_options.AppOptions.get("locale")
      });
      const dir = yield _this4.l10n.getDirection();
      document.getElementsByTagName("html")[0].dir = dir;
    })();
  },
  _forceCssTheme() {
    const cssTheme = _app_options.AppOptions.get("viewerCssTheme");
    if (cssTheme === ViewerCssTheme.AUTOMATIC || !Object.values(ViewerCssTheme).includes(cssTheme)) {
      return;
    }
    try {
      const styleSheet = document.styleSheets[0];
      const cssRules = (styleSheet === null || styleSheet === void 0 ? void 0 : styleSheet.cssRules) || [];
      for (let i = 0, ii = cssRules.length; i < ii; i++) {
        var _rule$media;
        const rule = cssRules[i];
        if (rule instanceof CSSMediaRule && ((_rule$media = rule.media) === null || _rule$media === void 0 ? void 0 : _rule$media[0]) === "(prefers-color-scheme: dark)") {
          if (cssTheme === ViewerCssTheme.LIGHT) {
            styleSheet.deleteRule(i);
            return;
          }
          const darkRules = /^@media \(prefers-color-scheme: dark\) {\n\s*([\w\s-.,:;/\\{}()]+)\n}$/.exec(rule.cssText);
          if (darkRules !== null && darkRules !== void 0 && darkRules[1]) {
            styleSheet.deleteRule(i);
            styleSheet.insertRule(darkRules[1], i);
          }
          return;
        }
      }
    } catch (reason) {
      console.error(`_forceCssTheme: "${reason === null || reason === void 0 ? void 0 : reason.message}".`);
    }
  },
  _initializeViewerComponents() {
    var _this5 = this;
    return _asyncToGenerator(function* () {
      var _appConfig$sidebar, _appConfig$secondaryT, _appConfig$secondaryT2, _appConfig$sidebar2, _appConfig$sidebar3, _appConfig$sidebar4;
      const appConfig = _this5.appConfig,
        externalServices = _this5.externalServices;
      const eventBus = externalServices.isInAutomation ? new _event_utils.AutomationEventBus() : new _event_utils.EventBus();
      _this5.eventBus = eventBus;
      _this5.overlayManager = new _overlay_manager.OverlayManager();
      const pdfRenderingQueue = new _pdf_rendering_queue.PDFRenderingQueue();
      pdfRenderingQueue.onIdle = _this5._cleanup.bind(_this5);
      _this5.pdfRenderingQueue = pdfRenderingQueue;
      const pdfLinkService = new _pdf_link_service.PDFLinkService({
        eventBus,
        externalLinkTarget: _app_options.AppOptions.get("externalLinkTarget"),
        externalLinkRel: _app_options.AppOptions.get("externalLinkRel"),
        ignoreDestinationZoom: _app_options.AppOptions.get("ignoreDestinationZoom")
      });
      _this5.pdfLinkService = pdfLinkService;
      const downloadManager = externalServices.createDownloadManager();
      _this5.downloadManager = downloadManager;
      const findController = new _pdf_find_controller.PDFFindController({
        linkService: pdfLinkService,
        eventBus,
        updateMatchesCountOnProgress: true
      });
      _this5.findController = findController;
      const pdfScriptingManager = new _pdf_scripting_manager.PDFScriptingManager({
        eventBus,
        sandboxBundleSrc: _app_options.AppOptions.get("sandboxBundleSrc"),
        scriptingFactory: externalServices,
        docPropertiesLookup: _this5._scriptingDocProperties.bind(_this5)
      });
      _this5.pdfScriptingManager = pdfScriptingManager;
      const container = appConfig.mainContainer,
        viewer = appConfig.viewerContainer;
      const annotationEditorMode = _app_options.AppOptions.get("annotationEditorMode");
      const pageColors = _app_options.AppOptions.get("forcePageColors") || window.matchMedia("(forced-colors: active)").matches ? {
        background: _app_options.AppOptions.get("pageColorsBackground"),
        foreground: _app_options.AppOptions.get("pageColorsForeground")
      } : null;
      _this5.pdfViewer = new _pdf_viewer.PDFViewer({
        container,
        viewer,
        eventBus,
        renderingQueue: pdfRenderingQueue,
        linkService: pdfLinkService,
        downloadManager,
        findController,
        scriptingManager: _app_options.AppOptions.get("enableScripting") && pdfScriptingManager,
        renderer: _app_options.AppOptions.get("renderer"),
        l10n: _this5.l10n,
        textLayerMode: _app_options.AppOptions.get("textLayerMode"),
        annotationMode: _app_options.AppOptions.get("annotationMode"),
        annotationEditorMode,
        imageResourcesPath: _app_options.AppOptions.get("imageResourcesPath"),
        enablePrintAutoRotate: _app_options.AppOptions.get("enablePrintAutoRotate"),
        useOnlyCssZoom: _app_options.AppOptions.get("useOnlyCssZoom"),
        isOffscreenCanvasSupported: _app_options.AppOptions.get("isOffscreenCanvasSupported"),
        maxCanvasPixels: _app_options.AppOptions.get("maxCanvasPixels"),
        enablePermissions: _app_options.AppOptions.get("enablePermissions"),
        pageColors
      });
      pdfRenderingQueue.setViewer(_this5.pdfViewer);
      pdfLinkService.setViewer(_this5.pdfViewer);
      pdfScriptingManager.setViewer(_this5.pdfViewer);
      if ((_appConfig$sidebar = appConfig.sidebar) !== null && _appConfig$sidebar !== void 0 && _appConfig$sidebar.thumbnailView) {
        _this5.pdfThumbnailViewer = new _webPdf_thumbnail_viewer.PDFThumbnailViewer({
          container: appConfig.sidebar.thumbnailView,
          renderingQueue: pdfRenderingQueue,
          linkService: pdfLinkService,
          l10n: _this5.l10n,
          pageColors
        });
        pdfRenderingQueue.setThumbnailViewer(_this5.pdfThumbnailViewer);
      }
      if (!_this5.isViewerEmbedded && !_app_options.AppOptions.get("disableHistory")) {
        _this5.pdfHistory = new _pdf_history.PDFHistory({
          linkService: pdfLinkService,
          eventBus
        });
        pdfLinkService.setHistory(_this5.pdfHistory);
      }
      if (!_this5.supportsIntegratedFind && appConfig.findBar) {
        _this5.findBar = new _webPdf_find_bar.PDFFindBar(appConfig.findBar, eventBus, _this5.l10n);
      }
      if (appConfig.annotationEditorParams) {
        if (annotationEditorMode !== _pdfjsLib.AnnotationEditorType.DISABLE) {
          _this5.annotationEditorParams = new _webAnnotation_editor_params.AnnotationEditorParams(appConfig.annotationEditorParams, eventBus);
        } else {
          for (var _i = 0, _arr = ["editorModeButtons", "editorModeSeparator"]; _i < _arr.length; _i++) {
            var _document$getElementB;
            const id = _arr[_i];
            (_document$getElementB = document.getElementById(id)) === null || _document$getElementB === void 0 ? void 0 : _document$getElementB.classList.add("hidden");
          }
        }
      }
      if (appConfig.documentProperties) {
        _this5.pdfDocumentProperties = new _webPdf_document_properties.PDFDocumentProperties(appConfig.documentProperties, _this5.overlayManager, eventBus, _this5.l10n, () => {
          return _this5._docFilename;
        });
      }
      if ((_appConfig$secondaryT = appConfig.secondaryToolbar) !== null && _appConfig$secondaryT !== void 0 && _appConfig$secondaryT.cursorHandToolButton) {
        _this5.pdfCursorTools = new _webPdf_cursor_tools.PDFCursorTools({
          container,
          eventBus,
          cursorToolOnLoad: _app_options.AppOptions.get("cursorToolOnLoad")
        });
      }
      if (appConfig.toolbar) {
        _this5.toolbar = new _webToolbar.Toolbar(appConfig.toolbar, eventBus, _this5.l10n);
      }
      if (appConfig.secondaryToolbar) {
        _this5.secondaryToolbar = new _webSecondary_toolbar.SecondaryToolbar(appConfig.secondaryToolbar, eventBus, _this5.externalServices);
      }
      if (_this5.supportsFullscreen && (_appConfig$secondaryT2 = appConfig.secondaryToolbar) !== null && _appConfig$secondaryT2 !== void 0 && _appConfig$secondaryT2.presentationModeButton) {
        _this5.pdfPresentationMode = new _webPdf_presentation_mode.PDFPresentationMode({
          container,
          pdfViewer: _this5.pdfViewer,
          eventBus
        });
      }
      if (appConfig.passwordOverlay) {
        _this5.passwordPrompt = new _password_prompt.PasswordPrompt(appConfig.passwordOverlay, _this5.overlayManager, _this5.l10n, _this5.isViewerEmbedded);
      }
      if ((_appConfig$sidebar2 = appConfig.sidebar) !== null && _appConfig$sidebar2 !== void 0 && _appConfig$sidebar2.outlineView) {
        _this5.pdfOutlineViewer = new _webPdf_outline_viewer.PDFOutlineViewer({
          container: appConfig.sidebar.outlineView,
          eventBus,
          linkService: pdfLinkService,
          downloadManager
        });
      }
      if ((_appConfig$sidebar3 = appConfig.sidebar) !== null && _appConfig$sidebar3 !== void 0 && _appConfig$sidebar3.attachmentsView) {
        _this5.pdfAttachmentViewer = new _webPdf_attachment_viewer.PDFAttachmentViewer({
          container: appConfig.sidebar.attachmentsView,
          eventBus,
          downloadManager
        });
      }
      if ((_appConfig$sidebar4 = appConfig.sidebar) !== null && _appConfig$sidebar4 !== void 0 && _appConfig$sidebar4.layersView) {
        _this5.pdfLayerViewer = new _webPdf_layer_viewer.PDFLayerViewer({
          container: appConfig.sidebar.layersView,
          eventBus,
          l10n: _this5.l10n
        });
      }
      if (appConfig.sidebar) {
        _this5.pdfSidebar = new _webPdf_sidebar.PDFSidebar({
          elements: appConfig.sidebar,
          pdfViewer: _this5.pdfViewer,
          pdfThumbnailViewer: _this5.pdfThumbnailViewer,
          eventBus,
          l10n: _this5.l10n
        });
        _this5.pdfSidebar.onToggled = _this5.forceRendering.bind(_this5);
        _this5.pdfSidebarResizer = new _webPdf_sidebar_resizer.PDFSidebarResizer(appConfig.sidebarResizer, eventBus, _this5.l10n);
      }
    })();
  },
  run(config) {
    this.initialize(config).then(webViewerInitialized);
  },
  get initialized() {
    return this._initializedCapability.settled;
  },
  get initializedPromise() {
    return this._initializedCapability.promise;
  },
  zoomIn(steps, scaleFactor) {
    if (this.pdfViewer.isInPresentationMode) {
      return;
    }
    this.pdfViewer.increaseScale({
      drawingDelay: _app_options.AppOptions.get("defaultZoomDelay"),
      steps,
      scaleFactor
    });
  },
  zoomOut(steps, scaleFactor) {
    if (this.pdfViewer.isInPresentationMode) {
      return;
    }
    this.pdfViewer.decreaseScale({
      drawingDelay: _app_options.AppOptions.get("defaultZoomDelay"),
      steps,
      scaleFactor
    });
  },
  zoomReset() {
    if (this.pdfViewer.isInPresentationMode) {
      return;
    }
    this.pdfViewer.currentScaleValue = _ui_utils.DEFAULT_SCALE_VALUE;
  },
  get pagesCount() {
    return this.pdfDocument ? this.pdfDocument.numPages : 0;
  },
  get page() {
    return this.pdfViewer.currentPageNumber;
  },
  set page(val) {
    this.pdfViewer.currentPageNumber = val;
  },
  get supportsPrinting() {
    return PDFPrintServiceFactory.instance.supportsPrinting;
  },
  get supportsFullscreen() {
    return (0, _pdfjsLib.shadow)(this, "supportsFullscreen", document.fullscreenEnabled);
  },
  get supportsPinchToZoom() {
    return this.externalServices.supportsPinchToZoom;
  },
  get supportsIntegratedFind() {
    return this.externalServices.supportsIntegratedFind;
  },
  get supportsDocumentFonts() {
    return this.externalServices.supportsDocumentFonts;
  },
  get loadingBar() {
    const barElement = document.getElementById("loadingBar");
    const bar = barElement ? new _ui_utils.ProgressBar(barElement) : null;
    return (0, _pdfjsLib.shadow)(this, "loadingBar", bar);
  },
  get supportedMouseWheelZoomModifierKeys() {
    return this.externalServices.supportedMouseWheelZoomModifierKeys;
  },
  initPassiveLoading() {
    throw new Error("Not implemented: initPassiveLoading");
  },
  setTitleUsingUrl() {
    let url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
    let downloadUrl = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    this.url = url;
    this.baseUrl = url.split("#")[0];
    if (downloadUrl) {
      this._downloadUrl = downloadUrl === url ? this.baseUrl : downloadUrl.split("#")[0];
    }
    if ((0, _pdfjsLib.isDataScheme)(url)) {
      this._hideViewBookmark();
    }
    let title = (0, _pdfjsLib.getPdfFilenameFromUrl)(url, "");
    if (!title) {
      try {
        title = decodeURIComponent((0, _pdfjsLib.getFilenameFromUrl)(url)) || url;
      } catch (ex) {
        title = url;
      }
    }
    this.setTitle(title);
  },
  setTitle() {
    let title = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this._title;
    this._title = title;
    if (this.isViewerEmbedded) {
      return;
    }
    const editorIndicator = this._hasAnnotationEditors && !this.pdfRenderingQueue.printing;
    document.title = `${editorIndicator ? "* " : ""}${title}`;
  },
  get _docFilename() {
    return this._contentDispositionFilename || (0, _pdfjsLib.getPdfFilenameFromUrl)(this.url);
  },
  _hideViewBookmark() {
    const secondaryToolbar = this.appConfig.secondaryToolbar;
    secondaryToolbar === null || secondaryToolbar === void 0 ? void 0 : secondaryToolbar.viewBookmarkButton.classList.add("hidden");
    if (secondaryToolbar !== null && secondaryToolbar !== void 0 && secondaryToolbar.presentationModeButton.classList.contains("hidden")) {
      var _document$getElementB2;
      (_document$getElementB2 = document.getElementById("viewBookmarkSeparator")) === null || _document$getElementB2 === void 0 ? void 0 : _document$getElementB2.classList.add("hidden");
    }
  },
  close() {
    var _this6 = this;
    return _asyncToGenerator(function* () {
      var _this6$pdfDocument, _this6$pdfSidebar, _this6$pdfOutlineView, _this6$pdfAttachmentV, _this6$pdfLayerViewer, _this6$pdfHistory, _this6$findBar, _this6$toolbar, _this6$secondaryToolb, _this6$_PDFBug;
      _this6._unblockDocumentLoadEvent();
      _this6._hideViewBookmark();
      if (!_this6.pdfLoadingTask) {
        return;
      }
      if (((_this6$pdfDocument = _this6.pdfDocument) === null || _this6$pdfDocument === void 0 ? void 0 : _this6$pdfDocument.annotationStorage.size) > 0 && _this6._annotationStorageModified) {
        try {
          yield _this6.save();
        } catch (reason) {}
      }
      const promises = [];
      promises.push(_this6.pdfLoadingTask.destroy());
      _this6.pdfLoadingTask = null;
      if (_this6.pdfDocument) {
        var _this6$pdfThumbnailVi, _this6$pdfDocumentPro;
        _this6.pdfDocument = null;
        (_this6$pdfThumbnailVi = _this6.pdfThumbnailViewer) === null || _this6$pdfThumbnailVi === void 0 ? void 0 : _this6$pdfThumbnailVi.setDocument(null);
        _this6.pdfViewer.setDocument(null);
        _this6.pdfLinkService.setDocument(null);
        (_this6$pdfDocumentPro = _this6.pdfDocumentProperties) === null || _this6$pdfDocumentPro === void 0 ? void 0 : _this6$pdfDocumentPro.setDocument(null);
      }
      _this6.pdfLinkService.externalLinkEnabled = true;
      _this6.store = null;
      _this6.isInitialViewSet = false;
      _this6.downloadComplete = false;
      _this6.url = "";
      _this6.baseUrl = "";
      _this6._downloadUrl = "";
      _this6.documentInfo = null;
      _this6.metadata = null;
      _this6._contentDispositionFilename = null;
      _this6._contentLength = null;
      _this6._saveInProgress = false;
      _this6._hasAnnotationEditors = false;
      promises.push(_this6.pdfScriptingManager.destroyPromise);
      _this6.setTitle();
      (_this6$pdfSidebar = _this6.pdfSidebar) === null || _this6$pdfSidebar === void 0 ? void 0 : _this6$pdfSidebar.reset();
      (_this6$pdfOutlineView = _this6.pdfOutlineViewer) === null || _this6$pdfOutlineView === void 0 ? void 0 : _this6$pdfOutlineView.reset();
      (_this6$pdfAttachmentV = _this6.pdfAttachmentViewer) === null || _this6$pdfAttachmentV === void 0 ? void 0 : _this6$pdfAttachmentV.reset();
      (_this6$pdfLayerViewer = _this6.pdfLayerViewer) === null || _this6$pdfLayerViewer === void 0 ? void 0 : _this6$pdfLayerViewer.reset();
      (_this6$pdfHistory = _this6.pdfHistory) === null || _this6$pdfHistory === void 0 ? void 0 : _this6$pdfHistory.reset();
      (_this6$findBar = _this6.findBar) === null || _this6$findBar === void 0 ? void 0 : _this6$findBar.reset();
      (_this6$toolbar = _this6.toolbar) === null || _this6$toolbar === void 0 ? void 0 : _this6$toolbar.reset();
      (_this6$secondaryToolb = _this6.secondaryToolbar) === null || _this6$secondaryToolb === void 0 ? void 0 : _this6$secondaryToolb.reset();
      (_this6$_PDFBug = _this6._PDFBug) === null || _this6$_PDFBug === void 0 ? void 0 : _this6$_PDFBug.cleanup();
      yield Promise.all(promises);
    })();
  },
  open(args) {
    var _this7 = this;
    return _asyncToGenerator(function* () {
      var _args;
      let deprecatedArgs = false;
      if (typeof args === "string") {
        args = {
          url: args
        };
        deprecatedArgs = true;
      } else if ((_args = args) !== null && _args !== void 0 && _args.byteLength) {
        args = {
          data: args
        };
        deprecatedArgs = true;
      }
      if (deprecatedArgs) {
        console.error("The `PDFViewerApplication.open` signature was updated, please use an object instead.");
      }
      if (_this7.pdfLoadingTask) {
        yield _this7.close();
      }
      const workerParams = _app_options.AppOptions.getAll(_app_options.OptionKind.WORKER);
      Object.assign(_pdfjsLib.GlobalWorkerOptions, workerParams);
      if (args.url) {
        _this7.setTitleUsingUrl(args.originalUrl || args.url, args.url);
      }
      const apiParams = _app_options.AppOptions.getAll(_app_options.OptionKind.API);
      const params = _objectSpread(_objectSpread({
        canvasMaxAreaInBytes: _this7.externalServices.canvasMaxAreaInBytes
      }, apiParams), args);
      const loadingTask = (0, _pdfjsLib.getDocument)(params);
      _this7.pdfLoadingTask = loadingTask;
      loadingTask.onPassword = (updateCallback, reason) => {
        if (_this7.isViewerEmbedded) {
          _this7._unblockDocumentLoadEvent();
        }
        _this7.pdfLinkService.externalLinkEnabled = false;
        _this7.passwordPrompt.setUpdateCallback(updateCallback, reason);
        _this7.passwordPrompt.open();
      };
      loadingTask.onProgress = _ref => {
        let loaded = _ref.loaded,
          total = _ref.total;
        _this7.progress(loaded / total);
      };
      return loadingTask.promise.then(pdfDocument => {
        _this7.load(pdfDocument);
      }, reason => {
        if (loadingTask !== _this7.pdfLoadingTask) {
          return undefined;
        }
        let key = "loading_error";
        if (reason instanceof _pdfjsLib.InvalidPDFException) {
          key = "invalid_file_error";
        } else if (reason instanceof _pdfjsLib.MissingPDFException) {
          key = "missing_file_error";
        } else if (reason instanceof _pdfjsLib.UnexpectedResponseException) {
          key = "unexpected_response_error";
        }
        return _this7.l10n.get(key).then(msg => {
          _this7._documentError(msg, {
            message: reason === null || reason === void 0 ? void 0 : reason.message
          });
          throw reason;
        });
      });
    })();
  },
  _ensureDownloadComplete() {
    if (this.pdfDocument && this.downloadComplete) {
      return;
    }
    throw new Error("PDF document not downloaded.");
  },
  download() {
    var _this8 = this;
    return _asyncToGenerator(function* () {
      const url = _this8._downloadUrl,
        filename = _this8._docFilename;
      try {
        _this8._ensureDownloadComplete();
        const data = yield _this8.pdfDocument.getData();
        const blob = new Blob([data], {
          type: "application/pdf"
        });
        yield _this8.downloadManager.download(blob, url, filename);
      } catch (reason) {
        yield _this8.downloadManager.downloadUrl(url, filename);
      }
    })();
  },
  save() {
    var _this9 = this;
    return _asyncToGenerator(function* () {
      if (_this9._saveInProgress) {
        return;
      }
      _this9._saveInProgress = true;
      yield _this9.pdfScriptingManager.dispatchWillSave();
      const url = _this9._downloadUrl,
        filename = _this9._docFilename;
      try {
        _this9._ensureDownloadComplete();
        const data = yield _this9.pdfDocument.saveDocument();
        const blob = new Blob([data], {
          type: "application/pdf"
        });
        yield _this9.downloadManager.download(blob, url, filename);
      } catch (reason) {
        console.error(`Error when saving the document: ${reason.message}`);
        yield _this9.download();
      } finally {
        yield _this9.pdfScriptingManager.dispatchDidSave();
        _this9._saveInProgress = false;
      }
      if (_this9._hasAnnotationEditors) {
        _this9.externalServices.reportTelemetry({
          type: "editing",
          data: {
            type: "save"
          }
        });
      }
    })();
  },
  downloadOrSave() {
    var _this$pdfDocument;
    if (((_this$pdfDocument = this.pdfDocument) === null || _this$pdfDocument === void 0 ? void 0 : _this$pdfDocument.annotationStorage.size) > 0) {
      this.save();
    } else {
      this.download();
    }
  },
  _documentError(message) {
    var _moreInfo$message;
    let moreInfo = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    this._unblockDocumentLoadEvent();
    this._otherError(message, moreInfo);
    this.eventBus.dispatch("documenterror", {
      source: this,
      message,
      reason: (_moreInfo$message = moreInfo === null || moreInfo === void 0 ? void 0 : moreInfo.message) !== null && _moreInfo$message !== void 0 ? _moreInfo$message : null
    });
  },
  _otherError(message) {
    let moreInfo = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    const moreInfoText = [`PDF.js v${_pdfjsLib.version || "?"} (build: ${_pdfjsLib.build || "?"})`];
    if (moreInfo) {
      moreInfoText.push(`Message: ${moreInfo.message}`);
      if (moreInfo.stack) {
        moreInfoText.push(`Stack: ${moreInfo.stack}`);
      } else {
        if (moreInfo.filename) {
          moreInfoText.push(`File: ${moreInfo.filename}`);
        }
        if (moreInfo.lineNumber) {
          moreInfoText.push(`Line: ${moreInfo.lineNumber}`);
        }
      }
    }
    console.error(`${message}\n\n${moreInfoText.join("\n")}`);
  },
  progress(level) {
    var _this$pdfDocument$loa, _this$pdfDocument2;
    if (!this.loadingBar || this.downloadComplete) {
      return;
    }
    const percent = Math.round(level * 100);
    if (percent <= this.loadingBar.percent) {
      return;
    }
    this.loadingBar.percent = percent;
    if ((_this$pdfDocument$loa = (_this$pdfDocument2 = this.pdfDocument) === null || _this$pdfDocument2 === void 0 ? void 0 : _this$pdfDocument2.loadingParams.disableAutoFetch) !== null && _this$pdfDocument$loa !== void 0 ? _this$pdfDocument$loa : _app_options.AppOptions.get("disableAutoFetch")) {
      this.loadingBar.setDisableAutoFetch();
    }
  },
  load(pdfDocument) {
    var _this$toolbar,
      _this$secondaryToolba,
      _this$pdfDocumentProp,
      _this$pdfThumbnailVie,
      _this10 = this;
    this.pdfDocument = pdfDocument;
    pdfDocument.getDownloadInfo().then(_ref2 => {
      var _this$loadingBar;
      let length = _ref2.length;
      this._contentLength = length;
      this.downloadComplete = true;
      (_this$loadingBar = this.loadingBar) === null || _this$loadingBar === void 0 ? void 0 : _this$loadingBar.hide();
      firstPagePromise.then(() => {
        this.eventBus.dispatch("documentloaded", {
          source: this
        });
      });
    });
    const pageLayoutPromise = pdfDocument.getPageLayout().catch(function () {});
    const pageModePromise = pdfDocument.getPageMode().catch(function () {});
    const openActionPromise = pdfDocument.getOpenAction().catch(function () {});
    (_this$toolbar = this.toolbar) === null || _this$toolbar === void 0 ? void 0 : _this$toolbar.setPagesCount(pdfDocument.numPages, false);
    (_this$secondaryToolba = this.secondaryToolbar) === null || _this$secondaryToolba === void 0 ? void 0 : _this$secondaryToolba.setPagesCount(pdfDocument.numPages);
    let baseDocumentUrl;
    baseDocumentUrl = null;
    if (baseDocumentUrl && (0, _pdfjsLib.isDataScheme)(baseDocumentUrl)) {
      baseDocumentUrl = null;
    }
    this.pdfLinkService.setDocument(pdfDocument, baseDocumentUrl);
    (_this$pdfDocumentProp = this.pdfDocumentProperties) === null || _this$pdfDocumentProp === void 0 ? void 0 : _this$pdfDocumentProp.setDocument(pdfDocument);
    const pdfViewer = this.pdfViewer;
    pdfViewer.setDocument(pdfDocument);
    const firstPagePromise = pdfViewer.firstPagePromise,
      onePageRendered = pdfViewer.onePageRendered,
      pagesPromise = pdfViewer.pagesPromise;
    (_this$pdfThumbnailVie = this.pdfThumbnailViewer) === null || _this$pdfThumbnailVie === void 0 ? void 0 : _this$pdfThumbnailVie.setDocument(pdfDocument);
    const storedPromise = (this.store = new _view_history.ViewHistory(pdfDocument.fingerprints[0])).getMultiple({
      page: null,
      zoom: _ui_utils.DEFAULT_SCALE_VALUE,
      scrollLeft: "0",
      scrollTop: "0",
      rotation: null,
      sidebarView: _ui_utils.SidebarView.UNKNOWN,
      scrollMode: _ui_utils.ScrollMode.UNKNOWN,
      spreadMode: _ui_utils.SpreadMode.UNKNOWN
    }).catch(() => {
      return Object.create(null);
    });
    firstPagePromise.then(pdfPage => {
      var _this$loadingBar2;
      (_this$loadingBar2 = this.loadingBar) === null || _this$loadingBar2 === void 0 ? void 0 : _this$loadingBar2.setWidth(this.appConfig.viewerContainer);
      this._initializeAnnotationStorageCallbacks(pdfDocument);
      Promise.all([_ui_utils.animationStarted, storedPromise, pageLayoutPromise, pageModePromise, openActionPromise]).then( /*#__PURE__*/function () {
        var _ref4 = _asyncToGenerator(function* (_ref3) {
          let _ref5 = _slicedToArray(_ref3, 5),
            timeStamp = _ref5[0],
            stored = _ref5[1],
            pageLayout = _ref5[2],
            pageMode = _ref5[3],
            openAction = _ref5[4];
          const viewOnLoad = _app_options.AppOptions.get("viewOnLoad");
          _this10._initializePdfHistory({
            fingerprint: pdfDocument.fingerprints[0],
            viewOnLoad,
            initialDest: openAction === null || openAction === void 0 ? void 0 : openAction.dest
          });
          const initialBookmark = _this10.initialBookmark;
          const zoom = _app_options.AppOptions.get("defaultZoomValue");
          let hash = zoom ? `zoom=${zoom}` : null;
          let rotation = null;
          let sidebarView = _app_options.AppOptions.get("sidebarViewOnLoad");
          let scrollMode = _app_options.AppOptions.get("scrollModeOnLoad");
          let spreadMode = _app_options.AppOptions.get("spreadModeOnLoad");
          if (stored.page && viewOnLoad !== ViewOnLoad.INITIAL) {
            hash = `page=${stored.page}&zoom=${zoom || stored.zoom},` + `${stored.scrollLeft},${stored.scrollTop}`;
            rotation = parseInt(stored.rotation, 10);
            if (sidebarView === _ui_utils.SidebarView.UNKNOWN) {
              sidebarView = stored.sidebarView | 0;
            }
            if (scrollMode === _ui_utils.ScrollMode.UNKNOWN) {
              scrollMode = stored.scrollMode | 0;
            }
            if (spreadMode === _ui_utils.SpreadMode.UNKNOWN) {
              spreadMode = stored.spreadMode | 0;
            }
          }
          if (pageMode && sidebarView === _ui_utils.SidebarView.UNKNOWN) {
            sidebarView = (0, _ui_utils.apiPageModeToSidebarView)(pageMode);
          }
          if (pageLayout && scrollMode === _ui_utils.ScrollMode.UNKNOWN && spreadMode === _ui_utils.SpreadMode.UNKNOWN) {
            const modes = (0, _ui_utils.apiPageLayoutToViewerModes)(pageLayout);
            spreadMode = modes.spreadMode;
          }
          _this10.setInitialView(hash, {
            rotation,
            sidebarView,
            scrollMode,
            spreadMode
          });
          _this10.eventBus.dispatch("documentinit", {
            source: _this10
          });
          if (!_this10.isViewerEmbedded) {
            pdfViewer.focus();
          }
          yield Promise.race([pagesPromise, new Promise(resolve => {
            setTimeout(resolve, FORCE_PAGES_LOADED_TIMEOUT);
          })]);
          if (!initialBookmark && !hash) {
            return;
          }
          if (pdfViewer.hasEqualPageSizes) {
            return;
          }
          _this10.initialBookmark = initialBookmark;
          pdfViewer.currentScaleValue = pdfViewer.currentScaleValue;
          _this10.setInitialView(hash);
        });
        return function (_x) {
          return _ref4.apply(this, arguments);
        };
      }()).catch(() => {
        this.setInitialView();
      }).then(function () {
        pdfViewer.update();
      });
    });
    pagesPromise.then(() => {
      this._unblockDocumentLoadEvent();
      this._initializeAutoPrint(pdfDocument, openActionPromise);
    }, reason => {
      this.l10n.get("loading_error").then(msg => {
        this._documentError(msg, {
          message: reason === null || reason === void 0 ? void 0 : reason.message
        });
      });
    });
    onePageRendered.then(data => {
      this.externalServices.reportTelemetry({
        type: "pageInfo",
        timestamp: data.timestamp
      });
      if (this.pdfOutlineViewer) {
        pdfDocument.getOutline().then(outline => {
          if (pdfDocument !== this.pdfDocument) {
            return;
          }
          this.pdfOutlineViewer.render({
            outline,
            pdfDocument
          });
        });
      }
      if (this.pdfAttachmentViewer) {
        pdfDocument.getAttachments().then(attachments => {
          if (pdfDocument !== this.pdfDocument) {
            return;
          }
          this.pdfAttachmentViewer.render({
            attachments
          });
        });
      }
      if (this.pdfLayerViewer) {
        pdfViewer.optionalContentConfigPromise.then(optionalContentConfig => {
          if (pdfDocument !== this.pdfDocument) {
            return;
          }
          this.pdfLayerViewer.render({
            optionalContentConfig,
            pdfDocument
          });
        });
      }
    });
    this._initializePageLabels(pdfDocument);
    this._initializeMetadata(pdfDocument);
  },
  _scriptingDocProperties(pdfDocument) {
    var _this11 = this;
    return _asyncToGenerator(function* () {
      var _this11$metadata, _this11$metadata2;
      if (!_this11.documentInfo) {
        yield new Promise(resolve => {
          _this11.eventBus._on("metadataloaded", resolve, {
            once: true
          });
        });
        if (pdfDocument !== _this11.pdfDocument) {
          return null;
        }
      }
      if (!_this11._contentLength) {
        yield new Promise(resolve => {
          _this11.eventBus._on("documentloaded", resolve, {
            once: true
          });
        });
        if (pdfDocument !== _this11.pdfDocument) {
          return null;
        }
      }
      return _objectSpread(_objectSpread({}, _this11.documentInfo), {}, {
        baseURL: _this11.baseUrl,
        filesize: _this11._contentLength,
        filename: _this11._docFilename,
        metadata: (_this11$metadata = _this11.metadata) === null || _this11$metadata === void 0 ? void 0 : _this11$metadata.getRaw(),
        authors: (_this11$metadata2 = _this11.metadata) === null || _this11$metadata2 === void 0 ? void 0 : _this11$metadata2.get("dc:creator"),
        numPages: _this11.pagesCount,
        URL: _this11.url
      });
    })();
  },
  _initializeAutoPrint(pdfDocument, openActionPromise) {
    var _this12 = this;
    return _asyncToGenerator(function* () {
      const _yield$Promise$all = yield Promise.all([openActionPromise, !_this12.pdfViewer.enableScripting ? pdfDocument.getJavaScript() : null]),
        _yield$Promise$all2 = _slicedToArray(_yield$Promise$all, 2),
        openAction = _yield$Promise$all2[0],
        javaScript = _yield$Promise$all2[1];
      if (pdfDocument !== _this12.pdfDocument) {
        return;
      }
      let triggerAutoPrint = false;
      if ((openAction === null || openAction === void 0 ? void 0 : openAction.action) === "Print") {
        triggerAutoPrint = true;
      }
      if (javaScript) {
        javaScript.some(js => {
          if (!js) {
            return false;
          }
          console.warn("Warning: JavaScript support is not enabled");
          return true;
        });
        if (!triggerAutoPrint) {
          var _iterator = _createForOfIteratorHelper(javaScript),
            _step;
          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              const js = _step.value;
              if (js && _ui_utils.AutoPrintRegExp.test(js)) {
                triggerAutoPrint = true;
                break;
              }
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        }
      }
      if (triggerAutoPrint) {
        _this12.triggerPrinting();
      }
    })();
  },
  _initializeMetadata(pdfDocument) {
    var _this13 = this;
    return _asyncToGenerator(function* () {
      var _this13$_contentDispo, _this13$_contentLengt;
      const _yield$pdfDocument$ge = yield pdfDocument.getMetadata(),
        info = _yield$pdfDocument$ge.info,
        metadata = _yield$pdfDocument$ge.metadata,
        contentDispositionFilename = _yield$pdfDocument$ge.contentDispositionFilename,
        contentLength = _yield$pdfDocument$ge.contentLength;
      if (pdfDocument !== _this13.pdfDocument) {
        return;
      }
      _this13.documentInfo = info;
      _this13.metadata = metadata;
      (_this13$_contentDispo = _this13._contentDispositionFilename) !== null && _this13$_contentDispo !== void 0 ? _this13$_contentDispo : _this13._contentDispositionFilename = contentDispositionFilename;
      (_this13$_contentLengt = _this13._contentLength) !== null && _this13$_contentLengt !== void 0 ? _this13$_contentLengt : _this13._contentLength = contentLength;
      console.log(`PDF ${pdfDocument.fingerprints[0]} [${info.PDFFormatVersion} ` + `${(info.Producer || "-").trim()} / ${(info.Creator || "-").trim()}] ` + `(PDF.js: ${_pdfjsLib.version || "?"} [${_pdfjsLib.build || "?"}])`);
      let pdfTitle = info.Title;
      const metadataTitle = metadata === null || metadata === void 0 ? void 0 : metadata.get("dc:title");
      if (metadataTitle) {
        if (metadataTitle !== "Untitled" && !/[\uFFF0-\uFFFF]/g.test(metadataTitle)) {
          pdfTitle = metadataTitle;
        }
      }
      if (pdfTitle) {
        _this13.setTitle(`${pdfTitle} - ${_this13._contentDispositionFilename || _this13._title}`);
      } else if (_this13._contentDispositionFilename) {
        _this13.setTitle(_this13._contentDispositionFilename);
      }
      if (info.IsXFAPresent && !info.IsAcroFormPresent && !pdfDocument.isPureXfa) {
        if (pdfDocument.loadingParams.enableXfa) {
          console.warn("Warning: XFA Foreground documents are not supported");
        } else {
          console.warn("Warning: XFA support is not enabled");
        }
      } else if ((info.IsAcroFormPresent || info.IsXFAPresent) && !_this13.pdfViewer.renderForms) {
        console.warn("Warning: Interactive form support is not enabled");
      }
      if (info.IsSignaturesPresent) {
        console.warn("Warning: Digital signatures validation is not supported");
      }
      _this13.eventBus.dispatch("metadataloaded", {
        source: _this13
      });
    })();
  },
  _initializePageLabels(pdfDocument) {
    var _this14 = this;
    return _asyncToGenerator(function* () {
      const labels = yield pdfDocument.getPageLabels();
      if (pdfDocument !== _this14.pdfDocument) {
        return;
      }
      if (!labels || _app_options.AppOptions.get("disablePageLabels")) {
        return;
      }
      const numLabels = labels.length;
      let standardLabels = 0,
        emptyLabels = 0;
      for (let i = 0; i < numLabels; i++) {
        const label = labels[i];
        if (label === (i + 1).toString()) {
          standardLabels++;
        } else if (label === "") {
          emptyLabels++;
        } else {
          break;
        }
      }
      if (standardLabels >= numLabels || emptyLabels >= numLabels) {
        return;
      }
      const pdfViewer = _this14.pdfViewer,
        pdfThumbnailViewer = _this14.pdfThumbnailViewer,
        toolbar = _this14.toolbar;
      pdfViewer.setPageLabels(labels);
      pdfThumbnailViewer === null || pdfThumbnailViewer === void 0 ? void 0 : pdfThumbnailViewer.setPageLabels(labels);
      toolbar === null || toolbar === void 0 ? void 0 : toolbar.setPagesCount(numLabels, true);
      toolbar === null || toolbar === void 0 ? void 0 : toolbar.setPageNumber(pdfViewer.currentPageNumber, pdfViewer.currentPageLabel);
    })();
  },
  _initializePdfHistory(_ref6) {
    let fingerprint = _ref6.fingerprint,
      viewOnLoad = _ref6.viewOnLoad,
      _ref6$initialDest = _ref6.initialDest,
      initialDest = _ref6$initialDest === void 0 ? null : _ref6$initialDest;
    if (!this.pdfHistory) {
      return;
    }
    this.pdfHistory.initialize({
      fingerprint,
      resetHistory: viewOnLoad === ViewOnLoad.INITIAL,
      updateUrl: _app_options.AppOptions.get("historyUpdateUrl")
    });
    if (this.pdfHistory.initialBookmark) {
      this.initialBookmark = this.pdfHistory.initialBookmark;
      this.initialRotation = this.pdfHistory.initialRotation;
    }
    if (initialDest && !this.initialBookmark && viewOnLoad === ViewOnLoad.UNKNOWN) {
      this.initialBookmark = JSON.stringify(initialDest);
      this.pdfHistory.push({
        explicitDest: initialDest,
        pageNumber: null
      });
    }
  },
  _initializeAnnotationStorageCallbacks(pdfDocument) {
    if (pdfDocument !== this.pdfDocument) {
      return;
    }
    const annotationStorage = pdfDocument.annotationStorage;
    annotationStorage.onSetModified = () => {
      window.addEventListener("beforeunload", beforeUnload);
      this._annotationStorageModified = true;
    };
    annotationStorage.onResetModified = () => {
      window.removeEventListener("beforeunload", beforeUnload);
      delete this._annotationStorageModified;
    };
    annotationStorage.onAnnotationEditor = typeStr => {
      this._hasAnnotationEditors = !!typeStr;
      this.setTitle();
      if (typeStr) {
        this.externalServices.reportTelemetry({
          type: "editing",
          data: {
            type: typeStr
          }
        });
      }
    };
  },
  setInitialView(storedHash) {
    var _this$pdfSidebar, _this$toolbar2, _this$secondaryToolba2;
    let _ref7 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      rotation = _ref7.rotation,
      sidebarView = _ref7.sidebarView,
      scrollMode = _ref7.scrollMode,
      spreadMode = _ref7.spreadMode;
    const setRotation = angle => {
      if ((0, _ui_utils.isValidRotation)(angle)) {
        this.pdfViewer.pagesRotation = angle;
      }
    };
    const setViewerModes = (scroll, spread) => {
      if ((0, _ui_utils.isValidScrollMode)(scroll)) {
        this.pdfViewer.scrollMode = scroll;
      }
      if ((0, _ui_utils.isValidSpreadMode)(spread)) {
        this.pdfViewer.spreadMode = spread;
      }
    };
    this.isInitialViewSet = true;
    (_this$pdfSidebar = this.pdfSidebar) === null || _this$pdfSidebar === void 0 ? void 0 : _this$pdfSidebar.setInitialView(sidebarView);
    setViewerModes(scrollMode, spreadMode);
    if (this.initialBookmark) {
      setRotation(this.initialRotation);
      delete this.initialRotation;
      this.pdfLinkService.setHash(this.initialBookmark);
      this.initialBookmark = null;
    } else if (storedHash) {
      setRotation(rotation);
      this.pdfLinkService.setHash(storedHash);
    }
    (_this$toolbar2 = this.toolbar) === null || _this$toolbar2 === void 0 ? void 0 : _this$toolbar2.setPageNumber(this.pdfViewer.currentPageNumber, this.pdfViewer.currentPageLabel);
    (_this$secondaryToolba2 = this.secondaryToolbar) === null || _this$secondaryToolba2 === void 0 ? void 0 : _this$secondaryToolba2.setPageNumber(this.pdfViewer.currentPageNumber);
    if (!this.pdfViewer.currentScaleValue) {
      this.pdfViewer.currentScaleValue = _ui_utils.DEFAULT_SCALE_VALUE;
    }
  },
  _cleanup() {
    var _this$pdfThumbnailVie2;
    if (!this.pdfDocument) {
      return;
    }
    this.pdfViewer.cleanup();
    (_this$pdfThumbnailVie2 = this.pdfThumbnailViewer) === null || _this$pdfThumbnailVie2 === void 0 ? void 0 : _this$pdfThumbnailVie2.cleanup();
    this.pdfDocument.cleanup(this.pdfViewer.renderer === _ui_utils.RendererType.SVG);
  },
  forceRendering() {
    var _this$pdfSidebar2;
    this.pdfRenderingQueue.printing = !!this.printService;
    this.pdfRenderingQueue.isThumbnailViewEnabled = ((_this$pdfSidebar2 = this.pdfSidebar) === null || _this$pdfSidebar2 === void 0 ? void 0 : _this$pdfSidebar2.visibleView) === _ui_utils.SidebarView.THUMBS;
    this.pdfRenderingQueue.renderHighestPriority();
  },
  beforePrint() {
    this._printAnnotationStoragePromise = this.pdfScriptingManager.dispatchWillPrint().catch(() => {}).then(() => {
      var _this$pdfDocument3;
      return (_this$pdfDocument3 = this.pdfDocument) === null || _this$pdfDocument3 === void 0 ? void 0 : _this$pdfDocument3.annotationStorage.print;
    });
    if (this.printService) {
      return;
    }
    if (!this.supportsPrinting) {
      this.l10n.get("printing_not_supported").then(msg => {
        this._otherError(msg);
      });
      return;
    }
    if (!this.pdfViewer.pageViewsReady) {
      this.l10n.get("printing_not_ready").then(msg => {
        window.alert(msg);
      });
      return;
    }
    const pagesOverview = this.pdfViewer.getPagesOverview();
    const printContainer = this.appConfig.printContainer;
    const printResolution = _app_options.AppOptions.get("printResolution");
    const optionalContentConfigPromise = this.pdfViewer.optionalContentConfigPromise;
    const printService = PDFPrintServiceFactory.instance.createPrintService(this.pdfDocument, pagesOverview, printContainer, printResolution, optionalContentConfigPromise, this._printAnnotationStoragePromise, this.l10n);
    this.printService = printService;
    this.forceRendering();
    this.setTitle();
    printService.layout();
    if (this._hasAnnotationEditors) {
      this.externalServices.reportTelemetry({
        type: "editing",
        data: {
          type: "print"
        }
      });
    }
  },
  afterPrint() {
    if (this._printAnnotationStoragePromise) {
      this._printAnnotationStoragePromise.then(() => {
        this.pdfScriptingManager.dispatchDidPrint();
      });
      this._printAnnotationStoragePromise = null;
    }
    if (this.printService) {
      var _this$pdfDocument4;
      this.printService.destroy();
      this.printService = null;
      (_this$pdfDocument4 = this.pdfDocument) === null || _this$pdfDocument4 === void 0 ? void 0 : _this$pdfDocument4.annotationStorage.resetModified();
    }
    this.forceRendering();
    this.setTitle();
  },
  rotatePages(delta) {
    this.pdfViewer.pagesRotation += delta;
  },
  requestPresentationMode() {
    var _this$pdfPresentation;
    (_this$pdfPresentation = this.pdfPresentationMode) === null || _this$pdfPresentation === void 0 ? void 0 : _this$pdfPresentation.request();
  },
  triggerPrinting() {
    if (!this.supportsPrinting) {
      return;
    }
    window.print();
  },
  bindEvents() {
    const eventBus = this.eventBus,
      _boundEvents = this._boundEvents;
    _boundEvents.beforePrint = this.beforePrint.bind(this);
    _boundEvents.afterPrint = this.afterPrint.bind(this);
    eventBus._on("resize", webViewerResize);
    eventBus._on("hashchange", webViewerHashchange);
    eventBus._on("beforeprint", _boundEvents.beforePrint);
    eventBus._on("afterprint", _boundEvents.afterPrint);
    eventBus._on("pagerender", webViewerPageRender);
    eventBus._on("pagerendered", webViewerPageRendered);
    eventBus._on("updateviewarea", webViewerUpdateViewarea);
    eventBus._on("pagechanging", webViewerPageChanging);
    eventBus._on("scalechanging", webViewerScaleChanging);
    eventBus._on("rotationchanging", webViewerRotationChanging);
    eventBus._on("sidebarviewchanged", webViewerSidebarViewChanged);
    eventBus._on("pagemode", webViewerPageMode);
    eventBus._on("namedaction", webViewerNamedAction);
    eventBus._on("presentationmodechanged", webViewerPresentationModeChanged);
    eventBus._on("presentationmode", webViewerPresentationMode);
    eventBus._on("switchannotationeditormode", webViewerSwitchAnnotationEditorMode);
    eventBus._on("switchannotationeditorparams", webViewerSwitchAnnotationEditorParams);
    eventBus._on("print", webViewerPrint);
    eventBus._on("download", webViewerDownload);
    eventBus._on("firstpage", webViewerFirstPage);
    eventBus._on("lastpage", webViewerLastPage);
    eventBus._on("nextpage", webViewerNextPage);
    eventBus._on("previouspage", webViewerPreviousPage);
    eventBus._on("zoomin", webViewerZoomIn);
    eventBus._on("zoomout", webViewerZoomOut);
    eventBus._on("zoomreset", webViewerZoomReset);
    eventBus._on("pagenumberchanged", webViewerPageNumberChanged);
    eventBus._on("scalechanged", webViewerScaleChanged);
    eventBus._on("rotatecw", webViewerRotateCw);
    eventBus._on("rotateccw", webViewerRotateCcw);
    eventBus._on("optionalcontentconfig", webViewerOptionalContentConfig);
    eventBus._on("switchscrollmode", webViewerSwitchScrollMode);
    eventBus._on("scrollmodechanged", webViewerScrollModeChanged);
    eventBus._on("switchspreadmode", webViewerSwitchSpreadMode);
    eventBus._on("spreadmodechanged", webViewerSpreadModeChanged);
    eventBus._on("documentproperties", webViewerDocumentProperties);
    eventBus._on("findfromurlhash", webViewerFindFromUrlHash);
    eventBus._on("updatefindmatchescount", webViewerUpdateFindMatchesCount);
    eventBus._on("updatefindcontrolstate", webViewerUpdateFindControlState);
    if (_app_options.AppOptions.get("pdfBug")) {
      _boundEvents.reportPageStatsPDFBug = reportPageStatsPDFBug;
      eventBus._on("pagerendered", _boundEvents.reportPageStatsPDFBug);
      eventBus._on("pagechanging", _boundEvents.reportPageStatsPDFBug);
    }
    eventBus._on("fileinputchange", webViewerFileInputChange);
    eventBus._on("openfile", webViewerOpenFile);
  },
  bindWindowEvents() {
    const eventBus = this.eventBus,
      _boundEvents = this._boundEvents;
    function addWindowResolutionChange() {
      let evt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      if (evt) {
        webViewerResolutionChange(evt);
      }
      const mediaQueryList = window.matchMedia(`(resolution: ${window.devicePixelRatio || 1}dppx)`);
      mediaQueryList.addEventListener("change", addWindowResolutionChange, {
        once: true
      });
      _boundEvents.removeWindowResolutionChange || (_boundEvents.removeWindowResolutionChange = function () {
        mediaQueryList.removeEventListener("change", addWindowResolutionChange);
        _boundEvents.removeWindowResolutionChange = null;
      });
    }
    addWindowResolutionChange();
    _boundEvents.windowResize = () => {
      eventBus.dispatch("resize", {
        source: window
      });
    };
    _boundEvents.windowHashChange = () => {
      eventBus.dispatch("hashchange", {
        source: window,
        hash: document.location.hash.substring(1)
      });
    };
    _boundEvents.windowBeforePrint = () => {
      eventBus.dispatch("beforeprint", {
        source: window
      });
    };
    _boundEvents.windowAfterPrint = () => {
      eventBus.dispatch("afterprint", {
        source: window
      });
    };
    _boundEvents.windowUpdateFromSandbox = event => {
      eventBus.dispatch("updatefromsandbox", {
        source: window,
        detail: event.detail
      });
    };
    window.addEventListener("visibilitychange", webViewerVisibilityChange);
    window.addEventListener("wheel", webViewerWheel, {
      passive: false
    });
    window.addEventListener("touchstart", webViewerTouchStart, {
      passive: false
    });
    window.addEventListener("touchmove", webViewerTouchMove, {
      passive: false
    });
    window.addEventListener("touchend", webViewerTouchEnd, {
      passive: false
    });
    window.addEventListener("click", webViewerClick);
    window.addEventListener("keydown", webViewerKeyDown);
    window.addEventListener("keyup", webViewerKeyUp);
    window.addEventListener("resize", _boundEvents.windowResize);
    window.addEventListener("hashchange", _boundEvents.windowHashChange);
    window.addEventListener("beforeprint", _boundEvents.windowBeforePrint);
    window.addEventListener("afterprint", _boundEvents.windowAfterPrint);
    window.addEventListener("updatefromsandbox", _boundEvents.windowUpdateFromSandbox);
  },
  unbindEvents() {
    const eventBus = this.eventBus,
      _boundEvents = this._boundEvents;
    eventBus._off("resize", webViewerResize);
    eventBus._off("hashchange", webViewerHashchange);
    eventBus._off("beforeprint", _boundEvents.beforePrint);
    eventBus._off("afterprint", _boundEvents.afterPrint);
    eventBus._off("pagerender", webViewerPageRender);
    eventBus._off("pagerendered", webViewerPageRendered);
    eventBus._off("updateviewarea", webViewerUpdateViewarea);
    eventBus._off("pagechanging", webViewerPageChanging);
    eventBus._off("scalechanging", webViewerScaleChanging);
    eventBus._off("rotationchanging", webViewerRotationChanging);
    eventBus._off("sidebarviewchanged", webViewerSidebarViewChanged);
    eventBus._off("pagemode", webViewerPageMode);
    eventBus._off("namedaction", webViewerNamedAction);
    eventBus._off("presentationmodechanged", webViewerPresentationModeChanged);
    eventBus._off("presentationmode", webViewerPresentationMode);
    eventBus._off("print", webViewerPrint);
    eventBus._off("download", webViewerDownload);
    eventBus._off("firstpage", webViewerFirstPage);
    eventBus._off("lastpage", webViewerLastPage);
    eventBus._off("nextpage", webViewerNextPage);
    eventBus._off("previouspage", webViewerPreviousPage);
    eventBus._off("zoomin", webViewerZoomIn);
    eventBus._off("zoomout", webViewerZoomOut);
    eventBus._off("zoomreset", webViewerZoomReset);
    eventBus._off("pagenumberchanged", webViewerPageNumberChanged);
    eventBus._off("scalechanged", webViewerScaleChanged);
    eventBus._off("rotatecw", webViewerRotateCw);
    eventBus._off("rotateccw", webViewerRotateCcw);
    eventBus._off("optionalcontentconfig", webViewerOptionalContentConfig);
    eventBus._off("switchscrollmode", webViewerSwitchScrollMode);
    eventBus._off("scrollmodechanged", webViewerScrollModeChanged);
    eventBus._off("switchspreadmode", webViewerSwitchSpreadMode);
    eventBus._off("spreadmodechanged", webViewerSpreadModeChanged);
    eventBus._off("documentproperties", webViewerDocumentProperties);
    eventBus._off("findfromurlhash", webViewerFindFromUrlHash);
    eventBus._off("updatefindmatchescount", webViewerUpdateFindMatchesCount);
    eventBus._off("updatefindcontrolstate", webViewerUpdateFindControlState);
    if (_boundEvents.reportPageStatsPDFBug) {
      eventBus._off("pagerendered", _boundEvents.reportPageStatsPDFBug);
      eventBus._off("pagechanging", _boundEvents.reportPageStatsPDFBug);
      _boundEvents.reportPageStatsPDFBug = null;
    }
    eventBus._off("fileinputchange", webViewerFileInputChange);
    eventBus._off("openfile", webViewerOpenFile);
    _boundEvents.beforePrint = null;
    _boundEvents.afterPrint = null;
  },
  unbindWindowEvents() {
    var _boundEvents$removeWi;
    const _boundEvents = this._boundEvents;
    window.removeEventListener("visibilitychange", webViewerVisibilityChange);
    window.removeEventListener("wheel", webViewerWheel, {
      passive: false
    });
    window.removeEventListener("touchstart", webViewerTouchStart, {
      passive: false
    });
    window.removeEventListener("touchmove", webViewerTouchMove, {
      passive: false
    });
    window.removeEventListener("touchend", webViewerTouchEnd, {
      passive: false
    });
    window.removeEventListener("click", webViewerClick);
    window.removeEventListener("keydown", webViewerKeyDown);
    window.removeEventListener("keyup", webViewerKeyUp);
    window.removeEventListener("resize", _boundEvents.windowResize);
    window.removeEventListener("hashchange", _boundEvents.windowHashChange);
    window.removeEventListener("beforeprint", _boundEvents.windowBeforePrint);
    window.removeEventListener("afterprint", _boundEvents.windowAfterPrint);
    window.removeEventListener("updatefromsandbox", _boundEvents.windowUpdateFromSandbox);
    (_boundEvents$removeWi = _boundEvents.removeWindowResolutionChange) === null || _boundEvents$removeWi === void 0 ? void 0 : _boundEvents$removeWi.call(_boundEvents);
    _boundEvents.windowResize = null;
    _boundEvents.windowHashChange = null;
    _boundEvents.windowBeforePrint = null;
    _boundEvents.windowAfterPrint = null;
    _boundEvents.windowUpdateFromSandbox = null;
  },
  _accumulateTicks(ticks, prop) {
    if (this[prop] > 0 && ticks < 0 || this[prop] < 0 && ticks > 0) {
      this[prop] = 0;
    }
    this[prop] += ticks;
    const wholeTicks = Math.trunc(this[prop]);
    this[prop] -= wholeTicks;
    return wholeTicks;
  },
  _accumulateFactor(previousScale, factor, prop) {
    if (factor === 1) {
      return 1;
    }
    if (this[prop] > 1 && factor < 1 || this[prop] < 1 && factor > 1) {
      this[prop] = 1;
    }
    const newFactor = Math.floor(previousScale * factor * this[prop] * 100) / (100 * previousScale);
    this[prop] = factor / newFactor;
    return newFactor;
  },
  _centerAtPos(previousScale, x, y) {
    const pdfViewer = this.pdfViewer;
    const scaleDiff = pdfViewer.currentScale / previousScale - 1;
    if (scaleDiff !== 0) {
      const _pdfViewer$containerT = _slicedToArray(pdfViewer.containerTopLeft, 2),
        top = _pdfViewer$containerT[0],
        left = _pdfViewer$containerT[1];
      pdfViewer.container.scrollLeft += (x - left) * scaleDiff;
      pdfViewer.container.scrollTop += (y - top) * scaleDiff;
    }
  },
  _unblockDocumentLoadEvent() {
    var _document$blockUnbloc, _document;
    (_document$blockUnbloc = (_document = document).blockUnblockOnload) === null || _document$blockUnbloc === void 0 ? void 0 : _document$blockUnbloc.call(_document, false);
    this._unblockDocumentLoadEvent = () => {};
  },
  get scriptingReady() {
    return this.pdfScriptingManager.ready;
  }
};
exports.PDFViewerApplication = PDFViewerApplication;
{
  const HOSTED_VIEWER_ORIGINS = ["null", "http://mozilla.github.io", "https://mozilla.github.io"];
  var validateFileURL = function validateFileURL(file) {
    if (!file) {
      return;
    }
    try {
      const viewerOrigin = new URL(window.location.href).origin || "null";
      if (HOSTED_VIEWER_ORIGINS.includes(viewerOrigin)) {
        return;
      }
      const fileOrigin = new URL(file, window.location.href).origin;
      if (fileOrigin !== viewerOrigin) {
        throw new Error("file origin does not match viewer's");
      }
    } catch (ex) {
      PDFViewerApplication.l10n.get("loading_error").then(msg => {
        PDFViewerApplication._documentError(msg, {
          message: ex === null || ex === void 0 ? void 0 : ex.message
        });
      });
      throw ex;
    }
  };
}
function loadFakeWorker() {
  return _loadFakeWorker.apply(this, arguments);
}
function _loadFakeWorker() {
  _loadFakeWorker = _asyncToGenerator(function* () {
    _pdfjsLib.GlobalWorkerOptions.workerSrc || (_pdfjsLib.GlobalWorkerOptions.workerSrc = _app_options.AppOptions.get("workerSrc"));
    yield (0, _pdfjsLib.loadScript)(_pdfjsLib.PDFWorker.workerSrc);
  });
  return _loadFakeWorker.apply(this, arguments);
}
function loadPDFBug(_x2) {
  return _loadPDFBug.apply(this, arguments);
}
function _loadPDFBug() {
  _loadPDFBug = _asyncToGenerator(function* (self) {
    const debuggerScriptPath = self.appConfig.debuggerScriptPath;
    const _yield$__non_webpack_ = yield import(debuggerScriptPath),
      PDFBug = _yield$__non_webpack_.PDFBug;
    self._PDFBug = PDFBug;
  });
  return _loadPDFBug.apply(this, arguments);
}
function reportPageStatsPDFBug(_ref8) {
  var _globalThis$Stats, _pageView$pdfPage;
  let pageNumber = _ref8.pageNumber;
  if (!((_globalThis$Stats = globalThis.Stats) !== null && _globalThis$Stats !== void 0 && _globalThis$Stats.enabled)) {
    return;
  }
  const pageView = PDFViewerApplication.pdfViewer.getPageView(pageNumber - 1);
  globalThis.Stats.add(pageNumber, pageView === null || pageView === void 0 ? void 0 : (_pageView$pdfPage = pageView.pdfPage) === null || _pageView$pdfPage === void 0 ? void 0 : _pageView$pdfPage.stats);
}
function webViewerInitialized() {
  var _params$get;
  const appConfig = PDFViewerApplication.appConfig,
    eventBus = PDFViewerApplication.eventBus,
    l10n = PDFViewerApplication.l10n;
  let file;
  const queryString = document.location.search.substring(1);
  const params = (0, _ui_utils.parseQueryString)(queryString);
  file = (_params$get = params.get("file")) !== null && _params$get !== void 0 ? _params$get : _app_options.AppOptions.get("defaultUrl");
  validateFileURL(file);
  const fileInput = appConfig.openFileInput;
  fileInput.value = null;
  fileInput.addEventListener("change", function (evt) {
    const files = evt.target.files;
    if (!files || files.length === 0) {
      return;
    }
    eventBus.dispatch("fileinputchange", {
      source: this,
      fileInput: evt.target
    });
  });
  appConfig.mainContainer.addEventListener("dragover", function (evt) {
    evt.preventDefault();
    evt.dataTransfer.dropEffect = evt.dataTransfer.effectAllowed === "copy" ? "copy" : "move";
  });
  appConfig.mainContainer.addEventListener("drop", function (evt) {
    evt.preventDefault();
    const files = evt.dataTransfer.files;
    if (!files || files.length === 0) {
      return;
    }
    eventBus.dispatch("fileinputchange", {
      source: this,
      fileInput: evt.dataTransfer
    });
  });
  if (!PDFViewerApplication.supportsDocumentFonts) {
    _app_options.AppOptions.set("disableFontFace", true);
    l10n.get("web_fonts_disabled").then(msg => {
      console.warn(msg);
    });
  }
  if (!PDFViewerApplication.supportsPrinting) {
    var _appConfig$toolbar, _appConfig$secondaryT3;
    (_appConfig$toolbar = appConfig.toolbar) === null || _appConfig$toolbar === void 0 ? void 0 : _appConfig$toolbar.print.classList.add("hidden");
    (_appConfig$secondaryT3 = appConfig.secondaryToolbar) === null || _appConfig$secondaryT3 === void 0 ? void 0 : _appConfig$secondaryT3.printButton.classList.add("hidden");
  }
  if (!PDFViewerApplication.supportsFullscreen) {
    var _appConfig$secondaryT4;
    (_appConfig$secondaryT4 = appConfig.secondaryToolbar) === null || _appConfig$secondaryT4 === void 0 ? void 0 : _appConfig$secondaryT4.presentationModeButton.classList.add("hidden");
  }
  if (PDFViewerApplication.supportsIntegratedFind) {
    var _appConfig$toolbar2;
    (_appConfig$toolbar2 = appConfig.toolbar) === null || _appConfig$toolbar2 === void 0 ? void 0 : _appConfig$toolbar2.viewFind.classList.add("hidden");
  }
  appConfig.mainContainer.addEventListener("transitionend", function (evt) {
    if (evt.target === this) {
      eventBus.dispatch("resize", {
        source: this
      });
    }
  }, true);
  try {
    if (file) {
      PDFViewerApplication.open({
        url: file
      });
    } else {
      PDFViewerApplication._hideViewBookmark();
    }
  } catch (reason) {
    l10n.get("loading_error").then(msg => {
      PDFViewerApplication._documentError(msg, reason);
    });
  }
}
function webViewerPageRender(_ref9) {
  let pageNumber = _ref9.pageNumber;
  if (pageNumber === PDFViewerApplication.page) {
    var _PDFViewerApplication;
    (_PDFViewerApplication = PDFViewerApplication.toolbar) === null || _PDFViewerApplication === void 0 ? void 0 : _PDFViewerApplication.updateLoadingIndicatorState(true);
  }
}
function webViewerPageRendered(_ref10) {
  var _PDFViewerApplication3;
  let pageNumber = _ref10.pageNumber,
    error = _ref10.error;
  if (pageNumber === PDFViewerApplication.page) {
    var _PDFViewerApplication2;
    (_PDFViewerApplication2 = PDFViewerApplication.toolbar) === null || _PDFViewerApplication2 === void 0 ? void 0 : _PDFViewerApplication2.updateLoadingIndicatorState(false);
  }
  if (((_PDFViewerApplication3 = PDFViewerApplication.pdfSidebar) === null || _PDFViewerApplication3 === void 0 ? void 0 : _PDFViewerApplication3.visibleView) === _ui_utils.SidebarView.THUMBS) {
    var _PDFViewerApplication4;
    const pageView = PDFViewerApplication.pdfViewer.getPageView(pageNumber - 1);
    const thumbnailView = (_PDFViewerApplication4 = PDFViewerApplication.pdfThumbnailViewer) === null || _PDFViewerApplication4 === void 0 ? void 0 : _PDFViewerApplication4.getThumbnail(pageNumber - 1);
    if (pageView && thumbnailView) {
      thumbnailView.setImage(pageView);
    }
  }
  if (error) {
    PDFViewerApplication.l10n.get("rendering_error").then(msg => {
      PDFViewerApplication._otherError(msg, error);
    });
  }
}
function webViewerPageMode(_ref11) {
  var _PDFViewerApplication5;
  let mode = _ref11.mode;
  let view;
  switch (mode) {
    case "thumbs":
      view = _ui_utils.SidebarView.THUMBS;
      break;
    case "bookmarks":
    case "outline":
      view = _ui_utils.SidebarView.OUTLINE;
      break;
    case "attachments":
      view = _ui_utils.SidebarView.ATTACHMENTS;
      break;
    case "layers":
      view = _ui_utils.SidebarView.LAYERS;
      break;
    case "none":
      view = _ui_utils.SidebarView.NONE;
      break;
    default:
      console.error('Invalid "pagemode" hash parameter: ' + mode);
      return;
  }
  (_PDFViewerApplication5 = PDFViewerApplication.pdfSidebar) === null || _PDFViewerApplication5 === void 0 ? void 0 : _PDFViewerApplication5.switchView(view, true);
}
function webViewerNamedAction(evt) {
  var _PDFViewerApplication6;
  switch (evt.action) {
    case "GoToPage":
      (_PDFViewerApplication6 = PDFViewerApplication.appConfig.toolbar) === null || _PDFViewerApplication6 === void 0 ? void 0 : _PDFViewerApplication6.pageNumber.select();
      break;
    case "Find":
      if (!PDFViewerApplication.supportsIntegratedFind) {
        PDFViewerApplication === null || PDFViewerApplication === void 0 ? void 0 : PDFViewerApplication.findBar.toggle();
      }
      break;
    case "Print":
      PDFViewerApplication.triggerPrinting();
      break;
    case "SaveAs":
      PDFViewerApplication.downloadOrSave();
      break;
  }
}
function webViewerPresentationModeChanged(evt) {
  PDFViewerApplication.pdfViewer.presentationModeState = evt.state;
}
function webViewerSidebarViewChanged(_ref12) {
  let view = _ref12.view;
  PDFViewerApplication.pdfRenderingQueue.isThumbnailViewEnabled = view === _ui_utils.SidebarView.THUMBS;
  if (PDFViewerApplication.isInitialViewSet) {
    var _PDFViewerApplication7;
    (_PDFViewerApplication7 = PDFViewerApplication.store) === null || _PDFViewerApplication7 === void 0 ? void 0 : _PDFViewerApplication7.set("sidebarView", view).catch(() => {});
  }
}
function webViewerUpdateViewarea(_ref13) {
  let location = _ref13.location;
  if (PDFViewerApplication.isInitialViewSet) {
    var _PDFViewerApplication8;
    (_PDFViewerApplication8 = PDFViewerApplication.store) === null || _PDFViewerApplication8 === void 0 ? void 0 : _PDFViewerApplication8.setMultiple({
      page: location.pageNumber,
      zoom: location.scale,
      scrollLeft: location.left,
      scrollTop: location.top,
      rotation: location.rotation
    }).catch(() => {});
  }
  if (PDFViewerApplication.appConfig.secondaryToolbar) {
    const href = PDFViewerApplication.pdfLinkService.getAnchorUrl(location.pdfOpenParams);
    PDFViewerApplication.appConfig.secondaryToolbar.viewBookmarkButton.href = href;
  }
}
function webViewerScrollModeChanged(evt) {
  if (PDFViewerApplication.isInitialViewSet && !PDFViewerApplication.pdfViewer.isInPresentationMode) {
    var _PDFViewerApplication9;
    (_PDFViewerApplication9 = PDFViewerApplication.store) === null || _PDFViewerApplication9 === void 0 ? void 0 : _PDFViewerApplication9.set("scrollMode", evt.mode).catch(() => {});
  }
}
function webViewerSpreadModeChanged(evt) {
  if (PDFViewerApplication.isInitialViewSet && !PDFViewerApplication.pdfViewer.isInPresentationMode) {
    var _PDFViewerApplication10;
    (_PDFViewerApplication10 = PDFViewerApplication.store) === null || _PDFViewerApplication10 === void 0 ? void 0 : _PDFViewerApplication10.set("spreadMode", evt.mode).catch(() => {});
  }
}
function webViewerResize() {
  const pdfDocument = PDFViewerApplication.pdfDocument,
    pdfViewer = PDFViewerApplication.pdfViewer,
    pdfRenderingQueue = PDFViewerApplication.pdfRenderingQueue;
  if (pdfRenderingQueue.printing && window.matchMedia("print").matches) {
    return;
  }
  if (!pdfDocument) {
    return;
  }
  const currentScaleValue = pdfViewer.currentScaleValue;
  if (currentScaleValue === "auto" || currentScaleValue === "page-fit" || currentScaleValue === "page-width") {
    pdfViewer.currentScaleValue = currentScaleValue;
  }
  pdfViewer.update();
}
function webViewerHashchange(evt) {
  var _PDFViewerApplication11;
  const hash = evt.hash;
  if (!hash) {
    return;
  }
  if (!PDFViewerApplication.isInitialViewSet) {
    PDFViewerApplication.initialBookmark = hash;
  } else if (!((_PDFViewerApplication11 = PDFViewerApplication.pdfHistory) !== null && _PDFViewerApplication11 !== void 0 && _PDFViewerApplication11.popStateInProgress)) {
    PDFViewerApplication.pdfLinkService.setHash(hash);
  }
}
{
  var webViewerFileInputChange = function webViewerFileInputChange(evt) {
    var _PDFViewerApplication12;
    if ((_PDFViewerApplication12 = PDFViewerApplication.pdfViewer) !== null && _PDFViewerApplication12 !== void 0 && _PDFViewerApplication12.isInPresentationMode) {
      return;
    }
    const file = evt.fileInput.files[0];
    PDFViewerApplication.open({
      url: URL.createObjectURL(file),
      originalUrl: file.name
    });
  };
  var webViewerOpenFile = function webViewerOpenFile(evt) {
    const fileInput = PDFViewerApplication.appConfig.openFileInput;
    fileInput.click();
  };
}
function webViewerPresentationMode() {
  PDFViewerApplication.requestPresentationMode();
}
function webViewerSwitchAnnotationEditorMode(evt) {
  PDFViewerApplication.pdfViewer.annotationEditorMode = evt.mode;
}
function webViewerSwitchAnnotationEditorParams(evt) {
  PDFViewerApplication.pdfViewer.annotationEditorParams = evt;
}
function webViewerPrint() {
  PDFViewerApplication.triggerPrinting();
}
function webViewerDownload() {
  PDFViewerApplication.downloadOrSave();
}
function webViewerFirstPage() {
  PDFViewerApplication.page = 1;
}
function webViewerLastPage() {
  PDFViewerApplication.page = PDFViewerApplication.pagesCount;
}
function webViewerNextPage() {
  PDFViewerApplication.pdfViewer.nextPage();
}
function webViewerPreviousPage() {
  PDFViewerApplication.pdfViewer.previousPage();
}
function webViewerZoomIn() {
  PDFViewerApplication.zoomIn();
}
function webViewerZoomOut() {
  PDFViewerApplication.zoomOut();
}
function webViewerZoomReset() {
  PDFViewerApplication.zoomReset();
}
function webViewerPageNumberChanged(evt) {
  const pdfViewer = PDFViewerApplication.pdfViewer;
  if (evt.value !== "") {
    PDFViewerApplication.pdfLinkService.goToPage(evt.value);
  }
  if (evt.value !== pdfViewer.currentPageNumber.toString() && evt.value !== pdfViewer.currentPageLabel) {
    var _PDFViewerApplication13;
    (_PDFViewerApplication13 = PDFViewerApplication.toolbar) === null || _PDFViewerApplication13 === void 0 ? void 0 : _PDFViewerApplication13.setPageNumber(pdfViewer.currentPageNumber, pdfViewer.currentPageLabel);
  }
}
function webViewerScaleChanged(evt) {
  PDFViewerApplication.pdfViewer.currentScaleValue = evt.value;
}
function webViewerRotateCw() {
  PDFViewerApplication.rotatePages(90);
}
function webViewerRotateCcw() {
  PDFViewerApplication.rotatePages(-90);
}
function webViewerOptionalContentConfig(evt) {
  PDFViewerApplication.pdfViewer.optionalContentConfigPromise = evt.promise;
}
function webViewerSwitchScrollMode(evt) {
  PDFViewerApplication.pdfViewer.scrollMode = evt.mode;
}
function webViewerSwitchSpreadMode(evt) {
  PDFViewerApplication.pdfViewer.spreadMode = evt.mode;
}
function webViewerDocumentProperties() {
  var _PDFViewerApplication14;
  (_PDFViewerApplication14 = PDFViewerApplication.pdfDocumentProperties) === null || _PDFViewerApplication14 === void 0 ? void 0 : _PDFViewerApplication14.open();
}
function webViewerFindFromUrlHash(evt) {
  PDFViewerApplication.eventBus.dispatch("find", {
    source: evt.source,
    type: "",
    query: evt.query,
    phraseSearch: evt.phraseSearch,
    caseSensitive: false,
    entireWord: false,
    highlightAll: true,
    findPrevious: false,
    matchDiacritics: true
  });
}
function webViewerUpdateFindMatchesCount(_ref14) {
  let matchesCount = _ref14.matchesCount;
  if (PDFViewerApplication.supportsIntegratedFind) {
    PDFViewerApplication.externalServices.updateFindMatchesCount(matchesCount);
  } else {
    PDFViewerApplication.findBar.updateResultsCount(matchesCount);
  }
}
function webViewerUpdateFindControlState(_ref15) {
  let state = _ref15.state,
    previous = _ref15.previous,
    matchesCount = _ref15.matchesCount,
    rawQuery = _ref15.rawQuery;
  if (PDFViewerApplication.supportsIntegratedFind) {
    PDFViewerApplication.externalServices.updateFindControlState({
      result: state,
      findPrevious: previous,
      matchesCount,
      rawQuery
    });
  } else {
    var _PDFViewerApplication15;
    (_PDFViewerApplication15 = PDFViewerApplication.findBar) === null || _PDFViewerApplication15 === void 0 ? void 0 : _PDFViewerApplication15.updateUIState(state, previous, matchesCount);
  }
}
function webViewerScaleChanging(evt) {
  var _PDFViewerApplication16;
  (_PDFViewerApplication16 = PDFViewerApplication.toolbar) === null || _PDFViewerApplication16 === void 0 ? void 0 : _PDFViewerApplication16.setPageScale(evt.presetValue, evt.scale);
  PDFViewerApplication.pdfViewer.update();
}
function webViewerRotationChanging(evt) {
  if (PDFViewerApplication.pdfThumbnailViewer) {
    PDFViewerApplication.pdfThumbnailViewer.pagesRotation = evt.pagesRotation;
  }
  PDFViewerApplication.forceRendering();
  PDFViewerApplication.pdfViewer.currentPageNumber = evt.pageNumber;
}
function webViewerPageChanging(_ref16) {
  var _PDFViewerApplication17, _PDFViewerApplication18, _PDFViewerApplication19, _PDFViewerApplication21;
  let pageNumber = _ref16.pageNumber,
    pageLabel = _ref16.pageLabel;
  (_PDFViewerApplication17 = PDFViewerApplication.toolbar) === null || _PDFViewerApplication17 === void 0 ? void 0 : _PDFViewerApplication17.setPageNumber(pageNumber, pageLabel);
  (_PDFViewerApplication18 = PDFViewerApplication.secondaryToolbar) === null || _PDFViewerApplication18 === void 0 ? void 0 : _PDFViewerApplication18.setPageNumber(pageNumber);
  if (((_PDFViewerApplication19 = PDFViewerApplication.pdfSidebar) === null || _PDFViewerApplication19 === void 0 ? void 0 : _PDFViewerApplication19.visibleView) === _ui_utils.SidebarView.THUMBS) {
    var _PDFViewerApplication20;
    (_PDFViewerApplication20 = PDFViewerApplication.pdfThumbnailViewer) === null || _PDFViewerApplication20 === void 0 ? void 0 : _PDFViewerApplication20.scrollThumbnailIntoView(pageNumber);
  }
  const currentPage = PDFViewerApplication.pdfViewer.getPageView(pageNumber - 1);
  (_PDFViewerApplication21 = PDFViewerApplication.toolbar) === null || _PDFViewerApplication21 === void 0 ? void 0 : _PDFViewerApplication21.updateLoadingIndicatorState((currentPage === null || currentPage === void 0 ? void 0 : currentPage.renderingState) === _ui_utils.RenderingStates.RUNNING);
}
function webViewerResolutionChange(evt) {
  PDFViewerApplication.pdfViewer.refresh();
}
function webViewerVisibilityChange(evt) {
  if (document.visibilityState === "visible") {
    setZoomDisabledTimeout();
  }
}
let zoomDisabledTimeout = null;
function setZoomDisabledTimeout() {
  if (zoomDisabledTimeout) {
    clearTimeout(zoomDisabledTimeout);
  }
  zoomDisabledTimeout = setTimeout(function () {
    zoomDisabledTimeout = null;
  }, WHEEL_ZOOM_DISABLED_TIMEOUT);
}
function webViewerWheel(evt) {
  const pdfViewer = PDFViewerApplication.pdfViewer,
    supportedMouseWheelZoomModifierKeys = PDFViewerApplication.supportedMouseWheelZoomModifierKeys,
    supportsPinchToZoom = PDFViewerApplication.supportsPinchToZoom;
  if (pdfViewer.isInPresentationMode) {
    return;
  }
  const deltaMode = evt.deltaMode;
  let scaleFactor = Math.exp(-evt.deltaY / 100);
  const isBuiltInMac = false;
  const isPinchToZoom = evt.ctrlKey && !PDFViewerApplication._isCtrlKeyDown && deltaMode === WheelEvent.DOM_DELTA_PIXEL && evt.deltaX === 0 && (Math.abs(scaleFactor - 1) < 0.05 || isBuiltInMac) && evt.deltaZ === 0;
  if (isPinchToZoom || evt.ctrlKey && supportedMouseWheelZoomModifierKeys.ctrlKey || evt.metaKey && supportedMouseWheelZoomModifierKeys.metaKey) {
    evt.preventDefault();
    if (zoomDisabledTimeout || document.visibilityState === "hidden") {
      return;
    }
    const previousScale = pdfViewer.currentScale;
    if (isPinchToZoom && supportsPinchToZoom) {
      scaleFactor = PDFViewerApplication._accumulateFactor(previousScale, scaleFactor, "_wheelUnusedFactor");
      if (scaleFactor < 1) {
        PDFViewerApplication.zoomOut(null, scaleFactor);
      } else if (scaleFactor > 1) {
        PDFViewerApplication.zoomIn(null, scaleFactor);
      } else {
        return;
      }
    } else {
      const delta = (0, _ui_utils.normalizeWheelEventDirection)(evt);
      let ticks = 0;
      if (deltaMode === WheelEvent.DOM_DELTA_LINE || deltaMode === WheelEvent.DOM_DELTA_PAGE) {
        if (Math.abs(delta) >= 1) {
          ticks = Math.sign(delta);
        } else {
          ticks = PDFViewerApplication._accumulateTicks(delta, "_wheelUnusedTicks");
        }
      } else {
        const PIXELS_PER_LINE_SCALE = 30;
        ticks = PDFViewerApplication._accumulateTicks(delta / PIXELS_PER_LINE_SCALE, "_wheelUnusedTicks");
      }
      if (ticks < 0) {
        PDFViewerApplication.zoomOut(-ticks);
      } else if (ticks > 0) {
        PDFViewerApplication.zoomIn(ticks);
      } else {
        return;
      }
    }
    PDFViewerApplication._centerAtPos(previousScale, evt.clientX, evt.clientY);
  } else {
    setZoomDisabledTimeout();
  }
}
function webViewerTouchStart(evt) {
  if (PDFViewerApplication.pdfViewer.isInPresentationMode || evt.touches.length < 2) {
    return;
  }
  evt.preventDefault();
  if (evt.touches.length !== 2) {
    PDFViewerApplication._touchInfo = null;
    return;
  }
  let _evt$touches = _slicedToArray(evt.touches, 2),
    touch0 = _evt$touches[0],
    touch1 = _evt$touches[1];
  if (touch0.identifier > touch1.identifier) {
    var _ref17 = [touch1, touch0];
    touch0 = _ref17[0];
    touch1 = _ref17[1];
  }
  PDFViewerApplication._touchInfo = {
    touch0X: touch0.pageX,
    touch0Y: touch0.pageY,
    touch1X: touch1.pageX,
    touch1Y: touch1.pageY
  };
}
function webViewerTouchMove(evt) {
  if (!PDFViewerApplication._touchInfo || evt.touches.length !== 2) {
    return;
  }
  const pdfViewer = PDFViewerApplication.pdfViewer,
    _touchInfo = PDFViewerApplication._touchInfo,
    supportsPinchToZoom = PDFViewerApplication.supportsPinchToZoom;
  let _evt$touches2 = _slicedToArray(evt.touches, 2),
    touch0 = _evt$touches2[0],
    touch1 = _evt$touches2[1];
  if (touch0.identifier > touch1.identifier) {
    var _ref18 = [touch1, touch0];
    touch0 = _ref18[0];
    touch1 = _ref18[1];
  }
  const _touch = touch0,
    page0X = _touch.pageX,
    page0Y = _touch.pageY;
  const _touch2 = touch1,
    page1X = _touch2.pageX,
    page1Y = _touch2.pageY;
  const pTouch0X = _touchInfo.touch0X,
    pTouch0Y = _touchInfo.touch0Y,
    pTouch1X = _touchInfo.touch1X,
    pTouch1Y = _touchInfo.touch1Y;
  if (Math.abs(pTouch0X - page0X) <= 1 && Math.abs(pTouch0Y - page0Y) <= 1 && Math.abs(pTouch1X - page1X) <= 1 && Math.abs(pTouch1Y - page1Y) <= 1) {
    return;
  }
  _touchInfo.touch0X = page0X;
  _touchInfo.touch0Y = page0Y;
  _touchInfo.touch1X = page1X;
  _touchInfo.touch1Y = page1Y;
  if (pTouch0X === page0X && pTouch0Y === page0Y) {
    const v1X = pTouch1X - page0X;
    const v1Y = pTouch1Y - page0Y;
    const v2X = page1X - page0X;
    const v2Y = page1Y - page0Y;
    const det = v1X * v2Y - v1Y * v2X;
    if (Math.abs(det) > 0.02 * Math.hypot(v1X, v1Y) * Math.hypot(v2X, v2Y)) {
      return;
    }
  } else if (pTouch1X === page1X && pTouch1Y === page1Y) {
    const v1X = pTouch0X - page1X;
    const v1Y = pTouch0Y - page1Y;
    const v2X = page0X - page1X;
    const v2Y = page0Y - page1Y;
    const det = v1X * v2Y - v1Y * v2X;
    if (Math.abs(det) > 0.02 * Math.hypot(v1X, v1Y) * Math.hypot(v2X, v2Y)) {
      return;
    }
  } else {
    const diff0X = page0X - pTouch0X;
    const diff1X = page1X - pTouch1X;
    const diff0Y = page0Y - pTouch0Y;
    const diff1Y = page1Y - pTouch1Y;
    const dotProduct = diff0X * diff1X + diff0Y * diff1Y;
    if (dotProduct >= 0) {
      return;
    }
  }
  evt.preventDefault();
  const distance = Math.hypot(page0X - page1X, page0Y - page1Y) || 1;
  const pDistance = Math.hypot(pTouch0X - pTouch1X, pTouch0Y - pTouch1Y) || 1;
  const previousScale = pdfViewer.currentScale;
  if (supportsPinchToZoom) {
    const newScaleFactor = PDFViewerApplication._accumulateFactor(previousScale, distance / pDistance, "_touchUnusedFactor");
    if (newScaleFactor < 1) {
      PDFViewerApplication.zoomOut(null, newScaleFactor);
    } else if (newScaleFactor > 1) {
      PDFViewerApplication.zoomIn(null, newScaleFactor);
    } else {
      return;
    }
  } else {
    const PIXELS_PER_LINE_SCALE = 30;
    const ticks = PDFViewerApplication._accumulateTicks((distance - pDistance) / PIXELS_PER_LINE_SCALE, "_touchUnusedTicks");
    if (ticks < 0) {
      PDFViewerApplication.zoomOut(-ticks);
    } else if (ticks > 0) {
      PDFViewerApplication.zoomIn(ticks);
    } else {
      return;
    }
  }
  PDFViewerApplication._centerAtPos(previousScale, (page0X + page1X) / 2, (page0Y + page1Y) / 2);
}
function webViewerTouchEnd(evt) {
  if (!PDFViewerApplication._touchInfo) {
    return;
  }
  evt.preventDefault();
  PDFViewerApplication._touchInfo = null;
  PDFViewerApplication._touchUnusedTicks = 0;
  PDFViewerApplication._touchUnusedFactor = 1;
}
function webViewerClick(evt) {
  var _PDFViewerApplication22, _appConfig$toolbar3, _appConfig$secondaryT5;
  if (!((_PDFViewerApplication22 = PDFViewerApplication.secondaryToolbar) !== null && _PDFViewerApplication22 !== void 0 && _PDFViewerApplication22.isOpen)) {
    return;
  }
  const appConfig = PDFViewerApplication.appConfig;
  if (PDFViewerApplication.pdfViewer.containsElement(evt.target) || (_appConfig$toolbar3 = appConfig.toolbar) !== null && _appConfig$toolbar3 !== void 0 && _appConfig$toolbar3.container.contains(evt.target) && evt.target !== ((_appConfig$secondaryT5 = appConfig.secondaryToolbar) === null || _appConfig$secondaryT5 === void 0 ? void 0 : _appConfig$secondaryT5.toggleButton)) {
    PDFViewerApplication.secondaryToolbar.close();
  }
}
function webViewerKeyUp(evt) {
  if (evt.key === "Control") {
    PDFViewerApplication._isCtrlKeyDown = false;
  }
}
function webViewerKeyDown(evt) {
  var _PDFViewerApplication24, _PDFViewerApplication25, _PDFViewerApplication26, _PDFViewerApplication27, _PDFViewerApplication28;
  PDFViewerApplication._isCtrlKeyDown = evt.key === "Control";
  if (PDFViewerApplication.overlayManager.active) {
    return;
  }
  const eventBus = PDFViewerApplication.eventBus,
    pdfViewer = PDFViewerApplication.pdfViewer;
  const isViewerInPresentationMode = pdfViewer.isInPresentationMode;
  let handled = false,
    ensureViewerFocused = false;
  const cmd = (evt.ctrlKey ? 1 : 0) | (evt.altKey ? 2 : 0) | (evt.shiftKey ? 4 : 0) | (evt.metaKey ? 8 : 0);
  if (cmd === 1 || cmd === 8 || cmd === 5 || cmd === 12) {
    switch (evt.keyCode) {
      case 70:
        if (!PDFViewerApplication.supportsIntegratedFind && !evt.shiftKey) {
          var _PDFViewerApplication23;
          (_PDFViewerApplication23 = PDFViewerApplication.findBar) === null || _PDFViewerApplication23 === void 0 ? void 0 : _PDFViewerApplication23.open();
          handled = true;
        }
        break;
      case 71:
        if (!PDFViewerApplication.supportsIntegratedFind) {
          const state = PDFViewerApplication.findController.state;
          if (state) {
            const newState = {
              source: window,
              type: "again",
              findPrevious: cmd === 5 || cmd === 12
            };
            eventBus.dispatch("find", _objectSpread(_objectSpread({}, state), newState));
          }
          handled = true;
        }
        break;
      case 61:
      case 107:
      case 187:
      case 171:
        PDFViewerApplication.zoomIn();
        handled = true;
        break;
      case 173:
      case 109:
      case 189:
        PDFViewerApplication.zoomOut();
        handled = true;
        break;
      case 48:
      case 96:
        if (!isViewerInPresentationMode) {
          setTimeout(function () {
            PDFViewerApplication.zoomReset();
          });
          handled = false;
        }
        break;
      case 38:
        if (isViewerInPresentationMode || PDFViewerApplication.page > 1) {
          PDFViewerApplication.page = 1;
          handled = true;
          ensureViewerFocused = true;
        }
        break;
      case 40:
        if (isViewerInPresentationMode || PDFViewerApplication.page < PDFViewerApplication.pagesCount) {
          PDFViewerApplication.page = PDFViewerApplication.pagesCount;
          handled = true;
          ensureViewerFocused = true;
        }
        break;
    }
  }
  if (cmd === 1 || cmd === 8) {
    switch (evt.keyCode) {
      case 83:
        eventBus.dispatch("download", {
          source: window
        });
        handled = true;
        break;
      case 79:
        {
          eventBus.dispatch("openfile", {
            source: window
          });
          handled = true;
        }
        break;
    }
  }
  if (cmd === 3 || cmd === 10) {
    switch (evt.keyCode) {
      case 80:
        PDFViewerApplication.requestPresentationMode();
        handled = true;
        PDFViewerApplication.externalServices.reportTelemetry({
          type: "buttons",
          data: {
            id: "presentationModeKeyboard"
          }
        });
        break;
      case 71:
        if (PDFViewerApplication.appConfig.toolbar) {
          PDFViewerApplication.appConfig.toolbar.pageNumber.select();
          handled = true;
        }
        break;
    }
  }
  if (handled) {
    if (ensureViewerFocused && !isViewerInPresentationMode) {
      pdfViewer.focus();
    }
    evt.preventDefault();
    return;
  }
  const curElement = (0, _ui_utils.getActiveOrFocusedElement)();
  const curElementTagName = curElement === null || curElement === void 0 ? void 0 : curElement.tagName.toUpperCase();
  if (curElementTagName === "INPUT" || curElementTagName === "TEXTAREA" || curElementTagName === "SELECT" || curElement !== null && curElement !== void 0 && curElement.isContentEditable) {
    if (evt.keyCode !== 27) {
      return;
    }
  }
  if (cmd === 0) {
    let turnPage = 0,
      turnOnlyIfPageFit = false;
    switch (evt.keyCode) {
      case 38:
      case 33:
        if (pdfViewer.isVerticalScrollbarEnabled) {
          turnOnlyIfPageFit = true;
        }
        turnPage = -1;
        break;
      case 8:
        if (!isViewerInPresentationMode) {
          turnOnlyIfPageFit = true;
        }
        turnPage = -1;
        break;
      case 37:
        if (pdfViewer.isHorizontalScrollbarEnabled) {
          turnOnlyIfPageFit = true;
        }
      case 75:
      case 80:
        turnPage = -1;
        break;
      case 27:
        if ((_PDFViewerApplication24 = PDFViewerApplication.secondaryToolbar) !== null && _PDFViewerApplication24 !== void 0 && _PDFViewerApplication24.isOpen) {
          PDFViewerApplication.secondaryToolbar.close();
          handled = true;
        }
        if (!PDFViewerApplication.supportsIntegratedFind && (_PDFViewerApplication25 = PDFViewerApplication.findBar) !== null && _PDFViewerApplication25 !== void 0 && _PDFViewerApplication25.opened) {
          PDFViewerApplication.findBar.close();
          handled = true;
        }
        break;
      case 40:
      case 34:
        if (pdfViewer.isVerticalScrollbarEnabled) {
          turnOnlyIfPageFit = true;
        }
        turnPage = 1;
        break;
      case 13:
      case 32:
        if (!isViewerInPresentationMode) {
          turnOnlyIfPageFit = true;
        }
        turnPage = 1;
        break;
      case 39:
        if (pdfViewer.isHorizontalScrollbarEnabled) {
          turnOnlyIfPageFit = true;
        }
      case 74:
      case 78:
        turnPage = 1;
        break;
      case 36:
        if (isViewerInPresentationMode || PDFViewerApplication.page > 1) {
          PDFViewerApplication.page = 1;
          handled = true;
          ensureViewerFocused = true;
        }
        break;
      case 35:
        if (isViewerInPresentationMode || PDFViewerApplication.page < PDFViewerApplication.pagesCount) {
          PDFViewerApplication.page = PDFViewerApplication.pagesCount;
          handled = true;
          ensureViewerFocused = true;
        }
        break;
      case 83:
        (_PDFViewerApplication26 = PDFViewerApplication.pdfCursorTools) === null || _PDFViewerApplication26 === void 0 ? void 0 : _PDFViewerApplication26.switchTool(_ui_utils.CursorTool.SELECT);
        break;
      case 72:
        (_PDFViewerApplication27 = PDFViewerApplication.pdfCursorTools) === null || _PDFViewerApplication27 === void 0 ? void 0 : _PDFViewerApplication27.switchTool(_ui_utils.CursorTool.HAND);
        break;
      case 82:
        PDFViewerApplication.rotatePages(90);
        break;
      case 115:
        (_PDFViewerApplication28 = PDFViewerApplication.pdfSidebar) === null || _PDFViewerApplication28 === void 0 ? void 0 : _PDFViewerApplication28.toggle();
        break;
    }
    if (turnPage !== 0 && (!turnOnlyIfPageFit || pdfViewer.currentScaleValue === "page-fit")) {
      if (turnPage > 0) {
        pdfViewer.nextPage();
      } else {
        pdfViewer.previousPage();
      }
      handled = true;
    }
  }
  if (cmd === 4) {
    switch (evt.keyCode) {
      case 13:
      case 32:
        if (!isViewerInPresentationMode && pdfViewer.currentScaleValue !== "page-fit") {
          break;
        }
        pdfViewer.previousPage();
        handled = true;
        break;
      case 82:
        PDFViewerApplication.rotatePages(-90);
        break;
    }
  }
  if (!handled && !isViewerInPresentationMode) {
    if (evt.keyCode >= 33 && evt.keyCode <= 40 || evt.keyCode === 32 && curElementTagName !== "BUTTON") {
      ensureViewerFocused = true;
    }
  }
  if (ensureViewerFocused && !pdfViewer.containsElement(curElement)) {
    pdfViewer.focus();
  }
  if (handled) {
    evt.preventDefault();
  }
}
function beforeUnload(evt) {
  evt.preventDefault();
  evt.returnValue = "";
  return false;
}
function webViewerAnnotationEditorStatesChanged(data) {
  PDFViewerApplication.externalServices.updateEditorStates(data);
}
const PDFPrintServiceFactory = {
  instance: {
    supportsPrinting: false,
    createPrintService() {
      throw new Error("Not implemented: createPrintService");
    }
  }
};
exports.PDFPrintServiceFactory = PDFPrintServiceFactory;

/***/ }),
/* 3 */
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.animationStarted = exports.VERTICAL_PADDING = exports.UNKNOWN_SCALE = exports.TextLayerMode = exports.SpreadMode = exports.SidebarView = exports.ScrollMode = exports.SCROLLBAR_PADDING = exports.RenderingStates = exports.RendererType = exports.ProgressBar = exports.PresentationModeState = exports.OutputScale = exports.MIN_SCALE = exports.MAX_SCALE = exports.MAX_AUTO_SCALE = exports.DEFAULT_SCALE_VALUE = exports.DEFAULT_SCALE_DELTA = exports.DEFAULT_SCALE = exports.CursorTool = exports.AutoPrintRegExp = void 0;
exports.apiPageLayoutToViewerModes = apiPageLayoutToViewerModes;
exports.apiPageModeToSidebarView = apiPageModeToSidebarView;
exports.approximateFraction = approximateFraction;
exports.backtrackBeforeAllVisibleElements = backtrackBeforeAllVisibleElements;
exports.binarySearchFirstItem = binarySearchFirstItem;
exports.docStyle = void 0;
exports.getActiveOrFocusedElement = getActiveOrFocusedElement;
exports.getPageSizeInches = getPageSizeInches;
exports.getVisibleElements = getVisibleElements;
exports.isPortraitOrientation = isPortraitOrientation;
exports.isValidRotation = isValidRotation;
exports.isValidScrollMode = isValidScrollMode;
exports.isValidSpreadMode = isValidSpreadMode;
exports.noContextMenuHandler = noContextMenuHandler;
exports.normalizeWheelEventDelta = normalizeWheelEventDelta;
exports.normalizeWheelEventDirection = normalizeWheelEventDirection;
exports.parseQueryString = parseQueryString;
exports.removeNullCharacters = removeNullCharacters;
exports.roundToDivide = roundToDivide;
exports.scrollIntoView = scrollIntoView;
exports.watchScroll = watchScroll;
function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }
function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }
function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }
function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }
function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }
function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
const DEFAULT_SCALE_VALUE = "auto";
exports.DEFAULT_SCALE_VALUE = DEFAULT_SCALE_VALUE;
const DEFAULT_SCALE = 1.0;
exports.DEFAULT_SCALE = DEFAULT_SCALE;
const DEFAULT_SCALE_DELTA = 1.1;
exports.DEFAULT_SCALE_DELTA = DEFAULT_SCALE_DELTA;
const MIN_SCALE = 0.1;
exports.MIN_SCALE = MIN_SCALE;
const MAX_SCALE = 10.0;
exports.MAX_SCALE = MAX_SCALE;
const UNKNOWN_SCALE = 0;
exports.UNKNOWN_SCALE = UNKNOWN_SCALE;
const MAX_AUTO_SCALE = 1.25;
exports.MAX_AUTO_SCALE = MAX_AUTO_SCALE;
const SCROLLBAR_PADDING = 40;
exports.SCROLLBAR_PADDING = SCROLLBAR_PADDING;
const VERTICAL_PADDING = 5;
exports.VERTICAL_PADDING = VERTICAL_PADDING;
const RenderingStates = {
  INITIAL: 0,
  RUNNING: 1,
  PAUSED: 2,
  FINISHED: 3
};
exports.RenderingStates = RenderingStates;
const PresentationModeState = {
  UNKNOWN: 0,
  NORMAL: 1,
  CHANGING: 2,
  FULLSCREEN: 3
};
exports.PresentationModeState = PresentationModeState;
const SidebarView = {
  UNKNOWN: -1,
  NONE: 0,
  THUMBS: 1,
  OUTLINE: 2,
  ATTACHMENTS: 3,
  LAYERS: 4
};
exports.SidebarView = SidebarView;
const RendererType = {
  CANVAS: "canvas",
  SVG: "svg"
};
exports.RendererType = RendererType;
const TextLayerMode = {
  DISABLE: 0,
  ENABLE: 1
};
exports.TextLayerMode = TextLayerMode;
const ScrollMode = {
  UNKNOWN: -1,
  VERTICAL: 0,
  HORIZONTAL: 1,
  WRAPPED: 2,
  PAGE: 3
};
exports.ScrollMode = ScrollMode;
const SpreadMode = {
  UNKNOWN: -1,
  NONE: 0,
  ODD: 1,
  EVEN: 2
};
exports.SpreadMode = SpreadMode;
const CursorTool = {
  SELECT: 0,
  HAND: 1,
  ZOOM: 2
};
exports.CursorTool = CursorTool;
const AutoPrintRegExp = /\bprint\s*\(/;
exports.AutoPrintRegExp = AutoPrintRegExp;
class OutputScale {
  constructor() {
    const pixelRatio = window.devicePixelRatio || 1;
    this.sx = pixelRatio;
    this.sy = pixelRatio;
  }
  get scaled() {
    return this.sx !== 1 || this.sy !== 1;
  }
}
exports.OutputScale = OutputScale;
function scrollIntoView(element, spot) {
  let scrollMatches = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  let parent = element.offsetParent;
  if (!parent) {
    console.error("offsetParent is not set -- cannot scroll");
    return;
  }
  let offsetY = element.offsetTop + element.clientTop;
  let offsetX = element.offsetLeft + element.clientLeft;
  while (parent.clientHeight === parent.scrollHeight && parent.clientWidth === parent.scrollWidth || scrollMatches && (parent.classList.contains("markedContent") || getComputedStyle(parent).overflow === "hidden")) {
    offsetY += parent.offsetTop;
    offsetX += parent.offsetLeft;
    parent = parent.offsetParent;
    if (!parent) {
      return;
    }
  }
  if (spot) {
    if (spot.top !== undefined) {
      offsetY += spot.top;
    }
    if (spot.left !== undefined) {
      offsetX += spot.left;
      parent.scrollLeft = offsetX;
    }
  }
  parent.scrollTop = offsetY;
}
function watchScroll(viewAreaElement, callback) {
  const debounceScroll = function debounceScroll(evt) {
    if (rAF) {
      return;
    }
    rAF = window.requestAnimationFrame(function viewAreaElementScrolled() {
      rAF = null;
      const currentX = viewAreaElement.scrollLeft;
      const lastX = state.lastX;
      if (currentX !== lastX) {
        state.right = currentX > lastX;
      }
      state.lastX = currentX;
      const currentY = viewAreaElement.scrollTop;
      const lastY = state.lastY;
      if (currentY !== lastY) {
        state.down = currentY > lastY;
      }
      state.lastY = currentY;
      callback(state);
    });
  };
  const state = {
    right: true,
    down: true,
    lastX: viewAreaElement.scrollLeft,
    lastY: viewAreaElement.scrollTop,
    _eventHandler: debounceScroll
  };
  let rAF = null;
  viewAreaElement.addEventListener("scroll", debounceScroll, true);
  return state;
}
function parseQueryString(query) {
  const params = new Map();
  var _iterator = _createForOfIteratorHelper(new URLSearchParams(query)),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      const _step$value = _slicedToArray(_step.value, 2),
        key = _step$value[0],
        value = _step$value[1];
      params.set(key.toLowerCase(), value);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return params;
}
const NullCharactersRegExp = /\x00/g;
const InvisibleCharactersRegExp = /[\x01-\x1F]/g;
function removeNullCharacters(str) {
  let replaceInvisible = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  if (typeof str !== "string") {
    console.error(`The argument must be a string.`);
    return str;
  }
  if (replaceInvisible) {
    str = str.replace(InvisibleCharactersRegExp, " ");
  }
  return str.replace(NullCharactersRegExp, "");
}
function binarySearchFirstItem(items, condition) {
  let start = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  let minIndex = start;
  let maxIndex = items.length - 1;
  if (maxIndex < 0 || !condition(items[maxIndex])) {
    return items.length;
  }
  if (condition(items[minIndex])) {
    return minIndex;
  }
  while (minIndex < maxIndex) {
    const currentIndex = minIndex + maxIndex >> 1;
    const currentItem = items[currentIndex];
    if (condition(currentItem)) {
      maxIndex = currentIndex;
    } else {
      minIndex = currentIndex + 1;
    }
  }
  return minIndex;
}
function approximateFraction(x) {
  if (Math.floor(x) === x) {
    return [x, 1];
  }
  const xinv = 1 / x;
  const limit = 8;
  if (xinv > limit) {
    return [1, limit];
  } else if (Math.floor(xinv) === xinv) {
    return [1, xinv];
  }
  const x_ = x > 1 ? xinv : x;
  let a = 0,
    b = 1,
    c = 1,
    d = 1;
  while (true) {
    const p = a + c,
      q = b + d;
    if (q > limit) {
      break;
    }
    if (x_ <= p / q) {
      c = p;
      d = q;
    } else {
      a = p;
      b = q;
    }
  }
  let result;
  if (x_ - a / b < c / d - x_) {
    result = x_ === x ? [a, b] : [b, a];
  } else {
    result = x_ === x ? [c, d] : [d, c];
  }
  return result;
}
function roundToDivide(x, div) {
  const r = x % div;
  return r === 0 ? x : Math.round(x - r + div);
}
function getPageSizeInches(_ref) {
  let view = _ref.view,
    userUnit = _ref.userUnit,
    rotate = _ref.rotate;
  const _view = _slicedToArray(view, 4),
    x1 = _view[0],
    y1 = _view[1],
    x2 = _view[2],
    y2 = _view[3];
  const changeOrientation = rotate % 180 !== 0;
  const width = (x2 - x1) / 72 * userUnit;
  const height = (y2 - y1) / 72 * userUnit;
  return {
    width: changeOrientation ? height : width,
    height: changeOrientation ? width : height
  };
}
function backtrackBeforeAllVisibleElements(index, views, top) {
  if (index < 2) {
    return index;
  }
  let elt = views[index].div;
  let pageTop = elt.offsetTop + elt.clientTop;
  if (pageTop >= top) {
    elt = views[index - 1].div;
    pageTop = elt.offsetTop + elt.clientTop;
  }
  for (let i = index - 2; i >= 0; --i) {
    elt = views[i].div;
    if (elt.offsetTop + elt.clientTop + elt.clientHeight <= pageTop) {
      break;
    }
    index = i;
  }
  return index;
}
function getVisibleElements(_ref2) {
  let scrollEl = _ref2.scrollEl,
    views = _ref2.views,
    _ref2$sortByVisibilit = _ref2.sortByVisibility,
    sortByVisibility = _ref2$sortByVisibilit === void 0 ? false : _ref2$sortByVisibilit,
    _ref2$horizontal = _ref2.horizontal,
    horizontal = _ref2$horizontal === void 0 ? false : _ref2$horizontal,
    _ref2$rtl = _ref2.rtl,
    rtl = _ref2$rtl === void 0 ? false : _ref2$rtl;
  const top = scrollEl.scrollTop,
    bottom = top + scrollEl.clientHeight;
  const left = scrollEl.scrollLeft,
    right = left + scrollEl.clientWidth;
  function isElementBottomAfterViewTop(view) {
    const element = view.div;
    const elementBottom = element.offsetTop + element.clientTop + element.clientHeight;
    return elementBottom > top;
  }
  function isElementNextAfterViewHorizontally(view) {
    const element = view.div;
    const elementLeft = element.offsetLeft + element.clientLeft;
    const elementRight = elementLeft + element.clientWidth;
    return rtl ? elementLeft < right : elementRight > left;
  }
  const visible = [],
    ids = new Set(),
    numViews = views.length;
  let firstVisibleElementInd = binarySearchFirstItem(views, horizontal ? isElementNextAfterViewHorizontally : isElementBottomAfterViewTop);
  if (firstVisibleElementInd > 0 && firstVisibleElementInd < numViews && !horizontal) {
    firstVisibleElementInd = backtrackBeforeAllVisibleElements(firstVisibleElementInd, views, top);
  }
  let lastEdge = horizontal ? right : -1;
  for (let i = firstVisibleElementInd; i < numViews; i++) {
    const view = views[i],
      element = view.div;
    const currentWidth = element.offsetLeft + element.clientLeft;
    const currentHeight = element.offsetTop + element.clientTop;
    const viewWidth = element.clientWidth,
      viewHeight = element.clientHeight;
    const viewRight = currentWidth + viewWidth;
    const viewBottom = currentHeight + viewHeight;
    if (lastEdge === -1) {
      if (viewBottom >= bottom) {
        lastEdge = viewBottom;
      }
    } else if ((horizontal ? currentWidth : currentHeight) > lastEdge) {
      break;
    }
    if (viewBottom <= top || currentHeight >= bottom || viewRight <= left || currentWidth >= right) {
      continue;
    }
    const hiddenHeight = Math.max(0, top - currentHeight) + Math.max(0, viewBottom - bottom);
    const hiddenWidth = Math.max(0, left - currentWidth) + Math.max(0, viewRight - right);
    const fractionHeight = (viewHeight - hiddenHeight) / viewHeight,
      fractionWidth = (viewWidth - hiddenWidth) / viewWidth;
    const percent = fractionHeight * fractionWidth * 100 | 0;
    visible.push({
      id: view.id,
      x: currentWidth,
      y: currentHeight,
      view,
      percent,
      widthPercent: fractionWidth * 100 | 0
    });
    ids.add(view.id);
  }
  const first = visible[0],
    last = visible.at(-1);
  if (sortByVisibility) {
    visible.sort(function (a, b) {
      const pc = a.percent - b.percent;
      if (Math.abs(pc) > 0.001) {
        return -pc;
      }
      return a.id - b.id;
    });
  }
  return {
    first,
    last,
    views: visible,
    ids
  };
}
function noContextMenuHandler(evt) {
  evt.preventDefault();
}
function normalizeWheelEventDirection(evt) {
  let delta = Math.hypot(evt.deltaX, evt.deltaY);
  const angle = Math.atan2(evt.deltaY, evt.deltaX);
  if (-0.25 * Math.PI < angle && angle < 0.75 * Math.PI) {
    delta = -delta;
  }
  return delta;
}
function normalizeWheelEventDelta(evt) {
  const deltaMode = evt.deltaMode;
  let delta = normalizeWheelEventDirection(evt);
  const MOUSE_PIXELS_PER_LINE = 30;
  const MOUSE_LINES_PER_PAGE = 30;
  if (deltaMode === WheelEvent.DOM_DELTA_PIXEL) {
    delta /= MOUSE_PIXELS_PER_LINE * MOUSE_LINES_PER_PAGE;
  } else if (deltaMode === WheelEvent.DOM_DELTA_LINE) {
    delta /= MOUSE_LINES_PER_PAGE;
  }
  return delta;
}
function isValidRotation(angle) {
  return Number.isInteger(angle) && angle % 90 === 0;
}
function isValidScrollMode(mode) {
  return Number.isInteger(mode) && Object.values(ScrollMode).includes(mode) && mode !== ScrollMode.UNKNOWN;
}
function isValidSpreadMode(mode) {
  return Number.isInteger(mode) && Object.values(SpreadMode).includes(mode) && mode !== SpreadMode.UNKNOWN;
}
function isPortraitOrientation(size) {
  return size.width <= size.height;
}
const animationStarted = new Promise(function (resolve) {
  window.requestAnimationFrame(resolve);
});
exports.animationStarted = animationStarted;
const docStyle = document.documentElement.style;
exports.docStyle = docStyle;
function clamp(v, min, max) {
  return Math.min(Math.max(v, min), max);
}
var _classList = /*#__PURE__*/new WeakMap();
var _disableAutoFetchTimeout = /*#__PURE__*/new WeakMap();
var _percent = /*#__PURE__*/new WeakMap();
var _style = /*#__PURE__*/new WeakMap();
var _visible = /*#__PURE__*/new WeakMap();
class ProgressBar {
  constructor(bar) {
    _classPrivateFieldInitSpec(this, _classList, {
      writable: true,
      value: null
    });
    _classPrivateFieldInitSpec(this, _disableAutoFetchTimeout, {
      writable: true,
      value: null
    });
    _classPrivateFieldInitSpec(this, _percent, {
      writable: true,
      value: 0
    });
    _classPrivateFieldInitSpec(this, _style, {
      writable: true,
      value: null
    });
    _classPrivateFieldInitSpec(this, _visible, {
      writable: true,
      value: true
    });
    _classPrivateFieldSet(this, _classList, bar.classList);
    _classPrivateFieldSet(this, _style, bar.style);
  }
  get percent() {
    return _classPrivateFieldGet(this, _percent);
  }
  set percent(val) {
    _classPrivateFieldSet(this, _percent, clamp(val, 0, 100));
    if (isNaN(val)) {
      _classPrivateFieldGet(this, _classList).add("indeterminate");
      return;
    }
    _classPrivateFieldGet(this, _classList).remove("indeterminate");
    _classPrivateFieldGet(this, _style).setProperty("--progressBar-percent", `${_classPrivateFieldGet(this, _percent)}%`);
  }
  setWidth(viewer) {
    if (!viewer) {
      return;
    }
    const container = viewer.parentNode;
    const scrollbarWidth = container.offsetWidth - viewer.offsetWidth;
    if (scrollbarWidth > 0) {
      _classPrivateFieldGet(this, _style).setProperty("--progressBar-end-offset", `${scrollbarWidth}px`);
    }
  }
  setDisableAutoFetch() {
    let delay = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 5000;
    if (isNaN(_classPrivateFieldGet(this, _percent))) {
      return;
    }
    if (_classPrivateFieldGet(this, _disableAutoFetchTimeout)) {
      clearTimeout(_classPrivateFieldGet(this, _disableAutoFetchTimeout));
    }
    this.show();
    _classPrivateFieldSet(this, _disableAutoFetchTimeout, setTimeout(() => {
      _classPrivateFieldSet(this, _disableAutoFetchTimeout, null);
      this.hide();
    }, delay));
  }
  hide() {
    if (!_classPrivateFieldGet(this, _visible)) {
      return;
    }
    _classPrivateFieldSet(this, _visible, false);
    _classPrivateFieldGet(this, _classList).add("hidden");
  }
  show() {
    if (_classPrivateFieldGet(this, _visible)) {
      return;
    }
    _classPrivateFieldSet(this, _visible, true);
    _classPrivateFieldGet(this, _classList).remove("hidden");
  }
}
exports.ProgressBar = ProgressBar;
function getActiveOrFocusedElement() {
  let curRoot = document;
  let curActiveOrFocused = curRoot.activeElement || curRoot.querySelector(":focus");
  while ((_curActiveOrFocused = curActiveOrFocused) !== null && _curActiveOrFocused !== void 0 && _curActiveOrFocused.shadowRoot) {
    var _curActiveOrFocused;
    curRoot = curActiveOrFocused.shadowRoot;
    curActiveOrFocused = curRoot.activeElement || curRoot.querySelector(":focus");
  }
  return curActiveOrFocused;
}
function apiPageLayoutToViewerModes(layout) {
  let scrollMode = ScrollMode.VERTICAL,
    spreadMode = SpreadMode.NONE;
  switch (layout) {
    case "SinglePage":
      scrollMode = ScrollMode.PAGE;
      break;
    case "OneColumn":
      break;
    case "TwoPageLeft":
      scrollMode = ScrollMode.PAGE;
    case "TwoColumnLeft":
      spreadMode = SpreadMode.ODD;
      break;
    case "TwoPageRight":
      scrollMode = ScrollMode.PAGE;
    case "TwoColumnRight":
      spreadMode = SpreadMode.EVEN;
      break;
  }
  return {
    scrollMode,
    spreadMode
  };
}
function apiPageModeToSidebarView(mode) {
  switch (mode) {
    case "UseNone":
      return SidebarView.NONE;
    case "UseThumbs":
      return SidebarView.THUMBS;
    case "UseOutlines":
      return SidebarView.OUTLINE;
    case "UseAttachments":
      return SidebarView.ATTACHMENTS;
    case "UseOC":
      return SidebarView.LAYERS;
  }
  return SidebarView.NONE;
}

/***/ }),
/* 4 */
/***/ ((module) => {



let pdfjsLib;
if (typeof window !== "undefined" && window["pdfjs-dist/build/pdf"]) {
  pdfjsLib = window["pdfjs-dist/build/pdf"];
} else {
  pdfjsLib = require("../build/pdf.js");
}
module.exports = pdfjsLib;

/***/ }),
/* 5 */
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.compatibilityParams = exports.OptionKind = exports.AppOptions = void 0;
const compatibilityParams = Object.create(null);
exports.compatibilityParams = compatibilityParams;
{
  const userAgent = navigator.userAgent || "";
  const platform = navigator.platform || "";
  const maxTouchPoints = navigator.maxTouchPoints || 1;
  const isAndroid = /Android/.test(userAgent);
  const isIOS = /\b(iPad|iPhone|iPod)(?=;)/.test(userAgent) || platform === "MacIntel" && maxTouchPoints > 1;
  (function checkCanvasSizeLimitation() {
    if (isIOS || isAndroid) {
      compatibilityParams.maxCanvasPixels = 5242880;
    }
  })();
}
const OptionKind = {
  VIEWER: 0x02,
  API: 0x04,
  WORKER: 0x08,
  PREFERENCE: 0x80
};
exports.OptionKind = OptionKind;
const defaultOptions = {
  annotationEditorMode: {
    value: 0,
    kind: OptionKind.VIEWER + OptionKind.PREFERENCE
  },
  annotationMode: {
    value: 2,
    kind: OptionKind.VIEWER + OptionKind.PREFERENCE
  },
  cursorToolOnLoad: {
    value: 0,
    kind: OptionKind.VIEWER + OptionKind.PREFERENCE
  },
  defaultZoomDelay: {
    value: 400,
    kind: OptionKind.VIEWER + OptionKind.PREFERENCE
  },
  defaultZoomValue: {
    value: "",
    kind: OptionKind.VIEWER + OptionKind.PREFERENCE
  },
  disableHistory: {
    value: false,
    kind: OptionKind.VIEWER
  },
  disablePageLabels: {
    value: false,
    kind: OptionKind.VIEWER + OptionKind.PREFERENCE
  },
  enablePermissions: {
    value: false,
    kind: OptionKind.VIEWER + OptionKind.PREFERENCE
  },
  enablePrintAutoRotate: {
    value: true,
    kind: OptionKind.VIEWER + OptionKind.PREFERENCE
  },
  enableScripting: {
    value: true,
    kind: OptionKind.VIEWER + OptionKind.PREFERENCE
  },
  externalLinkRel: {
    value: "noopener noreferrer nofollow",
    kind: OptionKind.VIEWER
  },
  externalLinkTarget: {
    value: 0,
    kind: OptionKind.VIEWER + OptionKind.PREFERENCE
  },
  historyUpdateUrl: {
    value: false,
    kind: OptionKind.VIEWER + OptionKind.PREFERENCE
  },
  ignoreDestinationZoom: {
    value: false,
    kind: OptionKind.VIEWER + OptionKind.PREFERENCE
  },
  imageResourcesPath: {
    value: "./images/",
    kind: OptionKind.VIEWER
  },
  maxCanvasPixels: {
    value: 16777216,
    kind: OptionKind.VIEWER
  },
  forcePageColors: {
    value: false,
    kind: OptionKind.VIEWER + OptionKind.PREFERENCE
  },
  pageColorsBackground: {
    value: "Canvas",
    kind: OptionKind.VIEWER + OptionKind.PREFERENCE
  },
  pageColorsForeground: {
    value: "CanvasText",
    kind: OptionKind.VIEWER + OptionKind.PREFERENCE
  },
  pdfBugEnabled: {
    value: false,
    kind: OptionKind.VIEWER + OptionKind.PREFERENCE
  },
  printResolution: {
    value: 150,
    kind: OptionKind.VIEWER
  },
  sidebarViewOnLoad: {
    value: -1,
    kind: OptionKind.VIEWER + OptionKind.PREFERENCE
  },
  scrollModeOnLoad: {
    value: -1,
    kind: OptionKind.VIEWER + OptionKind.PREFERENCE
  },
  spreadModeOnLoad: {
    value: -1,
    kind: OptionKind.VIEWER + OptionKind.PREFERENCE
  },
  textLayerMode: {
    value: 1,
    kind: OptionKind.VIEWER + OptionKind.PREFERENCE
  },
  useOnlyCssZoom: {
    value: false,
    kind: OptionKind.VIEWER + OptionKind.PREFERENCE
  },
  viewerCssTheme: {
    value: 0,
    kind: OptionKind.VIEWER + OptionKind.PREFERENCE
  },
  viewOnLoad: {
    value: 0,
    kind: OptionKind.VIEWER + OptionKind.PREFERENCE
  },
  cMapPacked: {
    value: true,
    kind: OptionKind.API
  },
  cMapUrl: {
    value: "../web/cmaps/",
    kind: OptionKind.API
  },
  disableAutoFetch: {
    value: false,
    kind: OptionKind.API + OptionKind.PREFERENCE
  },
  disableFontFace: {
    value: false,
    kind: OptionKind.API + OptionKind.PREFERENCE
  },
  disableRange: {
    value: false,
    kind: OptionKind.API + OptionKind.PREFERENCE
  },
  disableStream: {
    value: false,
    kind: OptionKind.API + OptionKind.PREFERENCE
  },
  docBaseUrl: {
    value: "",
    kind: OptionKind.API
  },
  enableXfa: {
    value: true,
    kind: OptionKind.API + OptionKind.PREFERENCE
  },
  fontExtraProperties: {
    value: false,
    kind: OptionKind.API
  },
  isEvalSupported: {
    value: true,
    kind: OptionKind.API
  },
  isOffscreenCanvasSupported: {
    value: true,
    kind: OptionKind.API
  },
  maxImageSize: {
    value: -1,
    kind: OptionKind.API
  },
  pdfBug: {
    value: false,
    kind: OptionKind.API
  },
  standardFontDataUrl: {
    value: "../web/standard_fonts/",
    kind: OptionKind.API
  },
  verbosity: {
    value: 1,
    kind: OptionKind.API
  },
  workerPort: {
    value: null,
    kind: OptionKind.WORKER
  },
  workerSrc: {
    value: "../build/pdf.worker.js",
    kind: OptionKind.WORKER
  }
};
{
  defaultOptions.defaultUrl = {
    value: "compressed.tracemonkey-pldi-09.pdf",
    kind: OptionKind.VIEWER
  };
  defaultOptions.disablePreferences = {
    value: false,
    kind: OptionKind.VIEWER
  };
  defaultOptions.locale = {
    value: navigator.language || "en-US",
    kind: OptionKind.VIEWER
  };
  defaultOptions.renderer = {
    value: "canvas",
    kind: OptionKind.VIEWER + OptionKind.PREFERENCE
  };
  defaultOptions.sandboxBundleSrc = {
    value: "../build/pdf.sandbox.js",
    kind: OptionKind.VIEWER
  };
}
const userOptions = Object.create(null);
class AppOptions {
  constructor() {
    throw new Error("Cannot initialize AppOptions.");
  }
  static get(name) {
    const userOption = userOptions[name];
    if (userOption !== undefined) {
      return userOption;
    }
    const defaultOption = defaultOptions[name];
    if (defaultOption !== undefined) {
      var _compatibilityParams$;
      return (_compatibilityParams$ = compatibilityParams[name]) !== null && _compatibilityParams$ !== void 0 ? _compatibilityParams$ : defaultOption.value;
    }
    return undefined;
  }
  static getAll() {
    let kind = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    const options = Object.create(null);
    for (const name in defaultOptions) {
      var _compatibilityParams$2;
      const defaultOption = defaultOptions[name];
      if (kind) {
        if ((kind & defaultOption.kind) === 0) {
          continue;
        }
        if (kind === OptionKind.PREFERENCE) {
          const value = defaultOption.value,
            valueType = typeof value;
          if (valueType === "boolean" || valueType === "string" || valueType === "number" && Number.isInteger(value)) {
            options[name] = value;
            continue;
          }
          throw new Error(`Invalid type for preference: ${name}`);
        }
      }
      const userOption = userOptions[name];
      options[name] = userOption !== undefined ? userOption : (_compatibilityParams$2 = compatibilityParams[name]) !== null && _compatibilityParams$2 !== void 0 ? _compatibilityParams$2 : defaultOption.value;
    }
    return options;
  }
  static set(name, value) {
    userOptions[name] = value;
  }
  static setAll(options) {
    for (const name in options) {
      userOptions[name] = options[name];
    }
  }
  static remove(name) {
    delete userOptions[name];
  }
}
exports.AppOptions = AppOptions;
{
  AppOptions._hasUserOptions = function () {
    return Object.keys(userOptions).length > 0;
  };
}

/***/ }),
/* 6 */
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.WaitOnType = exports.EventBus = exports.AutomationEventBus = void 0;
exports.waitOnEventOrTimeout = waitOnEventOrTimeout;
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }
function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }
function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }
function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }
const WaitOnType = {
  EVENT: "event",
  TIMEOUT: "timeout"
};
exports.WaitOnType = WaitOnType;
function waitOnEventOrTimeout(_ref) {
  let target = _ref.target,
    name = _ref.name,
    _ref$delay = _ref.delay,
    delay = _ref$delay === void 0 ? 0 : _ref$delay;
  return new Promise(function (resolve, reject) {
    if (typeof target !== "object" || !(name && typeof name === "string") || !(Number.isInteger(delay) && delay >= 0)) {
      throw new Error("waitOnEventOrTimeout - invalid parameters.");
    }
    function handler(type) {
      if (target instanceof EventBus) {
        target._off(name, eventHandler);
      } else {
        target.removeEventListener(name, eventHandler);
      }
      if (timeout) {
        clearTimeout(timeout);
      }
      resolve(type);
    }
    const eventHandler = handler.bind(null, WaitOnType.EVENT);
    if (target instanceof EventBus) {
      target._on(name, eventHandler);
    } else {
      target.addEventListener(name, eventHandler);
    }
    const timeoutHandler = handler.bind(null, WaitOnType.TIMEOUT);
    const timeout = setTimeout(timeoutHandler, delay);
  });
}
var _listeners = /*#__PURE__*/new WeakMap();
class EventBus {
  constructor() {
    _classPrivateFieldInitSpec(this, _listeners, {
      writable: true,
      value: Object.create(null)
    });
  }
  on(eventName, listener) {
    let options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    this._on(eventName, listener, {
      external: true,
      once: options === null || options === void 0 ? void 0 : options.once
    });
  }
  off(eventName, listener) {
    let options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    this._off(eventName, listener, {
      external: true,
      once: options === null || options === void 0 ? void 0 : options.once
    });
  }
  dispatch(eventName, data) {
    const eventListeners = _classPrivateFieldGet(this, _listeners)[eventName];
    if (!eventListeners || eventListeners.length === 0) {
      return;
    }
    let externalListeners;
    var _iterator = _createForOfIteratorHelper(eventListeners.slice(0)),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        const _step$value = _step.value,
          listener = _step$value.listener,
          external = _step$value.external,
          once = _step$value.once;
        if (once) {
          this._off(eventName, listener);
        }
        if (external) {
          (externalListeners || (externalListeners = [])).push(listener);
          continue;
        }
        listener(data);
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    if (externalListeners) {
      var _iterator2 = _createForOfIteratorHelper(externalListeners),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          const listener = _step2.value;
          listener(data);
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
      externalListeners = null;
    }
  }
  _on(eventName, listener) {
    var _classPrivateFieldGet2;
    let options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    const eventListeners = (_classPrivateFieldGet2 = _classPrivateFieldGet(this, _listeners))[eventName] || (_classPrivateFieldGet2[eventName] = []);
    eventListeners.push({
      listener,
      external: (options === null || options === void 0 ? void 0 : options.external) === true,
      once: (options === null || options === void 0 ? void 0 : options.once) === true
    });
  }
  _off(eventName, listener) {
    let options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    const eventListeners = _classPrivateFieldGet(this, _listeners)[eventName];
    if (!eventListeners) {
      return;
    }
    for (let i = 0, ii = eventListeners.length; i < ii; i++) {
      if (eventListeners[i].listener === listener) {
        eventListeners.splice(i, 1);
        return;
      }
    }
  }
}
exports.EventBus = EventBus;
class AutomationEventBus extends EventBus {
  dispatch(eventName, data) {
    throw new Error("Not implemented: AutomationEventBus.dispatch");
  }
}
exports.AutomationEventBus = AutomationEventBus;

/***/ }),
/* 7 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.SimpleLinkService = exports.PDFLinkService = exports.LinkTarget = void 0;
var _ui_utils = __webpack_require__(3);
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }
function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }
function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
function _classStaticPrivateMethodGet(receiver, classConstructor, method) { _classCheckPrivateStaticAccess(receiver, classConstructor); return method; }
function _classCheckPrivateStaticAccess(receiver, classConstructor) { if (receiver !== classConstructor) { throw new TypeError("Private static access of wrong provenance"); } }
function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }
function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }
function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }
function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }
const DEFAULT_LINK_REL = "noopener noreferrer nofollow";
const LinkTarget = {
  NONE: 0,
  SELF: 1,
  BLANK: 2,
  PARENT: 3,
  TOP: 4
};
exports.LinkTarget = LinkTarget;
function addLinkAttributes(link) {
  let _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
    url = _ref.url,
    target = _ref.target,
    rel = _ref.rel,
    _ref$enabled = _ref.enabled,
    enabled = _ref$enabled === void 0 ? true : _ref$enabled;
  if (!url || typeof url !== "string") {
    throw new Error('A valid "url" parameter must provided.');
  }
  const urlNullRemoved = (0, _ui_utils.removeNullCharacters)(url);
  if (enabled) {
    link.href = link.title = urlNullRemoved;
  } else {
    link.href = "";
    link.title = `Disabled: ${urlNullRemoved}`;
    link.onclick = () => {
      return false;
    };
  }
  let targetStr = "";
  switch (target) {
    case LinkTarget.NONE:
      break;
    case LinkTarget.SELF:
      targetStr = "_self";
      break;
    case LinkTarget.BLANK:
      targetStr = "_blank";
      break;
    case LinkTarget.PARENT:
      targetStr = "_parent";
      break;
    case LinkTarget.TOP:
      targetStr = "_top";
      break;
  }
  link.target = targetStr;
  link.rel = typeof rel === "string" ? rel : DEFAULT_LINK_REL;
}
var _pagesRefCache = /*#__PURE__*/new WeakMap();
var _goToDestinationHelper = /*#__PURE__*/new WeakSet();
class PDFLinkService {
  constructor() {
    let _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      eventBus = _ref2.eventBus,
      _ref2$externalLinkTar = _ref2.externalLinkTarget,
      externalLinkTarget = _ref2$externalLinkTar === void 0 ? null : _ref2$externalLinkTar,
      _ref2$externalLinkRel = _ref2.externalLinkRel,
      externalLinkRel = _ref2$externalLinkRel === void 0 ? null : _ref2$externalLinkRel,
      _ref2$ignoreDestinati = _ref2.ignoreDestinationZoom,
      ignoreDestinationZoom = _ref2$ignoreDestinati === void 0 ? false : _ref2$ignoreDestinati;
    _classPrivateMethodInitSpec(this, _goToDestinationHelper);
    _classPrivateFieldInitSpec(this, _pagesRefCache, {
      writable: true,
      value: new Map()
    });
    this.eventBus = eventBus;
    this.externalLinkTarget = externalLinkTarget;
    this.externalLinkRel = externalLinkRel;
    this.externalLinkEnabled = true;
    this._ignoreDestinationZoom = ignoreDestinationZoom;
    this.baseUrl = null;
    this.pdfDocument = null;
    this.pdfViewer = null;
    this.pdfHistory = null;
  }
  setDocument(pdfDocument) {
    let baseUrl = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    this.baseUrl = baseUrl;
    this.pdfDocument = pdfDocument;
    _classPrivateFieldGet(this, _pagesRefCache).clear();
  }
  setViewer(pdfViewer) {
    this.pdfViewer = pdfViewer;
  }
  setHistory(pdfHistory) {
    this.pdfHistory = pdfHistory;
  }
  get pagesCount() {
    return this.pdfDocument ? this.pdfDocument.numPages : 0;
  }
  get page() {
    return this.pdfViewer.currentPageNumber;
  }
  set page(value) {
    this.pdfViewer.currentPageNumber = value;
  }
  get rotation() {
    return this.pdfViewer.pagesRotation;
  }
  set rotation(value) {
    this.pdfViewer.pagesRotation = value;
  }
  get isInPresentationMode() {
    return this.pdfViewer.isInPresentationMode;
  }
  goToDestination(dest) {
    var _this = this;
    return _asyncToGenerator(function* () {
      if (!_this.pdfDocument) {
        return;
      }
      let namedDest, explicitDest;
      if (typeof dest === "string") {
        namedDest = dest;
        explicitDest = yield _this.pdfDocument.getDestination(dest);
      } else {
        namedDest = null;
        explicitDest = yield dest;
      }
      if (!Array.isArray(explicitDest)) {
        console.error(`PDFLinkService.goToDestination: "${explicitDest}" is not ` + `a valid destination array, for dest="${dest}".`);
        return;
      }
      _classPrivateMethodGet(_this, _goToDestinationHelper, _goToDestinationHelper2).call(_this, dest, namedDest, explicitDest);
    })();
  }
  goToPage(val) {
    if (!this.pdfDocument) {
      return;
    }
    const pageNumber = typeof val === "string" && this.pdfViewer.pageLabelToPageNumber(val) || val | 0;
    if (!(Number.isInteger(pageNumber) && pageNumber > 0 && pageNumber <= this.pagesCount)) {
      console.error(`PDFLinkService.goToPage: "${val}" is not a valid page.`);
      return;
    }
    if (this.pdfHistory) {
      this.pdfHistory.pushCurrentPosition();
      this.pdfHistory.pushPage(pageNumber);
    }
    this.pdfViewer.scrollPageIntoView({
      pageNumber
    });
  }
  addLinkAttributes(link, url) {
    let newWindow = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    addLinkAttributes(link, {
      url,
      target: newWindow ? LinkTarget.BLANK : this.externalLinkTarget,
      rel: this.externalLinkRel,
      enabled: this.externalLinkEnabled
    });
  }
  getDestinationHash(dest) {
    if (typeof dest === "string") {
      if (dest.length > 0) {
        return this.getAnchorUrl("#" + escape(dest));
      }
    } else if (Array.isArray(dest)) {
      const str = JSON.stringify(dest);
      if (str.length > 0) {
        return this.getAnchorUrl("#" + escape(str));
      }
    }
    return this.getAnchorUrl("");
  }
  getAnchorUrl(anchor) {
    return (this.baseUrl || "") + anchor;
  }
  setHash(hash) {
    if (!this.pdfDocument) {
      return;
    }
    let pageNumber, dest;
    if (hash.includes("=")) {
      const params = (0, _ui_utils.parseQueryString)(hash);
      if (params.has("search")) {
        this.eventBus.dispatch("findfromurlhash", {
          source: this,
          query: params.get("search").replace(/"/g, ""),
          phraseSearch: params.get("phrase") === "true"
        });
      }
      if (params.has("page")) {
        pageNumber = params.get("page") | 0 || 1;
      }
      if (params.has("zoom")) {
        const zoomArgs = params.get("zoom").split(",");
        const zoomArg = zoomArgs[0];
        const zoomArgNumber = parseFloat(zoomArg);
        if (!zoomArg.includes("Fit")) {
          dest = [null, {
            name: "XYZ"
          }, zoomArgs.length > 1 ? zoomArgs[1] | 0 : null, zoomArgs.length > 2 ? zoomArgs[2] | 0 : null, zoomArgNumber ? zoomArgNumber / 100 : zoomArg];
        } else {
          if (zoomArg === "Fit" || zoomArg === "FitB") {
            dest = [null, {
              name: zoomArg
            }];
          } else if (zoomArg === "FitH" || zoomArg === "FitBH" || zoomArg === "FitV" || zoomArg === "FitBV") {
            dest = [null, {
              name: zoomArg
            }, zoomArgs.length > 1 ? zoomArgs[1] | 0 : null];
          } else if (zoomArg === "FitR") {
            if (zoomArgs.length !== 5) {
              console.error('PDFLinkService.setHash: Not enough parameters for "FitR".');
            } else {
              dest = [null, {
                name: zoomArg
              }, zoomArgs[1] | 0, zoomArgs[2] | 0, zoomArgs[3] | 0, zoomArgs[4] | 0];
            }
          } else {
            console.error(`PDFLinkService.setHash: "${zoomArg}" is not a valid zoom value.`);
          }
        }
      }
      if (dest) {
        this.pdfViewer.scrollPageIntoView({
          pageNumber: pageNumber || this.page,
          destArray: dest,
          allowNegativeOffset: true
        });
      } else if (pageNumber) {
        this.page = pageNumber;
      }
      if (params.has("pagemode")) {
        this.eventBus.dispatch("pagemode", {
          source: this,
          mode: params.get("pagemode")
        });
      }
      if (params.has("nameddest")) {
        this.goToDestination(params.get("nameddest"));
      }
    } else {
      dest = unescape(hash);
      try {
        dest = JSON.parse(dest);
        if (!Array.isArray(dest)) {
          dest = dest.toString();
        }
      } catch (ex) {}
      if (typeof dest === "string" || _classStaticPrivateMethodGet(PDFLinkService, PDFLinkService, _isValidExplicitDestination).call(PDFLinkService, dest)) {
        this.goToDestination(dest);
        return;
      }
      console.error(`PDFLinkService.setHash: "${unescape(hash)}" is not a valid destination.`);
    }
  }
  executeNamedAction(action) {
    var _this$pdfHistory, _this$pdfHistory2;
    switch (action) {
      case "GoBack":
        (_this$pdfHistory = this.pdfHistory) === null || _this$pdfHistory === void 0 ? void 0 : _this$pdfHistory.back();
        break;
      case "GoForward":
        (_this$pdfHistory2 = this.pdfHistory) === null || _this$pdfHistory2 === void 0 ? void 0 : _this$pdfHistory2.forward();
        break;
      case "NextPage":
        this.pdfViewer.nextPage();
        break;
      case "PrevPage":
        this.pdfViewer.previousPage();
        break;
      case "LastPage":
        this.page = this.pagesCount;
        break;
      case "FirstPage":
        this.page = 1;
        break;
      default:
        break;
    }
    this.eventBus.dispatch("namedaction", {
      source: this,
      action
    });
  }
  executeSetOCGState(action) {
    var _this2 = this;
    return _asyncToGenerator(function* () {
      const pdfDocument = _this2.pdfDocument;
      const optionalContentConfig = yield _this2.pdfViewer.optionalContentConfigPromise;
      if (pdfDocument !== _this2.pdfDocument) {
        return;
      }
      let operator;
      var _iterator = _createForOfIteratorHelper(action.state),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          const elem = _step.value;
          switch (elem) {
            case "ON":
            case "OFF":
            case "Toggle":
              operator = elem;
              continue;
          }
          switch (operator) {
            case "ON":
              optionalContentConfig.setVisibility(elem, true);
              break;
            case "OFF":
              optionalContentConfig.setVisibility(elem, false);
              break;
            case "Toggle":
              const group = optionalContentConfig.getGroup(elem);
              if (group) {
                optionalContentConfig.setVisibility(elem, !group.visible);
              }
              break;
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      _this2.pdfViewer.optionalContentConfigPromise = Promise.resolve(optionalContentConfig);
    })();
  }
  cachePageRef(pageNum, pageRef) {
    if (!pageRef) {
      return;
    }
    const refStr = pageRef.gen === 0 ? `${pageRef.num}R` : `${pageRef.num}R${pageRef.gen}`;
    _classPrivateFieldGet(this, _pagesRefCache).set(refStr, pageNum);
  }
  _cachedPageNumber(pageRef) {
    if (!pageRef) {
      return null;
    }
    const refStr = pageRef.gen === 0 ? `${pageRef.num}R` : `${pageRef.num}R${pageRef.gen}`;
    return _classPrivateFieldGet(this, _pagesRefCache).get(refStr) || null;
  }
  isPageVisible(pageNumber) {
    return this.pdfViewer.isPageVisible(pageNumber);
  }
  isPageCached(pageNumber) {
    return this.pdfViewer.isPageCached(pageNumber);
  }
}
exports.PDFLinkService = PDFLinkService;
function _goToDestinationHelper2(rawDest) {
  let namedDest = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  let explicitDest = arguments.length > 2 ? arguments[2] : undefined;
  const destRef = explicitDest[0];
  let pageNumber;
  if (typeof destRef === "object" && destRef !== null) {
    pageNumber = this._cachedPageNumber(destRef);
    if (!pageNumber) {
      this.pdfDocument.getPageIndex(destRef).then(pageIndex => {
        this.cachePageRef(pageIndex + 1, destRef);
        _classPrivateMethodGet(this, _goToDestinationHelper, _goToDestinationHelper2).call(this, rawDest, namedDest, explicitDest);
      }).catch(() => {
        console.error(`PDFLinkService.#goToDestinationHelper: "${destRef}" is not ` + `a valid page reference, for dest="${rawDest}".`);
      });
      return;
    }
  } else if (Number.isInteger(destRef)) {
    pageNumber = destRef + 1;
  } else {
    console.error(`PDFLinkService.#goToDestinationHelper: "${destRef}" is not ` + `a valid destination reference, for dest="${rawDest}".`);
    return;
  }
  if (!pageNumber || pageNumber < 1 || pageNumber > this.pagesCount) {
    console.error(`PDFLinkService.#goToDestinationHelper: "${pageNumber}" is not ` + `a valid page number, for dest="${rawDest}".`);
    return;
  }
  if (this.pdfHistory) {
    this.pdfHistory.pushCurrentPosition();
    this.pdfHistory.push({
      namedDest,
      explicitDest,
      pageNumber
    });
  }
  this.pdfViewer.scrollPageIntoView({
    pageNumber,
    destArray: explicitDest,
    ignoreDestinationZoom: this._ignoreDestinationZoom
  });
}
function _isValidExplicitDestination(dest) {
  if (!Array.isArray(dest)) {
    return false;
  }
  const destLength = dest.length;
  if (destLength < 2) {
    return false;
  }
  const page = dest[0];
  if (!(typeof page === "object" && Number.isInteger(page.num) && Number.isInteger(page.gen)) && !(Number.isInteger(page) && page >= 0)) {
    return false;
  }
  const zoom = dest[1];
  if (!(typeof zoom === "object" && typeof zoom.name === "string")) {
    return false;
  }
  let allowNull = true;
  switch (zoom.name) {
    case "XYZ":
      if (destLength !== 5) {
        return false;
      }
      break;
    case "Fit":
    case "FitB":
      return destLength === 2;
    case "FitH":
    case "FitBH":
    case "FitV":
    case "FitBV":
      if (destLength !== 3) {
        return false;
      }
      break;
    case "FitR":
      if (destLength !== 6) {
        return false;
      }
      allowNull = false;
      break;
    default:
      return false;
  }
  for (let i = 2; i < destLength; i++) {
    const param = dest[i];
    if (!(typeof param === "number" || allowNull && param === null)) {
      return false;
    }
  }
  return true;
}
class SimpleLinkService {
  constructor() {
    this.externalLinkEnabled = true;
  }
  get pagesCount() {
    return 0;
  }
  get page() {
    return 0;
  }
  set page(value) {}
  get rotation() {
    return 0;
  }
  set rotation(value) {}
  get isInPresentationMode() {
    return false;
  }
  goToDestination(dest) {
    return _asyncToGenerator(function* () {})();
  }
  goToPage(val) {}
  addLinkAttributes(link, url) {
    let newWindow = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    addLinkAttributes(link, {
      url,
      enabled: this.externalLinkEnabled
    });
  }
  getDestinationHash(dest) {
    return "#";
  }
  getAnchorUrl(hash) {
    return "#";
  }
  setHash(hash) {}
  executeNamedAction(action) {}
  executeSetOCGState(action) {}
  cachePageRef(pageNum, pageRef) {}
  isPageVisible(pageNumber) {
    return true;
  }
  isPageCached(pageNumber) {
    return true;
  }
}
exports.SimpleLinkService = SimpleLinkService;

/***/ }),
/* 8 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.AnnotationEditorParams = void 0;
var _pdfjsLib = __webpack_require__(4);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }
function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }
var _bindListeners = /*#__PURE__*/new WeakSet();
class AnnotationEditorParams {
  constructor(options, eventBus) {
    _classPrivateMethodInitSpec(this, _bindListeners);
    this.eventBus = eventBus;
    _classPrivateMethodGet(this, _bindListeners, _bindListeners2).call(this, options);
  }
}
exports.AnnotationEditorParams = AnnotationEditorParams;
function _bindListeners2(_ref) {
  let editorFreeTextFontSize = _ref.editorFreeTextFontSize,
    editorFreeTextColor = _ref.editorFreeTextColor,
    editorInkColor = _ref.editorInkColor,
    editorInkThickness = _ref.editorInkThickness,
    editorInkOpacity = _ref.editorInkOpacity;
  editorFreeTextFontSize.addEventListener("input", evt => {
    this.eventBus.dispatch("switchannotationeditorparams", {
      source: this,
      type: _pdfjsLib.AnnotationEditorParamsType.FREETEXT_SIZE,
      value: editorFreeTextFontSize.valueAsNumber
    });
  });
  editorFreeTextColor.addEventListener("input", evt => {
    this.eventBus.dispatch("switchannotationeditorparams", {
      source: this,
      type: _pdfjsLib.AnnotationEditorParamsType.FREETEXT_COLOR,
      value: editorFreeTextColor.value
    });
  });
  editorInkColor.addEventListener("input", evt => {
    this.eventBus.dispatch("switchannotationeditorparams", {
      source: this,
      type: _pdfjsLib.AnnotationEditorParamsType.INK_COLOR,
      value: editorInkColor.value
    });
  });
  editorInkThickness.addEventListener("input", evt => {
    this.eventBus.dispatch("switchannotationeditorparams", {
      source: this,
      type: _pdfjsLib.AnnotationEditorParamsType.INK_THICKNESS,
      value: editorInkThickness.valueAsNumber
    });
  });
  editorInkOpacity.addEventListener("input", evt => {
    this.eventBus.dispatch("switchannotationeditorparams", {
      source: this,
      type: _pdfjsLib.AnnotationEditorParamsType.INK_OPACITY,
      value: editorInkOpacity.valueAsNumber
    });
  });
  this.eventBus._on("annotationeditorparamschanged", evt => {
    var _iterator = _createForOfIteratorHelper(evt.details),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        const _step$value = _slicedToArray(_step.value, 2),
          type = _step$value[0],
          value = _step$value[1];
        switch (type) {
          case _pdfjsLib.AnnotationEditorParamsType.FREETEXT_SIZE:
            editorFreeTextFontSize.value = value;
            break;
          case _pdfjsLib.AnnotationEditorParamsType.FREETEXT_COLOR:
            editorFreeTextColor.value = value;
            break;
          case _pdfjsLib.AnnotationEditorParamsType.INK_COLOR:
            editorInkColor.value = value;
            break;
          case _pdfjsLib.AnnotationEditorParamsType.INK_THICKNESS:
            editorInkThickness.value = value;
            break;
          case _pdfjsLib.AnnotationEditorParamsType.INK_OPACITY:
            editorInkOpacity.value = value;
            break;
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  });
}

/***/ }),
/* 9 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.OverlayManager = void 0;
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }
function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }
function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }
function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }
function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }
function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }
var _overlays = /*#__PURE__*/new WeakMap();
var _active = /*#__PURE__*/new WeakMap();
class OverlayManager {
  constructor() {
    _classPrivateFieldInitSpec(this, _overlays, {
      writable: true,
      value: new WeakMap()
    });
    _classPrivateFieldInitSpec(this, _active, {
      writable: true,
      value: null
    });
  }
  get active() {
    return _classPrivateFieldGet(this, _active);
  }
  register(dialog) {
    var _arguments = arguments,
      _this = this;
    return _asyncToGenerator(function* () {
      let canForceClose = _arguments.length > 1 && _arguments[1] !== undefined ? _arguments[1] : false;
      if (typeof dialog !== "object") {
        throw new Error("Not enough parameters.");
      } else if (_classPrivateFieldGet(_this, _overlays).has(dialog)) {
        throw new Error("The overlay is already registered.");
      }
      _classPrivateFieldGet(_this, _overlays).set(dialog, {
        canForceClose
      });
      if (!dialog.showModal) {
        const dialogPolyfill = __webpack_require__(10);
        dialogPolyfill.registerDialog(dialog);
        if (!_this._dialogPolyfillCSS) {
          _this._dialogPolyfillCSS = true;
          const style = document.createElement("style");
          style.textContent = 'dialog {\n  position: absolute;\n  left: 0; right: 0;\n  width: -moz-fit-content;\n  width: -webkit-fit-content;\n  width: fit-content;\n  height: -moz-fit-content;\n  height: -webkit-fit-content;\n  height: fit-content;\n  margin: auto;\n  border: solid;\n  padding: 1em;\n  background: white;\n  color: black;\n  display: block;\n}\n\ndialog:not([open]) {\n  display: none;\n}\n\ndialog + .backdrop {\n  position: fixed;\n  top: 0; right: 0; bottom: 0; left: 0;\n  background: rgba(0,0,0,0.1);\n}\n\n._dialog_overlay {\n  position: fixed;\n  top: 0; right: 0; bottom: 0; left: 0;\n}\n\ndialog.fixed {\n  position: fixed;\n  top: 50%;\n  transform: translate(0, -50%);\n}';
          document.head.prepend(style);
        }
      }
      dialog.addEventListener("cancel", evt => {
        _classPrivateFieldSet(_this, _active, null);
      });
    })();
  }
  unregister(dialog) {
    var _this2 = this;
    return _asyncToGenerator(function* () {
      if (!_classPrivateFieldGet(_this2, _overlays).has(dialog)) {
        throw new Error("The overlay does not exist.");
      } else if (_classPrivateFieldGet(_this2, _active) === dialog) {
        throw new Error("The overlay cannot be removed while it is active.");
      }
      _classPrivateFieldGet(_this2, _overlays).delete(dialog);
    })();
  }
  open(dialog) {
    var _this3 = this;
    return _asyncToGenerator(function* () {
      if (!_classPrivateFieldGet(_this3, _overlays).has(dialog)) {
        throw new Error("The overlay does not exist.");
      } else if (_classPrivateFieldGet(_this3, _active)) {
        if (_classPrivateFieldGet(_this3, _active) === dialog) {
          throw new Error("The overlay is already active.");
        } else if (_classPrivateFieldGet(_this3, _overlays).get(dialog).canForceClose) {
          yield _this3.close();
        } else {
          throw new Error("Another overlay is currently active.");
        }
      }
      _classPrivateFieldSet(_this3, _active, dialog);
      dialog.showModal();
    })();
  }
  close() {
    var _arguments2 = arguments,
      _this4 = this;
    return _asyncToGenerator(function* () {
      let dialog = _arguments2.length > 0 && _arguments2[0] !== undefined ? _arguments2[0] : _classPrivateFieldGet(_this4, _active);
      if (!_classPrivateFieldGet(_this4, _overlays).has(dialog)) {
        throw new Error("The overlay does not exist.");
      } else if (!_classPrivateFieldGet(_this4, _active)) {
        throw new Error("The overlay is currently not active.");
      } else if (_classPrivateFieldGet(_this4, _active) !== dialog) {
        throw new Error("Another overlay is currently active.");
      }
      dialog.close();
      _classPrivateFieldSet(_this4, _active, null);
    })();
  }
}
exports.OverlayManager = OverlayManager;

/***/ }),
/* 10 */
/***/ ((module) => {



(function (global, factory) {
   true ? module.exports = factory() : 0;
})(void 0, function () {
  'use strict';

  var supportCustomEvent = window.CustomEvent;
  if (!supportCustomEvent || typeof supportCustomEvent === 'object') {
    supportCustomEvent = function CustomEvent(event, x) {
      x = x || {};
      var ev = document.createEvent('CustomEvent');
      ev.initCustomEvent(event, !!x.bubbles, !!x.cancelable, x.detail || null);
      return ev;
    };
    supportCustomEvent.prototype = window.Event.prototype;
  }
  function safeDispatchEvent(target, event) {
    var check = 'on' + event.type.toLowerCase();
    if (typeof target[check] === 'function') {
      target[check](event);
    }
    return target.dispatchEvent(event);
  }
  function createsStackingContext(el) {
    while (el && el !== document.body) {
      var s = window.getComputedStyle(el);
      var invalid = function invalid(k, ok) {
        return !(s[k] === undefined || s[k] === ok);
      };
      if (s.opacity < 1 || invalid('zIndex', 'auto') || invalid('transform', 'none') || invalid('mixBlendMode', 'normal') || invalid('filter', 'none') || invalid('perspective', 'none') || s['isolation'] === 'isolate' || s.position === 'fixed' || s.webkitOverflowScrolling === 'touch') {
        return true;
      }
      el = el.parentElement;
    }
    return false;
  }
  function findNearestDialog(el) {
    while (el) {
      if (el.localName === 'dialog') {
        return el;
      }
      if (el.parentElement) {
        el = el.parentElement;
      } else if (el.parentNode) {
        el = el.parentNode.host;
      } else {
        el = null;
      }
    }
    return null;
  }
  function safeBlur(el) {
    while (el && el.shadowRoot && el.shadowRoot.activeElement) {
      el = el.shadowRoot.activeElement;
    }
    if (el && el.blur && el !== document.body) {
      el.blur();
    }
  }
  function inNodeList(nodeList, node) {
    for (var i = 0; i < nodeList.length; ++i) {
      if (nodeList[i] === node) {
        return true;
      }
    }
    return false;
  }
  function isFormMethodDialog(el) {
    if (!el || !el.hasAttribute('method')) {
      return false;
    }
    return el.getAttribute('method').toLowerCase() === 'dialog';
  }
  function findFocusableElementWithin(hostElement) {
    var opts = ['button', 'input', 'keygen', 'select', 'textarea'];
    var query = opts.map(function (el) {
      return el + ':not([disabled])';
    });
    query.push('[tabindex]:not([disabled]):not([tabindex=""])');
    var target = hostElement.querySelector(query.join(', '));
    if (!target && 'attachShadow' in Element.prototype) {
      var elems = hostElement.querySelectorAll('*');
      for (var i = 0; i < elems.length; i++) {
        if (elems[i].tagName && elems[i].shadowRoot) {
          target = findFocusableElementWithin(elems[i].shadowRoot);
          if (target) {
            break;
          }
        }
      }
    }
    return target;
  }
  function isConnected(element) {
    return element.isConnected || document.body.contains(element);
  }
  function findFormSubmitter(event) {
    if (event.submitter) {
      return event.submitter;
    }
    var form = event.target;
    if (!(form instanceof HTMLFormElement)) {
      return null;
    }
    var submitter = dialogPolyfill.formSubmitter;
    if (!submitter) {
      var target = event.target;
      var root = 'getRootNode' in target && target.getRootNode() || document;
      submitter = root.activeElement;
    }
    if (!submitter || submitter.form !== form) {
      return null;
    }
    return submitter;
  }
  function maybeHandleSubmit(event) {
    if (event.defaultPrevented) {
      return;
    }
    var form = event.target;
    var value = dialogPolyfill.imagemapUseValue;
    var submitter = findFormSubmitter(event);
    if (value === null && submitter) {
      value = submitter.value;
    }
    var dialog = findNearestDialog(form);
    if (!dialog) {
      return;
    }
    var formmethod = submitter && submitter.getAttribute('formmethod') || form.getAttribute('method');
    if (formmethod !== 'dialog') {
      return;
    }
    event.preventDefault();
    if (value != null) {
      dialog.close(value);
    } else {
      dialog.close();
    }
  }
  function dialogPolyfillInfo(dialog) {
    this.dialog_ = dialog;
    this.replacedStyleTop_ = false;
    this.openAsModal_ = false;
    if (!dialog.hasAttribute('role')) {
      dialog.setAttribute('role', 'dialog');
    }
    dialog.show = this.show.bind(this);
    dialog.showModal = this.showModal.bind(this);
    dialog.close = this.close.bind(this);
    dialog.addEventListener('submit', maybeHandleSubmit, false);
    if (!('returnValue' in dialog)) {
      dialog.returnValue = '';
    }
    if ('MutationObserver' in window) {
      var mo = new MutationObserver(this.maybeHideModal.bind(this));
      mo.observe(dialog, {
        attributes: true,
        attributeFilter: ['open']
      });
    } else {
      var removed = false;
      var cb = function () {
        removed ? this.downgradeModal() : this.maybeHideModal();
        removed = false;
      }.bind(this);
      var timeout;
      var delayModel = function delayModel(ev) {
        if (ev.target !== dialog) {
          return;
        }
        var cand = 'DOMNodeRemoved';
        removed |= ev.type.substr(0, cand.length) === cand;
        window.clearTimeout(timeout);
        timeout = window.setTimeout(cb, 0);
      };
      ['DOMAttrModified', 'DOMNodeRemoved', 'DOMNodeRemovedFromDocument'].forEach(function (name) {
        dialog.addEventListener(name, delayModel);
      });
    }
    Object.defineProperty(dialog, 'open', {
      set: this.setOpen.bind(this),
      get: dialog.hasAttribute.bind(dialog, 'open')
    });
    this.backdrop_ = document.createElement('div');
    this.backdrop_.className = 'backdrop';
    this.backdrop_.addEventListener('mouseup', this.backdropMouseEvent_.bind(this));
    this.backdrop_.addEventListener('mousedown', this.backdropMouseEvent_.bind(this));
    this.backdrop_.addEventListener('click', this.backdropMouseEvent_.bind(this));
  }
  dialogPolyfillInfo.prototype = {
    get dialog() {
      return this.dialog_;
    },
    maybeHideModal: function maybeHideModal() {
      if (this.dialog_.hasAttribute('open') && isConnected(this.dialog_)) {
        return;
      }
      this.downgradeModal();
    },
    downgradeModal: function downgradeModal() {
      if (!this.openAsModal_) {
        return;
      }
      this.openAsModal_ = false;
      this.dialog_.style.zIndex = '';
      if (this.replacedStyleTop_) {
        this.dialog_.style.top = '';
        this.replacedStyleTop_ = false;
      }
      this.backdrop_.parentNode && this.backdrop_.parentNode.removeChild(this.backdrop_);
      dialogPolyfill.dm.removeDialog(this);
    },
    setOpen: function setOpen(value) {
      if (value) {
        this.dialog_.hasAttribute('open') || this.dialog_.setAttribute('open', '');
      } else {
        this.dialog_.removeAttribute('open');
        this.maybeHideModal();
      }
    },
    backdropMouseEvent_: function backdropMouseEvent_(e) {
      if (!this.dialog_.hasAttribute('tabindex')) {
        var fake = document.createElement('div');
        this.dialog_.insertBefore(fake, this.dialog_.firstChild);
        fake.tabIndex = -1;
        fake.focus();
        this.dialog_.removeChild(fake);
      } else {
        this.dialog_.focus();
      }
      var redirectedEvent = document.createEvent('MouseEvents');
      redirectedEvent.initMouseEvent(e.type, e.bubbles, e.cancelable, window, e.detail, e.screenX, e.screenY, e.clientX, e.clientY, e.ctrlKey, e.altKey, e.shiftKey, e.metaKey, e.button, e.relatedTarget);
      this.dialog_.dispatchEvent(redirectedEvent);
      e.stopPropagation();
    },
    focus_: function focus_() {
      var target = this.dialog_.querySelector('[autofocus]:not([disabled])');
      if (!target && this.dialog_.tabIndex >= 0) {
        target = this.dialog_;
      }
      if (!target) {
        target = findFocusableElementWithin(this.dialog_);
      }
      safeBlur(document.activeElement);
      target && target.focus();
    },
    updateZIndex: function updateZIndex(dialogZ, backdropZ) {
      if (dialogZ < backdropZ) {
        throw new Error('dialogZ should never be < backdropZ');
      }
      this.dialog_.style.zIndex = dialogZ;
      this.backdrop_.style.zIndex = backdropZ;
    },
    show: function show() {
      if (!this.dialog_.open) {
        this.setOpen(true);
        this.focus_();
      }
    },
    showModal: function showModal() {
      if (this.dialog_.hasAttribute('open')) {
        throw new Error('Failed to execute \'showModal\' on dialog: The element is already open, and therefore cannot be opened modally.');
      }
      if (!isConnected(this.dialog_)) {
        throw new Error('Failed to execute \'showModal\' on dialog: The element is not in a Document.');
      }
      if (!dialogPolyfill.dm.pushDialog(this)) {
        throw new Error('Failed to execute \'showModal\' on dialog: There are too many open modal dialogs.');
      }
      if (createsStackingContext(this.dialog_.parentElement)) {
        console.warn('A dialog is being shown inside a stacking context. ' + 'This may cause it to be unusable. For more information, see this link: ' + 'https://github.com/GoogleChrome/dialog-polyfill/#stacking-context');
      }
      this.setOpen(true);
      this.openAsModal_ = true;
      if (dialogPolyfill.needsCentering(this.dialog_)) {
        dialogPolyfill.reposition(this.dialog_);
        this.replacedStyleTop_ = true;
      } else {
        this.replacedStyleTop_ = false;
      }
      this.dialog_.parentNode.insertBefore(this.backdrop_, this.dialog_.nextSibling);
      this.focus_();
    },
    close: function close(opt_returnValue) {
      if (!this.dialog_.hasAttribute('open')) {
        throw new Error('Failed to execute \'close\' on dialog: The element does not have an \'open\' attribute, and therefore cannot be closed.');
      }
      this.setOpen(false);
      if (opt_returnValue !== undefined) {
        this.dialog_.returnValue = opt_returnValue;
      }
      var closeEvent = new supportCustomEvent('close', {
        bubbles: false,
        cancelable: false
      });
      safeDispatchEvent(this.dialog_, closeEvent);
    }
  };
  var dialogPolyfill = {};
  dialogPolyfill.reposition = function (element) {
    var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
    var topValue = scrollTop + (window.innerHeight - element.offsetHeight) / 2;
    element.style.top = Math.max(scrollTop, topValue) + 'px';
  };
  dialogPolyfill.isInlinePositionSetByStylesheet = function (element) {
    for (var i = 0; i < document.styleSheets.length; ++i) {
      var styleSheet = document.styleSheets[i];
      var cssRules = null;
      try {
        cssRules = styleSheet.cssRules;
      } catch (e) {}
      if (!cssRules) {
        continue;
      }
      for (var j = 0; j < cssRules.length; ++j) {
        var rule = cssRules[j];
        var selectedNodes = null;
        try {
          selectedNodes = document.querySelectorAll(rule.selectorText);
        } catch (e) {}
        if (!selectedNodes || !inNodeList(selectedNodes, element)) {
          continue;
        }
        var cssTop = rule.style.getPropertyValue('top');
        var cssBottom = rule.style.getPropertyValue('bottom');
        if (cssTop && cssTop !== 'auto' || cssBottom && cssBottom !== 'auto') {
          return true;
        }
      }
    }
    return false;
  };
  dialogPolyfill.needsCentering = function (dialog) {
    var computedStyle = window.getComputedStyle(dialog);
    if (computedStyle.position !== 'absolute') {
      return false;
    }
    if (dialog.style.top !== 'auto' && dialog.style.top !== '' || dialog.style.bottom !== 'auto' && dialog.style.bottom !== '') {
      return false;
    }
    return !dialogPolyfill.isInlinePositionSetByStylesheet(dialog);
  };
  dialogPolyfill.forceRegisterDialog = function (element) {
    if (window.HTMLDialogElement || element.showModal) {
      console.warn('This browser already supports <dialog>, the polyfill ' + 'may not work correctly', element);
    }
    if (element.localName !== 'dialog') {
      throw new Error('Failed to register dialog: The element is not a dialog.');
    }
    new dialogPolyfillInfo(element);
  };
  dialogPolyfill.registerDialog = function (element) {
    if (!element.showModal) {
      dialogPolyfill.forceRegisterDialog(element);
    }
  };
  dialogPolyfill.DialogManager = function () {
    this.pendingDialogStack = [];
    var checkDOM = this.checkDOM_.bind(this);
    this.overlay = document.createElement('div');
    this.overlay.className = '_dialog_overlay';
    this.overlay.addEventListener('click', function (e) {
      this.forwardTab_ = undefined;
      e.stopPropagation();
      checkDOM([]);
    }.bind(this));
    this.handleKey_ = this.handleKey_.bind(this);
    this.handleFocus_ = this.handleFocus_.bind(this);
    this.zIndexLow_ = 100000;
    this.zIndexHigh_ = 100000 + 150;
    this.forwardTab_ = undefined;
    if ('MutationObserver' in window) {
      this.mo_ = new MutationObserver(function (records) {
        var removed = [];
        records.forEach(function (rec) {
          for (var i = 0, c; c = rec.removedNodes[i]; ++i) {
            if (!(c instanceof Element)) {
              continue;
            } else if (c.localName === 'dialog') {
              removed.push(c);
            }
            removed = removed.concat(c.querySelectorAll('dialog'));
          }
        });
        removed.length && checkDOM(removed);
      });
    }
  };
  dialogPolyfill.DialogManager.prototype.blockDocument = function () {
    document.documentElement.addEventListener('focus', this.handleFocus_, true);
    document.addEventListener('keydown', this.handleKey_);
    this.mo_ && this.mo_.observe(document, {
      childList: true,
      subtree: true
    });
  };
  dialogPolyfill.DialogManager.prototype.unblockDocument = function () {
    document.documentElement.removeEventListener('focus', this.handleFocus_, true);
    document.removeEventListener('keydown', this.handleKey_);
    this.mo_ && this.mo_.disconnect();
  };
  dialogPolyfill.DialogManager.prototype.updateStacking = function () {
    var zIndex = this.zIndexHigh_;
    for (var i = 0, dpi; dpi = this.pendingDialogStack[i]; ++i) {
      dpi.updateZIndex(--zIndex, --zIndex);
      if (i === 0) {
        this.overlay.style.zIndex = --zIndex;
      }
    }
    var last = this.pendingDialogStack[0];
    if (last) {
      var p = last.dialog.parentNode || document.body;
      p.appendChild(this.overlay);
    } else if (this.overlay.parentNode) {
      this.overlay.parentNode.removeChild(this.overlay);
    }
  };
  dialogPolyfill.DialogManager.prototype.containedByTopDialog_ = function (candidate) {
    while (candidate = findNearestDialog(candidate)) {
      for (var i = 0, dpi; dpi = this.pendingDialogStack[i]; ++i) {
        if (dpi.dialog === candidate) {
          return i === 0;
        }
      }
      candidate = candidate.parentElement;
    }
    return false;
  };
  dialogPolyfill.DialogManager.prototype.handleFocus_ = function (event) {
    var target = event.composedPath ? event.composedPath()[0] : event.target;
    if (this.containedByTopDialog_(target)) {
      return;
    }
    if (document.activeElement === document.documentElement) {
      return;
    }
    event.preventDefault();
    event.stopPropagation();
    safeBlur(target);
    if (this.forwardTab_ === undefined) {
      return;
    }
    var dpi = this.pendingDialogStack[0];
    var dialog = dpi.dialog;
    var position = dialog.compareDocumentPosition(target);
    if (position & Node.DOCUMENT_POSITION_PRECEDING) {
      if (this.forwardTab_) {
        dpi.focus_();
      } else if (target !== document.documentElement) {
        document.documentElement.focus();
      }
    }
    return false;
  };
  dialogPolyfill.DialogManager.prototype.handleKey_ = function (event) {
    this.forwardTab_ = undefined;
    if (event.keyCode === 27) {
      event.preventDefault();
      event.stopPropagation();
      var cancelEvent = new supportCustomEvent('cancel', {
        bubbles: false,
        cancelable: true
      });
      var dpi = this.pendingDialogStack[0];
      if (dpi && safeDispatchEvent(dpi.dialog, cancelEvent)) {
        dpi.dialog.close();
      }
    } else if (event.keyCode === 9) {
      this.forwardTab_ = !event.shiftKey;
    }
  };
  dialogPolyfill.DialogManager.prototype.checkDOM_ = function (removed) {
    var clone = this.pendingDialogStack.slice();
    clone.forEach(function (dpi) {
      if (removed.indexOf(dpi.dialog) !== -1) {
        dpi.downgradeModal();
      } else {
        dpi.maybeHideModal();
      }
    });
  };
  dialogPolyfill.DialogManager.prototype.pushDialog = function (dpi) {
    var allowed = (this.zIndexHigh_ - this.zIndexLow_) / 2 - 1;
    if (this.pendingDialogStack.length >= allowed) {
      return false;
    }
    if (this.pendingDialogStack.unshift(dpi) === 1) {
      this.blockDocument();
    }
    this.updateStacking();
    return true;
  };
  dialogPolyfill.DialogManager.prototype.removeDialog = function (dpi) {
    var index = this.pendingDialogStack.indexOf(dpi);
    if (index === -1) {
      return;
    }
    this.pendingDialogStack.splice(index, 1);
    if (this.pendingDialogStack.length === 0) {
      this.unblockDocument();
    }
    this.updateStacking();
  };
  dialogPolyfill.dm = new dialogPolyfill.DialogManager();
  dialogPolyfill.formSubmitter = null;
  dialogPolyfill.imagemapUseValue = null;
  if (window.HTMLDialogElement === undefined) {
    var testForm = document.createElement('form');
    testForm.setAttribute('method', 'dialog');
    if (testForm.method !== 'dialog') {
      var methodDescriptor = Object.getOwnPropertyDescriptor(HTMLFormElement.prototype, 'method');
      if (methodDescriptor) {
        var realGet = methodDescriptor.get;
        methodDescriptor.get = function () {
          if (isFormMethodDialog(this)) {
            return 'dialog';
          }
          return realGet.call(this);
        };
        var realSet = methodDescriptor.set;
        methodDescriptor.set = function (v) {
          if (typeof v === 'string' && v.toLowerCase() === 'dialog') {
            return this.setAttribute('method', v);
          }
          return realSet.call(this, v);
        };
        Object.defineProperty(HTMLFormElement.prototype, 'method', methodDescriptor);
      }
    }
    document.addEventListener('click', function (ev) {
      dialogPolyfill.formSubmitter = null;
      dialogPolyfill.imagemapUseValue = null;
      if (ev.defaultPrevented) {
        return;
      }
      var target = ev.target;
      if ('composedPath' in ev) {
        var path = ev.composedPath();
        target = path.shift() || target;
      }
      if (!target || !isFormMethodDialog(target.form)) {
        return;
      }
      var valid = target.type === 'submit' && ['button', 'input'].indexOf(target.localName) > -1;
      if (!valid) {
        if (!(target.localName === 'input' && target.type === 'image')) {
          return;
        }
        dialogPolyfill.imagemapUseValue = ev.offsetX + ',' + ev.offsetY;
      }
      var dialog = findNearestDialog(target);
      if (!dialog) {
        return;
      }
      dialogPolyfill.formSubmitter = target;
    }, false);
    document.addEventListener('submit', function (ev) {
      var form = ev.target;
      var dialog = findNearestDialog(form);
      if (dialog) {
        return;
      }
      var submitter = findFormSubmitter(ev);
      var formmethod = submitter && submitter.getAttribute('formmethod') || form.getAttribute('method');
      if (formmethod === 'dialog') {
        ev.preventDefault();
      }
    });
    var nativeFormSubmit = HTMLFormElement.prototype.submit;
    var replacementFormSubmit = function replacementFormSubmit() {
      if (!isFormMethodDialog(this)) {
        return nativeFormSubmit.call(this);
      }
      var dialog = findNearestDialog(this);
      dialog && dialog.close();
    };
    HTMLFormElement.prototype.submit = replacementFormSubmit;
  }
  return dialogPolyfill;
});

/***/ }),
/* 11 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.PasswordPrompt = void 0;
var _pdfjsLib = __webpack_require__(4);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }
function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }
function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }
function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }
function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }
function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }
function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }
function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }
var _activeCapability = /*#__PURE__*/new WeakMap();
var _updateCallback = /*#__PURE__*/new WeakMap();
var _reason = /*#__PURE__*/new WeakMap();
var _verify = /*#__PURE__*/new WeakSet();
var _cancel = /*#__PURE__*/new WeakSet();
var _invokeCallback = /*#__PURE__*/new WeakSet();
class PasswordPrompt {
  constructor(options, overlayManager, l10n) {
    let isViewerEmbedded = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
    _classPrivateMethodInitSpec(this, _invokeCallback);
    _classPrivateMethodInitSpec(this, _cancel);
    _classPrivateMethodInitSpec(this, _verify);
    _classPrivateFieldInitSpec(this, _activeCapability, {
      writable: true,
      value: null
    });
    _classPrivateFieldInitSpec(this, _updateCallback, {
      writable: true,
      value: null
    });
    _classPrivateFieldInitSpec(this, _reason, {
      writable: true,
      value: null
    });
    this.dialog = options.dialog;
    this.label = options.label;
    this.input = options.input;
    this.submitButton = options.submitButton;
    this.cancelButton = options.cancelButton;
    this.overlayManager = overlayManager;
    this.l10n = l10n;
    this._isViewerEmbedded = isViewerEmbedded;
    this.submitButton.addEventListener("click", _classPrivateMethodGet(this, _verify, _verify2).bind(this));
    this.cancelButton.addEventListener("click", this.close.bind(this));
    this.input.addEventListener("keydown", e => {
      if (e.keyCode === 13) {
        _classPrivateMethodGet(this, _verify, _verify2).call(this);
      }
    });
    this.overlayManager.register(this.dialog, true);
    this.dialog.addEventListener("close", _classPrivateMethodGet(this, _cancel, _cancel2).bind(this));
  }
  open() {
    var _this = this;
    return _asyncToGenerator(function* () {
      if (_classPrivateFieldGet(_this, _activeCapability)) {
        yield _classPrivateFieldGet(_this, _activeCapability).promise;
      }
      _classPrivateFieldSet(_this, _activeCapability, (0, _pdfjsLib.createPromiseCapability)());
      try {
        yield _this.overlayManager.open(_this.dialog);
      } catch (ex) {
        _classPrivateFieldSet(_this, _activeCapability, null);
        throw ex;
      }
      const passwordIncorrect = _classPrivateFieldGet(_this, _reason) === _pdfjsLib.PasswordResponses.INCORRECT_PASSWORD;
      if (!_this._isViewerEmbedded || passwordIncorrect) {
        _this.input.focus();
      }
      _this.label.textContent = yield _this.l10n.get(`password_${passwordIncorrect ? "invalid" : "label"}`);
    })();
  }
  close() {
    var _this2 = this;
    return _asyncToGenerator(function* () {
      if (_this2.overlayManager.active === _this2.dialog) {
        _this2.overlayManager.close(_this2.dialog);
      }
    })();
  }
  setUpdateCallback(updateCallback, reason) {
    var _this3 = this;
    return _asyncToGenerator(function* () {
      if (_classPrivateFieldGet(_this3, _activeCapability)) {
        yield _classPrivateFieldGet(_this3, _activeCapability).promise;
      }
      _classPrivateFieldSet(_this3, _updateCallback, updateCallback);
      _classPrivateFieldSet(_this3, _reason, reason);
    })();
  }
}
exports.PasswordPrompt = PasswordPrompt;
function _verify2() {
  const password = this.input.value;
  if ((password === null || password === void 0 ? void 0 : password.length) > 0) {
    _classPrivateMethodGet(this, _invokeCallback, _invokeCallback2).call(this, password);
  }
}
function _cancel2() {
  _classPrivateMethodGet(this, _invokeCallback, _invokeCallback2).call(this, new Error("PasswordPrompt cancelled."));
  _classPrivateFieldGet(this, _activeCapability).resolve();
}
function _invokeCallback2(password) {
  if (!_classPrivateFieldGet(this, _updateCallback)) {
    return;
  }
  this.close();
  this.input.value = "";
  _classPrivateFieldGet(this, _updateCallback).call(this, password);
  _classPrivateFieldSet(this, _updateCallback, null);
}

/***/ }),
/* 12 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.PDFAttachmentViewer = void 0;
var _pdfjsLib = __webpack_require__(4);
var _base_tree_viewer = __webpack_require__(13);
var _event_utils = __webpack_require__(6);
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }
function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }
var _appendAttachment = /*#__PURE__*/new WeakSet();
class PDFAttachmentViewer extends _base_tree_viewer.BaseTreeViewer {
  constructor(options) {
    super(options);
    _classPrivateMethodInitSpec(this, _appendAttachment);
    this.downloadManager = options.downloadManager;
    this.eventBus._on("fileattachmentannotation", _classPrivateMethodGet(this, _appendAttachment, _appendAttachment2).bind(this));
  }
  reset() {
    let keepRenderedCapability = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    super.reset();
    this._attachments = null;
    if (!keepRenderedCapability) {
      this._renderedCapability = (0, _pdfjsLib.createPromiseCapability)();
    }
    this._pendingDispatchEvent = false;
  }
  _dispatchEvent(attachmentsCount) {
    var _this = this;
    return _asyncToGenerator(function* () {
      _this._renderedCapability.resolve();
      if (attachmentsCount === 0 && !_this._pendingDispatchEvent) {
        _this._pendingDispatchEvent = true;
        yield (0, _event_utils.waitOnEventOrTimeout)({
          target: _this.eventBus,
          name: "annotationlayerrendered",
          delay: 1000
        });
        if (!_this._pendingDispatchEvent) {
          return;
        }
      }
      _this._pendingDispatchEvent = false;
      _this.eventBus.dispatch("attachmentsloaded", {
        source: _this,
        attachmentsCount
      });
    })();
  }
  _bindLink(element, _ref) {
    let content = _ref.content,
      filename = _ref.filename;
    element.onclick = () => {
      this.downloadManager.openOrDownloadData(element, content, filename);
      return false;
    };
  }
  render(_ref2) {
    let attachments = _ref2.attachments,
      _ref2$keepRenderedCap = _ref2.keepRenderedCapability,
      keepRenderedCapability = _ref2$keepRenderedCap === void 0 ? false : _ref2$keepRenderedCap;
    if (this._attachments) {
      this.reset(keepRenderedCapability);
    }
    this._attachments = attachments || null;
    if (!attachments) {
      this._dispatchEvent(0);
      return;
    }
    const names = Object.keys(attachments).sort(function (a, b) {
      return a.toLowerCase().localeCompare(b.toLowerCase());
    });
    const fragment = document.createDocumentFragment();
    let attachmentsCount = 0;
    var _iterator = _createForOfIteratorHelper(names),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        const name = _step.value;
        const item = attachments[name];
        const content = item.content,
          filename = (0, _pdfjsLib.getFilenameFromUrl)(item.filename, true);
        const div = document.createElement("div");
        div.className = "treeItem";
        const element = document.createElement("a");
        this._bindLink(element, {
          content,
          filename
        });
        element.textContent = this._normalizeTextContent(filename);
        div.append(element);
        fragment.append(div);
        attachmentsCount++;
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    this._finishRendering(fragment, attachmentsCount);
  }
}
exports.PDFAttachmentViewer = PDFAttachmentViewer;
function _appendAttachment2(_ref3) {
  let filename = _ref3.filename,
    content = _ref3.content;
  const renderedPromise = this._renderedCapability.promise;
  renderedPromise.then(() => {
    if (renderedPromise !== this._renderedCapability.promise) {
      return;
    }
    const attachments = this._attachments || Object.create(null);
    for (const name in attachments) {
      if (filename === name) {
        return;
      }
    }
    attachments[filename] = {
      filename,
      content
    };
    this.render({
      attachments,
      keepRenderedCapability: true
    });
  });
}

/***/ }),
/* 13 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.BaseTreeViewer = void 0;
var _ui_utils = __webpack_require__(3);
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
const TREEITEM_OFFSET_TOP = -100;
const TREEITEM_SELECTED_CLASS = "selected";
class BaseTreeViewer {
  constructor(options) {
    if (this.constructor === BaseTreeViewer) {
      throw new Error("Cannot initialize BaseTreeViewer.");
    }
    this.container = options.container;
    this.eventBus = options.eventBus;
    this.reset();
  }
  reset() {
    this._pdfDocument = null;
    this._lastToggleIsShow = true;
    this._currentTreeItem = null;
    this.container.textContent = "";
    this.container.classList.remove("treeWithDeepNesting");
  }
  _dispatchEvent(count) {
    throw new Error("Not implemented: _dispatchEvent");
  }
  _bindLink(element, params) {
    throw new Error("Not implemented: _bindLink");
  }
  _normalizeTextContent(str) {
    return (0, _ui_utils.removeNullCharacters)(str, true) || "\u2013";
  }
  _addToggleButton(div) {
    let hidden = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    const toggler = document.createElement("div");
    toggler.className = "treeItemToggler";
    if (hidden) {
      toggler.classList.add("treeItemsHidden");
    }
    toggler.onclick = evt => {
      evt.stopPropagation();
      toggler.classList.toggle("treeItemsHidden");
      if (evt.shiftKey) {
        const shouldShowAll = !toggler.classList.contains("treeItemsHidden");
        this._toggleTreeItem(div, shouldShowAll);
      }
    };
    div.prepend(toggler);
  }
  _toggleTreeItem(root) {
    let show = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    this._lastToggleIsShow = show;
    var _iterator = _createForOfIteratorHelper(root.querySelectorAll(".treeItemToggler")),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        const toggler = _step.value;
        toggler.classList.toggle("treeItemsHidden", !show);
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }
  _toggleAllTreeItems() {
    this._toggleTreeItem(this.container, !this._lastToggleIsShow);
  }
  _finishRendering(fragment, count) {
    let hasAnyNesting = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    if (hasAnyNesting) {
      this.container.classList.add("treeWithDeepNesting");
      this._lastToggleIsShow = !fragment.querySelector(".treeItemsHidden");
    }
    this.container.append(fragment);
    this._dispatchEvent(count);
  }
  render(params) {
    throw new Error("Not implemented: render");
  }
  _updateCurrentTreeItem() {
    let treeItem = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    if (this._currentTreeItem) {
      this._currentTreeItem.classList.remove(TREEITEM_SELECTED_CLASS);
      this._currentTreeItem = null;
    }
    if (treeItem) {
      treeItem.classList.add(TREEITEM_SELECTED_CLASS);
      this._currentTreeItem = treeItem;
    }
  }
  _scrollToCurrentTreeItem(treeItem) {
    if (!treeItem) {
      return;
    }
    let currentNode = treeItem.parentNode;
    while (currentNode && currentNode !== this.container) {
      if (currentNode.classList.contains("treeItem")) {
        const toggler = currentNode.firstElementChild;
        toggler === null || toggler === void 0 ? void 0 : toggler.classList.remove("treeItemsHidden");
      }
      currentNode = currentNode.parentNode;
    }
    this._updateCurrentTreeItem(treeItem);
    this.container.scrollTo(treeItem.offsetLeft, treeItem.offsetTop + TREEITEM_OFFSET_TOP);
  }
}
exports.BaseTreeViewer = BaseTreeViewer;

/***/ }),
/* 14 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.PDFCursorTools = void 0;
var _ui_utils = __webpack_require__(3);
var _pdfjsLib = __webpack_require__(4);
var _grab_to_pan = __webpack_require__(15);
function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }
function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }
var _dispatchEvent = /*#__PURE__*/new WeakSet();
var _addEventListeners = /*#__PURE__*/new WeakSet();
class PDFCursorTools {
  constructor(_ref) {
    let container = _ref.container,
      eventBus = _ref.eventBus,
      _ref$cursorToolOnLoad = _ref.cursorToolOnLoad,
      cursorToolOnLoad = _ref$cursorToolOnLoad === void 0 ? _ui_utils.CursorTool.SELECT : _ref$cursorToolOnLoad;
    _classPrivateMethodInitSpec(this, _addEventListeners);
    _classPrivateMethodInitSpec(this, _dispatchEvent);
    this.container = container;
    this.eventBus = eventBus;
    this.active = _ui_utils.CursorTool.SELECT;
    this.previouslyActive = null;
    this.handTool = new _grab_to_pan.GrabToPan({
      element: this.container
    });
    _classPrivateMethodGet(this, _addEventListeners, _addEventListeners2).call(this);
    Promise.resolve().then(() => {
      this.switchTool(cursorToolOnLoad);
    });
  }
  get activeTool() {
    return this.active;
  }
  switchTool(tool) {
    if (this.previouslyActive !== null) {
      return;
    }
    if (tool === this.active) {
      return;
    }
    const disableActiveTool = () => {
      switch (this.active) {
        case _ui_utils.CursorTool.SELECT:
          break;
        case _ui_utils.CursorTool.HAND:
          this.handTool.deactivate();
          break;
        case _ui_utils.CursorTool.ZOOM:
      }
    };
    switch (tool) {
      case _ui_utils.CursorTool.SELECT:
        disableActiveTool();
        break;
      case _ui_utils.CursorTool.HAND:
        disableActiveTool();
        this.handTool.activate();
        break;
      case _ui_utils.CursorTool.ZOOM:
      default:
        console.error(`switchTool: "${tool}" is an unsupported value.`);
        return;
    }
    this.active = tool;
    _classPrivateMethodGet(this, _dispatchEvent, _dispatchEvent2).call(this);
  }
}
exports.PDFCursorTools = PDFCursorTools;
function _dispatchEvent2() {
  this.eventBus.dispatch("cursortoolchanged", {
    source: this,
    tool: this.active
  });
}
function _addEventListeners2() {
  this.eventBus._on("switchcursortool", evt => {
    this.switchTool(evt.tool);
  });
  let annotationEditorMode = _pdfjsLib.AnnotationEditorType.NONE,
    presentationModeState = _ui_utils.PresentationModeState.NORMAL;
  const disableActive = () => {
    var _this$previouslyActiv;
    const previouslyActive = this.active;
    this.switchTool(_ui_utils.CursorTool.SELECT);
    (_this$previouslyActiv = this.previouslyActive) !== null && _this$previouslyActiv !== void 0 ? _this$previouslyActiv : this.previouslyActive = previouslyActive;
  };
  const enableActive = () => {
    const previouslyActive = this.previouslyActive;
    if (previouslyActive !== null && annotationEditorMode === _pdfjsLib.AnnotationEditorType.NONE && presentationModeState === _ui_utils.PresentationModeState.NORMAL) {
      this.previouslyActive = null;
      this.switchTool(previouslyActive);
    }
  };
  this.eventBus._on("secondarytoolbarreset", evt => {
    if (this.previouslyActive !== null) {
      annotationEditorMode = _pdfjsLib.AnnotationEditorType.NONE;
      presentationModeState = _ui_utils.PresentationModeState.NORMAL;
      enableActive();
    }
  });
  this.eventBus._on("annotationeditormodechanged", _ref2 => {
    let mode = _ref2.mode;
    annotationEditorMode = mode;
    if (mode === _pdfjsLib.AnnotationEditorType.NONE) {
      enableActive();
    } else {
      disableActive();
    }
  });
  this.eventBus._on("presentationmodechanged", _ref3 => {
    let state = _ref3.state;
    presentationModeState = state;
    if (state === _ui_utils.PresentationModeState.NORMAL) {
      enableActive();
    } else if (state === _ui_utils.PresentationModeState.FULLSCREEN) {
      disableActive();
    }
  });
}

/***/ }),
/* 15 */
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.GrabToPan = void 0;
function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }
function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }
const CSS_CLASS_GRAB = "grab-to-pan-grab";
var _onMouseDown = /*#__PURE__*/new WeakSet();
var _onMouseMove = /*#__PURE__*/new WeakSet();
var _endPan = /*#__PURE__*/new WeakSet();
class GrabToPan {
  constructor(options) {
    _classPrivateMethodInitSpec(this, _endPan);
    _classPrivateMethodInitSpec(this, _onMouseMove);
    _classPrivateMethodInitSpec(this, _onMouseDown);
    this.element = options.element;
    this.document = options.element.ownerDocument;
    if (typeof options.ignoreTarget === "function") {
      this.ignoreTarget = options.ignoreTarget;
    }
    this.onActiveChanged = options.onActiveChanged;
    this.activate = this.activate.bind(this);
    this.deactivate = this.deactivate.bind(this);
    this.toggle = this.toggle.bind(this);
    this._onMouseDown = _classPrivateMethodGet(this, _onMouseDown, _onMouseDown2).bind(this);
    this._onMouseMove = _classPrivateMethodGet(this, _onMouseMove, _onMouseMove2).bind(this);
    this._endPan = _classPrivateMethodGet(this, _endPan, _endPan2).bind(this);
    const overlay = this.overlay = document.createElement("div");
    overlay.className = "grab-to-pan-grabbing";
  }
  activate() {
    if (!this.active) {
      var _this$onActiveChanged;
      this.active = true;
      this.element.addEventListener("mousedown", this._onMouseDown, true);
      this.element.classList.add(CSS_CLASS_GRAB);
      (_this$onActiveChanged = this.onActiveChanged) === null || _this$onActiveChanged === void 0 ? void 0 : _this$onActiveChanged.call(this, true);
    }
  }
  deactivate() {
    if (this.active) {
      var _this$onActiveChanged2;
      this.active = false;
      this.element.removeEventListener("mousedown", this._onMouseDown, true);
      this._endPan();
      this.element.classList.remove(CSS_CLASS_GRAB);
      (_this$onActiveChanged2 = this.onActiveChanged) === null || _this$onActiveChanged2 === void 0 ? void 0 : _this$onActiveChanged2.call(this, false);
    }
  }
  toggle() {
    if (this.active) {
      this.deactivate();
    } else {
      this.activate();
    }
  }
  ignoreTarget(node) {
    return node.matches("a[href], a[href] *, input, textarea, button, button *, select, option");
  }
}
exports.GrabToPan = GrabToPan;
function _onMouseDown2(event) {
  if (event.button !== 0 || this.ignoreTarget(event.target)) {
    return;
  }
  if (event.originalTarget) {
    try {
      event.originalTarget.tagName;
    } catch (e) {
      return;
    }
  }
  this.scrollLeftStart = this.element.scrollLeft;
  this.scrollTopStart = this.element.scrollTop;
  this.clientXStart = event.clientX;
  this.clientYStart = event.clientY;
  this.document.addEventListener("mousemove", this._onMouseMove, true);
  this.document.addEventListener("mouseup", this._endPan, true);
  this.element.addEventListener("scroll", this._endPan, true);
  event.preventDefault();
  event.stopPropagation();
  const focusedElement = document.activeElement;
  if (focusedElement && !focusedElement.contains(event.target)) {
    focusedElement.blur();
  }
}
function _onMouseMove2(event) {
  this.element.removeEventListener("scroll", this._endPan, true);
  if (!(event.buttons & 1)) {
    this._endPan();
    return;
  }
  const xDiff = event.clientX - this.clientXStart;
  const yDiff = event.clientY - this.clientYStart;
  const scrollTop = this.scrollTopStart - yDiff;
  const scrollLeft = this.scrollLeftStart - xDiff;
  if (this.element.scrollTo) {
    this.element.scrollTo({
      top: scrollTop,
      left: scrollLeft,
      behavior: "instant"
    });
  } else {
    this.element.scrollTop = scrollTop;
    this.element.scrollLeft = scrollLeft;
  }
  if (!this.overlay.parentNode) {
    document.body.append(this.overlay);
  }
}
function _endPan2() {
  this.element.removeEventListener("scroll", this._endPan, true);
  this.document.removeEventListener("mousemove", this._onMouseMove, true);
  this.document.removeEventListener("mouseup", this._endPan, true);
  this.overlay.remove();
}

/***/ }),
/* 16 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.PDFDocumentProperties = void 0;
var _pdfjsLib = __webpack_require__(4);
var _ui_utils = __webpack_require__(3);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }
function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }
function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }
function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }
function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }
function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }
function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }
function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }
const DEFAULT_FIELD_CONTENT = "-";
const NON_METRIC_LOCALES = ["en-us", "en-lr", "my"];
const US_PAGE_NAMES = {
  "8.5x11": "Letter",
  "8.5x14": "Legal"
};
const METRIC_PAGE_NAMES = {
  "297x420": "A3",
  "210x297": "A4"
};
function getPageName(size, isPortrait, pageNames) {
  const width = isPortrait ? size.width : size.height;
  const height = isPortrait ? size.height : size.width;
  return pageNames[`${width}x${height}`];
}
var _fieldData = /*#__PURE__*/new WeakMap();
var _reset = /*#__PURE__*/new WeakSet();
var _updateUI = /*#__PURE__*/new WeakSet();
var _parseFileSize = /*#__PURE__*/new WeakSet();
var _parsePageSize = /*#__PURE__*/new WeakSet();
var _parseDate = /*#__PURE__*/new WeakSet();
var _parseLinearization = /*#__PURE__*/new WeakSet();
class PDFDocumentProperties {
  constructor(_ref, overlayManager, eventBus, l10n, fileNameLookup) {
    let dialog = _ref.dialog,
      fields = _ref.fields,
      closeButton = _ref.closeButton;
    _classPrivateMethodInitSpec(this, _parseLinearization);
    _classPrivateMethodInitSpec(this, _parseDate);
    _classPrivateMethodInitSpec(this, _parsePageSize);
    _classPrivateMethodInitSpec(this, _parseFileSize);
    _classPrivateMethodInitSpec(this, _updateUI);
    _classPrivateMethodInitSpec(this, _reset);
    _classPrivateFieldInitSpec(this, _fieldData, {
      writable: true,
      value: null
    });
    this.dialog = dialog;
    this.fields = fields;
    this.overlayManager = overlayManager;
    this.l10n = l10n;
    this._fileNameLookup = fileNameLookup;
    _classPrivateMethodGet(this, _reset, _reset2).call(this);
    closeButton.addEventListener("click", this.close.bind(this));
    this.overlayManager.register(this.dialog);
    eventBus._on("pagechanging", evt => {
      this._currentPageNumber = evt.pageNumber;
    });
    eventBus._on("rotationchanging", evt => {
      this._pagesRotation = evt.pagesRotation;
    });
    this._isNonMetricLocale = true;
    l10n.getLanguage().then(locale => {
      this._isNonMetricLocale = NON_METRIC_LOCALES.includes(locale);
    });
  }
  open() {
    var _this = this;
    return _asyncToGenerator(function* () {
      yield Promise.all([_this.overlayManager.open(_this.dialog), _this._dataAvailableCapability.promise]);
      const currentPageNumber = _this._currentPageNumber;
      const pagesRotation = _this._pagesRotation;
      if (_classPrivateFieldGet(_this, _fieldData) && currentPageNumber === _classPrivateFieldGet(_this, _fieldData)._currentPageNumber && pagesRotation === _classPrivateFieldGet(_this, _fieldData)._pagesRotation) {
        _classPrivateMethodGet(_this, _updateUI, _updateUI2).call(_this);
        return;
      }
      const _yield$_this$pdfDocum = yield _this.pdfDocument.getMetadata(),
        info = _yield$_this$pdfDocum.info,
        contentLength = _yield$_this$pdfDocum.contentLength;
      const _yield$Promise$all = yield Promise.all([_this._fileNameLookup(), _classPrivateMethodGet(_this, _parseFileSize, _parseFileSize2).call(_this, contentLength), _classPrivateMethodGet(_this, _parseDate, _parseDate2).call(_this, info.CreationDate), _classPrivateMethodGet(_this, _parseDate, _parseDate2).call(_this, info.ModDate), _this.pdfDocument.getPage(currentPageNumber).then(pdfPage => {
          return _classPrivateMethodGet(_this, _parsePageSize, _parsePageSize2).call(_this, (0, _ui_utils.getPageSizeInches)(pdfPage), pagesRotation);
        }), _classPrivateMethodGet(_this, _parseLinearization, _parseLinearization2).call(_this, info.IsLinearized)]),
        _yield$Promise$all2 = _slicedToArray(_yield$Promise$all, 6),
        fileName = _yield$Promise$all2[0],
        fileSize = _yield$Promise$all2[1],
        creationDate = _yield$Promise$all2[2],
        modificationDate = _yield$Promise$all2[3],
        pageSize = _yield$Promise$all2[4],
        isLinearized = _yield$Promise$all2[5];
      _classPrivateFieldSet(_this, _fieldData, Object.freeze({
        fileName,
        fileSize,
        title: info.Title,
        author: info.Author,
        subject: info.Subject,
        keywords: info.Keywords,
        creationDate,
        modificationDate,
        creator: info.Creator,
        producer: info.Producer,
        version: info.PDFFormatVersion,
        pageCount: _this.pdfDocument.numPages,
        pageSize,
        linearized: isLinearized,
        _currentPageNumber: currentPageNumber,
        _pagesRotation: pagesRotation
      }));
      _classPrivateMethodGet(_this, _updateUI, _updateUI2).call(_this);
      const _yield$_this$pdfDocum2 = yield _this.pdfDocument.getDownloadInfo(),
        length = _yield$_this$pdfDocum2.length;
      if (contentLength === length) {
        return;
      }
      const data = Object.assign(Object.create(null), _classPrivateFieldGet(_this, _fieldData));
      data.fileSize = yield _classPrivateMethodGet(_this, _parseFileSize, _parseFileSize2).call(_this, length);
      _classPrivateFieldSet(_this, _fieldData, Object.freeze(data));
      _classPrivateMethodGet(_this, _updateUI, _updateUI2).call(_this);
    })();
  }
  close() {
    var _this2 = this;
    return _asyncToGenerator(function* () {
      _this2.overlayManager.close(_this2.dialog);
    })();
  }
  setDocument(pdfDocument) {
    if (this.pdfDocument) {
      _classPrivateMethodGet(this, _reset, _reset2).call(this);
      _classPrivateMethodGet(this, _updateUI, _updateUI2).call(this, true);
    }
    if (!pdfDocument) {
      return;
    }
    this.pdfDocument = pdfDocument;
    this._dataAvailableCapability.resolve();
  }
}
exports.PDFDocumentProperties = PDFDocumentProperties;
function _reset2() {
  this.pdfDocument = null;
  _classPrivateFieldSet(this, _fieldData, null);
  this._dataAvailableCapability = (0, _pdfjsLib.createPromiseCapability)();
  this._currentPageNumber = 1;
  this._pagesRotation = 0;
}
function _updateUI2() {
  let reset = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  if (reset || !_classPrivateFieldGet(this, _fieldData)) {
    for (const id in this.fields) {
      this.fields[id].textContent = DEFAULT_FIELD_CONTENT;
    }
    return;
  }
  if (this.overlayManager.active !== this.dialog) {
    return;
  }
  for (const id in this.fields) {
    const content = _classPrivateFieldGet(this, _fieldData)[id];
    this.fields[id].textContent = content || content === 0 ? content : DEFAULT_FIELD_CONTENT;
  }
}
function _parseFileSize2() {
  return _parseFileSize3.apply(this, arguments);
}
function _parseFileSize3() {
  _parseFileSize3 = _asyncToGenerator(function* () {
    let fileSize = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    const kb = fileSize / 1024,
      mb = kb / 1024;
    if (!kb) {
      return undefined;
    }
    return this.l10n.get(`document_properties_${mb >= 1 ? "mb" : "kb"}`, {
      size_mb: mb >= 1 && (+mb.toPrecision(3)).toLocaleString(),
      size_kb: mb < 1 && (+kb.toPrecision(3)).toLocaleString(),
      size_b: fileSize.toLocaleString()
    });
  });
  return _parseFileSize3.apply(this, arguments);
}
function _parsePageSize2(_x2, _x3) {
  return _parsePageSize3.apply(this, arguments);
}
function _parsePageSize3() {
  _parsePageSize3 = _asyncToGenerator(function* (pageSizeInches, pagesRotation) {
    if (!pageSizeInches) {
      return undefined;
    }
    if (pagesRotation % 180 !== 0) {
      pageSizeInches = {
        width: pageSizeInches.height,
        height: pageSizeInches.width
      };
    }
    const isPortrait = (0, _ui_utils.isPortraitOrientation)(pageSizeInches);
    let sizeInches = {
      width: Math.round(pageSizeInches.width * 100) / 100,
      height: Math.round(pageSizeInches.height * 100) / 100
    };
    let sizeMillimeters = {
      width: Math.round(pageSizeInches.width * 25.4 * 10) / 10,
      height: Math.round(pageSizeInches.height * 25.4 * 10) / 10
    };
    let rawName = getPageName(sizeInches, isPortrait, US_PAGE_NAMES) || getPageName(sizeMillimeters, isPortrait, METRIC_PAGE_NAMES);
    if (!rawName && !(Number.isInteger(sizeMillimeters.width) && Number.isInteger(sizeMillimeters.height))) {
      const exactMillimeters = {
        width: pageSizeInches.width * 25.4,
        height: pageSizeInches.height * 25.4
      };
      const intMillimeters = {
        width: Math.round(sizeMillimeters.width),
        height: Math.round(sizeMillimeters.height)
      };
      if (Math.abs(exactMillimeters.width - intMillimeters.width) < 0.1 && Math.abs(exactMillimeters.height - intMillimeters.height) < 0.1) {
        rawName = getPageName(intMillimeters, isPortrait, METRIC_PAGE_NAMES);
        if (rawName) {
          sizeInches = {
            width: Math.round(intMillimeters.width / 25.4 * 100) / 100,
            height: Math.round(intMillimeters.height / 25.4 * 100) / 100
          };
          sizeMillimeters = intMillimeters;
        }
      }
    }
    const _yield$Promise$all3 = yield Promise.all([this._isNonMetricLocale ? sizeInches : sizeMillimeters, this.l10n.get(`document_properties_page_size_unit_${this._isNonMetricLocale ? "inches" : "millimeters"}`), rawName && this.l10n.get(`document_properties_page_size_name_${rawName.toLowerCase()}`), this.l10n.get(`document_properties_page_size_orientation_${isPortrait ? "portrait" : "landscape"}`)]),
      _yield$Promise$all4 = _slicedToArray(_yield$Promise$all3, 4),
      _yield$Promise$all4$ = _yield$Promise$all4[0],
      width = _yield$Promise$all4$.width,
      height = _yield$Promise$all4$.height,
      unit = _yield$Promise$all4[1],
      name = _yield$Promise$all4[2],
      orientation = _yield$Promise$all4[3];
    return this.l10n.get(`document_properties_page_size_dimension_${name ? "name_" : ""}string`, {
      width: width.toLocaleString(),
      height: height.toLocaleString(),
      unit,
      name,
      orientation
    });
  });
  return _parsePageSize3.apply(this, arguments);
}
function _parseDate2(_x4) {
  return _parseDate3.apply(this, arguments);
}
function _parseDate3() {
  _parseDate3 = _asyncToGenerator(function* (inputDate) {
    const dateObject = _pdfjsLib.PDFDateString.toDateObject(inputDate);
    if (!dateObject) {
      return undefined;
    }
    return this.l10n.get("document_properties_date_string", {
      date: dateObject.toLocaleDateString(),
      time: dateObject.toLocaleTimeString()
    });
  });
  return _parseDate3.apply(this, arguments);
}
function _parseLinearization2(isLinearized) {
  return this.l10n.get(`document_properties_linearized_${isLinearized ? "yes" : "no"}`);
}

/***/ }),
/* 17 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.PDFFindBar = void 0;
var _pdf_find_controller = __webpack_require__(18);
function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }
function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }
const MATCHES_COUNT_LIMIT = 1000;
var _adjustWidth = /*#__PURE__*/new WeakSet();
class PDFFindBar {
  constructor(options, eventBus, l10n) {
    _classPrivateMethodInitSpec(this, _adjustWidth);
    this.opened = false;
    this.bar = options.bar;
    this.toggleButton = options.toggleButton;
    this.findField = options.findField;
    this.highlightAll = options.highlightAllCheckbox;
    this.caseSensitive = options.caseSensitiveCheckbox;
    this.matchDiacritics = options.matchDiacriticsCheckbox;
    this.entireWord = options.entireWordCheckbox;
    this.findMsg = options.findMsg;
    this.findResultsCount = options.findResultsCount;
    this.findPreviousButton = options.findPreviousButton;
    this.findNextButton = options.findNextButton;
    this.eventBus = eventBus;
    this.l10n = l10n;
    this.toggleButton.addEventListener("click", () => {
      this.toggle();
    });
    this.findField.addEventListener("input", () => {
      this.dispatchEvent("");
    });
    this.bar.addEventListener("keydown", e => {
      switch (e.keyCode) {
        case 13:
          if (e.target === this.findField) {
            this.dispatchEvent("again", e.shiftKey);
          }
          break;
        case 27:
          this.close();
          break;
      }
    });
    this.findPreviousButton.addEventListener("click", () => {
      this.dispatchEvent("again", true);
    });
    this.findNextButton.addEventListener("click", () => {
      this.dispatchEvent("again", false);
    });
    this.highlightAll.addEventListener("click", () => {
      this.dispatchEvent("highlightallchange");
    });
    this.caseSensitive.addEventListener("click", () => {
      this.dispatchEvent("casesensitivitychange");
    });
    this.entireWord.addEventListener("click", () => {
      this.dispatchEvent("entirewordchange");
    });
    this.matchDiacritics.addEventListener("click", () => {
      this.dispatchEvent("diacriticmatchingchange");
    });
    this.eventBus._on("resize", _classPrivateMethodGet(this, _adjustWidth, _adjustWidth2).bind(this));
  }
  reset() {
    this.updateUIState();
  }
  dispatchEvent(type) {
    let findPrev = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    this.eventBus.dispatch("find", {
      source: this,
      type,
      query: this.findField.value,
      phraseSearch: true,
      caseSensitive: this.caseSensitive.checked,
      entireWord: this.entireWord.checked,
      highlightAll: this.highlightAll.checked,
      findPrevious: findPrev,
      matchDiacritics: this.matchDiacritics.checked
    });
  }
  updateUIState(state, previous, matchesCount) {
    let findMsg = Promise.resolve("");
    let status = "";
    switch (state) {
      case _pdf_find_controller.FindState.FOUND:
        break;
      case _pdf_find_controller.FindState.PENDING:
        status = "pending";
        break;
      case _pdf_find_controller.FindState.NOT_FOUND:
        findMsg = this.l10n.get("find_not_found");
        status = "notFound";
        break;
      case _pdf_find_controller.FindState.WRAPPED:
        findMsg = this.l10n.get(`find_reached_${previous ? "top" : "bottom"}`);
        break;
    }
    this.findField.setAttribute("data-status", status);
    this.findField.setAttribute("aria-invalid", state === _pdf_find_controller.FindState.NOT_FOUND);
    findMsg.then(msg => {
      this.findMsg.textContent = msg;
      _classPrivateMethodGet(this, _adjustWidth, _adjustWidth2).call(this);
    });
    this.updateResultsCount(matchesCount);
  }
  updateResultsCount() {
    let _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$current = _ref.current,
      current = _ref$current === void 0 ? 0 : _ref$current,
      _ref$total = _ref.total,
      total = _ref$total === void 0 ? 0 : _ref$total;
    const limit = MATCHES_COUNT_LIMIT;
    let matchCountMsg = Promise.resolve("");
    if (total > 0) {
      if (total > limit) {
        let key = "find_match_count_limit";
        matchCountMsg = this.l10n.get(key, {
          limit
        });
      } else {
        let key = "find_match_count";
        matchCountMsg = this.l10n.get(key, {
          current,
          total
        });
      }
    }
    matchCountMsg.then(msg => {
      this.findResultsCount.textContent = msg;
      _classPrivateMethodGet(this, _adjustWidth, _adjustWidth2).call(this);
    });
  }
  open() {
    if (!this.opened) {
      this.opened = true;
      this.toggleButton.classList.add("toggled");
      this.toggleButton.setAttribute("aria-expanded", "true");
      this.bar.classList.remove("hidden");
    }
    this.findField.select();
    this.findField.focus();
    _classPrivateMethodGet(this, _adjustWidth, _adjustWidth2).call(this);
  }
  close() {
    if (!this.opened) {
      return;
    }
    this.opened = false;
    this.toggleButton.classList.remove("toggled");
    this.toggleButton.setAttribute("aria-expanded", "false");
    this.bar.classList.add("hidden");
    this.eventBus.dispatch("findbarclose", {
      source: this
    });
  }
  toggle() {
    if (this.opened) {
      this.close();
    } else {
      this.open();
    }
  }
}
exports.PDFFindBar = PDFFindBar;
function _adjustWidth2() {
  if (!this.opened) {
    return;
  }
  this.bar.classList.remove("wrapContainers");
  const findbarHeight = this.bar.clientHeight;
  const inputContainerHeight = this.bar.firstElementChild.clientHeight;
  if (findbarHeight > inputContainerHeight) {
    this.bar.classList.add("wrapContainers");
  }
}

/***/ }),
/* 18 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.PDFFindController = exports.FindState = void 0;
var _ui_utils = __webpack_require__(3);
var _pdfjsLib = __webpack_require__(4);
var _pdf_find_utils = __webpack_require__(19);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }
function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }
function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }
function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }
function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }
function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }
function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }
function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
const FindState = {
  FOUND: 0,
  NOT_FOUND: 1,
  WRAPPED: 2,
  PENDING: 3
};
exports.FindState = FindState;
const FIND_TIMEOUT = 250;
const MATCH_SCROLL_OFFSET_TOP = -50;
const MATCH_SCROLL_OFFSET_LEFT = -400;
const CHARACTERS_TO_NORMALIZE = {
  "\u2010": "-",
  "\u2018": "'",
  "\u2019": "'",
  "\u201A": "'",
  "\u201B": "'",
  "\u201C": '"',
  "\u201D": '"',
  "\u201E": '"',
  "\u201F": '"',
  "\u00BC": "1/4",
  "\u00BD": "1/2",
  "\u00BE": "3/4"
};
const DIACRITICS_EXCEPTION = new Set([0x3099, 0x309a, 0x094d, 0x09cd, 0x0a4d, 0x0acd, 0x0b4d, 0x0bcd, 0x0c4d, 0x0ccd, 0x0d3b, 0x0d3c, 0x0d4d, 0x0dca, 0x0e3a, 0x0eba, 0x0f84, 0x1039, 0x103a, 0x1714, 0x1734, 0x17d2, 0x1a60, 0x1b44, 0x1baa, 0x1bab, 0x1bf2, 0x1bf3, 0x2d7f, 0xa806, 0xa82c, 0xa8c4, 0xa953, 0xa9c0, 0xaaf6, 0xabed, 0x0c56, 0x0f71, 0x0f72, 0x0f7a, 0x0f7b, 0x0f7c, 0x0f7d, 0x0f80, 0x0f74]);
let DIACRITICS_EXCEPTION_STR;
const DIACRITICS_REG_EXP = /[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u0898-\u089F\u08CA-\u08E1\u08E3-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B55-\u0B57\u0B62\u0B63\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0C00-\u0C04\u0C3C\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00-\u0D03\u0D3B\u0D3C\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D81-\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F\u109A-\u109D\u135D-\u135F\u1712-\u1715\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u180B-\u180D\u180F\u1885\u1886\u18A9\u1920-\u192B\u1930-\u193B\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F\u1AB0-\u1ACE\u1B00-\u1B04\u1B34-\u1B44\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BE6-\u1BF3\u1C24-\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF4\u1CF7-\u1CF9\u1DC0-\u1DFF\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA82C\uA880\uA881\uA8B4-\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9E5\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F\u{101FD}\u{102E0}\u{10376}-\u{1037A}\u{10A01}-\u{10A03}\u{10A05}\u{10A06}\u{10A0C}-\u{10A0F}\u{10A38}-\u{10A3A}\u{10A3F}\u{10AE5}\u{10AE6}\u{10D24}-\u{10D27}\u{10EAB}\u{10EAC}\u{10F46}-\u{10F50}\u{10F82}-\u{10F85}\u{11000}-\u{11002}\u{11038}-\u{11046}\u{11070}\u{11073}\u{11074}\u{1107F}-\u{11082}\u{110B0}-\u{110BA}\u{110C2}\u{11100}-\u{11102}\u{11127}-\u{11134}\u{11145}\u{11146}\u{11173}\u{11180}-\u{11182}\u{111B3}-\u{111C0}\u{111C9}-\u{111CC}\u{111CE}\u{111CF}\u{1122C}-\u{11237}\u{1123E}\u{112DF}-\u{112EA}\u{11300}-\u{11303}\u{1133B}\u{1133C}\u{1133E}-\u{11344}\u{11347}\u{11348}\u{1134B}-\u{1134D}\u{11357}\u{11362}\u{11363}\u{11366}-\u{1136C}\u{11370}-\u{11374}\u{11435}-\u{11446}\u{1145E}\u{114B0}-\u{114C3}\u{115AF}-\u{115B5}\u{115B8}-\u{115C0}\u{115DC}\u{115DD}\u{11630}-\u{11640}\u{116AB}-\u{116B7}\u{1171D}-\u{1172B}\u{1182C}-\u{1183A}\u{11930}-\u{11935}\u{11937}\u{11938}\u{1193B}-\u{1193E}\u{11940}\u{11942}\u{11943}\u{119D1}-\u{119D7}\u{119DA}-\u{119E0}\u{119E4}\u{11A01}-\u{11A0A}\u{11A33}-\u{11A39}\u{11A3B}-\u{11A3E}\u{11A47}\u{11A51}-\u{11A5B}\u{11A8A}-\u{11A99}\u{11C2F}-\u{11C36}\u{11C38}-\u{11C3F}\u{11C92}-\u{11CA7}\u{11CA9}-\u{11CB6}\u{11D31}-\u{11D36}\u{11D3A}\u{11D3C}\u{11D3D}\u{11D3F}-\u{11D45}\u{11D47}\u{11D8A}-\u{11D8E}\u{11D90}\u{11D91}\u{11D93}-\u{11D97}\u{11EF3}-\u{11EF6}\u{16AF0}-\u{16AF4}\u{16B30}-\u{16B36}\u{16F4F}\u{16F51}-\u{16F87}\u{16F8F}-\u{16F92}\u{16FE4}\u{16FF0}\u{16FF1}\u{1BC9D}\u{1BC9E}\u{1CF00}-\u{1CF2D}\u{1CF30}-\u{1CF46}\u{1D165}-\u{1D169}\u{1D16D}-\u{1D172}\u{1D17B}-\u{1D182}\u{1D185}-\u{1D18B}\u{1D1AA}-\u{1D1AD}\u{1D242}-\u{1D244}\u{1DA00}-\u{1DA36}\u{1DA3B}-\u{1DA6C}\u{1DA75}\u{1DA84}\u{1DA9B}-\u{1DA9F}\u{1DAA1}-\u{1DAAF}\u{1E000}-\u{1E006}\u{1E008}-\u{1E018}\u{1E01B}-\u{1E021}\u{1E023}\u{1E024}\u{1E026}-\u{1E02A}\u{1E130}-\u{1E136}\u{1E2AE}\u{1E2EC}-\u{1E2EF}\u{1E8D0}-\u{1E8D6}\u{1E944}-\u{1E94A}\u{E0100}-\u{E01EF}]+/gu;
const SPECIAL_CHARS_REG_EXP = /([.*+?^${}()|[\]\\])|([!-#%-\*,-\/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061D-\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1B7D\u1B7E\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52-\u2E5D\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65\u{10100}-\u{10102}\u{1039F}\u{103D0}\u{1056F}\u{10857}\u{1091F}\u{1093F}\u{10A50}-\u{10A58}\u{10A7F}\u{10AF0}-\u{10AF6}\u{10B39}-\u{10B3F}\u{10B99}-\u{10B9C}\u{10EAD}\u{10F55}-\u{10F59}\u{10F86}-\u{10F89}\u{11047}-\u{1104D}\u{110BB}\u{110BC}\u{110BE}-\u{110C1}\u{11140}-\u{11143}\u{11174}\u{11175}\u{111C5}-\u{111C8}\u{111CD}\u{111DB}\u{111DD}-\u{111DF}\u{11238}-\u{1123D}\u{112A9}\u{1144B}-\u{1144F}\u{1145A}\u{1145B}\u{1145D}\u{114C6}\u{115C1}-\u{115D7}\u{11641}-\u{11643}\u{11660}-\u{1166C}\u{116B9}\u{1173C}-\u{1173E}\u{1183B}\u{11944}-\u{11946}\u{119E2}\u{11A3F}-\u{11A46}\u{11A9A}-\u{11A9C}\u{11A9E}-\u{11AA2}\u{11C41}-\u{11C45}\u{11C70}\u{11C71}\u{11EF7}\u{11EF8}\u{11FFF}\u{12470}-\u{12474}\u{12FF1}\u{12FF2}\u{16A6E}\u{16A6F}\u{16AF5}\u{16B37}-\u{16B3B}\u{16B44}\u{16E97}-\u{16E9A}\u{16FE2}\u{1BC9F}\u{1DA87}-\u{1DA8B}\u{1E95E}\u{1E95F}])|(\s+)|([\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u0898-\u089F\u08CA-\u08E1\u08E3-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B55-\u0B57\u0B62\u0B63\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0C00-\u0C04\u0C3C\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00-\u0D03\u0D3B\u0D3C\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D81-\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F\u109A-\u109D\u135D-\u135F\u1712-\u1715\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u180B-\u180D\u180F\u1885\u1886\u18A9\u1920-\u192B\u1930-\u193B\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F\u1AB0-\u1ACE\u1B00-\u1B04\u1B34-\u1B44\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BE6-\u1BF3\u1C24-\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF4\u1CF7-\u1CF9\u1DC0-\u1DFF\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA82C\uA880\uA881\uA8B4-\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9E5\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F\u{101FD}\u{102E0}\u{10376}-\u{1037A}\u{10A01}-\u{10A03}\u{10A05}\u{10A06}\u{10A0C}-\u{10A0F}\u{10A38}-\u{10A3A}\u{10A3F}\u{10AE5}\u{10AE6}\u{10D24}-\u{10D27}\u{10EAB}\u{10EAC}\u{10F46}-\u{10F50}\u{10F82}-\u{10F85}\u{11000}-\u{11002}\u{11038}-\u{11046}\u{11070}\u{11073}\u{11074}\u{1107F}-\u{11082}\u{110B0}-\u{110BA}\u{110C2}\u{11100}-\u{11102}\u{11127}-\u{11134}\u{11145}\u{11146}\u{11173}\u{11180}-\u{11182}\u{111B3}-\u{111C0}\u{111C9}-\u{111CC}\u{111CE}\u{111CF}\u{1122C}-\u{11237}\u{1123E}\u{112DF}-\u{112EA}\u{11300}-\u{11303}\u{1133B}\u{1133C}\u{1133E}-\u{11344}\u{11347}\u{11348}\u{1134B}-\u{1134D}\u{11357}\u{11362}\u{11363}\u{11366}-\u{1136C}\u{11370}-\u{11374}\u{11435}-\u{11446}\u{1145E}\u{114B0}-\u{114C3}\u{115AF}-\u{115B5}\u{115B8}-\u{115C0}\u{115DC}\u{115DD}\u{11630}-\u{11640}\u{116AB}-\u{116B7}\u{1171D}-\u{1172B}\u{1182C}-\u{1183A}\u{11930}-\u{11935}\u{11937}\u{11938}\u{1193B}-\u{1193E}\u{11940}\u{11942}\u{11943}\u{119D1}-\u{119D7}\u{119DA}-\u{119E0}\u{119E4}\u{11A01}-\u{11A0A}\u{11A33}-\u{11A39}\u{11A3B}-\u{11A3E}\u{11A47}\u{11A51}-\u{11A5B}\u{11A8A}-\u{11A99}\u{11C2F}-\u{11C36}\u{11C38}-\u{11C3F}\u{11C92}-\u{11CA7}\u{11CA9}-\u{11CB6}\u{11D31}-\u{11D36}\u{11D3A}\u{11D3C}\u{11D3D}\u{11D3F}-\u{11D45}\u{11D47}\u{11D8A}-\u{11D8E}\u{11D90}\u{11D91}\u{11D93}-\u{11D97}\u{11EF3}-\u{11EF6}\u{16AF0}-\u{16AF4}\u{16B30}-\u{16B36}\u{16F4F}\u{16F51}-\u{16F87}\u{16F8F}-\u{16F92}\u{16FE4}\u{16FF0}\u{16FF1}\u{1BC9D}\u{1BC9E}\u{1CF00}-\u{1CF2D}\u{1CF30}-\u{1CF46}\u{1D165}-\u{1D169}\u{1D16D}-\u{1D172}\u{1D17B}-\u{1D182}\u{1D185}-\u{1D18B}\u{1D1AA}-\u{1D1AD}\u{1D242}-\u{1D244}\u{1DA00}-\u{1DA36}\u{1DA3B}-\u{1DA6C}\u{1DA75}\u{1DA84}\u{1DA9B}-\u{1DA9F}\u{1DAA1}-\u{1DAAF}\u{1E000}-\u{1E006}\u{1E008}-\u{1E018}\u{1E01B}-\u{1E021}\u{1E023}\u{1E024}\u{1E026}-\u{1E02A}\u{1E130}-\u{1E136}\u{1E2AE}\u{1E2EC}-\u{1E2EF}\u{1E8D0}-\u{1E8D6}\u{1E944}-\u{1E94A}\u{E0100}-\u{E01EF}])|([A-Za-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC\u{10000}-\u{1000B}\u{1000D}-\u{10026}\u{10028}-\u{1003A}\u{1003C}\u{1003D}\u{1003F}-\u{1004D}\u{10050}-\u{1005D}\u{10080}-\u{100FA}\u{10280}-\u{1029C}\u{102A0}-\u{102D0}\u{10300}-\u{1031F}\u{1032D}-\u{10340}\u{10342}-\u{10349}\u{10350}-\u{10375}\u{10380}-\u{1039D}\u{103A0}-\u{103C3}\u{103C8}-\u{103CF}\u{10400}-\u{1049D}\u{104B0}-\u{104D3}\u{104D8}-\u{104FB}\u{10500}-\u{10527}\u{10530}-\u{10563}\u{10570}-\u{1057A}\u{1057C}-\u{1058A}\u{1058C}-\u{10592}\u{10594}\u{10595}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10600}-\u{10736}\u{10740}-\u{10755}\u{10760}-\u{10767}\u{10780}-\u{10785}\u{10787}-\u{107B0}\u{107B2}-\u{107BA}\u{10800}-\u{10805}\u{10808}\u{1080A}-\u{10835}\u{10837}\u{10838}\u{1083C}\u{1083F}-\u{10855}\u{10860}-\u{10876}\u{10880}-\u{1089E}\u{108E0}-\u{108F2}\u{108F4}\u{108F5}\u{10900}-\u{10915}\u{10920}-\u{10939}\u{10980}-\u{109B7}\u{109BE}\u{109BF}\u{10A00}\u{10A10}-\u{10A13}\u{10A15}-\u{10A17}\u{10A19}-\u{10A35}\u{10A60}-\u{10A7C}\u{10A80}-\u{10A9C}\u{10AC0}-\u{10AC7}\u{10AC9}-\u{10AE4}\u{10B00}-\u{10B35}\u{10B40}-\u{10B55}\u{10B60}-\u{10B72}\u{10B80}-\u{10B91}\u{10C00}-\u{10C48}\u{10C80}-\u{10CB2}\u{10CC0}-\u{10CF2}\u{10D00}-\u{10D23}\u{10E80}-\u{10EA9}\u{10EB0}\u{10EB1}\u{10F00}-\u{10F1C}\u{10F27}\u{10F30}-\u{10F45}\u{10F70}-\u{10F81}\u{10FB0}-\u{10FC4}\u{10FE0}-\u{10FF6}\u{11003}-\u{11037}\u{11071}\u{11072}\u{11075}\u{11083}-\u{110AF}\u{110D0}-\u{110E8}\u{11103}-\u{11126}\u{11144}\u{11147}\u{11150}-\u{11172}\u{11176}\u{11183}-\u{111B2}\u{111C1}-\u{111C4}\u{111DA}\u{111DC}\u{11200}-\u{11211}\u{11213}-\u{1122B}\u{11280}-\u{11286}\u{11288}\u{1128A}-\u{1128D}\u{1128F}-\u{1129D}\u{1129F}-\u{112A8}\u{112B0}-\u{112DE}\u{11305}-\u{1130C}\u{1130F}\u{11310}\u{11313}-\u{11328}\u{1132A}-\u{11330}\u{11332}\u{11333}\u{11335}-\u{11339}\u{1133D}\u{11350}\u{1135D}-\u{11361}\u{11400}-\u{11434}\u{11447}-\u{1144A}\u{1145F}-\u{11461}\u{11480}-\u{114AF}\u{114C4}\u{114C5}\u{114C7}\u{11580}-\u{115AE}\u{115D8}-\u{115DB}\u{11600}-\u{1162F}\u{11644}\u{11680}-\u{116AA}\u{116B8}\u{11700}-\u{1171A}\u{11740}-\u{11746}\u{11800}-\u{1182B}\u{118A0}-\u{118DF}\u{118FF}-\u{11906}\u{11909}\u{1190C}-\u{11913}\u{11915}\u{11916}\u{11918}-\u{1192F}\u{1193F}\u{11941}\u{119A0}-\u{119A7}\u{119AA}-\u{119D0}\u{119E1}\u{119E3}\u{11A00}\u{11A0B}-\u{11A32}\u{11A3A}\u{11A50}\u{11A5C}-\u{11A89}\u{11A9D}\u{11AB0}-\u{11AF8}\u{11C00}-\u{11C08}\u{11C0A}-\u{11C2E}\u{11C40}\u{11C72}-\u{11C8F}\u{11D00}-\u{11D06}\u{11D08}\u{11D09}\u{11D0B}-\u{11D30}\u{11D46}\u{11D60}-\u{11D65}\u{11D67}\u{11D68}\u{11D6A}-\u{11D89}\u{11D98}\u{11EE0}-\u{11EF2}\u{11FB0}\u{12000}-\u{12399}\u{12480}-\u{12543}\u{12F90}-\u{12FF0}\u{13000}-\u{1342E}\u{14400}-\u{14646}\u{16800}-\u{16A38}\u{16A40}-\u{16A5E}\u{16A70}-\u{16ABE}\u{16AD0}-\u{16AED}\u{16B00}-\u{16B2F}\u{16B40}-\u{16B43}\u{16B63}-\u{16B77}\u{16B7D}-\u{16B8F}\u{16E40}-\u{16E7F}\u{16F00}-\u{16F4A}\u{16F50}\u{16F93}-\u{16F9F}\u{16FE0}\u{16FE1}\u{16FE3}\u{17000}-\u{187F7}\u{18800}-\u{18CD5}\u{18D00}-\u{18D08}\u{1AFF0}-\u{1AFF3}\u{1AFF5}-\u{1AFFB}\u{1AFFD}\u{1AFFE}\u{1B000}-\u{1B122}\u{1B150}-\u{1B152}\u{1B164}-\u{1B167}\u{1B170}-\u{1B2FB}\u{1BC00}-\u{1BC6A}\u{1BC70}-\u{1BC7C}\u{1BC80}-\u{1BC88}\u{1BC90}-\u{1BC99}\u{1D400}-\u{1D454}\u{1D456}-\u{1D49C}\u{1D49E}\u{1D49F}\u{1D4A2}\u{1D4A5}\u{1D4A6}\u{1D4A9}-\u{1D4AC}\u{1D4AE}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D505}\u{1D507}-\u{1D50A}\u{1D50D}-\u{1D514}\u{1D516}-\u{1D51C}\u{1D51E}-\u{1D539}\u{1D53B}-\u{1D53E}\u{1D540}-\u{1D544}\u{1D546}\u{1D54A}-\u{1D550}\u{1D552}-\u{1D6A5}\u{1D6A8}-\u{1D6C0}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6FA}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D734}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D76E}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D7A8}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7CB}\u{1DF00}-\u{1DF1E}\u{1E100}-\u{1E12C}\u{1E137}-\u{1E13D}\u{1E14E}\u{1E290}-\u{1E2AD}\u{1E2C0}-\u{1E2EB}\u{1E7E0}-\u{1E7E6}\u{1E7E8}-\u{1E7EB}\u{1E7ED}\u{1E7EE}\u{1E7F0}-\u{1E7FE}\u{1E800}-\u{1E8C4}\u{1E900}-\u{1E943}\u{1E94B}\u{1EE00}-\u{1EE03}\u{1EE05}-\u{1EE1F}\u{1EE21}\u{1EE22}\u{1EE24}\u{1EE27}\u{1EE29}-\u{1EE32}\u{1EE34}-\u{1EE37}\u{1EE39}\u{1EE3B}\u{1EE42}\u{1EE47}\u{1EE49}\u{1EE4B}\u{1EE4D}-\u{1EE4F}\u{1EE51}\u{1EE52}\u{1EE54}\u{1EE57}\u{1EE59}\u{1EE5B}\u{1EE5D}\u{1EE5F}\u{1EE61}\u{1EE62}\u{1EE64}\u{1EE67}-\u{1EE6A}\u{1EE6C}-\u{1EE72}\u{1EE74}-\u{1EE77}\u{1EE79}-\u{1EE7C}\u{1EE7E}\u{1EE80}-\u{1EE89}\u{1EE8B}-\u{1EE9B}\u{1EEA1}-\u{1EEA3}\u{1EEA5}-\u{1EEA9}\u{1EEAB}-\u{1EEBB}\u{20000}-\u{2A6DF}\u{2A700}-\u{2B738}\u{2B740}-\u{2B81D}\u{2B820}-\u{2CEA1}\u{2CEB0}-\u{2EBE0}\u{2F800}-\u{2FA1D}\u{30000}-\u{3134A}])/gu;
const NOT_DIACRITIC_FROM_END_REG_EXP = /([^\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u0898-\u089F\u08CA-\u08E1\u08E3-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B55-\u0B57\u0B62\u0B63\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0C00-\u0C04\u0C3C\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00-\u0D03\u0D3B\u0D3C\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D81-\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F\u109A-\u109D\u135D-\u135F\u1712-\u1715\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u180B-\u180D\u180F\u1885\u1886\u18A9\u1920-\u192B\u1930-\u193B\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F\u1AB0-\u1ACE\u1B00-\u1B04\u1B34-\u1B44\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BE6-\u1BF3\u1C24-\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF4\u1CF7-\u1CF9\u1DC0-\u1DFF\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA82C\uA880\uA881\uA8B4-\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9E5\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F\u{101FD}\u{102E0}\u{10376}-\u{1037A}\u{10A01}-\u{10A03}\u{10A05}\u{10A06}\u{10A0C}-\u{10A0F}\u{10A38}-\u{10A3A}\u{10A3F}\u{10AE5}\u{10AE6}\u{10D24}-\u{10D27}\u{10EAB}\u{10EAC}\u{10F46}-\u{10F50}\u{10F82}-\u{10F85}\u{11000}-\u{11002}\u{11038}-\u{11046}\u{11070}\u{11073}\u{11074}\u{1107F}-\u{11082}\u{110B0}-\u{110BA}\u{110C2}\u{11100}-\u{11102}\u{11127}-\u{11134}\u{11145}\u{11146}\u{11173}\u{11180}-\u{11182}\u{111B3}-\u{111C0}\u{111C9}-\u{111CC}\u{111CE}\u{111CF}\u{1122C}-\u{11237}\u{1123E}\u{112DF}-\u{112EA}\u{11300}-\u{11303}\u{1133B}\u{1133C}\u{1133E}-\u{11344}\u{11347}\u{11348}\u{1134B}-\u{1134D}\u{11357}\u{11362}\u{11363}\u{11366}-\u{1136C}\u{11370}-\u{11374}\u{11435}-\u{11446}\u{1145E}\u{114B0}-\u{114C3}\u{115AF}-\u{115B5}\u{115B8}-\u{115C0}\u{115DC}\u{115DD}\u{11630}-\u{11640}\u{116AB}-\u{116B7}\u{1171D}-\u{1172B}\u{1182C}-\u{1183A}\u{11930}-\u{11935}\u{11937}\u{11938}\u{1193B}-\u{1193E}\u{11940}\u{11942}\u{11943}\u{119D1}-\u{119D7}\u{119DA}-\u{119E0}\u{119E4}\u{11A01}-\u{11A0A}\u{11A33}-\u{11A39}\u{11A3B}-\u{11A3E}\u{11A47}\u{11A51}-\u{11A5B}\u{11A8A}-\u{11A99}\u{11C2F}-\u{11C36}\u{11C38}-\u{11C3F}\u{11C92}-\u{11CA7}\u{11CA9}-\u{11CB6}\u{11D31}-\u{11D36}\u{11D3A}\u{11D3C}\u{11D3D}\u{11D3F}-\u{11D45}\u{11D47}\u{11D8A}-\u{11D8E}\u{11D90}\u{11D91}\u{11D93}-\u{11D97}\u{11EF3}-\u{11EF6}\u{16AF0}-\u{16AF4}\u{16B30}-\u{16B36}\u{16F4F}\u{16F51}-\u{16F87}\u{16F8F}-\u{16F92}\u{16FE4}\u{16FF0}\u{16FF1}\u{1BC9D}\u{1BC9E}\u{1CF00}-\u{1CF2D}\u{1CF30}-\u{1CF46}\u{1D165}-\u{1D169}\u{1D16D}-\u{1D172}\u{1D17B}-\u{1D182}\u{1D185}-\u{1D18B}\u{1D1AA}-\u{1D1AD}\u{1D242}-\u{1D244}\u{1DA00}-\u{1DA36}\u{1DA3B}-\u{1DA6C}\u{1DA75}\u{1DA84}\u{1DA9B}-\u{1DA9F}\u{1DAA1}-\u{1DAAF}\u{1E000}-\u{1E006}\u{1E008}-\u{1E018}\u{1E01B}-\u{1E021}\u{1E023}\u{1E024}\u{1E026}-\u{1E02A}\u{1E130}-\u{1E136}\u{1E2AE}\u{1E2EC}-\u{1E2EF}\u{1E8D0}-\u{1E8D6}\u{1E944}-\u{1E94A}\u{E0100}-\u{E01EF}])[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u0898-\u089F\u08CA-\u08E1\u08E3-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B55-\u0B57\u0B62\u0B63\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0C00-\u0C04\u0C3C\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00-\u0D03\u0D3B\u0D3C\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D81-\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F\u109A-\u109D\u135D-\u135F\u1712-\u1715\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u180B-\u180D\u180F\u1885\u1886\u18A9\u1920-\u192B\u1930-\u193B\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F\u1AB0-\u1ACE\u1B00-\u1B04\u1B34-\u1B44\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BE6-\u1BF3\u1C24-\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF4\u1CF7-\u1CF9\u1DC0-\u1DFF\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA82C\uA880\uA881\uA8B4-\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9E5\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F\u{101FD}\u{102E0}\u{10376}-\u{1037A}\u{10A01}-\u{10A03}\u{10A05}\u{10A06}\u{10A0C}-\u{10A0F}\u{10A38}-\u{10A3A}\u{10A3F}\u{10AE5}\u{10AE6}\u{10D24}-\u{10D27}\u{10EAB}\u{10EAC}\u{10F46}-\u{10F50}\u{10F82}-\u{10F85}\u{11000}-\u{11002}\u{11038}-\u{11046}\u{11070}\u{11073}\u{11074}\u{1107F}-\u{11082}\u{110B0}-\u{110BA}\u{110C2}\u{11100}-\u{11102}\u{11127}-\u{11134}\u{11145}\u{11146}\u{11173}\u{11180}-\u{11182}\u{111B3}-\u{111C0}\u{111C9}-\u{111CC}\u{111CE}\u{111CF}\u{1122C}-\u{11237}\u{1123E}\u{112DF}-\u{112EA}\u{11300}-\u{11303}\u{1133B}\u{1133C}\u{1133E}-\u{11344}\u{11347}\u{11348}\u{1134B}-\u{1134D}\u{11357}\u{11362}\u{11363}\u{11366}-\u{1136C}\u{11370}-\u{11374}\u{11435}-\u{11446}\u{1145E}\u{114B0}-\u{114C3}\u{115AF}-\u{115B5}\u{115B8}-\u{115C0}\u{115DC}\u{115DD}\u{11630}-\u{11640}\u{116AB}-\u{116B7}\u{1171D}-\u{1172B}\u{1182C}-\u{1183A}\u{11930}-\u{11935}\u{11937}\u{11938}\u{1193B}-\u{1193E}\u{11940}\u{11942}\u{11943}\u{119D1}-\u{119D7}\u{119DA}-\u{119E0}\u{119E4}\u{11A01}-\u{11A0A}\u{11A33}-\u{11A39}\u{11A3B}-\u{11A3E}\u{11A47}\u{11A51}-\u{11A5B}\u{11A8A}-\u{11A99}\u{11C2F}-\u{11C36}\u{11C38}-\u{11C3F}\u{11C92}-\u{11CA7}\u{11CA9}-\u{11CB6}\u{11D31}-\u{11D36}\u{11D3A}\u{11D3C}\u{11D3D}\u{11D3F}-\u{11D45}\u{11D47}\u{11D8A}-\u{11D8E}\u{11D90}\u{11D91}\u{11D93}-\u{11D97}\u{11EF3}-\u{11EF6}\u{16AF0}-\u{16AF4}\u{16B30}-\u{16B36}\u{16F4F}\u{16F51}-\u{16F87}\u{16F8F}-\u{16F92}\u{16FE4}\u{16FF0}\u{16FF1}\u{1BC9D}\u{1BC9E}\u{1CF00}-\u{1CF2D}\u{1CF30}-\u{1CF46}\u{1D165}-\u{1D169}\u{1D16D}-\u{1D172}\u{1D17B}-\u{1D182}\u{1D185}-\u{1D18B}\u{1D1AA}-\u{1D1AD}\u{1D242}-\u{1D244}\u{1DA00}-\u{1DA36}\u{1DA3B}-\u{1DA6C}\u{1DA75}\u{1DA84}\u{1DA9B}-\u{1DA9F}\u{1DAA1}-\u{1DAAF}\u{1E000}-\u{1E006}\u{1E008}-\u{1E018}\u{1E01B}-\u{1E021}\u{1E023}\u{1E024}\u{1E026}-\u{1E02A}\u{1E130}-\u{1E136}\u{1E2AE}\u{1E2EC}-\u{1E2EF}\u{1E8D0}-\u{1E8D6}\u{1E944}-\u{1E94A}\u{E0100}-\u{E01EF}]*$/u;
const NOT_DIACRITIC_FROM_START_REG_EXP = /^[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u0898-\u089F\u08CA-\u08E1\u08E3-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B55-\u0B57\u0B62\u0B63\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0C00-\u0C04\u0C3C\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00-\u0D03\u0D3B\u0D3C\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D81-\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F\u109A-\u109D\u135D-\u135F\u1712-\u1715\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u180B-\u180D\u180F\u1885\u1886\u18A9\u1920-\u192B\u1930-\u193B\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F\u1AB0-\u1ACE\u1B00-\u1B04\u1B34-\u1B44\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BE6-\u1BF3\u1C24-\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF4\u1CF7-\u1CF9\u1DC0-\u1DFF\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA82C\uA880\uA881\uA8B4-\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9E5\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F\u{101FD}\u{102E0}\u{10376}-\u{1037A}\u{10A01}-\u{10A03}\u{10A05}\u{10A06}\u{10A0C}-\u{10A0F}\u{10A38}-\u{10A3A}\u{10A3F}\u{10AE5}\u{10AE6}\u{10D24}-\u{10D27}\u{10EAB}\u{10EAC}\u{10F46}-\u{10F50}\u{10F82}-\u{10F85}\u{11000}-\u{11002}\u{11038}-\u{11046}\u{11070}\u{11073}\u{11074}\u{1107F}-\u{11082}\u{110B0}-\u{110BA}\u{110C2}\u{11100}-\u{11102}\u{11127}-\u{11134}\u{11145}\u{11146}\u{11173}\u{11180}-\u{11182}\u{111B3}-\u{111C0}\u{111C9}-\u{111CC}\u{111CE}\u{111CF}\u{1122C}-\u{11237}\u{1123E}\u{112DF}-\u{112EA}\u{11300}-\u{11303}\u{1133B}\u{1133C}\u{1133E}-\u{11344}\u{11347}\u{11348}\u{1134B}-\u{1134D}\u{11357}\u{11362}\u{11363}\u{11366}-\u{1136C}\u{11370}-\u{11374}\u{11435}-\u{11446}\u{1145E}\u{114B0}-\u{114C3}\u{115AF}-\u{115B5}\u{115B8}-\u{115C0}\u{115DC}\u{115DD}\u{11630}-\u{11640}\u{116AB}-\u{116B7}\u{1171D}-\u{1172B}\u{1182C}-\u{1183A}\u{11930}-\u{11935}\u{11937}\u{11938}\u{1193B}-\u{1193E}\u{11940}\u{11942}\u{11943}\u{119D1}-\u{119D7}\u{119DA}-\u{119E0}\u{119E4}\u{11A01}-\u{11A0A}\u{11A33}-\u{11A39}\u{11A3B}-\u{11A3E}\u{11A47}\u{11A51}-\u{11A5B}\u{11A8A}-\u{11A99}\u{11C2F}-\u{11C36}\u{11C38}-\u{11C3F}\u{11C92}-\u{11CA7}\u{11CA9}-\u{11CB6}\u{11D31}-\u{11D36}\u{11D3A}\u{11D3C}\u{11D3D}\u{11D3F}-\u{11D45}\u{11D47}\u{11D8A}-\u{11D8E}\u{11D90}\u{11D91}\u{11D93}-\u{11D97}\u{11EF3}-\u{11EF6}\u{16AF0}-\u{16AF4}\u{16B30}-\u{16B36}\u{16F4F}\u{16F51}-\u{16F87}\u{16F8F}-\u{16F92}\u{16FE4}\u{16FF0}\u{16FF1}\u{1BC9D}\u{1BC9E}\u{1CF00}-\u{1CF2D}\u{1CF30}-\u{1CF46}\u{1D165}-\u{1D169}\u{1D16D}-\u{1D172}\u{1D17B}-\u{1D182}\u{1D185}-\u{1D18B}\u{1D1AA}-\u{1D1AD}\u{1D242}-\u{1D244}\u{1DA00}-\u{1DA36}\u{1DA3B}-\u{1DA6C}\u{1DA75}\u{1DA84}\u{1DA9B}-\u{1DA9F}\u{1DAA1}-\u{1DAAF}\u{1E000}-\u{1E006}\u{1E008}-\u{1E018}\u{1E01B}-\u{1E021}\u{1E023}\u{1E024}\u{1E026}-\u{1E02A}\u{1E130}-\u{1E136}\u{1E2AE}\u{1E2EC}-\u{1E2EF}\u{1E8D0}-\u{1E8D6}\u{1E944}-\u{1E94A}\u{E0100}-\u{E01EF}]*([^\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u0898-\u089F\u08CA-\u08E1\u08E3-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B55-\u0B57\u0B62\u0B63\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0C00-\u0C04\u0C3C\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00-\u0D03\u0D3B\u0D3C\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D81-\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F\u109A-\u109D\u135D-\u135F\u1712-\u1715\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u180B-\u180D\u180F\u1885\u1886\u18A9\u1920-\u192B\u1930-\u193B\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F\u1AB0-\u1ACE\u1B00-\u1B04\u1B34-\u1B44\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BE6-\u1BF3\u1C24-\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF4\u1CF7-\u1CF9\u1DC0-\u1DFF\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA82C\uA880\uA881\uA8B4-\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9E5\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F\u{101FD}\u{102E0}\u{10376}-\u{1037A}\u{10A01}-\u{10A03}\u{10A05}\u{10A06}\u{10A0C}-\u{10A0F}\u{10A38}-\u{10A3A}\u{10A3F}\u{10AE5}\u{10AE6}\u{10D24}-\u{10D27}\u{10EAB}\u{10EAC}\u{10F46}-\u{10F50}\u{10F82}-\u{10F85}\u{11000}-\u{11002}\u{11038}-\u{11046}\u{11070}\u{11073}\u{11074}\u{1107F}-\u{11082}\u{110B0}-\u{110BA}\u{110C2}\u{11100}-\u{11102}\u{11127}-\u{11134}\u{11145}\u{11146}\u{11173}\u{11180}-\u{11182}\u{111B3}-\u{111C0}\u{111C9}-\u{111CC}\u{111CE}\u{111CF}\u{1122C}-\u{11237}\u{1123E}\u{112DF}-\u{112EA}\u{11300}-\u{11303}\u{1133B}\u{1133C}\u{1133E}-\u{11344}\u{11347}\u{11348}\u{1134B}-\u{1134D}\u{11357}\u{11362}\u{11363}\u{11366}-\u{1136C}\u{11370}-\u{11374}\u{11435}-\u{11446}\u{1145E}\u{114B0}-\u{114C3}\u{115AF}-\u{115B5}\u{115B8}-\u{115C0}\u{115DC}\u{115DD}\u{11630}-\u{11640}\u{116AB}-\u{116B7}\u{1171D}-\u{1172B}\u{1182C}-\u{1183A}\u{11930}-\u{11935}\u{11937}\u{11938}\u{1193B}-\u{1193E}\u{11940}\u{11942}\u{11943}\u{119D1}-\u{119D7}\u{119DA}-\u{119E0}\u{119E4}\u{11A01}-\u{11A0A}\u{11A33}-\u{11A39}\u{11A3B}-\u{11A3E}\u{11A47}\u{11A51}-\u{11A5B}\u{11A8A}-\u{11A99}\u{11C2F}-\u{11C36}\u{11C38}-\u{11C3F}\u{11C92}-\u{11CA7}\u{11CA9}-\u{11CB6}\u{11D31}-\u{11D36}\u{11D3A}\u{11D3C}\u{11D3D}\u{11D3F}-\u{11D45}\u{11D47}\u{11D8A}-\u{11D8E}\u{11D90}\u{11D91}\u{11D93}-\u{11D97}\u{11EF3}-\u{11EF6}\u{16AF0}-\u{16AF4}\u{16B30}-\u{16B36}\u{16F4F}\u{16F51}-\u{16F87}\u{16F8F}-\u{16F92}\u{16FE4}\u{16FF0}\u{16FF1}\u{1BC9D}\u{1BC9E}\u{1CF00}-\u{1CF2D}\u{1CF30}-\u{1CF46}\u{1D165}-\u{1D169}\u{1D16D}-\u{1D172}\u{1D17B}-\u{1D182}\u{1D185}-\u{1D18B}\u{1D1AA}-\u{1D1AD}\u{1D242}-\u{1D244}\u{1DA00}-\u{1DA36}\u{1DA3B}-\u{1DA6C}\u{1DA75}\u{1DA84}\u{1DA9B}-\u{1DA9F}\u{1DAA1}-\u{1DAAF}\u{1E000}-\u{1E006}\u{1E008}-\u{1E018}\u{1E01B}-\u{1E021}\u{1E023}\u{1E024}\u{1E026}-\u{1E02A}\u{1E130}-\u{1E136}\u{1E2AE}\u{1E2EC}-\u{1E2EF}\u{1E8D0}-\u{1E8D6}\u{1E944}-\u{1E94A}\u{E0100}-\u{E01EF}])/u;
const SYLLABLES_REG_EXP = /[\uAC00-\uD7AF\uFA6C\uFACF-\uFAD1\uFAD5-\uFAD7]+/g;
const SYLLABLES_LENGTHS = new Map();
const FIRST_CHAR_SYLLABLES_REG_EXP = "[\\u1100-\\u1112\\ud7a4-\\ud7af\\ud84a\\ud84c\\ud850\\ud854\\ud857\\ud85f]";
const NFKC_CHARS_TO_NORMALIZE = new Map();
let noSyllablesRegExp = null;
let withSyllablesRegExp = null;
function normalize(text) {
  const syllablePositions = [];
  let m;
  while ((m = SYLLABLES_REG_EXP.exec(text)) !== null) {
    let _m = m,
      index = _m.index;
    var _iterator = _createForOfIteratorHelper(m[0]),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        const char = _step.value;
        let len = SYLLABLES_LENGTHS.get(char);
        if (!len) {
          len = char.normalize("NFD").length;
          SYLLABLES_LENGTHS.set(char, len);
        }
        syllablePositions.push([len, index++]);
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }
  let normalizationRegex;
  if (syllablePositions.length === 0 && noSyllablesRegExp) {
    normalizationRegex = noSyllablesRegExp;
  } else if (syllablePositions.length > 0 && withSyllablesRegExp) {
    normalizationRegex = withSyllablesRegExp;
  } else {
    const replace = Object.keys(CHARACTERS_TO_NORMALIZE).join("");
    const toNormalizeWithNFKC = "\u2460-\u2473" + "\u24b6-\u24ff" + "\u3244-\u32bf" + "\u32d0-\u32fe" + "\uff00-\uffef";
    const CJK = "(?:\\p{Ideographic}|[\u3040-\u30FF])";
    const HKDiacritics = "(?:\u3099|\u309A)";
    const regexp = `([${replace}])|([${toNormalizeWithNFKC}])|(${HKDiacritics}\\n)|(\\p{M}+(?:-\\n)?)|(\\S-\\n)|(${CJK}\\n)|(\\n)`;
    if (syllablePositions.length === 0) {
      normalizationRegex = noSyllablesRegExp = new RegExp(regexp + "|(\\u0000)", "gum");
    } else {
      normalizationRegex = withSyllablesRegExp = new RegExp(regexp + `|(${FIRST_CHAR_SYLLABLES_REG_EXP})`, "gum");
    }
  }
  const rawDiacriticsPositions = [];
  while ((m = DIACRITICS_REG_EXP.exec(text)) !== null) {
    rawDiacriticsPositions.push([m[0].length, m.index]);
  }
  let normalized = text.normalize("NFD");
  const positions = [[0, 0]];
  let rawDiacriticsIndex = 0;
  let syllableIndex = 0;
  let shift = 0;
  let shiftOrigin = 0;
  let eol = 0;
  let hasDiacritics = false;
  normalized = normalized.replace(normalizationRegex, (match, p1, p2, p3, p4, p5, p6, p7, p8, i) => {
    var _syllablePositions$sy;
    i -= shiftOrigin;
    if (p1) {
      const replacement = CHARACTERS_TO_NORMALIZE[p1];
      const jj = replacement.length;
      for (let j = 1; j < jj; j++) {
        positions.push([i - shift + j, shift - j]);
      }
      shift -= jj - 1;
      return replacement;
    }
    if (p2) {
      let replacement = NFKC_CHARS_TO_NORMALIZE.get(p2);
      if (!replacement) {
        replacement = p2.normalize("NFKC");
        NFKC_CHARS_TO_NORMALIZE.set(p2, replacement);
      }
      const jj = replacement.length;
      for (let j = 1; j < jj; j++) {
        positions.push([i - shift + j, shift - j]);
      }
      shift -= jj - 1;
      return replacement;
    }
    if (p3) {
      var _rawDiacriticsPositio;
      hasDiacritics = true;
      if (i + eol === ((_rawDiacriticsPositio = rawDiacriticsPositions[rawDiacriticsIndex]) === null || _rawDiacriticsPositio === void 0 ? void 0 : _rawDiacriticsPositio[1])) {
        ++rawDiacriticsIndex;
      } else {
        positions.push([i - 1 - shift + 1, shift - 1]);
        shift -= 1;
        shiftOrigin += 1;
      }
      positions.push([i - shift + 1, shift]);
      shiftOrigin += 1;
      eol += 1;
      return p3.charAt(0);
    }
    if (p4) {
      var _rawDiacriticsPositio2;
      const hasTrailingDashEOL = p4.endsWith("\n");
      const len = hasTrailingDashEOL ? p4.length - 2 : p4.length;
      hasDiacritics = true;
      let jj = len;
      if (i + eol === ((_rawDiacriticsPositio2 = rawDiacriticsPositions[rawDiacriticsIndex]) === null || _rawDiacriticsPositio2 === void 0 ? void 0 : _rawDiacriticsPositio2[1])) {
        jj -= rawDiacriticsPositions[rawDiacriticsIndex][0];
        ++rawDiacriticsIndex;
      }
      for (let j = 1; j <= jj; j++) {
        positions.push([i - 1 - shift + j, shift - j]);
      }
      shift -= jj;
      shiftOrigin += jj;
      if (hasTrailingDashEOL) {
        i += len - 1;
        positions.push([i - shift + 1, 1 + shift]);
        shift += 1;
        shiftOrigin += 1;
        eol += 1;
        return p4.slice(0, len);
      }
      return p4;
    }
    if (p5) {
      const len = p5.length - 2;
      positions.push([i - shift + len, 1 + shift]);
      shift += 1;
      shiftOrigin += 1;
      eol += 1;
      return p5.slice(0, -2);
    }
    if (p6) {
      const len = p6.length - 1;
      positions.push([i - shift + len, shift]);
      shiftOrigin += 1;
      eol += 1;
      return p6.slice(0, -1);
    }
    if (p7) {
      positions.push([i - shift + 1, shift - 1]);
      shift -= 1;
      shiftOrigin += 1;
      eol += 1;
      return " ";
    }
    if (i + eol === ((_syllablePositions$sy = syllablePositions[syllableIndex]) === null || _syllablePositions$sy === void 0 ? void 0 : _syllablePositions$sy[1])) {
      const newCharLen = syllablePositions[syllableIndex][0] - 1;
      ++syllableIndex;
      for (let j = 1; j <= newCharLen; j++) {
        positions.push([i - (shift - j), shift - j]);
      }
      shift -= newCharLen;
      shiftOrigin += newCharLen;
    }
    return p8;
  });
  positions.push([normalized.length, shift]);
  return [normalized, positions, hasDiacritics];
}
function getOriginalIndex(diffs, pos, len) {
  if (!diffs) {
    return [pos, len];
  }
  const start = pos;
  const end = pos + len;
  let i = (0, _ui_utils.binarySearchFirstItem)(diffs, x => x[0] >= start);
  if (diffs[i][0] > start) {
    --i;
  }
  let j = (0, _ui_utils.binarySearchFirstItem)(diffs, x => x[0] >= end, i);
  if (diffs[j][0] > end) {
    --j;
  }
  return [start + diffs[i][1], len + diffs[j][1] - diffs[i][1]];
}
var _updateMatchesCountOnProgress = /*#__PURE__*/new WeakMap();
var _visitedPagesCount = /*#__PURE__*/new WeakMap();
var _onFind = /*#__PURE__*/new WeakSet();
var _reset = /*#__PURE__*/new WeakSet();
var _query = /*#__PURE__*/new WeakMap();
var _shouldDirtyMatch = /*#__PURE__*/new WeakSet();
var _isEntireWord = /*#__PURE__*/new WeakSet();
var _calculateRegExpMatch = /*#__PURE__*/new WeakSet();
var _convertToRegExpString = /*#__PURE__*/new WeakSet();
var _calculateMatch = /*#__PURE__*/new WeakSet();
var _extractText = /*#__PURE__*/new WeakSet();
var _updatePage = /*#__PURE__*/new WeakSet();
var _updateAllPages = /*#__PURE__*/new WeakSet();
var _nextMatch = /*#__PURE__*/new WeakSet();
var _matchesReady = /*#__PURE__*/new WeakSet();
var _nextPageMatch = /*#__PURE__*/new WeakSet();
var _advanceOffsetPage = /*#__PURE__*/new WeakSet();
var _updateMatch = /*#__PURE__*/new WeakSet();
var _onFindBarClose = /*#__PURE__*/new WeakSet();
var _requestMatchesCount = /*#__PURE__*/new WeakSet();
var _updateUIResultsCount = /*#__PURE__*/new WeakSet();
var _updateUIState = /*#__PURE__*/new WeakSet();
class PDFFindController {
  constructor(_ref) {
    let _linkService = _ref.linkService,
      eventBus = _ref.eventBus,
      _ref$updateMatchesCou = _ref.updateMatchesCountOnProgress,
      updateMatchesCountOnProgress = _ref$updateMatchesCou === void 0 ? true : _ref$updateMatchesCou;
    _classPrivateMethodInitSpec(this, _updateUIState);
    _classPrivateMethodInitSpec(this, _updateUIResultsCount);
    _classPrivateMethodInitSpec(this, _requestMatchesCount);
    _classPrivateMethodInitSpec(this, _onFindBarClose);
    _classPrivateMethodInitSpec(this, _updateMatch);
    _classPrivateMethodInitSpec(this, _advanceOffsetPage);
    _classPrivateMethodInitSpec(this, _nextPageMatch);
    _classPrivateMethodInitSpec(this, _matchesReady);
    _classPrivateMethodInitSpec(this, _nextMatch);
    _classPrivateMethodInitSpec(this, _updateAllPages);
    _classPrivateMethodInitSpec(this, _updatePage);
    _classPrivateMethodInitSpec(this, _extractText);
    _classPrivateMethodInitSpec(this, _calculateMatch);
    _classPrivateMethodInitSpec(this, _convertToRegExpString);
    _classPrivateMethodInitSpec(this, _calculateRegExpMatch);
    _classPrivateMethodInitSpec(this, _isEntireWord);
    _classPrivateMethodInitSpec(this, _shouldDirtyMatch);
    _classPrivateFieldInitSpec(this, _query, {
      get: _get_query,
      set: void 0
    });
    _classPrivateMethodInitSpec(this, _reset);
    _classPrivateMethodInitSpec(this, _onFind);
    _classPrivateFieldInitSpec(this, _updateMatchesCountOnProgress, {
      writable: true,
      value: true
    });
    _classPrivateFieldInitSpec(this, _visitedPagesCount, {
      writable: true,
      value: 0
    });
    this._linkService = _linkService;
    this._eventBus = eventBus;
    _classPrivateFieldSet(this, _updateMatchesCountOnProgress, updateMatchesCountOnProgress);
    _classPrivateMethodGet(this, _reset, _reset2).call(this);
    eventBus._on("find", _classPrivateMethodGet(this, _onFind, _onFind2).bind(this));
    eventBus._on("findbarclose", _classPrivateMethodGet(this, _onFindBarClose, _onFindBarClose2).bind(this));
  }
  get highlightMatches() {
    return this._highlightMatches;
  }
  get pageMatches() {
    return this._pageMatches;
  }
  get pageMatchesLength() {
    return this._pageMatchesLength;
  }
  get selected() {
    return this._selected;
  }
  get state() {
    return this._state;
  }
  setDocument(pdfDocument) {
    if (this._pdfDocument) {
      _classPrivateMethodGet(this, _reset, _reset2).call(this);
    }
    if (!pdfDocument) {
      return;
    }
    this._pdfDocument = pdfDocument;
    this._firstPageCapability.resolve();
  }
  scrollMatchIntoView(_ref2) {
    let _ref2$element = _ref2.element,
      element = _ref2$element === void 0 ? null : _ref2$element,
      _ref2$selectedLeft = _ref2.selectedLeft,
      selectedLeft = _ref2$selectedLeft === void 0 ? 0 : _ref2$selectedLeft,
      _ref2$pageIndex = _ref2.pageIndex,
      pageIndex = _ref2$pageIndex === void 0 ? -1 : _ref2$pageIndex,
      _ref2$matchIndex = _ref2.matchIndex,
      matchIndex = _ref2$matchIndex === void 0 ? -1 : _ref2$matchIndex;
    if (!this._scrollMatches || !element) {
      return;
    } else if (matchIndex === -1 || matchIndex !== this._selected.matchIdx) {
      return;
    } else if (pageIndex === -1 || pageIndex !== this._selected.pageIdx) {
      return;
    }
    this._scrollMatches = false;
    const spot = {
      top: MATCH_SCROLL_OFFSET_TOP,
      left: selectedLeft + MATCH_SCROLL_OFFSET_LEFT
    };
    (0, _ui_utils.scrollIntoView)(element, spot, true);
  }
}
exports.PDFFindController = PDFFindController;
function _onFind2(state) {
  if (!state) {
    return;
  }
  const pdfDocument = this._pdfDocument;
  const type = state.type;
  if (this._state === null || _classPrivateMethodGet(this, _shouldDirtyMatch, _shouldDirtyMatch2).call(this, state)) {
    this._dirtyMatch = true;
  }
  this._state = state;
  if (type !== "highlightallchange") {
    _classPrivateMethodGet(this, _updateUIState, _updateUIState2).call(this, FindState.PENDING);
  }
  this._firstPageCapability.promise.then(() => {
    if (!this._pdfDocument || pdfDocument && this._pdfDocument !== pdfDocument) {
      return;
    }
    _classPrivateMethodGet(this, _extractText, _extractText2).call(this);
    const findbarClosed = !this._highlightMatches;
    const pendingTimeout = !!this._findTimeout;
    if (this._findTimeout) {
      clearTimeout(this._findTimeout);
      this._findTimeout = null;
    }
    if (!type) {
      this._findTimeout = setTimeout(() => {
        _classPrivateMethodGet(this, _nextMatch, _nextMatch2).call(this);
        this._findTimeout = null;
      }, FIND_TIMEOUT);
    } else if (this._dirtyMatch) {
      _classPrivateMethodGet(this, _nextMatch, _nextMatch2).call(this);
    } else if (type === "again") {
      _classPrivateMethodGet(this, _nextMatch, _nextMatch2).call(this);
      if (findbarClosed && this._state.highlightAll) {
        _classPrivateMethodGet(this, _updateAllPages, _updateAllPages2).call(this);
      }
    } else if (type === "highlightallchange") {
      if (pendingTimeout) {
        _classPrivateMethodGet(this, _nextMatch, _nextMatch2).call(this);
      } else {
        this._highlightMatches = true;
      }
      _classPrivateMethodGet(this, _updateAllPages, _updateAllPages2).call(this);
    } else {
      _classPrivateMethodGet(this, _nextMatch, _nextMatch2).call(this);
    }
  });
}
function _reset2() {
  this._highlightMatches = false;
  this._scrollMatches = false;
  this._pdfDocument = null;
  this._pageMatches = [];
  this._pageMatchesLength = [];
  _classPrivateFieldSet(this, _visitedPagesCount, 0);
  this._state = null;
  this._selected = {
    pageIdx: -1,
    matchIdx: -1
  };
  this._offset = {
    pageIdx: null,
    matchIdx: null,
    wrapped: false
  };
  this._extractTextPromises = [];
  this._pageContents = [];
  this._pageDiffs = [];
  this._hasDiacritics = [];
  this._matchesCountTotal = 0;
  this._pagesToSearch = null;
  this._pendingFindMatches = new Set();
  this._resumePageIdx = null;
  this._dirtyMatch = false;
  clearTimeout(this._findTimeout);
  this._findTimeout = null;
  this._firstPageCapability = (0, _pdfjsLib.createPromiseCapability)();
}
function _get_query() {
  if (this._state.query !== this._rawQuery) {
    this._rawQuery = this._state.query;
    var _normalize = normalize(this._state.query);
    var _normalize2 = _slicedToArray(_normalize, 1);
    this._normalizedQuery = _normalize2[0];
  }
  return this._normalizedQuery;
}
function _shouldDirtyMatch2(state) {
  if (state.query !== this._state.query) {
    return true;
  }
  switch (state.type) {
    case "again":
      const pageNumber = this._selected.pageIdx + 1;
      const linkService = this._linkService;
      if (pageNumber >= 1 && pageNumber <= linkService.pagesCount && pageNumber !== linkService.page && !linkService.isPageVisible(pageNumber)) {
        return true;
      }
      return false;
    case "highlightallchange":
      return false;
  }
  return true;
}
function _isEntireWord2(content, startIdx, length) {
  let match = content.slice(0, startIdx).match(NOT_DIACRITIC_FROM_END_REG_EXP);
  if (match) {
    const first = content.charCodeAt(startIdx);
    const limit = match[1].charCodeAt(0);
    if ((0, _pdf_find_utils.getCharacterType)(first) === (0, _pdf_find_utils.getCharacterType)(limit)) {
      return false;
    }
  }
  match = content.slice(startIdx + length).match(NOT_DIACRITIC_FROM_START_REG_EXP);
  if (match) {
    const last = content.charCodeAt(startIdx + length - 1);
    const limit = match[1].charCodeAt(0);
    if ((0, _pdf_find_utils.getCharacterType)(last) === (0, _pdf_find_utils.getCharacterType)(limit)) {
      return false;
    }
  }
  return true;
}
function _calculateRegExpMatch2(query, entireWord, pageIndex, pageContent) {
  const matches = this._pageMatches[pageIndex] = [];
  const matchesLength = this._pageMatchesLength[pageIndex] = [];
  if (!query) {
    return;
  }
  const diffs = this._pageDiffs[pageIndex];
  let match;
  while ((match = query.exec(pageContent)) !== null) {
    if (entireWord && !_classPrivateMethodGet(this, _isEntireWord, _isEntireWord2).call(this, pageContent, match.index, match[0].length)) {
      continue;
    }
    const _getOriginalIndex = getOriginalIndex(diffs, match.index, match[0].length),
      _getOriginalIndex2 = _slicedToArray(_getOriginalIndex, 2),
      matchPos = _getOriginalIndex2[0],
      matchLen = _getOriginalIndex2[1];
    if (matchLen) {
      matches.push(matchPos);
      matchesLength.push(matchLen);
    }
  }
}
function _convertToRegExpString2(query, hasDiacritics) {
  const matchDiacritics = this._state.matchDiacritics;
  let isUnicode = false;
  query = query.replace(SPECIAL_CHARS_REG_EXP, (match, p1, p2, p3, p4, p5) => {
    if (p1) {
      return `[ ]*\\${p1}[ ]*`;
    }
    if (p2) {
      return `[ ]*${p2}[ ]*`;
    }
    if (p3) {
      return "[ ]+";
    }
    if (matchDiacritics) {
      return p4 || p5;
    }
    if (p4) {
      return DIACRITICS_EXCEPTION.has(p4.charCodeAt(0)) ? p4 : "";
    }
    if (hasDiacritics) {
      isUnicode = true;
      return `${p5}\\p{M}*`;
    }
    return p5;
  });
  const trailingSpaces = "[ ]*";
  if (query.endsWith(trailingSpaces)) {
    query = query.slice(0, query.length - trailingSpaces.length);
  }
  if (matchDiacritics) {
    if (hasDiacritics) {
      DIACRITICS_EXCEPTION_STR || (DIACRITICS_EXCEPTION_STR = String.fromCharCode(...DIACRITICS_EXCEPTION));
      isUnicode = true;
      query = `${query}(?=[${DIACRITICS_EXCEPTION_STR}]|[^\\p{M}]|$)`;
    }
  }
  return [isUnicode, query];
}
function _calculateMatch2(pageIndex) {
  var _this$visitedPagesCou;
  let query = _classPrivateFieldGet(this, _query);
  if (!query) {
    return;
  }
  const _this$_state = this._state,
    caseSensitive = _this$_state.caseSensitive,
    entireWord = _this$_state.entireWord,
    phraseSearch = _this$_state.phraseSearch;
  const pageContent = this._pageContents[pageIndex];
  const hasDiacritics = this._hasDiacritics[pageIndex];
  let isUnicode = false;
  if (phraseSearch) {
    var _classPrivateMethodGe = _classPrivateMethodGet(this, _convertToRegExpString, _convertToRegExpString2).call(this, query, hasDiacritics);
    var _classPrivateMethodGe2 = _slicedToArray(_classPrivateMethodGe, 2);
    isUnicode = _classPrivateMethodGe2[0];
    query = _classPrivateMethodGe2[1];
  } else {
    const match = query.match(/\S+/g);
    if (match) {
      query = match.sort().reverse().map(q => {
        const _classPrivateMethodGe3 = _classPrivateMethodGet(this, _convertToRegExpString, _convertToRegExpString2).call(this, q, hasDiacritics),
          _classPrivateMethodGe4 = _slicedToArray(_classPrivateMethodGe3, 2),
          isUnicodePart = _classPrivateMethodGe4[0],
          queryPart = _classPrivateMethodGe4[1];
        isUnicode || (isUnicode = isUnicodePart);
        return `(${queryPart})`;
      }).join("|");
    }
  }
  const flags = `g${isUnicode ? "u" : ""}${caseSensitive ? "" : "i"}`;
  query = query ? new RegExp(query, flags) : null;
  _classPrivateMethodGet(this, _calculateRegExpMatch, _calculateRegExpMatch2).call(this, query, entireWord, pageIndex, pageContent);
  if (this._state.highlightAll) {
    _classPrivateMethodGet(this, _updatePage, _updatePage2).call(this, pageIndex);
  }
  if (this._resumePageIdx === pageIndex) {
    this._resumePageIdx = null;
    _classPrivateMethodGet(this, _nextPageMatch, _nextPageMatch2).call(this);
  }
  const pageMatchesCount = this._pageMatches[pageIndex].length;
  this._matchesCountTotal += pageMatchesCount;
  if (_classPrivateFieldGet(this, _updateMatchesCountOnProgress)) {
    if (pageMatchesCount > 0) {
      _classPrivateMethodGet(this, _updateUIResultsCount, _updateUIResultsCount2).call(this);
    }
  } else if (_classPrivateFieldSet(this, _visitedPagesCount, (_this$visitedPagesCou = _classPrivateFieldGet(this, _visitedPagesCount), ++_this$visitedPagesCou)) === this._linkService.pagesCount) {
    _classPrivateMethodGet(this, _updateUIResultsCount, _updateUIResultsCount2).call(this);
  }
}
function _extractText2() {
  if (this._extractTextPromises.length > 0) {
    return;
  }
  let promise = Promise.resolve();
  for (let i = 0, ii = this._linkService.pagesCount; i < ii; i++) {
    const extractTextCapability = (0, _pdfjsLib.createPromiseCapability)();
    this._extractTextPromises[i] = extractTextCapability.promise;
    promise = promise.then(() => {
      return this._pdfDocument.getPage(i + 1).then(pdfPage => {
        return pdfPage.getTextContent();
      }).then(textContent => {
        const strBuf = [];
        var _iterator2 = _createForOfIteratorHelper(textContent.items),
          _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            const textItem = _step2.value;
            strBuf.push(textItem.str);
            if (textItem.hasEOL) {
              strBuf.push("\n");
            }
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
        var _normalize3 = normalize(strBuf.join(""));
        var _normalize4 = _slicedToArray(_normalize3, 3);
        this._pageContents[i] = _normalize4[0];
        this._pageDiffs[i] = _normalize4[1];
        this._hasDiacritics[i] = _normalize4[2];
        extractTextCapability.resolve();
      }, reason => {
        console.error(`Unable to get text content for page ${i + 1}`, reason);
        this._pageContents[i] = "";
        this._pageDiffs[i] = null;
        this._hasDiacritics[i] = false;
        extractTextCapability.resolve();
      });
    });
  }
}
function _updatePage2(index) {
  if (this._scrollMatches && this._selected.pageIdx === index) {
    this._linkService.page = index + 1;
  }
  this._eventBus.dispatch("updatetextlayermatches", {
    source: this,
    pageIndex: index
  });
}
function _updateAllPages2() {
  this._eventBus.dispatch("updatetextlayermatches", {
    source: this,
    pageIndex: -1
  });
}
function _nextMatch2() {
  const previous = this._state.findPrevious;
  const currentPageIndex = this._linkService.page - 1;
  const numPages = this._linkService.pagesCount;
  this._highlightMatches = true;
  if (this._dirtyMatch) {
    this._dirtyMatch = false;
    this._selected.pageIdx = this._selected.matchIdx = -1;
    this._offset.pageIdx = currentPageIndex;
    this._offset.matchIdx = null;
    this._offset.wrapped = false;
    this._resumePageIdx = null;
    this._pageMatches.length = 0;
    this._pageMatchesLength.length = 0;
    _classPrivateFieldSet(this, _visitedPagesCount, 0);
    this._matchesCountTotal = 0;
    _classPrivateMethodGet(this, _updateAllPages, _updateAllPages2).call(this);
    for (let i = 0; i < numPages; i++) {
      if (this._pendingFindMatches.has(i)) {
        continue;
      }
      this._pendingFindMatches.add(i);
      this._extractTextPromises[i].then(() => {
        this._pendingFindMatches.delete(i);
        _classPrivateMethodGet(this, _calculateMatch, _calculateMatch2).call(this, i);
      });
    }
  }
  if (!_classPrivateFieldGet(this, _query)) {
    _classPrivateMethodGet(this, _updateUIState, _updateUIState2).call(this, FindState.FOUND);
    return;
  }
  if (this._resumePageIdx) {
    return;
  }
  const offset = this._offset;
  this._pagesToSearch = numPages;
  if (offset.matchIdx !== null) {
    const numPageMatches = this._pageMatches[offset.pageIdx].length;
    if (!previous && offset.matchIdx + 1 < numPageMatches || previous && offset.matchIdx > 0) {
      offset.matchIdx = previous ? offset.matchIdx - 1 : offset.matchIdx + 1;
      _classPrivateMethodGet(this, _updateMatch, _updateMatch2).call(this, true);
      return;
    }
    _classPrivateMethodGet(this, _advanceOffsetPage, _advanceOffsetPage2).call(this, previous);
  }
  _classPrivateMethodGet(this, _nextPageMatch, _nextPageMatch2).call(this);
}
function _matchesReady2(matches) {
  const offset = this._offset;
  const numMatches = matches.length;
  const previous = this._state.findPrevious;
  if (numMatches) {
    offset.matchIdx = previous ? numMatches - 1 : 0;
    _classPrivateMethodGet(this, _updateMatch, _updateMatch2).call(this, true);
    return true;
  }
  _classPrivateMethodGet(this, _advanceOffsetPage, _advanceOffsetPage2).call(this, previous);
  if (offset.wrapped) {
    offset.matchIdx = null;
    if (this._pagesToSearch < 0) {
      _classPrivateMethodGet(this, _updateMatch, _updateMatch2).call(this, false);
      return true;
    }
  }
  return false;
}
function _nextPageMatch2() {
  if (this._resumePageIdx !== null) {
    console.error("There can only be one pending page.");
  }
  let matches = null;
  do {
    const pageIdx = this._offset.pageIdx;
    matches = this._pageMatches[pageIdx];
    if (!matches) {
      this._resumePageIdx = pageIdx;
      break;
    }
  } while (!_classPrivateMethodGet(this, _matchesReady, _matchesReady2).call(this, matches));
}
function _advanceOffsetPage2(previous) {
  const offset = this._offset;
  const numPages = this._linkService.pagesCount;
  offset.pageIdx = previous ? offset.pageIdx - 1 : offset.pageIdx + 1;
  offset.matchIdx = null;
  this._pagesToSearch--;
  if (offset.pageIdx >= numPages || offset.pageIdx < 0) {
    offset.pageIdx = previous ? numPages - 1 : 0;
    offset.wrapped = true;
  }
}
function _updateMatch2() {
  let found = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  let state = FindState.NOT_FOUND;
  const wrapped = this._offset.wrapped;
  this._offset.wrapped = false;
  if (found) {
    const previousPage = this._selected.pageIdx;
    this._selected.pageIdx = this._offset.pageIdx;
    this._selected.matchIdx = this._offset.matchIdx;
    state = wrapped ? FindState.WRAPPED : FindState.FOUND;
    if (previousPage !== -1 && previousPage !== this._selected.pageIdx) {
      _classPrivateMethodGet(this, _updatePage, _updatePage2).call(this, previousPage);
    }
  }
  _classPrivateMethodGet(this, _updateUIState, _updateUIState2).call(this, state, this._state.findPrevious);
  if (this._selected.pageIdx !== -1) {
    this._scrollMatches = true;
    _classPrivateMethodGet(this, _updatePage, _updatePage2).call(this, this._selected.pageIdx);
  }
}
function _onFindBarClose2(evt) {
  const pdfDocument = this._pdfDocument;
  this._firstPageCapability.promise.then(() => {
    if (!this._pdfDocument || pdfDocument && this._pdfDocument !== pdfDocument) {
      return;
    }
    if (this._findTimeout) {
      clearTimeout(this._findTimeout);
      this._findTimeout = null;
    }
    if (this._resumePageIdx) {
      this._resumePageIdx = null;
      this._dirtyMatch = true;
    }
    _classPrivateMethodGet(this, _updateUIState, _updateUIState2).call(this, FindState.FOUND);
    this._highlightMatches = false;
    _classPrivateMethodGet(this, _updateAllPages, _updateAllPages2).call(this);
  });
}
function _requestMatchesCount2() {
  const _this$_selected = this._selected,
    pageIdx = _this$_selected.pageIdx,
    matchIdx = _this$_selected.matchIdx;
  let current = 0,
    total = this._matchesCountTotal;
  if (matchIdx !== -1) {
    for (let i = 0; i < pageIdx; i++) {
      var _this$_pageMatches$i;
      current += ((_this$_pageMatches$i = this._pageMatches[i]) === null || _this$_pageMatches$i === void 0 ? void 0 : _this$_pageMatches$i.length) || 0;
    }
    current += matchIdx + 1;
  }
  if (current < 1 || current > total) {
    current = total = 0;
  }
  return {
    current,
    total
  };
}
function _updateUIResultsCount2() {
  this._eventBus.dispatch("updatefindmatchescount", {
    source: this,
    matchesCount: _classPrivateMethodGet(this, _requestMatchesCount, _requestMatchesCount2).call(this)
  });
}
function _updateUIState2(state) {
  var _this$_state$query, _this$_state2;
  let previous = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  if (!_classPrivateFieldGet(this, _updateMatchesCountOnProgress) && (_classPrivateFieldGet(this, _visitedPagesCount) !== this._linkService.pagesCount || state === FindState.PENDING)) {
    return;
  }
  this._eventBus.dispatch("updatefindcontrolstate", {
    source: this,
    state,
    previous,
    matchesCount: _classPrivateMethodGet(this, _requestMatchesCount, _requestMatchesCount2).call(this),
    rawQuery: (_this$_state$query = (_this$_state2 = this._state) === null || _this$_state2 === void 0 ? void 0 : _this$_state2.query) !== null && _this$_state$query !== void 0 ? _this$_state$query : null
  });
}

/***/ }),
/* 19 */
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.CharacterType = void 0;
exports.getCharacterType = getCharacterType;
const CharacterType = {
  SPACE: 0,
  ALPHA_LETTER: 1,
  PUNCT: 2,
  HAN_LETTER: 3,
  KATAKANA_LETTER: 4,
  HIRAGANA_LETTER: 5,
  HALFWIDTH_KATAKANA_LETTER: 6,
  THAI_LETTER: 7
};
exports.CharacterType = CharacterType;
function isAlphabeticalScript(charCode) {
  return charCode < 0x2e80;
}
function isAscii(charCode) {
  return (charCode & 0xff80) === 0;
}
function isAsciiAlpha(charCode) {
  return charCode >= 0x61 && charCode <= 0x7a || charCode >= 0x41 && charCode <= 0x5a;
}
function isAsciiDigit(charCode) {
  return charCode >= 0x30 && charCode <= 0x39;
}
function isAsciiSpace(charCode) {
  return charCode === 0x20 || charCode === 0x09 || charCode === 0x0d || charCode === 0x0a;
}
function isHan(charCode) {
  return charCode >= 0x3400 && charCode <= 0x9fff || charCode >= 0xf900 && charCode <= 0xfaff;
}
function isKatakana(charCode) {
  return charCode >= 0x30a0 && charCode <= 0x30ff;
}
function isHiragana(charCode) {
  return charCode >= 0x3040 && charCode <= 0x309f;
}
function isHalfwidthKatakana(charCode) {
  return charCode >= 0xff60 && charCode <= 0xff9f;
}
function isThai(charCode) {
  return (charCode & 0xff80) === 0x0e00;
}
function getCharacterType(charCode) {
  if (isAlphabeticalScript(charCode)) {
    if (isAscii(charCode)) {
      if (isAsciiSpace(charCode)) {
        return CharacterType.SPACE;
      } else if (isAsciiAlpha(charCode) || isAsciiDigit(charCode) || charCode === 0x5f) {
        return CharacterType.ALPHA_LETTER;
      }
      return CharacterType.PUNCT;
    } else if (isThai(charCode)) {
      return CharacterType.THAI_LETTER;
    } else if (charCode === 0xa0) {
      return CharacterType.SPACE;
    }
    return CharacterType.ALPHA_LETTER;
  }
  if (isHan(charCode)) {
    return CharacterType.HAN_LETTER;
  } else if (isKatakana(charCode)) {
    return CharacterType.KATAKANA_LETTER;
  } else if (isHiragana(charCode)) {
    return CharacterType.HIRAGANA_LETTER;
  } else if (isHalfwidthKatakana(charCode)) {
    return CharacterType.HALFWIDTH_KATAKANA_LETTER;
  }
  return CharacterType.ALPHA_LETTER;
}

/***/ }),
/* 20 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.PDFHistory = void 0;
exports.isDestArraysEqual = isDestArraysEqual;
exports.isDestHashesEqual = isDestHashesEqual;
var _ui_utils = __webpack_require__(3);
var _event_utils = __webpack_require__(6);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
const HASH_CHANGE_TIMEOUT = 1000;
const POSITION_UPDATED_THRESHOLD = 50;
const UPDATE_VIEWAREA_TIMEOUT = 1000;
function getCurrentHash() {
  return document.location.hash;
}
class PDFHistory {
  constructor(_ref) {
    let linkService = _ref.linkService,
      eventBus = _ref.eventBus;
    this.linkService = linkService;
    this.eventBus = eventBus;
    this._initialized = false;
    this._fingerprint = "";
    this.reset();
    this._boundEvents = null;
    this.eventBus._on("pagesinit", () => {
      this._isPagesLoaded = false;
      this.eventBus._on("pagesloaded", evt => {
        this._isPagesLoaded = !!evt.pagesCount;
      }, {
        once: true
      });
    });
  }
  initialize(_ref2) {
    let fingerprint = _ref2.fingerprint,
      _ref2$resetHistory = _ref2.resetHistory,
      resetHistory = _ref2$resetHistory === void 0 ? false : _ref2$resetHistory,
      _ref2$updateUrl = _ref2.updateUrl,
      updateUrl = _ref2$updateUrl === void 0 ? false : _ref2$updateUrl;
    if (!fingerprint || typeof fingerprint !== "string") {
      console.error('PDFHistory.initialize: The "fingerprint" must be a non-empty string.');
      return;
    }
    if (this._initialized) {
      this.reset();
    }
    const reInitialized = this._fingerprint !== "" && this._fingerprint !== fingerprint;
    this._fingerprint = fingerprint;
    this._updateUrl = updateUrl === true;
    this._initialized = true;
    this._bindEvents();
    const state = window.history.state;
    this._popStateInProgress = false;
    this._blockHashChange = 0;
    this._currentHash = getCurrentHash();
    this._numPositionUpdates = 0;
    this._uid = this._maxUid = 0;
    this._destination = null;
    this._position = null;
    if (!this._isValidState(state, true) || resetHistory) {
      const _this$_parseCurrentHa = this._parseCurrentHash(true),
        hash = _this$_parseCurrentHa.hash,
        page = _this$_parseCurrentHa.page,
        rotation = _this$_parseCurrentHa.rotation;
      if (!hash || reInitialized || resetHistory) {
        this._pushOrReplaceState(null, true);
        return;
      }
      this._pushOrReplaceState({
        hash,
        page,
        rotation
      }, true);
      return;
    }
    const destination = state.destination;
    this._updateInternalState(destination, state.uid, true);
    if (destination.rotation !== undefined) {
      this._initialRotation = destination.rotation;
    }
    if (destination.dest) {
      this._initialBookmark = JSON.stringify(destination.dest);
      this._destination.page = null;
    } else if (destination.hash) {
      this._initialBookmark = destination.hash;
    } else if (destination.page) {
      this._initialBookmark = `page=${destination.page}`;
    }
  }
  reset() {
    if (this._initialized) {
      this._pageHide();
      this._initialized = false;
      this._unbindEvents();
    }
    if (this._updateViewareaTimeout) {
      clearTimeout(this._updateViewareaTimeout);
      this._updateViewareaTimeout = null;
    }
    this._initialBookmark = null;
    this._initialRotation = null;
  }
  push(_ref3) {
    let _ref3$namedDest = _ref3.namedDest,
      namedDest = _ref3$namedDest === void 0 ? null : _ref3$namedDest,
      explicitDest = _ref3.explicitDest,
      pageNumber = _ref3.pageNumber;
    if (!this._initialized) {
      return;
    }
    if (namedDest && typeof namedDest !== "string") {
      console.error("PDFHistory.push: " + `"${namedDest}" is not a valid namedDest parameter.`);
      return;
    } else if (!Array.isArray(explicitDest)) {
      console.error("PDFHistory.push: " + `"${explicitDest}" is not a valid explicitDest parameter.`);
      return;
    } else if (!this._isValidPage(pageNumber)) {
      if (pageNumber !== null || this._destination) {
        console.error("PDFHistory.push: " + `"${pageNumber}" is not a valid pageNumber parameter.`);
        return;
      }
    }
    const hash = namedDest || JSON.stringify(explicitDest);
    if (!hash) {
      return;
    }
    let forceReplace = false;
    if (this._destination && (isDestHashesEqual(this._destination.hash, hash) || isDestArraysEqual(this._destination.dest, explicitDest))) {
      if (this._destination.page) {
        return;
      }
      forceReplace = true;
    }
    if (this._popStateInProgress && !forceReplace) {
      return;
    }
    this._pushOrReplaceState({
      dest: explicitDest,
      hash,
      page: pageNumber,
      rotation: this.linkService.rotation
    }, forceReplace);
    if (!this._popStateInProgress) {
      this._popStateInProgress = true;
      Promise.resolve().then(() => {
        this._popStateInProgress = false;
      });
    }
  }
  pushPage(pageNumber) {
    var _this$_destination;
    if (!this._initialized) {
      return;
    }
    if (!this._isValidPage(pageNumber)) {
      console.error(`PDFHistory.pushPage: "${pageNumber}" is not a valid page number.`);
      return;
    }
    if (((_this$_destination = this._destination) === null || _this$_destination === void 0 ? void 0 : _this$_destination.page) === pageNumber) {
      return;
    }
    if (this._popStateInProgress) {
      return;
    }
    this._pushOrReplaceState({
      dest: null,
      hash: `page=${pageNumber}`,
      page: pageNumber,
      rotation: this.linkService.rotation
    });
    if (!this._popStateInProgress) {
      this._popStateInProgress = true;
      Promise.resolve().then(() => {
        this._popStateInProgress = false;
      });
    }
  }
  pushCurrentPosition() {
    if (!this._initialized || this._popStateInProgress) {
      return;
    }
    this._tryPushCurrentPosition();
  }
  back() {
    if (!this._initialized || this._popStateInProgress) {
      return;
    }
    const state = window.history.state;
    if (this._isValidState(state) && state.uid > 0) {
      window.history.back();
    }
  }
  forward() {
    if (!this._initialized || this._popStateInProgress) {
      return;
    }
    const state = window.history.state;
    if (this._isValidState(state) && state.uid < this._maxUid) {
      window.history.forward();
    }
  }
  get popStateInProgress() {
    return this._initialized && (this._popStateInProgress || this._blockHashChange > 0);
  }
  get initialBookmark() {
    return this._initialized ? this._initialBookmark : null;
  }
  get initialRotation() {
    return this._initialized ? this._initialRotation : null;
  }
  _pushOrReplaceState(destination) {
    let forceReplace = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    const shouldReplace = forceReplace || !this._destination;
    const newState = {
      fingerprint: this._fingerprint,
      uid: shouldReplace ? this._uid : this._uid + 1,
      destination
    };
    this._updateInternalState(destination, newState.uid);
    let newUrl;
    if (this._updateUrl && destination !== null && destination !== void 0 && destination.hash) {
      const baseUrl = document.location.href.split("#")[0];
      if (!baseUrl.startsWith("file://")) {
        newUrl = `${baseUrl}#${destination.hash}`;
      }
    }
    if (shouldReplace) {
      window.history.replaceState(newState, "", newUrl);
    } else {
      window.history.pushState(newState, "", newUrl);
    }
  }
  _tryPushCurrentPosition() {
    let temporary = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    if (!this._position) {
      return;
    }
    let position = this._position;
    if (temporary) {
      position = Object.assign(Object.create(null), this._position);
      position.temporary = true;
    }
    if (!this._destination) {
      this._pushOrReplaceState(position);
      return;
    }
    if (this._destination.temporary) {
      this._pushOrReplaceState(position, true);
      return;
    }
    if (this._destination.hash === position.hash) {
      return;
    }
    if (!this._destination.page && (POSITION_UPDATED_THRESHOLD <= 0 || this._numPositionUpdates <= POSITION_UPDATED_THRESHOLD)) {
      return;
    }
    let forceReplace = false;
    if (this._destination.page >= position.first && this._destination.page <= position.page) {
      if (this._destination.dest !== undefined || !this._destination.first) {
        return;
      }
      forceReplace = true;
    }
    this._pushOrReplaceState(position, forceReplace);
  }
  _isValidPage(val) {
    return Number.isInteger(val) && val > 0 && val <= this.linkService.pagesCount;
  }
  _isValidState(state) {
    let checkReload = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    if (!state) {
      return false;
    }
    if (state.fingerprint !== this._fingerprint) {
      if (checkReload) {
        if (typeof state.fingerprint !== "string" || state.fingerprint.length !== this._fingerprint.length) {
          return false;
        }
        const _performance$getEntri = performance.getEntriesByType("navigation"),
          _performance$getEntri2 = _slicedToArray(_performance$getEntri, 1),
          perfEntry = _performance$getEntri2[0];
        if ((perfEntry === null || perfEntry === void 0 ? void 0 : perfEntry.type) !== "reload") {
          return false;
        }
      } else {
        return false;
      }
    }
    if (!Number.isInteger(state.uid) || state.uid < 0) {
      return false;
    }
    if (state.destination === null || typeof state.destination !== "object") {
      return false;
    }
    return true;
  }
  _updateInternalState(destination, uid) {
    let removeTemporary = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    if (this._updateViewareaTimeout) {
      clearTimeout(this._updateViewareaTimeout);
      this._updateViewareaTimeout = null;
    }
    if (removeTemporary && destination !== null && destination !== void 0 && destination.temporary) {
      delete destination.temporary;
    }
    this._destination = destination;
    this._uid = uid;
    this._maxUid = Math.max(this._maxUid, uid);
    this._numPositionUpdates = 0;
  }
  _parseCurrentHash() {
    let checkNameddest = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    const hash = unescape(getCurrentHash()).substring(1);
    const params = (0, _ui_utils.parseQueryString)(hash);
    const nameddest = params.get("nameddest") || "";
    let page = params.get("page") | 0;
    if (!this._isValidPage(page) || checkNameddest && nameddest.length > 0) {
      page = null;
    }
    return {
      hash,
      page,
      rotation: this.linkService.rotation
    };
  }
  _updateViewarea(_ref4) {
    let location = _ref4.location;
    if (this._updateViewareaTimeout) {
      clearTimeout(this._updateViewareaTimeout);
      this._updateViewareaTimeout = null;
    }
    this._position = {
      hash: location.pdfOpenParams.substring(1),
      page: this.linkService.page,
      first: location.pageNumber,
      rotation: location.rotation
    };
    if (this._popStateInProgress) {
      return;
    }
    if (POSITION_UPDATED_THRESHOLD > 0 && this._isPagesLoaded && this._destination && !this._destination.page) {
      this._numPositionUpdates++;
    }
    if (UPDATE_VIEWAREA_TIMEOUT > 0) {
      this._updateViewareaTimeout = setTimeout(() => {
        if (!this._popStateInProgress) {
          this._tryPushCurrentPosition(true);
        }
        this._updateViewareaTimeout = null;
      }, UPDATE_VIEWAREA_TIMEOUT);
    }
  }
  _popState(_ref5) {
    let state = _ref5.state;
    const newHash = getCurrentHash(),
      hashChanged = this._currentHash !== newHash;
    this._currentHash = newHash;
    if (!state) {
      this._uid++;
      const _this$_parseCurrentHa2 = this._parseCurrentHash(),
        hash = _this$_parseCurrentHa2.hash,
        page = _this$_parseCurrentHa2.page,
        rotation = _this$_parseCurrentHa2.rotation;
      this._pushOrReplaceState({
        hash,
        page,
        rotation
      }, true);
      return;
    }
    if (!this._isValidState(state)) {
      return;
    }
    this._popStateInProgress = true;
    if (hashChanged) {
      this._blockHashChange++;
      (0, _event_utils.waitOnEventOrTimeout)({
        target: window,
        name: "hashchange",
        delay: HASH_CHANGE_TIMEOUT
      }).then(() => {
        this._blockHashChange--;
      });
    }
    const destination = state.destination;
    this._updateInternalState(destination, state.uid, true);
    if ((0, _ui_utils.isValidRotation)(destination.rotation)) {
      this.linkService.rotation = destination.rotation;
    }
    if (destination.dest) {
      this.linkService.goToDestination(destination.dest);
    } else if (destination.hash) {
      this.linkService.setHash(destination.hash);
    } else if (destination.page) {
      this.linkService.page = destination.page;
    }
    Promise.resolve().then(() => {
      this._popStateInProgress = false;
    });
  }
  _pageHide() {
    if (!this._destination || this._destination.temporary) {
      this._tryPushCurrentPosition();
    }
  }
  _bindEvents() {
    if (this._boundEvents) {
      return;
    }
    this._boundEvents = {
      updateViewarea: this._updateViewarea.bind(this),
      popState: this._popState.bind(this),
      pageHide: this._pageHide.bind(this)
    };
    this.eventBus._on("updateviewarea", this._boundEvents.updateViewarea);
    window.addEventListener("popstate", this._boundEvents.popState);
    window.addEventListener("pagehide", this._boundEvents.pageHide);
  }
  _unbindEvents() {
    if (!this._boundEvents) {
      return;
    }
    this.eventBus._off("updateviewarea", this._boundEvents.updateViewarea);
    window.removeEventListener("popstate", this._boundEvents.popState);
    window.removeEventListener("pagehide", this._boundEvents.pageHide);
    this._boundEvents = null;
  }
}
exports.PDFHistory = PDFHistory;
function isDestHashesEqual(destHash, pushHash) {
  if (typeof destHash !== "string" || typeof pushHash !== "string") {
    return false;
  }
  if (destHash === pushHash) {
    return true;
  }
  const nameddest = (0, _ui_utils.parseQueryString)(destHash).get("nameddest");
  if (nameddest === pushHash) {
    return true;
  }
  return false;
}
function isDestArraysEqual(firstDest, secondDest) {
  function isEntryEqual(first, second) {
    if (typeof first !== typeof second) {
      return false;
    }
    if (Array.isArray(first) || Array.isArray(second)) {
      return false;
    }
    if (first !== null && typeof first === "object" && second !== null) {
      if (Object.keys(first).length !== Object.keys(second).length) {
        return false;
      }
      for (const key in first) {
        if (!isEntryEqual(first[key], second[key])) {
          return false;
        }
      }
      return true;
    }
    return first === second || Number.isNaN(first) && Number.isNaN(second);
  }
  if (!(Array.isArray(firstDest) && Array.isArray(secondDest))) {
    return false;
  }
  if (firstDest.length !== secondDest.length) {
    return false;
  }
  for (let i = 0, ii = firstDest.length; i < ii; i++) {
    if (!isEntryEqual(firstDest[i], secondDest[i])) {
      return false;
    }
  }
  return true;
}

/***/ }),
/* 21 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.PDFLayerViewer = void 0;
var _base_tree_viewer = __webpack_require__(13);
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }
function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }
var _updateLayers = /*#__PURE__*/new WeakSet();
class PDFLayerViewer extends _base_tree_viewer.BaseTreeViewer {
  constructor(options) {
    super(options);
    _classPrivateMethodInitSpec(this, _updateLayers);
    this.l10n = options.l10n;
    this.eventBus._on("optionalcontentconfigchanged", evt => {
      _classPrivateMethodGet(this, _updateLayers, _updateLayers2).call(this, evt.promise);
    });
    this.eventBus._on("resetlayers", () => {
      _classPrivateMethodGet(this, _updateLayers, _updateLayers2).call(this);
    });
    this.eventBus._on("togglelayerstree", this._toggleAllTreeItems.bind(this));
  }
  reset() {
    super.reset();
    this._optionalContentConfig = null;
    this._optionalContentHash = null;
  }
  _dispatchEvent(layersCount) {
    this.eventBus.dispatch("layersloaded", {
      source: this,
      layersCount
    });
  }
  _bindLink(element, _ref) {
    let groupId = _ref.groupId,
      input = _ref.input;
    const setVisibility = () => {
      this._optionalContentConfig.setVisibility(groupId, input.checked);
      this._optionalContentHash = this._optionalContentConfig.getHash();
      this.eventBus.dispatch("optionalcontentconfig", {
        source: this,
        promise: Promise.resolve(this._optionalContentConfig)
      });
    };
    element.onclick = evt => {
      if (evt.target === input) {
        setVisibility();
        return true;
      } else if (evt.target !== element) {
        return true;
      }
      input.checked = !input.checked;
      setVisibility();
      return false;
    };
  }
  _setNestedName(element, _ref2) {
    var _this = this;
    return _asyncToGenerator(function* () {
      let _ref2$name = _ref2.name,
        name = _ref2$name === void 0 ? null : _ref2$name;
      if (typeof name === "string") {
        element.textContent = _this._normalizeTextContent(name);
        return;
      }
      element.textContent = yield _this.l10n.get("additional_layers");
      element.style.fontStyle = "italic";
    })();
  }
  _addToggleButton(div, _ref3) {
    let _ref3$name = _ref3.name,
      name = _ref3$name === void 0 ? null : _ref3$name;
    super._addToggleButton(div, name === null);
  }
  _toggleAllTreeItems() {
    if (!this._optionalContentConfig) {
      return;
    }
    super._toggleAllTreeItems();
  }
  render(_ref4) {
    let optionalContentConfig = _ref4.optionalContentConfig,
      pdfDocument = _ref4.pdfDocument;
    if (this._optionalContentConfig) {
      this.reset();
    }
    this._optionalContentConfig = optionalContentConfig || null;
    this._pdfDocument = pdfDocument || null;
    const groups = optionalContentConfig === null || optionalContentConfig === void 0 ? void 0 : optionalContentConfig.getOrder();
    if (!groups) {
      this._dispatchEvent(0);
      return;
    }
    this._optionalContentHash = optionalContentConfig.getHash();
    const fragment = document.createDocumentFragment(),
      queue = [{
        parent: fragment,
        groups
      }];
    let layersCount = 0,
      hasAnyNesting = false;
    while (queue.length > 0) {
      const levelData = queue.shift();
      var _iterator = _createForOfIteratorHelper(levelData.groups),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          const groupId = _step.value;
          const div = document.createElement("div");
          div.className = "treeItem";
          const element = document.createElement("a");
          div.append(element);
          if (typeof groupId === "object") {
            hasAnyNesting = true;
            this._addToggleButton(div, groupId);
            this._setNestedName(element, groupId);
            const itemsDiv = document.createElement("div");
            itemsDiv.className = "treeItems";
            div.append(itemsDiv);
            queue.push({
              parent: itemsDiv,
              groups: groupId.order
            });
          } else {
            const group = optionalContentConfig.getGroup(groupId);
            const input = document.createElement("input");
            this._bindLink(element, {
              groupId,
              input
            });
            input.type = "checkbox";
            input.checked = group.visible;
            const label = document.createElement("label");
            label.textContent = this._normalizeTextContent(group.name);
            label.append(input);
            element.append(label);
            layersCount++;
          }
          levelData.parent.append(div);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
    this._finishRendering(fragment, layersCount, hasAnyNesting);
  }
}
exports.PDFLayerViewer = PDFLayerViewer;
function _updateLayers2() {
  return _updateLayers3.apply(this, arguments);
}
function _updateLayers3() {
  _updateLayers3 = _asyncToGenerator(function* () {
    let promise = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    if (!this._optionalContentConfig) {
      return;
    }
    const pdfDocument = this._pdfDocument;
    const optionalContentConfig = yield promise || pdfDocument.getOptionalContentConfig();
    if (pdfDocument !== this._pdfDocument) {
      return;
    }
    if (promise) {
      if (optionalContentConfig.getHash() === this._optionalContentHash) {
        return;
      }
    } else {
      this.eventBus.dispatch("optionalcontentconfig", {
        source: this,
        promise: Promise.resolve(optionalContentConfig)
      });
    }
    this.render({
      optionalContentConfig,
      pdfDocument: this._pdfDocument
    });
  });
  return _updateLayers3.apply(this, arguments);
}

/***/ }),
/* 22 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.PDFOutlineViewer = void 0;
var _base_tree_viewer = __webpack_require__(13);
var _pdfjsLib = __webpack_require__(4);
var _ui_utils = __webpack_require__(3);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
class PDFOutlineViewer extends _base_tree_viewer.BaseTreeViewer {
  constructor(options) {
    super(options);
    this.linkService = options.linkService;
    this.downloadManager = options.downloadManager;
    this.eventBus._on("toggleoutlinetree", this._toggleAllTreeItems.bind(this));
    this.eventBus._on("currentoutlineitem", this._currentOutlineItem.bind(this));
    this.eventBus._on("pagechanging", evt => {
      this._currentPageNumber = evt.pageNumber;
    });
    this.eventBus._on("pagesloaded", evt => {
      this._isPagesLoaded = !!evt.pagesCount;
      if (this._currentOutlineItemCapability && !this._currentOutlineItemCapability.settled) {
        this._currentOutlineItemCapability.resolve(this._isPagesLoaded);
      }
    });
    this.eventBus._on("sidebarviewchanged", evt => {
      this._sidebarView = evt.view;
    });
  }
  reset() {
    super.reset();
    this._outline = null;
    this._pageNumberToDestHashCapability = null;
    this._currentPageNumber = 1;
    this._isPagesLoaded = null;
    if (this._currentOutlineItemCapability && !this._currentOutlineItemCapability.settled) {
      this._currentOutlineItemCapability.resolve(false);
    }
    this._currentOutlineItemCapability = null;
  }
  _dispatchEvent(outlineCount) {
    var _this$_pdfDocument;
    this._currentOutlineItemCapability = (0, _pdfjsLib.createPromiseCapability)();
    if (outlineCount === 0 || (_this$_pdfDocument = this._pdfDocument) !== null && _this$_pdfDocument !== void 0 && _this$_pdfDocument.loadingParams.disableAutoFetch) {
      this._currentOutlineItemCapability.resolve(false);
    } else if (this._isPagesLoaded !== null) {
      this._currentOutlineItemCapability.resolve(this._isPagesLoaded);
    }
    this.eventBus.dispatch("outlineloaded", {
      source: this,
      outlineCount,
      currentOutlineItemPromise: this._currentOutlineItemCapability.promise
    });
  }
  _bindLink(element, _ref) {
    let url = _ref.url,
      newWindow = _ref.newWindow,
      action = _ref.action,
      attachment = _ref.attachment,
      dest = _ref.dest,
      setOCGState = _ref.setOCGState;
    const linkService = this.linkService;
    if (url) {
      linkService.addLinkAttributes(element, url, newWindow);
      return;
    }
    if (action) {
      element.href = linkService.getAnchorUrl("");
      element.onclick = () => {
        linkService.executeNamedAction(action);
        return false;
      };
      return;
    }
    if (attachment) {
      element.href = linkService.getAnchorUrl("");
      element.onclick = () => {
        this.downloadManager.openOrDownloadData(element, attachment.content, attachment.filename);
        return false;
      };
      return;
    }
    if (setOCGState) {
      element.href = linkService.getAnchorUrl("");
      element.onclick = () => {
        linkService.executeSetOCGState(setOCGState);
        return false;
      };
      return;
    }
    element.href = linkService.getDestinationHash(dest);
    element.onclick = evt => {
      this._updateCurrentTreeItem(evt.target.parentNode);
      if (dest) {
        linkService.goToDestination(dest);
      }
      return false;
    };
  }
  _setStyles(element, _ref2) {
    let bold = _ref2.bold,
      italic = _ref2.italic;
    if (bold) {
      element.style.fontWeight = "bold";
    }
    if (italic) {
      element.style.fontStyle = "italic";
    }
  }
  _addToggleButton(div, _ref3) {
    let count = _ref3.count,
      items = _ref3.items;
    let hidden = false;
    if (count < 0) {
      let totalCount = items.length;
      if (totalCount > 0) {
        const queue = [...items];
        while (queue.length > 0) {
          const _queue$shift = queue.shift(),
            nestedCount = _queue$shift.count,
            nestedItems = _queue$shift.items;
          if (nestedCount > 0 && nestedItems.length > 0) {
            totalCount += nestedItems.length;
            queue.push(...nestedItems);
          }
        }
      }
      if (Math.abs(count) === totalCount) {
        hidden = true;
      }
    }
    super._addToggleButton(div, hidden);
  }
  _toggleAllTreeItems() {
    if (!this._outline) {
      return;
    }
    super._toggleAllTreeItems();
  }
  render(_ref4) {
    let outline = _ref4.outline,
      pdfDocument = _ref4.pdfDocument;
    if (this._outline) {
      this.reset();
    }
    this._outline = outline || null;
    this._pdfDocument = pdfDocument || null;
    if (!outline) {
      this._dispatchEvent(0);
      return;
    }
    const fragment = document.createDocumentFragment();
    const queue = [{
      parent: fragment,
      items: outline
    }];
    let outlineCount = 0,
      hasAnyNesting = false;
    while (queue.length > 0) {
      const levelData = queue.shift();
      var _iterator = _createForOfIteratorHelper(levelData.items),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          const item = _step.value;
          const div = document.createElement("div");
          div.className = "treeItem";
          const element = document.createElement("a");
          this._bindLink(element, item);
          this._setStyles(element, item);
          element.textContent = this._normalizeTextContent(item.title);
          div.append(element);
          if (item.items.length > 0) {
            hasAnyNesting = true;
            this._addToggleButton(div, item);
            const itemsDiv = document.createElement("div");
            itemsDiv.className = "treeItems";
            div.append(itemsDiv);
            queue.push({
              parent: itemsDiv,
              items: item.items
            });
          }
          levelData.parent.append(div);
          outlineCount++;
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
    this._finishRendering(fragment, outlineCount, hasAnyNesting);
  }
  _currentOutlineItem() {
    var _this = this;
    return _asyncToGenerator(function* () {
      if (!_this._isPagesLoaded) {
        throw new Error("_currentOutlineItem: All pages have not been loaded.");
      }
      if (!_this._outline || !_this._pdfDocument) {
        return;
      }
      const pageNumberToDestHash = yield _this._getPageNumberToDestHash(_this._pdfDocument);
      if (!pageNumberToDestHash) {
        return;
      }
      _this._updateCurrentTreeItem(null);
      if (_this._sidebarView !== _ui_utils.SidebarView.OUTLINE) {
        return;
      }
      for (let i = _this._currentPageNumber; i > 0; i--) {
        const destHash = pageNumberToDestHash.get(i);
        if (!destHash) {
          continue;
        }
        const linkElement = _this.container.querySelector(`a[href="${destHash}"]`);
        if (!linkElement) {
          continue;
        }
        _this._scrollToCurrentTreeItem(linkElement.parentNode);
        break;
      }
    })();
  }
  _getPageNumberToDestHash(pdfDocument) {
    var _this2 = this;
    return _asyncToGenerator(function* () {
      if (_this2._pageNumberToDestHashCapability) {
        return _this2._pageNumberToDestHashCapability.promise;
      }
      _this2._pageNumberToDestHashCapability = (0, _pdfjsLib.createPromiseCapability)();
      const pageNumberToDestHash = new Map(),
        pageNumberNesting = new Map();
      const queue = [{
        nesting: 0,
        items: _this2._outline
      }];
      while (queue.length > 0) {
        const levelData = queue.shift(),
          currentNesting = levelData.nesting;
        var _iterator2 = _createForOfIteratorHelper(levelData.items),
          _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            const _step2$value = _step2.value,
              dest = _step2$value.dest,
              items = _step2$value.items;
            let explicitDest, pageNumber;
            if (typeof dest === "string") {
              explicitDest = yield pdfDocument.getDestination(dest);
              if (pdfDocument !== _this2._pdfDocument) {
                return null;
              }
            } else {
              explicitDest = dest;
            }
            if (Array.isArray(explicitDest)) {
              const _explicitDest = explicitDest,
                _explicitDest2 = _slicedToArray(_explicitDest, 1),
                destRef = _explicitDest2[0];
              if (typeof destRef === "object" && destRef !== null) {
                pageNumber = _this2.linkService._cachedPageNumber(destRef);
                if (!pageNumber) {
                  try {
                    pageNumber = (yield pdfDocument.getPageIndex(destRef)) + 1;
                    if (pdfDocument !== _this2._pdfDocument) {
                      return null;
                    }
                    _this2.linkService.cachePageRef(pageNumber, destRef);
                  } catch (ex) {}
                }
              } else if (Number.isInteger(destRef)) {
                pageNumber = destRef + 1;
              }
              if (Number.isInteger(pageNumber) && (!pageNumberToDestHash.has(pageNumber) || currentNesting > pageNumberNesting.get(pageNumber))) {
                const destHash = _this2.linkService.getDestinationHash(dest);
                pageNumberToDestHash.set(pageNumber, destHash);
                pageNumberNesting.set(pageNumber, currentNesting);
              }
            }
            if (items.length > 0) {
              queue.push({
                nesting: currentNesting + 1,
                items
              });
            }
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      }
      _this2._pageNumberToDestHashCapability.resolve(pageNumberToDestHash.size > 0 ? pageNumberToDestHash : null);
      return _this2._pageNumberToDestHashCapability.promise;
    })();
  }
}
exports.PDFOutlineViewer = PDFOutlineViewer;

/***/ }),
/* 23 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.PDFPresentationMode = void 0;
var _ui_utils = __webpack_require__(3);
var _pdfjsLib = __webpack_require__(4);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }
function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }
function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }
function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }
function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }
function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }
function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }
function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }
const DELAY_BEFORE_HIDING_CONTROLS = 3000;
const ACTIVE_SELECTOR = "pdfPresentationMode";
const CONTROLS_SELECTOR = "pdfPresentationModeControls";
const MOUSE_SCROLL_COOLDOWN_TIME = 50;
const PAGE_SWITCH_THRESHOLD = 0.1;
const SWIPE_MIN_DISTANCE_THRESHOLD = 50;
const SWIPE_ANGLE_THRESHOLD = Math.PI / 6;
var _state = /*#__PURE__*/new WeakMap();
var _args = /*#__PURE__*/new WeakMap();
var _mouseWheel = /*#__PURE__*/new WeakSet();
var _notifyStateChange = /*#__PURE__*/new WeakSet();
var _enter = /*#__PURE__*/new WeakSet();
var _exit = /*#__PURE__*/new WeakSet();
var _mouseDown = /*#__PURE__*/new WeakSet();
var _contextMenu = /*#__PURE__*/new WeakSet();
var _showControls = /*#__PURE__*/new WeakSet();
var _hideControls = /*#__PURE__*/new WeakSet();
var _resetMouseScrollState = /*#__PURE__*/new WeakSet();
var _touchSwipe = /*#__PURE__*/new WeakSet();
var _addWindowListeners = /*#__PURE__*/new WeakSet();
var _removeWindowListeners = /*#__PURE__*/new WeakSet();
var _fullscreenChange = /*#__PURE__*/new WeakSet();
var _addFullscreenChangeListeners = /*#__PURE__*/new WeakSet();
var _removeFullscreenChangeListeners = /*#__PURE__*/new WeakSet();
class PDFPresentationMode {
  constructor(_ref) {
    let container = _ref.container,
      pdfViewer = _ref.pdfViewer,
      eventBus = _ref.eventBus;
    _classPrivateMethodInitSpec(this, _removeFullscreenChangeListeners);
    _classPrivateMethodInitSpec(this, _addFullscreenChangeListeners);
    _classPrivateMethodInitSpec(this, _fullscreenChange);
    _classPrivateMethodInitSpec(this, _removeWindowListeners);
    _classPrivateMethodInitSpec(this, _addWindowListeners);
    _classPrivateMethodInitSpec(this, _touchSwipe);
    _classPrivateMethodInitSpec(this, _resetMouseScrollState);
    _classPrivateMethodInitSpec(this, _hideControls);
    _classPrivateMethodInitSpec(this, _showControls);
    _classPrivateMethodInitSpec(this, _contextMenu);
    _classPrivateMethodInitSpec(this, _mouseDown);
    _classPrivateMethodInitSpec(this, _exit);
    _classPrivateMethodInitSpec(this, _enter);
    _classPrivateMethodInitSpec(this, _notifyStateChange);
    _classPrivateMethodInitSpec(this, _mouseWheel);
    _classPrivateFieldInitSpec(this, _state, {
      writable: true,
      value: _ui_utils.PresentationModeState.UNKNOWN
    });
    _classPrivateFieldInitSpec(this, _args, {
      writable: true,
      value: null
    });
    this.container = container;
    this.pdfViewer = pdfViewer;
    this.eventBus = eventBus;
    this.contextMenuOpen = false;
    this.mouseScrollTimeStamp = 0;
    this.mouseScrollDelta = 0;
    this.touchSwipeState = null;
  }
  request() {
    var _this = this;
    return _asyncToGenerator(function* () {
      const container = _this.container,
        pdfViewer = _this.pdfViewer;
      if (_this.active || !pdfViewer.pagesCount || !container.requestFullscreen) {
        return false;
      }
      _classPrivateMethodGet(_this, _addFullscreenChangeListeners, _addFullscreenChangeListeners2).call(_this);
      _classPrivateMethodGet(_this, _notifyStateChange, _notifyStateChange2).call(_this, _ui_utils.PresentationModeState.CHANGING);
      const promise = container.requestFullscreen();
      _classPrivateFieldSet(_this, _args, {
        pageNumber: pdfViewer.currentPageNumber,
        scaleValue: pdfViewer.currentScaleValue,
        scrollMode: pdfViewer.scrollMode,
        spreadMode: null,
        annotationEditorMode: null
      });
      if (pdfViewer.spreadMode !== _ui_utils.SpreadMode.NONE && !(pdfViewer.pageViewsReady && pdfViewer.hasEqualPageSizes)) {
        console.warn("Ignoring Spread modes when entering PresentationMode, " + "since the document may contain varying page sizes.");
        _classPrivateFieldGet(_this, _args).spreadMode = pdfViewer.spreadMode;
      }
      if (pdfViewer.annotationEditorMode !== _pdfjsLib.AnnotationEditorType.DISABLE) {
        _classPrivateFieldGet(_this, _args).annotationEditorMode = pdfViewer.annotationEditorMode;
      }
      try {
        yield promise;
        pdfViewer.focus();
        return true;
      } catch (reason) {
        _classPrivateMethodGet(_this, _removeFullscreenChangeListeners, _removeFullscreenChangeListeners2).call(_this);
        _classPrivateMethodGet(_this, _notifyStateChange, _notifyStateChange2).call(_this, _ui_utils.PresentationModeState.NORMAL);
      }
      return false;
    })();
  }
  get active() {
    return _classPrivateFieldGet(this, _state) === _ui_utils.PresentationModeState.CHANGING || _classPrivateFieldGet(this, _state) === _ui_utils.PresentationModeState.FULLSCREEN;
  }
}
exports.PDFPresentationMode = PDFPresentationMode;
function _mouseWheel2(evt) {
  if (!this.active) {
    return;
  }
  evt.preventDefault();
  const delta = (0, _ui_utils.normalizeWheelEventDelta)(evt);
  const currentTime = Date.now();
  const storedTime = this.mouseScrollTimeStamp;
  if (currentTime > storedTime && currentTime - storedTime < MOUSE_SCROLL_COOLDOWN_TIME) {
    return;
  }
  if (this.mouseScrollDelta > 0 && delta < 0 || this.mouseScrollDelta < 0 && delta > 0) {
    _classPrivateMethodGet(this, _resetMouseScrollState, _resetMouseScrollState2).call(this);
  }
  this.mouseScrollDelta += delta;
  if (Math.abs(this.mouseScrollDelta) >= PAGE_SWITCH_THRESHOLD) {
    const totalDelta = this.mouseScrollDelta;
    _classPrivateMethodGet(this, _resetMouseScrollState, _resetMouseScrollState2).call(this);
    const success = totalDelta > 0 ? this.pdfViewer.previousPage() : this.pdfViewer.nextPage();
    if (success) {
      this.mouseScrollTimeStamp = currentTime;
    }
  }
}
function _notifyStateChange2(state) {
  _classPrivateFieldSet(this, _state, state);
  this.eventBus.dispatch("presentationmodechanged", {
    source: this,
    state
  });
}
function _enter2() {
  _classPrivateMethodGet(this, _notifyStateChange, _notifyStateChange2).call(this, _ui_utils.PresentationModeState.FULLSCREEN);
  this.container.classList.add(ACTIVE_SELECTOR);
  setTimeout(() => {
    this.pdfViewer.scrollMode = _ui_utils.ScrollMode.PAGE;
    if (_classPrivateFieldGet(this, _args).spreadMode !== null) {
      this.pdfViewer.spreadMode = _ui_utils.SpreadMode.NONE;
    }
    this.pdfViewer.currentPageNumber = _classPrivateFieldGet(this, _args).pageNumber;
    this.pdfViewer.currentScaleValue = "page-fit";
    if (_classPrivateFieldGet(this, _args).annotationEditorMode !== null) {
      this.pdfViewer.annotationEditorMode = _pdfjsLib.AnnotationEditorType.NONE;
    }
  }, 0);
  _classPrivateMethodGet(this, _addWindowListeners, _addWindowListeners2).call(this);
  _classPrivateMethodGet(this, _showControls, _showControls2).call(this);
  this.contextMenuOpen = false;
  window.getSelection().removeAllRanges();
}
function _exit2() {
  const pageNumber = this.pdfViewer.currentPageNumber;
  this.container.classList.remove(ACTIVE_SELECTOR);
  setTimeout(() => {
    _classPrivateMethodGet(this, _removeFullscreenChangeListeners, _removeFullscreenChangeListeners2).call(this);
    _classPrivateMethodGet(this, _notifyStateChange, _notifyStateChange2).call(this, _ui_utils.PresentationModeState.NORMAL);
    this.pdfViewer.scrollMode = _classPrivateFieldGet(this, _args).scrollMode;
    if (_classPrivateFieldGet(this, _args).spreadMode !== null) {
      this.pdfViewer.spreadMode = _classPrivateFieldGet(this, _args).spreadMode;
    }
    this.pdfViewer.currentScaleValue = _classPrivateFieldGet(this, _args).scaleValue;
    this.pdfViewer.currentPageNumber = pageNumber;
    if (_classPrivateFieldGet(this, _args).annotationEditorMode !== null) {
      this.pdfViewer.annotationEditorMode = _classPrivateFieldGet(this, _args).annotationEditorMode;
    }
    _classPrivateFieldSet(this, _args, null);
  }, 0);
  _classPrivateMethodGet(this, _removeWindowListeners, _removeWindowListeners2).call(this);
  _classPrivateMethodGet(this, _hideControls, _hideControls2).call(this);
  _classPrivateMethodGet(this, _resetMouseScrollState, _resetMouseScrollState2).call(this);
  this.contextMenuOpen = false;
}
function _mouseDown2(evt) {
  var _evt$target$parentNod;
  if (this.contextMenuOpen) {
    this.contextMenuOpen = false;
    evt.preventDefault();
    return;
  }
  if (evt.button !== 0) {
    return;
  }
  if (evt.target.href && (_evt$target$parentNod = evt.target.parentNode) !== null && _evt$target$parentNod !== void 0 && _evt$target$parentNod.hasAttribute("data-internal-link")) {
    return;
  }
  evt.preventDefault();
  if (evt.shiftKey) {
    this.pdfViewer.previousPage();
  } else {
    this.pdfViewer.nextPage();
  }
}
function _contextMenu2() {
  this.contextMenuOpen = true;
}
function _showControls2() {
  if (this.controlsTimeout) {
    clearTimeout(this.controlsTimeout);
  } else {
    this.container.classList.add(CONTROLS_SELECTOR);
  }
  this.controlsTimeout = setTimeout(() => {
    this.container.classList.remove(CONTROLS_SELECTOR);
    delete this.controlsTimeout;
  }, DELAY_BEFORE_HIDING_CONTROLS);
}
function _hideControls2() {
  if (!this.controlsTimeout) {
    return;
  }
  clearTimeout(this.controlsTimeout);
  this.container.classList.remove(CONTROLS_SELECTOR);
  delete this.controlsTimeout;
}
function _resetMouseScrollState2() {
  this.mouseScrollTimeStamp = 0;
  this.mouseScrollDelta = 0;
}
function _touchSwipe2(evt) {
  if (!this.active) {
    return;
  }
  if (evt.touches.length > 1) {
    this.touchSwipeState = null;
    return;
  }
  switch (evt.type) {
    case "touchstart":
      this.touchSwipeState = {
        startX: evt.touches[0].pageX,
        startY: evt.touches[0].pageY,
        endX: evt.touches[0].pageX,
        endY: evt.touches[0].pageY
      };
      break;
    case "touchmove":
      if (this.touchSwipeState === null) {
        return;
      }
      this.touchSwipeState.endX = evt.touches[0].pageX;
      this.touchSwipeState.endY = evt.touches[0].pageY;
      evt.preventDefault();
      break;
    case "touchend":
      if (this.touchSwipeState === null) {
        return;
      }
      let delta = 0;
      const dx = this.touchSwipeState.endX - this.touchSwipeState.startX;
      const dy = this.touchSwipeState.endY - this.touchSwipeState.startY;
      const absAngle = Math.abs(Math.atan2(dy, dx));
      if (Math.abs(dx) > SWIPE_MIN_DISTANCE_THRESHOLD && (absAngle <= SWIPE_ANGLE_THRESHOLD || absAngle >= Math.PI - SWIPE_ANGLE_THRESHOLD)) {
        delta = dx;
      } else if (Math.abs(dy) > SWIPE_MIN_DISTANCE_THRESHOLD && Math.abs(absAngle - Math.PI / 2) <= SWIPE_ANGLE_THRESHOLD) {
        delta = dy;
      }
      if (delta > 0) {
        this.pdfViewer.previousPage();
      } else if (delta < 0) {
        this.pdfViewer.nextPage();
      }
      break;
  }
}
function _addWindowListeners2() {
  this.showControlsBind = _classPrivateMethodGet(this, _showControls, _showControls2).bind(this);
  this.mouseDownBind = _classPrivateMethodGet(this, _mouseDown, _mouseDown2).bind(this);
  this.mouseWheelBind = _classPrivateMethodGet(this, _mouseWheel, _mouseWheel2).bind(this);
  this.resetMouseScrollStateBind = _classPrivateMethodGet(this, _resetMouseScrollState, _resetMouseScrollState2).bind(this);
  this.contextMenuBind = _classPrivateMethodGet(this, _contextMenu, _contextMenu2).bind(this);
  this.touchSwipeBind = _classPrivateMethodGet(this, _touchSwipe, _touchSwipe2).bind(this);
  window.addEventListener("mousemove", this.showControlsBind);
  window.addEventListener("mousedown", this.mouseDownBind);
  window.addEventListener("wheel", this.mouseWheelBind, {
    passive: false
  });
  window.addEventListener("keydown", this.resetMouseScrollStateBind);
  window.addEventListener("contextmenu", this.contextMenuBind);
  window.addEventListener("touchstart", this.touchSwipeBind);
  window.addEventListener("touchmove", this.touchSwipeBind);
  window.addEventListener("touchend", this.touchSwipeBind);
}
function _removeWindowListeners2() {
  window.removeEventListener("mousemove", this.showControlsBind);
  window.removeEventListener("mousedown", this.mouseDownBind);
  window.removeEventListener("wheel", this.mouseWheelBind, {
    passive: false
  });
  window.removeEventListener("keydown", this.resetMouseScrollStateBind);
  window.removeEventListener("contextmenu", this.contextMenuBind);
  window.removeEventListener("touchstart", this.touchSwipeBind);
  window.removeEventListener("touchmove", this.touchSwipeBind);
  window.removeEventListener("touchend", this.touchSwipeBind);
  delete this.showControlsBind;
  delete this.mouseDownBind;
  delete this.mouseWheelBind;
  delete this.resetMouseScrollStateBind;
  delete this.contextMenuBind;
  delete this.touchSwipeBind;
}
function _fullscreenChange2() {
  if (document.fullscreenElement) {
    _classPrivateMethodGet(this, _enter, _enter2).call(this);
  } else {
    _classPrivateMethodGet(this, _exit, _exit2).call(this);
  }
}
function _addFullscreenChangeListeners2() {
  this.fullscreenChangeBind = _classPrivateMethodGet(this, _fullscreenChange, _fullscreenChange2).bind(this);
  window.addEventListener("fullscreenchange", this.fullscreenChangeBind);
}
function _removeFullscreenChangeListeners2() {
  window.removeEventListener("fullscreenchange", this.fullscreenChangeBind);
  delete this.fullscreenChangeBind;
}

/***/ }),
/* 24 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.PDFRenderingQueue = void 0;
var _pdfjsLib = __webpack_require__(4);
var _ui_utils = __webpack_require__(3);
const CLEANUP_TIMEOUT = 30000;
class PDFRenderingQueue {
  constructor() {
    this.pdfViewer = null;
    this.pdfThumbnailViewer = null;
    this.onIdle = null;
    this.highestPriorityPage = null;
    this.idleTimeout = null;
    this.printing = false;
    this.isThumbnailViewEnabled = false;
  }
  setViewer(pdfViewer) {
    this.pdfViewer = pdfViewer;
  }
  setThumbnailViewer(pdfThumbnailViewer) {
    this.pdfThumbnailViewer = pdfThumbnailViewer;
  }
  isHighestPriority(view) {
    return this.highestPriorityPage === view.renderingId;
  }
  hasViewer() {
    return !!this.pdfViewer;
  }
  renderHighestPriority(currentlyVisiblePages) {
    var _this$pdfThumbnailVie;
    if (this.idleTimeout) {
      clearTimeout(this.idleTimeout);
      this.idleTimeout = null;
    }
    if (this.pdfViewer.forceRendering(currentlyVisiblePages)) {
      return;
    }
    if (this.isThumbnailViewEnabled && (_this$pdfThumbnailVie = this.pdfThumbnailViewer) !== null && _this$pdfThumbnailVie !== void 0 && _this$pdfThumbnailVie.forceRendering()) {
      return;
    }
    if (this.printing) {
      return;
    }
    if (this.onIdle) {
      this.idleTimeout = setTimeout(this.onIdle.bind(this), CLEANUP_TIMEOUT);
    }
  }
  getHighestPriority(visible, views, scrolledDown) {
    let preRenderExtra = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
    const visibleViews = visible.views,
      numVisible = visibleViews.length;
    if (numVisible === 0) {
      return null;
    }
    for (let i = 0; i < numVisible; i++) {
      const view = visibleViews[i].view;
      if (!this.isViewFinished(view)) {
        return view;
      }
    }
    const firstId = visible.first.id,
      lastId = visible.last.id;
    if (lastId - firstId + 1 > numVisible) {
      const visibleIds = visible.ids;
      for (let i = 1, ii = lastId - firstId; i < ii; i++) {
        const holeId = scrolledDown ? firstId + i : lastId - i;
        if (visibleIds.has(holeId)) {
          continue;
        }
        const holeView = views[holeId - 1];
        if (!this.isViewFinished(holeView)) {
          return holeView;
        }
      }
    }
    let preRenderIndex = scrolledDown ? lastId : firstId - 2;
    let preRenderView = views[preRenderIndex];
    if (preRenderView && !this.isViewFinished(preRenderView)) {
      return preRenderView;
    }
    if (preRenderExtra) {
      preRenderIndex += scrolledDown ? 1 : -1;
      preRenderView = views[preRenderIndex];
      if (preRenderView && !this.isViewFinished(preRenderView)) {
        return preRenderView;
      }
    }
    return null;
  }
  isViewFinished(view) {
    return view.renderingState === _ui_utils.RenderingStates.FINISHED;
  }
  renderView(view) {
    switch (view.renderingState) {
      case _ui_utils.RenderingStates.FINISHED:
        return false;
      case _ui_utils.RenderingStates.PAUSED:
        this.highestPriorityPage = view.renderingId;
        view.resume();
        break;
      case _ui_utils.RenderingStates.RUNNING:
        this.highestPriorityPage = view.renderingId;
        break;
      case _ui_utils.RenderingStates.INITIAL:
        this.highestPriorityPage = view.renderingId;
        view.draw().finally(() => {
          this.renderHighestPriority();
        }).catch(reason => {
          if (reason instanceof _pdfjsLib.RenderingCancelledException) {
            return;
          }
          console.error(`renderView: "${reason}"`);
        });
        break;
    }
    return true;
  }
}
exports.PDFRenderingQueue = PDFRenderingQueue;

/***/ }),
/* 25 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.PDFScriptingManager = void 0;
var _ui_utils = __webpack_require__(3);
var _pdfjsLib = __webpack_require__(4);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
class PDFScriptingManager {
  constructor(_ref) {
    let eventBus = _ref.eventBus,
      _ref$sandboxBundleSrc = _ref.sandboxBundleSrc,
      sandboxBundleSrc = _ref$sandboxBundleSrc === void 0 ? null : _ref$sandboxBundleSrc,
      _ref$scriptingFactory = _ref.scriptingFactory,
      scriptingFactory = _ref$scriptingFactory === void 0 ? null : _ref$scriptingFactory,
      _ref$docPropertiesLoo = _ref.docPropertiesLookup,
      docPropertiesLookup = _ref$docPropertiesLoo === void 0 ? null : _ref$docPropertiesLoo;
    this._pdfDocument = null;
    this._pdfViewer = null;
    this._closeCapability = null;
    this._destroyCapability = null;
    this._scripting = null;
    this._ready = false;
    this._eventBus = eventBus;
    this._sandboxBundleSrc = sandboxBundleSrc;
    this._scriptingFactory = scriptingFactory;
    this._docPropertiesLookup = docPropertiesLookup;
  }
  setViewer(pdfViewer) {
    this._pdfViewer = pdfViewer;
  }
  setDocument(pdfDocument) {
    var _this = this;
    return _asyncToGenerator(function* () {
      var _this$_scripting3;
      if (_this._pdfDocument) {
        yield _this._destroyScripting();
      }
      _this._pdfDocument = pdfDocument;
      if (!pdfDocument) {
        return;
      }
      const _yield$Promise$all = yield Promise.all([pdfDocument.getFieldObjects(), pdfDocument.getCalculationOrderIds(), pdfDocument.getJSActions()]),
        _yield$Promise$all2 = _slicedToArray(_yield$Promise$all, 3),
        objects = _yield$Promise$all2[0],
        calculationOrder = _yield$Promise$all2[1],
        docActions = _yield$Promise$all2[2];
      if (!objects && !docActions) {
        yield _this._destroyScripting();
        return;
      }
      if (pdfDocument !== _this._pdfDocument) {
        return;
      }
      try {
        _this._scripting = _this._createScripting();
      } catch (error) {
        console.error(`PDFScriptingManager.setDocument: "${error === null || error === void 0 ? void 0 : error.message}".`);
        yield _this._destroyScripting();
        return;
      }
      _this._internalEvents.set("updatefromsandbox", event => {
        if ((event === null || event === void 0 ? void 0 : event.source) !== window) {
          return;
        }
        _this._updateFromSandbox(event.detail);
      });
      _this._internalEvents.set("dispatcheventinsandbox", event => {
        var _this$_scripting;
        (_this$_scripting = _this._scripting) === null || _this$_scripting === void 0 ? void 0 : _this$_scripting.dispatchEventInSandbox(event.detail);
      });
      _this._internalEvents.set("pagechanging", _ref2 => {
        let pageNumber = _ref2.pageNumber,
          previous = _ref2.previous;
        if (pageNumber === previous) {
          return;
        }
        _this._dispatchPageClose(previous);
        _this._dispatchPageOpen(pageNumber);
      });
      _this._internalEvents.set("pagerendered", _ref3 => {
        let pageNumber = _ref3.pageNumber;
        if (!_this._pageOpenPending.has(pageNumber)) {
          return;
        }
        if (pageNumber !== _this._pdfViewer.currentPageNumber) {
          return;
        }
        _this._dispatchPageOpen(pageNumber);
      });
      _this._internalEvents.set("pagesdestroy", /*#__PURE__*/function () {
        var _ref4 = _asyncToGenerator(function* (event) {
          var _this$_scripting2, _this$_closeCapabilit;
          yield _this._dispatchPageClose(_this._pdfViewer.currentPageNumber);
          yield (_this$_scripting2 = _this._scripting) === null || _this$_scripting2 === void 0 ? void 0 : _this$_scripting2.dispatchEventInSandbox({
            id: "doc",
            name: "WillClose"
          });
          (_this$_closeCapabilit = _this._closeCapability) === null || _this$_closeCapabilit === void 0 ? void 0 : _this$_closeCapabilit.resolve();
        });
        return function (_x2) {
          return _ref4.apply(this, arguments);
        };
      }());
      var _iterator = _createForOfIteratorHelper(_this._internalEvents),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          const _step$value = _slicedToArray(_step.value, 2),
            name = _step$value[0],
            listener = _step$value[1];
          _this._eventBus._on(name, listener);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      try {
        const docProperties = yield _this._getDocProperties();
        if (pdfDocument !== _this._pdfDocument) {
          return;
        }
        yield _this._scripting.createSandbox({
          objects,
          calculationOrder,
          appInfo: {
            platform: navigator.platform,
            language: navigator.language
          },
          docInfo: _objectSpread(_objectSpread({}, docProperties), {}, {
            actions: docActions
          })
        });
        _this._eventBus.dispatch("sandboxcreated", {
          source: _this
        });
      } catch (error) {
        console.error(`PDFScriptingManager.setDocument: "${error === null || error === void 0 ? void 0 : error.message}".`);
        yield _this._destroyScripting();
        return;
      }
      yield (_this$_scripting3 = _this._scripting) === null || _this$_scripting3 === void 0 ? void 0 : _this$_scripting3.dispatchEventInSandbox({
        id: "doc",
        name: "Open"
      });
      yield _this._dispatchPageOpen(_this._pdfViewer.currentPageNumber, true);
      Promise.resolve().then(() => {
        if (pdfDocument === _this._pdfDocument) {
          _this._ready = true;
        }
      });
    })();
  }
  dispatchWillSave(detail) {
    var _this2 = this;
    return _asyncToGenerator(function* () {
      var _this2$_scripting;
      return (_this2$_scripting = _this2._scripting) === null || _this2$_scripting === void 0 ? void 0 : _this2$_scripting.dispatchEventInSandbox({
        id: "doc",
        name: "WillSave"
      });
    })();
  }
  dispatchDidSave(detail) {
    var _this3 = this;
    return _asyncToGenerator(function* () {
      var _this3$_scripting;
      return (_this3$_scripting = _this3._scripting) === null || _this3$_scripting === void 0 ? void 0 : _this3$_scripting.dispatchEventInSandbox({
        id: "doc",
        name: "DidSave"
      });
    })();
  }
  dispatchWillPrint(detail) {
    var _this4 = this;
    return _asyncToGenerator(function* () {
      var _this4$_scripting;
      return (_this4$_scripting = _this4._scripting) === null || _this4$_scripting === void 0 ? void 0 : _this4$_scripting.dispatchEventInSandbox({
        id: "doc",
        name: "WillPrint"
      });
    })();
  }
  dispatchDidPrint(detail) {
    var _this5 = this;
    return _asyncToGenerator(function* () {
      var _this5$_scripting;
      return (_this5$_scripting = _this5._scripting) === null || _this5$_scripting === void 0 ? void 0 : _this5$_scripting.dispatchEventInSandbox({
        id: "doc",
        name: "DidPrint"
      });
    })();
  }
  get destroyPromise() {
    var _this$_destroyCapabil;
    return ((_this$_destroyCapabil = this._destroyCapability) === null || _this$_destroyCapabil === void 0 ? void 0 : _this$_destroyCapabil.promise) || null;
  }
  get ready() {
    return this._ready;
  }
  get _internalEvents() {
    return (0, _pdfjsLib.shadow)(this, "_internalEvents", new Map());
  }
  get _pageOpenPending() {
    return (0, _pdfjsLib.shadow)(this, "_pageOpenPending", new Set());
  }
  get _visitedPages() {
    return (0, _pdfjsLib.shadow)(this, "_visitedPages", new Map());
  }
  _updateFromSandbox(detail) {
    var _this6 = this;
    return _asyncToGenerator(function* () {
      const isInPresentationMode = _this6._pdfViewer.isInPresentationMode || _this6._pdfViewer.isChangingPresentationMode;
      const id = detail.id,
        siblings = detail.siblings,
        command = detail.command,
        value = detail.value;
      if (!id) {
        switch (command) {
          case "clear":
            console.clear();
            break;
          case "error":
            console.error(value);
            break;
          case "layout":
            {
              if (isInPresentationMode) {
                return;
              }
              const modes = (0, _ui_utils.apiPageLayoutToViewerModes)(value);
              _this6._pdfViewer.spreadMode = modes.spreadMode;
              break;
            }
          case "page-num":
            _this6._pdfViewer.currentPageNumber = value + 1;
            break;
          case "print":
            yield _this6._pdfViewer.pagesPromise;
            _this6._eventBus.dispatch("print", {
              source: _this6
            });
            break;
          case "println":
            console.log(value);
            break;
          case "zoom":
            if (isInPresentationMode) {
              return;
            }
            _this6._pdfViewer.currentScaleValue = value;
            break;
          case "SaveAs":
            _this6._eventBus.dispatch("download", {
              source: _this6
            });
            break;
          case "FirstPage":
            _this6._pdfViewer.currentPageNumber = 1;
            break;
          case "LastPage":
            _this6._pdfViewer.currentPageNumber = _this6._pdfViewer.pagesCount;
            break;
          case "NextPage":
            _this6._pdfViewer.nextPage();
            break;
          case "PrevPage":
            _this6._pdfViewer.previousPage();
            break;
          case "ZoomViewIn":
            if (isInPresentationMode) {
              return;
            }
            _this6._pdfViewer.increaseScale();
            break;
          case "ZoomViewOut":
            if (isInPresentationMode) {
              return;
            }
            _this6._pdfViewer.decreaseScale();
            break;
        }
        return;
      }
      if (isInPresentationMode) {
        if (detail.focus) {
          return;
        }
      }
      delete detail.id;
      delete detail.siblings;
      const ids = siblings ? [id, ...siblings] : [id];
      for (var _i2 = 0, _ids = ids; _i2 < _ids.length; _i2++) {
        const elementId = _ids[_i2];
        const element = document.querySelector(`[data-element-id="${elementId}"]`);
        if (element) {
          element.dispatchEvent(new CustomEvent("updatefromsandbox", {
            detail
          }));
        } else {
          var _this6$_pdfDocument;
          (_this6$_pdfDocument = _this6._pdfDocument) === null || _this6$_pdfDocument === void 0 ? void 0 : _this6$_pdfDocument.annotationStorage.setValue(elementId, detail);
        }
      }
    })();
  }
  _dispatchPageOpen(pageNumber) {
    var _arguments = arguments,
      _this7 = this;
    return _asyncToGenerator(function* () {
      let initialize = _arguments.length > 1 && _arguments[1] !== undefined ? _arguments[1] : false;
      const pdfDocument = _this7._pdfDocument,
        visitedPages = _this7._visitedPages;
      if (initialize) {
        _this7._closeCapability = (0, _pdfjsLib.createPromiseCapability)();
      }
      if (!_this7._closeCapability) {
        return;
      }
      const pageView = _this7._pdfViewer.getPageView(pageNumber - 1);
      if ((pageView === null || pageView === void 0 ? void 0 : pageView.renderingState) !== _ui_utils.RenderingStates.FINISHED) {
        _this7._pageOpenPending.add(pageNumber);
        return;
      }
      _this7._pageOpenPending.delete(pageNumber);
      const actionsPromise = _asyncToGenerator(function* () {
        var _pageView$pdfPage, _this7$_scripting;
        const actions = yield !visitedPages.has(pageNumber) ? (_pageView$pdfPage = pageView.pdfPage) === null || _pageView$pdfPage === void 0 ? void 0 : _pageView$pdfPage.getJSActions() : null;
        if (pdfDocument !== _this7._pdfDocument) {
          return;
        }
        yield (_this7$_scripting = _this7._scripting) === null || _this7$_scripting === void 0 ? void 0 : _this7$_scripting.dispatchEventInSandbox({
          id: "page",
          name: "PageOpen",
          pageNumber,
          actions
        });
      })();
      visitedPages.set(pageNumber, actionsPromise);
    })();
  }
  _dispatchPageClose(pageNumber) {
    var _this8 = this;
    return _asyncToGenerator(function* () {
      var _this8$_scripting;
      const pdfDocument = _this8._pdfDocument,
        visitedPages = _this8._visitedPages;
      if (!_this8._closeCapability) {
        return;
      }
      if (_this8._pageOpenPending.has(pageNumber)) {
        return;
      }
      const actionsPromise = visitedPages.get(pageNumber);
      if (!actionsPromise) {
        return;
      }
      visitedPages.set(pageNumber, null);
      yield actionsPromise;
      if (pdfDocument !== _this8._pdfDocument) {
        return;
      }
      yield (_this8$_scripting = _this8._scripting) === null || _this8$_scripting === void 0 ? void 0 : _this8$_scripting.dispatchEventInSandbox({
        id: "page",
        name: "PageClose",
        pageNumber
      });
    })();
  }
  _getDocProperties() {
    var _this9 = this;
    return _asyncToGenerator(function* () {
      if (_this9._docPropertiesLookup) {
        return _this9._docPropertiesLookup(_this9._pdfDocument);
      }
      throw new Error("_getDocProperties: Unable to lookup properties.");
    })();
  }
  _createScripting() {
    this._destroyCapability = (0, _pdfjsLib.createPromiseCapability)();
    if (this._scripting) {
      throw new Error("_createScripting: Scripting already exists.");
    }
    if (this._scriptingFactory) {
      return this._scriptingFactory.createScripting({
        sandboxBundleSrc: this._sandboxBundleSrc
      });
    }
    throw new Error("_createScripting: Cannot create scripting.");
  }
  _destroyScripting() {
    var _this10 = this;
    return _asyncToGenerator(function* () {
      var _this10$_destroyCapab2;
      if (!_this10._scripting) {
        var _this10$_destroyCapab;
        _this10._pdfDocument = null;
        (_this10$_destroyCapab = _this10._destroyCapability) === null || _this10$_destroyCapab === void 0 ? void 0 : _this10$_destroyCapab.resolve();
        return;
      }
      if (_this10._closeCapability) {
        yield Promise.race([_this10._closeCapability.promise, new Promise(resolve => {
          setTimeout(resolve, 1000);
        })]).catch(reason => {});
        _this10._closeCapability = null;
      }
      _this10._pdfDocument = null;
      try {
        yield _this10._scripting.destroySandbox();
      } catch (ex) {}
      var _iterator2 = _createForOfIteratorHelper(_this10._internalEvents),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          const _step2$value = _slicedToArray(_step2.value, 2),
            name = _step2$value[0],
            listener = _step2$value[1];
          _this10._eventBus._off(name, listener);
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
      _this10._internalEvents.clear();
      _this10._pageOpenPending.clear();
      _this10._visitedPages.clear();
      _this10._scripting = null;
      _this10._ready = false;
      (_this10$_destroyCapab2 = _this10._destroyCapability) === null || _this10$_destroyCapab2 === void 0 ? void 0 : _this10$_destroyCapab2.resolve();
    })();
  }
}
exports.PDFScriptingManager = PDFScriptingManager;

/***/ }),
/* 26 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.PDFSidebar = void 0;
var _ui_utils = __webpack_require__(3);
function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }
function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }
const UI_NOTIFICATION_CLASS = "pdfSidebarNotification";
var _dispatchEvent = /*#__PURE__*/new WeakSet();
var _forceRendering = /*#__PURE__*/new WeakSet();
var _updateThumbnailViewer = /*#__PURE__*/new WeakSet();
var _showUINotification = /*#__PURE__*/new WeakSet();
var _hideUINotification = /*#__PURE__*/new WeakSet();
var _addEventListeners = /*#__PURE__*/new WeakSet();
class PDFSidebar {
  constructor(_ref) {
    let elements = _ref.elements,
      _pdfViewer = _ref.pdfViewer,
      _pdfThumbnailViewer = _ref.pdfThumbnailViewer,
      eventBus = _ref.eventBus,
      l10n = _ref.l10n;
    _classPrivateMethodInitSpec(this, _addEventListeners);
    _classPrivateMethodInitSpec(this, _hideUINotification);
    _classPrivateMethodInitSpec(this, _showUINotification);
    _classPrivateMethodInitSpec(this, _updateThumbnailViewer);
    _classPrivateMethodInitSpec(this, _forceRendering);
    _classPrivateMethodInitSpec(this, _dispatchEvent);
    this.isOpen = false;
    this.active = _ui_utils.SidebarView.THUMBS;
    this.isInitialViewSet = false;
    this.isInitialEventDispatched = false;
    this.onToggled = null;
    this.pdfViewer = _pdfViewer;
    this.pdfThumbnailViewer = _pdfThumbnailViewer;
    this.outerContainer = elements.outerContainer;
    this.sidebarContainer = elements.sidebarContainer;
    this.toggleButton = elements.toggleButton;
    this.thumbnailButton = elements.thumbnailButton;
    this.outlineButton = elements.outlineButton;
    this.attachmentsButton = elements.attachmentsButton;
    this.layersButton = elements.layersButton;
    this.thumbnailView = elements.thumbnailView;
    this.outlineView = elements.outlineView;
    this.attachmentsView = elements.attachmentsView;
    this.layersView = elements.layersView;
    this._outlineOptionsContainer = elements.outlineOptionsContainer;
    this._currentOutlineItemButton = elements.currentOutlineItemButton;
    this.eventBus = eventBus;
    this.l10n = l10n;
    _classPrivateMethodGet(this, _addEventListeners, _addEventListeners2).call(this);
  }
  reset() {
    this.isInitialViewSet = false;
    this.isInitialEventDispatched = false;
    _classPrivateMethodGet(this, _hideUINotification, _hideUINotification2).call(this, true);
    this.switchView(_ui_utils.SidebarView.THUMBS);
    this.outlineButton.disabled = false;
    this.attachmentsButton.disabled = false;
    this.layersButton.disabled = false;
    this._currentOutlineItemButton.disabled = true;
  }
  get visibleView() {
    return this.isOpen ? this.active : _ui_utils.SidebarView.NONE;
  }
  setInitialView() {
    let view = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _ui_utils.SidebarView.NONE;
    if (this.isInitialViewSet) {
      return;
    }
    this.isInitialViewSet = true;
    if (view === _ui_utils.SidebarView.NONE || view === _ui_utils.SidebarView.UNKNOWN) {
      _classPrivateMethodGet(this, _dispatchEvent, _dispatchEvent2).call(this);
      return;
    }
    this.switchView(view, true);
    if (!this.isInitialEventDispatched) {
      _classPrivateMethodGet(this, _dispatchEvent, _dispatchEvent2).call(this);
    }
  }
  switchView(view) {
    let forceOpen = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    const isViewChanged = view !== this.active;
    let shouldForceRendering = false;
    switch (view) {
      case _ui_utils.SidebarView.NONE:
        if (this.isOpen) {
          this.close();
        }
        return;
      case _ui_utils.SidebarView.THUMBS:
        if (this.isOpen && isViewChanged) {
          shouldForceRendering = true;
        }
        break;
      case _ui_utils.SidebarView.OUTLINE:
        if (this.outlineButton.disabled) {
          return;
        }
        break;
      case _ui_utils.SidebarView.ATTACHMENTS:
        if (this.attachmentsButton.disabled) {
          return;
        }
        break;
      case _ui_utils.SidebarView.LAYERS:
        if (this.layersButton.disabled) {
          return;
        }
        break;
      default:
        console.error(`PDFSidebar.switchView: "${view}" is not a valid view.`);
        return;
    }
    this.active = view;
    const isThumbs = view === _ui_utils.SidebarView.THUMBS,
      isOutline = view === _ui_utils.SidebarView.OUTLINE,
      isAttachments = view === _ui_utils.SidebarView.ATTACHMENTS,
      isLayers = view === _ui_utils.SidebarView.LAYERS;
    this.thumbnailButton.classList.toggle("toggled", isThumbs);
    this.outlineButton.classList.toggle("toggled", isOutline);
    this.attachmentsButton.classList.toggle("toggled", isAttachments);
    this.layersButton.classList.toggle("toggled", isLayers);
    this.thumbnailButton.setAttribute("aria-checked", isThumbs);
    this.outlineButton.setAttribute("aria-checked", isOutline);
    this.attachmentsButton.setAttribute("aria-checked", isAttachments);
    this.layersButton.setAttribute("aria-checked", isLayers);
    this.thumbnailView.classList.toggle("hidden", !isThumbs);
    this.outlineView.classList.toggle("hidden", !isOutline);
    this.attachmentsView.classList.toggle("hidden", !isAttachments);
    this.layersView.classList.toggle("hidden", !isLayers);
    this._outlineOptionsContainer.classList.toggle("hidden", !isOutline);
    if (forceOpen && !this.isOpen) {
      this.open();
      return;
    }
    if (shouldForceRendering) {
      _classPrivateMethodGet(this, _updateThumbnailViewer, _updateThumbnailViewer2).call(this);
      _classPrivateMethodGet(this, _forceRendering, _forceRendering2).call(this);
    }
    if (isViewChanged) {
      _classPrivateMethodGet(this, _dispatchEvent, _dispatchEvent2).call(this);
    }
  }
  open() {
    if (this.isOpen) {
      return;
    }
    this.isOpen = true;
    this.toggleButton.classList.add("toggled");
    this.toggleButton.setAttribute("aria-expanded", "true");
    this.outerContainer.classList.add("sidebarMoving", "sidebarOpen");
    if (this.active === _ui_utils.SidebarView.THUMBS) {
      _classPrivateMethodGet(this, _updateThumbnailViewer, _updateThumbnailViewer2).call(this);
    }
    _classPrivateMethodGet(this, _forceRendering, _forceRendering2).call(this);
    _classPrivateMethodGet(this, _dispatchEvent, _dispatchEvent2).call(this);
    _classPrivateMethodGet(this, _hideUINotification, _hideUINotification2).call(this);
  }
  close() {
    if (!this.isOpen) {
      return;
    }
    this.isOpen = false;
    this.toggleButton.classList.remove("toggled");
    this.toggleButton.setAttribute("aria-expanded", "false");
    this.outerContainer.classList.add("sidebarMoving");
    this.outerContainer.classList.remove("sidebarOpen");
    _classPrivateMethodGet(this, _forceRendering, _forceRendering2).call(this);
    _classPrivateMethodGet(this, _dispatchEvent, _dispatchEvent2).call(this);
  }
  toggle() {
    if (this.isOpen) {
      this.close();
    } else {
      this.open();
    }
  }
}
exports.PDFSidebar = PDFSidebar;
function _dispatchEvent2() {
  if (this.isInitialViewSet && !this.isInitialEventDispatched) {
    this.isInitialEventDispatched = true;
  }
  this.eventBus.dispatch("sidebarviewchanged", {
    source: this,
    view: this.visibleView
  });
}
function _forceRendering2() {
  if (this.onToggled) {
    this.onToggled();
  } else {
    this.pdfViewer.forceRendering();
    this.pdfThumbnailViewer.forceRendering();
  }
}
function _updateThumbnailViewer2() {
  const pdfViewer = this.pdfViewer,
    pdfThumbnailViewer = this.pdfThumbnailViewer;
  const pagesCount = pdfViewer.pagesCount;
  for (let pageIndex = 0; pageIndex < pagesCount; pageIndex++) {
    const pageView = pdfViewer.getPageView(pageIndex);
    if ((pageView === null || pageView === void 0 ? void 0 : pageView.renderingState) === _ui_utils.RenderingStates.FINISHED) {
      const thumbnailView = pdfThumbnailViewer.getThumbnail(pageIndex);
      thumbnailView.setImage(pageView);
    }
  }
  pdfThumbnailViewer.scrollThumbnailIntoView(pdfViewer.currentPageNumber);
}
function _showUINotification2() {
  this.toggleButton.setAttribute("data-l10n-id", "toggle_sidebar_notification2");
  this.l10n.translate(this.toggleButton);
  if (!this.isOpen) {
    this.toggleButton.classList.add(UI_NOTIFICATION_CLASS);
  }
}
function _hideUINotification2() {
  let reset = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  if (this.isOpen || reset) {
    this.toggleButton.classList.remove(UI_NOTIFICATION_CLASS);
  }
  if (reset) {
    this.toggleButton.setAttribute("data-l10n-id", "toggle_sidebar");
    this.l10n.translate(this.toggleButton);
  }
}
function _addEventListeners2() {
  this.sidebarContainer.addEventListener("transitionend", evt => {
    if (evt.target === this.sidebarContainer) {
      this.outerContainer.classList.remove("sidebarMoving");
    }
  });
  this.toggleButton.addEventListener("click", () => {
    this.toggle();
  });
  this.thumbnailButton.addEventListener("click", () => {
    this.switchView(_ui_utils.SidebarView.THUMBS);
  });
  this.outlineButton.addEventListener("click", () => {
    this.switchView(_ui_utils.SidebarView.OUTLINE);
  });
  this.outlineButton.addEventListener("dblclick", () => {
    this.eventBus.dispatch("toggleoutlinetree", {
      source: this
    });
  });
  this.attachmentsButton.addEventListener("click", () => {
    this.switchView(_ui_utils.SidebarView.ATTACHMENTS);
  });
  this.layersButton.addEventListener("click", () => {
    this.switchView(_ui_utils.SidebarView.LAYERS);
  });
  this.layersButton.addEventListener("dblclick", () => {
    this.eventBus.dispatch("resetlayers", {
      source: this
    });
  });
  this._currentOutlineItemButton.addEventListener("click", () => {
    this.eventBus.dispatch("currentoutlineitem", {
      source: this
    });
  });
  const onTreeLoaded = (count, button, view) => {
    button.disabled = !count;
    if (count) {
      _classPrivateMethodGet(this, _showUINotification, _showUINotification2).call(this);
    } else if (this.active === view) {
      this.switchView(_ui_utils.SidebarView.THUMBS);
    }
  };
  this.eventBus._on("outlineloaded", evt => {
    onTreeLoaded(evt.outlineCount, this.outlineButton, _ui_utils.SidebarView.OUTLINE);
    evt.currentOutlineItemPromise.then(enabled => {
      if (!this.isInitialViewSet) {
        return;
      }
      this._currentOutlineItemButton.disabled = !enabled;
    });
  });
  this.eventBus._on("attachmentsloaded", evt => {
    onTreeLoaded(evt.attachmentsCount, this.attachmentsButton, _ui_utils.SidebarView.ATTACHMENTS);
  });
  this.eventBus._on("layersloaded", evt => {
    onTreeLoaded(evt.layersCount, this.layersButton, _ui_utils.SidebarView.LAYERS);
  });
  this.eventBus._on("presentationmodechanged", evt => {
    if (evt.state === _ui_utils.PresentationModeState.NORMAL && this.visibleView === _ui_utils.SidebarView.THUMBS) {
      _classPrivateMethodGet(this, _updateThumbnailViewer, _updateThumbnailViewer2).call(this);
    }
  });
}

/***/ }),
/* 27 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.PDFSidebarResizer = void 0;
var _ui_utils = __webpack_require__(3);
const SIDEBAR_WIDTH_VAR = "--sidebar-width";
const SIDEBAR_MIN_WIDTH = 200;
const SIDEBAR_RESIZING_CLASS = "sidebarResizing";
class PDFSidebarResizer {
  constructor(options, eventBus, l10n) {
    this.isRTL = false;
    this.sidebarOpen = false;
    this._width = null;
    this._outerContainerWidth = null;
    this._boundEvents = Object.create(null);
    this.outerContainer = options.outerContainer;
    this.resizer = options.resizer;
    this.eventBus = eventBus;
    l10n.getDirection().then(dir => {
      this.isRTL = dir === "rtl";
    });
    this._addEventListeners();
  }
  get outerContainerWidth() {
    return this._outerContainerWidth || (this._outerContainerWidth = this.outerContainer.clientWidth);
  }
  _updateWidth() {
    let width = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    const maxWidth = Math.floor(this.outerContainerWidth / 2);
    if (width > maxWidth) {
      width = maxWidth;
    }
    if (width < SIDEBAR_MIN_WIDTH) {
      width = SIDEBAR_MIN_WIDTH;
    }
    if (width === this._width) {
      return false;
    }
    this._width = width;
    _ui_utils.docStyle.setProperty(SIDEBAR_WIDTH_VAR, `${width}px`);
    return true;
  }
  _mouseMove(evt) {
    let width = evt.clientX;
    if (this.isRTL) {
      width = this.outerContainerWidth - width;
    }
    this._updateWidth(width);
  }
  _mouseUp(evt) {
    this.outerContainer.classList.remove(SIDEBAR_RESIZING_CLASS);
    this.eventBus.dispatch("resize", {
      source: this
    });
    const _boundEvents = this._boundEvents;
    window.removeEventListener("mousemove", _boundEvents.mouseMove);
    window.removeEventListener("mouseup", _boundEvents.mouseUp);
  }
  _addEventListeners() {
    const _boundEvents = this._boundEvents;
    _boundEvents.mouseMove = this._mouseMove.bind(this);
    _boundEvents.mouseUp = this._mouseUp.bind(this);
    this.resizer.addEventListener("mousedown", evt => {
      if (evt.button !== 0) {
        return;
      }
      this.outerContainer.classList.add(SIDEBAR_RESIZING_CLASS);
      window.addEventListener("mousemove", _boundEvents.mouseMove);
      window.addEventListener("mouseup", _boundEvents.mouseUp);
    });
    this.eventBus._on("sidebarviewchanged", evt => {
      this.sidebarOpen = !!(evt !== null && evt !== void 0 && evt.view);
    });
    this.eventBus._on("resize", evt => {
      if ((evt === null || evt === void 0 ? void 0 : evt.source) !== window) {
        return;
      }
      this._outerContainerWidth = null;
      if (!this._width) {
        return;
      }
      if (!this.sidebarOpen) {
        this._updateWidth(this._width);
        return;
      }
      this.outerContainer.classList.add(SIDEBAR_RESIZING_CLASS);
      const updated = this._updateWidth(this._width);
      Promise.resolve().then(() => {
        this.outerContainer.classList.remove(SIDEBAR_RESIZING_CLASS);
        if (updated) {
          this.eventBus.dispatch("resize", {
            source: this
          });
        }
      });
    });
  }
}
exports.PDFSidebarResizer = PDFSidebarResizer;

/***/ }),
/* 28 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.PDFThumbnailViewer = void 0;
var _ui_utils = __webpack_require__(3);
var _pdf_thumbnail_view = __webpack_require__(29);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }
function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }
const THUMBNAIL_SCROLL_MARGIN = -19;
const THUMBNAIL_SELECTED_CLASS = "selected";
var _ensurePdfPageLoaded = /*#__PURE__*/new WeakSet();
var _getScrollAhead = /*#__PURE__*/new WeakSet();
class PDFThumbnailViewer {
  constructor(_ref) {
    let container = _ref.container,
      linkService = _ref.linkService,
      renderingQueue = _ref.renderingQueue,
      l10n = _ref.l10n,
      pageColors = _ref.pageColors;
    _classPrivateMethodInitSpec(this, _getScrollAhead);
    _classPrivateMethodInitSpec(this, _ensurePdfPageLoaded);
    this.container = container;
    this.linkService = linkService;
    this.renderingQueue = renderingQueue;
    this.l10n = l10n;
    this.pageColors = pageColors || null;
    if (this.pageColors && !(CSS.supports("color", this.pageColors.background) && CSS.supports("color", this.pageColors.foreground))) {
      if (this.pageColors.background || this.pageColors.foreground) {
        console.warn("PDFThumbnailViewer: Ignoring `pageColors`-option, since the browser doesn't support the values used.");
      }
      this.pageColors = null;
    }
    this.scroll = (0, _ui_utils.watchScroll)(this.container, this._scrollUpdated.bind(this));
    this._resetView();
  }
  _scrollUpdated() {
    this.renderingQueue.renderHighestPriority();
  }
  getThumbnail(index) {
    return this._thumbnails[index];
  }
  _getVisibleThumbs() {
    return (0, _ui_utils.getVisibleElements)({
      scrollEl: this.container,
      views: this._thumbnails
    });
  }
  scrollThumbnailIntoView(pageNumber) {
    if (!this.pdfDocument) {
      return;
    }
    const thumbnailView = this._thumbnails[pageNumber - 1];
    if (!thumbnailView) {
      console.error('scrollThumbnailIntoView: Invalid "pageNumber" parameter.');
      return;
    }
    if (pageNumber !== this._currentPageNumber) {
      const prevThumbnailView = this._thumbnails[this._currentPageNumber - 1];
      prevThumbnailView.div.classList.remove(THUMBNAIL_SELECTED_CLASS);
      thumbnailView.div.classList.add(THUMBNAIL_SELECTED_CLASS);
    }
    const _this$_getVisibleThum = this._getVisibleThumbs(),
      first = _this$_getVisibleThum.first,
      last = _this$_getVisibleThum.last,
      views = _this$_getVisibleThum.views;
    if (views.length > 0) {
      let shouldScroll = false;
      if (pageNumber <= first.id || pageNumber >= last.id) {
        shouldScroll = true;
      } else {
        var _iterator = _createForOfIteratorHelper(views),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            const _step$value = _step.value,
              id = _step$value.id,
              percent = _step$value.percent;
            if (id !== pageNumber) {
              continue;
            }
            shouldScroll = percent < 100;
            break;
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }
      if (shouldScroll) {
        (0, _ui_utils.scrollIntoView)(thumbnailView.div, {
          top: THUMBNAIL_SCROLL_MARGIN
        });
      }
    }
    this._currentPageNumber = pageNumber;
  }
  get pagesRotation() {
    return this._pagesRotation;
  }
  set pagesRotation(rotation) {
    if (!(0, _ui_utils.isValidRotation)(rotation)) {
      throw new Error("Invalid thumbnails rotation angle.");
    }
    if (!this.pdfDocument) {
      return;
    }
    if (this._pagesRotation === rotation) {
      return;
    }
    this._pagesRotation = rotation;
    const updateArgs = {
      rotation
    };
    var _iterator2 = _createForOfIteratorHelper(this._thumbnails),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        const thumbnail = _step2.value;
        thumbnail.update(updateArgs);
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
  }
  cleanup() {
    var _iterator3 = _createForOfIteratorHelper(this._thumbnails),
      _step3;
    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        const thumbnail = _step3.value;
        if (thumbnail.renderingState !== _ui_utils.RenderingStates.FINISHED) {
          thumbnail.reset();
        }
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }
    _pdf_thumbnail_view.TempImageFactory.destroyCanvas();
  }
  _resetView() {
    this._thumbnails = [];
    this._currentPageNumber = 1;
    this._pageLabels = null;
    this._pagesRotation = 0;
    this.container.textContent = "";
  }
  setDocument(pdfDocument) {
    if (this.pdfDocument) {
      this._cancelRendering();
      this._resetView();
    }
    this.pdfDocument = pdfDocument;
    if (!pdfDocument) {
      return;
    }
    const firstPagePromise = pdfDocument.getPage(1);
    const optionalContentConfigPromise = pdfDocument.getOptionalContentConfig();
    firstPagePromise.then(firstPdfPage => {
      var _this$_thumbnails$;
      const pagesCount = pdfDocument.numPages;
      const viewport = firstPdfPage.getViewport({
        scale: 1
      });
      for (let pageNum = 1; pageNum <= pagesCount; ++pageNum) {
        const thumbnail = new _pdf_thumbnail_view.PDFThumbnailView({
          container: this.container,
          id: pageNum,
          defaultViewport: viewport.clone(),
          optionalContentConfigPromise,
          linkService: this.linkService,
          renderingQueue: this.renderingQueue,
          l10n: this.l10n,
          pageColors: this.pageColors
        });
        this._thumbnails.push(thumbnail);
      }
      (_this$_thumbnails$ = this._thumbnails[0]) === null || _this$_thumbnails$ === void 0 ? void 0 : _this$_thumbnails$.setPdfPage(firstPdfPage);
      const thumbnailView = this._thumbnails[this._currentPageNumber - 1];
      thumbnailView.div.classList.add(THUMBNAIL_SELECTED_CLASS);
    }).catch(reason => {
      console.error("Unable to initialize thumbnail viewer", reason);
    });
  }
  _cancelRendering() {
    var _iterator4 = _createForOfIteratorHelper(this._thumbnails),
      _step4;
    try {
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
        const thumbnail = _step4.value;
        thumbnail.cancelRendering();
      }
    } catch (err) {
      _iterator4.e(err);
    } finally {
      _iterator4.f();
    }
  }
  setPageLabels(labels) {
    if (!this.pdfDocument) {
      return;
    }
    if (!labels) {
      this._pageLabels = null;
    } else if (!(Array.isArray(labels) && this.pdfDocument.numPages === labels.length)) {
      this._pageLabels = null;
      console.error("PDFThumbnailViewer_setPageLabels: Invalid page labels.");
    } else {
      this._pageLabels = labels;
    }
    for (let i = 0, ii = this._thumbnails.length; i < ii; i++) {
      var _this$_pageLabels$i, _this$_pageLabels;
      this._thumbnails[i].setPageLabel((_this$_pageLabels$i = (_this$_pageLabels = this._pageLabels) === null || _this$_pageLabels === void 0 ? void 0 : _this$_pageLabels[i]) !== null && _this$_pageLabels$i !== void 0 ? _this$_pageLabels$i : null);
    }
  }
  forceRendering() {
    const visibleThumbs = this._getVisibleThumbs();
    const scrollAhead = _classPrivateMethodGet(this, _getScrollAhead, _getScrollAhead2).call(this, visibleThumbs);
    const thumbView = this.renderingQueue.getHighestPriority(visibleThumbs, this._thumbnails, scrollAhead);
    if (thumbView) {
      _classPrivateMethodGet(this, _ensurePdfPageLoaded, _ensurePdfPageLoaded2).call(this, thumbView).then(() => {
        this.renderingQueue.renderView(thumbView);
      });
      return true;
    }
    return false;
  }
}
exports.PDFThumbnailViewer = PDFThumbnailViewer;
function _ensurePdfPageLoaded2(_x) {
  return _ensurePdfPageLoaded3.apply(this, arguments);
}
function _ensurePdfPageLoaded3() {
  _ensurePdfPageLoaded3 = _asyncToGenerator(function* (thumbView) {
    if (thumbView.pdfPage) {
      return thumbView.pdfPage;
    }
    try {
      const pdfPage = yield this.pdfDocument.getPage(thumbView.id);
      if (!thumbView.pdfPage) {
        thumbView.setPdfPage(pdfPage);
      }
      return pdfPage;
    } catch (reason) {
      console.error("Unable to get page for thumb view", reason);
      return null;
    }
  });
  return _ensurePdfPageLoaded3.apply(this, arguments);
}
function _getScrollAhead2(visible) {
  var _visible$first, _visible$last;
  if (((_visible$first = visible.first) === null || _visible$first === void 0 ? void 0 : _visible$first.id) === 1) {
    return true;
  } else if (((_visible$last = visible.last) === null || _visible$last === void 0 ? void 0 : _visible$last.id) === this._thumbnails.length) {
    return false;
  }
  return this.scroll.down;
}

/***/ }),
/* 29 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.TempImageFactory = exports.PDFThumbnailView = void 0;
var _ui_utils = __webpack_require__(3);
var _pdfjsLib = __webpack_require__(4);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _classStaticPrivateFieldSpecSet(receiver, classConstructor, descriptor, value) { _classCheckPrivateStaticAccess(receiver, classConstructor); _classCheckPrivateStaticFieldDescriptor(descriptor, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }
function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }
function _classStaticPrivateFieldSpecGet(receiver, classConstructor, descriptor) { _classCheckPrivateStaticAccess(receiver, classConstructor); _classCheckPrivateStaticFieldDescriptor(descriptor, "get"); return _classApplyDescriptorGet(receiver, descriptor); }
function _classCheckPrivateStaticFieldDescriptor(descriptor, action) { if (descriptor === undefined) { throw new TypeError("attempted to " + action + " private static field before its declaration"); } }
function _classCheckPrivateStaticAccess(receiver, classConstructor) { if (receiver !== classConstructor) { throw new TypeError("Private static access of wrong provenance"); } }
function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }
const DRAW_UPSCALE_FACTOR = 2;
const MAX_NUM_SCALING_STEPS = 3;
const THUMBNAIL_CANVAS_BORDER_WIDTH = 1;
const THUMBNAIL_WIDTH = 98;
class TempImageFactory {
  static getCanvas(width, height) {
    const tempCanvas = _classStaticPrivateFieldSpecGet(this, TempImageFactory, _tempCanvas) || _classStaticPrivateFieldSpecSet(this, TempImageFactory, _tempCanvas, document.createElement("canvas"));
    tempCanvas.width = width;
    tempCanvas.height = height;
    const ctx = tempCanvas.getContext("2d", {
      alpha: false
    });
    ctx.save();
    ctx.fillStyle = "rgb(255, 255, 255)";
    ctx.fillRect(0, 0, width, height);
    ctx.restore();
    return [tempCanvas, tempCanvas.getContext("2d")];
  }
  static destroyCanvas() {
    const tempCanvas = _classStaticPrivateFieldSpecGet(this, TempImageFactory, _tempCanvas);
    if (tempCanvas) {
      tempCanvas.width = 0;
      tempCanvas.height = 0;
    }
    _classStaticPrivateFieldSpecSet(this, TempImageFactory, _tempCanvas, null);
  }
}
exports.TempImageFactory = TempImageFactory;
var _tempCanvas = {
  writable: true,
  value: null
};
class PDFThumbnailView {
  constructor(_ref) {
    let container = _ref.container,
      id = _ref.id,
      defaultViewport = _ref.defaultViewport,
      optionalContentConfigPromise = _ref.optionalContentConfigPromise,
      linkService = _ref.linkService,
      renderingQueue = _ref.renderingQueue,
      l10n = _ref.l10n,
      pageColors = _ref.pageColors;
    this.id = id;
    this.renderingId = "thumbnail" + id;
    this.pageLabel = null;
    this.pdfPage = null;
    this.rotation = 0;
    this.viewport = defaultViewport;
    this.pdfPageRotate = defaultViewport.rotation;
    this._optionalContentConfigPromise = optionalContentConfigPromise || null;
    this.pageColors = pageColors || null;
    this.linkService = linkService;
    this.renderingQueue = renderingQueue;
    this.renderTask = null;
    this.renderingState = _ui_utils.RenderingStates.INITIAL;
    this.resume = null;
    const pageWidth = this.viewport.width,
      pageHeight = this.viewport.height,
      pageRatio = pageWidth / pageHeight;
    this.canvasWidth = THUMBNAIL_WIDTH;
    this.canvasHeight = this.canvasWidth / pageRatio | 0;
    this.scale = this.canvasWidth / pageWidth;
    this.l10n = l10n;
    const anchor = document.createElement("a");
    anchor.href = linkService.getAnchorUrl("#page=" + id);
    this._thumbPageTitle.then(msg => {
      anchor.title = msg;
    });
    anchor.onclick = function () {
      linkService.goToPage(id);
      return false;
    };
    this.anchor = anchor;
    const div = document.createElement("div");
    div.className = "thumbnail";
    div.setAttribute("data-page-number", this.id);
    this.div = div;
    const ring = document.createElement("div");
    ring.className = "thumbnailSelectionRing";
    const borderAdjustment = 2 * THUMBNAIL_CANVAS_BORDER_WIDTH;
    ring.style.width = this.canvasWidth + borderAdjustment + "px";
    ring.style.height = this.canvasHeight + borderAdjustment + "px";
    this.ring = ring;
    div.append(ring);
    anchor.append(div);
    container.append(anchor);
  }
  setPdfPage(pdfPage) {
    this.pdfPage = pdfPage;
    this.pdfPageRotate = pdfPage.rotate;
    const totalRotation = (this.rotation + this.pdfPageRotate) % 360;
    this.viewport = pdfPage.getViewport({
      scale: 1,
      rotation: totalRotation
    });
    this.reset();
  }
  reset() {
    this.cancelRendering();
    this.renderingState = _ui_utils.RenderingStates.INITIAL;
    const pageWidth = this.viewport.width,
      pageHeight = this.viewport.height,
      pageRatio = pageWidth / pageHeight;
    this.canvasHeight = this.canvasWidth / pageRatio | 0;
    this.scale = this.canvasWidth / pageWidth;
    this.div.removeAttribute("data-loaded");
    const ring = this.ring;
    ring.textContent = "";
    const borderAdjustment = 2 * THUMBNAIL_CANVAS_BORDER_WIDTH;
    ring.style.width = this.canvasWidth + borderAdjustment + "px";
    ring.style.height = this.canvasHeight + borderAdjustment + "px";
    if (this.canvas) {
      this.canvas.width = 0;
      this.canvas.height = 0;
      delete this.canvas;
    }
    if (this.image) {
      this.image.removeAttribute("src");
      delete this.image;
    }
  }
  update(_ref2) {
    let _ref2$rotation = _ref2.rotation,
      rotation = _ref2$rotation === void 0 ? null : _ref2$rotation;
    if (typeof rotation === "number") {
      this.rotation = rotation;
    }
    const totalRotation = (this.rotation + this.pdfPageRotate) % 360;
    this.viewport = this.viewport.clone({
      scale: 1,
      rotation: totalRotation
    });
    this.reset();
  }
  cancelRendering() {
    if (this.renderTask) {
      this.renderTask.cancel();
      this.renderTask = null;
    }
    this.resume = null;
  }
  _getPageDrawContext() {
    let upscaleFactor = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d", {
      alpha: false
    });
    const outputScale = new _ui_utils.OutputScale();
    canvas.width = upscaleFactor * this.canvasWidth * outputScale.sx | 0;
    canvas.height = upscaleFactor * this.canvasHeight * outputScale.sy | 0;
    const transform = outputScale.scaled ? [outputScale.sx, 0, 0, outputScale.sy, 0, 0] : null;
    return {
      ctx,
      canvas,
      transform
    };
  }
  _convertCanvasToImage(canvas) {
    if (this.renderingState !== _ui_utils.RenderingStates.FINISHED) {
      throw new Error("_convertCanvasToImage: Rendering has not finished.");
    }
    const reducedCanvas = this._reduceImage(canvas);
    const image = document.createElement("img");
    image.className = "thumbnailImage";
    this._thumbPageCanvas.then(msg => {
      image.setAttribute("aria-label", msg);
    });
    image.style.width = this.canvasWidth + "px";
    image.style.height = this.canvasHeight + "px";
    image.src = reducedCanvas.toDataURL();
    this.image = image;
    this.div.setAttribute("data-loaded", true);
    this.ring.append(image);
    reducedCanvas.width = 0;
    reducedCanvas.height = 0;
  }
  draw() {
    var _this = this;
    if (this.renderingState !== _ui_utils.RenderingStates.INITIAL) {
      console.error("Must be in new state before drawing");
      return Promise.resolve();
    }
    const pdfPage = this.pdfPage;
    if (!pdfPage) {
      this.renderingState = _ui_utils.RenderingStates.FINISHED;
      return Promise.reject(new Error("pdfPage is not loaded"));
    }
    this.renderingState = _ui_utils.RenderingStates.RUNNING;
    const finishRenderTask = /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator(function* () {
        let error = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
        if (renderTask === _this.renderTask) {
          _this.renderTask = null;
        }
        if (error instanceof _pdfjsLib.RenderingCancelledException) {
          return;
        }
        _this.renderingState = _ui_utils.RenderingStates.FINISHED;
        _this._convertCanvasToImage(canvas);
        if (error) {
          throw error;
        }
      });
      return function finishRenderTask() {
        return _ref3.apply(this, arguments);
      };
    }();
    const _this$_getPageDrawCon = this._getPageDrawContext(DRAW_UPSCALE_FACTOR),
      ctx = _this$_getPageDrawCon.ctx,
      canvas = _this$_getPageDrawCon.canvas,
      transform = _this$_getPageDrawCon.transform;
    const drawViewport = this.viewport.clone({
      scale: DRAW_UPSCALE_FACTOR * this.scale
    });
    const renderContinueCallback = cont => {
      if (!this.renderingQueue.isHighestPriority(this)) {
        this.renderingState = _ui_utils.RenderingStates.PAUSED;
        this.resume = () => {
          this.renderingState = _ui_utils.RenderingStates.RUNNING;
          cont();
        };
        return;
      }
      cont();
    };
    const renderContext = {
      canvasContext: ctx,
      transform,
      viewport: drawViewport,
      optionalContentConfigPromise: this._optionalContentConfigPromise,
      pageColors: this.pageColors
    };
    const renderTask = this.renderTask = pdfPage.render(renderContext);
    renderTask.onContinue = renderContinueCallback;
    const resultPromise = renderTask.promise.then(function () {
      return finishRenderTask(null);
    }, function (error) {
      return finishRenderTask(error);
    });
    resultPromise.finally(() => {
      canvas.width = 0;
      canvas.height = 0;
      const pageCached = this.linkService.isPageCached(this.id);
      if (!pageCached) {
        var _this$pdfPage;
        (_this$pdfPage = this.pdfPage) === null || _this$pdfPage === void 0 ? void 0 : _this$pdfPage.cleanup();
      }
    });
    return resultPromise;
  }
  setImage(pageView) {
    if (this.renderingState !== _ui_utils.RenderingStates.INITIAL) {
      return;
    }
    const canvas = pageView.thumbnailCanvas,
      pdfPage = pageView.pdfPage,
      scale = pageView.scale;
    if (!canvas) {
      return;
    }
    if (!this.pdfPage) {
      this.setPdfPage(pdfPage);
    }
    if (scale < this.scale) {
      return;
    }
    this.renderingState = _ui_utils.RenderingStates.FINISHED;
    this._convertCanvasToImage(canvas);
  }
  _reduceImage(img) {
    const _this$_getPageDrawCon2 = this._getPageDrawContext(),
      ctx = _this$_getPageDrawCon2.ctx,
      canvas = _this$_getPageDrawCon2.canvas;
    if (img.width <= 2 * canvas.width) {
      ctx.drawImage(img, 0, 0, img.width, img.height, 0, 0, canvas.width, canvas.height);
      return canvas;
    }
    let reducedWidth = canvas.width << MAX_NUM_SCALING_STEPS;
    let reducedHeight = canvas.height << MAX_NUM_SCALING_STEPS;
    const _TempImageFactory$get = TempImageFactory.getCanvas(reducedWidth, reducedHeight),
      _TempImageFactory$get2 = _slicedToArray(_TempImageFactory$get, 2),
      reducedImage = _TempImageFactory$get2[0],
      reducedImageCtx = _TempImageFactory$get2[1];
    while (reducedWidth > img.width || reducedHeight > img.height) {
      reducedWidth >>= 1;
      reducedHeight >>= 1;
    }
    reducedImageCtx.drawImage(img, 0, 0, img.width, img.height, 0, 0, reducedWidth, reducedHeight);
    while (reducedWidth > 2 * canvas.width) {
      reducedImageCtx.drawImage(reducedImage, 0, 0, reducedWidth, reducedHeight, 0, 0, reducedWidth >> 1, reducedHeight >> 1);
      reducedWidth >>= 1;
      reducedHeight >>= 1;
    }
    ctx.drawImage(reducedImage, 0, 0, reducedWidth, reducedHeight, 0, 0, canvas.width, canvas.height);
    return canvas;
  }
  get _thumbPageTitle() {
    var _this$pageLabel;
    return this.l10n.get("thumb_page_title", {
      page: (_this$pageLabel = this.pageLabel) !== null && _this$pageLabel !== void 0 ? _this$pageLabel : this.id
    });
  }
  get _thumbPageCanvas() {
    var _this$pageLabel2;
    return this.l10n.get("thumb_page_canvas", {
      page: (_this$pageLabel2 = this.pageLabel) !== null && _this$pageLabel2 !== void 0 ? _this$pageLabel2 : this.id
    });
  }
  setPageLabel(label) {
    this.pageLabel = typeof label === "string" ? label : null;
    this._thumbPageTitle.then(msg => {
      this.anchor.title = msg;
    });
    if (this.renderingState !== _ui_utils.RenderingStates.FINISHED) {
      return;
    }
    this._thumbPageCanvas.then(msg => {
      var _this$image;
      (_this$image = this.image) === null || _this$image === void 0 ? void 0 : _this$image.setAttribute("aria-label", msg);
    });
  }
}
exports.PDFThumbnailView = PDFThumbnailView;

/***/ }),
/* 30 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.PagesCountLimit = exports.PDFViewer = exports.PDFPageViewBuffer = void 0;
var _pdfjsLib = __webpack_require__(4);
var _ui_utils = __webpack_require__(3);
var _l10n_utils = __webpack_require__(31);
var _pdf_page_view = __webpack_require__(32);
var _pdf_rendering_queue = __webpack_require__(24);
var _pdf_link_service = __webpack_require__(7);
let _Symbol$iterator;
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }
function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }
function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }
function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }
function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }
function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }
function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }
function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }
const DEFAULT_CACHE_SIZE = 10;
const ENABLE_PERMISSIONS_CLASS = "enablePermissions";
const PagesCountLimit = {
  FORCE_SCROLL_MODE_PAGE: 15000,
  FORCE_LAZY_PAGE_INIT: 7500,
  PAUSE_EAGER_PAGE_INIT: 250
};
exports.PagesCountLimit = PagesCountLimit;
function isValidAnnotationEditorMode(mode) {
  return Object.values(_pdfjsLib.AnnotationEditorType).includes(mode) && mode !== _pdfjsLib.AnnotationEditorType.DISABLE;
}
var _buf = /*#__PURE__*/new WeakMap();
var _size = /*#__PURE__*/new WeakMap();
var _destroyFirstView = /*#__PURE__*/new WeakSet();
_Symbol$iterator = Symbol.iterator;
class PDFPageViewBuffer {
  constructor(size) {
    _classPrivateMethodInitSpec(this, _destroyFirstView);
    _classPrivateFieldInitSpec(this, _buf, {
      writable: true,
      value: new Set()
    });
    _classPrivateFieldInitSpec(this, _size, {
      writable: true,
      value: 0
    });
    _classPrivateFieldSet(this, _size, size);
  }
  push(view) {
    const buf = _classPrivateFieldGet(this, _buf);
    if (buf.has(view)) {
      buf.delete(view);
    }
    buf.add(view);
    if (buf.size > _classPrivateFieldGet(this, _size)) {
      _classPrivateMethodGet(this, _destroyFirstView, _destroyFirstView2).call(this);
    }
  }
  resize(newSize) {
    let idsToKeep = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    _classPrivateFieldSet(this, _size, newSize);
    const buf = _classPrivateFieldGet(this, _buf);
    if (idsToKeep) {
      const ii = buf.size;
      let i = 1;
      var _iterator = _createForOfIteratorHelper(buf),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          const view = _step.value;
          if (idsToKeep.has(view.id)) {
            buf.delete(view);
            buf.add(view);
          }
          if (++i > ii) {
            break;
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
    while (buf.size > _classPrivateFieldGet(this, _size)) {
      _classPrivateMethodGet(this, _destroyFirstView, _destroyFirstView2).call(this);
    }
  }
  has(view) {
    return _classPrivateFieldGet(this, _buf).has(view);
  }
  [_Symbol$iterator]() {
    return _classPrivateFieldGet(this, _buf).keys();
  }
}
exports.PDFPageViewBuffer = PDFPageViewBuffer;
function _destroyFirstView2() {
  const firstView = _classPrivateFieldGet(this, _buf).keys().next().value;
  firstView === null || firstView === void 0 ? void 0 : firstView.destroy();
  _classPrivateFieldGet(this, _buf).delete(firstView);
}
var _buffer = /*#__PURE__*/new WeakMap();
var _annotationEditorMode = /*#__PURE__*/new WeakMap();
var _annotationEditorUIManager = /*#__PURE__*/new WeakMap();
var _annotationMode = /*#__PURE__*/new WeakMap();
var _containerTopLeft = /*#__PURE__*/new WeakMap();
var _enablePermissions = /*#__PURE__*/new WeakMap();
var _previousContainerHeight = /*#__PURE__*/new WeakMap();
var _resizeObserver = /*#__PURE__*/new WeakMap();
var _scrollModePageState = /*#__PURE__*/new WeakMap();
var _onVisibilityChange = /*#__PURE__*/new WeakMap();
var _scaleTimeoutId = /*#__PURE__*/new WeakMap();
var _layerProperties = /*#__PURE__*/new WeakSet();
var _initializePermissions = /*#__PURE__*/new WeakSet();
var _onePageRenderedOrForceFetch = /*#__PURE__*/new WeakSet();
var _ensurePageViewVisible = /*#__PURE__*/new WeakSet();
var _scrollIntoView = /*#__PURE__*/new WeakSet();
var _isSameScale = /*#__PURE__*/new WeakSet();
var _resetCurrentPageView = /*#__PURE__*/new WeakSet();
var _ensurePdfPageLoaded = /*#__PURE__*/new WeakSet();
var _getScrollAhead = /*#__PURE__*/new WeakSet();
var _updateContainerHeightCss = /*#__PURE__*/new WeakSet();
var _resizeObserverCallback = /*#__PURE__*/new WeakSet();
class PDFViewer {
  constructor(options) {
    var _this$container, _this$viewer, _options$textLayerMod, _options$annotationMo, _options$annotationEd, _options$isOffscreenC;
    _classPrivateMethodInitSpec(this, _resizeObserverCallback);
    _classPrivateMethodInitSpec(this, _updateContainerHeightCss);
    _classPrivateMethodInitSpec(this, _getScrollAhead);
    _classPrivateMethodInitSpec(this, _ensurePdfPageLoaded);
    _classPrivateMethodInitSpec(this, _resetCurrentPageView);
    _classPrivateMethodInitSpec(this, _isSameScale);
    _classPrivateMethodInitSpec(this, _scrollIntoView);
    _classPrivateMethodInitSpec(this, _ensurePageViewVisible);
    _classPrivateMethodInitSpec(this, _onePageRenderedOrForceFetch);
    _classPrivateMethodInitSpec(this, _initializePermissions);
    _classPrivateMethodInitSpec(this, _layerProperties);
    _classPrivateFieldInitSpec(this, _buffer, {
      writable: true,
      value: null
    });
    _classPrivateFieldInitSpec(this, _annotationEditorMode, {
      writable: true,
      value: _pdfjsLib.AnnotationEditorType.NONE
    });
    _classPrivateFieldInitSpec(this, _annotationEditorUIManager, {
      writable: true,
      value: null
    });
    _classPrivateFieldInitSpec(this, _annotationMode, {
      writable: true,
      value: _pdfjsLib.AnnotationMode.ENABLE_FORMS
    });
    _classPrivateFieldInitSpec(this, _containerTopLeft, {
      writable: true,
      value: null
    });
    _classPrivateFieldInitSpec(this, _enablePermissions, {
      writable: true,
      value: false
    });
    _classPrivateFieldInitSpec(this, _previousContainerHeight, {
      writable: true,
      value: 0
    });
    _classPrivateFieldInitSpec(this, _resizeObserver, {
      writable: true,
      value: new ResizeObserver(_classPrivateMethodGet(this, _resizeObserverCallback, _resizeObserverCallback2).bind(this))
    });
    _classPrivateFieldInitSpec(this, _scrollModePageState, {
      writable: true,
      value: null
    });
    _classPrivateFieldInitSpec(this, _onVisibilityChange, {
      writable: true,
      value: null
    });
    _classPrivateFieldInitSpec(this, _scaleTimeoutId, {
      writable: true,
      value: null
    });
    const viewerVersion = '3.5.80';
    if (_pdfjsLib.version !== viewerVersion) {
      throw new Error(`The API version "${_pdfjsLib.version}" does not match the Viewer version "${viewerVersion}".`);
    }
    this.container = options.container;
    this.viewer = options.viewer || options.container.firstElementChild;
    if (((_this$container = this.container) === null || _this$container === void 0 ? void 0 : _this$container.tagName) !== "DIV" || ((_this$viewer = this.viewer) === null || _this$viewer === void 0 ? void 0 : _this$viewer.tagName) !== "DIV") {
      throw new Error("Invalid `container` and/or `viewer` option.");
    }
    if (this.container.offsetParent && getComputedStyle(this.container).position !== "absolute") {
      throw new Error("The `container` must be absolutely positioned.");
    }
    _classPrivateFieldGet(this, _resizeObserver).observe(this.container);
    this.eventBus = options.eventBus;
    this.linkService = options.linkService || new _pdf_link_service.SimpleLinkService();
    this.downloadManager = options.downloadManager || null;
    this.findController = options.findController || null;
    this._scriptingManager = options.scriptingManager || null;
    this.textLayerMode = (_options$textLayerMod = options.textLayerMode) !== null && _options$textLayerMod !== void 0 ? _options$textLayerMod : _ui_utils.TextLayerMode.ENABLE;
    _classPrivateFieldSet(this, _annotationMode, (_options$annotationMo = options.annotationMode) !== null && _options$annotationMo !== void 0 ? _options$annotationMo : _pdfjsLib.AnnotationMode.ENABLE_FORMS);
    _classPrivateFieldSet(this, _annotationEditorMode, (_options$annotationEd = options.annotationEditorMode) !== null && _options$annotationEd !== void 0 ? _options$annotationEd : _pdfjsLib.AnnotationEditorType.NONE);
    this.imageResourcesPath = options.imageResourcesPath || "";
    this.enablePrintAutoRotate = options.enablePrintAutoRotate || false;
    this.removePageBorders = options.removePageBorders || false;
    this.renderer = options.renderer || _ui_utils.RendererType.CANVAS;
    this.useOnlyCssZoom = options.useOnlyCssZoom || false;
    this.isOffscreenCanvasSupported = (_options$isOffscreenC = options.isOffscreenCanvasSupported) !== null && _options$isOffscreenC !== void 0 ? _options$isOffscreenC : true;
    this.maxCanvasPixels = options.maxCanvasPixels;
    this.l10n = options.l10n || _l10n_utils.NullL10n;
    _classPrivateFieldSet(this, _enablePermissions, options.enablePermissions || false);
    this.pageColors = options.pageColors || null;
    if (this.pageColors && !(CSS.supports("color", this.pageColors.background) && CSS.supports("color", this.pageColors.foreground))) {
      if (this.pageColors.background || this.pageColors.foreground) {
        console.warn("PDFViewer: Ignoring `pageColors`-option, since the browser doesn't support the values used.");
      }
      this.pageColors = null;
    }
    this.defaultRenderingQueue = !options.renderingQueue;
    if (this.defaultRenderingQueue) {
      this.renderingQueue = new _pdf_rendering_queue.PDFRenderingQueue();
      this.renderingQueue.setViewer(this);
    } else {
      this.renderingQueue = options.renderingQueue;
    }
    this.scroll = (0, _ui_utils.watchScroll)(this.container, this._scrollUpdate.bind(this));
    this.presentationModeState = _ui_utils.PresentationModeState.UNKNOWN;
    this._onBeforeDraw = this._onAfterDraw = null;
    this._resetView();
    if (this.removePageBorders) {
      this.viewer.classList.add("removePageBorders");
    }
    _classPrivateMethodGet(this, _updateContainerHeightCss, _updateContainerHeightCss2).call(this);
  }
  get pagesCount() {
    return this._pages.length;
  }
  getPageView(index) {
    return this._pages[index];
  }
  get pageViewsReady() {
    if (!this._pagesCapability.settled) {
      return false;
    }
    return this._pages.every(function (pageView) {
      return pageView === null || pageView === void 0 ? void 0 : pageView.pdfPage;
    });
  }
  get renderForms() {
    return _classPrivateFieldGet(this, _annotationMode) === _pdfjsLib.AnnotationMode.ENABLE_FORMS;
  }
  get enableScripting() {
    return !!this._scriptingManager;
  }
  get currentPageNumber() {
    return this._currentPageNumber;
  }
  set currentPageNumber(val) {
    if (!Number.isInteger(val)) {
      throw new Error("Invalid page number.");
    }
    if (!this.pdfDocument) {
      return;
    }
    if (!this._setCurrentPageNumber(val, true)) {
      console.error(`currentPageNumber: "${val}" is not a valid page.`);
    }
  }
  _setCurrentPageNumber(val) {
    var _this$_pageLabels, _this$_pageLabels2;
    let resetCurrentPageView = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    if (this._currentPageNumber === val) {
      if (resetCurrentPageView) {
        _classPrivateMethodGet(this, _resetCurrentPageView, _resetCurrentPageView2).call(this);
      }
      return true;
    }
    if (!(0 < val && val <= this.pagesCount)) {
      return false;
    }
    const previous = this._currentPageNumber;
    this._currentPageNumber = val;
    this.eventBus.dispatch("pagechanging", {
      source: this,
      pageNumber: val,
      pageLabel: (_this$_pageLabels = (_this$_pageLabels2 = this._pageLabels) === null || _this$_pageLabels2 === void 0 ? void 0 : _this$_pageLabels2[val - 1]) !== null && _this$_pageLabels !== void 0 ? _this$_pageLabels : null,
      previous
    });
    if (resetCurrentPageView) {
      _classPrivateMethodGet(this, _resetCurrentPageView, _resetCurrentPageView2).call(this);
    }
    return true;
  }
  get currentPageLabel() {
    var _this$_pageLabels3, _this$_pageLabels4;
    return (_this$_pageLabels3 = (_this$_pageLabels4 = this._pageLabels) === null || _this$_pageLabels4 === void 0 ? void 0 : _this$_pageLabels4[this._currentPageNumber - 1]) !== null && _this$_pageLabels3 !== void 0 ? _this$_pageLabels3 : null;
  }
  set currentPageLabel(val) {
    if (!this.pdfDocument) {
      return;
    }
    let page = val | 0;
    if (this._pageLabels) {
      const i = this._pageLabels.indexOf(val);
      if (i >= 0) {
        page = i + 1;
      }
    }
    if (!this._setCurrentPageNumber(page, true)) {
      console.error(`currentPageLabel: "${val}" is not a valid page.`);
    }
  }
  get currentScale() {
    return this._currentScale !== _ui_utils.UNKNOWN_SCALE ? this._currentScale : _ui_utils.DEFAULT_SCALE;
  }
  set currentScale(val) {
    if (isNaN(val)) {
      throw new Error("Invalid numeric scale.");
    }
    if (!this.pdfDocument) {
      return;
    }
    this._setScale(val, {
      noScroll: false
    });
  }
  get currentScaleValue() {
    return this._currentScaleValue;
  }
  set currentScaleValue(val) {
    if (!this.pdfDocument) {
      return;
    }
    this._setScale(val, {
      noScroll: false
    });
  }
  get pagesRotation() {
    return this._pagesRotation;
  }
  set pagesRotation(rotation) {
    if (!(0, _ui_utils.isValidRotation)(rotation)) {
      throw new Error("Invalid pages rotation angle.");
    }
    if (!this.pdfDocument) {
      return;
    }
    rotation %= 360;
    if (rotation < 0) {
      rotation += 360;
    }
    if (this._pagesRotation === rotation) {
      return;
    }
    this._pagesRotation = rotation;
    const pageNumber = this._currentPageNumber;
    this.refresh(true, {
      rotation
    });
    if (this._currentScaleValue) {
      this._setScale(this._currentScaleValue, {
        noScroll: true
      });
    }
    this.eventBus.dispatch("rotationchanging", {
      source: this,
      pagesRotation: rotation,
      pageNumber
    });
    if (this.defaultRenderingQueue) {
      this.update();
    }
  }
  get firstPagePromise() {
    return this.pdfDocument ? this._firstPageCapability.promise : null;
  }
  get onePageRendered() {
    return this.pdfDocument ? this._onePageRenderedCapability.promise : null;
  }
  get pagesPromise() {
    return this.pdfDocument ? this._pagesCapability.promise : null;
  }
  setDocument(pdfDocument) {
    var _this = this;
    if (this.pdfDocument) {
      var _this$findController, _this$_scriptingManag;
      this.eventBus.dispatch("pagesdestroy", {
        source: this
      });
      this._cancelRendering();
      this._resetView();
      (_this$findController = this.findController) === null || _this$findController === void 0 ? void 0 : _this$findController.setDocument(null);
      (_this$_scriptingManag = this._scriptingManager) === null || _this$_scriptingManag === void 0 ? void 0 : _this$_scriptingManag.setDocument(null);
      if (_classPrivateFieldGet(this, _annotationEditorUIManager)) {
        _classPrivateFieldGet(this, _annotationEditorUIManager).destroy();
        _classPrivateFieldSet(this, _annotationEditorUIManager, null);
      }
    }
    this.pdfDocument = pdfDocument;
    if (!pdfDocument) {
      return;
    }
    const pagesCount = pdfDocument.numPages;
    const firstPagePromise = pdfDocument.getPage(1);
    const optionalContentConfigPromise = pdfDocument.getOptionalContentConfig();
    const permissionsPromise = _classPrivateFieldGet(this, _enablePermissions) ? pdfDocument.getPermissions() : Promise.resolve();
    if (pagesCount > PagesCountLimit.FORCE_SCROLL_MODE_PAGE) {
      console.warn("Forcing PAGE-scrolling for performance reasons, given the length of the document.");
      const mode = this._scrollMode = _ui_utils.ScrollMode.PAGE;
      this.eventBus.dispatch("scrollmodechanged", {
        source: this,
        mode
      });
    }
    this._pagesCapability.promise.then(() => {
      this.eventBus.dispatch("pagesloaded", {
        source: this,
        pagesCount
      });
    }, () => {});
    this._onBeforeDraw = evt => {
      const pageView = this._pages[evt.pageNumber - 1];
      if (!pageView) {
        return;
      }
      _classPrivateFieldGet(this, _buffer).push(pageView);
    };
    this.eventBus._on("pagerender", this._onBeforeDraw);
    this._onAfterDraw = evt => {
      if (evt.cssTransform || this._onePageRenderedCapability.settled) {
        return;
      }
      this._onePageRenderedCapability.resolve({
        timestamp: evt.timestamp
      });
      this.eventBus._off("pagerendered", this._onAfterDraw);
      this._onAfterDraw = null;
      if (_classPrivateFieldGet(this, _onVisibilityChange)) {
        document.removeEventListener("visibilitychange", _classPrivateFieldGet(this, _onVisibilityChange));
        _classPrivateFieldSet(this, _onVisibilityChange, null);
      }
    };
    this.eventBus._on("pagerendered", this._onAfterDraw);
    Promise.all([firstPagePromise, permissionsPromise]).then(_ref => {
      let _ref2 = _slicedToArray(_ref, 2),
        firstPdfPage = _ref2[0],
        permissions = _ref2[1];
      if (pdfDocument !== this.pdfDocument) {
        return;
      }
      this._firstPageCapability.resolve(firstPdfPage);
      this._optionalContentConfigPromise = optionalContentConfigPromise;
      const _classPrivateMethodGe = _classPrivateMethodGet(this, _initializePermissions, _initializePermissions2).call(this, permissions),
        annotationEditorMode = _classPrivateMethodGe.annotationEditorMode,
        annotationMode = _classPrivateMethodGe.annotationMode,
        textLayerMode = _classPrivateMethodGe.textLayerMode;
      if (annotationEditorMode !== _pdfjsLib.AnnotationEditorType.DISABLE) {
        const mode = annotationEditorMode;
        if (pdfDocument.isPureXfa) {
          console.warn("Warning: XFA-editing is not implemented.");
        } else if (isValidAnnotationEditorMode(mode)) {
          _classPrivateFieldSet(this, _annotationEditorUIManager, new _pdfjsLib.AnnotationEditorUIManager(this.container, this.eventBus, pdfDocument === null || pdfDocument === void 0 ? void 0 : pdfDocument.annotationStorage));
          if (mode !== _pdfjsLib.AnnotationEditorType.NONE) {
            _classPrivateFieldGet(this, _annotationEditorUIManager).updateMode(mode);
          }
        } else {
          console.error(`Invalid AnnotationEditor mode: ${mode}`);
        }
      }
      const layerProperties = _classPrivateMethodGet(this, _layerProperties, _layerProperties2).bind(this);
      const viewerElement = this._scrollMode === _ui_utils.ScrollMode.PAGE ? null : this.viewer;
      const scale = this.currentScale;
      const viewport = firstPdfPage.getViewport({
        scale: scale * _pdfjsLib.PixelsPerInch.PDF_TO_CSS_UNITS
      });
      this.viewer.style.setProperty("--scale-factor", viewport.scale);
      for (let pageNum = 1; pageNum <= pagesCount; ++pageNum) {
        const pageView = new _pdf_page_view.PDFPageView({
          container: viewerElement,
          eventBus: this.eventBus,
          id: pageNum,
          scale,
          defaultViewport: viewport.clone(),
          optionalContentConfigPromise,
          renderingQueue: this.renderingQueue,
          textLayerMode,
          annotationMode,
          imageResourcesPath: this.imageResourcesPath,
          renderer: this.renderer,
          useOnlyCssZoom: this.useOnlyCssZoom,
          isOffscreenCanvasSupported: this.isOffscreenCanvasSupported,
          maxCanvasPixels: this.maxCanvasPixels,
          pageColors: this.pageColors,
          l10n: this.l10n,
          layerProperties
        });
        this._pages.push(pageView);
      }
      const firstPageView = this._pages[0];
      if (firstPageView) {
        firstPageView.setPdfPage(firstPdfPage);
        this.linkService.cachePageRef(1, firstPdfPage.ref);
      }
      if (this._scrollMode === _ui_utils.ScrollMode.PAGE) {
        _classPrivateMethodGet(this, _ensurePageViewVisible, _ensurePageViewVisible2).call(this);
      } else if (this._spreadMode !== _ui_utils.SpreadMode.NONE) {
        this._updateSpreadMode();
      }
      _classPrivateMethodGet(this, _onePageRenderedOrForceFetch, _onePageRenderedOrForceFetch2).call(this).then( /*#__PURE__*/_asyncToGenerator(function* () {
        var _this$findController2, _this$_scriptingManag2;
        (_this$findController2 = _this.findController) === null || _this$findController2 === void 0 ? void 0 : _this$findController2.setDocument(pdfDocument);
        (_this$_scriptingManag2 = _this._scriptingManager) === null || _this$_scriptingManag2 === void 0 ? void 0 : _this$_scriptingManag2.setDocument(pdfDocument);
        if (_classPrivateFieldGet(_this, _annotationEditorUIManager)) {
          _this.eventBus.dispatch("annotationeditormodechanged", {
            source: _this,
            mode: _classPrivateFieldGet(_this, _annotationEditorMode)
          });
        }
        if (pdfDocument.loadingParams.disableAutoFetch || pagesCount > PagesCountLimit.FORCE_LAZY_PAGE_INIT) {
          _this._pagesCapability.resolve();
          return;
        }
        let getPagesLeft = pagesCount - 1;
        if (getPagesLeft <= 0) {
          _this._pagesCapability.resolve();
          return;
        }
        for (let pageNum = 2; pageNum <= pagesCount; ++pageNum) {
          const promise = pdfDocument.getPage(pageNum).then(pdfPage => {
            const pageView = _this._pages[pageNum - 1];
            if (!pageView.pdfPage) {
              pageView.setPdfPage(pdfPage);
            }
            _this.linkService.cachePageRef(pageNum, pdfPage.ref);
            if (--getPagesLeft === 0) {
              _this._pagesCapability.resolve();
            }
          }, reason => {
            console.error(`Unable to get page ${pageNum} to initialize viewer`, reason);
            if (--getPagesLeft === 0) {
              _this._pagesCapability.resolve();
            }
          });
          if (pageNum % PagesCountLimit.PAUSE_EAGER_PAGE_INIT === 0) {
            yield promise;
          }
        }
      }));
      this.eventBus.dispatch("pagesinit", {
        source: this
      });
      pdfDocument.getMetadata().then(_ref4 => {
        let info = _ref4.info;
        if (pdfDocument !== this.pdfDocument) {
          return;
        }
        if (info.Language) {
          this.viewer.lang = info.Language;
        }
      });
      if (this.defaultRenderingQueue) {
        this.update();
      }
    }).catch(reason => {
      console.error("Unable to initialize viewer", reason);
      this._pagesCapability.reject(reason);
    });
  }
  setPageLabels(labels) {
    if (!this.pdfDocument) {
      return;
    }
    if (!labels) {
      this._pageLabels = null;
    } else if (!(Array.isArray(labels) && this.pdfDocument.numPages === labels.length)) {
      this._pageLabels = null;
      console.error(`setPageLabels: Invalid page labels.`);
    } else {
      this._pageLabels = labels;
    }
    for (let i = 0, ii = this._pages.length; i < ii; i++) {
      var _this$_pageLabels$i, _this$_pageLabels5;
      this._pages[i].setPageLabel((_this$_pageLabels$i = (_this$_pageLabels5 = this._pageLabels) === null || _this$_pageLabels5 === void 0 ? void 0 : _this$_pageLabels5[i]) !== null && _this$_pageLabels$i !== void 0 ? _this$_pageLabels$i : null);
    }
  }
  _resetView() {
    this._pages = [];
    this._currentPageNumber = 1;
    this._currentScale = _ui_utils.UNKNOWN_SCALE;
    this._currentScaleValue = null;
    this._pageLabels = null;
    _classPrivateFieldSet(this, _buffer, new PDFPageViewBuffer(DEFAULT_CACHE_SIZE));
    this._location = null;
    this._pagesRotation = 0;
    this._optionalContentConfigPromise = null;
    this._firstPageCapability = (0, _pdfjsLib.createPromiseCapability)();
    this._onePageRenderedCapability = (0, _pdfjsLib.createPromiseCapability)();
    this._pagesCapability = (0, _pdfjsLib.createPromiseCapability)();
    this._scrollMode = _ui_utils.ScrollMode.VERTICAL;
    this._previousScrollMode = _ui_utils.ScrollMode.UNKNOWN;
    this._spreadMode = _ui_utils.SpreadMode.NONE;
    _classPrivateFieldSet(this, _scrollModePageState, {
      previousPageNumber: 1,
      scrollDown: true,
      pages: []
    });
    if (this._onBeforeDraw) {
      this.eventBus._off("pagerender", this._onBeforeDraw);
      this._onBeforeDraw = null;
    }
    if (this._onAfterDraw) {
      this.eventBus._off("pagerendered", this._onAfterDraw);
      this._onAfterDraw = null;
    }
    if (_classPrivateFieldGet(this, _onVisibilityChange)) {
      document.removeEventListener("visibilitychange", _classPrivateFieldGet(this, _onVisibilityChange));
      _classPrivateFieldSet(this, _onVisibilityChange, null);
    }
    this.viewer.textContent = "";
    this._updateScrollMode();
    this.viewer.removeAttribute("lang");
    this.viewer.classList.remove(ENABLE_PERMISSIONS_CLASS);
  }
  _scrollUpdate() {
    if (this.pagesCount === 0) {
      return;
    }
    this.update();
  }
  _setScaleUpdatePages(newScale, newValue, _ref5) {
    let _ref5$noScroll = _ref5.noScroll,
      noScroll = _ref5$noScroll === void 0 ? false : _ref5$noScroll,
      _ref5$preset = _ref5.preset,
      preset = _ref5$preset === void 0 ? false : _ref5$preset,
      _ref5$drawingDelay = _ref5.drawingDelay,
      drawingDelay = _ref5$drawingDelay === void 0 ? -1 : _ref5$drawingDelay;
    this._currentScaleValue = newValue.toString();
    if (_classPrivateMethodGet(this, _isSameScale, _isSameScale2).call(this, newScale)) {
      if (preset) {
        this.eventBus.dispatch("scalechanging", {
          source: this,
          scale: newScale,
          presetValue: newValue
        });
      }
      return;
    }
    this.viewer.style.setProperty("--scale-factor", newScale * _pdfjsLib.PixelsPerInch.PDF_TO_CSS_UNITS);
    const postponeDrawing = drawingDelay >= 0 && drawingDelay < 1000;
    this.refresh(true, {
      scale: newScale,
      drawingDelay: postponeDrawing ? drawingDelay : -1
    });
    if (postponeDrawing) {
      _classPrivateFieldSet(this, _scaleTimeoutId, setTimeout(() => {
        _classPrivateFieldSet(this, _scaleTimeoutId, null);
        this.refresh();
      }, drawingDelay));
    }
    this._currentScale = newScale;
    if (!noScroll) {
      let page = this._currentPageNumber,
        dest;
      if (this._location && !(this.isInPresentationMode || this.isChangingPresentationMode)) {
        page = this._location.pageNumber;
        dest = [null, {
          name: "XYZ"
        }, this._location.left, this._location.top, null];
      }
      this.scrollPageIntoView({
        pageNumber: page,
        destArray: dest,
        allowNegativeOffset: true
      });
    }
    this.eventBus.dispatch("scalechanging", {
      source: this,
      scale: newScale,
      presetValue: preset ? newValue : undefined
    });
    if (this.defaultRenderingQueue) {
      this.update();
    }
  }
  get _pageWidthScaleFactor() {
    if (this._spreadMode !== _ui_utils.SpreadMode.NONE && this._scrollMode !== _ui_utils.ScrollMode.HORIZONTAL) {
      return 2;
    }
    return 1;
  }
  _setScale(value, options) {
    let scale = parseFloat(value);
    if (scale > 0) {
      options.preset = false;
      this._setScaleUpdatePages(scale, value, options);
    } else {
      const currentPage = this._pages[this._currentPageNumber - 1];
      if (!currentPage) {
        return;
      }
      let hPadding = _ui_utils.SCROLLBAR_PADDING,
        vPadding = _ui_utils.VERTICAL_PADDING;
      if (this.isInPresentationMode) {
        hPadding = vPadding = 4;
        if (this._spreadMode !== _ui_utils.SpreadMode.NONE) {
          hPadding *= 2;
        }
      } else if (this.removePageBorders) {
        hPadding = vPadding = 0;
      } else if (this._scrollMode === _ui_utils.ScrollMode.HORIZONTAL) {
        var _ref6 = [vPadding, hPadding];
        hPadding = _ref6[0];
        vPadding = _ref6[1];
      }
      const pageWidthScale = (this.container.clientWidth - hPadding) / currentPage.width * currentPage.scale / this._pageWidthScaleFactor;
      const pageHeightScale = (this.container.clientHeight - vPadding) / currentPage.height * currentPage.scale;
      switch (value) {
        case "page-actual":
          scale = 1;
          break;
        case "page-width":
          scale = pageWidthScale;
          break;
        case "page-height":
          scale = pageHeightScale;
          break;
        case "page-fit":
          scale = Math.min(pageWidthScale, pageHeightScale);
          break;
        case "auto":
          const horizontalScale = (0, _ui_utils.isPortraitOrientation)(currentPage) ? pageWidthScale : Math.min(pageHeightScale, pageWidthScale);
          scale = Math.min(_ui_utils.MAX_AUTO_SCALE, horizontalScale);
          break;
        default:
          console.error(`_setScale: "${value}" is an unknown zoom value.`);
          return;
      }
      options.preset = true;
      this._setScaleUpdatePages(scale, value, options);
    }
  }
  pageLabelToPageNumber(label) {
    if (!this._pageLabels) {
      return null;
    }
    const i = this._pageLabels.indexOf(label);
    if (i < 0) {
      return null;
    }
    return i + 1;
  }
  scrollPageIntoView(_ref7) {
    let pageNumber = _ref7.pageNumber,
      _ref7$destArray = _ref7.destArray,
      destArray = _ref7$destArray === void 0 ? null : _ref7$destArray,
      _ref7$allowNegativeOf = _ref7.allowNegativeOffset,
      allowNegativeOffset = _ref7$allowNegativeOf === void 0 ? false : _ref7$allowNegativeOf,
      _ref7$ignoreDestinati = _ref7.ignoreDestinationZoom,
      ignoreDestinationZoom = _ref7$ignoreDestinati === void 0 ? false : _ref7$ignoreDestinati;
    if (!this.pdfDocument) {
      return;
    }
    const pageView = Number.isInteger(pageNumber) && this._pages[pageNumber - 1];
    if (!pageView) {
      console.error(`scrollPageIntoView: "${pageNumber}" is not a valid pageNumber parameter.`);
      return;
    }
    if (this.isInPresentationMode || !destArray) {
      this._setCurrentPageNumber(pageNumber, true);
      return;
    }
    let x = 0,
      y = 0;
    let width = 0,
      height = 0,
      widthScale,
      heightScale;
    const changeOrientation = pageView.rotation % 180 !== 0;
    const pageWidth = (changeOrientation ? pageView.height : pageView.width) / pageView.scale / _pdfjsLib.PixelsPerInch.PDF_TO_CSS_UNITS;
    const pageHeight = (changeOrientation ? pageView.width : pageView.height) / pageView.scale / _pdfjsLib.PixelsPerInch.PDF_TO_CSS_UNITS;
    let scale = 0;
    switch (destArray[1].name) {
      case "XYZ":
        x = destArray[2];
        y = destArray[3];
        scale = destArray[4];
        x = x !== null ? x : 0;
        y = y !== null ? y : pageHeight;
        break;
      case "Fit":
      case "FitB":
        scale = "page-fit";
        break;
      case "FitH":
      case "FitBH":
        y = destArray[2];
        scale = "page-width";
        if (y === null && this._location) {
          x = this._location.left;
          y = this._location.top;
        } else if (typeof y !== "number" || y < 0) {
          y = pageHeight;
        }
        break;
      case "FitV":
      case "FitBV":
        x = destArray[2];
        width = pageWidth;
        height = pageHeight;
        scale = "page-height";
        break;
      case "FitR":
        x = destArray[2];
        y = destArray[3];
        width = destArray[4] - x;
        height = destArray[5] - y;
        let hPadding = _ui_utils.SCROLLBAR_PADDING,
          vPadding = _ui_utils.VERTICAL_PADDING;
        if (this.removePageBorders) {
          hPadding = vPadding = 0;
        }
        widthScale = (this.container.clientWidth - hPadding) / width / _pdfjsLib.PixelsPerInch.PDF_TO_CSS_UNITS;
        heightScale = (this.container.clientHeight - vPadding) / height / _pdfjsLib.PixelsPerInch.PDF_TO_CSS_UNITS;
        scale = Math.min(Math.abs(widthScale), Math.abs(heightScale));
        break;
      default:
        console.error(`scrollPageIntoView: "${destArray[1].name}" is not a valid destination type.`);
        return;
    }
    if (!ignoreDestinationZoom) {
      if (scale && scale !== this._currentScale) {
        this.currentScaleValue = scale;
      } else if (this._currentScale === _ui_utils.UNKNOWN_SCALE) {
        this.currentScaleValue = _ui_utils.DEFAULT_SCALE_VALUE;
      }
    }
    if (scale === "page-fit" && !destArray[4]) {
      _classPrivateMethodGet(this, _scrollIntoView, _scrollIntoView2).call(this, pageView);
      return;
    }
    const boundingRect = [pageView.viewport.convertToViewportPoint(x, y), pageView.viewport.convertToViewportPoint(x + width, y + height)];
    let left = Math.min(boundingRect[0][0], boundingRect[1][0]);
    let top = Math.min(boundingRect[0][1], boundingRect[1][1]);
    if (!allowNegativeOffset) {
      left = Math.max(left, 0);
      top = Math.max(top, 0);
    }
    _classPrivateMethodGet(this, _scrollIntoView, _scrollIntoView2).call(this, pageView, {
      left,
      top
    });
  }
  _updateLocation(firstPage) {
    const currentScale = this._currentScale;
    const currentScaleValue = this._currentScaleValue;
    const normalizedScaleValue = parseFloat(currentScaleValue) === currentScale ? Math.round(currentScale * 10000) / 100 : currentScaleValue;
    const pageNumber = firstPage.id;
    const currentPageView = this._pages[pageNumber - 1];
    const container = this.container;
    const topLeft = currentPageView.getPagePoint(container.scrollLeft - firstPage.x, container.scrollTop - firstPage.y);
    const intLeft = Math.round(topLeft[0]);
    const intTop = Math.round(topLeft[1]);
    let pdfOpenParams = `#page=${pageNumber}`;
    if (!this.isInPresentationMode) {
      pdfOpenParams += `&zoom=${normalizedScaleValue},${intLeft},${intTop}`;
    }
    this._location = {
      pageNumber,
      scale: normalizedScaleValue,
      top: intTop,
      left: intLeft,
      rotation: this._pagesRotation,
      pdfOpenParams
    };
  }
  update() {
    const visible = this._getVisiblePages();
    const visiblePages = visible.views,
      numVisiblePages = visiblePages.length;
    if (numVisiblePages === 0) {
      return;
    }
    const newCacheSize = Math.max(DEFAULT_CACHE_SIZE, 2 * numVisiblePages + 1);
    _classPrivateFieldGet(this, _buffer).resize(newCacheSize, visible.ids);
    this.renderingQueue.renderHighestPriority(visible);
    const isSimpleLayout = this._spreadMode === _ui_utils.SpreadMode.NONE && (this._scrollMode === _ui_utils.ScrollMode.PAGE || this._scrollMode === _ui_utils.ScrollMode.VERTICAL);
    const currentId = this._currentPageNumber;
    let stillFullyVisible = false;
    var _iterator2 = _createForOfIteratorHelper(visiblePages),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        const page = _step2.value;
        if (page.percent < 100) {
          break;
        }
        if (page.id === currentId && isSimpleLayout) {
          stillFullyVisible = true;
          break;
        }
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
    this._setCurrentPageNumber(stillFullyVisible ? currentId : visiblePages[0].id);
    this._updateLocation(visible.first);
    this.eventBus.dispatch("updateviewarea", {
      source: this,
      location: this._location
    });
  }
  containsElement(element) {
    return this.container.contains(element);
  }
  focus() {
    this.container.focus();
  }
  get _isContainerRtl() {
    return getComputedStyle(this.container).direction === "rtl";
  }
  get isInPresentationMode() {
    return this.presentationModeState === _ui_utils.PresentationModeState.FULLSCREEN;
  }
  get isChangingPresentationMode() {
    return this.presentationModeState === _ui_utils.PresentationModeState.CHANGING;
  }
  get isHorizontalScrollbarEnabled() {
    return this.isInPresentationMode ? false : this.container.scrollWidth > this.container.clientWidth;
  }
  get isVerticalScrollbarEnabled() {
    return this.isInPresentationMode ? false : this.container.scrollHeight > this.container.clientHeight;
  }
  _getVisiblePages() {
    const views = this._scrollMode === _ui_utils.ScrollMode.PAGE ? _classPrivateFieldGet(this, _scrollModePageState).pages : this._pages,
      horizontal = this._scrollMode === _ui_utils.ScrollMode.HORIZONTAL,
      rtl = horizontal && this._isContainerRtl;
    return (0, _ui_utils.getVisibleElements)({
      scrollEl: this.container,
      views,
      sortByVisibility: true,
      horizontal,
      rtl
    });
  }
  isPageVisible(pageNumber) {
    if (!this.pdfDocument) {
      return false;
    }
    if (!(Number.isInteger(pageNumber) && pageNumber > 0 && pageNumber <= this.pagesCount)) {
      console.error(`isPageVisible: "${pageNumber}" is not a valid page.`);
      return false;
    }
    return this._getVisiblePages().ids.has(pageNumber);
  }
  isPageCached(pageNumber) {
    if (!this.pdfDocument) {
      return false;
    }
    if (!(Number.isInteger(pageNumber) && pageNumber > 0 && pageNumber <= this.pagesCount)) {
      console.error(`isPageCached: "${pageNumber}" is not a valid page.`);
      return false;
    }
    const pageView = this._pages[pageNumber - 1];
    return _classPrivateFieldGet(this, _buffer).has(pageView);
  }
  cleanup() {
    var _iterator3 = _createForOfIteratorHelper(this._pages),
      _step3;
    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        const pageView = _step3.value;
        if (pageView.renderingState !== _ui_utils.RenderingStates.FINISHED) {
          pageView.reset();
        }
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }
  }
  _cancelRendering() {
    var _iterator4 = _createForOfIteratorHelper(this._pages),
      _step4;
    try {
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
        const pageView = _step4.value;
        pageView.cancelRendering();
      }
    } catch (err) {
      _iterator4.e(err);
    } finally {
      _iterator4.f();
    }
  }
  forceRendering(currentlyVisiblePages) {
    const visiblePages = currentlyVisiblePages || this._getVisiblePages();
    const scrollAhead = _classPrivateMethodGet(this, _getScrollAhead, _getScrollAhead2).call(this, visiblePages);
    const preRenderExtra = this._spreadMode !== _ui_utils.SpreadMode.NONE && this._scrollMode !== _ui_utils.ScrollMode.HORIZONTAL;
    const pageView = this.renderingQueue.getHighestPriority(visiblePages, this._pages, scrollAhead, preRenderExtra);
    if (pageView) {
      _classPrivateMethodGet(this, _ensurePdfPageLoaded, _ensurePdfPageLoaded2).call(this, pageView).then(() => {
        this.renderingQueue.renderView(pageView);
      });
      return true;
    }
    return false;
  }
  get hasEqualPageSizes() {
    const firstPageView = this._pages[0];
    for (let i = 1, ii = this._pages.length; i < ii; ++i) {
      const pageView = this._pages[i];
      if (pageView.width !== firstPageView.width || pageView.height !== firstPageView.height) {
        return false;
      }
    }
    return true;
  }
  getPagesOverview() {
    return this._pages.map(pageView => {
      const viewport = pageView.pdfPage.getViewport({
        scale: 1
      });
      if (!this.enablePrintAutoRotate || (0, _ui_utils.isPortraitOrientation)(viewport)) {
        return {
          width: viewport.width,
          height: viewport.height,
          rotation: viewport.rotation
        };
      }
      return {
        width: viewport.height,
        height: viewport.width,
        rotation: (viewport.rotation - 90) % 360
      };
    });
  }
  get optionalContentConfigPromise() {
    if (!this.pdfDocument) {
      return Promise.resolve(null);
    }
    if (!this._optionalContentConfigPromise) {
      console.error("optionalContentConfigPromise: Not initialized yet.");
      return this.pdfDocument.getOptionalContentConfig();
    }
    return this._optionalContentConfigPromise;
  }
  set optionalContentConfigPromise(promise) {
    if (!(promise instanceof Promise)) {
      throw new Error(`Invalid optionalContentConfigPromise: ${promise}`);
    }
    if (!this.pdfDocument) {
      return;
    }
    if (!this._optionalContentConfigPromise) {
      return;
    }
    this._optionalContentConfigPromise = promise;
    this.refresh(false, {
      optionalContentConfigPromise: promise
    });
    this.eventBus.dispatch("optionalcontentconfigchanged", {
      source: this,
      promise
    });
  }
  get scrollMode() {
    return this._scrollMode;
  }
  set scrollMode(mode) {
    if (this._scrollMode === mode) {
      return;
    }
    if (!(0, _ui_utils.isValidScrollMode)(mode)) {
      throw new Error(`Invalid scroll mode: ${mode}`);
    }
    if (this.pagesCount > PagesCountLimit.FORCE_SCROLL_MODE_PAGE) {
      return;
    }
    this._previousScrollMode = this._scrollMode;
    this._scrollMode = mode;
    this.eventBus.dispatch("scrollmodechanged", {
      source: this,
      mode
    });
    this._updateScrollMode(this._currentPageNumber);
  }
  _updateScrollMode() {
    let pageNumber = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    const scrollMode = this._scrollMode,
      viewer = this.viewer;
    viewer.classList.toggle("scrollHorizontal", scrollMode === _ui_utils.ScrollMode.HORIZONTAL);
    viewer.classList.toggle("scrollWrapped", scrollMode === _ui_utils.ScrollMode.WRAPPED);
    if (!this.pdfDocument || !pageNumber) {
      return;
    }
    if (scrollMode === _ui_utils.ScrollMode.PAGE) {
      _classPrivateMethodGet(this, _ensurePageViewVisible, _ensurePageViewVisible2).call(this);
    } else if (this._previousScrollMode === _ui_utils.ScrollMode.PAGE) {
      this._updateSpreadMode();
    }
    if (this._currentScaleValue && isNaN(this._currentScaleValue)) {
      this._setScale(this._currentScaleValue, {
        noScroll: true
      });
    }
    this._setCurrentPageNumber(pageNumber, true);
    this.update();
  }
  get spreadMode() {
    return this._spreadMode;
  }
  set spreadMode(mode) {
    if (this._spreadMode === mode) {
      return;
    }
    if (!(0, _ui_utils.isValidSpreadMode)(mode)) {
      throw new Error(`Invalid spread mode: ${mode}`);
    }
    this._spreadMode = mode;
    this.eventBus.dispatch("spreadmodechanged", {
      source: this,
      mode
    });
    this._updateSpreadMode(this._currentPageNumber);
  }
  _updateSpreadMode() {
    let pageNumber = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    if (!this.pdfDocument) {
      return;
    }
    const viewer = this.viewer,
      pages = this._pages;
    if (this._scrollMode === _ui_utils.ScrollMode.PAGE) {
      _classPrivateMethodGet(this, _ensurePageViewVisible, _ensurePageViewVisible2).call(this);
    } else {
      viewer.textContent = "";
      if (this._spreadMode === _ui_utils.SpreadMode.NONE) {
        var _iterator5 = _createForOfIteratorHelper(this._pages),
          _step5;
        try {
          for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
            const pageView = _step5.value;
            viewer.append(pageView.div);
          }
        } catch (err) {
          _iterator5.e(err);
        } finally {
          _iterator5.f();
        }
      } else {
        const parity = this._spreadMode - 1;
        let spread = null;
        for (let i = 0, ii = pages.length; i < ii; ++i) {
          if (spread === null) {
            spread = document.createElement("div");
            spread.className = "spread";
            viewer.append(spread);
          } else if (i % 2 === parity) {
            spread = spread.cloneNode(false);
            viewer.append(spread);
          }
          spread.append(pages[i].div);
        }
      }
    }
    if (!pageNumber) {
      return;
    }
    if (this._currentScaleValue && isNaN(this._currentScaleValue)) {
      this._setScale(this._currentScaleValue, {
        noScroll: true
      });
    }
    this._setCurrentPageNumber(pageNumber, true);
    this.update();
  }
  _getPageAdvance(currentPageNumber) {
    let previous = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    switch (this._scrollMode) {
      case _ui_utils.ScrollMode.WRAPPED:
        {
          const _this$_getVisiblePage = this._getVisiblePages(),
            views = _this$_getVisiblePage.views,
            pageLayout = new Map();
          var _iterator6 = _createForOfIteratorHelper(views),
            _step6;
          try {
            for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
              const _step6$value = _step6.value,
                id = _step6$value.id,
                y = _step6$value.y,
                percent = _step6$value.percent,
                widthPercent = _step6$value.widthPercent;
              if (percent === 0 || widthPercent < 100) {
                continue;
              }
              let yArray = pageLayout.get(y);
              if (!yArray) {
                pageLayout.set(y, yArray || (yArray = []));
              }
              yArray.push(id);
            }
          } catch (err) {
            _iterator6.e(err);
          } finally {
            _iterator6.f();
          }
          var _iterator7 = _createForOfIteratorHelper(pageLayout.values()),
            _step7;
          try {
            for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
              const yArray = _step7.value;
              const currentIndex = yArray.indexOf(currentPageNumber);
              if (currentIndex === -1) {
                continue;
              }
              const numPages = yArray.length;
              if (numPages === 1) {
                break;
              }
              if (previous) {
                for (let i = currentIndex - 1, ii = 0; i >= ii; i--) {
                  const currentId = yArray[i],
                    expectedId = yArray[i + 1] - 1;
                  if (currentId < expectedId) {
                    return currentPageNumber - expectedId;
                  }
                }
              } else {
                for (let i = currentIndex + 1, ii = numPages; i < ii; i++) {
                  const currentId = yArray[i],
                    expectedId = yArray[i - 1] + 1;
                  if (currentId > expectedId) {
                    return expectedId - currentPageNumber;
                  }
                }
              }
              if (previous) {
                const firstId = yArray[0];
                if (firstId < currentPageNumber) {
                  return currentPageNumber - firstId + 1;
                }
              } else {
                const lastId = yArray[numPages - 1];
                if (lastId > currentPageNumber) {
                  return lastId - currentPageNumber + 1;
                }
              }
              break;
            }
          } catch (err) {
            _iterator7.e(err);
          } finally {
            _iterator7.f();
          }
          break;
        }
      case _ui_utils.ScrollMode.HORIZONTAL:
        {
          break;
        }
      case _ui_utils.ScrollMode.PAGE:
      case _ui_utils.ScrollMode.VERTICAL:
        {
          if (this._spreadMode === _ui_utils.SpreadMode.NONE) {
            break;
          }
          const parity = this._spreadMode - 1;
          if (previous && currentPageNumber % 2 !== parity) {
            break;
          } else if (!previous && currentPageNumber % 2 === parity) {
            break;
          }
          const _this$_getVisiblePage2 = this._getVisiblePages(),
            views = _this$_getVisiblePage2.views,
            expectedId = previous ? currentPageNumber - 1 : currentPageNumber + 1;
          var _iterator8 = _createForOfIteratorHelper(views),
            _step8;
          try {
            for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
              const _step8$value = _step8.value,
                id = _step8$value.id,
                percent = _step8$value.percent,
                widthPercent = _step8$value.widthPercent;
              if (id !== expectedId) {
                continue;
              }
              if (percent > 0 && widthPercent === 100) {
                return 2;
              }
              break;
            }
          } catch (err) {
            _iterator8.e(err);
          } finally {
            _iterator8.f();
          }
          break;
        }
    }
    return 1;
  }
  nextPage() {
    const currentPageNumber = this._currentPageNumber,
      pagesCount = this.pagesCount;
    if (currentPageNumber >= pagesCount) {
      return false;
    }
    const advance = this._getPageAdvance(currentPageNumber, false) || 1;
    this.currentPageNumber = Math.min(currentPageNumber + advance, pagesCount);
    return true;
  }
  previousPage() {
    const currentPageNumber = this._currentPageNumber;
    if (currentPageNumber <= 1) {
      return false;
    }
    const advance = this._getPageAdvance(currentPageNumber, true) || 1;
    this.currentPageNumber = Math.max(currentPageNumber - advance, 1);
    return true;
  }
  increaseScale() {
    let _ref8 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      drawingDelay = _ref8.drawingDelay,
      scaleFactor = _ref8.scaleFactor,
      steps = _ref8.steps;
    if (!this.pdfDocument) {
      return;
    }
    let newScale = this._currentScale;
    if (scaleFactor > 1) {
      newScale = Math.min(_ui_utils.MAX_SCALE, Math.round(newScale * scaleFactor * 100) / 100);
    } else {
      var _steps;
      (_steps = steps) !== null && _steps !== void 0 ? _steps : steps = 1;
      do {
        newScale = (newScale * _ui_utils.DEFAULT_SCALE_DELTA).toFixed(2);
        newScale = Math.min(_ui_utils.MAX_SCALE, Math.ceil(newScale * 10) / 10);
      } while (--steps > 0 && newScale < _ui_utils.MAX_SCALE);
    }
    this._setScale(newScale, {
      noScroll: false,
      drawingDelay
    });
  }
  decreaseScale() {
    let _ref9 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      drawingDelay = _ref9.drawingDelay,
      scaleFactor = _ref9.scaleFactor,
      steps = _ref9.steps;
    if (!this.pdfDocument) {
      return;
    }
    let newScale = this._currentScale;
    if (scaleFactor > 0 && scaleFactor < 1) {
      newScale = Math.max(_ui_utils.MIN_SCALE, Math.round(newScale * scaleFactor * 100) / 100);
    } else {
      var _steps2;
      (_steps2 = steps) !== null && _steps2 !== void 0 ? _steps2 : steps = 1;
      do {
        newScale = (newScale / _ui_utils.DEFAULT_SCALE_DELTA).toFixed(2);
        newScale = Math.max(_ui_utils.MIN_SCALE, Math.floor(newScale * 10) / 10);
      } while (--steps > 0 && newScale > _ui_utils.MIN_SCALE);
    }
    this._setScale(newScale, {
      noScroll: false,
      drawingDelay
    });
  }
  get containerTopLeft() {
    return _classPrivateFieldGet(this, _containerTopLeft) || _classPrivateFieldSet(this, _containerTopLeft, [this.container.offsetTop, this.container.offsetLeft]);
  }
  get annotationEditorMode() {
    return _classPrivateFieldGet(this, _annotationEditorUIManager) ? _classPrivateFieldGet(this, _annotationEditorMode) : _pdfjsLib.AnnotationEditorType.DISABLE;
  }
  set annotationEditorMode(mode) {
    if (!_classPrivateFieldGet(this, _annotationEditorUIManager)) {
      throw new Error(`The AnnotationEditor is not enabled.`);
    }
    if (_classPrivateFieldGet(this, _annotationEditorMode) === mode) {
      return;
    }
    if (!isValidAnnotationEditorMode(mode)) {
      throw new Error(`Invalid AnnotationEditor mode: ${mode}`);
    }
    if (!this.pdfDocument) {
      return;
    }
    _classPrivateFieldSet(this, _annotationEditorMode, mode);
    this.eventBus.dispatch("annotationeditormodechanged", {
      source: this,
      mode
    });
    _classPrivateFieldGet(this, _annotationEditorUIManager).updateMode(mode);
  }
  set annotationEditorParams(_ref10) {
    let type = _ref10.type,
      value = _ref10.value;
    if (!_classPrivateFieldGet(this, _annotationEditorUIManager)) {
      throw new Error(`The AnnotationEditor is not enabled.`);
    }
    _classPrivateFieldGet(this, _annotationEditorUIManager).updateParams(type, value);
  }
  refresh() {
    let noUpdate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    let updateArgs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Object.create(null);
    if (!this.pdfDocument) {
      return;
    }
    var _iterator9 = _createForOfIteratorHelper(this._pages),
      _step9;
    try {
      for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
        const pageView = _step9.value;
        pageView.update(updateArgs);
      }
    } catch (err) {
      _iterator9.e(err);
    } finally {
      _iterator9.f();
    }
    if (_classPrivateFieldGet(this, _scaleTimeoutId) !== null) {
      clearTimeout(_classPrivateFieldGet(this, _scaleTimeoutId));
      _classPrivateFieldSet(this, _scaleTimeoutId, null);
    }
    if (!noUpdate) {
      this.update();
    }
  }
}
exports.PDFViewer = PDFViewer;
function _layerProperties2() {
  const self = this;
  return {
    get annotationEditorUIManager() {
      return _classPrivateFieldGet(self, _annotationEditorUIManager);
    },
    get annotationStorage() {
      var _self$pdfDocument;
      return (_self$pdfDocument = self.pdfDocument) === null || _self$pdfDocument === void 0 ? void 0 : _self$pdfDocument.annotationStorage;
    },
    get downloadManager() {
      return self.downloadManager;
    },
    get enableScripting() {
      return !!self._scriptingManager;
    },
    get fieldObjectsPromise() {
      var _self$pdfDocument2;
      return (_self$pdfDocument2 = self.pdfDocument) === null || _self$pdfDocument2 === void 0 ? void 0 : _self$pdfDocument2.getFieldObjects();
    },
    get findController() {
      return self.findController;
    },
    get hasJSActionsPromise() {
      var _self$pdfDocument3;
      return (_self$pdfDocument3 = self.pdfDocument) === null || _self$pdfDocument3 === void 0 ? void 0 : _self$pdfDocument3.hasJSActions();
    },
    get linkService() {
      return self.linkService;
    }
  };
}
function _initializePermissions2(permissions) {
  const params = {
    annotationEditorMode: _classPrivateFieldGet(this, _annotationEditorMode),
    annotationMode: _classPrivateFieldGet(this, _annotationMode),
    textLayerMode: this.textLayerMode
  };
  if (!permissions) {
    return params;
  }
  if (!permissions.includes(_pdfjsLib.PermissionFlag.COPY)) {
    this.viewer.classList.add(ENABLE_PERMISSIONS_CLASS);
  }
  if (!permissions.includes(_pdfjsLib.PermissionFlag.MODIFY_CONTENTS)) {
    params.annotationEditorMode = _pdfjsLib.AnnotationEditorType.DISABLE;
  }
  if (!permissions.includes(_pdfjsLib.PermissionFlag.MODIFY_ANNOTATIONS) && !permissions.includes(_pdfjsLib.PermissionFlag.FILL_INTERACTIVE_FORMS) && _classPrivateFieldGet(this, _annotationMode) === _pdfjsLib.AnnotationMode.ENABLE_FORMS) {
    params.annotationMode = _pdfjsLib.AnnotationMode.ENABLE;
  }
  return params;
}
function _onePageRenderedOrForceFetch2() {
  if (document.visibilityState === "hidden" || !this.container.offsetParent || this._getVisiblePages().views.length === 0) {
    return Promise.resolve();
  }
  const visibilityChangePromise = new Promise(resolve => {
    _classPrivateFieldSet(this, _onVisibilityChange, () => {
      if (document.visibilityState !== "hidden") {
        return;
      }
      resolve();
      document.removeEventListener("visibilitychange", _classPrivateFieldGet(this, _onVisibilityChange));
      _classPrivateFieldSet(this, _onVisibilityChange, null);
    });
    document.addEventListener("visibilitychange", _classPrivateFieldGet(this, _onVisibilityChange));
  });
  return Promise.race([this._onePageRenderedCapability.promise, visibilityChangePromise]);
}
function _ensurePageViewVisible2() {
  if (this._scrollMode !== _ui_utils.ScrollMode.PAGE) {
    throw new Error("#ensurePageViewVisible: Invalid scrollMode value.");
  }
  const pageNumber = this._currentPageNumber,
    state = _classPrivateFieldGet(this, _scrollModePageState),
    viewer = this.viewer;
  viewer.textContent = "";
  state.pages.length = 0;
  if (this._spreadMode === _ui_utils.SpreadMode.NONE && !this.isInPresentationMode) {
    const pageView = this._pages[pageNumber - 1];
    viewer.append(pageView.div);
    state.pages.push(pageView);
  } else {
    const pageIndexSet = new Set(),
      parity = this._spreadMode - 1;
    if (parity === -1) {
      pageIndexSet.add(pageNumber - 1);
    } else if (pageNumber % 2 !== parity) {
      pageIndexSet.add(pageNumber - 1);
      pageIndexSet.add(pageNumber);
    } else {
      pageIndexSet.add(pageNumber - 2);
      pageIndexSet.add(pageNumber - 1);
    }
    const spread = document.createElement("div");
    spread.className = "spread";
    if (this.isInPresentationMode) {
      const dummyPage = document.createElement("div");
      dummyPage.className = "dummyPage";
      spread.append(dummyPage);
    }
    var _iterator10 = _createForOfIteratorHelper(pageIndexSet),
      _step10;
    try {
      for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
        const i = _step10.value;
        const pageView = this._pages[i];
        if (!pageView) {
          continue;
        }
        spread.append(pageView.div);
        state.pages.push(pageView);
      }
    } catch (err) {
      _iterator10.e(err);
    } finally {
      _iterator10.f();
    }
    viewer.append(spread);
  }
  state.scrollDown = pageNumber >= state.previousPageNumber;
  state.previousPageNumber = pageNumber;
}
function _scrollIntoView2(pageView) {
  let pageSpot = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  const div = pageView.div,
    id = pageView.id;
  if (this._currentPageNumber !== id) {
    this._setCurrentPageNumber(id);
  }
  if (this._scrollMode === _ui_utils.ScrollMode.PAGE) {
    _classPrivateMethodGet(this, _ensurePageViewVisible, _ensurePageViewVisible2).call(this);
    this.update();
  }
  if (!pageSpot && !this.isInPresentationMode) {
    const left = div.offsetLeft + div.clientLeft,
      right = left + div.clientWidth;
    const _this$container2 = this.container,
      scrollLeft = _this$container2.scrollLeft,
      clientWidth = _this$container2.clientWidth;
    if (this._scrollMode === _ui_utils.ScrollMode.HORIZONTAL || left < scrollLeft || right > scrollLeft + clientWidth) {
      pageSpot = {
        left: 0,
        top: 0
      };
    }
  }
  (0, _ui_utils.scrollIntoView)(div, pageSpot);
  if (!this._currentScaleValue && this._location) {
    this._location = null;
  }
}
function _isSameScale2(newScale) {
  return newScale === this._currentScale || Math.abs(newScale - this._currentScale) < 1e-15;
}
function _resetCurrentPageView2() {
  const pageView = this._pages[this._currentPageNumber - 1];
  if (this.isInPresentationMode) {
    this._setScale(this._currentScaleValue, {
      noScroll: true
    });
  }
  _classPrivateMethodGet(this, _scrollIntoView, _scrollIntoView2).call(this, pageView);
}
function _ensurePdfPageLoaded2(_x2) {
  return _ensurePdfPageLoaded3.apply(this, arguments);
}
function _ensurePdfPageLoaded3() {
  _ensurePdfPageLoaded3 = _asyncToGenerator(function* (pageView) {
    if (pageView.pdfPage) {
      return pageView.pdfPage;
    }
    try {
      var _this$linkService$_ca, _this$linkService;
      const pdfPage = yield this.pdfDocument.getPage(pageView.id);
      if (!pageView.pdfPage) {
        pageView.setPdfPage(pdfPage);
      }
      if (!((_this$linkService$_ca = (_this$linkService = this.linkService)._cachedPageNumber) !== null && _this$linkService$_ca !== void 0 && _this$linkService$_ca.call(_this$linkService, pdfPage.ref))) {
        this.linkService.cachePageRef(pageView.id, pdfPage.ref);
      }
      return pdfPage;
    } catch (reason) {
      console.error("Unable to get page for page view", reason);
      return null;
    }
  });
  return _ensurePdfPageLoaded3.apply(this, arguments);
}
function _getScrollAhead2(visible) {
  var _visible$first, _visible$last;
  if (((_visible$first = visible.first) === null || _visible$first === void 0 ? void 0 : _visible$first.id) === 1) {
    return true;
  } else if (((_visible$last = visible.last) === null || _visible$last === void 0 ? void 0 : _visible$last.id) === this.pagesCount) {
    return false;
  }
  switch (this._scrollMode) {
    case _ui_utils.ScrollMode.PAGE:
      return _classPrivateFieldGet(this, _scrollModePageState).scrollDown;
    case _ui_utils.ScrollMode.HORIZONTAL:
      return this.scroll.right;
  }
  return this.scroll.down;
}
function _updateContainerHeightCss2() {
  let height = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.container.clientHeight;
  if (height !== _classPrivateFieldGet(this, _previousContainerHeight)) {
    _classPrivateFieldSet(this, _previousContainerHeight, height);
    _ui_utils.docStyle.setProperty("--viewer-container-height", `${height}px`);
  }
}
function _resizeObserverCallback2(entries) {
  var _iterator11 = _createForOfIteratorHelper(entries),
    _step11;
  try {
    for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
      const entry = _step11.value;
      if (entry.target === this.container) {
        _classPrivateMethodGet(this, _updateContainerHeightCss, _updateContainerHeightCss2).call(this, Math.floor(entry.borderBoxSize[0].blockSize));
        _classPrivateFieldSet(this, _containerTopLeft, null);
        break;
      }
    }
  } catch (err) {
    _iterator11.e(err);
  } finally {
    _iterator11.f();
  }
}

/***/ }),
/* 31 */
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.NullL10n = void 0;
exports.fixupLangCode = fixupLangCode;
exports.getL10nFallback = getL10nFallback;
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
const DEFAULT_L10N_STRINGS = {
  of_pages: "of {{pagesCount}}",
  page_of_pages: "({{pageNumber}} of {{pagesCount}})",
  document_properties_kb: "{{size_kb}} KB ({{size_b}} bytes)",
  document_properties_mb: "{{size_mb}} MB ({{size_b}} bytes)",
  document_properties_date_string: "{{date}}, {{time}}",
  document_properties_page_size_unit_inches: "in",
  document_properties_page_size_unit_millimeters: "mm",
  document_properties_page_size_orientation_portrait: "portrait",
  document_properties_page_size_orientation_landscape: "landscape",
  document_properties_page_size_name_a3: "A3",
  document_properties_page_size_name_a4: "A4",
  document_properties_page_size_name_letter: "Letter",
  document_properties_page_size_name_legal: "Legal",
  document_properties_page_size_dimension_string: "{{width}} × {{height}} {{unit}} ({{orientation}})",
  document_properties_page_size_dimension_name_string: "{{width}} × {{height}} {{unit}} ({{name}}, {{orientation}})",
  document_properties_linearized_yes: "Yes",
  document_properties_linearized_no: "No",
  additional_layers: "Additional Layers",
  page_landmark: "Page {{page}}",
  thumb_page_title: "Page {{page}}",
  thumb_page_canvas: "Thumbnail of Page {{page}}",
  find_reached_top: "Reached top of document, continued from bottom",
  find_reached_bottom: "Reached end of document, continued from top",
  "find_match_count[one]": "{{current}} of {{total}} match",
  "find_match_count[other]": "{{current}} of {{total}} matches",
  "find_match_count_limit[one]": "More than {{limit}} match",
  "find_match_count_limit[other]": "More than {{limit}} matches",
  find_not_found: "Phrase not found",
  page_scale_width: "Page Width",
  page_scale_fit: "Page Fit",
  page_scale_auto: "Automatic Zoom",
  page_scale_actual: "Actual Size",
  page_scale_percent: "{{scale}}%",
  loading_error: "An error occurred while loading the PDF.",
  invalid_file_error: "Invalid or corrupted PDF file.",
  missing_file_error: "Missing PDF file.",
  unexpected_response_error: "Unexpected server response.",
  rendering_error: "An error occurred while rendering the page.",
  printing_not_supported: "Warning: Printing is not fully supported by this browser.",
  printing_not_ready: "Warning: The PDF is not fully loaded for printing.",
  web_fonts_disabled: "Web fonts are disabled: unable to use embedded PDF fonts.",
  free_text2_default_content: "Start typing…",
  editor_free_text2_aria_label: "Text Editor",
  editor_ink2_aria_label: "Draw Editor",
  editor_ink_canvas_aria_label: "User-created image"
};
{
  DEFAULT_L10N_STRINGS.print_progress_percent = "{{progress}}%";
}
function getL10nFallback(key, args) {
  switch (key) {
    case "find_match_count":
      key = `find_match_count[${args.total === 1 ? "one" : "other"}]`;
      break;
    case "find_match_count_limit":
      key = `find_match_count_limit[${args.limit === 1 ? "one" : "other"}]`;
      break;
  }
  return DEFAULT_L10N_STRINGS[key] || "";
}
const PARTIAL_LANG_CODES = {
  en: "en-US",
  es: "es-ES",
  fy: "fy-NL",
  ga: "ga-IE",
  gu: "gu-IN",
  hi: "hi-IN",
  hy: "hy-AM",
  nb: "nb-NO",
  ne: "ne-NP",
  nn: "nn-NO",
  pa: "pa-IN",
  pt: "pt-PT",
  sv: "sv-SE",
  zh: "zh-CN"
};
function fixupLangCode(langCode) {
  return PARTIAL_LANG_CODES[langCode === null || langCode === void 0 ? void 0 : langCode.toLowerCase()] || langCode;
}
function formatL10nValue(text, args) {
  if (!args) {
    return text;
  }
  return text.replace(/\{\{\s*(\w+)\s*\}\}/g, (all, name) => {
    return name in args ? args[name] : "{{" + name + "}}";
  });
}
const NullL10n = {
  getLanguage() {
    return _asyncToGenerator(function* () {
      return "en-us";
    })();
  },
  getDirection() {
    return _asyncToGenerator(function* () {
      return "ltr";
    })();
  },
  get(key) {
    var _arguments = arguments;
    return _asyncToGenerator(function* () {
      let args = _arguments.length > 1 && _arguments[1] !== undefined ? _arguments[1] : null;
      let fallback = _arguments.length > 2 && _arguments[2] !== undefined ? _arguments[2] : getL10nFallback(key, args);
      return formatL10nValue(fallback, args);
    })();
  },
  translate(element) {
    return _asyncToGenerator(function* () {})();
  }
};
exports.NullL10n = NullL10n;

/***/ }),
/* 32 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.PDFPageView = void 0;
var _pdfjsLib = __webpack_require__(4);
var _ui_utils = __webpack_require__(3);
var _annotation_editor_layer_builder = __webpack_require__(33);
var _annotation_layer_builder = __webpack_require__(34);
var _app_options = __webpack_require__(5);
var _l10n_utils = __webpack_require__(31);
var _pdf_link_service = __webpack_require__(7);
var _struct_tree_layer_builder = __webpack_require__(35);
var _text_accessibility = __webpack_require__(36);
var _text_highlighter = __webpack_require__(37);
var _text_layer_builder = __webpack_require__(38);
var _xfa_layer_builder = __webpack_require__(39);
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }
function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }
function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }
function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }
function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }
function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }
function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }
function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }
const MAX_CANVAS_PIXELS = _app_options.compatibilityParams.maxCanvasPixels || 16777216;
const DEFAULT_LAYER_PROPERTIES = () => {
  return null;
};
var _annotationMode = /*#__PURE__*/new WeakMap();
var _layerProperties = /*#__PURE__*/new WeakMap();
var _loadingId = /*#__PURE__*/new WeakMap();
var _previousRotation = /*#__PURE__*/new WeakMap();
var _renderingState = /*#__PURE__*/new WeakMap();
var _useThumbnailCanvas = /*#__PURE__*/new WeakMap();
var _setDimensions = /*#__PURE__*/new WeakSet();
var _renderAnnotationLayer = /*#__PURE__*/new WeakSet();
var _renderAnnotationEditorLayer = /*#__PURE__*/new WeakSet();
var _renderXfaLayer = /*#__PURE__*/new WeakSet();
var _renderTextLayer = /*#__PURE__*/new WeakSet();
var _renderStructTreeLayer = /*#__PURE__*/new WeakSet();
var _buildXfaTextContentItems = /*#__PURE__*/new WeakSet();
class PDFPageView {
  constructor(options) {
    var _options$textLayerMod, _options$annotationMo, _options$isOffscreenC, _this$renderingQueue;
    _classPrivateMethodInitSpec(this, _buildXfaTextContentItems);
    _classPrivateMethodInitSpec(this, _renderStructTreeLayer);
    _classPrivateMethodInitSpec(this, _renderTextLayer);
    _classPrivateMethodInitSpec(this, _renderXfaLayer);
    _classPrivateMethodInitSpec(this, _renderAnnotationEditorLayer);
    _classPrivateMethodInitSpec(this, _renderAnnotationLayer);
    _classPrivateMethodInitSpec(this, _setDimensions);
    _classPrivateFieldInitSpec(this, _annotationMode, {
      writable: true,
      value: _pdfjsLib.AnnotationMode.ENABLE_FORMS
    });
    _classPrivateFieldInitSpec(this, _layerProperties, {
      writable: true,
      value: null
    });
    _classPrivateFieldInitSpec(this, _loadingId, {
      writable: true,
      value: null
    });
    _classPrivateFieldInitSpec(this, _previousRotation, {
      writable: true,
      value: null
    });
    _classPrivateFieldInitSpec(this, _renderingState, {
      writable: true,
      value: _ui_utils.RenderingStates.INITIAL
    });
    _classPrivateFieldInitSpec(this, _useThumbnailCanvas, {
      writable: true,
      value: {
        initialOptionalContent: true,
        regularAnnotations: true
      }
    });
    const container = options.container;
    const defaultViewport = options.defaultViewport;
    this.id = options.id;
    this.renderingId = "page" + this.id;
    _classPrivateFieldSet(this, _layerProperties, options.layerProperties || DEFAULT_LAYER_PROPERTIES);
    this.pdfPage = null;
    this.pageLabel = null;
    this.rotation = 0;
    this.scale = options.scale || _ui_utils.DEFAULT_SCALE;
    this.viewport = defaultViewport;
    this.pdfPageRotate = defaultViewport.rotation;
    this._optionalContentConfigPromise = options.optionalContentConfigPromise || null;
    this.hasRestrictedScaling = false;
    this.textLayerMode = (_options$textLayerMod = options.textLayerMode) !== null && _options$textLayerMod !== void 0 ? _options$textLayerMod : _ui_utils.TextLayerMode.ENABLE;
    _classPrivateFieldSet(this, _annotationMode, (_options$annotationMo = options.annotationMode) !== null && _options$annotationMo !== void 0 ? _options$annotationMo : _pdfjsLib.AnnotationMode.ENABLE_FORMS);
    this.imageResourcesPath = options.imageResourcesPath || "";
    this.useOnlyCssZoom = options.useOnlyCssZoom || false;
    this.isOffscreenCanvasSupported = (_options$isOffscreenC = options.isOffscreenCanvasSupported) !== null && _options$isOffscreenC !== void 0 ? _options$isOffscreenC : true;
    this.maxCanvasPixels = options.maxCanvasPixels || MAX_CANVAS_PIXELS;
    this.pageColors = options.pageColors || null;
    this.eventBus = options.eventBus;
    this.renderingQueue = options.renderingQueue;
    this.renderer = options.renderer || _ui_utils.RendererType.CANVAS;
    this.l10n = options.l10n || _l10n_utils.NullL10n;
    this.paintTask = null;
    this.paintedViewportMap = new WeakMap();
    this.resume = null;
    this._renderError = null;
    this._isStandalone = !((_this$renderingQueue = this.renderingQueue) !== null && _this$renderingQueue !== void 0 && _this$renderingQueue.hasViewer());
    this._annotationCanvasMap = null;
    this.annotationLayer = null;
    this.annotationEditorLayer = null;
    this.textLayer = null;
    this.zoomLayer = null;
    this.xfaLayer = null;
    this.structTreeLayer = null;
    const div = document.createElement("div");
    div.className = "page";
    div.setAttribute("data-page-number", this.id);
    div.setAttribute("role", "region");
    this.l10n.get("page_landmark", {
      page: this.id
    }).then(msg => {
      div.setAttribute("aria-label", msg);
    });
    this.div = div;
    _classPrivateMethodGet(this, _setDimensions, _setDimensions2).call(this);
    container === null || container === void 0 ? void 0 : container.append(div);
    if (this._isStandalone) {
      container === null || container === void 0 ? void 0 : container.style.setProperty("--scale-factor", this.scale * _pdfjsLib.PixelsPerInch.PDF_TO_CSS_UNITS);
      const optionalContentConfigPromise = options.optionalContentConfigPromise;
      if (optionalContentConfigPromise) {
        optionalContentConfigPromise.then(optionalContentConfig => {
          if (optionalContentConfigPromise !== this._optionalContentConfigPromise) {
            return;
          }
          _classPrivateFieldGet(this, _useThumbnailCanvas).initialOptionalContent = optionalContentConfig.hasInitialVisibility;
        });
      }
    }
  }
  get renderingState() {
    return _classPrivateFieldGet(this, _renderingState);
  }
  set renderingState(state) {
    if (state === _classPrivateFieldGet(this, _renderingState)) {
      return;
    }
    _classPrivateFieldSet(this, _renderingState, state);
    if (_classPrivateFieldGet(this, _loadingId)) {
      clearTimeout(_classPrivateFieldGet(this, _loadingId));
      _classPrivateFieldSet(this, _loadingId, null);
    }
    switch (state) {
      case _ui_utils.RenderingStates.PAUSED:
        this.div.classList.remove("loading");
        break;
      case _ui_utils.RenderingStates.RUNNING:
        this.div.classList.add("loadingIcon");
        _classPrivateFieldSet(this, _loadingId, setTimeout(() => {
          this.div.classList.add("loading");
          _classPrivateFieldSet(this, _loadingId, null);
        }, 0));
        break;
      case _ui_utils.RenderingStates.INITIAL:
      case _ui_utils.RenderingStates.FINISHED:
        this.div.classList.remove("loadingIcon", "loading");
        break;
    }
  }
  setPdfPage(pdfPage) {
    this.pdfPage = pdfPage;
    this.pdfPageRotate = pdfPage.rotate;
    const totalRotation = (this.rotation + this.pdfPageRotate) % 360;
    this.viewport = pdfPage.getViewport({
      scale: this.scale * _pdfjsLib.PixelsPerInch.PDF_TO_CSS_UNITS,
      rotation: totalRotation
    });
    _classPrivateMethodGet(this, _setDimensions, _setDimensions2).call(this);
    this.reset();
  }
  destroy() {
    var _this$pdfPage;
    this.reset();
    (_this$pdfPage = this.pdfPage) === null || _this$pdfPage === void 0 ? void 0 : _this$pdfPage.cleanup();
  }
  get _textHighlighter() {
    return (0, _pdfjsLib.shadow)(this, "_textHighlighter", new _text_highlighter.TextHighlighter({
      pageIndex: this.id - 1,
      eventBus: this.eventBus,
      findController: _classPrivateFieldGet(this, _layerProperties).call(this).findController
    }));
  }
  _resetZoomLayer() {
    let removeFromDOM = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    if (!this.zoomLayer) {
      return;
    }
    const zoomLayerCanvas = this.zoomLayer.firstChild;
    this.paintedViewportMap.delete(zoomLayerCanvas);
    zoomLayerCanvas.width = 0;
    zoomLayerCanvas.height = 0;
    if (removeFromDOM) {
      this.zoomLayer.remove();
    }
    this.zoomLayer = null;
  }
  reset() {
    var _this$annotationLayer, _this$annotationEdito, _this$xfaLayer, _this$textLayer, _this$structTreeLayer;
    let _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$keepZoomLayer = _ref.keepZoomLayer,
      keepZoomLayer = _ref$keepZoomLayer === void 0 ? false : _ref$keepZoomLayer,
      _ref$keepAnnotationLa = _ref.keepAnnotationLayer,
      keepAnnotationLayer = _ref$keepAnnotationLa === void 0 ? false : _ref$keepAnnotationLa,
      _ref$keepAnnotationEd = _ref.keepAnnotationEditorLayer,
      keepAnnotationEditorLayer = _ref$keepAnnotationEd === void 0 ? false : _ref$keepAnnotationEd,
      _ref$keepXfaLayer = _ref.keepXfaLayer,
      keepXfaLayer = _ref$keepXfaLayer === void 0 ? false : _ref$keepXfaLayer,
      _ref$keepTextLayer = _ref.keepTextLayer,
      keepTextLayer = _ref$keepTextLayer === void 0 ? false : _ref$keepTextLayer;
    this.cancelRendering({
      keepAnnotationLayer,
      keepAnnotationEditorLayer,
      keepXfaLayer,
      keepTextLayer
    });
    this.renderingState = _ui_utils.RenderingStates.INITIAL;
    const div = this.div;
    const childNodes = div.childNodes,
      zoomLayerNode = keepZoomLayer && this.zoomLayer || null,
      annotationLayerNode = keepAnnotationLayer && ((_this$annotationLayer = this.annotationLayer) === null || _this$annotationLayer === void 0 ? void 0 : _this$annotationLayer.div) || null,
      annotationEditorLayerNode = keepAnnotationEditorLayer && ((_this$annotationEdito = this.annotationEditorLayer) === null || _this$annotationEdito === void 0 ? void 0 : _this$annotationEdito.div) || null,
      xfaLayerNode = keepXfaLayer && ((_this$xfaLayer = this.xfaLayer) === null || _this$xfaLayer === void 0 ? void 0 : _this$xfaLayer.div) || null,
      textLayerNode = keepTextLayer && ((_this$textLayer = this.textLayer) === null || _this$textLayer === void 0 ? void 0 : _this$textLayer.div) || null;
    for (let i = childNodes.length - 1; i >= 0; i--) {
      const node = childNodes[i];
      switch (node) {
        case zoomLayerNode:
        case annotationLayerNode:
        case annotationEditorLayerNode:
        case xfaLayerNode:
        case textLayerNode:
          continue;
      }
      node.remove();
    }
    div.removeAttribute("data-loaded");
    if (annotationLayerNode) {
      this.annotationLayer.hide();
    }
    if (annotationEditorLayerNode) {
      this.annotationEditorLayer.hide();
    }
    if (xfaLayerNode) {
      this.xfaLayer.hide();
    }
    if (textLayerNode) {
      this.textLayer.hide();
    }
    (_this$structTreeLayer = this.structTreeLayer) === null || _this$structTreeLayer === void 0 ? void 0 : _this$structTreeLayer.hide();
    if (!zoomLayerNode) {
      if (this.canvas) {
        this.paintedViewportMap.delete(this.canvas);
        this.canvas.width = 0;
        this.canvas.height = 0;
        delete this.canvas;
      }
      this._resetZoomLayer();
    }
    if (this.svg) {
      this.paintedViewportMap.delete(this.svg);
      delete this.svg;
    }
  }
  update(_ref2) {
    let _ref2$scale = _ref2.scale,
      scale = _ref2$scale === void 0 ? 0 : _ref2$scale,
      _ref2$rotation = _ref2.rotation,
      rotation = _ref2$rotation === void 0 ? null : _ref2$rotation,
      _ref2$optionalContent = _ref2.optionalContentConfigPromise,
      optionalContentConfigPromise = _ref2$optionalContent === void 0 ? null : _ref2$optionalContent,
      _ref2$drawingDelay = _ref2.drawingDelay,
      drawingDelay = _ref2$drawingDelay === void 0 ? -1 : _ref2$drawingDelay;
    this.scale = scale || this.scale;
    if (typeof rotation === "number") {
      this.rotation = rotation;
    }
    if (optionalContentConfigPromise instanceof Promise) {
      this._optionalContentConfigPromise = optionalContentConfigPromise;
      optionalContentConfigPromise.then(optionalContentConfig => {
        if (optionalContentConfigPromise !== this._optionalContentConfigPromise) {
          return;
        }
        _classPrivateFieldGet(this, _useThumbnailCanvas).initialOptionalContent = optionalContentConfig.hasInitialVisibility;
      });
    }
    const totalRotation = (this.rotation + this.pdfPageRotate) % 360;
    this.viewport = this.viewport.clone({
      scale: this.scale * _pdfjsLib.PixelsPerInch.PDF_TO_CSS_UNITS,
      rotation: totalRotation
    });
    _classPrivateMethodGet(this, _setDimensions, _setDimensions2).call(this);
    if (this._isStandalone) {
      var _this$div$parentNode;
      (_this$div$parentNode = this.div.parentNode) === null || _this$div$parentNode === void 0 ? void 0 : _this$div$parentNode.style.setProperty("--scale-factor", this.viewport.scale);
    }
    if (this.svg) {
      this.cssTransform({
        target: this.svg,
        redrawAnnotationLayer: true,
        redrawAnnotationEditorLayer: true,
        redrawXfaLayer: true,
        redrawTextLayer: true
      });
      this.eventBus.dispatch("pagerendered", {
        source: this,
        pageNumber: this.id,
        cssTransform: true,
        timestamp: performance.now(),
        error: this._renderError
      });
      return;
    }
    let isScalingRestricted = false;
    if (this.canvas && this.maxCanvasPixels > 0) {
      const outputScale = this.outputScale;
      if ((Math.floor(this.viewport.width) * outputScale.sx | 0) * (Math.floor(this.viewport.height) * outputScale.sy | 0) > this.maxCanvasPixels) {
        isScalingRestricted = true;
      }
    }
    const postponeDrawing = drawingDelay >= 0 && drawingDelay < 1000;
    if (this.canvas) {
      if (postponeDrawing || this.useOnlyCssZoom || this.hasRestrictedScaling && isScalingRestricted) {
        if (postponeDrawing && this.renderingState !== _ui_utils.RenderingStates.FINISHED) {
          this.cancelRendering({
            keepZoomLayer: true,
            keepAnnotationLayer: true,
            keepAnnotationEditorLayer: true,
            keepXfaLayer: true,
            keepTextLayer: true,
            cancelExtraDelay: drawingDelay
          });
          this.renderingState = _ui_utils.RenderingStates.FINISHED;
        }
        this.cssTransform({
          target: this.canvas,
          redrawAnnotationLayer: true,
          redrawAnnotationEditorLayer: true,
          redrawXfaLayer: true,
          redrawTextLayer: !postponeDrawing,
          hideTextLayer: postponeDrawing
        });
        this.eventBus.dispatch("pagerendered", {
          source: this,
          pageNumber: this.id,
          cssTransform: true,
          timestamp: performance.now(),
          error: this._renderError
        });
        return;
      }
      if (!this.zoomLayer && !this.canvas.hidden) {
        this.zoomLayer = this.canvas.parentNode;
        this.zoomLayer.style.position = "absolute";
      }
    }
    if (this.zoomLayer) {
      this.cssTransform({
        target: this.zoomLayer.firstChild
      });
    }
    this.reset({
      keepZoomLayer: true,
      keepAnnotationLayer: true,
      keepAnnotationEditorLayer: true,
      keepXfaLayer: true,
      keepTextLayer: true
    });
  }
  cancelRendering() {
    let _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref3$keepAnnotationL = _ref3.keepAnnotationLayer,
      keepAnnotationLayer = _ref3$keepAnnotationL === void 0 ? false : _ref3$keepAnnotationL,
      _ref3$keepAnnotationE = _ref3.keepAnnotationEditorLayer,
      keepAnnotationEditorLayer = _ref3$keepAnnotationE === void 0 ? false : _ref3$keepAnnotationE,
      _ref3$keepXfaLayer = _ref3.keepXfaLayer,
      keepXfaLayer = _ref3$keepXfaLayer === void 0 ? false : _ref3$keepXfaLayer,
      _ref3$keepTextLayer = _ref3.keepTextLayer,
      keepTextLayer = _ref3$keepTextLayer === void 0 ? false : _ref3$keepTextLayer,
      _ref3$cancelExtraDela = _ref3.cancelExtraDelay,
      cancelExtraDelay = _ref3$cancelExtraDela === void 0 ? 0 : _ref3$cancelExtraDela;
    if (this.paintTask) {
      this.paintTask.cancel(cancelExtraDelay);
      this.paintTask = null;
    }
    this.resume = null;
    if (this.textLayer && (!keepTextLayer || !this.textLayer.div)) {
      this.textLayer.cancel();
      this.textLayer = null;
    }
    if (this.structTreeLayer && !this.textLayer) {
      this.structTreeLayer = null;
    }
    if (this.annotationLayer && (!keepAnnotationLayer || !this.annotationLayer.div)) {
      this.annotationLayer.cancel();
      this.annotationLayer = null;
      this._annotationCanvasMap = null;
    }
    if (this.annotationEditorLayer && (!keepAnnotationEditorLayer || !this.annotationEditorLayer.div)) {
      this.annotationEditorLayer.cancel();
      this.annotationEditorLayer = null;
    }
    if (this.xfaLayer && (!keepXfaLayer || !this.xfaLayer.div)) {
      var _this$_textHighlighte;
      this.xfaLayer.cancel();
      this.xfaLayer = null;
      (_this$_textHighlighte = this._textHighlighter) === null || _this$_textHighlighte === void 0 ? void 0 : _this$_textHighlighte.disable();
    }
  }
  cssTransform(_ref4) {
    let target = _ref4.target,
      _ref4$redrawAnnotatio = _ref4.redrawAnnotationLayer,
      redrawAnnotationLayer = _ref4$redrawAnnotatio === void 0 ? false : _ref4$redrawAnnotatio,
      _ref4$redrawAnnotatio2 = _ref4.redrawAnnotationEditorLayer,
      redrawAnnotationEditorLayer = _ref4$redrawAnnotatio2 === void 0 ? false : _ref4$redrawAnnotatio2,
      _ref4$redrawXfaLayer = _ref4.redrawXfaLayer,
      redrawXfaLayer = _ref4$redrawXfaLayer === void 0 ? false : _ref4$redrawXfaLayer,
      _ref4$redrawTextLayer = _ref4.redrawTextLayer,
      redrawTextLayer = _ref4$redrawTextLayer === void 0 ? false : _ref4$redrawTextLayer,
      _ref4$hideTextLayer = _ref4.hideTextLayer,
      hideTextLayer = _ref4$hideTextLayer === void 0 ? false : _ref4$hideTextLayer;
    if (target instanceof HTMLCanvasElement) {
      if (!target.hasAttribute("zooming")) {
        target.setAttribute("zooming", true);
        const style = target.style;
        style.width = style.height = "";
      }
    } else {
      const div = this.div;
      const _this$viewport = this.viewport,
        width = _this$viewport.width,
        height = _this$viewport.height;
      target.style.width = target.parentNode.style.width = div.style.width = Math.floor(width) + "px";
      target.style.height = target.parentNode.style.height = div.style.height = Math.floor(height) + "px";
    }
    const originalViewport = this.paintedViewportMap.get(target);
    if (this.viewport !== originalViewport) {
      const relativeRotation = this.viewport.rotation - originalViewport.rotation;
      const absRotation = Math.abs(relativeRotation);
      let scaleX = 1,
        scaleY = 1;
      if (absRotation === 90 || absRotation === 270) {
        const _this$viewport2 = this.viewport,
          width = _this$viewport2.width,
          height = _this$viewport2.height;
        scaleX = height / width;
        scaleY = width / height;
      }
      if (absRotation !== 0) {
        target.style.transform = `rotate(${relativeRotation}deg) scale(${scaleX}, ${scaleY})`;
      }
    }
    if (redrawAnnotationLayer && this.annotationLayer) {
      _classPrivateMethodGet(this, _renderAnnotationLayer, _renderAnnotationLayer2).call(this);
    }
    if (redrawAnnotationEditorLayer && this.annotationEditorLayer) {
      _classPrivateMethodGet(this, _renderAnnotationEditorLayer, _renderAnnotationEditorLayer2).call(this);
    }
    if (redrawXfaLayer && this.xfaLayer) {
      _classPrivateMethodGet(this, _renderXfaLayer, _renderXfaLayer2).call(this);
    }
    if (this.textLayer) {
      if (hideTextLayer) {
        var _this$structTreeLayer2;
        this.textLayer.hide();
        (_this$structTreeLayer2 = this.structTreeLayer) === null || _this$structTreeLayer2 === void 0 ? void 0 : _this$structTreeLayer2.hide();
      } else if (redrawTextLayer) {
        _classPrivateMethodGet(this, _renderTextLayer, _renderTextLayer2).call(this);
      }
    }
  }
  get width() {
    return this.viewport.width;
  }
  get height() {
    return this.viewport.height;
  }
  getPagePoint(x, y) {
    return this.viewport.convertToPdfPoint(x, y);
  }
  draw() {
    var _this = this;
    if (this.renderingState !== _ui_utils.RenderingStates.INITIAL) {
      console.error("Must be in new state before drawing");
      this.reset();
    }
    const div = this.div,
      pdfPage = this.pdfPage;
    if (!pdfPage) {
      this.renderingState = _ui_utils.RenderingStates.FINISHED;
      return Promise.reject(new Error("pdfPage is not loaded"));
    }
    this.renderingState = _ui_utils.RenderingStates.RUNNING;
    const canvasWrapper = document.createElement("div");
    canvasWrapper.classList.add("canvasWrapper");
    div.append(canvasWrapper);
    if (!this.textLayer && this.textLayerMode !== _ui_utils.TextLayerMode.DISABLE && !pdfPage.isPureXfa) {
      this._accessibilityManager || (this._accessibilityManager = new _text_accessibility.TextAccessibilityManager());
      this.textLayer = new _text_layer_builder.TextLayerBuilder({
        highlighter: this._textHighlighter,
        accessibilityManager: this._accessibilityManager,
        isOffscreenCanvasSupported: this.isOffscreenCanvasSupported
      });
      div.append(this.textLayer.div);
    }
    if (!this.annotationLayer && _classPrivateFieldGet(this, _annotationMode) !== _pdfjsLib.AnnotationMode.DISABLE) {
      const _classPrivateFieldGet2 = _classPrivateFieldGet(this, _layerProperties).call(this),
        annotationStorage = _classPrivateFieldGet2.annotationStorage,
        downloadManager = _classPrivateFieldGet2.downloadManager,
        enableScripting = _classPrivateFieldGet2.enableScripting,
        fieldObjectsPromise = _classPrivateFieldGet2.fieldObjectsPromise,
        hasJSActionsPromise = _classPrivateFieldGet2.hasJSActionsPromise,
        linkService = _classPrivateFieldGet2.linkService;
      this._annotationCanvasMap || (this._annotationCanvasMap = new Map());
      this.annotationLayer = new _annotation_layer_builder.AnnotationLayerBuilder({
        pageDiv: div,
        pdfPage,
        annotationStorage,
        imageResourcesPath: this.imageResourcesPath,
        renderForms: _classPrivateFieldGet(this, _annotationMode) === _pdfjsLib.AnnotationMode.ENABLE_FORMS,
        linkService,
        downloadManager,
        l10n: this.l10n,
        enableScripting,
        hasJSActionsPromise,
        fieldObjectsPromise,
        annotationCanvasMap: this._annotationCanvasMap,
        accessibilityManager: this._accessibilityManager
      });
    }
    let renderContinueCallback = null;
    if (this.renderingQueue) {
      renderContinueCallback = cont => {
        if (!this.renderingQueue.isHighestPriority(this)) {
          this.renderingState = _ui_utils.RenderingStates.PAUSED;
          this.resume = () => {
            this.renderingState = _ui_utils.RenderingStates.RUNNING;
            cont();
          };
          return;
        }
        cont();
      };
    }
    const finishPaintTask = /*#__PURE__*/function () {
      var _ref5 = _asyncToGenerator(function* () {
        let error = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
        if (paintTask === _this.paintTask) {
          _this.paintTask = null;
        }
        if (error instanceof _pdfjsLib.RenderingCancelledException) {
          _this._renderError = null;
          return;
        }
        _this._renderError = error;
        _this.renderingState = _ui_utils.RenderingStates.FINISHED;
        _this._resetZoomLayer(true);
        _classPrivateFieldGet(_this, _useThumbnailCanvas).regularAnnotations = !paintTask.separateAnnots;
        _this.eventBus.dispatch("pagerendered", {
          source: _this,
          pageNumber: _this.id,
          cssTransform: false,
          timestamp: performance.now(),
          error: _this._renderError
        });
        if (error) {
          throw error;
        }
      });
      return function finishPaintTask() {
        return _ref5.apply(this, arguments);
      };
    }();
    const paintTask = this.renderer === _ui_utils.RendererType.SVG ? this.paintOnSvg(canvasWrapper) : this.paintOnCanvas(canvasWrapper);
    paintTask.onRenderContinue = renderContinueCallback;
    this.paintTask = paintTask;
    const resultPromise = paintTask.promise.then(() => {
      return finishPaintTask(null).then( /*#__PURE__*/_asyncToGenerator(function* () {
        _classPrivateMethodGet(_this, _renderTextLayer, _renderTextLayer2).call(_this);
        if (_this.annotationLayer) {
          yield _classPrivateMethodGet(_this, _renderAnnotationLayer, _renderAnnotationLayer2).call(_this);
        }
        if (!_this.annotationEditorLayer) {
          const _classPrivateFieldGet3 = _classPrivateFieldGet(_this, _layerProperties).call(_this),
            annotationEditorUIManager = _classPrivateFieldGet3.annotationEditorUIManager;
          if (!annotationEditorUIManager) {
            return;
          }
          _this.annotationEditorLayer = new _annotation_editor_layer_builder.AnnotationEditorLayerBuilder({
            uiManager: annotationEditorUIManager,
            pageDiv: div,
            pdfPage,
            l10n: _this.l10n,
            accessibilityManager: _this._accessibilityManager
          });
        }
        _classPrivateMethodGet(_this, _renderAnnotationEditorLayer, _renderAnnotationEditorLayer2).call(_this);
      }));
    }, function (reason) {
      return finishPaintTask(reason);
    });
    if (pdfPage.isPureXfa) {
      if (!this.xfaLayer) {
        const _classPrivateFieldGet4 = _classPrivateFieldGet(this, _layerProperties).call(this),
          annotationStorage = _classPrivateFieldGet4.annotationStorage,
          linkService = _classPrivateFieldGet4.linkService;
        this.xfaLayer = new _xfa_layer_builder.XfaLayerBuilder({
          pageDiv: div,
          pdfPage,
          annotationStorage,
          linkService
        });
      } else if (this.xfaLayer.div) {
        div.append(this.xfaLayer.div);
      }
      _classPrivateMethodGet(this, _renderXfaLayer, _renderXfaLayer2).call(this);
    }
    div.setAttribute("data-loaded", true);
    this.eventBus.dispatch("pagerender", {
      source: this,
      pageNumber: this.id
    });
    return resultPromise;
  }
  paintOnCanvas(canvasWrapper) {
    var _this$pageColors, _this$pageColors2;
    const renderCapability = (0, _pdfjsLib.createPromiseCapability)();
    const result = {
      promise: renderCapability.promise,
      onRenderContinue(cont) {
        cont();
      },
      cancel() {
        let extraDelay = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        renderTask.cancel(extraDelay);
      },
      get separateAnnots() {
        return renderTask.separateAnnots;
      }
    };
    const viewport = this.viewport;
    const width = viewport.width,
      height = viewport.height;
    const canvas = document.createElement("canvas");
    canvas.setAttribute("role", "presentation");
    canvas.hidden = true;
    let isCanvasHidden = true;
    const hasHCM = !!((_this$pageColors = this.pageColors) !== null && _this$pageColors !== void 0 && _this$pageColors.background && (_this$pageColors2 = this.pageColors) !== null && _this$pageColors2 !== void 0 && _this$pageColors2.foreground);
    const showCanvas = function showCanvas(isLastShow) {
      if (isCanvasHidden && (!hasHCM || isLastShow)) {
        canvas.hidden = false;
        isCanvasHidden = false;
      }
    };
    canvasWrapper.append(canvas);
    this.canvas = canvas;
    const ctx = canvas.getContext("2d", {
      alpha: false
    });
    const outputScale = this.outputScale = new _ui_utils.OutputScale();
    if (this.useOnlyCssZoom) {
      const actualSizeViewport = viewport.clone({
        scale: _pdfjsLib.PixelsPerInch.PDF_TO_CSS_UNITS
      });
      outputScale.sx *= actualSizeViewport.width / width;
      outputScale.sy *= actualSizeViewport.height / height;
    }
    if (this.maxCanvasPixels > 0) {
      const pixelsInViewport = width * height;
      const maxScale = Math.sqrt(this.maxCanvasPixels / pixelsInViewport);
      if (outputScale.sx > maxScale || outputScale.sy > maxScale) {
        outputScale.sx = maxScale;
        outputScale.sy = maxScale;
        this.hasRestrictedScaling = true;
      } else {
        this.hasRestrictedScaling = false;
      }
    }
    const sfx = (0, _ui_utils.approximateFraction)(outputScale.sx);
    const sfy = (0, _ui_utils.approximateFraction)(outputScale.sy);
    canvas.width = (0, _ui_utils.roundToDivide)(viewport.width * outputScale.sx, sfx[0]);
    canvas.height = (0, _ui_utils.roundToDivide)(viewport.height * outputScale.sy, sfy[0]);
    const style = canvas.style;
    style.width = (0, _ui_utils.roundToDivide)(viewport.width, sfx[1]) + "px";
    style.height = (0, _ui_utils.roundToDivide)(viewport.height, sfy[1]) + "px";
    this.paintedViewportMap.set(canvas, viewport);
    const transform = outputScale.scaled ? [outputScale.sx, 0, 0, outputScale.sy, 0, 0] : null;
    const renderContext = {
      canvasContext: ctx,
      transform,
      viewport,
      annotationMode: _classPrivateFieldGet(this, _annotationMode),
      optionalContentConfigPromise: this._optionalContentConfigPromise,
      annotationCanvasMap: this._annotationCanvasMap,
      pageColors: this.pageColors
    };
    const renderTask = this.pdfPage.render(renderContext);
    renderTask.onContinue = function (cont) {
      showCanvas(false);
      if (result.onRenderContinue) {
        result.onRenderContinue(cont);
      } else {
        cont();
      }
    };
    renderTask.promise.then(function () {
      showCanvas(true);
      renderCapability.resolve();
    }, function (error) {
      if (!(error instanceof _pdfjsLib.RenderingCancelledException)) {
        showCanvas(true);
      }
      renderCapability.reject(error);
    });
    return result;
  }
  paintOnSvg(wrapper) {
    let cancelled = false;
    const ensureNotCancelled = () => {
      if (cancelled) {
        throw new _pdfjsLib.RenderingCancelledException(`Rendering cancelled, page ${this.id}`, "svg");
      }
    };
    const pdfPage = this.pdfPage;
    const actualSizeViewport = this.viewport.clone({
      scale: _pdfjsLib.PixelsPerInch.PDF_TO_CSS_UNITS
    });
    const promise = pdfPage.getOperatorList({
      annotationMode: _classPrivateFieldGet(this, _annotationMode)
    }).then(opList => {
      ensureNotCancelled();
      const svgGfx = new _pdfjsLib.SVGGraphics(pdfPage.commonObjs, pdfPage.objs);
      return svgGfx.getSVG(opList, actualSizeViewport).then(svg => {
        ensureNotCancelled();
        this.svg = svg;
        this.paintedViewportMap.set(svg, actualSizeViewport);
        svg.style.width = wrapper.style.width;
        svg.style.height = wrapper.style.height;
        this.renderingState = _ui_utils.RenderingStates.FINISHED;
        wrapper.append(svg);
      });
    });
    return {
      promise,
      onRenderContinue(cont) {
        cont();
      },
      cancel() {
        cancelled = true;
      },
      get separateAnnots() {
        return false;
      }
    };
  }
  setPageLabel(label) {
    this.pageLabel = typeof label === "string" ? label : null;
    if (this.pageLabel !== null) {
      this.div.setAttribute("data-page-label", this.pageLabel);
    } else {
      this.div.removeAttribute("data-page-label");
    }
  }
  get thumbnailCanvas() {
    const _classPrivateFieldGet5 = _classPrivateFieldGet(this, _useThumbnailCanvas),
      initialOptionalContent = _classPrivateFieldGet5.initialOptionalContent,
      regularAnnotations = _classPrivateFieldGet5.regularAnnotations;
    return initialOptionalContent && regularAnnotations ? this.canvas : null;
  }
}
exports.PDFPageView = PDFPageView;
function _setDimensions2() {
  const viewport = this.viewport;
  if (this.pdfPage) {
    if (_classPrivateFieldGet(this, _previousRotation) === viewport.rotation) {
      return;
    }
    _classPrivateFieldSet(this, _previousRotation, viewport.rotation);
  }
  (0, _pdfjsLib.setLayerDimensions)(this.div, viewport, true, false);
}
function _renderAnnotationLayer2() {
  return _renderAnnotationLayer3.apply(this, arguments);
}
function _renderAnnotationLayer3() {
  _renderAnnotationLayer3 = _asyncToGenerator(function* () {
    let error = null;
    try {
      yield this.annotationLayer.render(this.viewport, "display");
    } catch (ex) {
      console.error(`#renderAnnotationLayer: "${ex}".`);
      error = ex;
    } finally {
      this.eventBus.dispatch("annotationlayerrendered", {
        source: this,
        pageNumber: this.id,
        error
      });
    }
  });
  return _renderAnnotationLayer3.apply(this, arguments);
}
function _renderAnnotationEditorLayer2() {
  return _renderAnnotationEditorLayer3.apply(this, arguments);
}
function _renderAnnotationEditorLayer3() {
  _renderAnnotationEditorLayer3 = _asyncToGenerator(function* () {
    let error = null;
    try {
      yield this.annotationEditorLayer.render(this.viewport, "display");
    } catch (ex) {
      console.error(`#renderAnnotationEditorLayer: "${ex}".`);
      error = ex;
    } finally {
      this.eventBus.dispatch("annotationeditorlayerrendered", {
        source: this,
        pageNumber: this.id,
        error
      });
    }
  });
  return _renderAnnotationEditorLayer3.apply(this, arguments);
}
function _renderXfaLayer2() {
  return _renderXfaLayer3.apply(this, arguments);
}
function _renderXfaLayer3() {
  _renderXfaLayer3 = _asyncToGenerator(function* () {
    let error = null;
    try {
      const result = yield this.xfaLayer.render(this.viewport, "display");
      if (result !== null && result !== void 0 && result.textDivs && this._textHighlighter) {
        _classPrivateMethodGet(this, _buildXfaTextContentItems, _buildXfaTextContentItems2).call(this, result.textDivs);
      }
    } catch (ex) {
      console.error(`#renderXfaLayer: "${ex}".`);
      error = ex;
    } finally {
      this.eventBus.dispatch("xfalayerrendered", {
        source: this,
        pageNumber: this.id,
        error
      });
    }
  });
  return _renderXfaLayer3.apply(this, arguments);
}
function _renderTextLayer2() {
  return _renderTextLayer3.apply(this, arguments);
}
function _renderTextLayer3() {
  _renderTextLayer3 = _asyncToGenerator(function* () {
    const pdfPage = this.pdfPage,
      textLayer = this.textLayer,
      viewport = this.viewport;
    if (!textLayer) {
      return;
    }
    let error = null;
    try {
      if (!textLayer.renderingDone) {
        const readableStream = pdfPage.streamTextContent({
          includeMarkedContent: true
        });
        textLayer.setTextContentSource(readableStream);
      }
      yield textLayer.render(viewport);
    } catch (ex) {
      if (ex instanceof _pdfjsLib.AbortException) {
        return;
      }
      console.error(`#renderTextLayer: "${ex}".`);
      error = ex;
    }
    this.eventBus.dispatch("textlayerrendered", {
      source: this,
      pageNumber: this.id,
      numTextDivs: textLayer.numTextDivs,
      error
    });
    _classPrivateMethodGet(this, _renderStructTreeLayer, _renderStructTreeLayer2).call(this);
  });
  return _renderTextLayer3.apply(this, arguments);
}
function _renderStructTreeLayer2() {
  return _renderStructTreeLayer3.apply(this, arguments);
}
function _renderStructTreeLayer3() {
  _renderStructTreeLayer3 = _asyncToGenerator(function* () {
    var _this$structTreeLayer3, _this$structTreeLayer4;
    if (!this.textLayer) {
      return;
    }
    this.structTreeLayer || (this.structTreeLayer = new _struct_tree_layer_builder.StructTreeLayerBuilder());
    const tree = yield !this.structTreeLayer.renderingDone ? this.pdfPage.getStructTree() : null;
    const treeDom = (_this$structTreeLayer3 = this.structTreeLayer) === null || _this$structTreeLayer3 === void 0 ? void 0 : _this$structTreeLayer3.render(tree);
    if (treeDom) {
      var _this$canvas;
      (_this$canvas = this.canvas) === null || _this$canvas === void 0 ? void 0 : _this$canvas.append(treeDom);
    }
    (_this$structTreeLayer4 = this.structTreeLayer) === null || _this$structTreeLayer4 === void 0 ? void 0 : _this$structTreeLayer4.show();
  });
  return _renderStructTreeLayer3.apply(this, arguments);
}
function _buildXfaTextContentItems2(_x) {
  return _buildXfaTextContentItems3.apply(this, arguments);
}
function _buildXfaTextContentItems3() {
  _buildXfaTextContentItems3 = _asyncToGenerator(function* (textDivs) {
    const text = yield this.pdfPage.getTextContent();
    const items = [];
    var _iterator = _createForOfIteratorHelper(text.items),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        const item = _step.value;
        items.push(item.str);
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    this._textHighlighter.setTextMapping(textDivs, items);
    this._textHighlighter.enable();
  });
  return _buildXfaTextContentItems3.apply(this, arguments);
}

/***/ }),
/* 33 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.AnnotationEditorLayerBuilder = void 0;
var _pdfjsLib = __webpack_require__(4);
var _l10n_utils = __webpack_require__(31);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }
function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }
function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }
function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }
function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }
function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }
var _uiManager = /*#__PURE__*/new WeakMap();
class AnnotationEditorLayerBuilder {
  constructor(options) {
    _classPrivateFieldInitSpec(this, _uiManager, {
      writable: true,
      value: void 0
    });
    this.pageDiv = options.pageDiv;
    this.pdfPage = options.pdfPage;
    this.accessibilityManager = options.accessibilityManager;
    this.l10n = options.l10n || _l10n_utils.NullL10n;
    this.annotationEditorLayer = null;
    this.div = null;
    this._cancelled = false;
    _classPrivateFieldSet(this, _uiManager, options.uiManager);
  }
  render(viewport) {
    var _arguments = arguments,
      _this = this;
    return _asyncToGenerator(function* () {
      let intent = _arguments.length > 1 && _arguments[1] !== undefined ? _arguments[1] : "display";
      if (intent !== "display") {
        return;
      }
      if (_this._cancelled) {
        return;
      }
      const clonedViewport = viewport.clone({
        dontFlip: true
      });
      if (_this.div) {
        _this.annotationEditorLayer.update({
          viewport: clonedViewport
        });
        _this.show();
        return;
      }
      const div = _this.div = document.createElement("div");
      div.className = "annotationEditorLayer";
      div.tabIndex = 0;
      div.hidden = true;
      _this.pageDiv.append(div);
      _this.annotationEditorLayer = new _pdfjsLib.AnnotationEditorLayer({
        uiManager: _classPrivateFieldGet(_this, _uiManager),
        div,
        accessibilityManager: _this.accessibilityManager,
        pageIndex: _this.pdfPage.pageNumber - 1,
        l10n: _this.l10n,
        viewport: clonedViewport
      });
      const parameters = {
        viewport: clonedViewport,
        div,
        annotations: null,
        intent
      };
      _this.annotationEditorLayer.render(parameters);
      _this.show();
    })();
  }
  cancel() {
    this._cancelled = true;
    if (!this.div) {
      return;
    }
    this.pageDiv = null;
    this.annotationEditorLayer.destroy();
    this.div.remove();
  }
  hide() {
    if (!this.div) {
      return;
    }
    this.div.hidden = true;
  }
  show() {
    if (!this.div || this.annotationEditorLayer.isEmpty) {
      return;
    }
    this.div.hidden = false;
  }
}
exports.AnnotationEditorLayerBuilder = AnnotationEditorLayerBuilder;

/***/ }),
/* 34 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.AnnotationLayerBuilder = void 0;
var _pdfjsLib = __webpack_require__(4);
var _l10n_utils = __webpack_require__(31);
var _ui_utils = __webpack_require__(3);
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }
function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }
function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }
function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }
function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }
function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }
function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }
function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }
var _numAnnotations = /*#__PURE__*/new WeakMap();
var _onPresentationModeChanged = /*#__PURE__*/new WeakMap();
var _updatePresentationModeState = /*#__PURE__*/new WeakSet();
class AnnotationLayerBuilder {
  constructor(_ref) {
    let pageDiv = _ref.pageDiv,
      pdfPage = _ref.pdfPage,
      linkService = _ref.linkService,
      downloadManager = _ref.downloadManager,
      _ref$annotationStorag = _ref.annotationStorage,
      annotationStorage = _ref$annotationStorag === void 0 ? null : _ref$annotationStorag,
      _ref$imageResourcesPa = _ref.imageResourcesPath,
      imageResourcesPath = _ref$imageResourcesPa === void 0 ? "" : _ref$imageResourcesPa,
      _ref$renderForms = _ref.renderForms,
      renderForms = _ref$renderForms === void 0 ? true : _ref$renderForms,
      _ref$l10n = _ref.l10n,
      l10n = _ref$l10n === void 0 ? _l10n_utils.NullL10n : _ref$l10n,
      _ref$enableScripting = _ref.enableScripting,
      enableScripting = _ref$enableScripting === void 0 ? false : _ref$enableScripting,
      _ref$hasJSActionsProm = _ref.hasJSActionsPromise,
      hasJSActionsPromise = _ref$hasJSActionsProm === void 0 ? null : _ref$hasJSActionsProm,
      _ref$fieldObjectsProm = _ref.fieldObjectsPromise,
      fieldObjectsPromise = _ref$fieldObjectsProm === void 0 ? null : _ref$fieldObjectsProm,
      _ref$annotationCanvas = _ref.annotationCanvasMap,
      annotationCanvasMap = _ref$annotationCanvas === void 0 ? null : _ref$annotationCanvas,
      _ref$accessibilityMan = _ref.accessibilityManager,
      accessibilityManager = _ref$accessibilityMan === void 0 ? null : _ref$accessibilityMan;
    _classPrivateMethodInitSpec(this, _updatePresentationModeState);
    _classPrivateFieldInitSpec(this, _numAnnotations, {
      writable: true,
      value: 0
    });
    _classPrivateFieldInitSpec(this, _onPresentationModeChanged, {
      writable: true,
      value: null
    });
    this.pageDiv = pageDiv;
    this.pdfPage = pdfPage;
    this.linkService = linkService;
    this.downloadManager = downloadManager;
    this.imageResourcesPath = imageResourcesPath;
    this.renderForms = renderForms;
    this.l10n = l10n;
    this.annotationStorage = annotationStorage;
    this.enableScripting = enableScripting;
    this._hasJSActionsPromise = hasJSActionsPromise || Promise.resolve(false);
    this._fieldObjectsPromise = fieldObjectsPromise || Promise.resolve(null);
    this._annotationCanvasMap = annotationCanvasMap;
    this._accessibilityManager = accessibilityManager;
    this.div = null;
    this._cancelled = false;
    this._eventBus = linkService.eventBus;
  }
  render(viewport) {
    var _arguments = arguments,
      _this = this;
    return _asyncToGenerator(function* () {
      let intent = _arguments.length > 1 && _arguments[1] !== undefined ? _arguments[1] : "display";
      if (_this.div) {
        if (_this._cancelled || _classPrivateFieldGet(_this, _numAnnotations) === 0) {
          return;
        }
        _pdfjsLib.AnnotationLayer.update({
          viewport: viewport.clone({
            dontFlip: true
          }),
          div: _this.div,
          annotationCanvasMap: _this._annotationCanvasMap
        });
        return;
      }
      const _yield$Promise$all = yield Promise.all([_this.pdfPage.getAnnotations({
          intent
        }), _this._hasJSActionsPromise, _this._fieldObjectsPromise]),
        _yield$Promise$all2 = _slicedToArray(_yield$Promise$all, 3),
        annotations = _yield$Promise$all2[0],
        hasJSActions = _yield$Promise$all2[1],
        fieldObjects = _yield$Promise$all2[2];
      if (_this._cancelled) {
        return;
      }
      _classPrivateFieldSet(_this, _numAnnotations, annotations.length);
      _this.div = document.createElement("div");
      _this.div.className = "annotationLayer";
      _this.pageDiv.append(_this.div);
      if (_classPrivateFieldGet(_this, _numAnnotations) === 0) {
        _this.hide();
        return;
      }
      _pdfjsLib.AnnotationLayer.render({
        viewport: viewport.clone({
          dontFlip: true
        }),
        div: _this.div,
        annotations,
        page: _this.pdfPage,
        imageResourcesPath: _this.imageResourcesPath,
        renderForms: _this.renderForms,
        linkService: _this.linkService,
        downloadManager: _this.downloadManager,
        annotationStorage: _this.annotationStorage,
        enableScripting: _this.enableScripting,
        hasJSActions,
        fieldObjects,
        annotationCanvasMap: _this._annotationCanvasMap,
        accessibilityManager: _this._accessibilityManager
      });
      _this.l10n.translate(_this.div);
      if (_this.linkService.isInPresentationMode) {
        _classPrivateMethodGet(_this, _updatePresentationModeState, _updatePresentationModeState2).call(_this, _ui_utils.PresentationModeState.FULLSCREEN);
      }
      if (!_classPrivateFieldGet(_this, _onPresentationModeChanged)) {
        var _this$_eventBus;
        _classPrivateFieldSet(_this, _onPresentationModeChanged, evt => {
          _classPrivateMethodGet(_this, _updatePresentationModeState, _updatePresentationModeState2).call(_this, evt.state);
        });
        (_this$_eventBus = _this._eventBus) === null || _this$_eventBus === void 0 ? void 0 : _this$_eventBus._on("presentationmodechanged", _classPrivateFieldGet(_this, _onPresentationModeChanged));
      }
    })();
  }
  cancel() {
    this._cancelled = true;
    if (_classPrivateFieldGet(this, _onPresentationModeChanged)) {
      var _this$_eventBus2;
      (_this$_eventBus2 = this._eventBus) === null || _this$_eventBus2 === void 0 ? void 0 : _this$_eventBus2._off("presentationmodechanged", _classPrivateFieldGet(this, _onPresentationModeChanged));
      _classPrivateFieldSet(this, _onPresentationModeChanged, null);
    }
  }
  hide() {
    if (!this.div) {
      return;
    }
    this.div.hidden = true;
  }
}
exports.AnnotationLayerBuilder = AnnotationLayerBuilder;
function _updatePresentationModeState2(state) {
  if (!this.div) {
    return;
  }
  let disableFormElements = false;
  switch (state) {
    case _ui_utils.PresentationModeState.FULLSCREEN:
      disableFormElements = true;
      break;
    case _ui_utils.PresentationModeState.NORMAL:
      break;
    default:
      return;
  }
  var _iterator = _createForOfIteratorHelper(this.div.childNodes),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      const section = _step.value;
      if (section.hasAttribute("data-internal-link")) {
        continue;
      }
      section.inert = disableFormElements;
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
}

/***/ }),
/* 35 */
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.StructTreeLayerBuilder = void 0;
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }
function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }
function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }
function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }
function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }
function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }
function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }
function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }
const PDF_ROLE_TO_HTML_ROLE = {
  Document: null,
  DocumentFragment: null,
  Part: "group",
  Sect: "group",
  Div: "group",
  Aside: "note",
  NonStruct: "none",
  P: null,
  H: "heading",
  Title: null,
  FENote: "note",
  Sub: "group",
  Lbl: null,
  Span: null,
  Em: null,
  Strong: null,
  Link: "link",
  Annot: "note",
  Form: "form",
  Ruby: null,
  RB: null,
  RT: null,
  RP: null,
  Warichu: null,
  WT: null,
  WP: null,
  L: "list",
  LI: "listitem",
  LBody: null,
  Table: "table",
  TR: "row",
  TH: "columnheader",
  TD: "cell",
  THead: "columnheader",
  TBody: null,
  TFoot: null,
  Caption: null,
  Figure: "figure",
  Formula: null,
  Artifact: null
};
const HEADING_PATTERN = /^H(\d+)$/;
var _treeDom = /*#__PURE__*/new WeakMap();
var _setAttributes = /*#__PURE__*/new WeakSet();
var _walk = /*#__PURE__*/new WeakSet();
class StructTreeLayerBuilder {
  constructor() {
    _classPrivateMethodInitSpec(this, _walk);
    _classPrivateMethodInitSpec(this, _setAttributes);
    _classPrivateFieldInitSpec(this, _treeDom, {
      writable: true,
      value: undefined
    });
  }
  get renderingDone() {
    return _classPrivateFieldGet(this, _treeDom) !== undefined;
  }
  render(structTree) {
    if (_classPrivateFieldGet(this, _treeDom) !== undefined) {
      return _classPrivateFieldGet(this, _treeDom);
    }
    const treeDom = _classPrivateMethodGet(this, _walk, _walk2).call(this, structTree);
    treeDom === null || treeDom === void 0 ? void 0 : treeDom.classList.add("structTree");
    return _classPrivateFieldSet(this, _treeDom, treeDom);
  }
  hide() {
    if (_classPrivateFieldGet(this, _treeDom) && !_classPrivateFieldGet(this, _treeDom).hidden) {
      _classPrivateFieldGet(this, _treeDom).hidden = true;
    }
  }
  show() {
    var _classPrivateFieldGet2;
    if ((_classPrivateFieldGet2 = _classPrivateFieldGet(this, _treeDom)) !== null && _classPrivateFieldGet2 !== void 0 && _classPrivateFieldGet2.hidden) {
      _classPrivateFieldGet(this, _treeDom).hidden = false;
    }
  }
}
exports.StructTreeLayerBuilder = StructTreeLayerBuilder;
function _setAttributes2(structElement, htmlElement) {
  if (structElement.alt !== undefined) {
    htmlElement.setAttribute("aria-label", structElement.alt);
  }
  if (structElement.id !== undefined) {
    htmlElement.setAttribute("aria-owns", structElement.id);
  }
  if (structElement.lang !== undefined) {
    htmlElement.setAttribute("lang", structElement.lang);
  }
}
function _walk2(node) {
  if (!node) {
    return null;
  }
  const element = document.createElement("span");
  if ("role" in node) {
    const role = node.role;
    const match = role.match(HEADING_PATTERN);
    if (match) {
      element.setAttribute("role", "heading");
      element.setAttribute("aria-level", match[1]);
    } else if (PDF_ROLE_TO_HTML_ROLE[role]) {
      element.setAttribute("role", PDF_ROLE_TO_HTML_ROLE[role]);
    }
  }
  _classPrivateMethodGet(this, _setAttributes, _setAttributes2).call(this, node, element);
  if (node.children) {
    if (node.children.length === 1 && "id" in node.children[0]) {
      _classPrivateMethodGet(this, _setAttributes, _setAttributes2).call(this, node.children[0], element);
    } else {
      var _iterator = _createForOfIteratorHelper(node.children),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          const kid = _step.value;
          element.append(_classPrivateMethodGet(this, _walk, _walk2).call(this, kid));
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }
  return element;
}

/***/ }),
/* 36 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.TextAccessibilityManager = void 0;
var _ui_utils = __webpack_require__(3);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }
function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }
function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }
function _classStaticPrivateMethodGet(receiver, classConstructor, method) { _classCheckPrivateStaticAccess(receiver, classConstructor); return method; }
function _classCheckPrivateStaticAccess(receiver, classConstructor) { if (receiver !== classConstructor) { throw new TypeError("Private static access of wrong provenance"); } }
function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }
function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }
function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }
function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }
function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }
var _enabled = /*#__PURE__*/new WeakMap();
var _textChildren = /*#__PURE__*/new WeakMap();
var _textNodes = /*#__PURE__*/new WeakMap();
var _waitingElements = /*#__PURE__*/new WeakMap();
var _addIdToAriaOwns = /*#__PURE__*/new WeakSet();
class TextAccessibilityManager {
  constructor() {
    _classPrivateMethodInitSpec(this, _addIdToAriaOwns);
    _classPrivateFieldInitSpec(this, _enabled, {
      writable: true,
      value: false
    });
    _classPrivateFieldInitSpec(this, _textChildren, {
      writable: true,
      value: null
    });
    _classPrivateFieldInitSpec(this, _textNodes, {
      writable: true,
      value: new Map()
    });
    _classPrivateFieldInitSpec(this, _waitingElements, {
      writable: true,
      value: new Map()
    });
  }
  setTextMapping(textDivs) {
    _classPrivateFieldSet(this, _textChildren, textDivs);
  }
  enable() {
    if (_classPrivateFieldGet(this, _enabled)) {
      throw new Error("TextAccessibilityManager is already enabled.");
    }
    if (!_classPrivateFieldGet(this, _textChildren)) {
      throw new Error("Text divs and strings have not been set.");
    }
    _classPrivateFieldSet(this, _enabled, true);
    _classPrivateFieldSet(this, _textChildren, _classPrivateFieldGet(this, _textChildren).slice());
    _classPrivateFieldGet(this, _textChildren).sort(_classStaticPrivateMethodGet(TextAccessibilityManager, TextAccessibilityManager, _compareElementPositions));
    if (_classPrivateFieldGet(this, _textNodes).size > 0) {
      const textChildren = _classPrivateFieldGet(this, _textChildren);
      var _iterator = _createForOfIteratorHelper(_classPrivateFieldGet(this, _textNodes)),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          const _step$value = _slicedToArray(_step.value, 2),
            id = _step$value[0],
            nodeIndex = _step$value[1];
          const element = document.getElementById(id);
          if (!element) {
            _classPrivateFieldGet(this, _textNodes).delete(id);
            continue;
          }
          _classPrivateMethodGet(this, _addIdToAriaOwns, _addIdToAriaOwns2).call(this, id, textChildren[nodeIndex]);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
    var _iterator2 = _createForOfIteratorHelper(_classPrivateFieldGet(this, _waitingElements)),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        const _step2$value = _slicedToArray(_step2.value, 2),
          element = _step2$value[0],
          isRemovable = _step2$value[1];
        this.addPointerInTextLayer(element, isRemovable);
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
    _classPrivateFieldGet(this, _waitingElements).clear();
  }
  disable() {
    if (!_classPrivateFieldGet(this, _enabled)) {
      return;
    }
    _classPrivateFieldGet(this, _waitingElements).clear();
    _classPrivateFieldSet(this, _textChildren, null);
    _classPrivateFieldSet(this, _enabled, false);
  }
  removePointerInTextLayer(element) {
    var _owns;
    if (!_classPrivateFieldGet(this, _enabled)) {
      _classPrivateFieldGet(this, _waitingElements).delete(element);
      return;
    }
    const children = _classPrivateFieldGet(this, _textChildren);
    if (!children || children.length === 0) {
      return;
    }
    const id = element.id;
    const nodeIndex = _classPrivateFieldGet(this, _textNodes).get(id);
    if (nodeIndex === undefined) {
      return;
    }
    const node = children[nodeIndex];
    _classPrivateFieldGet(this, _textNodes).delete(id);
    let owns = node.getAttribute("aria-owns");
    if ((_owns = owns) !== null && _owns !== void 0 && _owns.includes(id)) {
      owns = owns.split(" ").filter(x => x !== id).join(" ");
      if (owns) {
        node.setAttribute("aria-owns", owns);
      } else {
        node.removeAttribute("aria-owns");
        node.setAttribute("role", "presentation");
      }
    }
  }
  addPointerInTextLayer(element, isRemovable) {
    const id = element.id;
    if (!id) {
      return;
    }
    if (!_classPrivateFieldGet(this, _enabled)) {
      _classPrivateFieldGet(this, _waitingElements).set(element, isRemovable);
      return;
    }
    if (isRemovable) {
      this.removePointerInTextLayer(element);
    }
    const children = _classPrivateFieldGet(this, _textChildren);
    if (!children || children.length === 0) {
      return;
    }
    const index = (0, _ui_utils.binarySearchFirstItem)(children, node => _classStaticPrivateMethodGet(TextAccessibilityManager, TextAccessibilityManager, _compareElementPositions).call(TextAccessibilityManager, element, node) < 0);
    const nodeIndex = Math.max(0, index - 1);
    _classPrivateMethodGet(this, _addIdToAriaOwns, _addIdToAriaOwns2).call(this, id, children[nodeIndex]);
    _classPrivateFieldGet(this, _textNodes).set(id, nodeIndex);
  }
  moveElementInDOM(container, element, contentElement, isRemovable) {
    this.addPointerInTextLayer(contentElement, isRemovable);
    if (!container.hasChildNodes()) {
      container.append(element);
      return;
    }
    const children = Array.from(container.childNodes).filter(node => node !== element);
    if (children.length === 0) {
      return;
    }
    const elementToCompare = contentElement || element;
    const index = (0, _ui_utils.binarySearchFirstItem)(children, node => _classStaticPrivateMethodGet(TextAccessibilityManager, TextAccessibilityManager, _compareElementPositions).call(TextAccessibilityManager, elementToCompare, node) < 0);
    if (index === 0) {
      children[0].before(element);
    } else {
      children[index - 1].after(element);
    }
  }
}
exports.TextAccessibilityManager = TextAccessibilityManager;
function _compareElementPositions(e1, e2) {
  const rect1 = e1.getBoundingClientRect();
  const rect2 = e2.getBoundingClientRect();
  if (rect1.width === 0 && rect1.height === 0) {
    return +1;
  }
  if (rect2.width === 0 && rect2.height === 0) {
    return -1;
  }
  const top1 = rect1.y;
  const bot1 = rect1.y + rect1.height;
  const mid1 = rect1.y + rect1.height / 2;
  const top2 = rect2.y;
  const bot2 = rect2.y + rect2.height;
  const mid2 = rect2.y + rect2.height / 2;
  if (mid1 <= top2 && mid2 >= bot1) {
    return -1;
  }
  if (mid2 <= top1 && mid1 >= bot2) {
    return +1;
  }
  const centerX1 = rect1.x + rect1.width / 2;
  const centerX2 = rect2.x + rect2.width / 2;
  return centerX1 - centerX2;
}
function _addIdToAriaOwns2(id, node) {
  const owns = node.getAttribute("aria-owns");
  if (!(owns !== null && owns !== void 0 && owns.includes(id))) {
    node.setAttribute("aria-owns", owns ? `${owns} ${id}` : id);
  }
  node.removeAttribute("role");
}

/***/ }),
/* 37 */
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.TextHighlighter = void 0;
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
class TextHighlighter {
  constructor(_ref) {
    let findController = _ref.findController,
      eventBus = _ref.eventBus,
      pageIndex = _ref.pageIndex;
    this.findController = findController;
    this.matches = [];
    this.eventBus = eventBus;
    this.pageIdx = pageIndex;
    this._onUpdateTextLayerMatches = null;
    this.textDivs = null;
    this.textContentItemsStr = null;
    this.enabled = false;
  }
  setTextMapping(divs, texts) {
    this.textDivs = divs;
    this.textContentItemsStr = texts;
  }
  enable() {
    if (!this.textDivs || !this.textContentItemsStr) {
      throw new Error("Text divs and strings have not been set.");
    }
    if (this.enabled) {
      throw new Error("TextHighlighter is already enabled.");
    }
    this.enabled = true;
    if (!this._onUpdateTextLayerMatches) {
      this._onUpdateTextLayerMatches = evt => {
        if (evt.pageIndex === this.pageIdx || evt.pageIndex === -1) {
          this._updateMatches();
        }
      };
      this.eventBus._on("updatetextlayermatches", this._onUpdateTextLayerMatches);
    }
    this._updateMatches();
  }
  disable() {
    if (!this.enabled) {
      return;
    }
    this.enabled = false;
    if (this._onUpdateTextLayerMatches) {
      this.eventBus._off("updatetextlayermatches", this._onUpdateTextLayerMatches);
      this._onUpdateTextLayerMatches = null;
    }
    this._updateMatches(true);
  }
  _convertMatches(matches, matchesLength) {
    if (!matches) {
      return [];
    }
    const textContentItemsStr = this.textContentItemsStr;
    let i = 0,
      iIndex = 0;
    const end = textContentItemsStr.length - 1;
    const result = [];
    for (let m = 0, mm = matches.length; m < mm; m++) {
      let matchIdx = matches[m];
      while (i !== end && matchIdx >= iIndex + textContentItemsStr[i].length) {
        iIndex += textContentItemsStr[i].length;
        i++;
      }
      if (i === textContentItemsStr.length) {
        console.error("Could not find a matching mapping");
      }
      const match = {
        begin: {
          divIdx: i,
          offset: matchIdx - iIndex
        }
      };
      matchIdx += matchesLength[m];
      while (i !== end && matchIdx > iIndex + textContentItemsStr[i].length) {
        iIndex += textContentItemsStr[i].length;
        i++;
      }
      match.end = {
        divIdx: i,
        offset: matchIdx - iIndex
      };
      result.push(match);
    }
    return result;
  }
  _renderMatches(matches) {
    if (matches.length === 0) {
      return;
    }
    const findController = this.findController,
      pageIdx = this.pageIdx;
    const textContentItemsStr = this.textContentItemsStr,
      textDivs = this.textDivs;
    const isSelectedPage = pageIdx === findController.selected.pageIdx;
    const selectedMatchIdx = findController.selected.matchIdx;
    const highlightAll = findController.state.highlightAll;
    let prevEnd = null;
    const infinity = {
      divIdx: -1,
      offset: undefined
    };
    function beginText(begin, className) {
      const divIdx = begin.divIdx;
      textDivs[divIdx].textContent = "";
      return appendTextToDiv(divIdx, 0, begin.offset, className);
    }
    function appendTextToDiv(divIdx, fromOffset, toOffset, className) {
      let div = textDivs[divIdx];
      if (div.nodeType === Node.TEXT_NODE) {
        const span = document.createElement("span");
        div.before(span);
        span.append(div);
        textDivs[divIdx] = span;
        div = span;
      }
      const content = textContentItemsStr[divIdx].substring(fromOffset, toOffset);
      const node = document.createTextNode(content);
      if (className) {
        const span = document.createElement("span");
        span.className = `${className} appended`;
        span.append(node);
        div.append(span);
        return className.includes("selected") ? span.offsetLeft : 0;
      }
      div.append(node);
      return 0;
    }
    let i0 = selectedMatchIdx,
      i1 = i0 + 1;
    if (highlightAll) {
      i0 = 0;
      i1 = matches.length;
    } else if (!isSelectedPage) {
      return;
    }
    for (let i = i0; i < i1; i++) {
      const match = matches[i];
      const begin = match.begin;
      const end = match.end;
      const isSelected = isSelectedPage && i === selectedMatchIdx;
      const highlightSuffix = isSelected ? " selected" : "";
      let selectedLeft = 0;
      if (!prevEnd || begin.divIdx !== prevEnd.divIdx) {
        if (prevEnd !== null) {
          appendTextToDiv(prevEnd.divIdx, prevEnd.offset, infinity.offset);
        }
        beginText(begin);
      } else {
        appendTextToDiv(prevEnd.divIdx, prevEnd.offset, begin.offset);
      }
      if (begin.divIdx === end.divIdx) {
        selectedLeft = appendTextToDiv(begin.divIdx, begin.offset, end.offset, "highlight" + highlightSuffix);
      } else {
        selectedLeft = appendTextToDiv(begin.divIdx, begin.offset, infinity.offset, "highlight begin" + highlightSuffix);
        for (let n0 = begin.divIdx + 1, n1 = end.divIdx; n0 < n1; n0++) {
          textDivs[n0].className = "highlight middle" + highlightSuffix;
        }
        beginText(end, "highlight end" + highlightSuffix);
      }
      prevEnd = end;
      if (isSelected) {
        findController.scrollMatchIntoView({
          element: textDivs[begin.divIdx],
          selectedLeft,
          pageIndex: pageIdx,
          matchIndex: selectedMatchIdx
        });
      }
    }
    if (prevEnd) {
      appendTextToDiv(prevEnd.divIdx, prevEnd.offset, infinity.offset);
    }
  }
  _updateMatches() {
    let reset = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    if (!this.enabled && !reset) {
      return;
    }
    const findController = this.findController,
      matches = this.matches,
      pageIdx = this.pageIdx;
    const textContentItemsStr = this.textContentItemsStr,
      textDivs = this.textDivs;
    let clearedUntilDivIdx = -1;
    var _iterator = _createForOfIteratorHelper(matches),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        const match = _step.value;
        const begin = Math.max(clearedUntilDivIdx, match.begin.divIdx);
        for (let n = begin, end = match.end.divIdx; n <= end; n++) {
          const div = textDivs[n];
          div.textContent = textContentItemsStr[n];
          div.className = "";
        }
        clearedUntilDivIdx = match.end.divIdx + 1;
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    if (!(findController !== null && findController !== void 0 && findController.highlightMatches) || reset) {
      return;
    }
    const pageMatches = findController.pageMatches[pageIdx] || null;
    const pageMatchesLength = findController.pageMatchesLength[pageIdx] || null;
    this.matches = this._convertMatches(pageMatches, pageMatchesLength);
    this._renderMatches(this.matches);
  }
}
exports.TextHighlighter = TextHighlighter;

/***/ }),
/* 38 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.TextLayerBuilder = void 0;
var _pdfjsLib = __webpack_require__(4);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }
function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }
function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }
function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }
function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }
function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }
function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }
function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }
var _rotation = /*#__PURE__*/new WeakMap();
var _scale = /*#__PURE__*/new WeakMap();
var _textContentSource = /*#__PURE__*/new WeakMap();
var _finishRendering = /*#__PURE__*/new WeakSet();
var _bindMouse = /*#__PURE__*/new WeakSet();
class TextLayerBuilder {
  constructor(_ref) {
    let _ref$highlighter = _ref.highlighter,
      highlighter = _ref$highlighter === void 0 ? null : _ref$highlighter,
      _ref$accessibilityMan = _ref.accessibilityManager,
      accessibilityManager = _ref$accessibilityMan === void 0 ? null : _ref$accessibilityMan,
      _ref$isOffscreenCanva = _ref.isOffscreenCanvasSupported,
      isOffscreenCanvasSupported = _ref$isOffscreenCanva === void 0 ? true : _ref$isOffscreenCanva;
    _classPrivateMethodInitSpec(this, _bindMouse);
    _classPrivateMethodInitSpec(this, _finishRendering);
    _classPrivateFieldInitSpec(this, _rotation, {
      writable: true,
      value: 0
    });
    _classPrivateFieldInitSpec(this, _scale, {
      writable: true,
      value: 0
    });
    _classPrivateFieldInitSpec(this, _textContentSource, {
      writable: true,
      value: null
    });
    this.textContentItemsStr = [];
    this.renderingDone = false;
    this.textDivs = [];
    this.textDivProperties = new WeakMap();
    this.textLayerRenderTask = null;
    this.highlighter = highlighter;
    this.accessibilityManager = accessibilityManager;
    this.isOffscreenCanvasSupported = isOffscreenCanvasSupported;
    this.div = document.createElement("div");
    this.div.className = "textLayer";
    this.hide();
  }
  get numTextDivs() {
    return this.textDivs.length;
  }
  render(viewport) {
    var _this = this;
    return _asyncToGenerator(function* () {
      var _this$highlighter, _this$accessibilityMa, _this$accessibilityMa2;
      if (!_classPrivateFieldGet(_this, _textContentSource)) {
        throw new Error('No "textContentSource" parameter specified.');
      }
      const scale = viewport.scale * (globalThis.devicePixelRatio || 1);
      const rotation = viewport.rotation;
      if (_this.renderingDone) {
        const mustRotate = rotation !== _classPrivateFieldGet(_this, _rotation);
        const mustRescale = scale !== _classPrivateFieldGet(_this, _scale);
        if (mustRotate || mustRescale) {
          _this.hide();
          (0, _pdfjsLib.updateTextLayer)({
            container: _this.div,
            viewport,
            textDivs: _this.textDivs,
            textDivProperties: _this.textDivProperties,
            isOffscreenCanvasSupported: _this.isOffscreenCanvasSupported,
            mustRescale,
            mustRotate
          });
          _classPrivateFieldSet(_this, _scale, scale);
          _classPrivateFieldSet(_this, _rotation, rotation);
        }
        _this.show();
        return;
      }
      _this.cancel();
      (_this$highlighter = _this.highlighter) === null || _this$highlighter === void 0 ? void 0 : _this$highlighter.setTextMapping(_this.textDivs, _this.textContentItemsStr);
      (_this$accessibilityMa = _this.accessibilityManager) === null || _this$accessibilityMa === void 0 ? void 0 : _this$accessibilityMa.setTextMapping(_this.textDivs);
      _this.textLayerRenderTask = (0, _pdfjsLib.renderTextLayer)({
        textContentSource: _classPrivateFieldGet(_this, _textContentSource),
        container: _this.div,
        viewport,
        textDivs: _this.textDivs,
        textDivProperties: _this.textDivProperties,
        textContentItemsStr: _this.textContentItemsStr,
        isOffscreenCanvasSupported: _this.isOffscreenCanvasSupported
      });
      yield _this.textLayerRenderTask.promise;
      _classPrivateMethodGet(_this, _finishRendering, _finishRendering2).call(_this);
      _classPrivateFieldSet(_this, _scale, scale);
      _classPrivateFieldSet(_this, _rotation, rotation);
      _this.show();
      (_this$accessibilityMa2 = _this.accessibilityManager) === null || _this$accessibilityMa2 === void 0 ? void 0 : _this$accessibilityMa2.enable();
    })();
  }
  hide() {
    if (!this.div.hidden) {
      var _this$highlighter2;
      (_this$highlighter2 = this.highlighter) === null || _this$highlighter2 === void 0 ? void 0 : _this$highlighter2.disable();
      this.div.hidden = true;
    }
  }
  show() {
    if (this.div.hidden && this.renderingDone) {
      var _this$highlighter3;
      this.div.hidden = false;
      (_this$highlighter3 = this.highlighter) === null || _this$highlighter3 === void 0 ? void 0 : _this$highlighter3.enable();
    }
  }
  cancel() {
    var _this$highlighter4, _this$accessibilityMa3;
    if (this.textLayerRenderTask) {
      this.textLayerRenderTask.cancel();
      this.textLayerRenderTask = null;
    }
    (_this$highlighter4 = this.highlighter) === null || _this$highlighter4 === void 0 ? void 0 : _this$highlighter4.disable();
    (_this$accessibilityMa3 = this.accessibilityManager) === null || _this$accessibilityMa3 === void 0 ? void 0 : _this$accessibilityMa3.disable();
    this.textContentItemsStr.length = 0;
    this.textDivs.length = 0;
    this.textDivProperties = new WeakMap();
  }
  setTextContentSource(source) {
    this.cancel();
    _classPrivateFieldSet(this, _textContentSource, source);
  }
}
exports.TextLayerBuilder = TextLayerBuilder;
function _finishRendering2() {
  this.renderingDone = true;
  const endOfContent = document.createElement("div");
  endOfContent.className = "endOfContent";
  this.div.append(endOfContent);
  _classPrivateMethodGet(this, _bindMouse, _bindMouse2).call(this);
}
function _bindMouse2() {
  const div = this.div;
  div.addEventListener("mousedown", evt => {
    const end = div.querySelector(".endOfContent");
    if (!end) {
      return;
    }
    let adjustTop = evt.target !== div;
    adjustTop && (adjustTop = getComputedStyle(end).getPropertyValue("-moz-user-select") !== "none");
    if (adjustTop) {
      const divBounds = div.getBoundingClientRect();
      const r = Math.max(0, (evt.pageY - divBounds.top) / divBounds.height);
      end.style.top = (r * 100).toFixed(2) + "%";
    }
    end.classList.add("active");
  });
  div.addEventListener("mouseup", () => {
    const end = div.querySelector(".endOfContent");
    if (!end) {
      return;
    }
    end.style.top = "";
    end.classList.remove("active");
  });
}

/***/ }),
/* 39 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.XfaLayerBuilder = void 0;
var _pdfjsLib = __webpack_require__(4);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
class XfaLayerBuilder {
  constructor(_ref) {
    let pageDiv = _ref.pageDiv,
      pdfPage = _ref.pdfPage,
      _ref$annotationStorag = _ref.annotationStorage,
      annotationStorage = _ref$annotationStorag === void 0 ? null : _ref$annotationStorag,
      linkService = _ref.linkService,
      _ref$xfaHtml = _ref.xfaHtml,
      xfaHtml = _ref$xfaHtml === void 0 ? null : _ref$xfaHtml;
    this.pageDiv = pageDiv;
    this.pdfPage = pdfPage;
    this.annotationStorage = annotationStorage;
    this.linkService = linkService;
    this.xfaHtml = xfaHtml;
    this.div = null;
    this._cancelled = false;
  }
  render(viewport) {
    var _arguments = arguments,
      _this = this;
    return _asyncToGenerator(function* () {
      let intent = _arguments.length > 1 && _arguments[1] !== undefined ? _arguments[1] : "display";
      if (intent === "print") {
        const parameters = {
          viewport: viewport.clone({
            dontFlip: true
          }),
          div: _this.div,
          xfaHtml: _this.xfaHtml,
          annotationStorage: _this.annotationStorage,
          linkService: _this.linkService,
          intent
        };
        const div = document.createElement("div");
        _this.pageDiv.append(div);
        parameters.div = div;
        return _pdfjsLib.XfaLayer.render(parameters);
      }
      const xfaHtml = yield _this.pdfPage.getXfa();
      if (_this._cancelled || !xfaHtml) {
        return {
          textDivs: []
        };
      }
      const parameters = {
        viewport: viewport.clone({
          dontFlip: true
        }),
        div: _this.div,
        xfaHtml,
        annotationStorage: _this.annotationStorage,
        linkService: _this.linkService,
        intent
      };
      if (_this.div) {
        return _pdfjsLib.XfaLayer.update(parameters);
      }
      _this.div = document.createElement("div");
      _this.pageDiv.append(_this.div);
      parameters.div = _this.div;
      return _pdfjsLib.XfaLayer.render(parameters);
    })();
  }
  cancel() {
    this._cancelled = true;
  }
  hide() {
    if (!this.div) {
      return;
    }
    this.div.hidden = true;
  }
}
exports.XfaLayerBuilder = XfaLayerBuilder;

/***/ }),
/* 40 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.SecondaryToolbar = void 0;
var _ui_utils = __webpack_require__(3);
var _pdf_viewer = __webpack_require__(30);
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }
function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }
var _updateUIState = /*#__PURE__*/new WeakSet();
var _bindClickListeners = /*#__PURE__*/new WeakSet();
var _bindCursorToolsListener = /*#__PURE__*/new WeakSet();
var _bindScrollModeListener = /*#__PURE__*/new WeakSet();
var _bindSpreadModeListener = /*#__PURE__*/new WeakSet();
class SecondaryToolbar {
  constructor(options, eventBus, externalServices) {
    _classPrivateMethodInitSpec(this, _bindSpreadModeListener);
    _classPrivateMethodInitSpec(this, _bindScrollModeListener);
    _classPrivateMethodInitSpec(this, _bindCursorToolsListener);
    _classPrivateMethodInitSpec(this, _bindClickListeners);
    _classPrivateMethodInitSpec(this, _updateUIState);
    this.toolbar = options.toolbar;
    this.toggleButton = options.toggleButton;
    this.buttons = [{
      element: options.presentationModeButton,
      eventName: "presentationmode",
      close: true
    }, {
      element: options.printButton,
      eventName: "print",
      close: true
    }, {
      element: options.downloadButton,
      eventName: "download",
      close: true
    }, {
      element: options.viewBookmarkButton,
      eventName: null,
      close: true
    }, {
      element: options.firstPageButton,
      eventName: "firstpage",
      close: true
    }, {
      element: options.lastPageButton,
      eventName: "lastpage",
      close: true
    }, {
      element: options.pageRotateCwButton,
      eventName: "rotatecw",
      close: false
    }, {
      element: options.pageRotateCcwButton,
      eventName: "rotateccw",
      close: false
    }, {
      element: options.cursorSelectToolButton,
      eventName: "switchcursortool",
      eventDetails: {
        tool: _ui_utils.CursorTool.SELECT
      },
      close: true
    }, {
      element: options.cursorHandToolButton,
      eventName: "switchcursortool",
      eventDetails: {
        tool: _ui_utils.CursorTool.HAND
      },
      close: true
    }, {
      element: options.scrollPageButton,
      eventName: "switchscrollmode",
      eventDetails: {
        mode: _ui_utils.ScrollMode.PAGE
      },
      close: true
    }, {
      element: options.scrollVerticalButton,
      eventName: "switchscrollmode",
      eventDetails: {
        mode: _ui_utils.ScrollMode.VERTICAL
      },
      close: true
    }, {
      element: options.scrollHorizontalButton,
      eventName: "switchscrollmode",
      eventDetails: {
        mode: _ui_utils.ScrollMode.HORIZONTAL
      },
      close: true
    }, {
      element: options.scrollWrappedButton,
      eventName: "switchscrollmode",
      eventDetails: {
        mode: _ui_utils.ScrollMode.WRAPPED
      },
      close: true
    }, {
      element: options.spreadNoneButton,
      eventName: "switchspreadmode",
      eventDetails: {
        mode: _ui_utils.SpreadMode.NONE
      },
      close: true
    }, {
      element: options.spreadOddButton,
      eventName: "switchspreadmode",
      eventDetails: {
        mode: _ui_utils.SpreadMode.ODD
      },
      close: true
    }, {
      element: options.spreadEvenButton,
      eventName: "switchspreadmode",
      eventDetails: {
        mode: _ui_utils.SpreadMode.EVEN
      },
      close: true
    }, {
      element: options.documentPropertiesButton,
      eventName: "documentproperties",
      close: true
    }];
    this.buttons.push({
      element: options.openFileButton,
      eventName: "openfile",
      close: true
    });
    this.items = {
      firstPage: options.firstPageButton,
      lastPage: options.lastPageButton,
      pageRotateCw: options.pageRotateCwButton,
      pageRotateCcw: options.pageRotateCcwButton
    };
    this.eventBus = eventBus;
    this.externalServices = externalServices;
    this.opened = false;
    _classPrivateMethodGet(this, _bindClickListeners, _bindClickListeners2).call(this);
    _classPrivateMethodGet(this, _bindCursorToolsListener, _bindCursorToolsListener2).call(this, options);
    _classPrivateMethodGet(this, _bindScrollModeListener, _bindScrollModeListener2).call(this, options);
    _classPrivateMethodGet(this, _bindSpreadModeListener, _bindSpreadModeListener2).call(this, options);
    this.reset();
  }
  get isOpen() {
    return this.opened;
  }
  setPageNumber(pageNumber) {
    this.pageNumber = pageNumber;
    _classPrivateMethodGet(this, _updateUIState, _updateUIState2).call(this);
  }
  setPagesCount(pagesCount) {
    this.pagesCount = pagesCount;
    _classPrivateMethodGet(this, _updateUIState, _updateUIState2).call(this);
  }
  reset() {
    this.pageNumber = 0;
    this.pagesCount = 0;
    _classPrivateMethodGet(this, _updateUIState, _updateUIState2).call(this);
    this.eventBus.dispatch("secondarytoolbarreset", {
      source: this
    });
  }
  open() {
    if (this.opened) {
      return;
    }
    this.opened = true;
    this.toggleButton.classList.add("toggled");
    this.toggleButton.setAttribute("aria-expanded", "true");
    this.toolbar.classList.remove("hidden");
  }
  close() {
    if (!this.opened) {
      return;
    }
    this.opened = false;
    this.toolbar.classList.add("hidden");
    this.toggleButton.classList.remove("toggled");
    this.toggleButton.setAttribute("aria-expanded", "false");
  }
  toggle() {
    if (this.opened) {
      this.close();
    } else {
      this.open();
    }
  }
}
exports.SecondaryToolbar = SecondaryToolbar;
function _updateUIState2() {
  this.items.firstPage.disabled = this.pageNumber <= 1;
  this.items.lastPage.disabled = this.pageNumber >= this.pagesCount;
  this.items.pageRotateCw.disabled = this.pagesCount === 0;
  this.items.pageRotateCcw.disabled = this.pagesCount === 0;
}
function _bindClickListeners2() {
  this.toggleButton.addEventListener("click", this.toggle.bind(this));
  var _iterator = _createForOfIteratorHelper(this.buttons),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      const _step$value = _step.value,
        element = _step$value.element,
        eventName = _step$value.eventName,
        close = _step$value.close,
        eventDetails = _step$value.eventDetails;
      element.addEventListener("click", evt => {
        if (eventName !== null) {
          const details = {
            source: this
          };
          for (const property in eventDetails) {
            details[property] = eventDetails[property];
          }
          this.eventBus.dispatch(eventName, details);
        }
        if (close) {
          this.close();
        }
        this.externalServices.reportTelemetry({
          type: "buttons",
          data: {
            id: element.id
          }
        });
      });
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
}
function _bindCursorToolsListener2(_ref) {
  let cursorSelectToolButton = _ref.cursorSelectToolButton,
    cursorHandToolButton = _ref.cursorHandToolButton;
  this.eventBus._on("cursortoolchanged", function (_ref2) {
    let tool = _ref2.tool;
    const isSelect = tool === _ui_utils.CursorTool.SELECT,
      isHand = tool === _ui_utils.CursorTool.HAND;
    cursorSelectToolButton.classList.toggle("toggled", isSelect);
    cursorHandToolButton.classList.toggle("toggled", isHand);
    cursorSelectToolButton.setAttribute("aria-checked", isSelect);
    cursorHandToolButton.setAttribute("aria-checked", isHand);
  });
}
function _bindScrollModeListener2(_ref3) {
  let scrollPageButton = _ref3.scrollPageButton,
    scrollVerticalButton = _ref3.scrollVerticalButton,
    scrollHorizontalButton = _ref3.scrollHorizontalButton,
    scrollWrappedButton = _ref3.scrollWrappedButton,
    spreadNoneButton = _ref3.spreadNoneButton,
    spreadOddButton = _ref3.spreadOddButton,
    spreadEvenButton = _ref3.spreadEvenButton;
  const scrollModeChanged = _ref4 => {
    let mode = _ref4.mode;
    const isPage = mode === _ui_utils.ScrollMode.PAGE,
      isVertical = mode === _ui_utils.ScrollMode.VERTICAL,
      isHorizontal = mode === _ui_utils.ScrollMode.HORIZONTAL,
      isWrapped = mode === _ui_utils.ScrollMode.WRAPPED;
    scrollPageButton.classList.toggle("toggled", isPage);
    scrollVerticalButton.classList.toggle("toggled", isVertical);
    scrollHorizontalButton.classList.toggle("toggled", isHorizontal);
    scrollWrappedButton.classList.toggle("toggled", isWrapped);
    scrollPageButton.setAttribute("aria-checked", isPage);
    scrollVerticalButton.setAttribute("aria-checked", isVertical);
    scrollHorizontalButton.setAttribute("aria-checked", isHorizontal);
    scrollWrappedButton.setAttribute("aria-checked", isWrapped);
    const forceScrollModePage = this.pagesCount > _pdf_viewer.PagesCountLimit.FORCE_SCROLL_MODE_PAGE;
    scrollPageButton.disabled = forceScrollModePage;
    scrollVerticalButton.disabled = forceScrollModePage;
    scrollHorizontalButton.disabled = forceScrollModePage;
    scrollWrappedButton.disabled = forceScrollModePage;
    spreadNoneButton.disabled = isHorizontal;
    spreadOddButton.disabled = isHorizontal;
    spreadEvenButton.disabled = isHorizontal;
  };
  this.eventBus._on("scrollmodechanged", scrollModeChanged);
  this.eventBus._on("secondarytoolbarreset", evt => {
    if (evt.source === this) {
      scrollModeChanged({
        mode: _ui_utils.ScrollMode.VERTICAL
      });
    }
  });
}
function _bindSpreadModeListener2(_ref5) {
  let spreadNoneButton = _ref5.spreadNoneButton,
    spreadOddButton = _ref5.spreadOddButton,
    spreadEvenButton = _ref5.spreadEvenButton;
  function spreadModeChanged(_ref6) {
    let mode = _ref6.mode;
    const isNone = mode === _ui_utils.SpreadMode.NONE,
      isOdd = mode === _ui_utils.SpreadMode.ODD,
      isEven = mode === _ui_utils.SpreadMode.EVEN;
    spreadNoneButton.classList.toggle("toggled", isNone);
    spreadOddButton.classList.toggle("toggled", isOdd);
    spreadEvenButton.classList.toggle("toggled", isEven);
    spreadNoneButton.setAttribute("aria-checked", isNone);
    spreadOddButton.setAttribute("aria-checked", isOdd);
    spreadEvenButton.setAttribute("aria-checked", isEven);
  }
  this.eventBus._on("spreadmodechanged", spreadModeChanged);
  this.eventBus._on("secondarytoolbarreset", evt => {
    if (evt.source === this) {
      spreadModeChanged({
        mode: _ui_utils.SpreadMode.NONE
      });
    }
  });
}

/***/ }),
/* 41 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Toolbar = void 0;
var _ui_utils = __webpack_require__(3);
var _pdfjsLib = __webpack_require__(4);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }
function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }
function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }
function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }
function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }
function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }
function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }
function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }
const PAGE_NUMBER_LOADING_INDICATOR = "visiblePageIsLoading";
var _wasLocalized = /*#__PURE__*/new WeakMap();
var _bindListeners = /*#__PURE__*/new WeakSet();
var _bindEditorToolsListener = /*#__PURE__*/new WeakSet();
var _updateUIState = /*#__PURE__*/new WeakSet();
var _adjustScaleWidth = /*#__PURE__*/new WeakSet();
class Toolbar {
  constructor(_options, eventBus, _l10n) {
    _classPrivateMethodInitSpec(this, _adjustScaleWidth);
    _classPrivateMethodInitSpec(this, _updateUIState);
    _classPrivateMethodInitSpec(this, _bindEditorToolsListener);
    _classPrivateMethodInitSpec(this, _bindListeners);
    _classPrivateFieldInitSpec(this, _wasLocalized, {
      writable: true,
      value: false
    });
    this.toolbar = _options.container;
    this.eventBus = eventBus;
    this.l10n = _l10n;
    this.buttons = [{
      element: _options.previous,
      eventName: "previouspage"
    }, {
      element: _options.next,
      eventName: "nextpage"
    }, {
      element: _options.zoomIn,
      eventName: "zoomin"
    }, {
      element: _options.zoomOut,
      eventName: "zoomout"
    }, {
      element: _options.print,
      eventName: "print"
    }, {
      element: _options.download,
      eventName: "download"
    }, {
      element: _options.editorFreeTextButton,
      eventName: "switchannotationeditormode",
      eventDetails: {
        get mode() {
          const classList = _options.editorFreeTextButton.classList;
          return classList.contains("toggled") ? _pdfjsLib.AnnotationEditorType.NONE : _pdfjsLib.AnnotationEditorType.FREETEXT;
        }
      }
    }, {
      element: _options.editorInkButton,
      eventName: "switchannotationeditormode",
      eventDetails: {
        get mode() {
          const classList = _options.editorInkButton.classList;
          return classList.contains("toggled") ? _pdfjsLib.AnnotationEditorType.NONE : _pdfjsLib.AnnotationEditorType.INK;
        }
      }
    }];
    this.buttons.push({
      element: _options.openFile,
      eventName: "openfile"
    });
    this.items = {
      numPages: _options.numPages,
      pageNumber: _options.pageNumber,
      scaleSelect: _options.scaleSelect,
      customScaleOption: _options.customScaleOption,
      previous: _options.previous,
      next: _options.next,
      zoomIn: _options.zoomIn,
      zoomOut: _options.zoomOut
    };
    _classPrivateMethodGet(this, _bindListeners, _bindListeners2).call(this, _options);
    this.reset();
  }
  setPageNumber(pageNumber, pageLabel) {
    this.pageNumber = pageNumber;
    this.pageLabel = pageLabel;
    _classPrivateMethodGet(this, _updateUIState, _updateUIState2).call(this, false);
  }
  setPagesCount(pagesCount, hasPageLabels) {
    this.pagesCount = pagesCount;
    this.hasPageLabels = hasPageLabels;
    _classPrivateMethodGet(this, _updateUIState, _updateUIState2).call(this, true);
  }
  setPageScale(pageScaleValue, pageScale) {
    this.pageScaleValue = (pageScaleValue || pageScale).toString();
    this.pageScale = pageScale;
    _classPrivateMethodGet(this, _updateUIState, _updateUIState2).call(this, false);
  }
  reset() {
    this.pageNumber = 0;
    this.pageLabel = null;
    this.hasPageLabels = false;
    this.pagesCount = 0;
    this.pageScaleValue = _ui_utils.DEFAULT_SCALE_VALUE;
    this.pageScale = _ui_utils.DEFAULT_SCALE;
    _classPrivateMethodGet(this, _updateUIState, _updateUIState2).call(this, true);
    this.updateLoadingIndicatorState();
    this.eventBus.dispatch("toolbarreset", {
      source: this
    });
  }
  updateLoadingIndicatorState() {
    let loading = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    const pageNumber = this.items.pageNumber;
    pageNumber.classList.toggle(PAGE_NUMBER_LOADING_INDICATOR, loading);
  }
}
exports.Toolbar = Toolbar;
function _bindListeners2(options) {
  const _this$items = this.items,
    pageNumber = _this$items.pageNumber,
    scaleSelect = _this$items.scaleSelect;
  const self = this;
  var _iterator = _createForOfIteratorHelper(this.buttons),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      const _step$value = _step.value,
        element = _step$value.element,
        eventName = _step$value.eventName,
        eventDetails = _step$value.eventDetails;
      element.addEventListener("click", evt => {
        if (eventName !== null) {
          const details = {
            source: this
          };
          if (eventDetails) {
            for (const property in eventDetails) {
              details[property] = eventDetails[property];
            }
          }
          this.eventBus.dispatch(eventName, details);
        }
      });
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  pageNumber.addEventListener("click", function () {
    this.select();
  });
  pageNumber.addEventListener("change", function () {
    self.eventBus.dispatch("pagenumberchanged", {
      source: self,
      value: this.value
    });
  });
  scaleSelect.addEventListener("change", function () {
    if (this.value === "custom") {
      return;
    }
    self.eventBus.dispatch("scalechanged", {
      source: self,
      value: this.value
    });
  });
  scaleSelect.addEventListener("click", function (evt) {
    const target = evt.target;
    if (this.value === self.pageScaleValue && target.tagName.toUpperCase() === "OPTION") {
      this.blur();
    }
  });
  scaleSelect.oncontextmenu = _ui_utils.noContextMenuHandler;
  this.eventBus._on("localized", () => {
    _classPrivateFieldSet(this, _wasLocalized, true);
    _classPrivateMethodGet(this, _adjustScaleWidth, _adjustScaleWidth2).call(this);
    _classPrivateMethodGet(this, _updateUIState, _updateUIState2).call(this, true);
  });
  _classPrivateMethodGet(this, _bindEditorToolsListener, _bindEditorToolsListener2).call(this, options);
}
function _bindEditorToolsListener2(_ref) {
  let editorFreeTextButton = _ref.editorFreeTextButton,
    editorFreeTextParamsToolbar = _ref.editorFreeTextParamsToolbar,
    editorInkButton = _ref.editorInkButton,
    editorInkParamsToolbar = _ref.editorInkParamsToolbar;
  const editorModeChanged = function editorModeChanged(evt) {
    let disableButtons = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    const editorButtons = [{
      mode: _pdfjsLib.AnnotationEditorType.FREETEXT,
      button: editorFreeTextButton,
      toolbar: editorFreeTextParamsToolbar
    }, {
      mode: _pdfjsLib.AnnotationEditorType.INK,
      button: editorInkButton,
      toolbar: editorInkParamsToolbar
    }];
    for (var _i = 0, _editorButtons = editorButtons; _i < _editorButtons.length; _i++) {
      const _editorButtons$_i = _editorButtons[_i],
        mode = _editorButtons$_i.mode,
        button = _editorButtons$_i.button,
        toolbar = _editorButtons$_i.toolbar;
      const checked = mode === evt.mode;
      button.classList.toggle("toggled", checked);
      button.setAttribute("aria-checked", checked);
      button.disabled = disableButtons;
      toolbar === null || toolbar === void 0 ? void 0 : toolbar.classList.toggle("hidden", !checked);
    }
  };
  this.eventBus._on("annotationeditormodechanged", editorModeChanged);
  this.eventBus._on("toolbarreset", evt => {
    if (evt.source === this) {
      editorModeChanged({
        mode: _pdfjsLib.AnnotationEditorType.NONE
      }, true);
    }
  });
}
function _updateUIState2() {
  let resetNumPages = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  if (!_classPrivateFieldGet(this, _wasLocalized)) {
    return;
  }
  const pageNumber = this.pageNumber,
    pagesCount = this.pagesCount,
    pageScaleValue = this.pageScaleValue,
    pageScale = this.pageScale,
    items = this.items;
  if (resetNumPages) {
    if (this.hasPageLabels) {
      items.pageNumber.type = "text";
    } else {
      items.pageNumber.type = "number";
      this.l10n.get("of_pages", {
        pagesCount
      }).then(msg => {
        items.numPages.textContent = msg;
      });
    }
    items.pageNumber.max = pagesCount;
  }
  if (this.hasPageLabels) {
    items.pageNumber.value = this.pageLabel;
    this.l10n.get("page_of_pages", {
      pageNumber,
      pagesCount
    }).then(msg => {
      items.numPages.textContent = msg;
    });
  } else {
    items.pageNumber.value = pageNumber;
  }
  items.previous.disabled = pageNumber <= 1;
  items.next.disabled = pageNumber >= pagesCount;
  items.zoomOut.disabled = pageScale <= _ui_utils.MIN_SCALE;
  items.zoomIn.disabled = pageScale >= _ui_utils.MAX_SCALE;
  this.l10n.get("page_scale_percent", {
    scale: Math.round(pageScale * 10000) / 100
  }).then(msg => {
    let predefinedValueFound = false;
    var _iterator2 = _createForOfIteratorHelper(items.scaleSelect.options),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        const option = _step2.value;
        if (option.value !== pageScaleValue) {
          option.selected = false;
          continue;
        }
        option.selected = true;
        predefinedValueFound = true;
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
    if (!predefinedValueFound) {
      items.customScaleOption.textContent = msg;
      items.customScaleOption.selected = true;
    }
  });
}
function _adjustScaleWidth2() {
  return _adjustScaleWidth3.apply(this, arguments);
}
function _adjustScaleWidth3() {
  _adjustScaleWidth3 = _asyncToGenerator(function* () {
    const items = this.items,
      l10n = this.l10n;
    const predefinedValuesPromise = Promise.all([l10n.get("page_scale_auto"), l10n.get("page_scale_actual"), l10n.get("page_scale_fit"), l10n.get("page_scale_width")]);
    yield _ui_utils.animationStarted;
    const style = getComputedStyle(items.scaleSelect);
    const scaleSelectWidth = parseFloat(style.getPropertyValue("--scale-select-width"));
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d", {
      alpha: false
    });
    ctx.font = `${style.fontSize} ${style.fontFamily}`;
    let maxWidth = 0;
    var _iterator3 = _createForOfIteratorHelper(yield predefinedValuesPromise),
      _step3;
    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        const predefinedValue = _step3.value;
        const _ctx$measureText = ctx.measureText(predefinedValue),
          width = _ctx$measureText.width;
        if (width > maxWidth) {
          maxWidth = width;
        }
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }
    maxWidth += 0.3 * scaleSelectWidth;
    if (maxWidth > scaleSelectWidth) {
      const container = items.scaleSelect.parentNode;
      container.style.setProperty("--scale-select-width", `${maxWidth}px`);
    }
    canvas.width = 0;
    canvas.height = 0;
  });
  return _adjustScaleWidth3.apply(this, arguments);
}

/***/ }),
/* 42 */
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.ViewHistory = void 0;
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
const DEFAULT_VIEW_HISTORY_CACHE_SIZE = 20;
class ViewHistory {
  constructor(fingerprint) {
    let cacheSize = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DEFAULT_VIEW_HISTORY_CACHE_SIZE;
    this.fingerprint = fingerprint;
    this.cacheSize = cacheSize;
    this._initializedPromise = this._readFromStorage().then(databaseStr => {
      const database = JSON.parse(databaseStr || "{}");
      let index = -1;
      if (!Array.isArray(database.files)) {
        database.files = [];
      } else {
        while (database.files.length >= this.cacheSize) {
          database.files.shift();
        }
        for (let i = 0, ii = database.files.length; i < ii; i++) {
          const branch = database.files[i];
          if (branch.fingerprint === this.fingerprint) {
            index = i;
            break;
          }
        }
      }
      if (index === -1) {
        index = database.files.push({
          fingerprint: this.fingerprint
        }) - 1;
      }
      this.file = database.files[index];
      this.database = database;
    });
  }
  _writeToStorage() {
    var _this = this;
    return _asyncToGenerator(function* () {
      const databaseStr = JSON.stringify(_this.database);
      localStorage.setItem("pdfjs.history", databaseStr);
    })();
  }
  _readFromStorage() {
    return _asyncToGenerator(function* () {
      return localStorage.getItem("pdfjs.history");
    })();
  }
  set(name, val) {
    var _this2 = this;
    return _asyncToGenerator(function* () {
      yield _this2._initializedPromise;
      _this2.file[name] = val;
      return _this2._writeToStorage();
    })();
  }
  setMultiple(properties) {
    var _this3 = this;
    return _asyncToGenerator(function* () {
      yield _this3._initializedPromise;
      for (const name in properties) {
        _this3.file[name] = properties[name];
      }
      return _this3._writeToStorage();
    })();
  }
  get(name, defaultValue) {
    var _this4 = this;
    return _asyncToGenerator(function* () {
      yield _this4._initializedPromise;
      const val = _this4.file[name];
      return val !== undefined ? val : defaultValue;
    })();
  }
  getMultiple(properties) {
    var _this5 = this;
    return _asyncToGenerator(function* () {
      yield _this5._initializedPromise;
      const values = Object.create(null);
      for (const name in properties) {
        const val = _this5.file[name];
        values[name] = val !== undefined ? val : properties[name];
      }
      return values;
    })();
  }
}
exports.ViewHistory = ViewHistory;

/***/ }),
/* 43 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.BasePreferences = void 0;
var _app_options = __webpack_require__(5);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }
function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }
function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }
function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }
function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }
function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }
var _defaults = /*#__PURE__*/new WeakMap();
var _prefs = /*#__PURE__*/new WeakMap();
var _initializedPromise = /*#__PURE__*/new WeakMap();
class BasePreferences {
  constructor() {
    _classPrivateFieldInitSpec(this, _defaults, {
      writable: true,
      value: Object.freeze({
        "annotationEditorMode": 0,
        "annotationMode": 2,
        "cursorToolOnLoad": 0,
        "defaultZoomDelay": 400,
        "defaultZoomValue": "",
        "disablePageLabels": false,
        "enablePermissions": false,
        "enablePrintAutoRotate": true,
        "enableScripting": true,
        "externalLinkTarget": 0,
        "historyUpdateUrl": false,
        "ignoreDestinationZoom": false,
        "forcePageColors": false,
        "pageColorsBackground": "Canvas",
        "pageColorsForeground": "CanvasText",
        "pdfBugEnabled": false,
        "sidebarViewOnLoad": -1,
        "scrollModeOnLoad": -1,
        "spreadModeOnLoad": -1,
        "textLayerMode": 1,
        "useOnlyCssZoom": false,
        "viewerCssTheme": 0,
        "viewOnLoad": 0,
        "disableAutoFetch": false,
        "disableFontFace": false,
        "disableRange": false,
        "disableStream": false,
        "enableXfa": true,
        "renderer": "canvas"
      })
    });
    _classPrivateFieldInitSpec(this, _prefs, {
      writable: true,
      value: Object.create(null)
    });
    _classPrivateFieldInitSpec(this, _initializedPromise, {
      writable: true,
      value: null
    });
    if (this.constructor === BasePreferences) {
      throw new Error("Cannot initialize BasePreferences.");
    }
    _classPrivateFieldSet(this, _initializedPromise, this._readFromStorage(_classPrivateFieldGet(this, _defaults)).then(prefs => {
      for (const name in _classPrivateFieldGet(this, _defaults)) {
        const prefValue = prefs === null || prefs === void 0 ? void 0 : prefs[name];
        if (typeof prefValue === typeof _classPrivateFieldGet(this, _defaults)[name]) {
          _classPrivateFieldGet(this, _prefs)[name] = prefValue;
        }
      }
    }));
  }
  _writeToStorage(prefObj) {
    return _asyncToGenerator(function* () {
      throw new Error("Not implemented: _writeToStorage");
    })();
  }
  _readFromStorage(prefObj) {
    return _asyncToGenerator(function* () {
      throw new Error("Not implemented: _readFromStorage");
    })();
  }
  reset() {
    var _this = this;
    return _asyncToGenerator(function* () {
      yield _classPrivateFieldGet(_this, _initializedPromise);
      const prefs = _classPrivateFieldGet(_this, _prefs);
      _classPrivateFieldSet(_this, _prefs, Object.create(null));
      return _this._writeToStorage(_classPrivateFieldGet(_this, _defaults)).catch(reason => {
        _classPrivateFieldSet(_this, _prefs, prefs);
        throw reason;
      });
    })();
  }
  set(name, value) {
    var _this2 = this;
    return _asyncToGenerator(function* () {
      yield _classPrivateFieldGet(_this2, _initializedPromise);
      const defaultValue = _classPrivateFieldGet(_this2, _defaults)[name],
        prefs = _classPrivateFieldGet(_this2, _prefs);
      if (defaultValue === undefined) {
        throw new Error(`Set preference: "${name}" is undefined.`);
      } else if (value === undefined) {
        throw new Error("Set preference: no value is specified.");
      }
      const valueType = typeof value,
        defaultType = typeof defaultValue;
      if (valueType !== defaultType) {
        if (valueType === "number" && defaultType === "string") {
          value = value.toString();
        } else {
          throw new Error(`Set preference: "${value}" is a ${valueType}, expected a ${defaultType}.`);
        }
      } else {
        if (valueType === "number" && !Number.isInteger(value)) {
          throw new Error(`Set preference: "${value}" must be an integer.`);
        }
      }
      _classPrivateFieldGet(_this2, _prefs)[name] = value;
      return _this2._writeToStorage(_classPrivateFieldGet(_this2, _prefs)).catch(reason => {
        _classPrivateFieldSet(_this2, _prefs, prefs);
        throw reason;
      });
    })();
  }
  get(name) {
    var _this3 = this;
    return _asyncToGenerator(function* () {
      var _classPrivateFieldGet2;
      yield _classPrivateFieldGet(_this3, _initializedPromise);
      const defaultValue = _classPrivateFieldGet(_this3, _defaults)[name];
      if (defaultValue === undefined) {
        throw new Error(`Get preference: "${name}" is undefined.`);
      }
      return (_classPrivateFieldGet2 = _classPrivateFieldGet(_this3, _prefs)[name]) !== null && _classPrivateFieldGet2 !== void 0 ? _classPrivateFieldGet2 : defaultValue;
    })();
  }
  getAll() {
    var _this4 = this;
    return _asyncToGenerator(function* () {
      yield _classPrivateFieldGet(_this4, _initializedPromise);
      const obj = Object.create(null);
      for (const name in _classPrivateFieldGet(_this4, _defaults)) {
        var _classPrivateFieldGet3;
        obj[name] = (_classPrivateFieldGet3 = _classPrivateFieldGet(_this4, _prefs)[name]) !== null && _classPrivateFieldGet3 !== void 0 ? _classPrivateFieldGet3 : _classPrivateFieldGet(_this4, _defaults)[name];
      }
      return obj;
    })();
  }
}
exports.BasePreferences = BasePreferences;

/***/ }),
/* 44 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.DownloadManager = void 0;
var _pdfjsLib = __webpack_require__(4);
function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }
function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }
function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }
function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }
;
function download(blobUrl, filename) {
  const a = document.createElement("a");
  if (!a.click) {
    throw new Error('DownloadManager: "a.click()" is not supported.');
  }
  a.href = blobUrl;
  a.target = "_parent";
  if ("download" in a) {
    a.download = filename;
  }
  (document.body || document.documentElement).append(a);
  a.click();
  a.remove();
}
var _openBlobUrls = /*#__PURE__*/new WeakMap();
class DownloadManager {
  constructor() {
    _classPrivateFieldInitSpec(this, _openBlobUrls, {
      writable: true,
      value: new WeakMap()
    });
  }
  downloadUrl(url, filename) {
    if (!(0, _pdfjsLib.createValidAbsoluteUrl)(url, "http://example.com")) {
      console.error(`downloadUrl - not a valid URL: ${url}`);
      return;
    }
    download(url + "#pdfjs.action=download", filename);
  }
  downloadData(data, filename, contentType) {
    const blobUrl = URL.createObjectURL(new Blob([data], {
      type: contentType
    }));
    download(blobUrl, filename);
  }
  openOrDownloadData(element, data, filename) {
    const isPdfData = (0, _pdfjsLib.isPdfFile)(filename);
    const contentType = isPdfData ? "application/pdf" : "";
    if (isPdfData) {
      let blobUrl = _classPrivateFieldGet(this, _openBlobUrls).get(element);
      if (!blobUrl) {
        blobUrl = URL.createObjectURL(new Blob([data], {
          type: contentType
        }));
        _classPrivateFieldGet(this, _openBlobUrls).set(element, blobUrl);
      }
      let viewerUrl;
      viewerUrl = "?file=" + encodeURIComponent(blobUrl + "#" + filename);
      try {
        window.open(viewerUrl);
        return true;
      } catch (ex) {
        console.error(`openOrDownloadData: ${ex}`);
        URL.revokeObjectURL(blobUrl);
        _classPrivateFieldGet(this, _openBlobUrls).delete(element);
      }
    }
    this.downloadData(data, filename, contentType);
    return false;
  }
  download(blob, url, filename) {
    const blobUrl = URL.createObjectURL(blob);
    download(blobUrl, filename);
  }
}
exports.DownloadManager = DownloadManager;

/***/ }),
/* 45 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.GenericL10n = void 0;
__webpack_require__(46);
var _l10n_utils = __webpack_require__(31);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
const webL10n = document.webL10n;
class GenericL10n {
  constructor(lang) {
    this._lang = lang;
    this._ready = new Promise((resolve, reject) => {
      webL10n.setLanguage((0, _l10n_utils.fixupLangCode)(lang), () => {
        resolve(webL10n);
      });
    });
  }
  getLanguage() {
    var _this = this;
    return _asyncToGenerator(function* () {
      const l10n = yield _this._ready;
      return l10n.getLanguage();
    })();
  }
  getDirection() {
    var _this2 = this;
    return _asyncToGenerator(function* () {
      const l10n = yield _this2._ready;
      return l10n.getDirection();
    })();
  }
  get(key) {
    var _arguments = arguments,
      _this3 = this;
    return _asyncToGenerator(function* () {
      let args = _arguments.length > 1 && _arguments[1] !== undefined ? _arguments[1] : null;
      let fallback = _arguments.length > 2 && _arguments[2] !== undefined ? _arguments[2] : (0, _l10n_utils.getL10nFallback)(key, args);
      const l10n = yield _this3._ready;
      return l10n.get(key, args, fallback);
    })();
  }
  translate(element) {
    var _this4 = this;
    return _asyncToGenerator(function* () {
      const l10n = yield _this4._ready;
      return l10n.translate(element);
    })();
  }
}
exports.GenericL10n = GenericL10n;

/***/ }),
/* 46 */
/***/ (() => {



document.webL10n = function (window, document, undefined) {
  var gL10nData = {};
  var gTextData = '';
  var gTextProp = 'textContent';
  var gLanguage = '';
  var gMacros = {};
  var gReadyState = 'loading';
  var gAsyncResourceLoading = true;
  function getL10nResourceLinks() {
    return document.querySelectorAll('link[type="application/l10n"]');
  }
  function getL10nDictionary() {
    var script = document.querySelector('script[type="application/l10n"]');
    return script ? JSON.parse(script.innerHTML) : null;
  }
  function getTranslatableChildren(element) {
    return element ? element.querySelectorAll('*[data-l10n-id]') : [];
  }
  function getL10nAttributes(element) {
    if (!element) return {};
    var l10nId = element.getAttribute('data-l10n-id');
    var l10nArgs = element.getAttribute('data-l10n-args');
    var args = {};
    if (l10nArgs) {
      try {
        args = JSON.parse(l10nArgs);
      } catch (e) {
        console.warn('could not parse arguments for #' + l10nId);
      }
    }
    return {
      id: l10nId,
      args: args
    };
  }
  function xhrLoadText(url, onSuccess, onFailure) {
    onSuccess = onSuccess || function _onSuccess(data) {};
    onFailure = onFailure || function _onFailure() {};
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, gAsyncResourceLoading);
    if (xhr.overrideMimeType) {
      xhr.overrideMimeType('text/plain; charset=utf-8');
    }
    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4) {
        if (xhr.status == 200 || xhr.status === 0) {
          onSuccess(xhr.responseText);
        } else {
          onFailure();
        }
      }
    };
    xhr.onerror = onFailure;
    xhr.ontimeout = onFailure;
    try {
      xhr.send(null);
    } catch (e) {
      onFailure();
    }
  }
  function parseResource(href, lang, successCallback, failureCallback) {
    var baseURL = href.replace(/[^\/]*$/, '') || './';
    function evalString(text) {
      if (text.lastIndexOf('\\') < 0) return text;
      return text.replace(/\\\\/g, '\\').replace(/\\n/g, '\n').replace(/\\r/g, '\r').replace(/\\t/g, '\t').replace(/\\b/g, '\b').replace(/\\f/g, '\f').replace(/\\{/g, '{').replace(/\\}/g, '}').replace(/\\"/g, '"').replace(/\\'/g, "'");
    }
    function parseProperties(text, parsedPropertiesCallback) {
      var dictionary = {};
      var reBlank = /^\s*|\s*$/;
      var reComment = /^\s*#|^\s*$/;
      var reSection = /^\s*\[(.*)\]\s*$/;
      var reImport = /^\s*@import\s+url\((.*)\)\s*$/i;
      var reSplit = /^([^=\s]*)\s*=\s*(.+)$/;
      function parseRawLines(rawText, extendedSyntax, parsedRawLinesCallback) {
        var entries = rawText.replace(reBlank, '').split(/[\r\n]+/);
        var currentLang = '*';
        var genericLang = lang.split('-', 1)[0];
        var skipLang = false;
        var match = '';
        function nextEntry() {
          while (true) {
            if (!entries.length) {
              parsedRawLinesCallback();
              return;
            }
            var line = entries.shift();
            if (reComment.test(line)) continue;
            if (extendedSyntax) {
              match = reSection.exec(line);
              if (match) {
                currentLang = match[1].toLowerCase();
                skipLang = currentLang !== '*' && currentLang !== lang && currentLang !== genericLang;
                continue;
              } else if (skipLang) {
                continue;
              }
              match = reImport.exec(line);
              if (match) {
                loadImport(baseURL + match[1], nextEntry);
                return;
              }
            }
            var tmp = line.match(reSplit);
            if (tmp && tmp.length == 3) {
              dictionary[tmp[1]] = evalString(tmp[2]);
            }
          }
        }
        nextEntry();
      }
      function loadImport(url, callback) {
        xhrLoadText(url, function (content) {
          parseRawLines(content, false, callback);
        }, function () {
          console.warn(url + ' not found.');
          callback();
        });
      }
      parseRawLines(text, true, function () {
        parsedPropertiesCallback(dictionary);
      });
    }
    xhrLoadText(href, function (response) {
      gTextData += response;
      parseProperties(response, function (data) {
        for (var key in data) {
          var id,
            prop,
            index = key.lastIndexOf('.');
          if (index > 0) {
            id = key.substring(0, index);
            prop = key.substring(index + 1);
          } else {
            id = key;
            prop = gTextProp;
          }
          if (!gL10nData[id]) {
            gL10nData[id] = {};
          }
          gL10nData[id][prop] = data[key];
        }
        if (successCallback) {
          successCallback();
        }
      });
    }, failureCallback);
  }
  function loadLocale(lang, callback) {
    if (lang) {
      lang = lang.toLowerCase();
    }
    callback = callback || function _callback() {};
    clear();
    gLanguage = lang;
    var langLinks = getL10nResourceLinks();
    var langCount = langLinks.length;
    if (langCount === 0) {
      var dict = getL10nDictionary();
      if (dict && dict.locales && dict.default_locale) {
        console.log('using the embedded JSON directory, early way out');
        gL10nData = dict.locales[lang];
        if (!gL10nData) {
          var defaultLocale = dict.default_locale.toLowerCase();
          for (var anyCaseLang in dict.locales) {
            anyCaseLang = anyCaseLang.toLowerCase();
            if (anyCaseLang === lang) {
              gL10nData = dict.locales[lang];
              break;
            } else if (anyCaseLang === defaultLocale) {
              gL10nData = dict.locales[defaultLocale];
            }
          }
        }
        callback();
      } else {
        console.log('no resource to load, early way out');
      }
      gReadyState = 'complete';
      return;
    }
    var onResourceLoaded = null;
    var gResourceCount = 0;
    onResourceLoaded = function onResourceLoaded() {
      gResourceCount++;
      if (gResourceCount >= langCount) {
        callback();
        gReadyState = 'complete';
      }
    };
    function L10nResourceLink(link) {
      var href = link.href;
      this.load = function (lang, callback) {
        parseResource(href, lang, callback, function () {
          console.warn(href + ' not found.');
          console.warn('"' + lang + '" resource not found');
          gLanguage = '';
          callback();
        });
      };
    }
    for (var i = 0; i < langCount; i++) {
      var resource = new L10nResourceLink(langLinks[i]);
      resource.load(lang, onResourceLoaded);
    }
  }
  function clear() {
    gL10nData = {};
    gTextData = '';
    gLanguage = '';
  }
  function getPluralRules(lang) {
    var locales2rules = {
      'af': 3,
      'ak': 4,
      'am': 4,
      'ar': 1,
      'asa': 3,
      'az': 0,
      'be': 11,
      'bem': 3,
      'bez': 3,
      'bg': 3,
      'bh': 4,
      'bm': 0,
      'bn': 3,
      'bo': 0,
      'br': 20,
      'brx': 3,
      'bs': 11,
      'ca': 3,
      'cgg': 3,
      'chr': 3,
      'cs': 12,
      'cy': 17,
      'da': 3,
      'de': 3,
      'dv': 3,
      'dz': 0,
      'ee': 3,
      'el': 3,
      'en': 3,
      'eo': 3,
      'es': 3,
      'et': 3,
      'eu': 3,
      'fa': 0,
      'ff': 5,
      'fi': 3,
      'fil': 4,
      'fo': 3,
      'fr': 5,
      'fur': 3,
      'fy': 3,
      'ga': 8,
      'gd': 24,
      'gl': 3,
      'gsw': 3,
      'gu': 3,
      'guw': 4,
      'gv': 23,
      'ha': 3,
      'haw': 3,
      'he': 2,
      'hi': 4,
      'hr': 11,
      'hu': 0,
      'id': 0,
      'ig': 0,
      'ii': 0,
      'is': 3,
      'it': 3,
      'iu': 7,
      'ja': 0,
      'jmc': 3,
      'jv': 0,
      'ka': 0,
      'kab': 5,
      'kaj': 3,
      'kcg': 3,
      'kde': 0,
      'kea': 0,
      'kk': 3,
      'kl': 3,
      'km': 0,
      'kn': 0,
      'ko': 0,
      'ksb': 3,
      'ksh': 21,
      'ku': 3,
      'kw': 7,
      'lag': 18,
      'lb': 3,
      'lg': 3,
      'ln': 4,
      'lo': 0,
      'lt': 10,
      'lv': 6,
      'mas': 3,
      'mg': 4,
      'mk': 16,
      'ml': 3,
      'mn': 3,
      'mo': 9,
      'mr': 3,
      'ms': 0,
      'mt': 15,
      'my': 0,
      'nah': 3,
      'naq': 7,
      'nb': 3,
      'nd': 3,
      'ne': 3,
      'nl': 3,
      'nn': 3,
      'no': 3,
      'nr': 3,
      'nso': 4,
      'ny': 3,
      'nyn': 3,
      'om': 3,
      'or': 3,
      'pa': 3,
      'pap': 3,
      'pl': 13,
      'ps': 3,
      'pt': 3,
      'rm': 3,
      'ro': 9,
      'rof': 3,
      'ru': 11,
      'rwk': 3,
      'sah': 0,
      'saq': 3,
      'se': 7,
      'seh': 3,
      'ses': 0,
      'sg': 0,
      'sh': 11,
      'shi': 19,
      'sk': 12,
      'sl': 14,
      'sma': 7,
      'smi': 7,
      'smj': 7,
      'smn': 7,
      'sms': 7,
      'sn': 3,
      'so': 3,
      'sq': 3,
      'sr': 11,
      'ss': 3,
      'ssy': 3,
      'st': 3,
      'sv': 3,
      'sw': 3,
      'syr': 3,
      'ta': 3,
      'te': 3,
      'teo': 3,
      'th': 0,
      'ti': 4,
      'tig': 3,
      'tk': 3,
      'tl': 4,
      'tn': 3,
      'to': 0,
      'tr': 0,
      'ts': 3,
      'tzm': 22,
      'uk': 11,
      'ur': 3,
      've': 3,
      'vi': 0,
      'vun': 3,
      'wa': 4,
      'wae': 3,
      'wo': 0,
      'xh': 3,
      'xog': 3,
      'yo': 0,
      'zh': 0,
      'zu': 3
    };
    function isIn(n, list) {
      return list.indexOf(n) !== -1;
    }
    function isBetween(n, start, end) {
      return start <= n && n <= end;
    }
    var pluralRules = {
      '0': function _(n) {
        return 'other';
      },
      '1': function _(n) {
        if (isBetween(n % 100, 3, 10)) return 'few';
        if (n === 0) return 'zero';
        if (isBetween(n % 100, 11, 99)) return 'many';
        if (n == 2) return 'two';
        if (n == 1) return 'one';
        return 'other';
      },
      '2': function _(n) {
        if (n !== 0 && n % 10 === 0) return 'many';
        if (n == 2) return 'two';
        if (n == 1) return 'one';
        return 'other';
      },
      '3': function _(n) {
        if (n == 1) return 'one';
        return 'other';
      },
      '4': function _(n) {
        if (isBetween(n, 0, 1)) return 'one';
        return 'other';
      },
      '5': function _(n) {
        if (isBetween(n, 0, 2) && n != 2) return 'one';
        return 'other';
      },
      '6': function _(n) {
        if (n === 0) return 'zero';
        if (n % 10 == 1 && n % 100 != 11) return 'one';
        return 'other';
      },
      '7': function _(n) {
        if (n == 2) return 'two';
        if (n == 1) return 'one';
        return 'other';
      },
      '8': function _(n) {
        if (isBetween(n, 3, 6)) return 'few';
        if (isBetween(n, 7, 10)) return 'many';
        if (n == 2) return 'two';
        if (n == 1) return 'one';
        return 'other';
      },
      '9': function _(n) {
        if (n === 0 || n != 1 && isBetween(n % 100, 1, 19)) return 'few';
        if (n == 1) return 'one';
        return 'other';
      },
      '10': function _(n) {
        if (isBetween(n % 10, 2, 9) && !isBetween(n % 100, 11, 19)) return 'few';
        if (n % 10 == 1 && !isBetween(n % 100, 11, 19)) return 'one';
        return 'other';
      },
      '11': function _(n) {
        if (isBetween(n % 10, 2, 4) && !isBetween(n % 100, 12, 14)) return 'few';
        if (n % 10 === 0 || isBetween(n % 10, 5, 9) || isBetween(n % 100, 11, 14)) return 'many';
        if (n % 10 == 1 && n % 100 != 11) return 'one';
        return 'other';
      },
      '12': function _(n) {
        if (isBetween(n, 2, 4)) return 'few';
        if (n == 1) return 'one';
        return 'other';
      },
      '13': function _(n) {
        if (isBetween(n % 10, 2, 4) && !isBetween(n % 100, 12, 14)) return 'few';
        if (n != 1 && isBetween(n % 10, 0, 1) || isBetween(n % 10, 5, 9) || isBetween(n % 100, 12, 14)) return 'many';
        if (n == 1) return 'one';
        return 'other';
      },
      '14': function _(n) {
        if (isBetween(n % 100, 3, 4)) return 'few';
        if (n % 100 == 2) return 'two';
        if (n % 100 == 1) return 'one';
        return 'other';
      },
      '15': function _(n) {
        if (n === 0 || isBetween(n % 100, 2, 10)) return 'few';
        if (isBetween(n % 100, 11, 19)) return 'many';
        if (n == 1) return 'one';
        return 'other';
      },
      '16': function _(n) {
        if (n % 10 == 1 && n != 11) return 'one';
        return 'other';
      },
      '17': function _(n) {
        if (n == 3) return 'few';
        if (n === 0) return 'zero';
        if (n == 6) return 'many';
        if (n == 2) return 'two';
        if (n == 1) return 'one';
        return 'other';
      },
      '18': function _(n) {
        if (n === 0) return 'zero';
        if (isBetween(n, 0, 2) && n !== 0 && n != 2) return 'one';
        return 'other';
      },
      '19': function _(n) {
        if (isBetween(n, 2, 10)) return 'few';
        if (isBetween(n, 0, 1)) return 'one';
        return 'other';
      },
      '20': function _(n) {
        if ((isBetween(n % 10, 3, 4) || n % 10 == 9) && !(isBetween(n % 100, 10, 19) || isBetween(n % 100, 70, 79) || isBetween(n % 100, 90, 99))) return 'few';
        if (n % 1000000 === 0 && n !== 0) return 'many';
        if (n % 10 == 2 && !isIn(n % 100, [12, 72, 92])) return 'two';
        if (n % 10 == 1 && !isIn(n % 100, [11, 71, 91])) return 'one';
        return 'other';
      },
      '21': function _(n) {
        if (n === 0) return 'zero';
        if (n == 1) return 'one';
        return 'other';
      },
      '22': function _(n) {
        if (isBetween(n, 0, 1) || isBetween(n, 11, 99)) return 'one';
        return 'other';
      },
      '23': function _(n) {
        if (isBetween(n % 10, 1, 2) || n % 20 === 0) return 'one';
        return 'other';
      },
      '24': function _(n) {
        if (isBetween(n, 3, 10) || isBetween(n, 13, 19)) return 'few';
        if (isIn(n, [2, 12])) return 'two';
        if (isIn(n, [1, 11])) return 'one';
        return 'other';
      }
    };
    var index = locales2rules[lang.replace(/-.*$/, '')];
    if (!(index in pluralRules)) {
      console.warn('plural form unknown for [' + lang + ']');
      return function () {
        return 'other';
      };
    }
    return pluralRules[index];
  }
  gMacros.plural = function (str, param, key, prop) {
    var n = parseFloat(param);
    if (isNaN(n)) return str;
    if (prop != gTextProp) return str;
    if (!gMacros._pluralRules) {
      gMacros._pluralRules = getPluralRules(gLanguage);
    }
    var index = '[' + gMacros._pluralRules(n) + ']';
    if (n === 0 && key + '[zero]' in gL10nData) {
      str = gL10nData[key + '[zero]'][prop];
    } else if (n == 1 && key + '[one]' in gL10nData) {
      str = gL10nData[key + '[one]'][prop];
    } else if (n == 2 && key + '[two]' in gL10nData) {
      str = gL10nData[key + '[two]'][prop];
    } else if (key + index in gL10nData) {
      str = gL10nData[key + index][prop];
    } else if (key + '[other]' in gL10nData) {
      str = gL10nData[key + '[other]'][prop];
    }
    return str;
  };
  function getL10nData(key, args, fallback) {
    var data = gL10nData[key];
    if (!data) {
      console.warn('#' + key + ' is undefined.');
      if (!fallback) {
        return null;
      }
      data = fallback;
    }
    var rv = {};
    for (var prop in data) {
      var str = data[prop];
      str = substIndexes(str, args, key, prop);
      str = substArguments(str, args, key);
      rv[prop] = str;
    }
    return rv;
  }
  function substIndexes(str, args, key, prop) {
    var reIndex = /\{\[\s*([a-zA-Z]+)\(([a-zA-Z]+)\)\s*\]\}/;
    var reMatch = reIndex.exec(str);
    if (!reMatch || !reMatch.length) return str;
    var macroName = reMatch[1];
    var paramName = reMatch[2];
    var param;
    if (args && paramName in args) {
      param = args[paramName];
    } else if (paramName in gL10nData) {
      param = gL10nData[paramName];
    }
    if (macroName in gMacros) {
      var macro = gMacros[macroName];
      str = macro(str, param, key, prop);
    }
    return str;
  }
  function substArguments(str, args, key) {
    var reArgs = /\{\{\s*(.+?)\s*\}\}/g;
    return str.replace(reArgs, function (matched_text, arg) {
      if (args && arg in args) {
        return args[arg];
      }
      if (arg in gL10nData) {
        return gL10nData[arg];
      }
      console.log('argument {{' + arg + '}} for #' + key + ' is undefined.');
      return matched_text;
    });
  }
  function translateElement(element) {
    var l10n = getL10nAttributes(element);
    if (!l10n.id) return;
    var data = getL10nData(l10n.id, l10n.args);
    if (!data) {
      console.warn('#' + l10n.id + ' is undefined.');
      return;
    }
    if (data[gTextProp]) {
      if (getChildElementCount(element) === 0) {
        element[gTextProp] = data[gTextProp];
      } else {
        var children = element.childNodes;
        var found = false;
        for (var i = 0, l = children.length; i < l; i++) {
          if (children[i].nodeType === 3 && /\S/.test(children[i].nodeValue)) {
            if (found) {
              children[i].nodeValue = '';
            } else {
              children[i].nodeValue = data[gTextProp];
              found = true;
            }
          }
        }
        if (!found) {
          var textNode = document.createTextNode(data[gTextProp]);
          element.prepend(textNode);
        }
      }
      delete data[gTextProp];
    }
    for (var k in data) {
      element[k] = data[k];
    }
  }
  function getChildElementCount(element) {
    if (element.children) {
      return element.children.length;
    }
    if (typeof element.childElementCount !== 'undefined') {
      return element.childElementCount;
    }
    var count = 0;
    for (var i = 0; i < element.childNodes.length; i++) {
      count += element.nodeType === 1 ? 1 : 0;
    }
    return count;
  }
  function translateFragment(element) {
    element = element || document.documentElement;
    var children = getTranslatableChildren(element);
    var elementCount = children.length;
    for (var i = 0; i < elementCount; i++) {
      translateElement(children[i]);
    }
    translateElement(element);
  }
  return {
    get: function get(key, args, fallbackString) {
      var index = key.lastIndexOf('.');
      var prop = gTextProp;
      if (index > 0) {
        prop = key.substring(index + 1);
        key = key.substring(0, index);
      }
      var fallback;
      if (fallbackString) {
        fallback = {};
        fallback[prop] = fallbackString;
      }
      var data = getL10nData(key, args, fallback);
      if (data && prop in data) {
        return data[prop];
      }
      return '{{' + key + '}}';
    },
    getData: function getData() {
      return gL10nData;
    },
    getText: function getText() {
      return gTextData;
    },
    getLanguage: function getLanguage() {
      return gLanguage;
    },
    setLanguage: function setLanguage(lang, callback) {
      loadLocale(lang, function () {
        if (callback) callback();
      });
    },
    getDirection: function getDirection() {
      var rtlList = ['ar', 'he', 'fa', 'ps', 'ur'];
      var shortCode = gLanguage.split('-', 1)[0];
      return rtlList.indexOf(shortCode) >= 0 ? 'rtl' : 'ltr';
    },
    translate: translateFragment,
    getReadyState: function getReadyState() {
      return gReadyState;
    },
    ready: function ready(callback) {
      if (!callback) {
        return;
      } else if (gReadyState == 'complete' || gReadyState == 'interactive') {
        window.setTimeout(function () {
          callback();
        });
      } else if (document.addEventListener) {
        document.addEventListener('localized', function once() {
          document.removeEventListener('localized', once);
          callback();
        });
      }
    }
  };
}(window, document);

/***/ }),
/* 47 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.GenericScripting = void 0;
exports.docPropertiesLookup = docPropertiesLookup;
var _pdfjsLib = __webpack_require__(4);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function docPropertiesLookup(_x) {
  return _docPropertiesLookup.apply(this, arguments);
}
function _docPropertiesLookup() {
  _docPropertiesLookup = _asyncToGenerator(function* (pdfDocument) {
    const url = "",
      baseUrl = url.split("#")[0];
    let _yield$pdfDocument$ge = yield pdfDocument.getMetadata(),
      info = _yield$pdfDocument$ge.info,
      metadata = _yield$pdfDocument$ge.metadata,
      contentDispositionFilename = _yield$pdfDocument$ge.contentDispositionFilename,
      contentLength = _yield$pdfDocument$ge.contentLength;
    if (!contentLength) {
      const _yield$pdfDocument$ge2 = yield pdfDocument.getDownloadInfo(),
        length = _yield$pdfDocument$ge2.length;
      contentLength = length;
    }
    return _objectSpread(_objectSpread({}, info), {}, {
      baseURL: baseUrl,
      filesize: contentLength,
      filename: contentDispositionFilename || (0, _pdfjsLib.getPdfFilenameFromUrl)(url),
      metadata: metadata === null || metadata === void 0 ? void 0 : metadata.getRaw(),
      authors: metadata === null || metadata === void 0 ? void 0 : metadata.get("dc:creator"),
      numPages: pdfDocument.numPages,
      URL: url
    });
  });
  return _docPropertiesLookup.apply(this, arguments);
}
class GenericScripting {
  constructor(sandboxBundleSrc) {
    this._ready = (0, _pdfjsLib.loadScript)(sandboxBundleSrc, true).then(() => {
      return window.pdfjsSandbox.QuickJSSandbox();
    });
  }
  createSandbox(data) {
    var _this = this;
    return _asyncToGenerator(function* () {
      const sandbox = yield _this._ready;
      sandbox.create(data);
    })();
  }
  dispatchEventInSandbox(event) {
    var _this2 = this;
    return _asyncToGenerator(function* () {
      const sandbox = yield _this2._ready;
      setTimeout(() => sandbox.dispatchEvent(event), 0);
    })();
  }
  destroySandbox() {
    var _this3 = this;
    return _asyncToGenerator(function* () {
      const sandbox = yield _this3._ready;
      sandbox.nukeSandbox();
    })();
  }
}
exports.GenericScripting = GenericScripting;

/***/ }),
/* 48 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.PDFPrintService = PDFPrintService;
var _pdfjsLib = __webpack_require__(4);
var _app = __webpack_require__(2);
var _print_utils = __webpack_require__(49);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
let activeService = null;
let dialog = null;
let overlayManager = null;
function renderPage(activeServiceOnEntry, pdfDocument, pageNumber, size, printResolution, optionalContentConfigPromise, printAnnotationStoragePromise) {
  const scratchCanvas = activeService.scratchCanvas;
  const PRINT_UNITS = printResolution / _pdfjsLib.PixelsPerInch.PDF;
  scratchCanvas.width = Math.floor(size.width * PRINT_UNITS);
  scratchCanvas.height = Math.floor(size.height * PRINT_UNITS);
  const ctx = scratchCanvas.getContext("2d");
  ctx.save();
  ctx.fillStyle = "rgb(255, 255, 255)";
  ctx.fillRect(0, 0, scratchCanvas.width, scratchCanvas.height);
  ctx.restore();
  return Promise.all([pdfDocument.getPage(pageNumber), printAnnotationStoragePromise]).then(function (_ref) {
    let _ref2 = _slicedToArray(_ref, 2),
      pdfPage = _ref2[0],
      printAnnotationStorage = _ref2[1];
    const renderContext = {
      canvasContext: ctx,
      transform: [PRINT_UNITS, 0, 0, PRINT_UNITS, 0, 0],
      viewport: pdfPage.getViewport({
        scale: 1,
        rotation: size.rotation
      }),
      intent: "print",
      annotationMode: _pdfjsLib.AnnotationMode.ENABLE_STORAGE,
      optionalContentConfigPromise,
      printAnnotationStorage
    };
    return pdfPage.render(renderContext).promise;
  });
}
function PDFPrintService(pdfDocument, pagesOverview, printContainer, printResolution) {
  let optionalContentConfigPromise = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
  let printAnnotationStoragePromise = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : null;
  let l10n = arguments.length > 6 ? arguments[6] : undefined;
  this.pdfDocument = pdfDocument;
  this.pagesOverview = pagesOverview;
  this.printContainer = printContainer;
  this._printResolution = printResolution || 150;
  this._optionalContentConfigPromise = optionalContentConfigPromise || pdfDocument.getOptionalContentConfig();
  this._printAnnotationStoragePromise = printAnnotationStoragePromise || Promise.resolve();
  this.l10n = l10n;
  this.currentPage = -1;
  this.scratchCanvas = document.createElement("canvas");
}
PDFPrintService.prototype = {
  layout() {
    this.throwIfInactive();
    const body = document.querySelector("body");
    body.setAttribute("data-pdfjsprinting", true);
    const hasEqualPageSizes = this.pagesOverview.every(function (size) {
      return size.width === this.pagesOverview[0].width && size.height === this.pagesOverview[0].height;
    }, this);
    if (!hasEqualPageSizes) {
      console.warn("Not all pages have the same size. The printed " + "result may be incorrect!");
    }
    this.pageStyleSheet = document.createElement("style");
    const pageSize = this.pagesOverview[0];
    this.pageStyleSheet.textContent = "@page { size: " + pageSize.width + "pt " + pageSize.height + "pt;}";
    body.append(this.pageStyleSheet);
  },
  destroy() {
    if (activeService !== this) {
      return;
    }
    this.printContainer.textContent = "";
    const body = document.querySelector("body");
    body.removeAttribute("data-pdfjsprinting");
    if (this.pageStyleSheet) {
      this.pageStyleSheet.remove();
      this.pageStyleSheet = null;
    }
    this.scratchCanvas.width = this.scratchCanvas.height = 0;
    this.scratchCanvas = null;
    activeService = null;
    ensureOverlay().then(function () {
      if (overlayManager.active === dialog) {
        overlayManager.close(dialog);
      }
    });
  },
  renderPages() {
    if (this.pdfDocument.isPureXfa) {
      (0, _print_utils.getXfaHtmlForPrinting)(this.printContainer, this.pdfDocument);
      return Promise.resolve();
    }
    const pageCount = this.pagesOverview.length;
    const renderNextPage = (resolve, reject) => {
      this.throwIfInactive();
      if (++this.currentPage >= pageCount) {
        renderProgress(pageCount, pageCount, this.l10n);
        resolve();
        return;
      }
      const index = this.currentPage;
      renderProgress(index, pageCount, this.l10n);
      renderPage(this, this.pdfDocument, index + 1, this.pagesOverview[index], this._printResolution, this._optionalContentConfigPromise, this._printAnnotationStoragePromise).then(this.useRenderedPage.bind(this)).then(function () {
        renderNextPage(resolve, reject);
      }, reject);
    };
    return new Promise(renderNextPage);
  },
  useRenderedPage() {
    this.throwIfInactive();
    const img = document.createElement("img");
    const scratchCanvas = this.scratchCanvas;
    if ("toBlob" in scratchCanvas) {
      scratchCanvas.toBlob(function (blob) {
        img.src = URL.createObjectURL(blob);
      });
    } else {
      img.src = scratchCanvas.toDataURL();
    }
    const wrapper = document.createElement("div");
    wrapper.className = "printedPage";
    wrapper.append(img);
    this.printContainer.append(wrapper);
    return new Promise(function (resolve, reject) {
      img.onload = resolve;
      img.onerror = reject;
    });
  },
  performPrint() {
    this.throwIfInactive();
    return new Promise(resolve => {
      setTimeout(() => {
        if (!this.active) {
          resolve();
          return;
        }
        print.call(window);
        setTimeout(resolve, 20);
      }, 0);
    });
  },
  get active() {
    return this === activeService;
  },
  throwIfInactive() {
    if (!this.active) {
      throw new Error("This print request was cancelled or completed.");
    }
  }
};
const print = window.print;
window.print = function () {
  if (activeService) {
    console.warn("Ignored window.print() because of a pending print job.");
    return;
  }
  ensureOverlay().then(function () {
    if (activeService) {
      overlayManager.open(dialog);
    }
  });
  try {
    dispatchEvent("beforeprint");
  } finally {
    if (!activeService) {
      console.error("Expected print service to be initialized.");
      ensureOverlay().then(function () {
        if (overlayManager.active === dialog) {
          overlayManager.close(dialog);
        }
      });
      return;
    }
    const activeServiceOnEntry = activeService;
    activeService.renderPages().then(function () {
      return activeServiceOnEntry.performPrint();
    }).catch(function () {}).then(function () {
      if (activeServiceOnEntry.active) {
        abort();
      }
    });
  }
};
function dispatchEvent(eventType) {
  const event = document.createEvent("CustomEvent");
  event.initCustomEvent(eventType, false, false, "custom");
  window.dispatchEvent(event);
}
function abort() {
  if (activeService) {
    activeService.destroy();
    dispatchEvent("afterprint");
  }
}
function renderProgress(index, total, l10n) {
  dialog || (dialog = document.getElementById("printServiceDialog"));
  const progress = Math.round(100 * index / total);
  const progressBar = dialog.querySelector("progress");
  const progressPerc = dialog.querySelector(".relative-progress");
  progressBar.value = progress;
  l10n.get("print_progress_percent", {
    progress
  }).then(msg => {
    progressPerc.textContent = msg;
  });
}
window.addEventListener("keydown", function (event) {
  if (event.keyCode === 80 && (event.ctrlKey || event.metaKey) && !event.altKey && (!event.shiftKey || window.chrome || window.opera)) {
    window.print();
    event.preventDefault();
    event.stopImmediatePropagation();
  }
}, true);
if ("onbeforeprint" in window) {
  const stopPropagationIfNeeded = function stopPropagationIfNeeded(event) {
    if (event.detail !== "custom") {
      event.stopImmediatePropagation();
    }
  };
  window.addEventListener("beforeprint", stopPropagationIfNeeded);
  window.addEventListener("afterprint", stopPropagationIfNeeded);
}
let overlayPromise;
function ensureOverlay() {
  if (!overlayPromise) {
    overlayManager = _app.PDFViewerApplication.overlayManager;
    if (!overlayManager) {
      throw new Error("The overlay manager has not yet been initialized.");
    }
    dialog || (dialog = document.getElementById("printServiceDialog"));
    overlayPromise = overlayManager.register(dialog, true);
    document.getElementById("printCancel").onclick = abort;
    dialog.addEventListener("close", abort);
  }
  return overlayPromise;
}
_app.PDFPrintServiceFactory.instance = {
  supportsPrinting: true,
  createPrintService(pdfDocument, pagesOverview, printContainer, printResolution, optionalContentConfigPromise, printAnnotationStoragePromise, l10n) {
    if (activeService) {
      throw new Error("The print service is created and active.");
    }
    activeService = new PDFPrintService(pdfDocument, pagesOverview, printContainer, printResolution, optionalContentConfigPromise, printAnnotationStoragePromise, l10n);
    return activeService;
  }
};

/***/ }),
/* 49 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.getXfaHtmlForPrinting = getXfaHtmlForPrinting;
var _pdfjsLib = __webpack_require__(4);
var _pdf_link_service = __webpack_require__(7);
var _xfa_layer_builder = __webpack_require__(39);
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function getXfaHtmlForPrinting(printContainer, pdfDocument) {
  const xfaHtml = pdfDocument.allXfaHtml;
  const linkService = new _pdf_link_service.SimpleLinkService();
  const scale = Math.round(_pdfjsLib.PixelsPerInch.PDF_TO_CSS_UNITS * 100) / 100;
  var _iterator = _createForOfIteratorHelper(xfaHtml.children),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      const xfaPage = _step.value;
      const page = document.createElement("div");
      page.className = "xfaPrintedPage";
      printContainer.append(page);
      const builder = new _xfa_layer_builder.XfaLayerBuilder({
        pageDiv: page,
        pdfPage: null,
        annotationStorage: pdfDocument.annotationStorage,
        linkService,
        xfaHtml: xfaPage
      });
      const viewport = (0, _pdfjsLib.getXfaPageViewport)(xfaPage, {
        scale
      });
      builder.render(viewport, "print");
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
}

/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "PDFViewerApplication", ({
  enumerable: true,
  get: function get() {
    return _app.PDFViewerApplication;
  }
}));
exports.PDFViewerApplicationConstants = void 0;
Object.defineProperty(exports, "PDFViewerApplicationOptions", ({
  enumerable: true,
  get: function get() {
    return _app_options.AppOptions;
  }
}));
__webpack_require__(1);
__webpack_require__(48);
var _ui_utils = __webpack_require__(3);
var _app_options = __webpack_require__(5);
var _pdf_link_service = __webpack_require__(7);
var _app = __webpack_require__(2);
var _document$blockUnbloc, _document;
const pdfjsVersion = '3.5.80';
const pdfjsBuild = 'b1e0253f2';
const AppConstants = {
  LinkTarget: _pdf_link_service.LinkTarget,
  RenderingStates: _ui_utils.RenderingStates,
  ScrollMode: _ui_utils.ScrollMode,
  SpreadMode: _ui_utils.SpreadMode
};
exports.PDFViewerApplicationConstants = AppConstants;
window.PDFViewerApplication = _app.PDFViewerApplication;
window.PDFViewerApplicationConstants = AppConstants;
window.PDFViewerApplicationOptions = _app_options.AppOptions;
function getViewerConfiguration() {
  return {
    appContainer: document.body,
    mainContainer: document.getElementById("viewerContainer"),
    viewerContainer: document.getElementById("viewer"),
    toolbar: {
      container: document.getElementById("toolbarViewer"),
      numPages: document.getElementById("numPages"),
      pageNumber: document.getElementById("pageNumber"),
      scaleSelect: document.getElementById("scaleSelect"),
      customScaleOption: document.getElementById("customScaleOption"),
      previous: document.getElementById("previous"),
      next: document.getElementById("next"),
      zoomIn: document.getElementById("zoomIn"),
      zoomOut: document.getElementById("zoomOut"),
      viewFind: document.getElementById("viewFind"),
      openFile: document.getElementById("openFile"),
      print: document.getElementById("print"),
      editorFreeTextButton: document.getElementById("editorFreeText"),
      editorFreeTextParamsToolbar: document.getElementById("editorFreeTextParamsToolbar"),
      editorInkButton: document.getElementById("editorInk"),
      editorInkParamsToolbar: document.getElementById("editorInkParamsToolbar"),
      download: document.getElementById("download")
    },
    secondaryToolbar: {
      toolbar: document.getElementById("secondaryToolbar"),
      toggleButton: document.getElementById("secondaryToolbarToggle"),
      presentationModeButton: document.getElementById("presentationMode"),
      openFileButton: document.getElementById("secondaryOpenFile"),
      printButton: document.getElementById("secondaryPrint"),
      downloadButton: document.getElementById("secondaryDownload"),
      viewBookmarkButton: document.getElementById("viewBookmark"),
      firstPageButton: document.getElementById("firstPage"),
      lastPageButton: document.getElementById("lastPage"),
      pageRotateCwButton: document.getElementById("pageRotateCw"),
      pageRotateCcwButton: document.getElementById("pageRotateCcw"),
      cursorSelectToolButton: document.getElementById("cursorSelectTool"),
      cursorHandToolButton: document.getElementById("cursorHandTool"),
      scrollPageButton: document.getElementById("scrollPage"),
      scrollVerticalButton: document.getElementById("scrollVertical"),
      scrollHorizontalButton: document.getElementById("scrollHorizontal"),
      scrollWrappedButton: document.getElementById("scrollWrapped"),
      spreadNoneButton: document.getElementById("spreadNone"),
      spreadOddButton: document.getElementById("spreadOdd"),
      spreadEvenButton: document.getElementById("spreadEven"),
      documentPropertiesButton: document.getElementById("documentProperties")
    },
    sidebar: {
      outerContainer: document.getElementById("outerContainer"),
      sidebarContainer: document.getElementById("sidebarContainer"),
      toggleButton: document.getElementById("sidebarToggle"),
      thumbnailButton: document.getElementById("viewThumbnail"),
      outlineButton: document.getElementById("viewOutline"),
      attachmentsButton: document.getElementById("viewAttachments"),
      layersButton: document.getElementById("viewLayers"),
      thumbnailView: document.getElementById("thumbnailView"),
      outlineView: document.getElementById("outlineView"),
      attachmentsView: document.getElementById("attachmentsView"),
      layersView: document.getElementById("layersView"),
      outlineOptionsContainer: document.getElementById("outlineOptionsContainer"),
      currentOutlineItemButton: document.getElementById("currentOutlineItem")
    },
    sidebarResizer: {
      outerContainer: document.getElementById("outerContainer"),
      resizer: document.getElementById("sidebarResizer")
    },
    findBar: {
      bar: document.getElementById("findbar"),
      toggleButton: document.getElementById("viewFind"),
      findField: document.getElementById("findInput"),
      highlightAllCheckbox: document.getElementById("findHighlightAll"),
      caseSensitiveCheckbox: document.getElementById("findMatchCase"),
      matchDiacriticsCheckbox: document.getElementById("findMatchDiacritics"),
      entireWordCheckbox: document.getElementById("findEntireWord"),
      findMsg: document.getElementById("findMsg"),
      findResultsCount: document.getElementById("findResultsCount"),
      findPreviousButton: document.getElementById("findPrevious"),
      findNextButton: document.getElementById("findNext")
    },
    passwordOverlay: {
      dialog: document.getElementById("passwordDialog"),
      label: document.getElementById("passwordText"),
      input: document.getElementById("password"),
      submitButton: document.getElementById("passwordSubmit"),
      cancelButton: document.getElementById("passwordCancel")
    },
    documentProperties: {
      dialog: document.getElementById("documentPropertiesDialog"),
      closeButton: document.getElementById("documentPropertiesClose"),
      fields: {
        fileName: document.getElementById("fileNameField"),
        fileSize: document.getElementById("fileSizeField"),
        title: document.getElementById("titleField"),
        author: document.getElementById("authorField"),
        subject: document.getElementById("subjectField"),
        keywords: document.getElementById("keywordsField"),
        creationDate: document.getElementById("creationDateField"),
        modificationDate: document.getElementById("modificationDateField"),
        creator: document.getElementById("creatorField"),
        producer: document.getElementById("producerField"),
        version: document.getElementById("versionField"),
        pageCount: document.getElementById("pageCountField"),
        pageSize: document.getElementById("pageSizeField"),
        linearized: document.getElementById("linearizedField")
      }
    },
    annotationEditorParams: {
      editorFreeTextFontSize: document.getElementById("editorFreeTextFontSize"),
      editorFreeTextColor: document.getElementById("editorFreeTextColor"),
      editorInkColor: document.getElementById("editorInkColor"),
      editorInkThickness: document.getElementById("editorInkThickness"),
      editorInkOpacity: document.getElementById("editorInkOpacity")
    },
    printContainer: document.getElementById("printContainer"),
    openFileInput: document.getElementById("fileInput"),
    debuggerScriptPath: "./debugger.js"
  };
}
function webViewerLoad() {
  const config = getViewerConfiguration();
  const event = document.createEvent("CustomEvent");
  event.initCustomEvent("webviewerloaded", true, true, {
    source: window
  });
  try {
    parent.document.dispatchEvent(event);
  } catch (ex) {
    console.error(`webviewerloaded: ${ex}`);
    document.dispatchEvent(event);
  }
  _app.PDFViewerApplication.run(config);
}
(_document$blockUnbloc = (_document = document).blockUnblockOnload) === null || _document$blockUnbloc === void 0 ? void 0 : _document$blockUnbloc.call(_document, true);
if (document.readyState === "interactive" || document.readyState === "complete") {
  webViewerLoad();
} else {
  document.addEventListener("DOMContentLoaded", webViewerLoad, true);
}
})();

/******/ })()
;
//# sourceMappingURL=viewer.js.map