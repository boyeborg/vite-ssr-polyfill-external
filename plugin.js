const packageName = "nanoid";
const virtualPackageId = `\0vitrual:${packageName}`;

/** @type {() => import("vite").Plugin} */
export default function vitePlugin() {
    return {
        name: "vite-plugin-replace-nanoid",
        enforce: "pre",

        resolveId(source) {
            if (source === packageName) {
                return { id: virtualPackageId };
            }
            return null;
        },

        load(id) {
            if (id === virtualPackageId) {
                return `export const nanoid = () => "REPLACED";`
            }
            return null;
        }
    }
}
