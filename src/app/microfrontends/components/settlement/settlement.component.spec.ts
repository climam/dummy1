import { Component, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { of } from "rxjs";
import { MicrofrontendLoaderService } from "../../services/microfrontend-loader.service";

import { SettlementComponent } from "./settlement.component";

describe("SettlementComponent", () => {
  let component: SettlementComponent;
  let fixture: ComponentFixture<SettlementComponent>;
  const MicrofrontendLoaderServiceMock = {
    load: jest.fn(),
  };

  @Component({
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: "mf-settlement",
    template: "<p>Mock Settlement Component</p>",
  })
  class MockSettlementComponent {}

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SettlementComponent, MockSettlementComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        [
          {
            provide: MicrofrontendLoaderService,
            useValue: MicrofrontendLoaderServiceMock,
          },
        ],
      ],
    }).compileComponents();
    MicrofrontendLoaderServiceMock.load.mockReturnValue(of(true));
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SettlementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
