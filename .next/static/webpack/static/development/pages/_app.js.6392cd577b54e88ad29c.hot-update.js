webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./node_modules/antd/lib/drawer/index.js":
/*!***********************************************!*\
  !*** ./node_modules/antd/lib/drawer/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var React = _interopRequireWildcard(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var PropTypes = _interopRequireWildcard(_propTypes);

var _rcDrawer = __webpack_require__(/*! rc-drawer */ "./node_modules/rc-drawer/es/index.js");

var _rcDrawer2 = _interopRequireDefault(_rcDrawer);

var _createReactContext = __webpack_require__(/*! create-react-context */ "./node_modules/create-react-context/lib/index.js");

var _createReactContext2 = _interopRequireDefault(_createReactContext);

var _warning = __webpack_require__(/*! warning */ "./node_modules/warning/warning.js");

var _warning2 = _interopRequireDefault(_warning);

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _icon = __webpack_require__(/*! ../icon */ "./node_modules/antd/lib/icon/index.js");

var _icon2 = _interopRequireDefault(_icon);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var __rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};

var DrawerContext = (0, _createReactContext2['default'])(null);

var Drawer = function (_React$Component) {
    (0, _inherits3['default'])(Drawer, _React$Component);

    function Drawer() {
        (0, _classCallCheck3['default'])(this, Drawer);

        var _this = (0, _possibleConstructorReturn3['default'])(this, (Drawer.__proto__ || Object.getPrototypeOf(Drawer)).apply(this, arguments));

        _this.state = {
            push: false
        };
        _this.close = function (e) {
            if (_this.props.visible !== undefined) {
                if (_this.props.onClose) {
                    _this.props.onClose(e);
                }
                return;
            }
        };
        _this.onMaskClick = function (e) {
            if (!_this.props.maskClosable) {
                return;
            }
            _this.close(e);
        };
        _this.push = function () {
            _this.setState({
                push: true
            });
        };
        _this.pull = function () {
            _this.setState({
                push: false
            });
        };
        _this.onDestoryTransitionEnd = function () {
            var isDestroyOnClose = _this.getDestoryOnClose();
            if (!isDestroyOnClose) {
                return;
            }
            if (!_this.props.visible) {
                _this.destoryClose = true;
                _this.forceUpdate();
            }
        };
        _this.getDestoryOnClose = function () {
            return _this.props.destroyOnClose && !_this.props.visible;
        };
        // get drawar push width or height
        _this.getPushTransform = function (placement) {
            if (placement === 'left' || placement === 'right') {
                return 'translateX(' + (placement === 'left' ? 180 : -180) + 'px)';
            }
            if (placement === 'top' || placement === 'bottom') {
                return 'translateY(' + (placement === 'top' ? 180 : -180) + 'px)';
            }
        };
        // render drawer body dom
        _this.renderBody = function () {
            if (_this.destoryClose && !_this.props.visible) {
                return null;
            }
            _this.destoryClose = false;
            var placement = _this.props.placement;

            var containerStyle = placement === 'left' || placement === 'right' ? {
                overflow: 'auto',
                height: '100%'
            } : {};
            var isDestroyOnClose = _this.getDestoryOnClose();
            if (isDestroyOnClose) {
                // Increase the opacity transition, delete children after closing.
                containerStyle.opacity = 0;
                containerStyle.transition = 'opacity .3s';
            }
            var _this$props = _this.props,
                prefixCls = _this$props.prefixCls,
                title = _this$props.title,
                closable = _this$props.closable;
            // is have header dom

            var header = void 0;
            if (title) {
                header = React.createElement(
                    'div',
                    { className: prefixCls + '-header' },
                    React.createElement(
                        'div',
                        { className: prefixCls + '-title' },
                        title
                    )
                );
            }
            // is have closer button
            var closer = void 0;
            if (closable) {
                closer = React.createElement(
                    'button',
                    { onClick: _this.close, 'aria-label': 'Close', className: prefixCls + '-close' },
                    React.createElement(
                        'span',
                        { className: prefixCls + '-close-x' },
                        React.createElement(_icon2['default'], { type: 'close' })
                    )
                );
            }
            return React.createElement(
                'div',
                { className: prefixCls + '-wrapper-body', style: containerStyle, onTransitionEnd: _this.onDestoryTransitionEnd },
                header,
                closer,
                React.createElement(
                    'div',
                    { className: prefixCls + '-body', style: _this.props.style },
                    _this.props.children
                )
            );
        };
        _this.getRcDrawerStyle = function () {
            var _this$props2 = _this.props,
                zIndex = _this$props2.zIndex,
                placement = _this$props2.placement,
                maskStyle = _this$props2.maskStyle;

            return _this.state.push ? (0, _extends3['default'])({}, maskStyle, { zIndex: zIndex, transform: _this.getPushTransform(placement) }) : (0, _extends3['default'])({}, maskStyle, { zIndex: zIndex });
        };
        // render Provider for Multi-level drawe
        _this.renderProvider = function (value) {
            var _a = _this.props,
                zIndex = _a.zIndex,
                style = _a.style,
                placement = _a.placement,
                className = _a.className,
                wrapClassName = _a.wrapClassName,
                width = _a.width,
                height = _a.height,
                rest = __rest(_a, ["zIndex", "style", "placement", "className", "wrapClassName", "width", "height"]);
            (0, _warning2['default'])(wrapClassName === undefined, 'wrapClassName is deprecated, please use className instead.');
            _this.parentDrawer = value;
            var offsetStyle = {};
            if (placement === 'left' || placement === 'right') {
                offsetStyle.width = width;
            } else {
                offsetStyle.height = height;
            }
            return React.createElement(
                DrawerContext.Provider,
                { value: _this },
                React.createElement(
                    _rcDrawer2['default'],
                    (0, _extends3['default'])({ handler: false }, rest, offsetStyle, { open: _this.props.visible, onMaskClick: _this.onMaskClick, showMask: _this.props.mask, placement: placement, style: _this.getRcDrawerStyle(), className: (0, _classnames2['default'])(wrapClassName, className) }),
                    _this.renderBody()
                )
            );
        };
        return _this;
    }

    (0, _createClass3['default'])(Drawer, [{
        key: 'componentDidUpdate',
        value: function componentDidUpdate(preProps) {
            if (preProps.visible !== this.props.visible && this.parentDrawer) {
                if (this.props.visible) {
                    this.parentDrawer.push();
                } else {
                    this.parentDrawer.pull();
                }
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                DrawerContext.Consumer,
                null,
                this.renderProvider
            );
        }
    }]);
    return Drawer;
}(React.Component);

