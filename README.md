# \<material-paper-color-picker\>

Paper color picker including fonts

## Usage

### \<Material paper color picker\>

The `<material-paper-color-picker>` will load all [Google Material Palette colors](https://material.io/color) by default.

To use it, simply add the `<material-paper-color-picker></material-paper-color-picker>` element to your page after importing it.

<!---
```
<custom-element-demo>
  <template>
    <script src="../webcomponentsjs/webcomponents-loader.js"></script>
    <link rel="import" href="material-paper-color-picker.html">
    <style>material-paper-color-picker { margin: 0 200px 340px 200px; }</style>
    <next-code-block></next-code-block>
  </template>
</custom-element-demo>
```
-->
```html
<material-paper-color-picker></material-paper-color-picker>
```

#### \<material-paper-color-picker\> Removing default colors

The color picker without primary colors:

<!---
```
<custom-element-demo>
  <template>
    <script src="../webcomponentsjs/webcomponents-loader.js"></script>
    <link rel="import" href="material-paper-color-picker.html">
    <style>material-paper-color-picker { margin: 0 200px 340px 200px; }</style>
    <next-code-block></next-code-block>
  </template>
</custom-element-demo>
```
-->
```html
<material-paper-color-picker hide-primary="true"></material-paper-color-picker>
```

The color picker without secondary colors:

<!---
```
<custom-element-demo>
  <template>
    <script src="../webcomponentsjs/webcomponents-loader.js"></script>
    <link rel="import" href="material-paper-color-picker.html">
    <style>material-paper-color-picker { margin: 0 200px 340px 200px; }</style>
    <next-code-block></next-code-block>
  </template>
</custom-element-demo>
```
-->
```html
<material-paper-color-picker hide-secondary="true"></material-paper-color-picker>
```

If you want to add your own \<color-selector\> elements, don't hide the color containers. Instead, you can empty them:

```html
<material-paper-color-picker empty-primary="true" empty-secondary="true"></material-paper-color-picker>
```

### \<color-selector\>

You can add `<color-selector>` elements to the `<material-paper-color-picker>` element to add extra colors.

If you don't want a container, or want to build your own, you can also choose to simply add the `<color-selector>` element to your
page. This way there is no button or popup container, but the functionality of changing the CSS variables remains. The default size
of the `<color-selector>` is `50px`.

You will need to specify every color you want seperately. An example of a full-fledged selector:

<!---
```
<custom-element-demo>
  <template>
    <script src="../webcomponentsjs/webcomponents-loader.js"></script>
    <link rel="import" href="color-selector.html">
    <next-code-block></next-code-block>
  </template>
</custom-element-demo>
```
-->
```html
<color-selector 
    name="Custom color" 
    target="primary" 
    normal-color="red" 
    normal-font-color="white" 
    normal-head-font-color="white"
    light-color="lightred" 
    light-font-color="black" 
    light-head-font-color="black" 
    dark-color="darkred" 
    dark-font-color="white"
    dark-head-font-color="lightgrey">
</color-selector>
```

* name => the title of the color (this becomes the tooltip)
* target => the target color to change (primary or secondary, or choose your own)
* normal-color => the default color for your elements (for example featured content)
* light-color => the light color for your elements (for example a footer)
* dark-color => the dark color for your elements (for example a header)
* font-color => the font-color for regular fonts
* head-font-color => if you want headings to have a different color then the regular text

You can also add text to the `<color-selector>` element to display normal font color:

```html
<color-selector>
    Abc.
</color-selector>
```

#### \<material-paper-color-picker\> Adding custom colors

If you want to add custom colors, you can add `<color-selector>` elements. Those elements represent the colors a
user can choose from. If you don't remove the primary or secondary colors, there will be several `<color-selector>`
elements presented by default.

<!---
```
<custom-element-demo>
  <template>
    <script src="../webcomponentsjs/webcomponents-loader.js"></script>
    <link rel="import" href="material-paper-color-picker.html">
    <style>material-paper-color-picker { margin: 0 200px 340px 200px; }</style>
    <next-code-block></next-code-block>
  </template>
</custom-element-demo>
```
-->
```html
<material-paper-color-picker empty-primary="true" hide-secondary="true">
    <color-selector 
        name="Custom color"
        target="primary" 
        normal-color="red" 
        normal-font-color="white" 
        normal-head-font-color="white"
        light-color="lightred" 
        light-font-color="black" 
        light-head-font-color="black" 
        dark-color="darkred" 
        dark-font-color="white"
        dark-head-font-color="lightgrey"
        slot="primary">
    </color-selector>
</material-paper-color-picker>
```

#### \<material-paper-color-picker\> Popup alignment

You can pick several alignments for the popup if you use the popup container:

<!---
```
<custom-element-demo>
  <template>
    <script src="../webcomponentsjs/webcomponents-loader.js"></script>
    <link rel="import" href="material-paper-color-picker.html">
    <style>material-paper-color-picker { margin: 0 200px 340px 200px; }</style>
    <next-code-block></next-code-block>
  </template>
</custom-element-demo>
```
-->
```html
<material-paper-color-picker align="left"></material-paper-color-picker>
<material-paper-color-picker align="center"></material-paper-color-picker>
<material-paper-color-picker align="right"></material-paper-color-picker>
```

#### \<material-paper-color-picker\> Custom icon

The default icon is an opacity icon. You can choose any icon from the default `iron-icon` selection.

<!---
```
<custom-element-demo>
  <template>
    <script src="../webcomponentsjs/webcomponents-loader.js"></script>
    <link rel="import" href="material-paper-color-picker.html">
    <style>material-paper-color-picker { margin: 0 200px 340px 200px; }</style>
    <next-code-block></next-code-block>
  </template>
</custom-element-demo>
```
-->
```html
<material-paper-color-picker icon="settings"></material-paper-color-picker>
```

If you want to use other icons, for example Google Maps icons, you will have to import that library yourself.

<!---
```
<custom-element-demo>
  <template>
    <script src="../webcomponentsjs/webcomponents-loader.js"></script>
    <link rel="import" href="material-paper-color-picker.html">
    <style>material-paper-color-picker { margin: 0 200px 340px 200px; }</style>
    <next-code-block></next-code-block>
  </template>
</custom-element-demo>
```
-->
```html
<link rel="import" href="bower_components/iron-icons/maps-icons.html">
<material-paper-color-picker icon="maps:directions-bus"></material-paper-color-picker>
```

#### \<material-paper-color-picker\> Primary and secondary container titles

You can specify your own title for the primary and secondary container:

<!---
```
<custom-element-demo>
  <template>
    <script src="../webcomponentsjs/webcomponents-loader.js"></script>
    <link rel="import" href="material-paper-color-picker.html">
    <style>material-paper-color-picker { margin: 0 200px 340px 200px; }</style>
    <next-code-block></next-code-block>
  </template>
</custom-element-demo>
```
-->
```html
<material-paper-color-picker primary-title="Wedding colors"></material-paper-color-picker>
<material-paper-color-picker secondary-title="Fantasy colors"></material-paper-color-picker>
```

## Variables to use in your HTML documents

This color picker uses CSS variables to change the layout of a website.

The following variables are overridden:

```css
html {
    --primary-color-light
    --primary-color-normal
    --primary-color-dark

    --primary-text-light
    --primary-text-normal
    --primary-text-dark

    --primary-head-text-light
    --primary-head-text-normal
    --primary-head-text-dark

    --secondary-color-light
    --secondary-color-normal
    --secondary-color-dark

    --secondary-text-light
    --secondary-text-normal
    --secondary-text-dark

    --secondary-head-text-light
    --secondary-head-text-normal
    --secondary-head-text-dark
}
```

Ideally, you initially set these variables in your main stylesheet (`index.html`). You then
style all desired elements using these variables. If a user selects a new color from the
color picker, all those elements will dynamically change their colors.

If you create your stylesheet, use these variables to style your components. For example,
you can give different variables to your header, footer, sidebar and featured content:

```css
header {
    background-color: var(--primary-color-dark);
    color: var(--primary-text-dark);
}
header h1 {
    color: var(--primary-head-text-dark);
}

section {
    background-color: var(--primary-color-normal);
    color: var(--primary-text-normal);
}

aside header {
    background-color: var(--secondary-color-dark);
    color: var(--secondary-text-dark);
}
aside main {
    background-color: var(--secondary-color-normal);
    color: var(--secondary-text-normal);
}

footer {
    background-color: var(--primary-color-light);
    color: var(--primary-text-light);
}
```

#### <\color-selector\> Name

The name of the color is only used as references for the user => they appear in the
tooltip and have no technical value.

As for the default colors, the name represents the value as described in the 
[Google Material Palette](https://material.io/color). The default primaryColor array contains a complete 
selection of colors in the 500 intensity range. The default secondaryColor array contains a complete
selection of the colors in the a400 range (accent colors).

#### \<color-selector\> Target

The target determines the CSS variable that is being changed. If you use the default color-picker, the
targets are `primary` and `secondary`. These are also seperated in the view. You can mix the colors up if
you want, by adding a `<color-selector>` element with `target="primary"` and `slot="secondary"` or vice versa.

#### \<color-selector\> Slot

The slot determines the container the element is shown in. If you use `slot="primary"`, the element is shown in the
primary container. If you use `slot="secondary"`, the element is shown in the secondary container.

If you don't want default paper-colors, but you do want colors in those containers, you have to specify wether the
container must be visible.

#### Font colors

The default colors come with font color suggestions that correspond to the suggested font colors in the
[Google Material Palette](https://material.io/color). You are free to choose any font color if you add extra
colors to choose from. Please use the Google Material Palette if you are unsure about the accessibility of
your chosen colors. Have a look at [Google Material Guidelines](https://material.io/guidelines/) for extended
reading material on colors and material design.

### \<material-paper-color-picker\> Styling

The following custom properties and mixins are available for styling:

Custom property | Description | Default
----------------|-------------|----------
`--icon-color` | The color of the icon | `black`
`--icon-background-color` | The background color of the icon | `rgba(0,0,0,0.1)`
`--icon-border-radius` | The border radius | `50%`
`--popup-background-color` | The background color of the popup window | `white`
`--popup-text-color` | The text color of the popup window | `black`
