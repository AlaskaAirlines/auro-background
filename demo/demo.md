# auro-background

The `auro-background` element is an easy-to-use mobile-first alternative to writing custom CSS for background colors or images with automatically scoped media queries.  Use independently or in the slot of another element such as `auro-banner`.

## auro-background use cases

The `<auro-background>` element should be used in situations where users may:

- In a slot in other auro components
- As a background to an existing code block such as a hero

## How to use
The auro-background component accepts 4 properties - `bg`, `height`, `width`, and `inset` that serve as the default at all breakpoints. `height`, `width`, and `inset` are not required and sizing will scale to the content when ommited. Additionally, there is a seperate property for each supported breakpoint (`bgsm`, `bgmd`, `bglg`, `heightsm`, `heightmd`, `heightlg`, `widthsm`, `widthmd`, `widthlg`).  If you don't set specific size property the smaller property will be used.

These properties map to the compound CSS `background` property and CSS properties of `height`, `width`, and `padding`. Anything you can do within the scope of those CSS rules you can do here.

For the background a css <auro-hyperlink target="_blank" href="https://webcode.tools/generators/css/background-image">generator</auro-hyperlink> is helpful.


## Examples

### Basic auro-background

This example shows a simple `auro-background` using only the `bg` attribute. The background sizes to fit the content.

<div class="exampleWrapper">
<auro-background bg="url(https://sitecore-test-single-westus2.azurewebsites.net/-/media/Images/pages/examples/ad2) center center/cover no-repeat">
  <div style="color: var(--auro-color-text-primary-on-dark); display: flex; flex-direction: column; align-items: center; justify-content: center;">
    <auro-header level="2" display="600">View all destinations</auro-header>
    <auro-hyperlink cta href="#">See where we fly</auro-hyperlink>
  </div>
</auro-background>
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

```html
<auro-background bg="url(https://sitecore-test-single-westus2.azurewebsites.net/-/media/Images/pages/examples/ad2) center center/cover no-repeat">
  <div style="color: var(--auro-color-text-primary-on-dark); display: flex; flex-direction: column; align-items: center; justify-content: center;">
    <auro-header level="2" display="600">View all destinations</auro-header>
    <auro-hyperlink cta href="#">See where we fly</auro-hyperlink>
  </div>
</auro-background>
```

</auro-accordion>


### Use inset attribute to add padding

This example uses `inset="xl"` to add padding inside the background element. Valid attribute values include `none`, `xxxs`, `xxs`, `xs`, `sm`, `md`, `lg`, `xl`, `xxl`, `xxxl` or any CSS value which is valid for the CSS `padding` rule (e.g. `1rem`). When using a custom CSS rule do not include a semi-colon at at the end of the string (e.g. `1rem` is valid, `1rem;` is invalid).

Inset values may also be declared folloing the same rules as `inset` for each breakpoint using the `insetSm`, `insetMd` and `insetLg` attributes.

<div class="exampleWrapper">
<auro-background bg="url(https://sitecore-test-single-westus2.azurewebsites.net/-/media/Images/pages/examples/ad2) center center/cover no-repeat" inset="xl">
  <div style="color: var(--auro-color-text-primary-on-dark); display: flex; flex-direction: column; align-items: center; justify-content: center;">
    <auro-header level="2" display="600">View all destinations</auro-header>
    <auro-hyperlink cta href="#">See where we fly</auro-hyperlink>
  </div>
</auro-background>
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

```html
<auro-background bg="url(https://sitecore-test-single-westus2.azurewebsites.net/-/media/Images/pages/examples/ad2) center center/cover no-repeat" inset="xl">
  <div style="color: var(--auro-color-text-primary-on-dark); display: flex; flex-direction: column; align-items: center; justify-content: center;">
    <auro-header level="2" display="600">View all destinations</auro-header>
    <auro-hyperlink cta href="#">See where we fly</auro-hyperlink>
  </div>
</auro-background>
```

</auro-accordion>


### Using fixed height and width

The `height` and `width` attributes may be used to set custom dimensions. Attributes are available to set different sizes at each breakpoint (`heightSm`, `heightMd`, `heightLg`, `widthSm`, `widthMd`, `widthLg`).

