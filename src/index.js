import 'bootstrap';
import * as bootstrap from 'bootstrap';

const importAllFiles = resolve => resolve.keys().forEach(resolve);

importAllFiles(require.context('../src/', true, /\.js$|\.scss$/));