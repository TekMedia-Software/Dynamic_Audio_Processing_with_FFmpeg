# Installation Guide

This document provides step-by-step instructions for installing the Dynamic Audio Processing with FFmpeg project.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- FFMPEG:
    FFmpeg >= 5.0 installed
 	
- Node.js Packages:
    1. Express for building the web server
    2. Multer for handling file uploads
	 
## Installation Steps

1. **Clone the repository**:

        git clone https://github.com/TekMedia-Software/Dynamic_Audio_Processing_with_FFmpeg.git
	
2. **Navigate to the project directory**:

        cd Dynamic_Audio_Processing_with_FFmpeg
       
3. **Install dependencies**:
   
- For node.js packages:
    	
    If npm is not installed, you can install it using:

        sudo apt install npm
	then,

        npm init -y

        npm install express multer

- Check if FFmpeg is installed correctly

        ffmpeg -version

	If FFmpeg is not installed, you can install it using:

        sudo apt update && sudo apt install ffmpeg


## Running the Project

To run the project after installation, use the following command:
        '''
        node index.js
        '''
and open http://localhost:3000 in browser.

## Contact

If you encounter any issues or have questions regarding the installation, please contact:

 - Dhanya Saminathan - [dhasam@tekmediasoft.net](mailto:dhasam@tekmediasoft.net)

