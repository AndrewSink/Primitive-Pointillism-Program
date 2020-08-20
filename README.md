# Primitive-Pointillism-Program
A program that converts an image into a collection of primitive shapes, created in p5js! 

Try it online here: https://editor.p5js.org/Andrew_Sink/present/ys1Busx56

![](https://user-images.githubusercontent.com/46334898/90784445-46abe700-e2cf-11ea-9369-e9fbb7524ec1.png)

This program will generate a pointillism portrait using randomly selected points on an uploaded image and generating primitive shape at those points. The types of primitives can be controlled (square, triangle, circle, or random), and you can selected more than one at a time.

The 'random' selection will add a random int. from a small range to the generated primitive, creating irregular shapes.

From the interface, you can also add a grayscale filter and export the image as a .PNG.

**Interface Features**

Speed: Varies the speed of the primitive generation (tied to FPS, defaults to 60, range from 24-60)

Size: Controls the size of the generated primitives. 

Transparency: Controls the transparency of the generated primitives. Higher transparency leads to a softer looking picture, lower transparency (or opaque) has a solid appearance

Choose file: Allows user to input a file. The canvas will automatically resize to the size of the imported picture. All files are rescaled to 500 px width upon input, with height kept relative to scale. 

Reset / Resize: Clears canvas


**Timelapse of program running:**

![](https://user-images.githubusercontent.com/46334898/90784810-a73b2400-e2cf-11ea-907b-89a23bb48364.gif)

The initial code was inspired by Daniel Shiffman's [Pointillism](https://processing.org/examples/pointillism.html) Processing program, and interface was inspired by Michael Fogleman's [Primitive](https://github.com/fogleman/primitive).

Feel free to reach out to me [on Twitter](https://twitter.com/AndrewASink) with any questions!
