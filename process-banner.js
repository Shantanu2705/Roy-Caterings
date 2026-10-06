const { Jimp } = require('jimp');

async function processImage() {
  try {
    const imagePath = 'C:\\Users\\SHANTNU BISWAS\\.gemini\\antigravity-ide\\brain\\64577a09-4590-49c5-aa04-5a1cc6d70c27\\.user_uploaded\\media_1791304418626.png';
    console.log('Reading image from:', imagePath);
    const image = await Jimp.read(imagePath);
    console.log('Image read successfully. Size:', image.bitmap.width, 'x', image.bitmap.height);
    
    // Scan and replace green pixels
    image.scan(0, 0, image.bitmap.width, image.bitmap.height, function(x, y, idx) {
      const r = this.bitmap.data[idx + 0];
      const g = this.bitmap.data[idx + 1];
      const b = this.bitmap.data[idx + 2];
      
      // We want to turn green into dark charcoal (#1A1A1A or similar).
      // A pixel is distinctly green if G is greater than R and B.
      // To avoid grey/white/black being caught, we check if G is significantly larger.
      // e.g. G > R * 1.05 and G > B * 1.05
      
      if (g > r * 1.05 && g > b * 1.05) {
        // Map its luminosity to a dark charcoal
        const luma = 0.299 * r + 0.587 * g + 0.114 * b;
        
        // We want it to be darker than the footer (#2A2A2A = 42, 42, 42)
        // Let's cap luma at 30 and scale down.
        const newLuma = Math.min(35, luma * 0.6); 
        
        this.bitmap.data[idx + 0] = newLuma; // R
        this.bitmap.data[idx + 1] = newLuma; // G
        this.bitmap.data[idx + 2] = newLuma; // B
      }
    });
    
    const outputPath = 'public/images/digital-dictionary-banner.png';
    await image.write(outputPath);
    console.log('Image processed and saved to:', outputPath);
  } catch (err) {
    console.error('Error processing image:', err);
  }
}

processImage();
