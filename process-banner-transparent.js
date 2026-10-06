const { Jimp } = require('jimp');

async function processImage() {
  try {
    const imagePath = 'C:\\Users\\SHANTNU BISWAS\\.gemini\\antigravity-ide\\brain\\64577a09-4590-49c5-aa04-5a1cc6d70c27\\.user_uploaded\\media_1791304418626.png';
    console.log('Reading image from:', imagePath);
    const image = await Jimp.read(imagePath);
    
    const w = image.bitmap.width;
    const h = image.bitmap.height;
    
    // 1. Flood fill from corners to make outer black/dark area transparent.
    // The outer area is very dark (r < 40, g < 40, b < 40).
    const visited = new Set();
    const stack = [
      {x: 0, y: 0}, {x: w-1, y: 0}, {x: 0, y: h-1}, {x: w-1, y: h-1},
      {x: Math.floor(w/2), y: 0}, {x: Math.floor(w/2), y: h-1}
    ];
    
    function isDark(idx) {
      const r = image.bitmap.data[idx];
      const g = image.bitmap.data[idx+1];
      const b = image.bitmap.data[idx+2];
      const a = image.bitmap.data[idx+3];
      // Note: original image might have some slight noise, so threshold 50.
      return r < 50 && g < 50 && b < 50 && a > 0;
    }
    
    console.log('Starting flood fill for transparency...');
    while (stack.length > 0) {
      const {x, y} = stack.pop();
      if (x < 0 || x >= w || y < 0 || y >= h) continue;
      
      const key = `${x},${y}`;
      if (visited.has(key)) continue;
      visited.add(key);
      
      const idx = (w * y + x) * 4;
      if (isDark(idx)) {
        // Make transparent
        image.bitmap.data[idx+3] = 0; // alpha = 0
        
        stack.push({x: x+1, y: y});
        stack.push({x: x-1, y: y});
        stack.push({x: x, y: y+1});
        stack.push({x: x, y: y-1});
      }
    }
    
    console.log('Flood fill complete. Now changing green edge to charcoal...');
    // 2. Change the green edge to charcoal.
    image.scan(0, 0, w, h, function(x, y, idx) {
      const r = this.bitmap.data[idx + 0];
      const g = this.bitmap.data[idx + 1];
      const b = this.bitmap.data[idx + 2];
      const a = this.bitmap.data[idx + 3];
      
      // Only process non-transparent pixels
      if (a > 0) {
        // If green is dominant
        if (g > r * 1.05 && g > b * 1.05) {
          const luma = 0.299 * r + 0.587 * g + 0.114 * b;
          const newLuma = Math.min(35, luma * 0.6); 
          this.bitmap.data[idx + 0] = newLuma;
          this.bitmap.data[idx + 1] = newLuma;
          this.bitmap.data[idx + 2] = newLuma;
        }
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