exports['default'] = Drawer;

Drawer.propTypes = {
    closable: PropTypes.bool,
    destroyOnClose: PropTypes.bool,
    getContainer: PropTypes.oneOfType([PropTypes.string, PropTypes.object, PropTypes.func, PropTypes.bool]),
    maskClosable: PropTypes.bool,
    mask: PropTypes.bool,
    maskStyle: PropTypes.object,
    style: PropTypes.object,
    title: PropTypes.node,
    visible: PropTypes.bool,
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    zIndex: PropTypes.number,
    prefixCls: PropTypes.string,
    placement: PropTypes.string,
    onClose: PropTypes.func,
    className: PropTypes.string
};
Drawer.defaultProps = {
    prefixCls: 'ant-drawer',
    width: 256,
    height: 256,
    closable: true,
    placement: 'right',
    maskClosable: true,
    level: null
};
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/antd/lib/drawer/style/css.js":
/*!***************************************************!*\
  !*** ./node_modules/antd/lib/drawer/style/css.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ../../style/index.css */ "./node_modules/antd/lib/style/index.css");

__webpack_require__(/*! ./index.css */ "./node_modules/antd/lib/drawer/style/index.css");

__webpack_require__(/*! ../../button/style/css */ "./node_modules/antd/lib/button/style/css.js");

/***/ }),

/***/ "./node_modules/rc-drawer/es/Drawer.js":
/*!*********************************************!*\
  !*** ./node_modules/rc-drawer/es/Drawer.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/defineProperty */ "./node_modules/babel-runtime/helpers/defineProperty.js");
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var rc_util_es_ContainerRender__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rc-util/es/ContainerRender */ "./node_modules/rc-util/es/ContainerRender.js");
/* harmony import */ var rc_util_es_getScrollBarSize__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rc-util/es/getScrollBarSize */ "./node_modules/rc-util/es/getScrollBarSize.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./utils */ "./node_modules/rc-drawer/es/utils.js");













var IS_REACT_16 = 'createPortal' in react_dom__WEBPACK_IMPORTED_MODULE_6___default.a;

var currentDrawer = {};
var windowIsUndefined = !(typeof window !== 'undefined' && window.document && window.document.createElement);

