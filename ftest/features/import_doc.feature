Feature: Import and Create Documents

    I can import and create a Document

  Background:
    Given user "John" exists in group "members"
    And I login as "John"
    And I have a Workspace document
    And I have permission ReadWrite for this document
    And I browse to the document

  Scenario: Import a Document without adding properties
    When I click the Create Document button
    Then I go to the import tab
    And I can see the bulkCreation import field
    And I add the sample.png to the import field
    And I click the Create button to finish the import
    When I see the Picture page
    Then I can see Picture metadata with the following properties:
      | name         | value      |
      | title        | sample.png |
    And I can see the Picture document inline nuxeo-image-viewer previewer
    And I can see the Picture formats panel
