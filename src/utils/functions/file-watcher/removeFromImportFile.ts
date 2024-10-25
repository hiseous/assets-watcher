import fs from "fs";
import path from "path";

type removeFromImportFileProps = {
  filePath: string;
  importFilePath: string;
};
export const removeFromImportFile = (props: removeFromImportFileProps) => {
  const filePath = props.filePath;
  const importFilePath = props.importFilePath;

  const fileName = path.basename(filePath);

  let imageName = fileName
    .replace(/\..+$/, "") // remove extension
    .replace(/[\s-]+/g, "") // remove all white spaces and hyphens
    .replace(/[^a-zA-Z0-9_]/g, ""); // we are keeping letters, numbers and underscores

  if (/^\d/.test(imageName)) {
    imageName = "_" + imageName;
  }

  //read the current content of the import file
  let importFileContent = fs.readFileSync(importFilePath, "utf8");

  // Remove the import statement for specific image
  const importRegex = new RegExp(
    `import\\s+${imageName}\\s+from\\s+'.+?';\\n`,
    "g"
  );
  importFileContent = importFileContent.replace(importRegex, "");

  // Remove image reference in the imageAssets object
  const assetRegex = new RegExp(`\\s*${imageName},?\\n`, "g");
  importFileContent = importFileContent.replace(assetRegex, "");

  //write the updated content back to the import file
  fs.writeFileSync(importFilePath, importFileContent, "utf8");
};