var Drawer = function (_React$PureComponent) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Drawer, _React$PureComponent);

  function Drawer(props) {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Drawer);

    var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, (Drawer.__proto__ || Object.getPrototypeOf(Drawer)).call(this, props));

    _initialiseProps.call(_this);

    _this.levelDom = [];
    _this.contentDom = null;
    _this.maskDom = null;
    _this.handlerdom = null;
    _this.mousePos = null;
    _this.firstEnter = props.firstEnter; // 记录首次进入.
    _this.timeout = null;
    _this.drawerId = Number((Date.now() + Math.random()).toString().replace('.', Math.round(Math.random() * 9))).toString(16);
    var open = props.open !== undefined ? props.open : !!props.defaultOpen;
    currentDrawer[_this.drawerId] = open;
    _this.state = {
      open: open
    };
    return _this;
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Drawer, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (!windowIsUndefined) {
        var passiveSupported = false;
        window.addEventListener('test', null, Object.defineProperty({}, 'passive', {
          get: function get() {
            passiveSupported = true;
            return null;
          }
        }));
        this.passive = passiveSupported ? { passive: false } : false;
      }
      var open = this.getOpen();
      if (this.props.handler || open || this.firstEnter) {
        this.getDefault(this.props);
        if (open) {
          this.isOpenChange = true;
        }
        this.forceUpdate();
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var open = nextProps.open,
          placement = nextProps.placement;

      if (open !== undefined && open !== this.props.open) {
        this.isOpenChange = true;
        // 没渲染 dom 时，获取默认数据;
        if (!this.container) {
          this.getDefault(nextProps);
        }
        this.setState({
          open: open
        });
      }
      if (placement !== this.props.placement) {
        // test 的 bug, 有动画过场，删除 dom
        this.contentDom = null;
      }
      if (this.props.level !== nextProps.level) {
        this.getParentAndLevelDom(nextProps);
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      // dom 没渲染时，重走一遍。
      if (!this.firstEnter && this.container) {
        this.forceUpdate();
        this.firstEnter = true;
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      delete currentDrawer[this.drawerId];
      delete this.isOpenChange;
      if (this.container) {
        if (this.state.open) {
          this.setLevelDomTransform(false, true);
        }
        document.body.style.overflow = '';
        // 拦不住。。直接删除；
        if (this.props.getContainer) {
          this.container.parentNode.removeChild(this.container);
        }
      }
      this.firstEnter = false;
      clearTimeout(this.timeout);
      // suppport react15
      // 需要 didmount 后也会渲染，直接 unmount 将不会渲染，加上判断.
      if (this.renderComponent && !IS_REACT_16) {
        this.renderComponent({
          afterClose: this.removeContainer,
          onClose: function onClose() {},

          visible: false
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          getContainer = _props.getContainer,
          wrapperClassName = _props.wrapperClassName;

      var open = this.getOpen();
      currentDrawer[this.drawerId] = open ? this.container : open;
      var children = this.getChildToRender(this.firstEnter ? open : false);
      if (!getContainer) {
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
          'div',
          {
            className: wrapperClassName,
            ref: function ref(c) {
              _this2.container = c;
            }
          },
          children
        );
      }
      if (!this.container || !open && !this.firstEnter) {
        return null;
      }
      // suppport react15
      if (!IS_REACT_16) {
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
          rc_util_es_ContainerRender__WEBPACK_IMPORTED_MODULE_9__["default"],
          {
            parent: this,
            visible: true,
            autoMount: true,
            autoDestroy: false,
            getComponent: function getComponent() {
              return children;
            },
            getContainer: this.getContainer
          },
          function (_ref) {
            var renderComponent = _ref.renderComponent,
                removeContainer = _ref.removeContainer;

            _this2.renderComponent = renderComponent;
            _this2.removeContainer = removeContainer;
            return null;
          }
        );
      }
      return react_dom__WEBPACK_IMPORTED_MODULE_6___default.a.createPortal(children, this.container);
    }
  }]);

  return Drawer;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.PureComponent);

Drawer.defaultProps = {
  prefixCls: 'drawer',
  placement: 'left',
  getContainer: 'body',
  level: 'all',
  duration: '.3s',
  ease: 'cubic-bezier(0.78, 0.14, 0.15, 0.86)',
  onChange: function onChange() {},
  onMaskClick: function onMaskClick() {},
  onHandleClick: function onHandleClick() {},
  handler: react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
    'div',
    { className: 'drawer-handle' },
    react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement('i', { className: 'drawer-handle-icon' })
  ),
  firstEnter: false,
  showMask: true,
  maskStyle: {},
  wrapperClassName: '',
  className: ''
};

