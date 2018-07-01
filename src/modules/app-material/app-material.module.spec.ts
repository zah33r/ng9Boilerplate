import { AppMaterialModule } from './app-material.module';

describe('AppMaterialModule', () => {
  let appMaterialModule: AppMaterialModule;

  beforeEach(() => {
    appMaterialModule = new AppMaterialModule();
  });

  it('should create an instance', () => {
    expect(appMaterialModule).toBeTruthy();
  });
});
