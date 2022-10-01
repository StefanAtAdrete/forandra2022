/**
 * @file
 * test_stable behaviors.
 */

(function ($, Drupal) {

  'use strict';

  /**
   * Behavior description.
   */
  Drupal.behaviors.testStable = {
    attach: function (context, settings) {

      console.log('It works!');

    }
  };

} (jQuery, Drupal));
