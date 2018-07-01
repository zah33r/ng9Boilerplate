import { AppAgGridModule } from './app-ag-grid.module';

describe('AppAgGridModule', () => {
  let appAgGridModule: AppAgGridModule;

  beforeEach(() => {
    appAgGridModule = new AppAgGridModule();
  });

  it('should create an instance', () => {
    expect(appAgGridModule).toBeTruthy();
  });
});
