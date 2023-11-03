export interface IPhoto {
    pk: string;
    file: string;
    description: string;
  }
  
export  interface IOwner {
    img: string;
    username: string;
    email: string;
}

//
export interface IClass {
    pk: number;
    title: string;
    subtitle:string;
    place:string;
    address: string;
    price: number;
    start:string;
    end: string;
    owner:IOwner[];
    is_liked:boolean;
    photos: IPhoto[];
}

//
export interface IClassDetail {
    id: number;
    title: string;
    subtitle:string;
    place:string;
    address: string;
    price: number;
    start:string;
    end: string;
    owner:IOwner;
    is_liked:boolean;
    photos: IPhoto[];
    create_at:string;
    update_at:string;
    description:string;
    headcount:number;
}

//
export interface IReview {
    comment: string;
    rating: number;
    user: IOwner;
}

export  interface IUser {
    last_login: string
    date_joined: string
    img: string;
    username: string;
    email: string;
}
