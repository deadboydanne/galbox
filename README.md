Galbox
======

Usage
-----

Galbox is at the moment in a early stage in development. It has all the basic functions where you may use it as a gallery and add the function of a lightbox with the ability to act as a slideshow.
You can easily select the images you wath to add in the gallery, and I have ncluded a sample in this repository where you can see how it works with simple code.

installation
------------

Before we begin, make sure you add the jquery inte your head tag before the scripts. Here is a line you may add to do this:

```
  <script src="http://code.jquery.com/jquery-1.11.0.min.js"></script>
```

Download the files from github, then you include `lightbox.js`, `gallery.js`, `lightbox.css`, and `gallery.css` into your header.
here is an example on how you include the files:

```
  <link rel="stylesheet" type="text/css" href="lightbox/lightbox.css">
  <link rel="stylesheet" type="text/css" href="gallery/gallery.css">
  <script src="lightbox/lightbox.js"></script>
  <script src="gallery/gallery.js"></script>
```

once you have included the files you create a div with an id named "gallery" and simply add a `<img>` tag in your div and add `class="galleryImg"` in it and make it link to an image.
Example:

```
  <div id="gallery">
    <img class="galleryImg" src="testImages/Partille(1).jpg" alt=""/>
    <img class="galleryImg" src="testImages/Partille(2).jpg" alt=""/>
  </div>
```

Now once you open the webpage the gallery should appear and work with ease.

Configuration
-------------

If you do not want to have the function of a lightbox in the gallery you may easily remove it. Simply open `gallery.js` and find the variable `withLightbox` and set it to false. When this is done you don't need to include `lightbox.css` and `lightbox.js` into your page.

Future changes
--------------

In the future I plan to add the ability to view the lightbox in fullscreen,make the gallery search a selected folder for images to add them in the gallery to easier add new images, make small tweaks to make the lightbox and gallery to work better together.
Should you find something else I could change please let me know.

Copyright © nds_se@hotmail.com
