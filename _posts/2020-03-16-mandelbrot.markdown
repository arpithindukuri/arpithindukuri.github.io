---
layout: single
title:  "Mandelbrot Set in C++"
date:   2020-03-16 17:30:39 -0600
categories: projects

header:
  overlay_image: /assets/mandelbrot/mandelbrot-header.png
  overlay_filter: 0.5 # same as adding an opacity of 0.5 to a black background
excerpt: "Is it inefficient code? Maybe.  \n
Is there bad practice? Probably.  \n
Is it cool? Heck yea."
---

It was winter break.

Finals season had just ended.

Fueled by the residual motivation and general fear from the last semester, and inspired by [this video](https://www.youtube.com/watch?v=NGMRB4O922I) by Numberphile, I got to work on implementing my own version of the Mandelbrot Set. This is that story.

The first step was to see if I had an understanding of the mandelbrot set, and the math behind it, in the first place. I didn't want to worry about the graphics libraries, or about making legible code. I just wanted to get something working, so I used [Processing](https://processing.org/). After writing out my code in 20 minutes, and going through the obligatory 40 minute bug checking (only to find out I switched a negative sign, or something equally trivial,) I had the following picture rendered on my screen:

<figure>
	<a href="https://github.com/arpithindukuri/arpithindukuri.github.io/blob/master/assets/mandelbrot/mandelbrot%20-%201.PNG"><img src="https://github.com/arpithindukuri/arpithindukuri.github.io/blob/master/assets/mandelbrot/mandelbrot%20-%201.PNG"></a>
</figure>
