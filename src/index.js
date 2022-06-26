const importAllFiles = resolve => resolve.keys().forEach(resolve);

importAllFiles(require.context('../src/', true, /\.js$|\.scss$/));