---
title: Accessible SVGs - Perfect Patterns For Screen Reader Users
date: "2021-05-26"
thumbnail: ./foxes.png
description: Discover which SVG patterns we should avoid and which patterns are the most inclusive when comparing different combinations of OSs, browsers, and screen readers. Carie will also be running an online workshop on Accessible Front-End Patterns all around front-end accessibility.
published: Smashing Magazine
canonical: https://www.smashingmagazine.com/2021/05/accessible-svg-patterns-comparison/
pub_date: May 26, 2021
tags: accessibility, a11y, design, media, patterns, development, svgs, scale vector graphics, comparison
---

<p>While Scalable Vector Graphics (SVGs) were first introduced in the late 90s, they have seen a massive resurgence in popularity in the last decade due to their extreme flexibility, high fidelity, and relative lightness in a world where bandwidth and performance matter more than ever. Advancements in JavaScript and the introduction of CSS media queries such <a href="https://caniuse.com/?search=prefers-color-scheme">@prefers-color-scheme</a> and <a href="https://caniuse.com/?search=prefers-reduced-motion">@prefers-reduced-motion</a> have extended the functionality of SVGs way beyond their initial use case of simply displaying vector images on a website.</p>

<p>As SVG technology advances, our understanding of how we design and develop SVGs needs to advance as well. Part of that advancement includes considering the impact of such designs and code on actual humans, aka our end users.</p>

<p>This article outlines <strong>twelve distinct SVG patterns</strong> found “in the wild” and each alternative description announced when accessed by different combinations of operating systems, browsers, and screen readers.</p>

<p>Of course, the following examples are not meant to be an exhaustive list of all the possible patterns being used in the digital sphere, but they do highlight some of the more popular or <strong>ubiquitous SVG patterns</strong> you might encounter. Continue reading to discover which SVG patterns you should avoid and which patterns are the most inclusive!</p>

<h2 id="basic-alternative-descriptions-using-the-img-tag">Basic Alternative Descriptions Using The <code>&lt;img&gt;</code> Tag</h2>

<p>The first group of four patterns utilizes the <code>&lt;img&gt;</code> tag linking out to an SVG file. This is a good choice for basic, uncomplicated images on your website, app, or other digital product. While the drawback to using this pattern is that you cannot easily control many visual elements or animations as an inline SVG, this pattern should render lighter and faster images overall and allow for easier maintenance on SVGs that you use in multiple locations.</p>

<h3 id="pattern-1-img-alt-words">Pattern #1: <code>&lt;img&gt;</code> + <code>alt="[words]"</code></h3>

<figure class="
  
  
  ">
  
    <a href="https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/48790836-d63d-4447-b508-69a444240f88/1-accessible-svg-pattern-comparison.png">
    
    <img loading="lazy" decoding="async" importance="low" width="800" height="613" srcset="https://res.cloudinary.com/indysigner/image/fetch/f_auto,q_80/w_400/https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/48790836-d63d-4447-b508-69a444240f88/1-accessible-svg-pattern-comparison.png 400w,
			        https://res.cloudinary.com/indysigner/image/fetch/f_auto,q_80/w_800/https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/48790836-d63d-4447-b508-69a444240f88/1-accessible-svg-pattern-comparison.png 800w,
			        https://res.cloudinary.com/indysigner/image/fetch/f_auto,q_80/w_1200/https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/48790836-d63d-4447-b508-69a444240f88/1-accessible-svg-pattern-comparison.png 1200w,
			        https://res.cloudinary.com/indysigner/image/fetch/f_auto,q_80/w_1600/https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/48790836-d63d-4447-b508-69a444240f88/1-accessible-svg-pattern-comparison.png 1600w,
			        https://res.cloudinary.com/indysigner/image/fetch/f_auto,q_80/w_2000/https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/48790836-d63d-4447-b508-69a444240f88/1-accessible-svg-pattern-comparison.png 2000w" src="https://res.cloudinary.com/indysigner/image/fetch/f_auto,q_80/w_400/https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/48790836-d63d-4447-b508-69a444240f88/1-accessible-svg-pattern-comparison.png" sizes="100vw" alt="fox illustration presented in the codepen example">
    
    </a>


</figure>

<div class="break-out">
 <div class="code-toolbar"><pre class=" language-svg"><code class=" language-svg"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>fox<span class="token punctuation">"</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>What does the fox say?<span class="token punctuation">"</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://upload.wikimedia.org/wikipedia/commons/3/39/Toicon-icon-fandom-howl.svg<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
</code></pre></div>
</div>

<h3 id="pattern-2-img-role-img-alt-words">Pattern #2: <code>&lt;img&gt;</code> + <code>role="img"</code> + <code>alt="[words]"</code></h3>

