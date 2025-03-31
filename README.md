<p align="center"><img height="150px" src="https://github.com/user-attachments/assets/fbd0f0b5-de0a-4a06-a7c5-540e0dcd51e2"></p>

# Overview

A [webring](https://en.wikipedia.org/wiki/Webring) for SYDE and BME students from the University of Waterloo. Open to all current and past students, as well as faculty. Webrings were a popular way to link websites in the '90s, meant to increase traffic and discoverability, especially among personal/amateur websites. This webring links sites in a circular way, providing links on each site to traverse to the next and previous site.

Submit a pull request to join, ([instructions below](https://github.com/shaan-s/syde-bme-webring/tree/main#how-do-i-join)) and view the live site at http://sydeb.me/!

## How do I join?

Please add yourself by doing the following:
1. You must add the webring widget ([template below](https://github.com/shaan-s/syde-bme-webring/edit/main/README.md#webring-template)) to your website (usually the footer). Feel free to adjust the styling to match your site. Alternatively, you can provide a hyperlink to the webring somewhere on your site.
2. Create a [fork](https://github.com/shaan-s/syde-bme-webring/fork) of this repo.
3. In it, add your information to `index.html` at the bottom of `siteData`. Follow the template and provide your name, year, program (SYDE or BME) and full URL.
4. Open a [pull request](https://github.com/shaan-s/syde-bme-webring/pulls) on this repository

## Webring template

It's reccomend to adjust the styling based on your site, but feel free to start with this:

```html
<div style="line-height: 1em; display: flex;align-items: center; gap: 12px;">
	<a href="https://sydeb.me/#[your site URL]?nav=prev" style="text-decoration:none;">&lt;</a>
	<a href="https://sydeb.me" target="_blank">
	  <img src="https://sydeb.me/icons/black.svg" alt="SYDE/BME Webring" style="width: 24px;">
	</a>
	<a href="https://sydeb.me/#[your site URL]?nav=next" style="text-decoration:none;">&gt;</a>
</div>
```
Replace [your site URL] with your website.

This example uses the black icon, but we also have a white and blue version at `https://www.sydeb.me/icons/white.svg` and `https://www.sydeb.me/icons/blue.svg`. As well, you can edit the svg and change the colour to whatever you prefer.

<p align="center"><img height="50px" src="https://github.com/user-attachments/assets/ce3f431c-bae3-4ae5-a9ce-d76a1772158a"></p>


## Credits
Inspired by the [CS](https://cs.uwatering.com/), [ECE](https://github.com/roozbehali/ece_webring), and [SE](https://se-webring.xyz/) webrings!

Developed by [Shaan](https://github.com/shaan-s) and [Ahyan](https://github.com/ahkabir48); design help from [Daphne](https://daphnelai.com/).
