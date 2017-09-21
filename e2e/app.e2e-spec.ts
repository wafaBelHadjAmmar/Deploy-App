import { Application1Page } from './app.po';

describe('application1 App', function() {
  let page: Application1Page;

  beforeEach(() => {
    page = new Application1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
