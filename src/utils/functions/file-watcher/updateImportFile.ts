import fs from 'fs';
import path from 'path';

type updateImportFileProps = {
    filePath: string;
    importFilePath: string;
    exportVariable: string;
}
export const updateImportFile = (props: updateImportFileProps) => {
    const filePath = props.filePath;
    const importFilePath = props.importFilePath;

    const fileName = path.basename(filePath);
    
    // let fileNameWithoutExt = fileName.split('.').slice(0, -1).join('.').replace(/[\s-]+/g, "").replace(/[^a-zA-Z0-9_]/g, "");
    let imageName = fileName
    .replace(/\..+$/, '') // remove extension
    .replace(/[\s-]+/g, "") // remove all white spaces and hyphens
    .replace(/[^a-zA-Z0-9_]/g, ""); // we are keeping letters, numbers and underscores

    if (/^\d/.test(imageName)) {
        imageName = '_' + imageName;
    }

    const filePathInCode = `./images/${fileName}`;

    //read the current content of the import file
    let importFileContent = '';
    if (fs.existsSync(importFilePath)) {
        importFileContent = fs.readFileSync(importFilePath, 'utf8');
    }

    //check if the image is already in the file
    if (!importFileContent.includes(imageName)) {
        const importStatement = `import ${imageName} from '${filePathInCode}';\n`;

        //find the position where the images object starts (or where the imports end)
        const imagesObjectStartIndex = importFileContent.indexOf(`\nexport const ${props.exportVariable} = {`);

        if (imagesObjectStartIndex !== -1) {
            //split the content into the part before the images object and after
            const beforeImagesObject = importFileContent.slice(0, imagesObjectStartIndex);
            const afterImagesObject = importFileContent.slice(imagesObjectStartIndex);

            //add the import statement just before the images object
            const updatedContent = beforeImagesObject + importStatement + afterImagesObject;

            //insert the new key-value pair for the image in the images object
            const closingBracketIndex = updatedContent.lastIndexOf('};');
            if (closingBracketIndex !== -1) {
                const finalContent = (
                    updatedContent.slice(0, closingBracketIndex) +
                    `    ${imageName},\n` +
                    // `  ${imageName}: ${imageName},\n` +
                    updatedContent.slice(closingBracketIndex)
                );

                //write the updated content back to the import file
                fs.writeFileSync(importFilePath, finalContent, 'utf8');
            }
        } else {
            //if the file doesn't have the correct structure, initialize it
            const newContent = `${importStatement}\nexport const ${props.exportVariable} = {\n    ${imageName},\n};\n`;
            fs.writeFileSync(importFilePath, newContent, 'utf8');
        }
    }
}
