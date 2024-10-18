import { __imageAssets } from "../assets/imageNames";
import { componentPrimitiveProps } from "../utils/types/global";

export type imageAssetName = keyof typeof __imageAssets;
type imageAssetProps = componentPrimitiveProps & {
    name: imageAssetName;
}
const ImageAsset = (props: imageAssetProps) => {

    return (
        <img
            src={__imageAssets[props.name]}
            className={props.className}
        />
    );
}

export default ImageAsset;