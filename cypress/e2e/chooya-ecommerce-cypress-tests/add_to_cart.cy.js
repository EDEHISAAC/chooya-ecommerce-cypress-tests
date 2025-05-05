describe('Ecommerce Flow - Chooya Group', () => {
    it('should search, add product to cart, and go to checkout', () => {
      // 1. Visit homepage
      cy.visit('https://chooyagroup.com');
  
      // 2. Search for a product
      cy.get('input[name="q"]').type('laptop{enter}'); // Replace with real selector if different
  
      // 3. Click on the first product in search results
      cy.get('.product-listing .product-item').first().click();
  
      // 4. Add product to cart
      cy.get('#add-to-cart').click(); // Replace with actual ID or selector
  
      // 5. Go to cart page
      cy.get('a[href="/cart"]').click();
  
      // 6. Assert that cart page is loaded and contains the product
      cy.url().should('include', '/cart');
      cy.get('h1').should('contain', 'Shopping Cart'); // Or match product name if needed
    });
  });
  