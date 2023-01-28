export interface UserObject {
  about: string;
  avatar: string;
  cohort?: string;
  name: string;
  _id: string;
}

export interface CardObject {
  createdAt: string;
  likes: UserObject[];
  link: string;
  name: string;
  owner: UserObject;
  _id: string;
}

export interface CardInput {
  name: string;
  link: string;
}