<figure class="
  
  
  ">
  
    <a href="https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/4ab0d4e8-cc8e-4d36-8569-d698dbb69c90/2-accessible-svg-pattern-comparison.png">
    
    <img loading="lazy" decoding="async" importance="low" width="800" height="613" srcset="https://res.cloudinary.com/indysigner/image/fetch/f_auto,q_80/w_400/https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/4ab0d4e8-cc8e-4d36-8569-d698dbb69c90/2-accessible-svg-pattern-comparison.png 400w,
			        https://res.cloudinary.com/indysigner/image/fetch/f_auto,q_80/w_800/https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/4ab0d4e8-cc8e-4d36-8569-d698dbb69c90/2-accessible-svg-pattern-comparison.png 800w,
			        https://res.cloudinary.com/indysigner/image/fetch/f_auto,q_80/w_1200/https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/4ab0d4e8-cc8e-4d36-8569-d698dbb69c90/2-accessible-svg-pattern-comparison.png 1200w,
			        https://res.cloudinary.com/indysigner/image/fetch/f_auto,q_80/w_1600/https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/4ab0d4e8-cc8e-4d36-8569-d698dbb69c90/2-accessible-svg-pattern-comparison.png 1600w,
			        https://res.cloudinary.com/indysigner/image/fetch/f_auto,q_80/w_2000/https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/4ab0d4e8-cc8e-4d36-8569-d698dbb69c90/2-accessible-svg-pattern-comparison.png 2000w" src="https://res.cloudinary.com/indysigner/image/fetch/f_auto,q_80/w_400/https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/4ab0d4e8-cc8e-4d36-8569-d698dbb69c90/2-accessible-svg-pattern-comparison.png" sizes="100vw" alt="fox illustration presented in the codepen example">
    
    </a>


</figure>

<div class="break-out">
 <div class="code-toolbar"><pre class=" language-svg"><code class=" language-svg"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">role</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>img<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>fox<span class="token punctuation">"</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>What does the fox say?<span class="token punctuation">"</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://upload.wikimedia.org/wikipedia/commons/3/39/Toicon-icon-fandom-howl.svg<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
</code></pre></div>
</div>

<h3 id="pattern-3-img-role-img-aria-label-words">Pattern #3: <code>&lt;img&gt;</code> + <code>role="img"</code> + <code>aria-label="[words]"</code></h3>

<figure class="
  
  
  ">
  
    <a href="https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/2248286f-d55a-4d49-967f-76a3c153a7c5/3-accessible-svg-pattern-comparison.png">
    
    <img loading="lazy" decoding="async" importance="low" width="800" height="613" srcset="https://res.cloudinary.com/indysigner/image/fetch/f_auto,q_80/w_400/https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/2248286f-d55a-4d49-967f-76a3c153a7c5/3-accessible-svg-pattern-comparison.png 400w,
			        https://res.cloudinary.com/indysigner/image/fetch/f_auto,q_80/w_800/https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/2248286f-d55a-4d49-967f-76a3c153a7c5/3-accessible-svg-pattern-comparison.png 800w,
			        https://res.cloudinary.com/indysigner/image/fetch/f_auto,q_80/w_1200/https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/2248286f-d55a-4d49-967f-76a3c153a7c5/3-accessible-svg-pattern-comparison.png 1200w,
			        https://res.cloudinary.com/indysigner/image/fetch/f_auto,q_80/w_1600/https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/2248286f-d55a-4d49-967f-76a3c153a7c5/3-accessible-svg-pattern-comparison.png 1600w,
			        https://res.cloudinary.com/indysigner/image/fetch/f_auto,q_80/w_2000/https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/2248286f-d55a-4d49-967f-76a3c153a7c5/3-accessible-svg-pattern-comparison.png 2000w" src="https://res.cloudinary.com/indysigner/image/fetch/f_auto,q_80/w_400/https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/2248286f-d55a-4d49-967f-76a3c153a7c5/3-accessible-svg-pattern-comparison.png" sizes="100vw" alt="fox illustration presented in the codepen example">
    
    </a>


</figure>

<div class="break-out">
 <div class="code-toolbar"><pre class=" language-svg"><code class=" language-svg"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">role</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>img<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>fox<span class="token punctuation">"</span></span> <span class="token attr-name">aria-label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>What does the fox say?<span class="token punctuation">"</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://upload.wikimedia.org/wikipedia/commons/3/39/Toicon-icon-fandom-howl.svg<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
</code></pre></div>
</div>

<h3 id="pattern-4-img-role-img-aria-labelledby-id">Pattern #4: <code>&lt;img&gt;</code> + <code>role="img"</code> + <code>aria-labelledby="[ID]"</code></h3>

