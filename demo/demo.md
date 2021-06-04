# auro-background

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam convallis in tellus nec pellentesque. Integer bibendum ligula sit amet vehicula gravida. Maecenas accumsan, ligula vitae molestie iaculis, tellus mi laoreet ex [install instructions](https://auro.alaskaair.com/components/auro/button/install), ac malesuada velit dolor vel mi. Cras et rutrum urna. Sed mattis mi eu tortor ullamcorper, egestas bibendum mauris cursus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus viverra eros eget neque commodo vulputate. In tempus eu velit at dictum.

Nulla at augue facilisis `odio lobortis` molestie vitae a nulla.

## auro-background use cases

The `<auro-background>` element should be used in situations where users may:

- egestas bibendum mauris cursus
- quis euismod felis mollis
- consectetur ipsum risus sed tortor

<style>
  h3 {
    margin-top: 4rem;
}

h3#auro-background-wraps-the-row-below {
    margin-top: 0;
}
  .bannerWrapper {
    display:flex;
    flex-direction: column-reverse;
    align-items: stretch;
    justify-content: center;
  }
 @media (min-width: 660px) {.bannerWrapper {flex-direction: row;}}
  .bannerContent { flex: 1 1 50%; padding: 5rem 4rem}
  .no-padding-left {padding-left: 0}
  .bannerImage { flex: 1 1 50%}
</style>
## Examples

### Auro-background wraps the row below
In this example the `<auro-background>` wraps the component and is also used in a slot and expands to take up with space of the container.

<auro-background background="#b4cdd2 url(https://images.unsplash.com/photo-1500304624028-5b2641868ade?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80) right center/cover no-repeat;">
  <div class="bannerWrapper">
    <div class="bannerContent">
    <auro-header level="2" display="800" margin="both" size="none" style="color:#0b5575">Lorem ipsum dolor</auro-header>
    <div style="color:#0b5575; margin-bottom: 1rem">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam possimus, quod aperiam a aut fuga qui eos reprehenderit facilis vero.
    </div>
    <auro-hyperlink primary cta href="#" target="_blank" >Reprehenderit</auro-hyperlink>
    </div>
    <div class="bannerImage">
    </div>
  </div>

  </div>
  </auro-background>


### Auro-background in a div

  <div class="bannerWrapper">
    <div class="bannerContent no-padding-left">
      <auro-header level="2" display="800" margin="both" size="none">First Class</auro-header>
      <auro-header level="3" display="300" margin="top" size="none">Introducing boxed water</auro-header>
      <span>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam possimus, quod aperiam a aut fuga qui eos reprehenderit facilis vero.
      </span>
    </div>
    <div class="bannerImage">
      <auro-background background="#d3c7ad url(https://images.unsplash.com/photo-1564419320461-6870880221ad?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1868&q=80) center center/cover no-repeat"></auro-background>
    </div>
  </div>


### 2 auro backgrounds
In this example the `<auro-background>` wraps the component and is also used in a slot and expands to take up with space of the container.

<auro-background background="var(--auro-color-background-darker)">
<div class="bannerWrapper">
    <div class="bannerContent">
    <img style="width: 250px;margin-left: -26px;" src="https://sitecore-prod-cd-westus2.azurewebsites.net/-/media/Images/homepage-tiles/VaccinateWA_Logo-Only_SingleColorWhite.png">
    <auro-header level="2" display="800" margin="both" size="none" style="color:white">Join the millions. </auro-header>
    <div style="color:white; margin-bottom: 2rem">
      Schedule your no-cost COVID-19 vaccine today.
    </div>
    <auro-hyperlink secondary cta href="#" target="_blank" >Schedule appointment</auro-hyperlink>
  </div>
    <div class="bannerImage">
      <auro-background  minHeight="17rem" minHeightSm="100%" background="#d3c7ad url(https://images.unsplash.com/photo-1612277795511-39caabca8185?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80) right center/cover no-repeat;" backgroundsm="#d3c7ad url(https://images.unsplash.com/photo-1612277795511-39caabca8185?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80) right bottom/cover no-repeat;"></auro-background>
    </div>
  </div>
  </auro-background>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

