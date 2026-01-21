import { User } from "@/app/types/user";

interface UserCardProp {
    user: User;
}

export default function UserCard({user}: UserCardProp) {
   return (
    <div className="bg-white text-black p-4 rounded-lg shadow-md flex flex-col gap-1 border-l-4 border-blue-500">
      <h3 className="text-xl font-bold">
        {user.firstName} {user.lastName}
      </h3>
      <span className="text-sm text-gray-500 bg-gray-100 w-fit px-2 py-1 rounded">
        {user.role}
      </span>
    </div>
  );
}