<figure class="
  
  
  ">
  
    <a href="https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/8dbe384a-56c6-4577-bc9b-f587b8c05663/4-accessible-svg-pattern-comparison.png">
    
    <img loading="lazy" decoding="async" importance="low" width="800" height="613" srcset="https://res.cloudinary.com/indysigner/image/fetch/f_auto,q_80/w_400/https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/8dbe384a-56c6-4577-bc9b-f587b8c05663/4-accessible-svg-pattern-comparison.png 400w,
			        https://res.cloudinary.com/indysigner/image/fetch/f_auto,q_80/w_800/https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/8dbe384a-56c6-4577-bc9b-f587b8c05663/4-accessible-svg-pattern-comparison.png 800w,
			        https://res.cloudinary.com/indysigner/image/fetch/f_auto,q_80/w_1200/https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/8dbe384a-56c6-4577-bc9b-f587b8c05663/4-accessible-svg-pattern-comparison.png 1200w,
			        https://res.cloudinary.com/indysigner/image/fetch/f_auto,q_80/w_1600/https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/8dbe384a-56c6-4577-bc9b-f587b8c05663/4-accessible-svg-pattern-comparison.png 1600w,
			        https://res.cloudinary.com/indysigner/image/fetch/f_auto,q_80/w_2000/https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/8dbe384a-56c6-4577-bc9b-f587b8c05663/4-accessible-svg-pattern-comparison.png 2000w" src="https://res.cloudinary.com/indysigner/image/fetch/f_auto,q_80/w_400/https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/8dbe384a-56c6-4577-bc9b-f587b8c05663/4-accessible-svg-pattern-comparison.png" sizes="100vw" alt="fox illustration presented in the codepen example">
    
    </a>


</figure>

<div class="break-out">
 <div class="code-toolbar"><pre class=" language-svg"><code class=" language-svg"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>caption1<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>visually-hidden<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>What does the fox say?<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">role</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>img<span class="token punctuation">"</span></span> <span class="token attr-name">aria-labelledby</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>caption1<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>fox<span class="token punctuation">"</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://upload.wikimedia.org/wikipedia/commons/3/39/Toicon-icon-fandom-howl.svg<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
</code></pre></div>
</div>

<h2 id="basic-alternative-descriptions-using-the-svg-tag">Basic Alternative Descriptions Using The <code>&lt;svg&gt;</code> Tag</h2>

<p>The second group of four patterns utilizes the <code>&lt;svg&gt;</code> tag with an inline SVG file. Although adding the SVG code directly into the markup could potentially make the page a bit slower to load, that minor inefficiency will be offset by having more control over the visual elements or animations of your images. By adding your SVG to the HTML directly, you also have more options when it comes to providing image information to your screen reader users.</p>

<h3 id="pattern-5-svg-role-img-title">Pattern #5: <code>&lt;svg&gt;</code> + <code>role="img"</code> + <code>&lt;title&gt;</code></h3>

<figure class="
  
  
  ">
  
    <a href="https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/b1be2146-4ed3-4dd0-b8aa-88ea70112d03/5-accessible-svg-pattern-comparison.png">
    
    <img loading="lazy" decoding="async" importance="low" width="800" height="613" srcset="https://res.cloudinary.com/indysigner/image/fetch/f_auto,q_80/w_400/https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/b1be2146-4ed3-4dd0-b8aa-88ea70112d03/5-accessible-svg-pattern-comparison.png 400w,
			        https://res.cloudinary.com/indysigner/image/fetch/f_auto,q_80/w_800/https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/b1be2146-4ed3-4dd0-b8aa-88ea70112d03/5-accessible-svg-pattern-comparison.png 800w,
			        https://res.cloudinary.com/indysigner/image/fetch/f_auto,q_80/w_1200/https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/b1be2146-4ed3-4dd0-b8aa-88ea70112d03/5-accessible-svg-pattern-comparison.png 1200w,
			        https://res.cloudinary.com/indysigner/image/fetch/f_auto,q_80/w_1600/https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/b1be2146-4ed3-4dd0-b8aa-88ea70112d03/5-accessible-svg-pattern-comparison.png 1600w,
			        https://res.cloudinary.com/indysigner/image/fetch/f_auto,q_80/w_2000/https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/b1be2146-4ed3-4dd0-b8aa-88ea70112d03/5-accessible-svg-pattern-comparison.png 2000w" src="https://res.cloudinary.com/indysigner/image/fetch/f_auto,q_80/w_400/https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/b1be2146-4ed3-4dd0-b8aa-88ea70112d03/5-accessible-svg-pattern-comparison.png" sizes="100vw" alt="fox illustration presented in the codepen example">
    
    </a>


</figure>

<div class="code-toolbar"><pre class=" language-svg"><code class=" language-svg"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>svg</span> <span class="token attr-name">role</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>img<span class="token punctuation">"</span></span> <span class="token attr-name">...</span><span class="token punctuation">&gt;</span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>What does the fox say?<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
   [design code]
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>svg</span><span class="token punctuation">&gt;</span></span>
</code></pre></div>

<h3 id="pattern-6-svg-role-img-text">Pattern #6: <code>&lt;svg&gt;</code> + <code>role="img"</code> + <code>&lt;text&gt;</code></h3>

