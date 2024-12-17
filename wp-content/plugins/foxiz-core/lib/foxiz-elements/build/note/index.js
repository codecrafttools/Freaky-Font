/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/note/edit.js":
/*!**************************!*\
  !*** ./src/note/edit.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Edit)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);




function Edit(props) {
  const {
    attributes,
    setAttributes
  } = props;
  const {
    heading,
    headingHTMLTag,
    tocAdded,
    icon,
    customSVG,
    customSVGAlt,
    desktopHeadingSize,
    tabletHeadingSize,
    mobileHeadingSize,
    toggle,
    widthStyle,
    shadow,
    borderStyle,
    borderColor,
    darkBorderColor,
    borderWidth,
    borderRadius,
    headingColor,
    headerBg,
    headingBorderColor,
    darkHeadingColor,
    darkHeaderBg,
    darkHeadingBorderColor,
    contentBg,
    darkContentBg,
    desktopHeaderPadding,
    tabletHeaderPadding,
    mobileHeaderPadding,
    desktopPadding,
    tabletPadding,
    mobilePadding
  } = attributes;
  const setAttribute = (name, value) => {
    setAttributes({
      [name]: value
    });
  };
  function setMediaAttribute(name, value) {
    setAttributes({
      [name]: value.url
    });
    setAttributes({
      [name + 'Alt']: value.alt
    });
  }
  function removeMediaAttribute(name) {
    setAttributes({
      [name]: ''
    });
    setAttributes({
      [name + 'Alt']: ''
    });
  }
  const iconOptions = [{
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Idea'),
    value: 'rbi-idea'
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Warning'),
    value: 'rbi-warning'
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Help'),
    value: 'rbi-help'
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Info'),
    value: 'rbi-information'
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Bell'),
    value: 'rbi-notification'
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Trend'),
    value: 'rbi-trending'
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Bookmark'),
    value: 'rbi-bookmark-fill'
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Secure'),
    value: 'rbi-secure'
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Star'),
    value: 'rbi-star'
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Heart'),
    value: 'rbi-heart'
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Chart'),
    value: 'rbi-chart'
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Pin'),
    value: 'rbi-pin'
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Not Allow'),
    value: 'rbi-not-allow'
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Flash'),
    value: 'rbi-flash'
  }];
  const borderStyleOptions = [{
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('None'),
    value: 'none'
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Solid'),
    value: 'solid'
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Dashed'),
    value: 'dashed'
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Dotted'),
    value: 'dotted'
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Double'),
    value: 'double'
  }];
  const headingTagOptions = [{
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('H2'),
    value: 'h2'
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('H3'),
    value: 'h3'
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('H4'),
    value: 'h4'
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('H5'),
    value: 'h5'
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('H6'),
    value: 'h6'
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('p'),
    value: 'p'
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Div'),
    value: 'div'
  }];
  const widthStyleOptions = [{
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Full Width'),
    value: 'fw'
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Inline'),
    value: 'inline'
  }];
  let wrapperClassName = 'gb-wrap note-wrap none-padding';
  if (shadow) {
    wrapperClassName += ' yes-shadow';
  }
  if (toggle) {
    wrapperClassName += ' yes-toggle';
    if (widthStyle) {
      wrapperClassName += ` is-${widthStyle}`;
    }
  }
  if (!headingBorderColor && !headerBg) {
    wrapperClassName += ' no-h-spacing';
  }
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.useBlockProps)({
    className: wrapperClassName,
    style: {
      ...(headingColor && {
        '--heading-color': headingColor
      }),
      ...(headerBg && {
        '--header-bg': headerBg
      }),
      ...(headingBorderColor && {
        '--heading-border-color': headingBorderColor
      }),
      ...(darkHeadingColor && {
        '--dark-heading-color': darkHeadingColor
      }),
      ...(darkHeaderBg && {
        '--dark-header-bg': darkHeaderBg
      }),
      ...(darkHeadingBorderColor && {
        '--dark-heading-border-color': darkHeadingBorderColor
      }),
      ...(desktopHeadingSize && {
        '--desktop-heading-size': `${desktopHeadingSize}px`
      }),
      ...(tabletHeadingSize && {
        '--tablet-heading-size': `${tabletHeadingSize}px`
      }),
      ...(mobileHeadingSize && {
        '--mobile-heading-size': `${mobileHeadingSize}px`
      }),
      ...(contentBg && {
        '--content-bg': contentBg
      }),
      ...(darkContentBg && {
        '--dark-content-bg': darkContentBg
      }),
      ...(borderStyle && {
        '--border-style': borderStyle
      }),
      ...(borderRadius && {
        '--border-radius': `${borderRadius}px`
      }),
      ...(borderWidth && {
        '--border-width': `${borderWidth.top || 0} ${borderWidth.right || 0} ${borderWidth.bottom || 0} ${borderWidth.left || 0}`
      }),
      ...(borderColor && {
        '--border-color': borderColor
      }),
      ...(darkBorderColor && {
        '--dark-border-color': darkBorderColor
      }),
      ...(desktopHeaderPadding && {
        '--desktop-header-padding': `${desktopHeaderPadding.top || 0} ${desktopHeaderPadding.right || 0} ${desktopHeaderPadding.bottom || 0} ${desktopHeaderPadding.left || 0}`
      }),
      ...(tabletHeaderPadding && {
        '--tablet-header-padding': `${tabletHeaderPadding.top || 0} ${tabletHeaderPadding.right || 0} ${tabletHeaderPadding.bottom || 0} ${tabletHeaderPadding.left || 0}`
      }),
      ...(mobileHeaderPadding && {
        '--mobile-header-padding': `${mobileHeaderPadding.top || 0} ${mobileHeaderPadding.right || 0} ${mobileHeaderPadding.bottom || 0} ${mobileHeaderPadding.left || 0}`
      }),
      ...(desktopPadding && {
        '--desktop-padding': `${desktopPadding.top || 0} ${desktopPadding.right || 0} ${desktopPadding.bottom || 0} ${desktopPadding.left || 0}`
      }),
      ...(tabletPadding && {
        '--tablet-padding': `${tabletPadding.top || 0} ${tabletPadding.right || 0} ${tabletPadding.bottom || 0} ${tabletPadding.left || 0}`
      }),
      ...(mobilePadding && {
        '--mobile-padding': `${mobilePadding.top || 0} ${mobilePadding.right || 0} ${mobilePadding.bottom || 0} ${mobilePadding.left || 0}`
      })
    }
  });
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", blockProps, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('General'),
    initialOpen: true
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Heading Tag'),
    value: headingHTMLTag,
    options: headingTagOptions,
    onChange: value => setAttribute('headingHTMLTag', value)
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Table of Content Included'),
    checked: tocAdded,
    onChange: value => setAttribute('tocAdded', value)
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Select an Icon'),
    value: icon,
    options: iconOptions,
    onChange: value => setAttribute('icon', value)
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.BaseControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('or Upload SVG')
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.MediaUploadCheck, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.MediaUpload, {
    onSelect: value => setMediaAttribute('customSVG', value),
    allowedTypes: ['image', 'svg'],
    value: customSVG,
    render: ({
      open
    }) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, !customSVG && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
      className: "button button-large",
      onClick: open
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Upload Icon')), customSVG && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: customSVG,
      alt: "Icon"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
      className: "button button-large",
      onClick: () => removeMediaAttribute('customSVG')
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Remove Icon'))))
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Toggle Button'),
    checked: toggle,
    onChange: value => setAttribute('toggle', value),
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Collapse note content with show/hide toggle arrow button.')
  }), toggle && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Width Layout'),
    value: widthStyle,
    options: widthStyleOptions,
    onChange: value => setAttribute('widthStyle', value),
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Select a max width for the note block when enabled toggle button..')
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls, {
    group: "styles"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Header'),
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    className: "rb-control-label"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Font Size')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "responsive-settings"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Dashicon, {
    icon: "desktop"
  }), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Desktop')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    type: "number",
    placeholder: "18",
    value: desktopHeadingSize,
    onChange: value => setAttribute('desktopHeadingSize', value)
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Dashicon, {
    icon: "tablet"
  }), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Tablet')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    type: "number",
    placeholder: "17",
    value: tabletHeadingSize,
    onChange: value => setAttribute('tabletHeadingSize', value)
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Dashicon, {
    icon: "smartphone"
  }), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Mobile')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    type: "number",
    placeholder: "16",
    value: mobileHeadingSize,
    onChange: value => setAttribute('mobileHeadingSize', value)
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.PanelColorSettings, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Color'),
    colorSettings: [{
      value: headingColor,
      onChange: value => setAttribute('headingColor', value),
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Text Color')
    }, {
      value: headerBg,
      onChange: value => setAttribute('headerBg', value),
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Background')
    }, {
      value: headingBorderColor,
      onChange: value => setAttribute('headingBorderColor', value),
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Bottom Border Color')
    }],
    enableAlpha: true
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, {
    className: "rb-tip-control"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Tip, null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Click outside to see the update!'))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "res-padding-control"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalBoxControl, {
    resetValues: {
      top: '15px',
      right: '30px',
      bottom: '15px',
      left: '30px'
    },
    label: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Dashicon, {
      icon: "desktop"
    }), " ", (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Desktop Padding')),
    values: desktopHeaderPadding,
    onChange: value => setAttribute('desktopHeaderPadding', value)
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalBoxControl, {
    resetValues: {
      top: '15px',
      right: '25px',
      bottom: '15px',
      left: '25px'
    },
    label: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Dashicon, {
      icon: "tablet"
    }), " ", (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Tablet Padding')),
    values: tabletHeaderPadding,
    onChange: value => setAttribute('tabletHeaderPadding', value)
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalBoxControl, {
    resetValues: {
      top: '15px',
      right: '20px',
      bottom: '15px',
      left: '20px'
    },
    label: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Dashicon, {
      icon: "smartphone"
    }), " ", (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Mobile Padding')),
    values: mobileHeaderPadding,
    onChange: value => setAttribute('mobileHeaderPadding', value)
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.PanelColorSettings, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Dark Mode - Color'),
    colorSettings: [{
      value: darkHeadingColor,
      onChange: value => setAttribute('darkHeadingColor', value),
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Text Color')
    }, {
      value: darkHeaderBg,
      onChange: value => setAttribute('darkHeaderBg', value),
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Background')
    }, {
      value: darkHeadingBorderColor,
      onChange: value => setAttribute('darkHeadingBorderColor', value),
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Bottom Border Color')
    }],
    enableAlpha: true
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Content'),
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, {
    className: "rb-tip-control"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Tip, null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Click outside to see the update!'))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "res-padding-control"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalBoxControl, {
    resetValues: {
      top: '15px',
      right: '30px',
      bottom: '30px',
      left: '30px'
    },
    label: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Dashicon, {
      icon: "desktop"
    }), " ", (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Desktop Padding')),
    values: desktopPadding,
    onChange: value => setAttribute('desktopPadding', value)
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalBoxControl, {
    resetValues: {
      top: '15px',
      right: '25px',
      bottom: '25px',
      left: '25px'
    },
    label: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Dashicon, {
      icon: "tablet"
    }), " ", (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Tablet Padding')),
    values: tabletPadding,
    onChange: value => setAttribute('tabletPadding', value)
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalBoxControl, {
    resetValues: {
      top: '15px',
      right: '20px',
      bottom: '20px',
      left: '20px'
    },
    label: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Dashicon, {
      icon: "smartphone"
    }), " ", (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Mobile Padding')),
    values: mobilePadding,
    onChange: value => setAttribute('mobilePadding', value)
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.PanelColorSettings, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Color'),
    colorSettings: [{
      value: contentBg,
      onChange: value => setAttribute('contentBg', value),
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Background')
    }, {
      value: darkContentBg,
      onChange: value => setAttribute('darkContentBg', value),
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Dark Mode - Background')
    }],
    enableAlpha: true
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Tip, null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('You can set content text color based on the block settings that you created.')))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Border & Shadow'),
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Border Style'),
    value: borderStyle,
    options: borderStyleOptions,
    onChange: value => setAttribute('borderStyle', value),
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Please select the border color to see the border if you enable it.')
  }), borderStyle && borderStyle !== 'none' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalBoxControl, {
    resetValues: {
      top: null,
      right: null,
      bottom: null,
      left: null
    },
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Border Width'),
    values: borderWidth,
    onChange: value => setAttribute('borderWidth', value)
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.PanelColorSettings, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Border Color'),
    colorSettings: [{
      value: borderColor,
      onChange: value => setAttribute('borderColor', value),
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Color')
    }, {
      value: darkBorderColor,
      onChange: value => setAttribute('darkBorderColor', value),
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Dark Mode - Color')
    }]
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Border Radius'),
    value: borderRadius,
    onChange: value => setAttribute('borderRadius', value),
    step: 1,
    max: 100,
    min: 0
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Shadow'),
    checked: shadow,
    onChange: value => setAttribute('shadow', value)
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "note-header gb-header"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "note-heading"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "gb-heading heading-icon"
  }, customSVG ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: customSVG,
    alt: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('note icon')
  }) : icon ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
    className: `rbi ${icon}`
  }) : null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.RichText, {
    tagName: headingHTMLTag || 'h3',
    value: heading,
    onChange: value => setAttribute('heading', value),
    className: "gb-heading",
    placeholder: "Enter heading text..."
  })), toggle && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "gb-heading note-toggle"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
    className: "rbi-icon rbi-angle-down"
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "note-content gb-content"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InnerBlocks, {
    templateLock: false
  })));
}

/***/ }),

