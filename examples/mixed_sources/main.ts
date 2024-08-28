import { lib1 } from "./lib/lib1"
import { lib2 } from "./lib/lib2"
import * as js_lib from "../js_lib/index"

const main = () => {
    lib1();
    lib2();
    console.log(js_lib);
}

main();