import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { from, fromEvent, Observable, of } from "rxjs";
import { map, switchMap } from "rxjs/operators";

import { AssetManifest, AssetManifestScripts } from "../models/asset-manifest";
import { MicrofrontendConfig } from "../models/microfrontend-config";

@Injectable({
  providedIn: "root",
})
export class MicrofrontendLoaderService {
  private loadedMicrofrontends: {
    [name: string]: { loaded: boolean; config: MicrofrontendConfig };
  } = {};
  constructor(private http: HttpClient) {}

  load(config: MicrofrontendConfig): Observable<boolean> {
    if (this.loadedMicrofrontends[config.name]?.loaded) return of(true);
    return this.http
      .get<AssetManifest>(`/mf/${config.name}/assets-manifest.json`)
      .pipe(
        switchMap((manifest: AssetManifest) => {
          return from(Object.values(AssetManifestScripts)).pipe(
            switchMap((scriptName: AssetManifestScripts) => {
              const script = document.createElement("script");
              script.src = `/mf/${config.name}/${manifest[scriptName]}`;
              document.head.appendChild(script);
              return fromEvent(script, "load").pipe(
                map(() => {
                  this.loadedMicrofrontends[config.name] = {
                    loaded: true,
                    config,
                  };
                  return true;
                })
              );
            })
          );
        })
      );
  }
}