/***/ "./src/note/save.js":
/*!**************************!*\
  !*** ./src/note/save.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ save)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);



function save(props) {
  const {
    attributes
  } = props;
  const {
    heading,
    headingHTMLTag,
    tocAdded,
    icon,
    customSVG,
    customSVGAlt,
    desktopHeadingSize,
    tabletHeadingSize,
    mobileHeadingSize,
    toggle,
    widthStyle,
    shadow,
    borderStyle,
    borderColor,
    darkBorderColor,
    borderWidth,
    borderRadius,
    headingColor,
    headerBg,
    headingBorderColor,
    darkHeadingColor,
    darkHeaderBg,
    darkHeadingBorderColor,
    contentBg,
    darkContentBg,
    desktopHeaderPadding,
    tabletHeaderPadding,
    mobileHeaderPadding,
    desktopPadding,
    tabletPadding,
    mobilePadding
  } = attributes;
  let wrapperClassName = 'gb-wrap note-wrap none-padding';
  if (shadow) {
    wrapperClassName += ' yes-shadow';
  }
  if (toggle) {
    wrapperClassName += ' yes-toggle';
    if (widthStyle) {
      wrapperClassName += ` is-${widthStyle}`;
    }
  }
  if (!headingBorderColor && !headerBg) {
    wrapperClassName += ' no-h-spacing';
  }
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps.save({
    className: wrapperClassName,
    style: {
      ...(headingColor && {
        '--heading-color': headingColor
      }),
      ...(headerBg && {
        '--header-bg': headerBg
      }),
      ...(headingBorderColor && {
        '--heading-border-color': headingBorderColor
      }),
      ...(darkHeadingColor && {
        '--dark-heading-color': darkHeadingColor
      }),
      ...(darkHeaderBg && {
        '--dark-header-bg': darkHeaderBg
      }),
      ...(darkHeadingBorderColor && {
        '--dark-heading-border-color': darkHeadingBorderColor
      }),
      ...(desktopHeadingSize && {
        '--desktop-heading-size': `${desktopHeadingSize}px`
      }),
      ...(tabletHeadingSize && {
        '--tablet-heading-size': `${tabletHeadingSize}px`
      }),
      ...(mobileHeadingSize && {
        '--mobile-heading-size': `${mobileHeadingSize}px`
      }),
      ...(contentBg && {
        '--content-bg': contentBg
      }),
      ...(darkContentBg && {
        '--dark-content-bg': darkContentBg
      }),
      ...(borderStyle && {
        '--border-style': borderStyle
      }),
      ...(borderRadius && {
        '--border-radius': `${borderRadius}px`
      }),
      ...(borderWidth && {
        '--border-width': `${borderWidth.top || 0} ${borderWidth.right || 0} ${borderWidth.bottom || 0} ${borderWidth.left || 0}`
      }),
      ...(borderColor && {
        '--border-color': borderColor
      }),
      ...(darkBorderColor && {
        '--dark-border-color': darkBorderColor
      }),
      ...(desktopHeaderPadding && {
        '--desktop-header-padding': `${desktopHeaderPadding.top || 0} ${desktopHeaderPadding.right || 0} ${desktopHeaderPadding.bottom || 0} ${desktopHeaderPadding.left || 0}`
      }),
      ...(tabletHeaderPadding && {
        '--tablet-header-padding': `${tabletHeaderPadding.top || 0} ${tabletHeaderPadding.right || 0} ${tabletHeaderPadding.bottom || 0} ${tabletHeaderPadding.left || 0}`
      }),
      ...(mobileHeaderPadding && {
        '--mobile-header-padding': `${mobileHeaderPadding.top || 0} ${mobileHeaderPadding.right || 0} ${mobileHeaderPadding.bottom || 0} ${mobileHeaderPadding.left || 0}`
      }),
      ...(desktopPadding && {
        '--desktop-padding': `${desktopPadding.top || 0} ${desktopPadding.right || 0} ${desktopPadding.bottom || 0} ${desktopPadding.left || 0}`
      }),
      ...(tabletPadding && {
        '--tablet-padding': `${tabletPadding.top || 0} ${tabletPadding.right || 0} ${tabletPadding.bottom || 0} ${tabletPadding.left || 0}`
      }),
      ...(mobilePadding && {
        '--mobile-padding': `${mobilePadding.top || 0} ${mobilePadding.right || 0} ${mobilePadding.bottom || 0} ${mobilePadding.left || 0}`
      })
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "note-header gb-header"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "note-heading"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "gb-heading heading-icon"
  }, customSVG ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: customSVG,
    alt: customSVGAlt || (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('note icon')
  }) : icon ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
    className: `rbi ${icon}`
  }) : null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText.Content, {
    tagName: headingHTMLTag || 'h4',
    value: heading || '',
    className: `gb-heading${!tocAdded ? ' none-toc' : ''}`
  })), toggle && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "gb-heading note-toggle"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
    className: "rbi-icon rbi-angle-down"
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "note-content gb-content"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InnerBlocks.Content, null)));
}

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "./src/note/block.json":
/*!*****************************!*\
  !*** ./src/note/block.json ***!
  \*****************************/
