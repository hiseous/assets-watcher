import { __imageAssets } from "../../assets/images";
import type { imageAssetName } from "../../assets/images/ImageAsset";
import ImageAsset from "../../assets/images/ImageAsset";

const HomePage = () => {

    return (
        <div>
            <div className="flex items-center">
                {
                    Object.keys(__imageAssets).map((key, i) => {
                        const name = key as imageAssetName;
                        return (
                            <ImageAsset
                                name={name}
                                className="w-[120px] h-[120px] object-contain bg-black/[.1]"
                            />
                        )
                    })
                }
            </div>
        </div>
    )
};

export default HomePage;