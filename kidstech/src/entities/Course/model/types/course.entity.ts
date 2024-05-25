export type Tag = {
  id: string
  name: string
}

export type Course = {
  name: string,
  id: string,
  image: string,
  bgColor: string,
  tags: Array<Tag>
}