<figure class="
  
  
  ">
  
    <a href="https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/1db57e58-5d73-4fe5-b15f-23fec976b17d/6-accessible-svg-pattern-comparison.png">
    
    <img loading="lazy" decoding="async" importance="low" width="800" height="613" srcset="https://res.cloudinary.com/indysigner/image/fetch/f_auto,q_80/w_400/https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/1db57e58-5d73-4fe5-b15f-23fec976b17d/6-accessible-svg-pattern-comparison.png 400w,
			        https://res.cloudinary.com/indysigner/image/fetch/f_auto,q_80/w_800/https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/1db57e58-5d73-4fe5-b15f-23fec976b17d/6-accessible-svg-pattern-comparison.png 800w,
			        https://res.cloudinary.com/indysigner/image/fetch/f_auto,q_80/w_1200/https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/1db57e58-5d73-4fe5-b15f-23fec976b17d/6-accessible-svg-pattern-comparison.png 1200w,
			        https://res.cloudinary.com/indysigner/image/fetch/f_auto,q_80/w_1600/https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/1db57e58-5d73-4fe5-b15f-23fec976b17d/6-accessible-svg-pattern-comparison.png 1600w,
			        https://res.cloudinary.com/indysigner/image/fetch/f_auto,q_80/w_2000/https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/1db57e58-5d73-4fe5-b15f-23fec976b17d/6-accessible-svg-pattern-comparison.png 2000w" src="https://res.cloudinary.com/indysigner/image/fetch/f_auto,q_80/w_400/https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/1db57e58-5d73-4fe5-b15f-23fec976b17d/6-accessible-svg-pattern-comparison.png" sizes="100vw" alt="fox illustration presented in the codepen example">
    
    </a>


</figure>

<div class="break-out">
 <div class="code-toolbar"><pre class=" language-svg"><code class=" language-svg"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>svg</span> <span class="token attr-name">role</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>img<span class="token punctuation">"</span></span> <span class="token attr-name">...</span><span class="token punctuation">&gt;</span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>text</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>visually-hidden<span class="token punctuation">"</span></span> <span class="token attr-name">font-size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>0<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>What does the fox say?<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>text</span><span class="token punctuation">&gt;</span></span>
   [design code]
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>svg</span><span class="token punctuation">&gt;</span></span>
</code></pre></div>
</div>

<h3 id="pattern-7-svg-role-img-title-aria-describedby-id">Pattern #7: <code>&lt;svg&gt;</code> + <code>role="img"</code> + <code>&lt;title&gt;</code> + <code>aria-describedby="[ID]"</code></h3>

<figure class="
  
  
  ">
  
    <a href="https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/533e5f3a-d0b0-4e89-8642-fd355fb557f8/7-accessible-svg-pattern-comparison.png">
    
    <img loading="lazy" decoding="async" importance="low" width="800" height="613" srcset="https://res.cloudinary.com/indysigner/image/fetch/f_auto,q_80/w_400/https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/533e5f3a-d0b0-4e89-8642-fd355fb557f8/7-accessible-svg-pattern-comparison.png 400w,
			        https://res.cloudinary.com/indysigner/image/fetch/f_auto,q_80/w_800/https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/533e5f3a-d0b0-4e89-8642-fd355fb557f8/7-accessible-svg-pattern-comparison.png 800w,
			        https://res.cloudinary.com/indysigner/image/fetch/f_auto,q_80/w_1200/https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/533e5f3a-d0b0-4e89-8642-fd355fb557f8/7-accessible-svg-pattern-comparison.png 1200w,
			        https://res.cloudinary.com/indysigner/image/fetch/f_auto,q_80/w_1600/https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/533e5f3a-d0b0-4e89-8642-fd355fb557f8/7-accessible-svg-pattern-comparison.png 1600w,
			        https://res.cloudinary.com/indysigner/image/fetch/f_auto,q_80/w_2000/https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/533e5f3a-d0b0-4e89-8642-fd355fb557f8/7-accessible-svg-pattern-comparison.png 2000w" src="https://res.cloudinary.com/indysigner/image/fetch/f_auto,q_80/w_400/https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/533e5f3a-d0b0-4e89-8642-fd355fb557f8/7-accessible-svg-pattern-comparison.png" sizes="100vw" alt="fox illustration presented in the codepen example">
    
    </a>


</figure>

<div class="code-toolbar"><pre class=" language-svg"><code class=" language-svg"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>svg</span> <span class="token attr-name">role</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>img<span class="token punctuation">"</span></span> <span class="token attr-name">aria-describedby</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>fox7<span class="token punctuation">"</span></span> <span class="token attr-name">...</span><span class="token punctuation">&gt;</span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>fox7<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>What does the fox say?<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
   [design code]
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>svg</span><span class="token punctuation">&gt;</span></span>
</code></pre></div>

<h3 id="pattern-8-svg-role-img-title-aria-labelledby-id">Pattern #8: <code>&lt;svg&gt;</code> + <code>role="img"</code> + <code>&lt;title&gt;</code> + <code>aria-labelledby="[ID]"</code></h3>