var _initialiseProps = function _initialiseProps() {
  var _this3 = this;

  this.onMaskTouchEnd = function (e) {
    _this3.props.onMaskClick(e);
    _this3.onTouchEnd(e, true);
  };

  this.onIconTouchEnd = function (e) {
    _this3.props.onHandleClick(e);
    _this3.onTouchEnd(e);
  };

  this.onTouchEnd = function (e, close) {
    if (_this3.props.open !== undefined) {
      return;
    }
    var open = close || _this3.state.open;
    _this3.isOpenChange = true;
    _this3.setState({
      open: !open
    });
  };

  this.onWrapperTransitionEnd = function (e) {
    if (e.target === _this3.contentWrapper) {
      _this3.dom.style.transition = '';
      if (!_this3.state.open && _this3.getCrrentDrawerSome()) {
        document.body.style.overflowX = '';
        if (_this3.maskDom) {
          _this3.maskDom.style.left = '';
          _this3.maskDom.style.width = '';
        }
      }
    }
  };

  this.getDefault = function (props) {
    _this3.getParentAndLevelDom(props);
    if (props.getContainer || props.parent) {
      _this3.container = _this3.defaultGetContainer();
    }
  };

  this.getCrrentDrawerSome = function () {
    return !Object.keys(currentDrawer).some(function (key) {
      return currentDrawer[key];
    });
  };

  this.getContainer = function () {
    return _this3.container;
  };

  this.getParentAndLevelDom = function (props) {
    if (windowIsUndefined) {
      return;
    }
    var level = props.level,
        getContainer = props.getContainer;

    _this3.levelDom = [];
    if (getContainer) {
      if (typeof getContainer === 'string') {
        var dom = document.querySelectorAll(getContainer)[0];
        _this3.parent = dom;
      }
      if (typeof getContainer === 'function') {
        _this3.parent = getContainer();
      }
      if (typeof getContainer === 'object' && getContainer instanceof window.HTMLElement) {
        _this3.parent = getContainer;
      }
    }
    if (!getContainer && _this3.container) {
      _this3.parent = _this3.container.parentNode;
    }
    if (level === 'all') {
      var children = Array.prototype.slice.call(_this3.parent.children);
      children.forEach(function (child) {
        if (child.nodeName !== 'SCRIPT' && child.nodeName !== 'STYLE' && child.nodeName !== 'LINK' && child !== _this3.container) {
          _this3.levelDom.push(child);
        }
      });
    } else if (level) {
      Object(_utils__WEBPACK_IMPORTED_MODULE_11__["dataToArray"])(level).forEach(function (key) {
        document.querySelectorAll(key).forEach(function (item) {
          _this3.levelDom.push(item);
        });
      });
    }
  };

  this.setLevelDomTransform = function (open, openTransition, placementName, value) {
    var _props2 = _this3.props,
        placement = _props2.placement,
        levelMove = _props2.levelMove,
        duration = _props2.duration,
        ease = _props2.ease,
        onChange = _props2.onChange,
        getContainer = _props2.getContainer;

    if (!windowIsUndefined) {
      _this3.levelDom.forEach(function (dom) {
        if (_this3.isOpenChange || openTransition) {
          /* eslint no-param-reassign: "error" */
          dom.style.transition = 'transform ' + duration + ' ' + ease;
          Object(_utils__WEBPACK_IMPORTED_MODULE_11__["addEventListener"])(dom, _utils__WEBPACK_IMPORTED_MODULE_11__["transitionEnd"], _this3.trnasitionEnd);
          var levelValue = open ? value : 0;
          if (levelMove) {
            var $levelMove = Object(_utils__WEBPACK_IMPORTED_MODULE_11__["transformArguments"])(levelMove, { target: dom, open: open });
            levelValue = open ? $levelMove[0] : $levelMove[1] || 0;
          }
          var $value = typeof levelValue === 'number' ? levelValue + 'px' : levelValue;
          var placementPos = placement === 'left' || placement === 'top' ? $value : '-' + $value;
          dom.style.transform = levelValue ? placementName + '(' + placementPos + ')' : '';
          dom.style.msTransform = levelValue ? placementName + '(' + placementPos + ')' : '';
        }
      });
      // 处理 body 滚动
      if (getContainer === 'body') {
        var eventArray = ['touchstart'];
        var domArray = [document.body, _this3.maskDom, _this3.handlerdom, _this3.contentDom];
        var right = document.body.scrollHeight > (window.innerHeight || document.documentElement.clientHeight) && window.innerWidth > document.body.offsetWidth ? Object(rc_util_es_getScrollBarSize__WEBPACK_IMPORTED_MODULE_10__["default"])(1) : 0;
        var widthTransition = 'width ' + duration + ' ' + ease;
        var trannsformTransition = 'transform ' + duration + ' ' + ease;
        if (open && document.body.style.overflow !== 'hidden') {
          document.body.style.overflow = 'hidden';
          if (right) {
            document.body.style.position = 'relative';
            document.body.style.width = 'calc(100% - ' + right + 'px)';
            _this3.dom.style.transition = 'none';
            switch (placement) {
              case 'right':
                _this3.dom.style.transform = 'translateX(-' + right + 'px)';
                _this3.dom.style.msTransform = 'translateX(-' + right + 'px)';
                break;
              case 'top':
              case 'bottom':
                _this3.dom.style.width = 'calc(100% - ' + right + 'px)';
                _this3.dom.style.transform = 'translateZ(0)';
                break;
              default:
                break;
            }
            clearTimeout(_this3.timeout);
            _this3.timeout = setTimeout(function () {
              _this3.dom.style.transition = trannsformTransition + ',' + widthTransition;
              _this3.dom.style.width = '';
              _this3.dom.style.transform = '';
              _this3.dom.style.msTransform = '';
            });
          }
          // 手机禁滚
          domArray.forEach(function (item, i) {
            if (!item) {
              return;
            }
            Object(_utils__WEBPACK_IMPORTED_MODULE_11__["addEventListener"])(item, eventArray[i] || 'touchmove', i ? _this3.removeMoveHandler : _this3.removeStartHandler, _this3.passive);
          });
        } else if (_this3.getCrrentDrawerSome()) {
          document.body.style.overflow = '';
          if ((_this3.isOpenChange || openTransition) && right) {
            document.body.style.position = '';
            document.body.style.width = '';
            if (_utils__WEBPACK_IMPORTED_MODULE_11__["trnasitionStr"]) {
              document.body.style.overflowX = 'hidden';
            }
            _this3.dom.style.transition = 'none';
            var heightTransition = void 0;
            switch (placement) {
              case 'right':
                {
                  _this3.dom.style.transform = 'translateX(' + right + 'px)';
                  _this3.dom.style.msTransform = 'translateX(' + right + 'px)';
                  _this3.dom.style.width = '100%';
                  widthTransition = 'width 0s ' + ease + ' ' + duration;
                  if (_this3.maskDom) {
                    _this3.maskDom.style.left = '-' + right + 'px';
                    _this3.maskDom.style.width = 'calc(100% + ' + right + 'px)';
                  }
                  break;
                }
              case 'top':
              case 'bottom':
                {
                  _this3.dom.style.width = 'calc(100% + ' + right + 'px)';
                  _this3.dom.style.height = '100%';
                  _this3.dom.style.transform = 'translateZ(0)';
                  heightTransition = 'height 0s ' + ease + ' ' + duration;
                  break;
                }
              default:
                break;
            }
            clearTimeout(_this3.timeout);
            _this3.timeout = setTimeout(function () {
              _this3.dom.style.transition = trannsformTransition + ',' + (heightTransition ? heightTransition + ',' : '') + widthTransition;
              _this3.dom.style.transform = '';
              _this3.dom.style.msTransform = '';
              _this3.dom.style.width = '';
              _this3.dom.style.height = '';
            });
          }
          domArray.forEach(function (item, i) {
            if (!item) {
              return;
            }
            Object(_utils__WEBPACK_IMPORTED_MODULE_11__["removeEventListener"])(item, eventArray[i] || 'touchmove', i ? _this3.removeMoveHandler : _this3.removeStartHandler, _this3.passive);
          });
        }
      }
    }
    if (onChange && _this3.isOpenChange && _this3.firstEnter) {
      onChange(open);
      _this3.isOpenChange = false;
    }
  };

  this.getChildToRender = function (open) {
    var _classnames;

    var _props3 = _this3.props,
        className = _props3.className,
        prefixCls = _props3.prefixCls,
        style = _props3.style,
        placement = _props3.placement,
        children = _props3.children,
        handler = _props3.handler,
        showMask = _props3.showMask,
        maskStyle = _props3.maskStyle,
        width = _props3.width,
        height = _props3.height;

    var wrapperClassname = classnames__WEBPACK_IMPORTED_MODULE_8___default()(prefixCls, (_classnames = {}, babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classnames, prefixCls + '-' + placement, true), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classnames, prefixCls + '-open', open), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classnames, className, !!className), _classnames));
    var isOpenChange = _this3.isOpenChange;
    var isHorizontal = placement === 'left' || placement === 'right';
    var placementName = 'translate' + (isHorizontal ? 'X' : 'Y');
    // 百分比与像素动画不同步，第一次打用后全用像素动画。
    // const defaultValue = !this.contentDom || !level ? '100%' : `${value}px`;
    var placementPos = placement === 'left' || placement === 'top' ? '-100%' : '100%';
    var transform = open ? '' : placementName + '(' + placementPos + ')';
    if (isOpenChange === undefined || isOpenChange) {
      var contentValue = _this3.contentDom ? _this3.contentDom.getBoundingClientRect()[isHorizontal ? 'width' : 'height'] : 0;
      var value = (isHorizontal ? width : height) || contentValue;
      _this3.setLevelDomTransform(open, false, placementName, value);
    }
    var handlerCildren = handler && react__WEBPACK_IMPORTED_MODULE_5___default.a.cloneElement(handler, {
      onClick: function onClick(e) {
        if (handler.props.onClick) {
          handler.props.onClick();
        }
        _this3.onIconTouchEnd(e);
      },
      ref: function ref(c) {
        _this3.handlerdom = c;
      }
    });
    return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
      'div',
      {
        className: wrapperClassname,
        style: style,
        ref: function ref(c) {
          _this3.dom = c;
        },
        onTransitionEnd: _this3.onWrapperTransitionEnd
      },
      showMask && react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement('div', {
        className: prefixCls + '-mask',
        onClick: _this3.onMaskTouchEnd,
        style: maskStyle,
        ref: function ref(c) {
          _this3.maskDom = c;
        }
      }),
      react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
        'div',
        {
          className: prefixCls + '-content-wrapper',
          style: {
            transform: transform,
            msTransform: transform,
            width: Object(_utils__WEBPACK_IMPORTED_MODULE_11__["isNumeric"])(width) ? width + 'px' : width,
            height: Object(_utils__WEBPACK_IMPORTED_MODULE_11__["isNumeric"])(height) ? height + 'px' : height
          },
          ref: function ref(c) {
            _this3.contentWrapper = c;
          }
        },
        react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
          'div',
          {
            className: prefixCls + '-content',
            ref: function ref(c) {
              _this3.contentDom = c;
            },
            onTouchStart: open ? _this3.removeStartHandler : null // 跑用例用
            , onTouchMove: open ? _this3.removeMoveHandler : null // 跑用例用
          },
          children
        ),
        handlerCildren
      )
    );
  };

  this.getOpen = function () {
    return _this3.props.open !== undefined ? _this3.props.open : _this3.state.open;
  };

  this.getTouchParentScroll = function (root, currentTarget, differX, differY) {
    if (!currentTarget) {
      return false;
    }
    // root 为 drawer-content 设定了 overflow, 判断为 root 的 parent 时结束滚动；
    if (currentTarget === root.parentNode) {
      return true;
    }

    var isY = Math.max(Math.abs(differX), Math.abs(differY)) === Math.abs(differY);
    var isX = Math.max(Math.abs(differX), Math.abs(differY)) === Math.abs(differX);

    var scrollY = currentTarget.scrollHeight - currentTarget.clientHeight;
    var scrollX = currentTarget.scrollWidth - currentTarget.clientWidth;
    /**
     * <div style="height: 300px">
     *   <div style="height: 900px"></div>
     * </div>
     * 在没设定 overflow: auto 或 scroll 时，currentTarget 里获取不到 scrollTop 或 scrollLeft,
     * 预先用 scrollTo 来滚动，如果取出的值跟滚动前取出不同，则 currnetTarget 被设定了 overflow; 否则就是上面这种。
     */
    var t = currentTarget.scrollTop;
    var l = currentTarget.scrollLeft;
    currentTarget.scrollTo(currentTarget.scrollLeft + 1, currentTarget.scrollTop + 1);
    var currentT = currentTarget.scrollTop;
    var currentL = currentTarget.scrollLeft;
    currentTarget.scrollTo(currentTarget.scrollLeft - 1, currentTarget.scrollTop - 1);

    if (isY && (!scrollY || !(currentT - t) || scrollY && (currentTarget.scrollTop >= scrollY && differY < 0 || currentTarget.scrollTop <= 0 && differY > 0)) || isX && (!scrollX || !(currentL - l) || scrollX && (currentTarget.scrollLeft >= scrollX && differX < 0 || currentTarget.scrollLeft <= 0 && differX > 0))) {
      return _this3.getTouchParentScroll(root, currentTarget.parentNode, differX, differY);
    }
    return false;
  };

  this.removeStartHandler = function (e) {
    if (e.touches.length > 1) {
      return;
    }
    _this3.startPos = {
      x: e.touches[0].clientX,
      y: e.touches[0].clientY
    };
  };

  this.removeMoveHandler = function (e) {
    if (e.changedTouches.length > 1) {
      return;
    }
    var currentTarget = e.currentTarget;
    var differX = e.changedTouches[0].clientX - _this3.startPos.x;
    var differY = e.changedTouches[0].clientY - _this3.startPos.y;
    if (currentTarget === _this3.maskDom || currentTarget === _this3.handlerdom || currentTarget === _this3.contentDom && _this3.getTouchParentScroll(currentTarget, e.target, differX, differY)) {
      e.preventDefault();
    }
  };

  this.trnasitionEnd = function (e) {
    Object(_utils__WEBPACK_IMPORTED_MODULE_11__["removeEventListener"])(e.target, _utils__WEBPACK_IMPORTED_MODULE_11__["transitionEnd"], _this3.trnasitionEnd);
    e.target.style.transition = '';
  };

  this.defaultGetContainer = function () {
    if (windowIsUndefined) {
      return null;
    }
    var container = document.createElement('div');
    _this3.parent.appendChild(container);
    if (_this3.props.wrapperClassName) {
      container.className = _this3.props.wrapperClassName;
    }
    return container;
  };
};

