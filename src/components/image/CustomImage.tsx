import type { ComponentPrimitiveProps } from "../../utils/types/global";

type CustomImageProps = ComponentPrimitiveProps & {
    width?: number;
    height?: number;
    src?: string;
    alt?: string;
    style?: React.CSSProperties;
    onClick?: () => void;
}
const CustomImage = (props: CustomImageProps) => {
    return (
        <img
            alt={props.alt ?? ''}
            width={props.width ?? 0}
            height={props.height ?? 0}
            src={props.src ?? ''}
            className={`${props.className || ''}`}
            style={props.style}
            onClick={props.onClick}
        />
    );
};

export default CustomImage;