/***/ ((module) => {

module.exports = JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"foxiz-elements/note","version":"0.1.0","title":"Note - Ruby","category":"widgets","icon":"superhero-alt","description":"Display note, notification with a collapsible button in post content.","supports":{"html":false},"keywords":["ruby","foxiz","notice","notification","note","info","warning","success"],"textdomain":"foxiz-core","editorScript":"file:./index.js","attributes":{"heading":{"type":"string","default":"Note"},"headingHTMLTag":{"type":"string","default":"h4"},"tocAdded":{"type":"boolean","default":false},"icon":{"type":"string","default":"rbi-idea"},"customSVG":{"type":"string","default":""},"customSVGAlt":{"type":"string","default":""},"desktopHeadingSize":{"type":"string","default":""},"tabletHeadingSize":{"type":"string","default":""},"mobileHeadingSize":{"type":"string","default":""},"toggle":{"type":"boolean","default":false},"widthStyle":{"type":"string","default":"fw"},"shadow":{"type":"boolean","default":true},"borderStyle":{"type":"string","default":""},"borderColor":{"type":"string","default":""},"darkBorderColor":{"type":"string","default":""},"borderWidth":{"type":"object","default":{"top":null,"right":null,"bottom":null,"left":null}},"borderRadius":{"type":"number"},"headingColor":{"type":"string","default":""},"headerBg":{"type":"string","default":""},"headingBorderColor":{"type":"string","default":"#88888822"},"darkHeadingColor":{"type":"string","default":""},"darkHeaderBg":{"type":"string","default":""},"darkHeadingBorderColor":{"type":"string","default":""},"contentBg":{"type":"string","default":""},"darkContentBg":{"type":"string","default":""},"desktopHeaderPadding":{"type":"object","default":{"top":"15px","right":"30px","bottom":"15px","left":"30px"}},"tabletHeaderPadding":{"type":"object","default":{"top":"15px","right":"25px","bottom":"15px","left":"25px"}},"mobileHeaderPadding":{"type":"object","default":{"top":"15px","right":"20px","bottom":"15px","left":"20px"}},"desktopPadding":{"type":"object","default":{"top":"15px","right":"30px","bottom":"30px","left":"30px"}},"tabletPadding":{"type":"object","default":{"top":"15px","right":"25px","bottom":"25px","left":"25px"}},"mobilePadding":{"type":"object","default":{"top":"15px","right":"20px","bottom":"20px","left":"20px"}}}}');

/***/ })

/******/ 	});
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!***************************!*\
  !*** ./src/note/index.js ***!
  \***************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./block.json */ "./src/note/block.json");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/note/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ "./src/note/save.js");
/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */


/**
 * Internal dependencies
 */



(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_1__.name, {
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_3__["default"]
});
})();

/******/ })()
;
//# sourceMappingURL=index.js.map