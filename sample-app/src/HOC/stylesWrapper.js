import commonStyles from './../styles/commonStyles';


const translateProps = (props) => {
    let _styles = {...commonStyles.default}
    if(props.disable){
        _styles = {..._styles, ...commonStyles.disable};  
    }
    else if(props.beautiful){
        _styles={..._styles,...commonStyles.beautiful};
    }
    const newProps = {...props,styles:_styles }
    return newProps;
} 


export default (WrappedComponent) => {
    return function wrappedRender(args) {
        return WrappedComponent(translateProps(args));
    }
}