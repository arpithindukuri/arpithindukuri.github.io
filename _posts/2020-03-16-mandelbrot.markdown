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

![image-center]({{ site.url }}{{ site.baseurl }}/assets/mandelbrot/mandelbrot%20-%201.PNG){: .align-center}

Sweet. I had the math down. The next step was to implement this in a language that wasn't Processing. I had just finished a course where I learned C++, so that was the language I decided to use. I chose to use Visual Studio as my IDE, and after doing some research, I decided to use [SFML](https://www.sfml-dev.org/) as my graphics library. This is where my problems started. C++ libraries were the cause of much misery and pain.

After hours of googling, moving .dll and header files to different folders, any browsing I finally managed to get SFML working. Now that I had C++ libraries figured out, all that was left was to actually implement the code that would calculate and render the Mandelbrot Set. Surprisingly enough, this was the easy part, and pretty soon I had the following rendered:

![image-center]({{ site.url }}{{ site.baseurl }}/assets/mandelbrot/mandelbrot%20-%202.png){: .align-center}

Cool. But whats the point of rendering a fractal if you couldnt zoom in?? And so I implemented some code that would zoom in to wherever you clicked. 

![image-center]({{ site.url }}{{ site.baseurl }}/assets/mandelbrot/mandelbrot%20-%203.gif){: .align-center}
