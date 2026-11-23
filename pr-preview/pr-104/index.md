<!--
 THIS PAGE'S CONTENT SHOULD BE KEPT MINIMAL.
 ONLY ADD EXAMPLES THAT ARE TRULY NECESSARY FOR THE INDEX PAGE. THE BASIC EXAMPLE IS USUALLY ENOUGH.
 ALL OTHER EXAMPLES SHOULD GO IN THE API DOCUMENTATION.
-->

# Background

<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../docs/partials/description.md) -->
<!-- The below content is automatically added from ./../docs/partials/description.md -->
Adds a background image, color, or gradient to a section of content. Set different backgrounds, sizes, and padding for each breakpoint without writing media queries. Use it on its own or in the slot of another element, such as `auro-banner`.
<!-- AURO-GENERATED-CONTENT:END -->

## Use cases

<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../docs/partials/useCases.md) -->
<!-- The below content is automatically added from ./../docs/partials/useCases.md -->
Use `<auro-background>` when you need to:

* Add a background image or color to a section of content.
* Change the background image at different breakpoints.
<!-- AURO-GENERATED-CONTENT:END -->

## Examples

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

<pre class="language-html"><code class="language-html">&lt;auro-background bg="url(https://images.contentstack.io/v3/assets/blt2cefe12c88e9dd91/blt4dde4105498391f8/6633c2581dbb0973c00b8783/ad2.png) center center/cover no-repeat"&gt;
  &lt;div style="color: var(--ds-color-text-primary-inverse); display: flex; flex-direction: column; align-items: center; justify-content: center;"&gt;
    &lt;auro-header level="2" visualLevel="3"&gt;View all destinations&lt;/auro-header&gt;
    &lt;auro-hyperlink type="cta" variant="secondary" href="#" size="xs" style="padding-bottom: 4px;"&gt;See where we fly&lt;/auro-hyperlink&gt;
  &lt;/div&gt;
&lt;/auro-background&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>
 