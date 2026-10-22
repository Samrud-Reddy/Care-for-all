# CareForAll website

This is the official website for the NGO CareForAll. The website is built using Node.js, Express.js, EJS, Sass, and HTML.

## Table of Contents

- [CareForAll website](#careforall-website)
  - [Table of Contents](#table-of-contents)
  - [About Us](#about-us)
  - [Installation](#installation)
  - [Configuration](#configuration)
  - [Usage](#usage)

## About Us

CareForAll is an NGO based out of the city Bangalore in India. CareForAll was founded by a teenager in the school Inventure Academy with the aim of helping children.

## Installation

To install the necessary dependencies, run the following command:

```bash
npm install
```

## Configuration

Create a `.env` file in the root directory to configure email notifications for the contact form:

```env
GMAIL=your-email@gmail.com
GMAIL_PWD=your-app-password
```

## Usage

After installing the dependencies, you can start the server using:

```bash
npm start
```

Then, open your browser and go to `http://localhost:5000`.

### Development Scripts

- **Live reload server (Nodemon):**
  ```bash
  npm run run
  ```
- **Compile Sass to CSS:**
  ```bash
  npm run build_sass
  ```
- **Watch Sass files for changes:**
  ```bash
  npm run watch_sass
  ```


