---
layout: single
title:  "Digit Recognition"
date:   2020-03-29 17:30:39 -0600
categories: projects

header:
  overlay_image: /assets/digit-recognition/digit-recognition-header.png
  overlay_filter: 0.5 # same as adding an opacity of 0.5 to a black background
excerpt: "Why was 6 afraid of 7?  \n
(insert a better number-related joke here)"
---

# Current Progress 

How far am I? Not very...

* Mar 29 2020 - I am currently figuring out the MNIST data file format (.idx3-ubyte... what??), and how I can get the images into Processing. 

# How it Started

On one of my late night romps through the interbugs, I stumbled upon [this video](https://www.youtube.com/watch?v=JeVDjExBf7Y) by Code Bullet. I was intrigued and thought to myself, "I can do that!" So I did a little more reading on Neural Networks, and watched [this series on neural networks](https://www.youtube.com/watch?v=aircAruvnKk&list=PLZHQObOWTQDNU6R1_67000Dx_ZCJB-3pi) by 3Blue1Brown.

I realized that this topic might have been a little outside the scope of my ability, but I figured I knew enough about the subject to implement my own version of a neural network from scratch, at least how I understand it. 

I think this method of learning by doing from the ground up will be more beneficial to me than learning all the underlying math and theory first. This way, as I face problems and bottlenecks in my algorithm, I can figure out how to solve those and, in doing so, I might either reach a typical implementation of a neural net or I might find a different and new implementation of a neural net.

That being said, perhaps the source of my confidence is actually my lack of knowledge of the subject. This is probably where I sit on the Dunning-Kruger curve:

![image-center]({{ site.url }}{{ site.baseurl }}/assets/digit-recognition/dunning-kruger.jpg){: .align-center}

Anyway, this will defenitely be a great learning experience for me, so as far as I'm concerned, that's a win!

# How it Went Down

I decided to use processing as a starting point for a few different reasons. The IDE is so easy to use, with nothing to setup. It's all plug and play. Processing offers many tools and graphical utilities out of the box, and this will help me visualize what I am doing nice and easily.

I am using the [MNIST database of handwritten digits](http://yann.lecun.com/exdb/mnist/). It contains around 60,000 training examples and around 10,000 test images, all labeled and with ample documentation available online.

This [very helpful post](https://discourse.processing.org/t/how-do-i-import-an-idx3-ubyte-file/3577/3) by Tsskyx at [discourse.processing.org](discourse.processing.org) allowed me to import the training set and labels into Processing quite painlessly.
