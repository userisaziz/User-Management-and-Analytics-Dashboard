export default function CustomizeVariant(style, props) {
    const sx = style ? style : '';
    const CustomStyle = {
        textAlign: props?.align ? props?.align : '',
        fontSize: props?.size ? props?.size : '',
        color: props?.color ? props?.color : '',

        /* Add custom margin */
        margin: props?.m ? props?.m : '',
        marginTop: props?.mt ? props?.mt : '',
        marginLeft: props?.ml ? props?.ml : '',
        marginRight: props?.mr ? props?.mr : '',

        /* Add custom padding */
        padding: props?.p ? props?.p : '',
        paddingTop: props?.pt ? props?.pt : '',
        paddingLeft: props?.pl ? props?.pl : '',
        paddingRight: props?.pr ? props?.pr : '',
        paddingBottom: props?.pb ? props.pb : '',
    };

    const UpdatedCustomStyle = { ...CustomStyle, ...sx };

    return UpdatedCustomStyle;
}
