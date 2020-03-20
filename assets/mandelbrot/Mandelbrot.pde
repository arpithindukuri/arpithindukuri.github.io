

float zreal, zimag, creal, cimag;
int totalIterations = 50;
int isDivergent, iteration;

float leftBound = -2;
float rightBound = 1;
float upperBound = 1;
float lowerBound = -1;
int width = 1200, height = 800;

float pixWidth = (rightBound - leftBound)/width;
float pixHeight = (upperBound - lowerBound)/height;

int X, Y;


float pixToGraphX (int x) {
  return ((x * pixWidth) + leftBound);
}
float pixToGraphY (int y) {
  return (upperBound - (y * pixHeight));
}


void setC() {
  creal = pixToGraphX(X);
  cimag = pixToGraphY(Y);
}


void reset() {
  zreal = 0;
  zimag = 0;
}


void squareZ () {
  float r = pow(zreal, 2) - pow(zimag, 2);
  float i = 2 * zreal * zimag;

  zreal = r;
  zimag = i;
}


void addC () {
  zreal += creal;
  zimag += cimag;
}


void doMath () {
    squareZ();
    addC();
}


int checkDivergence () {

  if ( sqrt( pow(zreal, 2) + pow(zimag, 2) ) > 2 )
    return 1;

  else
    return 0;

}


void setPixelWhite() {
  set(X, Y, #FFFFFF);
}


void setPixelBlack() {
  set(X, Y, #000000);
}


void nextC() {
  if (X < width)
    X++;
  else if (X == width && Y < height) {
    X = 0;
    Y++;
  }
  else
    exit();
}


void setup() {

  size(width, height);

  for (X = 0; X < width; X++) {
    for (Y = 0; Y < height; Y++) {
      //println(iteration);
      setC();
      reset();

      while (iteration < totalIterations && checkDivergence() == 0) {
        iteration++;
        doMath();
        //println(X, Y);
      }

      if (iteration == totalIterations && checkDivergence() == 0) {
        setPixelBlack();
        iteration = 0;
      }
      else if (checkDivergence() == 1) {
        setPixelWhite();
        iteration = 0;
      }
    }
  }
}
