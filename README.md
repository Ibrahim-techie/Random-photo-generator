# Random Image Generator

A simple web application that displays a random image every time the user clicks a button. The project uses the Picsum Photos API and is built using HTML, Bootstrap, and JavaScript.

## Features

- Generate a random image with one click
- Clean and responsive Bootstrap UI
- Uses the Fetch API with async/await
- Basic error handling using try...catch

## Technologies Used

- HTML5
- Bootstrap 5
- JavaScript (ES6)
- Picsum Photos API

## Project Structure

```
Random-Image-Generator/
│── index.html
│── script.js
│── README.md
```

## How to Run

1. Clone the repository.

```bash
git clone https://github.com/your-username/random-image-generator.git
```

2. Open the project folder.

3. Open `index.html` in your browser.

No additional setup is required.

## How It Works

- When the **Generate Image** button is clicked, JavaScript sends a request to the Picsum Photos API.
- The API returns a random image.
- The image URL is assigned to the `src` attribute of the `<img>` element, updating the displayed image.

## API Used

**Picsum Photos**

https://picsum.photos/

Example endpoint:

```
https://picsum.photos/200
```

## Learning Outcomes

This project helped me understand:

- DOM Manipulation
- Event Listeners
- Fetch API
- Async/Await
- Error Handling with try...catch
- Updating HTML elements using JavaScript



## Author

**Ibrahim Hatodwala**