<figure class="
  
  
  ">
  
    <a href="https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/03c90ea4-a060-4ea4-a073-0fff9f08a12c/8-accessible-svg-pattern-comparison.png">
    
    <img loading="lazy" decoding="async" importance="low" width="800" height="613" srcset="https://res.cloudinary.com/indysigner/image/fetch/f_auto,q_80/w_400/https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/03c90ea4-a060-4ea4-a073-0fff9f08a12c/8-accessible-svg-pattern-comparison.png 400w,
			        https://res.cloudinary.com/indysigner/image/fetch/f_auto,q_80/w_800/https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/03c90ea4-a060-4ea4-a073-0fff9f08a12c/8-accessible-svg-pattern-comparison.png 800w,
			        https://res.cloudinary.com/indysigner/image/fetch/f_auto,q_80/w_1200/https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/03c90ea4-a060-4ea4-a073-0fff9f08a12c/8-accessible-svg-pattern-comparison.png 1200w,
			        https://res.cloudinary.com/indysigner/image/fetch/f_auto,q_80/w_1600/https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/03c90ea4-a060-4ea4-a073-0fff9f08a12c/8-accessible-svg-pattern-comparison.png 1600w,
			        https://res.cloudinary.com/indysigner/image/fetch/f_auto,q_80/w_2000/https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/03c90ea4-a060-4ea4-a073-0fff9f08a12c/8-accessible-svg-pattern-comparison.png 2000w" src="https://res.cloudinary.com/indysigner/image/fetch/f_auto,q_80/w_400/https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/03c90ea4-a060-4ea4-a073-0fff9f08a12c/8-accessible-svg-pattern-comparison.png" sizes="100vw" alt="fox illustration presented in the codepen example">
    
    </a>


</figure>

<div class="code-toolbar"><pre class=" language-svg"><code class=" language-svg"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>svg</span> <span class="token attr-name">role</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>img<span class="token punctuation">"</span></span> <span class="token attr-name">aria-labelledby</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>fox8<span class="token punctuation">"</span></span> <span class="token attr-name">...</span><span class="token punctuation">&gt;</span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>fox8<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>What does the fox say?<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
   [design code]
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>svg</span><span class="token punctuation">&gt;</span></span>
</code></pre></div>

<h2 id="extended-alternative-descriptions-using-the-svg-tag">Extended Alternative Descriptions Using The <code>&lt;svg&gt;</code> Tag</h2>

<p>The last group of four patterns utilizes the <code>&lt;svg&gt;</code> tag with an inline SVG file, much like the second group. However, in this case, we are extending the simple alternative descriptions with additional information due to the complexity of the image.</p>

<p>This would be a good pattern choice for more complicated images that need more explanation. However, it is important to keep in mind that there are some people with disabilities — like cognitive disorders — who might benefit from having this additional image information readily available on the screen instead of buried in the SVG code.</p>

<p>Depending on the type and amount of information you need to add to your SVG, you might consider taking a different approach altogether.</p>

<h3 id="pattern-9-svg-role-img-title-text">Pattern #9: <code>&lt;svg&gt;</code> + <code>role="img"</code> + <code>&lt;title&gt;</code> + <code>&lt;text&gt;</code></h3>

<figure class="
  
  
  ">
  
    <a href="https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/b20fc272-e17f-4feb-ade6-a3b918b6d535/9-accessible-svg-pattern-comparison.png">
    
    <img loading="lazy" decoding="async" importance="low" width="800" height="613" srcset="https://res.cloudinary.com/indysigner/image/fetch/f_auto,q_80/w_400/https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/b20fc272-e17f-4feb-ade6-a3b918b6d535/9-accessible-svg-pattern-comparison.png 400w,
			        https://res.cloudinary.com/indysigner/image/fetch/f_auto,q_80/w_800/https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/b20fc272-e17f-4feb-ade6-a3b918b6d535/9-accessible-svg-pattern-comparison.png 800w,
			        https://res.cloudinary.com/indysigner/image/fetch/f_auto,q_80/w_1200/https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/b20fc272-e17f-4feb-ade6-a3b918b6d535/9-accessible-svg-pattern-comparison.png 1200w,
			        https://res.cloudinary.com/indysigner/image/fetch/f_auto,q_80/w_1600/https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/b20fc272-e17f-4feb-ade6-a3b918b6d535/9-accessible-svg-pattern-comparison.png 1600w,
			        https://res.cloudinary.com/indysigner/image/fetch/f_auto,q_80/w_2000/https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/b20fc272-e17f-4feb-ade6-a3b918b6d535/9-accessible-svg-pattern-comparison.png 2000w" src="https://res.cloudinary.com/indysigner/image/fetch/f_auto,q_80/w_400/https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/b20fc272-e17f-4feb-ade6-a3b918b6d535/9-accessible-svg-pattern-comparison.png" sizes="100vw" alt="fox illustration presented in the codepen example">
    
    </a>


</figure>

<div class="break-out">
 <div class="code-toolbar"><pre class=" language-svg"><code class=" language-svg"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>svg</span> <span class="token attr-name">role</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>img<span class="token punctuation">"</span></span> <span class="token attr-name">...</span><span class="token punctuation">&gt;</span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>What does the fox say?<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>text</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>visually-hidden<span class="token punctuation">"</span></span> <span class="token attr-name">font-size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>0<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Will we ever know?<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>text</span><span class="token punctuation">&gt;</span></span>
   [design code]
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>svg</span><span class="token punctuation">&gt;</span></span>
</code></pre></div>
</div>

<h3 id="pattern-10-svg-role-img-title-desc">Pattern #10: <code>&lt;svg&gt;</code> + <code>role="img"</code> + <code>&lt;title&gt;</code> + <code>&lt;desc&gt;</code></h3>

