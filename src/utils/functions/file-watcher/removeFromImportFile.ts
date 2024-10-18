import fs from 'fs';
import path from 'path';

type removeFromImportFileProps = {
    filePath: string;
    importFilePath: string;
}
export const removeFromImportFile = (props: removeFromImportFileProps) => {
    const filePath = props.filePath;
    const importFilePath = props.importFilePath;

    const fileName = path.basename(filePath);
    const imageName = fileName.replace(/\..+$/, '');

    //read the current content of the import file
    const importFileContent = fs.readFileSync(importFilePath, 'utf8');

    //remove the image key-value pair from the images object
    const updatedContent = importFileContent.replace(
        new RegExp(`  ${imageName}: '.+?',\\n`, 'g'),
        ''
    );

    //write the updated content back to the import file
    fs.writeFileSync(importFilePath, updatedContent, 'utf8');
}