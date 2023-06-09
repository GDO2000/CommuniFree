import Head from "next/head";
export default function guidance() {
  return (
    <>
      <Head>
        {/* Preconnect to Google Fonts API */}
        {/* Load the Montserrat font styles */}
        <title>CommuniFree</title>
        <link rel="shortcut icon" href="/favicon.png" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div>
        <h1>Guidelines</h1>
        <p>
          For the safety and wellbeing of other users, please follow these
          guidelines when using this app. Thank you!
        </p>
        <ul>
          <li>
            When creating a post, make sure to list any{" "}
            <a href="https://www.emedicinehealth.com/what_are_the_top_14_food_allergens/article_em.htm">
              common allergens
            </a>
          </li>
          <li>
            If you agree to pick up food, don't send someone else on your behalf
          </li>
          <li>
            Only use personal information (i.e. address, etc.) for picking up/
            dropping off food
          </li>
          <li>
            Don't list food past its expiration date (after best before date is
            okay)
          </li>
          <li>Disclose if food is past its best before date</li>
          <li>
            If possible, capture the product's expiration/ best before date in
            the pictures
          </li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </>
  );
}
