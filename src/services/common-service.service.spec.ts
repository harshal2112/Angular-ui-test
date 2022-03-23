import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CommonService } from '../services/common-service.service';

describe('CommonServiceService', () => {
  let service: CommonService;
  let httpMock: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        CommonService
      ],
    });
  });
  afterEach(() => {
    httpMock.verify();
  });
  afterAll (() => {
    httpMock.verify();
  });
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should be created', () => {
    expect(httpMock).toBeTruthy();
  });
});
