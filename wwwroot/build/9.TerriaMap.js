((self || window)["webpackJsonp"] = (self || window)["webpackJsonp"] || []).push([[9],{

/***/ "./packages/terriajs/lib/Models/ErrorServiceProviders/RollbarErrorServiceProvider.ts":
/*!*******************************************************************************************!*\
  !*** ./packages/terriajs/lib/Models/ErrorServiceProviders/RollbarErrorServiceProvider.ts ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ \"./node_modules/core-js/modules/es.symbol.iterator.js\");\n__webpack_require__(/*! core-js/modules/es.array.filter.js */ \"./node_modules/core-js/modules/es.array.filter.js\");\n__webpack_require__(/*! core-js/modules/es.array.for-each.js */ \"./node_modules/core-js/modules/es.array.for-each.js\");\n__webpack_require__(/*! core-js/modules/es.array.iterator.js */ \"./node_modules/core-js/modules/es.array.iterator.js\");\n__webpack_require__(/*! core-js/modules/es.object.define-properties.js */ \"./node_modules/core-js/modules/es.object.define-properties.js\");\n__webpack_require__(/*! core-js/modules/es.object.define-property.js */ \"./node_modules/core-js/modules/es.object.define-property.js\");\n__webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor.js */ \"./node_modules/core-js/modules/es.object.get-own-property-descriptor.js\");\n__webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptors.js */ \"./node_modules/core-js/modules/es.object.get-own-property-descriptors.js\");\n__webpack_require__(/*! core-js/modules/es.object.keys.js */ \"./node_modules/core-js/modules/es.object.keys.js\");\n__webpack_require__(/*! core-js/modules/es.string.iterator.js */ \"./node_modules/core-js/modules/es.string.iterator.js\");\n__webpack_require__(/*! core-js/modules/es.weak-map.js */ \"./node_modules/core-js/modules/es.weak-map.js\");\n__webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ \"./node_modules/core-js/modules/web.dom-collections.for-each.js\");\n__webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ \"./node_modules/core-js/modules/web.dom-collections.iterator.js\");\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\n__webpack_require__(/*! core-js/modules/es.symbol.js */ \"./node_modules/core-js/modules/es.symbol.js\");\n__webpack_require__(/*! core-js/modules/es.symbol.description.js */ \"./node_modules/core-js/modules/es.symbol.description.js\");\n__webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ \"./node_modules/core-js/modules/es.symbol.to-primitive.js\");\n__webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ \"./node_modules/core-js/modules/es.date.to-primitive.js\");\n__webpack_require__(/*! core-js/modules/es.number.constructor.js */ \"./node_modules/core-js/modules/es.number.constructor.js\");\n__webpack_require__(/*! core-js/modules/es.object.to-string.js */ \"./node_modules/core-js/modules/es.object.to-string.js\");\nvar _rollbar = _interopRequireDefault(__webpack_require__(/*! rollbar */ \"./node_modules/rollbar/dist/rollbar.umd.min.js\"));\nvar _TerriaError = _interopRequireWildcard(__webpack_require__(/*! ../../Core/TerriaError */ \"./packages/terriajs/lib/Core/TerriaError.ts\"));\nfunction _getRequireWildcardCache(e) { if (\"function\" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }\nfunction _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || \"object\" != _typeof(e) && \"function\" != typeof e) return { \"default\": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if (\"default\" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n[\"default\"] = e, t && t.set(e, n), n; }\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }\nfunction _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : String(i); }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\nvar RollbarErrorServiceProvider = exports[\"default\"] = /*#__PURE__*/function () {\n  /**\r\n   * @param configuration Configuration for the Rollbar instance. See https://docs.rollbar.com/docs/rollbarjs-configuration-reference#context-1\r\n   *\r\n   * Caveat: Rollbar API requests are blocked by some privacy extensions for browsers.\r\n   */\n  function RollbarErrorServiceProvider(configuration) {\n    _classCallCheck(this, RollbarErrorServiceProvider);\n    _defineProperty(this, \"rollbar\", void 0);\n    this.rollbar = new _rollbar[\"default\"](_objectSpread({\n      captureUncaught: true,\n      captureUnhandledRejections: true,\n      enabled: true\n    }, configuration));\n  }\n  _createClass(RollbarErrorServiceProvider, [{\n    key: \"error\",\n    value: function error(_error) {\n      if (_error instanceof _TerriaError[\"default\"]) {\n        if ((typeof _error.severity === \"function\" ? _error.severity() : _error.severity) === _TerriaError.TerriaErrorSeverity.Error) {\n          this.rollbar.error(_error.toError());\n        } else {\n          this.rollbar.warning(_error.toError());\n        }\n      } else {\n        this.rollbar.error(_error);\n      }\n    }\n  }]);\n  return RollbarErrorServiceProvider;\n}();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWNrYWdlcy90ZXJyaWFqcy9saWIvTW9kZWxzL0Vycm9yU2VydmljZVByb3ZpZGVycy9Sb2xsYmFyRXJyb3JTZXJ2aWNlUHJvdmlkZXIudHMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy90ZXJyaWFqcy9saWIvTW9kZWxzL0Vycm9yU2VydmljZVByb3ZpZGVycy9Sb2xsYmFyRXJyb3JTZXJ2aWNlUHJvdmlkZXIudHM/YjFjYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUm9sbGJhciBmcm9tIFwicm9sbGJhclwiO1xyXG5pbXBvcnQgVGVycmlhRXJyb3IsIHsgVGVycmlhRXJyb3JTZXZlcml0eSB9IGZyb20gXCIuLi8uLi9Db3JlL1RlcnJpYUVycm9yXCI7XHJcbmltcG9ydCB7IEVycm9yU2VydmljZVByb3ZpZGVyIH0gZnJvbSBcIi4vRXJyb3JTZXJ2aWNlXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSb2xsYmFyRXJyb3JTZXJ2aWNlUHJvdmlkZXJcclxuICBpbXBsZW1lbnRzIEVycm9yU2VydmljZVByb3ZpZGVyXHJcbntcclxuICByZWFkb25seSByb2xsYmFyOiBSb2xsYmFyO1xyXG5cclxuICAvKipcclxuICAgKiBAcGFyYW0gY29uZmlndXJhdGlvbiBDb25maWd1cmF0aW9uIGZvciB0aGUgUm9sbGJhciBpbnN0YW5jZS4gU2VlIGh0dHBzOi8vZG9jcy5yb2xsYmFyLmNvbS9kb2NzL3JvbGxiYXJqcy1jb25maWd1cmF0aW9uLXJlZmVyZW5jZSNjb250ZXh0LTFcclxuICAgKlxyXG4gICAqIENhdmVhdDogUm9sbGJhciBBUEkgcmVxdWVzdHMgYXJlIGJsb2NrZWQgYnkgc29tZSBwcml2YWN5IGV4dGVuc2lvbnMgZm9yIGJyb3dzZXJzLlxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKGNvbmZpZ3VyYXRpb246IGFueSkge1xyXG4gICAgdGhpcy5yb2xsYmFyID0gbmV3IFJvbGxiYXIoe1xyXG4gICAgICBjYXB0dXJlVW5jYXVnaHQ6IHRydWUsXHJcbiAgICAgIGNhcHR1cmVVbmhhbmRsZWRSZWplY3Rpb25zOiB0cnVlLFxyXG4gICAgICBlbmFibGVkOiB0cnVlLFxyXG4gICAgICAuLi5jb25maWd1cmF0aW9uXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGVycm9yKGVycm9yOiBzdHJpbmcgfCBFcnJvciB8IFRlcnJpYUVycm9yKSB7XHJcbiAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBUZXJyaWFFcnJvcikge1xyXG4gICAgICBpZiAoXHJcbiAgICAgICAgKHR5cGVvZiBlcnJvci5zZXZlcml0eSA9PT0gXCJmdW5jdGlvblwiXHJcbiAgICAgICAgICA/IGVycm9yLnNldmVyaXR5KClcclxuICAgICAgICAgIDogZXJyb3Iuc2V2ZXJpdHkpID09PSBUZXJyaWFFcnJvclNldmVyaXR5LkVycm9yXHJcbiAgICAgICkge1xyXG4gICAgICAgIHRoaXMucm9sbGJhci5lcnJvcihlcnJvci50b0Vycm9yKCkpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMucm9sbGJhci53YXJuaW5nKGVycm9yLnRvRXJyb3IoKSk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMucm9sbGJhci5lcnJvcihlcnJvcik7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./packages/terriajs/lib/Models/ErrorServiceProviders/RollbarErrorServiceProvider.ts\n");

/***/ })

}]);