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
    When I click the Create button to finish the import
    Then I see the Picture page
    And I can see Picture metadata with the following properties:
      | name         | value      |
      | title        | sample.png |
    And I can see the Picture document inline nuxeo-image-viewer previewer
    And I can see the Picture formats panel

  Scenario: Import 6 documents without adding properties
    When I click the Create Document button
    Then I go to the import tab
    And I can see the bulkCreation import field
    And I add the following documents to the import field:
      | value      |
      | sample.png |
      | sample.mp3 |
      | sample.mp4 |
      | sample.pdf |
      | sample.txt |
      | sample.odt |
    When I click the Create button to finish the import
    Then I can see 6 documents
    When I navigate to "sample.mp4" child
    Then I see the Video page
    And I can see Video metadata with the following properties:
      | name         | value      |
      | title        | sample.mp4 |
    And I can see the Video document inline nuxeo-video-viewer previewer
    And I can see the Video conversions panel
