# auro-background

The `auro-background` is a way to show an image or background color around a block of code or in a slot when used in conjuction with other web components like `auro-banner`.  It is esentially an alertnative to using custom css background css where your css styles are automicatlly scoped and media queries built in using a mobile first philosophy.

## auro-background use cases

The `<auro-background>` element should be used in situations where users may:

- In a slot in other auro components
- As a background to an existing code block such as a hero or banner

## How to use
The auro-background component takes 2 main properties a `height` and a `background` that serve as the default at all breapoints.  Plus there is a seperate property for each supported breakpoint (`heightsm`, `heightmd`, `heightlg`, `backgroundsm`, `backgroundmd`, `backgroundlg`).  If you don't set specific size propery the smaller property will be used.

These properties map to the css properties of `height` and the compound css `background` property so anything you can do with css you can do here.  When wrapping a component be sure to check each breakpoint and ensure the proper height is set.

For the background a css <auro-hyperlink target="_blank" href="https://webcode.tools/generators/css/background-image">generator</auro-hyperlink> is helpful.


## Examples

### Auro-background can wrap any component
In this example the `<auro-background>` wraps the component and is also used in a slot and expands to take up with space of the container.

<auro-background height="initial" background="#b4cdd2 url(https://images.unsplash.com/photo-1500304624028-5b2641868ade?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80) right center/cover no-repeat;">
  <auro-banner onbackground inset>
    <div slot="content">
    <auro-header level="2" display="800" margin="both" size="none" style="color:#0b5575">Lorem ipsum dolor</auro-header>
    <div style="color:#0b5575; margin-bottom: 1rem">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam possimus, quod aperiam a aut fuga qui eos reprehenderit facilis vero.
    </div>
    <auro-hyperlink primary cta href="#" target="_blank" >Reprehenderit</auro-hyperlink>
    </div>
  </auro-banner>
  </auro-background>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

```html
<auro-background height="initial" background="#b4cdd2 url(https://images.unsplash.com/photo-1500304624028-5b2641868ade?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80) right center/cover no-repeat;">
  <auro-banner onbackground inset>
    <div slot="content">
    <auro-header level="2" display="800" margin="both" size="none" style="color:#0b5575">Lorem ipsum dolor</auro-header>
    <div style="color:#0b5575; margin-bottom: 1rem">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam possimus, quod aperiam a aut fuga qui eos reprehenderit facilis vero.
    </div>
    <auro-hyperlink primary cta href="#" target="_blank" >Reprehenderit</auro-hyperlink>
    </div>
  </auro-banner>
  </auro-background>
```

</auro-accordion>

### Auro-background in a slot

<auro-banner>
  <auro-background slot="graphic" height="215px" heightsm="340px" background="#b4cdd2 url(https://images.unsplash.com/photo-1564419320461-6870880221ad?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1868&q=80) center center/cover no-repeat;">
  </auro-background>
  <div slot="content">
   <auro-header level="2" display="800" margin="both" size="none">First Class</auro-header>
      <auro-header level="3" display="300" margin="top" size="none">Introducing boxed water</auro-header>
      <div style="margin-bottom: 1rem">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam possimus, quod aperiam a aut fuga qui eos reprehenderit facilis vero.
    </div>
    <auro-hyperlink secondary cta href="#" target="_blank" >Reprehenderit</auro-hyperlink>
  </div>
</auro-banner>


<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

```html
  <auro-background slot="graphic" height="215px" heightsm="340px" background="#b4cdd2 url(https://images.unsplash.com/photo-1564419320461-6870880221ad?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1868&q=80) center center/cover no-repeat;">
  </auro-background>
```

</auro-accordion>

### 2 auro backgrounds
In these examples the `<auro-background>` wraps the `<auro-banner>`component and is also used in a slot and expands to take up with space of the container.

