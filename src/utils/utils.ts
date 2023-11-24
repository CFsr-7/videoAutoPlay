/**
 * ios || pc || all
 */
const _isMobile = () => {
    // @ts-ignore
    return navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i).toString();
}

export {
    _isMobile
}
