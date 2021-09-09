export enum AssetManifestScripts {
  Main = "main.js",
  Runtime = "runtime.js",
  Polyfills = "polyfills.js",
  Vendor = "vendor.js",
}
export type AssetManifest = {
  [key in AssetManifestScripts]?: string;
};
