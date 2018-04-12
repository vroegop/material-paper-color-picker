/**
 * DO NOT EDIT
 *
 * This file was automatically generated by
 *   https://github.com/Polymer/gen-typescript-declarations
 *
 * To modify these typings, edit the source file(s):
 *   color-selector.html
 */

/// <reference path="../polymer/types/polymer-element.d.ts" />

/**
 * Color selector
 *
 * ### Usage
 *
 * The `<color-selector>` element enables you to change CSS variables by clicking on it.
 *
 * To use it, simply add the `<color-selector></color-selector>` element to your page after importing it.
 * You can set the properties by editing attributes on the object itself.
 *
 * ```html
 * <color-selector 
 *     name="Custom color" 
 *     target="primary" 
 *     normal-color="red" 
 *     normal-font-color="white" 
 *     normal-head-font-color="white"
 *     light-color="lightred" 
 *     light-font-color="black" 
 *     light-head-font-color="black" 
 *     dark-color="darkred" 
 *     dark-font-color="white"
 *     dark-head-font-color="lightgrey">
 * </color-selector>
 * ```
 *
 * You can also add text to the `<color-selector>` element to preview `--{target}-font-normal`:
 *
 * ```html
 * <color-selector>
 *     Abc.
 * </color-selector>
 * ```
 *
 * Note that not all properties need to be set. You can also choose to change the header-style only.
 * If you are using the `material-paper-color-picker` element, all of the properties are set if you the use default colors.
 *
 * ### Properties
 *
 * Custom property | Description | Default
 * ----------------|-------------|----------
 * `name` | The title, this shows up in the tooltip | `Color`
 * `target` | The target CSS rule (`--{target}-color-normal`) | `primary`
 * `normal-color` | --{target}-color-normal | `undefined`
 * `normal-font` | --{target}-font-normal | `undefined`
 * `normal-head-font` | --{target}-head-font-normal | `undefined`
 * `light-color` | --{target}-color-light | `undefined`
 * `light-font` | --{target}-font-light | `undefined`
 * `light-head-font` | --{target}-head-font-light | `undefined`
 * `dark-color` | --{target}-color-dark | `undefined`
 * `dark-font` | --{target}-font-dark | `undefined`
 * `dark-head-font` | --{target}-head-font-dark | `undefined`
 * `slot` | the slot to put this element into | `undefined`
 *
 * `color-selector`
 * Paper color picker including fonts
 */
declare class ColorSelector extends Polymer.Element {
  name: object|null|undefined;
  normalColor: string|null|undefined;
  lightColor: string|null|undefined;
  darkColor: string|null|undefined;
  normalFontColor: string|null|undefined;
  darkFontColor: string|null|undefined;
  lightFontColor: string|null|undefined;
  normalHeadFontColor: string|null|undefined;
  darkHeadFontColor: string|null|undefined;
  lightHeadFontColor: string|null|undefined;
  target: string|null|undefined;
  changeColor(): any;
  _isPrimary(): any;
}

interface HTMLElementTagNameMap {
  "color-selector": ColorSelector;
}
