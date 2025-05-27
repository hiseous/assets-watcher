import { __svgAssetPaths } from ".";
import type { ComponentPrimitiveProps } from "../../utils/types/global";

export type svgAssetPathName = keyof typeof __svgAssetPaths;
type SvgAssetProps = ComponentPrimitiveProps & {
    pathName: svgAssetPathName;
    withMaskWrapper?: boolean;
    maskId?: string;
    style?: React.CSSProperties;
    size?: number;
    viewBox?: string;
    onClick?: () => void;
}
const SvgAsset = (props: SvgAssetProps) => {
    
    return (
        <svg
            onClick={props.onClick}
            style={props.style}
            className={`${props.className || ''}`}
            width={props.size}
            height={props.size}
            viewBox={props.viewBox ?? "0 0 126 195"}
            xmlns="http://www.w3.org/2000/svg"
        >
            {
                props.withMaskWrapper ?
                <mask id={props.maskId} x="0" y="0" width="100%" height="100%">
                    {__svgAssetPaths[props.pathName]}
                </mask> :
                __svgAssetPaths[props.pathName]
            }
        </svg>
        
    )
}

export default SvgAsset;