<auro-background height="initial" background="var(--auro-color-background-darkest); margin-bottom:2rem">
<auro-banner inset overlay overlayBg="var(--auro-color-brand-neutral-400)">
<div slot="graphic">
  <auro-background
    height="215px"
    heightsm="390px"
    heightmd="302px"
    backgroundsm="#b4cdd2 url(https://images.unsplash.com/photo-1500304624028-5b2641868ade?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80) right center/cover no-repeat;"
  ></auro-background>
  </div>
  <div slot="content">
    <div class="offer">
    <auro-header level="2" display="800" margin="both" size="none" style="color:white">Lorem ipsum dolor</auro-header>
      <div style="color:white; margin-bottom: 1rem">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam possimus, quod aperiam a aut fuga qui eos reprehenderit facilis vero.
      </div>
    </div>
  </div>
  <span slot="overlay">
    <auro-icon category="social" name="instagram" customSize customColor style="color: var(--auro-color-base-white); width: 5rem"></auro-icon>
  </span>
</auro-banner>
</auro-background>




<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

```html
<auro-background background="var(--auro-color-background-darkest)">
<auro-banner inset overlay overlayBg="var(--auro-color-brand-neutral-400)">
  <auro-background
    slot="graphic"
    height="215px"
    heightsm="350px"
    heightmd="302px"
    backgroundsm="#b4cdd2 url(https://images.unsplash.com/photo-1500304624028-5b2641868ade?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80) right center/cover no-repeat;"
  ></auro-background>
  <div slot="content">
    <auro-header level="2" display="800" margin="both" size="none" style="color:white">Lorem ipsum dolor</auro-header>
    <div style="color:white; margin-bottom: 1rem">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam possimus, quod aperiam a aut fuga qui eos reprehenderit facilis vero.
    </div>
    <auro-hyperlink primary ondark cta href="#" target="_blank">Reprehenderit</auro-hyperlink>
  </div>
  <span slot="overlay">
    <auro-icon category="social" name="instagram" customSize customColor style="color: var(--auro-color-base-white); width: 5rem"></auro-icon>
  </span>
</auro-banner>
</auro-background>
```

</auro-accordion>

<auro-background height="initial" background="var(--auro-color-background-darker)">
  <auro-banner inset>
    <div slot="content">
      <img style="width: 250px;margin-left: -26px;" src="https://sitecore-prod-cd-westus2.azurewebsites.net/-/media/Images/homepage-tiles/VaccinateWA_Logo-Only_SingleColorWhite.png">
      <auro-header level="2" display="800" margin="both" size="none" style="color:white">Join the millions. </auro-header>
      <div style="color:white; margin-bottom: 2rem">
        Schedule your no-cost COVID-19 vaccine today.
      </div>
      <auro-hyperlink secondary cta href="#" target="_blank" >Schedule appointment</auro-hyperlink>
    </div>
    <auro-background slot="graphic" height="250px" heightSm="350px" background="#d3c7ad url(https://images.unsplash.com/photo-1612277795511-39caabca8185?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80) right center/cover no-repeat;" backgroundsm="#d3c7ad url(https://images.unsplash.com/photo-1612277795511-39caabca8185?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80) right bottom/cover no-repeat;"></auro-background>
  </auro-banner>
</auro-background>


<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

```html
<auro-background background="var(--auro-color-background-darker)">
  <auro-banner inset>
    <div slot="content">
      <img style="width: 250px;margin-left: -26px;" src="https://sitecore-prod-cd-westus2.azurewebsites.net/-/media/Images/homepage-tiles/VaccinateWA_Logo-Only_SingleColorWhite.png">
      <auro-header level="2" display="800" margin="both" size="none" style="color:white">Join the millions. </auro-header>
      <div style="color:white; margin-bottom: 2rem">
        Schedule your no-cost COVID-19 vaccine today.
      </div>
      <auro-hyperlink secondary cta href="#" target="_blank" >Schedule appointment</auro-hyperlink>
    </div>
    <auro-background slot="graphic" heightSm="400px" background="#d3c7ad url(https://images.unsplash.com/photo-1612277795511-39caabca8185?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80) right center/cover no-repeat;" backgroundsm="#d3c7ad url(https://images.unsplash.com/photo-1612277795511-39caabca8185?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80) right bottom/cover no-repeat;"></auro-background>
  </auro-banner>
</auro-background>
```

</auro-accordion>

