/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/affiliate-list/edit.js":
/*!************************************!*\
  !*** ./src/affiliate-list/edit.js ***!
  \************************************/
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
    desktopHeadingSize,
    tabletHeadingSize,
    mobileHeadingSize,
    desktopSubHeadingSize,
    tabletSubHeadingSize,
    mobileSubHeadingSize,
    headingColor,
    darkHeadingColor,
    description,
    descriptionColor,
    darkDescriptionColor,
    desktopDescriptionSize,
    tabletDescriptionSize,
    mobileDescriptionSize,
    bestPrice,
    bestPriceLabel,
    bestPriceLink,
    bestPriceColor,
    darkBestPriceColor,
    desktopBestPriceSize,
    tabletBestPriceSize,
    mobileBestPriceSize,
    logoSize,
    desktopPriceSize,
    tabletPriceSize,
    mobilePriceSize,
    priceColor,
    darkPriceColor,
    isButtonBorder,
    desktopButtonSize,
    tabletButtonSize,
    mobileButtonSize,
    buttonColor,
    buttonBg,
    buttonHoverColor,
    buttonHoverBg,
    darkButtonColor,
    darkButtonBg,
    darkButtonHoverColor,
    darkButtonHoverBg,
    shadow,
    borderStyle,
    borderColor,
    darkBorderColor,
    borderWidth,
    borderRadius,
    buttonBorderRadius,
    background,
    darkBackground,
    desktopPadding,
    tabletPadding,
    mobilePadding
  } = attributes;
  const setAttribute = (name, value) => {
    setAttributes({
      [name]: value
    });
  };
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
  let wrapperClassName = `gb-wrap af-list`;
  if (isButtonBorder) {
    wrapperClassName += ` is-button-border`;
  }
  if (shadow) {
    wrapperClassName += ` yes-shadow`;
  }
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
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.useBlockProps)({
    className: wrapperClassName,
    style: {
      ...(headingColor && {
        '--heading-color': headingColor
      }),
      ...(darkHeadingColor && {
        '--dark-heading-color': darkHeadingColor
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
      ...(desktopSubHeadingSize && {
        '--desktop-sub-heading-size': `${desktopSubHeadingSize}px`
      }),
      ...(tabletSubHeadingSize && {
        '--tablet-sub-heading-size': `${tabletSubHeadingSize}px`
      }),
      ...(mobileSubHeadingSize && {
        '--mobile-sub-heading-size': `${mobileSubHeadingSize}px`
      }),
      ...(descriptionColor && {
        '--description-color': descriptionColor
      }),
      ...(darkDescriptionColor && {
        '--dark-description-color': darkDescriptionColor
      }),
      ...(desktopDescriptionSize && {
        '--desktop-description-size': `${desktopDescriptionSize}px`
      }),
      ...(tabletDescriptionSize && {
        '--tablet-description-size': `${tabletDescriptionSize}px`
      }),
      ...(mobileDescriptionSize && {
        '--mobile-description-size': `${mobileDescriptionSize}px`
      }),
      ...(logoSize && {
        '--logo-size': `${logoSize}px`
      }),
      ...(priceColor && {
        '--price-color': priceColor
      }),
      ...(darkPriceColor && {
        '--dark-price-color': darkPriceColor
      }),
      ...(desktopPriceSize && {
        '--desktop-price-size': `${desktopPriceSize}px`
      }),
      ...(tabletPriceSize && {
        '--tablet-price-size': `${tabletPriceSize}px`
      }),
      ...(mobilePriceSize && {
        '--mobile-price-size': `${mobilePriceSize}px`
      }),
      ...(buttonColor && {
        '--button-color': buttonColor
      }),
      ...(buttonBg && {
        '--button-bg': buttonBg
      }),
      ...(darkButtonColor && {
        '--dark-button-color': darkButtonColor
      }),
      ...(darkButtonBg && {
        '--dark-button-bg': darkButtonBg
      }),
      ...(buttonHoverColor && {
        '--button-hover-color': buttonHoverColor
      }),
      ...(buttonHoverBg && {
        '--button-hover-bg': buttonHoverBg
      }),
      ...(darkButtonHoverColor && {
        '--dark-button-hover-color': darkButtonHoverColor
      }),
      ...(darkButtonHoverBg && {
        '--dark-button-hover-bg': darkButtonHoverBg
      }),
      ...(desktopButtonSize && {
        '--desktop-button-size': `${desktopButtonSize}px`
      }),
      ...(tabletButtonSize && {
        '--tablet-button-size': `${tabletButtonSize}px`
      }),
      ...(mobileButtonSize && {
        '--mobile-button-size': `${mobileButtonSize}px`
      }),
      ...(bestPriceColor && {
        '--best-price-color': bestPriceColor
      }),
      ...(darkBestPriceColor && {
        '--dark-best-price-color': darkBestPriceColor
      }),
      ...(desktopBestPriceSize && {
        '--desktop-best-price-size': `${desktopBestPriceSize}px`
      }),
      ...(tabletBestPriceSize && {
        '--tablet-best-price-size': `${tabletBestPriceSize}px`
      }),
      ...(mobileBestPriceSize && {
        '--mobile-best-price-size': `${mobileBestPriceSize}px`
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
      ...(buttonBorderRadius && {
        '--button-border-radius': `${buttonBorderRadius}px`
      }),
      ...(background && {
        '--bg': background
      }),
      ...(darkBackground && {
        '--dark-bg': darkBackground
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
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Details'),
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
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Best Price Link'),
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('https://...'),
    value: bestPriceLink,
    onChange: value => setAttribute('bestPriceLink', value),
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Input the full link, including the HTTPS protocol')
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Best Price Label'),
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Best Price'),
    value: bestPriceLabel,
    onChange: value => setAttribute('bestPriceLabel', value)
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Best Price'),
    placeholder: "$99",
    value: bestPrice,
    onChange: value => setAttribute('bestPrice', value)
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('for Affiliate Item'),
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    type: "number",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Logo Width'),
    value: logoSize,
    onChange: value => setAttribute('logoSize', value),
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Enter the width for the logo in pixels for the affiliate list item child block')
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    className: "rb-control-label"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Item Heading')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "responsive-settings"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Dashicon, {
    icon: "desktop"
  }), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Desktop')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    type: "number",
    value: desktopSubHeadingSize,
    onChange: value => setAttribute('desktopSubHeadingSize', value)
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Dashicon, {
    icon: "tablet"
  }), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Tablet')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    type: "number",
    value: tabletSubHeadingSize,
    onChange: value => setAttribute('tabletSubHeadingSize', value)
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Dashicon, {
    icon: "smartphone"
  }), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Mobile')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    type: "number",
    value: mobileSubHeadingSize,
    onChange: value => setAttribute('mobileSubHeadingSize', value)
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    className: "rb-control-label"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Price Size')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "responsive-settings"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Dashicon, {
    icon: "desktop"
  }), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Desktop')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    type: "number",
    value: desktopPriceSize,
    onChange: value => setAttribute('desktopPriceSize', value)
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Dashicon, {
    icon: "tablet"
  }), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Tablet')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    type: "number",
    value: tabletPriceSize,
    onChange: value => setAttribute('tabletPriceSize', value)
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Dashicon, {
    icon: "smartphone"
  }), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Mobile')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    type: "number",
    value: mobilePriceSize,
    onChange: value => setAttribute('mobilePriceSize', value)
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.PanelColorSettings, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Price Color'),
    colorSettings: [{
      value: priceColor,
      onChange: value => setAttribute('priceColor', value),
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Color')
    }, {
      value: darkPriceColor,
      onChange: value => setAttribute('darkPriceColor', value),
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Dark Mode - Color')
    }]
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    className: "rb-control-label"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Button Size')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "responsive-settings"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Dashicon, {
    icon: "desktop"
  }), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Desktop')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    type: "number",
    value: desktopButtonSize,
    onChange: value => setAttribute('desktopButtonSize', value)
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Dashicon, {
    icon: "tablet"
  }), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Tablet')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    type: "number",
    value: tabletButtonSize,
    onChange: value => setAttribute('tabletButtonSize', value)
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Dashicon, {
    icon: "smartphone"
  }), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Mobile')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    type: "number",
    value: mobileButtonSize,
    onChange: value => setAttribute('mobileButtonSize', value)
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('CTA Button Border Style'),
    checked: isButtonBorder,
    onChange: value => setAttribute('isButtonBorder', value),
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Select border style for call-to-action buttons. Background color settings will be considered as the border color.')
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Border Radius'),
    value: buttonBorderRadius,
    onChange: value => setAttribute('buttonBorderRadius', value),
    step: 1,
    max: 100,
    min: 0
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.PanelColorSettings, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Button Color'),
    colorSettings: [{
      value: buttonColor,
      onChange: value => setAttribute('buttonColor', value),
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Color')
    }, {
      value: buttonBg,
      onChange: value => setAttribute('buttonBg', value),
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Background')
    }, {
      value: buttonHoverColor,
      onChange: value => setAttribute('buttonHoverColor', value),
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Hover - Color')
    }, {
      value: buttonHoverBg,
      onChange: value => setAttribute('buttonHoverBg', value),
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Hover - Background')
    }]
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.PanelColorSettings, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Dark Mode - Button Color'),
    colorSettings: [{
      value: darkButtonColor,
      onChange: value => setAttribute('darkButtonColor', value),
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Color')
    }, {
      value: darkButtonBg,
      onChange: value => setAttribute('darkButtonBg', value),
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Background')
    }, {
      value: darkButtonHoverColor,
      onChange: value => setAttribute('darkButtonHoverColor', value),
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Hover - Color')
    }, {
      value: darkButtonHoverBg,
      onChange: value => setAttribute('darkButtonHoverBg', value),
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Hover - Background')
    }]
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls, {
    group: "styles"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Heading'),
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
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Color')
    }, {
      value: darkHeadingColor,
      onChange: value => setAttribute('darkHeadingColor', value),
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Dark Mode - Color')
    }]
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Description'),
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    className: "rb-control-label"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Font Size')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "responsive-settings"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Dashicon, {
    icon: "desktop"
  }), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Desktop')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    type: "number",
    value: desktopDescriptionSize,
    onChange: value => setAttribute('desktopDescriptionSize', value)
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Dashicon, {
    icon: "tablet"
  }), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Tablet')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    type: "number",
    value: tabletDescriptionSize,
    onChange: value => setAttribute('tabletDescriptionSize', value)
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Dashicon, {
    icon: "smartphone"
  }), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Mobile')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    type: "number",
    value: mobileDescriptionSize,
    onChange: value => setAttribute('mobileDescriptionSize', value)
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.PanelColorSettings, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Color'),
    colorSettings: [{
      value: descriptionColor,
      onChange: value => setAttribute('descriptionColor', value),
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Color')
    }, {
      value: darkDescriptionColor,
      onChange: value => setAttribute('darkDescriptionColor', value),
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Dark Mode - Color')
    }]
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Best Price'),
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    className: "rb-control-label"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Font Size')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "responsive-settings"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Dashicon, {
    icon: "desktop"
  }), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Desktop')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    type: "number",
    value: desktopBestPriceSize,
    onChange: value => setAttribute('desktopBestPriceSize', value)
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Dashicon, {
    icon: "tablet"
  }), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Tablet')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    type: "number",
    value: tabletBestPriceSize,
    onChange: value => setAttribute('tabletBestPriceSize', value)
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Dashicon, {
    icon: "smartphone"
  }), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Mobile')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    type: "number",
    value: mobileBestPriceSize,
    onChange: value => setAttribute('mobileBestPriceSize', value)
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.PanelColorSettings, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Color'),
    colorSettings: [{
      value: bestPriceColor,
      onChange: value => setAttribute('bestPriceColor', value),
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Color')
    }, {
      value: darkBestPriceColor,
      onChange: value => setAttribute('darkBestPriceColor', value),
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Dark Mode - Color')
    }]
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
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
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.PanelColorSettings, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Background'),
    colorSettings: [{
      value: background,
      onChange: value => setAttribute('background', value),
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Background')
    }, {
      value: darkBackground,
      onChange: value => setAttribute('darkBackground', value),
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Dark Mode - Background')
    }]
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Inner Padding'),
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.BaseControl, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Tip, null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('These settings will apply to block wrapper. Click outside to see the update!'))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "res-padding-control"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalBoxControl, {
    resetValues: {
      top: '30px',
      right: '30px',
      bottom: '30px',
      left: '30px'
    },
    label: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Dashicon, {
      icon: "desktop"
    }), " ", (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Desktop')),
    values: desktopPadding,
    onChange: value => setAttribute('desktopPadding', value)
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalBoxControl, {
    resetValues: {
      top: '25px',
      right: '25px',
      bottom: '25px',
      left: '25px'
    },
    label: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Dashicon, {
      icon: "tablet"
    }), " ", (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Tablet')),
    values: tabletPadding,
    onChange: value => setAttribute('tabletPadding', value)
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalBoxControl, {
    resetValues: {
      top: '20px',
      right: '20px',
      bottom: '20px',
      left: '20px'
    },
    label: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Dashicon, {
      icon: "smartphone"
    }), " ", (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Mobile')),
    values: mobilePadding,
    onChange: value => setAttribute('mobilePadding', value)
  })))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "af-list-inner"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "af-list-header"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.RichText, {
    tagName: headingHTMLTag || 'h3',
    value: heading,
    onChange: value => setAttribute('heading', value),
    className: "af-heading none-toc gb-heading",
    placeholder: "Enter heading text..."
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.RichText, {
    tagName: "p",
    value: description,
    onChange: value => setAttribute('description', value),
    className: "gb-description",
    placeholder: "Enter description text..."
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "af-list-best-price"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.RichText, {
    tagName: "span",
    value: bestPriceLabel,
    onChange: value => setAttribute('bestPriceLabel', value),
    className: "h6",
    placeholder: "Best Price"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.RichText, {
    tagName: "span",
    value: bestPrice,
    onChange: value => setAttribute('bestPrice', value),
    className: "af-best-price h1",
    placeholder: "$99"
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InnerBlocks, {
    allowedBlocks: ['foxiz-elements/affiliate-list-item'],
    templateLock: false,
    template: [['foxiz-elements/affiliate-list-item', {}]],
    renderAppender: _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InnerBlocks.ButtonBlockAppender,
    templateInsertUpdatesSelection: true,
    __experimentalConvertToMappable: true
  }));
}

/***/ }),