<div class="exampleWrapper">
<auro-background bg="url(https://sitecore-test-single-westus2.azurewebsites.net/-/media/Images/pages/examples/ad2) center center/cover no-repeat" height="350px" width="300px">
  <div style="height: 100%; color: var(--auro-color-text-primary-on-dark); display: flex; flex-direction: column; align-items: center; justify-content: center;">
    <auro-header level="2" display="600">View all destinations</auro-header>
    <auro-hyperlink cta href="#">See where we fly</auro-hyperlink>
  </div>
</auro-background>
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

```html
<auro-background bg="url(https://sitecore-test-single-westus2.azurewebsites.net/-/media/Images/pages/examples/ad2) center center/cover no-repeat">
  <div style="color: var(--auro-color-text-primary-on-dark); display: flex; flex-direction: column; align-items: center; justify-content: center;">
    <auro-header level="2" display="600">View all destinations</auro-header>
    <auro-hyperlink cta href="#">See where we fly</auro-hyperlink>
  </div>
</auro-background>
```

</auro-accordion>


### Changing backgrounds at breakpoints

You may specificy different `bg` values for each breakpoint using `bgSm`, `bgMd` and `bgLg`.

<div class="exampleWrapper">
<auro-background
  bg="url(https://sitecore-test-single-westus2.azurewebsites.net/-/media/Images/pages/examples/ad2) center center/cover no-repeat"
  bgMd="url(https://sitecore-prod-cd-westus2.azurewebsites.net/-/media/Images/homepage-tiles/email-deals-holiday/MKT_091820_BF-CM-Email-Sign-Up-Materials_Merch-tiles_Evergreen_720x720-background.jpg) center center/cover no-repeat"
  bgLg="url(https://sitecore-test-single-westus2.azurewebsites.net/-/media/Images/common-assets/destinations/hawaii-bg) center center/cover no-repeat"
  inset="xl">
  <div style="color: var(--auro-color-text-primary-on-dark); display: flex; flex-direction: column; align-items: center; justify-content: center;">
    <auro-header level="2" display="600">View all destinations</auro-header>
    <auro-hyperlink cta href="#">See where we fly</auro-hyperlink>
  </div>
</auro-background>
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

```html
<auro-background
  bg="url(https://sitecore-test-single-westus2.azurewebsites.net/-/media/Images/pages/examples/ad2) center center/cover no-repeat"
  bgMd="url(https://sitecore-prod-cd-westus2.azurewebsites.net/-/media/Images/homepage-tiles/email-deals-holiday/MKT_091820_BF-CM-Email-Sign-Up-Materials_Merch-tiles_Evergreen_720x720-background.jpg) center center/cover no-repeat"
  bgLg="url(https://sitecore-test-single-westus2.azurewebsites.net/-/media/Images/common-assets/destinations/hawaii-bg) center center/cover no-repeat"
  inset="xl">
  <div style="color: var(--auro-color-text-primary-on-dark); display: flex; flex-direction: column; align-items: center; justify-content: center;">
    <auro-header level="2" display="600">View all destinations</auro-header>
    <auro-hyperlink cta href="#">See where we fly</auro-hyperlink>
  </div>
</auro-background>
```

</auro-accordion>


## Additional Examples

