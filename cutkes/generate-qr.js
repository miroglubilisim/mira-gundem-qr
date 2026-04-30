const QRCodeStyling = require('qr-code-styling/lib/qr-code-styling.common.js').QRCodeStyling;
const { createCanvas, loadImage, GlobalFonts } = require('@napi-rs/canvas');
const fs = require('fs');
const path = require('path');

// Provide canvas/image creation for Node.js
const nodeCanvas = {
  createCanvas: (w, h) => createCanvas(w, h),
  createImage: () => {
    // Return a mock Image that loads from file
    const img = { onload: null, onerror: null, src: '' };
    Object.defineProperty(img, 'src', {
      set: function(val) {
        this._src = val;
        // If it's a data URL or file path, load it
        if (val) {
          loadImage(val).then(loaded => {
            img.width = loaded.width;
            img.height = loaded.height;
            img._image = loaded;
            if (img.onload) img.onload();
          }).catch(err => {
            if (img.onerror) img.onerror(err);
          });
        }
      },
      get: function() { return this._src; }
    });
    return img;
  }
};

async function generateStyledQR() {
  const qr = new QRCodeStyling({
    nodeCanvas,
    width: 800,
    height: 800,
    data: 'https://cutkes.com',
    margin: 20,
    qrOptions: {
      errorCorrectionLevel: 'H'
    },
    dotsOptions: {
      type: 'classy-rounded',
      gradient: {
        type: 'linear',
        rotation: 2.35,
        colorStops: [
          { offset: 0, color: '#2BBDC1' },
          { offset: 1, color: '#1A8A8E' }
        ]
      }
    },
    cornersSquareOptions: {
      type: 'extra-rounded',
      color: '#0B1426',
    },
    cornersDotOptions: {
      type: 'dot',
      color: '#2BBDC1',
    },
    backgroundOptions: {
      color: '#FFFFFF'
    }
  });

  const buffer = await qr.getRawData('png');
  if (buffer) {
    fs.writeFileSync('cutkes-qr-styled.png', Buffer.from(buffer));
    console.log('OK: cutkes-qr-styled.png');
  } else {
    console.error('Failed to generate');
  }
}

generateStyledQR().catch(console.error);
