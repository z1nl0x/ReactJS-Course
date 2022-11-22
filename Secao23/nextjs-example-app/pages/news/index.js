// our-domain.com/news
import Link from "next/link";

const NewsPage = () => {
  return (
    <>
      <h1>News Page</h1>
      <ul>
        <li>
          <Link href="/news/123">News page detail</Link>
        </li>
        <li>Something Else</li>
      </ul>
    </>
  );
};

export default NewsPage;