<div class="exampleWrapper">
<auro-background bg="url(https://sitecore-test-single-westus2.azurewebsites.net/-/media/Images/common-assets/destinations/hawaii-bg) center center/cover no-repeat" inset="md" width="300px">
  <div style="color: var(--auro-color-text-primary-on-dark); display: flex; flex-direction: column; justify-content: center;">
    <img alt="" style="width:150px;" src="https://sitecore-test-single-westus2.azurewebsites.net/-/media/Images/pages/pattern-library/banner-deals/40K-cc-100-dollar-statement-credit">
    <auro-header level="2" display="600">Alaska Airlines Visa Signature® card</auro-header>
    <ul class="credit-card-offer" style="text-shadow: 1px 1px 0px rgba(0,0,0,0); margin-bottom: 12px; list-style: none; padding: 0;">
      <li>Alaska's Famous Companion Fare<sup>™</sup> every year</li>
      <li>First checked bag free for you and up to 6 guests on your reservation</li>
    </ul>
    <auro-hyperlink cta secondary href="#">Join now</auro-hyperlink><br />
    <auro-hyperlink nav onDark href="#" style="font-size: var(--auro-text-body-size-xs);">
      Restrictions apply
      <svg viewBox="0 0 24 24" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true" style="min-width: var(--auro-size-md); height: var(--auro-size-md); fill: currentColor" class="ico_squareLarge"><title>This content from Alaska Airlines will open in a new tab or window.</title><desc>Notice indicator to alert users that action will result in the browser opening a new tab or window.</desc><path fill-rule="evenodd" d="M20.2462 5.68686C20.1813 4.60628 19.2844 3.75 18.1875 3.75H8.8125L8.68686 3.75376C7.60628 3.8187 6.75 4.7156 6.75 5.8125V6.75029L6.5 6.75044L6.33248 6.75546C4.8917 6.84204 3.75 8.03791 3.75 9.50044V17.5004L3.75502 17.668C3.8416 19.1087 5.03747 20.2504 6.5 20.2504H14.5L14.6675 20.2454C16.1083 20.1588 17.25 18.963 17.25 17.5004V17.25H18.1875L18.3131 17.2462C19.3937 17.1813 20.25 16.2844 20.25 15.1875V5.8125L20.2462 5.68686ZM15.75 17.25H8.8125C7.7156 17.25 6.8187 16.3937 6.75376 15.3131L6.75 15.1875V8.2503L6.5 8.25044C5.85279 8.25044 5.32047 8.74232 5.25645 9.37264L5.25 9.50044V17.5004C5.25 18.1477 5.74187 18.68 6.37219 18.744L6.5 18.7504H14.5C15.1472 18.7504 15.6795 18.2586 15.7435 17.6282L15.75 17.5004V17.25ZM9.125 5.25H17.875L17.9645 5.25452C18.4057 5.29933 18.75 5.67195 18.75 6.125V14.875L18.7455 14.9645C18.7007 15.4057 18.328 15.75 17.875 15.75H9.125L9.03554 15.7455C8.59431 15.7007 8.25 15.328 8.25 14.875V6.125L8.25452 6.03554C8.29933 5.59431 8.67195 5.25 9.125 5.25ZM13.4051 7.00729L13.5069 7C13.8866 7 14.2003 7.30061 14.25 7.69063L14.2569 7.79906L14.25 9.73835L16.25 9.73835C16.6297 9.73835 16.9435 10.039 16.9932 10.429L17 10.5374C17 10.9419 16.7179 11.2763 16.3518 11.3292L16.25 11.3365L14.249 11.3365L14.25 13.2009C14.25 13.6055 13.9679 13.9398 13.6018 13.9927L13.5 14C13.1203 14 12.8065 13.6994 12.7569 13.3094L12.75 13.2009L12.749 11.3365L10.75 11.3365C10.3703 11.3365 10.0565 11.0359 10.0068 10.6458L10 10.5374C10 10.1329 10.2822 9.79855 10.6482 9.74564L10.75 9.73835L12.75 9.73835L12.7569 7.79906C12.7569 7.39453 13.039 7.06021 13.4051 7.00729Z"></path></svg>
    </auro-hyperlink>
  </div>
</auro-background>
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