```html
<auro-background background="var(--auro-color-background-darker)">
<div class="bannerWrapper">
    <div class="bannerContent">
    <img style="width: 250px;margin-left: -26px;" src="https://sitecore-prod-cd-westus2.azurewebsites.net/-/media/Images/homepage-tiles/VaccinateWA_Logo-Only_SingleColorWhite.png">
    <auro-header level="2" display="800" margin="both" size="none" style="color:white">Join the millions. </auro-header>
    <div style="color:white; margin-bottom: 2rem">
      Schedule your no-cost COVID-19 vaccine today.
    </div>
    <auro-hyperlink secondary cta href="#" target="_blank" >Schedule appointment</auro-hyperlink>
  </div>
    <div class="bannerImage">
      <auro-background  minHeight="17rem" minHeightSm="100%" background="#d3c7ad url(https://images.unsplash.com/photo-1612277795511-39caabca8185?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80) right center/cover no-repeat;" backgroundsm="#d3c7ad url(https://images.unsplash.com/photo-1612277795511-39caabca8185?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80) right bottom/cover no-repeat;">
      <div class="content"></div></auro-background>
    </div>
  </div>
  </auro-background>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

```

</auro-accordion>

### Paralax with 2 auro backgrounds
<auro-background background="var(--auro-color-background-lighter)">
<div class="bannerWrapper">
    <div class="bannerContent">
    <auro-header level="2" display="800" margin="both" size="none">Lorem ipsum title</auro-header>
    <auro-header level="3" display="300" margin="top" size="none">You can add multiple auro-header's here</auro-header>
    <span>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam possimus, quod aperiam a aut fuga qui eos reprehenderit facilis vero.
    </span>
  </div>
    <div class="bannerImage">
      <auro-background background="#d3c7ad url(https://images.unsplash.com/photo-1535853563674-dbdba022f845?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1900&q=80) center center/cover no-repeat fixed;" backgroundSm="red"></auro-background>
    </div>
  </div>
  </auro-background>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

```html
<auro-background background="var(--auro-color-background-lighter)">
<div class="bannerWrapper">
    <div class="bannerContent">
    <auro-header level="2" display="800" margin="both" size="none">Lorem ipsum title</auro-header>
    <auro-header level="3" display="300" margin="top" size="none">You can add multiple auro-header's here</auro-header>
    <span>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam possimus, quod aperiam a aut fuga qui eos reprehenderit facilis vero.
    </span>
  </div>
    <div class="bannerImage">
      <auro-background background="#d3c7ad url(https://images.unsplash.com/photo-1535853563674-dbdba022f845?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1900&q=80) center center/cover no-repeat fixed;"></auro-background>
    </div>
  </div>
  </auro-background>
```

</auro-accordion>

### Iconic with `<auro-background>`

<auro-background background="var(--auro-color-background-darkest)">
<auro-banner ondark iconic iconbg="var(--auro-color-brand-neutral-400)">
    <picture slot="displayImage">
      <source srcset="https://picsum.photos/id/369/2048/2000" media="(min-width: 1024px)">
      <source srcset="https://picsum.photos/id/369/736/1400" media="(min-width:660px)">
      <img src="https://picsum.photos/id/369/660/420" alt="">
    </picture>
  <span slot="icon">
    <auro-icon category="social" name="instagram" customSize customColor style="color: var(--auro-color-base-white); width: 5rem"></auro-icon>
  </span>
  <span slot="title">
    <auro-header level="2" display="800" margin="both" size="none">Lorem ipsum title</auro-header>
    <auro-header level="3" display="300" margin="top" size="none">You can add multiple auro-header's here</auro-header>
  </span>
  <p slot="description">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam possimus, quod aperiam a aut fuga qui eos reprehenderit facilis vero.
  </p>
</auro-banner>
</auro-background>




<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

```html
<auro-background cssClass="testClass">Hello World!</auro-background>
<auro-background cssClass="testClass" fixed>Hello World!</auro-background>
```

</auro-accordion>

<auro-card>
  <span slot="title">
    Pri dicat graece abhorreant
  </span>
  <img
    slot="blockImage"
    src="https://picsum.photos/304?random=0"
    alt="Random insert 0"/>
  <p slot="description">
    Ei est detracto fabellas convenire, vivendo accusata intellegebat ex mei. Pri dicat graece abhorreant ut, sea ei vidit omnes, errem tempor eligendi cu eos.
  </p>
  <auro-hyperlink
    nav
    href="/"
    slot="action"
    target="_blank">
    More info
  </auro-hyperlink>
  <p slot="disclaimer">
    * Errem tempor eligendi cu eos
  </p>
</auro-card>
