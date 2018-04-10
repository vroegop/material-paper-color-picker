# \<material-paper-color-picker\>

Paper color picker including fonts

## Usage

### \<Material paper color picker\>

The `<material-paper-color-picker>` will load all [Google Material Palette colors](https://material.io/color) by default.

To use it, simply add the `<material-paper-color-picker></material-paper-color-picker>` element to your page after importing it.

#### Removing default colors

The color picker without primary colors:

```html
<material-paper-color-picker primary-colors="[]"></material-paper-color-picker>
```

The color picker without secondary colors:

```html
<material-paper-color-picker secondary-colors="[]"></material-paper-color-picker>
```

If you don't want the default primary or secondary colors, that container is hidden. That means that if you don't want
secondary colors, there is one large container with primary colors to choose from.

If you don't want the default colors, but you do want the color container because you specify your
own colors, you have to tell the element that the container must be visible. You can do this by passing a `true` value
inside the array of that color. So if you don't want the default secondary colors because you specify your own, use the following
syntax to make sure the container is visible:

```html
<material-paper-color-picker secondary-colors="[true]"></material-paper-color-picker>
```

#### Adding custom colors

If you want to add custom colors, you can add `<color-selector>` elements. Those elements represent the colors a
user can choose from. If you don't remove the primary or secondary colors, there will be several `<color-selector>`
elements presented by default.

```html
<material-paper-color-picker>
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

### \<color-selector\>

You can add `<color-selector>` elements to the `<material-paper-color-picker>` element to add extra colors.

If you don't want a container, or want to build your own, you can also choose to simply add the `<color-selector>` element to your
page. This way there is no button or popup container, but the functionality of changing the CSS variables remains. The default size
of the `<color-selector>` is `50px`.

You will need to specify every color you want seperately. An example of a full-fledged selector:

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

#### \<material-paper-color-picker\> Popup alignment

You can pick several alignments for the popup if you use the popup container:

```html
<material-paper-color-picker align="left"></material-paper-color-picker>
<material-paper-color-picker align="center"></material-paper-color-picker>
<material-paper-color-picker align="right"></material-paper-color-picker>
```

#### \<material-paper-color-picker\> Primary and secondary container titles

You can specify your own title for the primary and secondary container:

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

#### Name

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

### Styling the color picker
Style the color picker icon and layout by overriding css variables:

```css
material-paper-color-picker {
    --icon-color
    --icon-background-color
    --icon-border-radius
    --popup-background-color
    --popup-text-color
}
```
