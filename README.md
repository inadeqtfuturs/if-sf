# sf (speculative fabulation)

generate themes, theme objects, and theme tokens

- merge/extend by default. explicit overrides
- opt-in/opt-out of tokens and components
- roll out your own tokens and components

---

- [quick start](#quick-start)
- [motivations](#motivations)
- [patterns](#patterns)
- [current tokens](#current-tokens)

---

## quick start

```bash
yarn add if-sf
```

Wherever you're defining your theme:

```js
import { ThemeProvider } from 'theme-ui';
import { genTheme } from 'if-sf';

const theme = genTheme();

function MyApp() {
  return (
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  )
}
```

If you need access to more granular primitives, you can import individual generators and components:

```js
import { Button } from 'if-sf/components';
import { defaultButtonStyles, genButton } from 'if-sf/tokens';
```

## motivations

`sf` is built on top of [emotion](https://emotion.sh/docs/introduction) and [styled-system's variants](https://styled-system.com/variants/). In the past, I've enjoyed working with both, utilizing variants in my emotion or styled-components mark up. However, I found it difficult to think about how component variants should live on the theme object. Additionally, it became difficult to think about how to extend components that had variations -- what if I needed an additional variant typing? What if I wanted to wholesale override the variants? I had similar difficulties on a smaller scale with theme tokens -- what's the best way to override breakpoints? What if I want to extend certain color properties, while overriding others?

`sf` answers these questions by thinking in terms of merging, extending, and overriding. Using generator functions that receive and return objects, `sf` generates theme objects to pass into emotion's theme provider while also allowing granular control over how that theme is generated. Here's an example of generating color tokens:

```js
import { genColors } from '@theme/tokens';

const colors = genColors();
/**
 * returns generic color object
 * 
 * colors = { 
 *  text: '#111827',
 *  background: '#F9FAFB',
 *  primary: '#2563EB',
 *  secondary: '#de7283',
 *  accent: '#7C3AED',
 *  muted: '#88d1ff'
 * }
 * 
 */
const mergeColors = genColors({ primary: 'red' }); // replaces 'primary' key in colors object
const extendColors = genColors({ red: 'red' }); // adds 'red' key to colors object
const overrideColors = genColors({ override: { red: 'red' }}); // replaces color object with override object
```

We can do similar things with more complicated tokens. Checkout the tests for the [button component](src/theme/components/button/button.test.js) and [breakpoints](src/theme/tokens/breakpoints/breakpoints.test.js) to see how `sf` handles overrides and merges.

### tl;dr

- Put object in, get object out
- Merge your object or
- Override tokens wholesale

## patterns

### merge styles // map variants

```js
const componentStyle = {
  ...objectStyles,
  variants: [
    {
      key: props => variant({})
    }
  ]
}

const stylesForEmotion = mergeStyles(defaultStyles, props); // returns objectStyles
```

Using this shape, we can merge the object styles and reduce the variants into something emotion can consume. Additionally, this allows us to use the props available at the component level to generate particular variants.

```js
const Button = styled.button`
  ${props => mergeStyles(defaultStyles, props)}
`;
```

Because `mergeStyles()` just returns a styles object, we can opt-in to variants at the component level. We can also add additional styles beyond what the variant provides.

## current tokens

- tokens
  - colors
  - borders
  - breakpoints
  - radii
  - space
  - typography
- markdown
  - text (p, li, ol, blockquote, small, link)
  - headings
- components
  - button
  - tag
  - text input
