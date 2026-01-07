// App.jsx
import { useQuery } from "@tanstack/react-query";

function Users({id}) {
 const { data, isLoading } = useQuery({
    queryKey: ["city", id],
    queryFn: async () => {
      const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
      if (!res.ok) throw new Error("Failed to fetch city");
      const user = await res.json();
      return user.address.city;
    },
  });
  if (isLoading) return <p>Loading...</p>;
  return (
   <span>{data}</span>
  );
}

export default Users;