Drawer.propTypes = {
  wrapperClassName: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string,
  className: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string,
  children: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.node,
  style: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.object,
  width: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.any,
  height: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.any,
  defaultOpen: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.bool,
  firstEnter: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.bool,
  open: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.bool,
  prefixCls: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string,
  placement: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string,
  level: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.array]),
  levelMove: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.array]),
  ease: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string,
  duration: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string,
  getContainer: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.bool]),
  handler: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.any,
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func,
  onMaskClick: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func,
  onHandleClick: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func,
  showMask: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.bool,
  maskStyle: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.object
};

/* harmony default export */ __webpack_exports__["default"] = (Drawer);

/***/ }),

/***/ "./node_modules/rc-drawer/es/index.js":
/*!********************************************!*\
  !*** ./node_modules/rc-drawer/es/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Drawer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Drawer */ "./node_modules/rc-drawer/es/Drawer.js");
// export this package's api


/* harmony default export */ __webpack_exports__["default"] = (_Drawer__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./node_modules/rc-drawer/es/utils.js":
/*!********************************************!*\
  !*** ./node_modules/rc-drawer/es/utils.js ***!
  \********************************************/
/*! exports provided: dataToArray, trnasitionStr, transitionEnd, addEventListener, removeEventListener, transformArguments, isNumeric */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dataToArray", function() { return dataToArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trnasitionStr", function() { return trnasitionStr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transitionEnd", function() { return transitionEnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addEventListener", function() { return addEventListener; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeEventListener", function() { return removeEventListener; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transformArguments", function() { return transformArguments; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNumeric", function() { return isNumeric; });
function dataToArray(vars) {
  if (Array.isArray(vars)) {
    return vars;
  }
  return [vars];
}
var trnasitionEndObject = {
  transition: 'transitionend',
  WebkitTransition: 'webkitTransitionEnd',
  MozTransition: 'transitionend',
  OTransition: 'oTransitionEnd otransitionend'
};
var trnasitionStr = Object.keys(trnasitionEndObject).filter(function (key) {
  if (typeof document === 'undefined') {
    return false;
  }
  var html = document.getElementsByTagName('html')[0];
  return key in (html ? html.style : {});
})[0];
var transitionEnd = trnasitionEndObject[trnasitionStr];

function addEventListener(target, eventType, callback, options) {
  if (target.addEventListener) {
    target.addEventListener(eventType, callback, options);
  } else if (target.attachEvent) {
    target.attachEvent('on' + eventType, callback);
  }
}

function removeEventListener(target, eventType, callback, options) {
  if (target.removeEventListener) {
    target.removeEventListener(eventType, callback, options);
  } else if (target.attachEvent) {
    target.detachEvent('on' + eventType, callback);
  }
}

function transformArguments(arg, cb) {
  var result = void 0;
  if (typeof arg === 'function') {
    result = arg(cb);
  } else {
    result = arg;
  }
  if (Array.isArray(result)) {
    if (result.length === 2) {
      return result;
    }
    return [result[0], result[1]];
  }
  return [result];
}

var isNumeric = function isNumeric(value) {
  return !isNaN(parseFloat(value)) && isFinite(value); // eslint-disable-line
};

/***/ }),

/***/ "./node_modules/rc-util/es/ContainerRender.js":
/*!****************************************************!*\
  !*** ./node_modules/rc-util/es/ContainerRender.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);








var ContainerRender = function (_React$Component) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(ContainerRender, _React$Component);

  function ContainerRender() {
    var _ref;

    var _temp, _this, _ret;

    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, ContainerRender);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, (_ref = ContainerRender.__proto__ || Object.getPrototypeOf(ContainerRender)).call.apply(_ref, [this].concat(args))), _this), _this.removeContainer = function () {
      if (_this.container) {
        react_dom__WEBPACK_IMPORTED_MODULE_5___default.a.unmountComponentAtNode(_this.container);
        _this.container.parentNode.removeChild(_this.container);
        _this.container = null;
      }
    }, _this.renderComponent = function (props, ready) {
      var _this$props = _this.props,
          visible = _this$props.visible,
          getComponent = _this$props.getComponent,
          forceRender = _this$props.forceRender,
          getContainer = _this$props.getContainer,
          parent = _this$props.parent;

      if (visible || parent._component || forceRender) {
        if (!_this.container) {
          _this.container = getContainer();
        }
        react_dom__WEBPACK_IMPORTED_MODULE_5___default.a.unstable_renderSubtreeIntoContainer(parent, getComponent(props), _this.container, function callback() {
          if (ready) {
            ready.call(this);
          }
        });
      }
    }, _temp), babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(_this, _ret);
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(ContainerRender, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.props.autoMount) {
        this.renderComponent();
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      if (this.props.autoMount) {
        this.renderComponent();
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.props.autoDestroy) {
        this.removeContainer();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return this.props.children({
        renderComponent: this.renderComponent,
        removeContainer: this.removeContainer
      });
    }
  }]);

  return ContainerRender;
}(react__WEBPACK_IMPORTED_MODULE_4___default.a.Component);

ContainerRender.propTypes = {
  autoMount: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.bool,
  autoDestroy: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.bool,
  visible: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.bool,
  forceRender: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.bool,
  parent: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.any,
  getComponent: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func.isRequired,
  getContainer: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func.isRequired,
  children: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func.isRequired
};
ContainerRender.defaultProps = {
  autoMount: true,
  autoDestroy: true,
  forceRender: false
};
/* harmony default export */ __webpack_exports__["default"] = (ContainerRender);

/***/ }),

