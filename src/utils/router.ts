import {useRouter} from "vue-router";
import {_isMobile} from "./utils";
const $router = useRouter();
/**
 * router.push vue
 * @param _value to
 */
const toPush = async (_value: string) => {
    // @ts-ignore
    if(_isMobile === "ios"){
        return $router.push(_value);
    }
    // @ts-ignore
    window.location.href = _value;
}

export {
    toPush
}
