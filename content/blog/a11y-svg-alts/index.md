---
title: Accessible SVGs — Methods for Adding Alternative Content
date: "2018-12-03"
thumbnail: ./bee.png
description: Things to consider when adding alternative content to SVGs
published: Envato Tuts+
canonical: https://webdesign.tutsplus.com/tutorials/accessible-svg-methods-for-adding-alternative-content--cms-32205
pub_date: December 3, 20198
tags: accessibility, a11y, design, media, patterns, development, svgs
---

##SVGs: Then and Now
Scalable Vector Graphics (SVG) are XML-based vector images. They’ve been around for a long time now but have seen a real resurgence in use over the past couple of years. There are plenty of reasons to use SVGs today including:

- Increased native browser support of SVGs means better consistency and higher fidelity of images.
- Advancement of CSS and JavaScript techniques available to style and animate images.
- The relative “lightness” of SVG code in a world where bandwidth and performance matter more than ever.

Another big advantage of using SVGs over standard images is that they can easily be made accessible. Since markup can be added to the SVGs directly, they give individuals who use assistive technologies (ATs), such as screen readers, more information about the images within the image itself.</p>

<hr>

<h2>Rules of Alternative Content</h2>

While there are many things to consider when making SVGs fully accessible, we’re going to focus on the ways you can add alternative content to an SVG. I expect you’re already familiar with the alt="" tag on images–alternative content is what’s used when an image isn’t, or can’t be displayed, or assistive technologies are used. Keep in mind, the usual <a href="https://webaim.org/techniques/alttext/" target="_blank" rel="noopener noreferrer">basic rules of alternative content</a> apply to SVGs:

- Make sure your alternative content is meaningful and descriptive.
- Do not let your alternative content exceed 125 characters.
- Do not repeat the same alternative content for different images.
- Do not use phrases like “image of” or “graphic of” to describe an image. A screen reader already tells the user this information.
- If an SVG (or any graphic) is purely decorative, it needs to have an empty/null alternative text attribute. This sends a signal to the AT to ignore this image as it is not necessary for understanding the content or action on the page.
- An empty/null alternative text attribute is not the same as a missing alternative text attribute. If the alternative text attribute is missing, the AT might read out the file name or surrounding content in an attempt to give the user more information about the image.
- Bad: <code>&#60;img src="here-is-some-path.svg"></code>
- Good: <code>&#60;img src="here-is-some-path.svg" alt=""></code>

Now that the basics of alternative content are out of the way, let’s look at a few methods you can use to make your SVGs more accessible.

<hr>

<h2>SVGs as Images</h2>

For basic, uncomplicated, or decorative images, using the <code>&#60;img></code> tag and referencing the SVG as a file is the way to go. There are some benefits to this method including:

- The overall file size will be smaller than embedding the <code>&#60;svg></code> element inline.
- The image can be cached by the browser.
- Maintenance is easier if you are using the SVG in multiple places.

<svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="dots-svg" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>

<h3>The <code>&#60;img></code> + Alternative Text Attribute Method</h3>

In the example below, the <code>&#60;img></code> tag includes <code>alt="Black and yellow bee with six legs and translucent wings"</code>.

