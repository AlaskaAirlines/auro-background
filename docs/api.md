# auro-background

The `auro-background` element provides users a way to add a background image or color block including a gradient.

### Properties & Attributes

| Properties | Attributes | Modifiers | Type                                                                                                  | Default | Description                                                    |
| ---------- | ---------- | --------- | ----------------------------------------------------------------------------------------------------- | ------- | -------------------------------------------------------------- |
| bg         | bg         |           | string                                                                                                |         | Sets the background image at all breakpoints                   |
| bgLg       | bglg       |           | string                                                                                                |         | Sets the background image at `ds-grid-breakpoint-lg` and above |
| bgMd       | bgmd       |           | string                                                                                                |         | Sets the background image at `ds-grid-breakpoint-md` and above |
| bgSm       | bgsm       |           | string                                                                                                |         | Sets the background image at `ds-grid-breakpoint-sm` and above |
| height     | height     |           | string                                                                                                |         | Applies custom height at all breakpoints                       |
| heightLg   | heightlg   |           | string                                                                                                |         | Applies custom height at `ds-grid-breakpoint-lg` and above     |
| heightMd   | heightmd   |           | string                                                                                                |         | Applies custom height at `ds-grid-breakpoint-md` and above     |
| heightSm   | heightsm   |           | string                                                                                                |         | Applies custom height at `ds-grid-breakpoint-sm` and above     |
| inset      | inset      |           | `none` \| `xxxs` \| `xxs` \| `xs` \| `sm` \| `md` \| `lg` \| `xl` \| `xxl` \| `xxxl` \| (string & {}) |         | Applies internal padding at all breakpoints                    |
| insetLg    | insetlg    |           | `none` \| `xxxs` \| `xxs` \| `xs` \| `sm` \| `md` \| `lg` \| `xl` \| `xxl` \| `xxxl` \| (string & {}) |         | Applies internal padding at `ds-grid-breakpoint-lg` and above  |
| insetMd    | insetmd    |           | `none` \| `xxxs` \| `xxs` \| `xs` \| `sm` \| `md` \| `lg` \| `xl` \| `xxl` \| `xxxl` \| (string & {}) |         | Applies internal padding at `ds-grid-breakpoint-md` and above  |
| insetSm    | insetsm    |           | `none` \| `xxxs` \| `xxs` \| `xs` \| `sm` \| `md` \| `lg` \| `xl` \| `xxl` \| `xxxl` \| (string & {}) |         | Applies internal padding at `ds-grid-breakpoint-sm` and above  |
| width      | width      |           | string                                                                                                |         | Applies custom width at all breakpoints                        |
| widthLg    | widthlg    |           | string                                                                                                |         | Applies custom width at `ds-grid-breakpoint-lg` and above      |
| widthMd    | widthmd    |           | string                                                                                                |         | Applies custom width at `ds-grid-breakpoint-md` and above      |
| widthSm    | widthsm    |           | string                                                                                                |         | Applies custom width at `ds-grid-breakpoint-sm` and above      |

### Methods

| Name     | Parameters                                                           | Return | Description                                       |
| -------- | -------------------------------------------------------------------- | ------ | ------------------------------------------------- |
| register | `name` (string) - The name of the element that you want to register. |        | This will register this element with the browser. |

### Slots

| Name      | Description                                               |
| --------- | --------------------------------------------------------- |
| (default) | Default slot for content within the background container. |