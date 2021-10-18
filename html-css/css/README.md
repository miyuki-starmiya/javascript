
# CSS3(CascadingStyleSheet)

CSS is stylesheet lang. CSS describes how elements should be rendered on browser

### how to import

```html: index.html
<link rel="stylesheet" href="css/index.css">
```


## syntax

@IDENTIFIER (RULE) {
  selector {
    property: value;
  }
}


## selectors

to specify elements

### type selector

tag {
  property: value;
}

### class selector

.class {
  property: value;
}

### ID selector

#ID {
  property: value;
}

### attribute selector

tag[attr="value"] {
  property: value;
}

- [attr^=value]: value is prefixed
- [attr$=value]: value is suffixed
- [attr*=value]: contains at least one value

### grouping selectors

- list selector(A, B): specify both A and B
- general combinator(A ~ B): specify all B when there is at least one of A
- child combinator(A > B): specify direct child element
- descendant combinator(A B): specify all descendant element

### media query



## pseud class(疑似クラス)

selector:pseudo-class {
  property: value;
}

### location

- :link : have not yet been visited
- :visited : have been visited
- :any-link : :link + :visited
- :target : is the same page anchor to be targeted

### user action

- :hover : mouse over
- :active : click on
- :focus : mouse pointer on

### user input

- :enabled : input element in an enabled state
- :disabled : input element in a disabled state
- :read-only : input element in a read-only state
- :blank : which is empty
- :valid : with valid contents
- :invalid : with invalid contents
- :checked : checked status
- :required : required status

### DOM

- :first-child : first child element
- :last-child : last child element
- :nth-child(n): specify n-th child element

## index

### box model

https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model

- padding: space inside box
- border(style, width, color): space on border
- margin: space outside box
- width: box width(px, %)
- height: box height(px, %)

### styling text

https://developer.mozilla.org/en-US/docs/Learn/CSS/Styling_text/Fundamentals

- color: text color
- font-family: specify font type
  - font type: {
    serif: dot font,
    sans-serif: isn't dot font,
    monospace: every character has same width
    cursive: to emulate handwriting,
    fantasy: to decorate,
  }
  - web safe font: {
    Arial: sans-serif,
    Courier New: monospace,
    Georgia: serif,
    Times New Roman: serif,
    Trebuchet MS: sans-serif,
    Verdana: sans-serif,
  }
- font-size(px, em, rem)
- font-style: [normal, italic, oblique]
- font-weight: [normal, bold]
- text-transform: [none, uppercase, lowercase, capitalize, full-width]
- text-decoration: [none, underline, overline, line-through]
- text-shadow(horizontal, vertical, radius, color)
- text-align: [left, right, center, justify]
- line-height: text starts from specified height. this property is around 1.5 - 2
- word-spacing


## layout

display: {
  block: default. break line both before and after,
  inline: don't break line both before and after,
  flex,
  grid,
  none,
  }

![direction](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flow_Layout/Block_and_Inline_Layout_in_Normal_Flow/mdn-horizontal.png)

### flexbox

display 

### grid layout

specify columns and rows

### float

### position


## function



