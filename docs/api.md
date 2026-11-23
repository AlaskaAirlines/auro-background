# auro-background

Adds a background image, color, or gradient behind the content you place inside it.

Key capabilities:
- **Responsive backgrounds**: Set `bgSm`, `bgMd`, or `bgLg` to change the background at larger screen sizes.
- **Custom size**: Set `height` and `width` to a fixed size. Otherwise the element fits its content's height and fills its container's width.
- **Inner spacing**: Set `inset` to add padding inside the container.

### Properties and attributes

| Properties | Attributes | Modifiers | Type                                                                                                  | Default       | Description                                                                                                                                                       |
| ---------- | ---------- | --------- | ----------------------------------------------------------------------------------------------------- | ------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| bg         | bg         |           | string                                                                                                | `transparent` | Sets the background at all breakpoints. Accepts any CSS `background` value, such as a color, a gradient, or an image like `url(hero.jpg) center/cover no-repeat`. |
| bgLg       | bglg       |           | string                                                                                                |               | Sets the background at `ds-grid-breakpoint-lg` (1024px) and above. Uses the `bgMd` value when not set.                                                            |
| bgMd       | bgmd       |           | string                                                                                                |               | Sets the background at `ds-grid-breakpoint-md` (768px) and above. Uses the `bgSm` value when not set.                                                             |
| bgSm       | bgsm       |           | string                                                                                                |               | Sets the background at `ds-grid-breakpoint-sm` (576px) and above. Uses the `bg` value when not set.                                                               |
| height     | height     |           | string                                                                                                | `auto`        | Sets the height of the element at all breakpoints. Accepts any CSS height value, such as `400px` or `50vh`.                                                       |
| heightLg   | heightlg   |           | string                                                                                                |               | Sets the height at `ds-grid-breakpoint-lg` (1024px) and above. Uses the `heightMd` value when not set.                                                            |
| heightMd   | heightmd   |           | string                                                                                                |               | Sets the height at `ds-grid-breakpoint-md` (768px) and above. Uses the `heightSm` value when not set.                                                             |
| heightSm   | heightsm   |           | string                                                                                                |               | Sets the height at `ds-grid-breakpoint-sm` (576px) and above. Uses the `height` value when not set.                                                               |
| inset      | inset      |           | `none` \| `xxxs` \| `xxs` \| `xs` \| `sm` \| `md` \| `lg` \| `xl` \| `xxl` \| `xxxl` \| (string & {}) | `0`           | Sets the padding inside the element at all breakpoints. Use a size from `none` (no padding) to `xxxl` (4rem), or any CSS `padding` value, such as `1rem`.         |
| insetLg    | insetlg    |           | `none` \| `xxxs` \| `xxs` \| `xs` \| `sm` \| `md` \| `lg` \| `xl` \| `xxl` \| `xxxl` \| (string & {}) |               | Sets the padding inside the element at `ds-grid-breakpoint-lg` (1024px) and above. Does not currently take effect: the large breakpoint uses the `insetMd` value. |
| insetMd    | insetmd    |           | `none` \| `xxxs` \| `xxs` \| `xs` \| `sm` \| `md` \| `lg` \| `xl` \| `xxl` \| `xxxl` \| (string & {}) |               | Sets the padding inside the element at `ds-grid-breakpoint-md` (768px) and above. Accepts the same values as `inset`. Uses the `insetSm` value when not set.      |
| insetSm    | insetsm    |           | `none` \| `xxxs` \| `xxs` \| `xs` \| `sm` \| `md` \| `lg` \| `xl` \| `xxl` \| `xxxl` \| (string & {}) |               | Sets the padding inside the element at `ds-grid-breakpoint-sm` (576px) and above. Accepts the same values as `inset`. Uses the `inset` value when not set.        |
| width      | width      |           | string                                                                                                | `auto`        | Sets the width of the element at all breakpoints. Accepts any CSS width value, such as `600px` or `50%`.                                                          |
| widthLg    | widthlg    |           | string                                                                                                |               | Sets the width at `ds-grid-breakpoint-lg` (1024px) and above. Uses the `widthMd` value when not set.                                                              |
| widthMd    | widthmd    |           | string                                                                                                |               | Sets the width at `ds-grid-breakpoint-md` (768px) and above. Uses the `widthSm` value when not set.                                                               |
| widthSm    | widthsm    |           | string                                                                                                |               | Sets the width at `ds-grid-breakpoint-sm` (576px) and above. Uses the `width` value when not set.                                                                 |

### Methods

| Name     | Parameters                                                    | Return | Description                                              |
| -------- | ------------------------------------------------------------- | ------ | -------------------------------------------------------- |
| register | `name` (string) - The tag name to register the element under. |        | Registers the element with the browser under a tag name. |

### Slots

| Name      | Description                               |
| --------- | ----------------------------------------- |
| (default) | Content to show on top of the background. |

### CSS custom properties

| Name                                 | Description                                 |
| ------------------------------------ | ------------------------------------------- |
| --ds-auro-background-container-color | Background color shown when `bg` isn't set. |