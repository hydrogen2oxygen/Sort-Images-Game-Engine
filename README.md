# Sort-Images-Game-Engine
A "game engine" written with JQuery which enables a simple sorting game with drag and drop for different images.

## Usage
Sortable JQuery UI elements need to be defined first. See the example.html how the engine is implemented.
You don't need images. You could just insert sortable div elements with text.

But if you insert images, you should specify inside the CSS the height of the image (example: height: 100px;) for optimal display of the sortable elements. This works best if all images has the same size.

### Game Loop
**(Todo)**

  1) (welcome text is displayed) ... Type in your name (if in PHP mode).

  2) Press start (the seconds are displayed somewhere)

  3) Try to sort the elements as fast as possible

  4) If 100% is reached the game stops and the result is stored in the data.xml on the server (PHP must be enabled for this, else choose the JS only mode).

  5) If the max time is reached the game stops and the result is stored.

  6) Your result and your position in the Top10 is displayed. If you are in JS mode instead in PHP mode, then you get only your statistics (time and points).

  7) Try again!