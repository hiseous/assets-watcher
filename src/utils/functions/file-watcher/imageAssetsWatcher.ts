
import { watch } from 'chokidar';
import { removeFromImportFile } from './removeFromImportFile';
import { updateImportFile } from './updateImportFile';

const directoryPath = './src/assets/images'; // where to watch;
const importFilePath = './src/assets/imageNames.ts'; // the file to update the imports;

const watcher = watch(directoryPath, {
    ignored: /(^|[/\\])\../, // ignore dotfiles
    persistent: true,
});

//event listeners
watcher.on('add', (filePath: string) => {
    console.log(`File added: ${filePath}`);
    updateImportFile({
        filePath,
        importFilePath,
        exportVariable: '__imageAssets',
    });
})
.on('unlink', (filePath: string) => {
    console.log(`File removed: ${filePath}`);
    removeFromImportFile({
        filePath,
        importFilePath,
    });
});

console.log(`Watching for file changes in: ${directoryPath}`);