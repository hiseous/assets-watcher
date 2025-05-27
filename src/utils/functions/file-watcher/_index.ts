import { watchAssets } from "./watcher";

const watchAllAssets = () => {
    watchAssets({//images;
        dirPath: `./src/assets/images/items`,
        importFilePath: `./src/assets/images/index.ts`,
        preDir: `./items`,
        exportVarName: `__imageAssets`,
        exculdeExtensions: ['crdownload'], //just in case the file is being downloaded, esp on Chrome;
    });
    // watchAssets({//svg
    //     dirPath: `./src/assets/svgs/items`,
    //     importFilePath: `./src/assets/svgs/index.ts`,
    //     preDir: `./items`,
    //     exportVarName: `__svgAssets`,
    //     exculdeExtensions: ['crdownload'], //just in case the file is being downloaded, esp on Chrome;
    // });
};

watchAllAssets();