```html
<auro-background bg="url(https://sitecore-test-single-westus2.azurewebsites.net/-/media/Images/common-assets/destinations/hawaii-bg) center center/cover no-repeat" inset="md" width="300px">
  <div style="color: var(--auro-color-text-primary-on-dark); display: flex; flex-direction: column; justify-content: center;">
    <img alt="" style="width:150px;" src="https://sitecore-test-single-westus2.azurewebsites.net/-/media/Images/pages/pattern-library/banner-deals/40K-cc-100-dollar-statement-credit">
    <auro-header level="2" display="600">Alaska Airlines Visa Signature® card</auro-header>
    <ul class="credit-card-offer" style="text-shadow: 1px 1px 0px rgba(0,0,0,0); margin-bottom: 12px; list-style: none; padding: 0;">
      <li>Alaska's Famous Companion Fare<sup>™</sup> every year</li>
      <li>First checked bag free for you and up to 6 guests on your reservation</li>
    </ul>
    <auro-hyperlink cta secondary href="#">Join now</auro-hyperlink><br />
    <auro-hyperlink nav onDark href="#" style="font-size: var(--auro-text-body-size-xs);">
      Restrictions apply
      <svg viewBox="0 0 24 24" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true" style="min-width: var(--auro-size-md); height: var(--auro-size-md); fill: currentColor" class="ico_squareLarge"><title>This content from Alaska Airlines will open in a new tab or window.</title><desc>Notice indicator to alert users that action will result in the browser opening a new tab or window.</desc><path fill-rule="evenodd" d="M20.2462 5.68686C20.1813 4.60628 19.2844 3.75 18.1875 3.75H8.8125L8.68686 3.75376C7.60628 3.8187 6.75 4.7156 6.75 5.8125V6.75029L6.5 6.75044L6.33248 6.75546C4.8917 6.84204 3.75 8.03791 3.75 9.50044V17.5004L3.75502 17.668C3.8416 19.1087 5.03747 20.2504 6.5 20.2504H14.5L14.6675 20.2454C16.1083 20.1588 17.25 18.963 17.25 17.5004V17.25H18.1875L18.3131 17.2462C19.3937 17.1813 20.25 16.2844 20.25 15.1875V5.8125L20.2462 5.68686ZM15.75 17.25H8.8125C7.7156 17.25 6.8187 16.3937 6.75376 15.3131L6.75 15.1875V8.2503L6.5 8.25044C5.85279 8.25044 5.32047 8.74232 5.25645 9.37264L5.25 9.50044V17.5004C5.25 18.1477 5.74187 18.68 6.37219 18.744L6.5 18.7504H14.5C15.1472 18.7504 15.6795 18.2586 15.7435 17.6282L15.75 17.5004V17.25ZM9.125 5.25H17.875L17.9645 5.25452C18.4057 5.29933 18.75 5.67195 18.75 6.125V14.875L18.7455 14.9645C18.7007 15.4057 18.328 15.75 17.875 15.75H9.125L9.03554 15.7455C8.59431 15.7007 8.25 15.328 8.25 14.875V6.125L8.25452 6.03554C8.29933 5.59431 8.67195 5.25 9.125 5.25ZM13.4051 7.00729L13.5069 7C13.8866 7 14.2003 7.30061 14.25 7.69063L14.2569 7.79906L14.25 9.73835L16.25 9.73835C16.6297 9.73835 16.9435 10.039 16.9932 10.429L17 10.5374C17 10.9419 16.7179 11.2763 16.3518 11.3292L16.25 11.3365L14.249 11.3365L14.25 13.2009C14.25 13.6055 13.9679 13.9398 13.6018 13.9927L13.5 14C13.1203 14 12.8065 13.6994 12.7569 13.3094L12.75 13.2009L12.749 11.3365L10.75 11.3365C10.3703 11.3365 10.0565 11.0359 10.0068 10.6458L10 10.5374C10 10.1329 10.2822 9.79855 10.6482 9.74564L10.75 9.73835L12.75 9.73835L12.7569 7.79906C12.7569 7.39453 13.039 7.06021 13.4051 7.00729Z"></path></svg>
    </auro-hyperlink>
  </div>
</auro-background>
```

</auro-accordion>

<div class="exampleWrapper">
<auro-background bg="url(https://sitecore-test-single-westus2.azurewebsites.net/-/media/Images/pages/examples/ad1) center top/cover no-repeat" height="500px" width="400px" inset="md">
  <div style="height: 100%; display: flex; flex-direction: column; justify-content: center;">
    <auro-header level="2" display="600">Explore our Route Map</auro-header>
    <p style="margin-bottom:12px;">Visit amazing destinations like, Costa Rica, Hawaii, or Mexico</p>
    <auro-hyperlink slot="button" href="#">Visit route map</auro-hyperlink>
  </div>
</auro-background>
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

```html
<auro-background bg="url(https://sitecore-test-single-westus2.azurewebsites.net/-/media/Images/pages/examples/ad1) center top/cover no-repeat" height="500px" width="400px" inset="md">
  <div style="height: 100%; display: flex; flex-direction: column; justify-content: center;">
    <auro-header level="2" display="600">Explore our Route Map</auro-header>
    <p style="margin-bottom:12px;">Visit amazing destinations like, Costa Rica, Hawaii, or Mexico</p>
    <auro-hyperlink slot="button" href="#">Visit route map</auro-hyperlink>
  </div>
</auro-background>
```

</auro-accordion>
