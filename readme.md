# URL Shortener

A simple URL shortener service built with Node.js, Express, MongoDB, and Mongoose.

## Features

- Generate short URLs for long URLs
- Redirect to the original URL using the short URL
- Track visit history for each short URL


#routes used -> 
- /url ->act as a middleware
(Post request)- /url/ ->to generate new short url 
(GET Request) - /url/:shortid -> to redirect to the actual page 
(GET Request) - /url/analytics/:shortid -> to get the number of totalClicks and visitedHistory 

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- shortid (for generating unique short IDs)

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/url-shortener.git
cd url-shortener
