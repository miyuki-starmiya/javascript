
# Sass(SyntacticallyAwesomeStyleSheets)

Sass is the most mature, stable, and powerful professional grade CSS extension and Alt CSS lang in the world.

Sass = CSS
  + variable
  + nest
  + module
  + partial
  + mixin
  + inheritance(extend)
  + operator


## install

```
npm install -g sass
```

### how to compile .scss to .css

```
sass "input.scss" "output.css"
```


## syntax

### variable

```scss
$variable: value;

selector {
  property: $variable;
}
```

### nest

```scss
parent-selector {
  child-selector {
    property: value;
  }

  brother-selector {
    property: value;
  }

  ... {
    property: value;
  }
}
```

### module

```scss
@use 'module'

selector {
  property: module.$variable;
}
```

### partial

a partial is s Sass file named with a prefix underscore.
named like _partial.scss

### mixin

like class. it will be imported by using @include

```scss
@mixin class($variable: value) {
  property: value;
}

selector {
  @include class;
}

/** alter value **/
selector {
  @include class($variable: newValue);
}
```

### inheritance(extend)

alter property on exist mixin

```scss
.box {
  width: 100px;
  height: 100px;
}

.large-box {
  @extend .box;
  transform: scale(2, 2);
}
```

### operator

- +
- -
- *
- math.div(a, b) = a/b


## @rule

- @use: import external modules
- @mixin: declare mixin(class)
- @include: include mixins
- @extend: extend mixins

