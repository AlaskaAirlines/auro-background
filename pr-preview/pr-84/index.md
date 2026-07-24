<!--
 THIS PAGE'S CONTENT SHOULD BE KEPT MINIMAL.
 ONLY ADD EXAMPLES THAT ARE TRULY NECESSARY FOR THE INDEX PAGE — THE BASIC EXAMPLE IS USUALLY ENOUGH.
 ALL OTHER EXAMPLES SHOULD GO IN THE API DOCUMENTATION.
-->

# Background

<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../docs/partials/description.md) -->
<!-- The below content is automatically added from ./../docs/partials/description.md -->
The `auro-background` element is an easy-to-use mobile-first alternative to writing custom CSS for background colors or images with automatically scoped media queries. Use independently or in the slot of another custom element such as `auro-banner`.
<!-- AURO-GENERATED-CONTENT:END -->

## Use Cases

<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../docs/partials/useCases.md) -->
<!-- The below content is automatically added from ./../docs/partials/useCases.md -->
The `<auro-background>` element should be used in situations where users may:

* Need to apply a background image or color to a specific section of content
* Require responsive background images that change at different breakpoints
<!-- AURO-GENERATED-CONTENT:END -->

## Example(s)

### Basic

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/basic.html) -->
  <!-- The below content is automatically added from ./../apiExamples/basic.html -->
  <auro-background bg="url(https://images.contentstack.io/v3/assets/blt2cefe12c88e9dd91/blt4dde4105498391f8/6633c2581dbb0973c00b8783/ad2.png) center center/cover no-repeat">
    <div style="color: var(--ds-color-text-primary-inverse); display: flex; flex-direction: column; align-items: center; justify-content: center;">
      <auro-header level="2" visualLevel="3">View all destinations</auro-header>
      <auro-hyperlink type="cta" variant="secondary" href="#" size="xs" style="padding-bottom: 4px;">See where we fly</auro-hyperlink>
    </div>
  </auro-background>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/basic.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/basic.html -->

```html
<auro-background bg="url(https://images.contentstack.io/v3/assets/blt2cefe12c88e9dd91/blt4dde4105498391f8/6633c2581dbb0973c00b8783/ad2.png) center center/cover no-repeat">
  <div style="color: var(--ds-color-text-primary-inverse); display: flex; flex-direction: column; align-items: center; justify-content: center;">
    <auro-header level="2" visualLevel="3">View all destinations</auro-header>
    <auro-hyperlink type="cta" variant="secondary" href="#" size="xs" style="padding-bottom: 4px;">See where we fly</auro-hyperlink>
  </div>
</auro-background>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>
 