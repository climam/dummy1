import { TestBed } from "@angular/core/testing";
import {
  HttpClientTestingModule,
  HttpTestingController,
} from "@angular/common/http/testing";
import * as rxjs from "rxjs";
import { MicrofrontendLoaderService } from "./microfrontend-loader.service";
import { take } from "rxjs/operators";

describe("MicrofrontendLoaderService", () => {
  let service: MicrofrontendLoaderService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(MicrofrontendLoaderService);
    httpTestingController = TestBed.inject(HttpTestingController);
    jest.spyOn(rxjs, "fromEvent").mockReturnValue(rxjs.of(true));
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });

  it("loads a new microfrontend", (done) => {
    service
      .load({ name: "settlement" })
      .pipe(take(1))
      .subscribe((result) => {
        expect(result).toBeTruthy();
        done();
      });
    const req = httpTestingController.expectOne(
      "/mf/settlement/assets-manifest.json"
    );
    req.flush({ "main.js": "test" });
  });

  it("loads an existing microfrontend", (done) => {
    service
      .load({ name: "settlement" })
      .pipe(take(1))
      .subscribe((result) => {
        expect(result).toBeTruthy();
        service
          .load({ name: "settlement" })
          .pipe(take(1))
          .subscribe((result) => {
            expect(result).toBeTruthy();
            done();
          });
      });
    const req = httpTestingController.expectOne(
      "/mf/settlement/assets-manifest.json"
    );
    req.flush({ "main.js": "test" });
  });
});
