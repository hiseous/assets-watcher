import { __imageAssets } from ".";
import CustomImage from "../../components/image/CustomImage";
import type { ComponentPrimitiveProps } from "../../utils/types/global";

export type imageAssetName = keyof typeof __imageAssets;
type ImageAssetProps = ComponentPrimitiveProps & {
    name: imageAssetName;
    style?: React.CSSProperties;
    onClick?: () => void;
}
const ImageAsset = (props: ImageAssetProps) => {
    // const imgProps = __imageAssets[props.name];
    
    return (
        <CustomImage
            // width={imgProps.width}
            // height={imgProps.height}
            // src={imgProps.src}
            src={__imageAssets[props.name]}
            onClick={props.onClick}
            className={`${props.className || ''}`}
            alt={props.name}
            style={props.style}
        />
    )
}

export default ImageAsset;