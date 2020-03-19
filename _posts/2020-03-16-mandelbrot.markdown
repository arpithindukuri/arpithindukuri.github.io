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

After hours of googling, moving .dll and header files to different folders, any browsing I finally managed to get SFML working. Now that I had C++ libraries figured out, all that was left was to actually implement the code that would calculate and render the Mandelbrot Set. Surprisingly enough, this was the easy part, and pretty soon I had the following rendered:

![image-center]({{ site.url }}{{ site.baseurl }}/assets/mandelbrot/mandelbrot%20-%202.png){: .align-center}

Cool. But whats the point of rendering a fractal if you couldnt zoom in? And so I wrote some code that would zoom in to wherever you clicked.

![image-center]({{ site.url }}{{ site.baseurl }}/assets/mandelbrot/mandelbrot%20-%203.gif){: .align-center}

Then I made another function that essentially registers mouse clicks on a certain point, simulating a user zooming in on that point, until a certain amount of zoom is reached. The program works by rendering a picture everytime a user clicks, and outputing a picture every time one is rendered. So after setting a point to zoom into, I had a folder full of pictures that I could edit together to create a video of the Mandelbrot Set!

![image-center]({{ site.url }}{{ site.baseurl }}/assets/mandelbrot/mandelbrot%20-%204.gif){: .align-center}

# What I learned

* **`std::cout` is cool and all, but it is slow.** As I calculated the colour value for each pixel, I initially used `std::cout` to print out the X and Y value of every single pixel for every single picture. This made a 5 second render take minutes to render, in some cases. If I understand correctly, this is because, when `std::cout` (or `printf`) is called, the [C++ program calls the kernel to execute the 'cout' or 'printf' function](https://stackoverflow.com/a/2443028), and [kernel calls take much longer than a multiplication or addition](http://ithare.com/infographics-operation-costs-in-cpu-clock-cycles/). Lesson learned, 'cout' line was removed, problem solved!
