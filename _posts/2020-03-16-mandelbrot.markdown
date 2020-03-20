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

# How it went down

It was reading week. And we all know that nothing productive happens during reading week, but I was determined to change that.

Fueled by the residual motivation and general fear of midterms from the week before, and inspired by [this video](https://www.youtube.com/watch?v=NGMRB4O922I) by Numberphile, I got to work on implementing my own version of the Mandelbrot Set.

The first step was to see if I had an understanding of the mandelbrot set, and the math behind it, in the first place. I didn't want to worry about the graphics libraries, or about making legible code. I just wanted to get something working, so I used [Processing](https://processing.org/). After writing out my code in 20 minutes, and going through the obligatory 40 minute bug checking (only to find out I switched a negative sign, or something equally trivial,) I had the following picture rendered on my screen:

![image-center]({{ site.url }}{{ site.baseurl }}/assets/mandelbrot/mandelbrot%20-%201.PNG){: .align-center}

Sweet. I had the math down. The next step was to implement this in a language that wasn't Processing. I had just finished a course where I learned C++, so that was the language I decided to use. I chose to use Visual Studio as my IDE, and after doing some research, I decided to use [SFML](https://www.sfml-dev.org/) as my graphics library. This is where my problems started. C++ libraries were the cause of much misery and pain.

After hours of googling, moving .dll and header files to different folders, and browsing stack exchange, I finally managed to get SFML working. Now that I had C++ libraries (kind of) figured out, all that was left was to actually implement the code that would calculate and render the Mandelbrot Set. Surprisingly enough, this was the easy part, and pretty soon I had the following rendered in C++:

![image-center]({{ site.url }}{{ site.baseurl }}/assets/mandelbrot/mandelbrot%20-%202.png){: .align-center}

Cool. But whats the point of rendering a fractal if you couldnt zoom in? And so I wrote some code that would zoom in to wherever you clicked.

![image-center]({{ site.url }}{{ site.baseurl }}/assets/mandelbrot/mandelbrot%20-%203.gif){: .align-center}

Then I made another function that essentially registers mouse clicks on a certain point, simulating a user zooming in on that point, until a certain amount of zoom is reached. The program works by rendering a picture everytime a user clicks, and outputing the picture as a PNG every time one is rendered. So after setting a point to zoom into and running the program for 20 minutes, I had a folder full of pictures, that I could edit together to create this video of the Mandelbrot Set!

![image-center]({{ site.url }}{{ site.baseurl }}/assets/mandelbrot/mandelbrot%20-%204.gif){: .align-center}

# What I learned

* **`std::cout` is cool and all, but it is slow.** As I calculated the colour value for each pixel, I initially used `std::cout` to print out the X and Y value of every single pixel for every single picture. This made a 5 second render take minutes to render, in some cases. If I understand correctly, this is because, when `std::cout` (or `printf`) is called, the [C++ program calls the kernel to execute the 'cout' or 'printf' function](https://stackoverflow.com/a/2443028), and [kernel calls take much longer than a multiplication or addition](http://ithare.com/infographics-operation-costs-in-cpu-clock-cycles/). Lesson learned, 'cout' line was removed, problem solved!

* **Working with C++ Libraries kinda sucks.** The prevailing theory is that I had a bad time primarily because of my incompetence, which may very well be true. Or maybe C++ is just so flexible and powerful that I wasn't able to wrap my head around all the hoops I needed to jump through just to get a graphics library working. Or maybe it would have been easier to do this using a text editor and [Cygwin](https://www.cygwin.com/). Either way, I need to learn more about libraries, and read up more on my IDE's features, which leads my to my next point.

* **I dont think Eclipse is a good choice for C++.** When I initially did this project back in November 2019, I used Visual Studio as my IDE. I followed the instructions on the SFML website to install the SFLM graphics library on Visual Studio, and (After a couple painstaking tries) everything just worked. Eventually I switched to Linux and then back to to Windows 10, where I started usign Eclipse IDE, (since 2 of my current classes are in Java.) I installed Eclipse for C/C++, and long story short, I could not get my code and the libraries to work at all, so all the above pictures are ones I had rendered months ago, while I was using Visual Studio.

# If I had to do it again, I would...

* **Write better code!** Part of the reason I didn't feature my code here is because its ugly. There was so much that was hard-coded, some bits are unnecessarily over-complicated, and parts of my code seem like they were meant to be temporary patches, but I never got around to properly implementing them. That being said, if you would still like to look at my code for the mandelbrot set, here is [the Processing version](https://github.com/arpithindukuri/arpithindukuri.github.io/blob/master/assets/mandelbrot/Mandelbrot.pde), and here is [the C++ version](https://github.com/arpithindukuri/arpithindukuri.github.io/blob/master/assets/mandelbrot/main.cpp).

* **Perhaps use multi-threading** to speed up the process. For example, if I were to render the above video again, instead of rendering each frame 1 at a time, I could render 8, or 16 at a time.

* **More features!!!** Maybe recieve the point to zoom into as an argument. If I can figure out multi-threading and make other optimizations, I might be able to make this render in real time. 
