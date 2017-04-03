import { MyredditPage } from './app.po';

describe('myreddit App', () => {
  let page: MyredditPage;

  beforeEach(() => {
    page = new MyredditPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