/***/ "./node_modules/rc-util/es/getScrollBarSize.js":
/*!*****************************************************!*\
  !*** ./node_modules/rc-util/es/getScrollBarSize.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getScrollBarSize; });
var cached = void 0;

function getScrollBarSize(fresh) {
  if (fresh || cached === undefined) {
    var inner = document.createElement('div');
    inner.style.width = '100%';
    inner.style.height = '200px';

    var outer = document.createElement('div');
    var outerStyle = outer.style;

    outerStyle.position = 'absolute';
    outerStyle.top = 0;
    outerStyle.left = 0;
    outerStyle.pointerEvents = 'none';
    outerStyle.visibility = 'hidden';
    outerStyle.width = '200px';
    outerStyle.height = '150px';
    outerStyle.overflow = 'hidden';

    outer.appendChild(inner);

    document.body.appendChild(outer);

    var widthContained = inner.offsetWidth;
    outer.style.overflow = 'scroll';
    var widthScroll = inner.offsetWidth;

    if (widthContained === widthScroll) {
      widthScroll = outer.clientWidth;
    }

    document.body.removeChild(outer);

    cached = widthContained - widthScroll;
  }
  return cached;
}

/***/ }),

/***/ "./src/components/Layout/Navbar/Navbar.js":
/*!************************************************!*\
  !*** ./src/components/Layout/Navbar/Navbar.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_drawer_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/drawer/style/css */ "./node_modules/antd/lib/drawer/style/css.js");
