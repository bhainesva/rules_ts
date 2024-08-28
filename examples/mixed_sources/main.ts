import { lib1 } from "./lib/lib1"
import * as js_lib from "../js_lib/index"

const main = () => {
    lib1();
    console.log(js_lib);
}

main();