import React from "react";
import Layout from "../layouts/index";
import MerchantContent from "../templates/merchantContent";

const Merchant = ({ pageContext }) => (
  <Layout>
    <img
      className="adImg"
      src="https://site-assets.afterpay.com/pictures/W1siZiIsIjIwMTkvMTEvMjEvMjMvMzEvNDcvZDc2OWExNzMtMWViOC00NzJkLWE3YTQtNGI2YjE1MjRjMWM5LzExXzEzXzIwMTlfSE9NRVBBR0VfMjIwMHg4MDAgKDIpLmpwZyJdLFsicCIsInRodW1iIiwiMTEyMHg-Il0sWyJwIiwiZW5jb2RlIiwianBlZyIsIi1xdWFsaXR5IDg1Il1d/11%2013%202019%20HOMEPAGE%202200x800%20%282%29.jpeg?sha=bdb1ed78ab893fa3"
    />
    <MerchantContent
      data={pageContext.products}
      title={pageContext.merchantName}
      noDynamic={false}
      subtitle="Filet mignon brisket burgdoggen, porchetta kevin fatback chuck short loin spare ribs chislic leberkas bresaola pork tenderloin sausage. Chuck shankle buffalo pastrami. Tail t-bone shoulder turducken boudin. Fatback ball tip shankle shank pancetta brisket, corned beef ground round porchetta swine beef ribs flank salami."
    />
  </Layout>
);

export default Merchant;