/* harmony import */ var antd_lib_drawer_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_drawer_style_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_drawer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/drawer */ "./node_modules/antd/lib/drawer/index.js");
/* harmony import */ var antd_lib_drawer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_drawer__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_row_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/row/style/css */ "./node_modules/antd/lib/row/style/css.js");
/* harmony import */ var antd_lib_row_style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row_style_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/row */ "./node_modules/antd/lib/row/index.js");
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_icon_style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/icon/style/css */ "./node_modules/antd/lib/icon/style/css.js");
/* harmony import */ var antd_lib_icon_style_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon_style_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/icon */ "./node_modules/antd/lib/icon/index.js");
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var antd_lib_col_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd/lib/col/style/css */ "./node_modules/antd/lib/col/style/css.js");
/* harmony import */ var antd_lib_col_style_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col_style_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd/lib/col */ "./node_modules/antd/lib/col/index.js");
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _NavbarStyles__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./NavbarStyles */ "./src/components/Layout/Navbar/NavbarStyles.js");








var _jsxFileName = "C:\\Users\\1.0.0\\Desktop\\react-boilerplate\\src\\components\\Layout\\Navbar\\Navbar.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var Navbar =
/*#__PURE__*/
function (_Component) {
  _inherits(Navbar, _Component);

  function Navbar() {
    _classCallCheck(this, Navbar);

    return _possibleConstructorReturn(this, _getPrototypeOf(Navbar).apply(this, arguments));
  }

  _createClass(Navbar, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_8__["Fragment"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        },
        __self: this
      }, Object(_NavbarStyles__WEBPACK_IMPORTED_MODULE_10__["default"])(), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_3___default.a, {
        type: "flex",
        align: "middle",
        gutter: 8,
        className: "navbar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_7___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }, "Home "), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_7___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }, "Contact"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_5___default.a, {
        class: "ml-auto",
        type: "user",
        theme: "outlined",
        style: {
          fontSize: '32px',
          color: '#08c',
          lineHeight: 1
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_lib_drawer__WEBPACK_IMPORTED_MODULE_1___default.a, {
        title: "Basic Drawer",
        placement: this.state.placement,
        closable: false,
        onClose: this.onClose,
        visible: this.state.visible,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, "Some contents..."), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, "Some contents..."), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, "Some contents...")));
    }
  }]);

  return Navbar;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Navbar);

/***/ })

})
//# sourceMappingURL=_app.js.6392cd577b54e88ad29c.hot-update.js.map