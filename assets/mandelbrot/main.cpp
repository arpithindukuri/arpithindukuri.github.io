#if 0


#include <iostream>
#include <string>
#include <SFML/Graphics.hpp>


#define WIDTH 1920
#define HEIGHT 1080
int MAXITERATIONS = 200;
#define ZOOMFACTOR 5

#define LEFT -2.370370
#define RIGHT 1.185185
#define TOP 1.0
#define BOTTOM -1.0
double LEFTBOUND = LEFT;
double RIGHTBOUND = RIGHT;
double TOPBOUND = TOP;
double BOTTOMBOUND = BOTTOM;


class COMPLEX
{
public:
	double real;
	double imag;
	int iteration;

	COMPLEX() {
		real = 0.0;
		imag = 0.0;
		iteration = 0;
	}

	void setFromPixel(int x, int y) {
		double pixelWidth = (RIGHTBOUND - LEFTBOUND) / WIDTH;
		real = (x * pixelWidth) + LEFTBOUND;
		double pixelHeight = (TOPBOUND - BOTTOMBOUND) / HEIGHT;
		imag = TOPBOUND - (y * pixelHeight);
	}

	void square() {
		double r = ((real * real) - (imag * imag));
		double i = (2 * real * imag);
		real = r;
		imag = i;
	}

	void addC(COMPLEX c) {
		real += c.real;
		imag += c.imag;
	}

	int checkDivergence() {
		double magn = sqrt((real * real) + (imag * imag));
		if (magn >= 2)
			return 1;
		else
			return 0;
	}

};




int main() {

		
	sf::RenderWindow window(sf::VideoMode(WIDTH, HEIGHT), "Click on next zoom");
	int isCalculating = 1;
	COMPLEX C;


	while (window.isOpen())
	{
		
		if (isCalculating) {
			
			sf::Image image;
			image.create(WIDTH, HEIGHT, sf::Color::White);


			for (int i = 0; i < WIDTH; i++) {
				for (int j = 0; j < HEIGHT; j++) {
					COMPLEX Z;
					C.setFromPixel(i, j);

					while (Z.iteration < MAXITERATIONS && Z.checkDivergence() == 0) {
						Z.square();
						Z.addC(C);
						Z.iteration++;
					}

					if (Z.iteration == MAXITERATIONS)
						image.setPixel(i, j, sf::Color::Black);
					else {
						int col = 255 * ((double)Z.iteration / MAXITERATIONS);
						sf::Color outside(30 + col, 5 + col, 40 + col, 255);
						image.setPixel(i, j, outside);
					}
				}
			}

			if (!image.saveToFile("result.png"))
				return -1;

			isCalculating = 0;
		}
		
		
		sf::Texture texture;
		if (!texture.loadFromFile("result.png"))
		{
			std::cout << "Error Loading Image";
		}
		sf::Sprite sprite;
		sprite.setTexture(texture);

		
		sf::Event event;
		while (window.pollEvent(event))
		{
			if (event.type == sf::Event::Closed) {
				window.close();
				exit(0);
			}
			if (event.type == sf::Event::MouseButtonPressed) {
				int x = event.mouseButton.x;
				int y = event.mouseButton.y;
				
				COMPLEX temp;
				temp.setFromPixel(x, y);
				
				double left = LEFTBOUND / ZOOMFACTOR;
				double right = RIGHTBOUND / ZOOMFACTOR;
				double top = TOPBOUND / ZOOMFACTOR;
				double bottom = BOTTOMBOUND / ZOOMFACTOR;
				LEFTBOUND = left - (((left + right) / 2) - temp.real);
				RIGHTBOUND = right - (((left + right) / 2) - temp.real);
				TOPBOUND = top + (temp.imag - ((top + bottom) / 2));
				BOTTOMBOUND = bottom + (temp.imag - ((top + bottom) / 2));

				MAXITERATIONS += 10;
				isCalculating = 1;
			}
		}

		window.draw(sprite);
		window.display();

	}

}



#endif