<iframe height="400" style="width: 100%;" scrolling="no" title="Accessible bee SVG using &lt;img&gt; and alt text attribute" src="//codepen.io/cariefisher/embed/mQQzVb/?height=265&theme-id=dark&default-tab=html,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/cariefisher/pen/mQQzVb/'>Accessible bee SVG using &lt;img&gt; and alt text attribute</a> by Carie Fisher
  (<a href='https://codepen.io/cariefisher'>@cariefisher</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

<p></p>

https://codepen.io/cariefisher/pen/mQQzVb

<hr>

<h2>Inline SVGs</h2>

For more complex or essential SVGs, you should consider adding the SVG as markup in the HTML directly. Advantages of inline SVGs include:

- JavaScript and CSS can be applied to the <code>&#60;svg></code> to animate or style the images.
- The SVG source is directly available in the DOM so may be more predictable for ATs.
- This allows multiple ways to add additional information about the image inside of the image itself.

<strong>Note:</strong> To ensure the widest range of ATs recognize the SVG as an image, make sure to add role="img" to the <code>&#60;svg></code> element.

<svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="dots-svg" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>

<h3>The <code>&#60;title></code> Method</h3>

The <code>&#60;title></code> element for an SVG is equivalent to the alternative text attribute for a typical raster image using the <code>&#60;img></code> element. All the same basic alternative content rules apply. It is important to list the main <code>&#60;title></code> element first so it is read first by ATs, as SVGs can have multiple title elements embedded.

In the following example, you will see the <code>&#60;title></code> element immediately after the opening <code>&#60;svg></code> tag.

<p></p>

<iframe height="400" style="width: 100%;" scrolling="no" title="Accessible bee SVG using &lt;title&gt;" src="//codepen.io/cariefisher/embed/LXXgEX/?height=265&theme-id=dark&default-tab=html,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/cariefisher/pen/LXXgEX/'>Accessible bee SVG using &lt;title&gt;</a> by Carie Fisher
  (<a href='https://codepen.io/cariefisher'>@cariefisher</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>
<p></p>

https://codepen.io/cariefisher/pen/LXXgEX

<svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="dots-svg" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>

<h3>The <code>aria-labelledby</code> + <code>&#60;title></code> Method</h3>

While a <code>&#60;title></code> element provides the equivalent to alternative text for an embedded SVG, not all browsers and screen reader combinations can use the <code>&#60;title></code> element on its own. When the <code>aria-labelledby</code> attribute is added to the mix, it can help link the SVG to the <code>&#60;title></code> element in a more robust way.

Note the additional <code>aria-labelledby</code> attribute linking to the <code>&#60;title></code> by its id.

<iframe height="400" style="width: 100%;" scrolling="no" title="Accessible bee SVG using aria-labelledby + &lt;title&gt;" src="//codepen.io/cariefisher/embed/VVVREW/?height=265&theme-id=dark&default-tab=html,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/cariefisher/pen/VVVREW/'>Accessible bee SVG using aria-labelledby + &lt;title&gt;</a> by Carie Fisher
  (<a href='https://codepen.io/cariefisher'>@cariefisher</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>
<p></p>

https://codepen.io/cariefisher/pen/VVVREW

<svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="dots-svg" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>

<h3>The <code>&#60;title></code> + <code>&#60;desc></code> Method</h3>

<p>For complex images, you may need more than 125 characters to describe them. This is where the <code class="inline">&lt;desc&gt;</code> element comes into play. The <code class="inline">&lt;desc&gt;</code>&nbsp;tag is equivalent to the&nbsp;<code class="inline">longdesc=""</code> attribute in&nbsp;an&nbsp;<code class="inline">&lt;img&gt;</code> element. However, the benefit to <code class="inline">&lt;desc&gt;</code> is that the description is provided as part of the image itself, whereas with a raster image, the <code class="inline">longdesc=""</code> attribute simply points to another location that contains the detailed description.&nbsp;</p>

<p>Below is an example using <code class="inline">&lt;svg&gt;</code> in combination with <code class="inline">&lt;title&gt;</code> and <code class="inline">&lt;desc&gt;</code>.</p>

<iframe height="400" style="width: 100%;" scrolling="no" title="Accessible bee SVG using &lt;title&gt; + &lt;desc&gt;" src="//codepen.io/cariefisher/embed/KrrLKa/?height=265&theme-id=dark&default-tab=html,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/cariefisher/pen/KrrLKa/'>Accessible bee SVG using &lt;title&gt; + &lt;desc&gt;</a> by Carie Fisher
  (<a href='https://codepen.io/cariefisher'>@cariefisher</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>
<p></p>

https://codepen.io/cariefisher/pen/KrrLKa

<svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="dots-svg" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>

<h3>The <code>aria-labelledby</code> + <code>&#60;title></code> + <code>&#60;desc></code> Method</h3>

<p>Just like the example above where <code class="inline">&lt;title&gt;</code> was not enough for some browser/AT combinations, <code class="inline">&lt;desc&gt;</code> sometimes needs help from an ARIA attribute too. Just make sure you have two different IDs for the&nbsp;<code class="inline">&lt;title&gt;</code> and&nbsp;<code class="inline">&lt;desc&gt;</code> elements and both are referenced in the <code class="inline">aria-labelledby</code> attribute.&nbsp;</p>

<p><strong>Note:</strong> You might want to use the&nbsp;<code class="inline">aria-describedby</code>&nbsp;attribute instead, but the differences are extremely subtle.</p>

<p>In this example the <code class="inline">&lt;title&gt;</code> and the <code class="inline">&lt;desc&gt;</code> have unique IDs and are <em>both</em> referenced in a single <code class="inline">labelledby</code> attribute.</p>

<iframe height="400" style="width: 100%;" scrolling="no" title="Accessible bee SVG using aria-labelledby + &lt;title&gt; + &lt;desc&gt;" src="//codepen.io/cariefisher/embed/zMMQzL/?height=265&theme-id=dark&default-tab=html,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/cariefisher/pen/zMMQzL/'>Accessible bee SVG using aria-labelledby + &lt;title&gt; + &lt;desc&gt;</a> by Carie Fisher
  (<a href='https://codepen.io/cariefisher'>@cariefisher</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

<p></p>

https://codepen.io/cariefisher/pen/zMMQzL

<hr>

<h2>Summary</h2>

There are many methods to make SVGs a bit more accessible when it comes to supplemental image information. Depending on the complexity of your image you can:

<ul>
<li>Reference the SVG as an <code class="inline">&lt;img&gt;</code> source and use a traditional alternative text attribute (max 125 characters).</li>
<li>Supplement your inline SVG with a <code class="inline">&lt;title&gt;</code> element&nbsp;(max 125 characters).</li>
<li>For more complex images, you can use a <code class="inline">&lt;desc&gt;</code> element to add more details than the <code class="inline">&lt;title&gt;</code> element (no limit on characters).</li>
<li>For additional browser/AT support, link the <code class="inline">&lt;title&gt;</code> or <code class="inline">&lt;desc&gt;</code> elements to an <code class="inline">aria-labelledby</code> attribute.</li>
</ul>
