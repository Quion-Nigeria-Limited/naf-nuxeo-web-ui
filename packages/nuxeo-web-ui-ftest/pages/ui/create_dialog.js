import path from 'path';
import BasePage from '../base';
import DocumentCreate from './browser/document_create';

export default class CreateDialog extends BasePage {
  get documentCreate() {
    return new DocumentCreate('nuxeo-document-create');
  }

  get documentImport() {
    const csvImport = this.el.element('nuxeo-document-import-csv');
    if (csvImport.isVisible()) {
      return csvImport;
    }
    return this.el.element('nuxeo-document-import');
  }

  importTab(name) {
    return this.el.element(`paper-tab[name="${name}"]`);
  }

  documentImportDialog(field) {
    return this.el.element(`#${field}`);
  }

  setFileToImport(file) {
    const field = this.documentImport.element('#dropzone #uploadFiles');
    field.waitForExist();
    return field.chooseFile(path.resolve(fixtures.blobs.get(file)));
  }

  get importButton() {
    return this.el.element('div[name="upload"] paper-button[id="create"]');
  }

  get importCSVButton() {
    return this.el.element('div[name="upload"] paper-button.primary');
  }

  get selectedCSVToImport() {
    return this.el.element('#dropzone div.complete');
  }

  get selectedFileToImport() {
    return this.el.element('div.file-to-import');
  }

  get importCloseButton() {
    return this.el.element('div[name="progress"] paper-button.primary');
  }

  get importError() {
    return this.el.element('div[name="progress"] #list div.item');
  }

  get importSuccess() {
    return this.el.element('#progress div.successful');
  }

  get createButton() {
    return this.el.element('paper-button[id="create"]');
  }
}
