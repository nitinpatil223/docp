export class Quotes {

  shareCount: number;
  likeCount: number;
  viewCount: number;
  topics: Array<any>[];
  auther: Auther
  quote: string;
  id:string;
  url:string;
}

export class Auther {

  died: string;
  born: string;
  profession: string;
  intro: string;
  name: string;
  id: string;
}

