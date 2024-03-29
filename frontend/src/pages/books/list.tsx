import { LIST_BOOKS } from "@/requetes/queries/books.queries";
import { BooksQuery, BooksQueryVariables } from "@/types/graphql";
import { useQuery } from "@apollo/client";

function ListBooks() {
  const { data } = useQuery<BooksQuery, BooksQueryVariables>(LIST_BOOKS, {
    fetchPolicy: "no-cache",
  });

  console.log(data)
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24`}
    >
      <ul className="list-decimal">
        {data?.books.map((b) => (
          <li key={b.id}>{b.title}</li>
        ))}
      </ul>
      <p>toto</p>
    </main>
  );
}

export default ListBooks;