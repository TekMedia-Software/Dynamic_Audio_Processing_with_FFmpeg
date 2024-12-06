const express = require('express');
const multer = require('multer');
const { exec } = require('child_process');
const path = require('path');
const fs = require('fs');

const app = express();
const port = 3000;

// Middleware to parse incoming JSON and URL-encoded requests
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files (CSS, JS, HTML)
app.use(express.static('public'));

// Configure file storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)); // Ensure a unique filename
  }
});
const upload = multer({ storage });

if (fs.existsSync('uploads')) {
  fs.rmSync('uploads', { recursive: true, force: true }); // Recursively delete the folder
}

// Ensure 'uploads' directory exists
if (!fs.existsSync('uploads')) {
  fs.mkdirSync('uploads');
}

// Serve the index.html file at the root route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

// Endpoint for uploading audio and processing it with dynamic parameters
app.post('/process-audio', upload.single('audio'), (req, res) => {
  console.log("Received request body:", req.body); // Log the request body to check for missing parameters

  const filePath = req.file.path;
  const outputPath = 'uploads/processed_' + Date.now() + '.wav';

  const {
    frequency,
    width,
    boost,
    gateThreshold,
    gateAttack,
    gateRelease,
    highpassFreq,
    lowpassFreq,
    compressorThreshold,
    compressorRatio,
    volume
  } = req.body;

  const selectedOption = req.body['equalizerOption'];

  // Check if all required parameters are present
  if (!frequency || !width || !boost || !gateThreshold || !gateAttack || !gateRelease || !highpassFreq || !lowpassFreq || !compressorThreshold || !compressorRatio || !volume) {
    return res.status(400).send("Missing required parameters");
  }

  console.log("Processing with parameters:", req.body); // Log the parameters being used for processing

  // Build the EQ filter string based on the selected option
  let eqSettings = '';

  if (selectedOption === 'option1') {
    eqSettings = `anequalizer=c0 f=${frequency} w=${width} g=${boost}`;
  } else if (selectedOption === 'option2') {
    eqSettings = "anequalizer=c0 f=250 w=100 g=2|c0 f=700 w=500 g=-5|c0 f=2000 w=1000 g=2";
  } else if (selectedOption === 'option3') {
    eqSettings = "anequalizer=c0 f=250 w=100 g=2|c0 f=700 w=500 g=-5|c0 f=2000 w=1000 g=2";
  }

  // Construct the FFmpeg filter command
  const ffmpegCommand = `ffmpeg -i ${filePath} \
    -filter_complex "agate=threshold=${gateThreshold}:attack=${gateAttack}:release=${gateRelease}:makeup=1, \
    highpass=f=${highpassFreq}, lowpass=f=${lowpassFreq}, \
    ${eqSettings}, \
    acompressor=threshold=${compressorThreshold}:ratio=${compressorRatio}:makeup=6, \
    volume=${volume}" \
    ${outputPath}`;

  console.log("Executing FFmpeg Command:", ffmpegCommand); // Log the FFmpeg command for debugging

  // Execute FFmpeg command to process the audio
  exec(ffmpegCommand, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error executing FFmpeg: ${error.message}`);
      console.error("stderr:", stderr); // Log stderr to get detailed FFmpeg error output
      return res.status(500).send('Error processing audio');
    }
    console.log("FFmpeg stdout:", stdout); // Log the standard output from FFmpeg
    res.download(outputPath); // Send the processed audio back to the client
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