<figure class="
  
  
  ">
  
    <a href="https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/b62bed3c-3367-4e55-a4a1-06b350a5d239/10-accessible-svg-pattern-comparison.png">
    
    <img loading="lazy" decoding="async" importance="low" width="800" height="613" srcset="https://res.cloudinary.com/indysigner/image/fetch/f_auto,q_80/w_400/https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/b62bed3c-3367-4e55-a4a1-06b350a5d239/10-accessible-svg-pattern-comparison.png 400w,
			        https://res.cloudinary.com/indysigner/image/fetch/f_auto,q_80/w_800/https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/b62bed3c-3367-4e55-a4a1-06b350a5d239/10-accessible-svg-pattern-comparison.png 800w,
			        https://res.cloudinary.com/indysigner/image/fetch/f_auto,q_80/w_1200/https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/b62bed3c-3367-4e55-a4a1-06b350a5d239/10-accessible-svg-pattern-comparison.png 1200w,
			        https://res.cloudinary.com/indysigner/image/fetch/f_auto,q_80/w_1600/https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/b62bed3c-3367-4e55-a4a1-06b350a5d239/10-accessible-svg-pattern-comparison.png 1600w,
			        https://res.cloudinary.com/indysigner/image/fetch/f_auto,q_80/w_2000/https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/b62bed3c-3367-4e55-a4a1-06b350a5d239/10-accessible-svg-pattern-comparison.png 2000w" src="https://res.cloudinary.com/indysigner/image/fetch/f_auto,q_80/w_400/https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/b62bed3c-3367-4e55-a4a1-06b350a5d239/10-accessible-svg-pattern-comparison.png" sizes="100vw" alt="fox illustration presented in the codepen example">
    
    </a>


</figure>

<div class="code-toolbar"><pre class=" language-svg"><code class=" language-svg"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>svg</span> <span class="token attr-name">role</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>img<span class="token punctuation">"</span></span> <span class="token attr-name">...</span><span class="token punctuation">&gt;</span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>What does the fox say?<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>desc</span><span class="token punctuation">&gt;</span></span>Will we ever know?<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>desc</span><span class="token punctuation">&gt;</span></span>
   [design code]
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>svg</span><span class="token punctuation">&gt;</span></span>
</code></pre></div>

<h3 id="pattern-11-svg-role-img-title-desc-aria-labelledby-id">Pattern #11: <code>&lt;svg&gt;</code> + <code>role="img"</code> + <code>&lt;title&gt;</code> + <code>&lt;desc&gt;</code> + <code>aria-labelledby="[ID]"</code></h3>

<figure class="
  
  
  ">
  
    <a href="https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/b4061618-7397-4957-a887-bb259347df0b/11-accessible-svg-pattern-comparison.png">
    
    <img loading="lazy" decoding="async" importance="low" width="800" height="613" srcset="https://res.cloudinary.com/indysigner/image/fetch/f_auto,q_80/w_400/https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/b4061618-7397-4957-a887-bb259347df0b/11-accessible-svg-pattern-comparison.png 400w,
			        https://res.cloudinary.com/indysigner/image/fetch/f_auto,q_80/w_800/https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/b4061618-7397-4957-a887-bb259347df0b/11-accessible-svg-pattern-comparison.png 800w,
			        https://res.cloudinary.com/indysigner/image/fetch/f_auto,q_80/w_1200/https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/b4061618-7397-4957-a887-bb259347df0b/11-accessible-svg-pattern-comparison.png 1200w,
			        https://res.cloudinary.com/indysigner/image/fetch/f_auto,q_80/w_1600/https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/b4061618-7397-4957-a887-bb259347df0b/11-accessible-svg-pattern-comparison.png 1600w,
			        https://res.cloudinary.com/indysigner/image/fetch/f_auto,q_80/w_2000/https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/b4061618-7397-4957-a887-bb259347df0b/11-accessible-svg-pattern-comparison.png 2000w" src="https://res.cloudinary.com/indysigner/image/fetch/f_auto,q_80/w_400/https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/b4061618-7397-4957-a887-bb259347df0b/11-accessible-svg-pattern-comparison.png" sizes="100vw" alt="fox illustration presented in the codepen example">
    
    </a>


</figure>

<div class="code-toolbar"><pre class=" language-svg"><code class=" language-svg"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>svg</span> <span class="token attr-name">role</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>img<span class="token punctuation">"</span></span> <span class="token attr-name">aria-labelledby</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>fox11 description11<span class="token punctuation">"</span></span> <span class="token attr-name">...</span><span class="token punctuation">&gt;</span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>fox11<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>What does the fox say?<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>desc</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>description11<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Will we ever know?<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>desc</span><span class="token punctuation">&gt;</span></span>
   [design code]
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>svg</span><span class="token punctuation">&gt;</span></span>
</code></pre></div>

<h3 id="pattern-12-svg-role-img-title-desc-aria-describedby-id">Pattern #12: <code>&lt;svg&gt;</code> + <code>role="img"</code> + <code>&lt;title&gt;</code> + <code>&lt;desc&gt;</code> + <code>aria-describedby="[ID]"</code></h3>

