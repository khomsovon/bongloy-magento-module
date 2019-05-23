define(
  [
    'uiComponent',
    'Magento_Checkout/js/model/payment/renderer-list',
    'Pmclain_Stripe/js/view/payment/bongloy_validate_form'
  ],
  function (
    Component,
    rendererList
  ) {
    'use strict';
    rendererList.push(
      {
        type: 'pmclain_stripe',
        component: 'Pmclain_Stripe/js/view/payment/method-renderer/pmclain_stripe'
      }
    );
    /** Add view logic here if needed */
    return Component.extend({});
  }
);
