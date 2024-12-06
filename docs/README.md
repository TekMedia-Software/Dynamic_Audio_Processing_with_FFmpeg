# Dynamic Audio Processing with FFmpeg

 A graphical user interface (GUI) tool to process or manipulate audio files using FFmpeg commands. The goal is to allow users to fine-tune their audio using gate thresholds, equalization (EQ), compression, and volume control. 
   
This tool is ideal for scenarios where uneven audio levels affect the listening experience, providing a more balanced output.
Eg:
In Stage Drama Recordings: Enhances clarity when one actor's voice is softer than others on stage.
In Podcast Editing: Balances audio when a guest speaks significantly quieter than others, ensuring consistent volume levels.
In Whispered Audio: Amplifies whispered speech while minimizing background noise, making it easier to understand.


## Steps

 1. Clone the repository and move inside the directory:
 
        git clone https://github.com/TekMedia-Software/Dynamic_Audio_Processing_with_FFmpeg.git
        
 
 2. Move inside the directory:

        cd Dynamic_Audio_Processing_with_FFmpeg
             
 3. Install required node.js packages

     If npm is not installed, you can install it using:

        sudo apt install npm
	
     then,
	    Express for building the web server
	    Multer for handling file uploads

        npm init -y

        npm install express multer
 
 4. Check if FFmpeg is installed correctly

        ffmpeg -version
      
     If FFmpeg is not installed, you can install it using:

        sudo apt update && sudo apt install ffmpeg
     or download it from FFmpeg's official website.
         

 5. Run the project:

        node index.js
     and open http://localhost:3000 in browser.

## Usage
 1. Launch the application using the command above.
 2. Run the code using the command above and open the web browser to visu
 3. Select your audio file to process using 'choose file' button.
 4. Customise the parameters like Noise threshold, Noise gate opening and closing delay, EQ settings, Removing low and high frequencies, Volume cutoff level ,Compression Strength and Volume multiplier.
 5. Click "Process Audio" button.
 6. The processed audio according to the above customisation can be played in the UI and will be saved in the uploads folder of the project also.

### UI Parameters Usage Descriptions:

**Noise Threshold (0.01-1.0)**:
  
  Description: Adjusts how much noise to eliminate. A lower value removes less noise, while a higher value eliminates more background sound.


**Noise Gate Opening Delay (ms)**:

Description: Time it takes for the gate to open when sound reaches the threshold. This setting can help prevent sudden bursts of sound from being allowed through immediately.


**Noise Gate Closing Delay (ms)**:


Description: Time it takes for the gate to close after the sound falls below the threshold. This setting ensures smoother transitions, avoiding abrupt cut-offs of sound.


**Remove Low Frequencies (Hz)**:

Description: Removes low frequencies below this value. Use this to eliminate unwanted bass or rumble that can muddy the audio.


**Remove High Frequencies (Hz)**:

Description: Removes high frequencies above this value. This can be helpful in reducing hiss or sibilance in the audio.


**EQ Settings (example: c0 f=250 w=100 g=2 t=1)**:

Description: Customizable frequency boosts or cuts for fine-tuning specific ranges. Each setting consists of a center frequency (f), width (w), gain (g), and type (t) for precise control over the audio spectrum.


**Volume Cutoff Level (0-1.0)**:

Description: Sets the level at which compression starts. Sounds below this level will not be affected by the compression.


**Compression Strength (1-100)**:

Description: Controls how strongly the audio is compressed. A higher value indicates more aggressive compression, which can help to even out volume levels.


**Volume Multiplier**:

Description: Increases or decreases the overall volume of the audio. This setting is useful for balancing the final output to match desired playback levels.

        
## Contact 

For any questions or feedback, please reach out:

   Dhanya Saminathan - [dhasam@tekmediasoft.net](mailto:dhasam@tekmediasoft.net)

## Acknowledgements

- **Inspiration**: Credit to https://img.ly/blog/ultimate-guide-to-ffmpeg/#audio-manipulation  for inspiring this project.

## Contributing

We welcome contributions! Please see the [CONTRIBUTING.md](CONTRIBUTING.md) file for detailed guidelines on how to contribute to this project.

## License

This project is licensed under a proprietary license. All rights reserved. No part of this software may be used, reproduced, modified, or distributed without prior written permission from TekMedia Software Services.