<figure class="
  
  
  ">
  
    <a href="https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/23280c8b-5499-42b9-8628-728172b891e2/12-accessible-svg-pattern-comparison.png">
    
    <img loading="lazy" decoding="async" importance="low" width="800" height="613" srcset="https://res.cloudinary.com/indysigner/image/fetch/f_auto,q_80/w_400/https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/23280c8b-5499-42b9-8628-728172b891e2/12-accessible-svg-pattern-comparison.png 400w,
			        https://res.cloudinary.com/indysigner/image/fetch/f_auto,q_80/w_800/https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/23280c8b-5499-42b9-8628-728172b891e2/12-accessible-svg-pattern-comparison.png 800w,
			        https://res.cloudinary.com/indysigner/image/fetch/f_auto,q_80/w_1200/https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/23280c8b-5499-42b9-8628-728172b891e2/12-accessible-svg-pattern-comparison.png 1200w,
			        https://res.cloudinary.com/indysigner/image/fetch/f_auto,q_80/w_1600/https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/23280c8b-5499-42b9-8628-728172b891e2/12-accessible-svg-pattern-comparison.png 1600w,
			        https://res.cloudinary.com/indysigner/image/fetch/f_auto,q_80/w_2000/https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/23280c8b-5499-42b9-8628-728172b891e2/12-accessible-svg-pattern-comparison.png 2000w" src="https://res.cloudinary.com/indysigner/image/fetch/f_auto,q_80/w_400/https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/23280c8b-5499-42b9-8628-728172b891e2/12-accessible-svg-pattern-comparison.png" sizes="100vw" alt="fox illustration presented in the codepen example">
    
    </a>


</figure>

<div class="code-toolbar"><pre class=" language-svg"><code class=" language-svg"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>svg</span> <span class="token attr-name">role</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>img<span class="token punctuation">"</span></span> <span class="token attr-name">aria-describedby</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>fox12 description12<span class="token punctuation">"</span></span> <span class="token attr-name">...</span><span class="token punctuation">&gt;</span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>fox12<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>What does the fox say?<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>desc</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>description12<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Will we ever know?<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>desc</span><span class="token punctuation">&gt;</span></span>
   [design code]
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>svg</span><span class="token punctuation">&gt;</span></span>
</code></pre></div>

<figure class="break-out">
	<div><iframe loading="lazy" decoding="async" id="cp_embed_dyvvbKj" src="//codepen.io/smashingmag/embed/dyvvbKj?height=500&amp;theme-id=light&amp;slug-hash=dyvvbKj&amp;user=smashingmag&amp;default-tab=result" scrolling="no" frameborder="0" height="500" allowtransparency="true" allowfullscreen="true" name="CodePen Embed" title="CodePen Embed" class="cp_embed_iframe " style="width: 100%; overflow: hidden;"></iframe></div>
	<figcaption>See the full CodePen <a href="https://codepen.io/smashingmag/pen/dyvvbKj">Accessible SVG Pattern Comparison (Fox Version)</a> by <a href="https://codepen.io/cariefisher/pen/QWpjded">Carie Fisher</a>.</figcaption>
</figure>

<div class="c-promo-box sponsors sponsors__lead sponsors__external" data-audience="non-subscriber" data-remove="true" data-amount="1"></div>

<h2 id="svg-pattern-winners-and-losers">SVG Pattern Winners And Losers</h2>

<p>By running various screen readers on different combinations of operating systems and browsers, we see definite patterns emerging in the <a href="#testing-results">final results</a> table. There are some <strong>clear SVG pattern winners and losers</strong>, plus a few patterns somewhere in the middle that you could implement as long as you are aware of, and can accept their limitations. Looking over the results table, we can conclude the following:</p>

<h3 id="basic-alternative-descriptions-using-the-img-tag-group-1">Basic Alternative Descriptions Using The <code>&lt;img&gt;</code> Tag (Group 1)</h3>

<h4 id="best-in-show">Best In Show</h4>

<ul>
<li><strong>Pattern 2</strong>: <code>&lt;img&gt; + role="img"</code> + <code>alt="[words]"</code></li>
<li><strong>Pattern 3</strong>: <code>&lt;img&gt;</code> + <code>role="img"</code> + <code>aria-label="[words]"</code></li>
</ul>

<h4 id="use-caution">Use Caution</h4>

<ul>
<li><strong>Pattern 4</strong>: <code>&lt;img&gt;</code> + <code>role="img"</code> + <code>aria-labelledby="[ID]"</code></li>
</ul>

<h4 id="not-recommended">Not Recommended</h4>

<ul>
<li><strong>Pattern 1</strong>: <code>&lt;img&gt;</code> + <code>alt="[words]"</code></li>
</ul>

<h3 id="basic-alternative-descriptions-using-the-svg-tag-group-2">Basic Alternative Descriptions Using The <code>&lt;svg&gt;</code> Tag (Group 2)</h3>

<h4 id="best-in-show-1">Best In Show</h4>

