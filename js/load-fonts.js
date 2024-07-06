if ('fonts' in document) {
   Promise.all([
      document.fonts.load('400 1em Poppins'),
      document.fonts.load('italic 700 1em Poppins'),
      document.fonts.load('italic 800 1em Poppins')
   ]).then(_ => {
      document.documentElement.classList.add('fonts-loaded')
   })
}