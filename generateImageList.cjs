const fs = require('fs')
const path = require('path')

const imagesDir = path.join(__dirname, 'public', 'imgs')
const outputFilePath = path.join(__dirname, 'src', 'assets', 'imageList.json')

fs.readdir(imagesDir, (err, files) => {
  if (err) {
    console.error('Error reading images directory:', err)
    return
  }

  const imageFiles = files.filter((file) => /\.(jpg|jpeg|png|gif|svg)$/.test(file))
  const imagePaths = imageFiles.map((file) => `./imgs/${file}`)

  fs.writeFile(outputFilePath, JSON.stringify(imagePaths, null, 2), (err) => {
    if (err) {
      console.error('Error writing image list file:', err)
    } else {
      console.log('Image list generated successfully.')
    }
  })
})