<ul>
<li><strong>Pattern 5</strong>: <code>&lt;svg&gt;</code> + <code>role="img"</code> + <code>&lt;title&gt;</code></li>
<li><strong>Pattern 8</strong>: <code>&lt;svg&gt;</code> + <code>role="img"</code> + <code>&lt;title&gt;</code> + <code>aria-labelledby="[ID]"</code></li>
</ul>

<h4 id="use-caution-1">Use Caution</h4>

<ul>
<li><strong>Pattern 7</strong>: <code>&lt;svg&gt;</code> + <code>role="img"</code> + <code>&lt;title&gt;</code> + <code>aria-describedby="[ID]"</code></li>
</ul>

<h4 id="not-recommended-1">Not Recommended</h4>

<ul>
<li><strong>Pattern 6</strong>: <code>&lt;svg&gt;</code> + <code>role="img"</code> + <code>&lt;text&gt;</code></li>
</ul>

<h3 id="extended-alternative-descriptions-using-the-svg-tag-group-3">Extended Alternative Descriptions Using The <code>&lt;svg&gt;</code> Tag (Group 3)</h3>

<h4 id="best-in-show-2">Best In Show</h4>

<ul>
<li><strong>Pattern 11</strong>: <code>&lt;svg&gt;</code> + <code>role="img"</code> + <code>&lt;title&gt;</code> + <code>&lt;desc&gt;</code> + <code>aria-labelledby="[ID]"</code></li>
</ul>

<p><strong>Note</strong>: <em>While this pattern is not perfect as it repeated alternative descriptions, it did not ignore any of the elements in the testing, unlike the “use caution” patterns.</em></p>

<h3 id="use-caution-2">Use Caution</h3>

<ul>
<li><strong>Pattern 9</strong>: <code>&lt;svg&gt;</code> + <code>role="img"</code> + <code>&lt;title&gt;</code> + <code>&lt;text&gt;</code></li>
<li><strong>Pattern 10</strong>: <code>&lt;svg&gt;</code> + <code>role="img"</code> + <code>&lt;title&gt;</code> + <code>&lt;desc&gt;</code></li>
<li><strong>Pattern 12</strong>: <code>&lt;svg&gt;</code> + <code>role="img"</code> + <code>&lt;title&gt;</code> + <code>&lt;desc&gt;</code> + <code>aria-describedby="[ID]"</code></li>
</ul>

<h4 id="not-recommended-2">Not Recommended</h4>

<ul>
<li>None of the patterns in this group completely failed the tests.</li>
</ul>

<h2 id="testing-results">Testing Results</h2>

<figure class="break-out">
	<div><iframe loading="lazy" decoding="async" id="cp_embed_YzZQBwG" src="//codepen.io/smashingmag/embed/YzZQBwG?height=500&amp;theme-id=light&amp;slug-hash=YzZQBwG&amp;user=smashingmag&amp;default-tab=result" scrolling="no" frameborder="0" height="500" allowtransparency="true" allowfullscreen="true" name="CodePen Embed" title="CodePen Embed" class="cp_embed_iframe " style="width: 100%; overflow: hidden;"></iframe></div>
	<figcaption>See the Pen <a href="https://codepen.io/smashingmag/pen/YzZQBwG">Testing Results</a> by <a href="https://codepen.io/cariefisher/pen/QWpjded">Carie Fisher</a>.</figcaption>
</figure>

<h2 id="wrapping-up">Wrapping Up</h2>

<p>It is important to note that part of interpreting the results of the SVG pattern tests is understanding that creators of each screen reader have a <strong>recommended browser(s)</strong> that they fully support. This doesn’t mean you shouldn’t or couldn’t use a screen reader on a different browser, this just means that if you do, the results may not be as accurate as if you used the recommended one(s).</p>

<p>The pattern testing for this article did include some <strong>combinations of browsers and screen readers</strong> that may fall into the “fringe” category, but there are also notes on which <a href="https://dequeuniversity.com/screenreaders/">combinations of operating systems, browsers, and screen readers</a> are recommended for your own testing. The results of these tests should help you make the best SVG pattern decision possible, based on your pattern needs and constraints.</p>

<p>A reminder that before you settle on a pattern, please make sure you know the basics of <a href="https://www.smashingmagazine.com/2020/05/accessible-images/">how and when to create accessible images</a> and that you fully understand the <a href="https://www.w3.org/WAI/tutorials/images/">required alternative information needed</a> for the different image types.</p>

<p>If you need additional help deciding on which pattern to use for your environment, check out the article <a href="https://www.smashingmagazine.com/2021/03/good-better-best-untangling-complex-world-accessible-patterns/">Good, Better, Best: Untangling The Complex World Of Accessible Patterns</a> to help you navigate the tricky waters of accessible patterns. Armed with all of this information and just a little bit of effort, your SVGs are well on their way to being more inclusive to all.</p>

<p><em>Editor’s note</em>: You can learn <strong>best practices on accessibility</strong> with Carie in her upcoming online workshop on <strong><a href="https://smashingconf.com/online-workshops/workshops/carie-fisher">Accessible Front-End Patterns</a></strong> —&nbsp;with guidelines, testing tools, assistive technology and inclusive design patterns. Online, and live.</p>
