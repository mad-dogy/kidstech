export type TagServer = string

export type CourseServer = {
  name: string,
  id: string,
  image: string,
  bgColor: string,
  tags: Array<TagServer>
}
