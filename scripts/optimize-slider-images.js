const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const dir = path.join(__dirname, '..', 'public', 'images', 'slider');
const files = fs.readdirSync(dir).filter((file) => /\.(png|jpg|jpeg|webp)$/i.test(file));

for (const file of files) {
  const input = path.join(dir, file);
  const output = path.join(dir, file.replace(/\.[^.]+$/, '.webp'));

  if (fs.existsSync(output)) {
    continue;
  }

  sharp(input)
    .webp({ quality: 68, effort: 6 })
    .toFile(output)
    .then(() => {
      console.log(`Converted ${file} -> ${path.basename(output)}`);
    })
    .catch((error) => {
      console.error(`Failed to convert ${file}: ${error.message}`);
    });
}