/***/ "./src/affiliate-list/save.js":
/*!************************************!*\
  !*** ./src/affiliate-list/save.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ save)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);


function save(props) {
  const {
    attributes
  } = props;
  const {
    heading,
    headingHTMLTag,
    tocAdded,
    desktopHeadingSize,
    tabletHeadingSize,
    mobileHeadingSize,
    desktopSubHeadingSize,
    tabletSubHeadingSize,
    mobileSubHeadingSize,
    headingColor,
    darkHeadingColor,
    description,
    descriptionColor,
    darkDescriptionColor,
    desktopDescriptionSize,
    tabletDescriptionSize,
    mobileDescriptionSize,
    bestPrice,
    bestPriceLabel,
    bestPriceLink,
    bestPriceColor,
    darkBestPriceColor,
    desktopBestPriceSize,
    tabletBestPriceSize,
    mobileBestPriceSize,
    logoSize,
    desktopPriceSize,
    tabletPriceSize,
    mobilePriceSize,
    priceColor,
    darkPriceColor,
    isButtonBorder,
    desktopButtonSize,
    tabletButtonSize,
    mobileButtonSize,
    buttonColor,
    buttonBg,
    buttonHoverColor,
    buttonHoverBg,
    darkButtonColor,
    darkButtonBg,
    darkButtonHoverColor,
    darkButtonHoverBg,
    shadow,
    borderStyle,
    borderColor,
    darkBorderColor,
    borderWidth,
    borderRadius,
    buttonBorderRadius,
    background,
    darkBackground,
    desktopPadding,
    tabletPadding,
    mobilePadding
  } = attributes;
  let wrapperClassName = `gb-wrap af-list`;
  if (isButtonBorder) {
    wrapperClassName += ` is-button-border`;
  }
  if (shadow) {
    wrapperClassName += ` yes-shadow`;
  }
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps.save({
    className: wrapperClassName,
    style: {
      ...(headingColor && {
        '--heading-color': headingColor
      }),
      ...(darkHeadingColor && {
        '--dark-heading-color': darkHeadingColor
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
      ...(desktopSubHeadingSize && {
        '--desktop-sub-heading-size': `${desktopSubHeadingSize}px`
      }),
      ...(tabletSubHeadingSize && {
        '--tablet-sub-heading-size': `${tabletSubHeadingSize}px`
      }),
      ...(mobileSubHeadingSize && {
        '--mobile-sub-heading-size': `${mobileSubHeadingSize}px`
      }),
      ...(descriptionColor && {
        '--description-color': descriptionColor
      }),
      ...(darkDescriptionColor && {
        '--dark-description-color': darkDescriptionColor
      }),
      ...(desktopDescriptionSize && {
        '--desktop-description-size': `${desktopDescriptionSize}px`
      }),
      ...(tabletDescriptionSize && {
        '--tablet-description-size': `${tabletDescriptionSize}px`
      }),
      ...(mobileDescriptionSize && {
        '--mobile-description-size': `${mobileDescriptionSize}px`
      }),
      ...(logoSize && {
        '--logo-size': `${logoSize}px`
      }),
      ...(priceColor && {
        '--price-color': priceColor
      }),
      ...(darkPriceColor && {
        '--dark-price-color': darkPriceColor
      }),
      ...(desktopPriceSize && {
        '--desktop-price-size': `${desktopPriceSize}px`
      }),
      ...(tabletPriceSize && {
        '--tablet-price-size': `${tabletPriceSize}px`
      }),
      ...(mobilePriceSize && {
        '--mobile-price-size': `${mobilePriceSize}px`
      }),
      ...(buttonColor && {
        '--button-color': buttonColor
      }),
      ...(buttonBg && {
        '--button-bg': buttonBg
      }),
      ...(darkButtonColor && {
        '--dark-button-color': darkButtonColor
      }),
      ...(darkButtonBg && {
        '--dark-button-bg': darkButtonBg
      }),
      ...(buttonHoverColor && {
        '--button-hover-color': buttonHoverColor
      }),
      ...(buttonHoverBg && {
        '--button-hover-bg': buttonHoverBg
      }),
      ...(darkButtonHoverColor && {
        '--dark-button-hover-color': darkButtonHoverColor
      }),
      ...(darkButtonHoverBg && {
        '--dark-button-hover-bg': darkButtonHoverBg
      }),
      ...(desktopButtonSize && {
        '--desktop-button-size': `${desktopButtonSize}px`
      }),
      ...(tabletButtonSize && {
        '--tablet-button-size': `${tabletButtonSize}px`
      }),
      ...(mobileButtonSize && {
        '--mobile-button-size': `${mobileButtonSize}px`
      }),
      ...(bestPriceColor && {
        '--best-price-color': bestPriceColor
      }),
      ...(darkBestPriceColor && {
        '--dark-best-price-color': darkBestPriceColor
      }),
      ...(desktopBestPriceSize && {
        '--desktop-best-price-size': `${desktopBestPriceSize}px`
      }),
      ...(tabletBestPriceSize && {
        '--tablet-best-price-size': `${tabletBestPriceSize}px`
      }),
      ...(mobileBestPriceSize && {
        '--mobile-best-price-size': `${mobileBestPriceSize}px`
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
      ...(buttonBorderRadius && {
        '--button-border-radius': `${buttonBorderRadius}px`
      }),
      ...(background && {
        '--bg': background
      }),
      ...(darkBackground && {
        '--dark-bg': darkBackground
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
    className: "af-list-inner"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "af-list-header"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
    tagName: headingHTMLTag || 'h3',
    value: heading,
    className: `af-heading gb-heading${!tocAdded ? ' none-toc' : ''}`
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
    tagName: "p",
    value: description,
    className: "af-description gb-description"
  })), bestPrice ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "af-list-best-price"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
    tagName: "span",
    value: bestPriceLabel,
    className: "h6"
  }), bestPriceLink ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    className: "af-best-price h1 no-link",
    href: bestPriceLink,
    target: "_blank",
    rel: "noopener noreferrer nofollow"
  }, bestPrice) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
    tagName: "span",
    value: bestPrice,
    className: "af-best-price h1"
  })) : null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "af-list-items"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InnerBlocks.Content, null)));
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

/***/ "./src/affiliate-list/block.json":
/*!***************************************!*\
  !*** ./src/affiliate-list/block.json ***!
  \***************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"foxiz-elements/affiliate-list","version":"0.1.0","title":"Affiliate List - Ruby","category":"widgets","icon":"superhero-alt","description":"Display an affiliate product in multiple marketplaces in a list.","supports":{"html":false},"textdomain":"foxiz-core","editorScript":"file:./index.js","keywords":["ruby","foxiz","affiliate","amazon","ebay","product","item","list"],"attributes":{"heading":{"type":"string","default":""},"headingHTMLTag":{"type":"string","default":"h3"},"tocAdded":{"type":"boolean","default":false},"desktopHeadingSize":{"type":"string","default":""},"tabletHeadingSize":{"type":"string","default":""},"mobileHeadingSize":{"type":"string","default":""},"desktopSubHeadingSize":{"type":"string","default":""},"tabletSubHeadingSize":{"type":"string","default":""},"mobileSubHeadingSize":{"type":"string","default":""},"headingColor":{"type":"string","default":""},"darkHeadingColor":{"type":"string","default":""},"description":{"type":"string","default":""},"descriptionColor":{"type":"string","default":""},"darkDescriptionColor":{"type":"string","default":""},"desktopDescriptionSize":{"type":"string","default":""},"tabletDescriptionSize":{"type":"string","default":""},"mobileDescriptionSize":{"type":"string","default":""},"bestPrice":{"type":"string","default":""},"bestPriceLabel":{"type":"string","default":""},"bestPriceLink":{"type":"string","default":""},"bestPriceColor":{"type":"string","default":""},"darkBestPriceColor":{"type":"string","default":""},"desktopBestPriceSize":{"type":"string","default":""},"tabletBestPriceSize":{"type":"string","default":""},"mobileBestPriceSize":{"type":"string","default":""},"logoSize":{"type":"string","default":""},"desktopPriceSize":{"type":"string","default":""},"tabletPriceSize":{"type":"string","default":""},"mobilePriceSize":{"type":"string","default":""},"priceColor":{"type":"string","default":""},"darkPriceColor":{"type":"string","default":""},"isButtonBorder":{"type":"boolean","default":false},"desktopButtonSize":{"type":"string","default":"12"},"tabletButtonSize":{"type":"string","default":"12"},"mobileButtonSize":{"type":"string","default":"12"},"buttonColor":{"type":"string","default":""},"buttonBg":{"type":"string","default":""},"buttonHoverColor":{"type":"string","default":""},"buttonHoverBg":{"type":"string","default":""},"darkButtonColor":{"type":"string","default":""},"darkButtonBg":{"type":"string","default":""},"darkButtonHoverColor":{"type":"string","default":""},"darkButtonHoverBg":{"type":"string","default":""},"shadow":{"type":"boolean","default":true},"borderStyle":{"type":"string","default":""},"borderColor":{"type":"string","default":""},"darkBorderColor":{"type":"string","default":""},"borderWidth":{"type":"object","default":{"top":null,"right":null,"bottom":null,"left":null}},"borderRadius":{"type":"number"},"buttonBorderRadius":{"type":"number"},"background":{"type":"string","default":""},"darkBackground":{"type":"string","default":""},"desktopPadding":{"type":"object","default":{"top":"30px","right":"30px","bottom":"30px","left":"30px"}},"tabletPadding":{"type":"object","default":{"top":"25px","right":"25px","bottom":"25px","left":"25px"}},"mobilePadding":{"type":"object","default":{"top":"20px","right":"20px","bottom":"20px","left":"20px"}}}}');

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
/*!*************************************!*\
  !*** ./src/affiliate-list/index.js ***!
  \*************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./block.json */ "./src/affiliate-list/block.json");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/affiliate-list/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ "./src/affiliate-list/save.js");
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