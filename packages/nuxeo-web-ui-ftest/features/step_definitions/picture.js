import { Then } from 'cucumber';

Then(/^I can see the (.+) formats panel$/, function(docType) {
  const page = this.ui.browser.documentPage(docType);
  page.waitForVisible();
  page.el.element('div.additional').waitForVisible('nuxeo-picture-formats').should.be.true;
});
