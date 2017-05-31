import { OpencogPage } from './app.po';

describe('opencog App', () => {
  let page: OpencogPage;

  beforeEach(() => {
    page = new OpencogPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
