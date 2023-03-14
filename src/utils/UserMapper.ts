import IUser from "../models/IUser";

export default function UserMapper(user: IUser) {
  return {
    id: user._id.toString(),
    name: user.name,
    about: user.about,
    linkedin: user.linkedin,
    github: user.github,
    createdAt: user.createdAt,
  };
}
