import { When } from 'cucumber';

When(/^I import the (.+) file$/, function(file) {
  const dialog = this.ui.createDialog;
  dialog.waitForVisible();
  dialog.setFileToImport(file);
  dialog.selectedCSVToImport.waitForVisible().should.be.true;
  dialog.importCSVButton.click();
  dialog.importSuccess.waitForVisible();
  dialog.importError.isVisible().should.be.false;
  dialog.importCloseButton.waitForVisible();
  dialog.importCloseButton.click();
});
