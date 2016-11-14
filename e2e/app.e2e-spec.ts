import { LoginTestPage } from './app.po';

describe('login-test App', function() {
  let page: LoginTestPage;

  beforeEach(() => {
    page = new LoginTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
