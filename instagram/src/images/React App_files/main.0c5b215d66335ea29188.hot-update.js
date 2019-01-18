webpackHotUpdate("main",{

/***/ "./src/components/CommentSection/CommentSection.js":
/*!*********************************************************!*\
  !*** ./src/components/CommentSection/CommentSection.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_nateboyette_Desktop_WebProjects_Lambda_Web_02_Frontend_07_Intermediate_React_Projects_React_Insta_Clone_instagram_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _Users_nateboyette_Desktop_WebProjects_Lambda_Web_02_Frontend_07_Intermediate_React_Projects_React_Insta_Clone_instagram_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _Users_nateboyette_Desktop_WebProjects_Lambda_Web_02_Frontend_07_Intermediate_React_Projects_React_Insta_Clone_instagram_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_nateboyette_Desktop_WebProjects_Lambda_Web_02_Frontend_07_Intermediate_React_Projects_React_Insta_Clone_instagram_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_nateboyette_Desktop_WebProjects_Lambda_Web_02_Frontend_07_Intermediate_React_Projects_React_Insta_Clone_instagram_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_nateboyette_Desktop_WebProjects_Lambda_Web_02_Frontend_07_Intermediate_React_Projects_React_Insta_Clone_instagram_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_nateboyette_Desktop_WebProjects_Lambda_Web_02_Frontend_07_Intermediate_React_Projects_React_Insta_Clone_instagram_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Comment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Comment */ "./src/components/CommentSection/Comment.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _comment_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./comment.css */ "./src/components/CommentSection/comment.css");
/* harmony import */ var _comment_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_comment_css__WEBPACK_IMPORTED_MODULE_10__);







var _jsxFileName = "/Users/nateboyette/Desktop/WebProjects/Lambda/Web_02_Frontend/07_Intermediate_React/Projects/React-Insta-Clone/instagram/src/components/CommentSection/CommentSection.js";





var CommentSection =
/*#__PURE__*/
function (_React$Component) {
  Object(_Users_nateboyette_Desktop_WebProjects_Lambda_Web_02_Frontend_07_Intermediate_React_Projects_React_Insta_Clone_instagram_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(CommentSection, _React$Component);

  // mapping over comments of the post array
  function CommentSection(props) {
    var _this;

    Object(_Users_nateboyette_Desktop_WebProjects_Lambda_Web_02_Frontend_07_Intermediate_React_Projects_React_Insta_Clone_instagram_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, CommentSection);

    _this = Object(_Users_nateboyette_Desktop_WebProjects_Lambda_Web_02_Frontend_07_Intermediate_React_Projects_React_Insta_Clone_instagram_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_Users_nateboyette_Desktop_WebProjects_Lambda_Web_02_Frontend_07_Intermediate_React_Projects_React_Insta_Clone_instagram_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(CommentSection).call(this, props));

    _this.addNewComment = function (e) {
      e.preventDefault(); // console.log(e)

      var newComments = {
        comments: [].concat(Object(_Users_nateboyette_Desktop_WebProjects_Lambda_Web_02_Frontend_07_Intermediate_React_Projects_React_Insta_Clone_instagram_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_this.state.comments), [{
          username: "default",
          text: _this.state.commentInput
        }]),
        commentInput: ''
      };

      _this.setState(newComments);
    };

    _this.handleChange = function (e) {
      var _e$target = e.target,
          name = _e$target.name,
          value = _e$target.value;

      _this.setState(Object(_Users_nateboyette_Desktop_WebProjects_Lambda_Web_02_Frontend_07_Intermediate_React_Projects_React_Insta_Clone_instagram_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, name, value));

      console.log(_this.state.commentInput);
    };

    _this.state = {
      comments: props.comments,
      commentInput: ''
    };
    console.log('comment section constructor');
    console.log(props);
    return _this;
  } // componentDidMount() {
  //   this.setState({
  //     comments: this.props.comments
  //   })
  //   console.log('comment section CDM')
  //   if (localStorage.getItem("comments") === null) {
  //     localStorage.setItem("comments", "[]");
  //     return;
  //   }
  //   const appStorage = JSON.parse(localStorage.getItem("comments"));
  //   if (appStorage !== "") {
  //     return this.setState({ comments: appStorage })
  //   }
  // }
  // componentDidUpdate() {
  //   let appStorage = localStorage.getItem("comments");
  //   const dataString = JSON.stringify(this.state.comments);
  //   return appStorage !== dataString
  //     ? localStorage.setItem("comments", JSON.stringify(this.state.comments))
  //     : null;
  // }


  Object(_Users_nateboyette_Desktop_WebProjects_Lambda_Web_02_Frontend_07_Intermediate_React_Projects_React_Insta_Clone_instagram_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(CommentSection, [{
    key: "render",
    value: function render() {
      console.log('Comment section render');
      var postComments = this.state.comments.map(function (comment, index) {
        // localStorage.setItem("comment", JSON.stringify(comment))
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 80
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_Comment__WEBPACK_IMPORTED_MODULE_8__["default"], {
          key: index,
          text: comment.text,
          username: comment.username,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 81
          },
          __self: this
        }));
      }); // console.log(localStorage.getItem('comment'))

      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "comment-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }, postComments), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "comment-input-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("form", {
        onSubmit: this.addNewComment,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "text",
        placeholder: "Add a comment...",
        className: "comment-input",
        name: "commentInput",
        value: this.state.commentInput,
        onChange: this.handleChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "ellipsis",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
        className: "fas fa-ellipsis-v",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      }))));
    }
  }]);

  return CommentSection;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

;
CommentSection.propTypes = {
  comments: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.shape({
    text: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.string.isRequired,
    username: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.string.isRequired
  }))
};
/* harmony default export */ __webpack_exports__["default"] = (CommentSection);

/***/ })

})
//# sourceMappingURL=main.0c5b215d66335ea29188.hot-update.js.map